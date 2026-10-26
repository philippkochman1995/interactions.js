import { prefersReducedMotion } from './utils';

const REVEAL_ATTR = 'data-site-image-reveal';
const IN_CLASS = 'is-site-image-in';
const EVENT_IMAGE_SELECTOR = '.news_event img.intro_img, .news_highlight_section img.intro_img';
const BIO_IMAGE_SELECTOR = '.bio_photo img.bio_media_img, .bio_photo.bio_video .bio_video_trigger img';
const BIO_HERO_SELECTOR = '.bio_hero_section > img.bio_hero_img';

let initialized = false;

function afterPageEntrance(callback: () => void): void {
  const root = document.documentElement;
  const covered = (): boolean => {
    if (root.classList.contains('is-site-preloading') || root.classList.contains('is-site-preloader-exiting')) return true;
    const transitioning = root.classList.contains('is-page-transition-pending') ||
      root.classList.contains('is-page-transition-entering');
    return transitioning && !document.querySelector('.page-transition-overlay.is-uncovering');
  };

  if (!covered()) {
    requestAnimationFrame(callback);
    return;
  }

  const observer = new MutationObserver(() => {
    if (covered()) return;
    observer.disconnect();
    requestAnimationFrame(callback);
  });
  observer.observe(root, { attributes: true, attributeFilter: ['class'], subtree: true });
  window.addEventListener('pagehide', () => observer.disconnect(), { once: true });
}

export function initSiteImageReveal(): void {
  if (initialized || prefersReducedMotion() || !('IntersectionObserver' in window)) return;
  initialized = true;

  const images = new WeakMap<HTMLElement, HTMLImageElement>();
  const pending = new WeakSet<HTMLElement>();
  let scanFrame = 0;

  const reveal = (target: HTMLElement): void => {
    const image = images.get(target);
    if (!image || target.classList.contains(IN_CLASS) || pending.has(target)) return;
    pending.add(target);

    const complete = (): void => {
      pending.delete(target);
      if (!target.isConnected) return;
      target.classList.add(IN_CLASS);
      observer.unobserve(target);
    };
    const finish = (): void => {
      if (target.getAttribute(REVEAL_ATTR) === 'hero') {
        afterPageEntrance(() => window.setTimeout(complete, 200));
      } else {
        complete();
      }
    };

    if (image.complete) {
      if (image.naturalWidth && image.decode) void image.decode().then(finish, finish);
      else finish();
    } else {
      image.addEventListener('load', () => {
        if (image.decode) void image.decode().then(finish, finish);
        else finish();
      }, { once: true });
      image.addEventListener('error', finish, { once: true });
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) reveal(entry.target as HTMLElement);
    });
  }, { threshold: 0 });

  const register = (target: HTMLElement, image: HTMLImageElement, type: 'hero' | 'bio' | 'event'): void => {
    if (target.hasAttribute(REVEAL_ATTR)) return;
    target.setAttribute(REVEAL_ATTR, type);
    images.set(target, image);
    if (type === 'hero') {
      image.loading = 'eager';
      image.setAttribute('fetchpriority', 'high');
    }
    observer.observe(target);
  };

  const scan = (): void => {
    scanFrame = 0;
    if (/^\/biografie\/?$/i.test(window.location.pathname)) {
      const hero = document.querySelector<HTMLImageElement>(BIO_HERO_SELECTOR);
      if (hero) register(hero, hero, 'hero');
      document.querySelectorAll<HTMLImageElement>(BIO_IMAGE_SELECTOR).forEach((image) => {
        const target = image.closest<HTMLElement>('.site-lightbox-trigger, .bio_video_trigger') ?? image;
        register(target, image, 'bio');
      });
    }

    // Atelier keeps its existing page-specific masks and hover choreography.
    if (!/^\/atelier\/?$/i.test(window.location.pathname)) {
      document.querySelectorAll<HTMLImageElement>(EVENT_IMAGE_SELECTOR).forEach((image) => {
        register(image, image, 'event');
      });
    }
  };

  scan();
  const mutations = new MutationObserver(() => {
    if (!scanFrame) scanFrame = requestAnimationFrame(scan);
  });
  mutations.observe(document.body, { childList: true, subtree: true });
  window.addEventListener('pagehide', () => {
    observer.disconnect();
    mutations.disconnect();
    if (scanFrame) cancelAnimationFrame(scanFrame);
  }, { once: true });
}
