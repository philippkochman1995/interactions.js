import { primeSitePreloader } from './modules/site-preloader-state';
import { pruneMobileHeroSpline } from './modules/mobile-hero-spline';
import { optimizeNewsImageSizes } from './modules/news-image-sizes';

// Loaded as a blocking classic script in <head>, not as a deferred module.
function primePageTransition(): void {
  const root = document.documentElement;
  try {
    if (!window.sessionStorage.getItem('pt')) return;
  } catch {
    return;
  }
  root.classList.add('is-page-transition-pending', 'is-page-transition-boot');
  document.addEventListener('DOMContentLoaded', () => {
    root.classList.remove('is-page-transition-boot');
  }, { once: true });
  // Emergency release even when the deferred bundle or font loading fails.
  window.setTimeout(() => {
    if (!root.classList.contains('is-page-transition-pending')) return;
    document.querySelector<HTMLElement>('[data-page-transition-overlay]')?.remove();
    root.classList.remove('is-page-transition-pending', 'is-page-transition-boot');
    try { window.sessionStorage.removeItem('pt'); } catch { /* Storage is optional. */ }
  }, 6000);
}

primePageTransition();
optimizeNewsImageSizes();
pruneMobileHeroSpline();
primeSitePreloader();
