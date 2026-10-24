import { gsap } from 'gsap';
import { collectPreloadTasks, untilAborted, waitForCmsAssets, warmAssets } from './site-preloader-assets';
import { PRELOADER_EXIT_CLASS, PRELOADER_MINIMUM, PRELOADER_SELECTOR } from './site-preloader-state';
import { prefersReducedMotion } from './utils';

const initializedStates = new WeakSet<object>();
const PROGRESS_MS = 6800;
const HOLD_AFTER_LOAD_MS = 600;
const FADE_BEFORE_CURTAIN_MS = 500;
const CURTAIN_MS = 1300;

function easeInOutCubic(t: number): number {
  return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function waitForPaint(signal: AbortSignal): Promise<void> {
  return new Promise((resolve) => {
    let firstFrame = 0;
    let secondFrame = 0;
    let settled = false;
    const fallback = window.setTimeout(finish, 160);
    function finish(): void {
      if (settled) return;
      settled = true;
      window.clearTimeout(fallback);
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      signal.removeEventListener('abort', finish);
      resolve();
    }
    if (signal.aborted) return finish();
    signal.addEventListener('abort', finish, { once: true });
    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(finish);
    });
  });
}

export function setPreloaderProgress(overlay: HTMLElement, value: number): void {
  if (!Number.isFinite(value)) return;
  const progress = Math.max(Number(overlay.getAttribute('aria-valuenow')) || 0, Math.min(100, Math.max(0, Math.round(value))));
  overlay.setAttribute('aria-valuenow', String(progress));
  window.__sitePreloader?.setSignatureIndex?.(Math.min(6, Math.floor(progress / 100 * 7)));
  const digits = String(progress).padStart(3, '0');
  overlay.querySelectorAll<HTMLElement>('.site-preloader__digit').forEach((digit, index) => {
    const track = digit.firstElementChild as HTMLElement;
    const current = track.children[0] as HTMLElement;
    const next = track.children[1] as HTMLElement;
    const target = digits[index];
    const wasHidden = digit.hidden;
    digit.hidden = index < 3 - String(progress).length;
    if (track.dataset.value === target) return;
    // Retarget to the newest number immediately; never queue dozens of rolls.
    gsap.killTweensOf(track);
    current.textContent = track.dataset.value ?? current.textContent;
    track.dataset.value = target;
    next.textContent = target;
    gsap.set(track, { yPercent: 0, y: 0 });
    if (prefersReducedMotion() || wasHidden || digit.hidden) {
      current.textContent = target;
      return;
    }
    gsap.to(track, { yPercent: -50, y: 0, duration: 0.065, ease: 'power2.out', onComplete: () => {
      current.textContent = target;
      gsap.set(track, { yPercent: 0, y: 0 });
    } });
  });
}

interface ProgressController {
  start: () => void;
  complete: Promise<void>;
  stop: () => void;
}

function createProgressController(overlay: HTMLElement): ProgressController {
  const reduced = prefersReducedMotion();
  let stopped = false;
  let started = false;
  let frame = 0;
  let startedAt = 0;
  let resolveComplete!: () => void;
  const completed = new Promise<void>((resolve) => { resolveComplete = resolve; });
  const tick = (now: number): void => {
    if (stopped) return;
    const t = Math.min(1, (now - startedAt) / PROGRESS_MS);
    const p = .6 * t + .4 * easeInOutCubic(t);
    setPreloaderProgress(overlay, p * 100);
    if (t === 1) resolveComplete();
    else frame = window.requestAnimationFrame(tick);
  };

  return {
    start: () => {
      if (started || stopped) return;
      started = true;
      startedAt = performance.now();
      if (reduced) { setPreloaderProgress(overlay, 100); resolveComplete(); }
      else frame = window.requestAnimationFrame(tick);
    },
    complete: completed,
    stop: () => {
      stopped = true;
      window.cancelAnimationFrame(frame);
    },
  };
}

function wait(duration: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve) => {
    const finish = (): void => {
      window.clearTimeout(timer);
      signal.removeEventListener('abort', finish);
      resolve();
    };
    const timer = window.setTimeout(finish, Math.max(0, duration));
    signal.addEventListener('abort', finish, { once: true });
    if (signal.aborted) finish();
  });
}

function waitForWindowLoad(signal: AbortSignal): Promise<void> {
  if (document.readyState === 'complete' || signal.aborted) return Promise.resolve();
  return new Promise((resolve) => {
    const finish = (): void => {
      window.removeEventListener('load', finish);
      signal.removeEventListener('abort', finish);
      resolve();
    };
    window.addEventListener('load', finish, { once: true });
    signal.addEventListener('abort', finish, { once: true });
  });
}

async function animatePreloaderExit(overlay: HTMLElement, signal: AbortSignal): Promise<void> {
  if (signal.aborted) return;
  document.documentElement.classList.add(PRELOADER_EXIT_CLASS);
  overlay.classList.add('is-fading');
  await wait(prefersReducedMotion() ? 0 : FADE_BEFORE_CURTAIN_MS, signal);
  if (signal.aborted) return;
  overlay.classList.add('is-curtain');
  await wait(prefersReducedMotion() ? 0 : CURTAIN_MS, signal);
}

export function initSitePreloader(): void {
  const state = window.__sitePreloader;
  if (!state?.active) return;
  if (initializedStates.has(state)) return;
  initializedStates.add(state);
  const overlay = document.querySelector<HTMLElement>(PRELOADER_SELECTOR);
  if (!overlay) { state.release(); return; }
  const controller = new AbortController();
  const progress = createProgressController(overlay);
  state.allowExit?.();
  void (state.introReady ?? Promise.resolve()).then(() => { if (state.active) progress.start(); });
  state.cleanup.push(() => {
    controller.abort();
    progress.stop();
    const tracks = overlay.querySelectorAll('.site-preloader__track');
    if (tracks.length) gsap.killTweensOf(tracks);
  });
  const run = async (): Promise<void> => {
    await waitForCmsAssets(controller.signal);
    if (!state.active) return;
    const tasks = collectPreloadTasks();
    const critical = tasks.filter((task) => task.priority === 'critical');
    await Promise.all(critical.map(async (task) => {
      await untilAborted(Promise.resolve().then(() => task.load(controller.signal)), controller.signal);
    }));
    if (!state.active) return;
    // Webflow dispatches w-spline-load when Application.load() resolves. Give
    // every ready canvas two frames to paint before uncovering the document.
    await waitForPaint(controller.signal);
    if (!state.active) return;
    await state.introReady;
    if (!state.active) return;
    await Promise.all([progress.complete, waitForWindowLoad(controller.signal)]);
    if (!state.active) return;
    await wait(prefersReducedMotion() ? 0 : Math.max(0, PRELOADER_MINIMUM - (Date.now() - state.startedAt)), controller.signal);
    if (!state.active) return;
    await wait(prefersReducedMotion() ? 0 : HOLD_AFTER_LOAD_MS, controller.signal);
    if (!state.active) return;
    await animatePreloaderExit(overlay, controller.signal);
    if (!state.active) return;
    state.release();
    void warmAssets(tasks);
  };
  const start = (): void => { void run().catch(state.release); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
}
