import { afterSitePreloader } from './site-preloader-state';
import { closeSiteMenuBeforeTransition } from './site-menu';
import { getNavigableUrl, hasModifierKey, prefersReducedMotion } from './utils';

// The matching easing and duration variables live in the curtain CSS block.
const TIME = { titleStart: 240, navigate: 720, hold: 416, uncoverStart: 776, reset: 1976, watchdog: 6000 };
const INTRO_FADE_SELECTORS = ['.top_bar_section', '.werk_hero_dots', '.werk_hero_slide .u-slide-info'] as const;
const INTRO = { delay: 225, stagger: 125, fade: 700, menuGap: 80, menu: 550 };
const HOME_INTRO = { fade: 1200, easing: 'ease-in-out' };
const STORAGE_KEY = 'pt';
const OVERLAY_SELECTOR = '[data-page-transition-overlay], .page-transition-overlay';
const PENDING_CLASS = 'is-page-transition-pending';
const IGNORED_LINKS = [
  '[data-transition="false"]', '[data-lightbox-src]', '.js-lightbox',
  '[data-modal-open]', '[data-modal-close]', '[data-back-button]',
  '[data-work-overlay-trigger]', '[download]',
].join(',');

let initialized = false;
let busy = false;
let timers: number[] = [];

function later(callback: () => void, delay: number): void {
  timers.push(window.setTimeout(callback, delay));
}

function clearTimers(): void {
  timers.forEach((timer) => window.clearTimeout(timer));
  timers = [];
}

function storedTitle(): string {
  try { return window.sessionStorage.getItem(STORAGE_KEY) ?? ''; }
  catch { return ''; }
}

function clearPending(): void {
  try { window.sessionStorage.removeItem(STORAGE_KEY); } catch { /* Storage is optional. */ }
  document.documentElement.classList.remove(PENDING_CLASS, 'is-page-transition-boot');
}

function ensureOverlay(): HTMLElement {
  let overlay = document.querySelector<HTMLElement>(OVERLAY_SELECTOR);
  if (!overlay) {
    overlay = document.createElement('div');
    document.body.append(overlay);
  }
  overlay.classList.add('curtain', 'page-transition-overlay');
  overlay.setAttribute('data-page-transition-overlay', '');
  overlay.setAttribute('aria-hidden', 'true');
  if (!overlay.querySelector('.page-transition-overlay__title')) {
    const title = document.createElement('span');
    title.className = 'page-transition-overlay__title';
    overlay.append(title);
  }
  overlay.querySelector('.page-transition-overlay__title')?.setAttribute('aria-live', 'polite');
  return overlay;
}

function titleFor(url: URL, link: HTMLAnchorElement): string {
  const clean = (value: string | null | undefined): string => value?.replace(/\s+/g, ' ').trim() ?? '';
  const explicit = clean(link.getAttribute('data-page-name') || link.getAttribute('data-transition-title')
    || link.closest<HTMLElement>('[data-page-name], [data-transition-title]')?.getAttribute('data-page-name')
    || link.closest<HTMLElement>('[data-transition-title]')?.getAttribute('data-transition-title'));
  if (explicit) return explicit;
  const path = url.pathname.replace(/\/$/, '') || '/';
  const menuLink = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-site-menu-link][href]')).find((item) => {
    try { return (new URL(item.href).pathname.replace(/\/$/, '') || '/') === path; }
    catch { return false; }
  });
  const menuTitle = clean(menuLink?.getAttribute('data-site-menu-label') || menuLink?.textContent);
  if (menuTitle) return menuTitle;
  const card = link.closest<HTMLElement>('article, [class*="card"]');
  const heading = clean(link.querySelector('h1, h2, h3, h4')?.textContent || card?.querySelector('h1, h2, h3, h4')?.textContent);
  if (heading) return heading;
  const linkText = clean(link.textContent);
  if (linkText && linkText.length <= 60 && !/^(mehr|weiter|lesen|details|öffnen)/i.test(linkText)) return linkText;
  const segment = url.pathname.split('/').filter(Boolean).pop();
  if (!segment) return 'Startseite';
  try { return decodeURIComponent(segment).replace(/[-_]+/g, ' '); }
  catch { return segment.replace(/[-_]+/g, ' '); }
}

