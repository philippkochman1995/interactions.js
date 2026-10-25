import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { prefersReducedMotion, qsa } from './utils';

const HEADING_SELECTOR = 'h1, h2, h3, h4, h5, h6';
const EXCLUDED = [
  '[data-reveal="off"]', '[hidden]', '[role="dialog"]',
  '.fwm-modal', '[data-modal]', '[data-site-modal]', '[data-modal-content]',
  '.site-lightbox', '[data-site-lightbox]', '.site-preloader',
  '.page-transition-overlay', '[data-site-menu]', '.top_bar_section',
].join(', ');
const PENDING = 'data-home-heading-pending';

let initialized = false;

function waitForPageTransition(): Promise<void> {
  const root = document.documentElement;
  if (!root.classList.contains('is-page-transition-entering')) return Promise.resolve();
  return new Promise((resolve) => {
    const observer = new MutationObserver(() => {
      if (root.classList.contains('is-page-transition-entering')) return;
      observer.disconnect();
      resolve();
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
  });
}

export function initHomeHeadingReveal(): void {
  if (initialized || window.location.pathname !== '/' || prefersReducedMotion()) return;

  const headings = qsa<HTMLElement>(HEADING_SELECTOR)
    .filter((heading) => heading.textContent?.trim() && !heading.closest(EXCLUDED)
      && !heading.querySelector('a, button, input, select, textarea')
      && heading.getClientRects().length > 0);
  if (!headings.length) return;
  initialized = true;
  headings.forEach((heading) => heading.setAttribute(PENDING, ''));

  const cleanups: Array<() => void> = [];
  const fonts = document.fonts?.ready ?? Promise.resolve();
  void Promise.all([import('gsap/SplitText'), fonts, window.__sitePreloader?.ready, waitForPageTransition()])
    .then(([{ SplitText }]) => {
      gsap.registerPlugin(ScrollTrigger, SplitText);
      headings.forEach((heading) => {
        if (!heading.isConnected || heading.getClientRects().length === 0) {
          heading.removeAttribute(PENDING);
          return;
        }

        let started = false;
        let tween: gsap.core.Tween | undefined;
        let trigger: ScrollTrigger | undefined;
        try {
          const split = SplitText.create(heading, {
            type: 'lines',
            mask: 'lines',
            linesClass: 'home-heading-line',
            autoSplit: true,
            onSplit(self) {
              trigger?.kill();
              tween?.kill();
              if (started || !self.lines.length) return;
              gsap.set(self.lines, { yPercent: 105, opacity: 0 });
              tween = gsap.to(self.lines, {
                yPercent: 0,
                opacity: 1,
                duration: 1.15,
                stagger: 0.12,
                ease: 'power4.out',
                paused: true,
                onComplete: () => gsap.set(self.lines, { clearProps: 'transform,opacity' }),
              });
              trigger = ScrollTrigger.create({
                trigger: heading,
                start: 'top 88%',
                once: true,
                animation: tween,
                onEnter: () => { started = true; },
              });
            },
          });
          cleanups.push(() => {
            trigger?.kill();
            tween?.kill();
            split.revert();
          });
        } catch {
          // Keep the original heading readable if its markup cannot be split.
        }
        heading.removeAttribute(PENDING);
      });
      ScrollTrigger.refresh();
    })
    .catch(() => headings.forEach((heading) => heading.removeAttribute(PENDING)));

  window.addEventListener('pagehide', () => {
    cleanups.forEach((cleanup) => cleanup());
    headings.forEach((heading) => heading.removeAttribute(PENDING));
  }, { once: true });
}
