import { gsap } from 'gsap';
import { collectPreloadTasks, untilAborted, waitForCmsAssets, warmAssets } from './site-preloader-assets';
import { PRELOADER_EXIT_CLASS, PRELOADER_MINIMUM, PRELOADER_SELECTOR } from './site-preloader-state';
import { prefersReducedMotion } from './utils';

let initialized = false;

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
  const progress = Math.max(Number(overlay.getAttribute('aria-valuenow')) || 0, Math.min(100, Math.max(0, Math.floor(value))));
  overlay.setAttribute('aria-valuenow', String(progress));
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
  setTasks: (complete: number, total: number) => void;
  complete: () => Promise<void>;
  stop: () => void;
}

function createProgressController(overlay: HTMLElement, startedAt: number): ProgressController {
  const reduced = prefersReducedMotion();
  let taskComplete = 0;
  let taskTotal = 0;
  let visual = 0;
  let shown = 0;
  let ready = false;
  let stopped = false;
  let frame = 0;
  let lastFrame = performance.now();
  let lastRender = 0;
  let resolveComplete!: () => void;
  const completed = new Promise<void>((resolve) => { resolveComplete = resolve; });

  const render = (value: number): void => {
    const next = Math.max(shown, Math.min(100, Math.floor(value)));
    if (next === shown && next !== 100) return;
    shown = next;
    setPreloaderProgress(overlay, shown);
  };
  const tick = (now: number): void => {
    if (stopped) return;
    const delta = Math.min(64, Math.max(0, now - lastFrame));
    lastFrame = now;
    const elapsed = Math.max(0, Date.now() - startedAt);
    // Time provides a continuous estimate while large images/Splines are in
    // flight. Settled tasks can pull the display further ahead, but never to
    // 100: that value is reserved for complete runtime readiness.
    const timeTarget = Math.min(88, 90 * (1 - Math.exp(-elapsed / 1900)));
    const taskTarget = taskTotal ? Math.min(90, 8 + 82 * taskComplete / taskTotal) : 0;
    const target = ready ? 100 : Math.max(timeTarget, taskTarget);
    const smoothing = 1 - Math.exp(-delta * (ready ? 0.014 : 0.0042));
    const easedStep = (target - visual) * smoothing;
    // Cap the normal counting speed so a batch of cached assets cannot make
    // the first painted value jump straight from 0 to 60 or 80.
    const maximumStep = (ready ? 180 : 30) * delta / 1000;
    visual += Math.min(easedStep, maximumStep);
    if (ready && visual >= 99.4) visual = 100;
    if (now - lastRender >= 70 || visual === 100) {
      render(visual);
      lastRender = now;
    }
    if (visual === 100) resolveComplete();
    else frame = window.requestAnimationFrame(tick);
  };

  if (!reduced) frame = window.requestAnimationFrame(tick);
  return {
    setTasks: (complete, total) => {
      taskComplete = complete;
      taskTotal = total;
      if (reduced) render(total ? 8 + 82 * complete / total : 0);
    },
    complete: () => {
      ready = true;
      if (reduced) { visual = 100; render(100); resolveComplete(); }
      return completed;
    },
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

function animatePreloaderExit(overlay: HTMLElement, signal: AbortSignal): Promise<void> {
  if (prefersReducedMotion() || signal.aborted) return Promise.resolve();
  document.documentElement.classList.add(PRELOADER_EXIT_CLASS);
  const contents = overlay.querySelectorAll('.site-preloader__progress, .site-preloader__name, .site-preloader__signature');
  return new Promise((resolve) => {
    let settled = false;
    const finish = (): void => {
      if (settled) return;
      settled = true;
      signal.removeEventListener('abort', finish);
      resolve();
    };
    const timeline = gsap.timeline({ onComplete: finish });
    timeline
      .to({}, { duration: 0.12 })
      .to(contents, { autoAlpha: 0, duration: 0.22, ease: 'power2.out' })
      .to(overlay, { yPercent: -100, duration: 0.72, ease: 'power3.inOut' });
    signal.addEventListener('abort', () => { timeline.kill(); finish(); }, { once: true });
  });
}

export function initSitePreloader(): void {
  if (initialized) return;
  initialized = true;
  const state = window.__sitePreloader;
  if (!state?.active) return;
  const overlay = document.querySelector<HTMLElement>(PRELOADER_SELECTOR);
  if (!overlay) { state.release(); return; }
  const controller = new AbortController();
  const progress = createProgressController(overlay, state.startedAt);
  state.cleanup.push(() => {
    controller.abort();
    progress.stop();
    gsap.killTweensOf(overlay);
    gsap.killTweensOf(overlay.querySelectorAll('.site-preloader__track, .site-preloader__progress, .site-preloader__name, .site-preloader__signature'));
  });
  const run = async (): Promise<void> => {
    await waitForCmsAssets(controller.signal);
    if (!state.active) return;
    const tasks = collectPreloadTasks();
    const critical = tasks.filter((task) => task.priority === 'critical');
    let complete = 0;
    progress.setTasks(0, critical.length);
    await Promise.all(critical.map(async (task) => {
      await untilAborted(Promise.resolve().then(() => task.load(controller.signal)), controller.signal);
      complete++;
      if (state.active) progress.setTasks(complete, critical.length);
    }));
    if (!state.active) return;
    // Webflow dispatches w-spline-load when Application.load() resolves. Give
    // every ready canvas two frames to paint before uncovering the document.
    await waitForPaint(controller.signal);
    if (!state.active) return;
    const minimumRemaining = Math.max(0, PRELOADER_MINIMUM - (Date.now() - state.startedAt));
    await wait(minimumRemaining, controller.signal);
    if (!state.active) return;
    await progress.complete();
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
