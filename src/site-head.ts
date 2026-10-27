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

function isPageCovered(): boolean {
  const root = document.documentElement;
  if (root.classList.contains('is-site-preloading') || root.classList.contains('is-site-preloader-exiting')) return true;
  const transitioning = root.classList.contains('is-page-transition-pending') ||
    root.classList.contains('is-page-transition-entering');
  return transitioning && !document.querySelector('.page-transition-overlay.is-uncovering');
}

function isIncomingNavigation(): boolean {
  const root = document.documentElement;
  return root.classList.contains('is-page-transition-pending') ||
    root.classList.contains('is-page-transition-entering');
}

function afterPageUncovered(callback: () => void): void {
  const root = document.documentElement;
  if (!isPageCovered()) { callback(); return; }
  const observer = new MutationObserver(() => {
    if (isPageCovered()) return;
    observer.disconnect();
    callback();
  });
  observer.observe(root, { attributes: true, attributeFilter: ['class'], subtree: true });
  window.addEventListener('pagehide', () => observer.disconnect(), { once: true });
}

function afterFirstPaint(callback: () => void): void {
  const painted = (): boolean => performance.getEntriesByType('paint')
    .some((entry) => entry.name === 'first-paint' || entry.name === 'first-contentful-paint');
  if (painted()) { callback(); return; }
  if (!('PerformanceObserver' in window) || !PerformanceObserver.supportedEntryTypes?.includes('paint')) {
    window.requestAnimationFrame(() => window.setTimeout(callback, 0));
    return;
  }
  const observer = new PerformanceObserver(() => {
    if (!painted()) return;
    observer.disconnect();
    callback();
  });
  observer.observe({ type: 'paint', buffered: true });
  window.addEventListener('pagehide', () => observer.disconnect(), { once: true });
}

function primeLeadImage(): void {
  const biography = /^\/biografie\/?$/i.test(window.location.pathname);
  const atelier = /^\/atelier\/?$/i.test(window.location.pathname);
  const edition = /^\/editionen\/?$/i.test(window.location.pathname);
  const news = /^\/news\/?$/i.test(window.location.pathname);
  if (!biography && !atelier && !edition && !news) return;
  const selector = biography
    ? '.bio_hero_section > img.bio_hero_img'
    : atelier ? '.atelier_hero_section > img.atelier_hero_img'
      : edition ? '.editionen_item:first-child .editionen_slide.is-active img.editionen_img'
        : '.news_highlight_section .news_img > img.intro_img';
  const revealClass = atelier ? 'in' : 'is-site-image-in';
  const root = document.documentElement;
  const attach = (image: HTMLImageElement): void => {
    const target = edition ? image.closest<HTMLElement>('.editionen_track')
      : news ? image.closest<HTMLElement>('.news_img') : image;
    if (!target) return;
    if (edition || news) {
      target.setAttribute('data-site-image-reveal', edition ? 'edition' : 'news-highlight');
      const width = Math.ceil(target.getBoundingClientRect().width);
      if (width) image.sizes = `${width}px`;
    }
    const directLoad = (edition || news) && !isIncomingNavigation();
    image.loading = 'eager';
    image.setAttribute('fetchpriority', 'high');
    const reveal = (): void => {
      const start = (): void => {
        // Let the 107.5% start scale paint once, including on a fast direct load.
        void getComputedStyle(image).transform;
        if (edition || news) {
          void getComputedStyle(image).scale;
          void getComputedStyle(target).opacity;
        }
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => target.classList.add(revealClass));
        });
      };
      afterPageUncovered(() => {
        if (directLoad) afterFirstPaint(start);
        else start();
      });
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

function primePageIntro(): void {
  const edition = /^\/editionen\/?$/i.test(window.location.pathname);
  const news = /^\/news\/?$/i.test(window.location.pathname);
  const works = /^\/werk-ueberblick\/?$/i.test(window.location.pathname);
  if (!edition && !news && !works) return;
  const selector = edition ? '.editionen_intro' : news ? '.news_highlight_section' : '.werk_hero_section';
  const revealClass = edition ? 'is-edition-intro-in' : news ? 'is-news-intro-in' : 'is-works-intro-in';
  const root = document.documentElement;
  const start = (): void => {
    const directLoad = !isIncomingNavigation();
    afterPageUncovered(() => {
      const reveal = (): void => {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => root.classList.add(revealClass));
        });
      };
      if (directLoad) afterFirstPaint(reveal);
      else reveal();
    });
  };
  if (document.querySelector(selector)) { start(); return; }
  const observer = new MutationObserver(() => {
    if (!document.querySelector(selector)) return;
    observer.disconnect();
    start();
  });
  observer.observe(root, { childList: true, subtree: true });
}

function primeWorksSplineIntro(): void {
  if (!/^\/werk-ueberblick\/?$/i.test(window.location.pathname)) return;
  const selector = '.werk_hero_slide:first-child .werk_hero_spline[data-animation-type="spline"]';
  const markReady = (event: Event): void => {
    const scene = event.target;
    if (!(scene instanceof HTMLElement) || !scene.matches(selector)) return;
    // Webflow's load event precedes the canvas' first painted frame.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => scene.classList.add('is-works-spline-ready'));
    });
  };
  document.addEventListener('w-spline-load', markReady, true);
}

primePageTransition();
optimizeNewsImageSizes();
pruneMobileHeroSpline();
primeSitePreloader();
primeLeadImage();
primePageIntro();
primeWorksSplineIntro();