function pageContent(): HTMLElement | null {
  return document.querySelector<HTMLElement>('main, [role="main"]');
}

function canMoveContent(main: HTMLElement | null): main is HTMLElement {
  // Translating a whole WebGL/video scene while clipping the viewport stalls
  // compositing on the media-heavy pages. The curtain still carries the handoff.
  return Boolean(main && !main.querySelector('canvas, iframe, video, [data-animation-type="spline"]'));
}

// A plain-text h1 can be split without destroying nested Webflow markup.
function prepareHeading(main: HTMLElement | null): void {
  const heading = main?.querySelector<HTMLElement>('h1');
  if (!heading || heading.matches('[data-masked-line-reveal], .atelier_hero_section .atelier_slide_heading, .bio_hero_section .bio_hero_heading')
    || heading.children.length || !heading.textContent?.trim()) return;
  const words = heading.textContent.trim().split(/\s+/);
  heading.setAttribute('data-reveal', 'off');
  heading.setAttribute('aria-label', words.join(' '));
  heading.textContent = '';
  words.forEach((word, index) => {
    if (index) heading.append(document.createTextNode(' '));
    const mask = document.createElement('span');
    mask.className = 'page-transition-word-mask';
    mask.setAttribute('aria-hidden', 'true');
    const inner = document.createElement('span');
    inner.className = 'page-transition-word';
    inner.style.setProperty('--word-index', String(index));
    inner.textContent = word;
    mask.append(inner);
    heading.append(mask);
  });
  heading.classList.add('is-page-transition-heading');
}

function focusMain(main: HTMLElement | null): void {
  if (!main) return;
  if (!main.hasAttribute('tabindex')) {
    main.setAttribute('tabindex', '-1');
    main.addEventListener('blur', () => main.removeAttribute('tabindex'), { once: true });
  }
  main.focus({ preventScroll: true });
}

function reset(overlay: HTMLElement, main: HTMLElement | null): void {
  clearTimers();
  overlay.classList.add('is-resetting');
  overlay.classList.remove('is-covering', 'is-covered', 'is-title-visible', 'is-title-leaving', 'is-uncovering');
  overlay.setAttribute('aria-hidden', 'true');
  main?.classList.remove('is-page-transition-out', 'is-page-transition-in', 'is-page-transition-entered');
  document.documentElement.classList.remove('is-page-transition-entering', 'is-page-transition-covering');
  clearPending();
  busy = false;
  window.requestAnimationFrame(() => overlay.classList.remove('is-resetting'));
}

function revealIncoming(overlay: HTMLElement, main: HTMLElement | null): void {
  busy = true;
  if (prefersReducedMotion()) {
    focusMain(main);
    reset(overlay, main);
    return;
  }
  const title = overlay.querySelector<HTMLElement>('.page-transition-overlay__title');
  if (title) title.textContent = storedTitle();
  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('is-covered', 'is-title-visible');
  if (canMoveContent(main)) main.classList.add('is-page-transition-in');
  document.documentElement.classList.add('is-page-transition-entering');
  if (window.location.pathname !== '/') prepareHeading(main);
  // The head script releases the page if this bundle never starts.
  const fonts = document.fonts?.ready ?? Promise.resolve();
  void fonts.catch(() => undefined).then(() => {
    later(() => overlay.classList.add('is-title-leaving'), TIME.hold);
    later(() => {
      overlay.classList.add('is-uncovering');
      main?.classList.add('is-page-transition-entered');
      main?.querySelector('.is-page-transition-heading')?.classList.add('is-revealing');
    }, TIME.uncoverStart);
    later(() => { focusMain(main); reset(overlay, main); }, TIME.reset);
  });
}

