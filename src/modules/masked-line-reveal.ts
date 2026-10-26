import { gsap } from 'gsap';

import { prefersReducedMotion } from './utils';

const HEADING_SELECTOR = '[data-masked-line-reveal], .atelier_hero_section .atelier_slide_heading';
const LABEL_SELECTOR = '[data-masked-reveal-label], .atelier_hero_section .atlier_slide_eyebrow';
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

function staggerMs(element: HTMLElement): number {
  const value = getComputedStyle(element).getPropertyValue('--masked-reveal-stagger').trim() || '50ms';
  const amount = Number.parseFloat(value);
  if (!Number.isFinite(amount)) return 50;
  return value.endsWith('s') && !value.endsWith('ms') ? amount * 1000 : amount;
}

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

function play(state: HeadingState): void {
  if (state.played || !state.element.isConnected) return;
  state.played = true;
  state.element.classList.add('is-masked-reveal-playing');
}

function rebuild(state: HeadingState, replay = false): void {
  const { element, text, markup } = state;
  if (!element.isConnected || !SplitTextClass) return;
  const wasPlayed = state.played && !replay;
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
  }
}

function addHeading(element: HTMLElement): void {
  if (headings.has(element) ||
    (/^\/atelier\/?$/i.test(window.location.pathname) && element.hasAttribute('data-fade')) ||
    !element.textContent?.trim()) return;
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
      rebuild(state);
    }),
  };
  headings.set(element, state);
  state.resizeObserver.observe(element);
  void Promise.all([import('gsap/SplitText'), document.fonts?.ready, window.__sitePreloader?.ready,
    waitForPageTransition()])
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
  void Promise.all([document.fonts?.ready, window.__sitePreloader?.ready, waitForPageTransition()])
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
  document.querySelectorAll<HTMLElement>(HEADING_SELECTOR).forEach(addHeading);
  document.querySelectorAll<HTMLElement>(LABEL_SELECTOR).forEach(addLabel);
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
  scan();
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
  document.fonts?.addEventListener('loadingdone', () => {
    headings.forEach((state) => { rebuild(state); });
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
  });
}
