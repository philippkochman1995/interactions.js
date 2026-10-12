import { primeSitePreloader } from './modules/site-preloader-state';
import { pruneMobileHeroSpline } from './modules/mobile-hero-spline';

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

primePageTransition();
pruneMobileHeroSpline();
primeSitePreloader();
