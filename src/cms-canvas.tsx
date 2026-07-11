import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { gsap } from 'gsap';
import type { ContentModalData } from './types';

interface CanvasItem {
  id: string;
  title: string;
  thumbnail: string;
  thumbnailAlt: string;
  modal: ContentModalData;
}

interface CanvasTileData extends CanvasItem {
  instanceId: string;
  sourceId: string;
  copyIndex: number;
}

interface ImageMeasure {
  width: number;
  height: number;
}

interface PlacedTile {
  tile: CanvasTileData;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Point {
  x: number;
  y: number;
}

interface ContentBounds {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

interface PanBounds {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

interface CanvasConfig {
  layoutDensity: 'balanced' | 'loose';
  minVisibleItems: number;
  repeatMode: 'auto' | 'fixed';
  repeat: number;
  columnCount: number;
  itemWidthMin: number;
  itemWidthMax: number;
  portraitItemWidthMin: number;
  portraitItemWidthMax: number;
  columnGap: number;
  rowGapMin: number;
  rowGapMax: number;
  boundsPadding: number;
  velocity: number;
  friction: number;
  ease: number;
  inertia: boolean;
  reducedMotion: boolean;
}

const ROOT_SELECTOR = '[data-cms-canvas]';
const SOURCE_SELECTOR = '[data-cms-canvas-source]';
const ITEM_SELECTOR = '[data-cms-canvas-item]';
const DRAG_THRESHOLD = 6;
const EDGE_RESISTANCE = 0.26;
const DEFAULT_MIN_VISIBLE_ITEMS = 24;
const roots = new WeakMap<HTMLElement, Root>();

function ready(callback: () => void): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
  } else {
    callback();
  }
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
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

function hashString(value: string): number {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function createRandom(seed = Math.floor(Math.random() * 0xffffffff)): () => number {
  let state = seed >>> 0;

  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffled<T>(items: T[], random: () => number): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
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

function readConfig(root: HTMLElement): CanvasConfig {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const repeatValue = root.getAttribute('data-canvas-repeat')?.trim().toLowerCase();

  return {
    minVisibleItems: Math.round(
      boundedNumberAttribute(root, 'data-canvas-min-visible-items', DEFAULT_MIN_VISIBLE_ITEMS, 1, 120),
    ),
    layoutDensity: root.getAttribute('data-canvas-layout-density') === 'loose' ? 'loose' : 'balanced',
    repeatMode: repeatValue === 'auto' || !repeatValue ? 'auto' : 'fixed',
    repeat: Math.round(boundedNumberAttribute(root, 'data-canvas-repeat', 1, 1, 12)),
    columnCount: Math.round(boundedNumberAttribute(root, 'data-canvas-column-count', 7, 2, 14)),
    itemWidthMin: boundedNumberAttribute(root, 'data-canvas-item-width-min', 10, 4, 40),
    itemWidthMax: boundedNumberAttribute(root, 'data-canvas-item-width-max', 17, 4, 48),
    portraitItemWidthMin: boundedNumberAttribute(root, 'data-canvas-portrait-width-min', 8, 4, 40),
    portraitItemWidthMax: boundedNumberAttribute(root, 'data-canvas-portrait-width-max', 13, 4, 48),
    columnGap: boundedNumberAttribute(root, 'data-canvas-column-gap', 9, 1, 24),
    rowGapMin: boundedNumberAttribute(root, 'data-canvas-row-gap-min', 10, 1, 34),
    rowGapMax: boundedNumberAttribute(root, 'data-canvas-row-gap-max', 18, 1, 40),
    boundsPadding: boundedNumberAttribute(root, 'data-canvas-bounds-padding', 120, 0, 800),
    velocity: reducedMotion ? 0 : boundedNumberAttribute(root, 'data-canvas-velocity', 0.85, 0.1, 2),
    friction: reducedMotion ? 0 : boundedNumberAttribute(root, 'data-canvas-friction', 0.92, 0.5, 0.98),
    ease: reducedMotion ? 1 : boundedNumberAttribute(root, 'data-canvas-ease', 0.16, 0.04, 1),
    inertia: reducedMotion ? false : booleanAttribute(root, 'data-canvas-inertia', true),
    reducedMotion,
  };
}

function expandItems(items: CanvasItem[], config: CanvasConfig): CanvasTileData[] {
  if (items.length === 0) {
    return [];
  }

  const repeat =
    config.repeatMode === 'auto'
      ? clamp(Math.ceil(config.minVisibleItems / items.length), 1, 12)
      : config.repeat;
  const expanded: CanvasTileData[] = [];

  items.forEach((item) => {
    for (let copyIndex = 0; copyIndex < repeat; copyIndex += 1) {
      expanded.push({
        ...item,
        instanceId: copyIndex === 0 ? item.id : `${item.id}--copy-${copyIndex + 1}`,
        sourceId: item.id,
        copyIndex,
      });
    }
  });

  return expanded;
}

function measureImage(src: string): Promise<ImageMeasure> {
  return new Promise((resolve) => {
    const image = new Image();

    image.onload = () => {
      resolve({
        width: image.naturalWidth || 1,
        height: image.naturalHeight || 1,
      });
    };
    image.onerror = () => resolve({ width: 1, height: 1 });
    image.src = src;
  });
}

function fallbackMeasure(tile: CanvasTileData): ImageMeasure {
  const seed = hashString(`${tile.sourceId}:${tile.copyIndex}`);
  const landscape = seed % 3 !== 0;
  return landscape ? { width: 16, height: 10 } : { width: 10, height: 14 };
}

function contentBoundsFrom(placed: PlacedTile[]): ContentBounds {
  if (placed.length === 0) {
    return { left: 0, top: 0, right: 0, bottom: 0 };
  }

  return placed.reduce<ContentBounds>(
    (bounds, tile) => ({
      left: Math.min(bounds.left, tile.x),
      top: Math.min(bounds.top, tile.y),
      right: Math.max(bounds.right, tile.x + tile.width),
      bottom: Math.max(bounds.bottom, tile.y + tile.height),
    }),
    {
      left: Number.POSITIVE_INFINITY,
      top: Number.POSITIVE_INFINITY,
      right: Number.NEGATIVE_INFINITY,
      bottom: Number.NEGATIVE_INFINITY,
    },
  );
}

function getPanBounds(bounds: ContentBounds, root: HTMLElement, padding: number): PanBounds {
  const rootWidth = root.clientWidth || window.innerWidth;
  const rootHeight = root.clientHeight || window.innerHeight;
  const contentWidth = bounds.right - bounds.left + padding * 2;
  const contentHeight = bounds.bottom - bounds.top + padding * 2;

  if (contentWidth <= rootWidth) {
    const centeredX = rootWidth / 2 - (bounds.left + bounds.right) / 2;
    return {
      minX: centeredX,
      maxX: centeredX,
      minY:
        contentHeight <= rootHeight
          ? rootHeight / 2 - (bounds.top + bounds.bottom) / 2
          : rootHeight - bounds.bottom - padding,
      maxY:
        contentHeight <= rootHeight
          ? rootHeight / 2 - (bounds.top + bounds.bottom) / 2
          : -bounds.top + padding,
    };
  }

  return {
    minX: rootWidth - bounds.right - padding,
    maxX: -bounds.left + padding,
    minY:
      contentHeight <= rootHeight
        ? rootHeight / 2 - (bounds.top + bounds.bottom) / 2
        : rootHeight - bounds.bottom - padding,
    maxY:
      contentHeight <= rootHeight
        ? rootHeight / 2 - (bounds.top + bounds.bottom) / 2
        : -bounds.top + padding,
  };
}

function applyResistance(value: number, min: number, max: number): number {
  if (value < min) {
    return min + (value - min) * EDGE_RESISTANCE;
  }

  if (value > max) {
    return max + (value - max) * EDGE_RESISTANCE;
  }

  return value;
}

function placeTiles(
  tiles: CanvasTileData[],
  measures: Map<string, ImageMeasure>,
  config: CanvasConfig,
  viewportWidth: number,
  viewportHeight: number,
  random: () => number,
): PlacedTile[] {
  const mobile = viewportWidth < 768;
  const columnCount = mobile ? Math.min(3, config.columnCount) : config.columnCount;
  const rowGapMin = (viewportWidth * config.rowGapMin) / 100;
  const rowGapMax = (viewportWidth * config.rowGapMax) / 100;
  const columnGap = (viewportWidth * config.columnGap) / 100;
  const bandHeight = Math.max(viewportHeight * 0.34, rowGapMax * 1.9);
  const bandColumnOrder = Array.from({ length: columnCount }, (_, index) => index);
  const columns = Array.from({ length: columnCount }, (_, index) => ({
    index,
    x: 0,
    y: config.layoutDensity === 'balanced' ? (random() - 0.5) * viewportHeight * 0.14 : (random() - 0.5) * viewportHeight * 0.72,
  }));
  const baseWidth = mobile ? viewportWidth * 0.62 : viewportWidth * 0.135;
  const totalWidth = (columnCount - 1) * (baseWidth + columnGap);
  const ordered = shuffled(tiles, random);
  const placed: PlacedTile[] = [];

  columns.forEach((column) => {
    column.x = column.index * (baseWidth + columnGap) - totalWidth / 2;
  });

  for (let index = bandColumnOrder.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [bandColumnOrder[index], bandColumnOrder[swapIndex]] = [bandColumnOrder[swapIndex], bandColumnOrder[index]];
  }

  ordered.forEach((tile, index) => {
    const measure = measures.get(tile.instanceId) ?? fallbackMeasure(tile);
    const aspectRatio = measure.width / Math.max(measure.height, 1);
    const isPortrait = aspectRatio < 0.82;
    const widthMin = mobile ? 48 : isPortrait ? config.portraitItemWidthMin : config.itemWidthMin;
    const widthMax = mobile ? 76 : isPortrait ? config.portraitItemWidthMax : config.itemWidthMax;
    const widthPercent = widthMin + random() * Math.max(widthMax - widthMin, 0);
    const width = clamp((viewportWidth * widthPercent) / 100, mobile ? 150 : 120, mobile ? viewportWidth * 0.78 : 460);
    const height = width / Math.max(aspectRatio, 0.2);
    const targetBand = config.layoutDensity === 'balanced' ? Math.floor(index / columnCount) : null;
    const targetColumnIndex =
      config.layoutDensity === 'balanced' ? bandColumnOrder[index % columnCount] : null;
    const candidates =
      targetBand === null || targetColumnIndex === null
        ? [...columns]
        : columns
            .map((column) => ({
              column,
              score:
                Math.abs(column.index - targetColumnIndex) * bandHeight * 0.5 +
                Math.abs(column.y - targetBand * bandHeight) +
                random() * rowGapMin,
            }))
            .sort((a, b) => a.score - b.score)
            .slice(0, Math.min(3, columns.length))
            .map((candidate) => candidate.column);
    const column = [...candidates].sort((a, b) => a.y - b.y || random() - 0.5)[0];
    const x = column.x - width / 2;
    const baseY = targetBand === null ? column.y : Math.max(column.y, targetBand * bandHeight);
    const y =
      baseY +
      (config.layoutDensity === 'balanced'
        ? (random() - 0.5) * Math.min(rowGapMin * 0.9, viewportHeight * 0.04)
        : index < columnCount
          ? (random() - 0.5) * viewportHeight * 0.28
          : 0);
    const rowGap = rowGapMin + random() * Math.max(rowGapMax - rowGapMin, 0);

    placed.push({ tile, x, y, width, height });
    column.y = y + height + rowGap;
  });

  return placed;
}

function openItemModal(item: CanvasTileData, trigger: HTMLElement): void {
  if (!window.SiteInteractions) {
    console.error('CMS Canvas: site-interactions.js muss vor cms-canvas.js geladen werden.');
    return;
  }

  window.SiteInteractions.openContentModal(item.modal, trigger);
}

function CanvasTile({ placed }: { placed: PlacedTile }): React.ReactElement {
  const style: React.CSSProperties = {
    left: placed.x,
    top: placed.y,
    width: placed.width,
  };

  return (
    <button
      type="button"
      className="cms-canvas__item"
      style={style}
      data-canvas-item-id={placed.tile.instanceId}
      data-canvas-source-item-id={placed.tile.sourceId}
      aria-label={placed.tile.title || 'Details öffnen'}
      onClick={(event) => openItemModal(placed.tile, event.currentTarget)}
    >
      <img className="cms-canvas__image" src={placed.tile.thumbnail} alt={placed.tile.thumbnailAlt} draggable={false} />
    </button>
  );
}

function CmsCanvasApp({ root, items, source }: { root: HTMLElement; items: CanvasItem[]; source: HTMLElement }): React.ReactElement {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [placed, setPlaced] = useState<PlacedTile[]>([]);
  const [bounds, setBounds] = useState<ContentBounds>({ left: 0, top: 0, right: 0, bottom: 0 });
  const config = useMemo(() => readConfig(root), [root]);
  const seedRef = useRef(Math.floor(Math.random() * 0xffffffff));

  useEffect(() => {
    source.hidden = true;
    source.setAttribute('aria-hidden', 'true');
  }, [source]);

  useEffect(() => {
    let cancelled = false;
    const random = createRandom(seedRef.current);
    const viewportWidth = Math.max(root.clientWidth, window.innerWidth);
    const viewportHeight = Math.max(root.clientHeight, window.innerHeight);
    const tiles = expandItems(items, config);

    Promise.all(
      tiles.map(async (tile) => [tile.instanceId, await measureImage(tile.thumbnail)] as const),
    ).then((entries) => {
      if (cancelled) {
        return;
      }

      const measures = new Map(entries);
      const nextPlaced = placeTiles(tiles, measures, config, viewportWidth, viewportHeight, random);
      setPlaced(nextPlaced);
      setBounds(contentBoundsFrom(nextPlaced));
    });

    return () => {
      cancelled = true;
    };
  }, [config, items, root]);

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage || placed.length === 0) {
      return;
    }

    const panBounds = () => getPanBounds(bounds, root, config.boundsPadding);
    let currentBounds = panBounds();
    let position: Point = {
      x: root.clientWidth / 2 - (bounds.left + bounds.right) / 2,
      y: root.clientHeight / 2 - (bounds.top + bounds.bottom) / 2,
    };
    let target: Point = { ...position };
    let velocity: Point = { x: 0, y: 0 };
    let pointerId: number | null = null;
    let pointerStart: Point = { x: 0, y: 0 };
    let pointerPrevious: Point = { x: 0, y: 0 };
    let pointerPreviousTime = 0;
    let positionStart: Point = { x: 0, y: 0 };
    let dragged = false;
    let pressedTile: HTMLElement | null = null;

    target.x = clamp(target.x, currentBounds.minX, currentBounds.maxX);
    target.y = clamp(target.y, currentBounds.minY, currentBounds.maxY);
    position = { ...target };

    gsap.set(stage, { x: position.x, y: position.y, scale: 1, transformOrigin: '50% 50%' });
    gsap.fromTo(
      stage.querySelectorAll('.cms-canvas__item'),
      { autoAlpha: 0, scale: config.reducedMotion ? 1 : 0.86 },
      {
        autoAlpha: 1,
        scale: 1,
        duration: config.reducedMotion ? 0.01 : 0.9,
        ease: 'power3.out',
        stagger: config.reducedMotion ? 0 : { amount: 0.45, from: 'random' },
      },
    );
    root.classList.add('is-ready');

    const tick = () => {
      currentBounds = panBounds();

      if (pointerId === null && config.inertia) {
        target.x += velocity.x;
        target.y += velocity.y;
        velocity.x *= config.friction;
        velocity.y *= config.friction;
      }

      const clampedX = clamp(target.x, currentBounds.minX, currentBounds.maxX);
      const clampedY = clamp(target.y, currentBounds.minY, currentBounds.maxY);

      if (pointerId === null) {
        target.x += (clampedX - target.x) * 0.18;
        target.y += (clampedY - target.y) * 0.18;
      }

      position.x += (target.x - position.x) * config.ease;
      position.y += (target.y - position.y) * config.ease;

      gsap.set(stage, { x: position.x, y: position.y });

      if (Math.abs(velocity.x) < 0.02) {
        velocity.x = 0;
      }

      if (Math.abs(velocity.y) < 0.02) {
        velocity.y = 0;
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0 && event.pointerType === 'mouse') {
        return;
      }

      pointerId = event.pointerId;
      pointerStart = { x: event.clientX, y: event.clientY };
      pointerPrevious = { ...pointerStart };
      pointerPreviousTime = performance.now();
      positionStart = { ...target };
      velocity = { x: 0, y: 0 };
      dragged = false;
      pressedTile = (event.target as Element).closest<HTMLElement>('.cms-canvas__item');
      root.setPointerCapture(event.pointerId);
      root.classList.add('is-dragging');
      gsap.to(stage, { scale: config.reducedMotion ? 1 : 0.985, duration: 0.32, ease: 'power2.out' });
    };

    const onPointerMove = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) {
        return;
      }

      event.preventDefault();
      const dx = event.clientX - pointerStart.x;
      const dy = event.clientY - pointerStart.y;
      const distance = Math.hypot(dx, dy);

      if (distance > DRAG_THRESHOLD) {
        dragged = true;
      }

      target.x = applyResistance(positionStart.x + dx, currentBounds.minX, currentBounds.maxX);
      target.y = applyResistance(positionStart.y + dy, currentBounds.minY, currentBounds.maxY);

      const now = performance.now();
      const deltaTime = Math.max(now - pointerPreviousTime, 16);
      velocity = {
        x: ((event.clientX - pointerPrevious.x) / deltaTime) * 16 * config.velocity,
        y: ((event.clientY - pointerPrevious.y) / deltaTime) * 16 * config.velocity,
      };
      pointerPrevious = { x: event.clientX, y: event.clientY };
      pointerPreviousTime = now;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) {
        return;
      }

