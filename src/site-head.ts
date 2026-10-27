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
  // Cover the first paint while the new body/footer is parsed.
  root.classList.add('is-page-transition-pending', 'is-page-transition-boot');
  document.addEventListener('DOMContentLoaded', () => {
    root.classList.remove('is-page-transition-boot');
  }, { once: true });
  // Emergency release if the deferred bundle never starts.
  window.setTimeout(() => {
    if (!root.classList.contains('is-page-transition-pending')) return;
    document.querySelector<HTMLElement>('[data-page-transition-overlay]')?.remove();
    root.classList.remove('is-page-transition-pending', 'is-page-transition-boot');
    try { window.sessionStorage.removeItem('pt'); } catch { /* Storage is optional. */ }
  }, 6000);
}

function primeBiographyHero(): void {
  if (!/^\/biografie\/?$/i.test(window.location.pathname)) return;
  const root = document.documentElement;
  const attach = (image: HTMLImageElement): void => {
    image.loading = 'eager';
    image.setAttribute('fetchpriority', 'high');
    const reveal = (): void => {
      const covered = (): boolean => {
        if (root.classList.contains('is-site-preloading') || root.classList.contains('is-site-preloader-exiting')) return true;
        const transitioning = root.classList.contains('is-page-transition-pending') ||
          root.classList.contains('is-page-transition-entering');
        return transitioning && !document.querySelector('.page-transition-overlay.is-uncovering');
      };
      const start = (): void => {
        // Commit the 107.5% start scale before the class changes on the next frame.
        void getComputedStyle(image).transform;
        window.requestAnimationFrame(() => image.classList.add('is-site-image-in'));
      };
      if (!covered()) { start(); return; }
      const observer = new MutationObserver(() => {
        if (covered()) return;
        observer.disconnect();
        start();
      });
      observer.observe(root, { attributes: true, attributeFilter: ['class'], subtree: true });
      window.addEventListener('pagehide', () => observer.disconnect(), { once: true });
    };
    if (image.complete && image.naturalWidth) reveal();
    else image.addEventListener('load', reveal, { once: true });
  };
  const selector = '.bio_hero_section > img.bio_hero_img';
  const image = document.querySelector<HTMLImageElement>(selector);
  if (image) { attach(image); return; }
  const observer = new MutationObserver(() => {
    const image = document.querySelector<HTMLImageElement>(selector);
    if (!image) return;
    observer.disconnect();
    attach(image);
  });
  observer.observe(root, { childList: true, subtree: true });
}

primePageTransition();
optimizeNewsImageSizes();
pruneMobileHeroSpline();
primeSitePreloader();
primeBiographyHero();
