import { gsap } from 'gsap';

import { collapseSiteMenu } from './site-menu';
import { afterSitePreloader } from './site-preloader-state';
import { getNavigableUrl, hasModifierKey, prefersReducedMotion } from './utils';

const PAGE_TRANSITION = {
  coverDuration: 0.82,
  holdDuration: 0.1,
  revealDuration: 0.92,
  ease: 'power4.inOut',
};

const OVERLAY_CLASS = 'page-transition-overlay';
const OVERLAY_SELECTOR = '[data-page-transition-overlay], .page-transition-overlay';
const TITLE_CLASS = 'page-transition-overlay__title';
const TRANSITION_STORAGE_KEY = 'site-page-transition';
const TRANSITION_TITLE_STORAGE_KEY = 'site-page-transition-title';
const TRANSITION_STORAGE_VALUE = 'pending';
const PENDING_CLASS = 'is-page-transition-pending';
const MENU_SELECTOR = '[data-site-menu]';
const INTRO_FADE_SELECTORS = [
  '.top_bar_section',
  '.werk_hero_dots',
  '.werk_hero_slide .u-slide-info',
] as const;
const IGNORED_LINK_SELECTOR = [
  '[data-transition="false"]',
  '[data-lightbox-src]',
  '.js-lightbox',
  '[data-modal-open]',
  '[data-modal-close]',
  '[data-back-button]',
  '[data-work-overlay-trigger]',
  '[download]',
].join(',');

let initialized = false;
let isTransitioning = false;

function syncPendingClass(isPending: boolean): void {
  document.documentElement.classList.toggle(PENDING_CLASS, isPending);
}

function primePendingClass(): void {
  try {
    syncPendingClass(window.sessionStorage.getItem(TRANSITION_STORAGE_KEY) === TRANSITION_STORAGE_VALUE);
  } catch {
    syncPendingClass(false);
  }
}

function ensureOverlay(): HTMLElement {
  const existing = document.querySelector<HTMLElement>(OVERLAY_SELECTOR);

  if (existing) {
    existing.classList.add(OVERLAY_CLASS);
    existing.setAttribute('data-page-transition-overlay', '');
    existing.setAttribute('aria-hidden', 'true');
    ensureTitle(existing);
    return existing;
  }

  const overlay = document.createElement('div');
  overlay.className = OVERLAY_CLASS;
  overlay.setAttribute('data-page-transition-overlay', '');
  overlay.setAttribute('aria-hidden', 'true');
  ensureTitle(overlay);
  document.body.append(overlay);
  return overlay;
}

function ensureTitle(overlay: HTMLElement): HTMLElement {
  let title = overlay.querySelector<HTMLElement>(`.${TITLE_CLASS}`);

  if (!title) {
    title = document.createElement('span');
    title.className = TITLE_CLASS;
    overlay.append(title);
  }

  try {
    if (window.sessionStorage.getItem(TRANSITION_STORAGE_KEY) === TRANSITION_STORAGE_VALUE) {
      title.textContent = window.sessionStorage.getItem(TRANSITION_TITLE_STORAGE_KEY) ?? '';
    }
  } catch {
    // The title is optional when storage is unavailable.
  }

  return title;
}

function getTransitionTitle(url: URL, link: HTMLAnchorElement): string {
  const clean = (value: string | null | undefined): string => value?.replace(/\s+/g, ' ').trim() ?? '';
  const explicit = clean(link.closest<HTMLElement>('[data-transition-title]')?.getAttribute('data-transition-title'));
  if (explicit) return explicit;

  const destinationPath = url.pathname.replace(/\/$/, '') || '/';
  const menuLink = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-site-menu-link][href]')).find((candidate) => {
    try {
      return (new URL(candidate.href).pathname.replace(/\/$/, '') || '/') === destinationPath;
    } catch {
      return false;
    }
  });
  const menuTitle = clean(menuLink?.getAttribute('data-site-menu-label')) || clean(menuLink?.textContent);
  if (menuTitle) return menuTitle;

  const card = link.closest<HTMLElement>('article, [class*="card"]');
  const heading = clean(link.querySelector('h1, h2, h3, h4')?.textContent)
    || clean(card?.querySelector('h1, h2, h3, h4')?.textContent);
  if (heading) return heading;

  const linkText = clean(link.textContent);
  if (linkText && linkText.length <= 60 && !/^(mehr|weiter|lesen|details|öffnen)/i.test(linkText)) {
    return linkText;
  }

  const segment = url.pathname.split('/').filter(Boolean).pop();
  if (!segment) return 'Startseite';
  try {
    return decodeURIComponent(segment).replace(/[-_]+/g, ' ').replace(/\b\p{L}/gu, (letter) => letter.toUpperCase());
  } catch {
    return segment.replace(/[-_]+/g, ' ');
  }
}

