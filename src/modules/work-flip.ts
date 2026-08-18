import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

import { getNavigableUrl, hasModifierKey, prefersReducedMotion } from './utils';
import {
  WORK_FLIP_PENDING_CLASS,
  clearWorkFlipPayload,
  isBackForwardNavigation,
  readWorkFlipPayload,
  writeWorkFlipPayload,
  type WorkFlipPayload,
  type WorkFlipRect,
} from './work-flip-state';

gsap.registerPlugin(Flip);

const TIMING = {
  leave: 0.26,
  flip: 0.86,
  imageFade: 0.24,
  contentFade: 0.5,
  contentSpread: 0.3,
  ease: 'power3.inOut',
};

/**
 * Spaetestens danach gibt der Uebergang auf: Ghost weg, Seite sichtbar. Ohne diesen
 * Wachhund bliebe die Zielseite unsichtbar, falls das Zielbild nie auftaucht.
 */
const TARGET_TIMEOUT = 2600;

const GHOST_CLASS = 'work-flip-ghost';
const GHOST_SELECTOR = '[data-work-flip-ghost]';
const CARD_LINK_SELECTOR = 'a[data-work-flip]';
const CARD_IMAGE_WRAP_SELECTOR = '.cms-works__image-wrap';
const CARD_IMAGE_SELECTOR = 'img';
const BACK_TRIGGER_SELECTOR = '[data-work-flip-back], [data-back-button]';
const DETAIL_IMAGE_SELECTOR = '[data-work-flip-target]';
const WORK_ID_ATTRIBUTE = 'data-work-flip-id';
const WORKS_READY_EVENT = 'site:works-ready';
const DETAIL_READY_EVENT = 'site:work-detail-ready';
const NON_VISUAL_TAGS = ['SCRIPT', 'STYLE', 'LINK', 'NOSCRIPT', 'TEMPLATE', 'META'];
const FADED_ATTRIBUTE = 'data-work-flip-faded';
const HIDDEN_ATTRIBUTE = 'data-work-flip-hidden';

let initialized = false;
let isLeaving = false;
let lastLinkClickAt = 0;

function rectOf(element: Element): WorkFlipRect {
  const bounds = element.getBoundingClientRect();

  return {
    top: bounds.top,
    left: bounds.left,
    width: bounds.width,
    height: bounds.height,
  };
}

function isVisualElement(node: Element): node is HTMLElement {
  return node instanceof HTMLElement && !NON_VISUAL_TAGS.includes(node.tagName);
}

function createGhost(rect: WorkFlipRect, src: string): HTMLElement {
  const ghost = document.createElement('div');
  const image = document.createElement('img');

  ghost.className = GHOST_CLASS;
  ghost.setAttribute('data-work-flip-ghost', '');
  ghost.setAttribute('aria-hidden', 'true');
  ghost.style.top = `${rect.top}px`;
  ghost.style.left = `${rect.left}px`;
  ghost.style.width = `${rect.width}px`;
  ghost.style.height = `${rect.height}px`;

  image.src = src;
  image.alt = '';
  image.decoding = 'sync';

  ghost.append(image);
  document.body.append(ghost);

  return ghost;
}

function findGhost(): HTMLElement | null {
  return document.querySelector<HTMLElement>(GHOST_SELECTOR);
}

function removeGhosts(): void {
  Array.from(document.querySelectorAll<HTMLElement>(GHOST_SELECTOR)).forEach((ghost) => {
    gsap.killTweensOf(ghost);
    ghost.remove();
  });
}

/**
 * Raeumt eine Uebergabe auf, die nicht animiert wird. Das Inline-Snippet baut den Ghost
 * schon vor dem ersten Paint auf; wird die Uebergabe hier verworfen, muss er wieder weg.
 */
function discardArrival(): void {
  document.documentElement.classList.remove(WORK_FLIP_PENDING_CLASS);
  removeGhosts();
  clearWorkFlipPayload();
}

