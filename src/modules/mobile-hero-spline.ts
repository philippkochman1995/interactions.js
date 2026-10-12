const DESKTOP_SCENE = '.werk_hero_slider .werk_hero_spline.is-desktop-scene[data-animation-type="spline"]';

/** Remove the unused native scene before Webflow scans the DOM and creates a GPU renderer. */
export function pruneMobileHeroSpline(): void {
  const narrowViewport = window.matchMedia?.('(max-width: 767px)').matches;
  const phoneInLandscape = window.matchMedia?.('(pointer: coarse)').matches
    && Math.min(window.screen.width, window.screen.height) <= 767;
  if (!narrowViewport && !phoneInLandscape) return;

  document.documentElement.classList.add('site-mobile-hero-spline');

  const removeDesktopScenes = (root: Element): void => {
    if (root.matches(DESKTOP_SCENE)) root.remove();
    root.querySelectorAll(DESKTOP_SCENE).forEach((scene) => scene.remove());
  };
  removeDesktopScenes(document.documentElement);

  // The head bundle runs before the hero has been parsed. Observe only until
  // parsing completes so the other scene cannot be initialized by Webflow.
  const observer = new MutationObserver((records) => {
    for (const record of records) {
      for (const node of Array.from(record.addedNodes)) {
        if (node instanceof Element) removeDesktopScenes(node);
      }
    }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => observer.disconnect(), { once: true });
  } else observer.disconnect();
}
