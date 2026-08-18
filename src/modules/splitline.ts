import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import { prefersReducedMotion, qsa } from './utils';

const SPLITLINE_SELECTOR = '[data-splitline], .js-splitline';
const READY_ATTR = 'data-splitline-ready';

let pluginsRegistered = false;

function registerPlugins(): void {
  if (pluginsRegistered) {
    return;
  }

  pluginsRegistered = true;
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

function waitForFonts(): Promise<void> {
  if (!('fonts' in document)) {
    return Promise.resolve();
  }

  return document.fonts.ready.then(
    () => undefined,
    () => undefined,
  );
}

function markReady(element: HTMLElement): void {
  element.setAttribute(READY_ATTR, '');
}

function isReady(element: HTMLElement): boolean {
  return element.hasAttribute(READY_ATTR);
}

function createSplitLineAnimation(element: HTMLElement): void {
  SplitText.create(element, {
    type: 'words,lines',
    mask: 'lines',
    linesClass: 'splitline-line',
    autoSplit: true,
    onSplit: (instance) => {
      return gsap.from(instance.lines, {
        yPercent: 120,
        stagger: 0.1,
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: 'clamp(top center)',
          end: 'clamp(bottom center)',
        },
      });
    },
  });
}

export function initSplitLines(root: ParentNode = document): void {
  const elements = qsa<HTMLElement>(SPLITLINE_SELECTOR, root).filter((element) => !isReady(element));

  if (elements.length === 0) {
    return;
  }

  elements.forEach(markReady);

  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1 });
    return;
  }

  registerPlugins();
  gsap.set(elements, { opacity: 1 });

  void waitForFonts().then(() => {
    elements.forEach((element) => {
      if (!element.isConnected) {
        return;
      }

      createSplitLineAnimation(element);
    });

    ScrollTrigger.refresh();
  });
}
