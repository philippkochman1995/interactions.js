import { createSitePreloader, primeSplinePreloads } from './modules/site-preloader-markup';
import { initHeroSplineSlides } from './modules/spline-slider';

// Loaded synchronously at the end of <body>, before the deferred main bundle.
// Start the incoming fade here so it does not wait for that bundle to download.
if (!document.querySelector('[data-page-transition-overlay], .page-transition-overlay')) {
  const overlay = document.createElement('div');
  overlay.className = 'curtain page-transition-overlay';
  overlay.setAttribute('data-page-transition-overlay', '');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.appendChild(overlay);
}

const transitionOverlay = document.querySelector<HTMLElement>('[data-page-transition-overlay], .page-transition-overlay');
transitionOverlay?.classList.add('curtain');
transitionOverlay?.querySelector('.page-transition-overlay__title')?.remove();

const root = document.documentElement;
if (transitionOverlay && root.classList.contains('is-page-transition-pending')) {
  transitionOverlay.setAttribute('data-page-transition-managed', '');
  transitionOverlay.setAttribute('aria-hidden', 'false');
  transitionOverlay.classList.add('is-covered');
  root.classList.add('is-page-transition-entering');
  root.classList.remove('is-page-transition-boot');
  window.requestAnimationFrame(() => {
    transitionOverlay.classList.add('is-uncovering');
    window.setTimeout(() => {
      transitionOverlay.classList.add('is-resetting');
      transitionOverlay.classList.remove('is-covered', 'is-uncovering');
      transitionOverlay.setAttribute('aria-hidden', 'true');
      root.classList.remove('is-page-transition-pending', 'is-page-transition-entering');
      try { window.sessionStorage.removeItem('pt'); } catch { /* Storage is optional. */ }
      const main = document.querySelector<HTMLElement>('main, [role="main"]');
      if (main) {
        if (!main.hasAttribute('tabindex')) {
          main.setAttribute('tabindex', '-1');
          main.addEventListener('blur', () => main.removeAttribute('tabindex'), { once: true });
        }
        main.focus({ preventScroll: true });
      }
      transitionOverlay.removeAttribute('data-page-transition-managed');
      window.requestAnimationFrame(() => transitionOverlay.classList.remove('is-resetting'));
    }, 145);
  });
}

// This also runs when the once-per-session overlay is skipped, so later pages
// still begin fetching their own Spline scenes as early as possible.
initHeroSplineSlides();
primeSplinePreloads();
createSitePreloader();
