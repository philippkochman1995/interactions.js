const handClosed = new URL('../../assets/hand-closed.svg', import.meta.url).href;
const handOpen = new URL('../../assets/hand-open.svg', import.meta.url).href;

const SPLINE_SCENE_SELECTOR = [
  '[data-animation-type="spline"]',
  '[data-spline-url]',
  'spline-viewer',
  'iframe[src*="spline.design"]',
].join(',');

export function initSplineCursor(): void {
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches === false) return;

  const cursor = document.createElement('span');
  cursor.className = 'site-spline-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.style.setProperty('--site-spline-cursor-open', `url("${handOpen}")`);
  cursor.style.setProperty('--site-spline-cursor-closed', `url("${handClosed}")`);
  document.body.append(cursor);

  let activeScene: Element | null = null;
  let isPressed = false;
  const shadowCursorStyles: HTMLStyleElement[] = [];

  const hideShadowCursors = (element: Element): void => {
    const shadowRoot = element.shadowRoot;
    if (shadowRoot && !shadowRoot.querySelector('[data-site-spline-cursor-style]')) {
      const style = document.createElement('style');
      style.dataset.siteSplineCursorStyle = '';
      style.textContent = ':host, * { cursor: none !important; }';
      shadowRoot.append(style);
      shadowCursorStyles.push(style);
    }

    element.querySelectorAll('*').forEach(hideShadowCursors);
  };

  const setHand = (): void => {
    cursor.classList.toggle('is-closed', isPressed);
  };

  const moveCursor = (event: PointerEvent): void => {
    if (!activeScene || event.pointerType === 'touch') return;
    hideShadowCursors(activeScene);
    cursor.style.transform = `translate3d(${event.clientX - 11}px, ${event.clientY - 11}px, 0)`;
  };

  const deactivate = (): void => {
    activeScene?.classList.remove('has-site-spline-cursor');
    activeScene = null;
    shadowCursorStyles.forEach((style) => style.remove());
    shadowCursorStyles.length = 0;
    isPressed = false;
    cursor.classList.remove('is-visible', 'is-closed');
  };

  document.addEventListener('pointerover', (event: PointerEvent) => {
    if (event.pointerType === 'touch') return;
    const target = event.target;
    const scene = target instanceof Element ? target.closest(SPLINE_SCENE_SELECTOR) : null;

    if (scene) {
      if (scene === activeScene) return;
      deactivate();
      activeScene = scene;
      activeScene.classList.add('has-site-spline-cursor');
      cursor.classList.add('is-visible');
      isPressed = false;
      setHand();
      moveCursor(event);
      return;
    }

    if (activeScene && !(event.relatedTarget instanceof Node && activeScene.contains(event.relatedTarget))) {
      deactivate();
    }
  });

  document.addEventListener('pointerout', (event: PointerEvent) => {
    if (activeScene && !(event.relatedTarget instanceof Node && activeScene.contains(event.relatedTarget))) {
      deactivate();
    }
  });

  document.addEventListener('pointermove', moveCursor);
  document.addEventListener('pointerdown', (event: PointerEvent) => {
    if (!activeScene || event.pointerType === 'touch') return;
    isPressed = true;
    setHand();
  });
  document.addEventListener('pointerup', () => {
    if (!activeScene) return;
    isPressed = false;
    setHand();
  });
  document.addEventListener('pointercancel', deactivate);
  window.addEventListener('blur', deactivate);
}
