import { prefersReducedMotion } from './utils';

const REVEAL_ATTR = 'data-site-image-reveal';
const IN_CLASS = 'is-site-image-in';
const EVENT_IMAGE_SELECTOR = '.news_event img.intro_img';
const BIO_IMAGE_SELECTOR = '.bio_photo img.bio_media_img, .bio_photo.bio_video .bio_video_trigger img';
const BIO_HERO_SELECTOR = '.bio_hero_section > img.bio_hero_img';
const IMAGE_EXCLUSIONS = [
  '.top_bar_section', '[data-site-menu]', '.site-preloader', '[data-site-lightbox]',
  '.fwm-modal', '.modal_registry', '[data-modal-content]', '[hidden]',
  '.hm_cms', '.works_source', '.cms-canvas', '.werk_hero_section',
  '.bio_hero_section', '.bio_photo', '.news_event', '.news_highlight_section',
  '.contact_img',
  '[data-insta-feed]', '[data-edition-slider]', '[data-atelier-slideshow-root]',
  '[aria-hidden="true"]',
].join(', ');

type RevealType = 'hero' | 'bio' | 'event' | 'contact' | 'media' | 'plain' | 'edition' | 'instagram';

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

  const register = (target: HTMLElement, image: HTMLImageElement, type: RevealType, delay = 0): void => {
    if (target.hasAttribute(REVEAL_ATTR)) return;
    target.setAttribute(REVEAL_ATTR, type);
    if (delay) target.style.setProperty('--site-image-delay', `${delay}ms`);
    images.set(target, image);
    if (type === 'hero') {
      image.loading = 'eager';
      image.setAttribute('fetchpriority', 'high');
    }
    observer.observe(target);
  };

  const registerEvent = (image: HTMLImageElement): void => {
    if (image.closest('[data-site-image-reveal="event"]')) return;
    // Atelier uses its existing .img-zoom as the mask. Other pages put the
    // image directly in the grid, so give it the same two-layer structure.
    let mask = image.parentElement;
    if (!mask?.classList.contains('img-zoom')) {
      mask = document.createElement('div');
      mask.className = 'img-zoom';
      image.before(mask);
    }
    const zoom = document.createElement('span');
    zoom.className = 'zoom';
    zoom.setAttribute('data-site-event-zoom', '');
    mask.append(zoom);
    zoom.append(image);
    register(mask, image, 'event');
  };

  const scan = (): void => {
    scanFrame = 0;
    const path = window.location.pathname;
    if (/^\/biografie\/?$/i.test(path)) {
      const hero = document.querySelector<HTMLImageElement>(BIO_HERO_SELECTOR);
      if (hero) register(hero, hero, 'hero');
      document.querySelectorAll<HTMLImageElement>(BIO_IMAGE_SELECTOR).forEach((image) => {
        const target = image.closest<HTMLElement>('.site-lightbox-trigger, .bio_video_trigger') ?? image;
        register(target, image, 'bio');
      });
    }

    // Atelier keeps its existing page-specific masks and hover choreography.
    if (!/^\/atelier\/?$/i.test(path)) {
      document.querySelectorAll<HTMLImageElement>(EVENT_IMAGE_SELECTOR).forEach((image) => {
        registerEvent(image);
      });

      if (/^\/kontakt\/?$/i.test(path)) {
        const image = document.querySelector<HTMLImageElement>('.contact_img img.is-contact-image');
        const frame = image?.closest<HTMLElement>('.site-lightbox-trigger');
        if (image && frame) register(frame, image, 'contact');
      }

      const staticWorkImages = /^\/(?:werk-ueberblick|werke(?:\/.*)?)\/?$/i.test(path);
      if (/^\/editionen\/?$/i.test(path)) {
        document.querySelectorAll<HTMLElement>('.editionen_media[data-edition-slider]').forEach((media, index) => {
          const track = media.querySelector<HTMLElement>('[data-edition-track]');
          const firstImage = track?.querySelector<HTMLImageElement>('.editionen_slide.is-active img.editionen_img') ??
            track?.querySelector<HTMLImageElement>('img.editionen_img');
          if (track && firstImage) register(track, firstImage, 'edition', (index % 4) * 90);
        });
      }

      document.querySelectorAll<HTMLElement>('[data-insta-track] > :is(div, a):not([aria-hidden="true"])').forEach((card, index) => {
        const image = card.querySelector<HTMLImageElement>('img');
        if (image) register(card, image, 'instagram', Math.min(index, 4) * 85);
      });

      document.querySelectorAll<HTMLImageElement>('body img').forEach((image, index) => {
        if (staticWorkImages) return;
        if (image.closest(IMAGE_EXCLUSIONS) || image.closest(`[${REVEAL_ATTR}]`)) return;
        if (!image.getAttribute('src') && !image.getAttribute('srcset')) return;
        const frame = image.closest<HTMLElement>('.site-lightbox-trigger, .news_img, .contact_img, .about_img, .image-absolute-full-wrapper');
        register(frame ?? image, image, frame ? 'media' : 'plain', (index % 4) * 70);
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
