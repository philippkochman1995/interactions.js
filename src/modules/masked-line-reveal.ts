import { gsap } from 'gsap';

import { prefersReducedMotion } from './utils';

const SECTION_HEADING_SELECTOR = '.work_about_heading, .editionen_title, .accordion_heading';
const HEADING_SELECTOR = `[data-masked-line-reveal], .atelier_hero_section .atelier_slide_heading, .bio_hero_section .bio_hero_heading, ${SECTION_HEADING_SELECTOR}`;
const LABEL_SELECTOR = '[data-masked-reveal-label], .atelier_hero_section .atlier_slide_eyebrow, .bio_hero_section .bio_hero_eyebrow, .bio_hero_section .bio_hero_sub';
const READY = 'data-masked-reveal-ready';
const COMPLETE = 'data-masked-reveal-complete';

interface HeadingState {
  element: HTMLElement;
  text: string;
  markup: string;
  width: number;
  played: boolean;
  resizeObserver: ResizeObserver;
  intersectionObserver?: IntersectionObserver;
}

const headings = new Map<HTMLElement, HeadingState>();
const labels = new Set<HTMLElement>();
let SplitTextClass: typeof import('gsap/SplitText').SplitText | undefined;
let initialized = false;
let activePath = window.location.pathname;
let lineObserver: IntersectionObserver | undefined;
const observedLines = new WeakSet<HTMLElement>();

function staggerMs(element: HTMLElement): number {
  const value = getComputedStyle(element).getPropertyValue('--masked-reveal-stagger').trim() || '50ms';
  const amount = Number.parseFloat(value);
  if (!Number.isFinite(amount)) return 50;
  return value.endsWith('s') && !value.endsWith('ms') ? amount * 1000 : amount;
}

async function waitForPageTransition(element: HTMLElement): Promise<void> {
  const root = document.documentElement;
  const pageHero =
    (/^\/atelier\/?$/i.test(window.location.pathname) && Boolean(element.closest('.atelier_hero_section'))) ||
    (/^\/biografie\/?$/i.test(window.location.pathname) && Boolean(element.closest('.bio_hero_section')));
  const firstEditionHeading = /^\/editionen\/?$/i.test(window.location.pathname) &&
    element.matches('.editionen_title') &&
    element.closest('.editionen_item') === document.querySelector('.editionen_item');
  const revealWithCurtain = pageHero || firstEditionHeading;
  if (root.classList.contains('is-page-transition-entering') &&
    !(revealWithCurtain && document.querySelector('.page-transition-overlay.is-uncovering'))) {
    await new Promise<void>((resolve) => {
      const observer = new MutationObserver(() => {
        if (root.classList.contains('is-page-transition-entering') &&
          (!revealWithCurtain || !document.querySelector('.page-transition-overlay.is-uncovering'))) return;
        observer.disconnect();
        resolve();
      });
      observer.observe(root, { attributes: true, attributeFilter: ['class'], subtree: revealWithCurtain });
    });
  }
  if (pageHero) {
    await window.__sitePreloader?.ready;
    if (element.closest('.bio_hero_section')) {
      const covered = (): boolean => {
        if (root.classList.contains('is-site-preloading') || root.classList.contains('is-site-preloader-exiting')) return true;
        const transitioning = root.classList.contains('is-page-transition-pending') ||
          root.classList.contains('is-page-transition-entering');
        return transitioning && !document.querySelector('.page-transition-overlay.is-uncovering');
      };
      if (covered()) {
        await new Promise<void>((resolve) => {
          const observer = new MutationObserver(() => {
            if (covered()) return;
            observer.disconnect();
            resolve();
          });
          observer.observe(root, { attributes: true, attributeFilter: ['class'], subtree: true });
        });
      }
    }
    await new Promise<void>((resolve) => { window.setTimeout(resolve, 200); });
  }
}

function waitForBiographyHeading(): Promise<void> {
  const heading = document.querySelector<HTMLElement>('.bio_hero_section .bio_hero_heading');
  if (!heading || heading.classList.contains('is-masked-reveal-playing') || heading.hasAttribute(COMPLETE)) {
    return Promise.resolve();
  }
  return new Promise<void>((resolve) => {
    const observer = new MutationObserver(() => {
      if (!heading.isConnected ||
        (!heading.classList.contains('is-masked-reveal-playing') && !heading.hasAttribute(COMPLETE))) return;
      observer.disconnect();
      resolve();
    });
    observer.observe(heading, { attributes: true, attributeFilter: ['class', COMPLETE] });
  });
}

