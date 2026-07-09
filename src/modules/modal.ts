import type { I18nApi, ModalApi } from '../types';
import {
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
} from './utils';

interface ModalInitOptions {
  i18n: I18nApi;
  closeOnBackdrop?: boolean;
}

const MODAL_SELECTOR = '[data-modal]';
const MODAL_PANEL_SELECTOR = '[data-modal-panel]';
const MODAL_OPEN_SELECTOR = '[data-modal-open]';
const MODAL_CLOSE_SELECTOR = '[data-modal-close]';
const MODAL_HASH_LINK_SELECTOR = 'a[href^="#modal:"]';
const MODAL_HASH_PREFIX = '#modal:';
const MODAL_CLOSE_DURATION = 220;

let initialized = false;
let closeOnBackdrop = true;
let activeModal: HTMLElement | null = null;
let activePanel: HTMLElement | null = null;
let activeModalId = '';
let previouslyFocusedElement: HTMLElement | null = null;
const closeTimers = new WeakMap<HTMLElement, number>();

function getModalById(id: string): HTMLElement | null {
  return findElementByDataValue<HTMLElement>(MODAL_SELECTOR, 'data-modal', id);
}

function getModalPanel(modal: HTMLElement): HTMLElement {
  return modal.querySelector<HTMLElement>(MODAL_PANEL_SELECTOR) ?? modal;
}

function getModalIdFromHashLink(link: HTMLElement): string {
  const href = link.getAttribute('href') ?? '';

  if (!href.startsWith(MODAL_HASH_PREFIX)) {
    return '';
  }

  return decodeURIComponent(href.slice(MODAL_HASH_PREFIX.length)).trim();
}

function prepareModal(modal: HTMLElement): void {
  const panel = getModalPanel(modal);

  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
}

function focusModal(modal: HTMLElement): void {
  const panel = getModalPanel(modal);
  const firstFocusable = getFocusableElements(panel)[0] ?? getFocusableElements(modal)[0];

  if (firstFocusable) {
    focusElement(firstFocusable);
    return;
  }

  if (!panel.hasAttribute('tabindex')) {
    panel.setAttribute('tabindex', '-1');
  }

  focusElement(panel);
}

function showModal(modal: HTMLElement): void {
  const closeTimer = closeTimers.get(modal);

  if (closeTimer !== undefined) {
    window.clearTimeout(closeTimer);
    closeTimers.delete(modal);
  }

  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('is-active');

  // Commit the initial animation state after removing `hidden`.
  void modal.offsetWidth;
  modal.classList.add('is-visible');
  document.documentElement.classList.add('is-modal-open');
  document.body.classList.add('is-modal-open');
}

function hideModal(modal: HTMLElement): void {
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('is-visible');

  const closeTimer = window.setTimeout(() => {
    modal.hidden = true;
    modal.classList.remove('is-active');
    closeTimers.delete(modal);
  }, MODAL_CLOSE_DURATION);

  closeTimers.set(modal, closeTimer);
  document.documentElement.classList.remove('is-modal-open');
  document.body.classList.remove('is-modal-open');
}

export function openModal(id: string, trigger?: HTMLElement): void {
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

  previouslyFocusedElement = trigger ?? getActiveHTMLElement();
  activeModal = modal;
  activePanel = getModalPanel(modal);
  activeModalId = normalizedId;

  showModal(modal);
  lockScroll();
  focusModal(modal);

  dispatchSiteEvent(modal, 'site:modal-open', {
    id: activeModalId,
    modal,
    trigger: trigger ?? null,
  });
}

export function closeModal(): void {
  if (!activeModal) {
    return;
  }

  const modal = activeModal;
  const id = activeModalId;
  const focusTarget = previouslyFocusedElement;

  hideModal(modal);
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

function onKeydown(event: KeyboardEvent): void {
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

function onBackdropClick(event: MouseEvent): void {
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

export function initModals(options: ModalInitOptions): ModalApi {
  closeOnBackdrop = options.closeOnBackdrop ?? true;

  qsa<HTMLElement>(MODAL_SELECTOR).forEach(prepareModal);

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
