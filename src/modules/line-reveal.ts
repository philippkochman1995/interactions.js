import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import { prefersReducedMotion, qsa } from './utils';

/*
  Zeilenweiser Text-Reveal: SplitText zerlegt den Text, legt pro Zeile eine Maske
  darum, und die Zeilen (oder Woerter/Zeichen) fahren aus dieser Maske hoch.

  TESTBETRIEB: Der Selektor greift zusaetzlich auf alle H2. Fuer den Dauerbetrieb
  hier auf '[data-reveal]' reduzieren und die gewuenschten Elemente in Webflow per
  Attribut markieren.
*/
const REVEAL_SELECTOR = '[data-reveal], h2';

/*
  Nicht anfassen: Modal und Lightbox bauen ihre Ueberschriften selbst und tauschen
  deren Inhalt bei jedem Oeffnen aus - ein Split wuerde dabei zerreissen. Einzelne
  Elemente lassen sich zusaetzlich per data-reveal="off" ausnehmen.
*/
const EXCLUDE_SELECTOR = '.fwm-modal, [data-modal], .site-lightbox, [data-site-lightbox]';

const TYPE_ATTR = 'data-reveal';
const DELAY_ATTR = 'data-reveal-delay';
const STAGGER_ATTR = 'data-reveal-stagger';
const TRIGGER_ATTR = 'data-reveal-trigger';
const PENDING_ATTR = 'data-reveal-pending';
const READY_ATTR = 'data-reveal-ready';

const TIGHT_CLASS = 'fw-reveal-tight';
const LINE_CLASS = 'fw-ln';
const WORD_CLASS = 'fw-wd';
const CHAR_CLASS = 'fw-ch';

/*
  Ab dieser Zeilenhoehe ist die Maske genau so hoch wie die Zeilenbox und wuerde Ober-
  und Unterlaengen abschneiden. Dann weitet overflow-clip-margin den sichtbaren Bereich
  der Maske - das ist die einzige Stellschraube, die nichts am Layout verschiebt.
  Negative Margins waeren falsch: die kollabieren zwischen benachbarten Masken und die
  Ueberschrift wandert in der Hoehe. Gesetzt wird inline und in Pixeln, weil die
  Property keine em-Werte annimmt.

  Preis dieser Loesung: im geweiteten Bereich kann waehrend der Bewegung ein Rest der
  Nachbarzeile durchscheinen. Bei line-height unter 1 ueberlappen sich die Zeilenboxen
  physisch - Unterlaengen zeigen und Nachbarzeilen verdecken geht nicht gleichzeitig.
*/
const TIGHT_LINE_HEIGHT = 1.1;
const TIGHT_CLIP_MARGIN_EM = 0.25;

// Startpunkt der Animation im Viewport. Deckt sich mit dem Standard von ScrollTrigger,
// nur etwas frueher, damit der Text nicht erst an der Unterkante losgeht.
const SCROLL_START = 'top bottom-=15%';

const EASE = 'expo.out';

// Zeitskala auf Basis des goldenen Schnitts: Stufe 1 = 0,1 s, jede weitere Stufe
// mal Phi. So haengen Dauer und Versatz rechnerisch zusammen statt geraten zu sein.
const PHI = 1.618033988749895;

function step(index: number): number {
  return Math.round(0.1 * PHI ** (index - 1) * 1000) / 1000;
}

const DURATION = step(6); // 1.109 s

type RevealType = 'lines' | 'words' | 'chars';

const STAGGER: Record<RevealType, number> = {
  lines: step(1), // 0.1
  words: step(1), // 0.1
  chars: step(2) - step(1), // 0.062
};

let pluginsRegistered = false;

