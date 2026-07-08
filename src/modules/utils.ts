import type { Cleanup } from '../types';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'iframe',
  'object',
  'embed',
  '[contenteditable]:not([contenteditable="false"])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export function qs<T extends Element = Element>(
  selector: string,
  root: ParentNode = document,
): T | null {
  return root.querySelector(selector) as T | null;
}

export function qsa<T extends Element = Element>(
  selector: string,
  root: ParentNode = document,
): T[] {
  return Array.from(root.querySelectorAll(selector)) as T[];
}

export function safeParseJson<T>(input: string): T | null {
  try {
    return JSON.parse(input) as T;
  } catch {
    return null;
  }
}

export function isHTMLElement(value: unknown): value is HTMLElement {
  return value instanceof HTMLElement;
}

export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

export function getStringAttr(element: Element, attrName: string): string {
  const value = element.getAttribute(attrName);
  return isNonEmptyString(value) ? value.trim() : '';
}

export function getDataId(element: Element, attrName: string): string {
  return getStringAttr(element, attrName);
}

export function findElementByDataValue<T extends HTMLElement = HTMLElement>(
  selector: string,
  attrName: string,
  expectedValue: string,
  root: ParentNode = document,
): T | null {
  const normalizedValue = expectedValue.trim();

  if (!normalizedValue) {
    return null;
  }

  return (
    qsa<T>(selector, root).find((element) => {
      return getStringAttr(element, attrName) === normalizedValue;
    }) ?? null
  );
}

function isElementHidden(element: HTMLElement): boolean {
  if (element.hidden) {
    return true;
  }

  if (element.closest('[hidden], [aria-hidden="true"]')) {
    return true;
  }

  if ((element as HTMLElement & { inert?: boolean }).inert) {
    return true;
  }

  const style = window.getComputedStyle(element);

  return style.display === 'none' || style.visibility === 'hidden';
}

export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return qsa<HTMLElement>(FOCUSABLE_SELECTOR, container).filter((element) => {
    return !isElementHidden(element) && element.tabIndex !== -1;
  });
}

export function focusElement(element: HTMLElement | null | undefined): void {
  if (!element) {
    return;
  }

  try {
    element.focus({ preventScroll: true });
  } catch {
    element.focus();
  }
}

export function getActiveHTMLElement(): HTMLElement | null {
  return isHTMLElement(document.activeElement) ? document.activeElement : null;
}

export function restoreFocus(element: HTMLElement | null | undefined): void {
  if (!element || !document.contains(element)) {
    return;
  }

  focusElement(element);
}

export function trapFocus(container: HTMLElement, event: KeyboardEvent): void {
  if (event.key !== 'Tab') {
    return;
  }

  const focusableElements = getFocusableElements(container);

  if (focusableElements.length === 0) {
    event.preventDefault();
    focusElement(container);
    return;
  }

  const first = focusableElements[0];
  const last = focusableElements[focusableElements.length - 1];
  const activeElement = getActiveHTMLElement();

  if (!activeElement || !container.contains(activeElement)) {
    event.preventDefault();
    focusElement(first);
    return;
  }

  if (event.shiftKey && activeElement === first) {
    event.preventDefault();
    focusElement(last);
    return;
  }

  if (!event.shiftKey && activeElement === last) {
    event.preventDefault();
    focusElement(first);
  }
}

interface ScrollState {
  count: number;
  scrollY: number;
  bodyOverflow: string;
  bodyPosition: string;
  bodyTop: string;
  bodyWidth: string;
  bodyPaddingRight: string;
}

const scrollState: ScrollState = {
  count: 0,
  scrollY: 0,
  bodyOverflow: '',
  bodyPosition: '',
  bodyTop: '',
  bodyWidth: '',
  bodyPaddingRight: '',
};

export function lockScroll(): void {
  scrollState.count += 1;

  if (scrollState.count > 1) {
    return;
  }

  const { body, documentElement } = document;
  const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

  scrollState.scrollY = window.scrollY || documentElement.scrollTop || 0;
  scrollState.bodyOverflow = body.style.overflow;
  scrollState.bodyPosition = body.style.position;
  scrollState.bodyTop = body.style.top;
  scrollState.bodyWidth = body.style.width;
  scrollState.bodyPaddingRight = body.style.paddingRight;

  body.style.overflow = 'hidden';
  body.style.position = 'fixed';
  body.style.top = `-${scrollState.scrollY}px`;
  body.style.width = '100%';

  if (scrollbarWidth > 0) {
    body.style.paddingRight = `${scrollbarWidth}px`;
  }
}

export function unlockScroll(): void {
  if (scrollState.count === 0) {
    return;
  }

  scrollState.count -= 1;

  if (scrollState.count > 0) {
    return;
  }

  const { body } = document;
  const scrollY = scrollState.scrollY;

  body.style.overflow = scrollState.bodyOverflow;
  body.style.position = scrollState.bodyPosition;
  body.style.top = scrollState.bodyTop;
  body.style.width = scrollState.bodyWidth;
  body.style.paddingRight = scrollState.bodyPaddingRight;

  window.scrollTo(0, scrollY);
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function delegate<K extends keyof DocumentEventMap>(
  root: Document | HTMLElement,
  eventName: K,
  selector: string,
  handler: (event: DocumentEventMap[K], matchedElement: HTMLElement) => void,
  options?: boolean | AddEventListenerOptions,
): Cleanup {
  const listener = (event: Event): void => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const matchedElement = target.closest<HTMLElement>(selector);

    if (!matchedElement) {
      return;
    }

    if (root instanceof HTMLElement && !root.contains(matchedElement)) {
      return;
    }

    handler(event as DocumentEventMap[K], matchedElement);
  };

  root.addEventListener(eventName, listener as EventListener, options);

  return () => {
    root.removeEventListener(eventName, listener as EventListener, options);
  };
}

export function dispatchSiteEvent<TDetail>(
  target: EventTarget,
  eventName: string,
  detail: TDetail,
): void {
  target.dispatchEvent(
    new CustomEvent(eventName, {
      bubbles: true,
      detail,
    }),
  );
}

export function escapeHtml(value: string): string {
  const replacements: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };

  return value.replace(/[&<>"']/g, (character) => replacements[character]);
}
