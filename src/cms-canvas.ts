import type { ContentModalData } from './types';

interface CanvasItem {
  id: string;
  title: string;
  thumbnail: string;
  thumbnailAlt: string;
  modal: ContentModalData;
}

interface Point {
  x: number;
  y: number;
}

interface Rect extends Point {
  width: number;
  height: number;
}

interface CanvasConfig {
  width: number;
  height: number;
  gap: number;
  padding: number;
  itemWidths: number[];
  motion: 'eased' | 'instant';
  inertia: boolean;
  ease: number;
  friction: number;
  velocity: number;
}

const ROOT_SELECTOR = '[data-cms-canvas]';
const SOURCE_SELECTOR = '[data-cms-canvas-source]';
const ITEM_SELECTOR = '[data-cms-canvas-item]';
const DRAG_THRESHOLD = 6;
const EDGE_RESISTANCE = 0.28;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const MOTION_STOP_THRESHOLD = 0.08;
const POSITION_STOP_THRESHOLD = 0.12;

function ready(callback: () => void): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
  } else {
    callback();
  }
}

function numberAttribute(element: HTMLElement, name: string, fallback: number): number {
  const value = Number.parseFloat(element.getAttribute(name) ?? '');
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function boundedNumberAttribute(
  element: HTMLElement,
  name: string,
  fallback: number,
  min: number,
  max: number,
): number {
  return clamp(numberAttribute(element, name, fallback), min, max);
}

function booleanAttribute(element: HTMLElement, name: string, fallback: boolean): boolean {
  const value = element.getAttribute(name);

  if (value === null || value === '') {
    return fallback;
  }

  return !['false', '0', 'no', 'off'].includes(value.trim().toLowerCase());
}

function parseWidths(root: HTMLElement): number[] {
  const values = (root.getAttribute('data-canvas-item-widths') ?? '180,240,300')
    .split(',')
    .map((value) => Number.parseFloat(value.trim()))
    .filter((value) => Number.isFinite(value) && value >= 80);

  return values.length > 0 ? values : [180, 240, 300];
}

function hashString(value: string): number {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function randomFrom(seed: number): () => number {
  let state = seed || 1;

  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function textFrom(element: HTMLElement, selector: string): string {
  return element.querySelector<HTMLElement>(selector)?.textContent?.trim() ?? '';
}

function imageFrom(element: HTMLElement, selector: string): HTMLImageElement | null {
  return element.querySelector<HTMLImageElement>(selector);
}

function readItem(element: HTMLElement, index: number): CanvasItem | null {
  const thumbnailElement =
    imageFrom(element, '[data-canvas-thumbnail]') ?? element.querySelector<HTMLImageElement>('img');
  const thumbnail = thumbnailElement?.currentSrc || thumbnailElement?.src || '';

  if (!thumbnail) {
    return null;
  }

  const title =
    textFrom(element, '[data-canvas-title]') ||
    element.getAttribute('data-canvas-title')?.trim() ||
    thumbnailElement?.alt.trim() ||
    '';
  const id =
    element.getAttribute('data-canvas-id')?.trim() ||
    element.getAttribute('data-cms-item-id')?.trim() ||
    `canvas-item-${index + 1}-${hashString(`${title}-${thumbnail}`)}`;
  const modalImageElement = imageFrom(element, '[data-canvas-modal-image]');
  const modalBody = element.querySelector<HTMLElement>('[data-canvas-modal-body]');

  return {
    id,
    title,
    thumbnail,
    thumbnailAlt: thumbnailElement?.alt ?? title,
    modal: {
      id: `canvas-${id}`,
      address: textFrom(element, '[data-canvas-modal-address]') || title,
      image: modalImageElement?.currentSrc || modalImageElement?.src || thumbnail,
      imageAlt: modalImageElement?.alt || thumbnailElement?.alt || title,
      caption: textFrom(element, '[data-canvas-modal-caption]'),
      html: modalBody?.innerHTML ?? '',
    },
  };
}

function readItems(source: HTMLElement): CanvasItem[] {
  return Array.from(source.querySelectorAll<HTMLElement>(ITEM_SELECTOR))
    .map(readItem)
    .filter((item): item is CanvasItem => item !== null);
}

function overlaps(candidate: Rect, placed: Rect[], gap: number): boolean {
  return placed.some(
    (rect) =>
      candidate.x < rect.x + rect.width + gap &&
      candidate.x + candidate.width + gap > rect.x &&
      candidate.y < rect.y + rect.height + gap &&
      candidate.y + candidate.height + gap > rect.y,
  );
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function findPosition(
  item: CanvasItem,
  rect: Omit<Rect, 'x' | 'y'>,
  placed: Rect[],
  config: CanvasConfig,
): Point {
  const seed = hashString(item.id);
  const random = randomFrom(seed);
  const minX = config.padding;
  const maxX = Math.max(minX, config.width - config.padding - rect.width);
  const minY = config.padding;
  const maxY = Math.max(minY, config.height - config.padding - rect.height);
  const centerX = config.width / 2 - rect.width / 2;
  const centerY = config.height / 2 - rect.height / 2;
  const baseAngle = random() * Math.PI * 2;
  const radialStep = Math.max(rect.width, rect.height, 160) + config.gap * 0.72;

  for (let attempt = 0; attempt < 260; attempt += 1) {
    const radius = Math.sqrt(attempt) * radialStep;
    const angle = baseAngle + attempt * GOLDEN_ANGLE;
    const candidate: Rect = {
      x: clamp(centerX + Math.cos(angle) * radius, minX, maxX),
      y: clamp(centerY + Math.sin(angle) * radius, minY, maxY),
      ...rect,
    };

    if (!overlaps(candidate, placed, config.gap)) {
      return candidate;
    }
  }

  const cellWidth = rect.width + config.gap;
  const cellHeight = rect.height + config.gap;
  const columns = Math.max(1, Math.floor((maxX - minX + rect.width) / cellWidth));
  const rows = Math.max(1, Math.floor((maxY - minY + rect.height) / cellHeight));
  const cells: Point[] = [];

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      cells.push({
        x: minX + column * cellWidth,
        y: minY + row * cellHeight,
      });
    }
  }

  cells.sort((a, b) => {
    const distanceA = Math.hypot(a.x - centerX, a.y - centerY);
    const distanceB = Math.hypot(b.x - centerX, b.y - centerY);
    return distanceA - distanceB;
  });

  for (const cell of cells) {
    const candidate: Rect = {
      x: clamp(cell.x, minX, maxX),
      y: clamp(cell.y, minY, maxY),
      ...rect,
    };

    if (!overlaps(candidate, placed, config.gap)) {
      return candidate;
    }
  }

  return {
    x: clamp(centerX, minX, maxX),
    y: clamp(centerY, minY, maxY),
  };
}

function createTile(item: CanvasItem, width: number): HTMLButtonElement {
  const tile = document.createElement('button');
  const image = document.createElement('img');
  const title = document.createElement('span');

  tile.type = 'button';
  tile.className = 'cms-canvas__item';
  tile.dataset.canvasItemId = item.id;
  tile.style.width = `${width}px`;
  tile.setAttribute('aria-label', item.title || 'Details öffnen');

  image.className = 'cms-canvas__image';
  image.src = item.thumbnail;
  image.alt = item.thumbnailAlt;
  image.draggable = false;

  title.className = 'cms-canvas__title';
  title.textContent = item.title;
  title.hidden = !item.title;

  tile.append(image, title);
  return tile;
}

function waitForImage(image: HTMLImageElement): Promise<void> {
  if (image.complete) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    image.addEventListener('load', () => resolve(), { once: true });
    image.addEventListener('error', () => resolve(), { once: true });
  });
}

