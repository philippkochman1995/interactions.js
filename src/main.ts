import { initI18n } from './modules/i18n';
import { closeLightbox, initLightbox, openLightbox } from './modules/lightbox';
import { closeModal, initModals, openContentModal, openModal } from './modules/modal';
import { initBackButtons } from './modules/utils';

let booted = false;

function boot(): void {
  if (booted) {
    return;
  }

  booted = true;

  const i18n = initI18n();

  initModals({ i18n });
  initLightbox({ i18n });
  initBackButtons();

  window.SiteInteractions = {
    openModal,
    openContentModal,
    closeModal,
    openLightbox,
    closeLightbox,
  };
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
