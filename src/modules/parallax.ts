import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { prefersReducedMotion, qsa } from './utils';

/*
  Parallax als Fenster: der Rahmen steht fest im Layout, das Bild dahinter wandert beim
  Scrollen. Damit an den Kanten nie eine Luecke aufreisst, ist das Bild um den vollen
  Weg ueberhoeht und startet entsprechend versetzt.

  Markiert wird per data-parallax, weil das Verhalten beschreibt und keine Optik -
  Klassen gehoeren in Webflow dem Styling und werden dort umbenannt und kombiniert,
  ein Attribut ueberlebt das.

    <div class="editionen_media" data-parallax>        Standardweg
    <div class="editionen_media" data-parallax="90">   eigener Weg in Pixeln
    <div class="editionen_media" data-parallax="0">    aus

  Das Attribut darf auf einem Container sitzen: jedes Bild darin bekommt sein eigenes
  Fenster. Auf der Editionen-Seite ist das ein Medienblock mit mehreren Slides.
*/
const PARALLAX_SELECTOR = '[data-parallax]';
const PARALLAX_ATTR = 'data-parallax';
const READY_ATTR = 'data-parallax-ready';

const WINDOW_CLASS = 'fw-parallax-window';
const INNER_CLASS = 'fw-parallax-inner';

/*
  Gesamtweg in Pixeln, den das Bild hinter dem Fenster zuruecklegt. 20 war zu wenig:
  verteilt auf die rund 1400px Scrollstrecke, die ein Element zum Durchqueren des
  Viewports braucht, liegt das unter der Wahrnehmungsschwelle.
*/
const DEFAULT_SHIFT = 60;

// Darueber wird der Bildausschnitt so knapp, dass sichtbar Motiv verloren geht.
const MAX_SHIFT = 160;

const LIGHTBOX_WRAPPER_SELECTOR = '.site-lightbox-trigger';

/*
  Die Ebene wird um diesen Betrag weiter aufgespannt, als sie faehrt. An den Endpunkten
  schloesse sie sonst exakt mit der Fensterkante ab, und eine Subpixel-Rundung liesse dort
  eine Haarlinie aufblitzen - dieselbe Ueberlegung wie das eine Prozent beim Zeilen-Reveal.
*/
const EDGE_RESERVE = 1;

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

function whenMeasurable(image: HTMLImageElement): Promise<void> {
  if (image.complete && image.naturalWidth > 0) {
    return Promise.resolve();
  }

  // Ohne die echten Bildmasse laesst sich die Fensterproportion nicht bestimmen, und
  // ein Fenster ohne Hoehe wuerde in sich zusammenfallen.
  return new Promise((resolve) => {
    const done = (): void => {
      image.removeEventListener('load', done);
      image.removeEventListener('error', done);
      resolve();
    };

    image.addEventListener('load', done, { once: true });
    image.addEventListener('error', done, { once: true });
  });
}

/*
  Baut Fenster und wandernde Ebene um ein Bild. Der Lightbox-Wrapper ist als Fenster
  gesetzt, wenn es ihn gibt: er umschliesst das Bild bereits exakt, ist beschnitten und
  traegt das Lupen-Icon, das am Rand kleben bleiben soll statt mitzuwandern.
*/
function buildWindow(image: HTMLImageElement, shift: number): HTMLElement | null {
  const frame = image.closest<HTMLElement>(LIGHTBOX_WRAPPER_SELECTOR) ?? image.parentElement;

  if (!frame || frame.classList.contains(WINDOW_CLASS)) {
    return null;
  }

  const ratio = image.naturalWidth / image.naturalHeight;

  if (!Number.isFinite(ratio) || ratio <= 0) {
    return null;
  }

  // Haelt die Hoehe, die vorher das Bild selbst vorgegeben hat - sonst faellt das
  // Fenster zusammen, sobald das Bild absolut positioniert ist.
  frame.classList.add(WINDOW_CLASS);
  frame.style.aspectRatio = `${image.naturalWidth} / ${image.naturalHeight}`;

  const inner = document.createElement('span');
  const overscan = shift / 2 + EDGE_RESERVE;

  inner.className = INNER_CLASS;
  inner.style.top = `${-overscan}px`;
  inner.style.bottom = `${-overscan}px`;

  image.before(inner);
  inner.append(image);

  return inner;
}

function applyParallax(element: HTMLElement, shift: number): void {
  const images = element instanceof HTMLImageElement ? [element] : qsa<HTMLImageElement>('img', element);

  if (images.length === 0) {
    // Kein Bild da: dann wandert das Element selbst. Kein Fenster, aber besser als
    // gar nichts, wenn das Attribut auf einem Textblock landet.
    gsap.fromTo(
      element,
      { y: shift / 2 },
      { y: -shift / 2, ease: 'none', scrollTrigger: trigger(element) },
    );
    return;
  }

  images.forEach((image) => {
    void whenMeasurable(image).then(() => {
      if (!image.isConnected) {
        return;
      }

      const inner = buildWindow(image, shift);

      if (!inner) {
        return;
      }

      gsap.fromTo(
        inner,
        // y explizit von beiden Seiten: sonst liest GSAP ein vorhandenes inline
        // transform als Pixelwert zurueck und rechnet den neuen Wert obendrauf.
        { y: shift / 2 },
        { y: -shift / 2, ease: 'none', scrollTrigger: trigger(element) },
      );

      ScrollTrigger.refresh();
    });
  });
}

function trigger(element: HTMLElement): ScrollTrigger.StaticVars {
  return {
    trigger: element,
    start: 'top bottom',
    end: 'bottom top',
    // Kurzer Nachlauf statt harter Kopplung: macht die Bewegung weich, ohne sie
    // spuerbar hinterherhinken zu lassen.
    scrub: 0.5,
    invalidateOnRefresh: true,
  };
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
    const shift = readShift(element);

    if (shift === 0) {
      return;
    }

    element.setAttribute(READY_ATTR, '');
    applyParallax(element, shift);
  });
}