function isIgnoredLink(link: HTMLAnchorElement): boolean {
  return Boolean(
    link.closest(IGNORED_LINK_SELECTOR) ||
      link.getAttribute('data-transition') === 'false' ||
      (link.target && link.target !== '_self') ||
      link.hasAttribute('download') ||
      link.getAttribute('href')?.trim().startsWith('#'),
  );
}

function shouldTransition(event: MouseEvent, link: HTMLAnchorElement): boolean {
  return !isTransitioning && !event.defaultPrevented && !hasModifierKey(event) && !isIgnoredLink(link);
}

function markTransitionPending(): void {
  try {
    window.sessionStorage.setItem(TRANSITION_STORAGE_KEY, TRANSITION_STORAGE_VALUE);
    syncPendingClass(true);
  } catch {
    // Storage can be unavailable in private or embedded contexts; the exit animation still works.
  }
}

function consumeTransitionPending(): boolean {
  try {
    const hasPendingTransition = window.sessionStorage.getItem(TRANSITION_STORAGE_KEY) === TRANSITION_STORAGE_VALUE;
    window.sessionStorage.removeItem(TRANSITION_STORAGE_KEY);
    window.sessionStorage.removeItem(TRANSITION_TITLE_STORAGE_KEY);
    syncPendingClass(false);
    return hasPendingTransition;
  } catch {
    syncPendingClass(false);
    return false;
  }
}

/*
 * Der y-Anteil wird ueberall explizit auf 0 gepinnt.
 *
 * gsap.set(overlay, { yPercent: -100 }) schreibt inline
 * `transform: translate3d(0px, -100%, 0px)`. Beim naechsten Zugriff liest GSAP
 * dieses -100% als Pixel-y (eine Viewporthoehe) zurueck und rechnet das neue
 * yPercent obendrauf — die Cover-Animation lief dann von -200% auf -100% und
 * damit komplett ausserhalb des Viewports. Mit y: 0 kommt die Position immer
 * allein aus yPercent.
 */
function revealPage(overlay: HTMLElement, introFadeTargets: HTMLElement[] = []): void {
  const hasPendingTransition = consumeTransitionPending();
  const menus = Array.from(document.querySelectorAll<HTMLElement>(MENU_SELECTOR));
  const revealMenus = (): void => {
    menus.forEach((menu) => {
      gsap.fromTo(menu, {
        y: Math.max(0, window.innerHeight - menu.getBoundingClientRect().top) + 8,
        autoAlpha: 1,
      }, {
        y: 0,
        delay: introFadeTargets.length ? 0.12 : 0,
        duration: 0.55,
        ease: 'power3.out',
        clearProps: 'transform,opacity,visibility',
      });
    });
  };

  const revealIntroDetails = (): void => {
    INTRO_FADE_SELECTORS.forEach((selector, index) => {
      const targets = introFadeTargets.filter((element) => element.matches(selector));
      if (!targets.length) return;
      gsap.to(targets, {
        autoAlpha: 1,
        delay: 0.18 + index * 0.1,
        duration: 0.7,
        ease: 'power2.out',
        clearProps: 'opacity,visibility',
      });
    });
  };

  if (prefersReducedMotion()) {
    gsap.set(overlay, { yPercent: -100, y: 0 });
    return;
  }

  gsap.set(menus, { autoAlpha: 0 });

  if (!hasPendingTransition) {
    gsap.set(overlay, { yPercent: -100, y: 0 });
    revealMenus();
    revealIntroDetails();
    return;
  }

  gsap.fromTo(
    overlay,
    { yPercent: 0, y: 0 },
    {
      yPercent: 100,
      delay: PAGE_TRANSITION.holdDuration,
      duration: PAGE_TRANSITION.revealDuration,
      ease: PAGE_TRANSITION.ease,
      onComplete: () => {
        gsap.set(overlay, { yPercent: -100, y: 0 });
        revealMenus();
        revealIntroDetails();
      },
    },
  );
}

