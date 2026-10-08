import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { gsap } from 'gsap';
import { getCmsImageSource as imageSource } from './modules/cms-image';
import type { ContentModalData, ContentModalGalleryItem, ContentModalWork } from './types';

interface CanvasItem {
  id: string;
  title: string;
  thumbnail: string;
  thumbnailAlt: string;
  size: CanvasSize;
  modal: ContentModalData;
}

type CanvasSize = 'small' | 'medium' | 'large';

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
  offsetX: number;
  offsetY: number;
}

interface PreparedTile {
  tile: CanvasTileData;
  width: number;
  height: number;
  titleHeight: number;
  margin: number;
  offsetX: number;
  offsetY: number;
  totalHeight: number;
}

interface LayoutResult {
  placed: PlacedTile[];
  patternWidth: number;
  patternHeight: number;
}

interface Point {
  x: number;
  y: number;
}

interface CanvasConfig {
  columnWidth: number;
  mobileColumnWidth: number;
  mobileBreakpoint: number;
  itemMarginMin: number;
  itemMarginMax: number;
  mobileItemMarginMin: number;
  mobileItemMarginMax: number;
  itemOffsetMin: number;
  itemOffsetMax: number;
  mobileItemOffsetMin: number;
  mobileItemOffsetMax: number;
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
const WHEEL_PAN_SPEED = 1.1;
const CANVAS_SIZE_SCALE: Record<CanvasSize, number> = {
  small: 0.66,
  medium: 0.864,
  large: 1.2408,
};
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

function imageFromTarget(element: HTMLElement, selector: string): HTMLImageElement | null {
  const target = element.querySelector<HTMLElement>(selector);

  if (target instanceof HTMLImageElement) {
    return target;
  }

  return target?.querySelector<HTMLImageElement>('img') ?? null;
}

function readModalWork(element: HTMLElement): ContentModalWork | null {
  const workElement = element.querySelector<HTMLElement>('[data-canvas-modal-work]');

  if (!workElement) {
    return null;
  }

  const thumbnailElement = imageFromTarget(workElement, '[data-works-thumbnail]');
  const title =
    textFrom(workElement, '[data-works-title]') ||
    workElement.getAttribute('data-works-title')?.trim() ||
    '';
  const year =
    textFrom(workElement, '[data-works-year]') ||
    workElement.getAttribute('data-works-year')?.trim() ||
    '';
  const href = (
    workElement.getAttribute('data-works-href') ??
    workElement.getAttribute('data-works-url') ??
    workElement.querySelector<HTMLAnchorElement>('[data-works-link], a[href]')?.getAttribute('href') ??
    ''
  ).trim();
  const thumbnail = imageSource(thumbnailElement);

  if (!href || href.startsWith('#')) {
    return null;
  }

  return {
    title,
    year,
    thumbnail,
    thumbnailAlt: thumbnailElement?.alt || title,
    href,
  };
}

function readModalGallery(element: HTMLElement): ContentModalGalleryItem[] {
  const items = Array.from(element.querySelectorAll<HTMLElement>('[data-canvas-modal-gallery-item]'))
    .filter((item) => !item.closest('[data-canvas-modal-work]'))
    .map((item) => {
      const imageElement =
        imageFromTarget(item, '[data-canvas-modal-gallery-image]') ?? item.querySelector<HTMLImageElement>('img');

      return {
        src: imageSource(imageElement),
        alt: imageElement?.alt ?? '',
        caption: textFrom(item, '[data-canvas-modal-gallery-caption]'),
      };
    })
    .filter((item) => item.src);

  if (items.length > 0) {
    return items;
  }

  const legacyImageElement = imageFromTarget(element, '[data-canvas-modal-image]');
  const legacyImage = imageSource(legacyImageElement);

  return legacyImage
    ? [
        {
          src: legacyImage,
          alt: legacyImageElement?.alt ?? '',
          caption: textFrom(element, '[data-canvas-modal-caption]'),
        },
      ]
    : [];
}

function readItem(element: HTMLElement, index: number): CanvasItem | null {
  const thumbnailElement =
    imageFrom(element, '[data-canvas-thumbnail]') ?? element.querySelector<HTMLImageElement>('img');
  const thumbnail = imageSource(thumbnailElement);

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
  const modalBody = element.querySelector<HTMLElement>('[data-canvas-modal-body]');
  const rawSize = (textFrom(element, '[data-canvas-size]') || element.getAttribute('data-canvas-size') || '')
    .trim()
    .toLocaleLowerCase('de');
  const size: CanvasSize = rawSize === 'mittel'
    ? 'medium'
    : rawSize === 'groß' || rawSize === 'gross'
      ? 'large'
      : 'small';
  const gallery = readModalGallery(element);
  const firstGalleryItem = gallery[0];
  const topText = textFrom(element, '[data-canvas-modal-hover-text]') || textFrom(element, '[data-canvas-modal-address]') || title;
  const headline = textFrom(element, '[data-canvas-modal-headline]') || title;

  return {
    id,
    title,
    thumbnail,
    thumbnailAlt: thumbnailElement?.alt ?? title,
    size,
    modal: {
      id: `canvas-${id}`,
      address: topText,
      layout: 'context',
      headline,
      image: firstGalleryItem?.src ?? '',
      imageAlt: firstGalleryItem?.alt ?? '',
      caption: firstGalleryItem?.caption ?? '',
      html: modalBody?.innerHTML ?? '',
      work: readModalWork(element),
      gallery,
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

  return {
    columnWidth: boundedNumberAttribute(root, 'data-canvas-column-width', 25, 8, 80),
    mobileColumnWidth: boundedNumberAttribute(root, 'data-canvas-mobile-column-width', 100, 20, 100),
    mobileBreakpoint: boundedNumberAttribute(root, 'data-canvas-mobile-breakpoint', 767, 320, 1400),
    itemMarginMin: boundedNumberAttribute(root, 'data-canvas-item-margin-min', 4, 0, 30),
    itemMarginMax: boundedNumberAttribute(root, 'data-canvas-item-margin-max', 6, 0, 40),
    mobileItemMarginMin: boundedNumberAttribute(root, 'data-canvas-mobile-item-margin-min', 24, 0, 40),
    mobileItemMarginMax: boundedNumberAttribute(root, 'data-canvas-mobile-item-margin-max', 32, 0, 40),
    itemOffsetMin: boundedNumberAttribute(root, 'data-canvas-item-offset-min', 3, 0, 30),
    itemOffsetMax: boundedNumberAttribute(root, 'data-canvas-item-offset-max', 6, 0, 40),
    mobileItemOffsetMin: boundedNumberAttribute(root, 'data-canvas-mobile-item-offset-min', 1, 0, 30),
    mobileItemOffsetMax: boundedNumberAttribute(root, 'data-canvas-mobile-item-offset-max', 3, 0, 40),
    velocity: reducedMotion ? 0 : boundedNumberAttribute(root, 'data-canvas-velocity', 0.85, 0.1, 2),
    friction: reducedMotion ? 0 : boundedNumberAttribute(root, 'data-canvas-friction', 0.92, 0.5, 0.98),
    ease: reducedMotion ? 1 : boundedNumberAttribute(root, 'data-canvas-ease', 0.16, 0.04, 1),
    inertia: reducedMotion ? false : booleanAttribute(root, 'data-canvas-inertia', true),
    reducedMotion,
  };
}

function itemsToTiles(items: CanvasItem[]): CanvasTileData[] {
  return items.map((item) => ({
    ...item,
    instanceId: item.id,
    sourceId: item.id,
    copyIndex: 0,
  }));
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

function wrapAroundCenter(value: number, period: number, center: number): number {
  if (period <= 0) {
    return value;
  }

  return ((((value - center + period / 2) % period) + period) % period) - period / 2 + center;
}

function repeatOffsetsFor(period: number, viewportSize: number): number[] {
  const range = Math.max(1, Math.ceil(viewportSize / Math.max(period, 1)));
  return Array.from({ length: range * 2 + 1 }, (_, index) => index - range);
}

function isSignatureTile(tile: PlacedTile): boolean {
  return tile.tile.thumbnailAlt.trim().toLowerCase() === 'signatur';
}

function getTileCenter(tile: PlacedTile): Point {
  return {
    x: tile.x + tile.offsetX + tile.width / 2,
    y: tile.y + tile.offsetY + tile.height / 2,
  };
}

function getStartPosition(placed: PlacedTile[], root: HTMLElement): Point {
  const viewportCenter = {
    x: root.clientWidth / 2,
    y: root.clientHeight / 2,
  };
  const signatureTile = placed
    .filter(isSignatureTile)
    .sort((first, second) => {
      const firstCenter = getTileCenter(first);
      const secondCenter = getTileCenter(second);

      return Math.hypot(firstCenter.x, firstCenter.y) - Math.hypot(secondCenter.x, secondCenter.y);
    })[0];

  if (!signatureTile) {
    return viewportCenter;
  }

  const tileCenter = getTileCenter(signatureTile);

  return {
    x: viewportCenter.x - tileCenter.x,
    y: viewportCenter.y - tileCenter.y,
  };
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
      patternWidth: viewportWidth,
      patternHeight: viewportHeight,
    };
  }

  const columnCount = Math.max(1, Math.round(Math.sqrt(tiles.length)));
  const isMobile = viewportWidth <= config.mobileBreakpoint;
  const columnWidthPercent = isMobile ? config.mobileColumnWidth : config.columnWidth;
  const columnWidth = (viewportWidth * columnWidthPercent) / 100;
  const marginMin = (viewportWidth * (isMobile ? config.mobileItemMarginMin : config.itemMarginMin)) / 100;
  const marginMax = (viewportWidth * (isMobile ? config.mobileItemMarginMax : config.itemMarginMax)) / 100;
  const patternWidth = columnCount * columnWidth;
  const offsetMin = (isMobile ? config.mobileItemOffsetMin : config.itemOffsetMin) / 100;
  const offsetMax = (isMobile ? config.mobileItemOffsetMax : config.itemOffsetMax) / 100;
  const maxOffset = Math.max(offsetMin, offsetMax) * 1.5;
  const titleProbe = document.createElement('button');
  const titleLabel = document.createElement('span');
  titleProbe.className = 'cms-canvas__item';
  titleProbe.style.cssText = 'position:fixed;left:-10000px;top:0;visibility:hidden;pointer-events:none';
  titleProbe.tabIndex = -1;
  titleProbe.setAttribute('aria-hidden', 'true');
  titleLabel.className = 'cms-canvas__title';
  titleProbe.append(titleLabel);
  document.body.append(titleProbe);
  const preparedTiles: PreparedTile[] = shuffled(tiles, random).map((tile) => {
    const measure = measures.get(tile.sourceId) ?? measures.get(tile.instanceId) ?? fallbackMeasure(tile);
    const aspectRatio = measure.width / Math.max(measure.height, 1);
    const margin = marginMin + random() * Math.max(marginMax - marginMin, 0);
    const availableWidth = Math.max(columnWidth - margin, columnWidth * 0.35);
    const maxEdge = availableWidth * (isMobile
      ? Math.min(CANVAS_SIZE_SCALE[tile.size], 1)
      : CANVAS_SIZE_SCALE[tile.size]);
    const width = maxEdge * Math.min(aspectRatio, 1);
    const height = width / Math.max(aspectRatio, 0.2);
    titleProbe.style.width = `${width}px`;
    titleProbe.dataset.canvasItemSize = tile.size;
    titleLabel.textContent = tile.title;
    const titleHeight = tile.title ? titleLabel.offsetHeight : 0;
    const offsetAmount = offsetMin + random() * Math.max(offsetMax - offsetMin, 0);
    const offsetDirectionX = random() > 0.5 ? 1 : -1;
    const offsetDirectionY = random() > 0.5 ? 1 : -1;

    return {
      tile,
      width,
      height,
      titleHeight,
      margin,
      offsetX: offsetDirectionX * width * offsetAmount,
      offsetY: offsetDirectionY * height * offsetAmount,
      totalHeight: height + Math.max(margin, titleHeight ? titleHeight + 8 : 0),
    };
  });
  titleProbe.remove();
  const orderedColumns: PreparedTile[][] = Array.from({ length: columnCount }, () => []);
  const preparedColumnHeights = Array.from({ length: columnCount }, () => 0);

  preparedTiles.forEach((tile) => {
    const columnIndex = preparedColumnHeights.indexOf(Math.min(...preparedColumnHeights));
    orderedColumns[columnIndex].push(tile);
    preparedColumnHeights[columnIndex] += tile.totalHeight;
  });

  const basePlaced: PlacedTile[] = [];
  const placedColumns: PlacedTile[][] = [];
  const columnGaps = orderedColumns.map((column) => column.map((tile, index) => {
    const next = column[(index + 1) % column.length];
    return Math.max(
      tile.margin,
      tile.titleHeight ? tile.titleHeight + 8 + maxOffset * (tile.height + next.height) : 0,
    );
  }));
  const columnHeights = orderedColumns.map((column, index) =>
    column.reduce((height, tile, tileIndex) => height + tile.height + columnGaps[index][tileIndex], 0),
  );
  const patternHeight = Math.max(...columnHeights, 1);
  const alignmentThreshold = columnWidth * 0.05;

  orderedColumns.forEach((column, columnIndex) => {
    const columnCenter = columnIndex * columnWidth - patternWidth / 2 + columnWidth / 2;
    const distributedLoopGap = column.length > 0
      ? Math.max(patternHeight - columnHeights[columnIndex], 0) / column.length
      : 0;
    const placedColumn: PlacedTile[] = [];
    let y = 0;

    column.forEach((tile, tileIndex) => {
      const x = columnCenter - tile.width / 2;
      const previous = placedColumn[placedColumn.length - 1];
      const sideColumns = columnIndex > 0 ? [placedColumns[columnIndex - 1]] : [];
      if (columnIndex === columnCount - 1 && columnCount > 1) {
        sideColumns.push(placedColumns[0]);
      }
      const score = (offsetX: number, offsetY: number): number => {
        const centerX = x + offsetX + tile.width / 2;
        const centerY = y + offsetY + tile.height / 2;
        let penalty = 0;

        for (const neighbor of [previous, tileIndex === column.length - 1 ? placedColumn[0] : undefined]) {
          if (neighbor) {
            penalty += Math.max(0, alignmentThreshold - Math.abs(centerX - getTileCenter(neighbor).x));
          }
        }

        for (const sideColumn of sideColumns) {
          for (const neighbor of sideColumn) {
            for (const repeatY of [-patternHeight, 0, patternHeight]) {
              const neighborTop = neighbor.y + neighbor.offsetY + repeatY;
              const neighborCenter = neighborTop + neighbor.height / 2;
              if (Math.abs(centerY - neighborCenter) > Math.max(tile.height, neighbor.height)) continue;
              for (const [first, second] of [
                [y + offsetY, neighborTop],
                [centerY, neighborCenter],
                [y + offsetY + tile.height, neighborTop + neighbor.height],
              ]) {
                penalty += Math.max(0, alignmentThreshold - Math.abs(first - second));
              }
            }
          }
        }

        return penalty;
      };
      const signsX = tile.offsetX < 0 ? [-1, 1] : [1, -1];
      const signsY = tile.offsetY < 0 ? [-1, 1] : [1, -1];
      let best = { x: tile.offsetX, y: tile.offsetY, penalty: Number.POSITIVE_INFINITY };
      const consider = (amountX: number, amountY: number) => {
        for (const signX of signsX) {
          for (const signY of signsY) {
            const offsetX = signX * amountX;
            const offsetY = signY * amountY;
            const penalty = score(offsetX, offsetY);
            if (penalty < best.penalty) best = { x: offsetX, y: offsetY, penalty };
          }
        }
      };

      consider(Math.abs(tile.offsetX), Math.abs(tile.offsetY));
      if (best.penalty > 0) {
        const expandedX = Math.max(Math.abs(tile.offsetX), tile.width * maxOffset);
        const expandedY = Math.max(Math.abs(tile.offsetY), tile.height * maxOffset);
        consider(expandedX, Math.abs(tile.offsetY));
        consider(Math.abs(tile.offsetX), expandedY);
        consider(expandedX, expandedY);
      }

      const placedTile: PlacedTile = {
        tile: tile.tile,
        x,
        y,
        width: tile.width,
        height: tile.height,
        offsetX: best.x,
        offsetY: best.y,
      };
      placedColumn.push(placedTile);
      basePlaced.push(placedTile);
      y += tile.height + columnGaps[columnIndex][tileIndex] + distributedLoopGap;
    });
    placedColumns.push(placedColumn);
  });
  const normalizedPlaced = basePlaced.map((tile) => ({
    ...tile,
    y: tile.y - patternHeight / 2,
  }));
  const placed: PlacedTile[] = [];
  const repeatXOffsets = repeatOffsetsFor(patternWidth, viewportWidth);
  const repeatYOffsets = repeatOffsetsFor(patternHeight, viewportHeight);

  repeatYOffsets.forEach((repeatY) => {
    repeatXOffsets.forEach((repeatX) => {
      normalizedPlaced.forEach((tile, index) => {
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
    left: placed.x + placed.offsetX,
    top: placed.y + placed.offsetY,
    width: placed.width,
  };

  return (
    <button
      type="button"
      className="cms-canvas__item"
      style={style}
      data-canvas-item-size={placed.tile.size}
      data-canvas-item-id={placed.tile.instanceId}
      data-canvas-source-item-id={placed.tile.sourceId}
      aria-label={placed.tile.title || 'Details öffnen'}
    >
      <span className="cms-canvas__image-wrap">
        <img className="cms-canvas__image" src={placed.tile.thumbnail} alt={placed.tile.thumbnailAlt} draggable={false} />
      </span>
      {placed.tile.title ? <span className="cms-canvas__title">{placed.tile.title}</span> : null}
    </button>
  );
}

function CmsCanvasApp({ root, items, source }: { root: HTMLElement; items: CanvasItem[]; source: HTMLElement }): React.ReactElement {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [placed, setPlaced] = useState<PlacedTile[]>([]);
  const [pattern, setPattern] = useState({ width: 1, height: 1 });
  const [viewport, setViewport] = useState(() => ({
    width: Math.max(root.clientWidth, window.innerWidth),
    height: Math.max(root.clientHeight, window.innerHeight),
  }));
  const config = useMemo(() => readConfig(root), [root]);
  const seedRef = useRef(Math.floor(Math.random() * 0xffffffff));

  useEffect(() => {
    source.hidden = true;
    source.setAttribute('aria-hidden', 'true');
  }, [source]);

  useEffect(() => {
    let animationFrame = 0;

    const updateViewport = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        setViewport({
          width: Math.max(root.clientWidth, window.innerWidth),
          height: Math.max(root.clientHeight, window.innerHeight),
        });
      });
    };

    window.addEventListener('resize', updateViewport);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', updateViewport);
    };
  }, [root]);

  useEffect(() => {
    let cancelled = false;
    const random = createRandom(seedRef.current);
    const tiles = itemsToTiles(items);

    Promise.all([
      Promise.all(tiles.map(async (tile) => [tile.instanceId, await measureImage(tile.thumbnail)] as const)),
      document.fonts?.ready ?? Promise.resolve(),
    ]).then(([entries]) => {
      if (cancelled) {
        return;
      }

      const measures = new Map(entries);
      const nextLayout = placeTiles(tiles, measures, config, viewport.width, viewport.height, random);
      setPlaced(nextLayout.placed);
      setPattern({ width: nextLayout.patternWidth, height: nextLayout.patternHeight });
    });

    return () => {
      cancelled = true;
    };
  }, [config, items, root, viewport.height, viewport.width]);

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage || placed.length === 0) {
      return;
    }

    let position: Point = getStartPosition(placed, root);
    let target: Point = { ...position };
    let velocity: Point = { x: 0, y: 0 };
    let pointerId: number | null = null;
    let pointerStart: Point = { x: 0, y: 0 };
    let pointerPrevious: Point = { x: 0, y: 0 };
    let pointerPreviousTime = 0;
    let positionStart: Point = { x: 0, y: 0 };
    let dragged = false;
    let suppressClick = false;
    let pressedTile: HTMLElement | null = null;
    const itemByInstanceId = new Map(placed.map((tile) => [tile.tile.instanceId, tile.tile]));

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
      suppressClick = false;
      pressedTile = (event.target as Element).closest<HTMLElement>('.cms-canvas__item');

      if (event.pointerType !== 'touch') {
        root.setPointerCapture(event.pointerId);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) {
        return;
      }

      const dx = event.clientX - pointerStart.x;
      const dy = event.clientY - pointerStart.y;
      const distance = Math.hypot(dx, dy);
      const dragThreshold = event.pointerType === 'touch' ? 14 : DRAG_THRESHOLD;

      if (distance <= dragThreshold) {
        return;
      }

      event.preventDefault();

      if (!dragged) {
        dragged = true;
        root.classList.add('is-dragging');
        if (event.pointerType !== 'touch' && !config.reducedMotion) {
          gsap.to(stage, { scale: 0.985, duration: 0.32, ease: 'power2.out' });
        }
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

    const finishPointer = (event: PointerEvent, cancelled = false) => {
      if (pointerId !== event.pointerId) {
        return;
      }

      pointerId = null;
      if (root.hasPointerCapture(event.pointerId)) {
        root.releasePointerCapture(event.pointerId);
      }
      root.classList.remove('is-dragging');
      if (dragged && event.pointerType !== 'touch' && !config.reducedMotion) {
        gsap.to(stage, { scale: 1, duration: config.reducedMotion ? 0.01 : 0.45, ease: 'elastic.out(1, 0.72)' });
      }

      const releaseDistance = Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y);
      const tapThreshold = event.pointerType === 'touch' ? 14 : DRAG_THRESHOLD;

      if (!cancelled && event.pointerType !== 'touch' && !dragged && releaseDistance <= tapThreshold && pressedTile) {
        const itemId = pressedTile.dataset.canvasItemId;
        const item = itemId ? itemByInstanceId.get(itemId) : undefined;

        if (item) {
          suppressClick = true;
          openItemModal(item, pressedTile);
        }
      }

      if (dragged || cancelled) {
        suppressClick = true;
      }

      pressedTile = null;
    };

    const onPointerCancel = (event: PointerEvent) => finishPointer(event, true);

    const onClick = (event: MouseEvent) => {
      if (suppressClick && event.detail !== 0) {
        event.preventDefault();
        suppressClick = false;
        return;
      }

      suppressClick = false;

      const tile = (event.target as Element).closest<HTMLElement>('.cms-canvas__item');
      const itemId = tile?.dataset.canvasItemId;
      const item = itemId ? itemByInstanceId.get(itemId) : undefined;

      if (tile && item) {
        openItemModal(item, tile);
      }
    };

    const onResize = () => {
      target = getStartPosition(placed, root);
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();

      const deltaX = event.deltaMode === WheelEvent.DOM_DELTA_LINE ? event.deltaX * 16 : event.deltaX;
      const deltaY = event.deltaMode === WheelEvent.DOM_DELTA_LINE ? event.deltaY * 16 : event.deltaY;

      target.x -= deltaX * WHEEL_PAN_SPEED;
      target.y -= deltaY * WHEEL_PAN_SPEED;
      velocity = {
        x: -deltaX * 0.08 * config.velocity,
        y: -deltaY * 0.08 * config.velocity,
      };
    };

    gsap.ticker.add(tick);
    root.addEventListener('pointerdown', onPointerDown);
    root.addEventListener('pointermove', onPointerMove);
    root.addEventListener('pointerup', finishPointer);
    root.addEventListener('pointercancel', onPointerCancel);
    root.addEventListener('click', onClick);
    root.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('resize', onResize);

    return () => {
      gsap.ticker.remove(tick);
      root.removeEventListener('pointerdown', onPointerDown);
      root.removeEventListener('pointermove', onPointerMove);
      root.removeEventListener('pointerup', finishPointer);
      root.removeEventListener('pointercancel', onPointerCancel);
      root.removeEventListener('click', onClick);
      root.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', onResize);
      root.classList.remove('is-ready', 'is-dragging');
    };
  }, [config, pattern.height, pattern.width, placed, root]);

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
