import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { prefersReducedMotion } from './utils';

const SECTION = '.atelier_about_section.u-theme-dark5';
const PENDING = 'data-atelier-story-pending';
const STORY_EASE = '0.05,0.85,0.05,1';

let initialized = false;

export function initAtelierStoryReveal(): void {
  if (initialized || !/^\/atelier\/?$/i.test(window.location.pathname) || prefersReducedMotion()) return;

  const section = document.querySelector<HTMLElement>(SECTION);
  const heading = section?.querySelector<HTMLElement>('.atelier_about_h2');
  const paragraph = section?.querySelector<HTMLElement>('.atelier_story_p');
  if (!heading || !paragraph) return;
  initialized = true;
  heading.setAttribute(PENDING, '');
  paragraph.setAttribute(PENDING, '');

  let disposed = false;
  const cleanups: Array<() => void> = [];
  const fonts = document.fonts?.ready ?? Promise.resolve();
  void Promise.all([import('gsap/SplitText'), fonts, window.__sitePreloader?.ready])
    .then(([{ SplitText }]) => {
      if (disposed || !heading.isConnected || !paragraph.isConnected) return;
      gsap.registerPlugin(CustomEase, ScrollTrigger, SplitText);
      const ease = CustomEase.create('atelier-story-text', STORY_EASE);

      const reveal = (element: HTMLElement, type: 'words' | 'lines', duration: number,
        stagger: number, delay: number): void => {
        let started = false;
        let tween: gsap.core.Tween | undefined;
        let trigger: ScrollTrigger | undefined;
        const split = SplitText.create(element, {
          type,
          mask: type,
          autoSplit: type === 'lines',
          wordsClass: 'atelier-story-word',
          linesClass: 'atelier-story-line',
          onSplit(self) {
            trigger?.kill();
            tween?.kill();
            const parts = type === 'words' ? self.words : self.lines;
            if (started || !parts.length) return;
            gsap.set(parts, { yPercent: type === 'words' ? 108 : 106 });
            tween = gsap.to(parts, {
              yPercent: 0,
              duration,
              stagger,
              delay,
              ease,
              paused: true,
              onComplete: () => gsap.set(parts, { clearProps: 'transform' }),
            });
            trigger = ScrollTrigger.create({
              trigger: element,
              start: 'top 80%',
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
        element.removeAttribute(PENDING);
      };

      try {
        reveal(heading, 'words', 2.4, 0.14, 0);
        reveal(paragraph, 'lines', 2.6, 0.07, 0.2);
        ScrollTrigger.refresh();
      } catch {
        cleanups.forEach((cleanup) => cleanup());
      }
    })
    .catch(() => undefined)
    .finally(() => {
      heading.removeAttribute(PENDING);
      paragraph.removeAttribute(PENDING);
    });

  window.addEventListener('pagehide', () => {
    disposed = true;
    cleanups.forEach((cleanup) => cleanup());
  }, { once: true });
}
