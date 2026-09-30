const SLIDER_SELECTOR = '.werk_hero_slider';
const TRACK_SELECTOR = '.werk_hero_track';
const SCENE_SELECTOR = '[data-animation-type="spline"][data-spline-url]';

interface SplineApp {
  play?: () => void;
  stop?: () => void;
}

interface WebflowSplineModule {
  getInstance?: (element: Element) => { spline?: SplineApp } | undefined;
}

interface WebflowWithSpline {
  require?: (name: string) => WebflowSplineModule | undefined;
}

function sliderModule(): WebflowSplineModule | undefined {
  try {
    return (window as Window & { Webflow?: WebflowWithSpline }).Webflow?.require?.('spline');
  } catch {
    return undefined;
  }
}

function directSlideFor(element: Element, track: HTMLElement): HTMLElement | null {
  let slide: HTMLElement | null = element.parentElement;

  while (slide && slide.parentElement !== track) {
    slide = slide.parentElement;
  }

  return slide?.parentElement === track ? slide : null;
}

function activeSlide(track: HTMLElement): HTMLElement | null {
  const slides = Array.from(track.children).filter((slide): slide is HTMLElement => slide instanceof HTMLElement);

  return slides.find((slide) => !slide.inert && slide.getAttribute('aria-hidden') !== 'true') ?? slides[0] ?? null;
}

/** The first slider slide is active until Webflow's carousel script sets its ARIA state. */
export function isInactiveHeroSplineScene(element: Element): boolean {
  const slider = element.closest<HTMLElement>(SLIDER_SELECTOR);
  const track = slider?.querySelector<HTMLElement>(TRACK_SELECTOR);

  if (!track) return false;

  const slide = directSlideFor(element, track);
  const current = activeSlide(track);

  return Boolean(slide && current && slide !== current);
}

function syncSlider(slider: HTMLElement): void {
  const track = slider.querySelector<HTMLElement>(TRACK_SELECTOR);
  const current = track && activeSlide(track);
  const spline = sliderModule();

  if (!track || !current || !spline?.getInstance) return;

  for (const scene of Array.from(track.querySelectorAll<HTMLElement>(SCENE_SELECTOR))) {
    const slide = directSlideFor(scene, track);
    const app = spline.getInstance(scene)?.spline;

    if (!slide || !app) continue;

    try {
      if (slide === current) app.play?.();
      else app.stop?.();
    } catch {
      // A scene may be between Webflow initialization and disposal.
    }
  }
}

export function initHeroSplineSlides(): void {
  const sliders = Array.from(document.querySelectorAll<HTMLElement>(SLIDER_SELECTOR));

  if (sliders.length === 0) return;

  for (const slider of sliders) {
    const track = slider.querySelector<HTMLElement>(TRACK_SELECTOR);
    if (!track) continue;

    const sync = (): void => syncSlider(slider);
    const observer = new MutationObserver(sync);
    observer.observe(track, {
      attributes: true,
      attributeFilter: ['aria-hidden', 'inert'],
      childList: true,
      subtree: true,
    });
    sync();
  }

  document.addEventListener('w-spline-load', (event) => {
    const target = event.target;
    if (target instanceof Element && target.closest(SLIDER_SELECTOR)) {
      const slider = target.closest<HTMLElement>(SLIDER_SELECTOR);
      if (slider) syncSlider(slider);
    }
  }, true);
}