function findWorkElement(workId: string): HTMLElement | null {
  if (!workId) {
    return null;
  }

  return (
    Array.from(document.querySelectorAll<HTMLElement>(`[${WORK_ID_ATTRIBUTE}]`)).find(
      (element) => element.getAttribute(WORK_ID_ATTRIBUTE) === workId,
    ) ?? null
  );
}

/**
 * Alle Elemente, die neben dem Zielbild liegen: Geschwister des Bildes, Geschwister
 * seiner Eltern und so weiter bis zum Body. Genau diese werden waehrend des Flips
 * unsichtbar gehalten und danach eingeblendet; die Vorfahren selbst bleiben sichtbar,
 * damit das Zielbild an seinem Platz erscheinen kann.
 */
function collectSurroundingElements(focus: Element, ignored: Element[]): HTMLElement[] {
  const skipped = new Set<Element>(ignored);
  const surrounding: HTMLElement[] = [];
  let node: Element | null = focus;

  while (node && node !== document.body && node.parentElement) {
    const current: Element = node;

    Array.from(current.parentElement?.children ?? []).forEach((child) => {
      if (child === current || skipped.has(child) || !isVisualElement(child)) {
        return;
      }

      surrounding.push(child);
    });

    node = current.parentElement;
  }

  return surrounding;
}

function pageFadeTargets(ghost: HTMLElement): HTMLElement[] {
  return Array.from(document.body.children).filter(
    (child): child is HTMLElement => child !== ghost && isVisualElement(child),
  );
}

/** Merkt die Elemente, deren Sichtbarkeit vom Uebergang veraendert wurde. */
function markFaded(elements: HTMLElement[]): HTMLElement[] {
  elements.forEach((element) => element.setAttribute(FADED_ATTRIBUTE, ''));
  return elements;
}

function restoreFaded(elements: HTMLElement[]): void {
  gsap.set(elements, { clearProps: 'opacity,visibility' });
  elements.forEach((element) => element.removeAttribute(FADED_ATTRIBUTE));
}

function isUsableRect(rect: WorkFlipRect): boolean {
  return rect.width > 0 && rect.height > 0;
}

function ratioOf(rect: WorkFlipRect): number {
  return rect.height > 0 ? rect.width / rect.height : 0;
}

/**
 * Das Zielbild bestimmt seine Hoehe erst, wenn es geladen ist - so lange waere die
 * Zielgeometrie falsch. Beide Seiten zeigen dasselbe Motiv, also wird das bekannte
 * Seitenverhaeltnis vorab gesetzt und die Animation startet sofort.
 */
function prepareTarget(target: HTMLImageElement, payload: WorkFlipPayload): void {
  if ((target.complete && target.naturalWidth > 0) || !payload.ratio) {
    return;
  }

  target.style.aspectRatio = String(payload.ratio);
  target.setAttribute('data-work-flip-ratio', '');
}

function releaseTarget(target: HTMLImageElement): void {
  if (!target.hasAttribute('data-work-flip-ratio')) {
    return;
  }

  target.style.aspectRatio = '';
  target.removeAttribute('data-work-flip-ratio');
}

function whenImageReady(image: HTMLImageElement, callback: () => void): void {
  const run = () => window.requestAnimationFrame(() => window.requestAnimationFrame(callback));

  if (image.complete && image.naturalWidth > 0) {
    run();
    return;
  }

  if (typeof image.decode === 'function') {
    image.decode().then(run, run);
    return;
  }

  image.addEventListener('load', run, { once: true });
  image.addEventListener('error', run, { once: true });
}

function resetLeaveState(): void {
  isLeaving = false;

  removeGhosts();

  const faded = Array.from(document.querySelectorAll<HTMLElement>(`[${FADED_ATTRIBUTE}]`));

  gsap.killTweensOf(faded);
  restoreFaded(faded);

  Array.from(document.querySelectorAll<HTMLElement>(`[${HIDDEN_ATTRIBUTE}]`)).forEach((element) => {
    element.style.visibility = '';
    element.removeAttribute(HIDDEN_ATTRIBUTE);
  });

  document.documentElement.classList.remove(WORK_FLIP_PENDING_CLASS);
}

