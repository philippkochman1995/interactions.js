import type { I18nApi, LightboxApi, LightboxItem } from '../types';
import {
  delegate,
  dispatchSiteEvent,
  focusElement,
  getDataId,
  getStringAttr,
  isHTMLElement,
  lockScroll,
  qsa,
  qs,
  restoreFocus,
  trapFocus,
  unlockScroll,
} from './utils';

interface LightboxInitOptions {
  i18n: I18nApi;
}

interface LightboxElements {
  root: HTMLElement;
  image: HTMLImageElement;
  caption: HTMLElement;
  closeButton: HTMLButtonElement;
  previousButton: HTMLButtonElement;
  nextButton: HTMLButtonElement;
}

const LIGHTBOX_TRIGGER_SELECTOR = '[data-lightbox-src]';
const LIGHTBOX_ROOT_SELECTOR = '[data-site-lightbox]';
const LIGHTBOX_CLOSE_SELECTOR = '[data-lightbox-close]';
const LIGHTBOX_PREVIOUS_SELECTOR = '[data-lightbox-prev]';
const LIGHTBOX_NEXT_SELECTOR = '[data-lightbox-next]';

let initialized = false;
let i18n: I18nApi | null = null;
let elements: LightboxElements | null = null;
let items: LightboxItem[] = [];
let activeIndex = 0;
let isOpen = false;
let previouslyFocusedElement: HTMLElement | null = null;

function getTriggerSrc(trigger: HTMLElement): string {
  const dataSrc = getStringAttr(trigger, 'data-lightbox-src');

  if (dataSrc) {
    return dataSrc;
  }

  if (trigger instanceof HTMLAnchorElement) {
    return trigger.href;
  }

  return '';
}

function getTriggerAlt(trigger: HTMLElement): string {
  const explicitAlt = getStringAttr(trigger, 'data-lightbox-alt');

  if (explicitAlt) {
    return explicitAlt;
  }

  const image = qs<HTMLImageElement>('img', trigger);
  return image?.alt?.trim() ?? '';
}

function getTriggerItem(trigger: HTMLElement): LightboxItem | null {
  const src = getTriggerSrc(trigger).trim();

  if (!src) {
    return null;
  }

  return {
    src,
    caption: getStringAttr(trigger, 'data-lightbox-caption'),
    alt: getTriggerAlt(trigger),
    group: getStringAttr(trigger, 'data-lightbox-group'),
    trigger,
  };
}

function collectItems(trigger: HTMLElement): { items: LightboxItem[]; index: number } | null {
  const selectedItem = getTriggerItem(trigger);

  if (!selectedItem) {
    return null;
  }

  if (!selectedItem.group) {
    return {
      items: [selectedItem],
      index: 0,
    };
  }

  const groupedItems = qsa<HTMLElement>(LIGHTBOX_TRIGGER_SELECTOR)
    .filter((candidate) => getStringAttr(candidate, 'data-lightbox-group') === selectedItem.group)
    .map(getTriggerItem)
    .filter((item): item is LightboxItem => Boolean(item));

  const index = Math.max(
    0,
    groupedItems.findIndex((item) => item.trigger === trigger),
  );

  return {
    items: groupedItems.length > 0 ? groupedItems : [selectedItem],
    index,
  };
}

function button(label: string, attrName: string, text: string, className: string): HTMLButtonElement {
  const element = document.createElement('button');
  element.type = 'button';
  element.className = className;
  element.setAttribute(attrName, '');
  element.setAttribute('aria-label', label);
  element.title = label;
  element.textContent = text;
  return element;
}

function ensureLightboxDom(): LightboxElements {
  if (elements) {
    updateLabels(elements);
    return elements;
  }

  const existingRoot = qs<HTMLElement>(LIGHTBOX_ROOT_SELECTOR);
  const root = existingRoot ?? document.createElement('div');

  root.classList.add('site-lightbox');
  root.setAttribute('data-site-lightbox', '');
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-hidden', 'true');
  root.setAttribute('aria-label', i18n?.t('openImage', 'Image preview') ?? 'Image preview');
  root.hidden = true;
  root.tabIndex = -1;

  if (!existingRoot) {
    root.innerHTML = '';

    const closeButton = button(
      i18n?.t('close', 'Close') ?? 'Close',
      'data-lightbox-close',
      '×',
      'site-lightbox__close',
    );
    const previousButton = button(
      i18n?.t('previous', 'Previous') ?? 'Previous',
      'data-lightbox-prev',
      '‹',
      'site-lightbox__previous',
    );
    const nextButton = button(
      i18n?.t('next', 'Next') ?? 'Next',
      'data-lightbox-next',
      '›',
      'site-lightbox__next',
    );

    const figure = document.createElement('figure');
    figure.className = 'site-lightbox__figure';

    const image = document.createElement('img');
    image.className = 'site-lightbox__image';
    image.setAttribute('data-lightbox-image', '');
    image.alt = '';

    const caption = document.createElement('figcaption');
    caption.className = 'site-lightbox__caption';
    caption.setAttribute('data-lightbox-caption-output', '');
    caption.hidden = true;

    figure.append(image, caption);
    root.append(closeButton, previousButton, figure, nextButton);
    document.body.append(root);
  }

  const foundElements: LightboxElements = {
    root,
    image: qs<HTMLImageElement>('[data-lightbox-image]', root) ?? document.createElement('img'),
    caption: qs<HTMLElement>('[data-lightbox-caption-output]', root) ?? document.createElement('figcaption'),
    closeButton: qs<HTMLButtonElement>(LIGHTBOX_CLOSE_SELECTOR, root) ?? document.createElement('button'),
    previousButton: qs<HTMLButtonElement>(LIGHTBOX_PREVIOUS_SELECTOR, root) ?? document.createElement('button'),
    nextButton: qs<HTMLButtonElement>(LIGHTBOX_NEXT_SELECTOR, root) ?? document.createElement('button'),
  };

  elements = foundElements;
  updateLabels(foundElements);

  if (!existingRoot && !document.body.contains(root)) {
    document.body.append(root);
  }

  return foundElements;
}

