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

function afterPageUncovered(callback: () => void): void {
  const root = document.documentElement;
  const covered = (): boolean => {
    if (root.classList.contains('is-site-preloading') || root.classList.contains('is-site-preloader-exiting')) return true;
    const transitioning = root.classList.contains('is-page-transition-pending') ||
      root.classList.contains('is-page-transition-entering');
    return transitioning && !document.querySelector('.page-transition-overlay.is-uncovering');
  };
  if (!covered()) { callback(); return; }
  const observer = new MutationObserver(() => {
    if (covered()) return;
    observer.disconnect();
    callback();
  });
  observer.observe(root, { attributes: true, attributeFilter: ['class'], subtree: true });
  window.addEventListener('pagehide', () => observer.disconnect(), { once: true });
}

function primePageHero(): void {
  const biography = /^\/biografie\/?$/i.test(window.location.pathname);
  const atelier = /^\/atelier\/?$/i.test(window.location.pathname);
  const edition = /^\/editionen\/?$/i.test(window.location.pathname);
  if (!biography && !atelier && !edition) return;
  const selector = biography
    ? '.bio_hero_section > img.bio_hero_img'
    : atelier ? '.atelier_hero_section > img.atelier_hero_img'
      : '.editionen_item:first-child .editionen_slide.is-active img.editionen_img';
  const revealClass = atelier ? 'in' : 'is-site-image-in';
  const root = document.documentElement;
  const attach = (image: HTMLImageElement): void => {
    const target = edition ? image.closest<HTMLElement>('.editionen_track') : image;
    if (!target) return;
    if (edition) {
      target.setAttribute('data-site-image-reveal', 'edition');
      const width = Math.ceil(target.getBoundingClientRect().width);
      if (width) image.sizes = `${width}px`;
    }
    image.loading = 'eager';
    image.setAttribute('fetchpriority', 'high');
    const reveal = (): void => {
      const start = (): void => {
        // Let the 107.5% start scale paint once, including on a fast direct load.
        void getComputedStyle(image).transform;
        if (edition) void getComputedStyle(target).opacity;
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => target.classList.add(revealClass));
        });
      };
      afterPageUncovered(start);
    };
    if (image.complete && image.naturalWidth) reveal();
    else image.addEventListener('load', reveal, { once: true });
  };
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

function primeEditionIntro(): void {
  if (!/^\/editionen\/?$/i.test(window.location.pathname)) return;
  const root = document.documentElement;
  const start = (): void => {
    afterPageUncovered(() => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => root.classList.add('is-edition-intro-in'));
      });
    });
  };
  if (document.querySelector('.editionen_intro')) { start(); return; }
  const observer = new MutationObserver(() => {
    if (!document.querySelector('.editionen_intro')) return;
    observer.disconnect();
    start();
  });
  observer.observe(root, { childList: true, subtree: true });
}

primePageTransition();
optimizeNewsImageSizes();
pruneMobileHeroSpline();
primeSitePreloader();
primePageHero();
primeEditionIntro();