function navigateWithTransition(url: URL, overlay: HTMLElement, menu: HTMLElement | null, titleText: string): void {
  isTransitioning = true;
  gsap.killTweensOf(overlay);
  const title = ensureTitle(overlay);
  title.textContent = titleText;
  gsap.set(title, { autoAlpha: 0, y: 18 });
  try {
    window.sessionStorage.setItem(TRANSITION_TITLE_STORAGE_KEY, titleText);
  } catch {
    // The outgoing page can still show the title without storage.
  }

  const transition = gsap.timeline();

  if (menu) {
    gsap.killTweensOf(menu);
    const collapse = collapseSiteMenu(menu);
    if (collapse) {
      transition.add(collapse);
    }
  }

  const coverStart = 0;
  transition.call(markTransitionPending, [], coverStart);
  transition.fromTo(
    overlay,
    { yPercent: -100, y: 0 },
    {
      yPercent: 0,
      duration: PAGE_TRANSITION.coverDuration,
      ease: PAGE_TRANSITION.ease,
      onComplete: () => {
        window.location.href = url.href;
      },
    },
    coverStart,
  );
  transition.to(title, {
    autoAlpha: 1,
    y: 0,
    duration: 0.35,
    ease: 'power2.out',
  }, coverStart + 0.4);
}

function resetOverlayOnPageShow(event: PageTransitionEvent, overlay: HTMLElement, introFadeTargets: HTMLElement[]): void {
  if (!event.persisted) {
    return;
  }

  isTransitioning = false;
  consumeTransitionPending();
  gsap.killTweensOf(overlay);
  gsap.set(overlay, { yPercent: -100, y: 0 });
  ensureTitle(overlay).textContent = '';
  const menus = document.querySelectorAll<HTMLElement>(MENU_SELECTOR);
  gsap.killTweensOf(menus);
  gsap.set(menus, { clearProps: 'transform,opacity,visibility' });
  gsap.killTweensOf(introFadeTargets);
  gsap.set(introFadeTargets, { clearProps: 'opacity,visibility' });
  const panels = document.querySelectorAll<HTMLElement>('[data-site-menu-panel]');
  gsap.killTweensOf(panels);
  gsap.set(panels, { clearProps: 'height' });
}

export function initPageTransitions(): void {
  if (initialized) {
    return;
  }

  if (!document.body) {
    document.addEventListener('DOMContentLoaded', initPageTransitions, { once: true });
    return;
  }

  initialized = true;

  const overlay = ensureOverlay();
  const hasPreloader = Boolean(window.__sitePreloader?.active);
  const animateIntro = hasPreloader && !prefersReducedMotion();
  const introFadeTargets = animateIntro
    ? Array.from(document.querySelectorAll<HTMLElement>(INTRO_FADE_SELECTORS.join(', ')))
    : [];
  if (animateIntro) {
    gsap.set(document.querySelectorAll<HTMLElement>(MENU_SELECTOR), { autoAlpha: 0 });
    gsap.set(introFadeTargets, { autoAlpha: 0 });
  }
  afterSitePreloader(() => revealPage(overlay, introFadeTargets));

  document.addEventListener('click', (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const link = target.closest<HTMLAnchorElement>('a[href]');

    if (!link) {
      return;
    }

    if (isTransitioning) {
      event.preventDefault();
      return;
    }

    if (!shouldTransition(event, link)) {
      return;
    }

    const url = getNavigableUrl(link);

    if (!url || prefersReducedMotion()) {
      return;
    }

    event.preventDefault();
    navigateWithTransition(url, overlay, link.closest<HTMLElement>(MENU_SELECTOR), getTransitionTitle(url, link));
  }, true);

  window.addEventListener('pageshow', (event) => resetOverlayOnPageShow(event, overlay, introFadeTargets));
}

primePendingClass();