function leave(url: URL, overlay: HTMLElement, main: HTMLElement | null, titleText: string): void {
  busy = true;
  const title = overlay.querySelector<HTMLElement>('.page-transition-overlay__title');
  if (title) title.textContent = titleText;
  overlay.setAttribute('aria-hidden', 'false');
  try { window.sessionStorage.setItem(STORAGE_KEY, titleText); } catch { /* Continue normally. */ }
  document.documentElement.classList.add('is-page-transition-covering');
  overlay.classList.add('is-covering');
  if (canMoveContent(main)) main.classList.add('is-page-transition-out');
  later(() => overlay.classList.add('is-title-visible'), TIME.titleStart);
  later(() => { window.location.href = url.href; }, TIME.navigate);
  later(() => { window.location.href = url.href; }, TIME.watchdog);
}

function restorePreloaderIntro(): void {
  if (!window.__sitePreloader?.active || prefersReducedMotion()) return;

  // Prime while the preloader still covers the page, so its exit reveals no
  // already-visible header, dots or slide eye info.
  const groups = INTRO_FADE_SELECTORS.map((selector) =>
    Array.from(document.querySelectorAll<HTMLElement>(selector)));
  const menus = Array.from(document.querySelectorAll<HTMLElement>('[data-site-menu]'));
  [...groups.flat(), ...menus].forEach((element) => { element.style.opacity = '0'; });

  afterSitePreloader(() => {
    const isHome = window.location.pathname === '/';
    const fadeDuration = isHome ? HOME_INTRO.fade : INTRO.fade;
    const animate = (element: HTMLElement, keyframes: Keyframe[], delay: number, duration: number,
      easing = 'cubic-bezier(.05, .85, .05, 1)'): void => {
      if (!element.animate) { element.style.removeProperty('opacity'); return; }
      const animation = element.animate(keyframes, {
        duration, delay, easing, fill: 'forwards',
      });
      animation.onfinish = () => {
        element.style.removeProperty('opacity');
        animation.cancel();
      };
    };
    groups.forEach((elements, index) => {
      elements.forEach((element) => animate(element, [{ opacity: 0 }, { opacity: 1 }],
        INTRO.delay + index * INTRO.stagger, fadeDuration,
        isHome ? HOME_INTRO.easing : undefined));
    });
    const lastGroup = groups.reduce((last, elements, index) => elements.length ? index : last, -1);
    const menuDelay = lastGroup < 0 ? 0
      : INTRO.delay + lastGroup * INTRO.stagger + fadeDuration + INTRO.menuGap;
    menus.forEach((menu) => {
      const distance = Math.max(0, window.innerHeight - menu.getBoundingClientRect().top) + 8;
      animate(menu, [
        { opacity: 1, transform: `translate3d(0, ${distance}px, 0)` },
        { opacity: 1, transform: 'translate3d(0, 0, 0)' },
      ], menuDelay, INTRO.menu);
    });
  });
}

export function initPageTransitions(): void {
  if (initialized) return;
  if (!document.body) {
    document.addEventListener('DOMContentLoaded', initPageTransitions, { once: true });
    return;
  }
  initialized = true;
  const overlay = ensureOverlay();
  const main = pageContent();
  const incoming = Boolean(storedTitle()) && document.documentElement.classList.contains(PENDING_CLASS);
  if (incoming) revealIncoming(overlay, main);
  else restorePreloaderIntro();

  document.addEventListener('click', (event) => {
    const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
    if (!link || event.defaultPrevented || hasModifierKey(event)) return;
    if (busy) { event.preventDefault(); return; }
    if (link.closest(IGNORED_LINKS) || (link.target && link.target !== '_self')) return;
    const url = getNavigableUrl(link);
    if (!url || url.hash || prefersReducedMotion() || window.__sitePreloader?.active) return;
    event.preventDefault();
    const title = titleFor(url, link);
    const menu = link.closest<HTMLElement>('[data-site-menu]');
    if (menu) {
      // Die Menue-Schliessanimation endet, bevor der Vorhang loslaeuft.
      busy = true;
      if (closeSiteMenuBeforeTransition(menu, () => leave(url, overlay, main, title))) return;
    }
    leave(url, overlay, main, title);
  }, true);

  window.addEventListener('pageshow', (event) => {
    if (event.persisted) reset(overlay, main);
  });
}
