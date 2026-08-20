import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { prefersReducedMotion, qsa } from './utils';

/*
  Minimaler Parallax: ein Element wandert waehrend seines Durchlaufs durch den Viewport
  um wenige Pixel gegen die Scrollrichtung. Markiert wird per data-parallax, weil das
  Verhalten beschreibt und keine Optik - Klassen gehoeren in Webflow dem Styling und
  werden dort umbenannt und kombiniert, ein Attribut ueberlebt das.

    <div class="editionen_media" data-parallax>        Standardweg
    <div class="editionen_media" data-parallax="32">   eigener Weg in Pixeln
    <div class="editionen_media" data-parallax="0">    aus

  Der Wert ist der gesamte Weg in Pixeln, nicht pro Scrollschritt: das Element startet
  um die Haelfte nach unten versetzt und endet um dieselbe Haelfte nach oben.
*/
const PARALLAX_SELECTOR = '[data-parallax]';
const PARALLAX_ATTR = 'data-parallax';
const READY_ATTR = 'data-parallax-ready';

const DEFAULT_SHIFT = 20;

// Mehr ist kein Parallax mehr, sondern ein Layoutfehler: bei zu grossem Weg reisst das
// Element sichtbar aus seiner Position und ueberlappt die Nachbarn.
const MAX_SHIFT = 120;

/*
  Der Hover-Zoom der Lightbox-Bilder haengt an einem CSS-transform. GSAP schreibt sein
  transform inline, und inline schlaegt Stylesheet - der Zoom waere still weg. Steht das
  Attribut auf so einem Bild, faehrt deshalb der Wrapper, den lightbox.ts exakt um das
  Bild legt. Optisch ist das dasselbe, nur ohne Kollision.
*/
const LIGHTBOX_IMAGE_CLASS = 'site-lightbox-trigger__image';
const LIGHTBOX_WRAPPER_SELECTOR = '.site-lightbox-trigger';

let pluginRegistered = false;

function registerPlugin(): void {
  if (pluginRegistered) {
    return;
  }

  pluginRegistered = true;
  gsap.registerPlugin(ScrollTrigger);
}

function readShift(element: HTMLElement): number {
  const raw = element.getAttribute(PARALLAX_ATTR);

  if (raw === null || raw.trim() === '') {
    return DEFAULT_SHIFT;
  }

  const value = Number.parseFloat(raw);

  if (!Number.isFinite(value)) {
    return DEFAULT_SHIFT;
  }

  return Math.min(Math.abs(value), MAX_SHIFT);
}

function resolveTarget(element: HTMLElement): HTMLElement {
  if (!element.classList.contains(LIGHTBOX_IMAGE_CLASS)) {
    return element;
  }

  return element.closest<HTMLElement>(LIGHTBOX_WRAPPER_SELECTOR) ?? element;
}

function applyParallax(element: HTMLElement): void {
  const shift = readShift(element);

  if (shift === 0) {
    return;
  }

  const target = resolveTarget(element);

  gsap.fromTo(
    target,
    // y wird explizit gesetzt statt ueber yPercent: sonst liest GSAP ein vorhandenes
    // inline transform als Pixelwert zurueck und rechnet den neuen Wert obendrauf.
    { y: shift / 2 },
    {
      y: -shift / 2,
      ease: 'none',
      scrollTrigger: {
        // Getriggert wird am markierten Element, bewegt wird das aufgeloeste Ziel -
        // bei Lightbox-Bildern sind das zwei verschiedene Knoten.
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        // Kurzer Nachlauf statt harter Kopplung: das macht die Bewegung weich, ohne
        // sie spuerbar hinterherhinken zu lassen.
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    },
  );
}

export function initParallax(root: ParentNode = document): void {
  const elements = qsa<HTMLElement>(PARALLAX_SELECTOR, root).filter(
    (element) => !element.hasAttribute(READY_ATTR),
  );

  if (elements.length === 0 || prefersReducedMotion()) {
    return;
  }

  registerPlugin();

  elements.forEach((element) => {
    element.setAttribute(READY_ATTR, '');
    applyParallax(element);
  });
}
