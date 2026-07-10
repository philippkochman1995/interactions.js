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

interface Bounds {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

interface ContentBounds {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

interface MeasuredCanvasItem {
  tile: HTMLButtonElement;
  item: CanvasItem;
  width: number;
  height: number;
  area: number;
  visualWeight: number;
  aspect: 'portrait' | 'square' | 'landscape';
  priority: number;
}

interface WeightedRect extends Rect {
  id: string;
  visualWeight: number;
}

interface LayoutContext {
  center: Point;
  previousRect: WeightedRect | null;
  maxDistance: number;
}

interface CanvasConfig {
  width: number;
  height: number;
  viewportWidth: number;
  gap: number;
  padding: number;
  itemWidths: number[];
  layout: 'center-out' | 'percent-grid' | 'pixel-grid';
  itemWidthMin: number;
  itemWidthMax: number;
  itemGapMin: number;
  itemGapMax: number;
  itemJitter: number;
  motion: 'eased' | 'instant';
  inertia: boolean;
  ease: number;
  friction: number;
  velocity: number;
  boundsPadding: number;
}

const ROOT_SELECTOR = '[data-cms-canvas]';
const SOURCE_SELECTOR = '[data-cms-canvas-source]';
const ITEM_SELECTOR = '[data-cms-canvas-item]';
const DRAG_THRESHOLD = 6;
const EDGE_RESISTANCE = 0.28;
const MOTION_STOP_THRESHOLD = 0.08;
const POSITION_STOP_THRESHOLD = 0.12;
const BOUNCE_OVERSHOOT = 0.12;
const BOUNCE_MAX_VELOCITY = 18;
const PERCENT_GRID_COLUMNS = 14;
const PERCENT_GRID_MAX_RINGS = 24;
const POSITION_EPSILON = 12;
const SMALL_COUNT_PATTERNS: Record<number, Point[]> = {
  1: [{ x: 0, y: 0 }],
  2: [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ],
  3: [
    { x: 0, y: -0.9 },
    { x: -1, y: 0.65 },
    { x: 1, y: 0.65 },
  ],
  4: [
    { x: -1, y: -0.7 },
    { x: 1, y: -0.7 },
    { x: -1, y: 0.7 },
    { x: 1, y: 0.7 },
  ],
};

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

function boundedNumberAttributeWithFallback(
  element: HTMLElement,
  name: string,
  fallbackName: string,
  fallback: number,
  min: number,
  max: number,
): number {
  const value = Number.parseFloat(element.getAttribute(name) ?? element.getAttribute(fallbackName) ?? '');
  return Number.isFinite(value) && value > 0 ? clamp(value, min, max) : fallback;
}

function normalizeRange(min: number, max: number): [number, number] {
  return min <= max ? [min, max] : [max, min];
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

function stableUnit(value: string, salt = ''): number {
  return hashString(`${value}:${salt}`) / 4294967295;
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

function makeCenteredGridCells(config: CanvasConfig, cellWidth: number, cellHeight: number): Point[] {
  const centerX = config.width / 2 - cellWidth / 2;
  const centerY = config.height / 2 - cellHeight / 2;
  const maxRing = Math.ceil(
    Math.max(config.width / Math.max(1, cellWidth), config.height / Math.max(1, cellHeight)) / 2,
  ) + 2;
  const cells: Point[] = [];

  for (let ring = 0; ring <= maxRing; ring += 1) {
    for (let row = -ring; row <= ring; row += 1) {
      for (let column = -ring; column <= ring; column += 1) {
        if (Math.max(Math.abs(row), Math.abs(column)) !== ring) {
          continue;
        }

        const x = centerX + column * cellWidth;
        const y = centerY + row * cellHeight;

        if (
          x < config.padding ||
          y < config.padding ||
          x + cellWidth > config.width - config.padding ||
          y + cellHeight > config.height - config.padding
        ) {
          continue;
        }

        cells.push({ x, y });
      }
    }
  }

  return cells.sort((a, b) => {
    const distanceA = Math.hypot(a.x - centerX, a.y - centerY);
    const distanceB = Math.hypot(b.x - centerX, b.y - centerY);

    if (distanceA !== distanceB) {
      return distanceA - distanceB;
    }

    return Math.atan2(a.y - centerY, a.x - centerX) - Math.atan2(b.y - centerY, b.x - centerX);
  });
}

function placeTilesOnPixelGrid(
  tiles: HTMLButtonElement[],
  itemMap: Map<string, CanvasItem>,
  config: CanvasConfig,
): Rect[] {
  const maxItemWidth = Math.max(...tiles.map((tile) => tile.offsetWidth), config.itemWidths[0] ?? 180);
  const maxItemHeight = Math.max(...tiles.map((tile) => tile.offsetHeight), maxItemWidth);
  const cellWidth = maxItemWidth + config.gap;
  const cellHeight = maxItemHeight + config.gap;
  const gridCells = makeCenteredGridCells(config, cellWidth, cellHeight);
  const usedCells = new Set<number>();
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
    let point: Point | null = null;

    for (let cellIndex = 0; cellIndex < gridCells.length; cellIndex += 1) {

      if (usedCells.has(cellIndex)) {
        continue;
      }

      const cell = gridCells[cellIndex];
      const candidate: Rect = {
        x: cell.x + (cellWidth - rect.width) / 2,
        y: cell.y + (cellHeight - rect.height) / 2,
        ...rect,
      };

      if (!overlaps(candidate, placed, Math.max(24, config.gap * 0.42))) {
        point = candidate;
        usedCells.add(cellIndex);
        break;
      }
    }

    if (!point) {
      const fallbackIndex = placed.length;
      const fallbackColumn = fallbackIndex % Math.max(1, Math.floor(Math.sqrt(tiles.length)));
      const fallbackRow = Math.floor(fallbackIndex / Math.max(1, Math.floor(Math.sqrt(tiles.length))));

      point = {
        x: config.width / 2 + (fallbackColumn - 1) * cellWidth,
        y: config.height / 2 + (fallbackRow - 1) * cellHeight,
      };
    }

    tile.style.left = `${point.x}px`;
    tile.style.top = `${point.y}px`;
    placed.push({ ...point, ...rect });
  });

  return placed;
}

function makePercentGridSlots(config: CanvasConfig, slotWidth: number, slotHeight: number): Point[] {
  const columnWidth = config.width / PERCENT_GRID_COLUMNS;
  const centerColumn = (PERCENT_GRID_COLUMNS - 1) / 2;
  const centerY = config.height / 2 - slotHeight / 2;
  const slots: Point[] = [];

  for (let ring = 0; ring <= PERCENT_GRID_MAX_RINGS; ring += 1) {
    for (let row = -ring; row <= ring; row += 1) {
      for (let column = 0; column < PERCENT_GRID_COLUMNS; column += 1) {
        const columnDistance = Math.abs(column - centerColumn);
        const rowDistance = Math.abs(row);

        if (Math.ceil(Math.max(columnDistance / 1.65, rowDistance)) !== ring) {
          continue;
        }

        const columnJitter = (stableUnit(`${column}:${row}`, 'slot-x') - 0.5) * slotWidth * 0.42;
        const rowJitter = (stableUnit(`${column}:${row}`, 'slot-y') - 0.5) * slotHeight * 0.34;
        const x = column * columnWidth + (columnWidth - slotWidth) / 2 + columnJitter;
        const y = centerY + row * slotHeight + rowJitter;

        if (
          x < config.padding ||
          y < config.padding ||
          x + slotWidth > config.width - config.padding ||
          y + slotHeight > config.height - config.padding
        ) {
          continue;
        }

        slots.push({ x, y });
      }
    }
  }

  return slots.sort((a, b) => {
    const centerX = config.width / 2 - slotWidth / 2;
    const distanceA = Math.hypot((a.x - centerX) / slotWidth, (a.y - centerY) / slotHeight);
    const distanceB = Math.hypot((b.x - centerX) / slotWidth, (b.y - centerY) / slotHeight);

    if (distanceA !== distanceB) {
      return distanceA - distanceB;
    }

    return a.y - b.y || a.x - b.x;
  });
}

function placeTilesOnPercentGrid(
  tiles: HTMLButtonElement[],
  itemMap: Map<string, CanvasItem>,
  config: CanvasConfig,
): Rect[] {
  const [itemWidthMin, itemWidthMax] = normalizeRange(config.itemWidthMin, config.itemWidthMax);
  const [gapMin, gapMax] = normalizeRange(config.itemGapMin, config.itemGapMax);
  const maxWidthPx = (config.viewportWidth * itemWidthMax) / 100;
  const maxGapPx = (config.viewportWidth * gapMax) / 100;
  const slotWidth = maxWidthPx + maxGapPx;
  const slotHeight = maxWidthPx * 0.34 + maxGapPx * 0.38;
  const slots = makePercentGridSlots(config, slotWidth, slotHeight);
  const usedSlots = new Set<number>();
  const placed: Rect[] = [];

  tiles.forEach((tile) => {
    const item = itemMap.get(tile.dataset.canvasItemId ?? '');

    if (!item) {
      return;
    }

    const widthPercent = itemWidthMin + stableUnit(item.id, 'width') * (itemWidthMax - itemWidthMin);
    const gapPercent = gapMin + stableUnit(item.id, 'gap') * (gapMax - gapMin);
    const width = (config.viewportWidth * widthPercent) / 100;
    const gap = (config.viewportWidth * gapPercent) / 100;

    tile.style.width = `${width}px`;

    const rect = {
      width: tile.offsetWidth,
      height: tile.offsetHeight,
    };
    let point: Point | null = null;

    for (let slotIndex = 0; slotIndex < slots.length; slotIndex += 1) {
      if (usedSlots.has(slotIndex)) {
        continue;
      }

      const slot = slots[slotIndex];
      const offsetX = (stableUnit(item.id, 'offset-x') - 0.5) * gap * config.itemJitter;
      const offsetY = (stableUnit(item.id, 'offset-y') - 0.5) * gap * config.itemJitter * 0.42;
      const candidate: Rect = {
        x: slot.x + (slotWidth - rect.width) / 2 + offsetX,
        y: slot.y + (slotHeight - rect.height) / 2 + offsetY,
        ...rect,
      };

      if (!overlaps(candidate, placed, Math.max(18, gap * (0.22 + stableUnit(item.id, 'overlap-gap') * 0.34)))) {
        point = candidate;
        usedSlots.add(slotIndex);
        break;
      }
    }

    if (!point) {
      const fallbackIndex = placed.length;
      const columns = Math.max(1, Math.floor(Math.sqrt(tiles.length)));

      point = {
        x: config.width / 2 + (fallbackIndex % columns - columns / 2) * slotWidth,
        y: config.height / 2 + (Math.floor(fallbackIndex / columns) - 1) * slotHeight,
      };
    }

    tile.style.left = `${point.x}px`;
    tile.style.top = `${point.y}px`;
    placed.push({ ...point, ...rect });
  });

  return placed;
}

function itemGapPx(item: MeasuredCanvasItem, config: CanvasConfig): number {
  const [gapMin, gapMax] = normalizeRange(config.itemGapMin, config.itemGapMax);
  const min = (config.viewportWidth * gapMin) / 100;
  const max = (config.viewportWidth * gapMax) / 100;
  return clamp(Math.min(item.width, item.height) * 0.16, min, max);
}

function measureCanvasItems(
  tiles: HTMLButtonElement[],
  itemMap: Map<string, CanvasItem>,
  config: CanvasConfig,
): MeasuredCanvasItem[] {
  const [itemWidthMin, itemWidthMax] = normalizeRange(config.itemWidthMin, config.itemWidthMax);

  return tiles
    .map((tile) => {
      const item = itemMap.get(tile.dataset.canvasItemId ?? '');

      if (!item) {
        return null;
      }

      const widthPercent = itemWidthMin + stableUnit(item.id, 'width') * (itemWidthMax - itemWidthMin);
      tile.style.width = `${(config.viewportWidth * widthPercent) / 100}px`;

      const width = tile.offsetWidth;
      const height = tile.offsetHeight;
      const ratio = width / Math.max(1, height);

      return {
        tile,
        item,
        width,
        height,
        area: width * height,
        visualWeight: Math.sqrt(width * height),
        aspect: ratio < 0.82 ? 'portrait' : ratio > 1.22 ? 'landscape' : 'square',
        priority: Number.parseFloat(tile.dataset.canvasPriority ?? '') || 0,
      } satisfies MeasuredCanvasItem;
    })
    .filter((item): item is MeasuredCanvasItem => item !== null);
}

function sortCanvasItems(items: MeasuredCanvasItem[]): MeasuredCanvasItem[] {
  return [...items].sort((a, b) => {
    if (a.priority !== b.priority) {
      return b.priority - a.priority;
    }

    if (a.visualWeight !== b.visualWeight) {
      return b.visualWeight - a.visualWeight;
    }

    return hashString(a.item.id) - hashString(b.item.id);
  });
}

function rectCenter(rect: Rect): Point {
  return {
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2,
  };
}

function getVisualCentroid(rects: WeightedRect[], fallback: Point): Point {
  let weightedX = 0;
  let weightedY = 0;
  let totalWeight = 0;

  rects.forEach((rect) => {
    const center = rectCenter(rect);
    weightedX += center.x * rect.visualWeight;
    weightedY += center.y * rect.visualWeight;
    totalWeight += rect.visualWeight;
  });

  if (totalWeight <= 0) {
    return fallback;
  }

  return {
    x: weightedX / totalWeight,
    y: weightedY / totalWeight,
  };
}

function getWeightedBounds(rects: WeightedRect[]): ContentBounds {
  return rects.reduce<ContentBounds>(
    (bounds, rect) => ({
      left: Math.min(bounds.left, rect.x),
      top: Math.min(bounds.top, rect.y),
      right: Math.max(bounds.right, rect.x + rect.width),
      bottom: Math.max(bounds.bottom, rect.y + rect.height),
    }),
    {
      left: Number.POSITIVE_INFINITY,
      top: Number.POSITIVE_INFINITY,
      right: Number.NEGATIVE_INFINITY,
      bottom: Number.NEGATIVE_INFINITY,
    },
  );
}

function toWeightedRect(rect: Rect, item: MeasuredCanvasItem): WeightedRect {
  return {
    ...rect,
    id: item.item.id,
    visualWeight: item.visualWeight,
  };
}

function dedupeCandidates(candidates: Rect[]): Rect[] {
  const deduped: Rect[] = [];

  candidates.forEach((candidate) => {
    if (
      !deduped.some(
        (existing) =>
          Math.abs(existing.x - candidate.x) <= POSITION_EPSILON &&
          Math.abs(existing.y - candidate.y) <= POSITION_EPSILON,
      )
    ) {
      deduped.push(candidate);
    }
  });

  return deduped;
}

function createCandidatesAroundRect(rect: Rect, item: MeasuredCanvasItem, gap: number): Rect[] {
  const width = item.width;
  const height = item.height;
  const horizontalOffsets = [-0.25, 0, 0.25].map((offset) => rect.x + (rect.width - width) * (0.5 + offset));
  const verticalOffsets = [-0.25, 0, 0.25].map((offset) => rect.y + (rect.height - height) * (0.5 + offset));
  const candidates: Rect[] = [
    { x: rect.x + rect.width + gap, y: rect.y + (rect.height - height) / 2, width, height },
    { x: rect.x - width - gap, y: rect.y + (rect.height - height) / 2, width, height },
    { x: rect.x + (rect.width - width) / 2, y: rect.y + rect.height + gap, width, height },
    { x: rect.x + (rect.width - width) / 2, y: rect.y - height - gap, width, height },
    { x: rect.x + rect.width + gap, y: rect.y - height - gap, width, height },
    { x: rect.x - width - gap, y: rect.y - height - gap, width, height },
    { x: rect.x + rect.width + gap, y: rect.y + rect.height + gap, width, height },
    { x: rect.x - width - gap, y: rect.y + rect.height + gap, width, height },
  ];

  horizontalOffsets.forEach((x) => {
    candidates.push({ x, y: rect.y + rect.height + gap, width, height });
    candidates.push({ x, y: rect.y - height - gap, width, height });
  });

  verticalOffsets.forEach((y) => {
    candidates.push({ x: rect.x + rect.width + gap, y, width, height });
    candidates.push({ x: rect.x - width - gap, y, width, height });
  });

  return candidates;
}

function createFrontierCandidates(item: MeasuredCanvasItem, placed: WeightedRect[], config: CanvasConfig): Rect[] {
  const center = { x: config.width / 2, y: config.height / 2 };

  if (placed.length === 0) {
    return [{ x: center.x - item.width / 2, y: center.y - item.height / 2, width: item.width, height: item.height }];
  }

  const gap = itemGapPx(item, config);
  const candidates = placed.flatMap((rect) => createCandidatesAroundRect(rect, item, gap));
  const ringGap = gap + item.visualWeight * 0.55;

  for (let index = 0; index < Math.min(16, placed.length * 2 + 8); index += 1) {
    const angle = stableUnit(`${item.item.id}:${index}`, 'ring-angle') * Math.PI * 2;
    const radius = ringGap * (1 + Math.floor(index / 8));
    candidates.push({
      x: center.x + Math.cos(angle) * radius - item.width / 2,
      y: center.y + Math.sin(angle) * radius * 0.78 - item.height / 2,
      width: item.width,
      height: item.height,
    });
  }

  return dedupeCandidates(
    candidates.filter(
      (candidate) =>
        candidate.x >= config.padding &&
        candidate.y >= config.padding &&
        candidate.x + candidate.width <= config.width - config.padding &&
        candidate.y + candidate.height <= config.height - config.padding &&
        !overlaps(candidate, placed, itemGapPx(item, config)),
    ),
  );
}

function quadrantVariance(rects: WeightedRect[], center: Point): number {
  const quadrants = [0, 0, 0, 0];

  rects.forEach((rect) => {
    const point = rectCenter(rect);
    const horizontal = point.x < center.x ? 0 : 1;
    const vertical = point.y < center.y ? 0 : 2;
    quadrants[horizontal + vertical] += rect.visualWeight;
  });

  const average = quadrants.reduce((sum, value) => sum + value, 0) / quadrants.length;
  return quadrants.reduce((sum, value) => sum + Math.abs(value - average), 0) / Math.max(1, average);
}

function nearestRectDistance(candidate: Rect, placed: WeightedRect[]): number {
  const center = rectCenter(candidate);
  return placed.reduce((minimum, rect) => Math.min(minimum, Math.hypot(center.x - rectCenter(rect).x, center.y - rectCenter(rect).y)), Number.POSITIVE_INFINITY);
}

function scoreCandidate(candidate: Rect, item: MeasuredCanvasItem, placed: WeightedRect[], context: LayoutContext): number {
  const candidateCenter = rectCenter(candidate);
  const next = [...placed, toWeightedRect(candidate, item)];
  const centroid = getVisualCentroid(next, context.center);
  const bounds = getWeightedBounds(next);
  const leftExtent = context.center.x - bounds.left;
  const rightExtent = bounds.right - context.center.x;
  const topExtent = context.center.y - bounds.top;
  const bottomExtent = bounds.bottom - context.center.y;
  const centerDistanceScore = Math.hypot(candidateCenter.x - context.center.x, candidateCenter.y - context.center.y) / context.maxDistance;
  const centroidScore = (Math.hypot(centroid.x - context.center.x, centroid.y - context.center.y) / context.maxDistance) * 5;
  const quadrantScore = quadrantVariance(next, context.center) * 4;
  const boundsBalanceScore =
    (Math.abs(leftExtent - rightExtent) / context.maxDistance) * 2.5 +
    (Math.abs(topExtent - bottomExtent) / context.maxDistance) * 2;
  const emptySpaceScore = (nearestRectDistance(candidate, placed) / context.maxDistance) * 1.5;
  const previousCenter = context.previousRect ? rectCenter(context.previousRect) : null;
  const mirroredTarget = previousCenter
    ? {
        x: context.center.x - (previousCenter.x - context.center.x),
        y: context.center.y - (previousCenter.y - context.center.y),
      }
    : context.center;
  const oppositePairScore =
    context.previousRect && Math.abs(context.previousRect.visualWeight - item.visualWeight) / Math.max(item.visualWeight, context.previousRect.visualWeight) < 0.38
      ? (Math.hypot(candidateCenter.x - mirroredTarget.x, candidateCenter.y - mirroredTarget.y) / context.maxDistance) * 2.5
      : 0;
  const deterministicTieBreaker = stableUnit(`${item.item.id}:${Math.round(candidate.x)}:${Math.round(candidate.y)}`, 'placement') * 0.01;

  return (
    centerDistanceScore +
    centroidScore +
    quadrantScore +
    boundsBalanceScore +
    emptySpaceScore +
    oppositePairScore +
    deterministicTieBreaker
  );
}

function placeSmallCountPattern(items: MeasuredCanvasItem[], config: CanvasConfig): WeightedRect[] {
  const pattern = SMALL_COUNT_PATTERNS[items.length] ?? SMALL_COUNT_PATTERNS[1];
  const center = { x: config.width / 2, y: config.height / 2 };
  const maxWidth = Math.max(...items.map((item) => item.width));
  const maxHeight = Math.max(...items.map((item) => item.height));
  const baseGap = ((config.viewportWidth * config.itemGapMax) / 100) || 120;
  let scale = Math.max(maxWidth + baseGap, maxHeight + baseGap);

  for (let attempt = 0; attempt < 12; attempt += 1) {
    const rects = items.map((item, index) =>
      toWeightedRect(
        {
          x: center.x + pattern[index].x * scale - item.width / 2,
          y: center.y + pattern[index].y * scale * 0.72 - item.height / 2,
          width: item.width,
          height: item.height,
        },
        item,
      ),
    );

    if (rects.every((rect, index) => !overlaps(rect, rects.slice(0, index), itemGapPx(items[index], config)))) {
      return rects;
    }

    scale *= 1.12;
  }

  return items.map((item, index) =>
    toWeightedRect(
      {
        x: center.x + (index - (items.length - 1) / 2) * scale - item.width / 2,
        y: center.y - item.height / 2,
        width: item.width,
        height: item.height,
      },
      item,
    ),
  );
}

function placeCenterOutMasonry(items: MeasuredCanvasItem[], config: CanvasConfig): WeightedRect[] {
  const center = { x: config.width / 2, y: config.height / 2 };
  const maxDistance = Math.hypot(config.width, config.height);
  const placed: WeightedRect[] = [];

  items.forEach((item) => {
    const candidates = createFrontierCandidates(item, placed, config);
    const context = { center, previousRect: placed[placed.length - 1] ?? null, maxDistance };
    const best =
      candidates.sort((a, b) => scoreCandidate(a, item, placed, context) - scoreCandidate(b, item, placed, context))[0] ??
      {
        x: center.x - item.width / 2 + (stableUnit(item.item.id, 'fallback-x') - 0.5) * item.visualWeight,
        y: center.y - item.height / 2 + (stableUnit(item.item.id, 'fallback-y') - 0.5) * item.visualWeight,
        width: item.width,
        height: item.height,
      };

    placed.push(toWeightedRect(best, item));
  });

  return placed;
}

function centerVisualComposition(rects: WeightedRect[], config: CanvasConfig): WeightedRect[] {
  const center = { x: config.width / 2, y: config.height / 2 };
  const centroid = getVisualCentroid(rects, center);
  const offsetX = center.x - centroid.x;
  const offsetY = center.y - centroid.y;

  return rects.map((rect) => ({
    ...rect,
    x: rect.x + offsetX,
    y: rect.y + offsetY,
  }));
}

function applyDeterministicJitter(
  rects: WeightedRect[],
  items: MeasuredCanvasItem[],
  config: CanvasConfig,
): WeightedRect[] {
  const jitterBase = Math.max(0, config.itemJitter);
  const byId = new Map(items.map((item) => [item.item.id, item]));
  const jittered: WeightedRect[] = [];

  rects.forEach((rect, index) => {
    const item = byId.get(rect.id);
    const gap = item ? itemGapPx(item, config) : 80;
    const sign = index % 2 === 0 ? 1 : -1;
    const candidate = {
      ...rect,
      x: rect.x + (stableUnit(rect.id, 'final-jitter-x') - 0.5) * gap * jitterBase * sign,
      y: rect.y + (stableUnit(rect.id, 'final-jitter-y') - 0.5) * gap * jitterBase * 0.75 * sign,
    };

    if (!overlaps(candidate, jittered, item ? itemGapPx(item, config) : 24)) {
      jittered.push(candidate);
    } else {
      jittered.push(rect);
    }
  });

  return jittered;
}

function placeTilesCenterOut(
  tiles: HTMLButtonElement[],
  itemMap: Map<string, CanvasItem>,
  config: CanvasConfig,
): Rect[] {
  const measured = sortCanvasItems(measureCanvasItems(tiles, itemMap, config));
  const rects = measured.length <= 4 ? placeSmallCountPattern(measured, config) : placeCenterOutMasonry(measured, config);
  const centered = centerVisualComposition(rects, config);
  const jittered = applyDeterministicJitter(centered, measured, config);

  jittered.forEach((rect) => {
    const item = measured.find((candidate) => candidate.item.id === rect.id);

    if (!item) {
      return;
    }

    item.tile.style.left = `${rect.x}px`;
    item.tile.style.top = `${rect.y}px`;
  });

  return jittered;
}

function placeTiles(
  tiles: HTMLButtonElement[],
  itemMap: Map<string, CanvasItem>,
  config: CanvasConfig,
): Rect[] {
  if (config.layout === 'pixel-grid') {
    return placeTilesOnPixelGrid(tiles, itemMap, config);
  }

  if (config.layout === 'percent-grid') {
    return placeTilesOnPercentGrid(tiles, itemMap, config);
  }

  return placeTilesCenterOut(tiles, itemMap, config);
}

function getContentBounds(rects: Rect[], config: CanvasConfig): ContentBounds {
  if (rects.length === 0) {
    return {
      left: config.width / 2,
      top: config.height / 2,
      right: config.width / 2,
      bottom: config.height / 2,
    };
  }

  return rects.reduce<ContentBounds>(
    (bounds, rect) => ({
      left: Math.min(bounds.left, rect.x),
      top: Math.min(bounds.top, rect.y),
      right: Math.max(bounds.right, rect.x + rect.width),
      bottom: Math.max(bounds.bottom, rect.y + rect.height),
    }),
    {
      left: Number.POSITIVE_INFINITY,
      top: Number.POSITIVE_INFINITY,
      right: Number.NEGATIVE_INFINITY,
      bottom: Number.NEGATIVE_INFINITY,
    },
  );
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
  const layoutAttribute = root.getAttribute('data-canvas-layout');
  const layout =
    layoutAttribute === 'pixel-grid' || layoutAttribute === 'percent-grid'
      ? layoutAttribute
      : 'center-out';
  const isMobileViewport = viewportWidth < 768;
  const config: CanvasConfig = {
    width: numberAttribute(root, 'data-canvas-width', Math.max(3600, viewportWidth * 3.2)),
    height: numberAttribute(root, 'data-canvas-height', Math.max(2400, viewportHeight * 3)),
    viewportWidth,
    gap: numberAttribute(root, 'data-canvas-gap', 150),
    padding: numberAttribute(root, 'data-canvas-padding', 220),
    itemWidths: parseWidths(root),
    layout,
    itemWidthMin: boundedNumberAttribute(root, 'data-canvas-item-width-min', isMobileViewport ? 80 : 15, 6, 95),
    itemWidthMax: boundedNumberAttribute(root, 'data-canvas-item-width-max', isMobileViewport ? 90 : 20, 6, 95),
    itemGapMin: boundedNumberAttribute(root, 'data-canvas-item-gap-min', isMobileViewport ? 3 : 4, 0, 30),
    itemGapMax: boundedNumberAttributeWithFallback(root, 'data-canvas-item-gap-max', 'data-canvas-item-gap-map', isMobileViewport ? 8 : 8, 0, 30),
    itemJitter: boundedNumberAttribute(root, 'data-canvas-item-jitter', 0.04, 0, 3),
    motion: reducedMotion ? 'instant' : requestedMotion,
    inertia: reducedMotion ? false : booleanAttribute(root, 'data-canvas-inertia', true),
    ease: reducedMotion ? 1 : boundedNumberAttribute(root, 'data-canvas-ease', 0.16, 0.04, 1),
    friction: reducedMotion ? 0 : boundedNumberAttribute(root, 'data-canvas-friction', 0.92, 0.5, 0.98),
    velocity: reducedMotion ? 0 : boundedNumberAttribute(root, 'data-canvas-velocity', 0.85, 0.1, 2),
    boundsPadding: numberAttribute(root, 'data-canvas-bounds-padding', 120),
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

  const placed = placeTiles(tiles, itemMap, config);
  const contentBounds = getContentBounds(placed, config);

  let position = {
    x: root.clientWidth / 2 - (contentBounds.left + contentBounds.right) / 2,
    y: root.clientHeight / 2 - (contentBounds.top + contentBounds.bottom) / 2,
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

  function bounds(): Bounds {
    const visibleLeft = contentBounds.left - config.boundsPadding;
    const visibleRight = contentBounds.right + config.boundsPadding;
    const visibleTop = contentBounds.top - config.boundsPadding;
    const visibleBottom = contentBounds.bottom + config.boundsPadding;
    const minX = Math.min(
      root.clientWidth / 2 - (visibleLeft + visibleRight) / 2,
      root.clientWidth - visibleRight,
    );
    const maxX = Math.max(
      root.clientWidth / 2 - (visibleLeft + visibleRight) / 2,
      -visibleLeft,
    );
    const minY = Math.min(
      root.clientHeight / 2 - (visibleTop + visibleBottom) / 2,
      root.clientHeight - visibleBottom,
    );
    const maxY = Math.max(
      root.clientHeight / 2 - (visibleTop + visibleBottom) / 2,
      -visibleTop,
    );

    return { minX, maxX, minY, maxY };
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

  function bounceVelocity(point: Point, clampedPoint: Point): Point {
    return {
      x:
        point.x === clampedPoint.x
          ? 0
          : clamp((clampedPoint.x - point.x) * BOUNCE_OVERSHOOT, -BOUNCE_MAX_VELOCITY, BOUNCE_MAX_VELOCITY),
      y:
        point.y === clampedPoint.y
          ? 0
          : clamp((clampedPoint.y - point.y) * BOUNCE_OVERSHOOT, -BOUNCE_MAX_VELOCITY, BOUNCE_MAX_VELOCITY),
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
        const bounce = bounceVelocity(nextTarget, clampedTarget);

        targetPosition = nextTarget;
        velocity = {
          x: bounce.x || velocity.x * config.friction,
          y: bounce.y || velocity.y * config.friction,
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
