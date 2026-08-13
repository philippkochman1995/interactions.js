import type { ContentModalData, ContentModalGalleryItem, ContentModalWork, I18nApi, ModalApi } from '../types';
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
  headline: HTMLElement;
  text: HTMLElement;
  work: HTMLElement;
  gallery: HTMLElement;
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

const WORK_LINK_ICON_SVG = `
  <svg class="fwm-modal__work-eye" viewBox="0 0 26 17" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
    <path class="fwm-modal__work-eye-pupil" d="M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z" fill="currentColor"/>
    <path d="M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z" fill="currentColor"/>
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
      <h2 class="fwm-modal__headline" data-site-modal-headline></h2>
      <div class="fwm-modal__text" data-site-modal-text></div>
      <div class="fwm-modal__work" data-site-modal-work></div>
      <div class="fwm-modal__gallery" data-site-modal-gallery></div>
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
    headline: root.querySelector<HTMLElement>('[data-site-modal-headline]')!,
    text: root.querySelector<HTMLElement>('[data-site-modal-text]')!,
    work: root.querySelector<HTMLElement>('[data-site-modal-work]')!,
    gallery: root.querySelector<HTMLElement>('[data-site-modal-gallery]')!,
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

function getImageSource(image: HTMLImageElement | null): string {
  return image?.currentSrc || image?.src || '';
}

function getImageFrom(element: HTMLElement, selector: string): HTMLImageElement | null {
  const target = element.querySelector<HTMLElement>(selector);

  if (target instanceof HTMLImageElement) {
    return target;
  }

  return target?.querySelector<HTMLImageElement>('img') ?? null;
}

function readWorkElement(element: HTMLElement): ContentModalWork | null {
  const workElement = element.querySelector<HTMLElement>('[data-modal-work]');

  if (!workElement) {
    return null;
  }

  const imageElement = getImageFrom(workElement, '[data-works-thumbnail]');
  const title =
    workElement.querySelector<HTMLElement>('[data-works-title]')?.textContent?.trim() ??
    workElement.getAttribute('data-works-title')?.trim() ??
    '';
  const year =
    workElement.querySelector<HTMLElement>('[data-works-year]')?.textContent?.trim() ??
    workElement.getAttribute('data-works-year')?.trim() ??
    '';
  const href =
    workElement.getAttribute('data-works-href') ??
    workElement.getAttribute('data-works-url') ??
    workElement.querySelector<HTMLAnchorElement>('[data-works-link], a[href]')?.href ??
    '';
  const thumbnail = getImageSource(imageElement);

  if (!title && !thumbnail && !href) {
    return null;
  }

  return {
    title,
    year,
    thumbnail,
    thumbnailAlt: imageElement?.alt || title,
    href,
  };
}

function readGalleryItems(element: HTMLElement): ContentModalGalleryItem[] {
  const items = qsa<HTMLElement>('[data-modal-gallery-item]', element)
    .map((item) => {
      const imageElement = getImageFrom(item, '[data-modal-gallery-image]') ?? item.querySelector<HTMLImageElement>('img');
      const src = getImageSource(imageElement);

      return {
        src,
        alt: imageElement?.alt ?? '',
        caption: item.querySelector<HTMLElement>('[data-modal-gallery-caption]')?.textContent?.trim() ?? '',
      };
    })
    .filter((item) => item.src);

  if (items.length > 0) {
    return items;
  }

  const legacyImageElement = getImageFrom(element, '[data-modal-image]');
  const legacyImage = getImageSource(legacyImageElement);

  return legacyImage
    ? [
        {
          src: legacyImage,
          alt: legacyImageElement?.alt ?? '',
          caption: element.querySelector<HTMLElement>('[data-modal-caption]')?.textContent?.trim() ?? '',
        },
      ]
    : [];
}

function readContentElement(element: HTMLElement): ContentModalData | null {
  const id = getStringAttr(element, 'data-modal-content');

  if (!id) {
    return null;
  }

  const address =
    element.querySelector<HTMLElement>('[data-modal-hover-text]')?.textContent?.trim() ||
    element.querySelector<HTMLElement>('[data-modal-address]')?.textContent?.trim() ||
    '';
  const headline = element.querySelector<HTMLElement>('[data-modal-headline]')?.textContent?.trim() ?? '';
  const gallery = readGalleryItems(element);
  const firstGalleryItem = gallery[0];
  const bodyElement = element.querySelector<HTMLElement>('[data-modal-body]');

  return {
    id,
    address,
    layout: element.getAttribute('data-modal-layout') === 'context' ? 'context' : 'default',
    headline,
    image: firstGalleryItem?.src ?? '',
    imageAlt: firstGalleryItem?.alt ?? '',
    caption: firstGalleryItem?.caption ?? '',
    html: bodyElement?.innerHTML ?? '',
    work: readWorkElement(element),
    gallery,
  };
}

function readLegacyModal(element: HTMLElement): ContentModalData | null {
  const id = getStringAttr(element, 'data-modal');

  if (!id) {
    return null;
  }

  const imageElement = element.querySelector<HTMLImageElement>('.fwm-modal__image');
  const image = getImageSource(imageElement);
  const caption = element.querySelector<HTMLElement>('.fwm-modal__caption')?.textContent?.trim() ?? '';

  return {
    id,
    address: element.querySelector<HTMLElement>('.fwm-modal__address')?.textContent?.trim() ?? '',
    layout: 'default',
    headline: '',
    image,
    imageAlt: imageElement?.alt ?? '',
    caption,
    html: element.querySelector<HTMLElement>('.fwm-modal__text')?.innerHTML ?? '',
    work: null,
    gallery: image
      ? [
          {
            src: image,
            alt: imageElement?.alt ?? '',
            caption,
          },
        ]
      : [],
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

function renderWork(work: ContentModalWork): HTMLElement {
  const card = document.createElement(work.href ? 'a' : 'article');
  const imageWrap = document.createElement('span');
  const footer = document.createElement('span');
  const meta = document.createElement('span');
  const title = document.createElement('span');
  const icon = document.createElement('span');

  card.className = 'fwm-modal__work-card';

  if (work.href) {
    card.setAttribute('href', work.href);
  }

  if (work.thumbnail) {
    const image = document.createElement('img');

    image.className = 'fwm-modal__work-image';
    image.src = work.thumbnail;
    image.alt = work.thumbnailAlt;
    image.loading = 'lazy';
    image.decoding = 'async';
    imageWrap.className = 'fwm-modal__work-image-wrap';
    imageWrap.append(image);
    card.append(imageWrap);
  }

  meta.className = 'fwm-modal__work-meta';
  title.className = 'fwm-modal__work-title';
  title.textContent = work.title;
  if (work.title) {
    meta.append(title);
  }

  if (work.year) {
    const year = document.createElement('span');

    year.className = 'fwm-modal__work-year';
    year.textContent = work.year;
    meta.append(year);
  }

  footer.className = 'fwm-modal__work-footer';
  icon.className = 'fwm-modal__work-icon';
  icon.innerHTML = WORK_LINK_ICON_SVG;
  footer.append(meta, icon);
  card.append(footer);

  return card;
}

function renderGalleryItem(item: ContentModalGalleryItem, modalId: string, index: number): HTMLElement {
  const link = document.createElement('a');
  const image = document.createElement('img');
  const lightboxIcon = document.createElement('span');
  const caption = document.createElement('span');

  link.className = 'fwm-modal__image-link';
  link.href = item.src;
  link.setAttribute('data-lightbox-src', item.src);
  link.setAttribute('data-lightbox-caption', item.caption);
  link.setAttribute('data-lightbox-alt', item.alt);
  link.setAttribute('data-lightbox-group', `modal-${modalId}`);

  image.className = 'fwm-modal__image';
  image.src = item.src;
  image.alt = item.alt;
  image.loading = index === 0 ? 'eager' : 'lazy';
  image.decoding = 'async';

  lightboxIcon.className = 'fwm-modal__lightbox-icon';
  lightboxIcon.setAttribute('aria-hidden', 'true');
  lightboxIcon.innerHTML = MODAL_LIGHTBOX_ICON_SVG;

  caption.className = 'fwm-modal__caption';
  caption.textContent = item.caption;
  caption.hidden = item.caption.length === 0;

  link.append(image, lightboxIcon, caption);

  return link;
}

function clearContextContent(singleton: SingletonElements): void {
  singleton.headline.textContent = '';
  singleton.headline.hidden = true;
  singleton.work.replaceChildren();
  singleton.work.hidden = true;
  singleton.gallery.replaceChildren();
  singleton.gallery.hidden = true;
}

function renderDefaultContent(singleton: SingletonElements, content: ContentModalData): void {
  const hasImage = content.image.trim().length > 0;

  singleton.root.dataset.modalVariant = 'default';
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
  clearContextContent(singleton);
}

function renderContextContent(singleton: SingletonElements, content: ContentModalData): void {
  const gallery = content.gallery?.length
    ? content.gallery
    : content.image.trim()
      ? [{ src: content.image, alt: content.imageAlt, caption: content.caption }]
      : [];

  singleton.root.dataset.modalVariant = 'context';
  singleton.root.dataset.modalId = content.id;
  singleton.address.textContent = content.address;
  singleton.imageLink.hidden = true;
  singleton.imageLink.href = '#';
  singleton.imageLink.setAttribute('data-lightbox-src', '');
  singleton.imageLink.setAttribute('data-lightbox-caption', '');
  singleton.imageLink.setAttribute('data-lightbox-alt', '');
  singleton.imageLink.setAttribute('data-lightbox-group', '');
  singleton.image.removeAttribute('src');
  singleton.image.alt = '';
  singleton.caption.textContent = '';
  singleton.headline.textContent = content.headline ?? '';
  singleton.headline.hidden = !content.headline;
  singleton.text.innerHTML = content.html;
  singleton.work.replaceChildren();
  singleton.work.hidden = !content.work;
  singleton.gallery.replaceChildren();
  singleton.gallery.hidden = gallery.length === 0;

  if (content.work) {
    singleton.work.append(renderWork(content.work));
  }

  gallery.forEach((item, index) => {
    singleton.gallery.append(renderGalleryItem(item, content.id, index));
  });
}

function renderContent(content: ContentModalData): SingletonElements {
  const singleton = ensureSingleton();

  if (content.layout === 'context') {
    renderContextContent(singleton, content);
  } else {
    renderDefaultContent(singleton, content);
  }

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
    layout: content.layout ?? 'default',
    headline: content.headline ?? '',
    image: content.image ?? '',
    imageAlt: content.imageAlt ?? '',
    caption: content.caption ?? '',
    html: content.html ?? '',
    work: content.work ?? null,
    gallery: content.gallery?.length
      ? content.gallery
      : content.image
        ? [{ src: content.image, alt: content.imageAlt ?? '', caption: content.caption ?? '' }]
        : [],
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
