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

interface LayoutResult {
  placed: PlacedTile[];
  bounds: ContentBounds;
  patternWidth: number;
  patternHeight: number;
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
  itemsPerColumn: number;
  gridGap: number;
  gridZoom: number;
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
    columnCount: Math.round(boundedNumberAttribute(root, 'data-canvas-column-count', 8, 2, 14)),
    itemsPerColumn: Math.round(boundedNumberAttribute(root, 'data-canvas-items-per-column', 8, 2, 24)),
    gridGap: boundedNumberAttribute(root, 'data-canvas-grid-gap', 25, 0, 240),
    gridZoom: boundedNumberAttribute(root, 'data-canvas-grid-zoom', 1.45, 0.7, 3),
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
      ? clamp(
          Math.ceil(Math.max(config.minVisibleItems, config.columnCount * config.itemsPerColumn) / items.length),
          1,
          64,
        )
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

function wrapAroundCenter(value: number, period: number, center: number): number {
  if (period <= 0) {
    return value;
  }

  return ((((value - center + period / 2) % period) + period) % period) - period / 2 + center;
}

function placeTiles(
  tiles: CanvasTileData[],
  measures: Map<string, ImageMeasure>,
  config: CanvasConfig,
  viewportWidth: number,
  viewportHeight: number,
  random: () => number,
): LayoutResult {
  if (tiles.length === 0) {
    return {
      placed: [],
      bounds: { left: 0, top: 0, right: 0, bottom: 0 },
      patternWidth: viewportWidth,
      patternHeight: viewportHeight,
    };
  }

  const mobile = viewportWidth < 768;
  const columnCount = mobile ? Math.min(4, config.columnCount) : config.columnCount;
  const rowCount = config.itemsPerColumn;
  const cellCount = columnCount * rowCount;
  const gap = config.gridGap;
  const baseSlotWidth = mobile
    ? Math.max(170, viewportWidth * 0.48)
    : Math.max(150, (viewportWidth - (columnCount - 1) * gap) / columnCount);
  const slotWidth = baseSlotWidth * config.gridZoom;
  const columnStep = slotWidth + gap;
  const patternWidth = columnCount * columnStep;
  const patternTiles = shuffled(tiles, random).slice(0, cellCount);
  const cells = Array.from({ length: cellCount }, (_, index) => patternTiles[index % patternTiles.length]);
  const cellMetrics = cells.map((tile, index) => {
    const measure = measures.get(tile.instanceId) ?? fallbackMeasure(tile);
    const aspectRatio = measure.width / Math.max(measure.height, 1);
    const isPortrait = aspectRatio < 0.82;
    const minFactor = mobile ? 0.78 : isPortrait ? 0.58 : 0.72;
    const maxFactor = mobile ? 0.9 : isPortrait ? 0.68 : 0.84;
    const width = slotWidth * (minFactor + random() * (maxFactor - minFactor));

    return {
      tile,
      columnIndex: index % columnCount,
      width,
      height: width / Math.max(aspectRatio, 0.2),
    };
  });
  const columnOffsets = Array.from({ length: columnCount }, () => (random() - 0.5) * Math.min(gap * 1.6, slotWidth * 0.16));
  const columnTops = [...columnOffsets];
  const basePlaced = cellMetrics.map((cell) => {
    const columnCenter = cell.columnIndex * columnStep - patternWidth / 2 + columnStep / 2;
    const y = columnTops[cell.columnIndex];

    columnTops[cell.columnIndex] = y + cell.height + gap;
    return {
      tile: cell.tile,
      x: columnCenter - cell.width / 2,
      y,
      width: cell.width,
      height: cell.height,
    };
  });
  const minTop = Math.min(...basePlaced.map((tile) => tile.y));
  const maxBottom = Math.max(...basePlaced.map((tile) => tile.y + tile.height));
  const patternHeight = maxBottom - minTop + gap;

  basePlaced.forEach((tile) => {
    tile.y -= minTop + patternHeight / 2;
  });
  const placed: PlacedTile[] = [];
  const repeatOffsets = [-1, 0, 1];

  repeatOffsets.forEach((repeatY) => {
    repeatOffsets.forEach((repeatX) => {
      basePlaced.forEach((tile, index) => {
        placed.push({
          ...tile,
          tile: {
            ...tile.tile,
            instanceId: `${tile.tile.instanceId}--grid-${index}--${repeatX}-${repeatY}`,
          },
          x: tile.x + repeatX * patternWidth,
          y: tile.y + repeatY * patternHeight,
        });
      });
    });
  });

  return {
    placed,
    bounds: contentBoundsFrom(placed),
    patternWidth,
    patternHeight,
  };
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
  const [pattern, setPattern] = useState({ width: 1, height: 1 });
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
      const nextLayout = placeTiles(tiles, measures, config, viewportWidth, viewportHeight, random);
      setPlaced(nextLayout.placed);
      setBounds(nextLayout.bounds);
      setPattern({ width: nextLayout.patternWidth, height: nextLayout.patternHeight });
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

    let position: Point = {
      x: root.clientWidth / 2,
      y: root.clientHeight / 2,
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

    const visiblePosition = (): Point => {
      const centerX = root.clientWidth / 2;
      const centerY = root.clientHeight / 2;

      return {
        x: wrapAroundCenter(position.x, pattern.width, centerX),
        y: wrapAroundCenter(position.y, pattern.height, centerY),
      };
    };

    const tick = () => {
      if (pointerId === null && config.inertia) {
        target.x += velocity.x;
        target.y += velocity.y;
        velocity.x *= config.friction;
        velocity.y *= config.friction;
      }

      position.x += (target.x - position.x) * config.ease;
      position.y += (target.y - position.y) * config.ease;
      const visible = visiblePosition();

      gsap.set(stage, { x: visible.x, y: visible.y });

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

      target.x = positionStart.x + dx;
      target.y = positionStart.y + dy;

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
      target.x = root.clientWidth / 2;
      target.y = root.clientHeight / 2;
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
  }, [bounds, config, pattern.height, pattern.width, placed.length, root]);

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
