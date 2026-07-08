/*! Webflow Site Interactions v1.0.0 */
(function () {
  'use strict';

  const Utils = (() => {
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
function qs(selector, root = document) {
    return root.querySelector(selector);
}
function qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
}
function safeParseJson(input) {
    try {
        return JSON.parse(input);
    }
    catch (_a) {
        return null;
    }
}
function isHTMLElement(value) {
    return value instanceof HTMLElement;
}
function isNonEmptyString(value) {
    return typeof value === 'string' && value.trim().length > 0;
}
function getStringAttr(element, attrName) {
    const value = element.getAttribute(attrName);
    return isNonEmptyString(value) ? value.trim() : '';
}
function getDataId(element, attrName) {
    return getStringAttr(element, attrName);
}
function findElementByDataValue(selector, attrName, expectedValue, root = document) {
    var _a;
    const normalizedValue = expectedValue.trim();
    if (!normalizedValue) {
        return null;
    }
    return ((_a = qsa(selector, root).find((element) => {
        return getStringAttr(element, attrName) === normalizedValue;
    })) !== null && _a !== void 0 ? _a : null);
}
function isElementHidden(element) {
    if (element.hidden) {
        return true;
    }
    if (element.closest('[hidden], [aria-hidden="true"]')) {
        return true;
    }
    if (element.inert) {
        return true;
    }
    const style = window.getComputedStyle(element);
    return style.display === 'none' || style.visibility === 'hidden';
}
function getFocusableElements(container) {
    return qsa(FOCUSABLE_SELECTOR, container).filter((element) => {
        return !isElementHidden(element) && element.tabIndex !== -1;
    });
}
function focusElement(element) {
    if (!element) {
        return;
    }
    try {
        element.focus({ preventScroll: true });
    }
    catch (_a) {
        element.focus();
    }
}
function getActiveHTMLElement() {
    return isHTMLElement(document.activeElement) ? document.activeElement : null;
}
function restoreFocus(element) {
    if (!element || !document.contains(element)) {
        return;
    }
    focusElement(element);
}
function trapFocus(container, event) {
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
const scrollState = {
    count: 0,
    scrollY: 0,
    bodyOverflow: '',
    bodyPosition: '',
    bodyTop: '',
    bodyWidth: '',
    bodyPaddingRight: '',
};
function lockScroll() {
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
function unlockScroll() {
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
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
function delegate(root, eventName, selector, handler, options) {
    const listener = (event) => {
        const target = event.target;
        if (!(target instanceof Element)) {
            return;
        }
        const matchedElement = target.closest(selector);
        if (!matchedElement) {
            return;
        }
        if (root instanceof HTMLElement && !root.contains(matchedElement)) {
            return;
        }
        handler(event, matchedElement);
    };
    root.addEventListener(eventName, listener, options);
    return () => {
        root.removeEventListener(eventName, listener, options);
    };
}
function dispatchSiteEvent(target, eventName, detail) {
    target.dispatchEvent(new CustomEvent(eventName, {
        bubbles: true,
        detail,
    }));
}
function escapeHtml(value) {
    const replacements = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    };
    return value.replace(/[&<>"']/g, (character) => replacements[character]);
}
    return {
      qs,
      qsa,
      safeParseJson,
      isHTMLElement,
      isNonEmptyString,
      getStringAttr,
      getDataId,
      findElementByDataValue,
      getFocusableElements,
      focusElement,
      getActiveHTMLElement,
      restoreFocus,
      trapFocus,
      lockScroll,
      unlockScroll,
      prefersReducedMotion,
      delegate,
      dispatchSiteEvent,
      escapeHtml,
    };
  })();

  const I18n = (() => {
    const { isNonEmptyString, safeParseJson, qs } = Utils;
let translations = {};
function normalizeTranslations(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return {};
    }
    return Object.entries(value).reduce((accumulator, [key, translation]) => {
        if (isNonEmptyString(key) && isNonEmptyString(translation)) {
            accumulator[key.trim()] = translation.trim();
        }
        return accumulator;
    }, {});
}
function initI18n(root = document) {
    var _a, _b;
    translations = {};
    const script = qs('[data-site-i18n]', root);
    const rawJson = (_b = (_a = script === null || script === void 0 ? void 0 : script.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : '';
    if (rawJson) {
        const parsed = safeParseJson(rawJson);
        translations = normalizeTranslations(parsed);
    }
    return {
        get values() {
            return { ...translations };
        },
        t,
    };
}
function t(key, fallback) {
    const normalizedKey = key.trim();
    const value = translations[normalizedKey];
    if (isNonEmptyString(value)) {
        return value.trim();
    }
    return fallback.trim();
}
    return { initI18n, t };
  })();

  const Modal = (() => {
    const {
      delegate,
      dispatchSiteEvent,
      findElementByDataValue,
      focusElement,
      getActiveHTMLElement,
      getDataId,
      getFocusableElements,
      isHTMLElement,
      lockScroll,
      qsa,
      restoreFocus,
      trapFocus,
      unlockScroll,
    } = Utils;
const MODAL_SELECTOR = '[data-modal]';
const MODAL_PANEL_SELECTOR = '[data-modal-panel]';
const MODAL_OPEN_SELECTOR = '[data-modal-open]';
const MODAL_CLOSE_SELECTOR = '[data-modal-close]';
let initialized = false;
let closeOnBackdrop = true;
let activeModal = null;
let activePanel = null;
let activeModalId = '';
let previouslyFocusedElement = null;
function getModalById(id) {
    return findElementByDataValue(MODAL_SELECTOR, 'data-modal', id);
}
function getModalPanel(modal) {
    var _a;
    return (_a = modal.querySelector(MODAL_PANEL_SELECTOR)) !== null && _a !== void 0 ? _a : modal;
}
function prepareModal(modal) {
    const panel = getModalPanel(modal);
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
}
function focusModal(modal) {
    var _a;
    const panel = getModalPanel(modal);
    const firstFocusable = (_a = getFocusableElements(panel)[0]) !== null && _a !== void 0 ? _a : getFocusableElements(modal)[0];
    if (firstFocusable) {
        focusElement(firstFocusable);
        return;
    }
    if (!panel.hasAttribute('tabindex')) {
        panel.setAttribute('tabindex', '-1');
    }
    focusElement(panel);
}
function setModalOpenState(modal, isOpen) {
    modal.hidden = !isOpen;
    modal.setAttribute('aria-hidden', String(!isOpen));
    modal.classList.toggle('is-active', isOpen);
    modal.classList.toggle('is-visible', isOpen);
    document.documentElement.classList.toggle('is-modal-open', isOpen);
    document.body.classList.toggle('is-modal-open', isOpen);
}
function openModal(id, trigger) {
    const normalizedId = id.trim();
    if (!normalizedId) {
        return;
    }
    const modal = getModalById(normalizedId);
    if (!modal) {
        return;
    }
    if (activeModal && activeModal !== modal) {
        closeModal();
    }
    if (activeModal === modal) {
        return;
    }
    previouslyFocusedElement = trigger !== null && trigger !== void 0 ? trigger : getActiveHTMLElement();
    activeModal = modal;
    activePanel = getModalPanel(modal);
    activeModalId = normalizedId;
    setModalOpenState(modal, true);
    lockScroll();
    focusModal(modal);
    dispatchSiteEvent(modal, 'site:modal-open', {
        id: activeModalId,
        modal,
        trigger: trigger !== null && trigger !== void 0 ? trigger : null,
    });
}
function closeModal() {
    if (!activeModal) {
        return;
    }
    const modal = activeModal;
    const id = activeModalId;
    const focusTarget = previouslyFocusedElement;
    setModalOpenState(modal, false);
    unlockScroll();
    activeModal = null;
    activePanel = null;
    activeModalId = '';
    previouslyFocusedElement = null;
    dispatchSiteEvent(modal, 'site:modal-close', {
        id,
        modal,
    });
    restoreFocus(focusTarget);
}
function onKeydown(event) {
    if (!activeModal || !activePanel) {
        return;
    }
    // When a lightbox is open over a modal, the lightbox owns top-level keyboard handling.
    if (document.body.classList.contains('is-lightbox-open')) {
        return;
    }
    if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
        return;
    }
    trapFocus(activePanel, event);
}
function onBackdropClick(event) {
    if (!closeOnBackdrop || !activeModal) {
        return;
    }
    const target = event.target;
    if (!isHTMLElement(target) || !activeModal.contains(target)) {
        return;
    }
    const panel = getModalPanel(activeModal);
    if (!panel.contains(target)) {
        closeModal();
    }
}
function initModals(options) {
    var _a;
    closeOnBackdrop = (_a = options.closeOnBackdrop) !== null && _a !== void 0 ? _a : true;
    qsa(MODAL_SELECTOR).forEach(prepareModal);
    if (!initialized) {
        delegate(document, 'click', MODAL_OPEN_SELECTOR, (event, trigger) => {
            event.preventDefault();
            openModal(getDataId(trigger, 'data-modal-open'), trigger);
        });
        delegate(document, 'click', MODAL_CLOSE_SELECTOR, (event, closeButton) => {
            if (!activeModal || !activeModal.contains(closeButton)) {
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
        closeModal,
    };
}
    return { initModals, openModal, closeModal };
  })();

  const Lightbox = (() => {
    const {
      delegate,
      dispatchSiteEvent,
      focusElement,
      getStringAttr,
      lockScroll,
      qsa,
      qs,
      restoreFocus,
      trapFocus,
      unlockScroll,
    } = Utils;
const LIGHTBOX_TRIGGER_SELECTOR = '[data-lightbox-src]';
const LIGHTBOX_ROOT_SELECTOR = '[data-site-lightbox]';
const LIGHTBOX_CLOSE_SELECTOR = '[data-lightbox-close]';
const LIGHTBOX_PREVIOUS_SELECTOR = '[data-lightbox-prev]';
const LIGHTBOX_NEXT_SELECTOR = '[data-lightbox-next]';
let initialized = false;
let i18n = null;
let elements = null;
let items = [];
let activeIndex = 0;
let isOpen = false;
let previouslyFocusedElement = null;
function getTriggerSrc(trigger) {
    const dataSrc = getStringAttr(trigger, 'data-lightbox-src');
    if (dataSrc) {
        return dataSrc;
    }
    if (trigger instanceof HTMLAnchorElement) {
        return trigger.href;
    }
    return '';
}
function getTriggerAlt(trigger) {
    var _a, _b;
    const explicitAlt = getStringAttr(trigger, 'data-lightbox-alt');
    if (explicitAlt) {
        return explicitAlt;
    }
    const image = qs('img', trigger);
    return (_b = (_a = image === null || image === void 0 ? void 0 : image.alt) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : '';
}
function getTriggerItem(trigger) {
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
function collectItems(trigger) {
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
    const groupedItems = qsa(LIGHTBOX_TRIGGER_SELECTOR)
        .filter((candidate) => getStringAttr(candidate, 'data-lightbox-group') === selectedItem.group)
        .map(getTriggerItem)
        .filter((item) => Boolean(item));
    const index = Math.max(0, groupedItems.findIndex((item) => item.trigger === trigger));
    return {
        items: groupedItems.length > 0 ? groupedItems : [selectedItem],
        index,
    };
}
function button(label, attrName, text, className) {
    const element = document.createElement('button');
    element.type = 'button';
    element.className = className;
    element.setAttribute(attrName, '');
    element.setAttribute('aria-label', label);
    element.title = label;
    element.textContent = text;
    return element;
}
function ensureLightboxDom() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (elements) {
        updateLabels(elements);
        return elements;
    }
    const existingRoot = qs(LIGHTBOX_ROOT_SELECTOR);
    const root = existingRoot !== null && existingRoot !== void 0 ? existingRoot : document.createElement('div');
    root.classList.add('site-lightbox');
    root.setAttribute('data-site-lightbox', '');
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-modal', 'true');
    root.setAttribute('aria-hidden', 'true');
    root.setAttribute('aria-label', (_a = i18n === null || i18n === void 0 ? void 0 : i18n.t('openImage', 'Image preview')) !== null && _a !== void 0 ? _a : 'Image preview');
    root.hidden = true;
    root.tabIndex = -1;
    if (!existingRoot) {
        root.innerHTML = '';
        const closeButton = button((_b = i18n === null || i18n === void 0 ? void 0 : i18n.t('close', 'Close')) !== null && _b !== void 0 ? _b : 'Close', 'data-lightbox-close', '×', 'site-lightbox__close');
        const previousButton = button((_c = i18n === null || i18n === void 0 ? void 0 : i18n.t('previous', 'Previous')) !== null && _c !== void 0 ? _c : 'Previous', 'data-lightbox-prev', '‹', 'site-lightbox__previous');
        const nextButton = button((_d = i18n === null || i18n === void 0 ? void 0 : i18n.t('next', 'Next')) !== null && _d !== void 0 ? _d : 'Next', 'data-lightbox-next', '›', 'site-lightbox__next');
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
    const foundElements = {
        root,
        image: (_e = qs('[data-lightbox-image]', root)) !== null && _e !== void 0 ? _e : document.createElement('img'),
        caption: (_f = qs('[data-lightbox-caption-output]', root)) !== null && _f !== void 0 ? _f : document.createElement('figcaption'),
        closeButton: (_g = qs(LIGHTBOX_CLOSE_SELECTOR, root)) !== null && _g !== void 0 ? _g : document.createElement('button'),
        previousButton: (_h = qs(LIGHTBOX_PREVIOUS_SELECTOR, root)) !== null && _h !== void 0 ? _h : document.createElement('button'),
        nextButton: (_j = qs(LIGHTBOX_NEXT_SELECTOR, root)) !== null && _j !== void 0 ? _j : document.createElement('button'),
    };
    elements = foundElements;
    updateLabels(foundElements);
    if (!existingRoot && !document.body.contains(root)) {
        document.body.append(root);
    }
    return foundElements;
}
function updateLabels(lightboxElements) {
    var _a, _b, _c, _d;
    const closeLabel = (_a = i18n === null || i18n === void 0 ? void 0 : i18n.t('close', 'Close')) !== null && _a !== void 0 ? _a : 'Close';
    const previousLabel = (_b = i18n === null || i18n === void 0 ? void 0 : i18n.t('previous', 'Previous')) !== null && _b !== void 0 ? _b : 'Previous';
    const nextLabel = (_c = i18n === null || i18n === void 0 ? void 0 : i18n.t('next', 'Next')) !== null && _c !== void 0 ? _c : 'Next';
    const dialogLabel = (_d = i18n === null || i18n === void 0 ? void 0 : i18n.t('openImage', 'Image preview')) !== null && _d !== void 0 ? _d : 'Image preview';
    lightboxElements.root.setAttribute('aria-label', dialogLabel);
    lightboxElements.closeButton.setAttribute('aria-label', closeLabel);
    lightboxElements.closeButton.title = closeLabel;
    lightboxElements.previousButton.setAttribute('aria-label', previousLabel);
    lightboxElements.previousButton.title = previousLabel;
    lightboxElements.nextButton.setAttribute('aria-label', nextLabel);
    lightboxElements.nextButton.title = nextLabel;
}
function renderItem() {
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
function setOpenState(open) {
    const lightboxElements = ensureLightboxDom();
    lightboxElements.root.hidden = !open;
    lightboxElements.root.setAttribute('aria-hidden', String(!open));
    lightboxElements.root.classList.toggle('is-active', open);
    lightboxElements.root.classList.toggle('is-visible', open);
    document.documentElement.classList.toggle('is-lightbox-open', open);
    document.body.classList.toggle('is-lightbox-open', open);
}
function goToItem(index) {
    if (items.length < 2) {
        return;
    }
    activeIndex = (index + items.length) % items.length;
    renderItem();
}
function goNext() {
    goToItem(activeIndex + 1);
}
function goPrevious() {
    goToItem(activeIndex - 1);
}
function openLightbox(trigger) {
    var _a;
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
        group: (_a = currentItem === null || currentItem === void 0 ? void 0 : currentItem.group) !== null && _a !== void 0 ? _a : '',
        trigger,
    });
}
function closeLightbox() {
    var _a;
    if (!isOpen || !elements) {
        return;
    }
    const lightboxElements = elements;
    const focusTarget = previouslyFocusedElement;
    const currentItem = (_a = items[activeIndex]) !== null && _a !== void 0 ? _a : null;
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
function onKeydown(event) {
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
function onBackdropClick(event) {
    if (!isOpen || !elements) {
        return;
    }
    if (event.target === elements.root) {
        closeLightbox();
    }
}
function initLightbox(options) {
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
    return { initLightbox, openLightbox, closeLightbox };
  })();

  let booted = false;

  function boot() {
    if (booted) {
      return;
    }

    booted = true;

    const i18n = I18n.initI18n();

    Modal.initModals({ i18n });
    Lightbox.initLightbox({ i18n });

    window.SiteInteractions = {
      openModal: Modal.openModal,
      closeModal: Modal.closeModal,
      openLightbox: Lightbox.openLightbox,
      closeLightbox: Lightbox.closeLightbox,
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
