import { gsap } from 'gsap';

import { prefersReducedMotion } from './utils';

const OVERLAY_SELECTOR = '[data-page-transition-overlay]';
const TRANSITION_STORAGE_KEY = 'site-page-transition';
const TRANSITION_STORAGE_VALUE = 'pending';
const EXIT_DURATION = 0.42;
const ENTRY_DURATION = 0.46;
const IGNORED_LINK_SELECTOR = [
  '[data-lightbox-src]',
  '.js-lightbox',
  '[data-modal-open]',
  '[data-modal-close]',
  '[data-back-button]',
  '[download]',
].join(',');

let initialized = false;
let isTransitioning = false;

function ensureOverlay(): HTMLElement {
  const existing = document.querySelector<HTMLElement>(OVERLAY_SELECTOR);

  if (existing) {
    return existing;
  }

  const overlay = document.createElement('div');
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
  } catch {
    // Storage can be unavailable in private or embedded contexts; the exit animation still works.
  }
}

function consumeTransitionPending(): boolean {
  try {
    const hasPendingTransition = window.sessionStorage.getItem(TRANSITION_STORAGE_KEY) === TRANSITION_STORAGE_VALUE;
    window.sessionStorage.removeItem(TRANSITION_STORAGE_KEY);
    return hasPendingTransition;
  } catch {
    return false;
  }
}

function revealPage(overlay: HTMLElement): void {
  if (prefersReducedMotion() || !consumeTransitionPending()) {
    gsap.set(overlay, { yPercent: -100 });
    return;
  }

  gsap.fromTo(
    overlay,
    { yPercent: 0 },
    {
      yPercent: 100,
      duration: ENTRY_DURATION,
      ease: 'power3.inOut',
      onComplete: () => {
        gsap.set(overlay, { yPercent: -100 });
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
    { yPercent: -100 },
    {
      yPercent: 0,
      duration: EXIT_DURATION,
      ease: 'power3.inOut',
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
  gsap.set(overlay, { yPercent: -100 });
}

export function initPageTransitions(): void {
  if (initialized) {
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
  });

  window.addEventListener('pageshow', (event) => resetOverlayOnPageShow(event, overlay));
}