function play(state: HeadingState): void {
  if (state.played || !state.element.isConnected) return;
  state.played = true;
  state.element.classList.add('is-masked-reveal-playing');
  if (/^\/atelier\/?$/i.test(window.location.pathname) &&
    state.element.matches('.atelier_hero_section .atelier_slide_heading')) {
    document.dispatchEvent(new Event('atelier:hero-line-reveal'));
  }
}

function revealEditionContent(heading: HTMLElement): void {
  if (!heading.matches('.editionen_title')) return;
  heading.closest('.editionen_item')?.querySelectorAll<HTMLElement>('[data-edition-content-reveal]')
    .forEach((element) => element.classList.add('is-edition-content-in'));
}

function rebuild(state: HeadingState, replay = false): void {
  const { element, text, markup } = state;
  if (!element.isConnected || !SplitTextClass) return;
  // A font or width change can arrive while the CSS reveal is still running.
  // Only preserve the finished state; otherwise rebuild and replay the lines.
  const wasPlayed = state.played && element.hasAttribute(COMPLETE) && !replay;
  element.classList.remove('is-masked-reveal-playing');
  element.removeAttribute(COMPLETE);
  element.innerHTML = markup;

  try {
    const split = SplitTextClass.create(element, { type: 'lines' });
    const lines = split.lines.filter((line) => line.textContent?.trim())
      .map((line) => Array.from(line.childNodes, (node) => node.cloneNode(true)));
    split.revert();
    if (!lines.length) throw new Error('No text lines found');

    const fragment = document.createDocumentFragment();
    const stagger = staggerMs(element);
    lines.forEach((line, index) => {
      if (index) fragment.append(document.createTextNode(' '));
      const mask = document.createElement('span');
      mask.className = 'masked-reveal-line';
      mask.setAttribute('aria-hidden', 'true');
      const inner = document.createElement('span');
      inner.className = 'masked-reveal-line__text';
      inner.style.setProperty('--masked-reveal-line-delay', `${index * stagger}ms`);
      inner.append(...line);
      mask.append(inner);
      fragment.append(mask);
    });
    element.replaceChildren(fragment);
    element.setAttribute('aria-label', text);
    element.setAttribute(READY, '');
    state.width = element.getBoundingClientRect().width;
    if (wasPlayed) {
      state.played = true;
      element.setAttribute(COMPLETE, '');
      revealEditionContent(element);
      return;
    }
    state.played = false;
    if (element.getAttribute('data-masked-line-reveal') === 'viewport' && 'IntersectionObserver' in window) {
      state.intersectionObserver?.disconnect();
      state.intersectionObserver = new IntersectionObserver((entries, observer) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        play(state);
      }, { threshold: 0.1 });
      state.intersectionObserver.observe(element);
    } else {
      play(state);
    }
  } catch {
    element.innerHTML = markup;
    element.removeAttribute(READY);
    element.setAttribute(COMPLETE, '');
    revealEditionContent(element);
  }
}

function addHeading(element: HTMLElement): void {
  if (headings.has(element) ||
    (/^\/atelier\/?$/i.test(window.location.pathname) && element.hasAttribute('data-fade')) ||
    !element.textContent?.trim()) return;
  if (element.matches(SECTION_HEADING_SELECTOR) && !element.hasAttribute('data-masked-line-reveal')) {
    element.setAttribute('data-masked-line-reveal', 'viewport');
  }
  // Interactive or media children keep their original DOM and behavior.
  if (element.querySelector('a, button, input, select, textarea, svg, img, canvas, video, iframe')) {
    element.setAttribute(COMPLETE, '');
    return;
  }
  const state: HeadingState = {
    element,
    text: element.innerText?.replace(/\s+/g, ' ').trim() || element.textContent,
    markup: element.innerHTML,
    width: 0,
    played: false,
    resizeObserver: new ResizeObserver(() => {
      if (!state.width || Math.abs(element.getBoundingClientRect().width - state.width) < 1) return;
      if (element.matches('.bio_hero_heading') && state.played && !element.hasAttribute(COMPLETE)) return;
      rebuild(state);
    }),
  };
  headings.set(element, state);
  state.resizeObserver.observe(element);
  void Promise.all([import('gsap/SplitText'), document.fonts?.ready, window.__sitePreloader?.ready,
    waitForPageTransition(element)])
    .then(([{ SplitText }]) => {
      gsap.registerPlugin(SplitText);
      SplitTextClass = SplitText;
      if (element.isConnected) rebuild(state);
    })
    .catch(() => { element.setAttribute(COMPLETE, ''); });
}

