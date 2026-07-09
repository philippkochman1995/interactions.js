import type { ContentModalData, I18nApi, ModalApi } from '../types';
import {
  delegate,
  dispatchSiteEvent,
  focusElement,
  getActiveHTMLElement,
  getDataId,
  getFocusableElements,
  getStringAttr,
  isHTMLElement,
  lockScroll,
  qsa,
  restoreFocus,
  trapFocus,
  unlockScroll,
} from './utils';

interface ModalInitOptions {
  i18n: I18nApi;
  closeOnBackdrop?: boolean;
}

interface SingletonElements {
  root: HTMLElement;
  panel: HTMLElement;
  address: HTMLElement;
  closeButton: HTMLButtonElement;
  imageLink: HTMLAnchorElement;
  image: HTMLImageElement;
  lightboxIcon: HTMLElement;
  caption: HTMLElement;
  text: HTMLElement;
}

const LEGACY_MODAL_SELECTOR = '[data-modal]';
const CONTENT_SELECTOR = '[data-modal-content]';
const MODAL_OPEN_SELECTOR = '[data-modal-open]';
const MODAL_CLOSE_SELECTOR = '[data-modal-close]';
const MODAL_HASH_LINK_SELECTOR = 'a[href^="#modal:"]';
const MODAL_HASH_PREFIX = '#modal:';
const MODAL_CLOSE_DURATION = 220;

const MODAL_CLOSE_ICON_SVG = `
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#F3F2F4"/>
    <path d="M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z" fill="#444153"/>
  </svg>
`;

const MODAL_LIGHTBOX_ICON_SVG = `
  <svg width="34" height="34" viewBox="0 0 30 30" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <circle class="fwm-modal__lightbox-icon-circle--centered" cx="15" cy="15" r="15"/>
    <path class="fwm-modal__lightbox-icon-arrow--centered-bottom" d="M8 21.1209L8.00962 14.376L10.5048 14.376L10.4945 19.27L10.7346 19.5097L15.6332 19.4994L15.6332 21.9906L8.88068 22.0002C8.70853 21.8288 8.17173 21.2928 8 21.1209Z"/>
    <path class="fwm-modal__lightbox-icon-arrow--centered-top" d="M22.0009 8.87929L21.9913 15.6243L19.4961 15.6243L19.5065 10.7302L19.2664 10.4905L14.3633 10.5009L14.3633 8.00961L21.1202 8C21.2924 8.17146 21.8292 8.70741 22.0009 8.87929Z"/>
  </svg>
`;

let initialized = false;
let closeOnBackdrop = true;
let i18n: I18nApi | null = null;
let elements: SingletonElements | null = null;
let activeModalId = '';
let previouslyFocusedElement: HTMLElement | null = null;
let closeTimer: number | null = null;
const contentRegistry = new Map<string, ContentModalData>();

function getModalIdFromHashLink(link: HTMLElement): string {
  const href = link.getAttribute('href') ?? '';

  if (!href.startsWith(MODAL_HASH_PREFIX)) {
    return '';
  }

  return decodeURIComponent(href.slice(MODAL_HASH_PREFIX.length)).trim();
}

function createSingleton(): SingletonElements {
  const root = document.createElement('div');
  root.className = 'fwm-modal';
  root.setAttribute('data-site-modal', '');
  root.setAttribute('aria-hidden', 'true');
  root.hidden = true;

  root.innerHTML = `
    <div class="fwm-modal__panel" data-modal-panel role="dialog" aria-modal="true" tabindex="-1">
      <div class="fwm-modal__top">
        <div class="fwm-modal__address" data-site-modal-address></div>
        <button class="fwm-modal__close" type="button" data-modal-close></button>
      </div>
      <a class="fwm-modal__image-link" href="#" data-lightbox-src="" data-lightbox-caption="">
        <img class="fwm-modal__image" src="" alt="">
        <span class="fwm-modal__lightbox-icon" aria-hidden="true"></span>
        <span class="fwm-modal__caption" data-site-modal-caption></span>
      </a>
      <div class="fwm-modal__text" data-site-modal-text></div>
    </div>
  `;

  document.body.append(root);

  const result: SingletonElements = {
    root,
    panel: root.querySelector<HTMLElement>('[data-modal-panel]')!,
    address: root.querySelector<HTMLElement>('[data-site-modal-address]')!,
    closeButton: root.querySelector<HTMLButtonElement>(MODAL_CLOSE_SELECTOR)!,
    imageLink: root.querySelector<HTMLAnchorElement>('.fwm-modal__image-link')!,
    image: root.querySelector<HTMLImageElement>('.fwm-modal__image')!,
    lightboxIcon: root.querySelector<HTMLElement>('.fwm-modal__lightbox-icon')!,
    caption: root.querySelector<HTMLElement>('[data-site-modal-caption]')!,
    text: root.querySelector<HTMLElement>('[data-site-modal-text]')!,
  };

  result.closeButton.innerHTML = MODAL_CLOSE_ICON_SVG;
  result.lightboxIcon.innerHTML = MODAL_LIGHTBOX_ICON_SVG;
  updateLabels(result);

  return result;
}

