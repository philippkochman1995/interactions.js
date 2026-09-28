import { PRELOADER_SELECTOR } from './site-preloader-state';

/**
 * Start every native Webflow scene request before the deferred application bundle.
 * This only warms the HTTP cache; runtime readiness is tracked separately through
 * Webflow's w-spline-load event and never inferred from this Promise.
 */
export function primeSplinePreloads(): void {
  const preloads = window.__siteSplinePreloads ??= new Map<string, Promise<void>>();
  for (const element of Array.from(document.querySelectorAll<HTMLElement>('[data-animation-type="spline"][data-spline-url]'))) {
    const value = element.getAttribute('data-spline-url');
    if (!value) continue;
    let url: URL;
    try { url = new URL(value, document.baseURI); } catch { continue; }
    if (!/^https?:$/.test(url.protocol) || preloads.has(url.href)) continue;
    const request = fetch(url.href, { cache: 'force-cache', credentials: 'omit' })
      .then(async (response) => { if (response.ok) await response.arrayBuffer(); })
      .catch(() => undefined);
    preloads.set(url.href, request);
  }
}

export function createSitePreloader(): void {
  const state = window.__sitePreloader;
  if (!state?.active || document.querySelector(PRELOADER_SELECTOR)) return;
  const overlay = document.createElement('div');
  overlay.className = 'site-preloader';
  overlay.setAttribute('data-site-preloader', '');
  overlay.setAttribute('data-lenis-prevent', '');
  overlay.setAttribute('role', 'progressbar');
  overlay.setAttribute('aria-label', document.documentElement.lang.startsWith('de') ? 'Website wird geladen' : 'Loading website');
  overlay.setAttribute('aria-valuemin', '0');
  overlay.setAttribute('aria-valuemax', '100');
  overlay.setAttribute('aria-valuenow', '0');
  const percent = document.createElement('div');
  percent.className = 'site-preloader__progress';
  percent.setAttribute('aria-hidden', 'true');
  for (let index = 0; index < 3; index++) {
    const digit = document.createElement('span');
    digit.className = 'site-preloader__digit';
    digit.hidden = index < 2;
    const track = document.createElement('span');
    track.className = 'site-preloader__track';
    for (let row = 0; row < 2; row++) {
      const value = document.createElement('span');
      value.textContent = '0';
      track.appendChild(value);
    }
    digit.appendChild(track);
    percent.appendChild(digit);
  }
  const suffix = document.createElement('span');
  suffix.textContent = '%';
  percent.appendChild(suffix);
  const name = document.createElement('div');
  name.className = 'site-preloader__name';
  name.setAttribute('aria-hidden', 'true');
  for (const text of ['Franz West', '1947—2012']) {
    const line = document.createElement('div');
    line.textContent = text;
    name.appendChild(line);
  }
  const signature = document.createElement('img');
  signature.className = 'site-preloader__signature';
  signature.alt = '';
  signature.width = 1507;
  signature.height = 642;
  signature.loading = 'eager';
  const script = document.currentScript as HTMLScriptElement | null;
  signature.src = new URL('../assets/preloader-signature.svg', script?.src || new URL('dist/site-body.js', document.baseURI).href).href;
  overlay.appendChild(percent);
  overlay.appendChild(name);
  overlay.appendChild(signature);
  document.body.appendChild(overlay);

  const locked = new Map<HTMLElement, boolean>();
  const lockContent = (): void => {
    for (const child of Array.from(document.body.children)) {
      if (!(child instanceof HTMLElement) || child === overlay || /^(SCRIPT|STYLE|LINK)$/.test(child.tagName) || locked.has(child)) continue;
      locked.set(child, child.inert);
      child.inert = true;
    }
  };
  lockContent();
  const observer = new MutationObserver(lockContent);
  observer.observe(document.body, { childList: true });
  state.cleanup.push(() => {
    observer.disconnect();
    locked.forEach((wasInert, element) => { element.inert = wasInert; });
    locked.clear();
  });
}
