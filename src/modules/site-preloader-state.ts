// Shared by the two classic boot bundles and the deferred module. No GSAP here:
// the head watchdog must be able to release the page even if the main bundle fails.
export const PRELOADER_CLASS = 'is-site-preloading';
export const PRELOADER_SELECTOR = '[data-site-preloader]';
export const PRELOADER_STORAGE_KEY = 'site-preloader-seen';
export const PRELOADER_STORAGE_VERSION = '2';
export const PRELOADER_TIMEOUT = 6000;
export const PRELOADER_MINIMUM = 2000;

export interface PreloaderState {
  active: boolean;
  startedAt: number;
  ready: Promise<void>;
  cleanup: Array<() => void>;
  release: () => void;
}

declare global {
  interface Window {
    __sitePreloader?: PreloaderState;
    __siteSplinePreloads?: Map<string, Promise<void>>;
  }
}

export function primeSitePreloader(): void {
  if (window.__sitePreloader) return;
  const root = document.documentElement;
  try {
    if (window.sessionStorage.getItem(PRELOADER_STORAGE_KEY) === PRELOADER_STORAGE_VERSION) return;
    // Mark the attempt, including a timeout, so a failed asset cannot repeat the intro.
    window.sessionStorage.setItem(PRELOADER_STORAGE_KEY, PRELOADER_STORAGE_VERSION);
  } catch { /* No storage: one attempt for this document, still bounded by the watchdog. */ }

  // An incoming navigation already has its own visual handover.
  if (root.classList.contains('is-work-flip-pending') || root.classList.contains('is-page-transition-pending')) return;

  let resolveReady!: () => void;
  const ready = new Promise<void>((resolve) => { resolveReady = resolve; });
  const state: PreloaderState = {
    active: true, startedAt: Date.now(), ready, cleanup: [],
    release: () => {
      if (!state.active) return;
      state.active = false;
      root.classList.remove(PRELOADER_CLASS);
      document.querySelector(PRELOADER_SELECTOR)?.remove();
      state.cleanup.splice(0).forEach((cleanup) => { try { cleanup(); } catch { /* Release all owners. */ } });
      resolveReady();
    },
  };
  window.__sitePreloader = state;
  root.classList.add(PRELOADER_CLASS);
  const timeout = window.setTimeout(state.release, PRELOADER_TIMEOUT);
  const onPageShow = (event: PageTransitionEvent): void => { if (event.persisted) state.release(); };
  const preventScroll = (event: Event): void => { if (event.cancelable) event.preventDefault(); };
  window.addEventListener('pagehide', state.release);
  window.addEventListener('pageshow', onPageShow);
  window.addEventListener('wheel', preventScroll, { passive: false, capture: true });
  window.addEventListener('touchmove', preventScroll, { passive: false, capture: true });
  state.cleanup.push(() => {
    window.clearTimeout(timeout);
    window.removeEventListener('pagehide', state.release);
    window.removeEventListener('pageshow', onPageShow);
    window.removeEventListener('wheel', preventScroll, true);
    window.removeEventListener('touchmove', preventScroll, true);
  });

  // Capture non-bubbling ready events even before the deferred module arrives.
  const rememberSpline = (event: Event): void => {
    if (event.target instanceof Element) event.target.setAttribute('data-site-spline-ready', '');
  };
  for (const name of ['load-complete', 'w-spline-load', 'site:spline-ready']) {
    document.addEventListener(name, rememberSpline, true);
    state.cleanup.push(() => document.removeEventListener(name, rememberSpline, true));
  }
}

export function afterSitePreloader(callback: () => void): void {
  const state = window.__sitePreloader;
  if (state?.active) void state.ready.then(callback);
  else callback();
}