function addLabel(element: HTMLElement): void {
  if (labels.has(element) ||
    (/^\/atelier\/?$/i.test(window.location.pathname) && element.hasAttribute('data-fade')) ||
    !element.textContent?.trim()) return;
  labels.add(element);
  const biographyHero = Boolean(element.closest('.bio_hero_section'));
  void Promise.all([document.fonts?.ready, window.__sitePreloader?.ready,
    biographyHero ? waitForBiographyHeading() : waitForPageTransition(element)])
    .then(() => {
      if (!element.isConnected) return;
      element.classList.add('is-masked-reveal-playing');
    })
    .catch(() => { element.setAttribute(COMPLETE, ''); });
}

function replayAll(): void {
  headings.forEach((state) => { rebuild(state, true); });
  labels.forEach((label) => {
    label.classList.remove('is-masked-reveal-playing');
    requestAnimationFrame(() => label.classList.add('is-masked-reveal-playing'));
  });
}

function scan(): void {
  const routeChanged = activePath !== window.location.pathname;
  activePath = window.location.pathname;
  if (/^\/editionen\/?$/i.test(activePath)) {
    document.querySelector<HTMLElement>('.editionen_item')?.setAttribute('data-edition-first', '');
  }
  document.querySelectorAll<HTMLElement>(HEADING_SELECTOR).forEach(addHeading);
  document.querySelectorAll<HTMLElement>(LABEL_SELECTOR).forEach(addLabel);
  document.querySelectorAll<HTMLElement>('.editionen_item').forEach((item) => {
    item.querySelectorAll<HTMLElement>('.editionen_meta, .editionen_note')
      .forEach((element, index) => {
        if (element.hasAttribute('data-edition-content-reveal')) return;
        element.setAttribute('data-edition-content-reveal', '');
        element.style.setProperty('--edition-content-delay', `${index * 90}ms`);
        if (item.querySelector('.editionen_title')?.hasAttribute(COMPLETE)) {
          element.classList.add('is-edition-content-in');
        }
      });
  });
  if (lineObserver) {
    document.querySelectorAll<HTMLElement>('.accordion_section .accordion_item').forEach((item, index) => {
      if (observedLines.has(item)) return;
      observedLines.add(item);
      item.style.setProperty('--accordion-line-index', String(index));
      item.setAttribute('data-accordion-line-ready', '');
      lineObserver?.observe(item);
    });
  }
  headings.forEach((state, element) => {
    if (element.isConnected) return;
    state.resizeObserver.disconnect();
    state.intersectionObserver?.disconnect();
    headings.delete(element);
  });
  labels.forEach((element) => { if (!element.isConnected) labels.delete(element); });
  if (routeChanged) replayAll();
}

export function initMaskedLineReveal(): void {
  if (initialized || prefersReducedMotion()) return;
  initialized = true;
  if ('IntersectionObserver' in window) {
    lineObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const item = entry.target as HTMLElement;
        item.classList.add('is-accordion-line-in');
        observer.unobserve(item);
      });
    }, { threshold: 0, rootMargin: '0px 0px -5% 0px' });
  }
  scan();
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
  document.fonts?.addEventListener('loadingdone', () => {
    headings.forEach((state) => {
      if (state.element.matches('.bio_hero_heading') && state.played && !state.element.hasAttribute(COMPLETE)) return;
      rebuild(state);
    });
  });
  window.addEventListener('popstate', scan);
  window.addEventListener('pageshow', (event) => {
    if (!event.persisted) return;
    replayAll();
    scan();
  });
  document.addEventListener('animationend', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.classList.contains('masked-reveal-line__text')) return;
    const element = target.closest<HTMLElement>(HEADING_SELECTOR);
    if (!element || target !== element.querySelector('.masked-reveal-line:last-of-type > .masked-reveal-line__text')) return;
    element.classList.remove('is-masked-reveal-playing');
    element.setAttribute(COMPLETE, '');
    revealEditionContent(element);
  });
}
