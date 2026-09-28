import { WORK_FLIP_MAX_AGE, WORK_FLIP_PENDING_CLASS, WORK_FLIP_STORAGE_KEY } from './modules/work-flip-state';
import { primeSitePreloader } from './modules/site-preloader-state';

// Loaded as a blocking classic script in <head>, not as a deferred module.
function primePageTransition(): void {
  const root = document.documentElement;
  try {
    if (window.sessionStorage.getItem('site-page-transition') !== 'pending') return;
  } catch {
    return;
  }
  root.classList.add('is-page-transition-pending', 'is-page-transition-boot');
  document.addEventListener('DOMContentLoaded', () => {
    root.classList.remove('is-page-transition-boot');
  }, { once: true });
  window.setTimeout(() => {
    const overlay = document.querySelector<HTMLElement>('[data-page-transition-overlay]');
    if (!overlay || !overlay.style.transform) {
      root.classList.remove('is-page-transition-pending', 'is-page-transition-boot');
    }
  }, 4000);
}

function primeWorkFlip(): void {
  try {
    const raw = window.sessionStorage.getItem(WORK_FLIP_STORAGE_KEY);
    if (!raw) return;
    const payload = JSON.parse(raw);
    if (!payload || !payload.rect || !payload.src || !payload.ts) return;
    if (!(payload.rect.width > 0) || !(payload.rect.height > 0)
      || Date.now() - payload.ts > WORK_FLIP_MAX_AGE
      || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.sessionStorage.removeItem(WORK_FLIP_STORAGE_KEY);
      return;
    }
    document.documentElement.classList.add(WORK_FLIP_PENDING_CLASS);
  } catch {
    // Storage unavailable or malformed: show the page without a transition.
  }
}

primePageTransition();
primeWorkFlip();
primeSitePreloader();