function registerPlugins(): void {
  if (pluginsRegistered) {
    return;
  }

  pluginsRegistered = true;
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

function waitForFonts(): Promise<void> {
  if (!('fonts' in document)) {
    return Promise.resolve();
  }

  // Vor dem Split muessen die Webfonts stehen, sonst bricht SplitText die Zeilen
  // anhand der Fallback-Schrift um und die Masken sitzen falsch.
  return document.fonts.ready.then(
    () => undefined,
    () => undefined,
  );
}

function readType(element: HTMLElement): RevealType {
  const value = element.getAttribute(TYPE_ATTR)?.trim();

  if (value === 'words' || value === 'chars' || value === 'lines') {
    return value;
  }

  return 'lines';
}

function isEligible(element: HTMLElement): boolean {
  if (element.hasAttribute(READY_ATTR) || element.hasAttribute(PENDING_ATTR)) {
    return false;
  }

  if (element.getAttribute(TYPE_ATTR) === 'off') {
    return false;
  }

  return element.closest(EXCLUDE_SELECTOR) === null;
}

function readNumber(element: HTMLElement, attrName: string): number | null {
  const raw = element.getAttribute(attrName);

  if (raw === null || raw.trim() === '') {
    return null;
  }

  const value = Number.parseFloat(raw);

  return Number.isFinite(value) ? value : null;
}

function usesScrollTrigger(element: HTMLElement): boolean {
  return element.getAttribute(TRIGGER_ATTR) !== 'false';
}

function hasTightLineHeight(element: HTMLElement): boolean {
  const styles = window.getComputedStyle(element);
  const lineHeight = styles.lineHeight.trim();
  const fontSize = Number.parseFloat(styles.fontSize);

  if (lineHeight === 'normal' || !Number.isFinite(fontSize) || fontSize <= 0) {
    return false;
  }

  const parsed = Number.parseFloat(lineHeight);

  if (!Number.isFinite(parsed) || parsed <= 0) {
    return false;
  }

  const ratio = lineHeight.endsWith('px') ? parsed / fontSize : parsed;

  return ratio <= TIGHT_LINE_HEIGHT;
}

function reveal(element: HTMLElement): void {
  const type = readType(element);
  const delay = readNumber(element, DELAY_ATTR) ?? 0;
  const stagger = readNumber(element, STAGGER_ATTR) ?? STAGGER[type];
  const scrolls = usesScrollTrigger(element);

  const tight = hasTightLineHeight(element);

  element.classList.toggle(TIGHT_CLASS, tight);

  const clipMargin = tight
    ? TIGHT_CLIP_MARGIN_EM * Number.parseFloat(window.getComputedStyle(element).fontSize)
    : 0;

  // Merkt sich, ob der Reveal schon gelaufen ist: autoSplit legt bei Resize oder
  // Font-Wechsel neu an, der Text soll dann aber nicht erneut hereinfahren.
  let played = false;

  SplitText.create(element, {
    // 'lines' muss immer mitgesplittet werden - die Maske haengt an der Zeile,
    // auch wenn wortweise animiert wird.
    type: type === 'lines' ? 'lines' : `lines,${type}`,
    mask: 'lines',
    tag: 'span',
    linesClass: LINE_CLASS,
    wordsClass: WORD_CLASS,
    charsClass: CHAR_CLASS,
    smartWrap: true,
    autoSplit: true,
    onSplit: (instance) => {
      element.removeAttribute(PENDING_ATTR);
      element.setAttribute(READY_ATTR, '');

      const parts = instance[type];

      if (clipMargin > 0) {
        // Die Maske ist das Elternelement der Zeile; sie muss den Text auch dann noch
        // verdecken, wenn er um die geweitete Clip-Kante hinausgefahren ist.
        instance.lines.forEach((line) => {
          const mask = line.parentElement;

          if (mask) {
            mask.style.overflowClipMargin = `${Math.round(clipMargin)}px`;
          }
        });
      }

      if (played) {
        return undefined;
      }

      /*
        Bewusst set() + to() statt from(): bei from() entscheidet GSAP selbst, wann der
        Startzustand gerendert wird, und in der Kombination aus autoSplit und
        ScrollTrigger faellt er weg - der Text stuende sichtbar da und wuerde beim
        Erreichen des Triggers nach unten springen. So steht der Ruhezustand sofort.

        yPercent 101 statt 100: der eine Prozent Ueberhang verhindert, dass an der
        Maskenkante eine Subpixel-Linie stehen bleibt. y wird immer explizit
        mitgegeben, sonst liest GSAP ein vorhandenes inline transform als Pixelwert
        zurueck und rechnet yPercent obendrauf.
      */
      gsap.set(parts, { yPercent: 101, y: Math.round(clipMargin) });

      return gsap.to(parts, {
        yPercent: 0,
        y: 0,
        duration: DURATION,
        ease: EASE,
        stagger,
        delay,
        onComplete: () => {
          played = true;
        },
        ...(scrolls && {
          scrollTrigger: {
            trigger: element,
            start: SCROLL_START,
            once: true,
          },
        }),
      });
    },
  });
}

export function initLineReveal(root: ParentNode = document): void {
  const elements = qsa<HTMLElement>(REVEAL_SELECTOR, root).filter(isEligible);

  if (elements.length === 0 || prefersReducedMotion()) {
    return;
  }

  registerPlugins();

  // Sofort und synchron setzen, damit die Ziele nicht kurz stehen und dann springen.
  // Das CSS blendet nur aus, was dieses Attribut traegt - laeuft das Bundle nicht,
  // bleibt der Text ganz normal sichtbar.
  elements.forEach((element) => element.setAttribute(PENDING_ATTR, ''));

  void waitForFonts().then(() => {
    elements.forEach((element) => {
      if (!element.isConnected) {
        return;
      }

      reveal(element);
    });

    ScrollTrigger.refresh();
  });
}
