const DESKTOP_SCENE = '.werk_hero_slider .werk_hero_spline.is-desktop-scene[data-animation-type="spline"]';
const LEMUR_SCENE = '.werk_hero_spline.is-mobile-scene[data-spline-url="https://prod.spline.design/hDhyDXfJUhDmc3rA/scene.splinecode"]';
const LEMUR_NAME = 'Lemurenkopf_01_1K_spline (1)';

interface MobileSplineObject { rotation: { z: number } }
interface MobileSplineApp {
  findObjectByName?: (name: string) => MobileSplineObject | undefined;
  isStopped?: boolean | (() => boolean);
}
interface MobileSplineWebflow {
  require?: (name: string) => {
    getInstance?: (element: Element) => { spline?: MobileSplineApp } | undefined;
  } | undefined;
}

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

/** Keep the Lemurenkopf drag gesture without Spline's full-screen iframe trapping page scroll. */
export function initMobileHeroDrag(): void {
  if (!document.documentElement.classList.contains('site-mobile-hero-spline')) return;

  document.querySelectorAll<HTMLElement>(LEMUR_SCENE).forEach((scene) => {
    let installed = false;
    let retryTimer: number | undefined;

    const appForScene = (): MobileSplineApp | undefined => {
      try {
        return (window as Window & { Webflow?: MobileSplineWebflow })
          .Webflow?.require?.('spline')?.getInstance?.(scene)?.spline;
      } catch {
        return undefined;
      }
    };

    const install = (): void => {
      if (installed || !scene.isConnected) return;
      const frame = scene.querySelector<HTMLIFrameElement>('iframe[title="Spline HTML content"]');
      if (!frame?.srcdoc.includes(LEMUR_NAME)) return;

      const app = appForScene();
      const object = app?.findObjectByName?.(LEMUR_NAME);
      if (!app || !object) {
        if (retryTimer === undefined) {
          retryTimer = window.setTimeout(() => { retryTimer = undefined; install(); }, 250);
        }
        return;
      }

      installed = true;
      observer.disconnect();
      document.removeEventListener('w-spline-load', install, true);
      if (retryTimer !== undefined) window.clearTimeout(retryTimer);

      const drag = document.createElement('div');
      drag.className = 'site-mobile-hero-drag';
      drag.setAttribute('aria-hidden', 'true');
      scene.appendChild(drag);
      frame.remove();

      let angle = object.rotation.z;
      let target = angle;
      let pointerId: number | null = null;
      let startX = 0;
      let startY = 0;
      let lastX = 0;
      let direction: 'pending' | 'horizontal' | 'vertical' = 'pending';

      drag.addEventListener('pointerdown', (event) => {
        if (pointerId !== null || event.button !== 0) return;
        pointerId = event.pointerId;
        startX = lastX = event.clientX;
        startY = event.clientY;
        direction = event.pointerType === 'mouse' ? 'horizontal' : 'pending';
        if (direction === 'horizontal') {
          drag.classList.add('is-dragging');
          drag.setPointerCapture(event.pointerId);
        }
      });

      drag.addEventListener('pointermove', (event) => {
        if (pointerId !== event.pointerId) return;
        if (direction === 'pending') {
          const dx = event.clientX - startX;
          const dy = event.clientY - startY;
          if (Math.max(Math.abs(dx), Math.abs(dy)) < 6) return;
          direction = Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical';
          if (direction === 'horizontal') {
            drag.classList.add('is-dragging');
            drag.setPointerCapture(event.pointerId);
          }
        }
        if (direction !== 'horizontal') return;
        target -= (event.clientX - lastX) * 0.6 * Math.PI / 180;
        lastX = event.clientX;
      });

      const end = (event: PointerEvent): void => {
        if (pointerId !== event.pointerId) return;
        pointerId = null;
        drag.classList.remove('is-dragging');
      };
      drag.addEventListener('pointerup', end);
      drag.addEventListener('pointercancel', end);

      let last = performance.now();
      const tick = (now: number): void => {
        if (!drag.isConnected) return;
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        const stopped = typeof app.isStopped === 'function' ? app.isStopped() : app.isStopped === true;
        if (!document.hidden && !stopped) {
          if (pointerId === null) target += 6 * Math.PI / 180 * dt;
          angle += (target - angle) * 0.2;
          object.rotation.z = angle;
        }
        window.requestAnimationFrame(tick);
      };
      window.requestAnimationFrame(tick);
    };

    const observer = new MutationObserver(install);
    observer.observe(scene, { childList: true, subtree: true });
    document.addEventListener('w-spline-load', install, true);
    install();
  });
}