function startLeave(source: HTMLElement, image: HTMLImageElement, navigate: () => void): void {
  const rect = rectOf(source);
  const ghost = createGhost(rect, image.currentSrc || image.src);
  const ghostImage = ghost.firstElementChild as HTMLElement;
  const zoom = image.getBoundingClientRect().width / Math.max(rect.width, 1);
  let navigated = false;
  const navigateOnce = (): void => {
    if (navigated) {
      return;
    }

    navigated = true;
    navigate();
  };
  const timeline = gsap.timeline({ onComplete: navigateOnce });

  // In Hintergrund-Tabs steht requestAnimationFrame still und die Zeitleiste bleibt
  // stehen. Der Timer navigiert dann trotzdem, damit der Klick nicht verpufft.
  window.setTimeout(navigateOnce, TIMING.leave * 1000 + 400);

  isLeaving = true;
  source.style.visibility = 'hidden';
  source.setAttribute(HIDDEN_ATTRIBUTE, '');

  // Die Karten zoomen im Hover leicht heran. Der Ghost startet mit demselben Zoom und
  // faehrt ihn waehrend des Ausblendens zurueck, damit das Bild beim Klick nicht springt.
  gsap.set(ghostImage, { scale: zoom > 1.002 ? zoom : 1, transformOrigin: '50% 50%' });

  timeline.to(markFaded(pageFadeTargets(ghost)), { autoAlpha: 0, duration: TIMING.leave, ease: 'power2.out' }, 0);

  if (zoom > 1.002) {
    timeline.to(ghostImage, { scale: 1, duration: TIMING.leave, ease: 'power2.out' }, 0);
  }
}

function runFlip(ghost: HTMLElement, target: HTMLImageElement, payload: WorkFlipPayload): void {
  const root = document.documentElement;
  const covered = root.classList.contains(WORK_FLIP_PENDING_CLASS);
  const surrounding = covered ? markFaded(collectSurroundingElements(target, [ghost])) : [];
  const fitTarget = payload.direction === 'back' ? target.closest(CARD_IMAGE_WRAP_SELECTOR) ?? target : target;
  let finished = false;
  let guardId = 0;

  const handOver = (immediate: boolean): void => {
    releaseTarget(target);
    gsap.killTweensOf(ghost);
    gsap.set(target, { autoAlpha: 1, clearProps: 'opacity,visibility' });

    if (immediate) {
      ghost.remove();
      return;
    }

    // Das echte Bild steht hart auf sichtbar und der Ghost blendet darueber aus; ein
    // Crossfade beider Kopien wuerde in der Mitte kurz aufhellen.
    gsap.to(ghost, {
      autoAlpha: 0,
      duration: TIMING.imageFade,
      ease: 'power1.out',
      onComplete: () => ghost.remove(),
    });
  };

  const settle = (immediate: boolean): void => {
    if (finished) {
      return;
    }

    finished = true;
    window.clearTimeout(guardId);

    if (immediate) {
      handOver(true);

      if (surrounding.length > 0) {
        gsap.set(surrounding, { autoAlpha: 1 });
        restoreFaded(surrounding);
      }
    } else {
      // Der Ghost bleibt liegen, bis das echte Bild wirklich zeigbar ist.
      whenImageReady(target, () => handOver(false));

      if (surrounding.length > 0) {
        gsap.to(surrounding, {
          autoAlpha: 1,
          duration: TIMING.contentFade,
          ease: 'power2.out',
          stagger: { amount: TIMING.contentSpread },
          onComplete: () => restoreFaded(surrounding),
        });
      }
    }

    clearWorkFlipPayload();
  };

  if (surrounding.length > 0) {
    gsap.set(surrounding, { autoAlpha: 0 });
  }

  gsap.set(target, { autoAlpha: 0 });
  root.classList.remove(WORK_FLIP_PENDING_CLASS);

  Flip.fit(ghost, fitTarget, {
    duration: TIMING.flip,
    ease: TIMING.ease,
    onComplete: () => settle(false),
  });

  // In einem Hintergrund-Tab steht requestAnimationFrame und damit auch GSAP still.
  // Der Timer beendet den Uebergang dann ohne Animation, damit die Seite nie halb
  // ausgeblendet stehen bleibt.
  guardId = window.setTimeout(() => settle(true), (TIMING.flip + 2) * 1000);
}

