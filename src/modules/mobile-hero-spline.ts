const DESKTOP_SCENE = '.werk_hero_slider .werk_hero_spline.is-desktop-scene[data-animation-type="spline"]';
const DEG = Math.PI / 180;

/**
 * Mobile scenes whose Spline HTML iframe is replaced by a site-owned drag layer.
 * `roll` turns around the object's local Z axis (Lemurenkopf); `yaw` turns around
 * world up, matching the drag script embedded in the Spline export.
 */
interface MobileDragScene {
  url: string;
  object: string;
  axis: 'roll' | 'yaw';
  /** Drag rotation per pixel, in radians. Negative turns against the finger. */
  perPixel: number;
  /** Idle rotation in radians per second. */
  idle: number;
}

const MOBILE_DRAG_SCENES: MobileDragScene[] = [
  {
    url: 'https://prod.spline.design/hDhyDXfJUhDmc3rA/scene.splinecode',
    object: 'Lemurenkopf_01_1K_spline (1)',
    axis: 'roll',
    perPixel: -0.6 * DEG,
    idle: 6 * DEG,
  },
  {
    url: 'https://prod.spline.design/SmQser47lcr2Id0q/scene.splinecode',
    object: 'Stuhl_1K_spline',
    axis: 'yaw',
    perPixel: 0.35 * DEG,
    idle: 6 * DEG,
  },
  {
    url: 'https://prod.spline.design/gYt-7atwT80gUawU/scene.splinecode',
    object: 'Gartenpouffe_1K',
    axis: 'yaw',
    perPixel: 0.35 * DEG,
    idle: 4 * DEG,
  },
];

interface Quat { x: number; y: number; z: number; w: number }

function quatFromEulerXYZ(x: number, y: number, z: number): Quat {
  const c1 = Math.cos(x / 2), s1 = Math.sin(x / 2);
  const c2 = Math.cos(y / 2), s2 = Math.sin(y / 2);
  const c3 = Math.cos(z / 2), s3 = Math.sin(z / 2);
  return {
    x: s1 * c2 * c3 + c1 * s2 * s3,
    y: c1 * s2 * c3 - s1 * c2 * s3,
    z: c1 * c2 * s3 + s1 * s2 * c3,
    w: c1 * c2 * c3 - s1 * s2 * s3,
  };
}

/** Rotate `q` around world up (premultiplied), then normalize. */
function quatYaw(q: Quat, angle: number): Quat {
  const s = Math.sin(angle / 2), c = Math.cos(angle / 2);
  const r = {
    x: c * q.x + s * q.z,
    y: c * q.y + s * q.w,
    z: c * q.z - s * q.x,
    w: c * q.w - s * q.y,
  };
  const l = Math.hypot(r.x, r.y, r.z, r.w) || 1;
  return { x: r.x / l, y: r.y / l, z: r.z / l, w: r.w / l };
}

function eulerXYZFromQuat({ x, y, z, w }: Quat): { x: number; y: number; z: number } {
  const m11 = 1 - 2 * (y * y + z * z), m12 = 2 * (x * y - w * z), m13 = 2 * (x * z + w * y);
  const m22 = 1 - 2 * (x * x + z * z), m23 = 2 * (y * z - w * x);
  const m32 = 2 * (y * z + w * x), m33 = 1 - 2 * (x * x + y * y);
  const ey = Math.asin(Math.min(1, Math.max(-1, m13)));
  return Math.abs(m13) < 0.9999999
    ? { x: Math.atan2(-m23, m33), y: ey, z: Math.atan2(-m12, m11) }
    : { x: Math.atan2(m32, m22), y: ey, z: 0 };
}

interface MobileSplineObject { rotation: { x: number; y: number; z: number } }
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

/**
 * Keep the drag gesture of the mobile hero objects without Spline's full-screen
 * HTML iframe. That iframe only starts a drag after an async hit test round trip,
 * so on phones the browser often claims the touch as page scroll first.
 */
export function initMobileHeroDrag(): void {
  if (!document.documentElement.classList.contains('site-mobile-hero-spline')) return;

  for (const config of MOBILE_DRAG_SCENES) {
    const selector = `.werk_hero_spline.is-mobile-scene[data-spline-url="${config.url}"]`;
    document.querySelectorAll<HTMLElement>(selector).forEach((scene) => installMobileDrag(scene, config));
  }
}

function installMobileDrag(scene: HTMLElement, config: MobileDragScene): void {
  scene.setAttribute('data-site-mobile-drag', '');
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
    if (!frame?.srcdoc.includes(config.object)) return;

    const app = appForScene();
    const object = app?.findObjectByName?.(config.object);
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

    // Roll keeps an absolute angle; yaw accumulates world-space turns on a quaternion.
    let angle = config.axis === 'roll' ? object.rotation.z : 0;
    let target = angle;
    let orientation = quatFromEulerXYZ(object.rotation.x, object.rotation.y, object.rotation.z);
    const apply = (delta: number): void => {
      if (config.axis === 'roll') {
        object.rotation.z = angle;
        return;
      }
      orientation = quatYaw(orientation, delta);
      const euler = eulerXYZFromQuat(orientation);
      object.rotation.x = euler.x;
      object.rotation.y = euler.y;
      object.rotation.z = euler.z;
    };
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
      target += (event.clientX - lastX) * config.perPixel;
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
        if (pointerId === null) target += config.idle * dt;
        const delta = (target - angle) * 0.2;
        angle += delta;
        apply(delta);
      }
      window.requestAnimationFrame(tick);
    };
    window.requestAnimationFrame(tick);
  };

  const observer = new MutationObserver(install);
  observer.observe(scene, { childList: true, subtree: true });
  document.addEventListener('w-spline-load', install, true);
  install();
}