function updateLabels(lightboxElements: LightboxElements): void {
  const closeLabel = i18n?.t('close', 'Close') ?? 'Close';
  const previousLabel = i18n?.t('previous', 'Previous') ?? 'Previous';
  const nextLabel = i18n?.t('next', 'Next') ?? 'Next';
  const dialogLabel = i18n?.t('openImage', 'Image preview') ?? 'Image preview';

  lightboxElements.root.setAttribute('aria-label', dialogLabel);
  lightboxElements.closeButton.setAttribute('aria-label', closeLabel);
  lightboxElements.closeButton.title = closeLabel;
  lightboxElements.previousButton.setAttribute('aria-label', previousLabel);
  lightboxElements.previousButton.title = previousLabel;
  lightboxElements.nextButton.setAttribute('aria-label', nextLabel);
  lightboxElements.nextButton.title = nextLabel;
}

function renderItem(): void {
  const lightboxElements = ensureLightboxDom();
  const item = items[activeIndex];

  if (!item) {
    return;
  }

  lightboxElements.image.src = item.src;
  lightboxElements.image.alt = item.alt;
  lightboxElements.caption.textContent = item.caption;
  lightboxElements.caption.hidden = item.caption.length === 0;

  const hasMultipleItems = items.length > 1;
  lightboxElements.previousButton.hidden = !hasMultipleItems;
  lightboxElements.nextButton.hidden = !hasMultipleItems;
  lightboxElements.root.dataset.lightboxIndex = String(activeIndex);
  lightboxElements.root.dataset.lightboxCount = String(items.length);
}

function setOpenState(open: boolean): void {
  const lightboxElements = ensureLightboxDom();

  lightboxElements.root.hidden = !open;
  lightboxElements.root.setAttribute('aria-hidden', String(!open));
  lightboxElements.root.classList.toggle('is-active', open);
  lightboxElements.root.classList.toggle('is-visible', open);
  document.documentElement.classList.toggle('is-lightbox-open', open);
  document.body.classList.toggle('is-lightbox-open', open);
}

function goToItem(index: number): void {
  if (items.length < 2) {
    return;
  }

  activeIndex = (index + items.length) % items.length;
  renderItem();
}

function goNext(): void {
  goToItem(activeIndex + 1);
}

function goPrevious(): void {
  goToItem(activeIndex - 1);
}

export function openLightbox(trigger: HTMLElement): void {
  const collection = collectItems(trigger);

  if (!collection) {
    return;
  }

  const wasOpen = isOpen;

  items = collection.items;
  activeIndex = collection.index;
  previouslyFocusedElement = trigger;
  isOpen = true;

  renderItem();
  setOpenState(true);

  if (!wasOpen) {
    lockScroll();
  }

  const lightboxElements = ensureLightboxDom();
  focusElement(lightboxElements.closeButton || lightboxElements.root);

  const currentItem = items[activeIndex];

  dispatchSiteEvent(lightboxElements.root, 'site:lightbox-open', {
    item: currentItem,
    index: activeIndex,
    count: items.length,
    group: currentItem?.group ?? '',
    trigger,
  });
}

export function closeLightbox(): void {
  if (!isOpen || !elements) {
    return;
  }

  const lightboxElements = elements;
  const focusTarget = previouslyFocusedElement;
  const currentItem = items[activeIndex] ?? null;

  setOpenState(false);
  unlockScroll();

  isOpen = false;
  items = [];
  activeIndex = 0;
  previouslyFocusedElement = null;
  lightboxElements.image.removeAttribute('src');
  lightboxElements.caption.textContent = '';

  dispatchSiteEvent(lightboxElements.root, 'site:lightbox-close', {
    item: currentItem,
  });

  restoreFocus(focusTarget);
}

function onKeydown(event: KeyboardEvent): void {
  if (!isOpen || !elements) {
    return;
  }

  if (event.key === 'Escape') {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    closeLightbox();
    return;
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault();
    goNext();
    return;
  }

  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    goPrevious();
    return;
  }

  trapFocus(elements.root, event);
}

function onBackdropClick(event: MouseEvent): void {
  if (!isOpen || !elements) {
    return;
  }

  if (event.target === elements.root) {
    closeLightbox();
  }
}

export function initLightbox(options: LightboxInitOptions): LightboxApi {
  i18n = options.i18n;

  if (!initialized) {
    delegate(document, 'click', LIGHTBOX_TRIGGER_SELECTOR, (event, trigger) => {
      event.preventDefault();
      openLightbox(trigger);
    });

    delegate(document, 'click', LIGHTBOX_CLOSE_SELECTOR, (event) => {
      event.preventDefault();
      closeLightbox();
    });

    delegate(document, 'click', LIGHTBOX_PREVIOUS_SELECTOR, (event) => {
      event.preventDefault();
      goPrevious();
    });

    delegate(document, 'click', LIGHTBOX_NEXT_SELECTOR, (event) => {
      event.preventDefault();
      goNext();
    });

    document.addEventListener('click', onBackdropClick);
    document.addEventListener('keydown', onKeydown, true);

    initialized = true;
  }

  return {
    openLightbox,
    closeLightbox,
  };
}