function playArrival(payload: WorkFlipPayload): void {
  const ghost = findGhost() ?? createGhost(payload.rect, payload.src);
  const readyEvent = payload.direction === 'forward' ? DETAIL_READY_EVENT : WORKS_READY_EVENT;
  let settled = false;
  let timeoutId = 0;
  let observer: MutationObserver | null = null;

  const stopListening = (): void => {
    observer?.disconnect();
    observer = null;
    document.removeEventListener(readyEvent, attempt);
  };

  const abort = (): void => {
    if (settled) {
      return;
    }

    settled = true;
    stopListening();
    discardArrival();
  };

  const resolveTarget = (): HTMLImageElement | null => {
    if (payload.direction === 'forward') {
      const detailImage = document.querySelector<HTMLElement>(DETAIL_IMAGE_SELECTOR);
      return detailImage instanceof HTMLImageElement ? detailImage : null;
    }

    const work = findWorkElement(payload.workId);
    const cardImage = work?.querySelector<HTMLElement>(CARD_IMAGE_SELECTOR) ?? null;

    return cardImage instanceof HTMLImageElement ? cardImage : null;
  };

  function attempt(): void {
    if (settled) {
      return;
    }

    const target = resolveTarget();

    if (!target) {
      return;
    }

    settled = true;
    stopListening();
    prepareTarget(target, payload);

    let started = false;
    const startFlip = (): void => {
      if (started) {
        return;
      }

      started = true;
      window.clearTimeout(timeoutId);
      runFlip(ghost, target, payload);
    };

    // Zwei Frames, damit das gesetzte Seitenverhaeltnis im Layout angekommen ist. Der
    // Timer springt ein, falls requestAnimationFrame stillsteht - sonst bliebe die
    // Seite verdeckt, weil der Wachhund unten schon abgeschaltet waere.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(startFlip);
    });
    window.setTimeout(startFlip, 300);
  }

  timeoutId = window.setTimeout(abort, TARGET_TIMEOUT);
  document.addEventListener(readyEvent, attempt);
  observer = new MutationObserver(attempt);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  attempt();
}

function isArrivalAllowed(payload: WorkFlipPayload): boolean {
  if (payload.href === window.location.href) {
    return false;
  }

  if (payload.direction === 'forward') {
    return true;
  }

  // Eine Uebergabe ohne Klick entsteht bei jedem Verlassen der Detailseite - auch beim
  // Weg zu einem aehnlichen Werk. Sie gilt deshalb nur fuer einen echten Zurueck-Sprung.
  if (payload.auto) {
    return isBackForwardNavigation();
  }

  return isBackForwardNavigation() || document.referrer === payload.href;
}

function handleCardClick(event: MouseEvent, link: HTMLAnchorElement): void {
  const url = getNavigableUrl(link);
  const wrap = link.querySelector<HTMLElement>(CARD_IMAGE_WRAP_SELECTOR);
  const image = wrap?.querySelector<HTMLElement>(CARD_IMAGE_SELECTOR) ?? null;

  if (!url || !wrap || !(image instanceof HTMLImageElement)) {
    return;
  }

  event.preventDefault();

  const cardRect = rectOf(wrap);

  if (!isUsableRect(cardRect)) {
    window.location.href = url.href;
    return;
  }

  writeWorkFlipPayload({
    direction: 'forward',
    workId: link.getAttribute(WORK_ID_ATTRIBUTE) ?? '',
    src: image.currentSrc || image.src,
    href: window.location.href,
    rect: cardRect,
    ratio: ratioOf(cardRect),
    auto: false,
    ts: Date.now(),
  });

  startLeave(wrap, image, () => {
    window.location.href = url.href;
  });
}

