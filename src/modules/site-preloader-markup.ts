import { PRELOADER_SELECTOR } from './site-preloader-state';
import { PRELOADER_FINAL_SIGNATURE_INDEX, setPageSignatureVariant, SIGNATURE_VARIANTS } from './signature-variants';
import { isInactiveHeroSplineScene } from './spline-slider';

const INTRO = { title: 300, date: 1125, settle: 2550, loading: 3350 } as const;

/**
 * Start native Webflow scene requests before the deferred application bundle.
 * Inactive hero-carousel scenes are not fetched a second time by this helper;
 * Webflow remains responsible for their runtime loading.
 */
export function primeSplinePreloads(): void {
  const preloads = window.__siteSplinePreloads ??= new Map<string, Promise<void>>();
  for (const element of Array.from(document.querySelectorAll<HTMLElement>('[data-animation-type="spline"][data-spline-url]'))) {
    if (isInactiveHeroSplineScene(element)) continue;
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
  const progressMask = document.createElement('div');
  progressMask.className = 'site-preloader__progress-mask';
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
  suffix.className = 'site-preloader__suffix';
  suffix.textContent = '%';
  percent.appendChild(suffix);
  progressMask.appendChild(percent);
  const name = document.createElement('div');
  name.className = 'site-preloader__name';
  name.setAttribute('aria-hidden', 'true');
  for (const [index, text] of ['Franz West', '1947—2012'].entries()) {
    const line = document.createElement('div');
    line.className = index === 0 ? 'site-preloader__title' : 'site-preloader__date';
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
  const scriptBase = script?.getAttribute('data-site-script-base') || script?.src
    || new URL('dist/site-body.js', document.baseURI).href;
  signature.src = new URL('../assets/preloader-signature.svg', scriptBase).href;
  const signatureVariant = document.createElement('span');
  signatureVariant.className = 'site-preloader__signature-variant';
  signatureVariant.setAttribute('aria-hidden', 'true');
  const signatureStage = document.createElement('div');
  signatureStage.className = 'site-preloader__signature-stage';
  signatureStage.setAttribute('aria-hidden', 'true');
  signatureStage.appendChild(signature);
  signatureStage.appendChild(signatureVariant);
  overlay.appendChild(progressMask);
  overlay.appendChild(name);
  overlay.appendChild(signatureStage);
  document.body.appendChild(overlay);

  const active = PRELOADER_FINAL_SIGNATURE_INDEX;
  setPageSignatureVariant(active);
  let live = false;
  let currentIndex = -1;
  const widths = [175 * 1.75, 199, 222, 226, 227, 227, 227];
  const renderSignature = (index: number): void => {
    if (index === currentIndex) return;
    currentIndex = index;
    overlay.setAttribute('data-signature-index', String(index));
    signatureStage.style.setProperty('--signature-width', `${widths[index] / 227 * 100}%`);
    if (index === 0) {
      signature.style.visibility = 'visible';
      signatureVariant.style.display = 'none';
    } else {
      const mask = `url("${SIGNATURE_VARIANTS[index - 1]}")`;
      signatureVariant.style.maskImage = mask;
      signatureVariant.style.setProperty('-webkit-mask-image', mask);
      signatureVariant.style.display = 'block';
      signature.style.visibility = 'hidden';
    }
    if (live && !reduced) {
      signatureStage.classList.remove('is-impact');
      void signatureStage.offsetWidth;
      signatureStage.classList.add('is-impact');
    }
  };
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const timers: number[] = [];
  let finishIntro!: () => void;
  state.introReady = new Promise<void>((resolve) => { finishIntro = resolve; });
  state.setSignatureIndex = renderSignature;
  const schedule = (callback: () => void, delay: number): void => {
    timers.push(window.setTimeout(() => { if (state.active) callback(); }, delay));
  };
  const startIntro = (): void => {
    if (!state.active) return;
    // With its final bottom inset, move the whole block so its first position
    // is exactly centered; the same transform later settles it at the bottom.
    const bottom = Math.max(36, Math.min(window.innerHeight * .08, 72));
    const dy = window.innerHeight / 2 - bottom - name.offsetHeight / 2;
    name.style.setProperty('--intro-shift', `${-dy}px`);
    name.classList.add('is-ready');
    if (reduced) {
      name.classList.add('is-settled');
      name.children[0].classList.add('is-visible');
      name.children[1].classList.add('is-visible');
      overlay.classList.add('is-loading');
      live = true;
      renderSignature(0);
      state.sceneTwoStartedAt = Date.now();
      finishIntro();
      return;
    }
    schedule(() => name.children[0].classList.add('is-visible'), INTRO.title);
    schedule(() => name.children[1].classList.add('is-visible'), INTRO.date);
    schedule(() => name.classList.add('is-settled'), INTRO.settle);
    schedule(() => {
      overlay.classList.add('is-loading');
      live = true;
      renderSignature(0); // The first impact begins only when the stage appears.
      state.sceneTwoStartedAt = Date.now();
      finishIntro();
    }, INTRO.loading);
  };
  if (document.fonts?.ready) void document.fonts.ready.then(startIntro, startIntro);
  state.cleanup.push(() => {
    timers.forEach(window.clearTimeout);
    finishIntro();
    state.setSignatureIndex = undefined;
  });

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