      pointerId = null;
      root.releasePointerCapture(event.pointerId);
      root.classList.remove('is-dragging');
      gsap.to(stage, { scale: 1, duration: config.reducedMotion ? 0.01 : 0.45, ease: 'elastic.out(1, 0.72)' });

      if (dragged && pressedTile) {
        const preventClick = (clickEvent: MouseEvent) => {
          clickEvent.preventDefault();
          clickEvent.stopPropagation();
          pressedTile?.removeEventListener('click', preventClick, true);
        };
        pressedTile.addEventListener('click', preventClick, true);
      }

      pressedTile = null;
    };

    const onResize = () => {
      currentBounds = panBounds();
      target.x = clamp(target.x, currentBounds.minX, currentBounds.maxX);
      target.y = clamp(target.y, currentBounds.minY, currentBounds.maxY);
    };

    gsap.ticker.add(tick);
    root.addEventListener('pointerdown', onPointerDown);
    root.addEventListener('pointermove', onPointerMove);
    root.addEventListener('pointerup', onPointerUp);
    root.addEventListener('pointercancel', onPointerUp);
    window.addEventListener('resize', onResize);

    return () => {
      gsap.ticker.remove(tick);
      root.removeEventListener('pointerdown', onPointerDown);
      root.removeEventListener('pointermove', onPointerMove);
      root.removeEventListener('pointerup', onPointerUp);
      root.removeEventListener('pointercancel', onPointerUp);
      window.removeEventListener('resize', onResize);
      root.classList.remove('is-ready', 'is-dragging');
    };
  }, [bounds, config, placed.length, root]);

  return (
    <div className="cms-canvas__stage" ref={stageRef}>
      {placed.map((tile) => (
        <CanvasTile key={tile.tile.instanceId} placed={tile} />
      ))}
    </div>
  );
}

function mountCanvas(root: HTMLElement): void {
  if (roots.has(root)) {
    roots.get(root)?.unmount();
    roots.delete(root);
  }

  const source = root.querySelector<HTMLElement>(SOURCE_SELECTOR) ?? document.querySelector<HTMLElement>(SOURCE_SELECTOR);

  if (!source) {
    console.error('CMS Canvas: Element mit data-cms-canvas-source wurde nicht gefunden.');
    return;
  }

  const items = readItems(source);

  root.classList.add('cms-canvas');
  root.replaceChildren();

  const reactRoot = createRoot(root);
  roots.set(root, reactRoot);
  reactRoot.render(<CmsCanvasApp root={root} items={items} source={source} />);
}

ready(() => {
  const roots = Array.from(document.querySelectorAll<HTMLElement>(ROOT_SELECTOR));

  if (roots.length > 0) {
    roots.forEach(mountCanvas);
    return;
  }

  const source = document.querySelector<HTMLElement>(SOURCE_SELECTOR);
  const parent = source?.parentElement;

  if (parent) {
    parent.setAttribute('data-cms-canvas', 'true');
    mountCanvas(parent);
  }
});