function handleBackClick(event: MouseEvent, trigger: HTMLElement): void {
  const image = document.querySelector<HTMLElement>(DETAIL_IMAGE_SELECTOR);
  const href = trigger.getAttribute('href') || '';
  const navigateBack = (): void => {
    if (trigger.hasAttribute('data-back-button') && window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.href = href || '/';
  };

  if (!(image instanceof HTMLImageElement)) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  const detailRect = rectOf(image);

  if (!isUsableRect(detailRect)) {
    navigateBack();
    return;
  }

  writeWorkFlipPayload({
    direction: 'back',
    workId: image.getAttribute(WORK_ID_ATTRIBUTE) ?? '',
    src: image.currentSrc || image.src,
    href: window.location.href,
    rect: detailRect,
    ratio: ratioOf(detailRect),
    auto: false,
    ts: Date.now(),
  });

  startLeave(image, image, navigateBack);
}

function isInViewport(rect: WorkFlipRect): boolean {
  return isUsableRect(rect) && rect.top < window.innerHeight && rect.top + rect.height > 0;
}

/**
 * Schreibt den Rueckweg auch dann, wenn niemand auf einen Link geklickt hat, damit der
 * Browser-Zurueck-Button dieselbe Animation bekommt.
 */
function storeBackPayloadOnLeave(): void {
  const image = document.querySelector<HTMLElement>(DETAIL_IMAGE_SELECTOR);

  // Nach einem Linkklick geht es vorwaerts, nicht zurueck.
  if (isLeaving || Date.now() - lastLinkClickAt < 1500 || !(image instanceof HTMLImageElement)) {
    return;
  }

  const rect = rectOf(image);

  if (!isInViewport(rect)) {
    return;
  }

  writeWorkFlipPayload({
    direction: 'back',
    workId: image.getAttribute(WORK_ID_ATTRIBUTE) ?? '',
    src: image.currentSrc || image.src,
    href: window.location.href,
    rect,
    ratio: ratioOf(rect),
    auto: true,
    ts: Date.now(),
  });
}

export function initWorkFlip(): void {
  if (initialized) {
    return;
  }

  if (!document.body) {
    document.addEventListener('DOMContentLoaded', initWorkFlip, { once: true });
    return;
  }

  initialized = true;

  if (prefersReducedMotion()) {
    discardArrival();
    return;
  }

  const payload = readWorkFlipPayload();

  if (payload && isArrivalAllowed(payload)) {
    playArrival(payload);
  } else {
    discardArrival();
  }

  document.addEventListener(
    'click',
    (event) => {
      const eventTarget = event.target;

      if (isLeaving) {
        event.preventDefault();
        return;
      }

      if (!(eventTarget instanceof Element) || event.defaultPrevented || hasModifierKey(event)) {
        return;
      }

      const backTrigger = eventTarget.closest<HTMLElement>(BACK_TRIGGER_SELECTOR);

      if (backTrigger) {
        handleBackClick(event, backTrigger);
        return;
      }

      if (eventTarget.closest('a[href]')) {
        lastLinkClickAt = Date.now();
      }

      const link = eventTarget.closest<HTMLAnchorElement>(CARD_LINK_SELECTOR);

      if (link) {
        handleCardClick(event, link);
      }
    },
    true,
  );

  window.addEventListener('pagehide', () => {
    storeBackPayloadOnLeave();
    // Der ausgeblendete Zustand darf nicht in den bfcache wandern, sonst kehrt der
    // Nutzer auf eine leere Seite zurueck.
    resetLeaveState();
  });

  window.addEventListener('pageshow', (event) => {
    if (!event.persisted) {
      return;
    }

    resetLeaveState();

    const restoredPayload = readWorkFlipPayload();

    // Die Seite ist beim Restore vollstaendig da: nur uebernehmen, wenn die Zielkachel
    // wirklich existiert. Sonst bliebe die Seite bis zum Wachhund verdeckt.
    if (
      restoredPayload &&
      restoredPayload.direction === 'back' &&
      restoredPayload.href !== window.location.href &&
      findWorkElement(restoredPayload.workId)
    ) {
      document.documentElement.classList.add(WORK_FLIP_PENDING_CLASS);
      playArrival(restoredPayload);
      return;
    }

    clearWorkFlipPayload();
  });
}
