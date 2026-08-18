import { gsap } from 'gsap';

import { prefersReducedMotion } from './utils';

const PAGE_TRANSITION = {
  coverDuration: 0.82,
  holdDuration: 0.1,
  revealDuration: 0.92,
  ease: 'power4.inOut',
};

const OVERLAY_CLASS = 'page-transition-overlay';
const OVERLAY_SELECTOR = '[data-page-transition-overlay], .page-transition-overlay';
const TRANSITION_STORAGE_KEY = 'site-page-transition';
const TRANSITION_STORAGE_VALUE = 'pending';
const PENDING_CLASS = 'is-page-transition-pending';
const IGNORED_LINK_SELECTOR = [
  '[data-transition="false"]',
  '[data-lightbox-src]',
  '.js-lightbox',
  '[data-modal-open]',
  '[data-modal-close]',
  '[data-back-button]',
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
    return existing;
  }

  const overlay = document.createElement('div');
  overlay.className = OVERLAY_CLASS;
  overlay.setAttribute('data-page-transition-overlay', '');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.append(overlay);
  return overlay;
}

function hasModifierKey(event: MouseEvent): boolean {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
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

function getNavigableUrl(link: HTMLAnchorElement): URL | null {
  const href = link.getAttribute('href')?.trim() ?? '';

  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return null;
  }

  let url: URL;

  try {
    url = new URL(link.href, window.location.href);
  } catch {
    return null;
  }

  if (url.origin !== window.location.origin) {
    return null;
  }

  if (url.href === window.location.href || (url.pathname === window.location.pathname && url.search === window.location.search)) {
    return null;
  }

  return url;
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
function revealPage(overlay: HTMLElement): void {
  if (prefersReducedMotion() || !consumeTransitionPending()) {
    gsap.set(overlay, { yPercent: -100, y: 0 });
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
      },
    },
  );
}

function navigateWithTransition(url: URL, overlay: HTMLElement): void {
  isTransitioning = true;
  markTransitionPending();

  gsap.killTweensOf(overlay);
  gsap.fromTo(
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
  );
}

function resetOverlayOnPageShow(event: PageTransitionEvent, overlay: HTMLElement): void {
  if (!event.persisted) {
    return;
  }

  isTransitioning = false;
  consumeTransitionPending();
  gsap.set(overlay, { yPercent: -100, y: 0 });
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
  revealPage(overlay);

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
    navigateWithTransition(url, overlay);
  }, true);

  window.addEventListener('pageshow', (event) => resetOverlayOnPageShow(event, overlay));
}

primePendingClass();
