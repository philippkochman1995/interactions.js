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

  // A responsive slide can contain separate desktop and mobile scenes.
  // An invisible scene retains its canvas dimensions for WebGPU, but must not preload or play.
  if (typeof getComputedStyle === 'function') {
    const style = getComputedStyle(element);
    if (style.display === 'none' || style.visibility === 'hidden') return true;
  }

  const slide = directSlideFor(element, track);
  const current = activeSlide(track);

  return Boolean(slide && current && slide !== current);
}

function intersectsViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.right > 0
    && rect.top < window.innerHeight && rect.left < window.innerWidth;
}

export function initHeroSplineSlides(): void {
  const sliders = Array.from(document.querySelectorAll<HTMLElement>(SLIDER_SELECTOR));

  if (sliders.length === 0) return;

  let focused = document.hasFocus();
  let suspended = false;
  const pageActive = (): boolean => focused && !document.hidden && !suspended;
  const playingByApp = new WeakMap<SplineApp, boolean>();
  const observedApps = new WeakSet<SplineApp>();
  const syncBySlider = new Map<HTMLElement, () => void>();
  const refreshBySlider = new Map<HTMLElement, () => void>();
  const syncAll = (): void => {
    document.documentElement.classList.toggle('site-hero-paused', !pageActive());
    syncBySlider.forEach((sync) => sync());
  };

  for (const slider of sliders) {
    const track = slider.querySelector<HTMLElement>(TRACK_SELECTOR);
    if (!track) continue;

    // Establish visibility synchronously; observer delivery can follow scene loading.
    let inViewport = intersectsViewport(slider);
    const sync = (settledApp?: SplineApp): void => {
      const current = activeSlide(track);
      const spline = sliderModule();
      if (!current || !spline?.getInstance) return;

      for (const scene of Array.from(track.querySelectorAll<HTMLElement>(SCENE_SELECTOR))) {
        const slide = directSlideFor(scene, track);
        const app = spline.getInstance(scene)?.spline;
        if (!slide || !app) continue;

        if (!observedApps.has(app)) {
          observedApps.add(app);
          // Spline queues its render-loop startup before Webflow emits w-spline-load.
          // Run after that timer: an earlier stop() can otherwise be overwritten
          // while isStopped remains true, making subsequent stop() calls no-ops.
          window.setTimeout(() => {
            if (sliderModule()?.getInstance?.(scene)?.spline === app) sync(app);
          }, 0);
        }

        const play = slide === current && !isInactiveHeroSplineScene(scene)
          && inViewport && pageActive();
        try {
          if (app === settledApp) {
            // Reset the public pause flag once, then remove the real callback.
            // Both calls happen in one task, before another frame can render.
            app.play?.();
            if (!play) app.stop?.();
          } else if (playingByApp.get(app) !== play) {
            if (play) app.play?.();
            else app.stop?.();
          }
          playingByApp.set(app, play);
        } catch {
          // A scene may be between Webflow initialization and disposal.
        }
      }
    };
    syncBySlider.set(slider, sync);
    const refreshVisibility = (): void => {
      inViewport = intersectsViewport(slider);
      sync();
    };
    refreshBySlider.set(slider, refreshVisibility);
    if (typeof IntersectionObserver !== 'undefined') {
      const visibilityObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.target !== slider) continue;
          inViewport = entry.isIntersecting && entry.intersectionRect.width > 0
            && entry.intersectionRect.height > 0;
        }
        sync();
      }, { threshold: 0 });
      visibilityObserver.observe(slider);
    } else {
      window.addEventListener('scroll', refreshVisibility, { passive: true });
    }
    // A responsive scene can change visibility without a new intersection entry.
    window.addEventListener('resize', refreshVisibility);
    const observer = new MutationObserver(() => sync());
    observer.observe(track, {
      attributes: true,
      attributeFilter: ['aria-hidden', 'inert'],
      childList: true,
      subtree: true,
    });
  }

  window.addEventListener('blur', () => {
    // Spline focuses an internal iframe during dragging. That blurs this window
    // while the document still has focus; only a real window switch should pause.
    focused = document.hasFocus();
    syncAll();
  });
  window.addEventListener('focus', () => {
    focused = true;
    syncAll();
  });
  document.addEventListener('visibilitychange', () => {
    focused = document.hasFocus();
    syncAll();
  });
  window.addEventListener('pagehide', () => {
    suspended = true;
    syncAll();
  });
  window.addEventListener('pageshow', () => {
    suspended = false;
    focused = document.hasFocus();
    refreshBySlider.forEach((refresh) => refresh());
    syncAll();
  });

  document.addEventListener('w-spline-load', (event) => {
    const target = event.target;
    if (target instanceof Element && target.closest(SLIDER_SELECTOR)) {
      const slider = target.closest<HTMLElement>(SLIDER_SELECTOR);
      if (slider) syncBySlider.get(slider)?.();
    }
  }, true);
  syncAll();
}
