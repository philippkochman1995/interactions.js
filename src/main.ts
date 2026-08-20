import { initI18n } from './modules/i18n';
import { initLineReveal } from './modules/line-reveal';
import { closeLightbox, initLightbox, openLightbox } from './modules/lightbox';
import { closeModal, initModals, openContentModal, openModal } from './modules/modal';
import { initPageTransitions } from './modules/page-transition';
import { initParallax } from './modules/parallax';
import { initSiteMenu } from './modules/site-menu';
import { initWorkFlip } from './modules/work-flip';
import { initBackButtons } from './modules/utils';

let booted = false;

// Muss vor den Seitenuebergaengen laufen: Werk-Links werden vom Flip uebernommen,
// das rosa Overlay bleibt fuer alle anderen Links zustaendig.
initWorkFlip();
initPageTransitions();

// Ebenfalls vor boot(): die Ziele muessen markiert sein, bevor der erste Paint sie zeigt.
initLineReveal();

function boot(): void {
  if (booted) {
    return;
  }

  booted = true;

  const i18n = initI18n();

  initModals({ i18n });
  initLightbox({ i18n });
  // Nach initLightbox: der Wrapper, der bei Lightbox-Bildern zum Fenster wird,
  // entsteht erst dort.
  initParallax();
  initSiteMenu();
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
