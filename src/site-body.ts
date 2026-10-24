import { createSitePreloader, primeSplinePreloads } from './modules/site-preloader-markup';
import { initHeroSplineSlides } from './modules/spline-slider';

// Loaded synchronously at the end of <body>, before the deferred main bundle.
// This also runs when the once-per-session overlay is skipped, so later pages
// still begin fetching their own Spline scenes as early as possible.
initHeroSplineSlides();
primeSplinePreloads();
createSitePreloader();

if (!document.querySelector('[data-page-transition-overlay], .page-transition-overlay')) {
  const overlay = document.createElement('div');
  overlay.className = 'page-transition-overlay';
  overlay.setAttribute('data-page-transition-overlay', '');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.appendChild(overlay);
}

const transitionOverlay = document.querySelector<HTMLElement>('[data-page-transition-overlay], .page-transition-overlay');
if (transitionOverlay && !transitionOverlay.querySelector('.page-transition-overlay__title')) {
  const title = document.createElement('span');
  title.className = 'page-transition-overlay__title';
  try {
    if (window.sessionStorage.getItem('site-page-transition') === 'pending') {
      title.textContent = window.sessionStorage.getItem('site-page-transition-title') ?? '';
    }
  } catch {
    // Session storage is optional for the incoming title.
  }
  transitionOverlay.appendChild(title);
}
