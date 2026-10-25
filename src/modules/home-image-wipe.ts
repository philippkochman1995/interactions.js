import { afterSitePreloader } from './site-preloader-state';
import { prefersReducedMotion } from './utils';

const REVEAL_SELECTOR = '.news_event .intro_img, .about_section .about_img, [data-wm-home] .map_info';
const PENDING = 'data-home-image-wipe';
const DURATION = 1300;

export function initHomeImageWipe(): void {
  if (!document.querySelector('.werk_hero_section') || !document.querySelector('.about_section') || prefersReducedMotion()) return;

  const easing = getComputedStyle(document.documentElement).getPropertyValue('--eo').trim()
    || 'cubic-bezier(.05, .85, .05, 1)';
  const animations = new Set<Animation>();
  let ready = !window.__sitePreloader?.active;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!ready || !entry.isIntersecting) return;
      const element = entry.target as HTMLElement;
      observer.unobserve(element);

      const reveal = (): void => {
        if (!element.isConnected || !element.hasAttribute(PENDING)) return;
        if (!element.animate) { element.removeAttribute(PENDING); return; }
        const animation = element.animate([
          { clipPath: 'inset(100% 0 0 0)' },
          { clipPath: 'inset(0 0 0 0)' },
        ], { duration: DURATION, easing, fill: 'forwards' });
        animations.add(animation);
        animation.onfinish = () => {
          element.removeAttribute(PENDING);
          animation.cancel();
          animations.delete(animation);
        };
      };

      const image = element instanceof HTMLImageElement ? element : element.querySelector('img');
      if (image && !image.complete) {
        image.addEventListener('load', reveal, { once: true });
        image.addEventListener('error', reveal, { once: true });
      } else {
        reveal();
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });

  document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((element) => {
    element.setAttribute(PENDING, '');
    observer.observe(element);
  });

  afterSitePreloader(() => {
    ready = true;
    // A visible target may already have reported its intersection while the
    // preloader was covering it. Reobserve to receive a fresh entry.
    document.querySelectorAll<HTMLElement>(`[${PENDING}]`).forEach((element) => {
      observer.unobserve(element);
      observer.observe(element);
    });
  });

  window.addEventListener('pagehide', () => {
    observer.disconnect();
    animations.forEach((animation) => animation.cancel());
    document.querySelectorAll<HTMLElement>(`[${PENDING}]`).forEach((element) => element.removeAttribute(PENDING));
  }, { once: true });
}