function ensureSingleton(): SingletonElements {
  if (!elements || !document.body.contains(elements.root)) {
    elements = createSingleton();
  }

  updateLabels(elements);
  return elements;
}

function updateLabels(singleton: SingletonElements): void {
  const closeLabel = i18n?.t('close', 'Close') ?? 'Close';
  const dialogLabel = i18n?.t('openModal', 'Open details') ?? 'Open details';

  singleton.closeButton.setAttribute('aria-label', closeLabel);
  singleton.closeButton.title = closeLabel;
  singleton.panel.setAttribute('aria-label', dialogLabel);
}

function readContentElement(element: HTMLElement): ContentModalData | null {
  const id = getStringAttr(element, 'data-modal-content');

  if (!id) {
    return null;
  }

  const address = element.querySelector<HTMLElement>('[data-modal-address]')?.textContent?.trim() ?? '';
  const imageElement = element.querySelector<HTMLImageElement>('[data-modal-image]');
  const captionElement = element.querySelector<HTMLElement>('[data-modal-caption]');
  const bodyElement = element.querySelector<HTMLElement>('[data-modal-body]');

  return {
    id,
    address,
    image: imageElement?.currentSrc || imageElement?.src || '',
    imageAlt: imageElement?.alt ?? '',
    caption: captionElement?.textContent?.trim() ?? '',
    html: bodyElement?.innerHTML ?? '',
  };
}

function readLegacyModal(element: HTMLElement): ContentModalData | null {
  const id = getStringAttr(element, 'data-modal');

  if (!id) {
    return null;
  }

  const imageElement = element.querySelector<HTMLImageElement>('.fwm-modal__image');

  return {
    id,
    address: element.querySelector<HTMLElement>('.fwm-modal__address')?.textContent?.trim() ?? '',
    image: imageElement?.currentSrc || imageElement?.src || '',
    imageAlt: imageElement?.alt ?? '',
    caption: element.querySelector<HTMLElement>('.fwm-modal__caption')?.textContent?.trim() ?? '',
    html: element.querySelector<HTMLElement>('.fwm-modal__text')?.innerHTML ?? '',
  };
}

function collectRegistryContent(): void {
  qsa<HTMLElement>(CONTENT_SELECTOR).forEach((element) => {
    const content = readContentElement(element);

    if (content) {
      contentRegistry.set(content.id, content);
    }
  });

  qsa<HTMLElement>(LEGACY_MODAL_SELECTOR).forEach((element) => {
    const content = readLegacyModal(element);

    if (content) {
      contentRegistry.set(content.id, content);
    }

    element.remove();
  });
}

function resolveContent(id: string): ContentModalData | null {
  const normalizedId = id.trim();

  if (!normalizedId) {
    return null;
  }

  const element = qsa<HTMLElement>(CONTENT_SELECTOR).find(
    (candidate) => getStringAttr(candidate, 'data-modal-content') === normalizedId,
  );
  const liveContent = element ? readContentElement(element) : null;

  if (liveContent) {
    contentRegistry.set(normalizedId, liveContent);
  }

  return liveContent ?? contentRegistry.get(normalizedId) ?? null;
}

function renderContent(content: ContentModalData): SingletonElements {
  const singleton = ensureSingleton();
  const hasImage = content.image.trim().length > 0;

  singleton.root.dataset.modalId = content.id;
  singleton.address.textContent = content.address;
  singleton.imageLink.hidden = !hasImage;
  singleton.imageLink.href = hasImage ? content.image : '#';
  singleton.imageLink.setAttribute('data-lightbox-src', hasImage ? content.image : '');
  singleton.imageLink.setAttribute('data-lightbox-caption', content.caption);
  singleton.imageLink.setAttribute('data-lightbox-group', `modal-${content.id}`);
  singleton.image.src = hasImage ? content.image : '';
  singleton.image.alt = content.imageAlt;
  singleton.caption.textContent = content.caption;
  singleton.text.innerHTML = content.html;

  return singleton;
}

