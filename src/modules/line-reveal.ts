import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { prefersReducedMotion, qsa } from './utils';

const TEXT_SELECTOR = 'h1, h2, h3, h4, h5, h6, p, .u-text-eyebrow, a.button-outlined, a.text-link, button.button-outlined, .quote-block';
const RICH_TEXT_SELECTOR = '.w-richtext, .rich-text';
const EXCLUDED = [
  '.fwm-modal', '[data-modal]', '[data-site-modal]', '[data-modal-content]',
  '[data-modal-rich-text]', '[data-modal-body]',
  '.site-lightbox', '[data-site-lightbox]', '[role="dialog"]',
  '[data-reveal="off"]', '[data-fade]',
  '.top_bar_section', '[data-site-menu]', '.site-preloader',
  '.werk_hero_section', '.editionen_media', '[data-insta-feed]',
  '.accordion_body', '.bio_era_years', '.bio_era_title',
  '.modal_registry', '.hm_cms', '.works_source',
].join(', ');
const HERO_CONTAINER = '[data-reveal-hero], [class*="_hero"], [class*="-hero"]';
const PENDING = 'data-reveal-pending';
const READY = 'data-reveal-ready';

const FADE_UP_FROM = { y: 20, opacity: 0 };
const FADE_UP_TO = { y: 0, opacity: 1, duration: 1, ease: 'atelier-fade-up' };

interface RevealState {
  element: HTMLElement;
  targets: HTMLElement[];
  hero: boolean;
  played: boolean;
  timeline?: gsap.core.Timeline;
  trigger?: ScrollTrigger;
  signature: string;
  originals: Array<{ opacity: string; transform: string }>;
}

let initialized = false;

function isEligible(element: HTMLElement): boolean {
  if (element.closest(EXCLUDED) || element.closest('[hidden]')) return false;
  if (element.closest('.quote-block') && !element.matches('.quote-block')) return false;
  if (element.matches('.atelier_hero_section .atelier_slide_heading, .atelier_hero_section .atlier_slide_eyebrow, .bio_hero_section .bio_hero_heading')) return false;
  if (element.matches('.bio_hero_section .bio_hero_eyebrow, .bio_hero_section .bio_hero_sub')) return false;
  if (element.matches('[data-masked-line-reveal], [data-masked-reveal-label]')) return false;
  if (element.matches('.work_about_heading, .editionen_title, .accordion_heading')) return false;
  if (element.matches('.atelier_about_section.u-theme-dark5 .atelier_about_h2, .atelier_about_section.u-theme-dark5 .atelier_story_p')) return false;
  return element.textContent?.trim().length !== 0;
}

function isHero(element: HTMLElement): boolean {
  if (element.closest(HERO_CONTAINER)) return true;
  if (window.scrollY > 5) return false;
  const rect = element.getBoundingClientRect();
  return rect.height > 0 && rect.top >= 0 && rect.top < window.innerHeight * 0.85;
}

function signature(element: HTMLElement): string {
  const style = window.getComputedStyle(element);
  return [
    Math.round(element.getBoundingClientRect().width * 10) / 10,
    style.fontFamily, style.fontSize, style.fontWeight, style.fontStyle,
    style.lineHeight, style.letterSpacing, style.fontStretch,
  ].join('|');
}

function clear(state: RevealState): void {
  state.trigger?.kill();
  state.timeline?.kill();
  state.targets.forEach((target, index) => {
    target.style.opacity = state.played ? '1' : state.originals[index].opacity;
    target.style.transform = state.originals[index].transform;
  });
  state.trigger = undefined;
  state.timeline = undefined;
}

function targets(state: RevealState): Element[] {
  state.signature = signature(state.element);
  state.targets.forEach((target) => {
    target.removeAttribute(PENDING);
    target.setAttribute(READY, '');
  });
  return state.targets;
}

