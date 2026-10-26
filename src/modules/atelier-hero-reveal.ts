import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

import { prefersReducedMotion } from './utils';

const EYEBROW_SELECTOR = '.atelier_hero_section .atlier_slide_eyebrow';
const HEADING_SELECTOR = '.atelier_hero_section .atelier_slide_heading';
const PENDING = 'data-atelier-hero-reveal-pending';
// Matches the title/date movement in site-interactions-base.css.
const PRELOADER_TEXT_EASE = '0.02,0.9,0.03,1';

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
      const ease = CustomEase.create('atelier-preloader-text', PRELOADER_TEXT_EASE);
      let eyebrowSplit: InstanceType<typeof SplitText> | undefined;
      let headingSplit: InstanceType<typeof SplitText> | undefined;
      let timeline: gsap.core.Timeline | undefined;
      let refreshFrame = 0;
      let started = false;

      const rebuild = (): void => {
        if (!eyebrowSplit || !headingSplit) return;
        timeline?.kill();
        const eyebrowLines = eyebrowSplit.lines;
        const headingWords = headingSplit.words;
        if (started) {
          gsap.set([...eyebrowLines, ...headingWords], { clearProps: 'transform,opacity' });
          return;
        }
        gsap.set(eyebrowLines, { yPercent: 105, opacity: 0 });
        gsap.set(headingWords, { yPercent: 110, opacity: 0 });
        timeline = gsap.timeline({ paused: true, onStart: () => { started = true; } });
        timeline.to(eyebrowLines, {
          yPercent: 0, opacity: 1, duration: 1.15, stagger: 0.12, ease,
        }, 0);
        timeline.to(headingWords, {
          yPercent: 0, opacity: 1, duration: 1.45, stagger: 0.085, ease,
          onComplete: () => gsap.set([...eyebrowLines, ...headingWords], { clearProps: 'transform,opacity' }),
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
        eyebrowSplit = SplitText.create(eyebrow, {
          type: 'lines', mask: 'lines', linesClass: 'atelier-hero-line', autoSplit: true,
          onSplit: scheduleRebuild,
        });
        headingSplit = SplitText.create(heading, {
          type: 'lines,words', mask: 'lines', linesClass: 'atelier-hero-line',
          wordsClass: 'atelier-hero-word', autoSplit: true,
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
          eyebrowSplit?.revert();
          headingSplit?.revert();
        };
      } catch {
        window.cancelAnimationFrame(refreshFrame);
        eyebrowSplit?.revert();
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