function focusModal(singleton: SingletonElements): void {
  const firstFocusable = getFocusableElements(singleton.panel)[0];
  focusElement(firstFocusable ?? singleton.panel);
}

function showModal(singleton: SingletonElements): void {
  if (closeTimer !== null) {
    window.clearTimeout(closeTimer);
    closeTimer = null;
  }

  singleton.root.hidden = false;
  singleton.root.setAttribute('aria-hidden', 'false');
  singleton.root.classList.add('is-active');
  void singleton.root.offsetWidth;
  singleton.root.classList.add('is-visible');
  document.documentElement.classList.add('is-modal-open');
  document.body.classList.add('is-modal-open');
}

function hideModal(singleton: SingletonElements): void {
  singleton.root.setAttribute('aria-hidden', 'true');
  singleton.root.classList.remove('is-visible');

  closeTimer = window.setTimeout(() => {
    singleton.root.hidden = true;
    singleton.root.classList.remove('is-active');
    closeTimer = null;
  }, MODAL_CLOSE_DURATION);

  document.documentElement.classList.remove('is-modal-open');
  document.body.classList.remove('is-modal-open');
}

export function openContentModal(content: ContentModalData, trigger?: HTMLElement): void {
  const normalizedContent: ContentModalData = {
    id: content.id.trim(),
    address: content.address ?? '',
    image: content.image ?? '',
    imageAlt: content.imageAlt ?? '',
    caption: content.caption ?? '',
    html: content.html ?? '',
  };

  if (!normalizedContent.id) {
    return;
  }

  if (activeModalId) {
    closeModal();
  }

  contentRegistry.set(normalizedContent.id, normalizedContent);
  previouslyFocusedElement = trigger ?? getActiveHTMLElement();
  activeModalId = normalizedContent.id;

  const singleton = renderContent(normalizedContent);
  showModal(singleton);
  lockScroll();
  focusModal(singleton);

  dispatchSiteEvent(singleton.root, 'site:modal-open', {
    id: activeModalId,
    modal: singleton.root,
    content: normalizedContent,
    trigger: trigger ?? null,
  });
}

export function openModal(id: string, trigger?: HTMLElement): void {
  const content = resolveContent(id);

  if (content) {
    openContentModal(content, trigger);
  }
}

export function closeModal(): void {
  if (!activeModalId || !elements) {
    return;
  }

  const id = activeModalId;
  const focusTarget = previouslyFocusedElement;

  hideModal(elements);
  unlockScroll();

  activeModalId = '';
  previouslyFocusedElement = null;

  dispatchSiteEvent(elements.root, 'site:modal-close', {
    id,
    modal: elements.root,
  });

  restoreFocus(focusTarget);
}

function onKeydown(event: KeyboardEvent): void {
  if (!activeModalId || !elements) {
    return;
  }

  if (document.body.classList.contains('is-lightbox-open')) {
    return;
  }

  if (event.key === 'Escape') {
    event.preventDefault();
    closeModal();
    return;
  }

  trapFocus(elements.panel, event);
}

function onBackdropClick(event: MouseEvent): void {
  if (!closeOnBackdrop || !activeModalId || !elements) {
    return;
  }

  const target = event.target;

  if (!isHTMLElement(target) || target !== elements.root) {
    return;
  }

  closeModal();
}

export function initModals(options: ModalInitOptions): ModalApi {
  closeOnBackdrop = options.closeOnBackdrop ?? true;
  i18n = options.i18n;
  collectRegistryContent();
  ensureSingleton();

  if (!initialized) {
    delegate(document, 'click', MODAL_OPEN_SELECTOR, (event, trigger) => {
      event.preventDefault();
      openModal(getDataId(trigger, 'data-modal-open'), trigger);
    });

    delegate(document, 'click', MODAL_HASH_LINK_SELECTOR, (event, trigger) => {
      event.preventDefault();
      openModal(getModalIdFromHashLink(trigger), trigger);
    });

    delegate(document, 'click', MODAL_CLOSE_SELECTOR, (event, closeButton) => {
      if (!elements?.root.contains(closeButton)) {
        return;
      }

      event.preventDefault();
      closeModal();
    });

    document.addEventListener('click', onBackdropClick);
    document.addEventListener('keydown', onKeydown);
    initialized = true;
  }

  return {
    openModal,
    openContentModal,
    closeModal,
  };
}
