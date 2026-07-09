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
}

const ROOT_SELECTOR = '[data-cms-canvas]';
const SOURCE_SELECTOR = '[data-cms-canvas-source]';
const ITEM_SELECTOR = '[data-cms-canvas-item]';
const DRAG_THRESHOLD = 6;
const EDGE_RESISTANCE = 0.28;

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

function findPosition(item: CanvasItem, rect: Omit<Rect, 'x' | 'y'>, placed: Rect[], config: CanvasConfig): Point {
  const random = randomFrom(hashString(item.id));
  const availableWidth = Math.max(1, config.width - config.padding * 2 - rect.width);
  const availableHeight = Math.max(1, config.height - config.padding * 2 - rect.height);

  for (let attempt = 0; attempt < 180; attempt += 1) {
    const xFactor =
      attempt < 80 ? 0.12 + ((random() + random() + random()) / 3) * 0.76 : random();
    const yFactor =
      attempt < 80 ? 0.12 + ((random() + random() + random()) / 3) * 0.76 : random();
    const candidate: Rect = {
      x: config.padding + xFactor * availableWidth,
      y: config.padding + yFactor * availableHeight,
      ...rect,
    };

    if (!overlaps(candidate, placed, config.gap)) {
      return candidate;
    }
  }

  const columns = Math.max(1, Math.floor(availableWidth / (rect.width + config.gap)));
  const start = hashString(item.id) % Math.max(1, columns);

  for (let row = 0; row < 100; row += 1) {
    for (let offset = 0; offset < columns; offset += 1) {
      const column = (start + offset) % columns;
      const candidate: Rect = {
        x: config.padding + column * (rect.width + config.gap),
        y: config.padding + row * (rect.height + config.gap),
        ...rect,
      };

      if (candidate.y + rect.height <= config.height - config.padding && !overlaps(candidate, placed, config.gap)) {
        return candidate;
      }
    }
  }

  return {
    x: config.padding + random() * availableWidth,
    y: config.padding + random() * availableHeight,
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
  const config: CanvasConfig = {
    width: numberAttribute(root, 'data-canvas-width', Math.max(3600, viewportWidth * 3.2)),
    height: numberAttribute(root, 'data-canvas-height', Math.max(2400, viewportHeight * 3)),
    gap: numberAttribute(root, 'data-canvas-gap', 150),
    padding: numberAttribute(root, 'data-canvas-padding', 220),
    itemWidths: parseWidths(root),
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
  let activePointerId: number | null = null;
  let pointerStart: Point = { x: 0, y: 0 };
  let positionStart: Point = { x: 0, y: 0 };
  let dragged = false;

  function bounds(): { minX: number; maxX: number; minY: number; maxY: number } {
    return {
      minX: Math.min(0, root.clientWidth - config.width),
      maxX: Math.max(0, root.clientWidth - config.width),
      minY: Math.min(0, root.clientHeight - config.height),
      maxY: Math.max(0, root.clientHeight - config.height),
    };
  }

  function clamp(value: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, value));
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

  function render(): void {
    stage.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
  }

  function settleIntoBounds(): void {
    const limit = bounds();
    position = {
      x: clamp(position.x, limit.minX, limit.maxX),
      y: clamp(position.y, limit.minY, limit.maxY),
    };
    root.classList.add('is-settling');
    render();
    window.setTimeout(() => root.classList.remove('is-settling'), 260);
  }

  render();
  requestAnimationFrame(() => root.classList.add('is-ready'));

  root.addEventListener('pointerdown', (event) => {
    if (event.button !== 0 || activePointerId !== null) {
      return;
    }

    activePointerId = event.pointerId;
    pointerStart = { x: event.clientX, y: event.clientY };
    positionStart = { ...position };
    dragged = false;
    root.setPointerCapture(event.pointerId);
    root.classList.add('is-dragging');
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

    const limit = bounds();
    position = {
      x: resist(positionStart.x + deltaX, limit.minX, limit.maxX),
      y: resist(positionStart.y + deltaY, limit.minY, limit.maxY),
    };
    render();
  });

  function endPointer(event: PointerEvent): void {
    if (event.pointerId !== activePointerId) {
      return;
    }

    activePointerId = null;
    root.classList.remove('is-dragging');
    settleIntoBounds();
  }

  root.addEventListener('pointerup', endPointer);
  root.addEventListener('pointercancel', endPointer);
  root.addEventListener('click', (event) => {
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
