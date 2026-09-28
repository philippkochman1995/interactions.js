import { gsap } from 'gsap';
import { collectPreloadTasks, untilAborted, waitForCmsAssets, warmAssets } from './site-preloader-assets';
import { PRELOADER_SELECTOR } from './site-preloader-state';
import { prefersReducedMotion } from './utils';

let initialized = false;

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
    gsap.to(track, { yPercent: -50, y: 0, duration: 0.18, ease: 'power2.out', onComplete: () => {
      current.textContent = target;
      gsap.set(track, { yPercent: 0, y: 0 });
    } });
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
  let finishTimer = 0;
  state.cleanup.push(() => {
    controller.abort();
    window.clearTimeout(finishTimer);
    gsap.killTweensOf(overlay.querySelectorAll('.site-preloader__track'));
  });
  const run = async (): Promise<void> => {
    await waitForCmsAssets(controller.signal);
    if (!state.active) return;
    const tasks = collectPreloadTasks();
    const critical = tasks.filter((task) => task.priority === 'critical');
    let complete = 0;
    await Promise.all(critical.map(async (task) => {
      await untilAborted(Promise.resolve().then(() => task.load(controller.signal)), controller.signal);
      complete++;
      if (state.active) setPreloaderProgress(overlay, complete / critical.length * 100);
    }));
    if (!state.active) return;
    setPreloaderProgress(overlay, 100);
    const minimumRemaining = Math.max(0, 500 - (Date.now() - state.startedAt));
    finishTimer = window.setTimeout(() => {
      state.release();
      void warmAssets(tasks);
    }, Math.max(minimumRemaining, prefersReducedMotion() ? 0 : 180));
  };
  const start = (): void => { void run().catch(state.release); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
}