function openItemModal(item: CanvasItem, trigger: HTMLElement): void {
  if (!window.SiteInteractions) {
    console.error('CMS Canvas: site-interactions.js muss vor cms-canvas.js geladen werden.');
    return;
  }

  window.SiteInteractions.openContentModal(item.modal, trigger);
}

async function initCanvas(root: HTMLElement): Promise<void> {
  if (root.dataset.canvasInitialized === 'true') {
    return;
  }

  const source =
    root.querySelector<HTMLElement>(SOURCE_SELECTOR) ??
    document.querySelector<HTMLElement>(SOURCE_SELECTOR);

  if (!source) {
    console.error('CMS Canvas: Element mit data-cms-canvas-source wurde nicht gefunden.');
    return;
  }

  const items = readItems(source);
  const viewportWidth = Math.max(root.clientWidth, window.innerWidth);
  const viewportHeight = Math.max(root.clientHeight, window.innerHeight);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const requestedMotion = root.getAttribute('data-canvas-motion') === 'instant' ? 'instant' : 'eased';
  const config: CanvasConfig = {
    width: numberAttribute(root, 'data-canvas-width', Math.max(3600, viewportWidth * 3.2)),
    height: numberAttribute(root, 'data-canvas-height', Math.max(2400, viewportHeight * 3)),
    gap: numberAttribute(root, 'data-canvas-gap', 150),
    padding: numberAttribute(root, 'data-canvas-padding', 220),
    itemWidths: parseWidths(root),
    motion: reducedMotion ? 'instant' : requestedMotion,
    inertia: reducedMotion ? false : booleanAttribute(root, 'data-canvas-inertia', true),
    ease: reducedMotion ? 1 : boundedNumberAttribute(root, 'data-canvas-ease', 0.16, 0.04, 1),
    friction: reducedMotion ? 0 : boundedNumberAttribute(root, 'data-canvas-friction', 0.92, 0.5, 0.98),
    velocity: reducedMotion ? 0 : boundedNumberAttribute(root, 'data-canvas-velocity', 0.85, 0.1, 2),
  };

  root.dataset.canvasInitialized = 'true';
  root.classList.add('cms-canvas');

  const stage = document.createElement('div');
  stage.className = 'cms-canvas__stage';
  stage.style.width = `${config.width}px`;
  stage.style.height = `${config.height}px`;
  root.insertBefore(stage, source);

  const itemMap = new Map<string, CanvasItem>();
  const tiles = items.map((item) => {
    const width = config.itemWidths[hashString(item.id) % config.itemWidths.length];
    const tile = createTile(item, width);
    itemMap.set(item.id, item);
    stage.append(tile);
    return tile;
  });

  await Promise.all(
    tiles.map((tile) => waitForImage(tile.querySelector<HTMLImageElement>('.cms-canvas__image')!)),
  );

  const placed: Rect[] = [];

  tiles.forEach((tile) => {
    const item = itemMap.get(tile.dataset.canvasItemId ?? '');

    if (!item) {
      return;
    }

    const rect = {
      width: tile.offsetWidth,
      height: tile.offsetHeight,
    };
    const point = findPosition(item, rect, placed, config);
    tile.style.left = `${point.x}px`;
    tile.style.top = `${point.y}px`;
    placed.push({ ...point, ...rect });
  });

  let position = {
    x: (root.clientWidth - config.width) / 2,
    y: (root.clientHeight - config.height) / 2,
  };
  let targetPosition = { ...position };
  let velocity: Point = { x: 0, y: 0 };
  let activePointerId: number | null = null;
  let pointerStart: Point = { x: 0, y: 0 };
  let pointerPrevious: Point = { x: 0, y: 0 };
  let pointerPreviousTime = 0;
  let positionStart: Point = { x: 0, y: 0 };
  let pressedTile: HTMLElement | null = null;
  let dragged = false;
  let suppressNextClick = false;
  let animationFrame: number | null = null;
  let settling = false;

  function bounds(): { minX: number; maxX: number; minY: number; maxY: number } {
    return {
      minX: Math.min(0, root.clientWidth - config.width),
      maxX: Math.max(0, root.clientWidth - config.width),
      minY: Math.min(0, root.clientHeight - config.height),
      maxY: Math.max(0, root.clientHeight - config.height),
    };
  }

  function resist(value: number, min: number, max: number): number {
    if (value < min) {
      return min + (value - min) * EDGE_RESISTANCE;
    }

    if (value > max) {
      return max + (value - max) * EDGE_RESISTANCE;
    }

    return value;
  }

  function clampToBounds(point: Point): Point {
    const limit = bounds();
    return {
      x: clamp(point.x, limit.minX, limit.maxX),
      y: clamp(point.y, limit.minY, limit.maxY),
    };
  }

  function resistBounds(point: Point): Point {
    const limit = bounds();
    return {
      x: resist(point.x, limit.minX, limit.maxX),
      y: resist(point.y, limit.minY, limit.maxY),
    };
  }

  function distance(a: Point, b: Point): number {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  function render(): void {
    stage.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
  }

  function applyTarget(nextPosition: Point, withResistance: boolean): void {
    targetPosition = withResistance ? resistBounds(nextPosition) : clampToBounds(nextPosition);
  }

  function setSettling(active: boolean): void {
    if (settling === active) {
      return;
    }

    settling = active;
    root.classList.toggle('is-settling', active);
  }

  function animate(): void {
    animationFrame = null;

    if (activePointerId === null) {
      const speed = Math.hypot(velocity.x, velocity.y);

      if (config.inertia && speed > MOTION_STOP_THRESHOLD && !settling) {
        const nextTarget = resistBounds({
          x: targetPosition.x + velocity.x,
          y: targetPosition.y + velocity.y,
        });
        const clampedTarget = clampToBounds(nextTarget);

        targetPosition = nextTarget;
        velocity = {
          x: velocity.x * config.friction * (nextTarget.x === clampedTarget.x ? 1 : 0.58),
          y: velocity.y * config.friction * (nextTarget.y === clampedTarget.y ? 1 : 0.58),
        };
      } else {
        targetPosition = clampToBounds(targetPosition);
        velocity = { x: 0, y: 0 };
        setSettling(true);
      }
    }

    if (config.motion === 'instant') {
      position = { ...targetPosition };
    } else {
      position = {
        x: position.x + (targetPosition.x - position.x) * config.ease,
        y: position.y + (targetPosition.y - position.y) * config.ease,
      };
    }

    render();

    const hasVelocity = Math.hypot(velocity.x, velocity.y) > MOTION_STOP_THRESHOLD;
    const hasPositionDelta = distance(position, targetPosition) > POSITION_STOP_THRESHOLD;
    const shouldContinue = activePointerId !== null || hasVelocity || hasPositionDelta;

    if (shouldContinue) {
      animationFrame = window.requestAnimationFrame(animate);
      return;
    }

    position = { ...targetPosition };
    render();
    setSettling(false);
  }

  function ensureAnimation(): void {
    if (animationFrame === null) {
      animationFrame = window.requestAnimationFrame(animate);
    }
  }

  function settleIntoBounds(): void {
    targetPosition = clampToBounds(targetPosition);
    velocity = { x: 0, y: 0 };
    setSettling(true);
    ensureAnimation();
  }

  render();
  requestAnimationFrame(() => root.classList.add('is-ready'));

  root.addEventListener('pointerdown', (event) => {
    if (event.button !== 0 || activePointerId !== null) {
      return;
    }

    activePointerId = event.pointerId;
    pointerStart = { x: event.clientX, y: event.clientY };
    pointerPrevious = { ...pointerStart };
    pointerPreviousTime = performance.now();
    positionStart = { ...targetPosition };
    pressedTile = (event.target as Element).closest<HTMLElement>('.cms-canvas__item');
    velocity = { x: 0, y: 0 };
    dragged = false;
    setSettling(false);
    root.setPointerCapture(event.pointerId);
    root.classList.add('is-dragging');
    ensureAnimation();
  });

  root.addEventListener('pointermove', (event) => {
    if (event.pointerId !== activePointerId) {
      return;
    }

    const deltaX = event.clientX - pointerStart.x;
    const deltaY = event.clientY - pointerStart.y;

    if (Math.hypot(deltaX, deltaY) >= DRAG_THRESHOLD) {
      dragged = true;
    }

    if (!dragged) {
      return;
    }

    const now = performance.now();
    const elapsed = Math.max(16, now - pointerPreviousTime);

    velocity = {
      x: ((event.clientX - pointerPrevious.x) / elapsed) * 16.67 * config.velocity,
      y: ((event.clientY - pointerPrevious.y) / elapsed) * 16.67 * config.velocity,
    };
    pointerPrevious = { x: event.clientX, y: event.clientY };
    pointerPreviousTime = now;

    applyTarget(
      {
        x: positionStart.x + deltaX,
        y: positionStart.y + deltaY,
      },
      true,
    );
    ensureAnimation();
  });

  function endPointer(event: PointerEvent): void {
    if (event.pointerId !== activePointerId) {
      return;
    }

    const wasDragged = dragged;
    const tile = pressedTile;
    activePointerId = null;
    pressedTile = null;
    root.classList.remove('is-dragging');

    if (!wasDragged || !config.inertia) {
      velocity = { x: 0, y: 0 };
      settleIntoBounds();
    } else {
      ensureAnimation();
    }

    if (!wasDragged && tile) {
      const item = itemMap.get(tile.dataset.canvasItemId ?? '');

      if (item) {
        suppressNextClick = true;
        openItemModal(item, tile);
      }
    }
  }

  root.addEventListener('pointerup', endPointer);
  root.addEventListener('pointercancel', endPointer);
  root.addEventListener('click', (event) => {
    if (suppressNextClick) {
      event.preventDefault();
      event.stopPropagation();
      suppressNextClick = false;
      return;
    }

    const tile = (event.target as Element).closest<HTMLElement>('.cms-canvas__item');

    if (!tile) {
      return;
    }

    if (dragged) {
      event.preventDefault();
      event.stopPropagation();
      dragged = false;
      return;
    }

    const item = itemMap.get(tile.dataset.canvasItemId ?? '');

    if (item) {
      openItemModal(item, tile);
    }
  });

  window.addEventListener('resize', settleIntoBounds);
}

ready(() => {
  document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach((root) => {
    void initCanvas(root);
  });
});
