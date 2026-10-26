import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

import { prefersReducedMotion } from './utils';

const EYEBROW_SELECTOR = '.atelier_hero_section .atlier_slide_eyebrow';
const HEADING_SELECTOR = '.atelier_hero_section .atelier_slide_heading';
const PENDING = 'data-atelier-hero-reveal-pending';
// Matches the text reveal on i-mad.com/team.
const MAD_TEXT_EASE = '0.33,1,0.68,1';

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

export function initAtelierHeroReveal(): void {
  if (initialized || !/^\/atelier\/?$/i.test(window.location.pathname) || prefersReducedMotion()) return;

  const eyebrow = document.querySelector<HTMLElement>(EYEBROW_SELECTOR);
  const heading = document.querySelector<HTMLElement>(HEADING_SELECTOR);
  if (!eyebrow || !heading || !eyebrow.textContent?.trim() || !heading.textContent?.trim()) return;
  initialized = true;
  eyebrow.setAttribute(PENDING, '');
  heading.setAttribute(PENDING, '');

  let disposed = false;
  let cleanup = (): void => undefined;
  const fonts = document.fonts?.ready ?? Promise.resolve();
  void Promise.all([import('gsap/SplitText'), fonts, window.__sitePreloader?.ready, waitForPageTransition()])
    .then(([{ SplitText }]) => {
      if (disposed || !eyebrow.isConnected || !heading.isConnected) return;
      gsap.registerPlugin(SplitText, CustomEase);
      const ease = CustomEase.create('atelier-mad-text', MAD_TEXT_EASE);
      let headingSplit: InstanceType<typeof SplitText> | undefined;
      let timeline: gsap.core.Timeline | undefined;
      let refreshFrame = 0;
      let started = false;

      const rebuild = (): void => {
        if (!headingSplit) return;
        timeline?.kill();
        const headingLines = headingSplit.lines;
        if (started) {
          gsap.set(eyebrow, { clearProps: 'opacity' });
          gsap.set(headingLines, { clearProps: 'transform,opacity' });
          return;
        }
        gsap.set(eyebrow, { opacity: 0 });
        gsap.set(headingLines, { yPercent: 105, opacity: 0 });
        timeline = gsap.timeline({ paused: true, onStart: () => { started = true; } });
        timeline.to(eyebrow, {
          opacity: 1, duration: 0.85, ease,
        }, 0);
        timeline.to(headingLines, {
          yPercent: 0, opacity: 1, duration: 1.65, stagger: 0.16, ease,
          onComplete: () => {
            gsap.set(eyebrow, { clearProps: 'opacity' });
            gsap.set(headingLines, { clearProps: 'transform,opacity' });
          },
        }, 0.2);
      };

      const scheduleRebuild = (): void => {
        if (refreshFrame) return;
        refreshFrame = window.requestAnimationFrame(() => {
          refreshFrame = 0;
          rebuild();
        });
      };

      try {
        headingSplit = SplitText.create(heading, {
          type: 'lines', mask: 'lines', linesClass: 'atelier-hero-line', autoSplit: true,
          onSplit: scheduleRebuild,
        });
        window.cancelAnimationFrame(refreshFrame);
        refreshFrame = 0;
        rebuild();
        eyebrow.removeAttribute(PENDING);
        heading.removeAttribute(PENDING);
        timeline?.play(0);
        cleanup = () => {
          window.cancelAnimationFrame(refreshFrame);
          timeline?.kill();
          gsap.set(eyebrow, { clearProps: 'opacity' });
          headingSplit?.revert();
        };
      } catch {
        window.cancelAnimationFrame(refreshFrame);
        gsap.set(eyebrow, { clearProps: 'opacity' });
        headingSplit?.revert();
      }
    })
    .catch(() => undefined)
    .finally(() => {
      eyebrow.removeAttribute(PENDING);
      heading.removeAttribute(PENDING);
    });

  window.addEventListener('pagehide', () => {
    disposed = true;
    cleanup();
  }, { once: true });
}