function buildScrollReveal(state: RevealState): void {
  const elements = targets(state);
  if (!elements.length || state.played) return;

  const timeline = gsap.timeline({ paused: true, onComplete: () => { state.played = true; } });
  timeline.fromTo(elements, FADE_UP_FROM, FADE_UP_TO);
  state.timeline = timeline;
  state.trigger = ScrollTrigger.create({
    trigger: state.element,
    start: 'top 90%',
    end: 'bottom 0%',
    invalidateOnRefresh: false,
    animation: timeline,
    onEnter: () => { state.played = true; },
  });
}

function buildHeroReveal(states: RevealState[], intro: gsap.core.Timeline): void {
  states.forEach((state, index) => {
    const elements = targets(state);
    if (!elements.length || state.played) return;
    const priceDelay = state.element.matches('.hero-price') ? 0.42 : 0;
    intro.fromTo(elements, FADE_UP_FROM, FADE_UP_TO, 0.6 + index * 0.12 + priceDelay);
  });
}

function waitForFonts(): Promise<void> {
  if (!('fonts' in document)) return Promise.resolve();
  return document.fonts.ready.then(() => undefined, () => undefined);
}

export function initLineReveal(root: ParentNode = document): void {
  if (initialized || prefersReducedMotion()) return;

  const elements = qsa<HTMLElement>(TEXT_SELECTOR, root).filter(isEligible);
  if (!elements.length) return;
  initialized = true;
  gsap.registerPlugin(ScrollTrigger, CustomEase);
  CustomEase.create('atelier-fade-up', '.33,1,.68,1');

  const groups = new Map<HTMLElement, HTMLElement[]>();
  elements.forEach((element) => {
    const richText = element.matches('p') ? element.closest<HTMLElement>(RICH_TEXT_SELECTOR) : null;
    const key = richText ?? element;
    groups.set(key, [...(groups.get(key) ?? []), element]);
  });
  const states = Array.from(groups, ([element, groupedTargets]): RevealState => ({
    element,
    targets: groupedTargets,
    hero: isHero(element),
    played: false,
    signature: '',
    originals: groupedTargets.map((target) => ({ opacity: target.style.opacity, transform: target.style.transform })),
  }));
  states.forEach((state) => state.targets.forEach((target) => target.setAttribute(PENDING, '')));

  let intro: gsap.core.Timeline | undefined;
  let observer: ResizeObserver | undefined;
  let refreshFrame = 0;
  let ready = false;
  let heroStarted = false;

  const rebuild = (): void => {
    if (!ready) return;
    if (intro && intro.progress() > 0) {
      heroStarted = true;
      states.filter((state) => state.hero).forEach((state) => { state.played = true; });
    }
    intro?.kill();
    states.forEach(clear);

    intro = gsap.timeline({ paused: true });
    buildHeroReveal(states.filter((state) => state.hero && state.element.isConnected), intro);
    states.filter((state) => !state.hero && state.element.isConnected).forEach(buildScrollReveal);

    if (!heroStarted && intro.duration() > 0) {
      intro.call(() => { heroStarted = true; }, undefined, 0.6);
      intro.play(0);
    }
    ScrollTrigger.refresh();
  };

  const scheduleRebuild = (): void => {
    if (refreshFrame) return;
    refreshFrame = window.requestAnimationFrame(() => {
      refreshFrame = 0;
      if (states.some((state) => state.element.isConnected && signature(state.element) !== state.signature)) {
        rebuild();
      }
    });
  };

  void Promise.all([waitForFonts(), window.__sitePreloader?.ready]).then(() => {
    ready = true;
    rebuild();
    observer = new ResizeObserver(scheduleRebuild);
    states.forEach((state) => observer?.observe(state.element));
    window.addEventListener('resize', scheduleRebuild, { passive: true });
    document.fonts?.addEventListener('loadingdone', rebuild);
  });

  window.addEventListener('pagehide', () => {
    window.cancelAnimationFrame(refreshFrame);
    observer?.disconnect();
    intro?.kill();
    states.forEach(clear);
    window.removeEventListener('resize', scheduleRebuild);
    document.fonts?.removeEventListener('loadingdone', rebuild);
    states.forEach((state) => state.targets.forEach((target) => target.removeAttribute(PENDING)));
  }, { once: true });
}
