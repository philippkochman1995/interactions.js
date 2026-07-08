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

let initialized = false;
let closeOnBackdrop = true;
let activeModal: HTMLElement | null = null;
let activePanel: HTMLElement | null = null;
let activeModalId = '';
let previouslyFocusedElement: HTMLElement | null = null;

function getModalById(id: string): HTMLElement | null {
  return findElementByDataValue<HTMLElement>(MODAL_SELECTOR, 'data-modal', id);
}

function getModalPanel(modal: HTMLElement): HTMLElement {
  return modal.querySelector<HTMLElement>(MODAL_PANEL_SELECTOR) ?? modal;
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

function setModalOpenState(modal: HTMLElement, isOpen: boolean): void {
  modal.hidden = !isOpen;
  modal.setAttribute('aria-hidden', String(!isOpen));
  modal.classList.toggle('is-active', isOpen);
  modal.classList.toggle('is-visible', isOpen);
  document.documentElement.classList.toggle('is-modal-open', isOpen);
  document.body.classList.toggle('is-modal-open', isOpen);
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

  setModalOpenState(modal, true);
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
