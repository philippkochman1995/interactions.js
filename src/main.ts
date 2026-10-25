import { initI18n } from './modules/i18n';
import { initLanguagePicker } from './modules/language-picker';
import { initLineReveal } from './modules/line-reveal';
import { closeLightbox, initLightbox, openLightbox } from './modules/lightbox';
import { closeModal, initModals, openContentModal, openModal } from './modules/modal';
import { initPageTransitions } from './modules/page-transition';
import { initParallax } from './modules/parallax';
import { initSiteMenu } from './modules/site-menu';
import { initBackButtons } from './modules/utils';
import { initLogoVariants } from './modules/logo-variants';
import { initMoreArrows } from './modules/more-arrows';
import { initOutlinedButtons } from './modules/outlined-buttons';
import { initSitePreloader } from './modules/site-preloader';
import { initSmoothScrollSync } from './modules/smooth-scroll';
import { initHomeImageWipe } from './modules/home-image-wipe';
import { initHomeHeadingReveal } from './modules/home-heading-reveal';

let booted = false;
initSitePreloader();

// Werk-Links bleiben in der Uebersicht und oeffnen dort das SPA-Overlay.
// Fuer andere Seitenlinks bleibt die rosa Seitentransition zustaendig.
initPageTransitions();

// Ebenfalls vor boot(): die Ziele muessen markiert sein, bevor der erste Paint sie zeigt.
initLineReveal();
initHomeHeadingReveal();
initSmoothScrollSync();

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
  initLanguagePicker();
  initBackButtons();
  initLogoVariants();
  initMoreArrows();
  initOutlinedButtons();
  initHomeImageWipe();

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
