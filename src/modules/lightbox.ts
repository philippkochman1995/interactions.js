import { gsap } from 'gsap';
import type { I18nApi, LightboxApi, LightboxItem } from '../types';
import {
  delegate,
  dispatchSiteEvent,
  focusElement,
  getDataId,
  getStringAttr,
  isHTMLElement,
  lockScroll,
  prefersReducedMotion,
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

interface InlineImageStyles {
  visibility: string;
}

interface SharedOpenTransition {
  triggerImage: HTMLImageElement;
  clone: HTMLImageElement;
}

const LIGHTBOX_TRIGGER_SELECTOR = '[data-lightbox-src]';
const LIGHTBOX_CLASS = 'js-lightbox';
const LIGHTBOX_AUTO_TRIGGER_SELECTOR = `.${LIGHTBOX_CLASS}`;
const LIGHTBOX_DELEGATE_SELECTOR = `${LIGHTBOX_TRIGGER_SELECTOR}, ${LIGHTBOX_AUTO_TRIGGER_SELECTOR}`;
const LIGHTBOX_ROOT_SELECTOR = '[data-site-lightbox]';
const LIGHTBOX_CLOSE_SELECTOR = '[data-lightbox-close]';
const LIGHTBOX_PREVIOUS_SELECTOR = '[data-lightbox-prev]';
const LIGHTBOX_NEXT_SELECTOR = '[data-lightbox-next]';
const LIGHTBOX_AUTO_ICON_SELECTOR = '[data-lightbox-auto-icon]';
const LIGHTBOX_TRIGGER_WRAPPER_CLASS = 'site-lightbox-trigger';
const LIGHTBOX_TRIGGER_IMAGE_CLASS = 'site-lightbox-trigger__image';
const LIGHTBOX_TRIGGER_ICON_CLASS = 'site-lightbox-trigger__icon';
const WEBFLOW_EMPTY_BIND_CLASS = 'w-dyn-bind-empty';
const WEBFLOW_PLACEHOLDER_IMAGE_PATTERN = '/plugins/Basic/assets/placeholder.';
const LIGHTBOX_OPEN_DURATION = 0.48;
const LIGHTBOX_CLOSE_DURATION = 0.34;
const LIGHTBOX_CHROME_SELECTOR = '.site-lightbox__close, .site-lightbox__previous, .site-lightbox__next, .site-lightbox__caption';
const LIGHTBOX_CLONE_CLASS = 'site-lightbox__transition-clone';
const LIGHTBOX_AUTO_ICON_SVG = `
  <svg width="34" height="34" viewBox="0 0 30 30" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
    <circle class="site-lightbox-trigger__icon-circle" cx="15" cy="15" r="15"/>
    <path class="site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--bottom" d="M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z"/>
    <path class="site-lightbox-trigger__icon-arrow site-lightbox-trigger__icon-arrow--top" d="M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z"/>
  </svg>
`;

let initialized = false;
let i18n: I18nApi | null = null;
let elements: LightboxElements | null = null;
let items: LightboxItem[] = [];
let activeIndex = 0;
let isOpen = false;
let isAnimating = false;
let previouslyFocusedElement: HTMLElement | null = null;
let activeAnimation: gsap.core.Animation | null = null;
let activeTriggerImage: HTMLImageElement | null = null;
let activeTriggerImageStyles: InlineImageStyles | null = null;
let activeSharedTrigger: HTMLElement | null = null;

function getTriggerSrc(trigger: HTMLElement): string {
  const dataSrc = getStringAttr(trigger, 'data-lightbox-src');

  if (dataSrc) {
    return dataSrc;
  }

  if (trigger instanceof HTMLAnchorElement) {
    const href = getStringAttr(trigger, 'href');
    return href && href !== '#' ? trigger.href : '';
  }

  if (trigger instanceof HTMLImageElement) {
    return getImageSrc(trigger);
  }

  const image = qs<HTMLImageElement>('img', trigger);

  if (image) {
    return getImageSrc(image);
  }

  return '';
}

function getImageSrc(image: HTMLImageElement): string {
  const src = getStringAttr(image, 'src');
  const srcset = getStringAttr(image, 'srcset');

  if (image.classList.contains(WEBFLOW_EMPTY_BIND_CLASS) || src.includes(WEBFLOW_PLACEHOLDER_IMAGE_PATTERN)) {
    return '';
  }

  if (!src && !srcset) {
    return '';
  }

  return image.currentSrc || image.src || src;
}

function getTriggerAlt(trigger: HTMLElement): string {
  const explicitAlt = getStringAttr(trigger, 'data-lightbox-alt');

  if (explicitAlt) {
    return explicitAlt;
  }

  if (trigger instanceof HTMLImageElement) {
    return trigger.alt.trim();
  }

  const image = qs<HTMLImageElement>('img', trigger);
  return image?.alt?.trim() ?? '';
}

function getTriggerImage(trigger: HTMLElement): HTMLImageElement | null {
  if (trigger instanceof HTMLImageElement) {
    return trigger;
  }

  return qs<HTMLImageElement>('img', trigger);
}

function getVisibleTriggerImage(trigger: HTMLElement): HTMLImageElement | null {
  const image = getTriggerImage(trigger);
  return isVisibleImage(image) ? image : null;
}

function isVisibleImage(image: HTMLImageElement | null): image is HTMLImageElement {
  if (!image || !document.documentElement.contains(image)) {
    return false;
  }

  const rect = image.getBoundingClientRect();
  const style = window.getComputedStyle(image);

  return rect.width > 0 && rect.height > 0 && style.display !== 'none' && style.visibility !== 'hidden';
}

function saveInlineImageStyles(image: HTMLImageElement): InlineImageStyles {
  return {
    visibility: image.style.visibility,
  };
}

function restoreInlineImageStyles(image: HTMLImageElement | null, styles: InlineImageStyles | null): void {
  if (!image || !styles) {
    return;
  }

  image.style.visibility = styles.visibility;
}

function getLightboxChrome(lightboxElements: LightboxElements): HTMLElement[] {
  return qsa<HTMLElement>(LIGHTBOX_CHROME_SELECTOR, lightboxElements.root).filter((element) => !element.hidden);
}

function getImageRect(image: HTMLImageElement): DOMRect {
  return image.getBoundingClientRect();
}

function createTransitionClone(image: HTMLImageElement, rect: DOMRect): HTMLImageElement {
  const clone = image.cloneNode(false) as HTMLImageElement;

  clone.className = LIGHTBOX_CLONE_CLASS;
  clone.removeAttribute('id');
  clone.setAttribute('aria-hidden', 'true');
  clone.decoding = 'sync';

  gsap.set(clone, {
    position: 'fixed',
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
    margin: 0,
    objectFit: window.getComputedStyle(image).objectFit || 'cover',
    pointerEvents: 'none',
    zIndex: 1101,
  });

  document.body.append(clone);
  return clone;
}

function removeTransitionClone(clone: HTMLImageElement): void {
  clone.remove();
}

function animateCloneToRect(
  clone: HTMLImageElement,
  rect: DOMRect,
  duration: number,
  onComplete: () => void,
): gsap.core.Tween {
  return gsap.to(clone, {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
    duration,
    ease: 'power3.inOut',
    onComplete,
  });
}

function killActiveAnimation(): void {
  if (!activeAnimation) {
    return;
  }

  activeAnimation.kill();
  activeAnimation = null;
  isAnimating = false;
}

function rememberSharedImage(trigger: HTMLElement, image: HTMLImageElement | null): void {
  activeTriggerImage = image;
  activeTriggerImageStyles = image ? saveInlineImageStyles(image) : null;
  activeSharedTrigger = image ? trigger : null;
}

function clearSharedImage(): void {
  activeTriggerImage = null;
  activeTriggerImageStyles = null;
  activeSharedTrigger = null;
}

function clearAnimationProps(lightboxElements: LightboxElements): void {
  gsap.set([lightboxElements.root, lightboxElements.image, ...getLightboxChrome(lightboxElements)], {
    clearProps: 'opacity,transform,visibility',
  });
}

function completeAnimation(lightboxElements: LightboxElements): void {
  lightboxElements.root.classList.remove('is-animating', 'is-closing');
  clearAnimationProps(lightboxElements);
  activeAnimation = null;
  isAnimating = false;
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

  const groupedItems = qsa<HTMLElement>(LIGHTBOX_DELEGATE_SELECTOR)
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

function createAutoIcon(): HTMLElement {
  const icon = document.createElement('span');
  icon.className = LIGHTBOX_TRIGGER_ICON_CLASS;
  icon.setAttribute('aria-hidden', 'true');
  icon.setAttribute('data-lightbox-auto-icon', '');
  icon.innerHTML = LIGHTBOX_AUTO_ICON_SVG;
  return icon;
}

function isNativeInteractive(element: HTMLElement): boolean {
  return (
    element instanceof HTMLAnchorElement ||
    element instanceof HTMLButtonElement ||
    element instanceof HTMLInputElement ||
    element instanceof HTMLSelectElement ||
    element instanceof HTMLTextAreaElement
  );
}

function makeTriggerKeyboardAccessible(trigger: HTMLElement): void {
  if (isNativeInteractive(trigger)) {
    return;
  }

  trigger.setAttribute('role', 'button');

  if (!trigger.hasAttribute('tabindex')) {
    trigger.tabIndex = 0;
  }

  if (!trigger.hasAttribute('aria-label')) {
    trigger.setAttribute('aria-label', i18n?.t('openImage', 'Open image') ?? 'Open image');
  }
}

function decorateImageTrigger(image: HTMLImageElement): void {
  if (image.closest(`.${LIGHTBOX_TRIGGER_WRAPPER_CLASS}`)) {
    return;
  }

  if (!getTriggerSrc(image).trim()) {
    return;
  }

  const wrapper = document.createElement('span');

  wrapper.className = `${LIGHTBOX_TRIGGER_WRAPPER_CLASS} ${LIGHTBOX_CLASS}`;
  wrapper.dataset.lightboxAutoWrapper = '';

  for (const attrName of ['data-lightbox-src', 'data-lightbox-caption', 'data-lightbox-alt', 'data-lightbox-group']) {
    const value = getStringAttr(image, attrName);

    if (value) {
      wrapper.setAttribute(attrName, value);
      image.removeAttribute(attrName);
    }
  }

  image.classList.remove(LIGHTBOX_CLASS);
  image.classList.add(LIGHTBOX_TRIGGER_IMAGE_CLASS);
  image.before(wrapper);
  wrapper.append(image, createAutoIcon());
  makeTriggerKeyboardAccessible(wrapper);
}

function decorateElementTrigger(trigger: HTMLElement): void {
  if (trigger instanceof HTMLImageElement) {
    decorateImageTrigger(trigger);
    return;
  }

  if (!getTriggerSrc(trigger).trim()) {
    return;
  }

  trigger.classList.add(LIGHTBOX_TRIGGER_WRAPPER_CLASS);
  makeTriggerKeyboardAccessible(trigger);

  if (!qs(LIGHTBOX_AUTO_ICON_SELECTOR, trigger)) {
    trigger.append(createAutoIcon());
  }
}

function decorateAutoTriggers(): void {
  qsa<HTMLElement>(LIGHTBOX_AUTO_TRIGGER_SELECTOR).forEach(decorateElementTrigger);
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
      '',
      'site-lightbox__close',
    );
    closeButton.innerHTML = `
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20"/>
        <path d="M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z"/>
      </svg>
    `;
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

function renderItemWithTransition(): void {
  if (prefersReducedMotion()) {
    renderItem();
    return;
  }

  const lightboxElements = ensureLightboxDom();

  gsap.killTweensOf(lightboxElements.image);
  gsap.to(lightboxElements.image, {
    opacity: 0,
    scale: 0.985,
    duration: 0.11,
    ease: 'power1.out',
    onComplete: () => {
      renderItem();
      gsap.fromTo(
        lightboxElements.image,
        { opacity: 0, scale: 0.985 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.18,
          ease: 'power2.out',
          clearProps: 'opacity,scale',
        },
      );
    },
  });
}

function setOpenState(open: boolean): void {
  const lightboxElements = ensureLightboxDom();

  lightboxElements.root.hidden = !open;
  lightboxElements.root.setAttribute('aria-hidden', String(!open));
  lightboxElements.root.classList.toggle('is-active', open);
  lightboxElements.root.classList.toggle('is-visible', open);
  lightboxElements.root.classList.toggle('is-animating', false);
  lightboxElements.root.classList.toggle('is-closing', false);
  document.documentElement.classList.toggle('is-lightbox-open', open);
  document.body.classList.toggle('is-lightbox-open', open);
}

function finishClose(
  lightboxElements: LightboxElements,
  focusTarget: HTMLElement | null,
  currentItem: LightboxItem | null,
): void {
  setOpenState(false);
  unlockScroll();

  isOpen = false;
  isAnimating = false;
  items = [];
  activeIndex = 0;
  previouslyFocusedElement = null;
  clearSharedImage();
  activeAnimation = null;
  lightboxElements.image.removeAttribute('src');
  lightboxElements.caption.textContent = '';

  dispatchSiteEvent(lightboxElements.root, 'site:lightbox-close', {
    item: currentItem,
  });

  restoreFocus(focusTarget);
}

function animateFallbackOpen(lightboxElements: LightboxElements): void {
  activeAnimation = gsap.fromTo(
    lightboxElements.root,
    { opacity: prefersReducedMotion() ? 1 : 0 },
    {
      opacity: 1,
      duration: prefersReducedMotion() ? 0.01 : 0.18,
      ease: 'power1.out',
      clearProps: 'opacity',
      onComplete: () => {
        activeAnimation = null;
      },
    },
  );
}

function prepareSharedOpenTransition(triggerImage: HTMLImageElement): SharedOpenTransition {
  const startRect = getImageRect(triggerImage);
  const clone = createTransitionClone(triggerImage, startRect);

  triggerImage.style.visibility = 'hidden';

  return {
    triggerImage,
    clone,
  };
}

function animateSharedOpen(lightboxElements: LightboxElements, transition: SharedOpenTransition): void {
  isAnimating = true;
  lightboxElements.root.classList.add('is-animating');

  gsap.set(lightboxElements.root, { opacity: 0 });
  gsap.set(getLightboxChrome(lightboxElements), { opacity: 0, y: 8 });
  gsap.set(lightboxElements.image, { visibility: 'hidden', opacity: 1 });

  activeAnimation = gsap
    .timeline({
      defaults: { ease: 'power2.out' },
      onComplete: () => {
        restoreInlineImageStyles(transition.triggerImage, activeTriggerImageStyles);
        removeTransitionClone(transition.clone);
        completeAnimation(lightboxElements);
      },
    })
    .to(lightboxElements.root, { opacity: 1, duration: 0.2 }, 0)
    .add(animateCloneToRect(transition.clone, getImageRect(lightboxElements.image), LIGHTBOX_OPEN_DURATION, () => undefined), 0)
    .to(getLightboxChrome(lightboxElements), { opacity: 1, y: 0, duration: 0.2, stagger: 0.025 }, 0.18);
}

function getReturnTriggerImage(currentItem: LightboxItem | null): HTMLImageElement | null {
  if (currentItem?.trigger !== activeSharedTrigger) {
    return null;
  }

  return isVisibleImage(activeTriggerImage) ? activeTriggerImage : null;
}

function animateFallbackClose(
  lightboxElements: LightboxElements,
  focusTarget: HTMLElement | null,
  currentItem: LightboxItem | null,
): void {
  activeAnimation = gsap.to(lightboxElements.root, {
    opacity: 0,
    duration: prefersReducedMotion() ? 0.01 : 0.16,
    ease: 'power1.out',
    onComplete: () => {
      gsap.set(lightboxElements.root, { clearProps: 'opacity' });
      finishClose(lightboxElements, focusTarget, currentItem);
    },
  });
}

function animateSharedClose(
  lightboxElements: LightboxElements,
  triggerImage: HTMLImageElement,
  focusTarget: HTMLElement | null,
  currentItem: LightboxItem | null,
): void {
  const clone = createTransitionClone(lightboxElements.image, getImageRect(lightboxElements.image));

  lightboxElements.image.style.visibility = 'hidden';
  triggerImage.style.visibility = 'hidden';
  lightboxElements.root.classList.add('is-closing');
  isAnimating = true;

  activeAnimation = gsap
    .timeline({
      defaults: { ease: 'power2.out' },
      onComplete: () => {
        restoreInlineImageStyles(triggerImage, activeTriggerImageStyles);
        removeTransitionClone(clone);
        clearAnimationProps(lightboxElements);
        finishClose(lightboxElements, focusTarget, currentItem);
      },
    })
    .to(lightboxElements.root, { opacity: 0, duration: LIGHTBOX_CLOSE_DURATION }, 0)
    .to(getLightboxChrome(lightboxElements), { opacity: 0, y: 6, duration: 0.14 }, 0)
    .add(animateCloneToRect(clone, getImageRect(triggerImage), LIGHTBOX_CLOSE_DURATION, () => undefined), 0);
}

function goToItem(index: number): void {
  if (items.length < 2 || isAnimating) {
    return;
  }

  activeIndex = (index + items.length) % items.length;
  renderItemWithTransition();
}

function goNext(): void {
  goToItem(activeIndex + 1);
}

function goPrevious(): void {
  goToItem(activeIndex - 1);
}

export function openLightbox(trigger: HTMLElement): void {
  if (isAnimating) {
    return;
  }

  const collection = collectItems(trigger);

  if (!collection) {
    return;
  }

  const wasOpen = isOpen;
  const triggerImage = getVisibleTriggerImage(trigger);

  items = collection.items;
  activeIndex = collection.index;
  previouslyFocusedElement = trigger;
  isOpen = true;
  rememberSharedImage(trigger, triggerImage);

  renderItem();

  const lightboxElements = ensureLightboxDom();
  const canAnimateSharedImage = !wasOpen && triggerImage && !prefersReducedMotion();
  const sharedOpenTransition = canAnimateSharedImage
    ? prepareSharedOpenTransition(triggerImage)
    : null;

  setOpenState(true);

  if (!wasOpen) {
    lockScroll();
  }

  if (sharedOpenTransition) {
    animateSharedOpen(lightboxElements, sharedOpenTransition);
  } else {
    animateFallbackOpen(lightboxElements);
  }

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
  if (!isOpen || !elements || isAnimating) {
    return;
  }

  const lightboxElements = elements;
  const focusTarget = previouslyFocusedElement;
  const currentItem = items[activeIndex] ?? null;
  const triggerImage = getReturnTriggerImage(currentItem);
  const canAnimateSharedImage = Boolean(triggerImage) && !prefersReducedMotion();

  killActiveAnimation();

  if (canAnimateSharedImage && triggerImage) {
    animateSharedClose(lightboxElements, triggerImage, focusTarget, currentItem);
    return;
  }

  animateFallbackClose(lightboxElements, focusTarget, currentItem);
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
  decorateAutoTriggers();

  if (!initialized) {
    delegate(document, 'click', LIGHTBOX_DELEGATE_SELECTOR, (event, trigger) => {
      event.preventDefault();
      openLightbox(trigger);
    });

    delegate(document, 'keydown', LIGHTBOX_AUTO_TRIGGER_SELECTOR, (event, trigger) => {
      if (isNativeInteractive(trigger)) {
        return;
      }

      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }

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
