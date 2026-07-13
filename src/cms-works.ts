interface WorkItem {
  id: string;
  title: string;
  thumbnail: string;
  thumbnailAlt: string;
  href: string;
  year: string;
  curatedPosition: number | null;
  categories: string[];
  index: number;
}

type WorksSortMode = 'curated' | 'random' | 'alphabetical';

interface ImageMeasure {
  width: number;
  height: number;
}

interface PlacedWorkColumn {
  items: WorkItem[];
  height: number;
}

const ROOT_SELECTOR = '[data-cms-works]';
const SOURCE_SELECTOR = '[data-cms-works-source]';
const ITEM_SELECTOR = '[data-cms-works-item], [data-cms-canvas-item]';
const THUMBNAIL_SELECTOR = '[data-works-thumbnail], [data-canvas-thumbnail]';
const TITLE_SELECTOR = '[data-works-title], [data-canvas-title]';
const YEAR_SELECTOR = '[data-works-year], [data-canvas-year]';
const CURATED_POSITION_SELECTOR = '[data-works-curated-position], [data-works-position]';
const CATEGORY_SELECTOR = '[data-works-category], [data-works-categories]';
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

function ready(callback: () => void): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
  } else {
    callback();
  }
}

function textFrom(element: HTMLElement, selector: string): string {
  return element.querySelector<HTMLElement>(selector)?.textContent?.trim() ?? '';
}

function imageFrom(element: HTMLElement): HTMLImageElement | null {
  return element.querySelector<HTMLImageElement>(THUMBNAIL_SELECTOR) ?? element.querySelector<HTMLImageElement>('img');
}

function hashString(value: string): number {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function createRandom(seed: number): () => number {
  let state = seed >>> 0;

  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function parseNumber(value: string): number | null {
  const number = Number.parseFloat(value.trim().replace(',', '.'));
  return Number.isFinite(number) ? number : null;
}

function readCuratedPosition(element: HTMLElement): number | null {
  return parseNumber(
    element.getAttribute('data-works-curated-position') ??
      element.getAttribute('data-works-position') ??
      textFrom(element, CURATED_POSITION_SELECTOR),
  );
}

function readCategories(element: HTMLElement): string[] {
  const raw =
    element.getAttribute('data-works-categories') ??
    element.getAttribute('data-works-category') ??
    textFrom(element, CATEGORY_SELECTOR);

  return raw
    .split(',')
    .map((category) => category.trim())
    .filter(Boolean);
}

function readHref(element: HTMLElement): string {
  return (
    element.getAttribute('data-works-href') ??
    element.getAttribute('data-works-url') ??
    element.querySelector<HTMLAnchorElement>('[data-works-link]')?.href ??
    element.querySelector<HTMLAnchorElement>('a[href]')?.href ??
    ''
  );
}

function readItem(element: HTMLElement, index: number): WorkItem | null {
  const thumbnailElement = imageFrom(element);
  const thumbnail = thumbnailElement?.currentSrc || thumbnailElement?.src || '';

  if (!thumbnail) {
    return null;
  }

  const title =
    textFrom(element, TITLE_SELECTOR) ||
    element.getAttribute('data-works-title')?.trim() ||
    element.getAttribute('data-canvas-title')?.trim() ||
    thumbnailElement?.alt.trim() ||
    '';
  const id =
    element.getAttribute('data-works-id')?.trim() ||
    element.getAttribute('data-canvas-id')?.trim() ||
    element.getAttribute('data-cms-item-id')?.trim() ||
    `work-${index + 1}-${hashString(`${title}-${thumbnail}`)}`;

  return {
    id,
    title,
    thumbnail,
    thumbnailAlt: thumbnailElement?.alt || title,
    href: readHref(element),
    year: textFrom(element, YEAR_SELECTOR) || element.getAttribute('data-works-year')?.trim() || '',
    curatedPosition: readCuratedPosition(element),
    categories: readCategories(element),
    index,
  };
}

function readItems(source: HTMLElement): WorkItem[] {
  return Array.from(source.querySelectorAll<HTMLElement>(ITEM_SELECTOR))
    .map(readItem)
    .filter((item): item is WorkItem => item !== null);
}

function readSortMode(root: HTMLElement): WorksSortMode {
  const value = root.getAttribute('data-works-sort')?.trim().toLowerCase();

  if (value === 'random' || value === 'alphabetical') {
    return value;
  }

  return 'curated';
}

function sortItems(items: WorkItem[], mode: WorksSortMode, root: HTMLElement): WorkItem[] {
  const nextItems = [...items];

  if (mode === 'alphabetical') {
    return nextItems.sort((first, second) => {
      const titleCompare = first.title.localeCompare(second.title, 'de', { sensitivity: 'base' });
      return titleCompare || first.index - second.index;
    });
  }

  if (mode === 'random') {
    const seed = hashString(root.getAttribute('data-works-random-seed') || items.map((item) => item.id).join('|'));
    const random = createRandom(seed);

    return nextItems
      .map((item) => ({ item, sortValue: random() }))
      .sort((first, second) => first.sortValue - second.sortValue)
      .map(({ item }) => item);
  }

  return nextItems.sort((first, second) => {
    const firstPosition = first.curatedPosition ?? Number.POSITIVE_INFINITY;
    const secondPosition = second.curatedPosition ?? Number.POSITIVE_INFINITY;
    return firstPosition - secondPosition || first.title.localeCompare(second.title, 'de', { sensitivity: 'base' });
  });
}

function createEyeIcon(): SVGSVGElement {
  const svg = document.createElementNS(SVG_NAMESPACE, 'svg');
  const pupil = document.createElementNS(SVG_NAMESPACE, 'path');
  const outline = document.createElementNS(SVG_NAMESPACE, 'path');

  svg.classList.add('cms-works__eye');
  svg.setAttribute('viewBox', '0 0 26 17');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');

  pupil.classList.add('cms-works__eye-pupil');
  pupil.setAttribute('d', 'M12.9287 5.09348L9.21484 8.5L12.9287 11.9065L16.6426 8.5L12.9287 5.09348Z');
  pupil.setAttribute('fill', 'currentColor');

  outline.setAttribute(
    'd',
    'M13.0002 2.18023C15.6652 2.18023 18.1329 3.07008 20.3347 4.82508C21.9106 6.08117 22.9982 7.49402 23.6231 8.43757V8.56243C22.9982 9.50597 21.9106 10.9188 20.3347 12.1749C18.1329 13.9299 15.6652 14.8198 13.0002 14.8198C10.3349 14.8198 7.86705 13.9298 5.66511 12.1745C4.08924 10.9183 3.00176 9.50545 2.37694 8.56192V8.43809C3.00176 7.49455 4.08926 6.08168 5.66511 4.82548C7.86706 3.07023 10.3349 2.18023 13.0002 2.18023ZM13.0002 0C5.40921 0 1.20653 5.8629 0 7.85026V9.14973C1.20653 11.1371 5.40921 17 13.0002 17C20.5904 17 24.793 11.1382 26 9.1503V7.8497C24.793 5.8618 20.5904 0 13.0002 0Z',
  );
  outline.setAttribute('fill', 'currentColor');

  svg.append(pupil, outline);

  return svg;
}

function createWorkCard(item: WorkItem): HTMLElement {
  const card = document.createElement(item.href ? 'a' : 'article');
  const imageWrap = document.createElement('span');
  const image = document.createElement('img');
  const meta = document.createElement('span');
  const label = document.createElement('span');
  const title = document.createElement('span');

  card.className = 'cms-works__item';
  card.setAttribute('data-works-rendered-item', item.id);
  card.setAttribute('data-works-categories', item.categories.join(','));

  if (item.href) {
    card.setAttribute('href', item.href);
  }

  imageWrap.className = 'cms-works__image-wrap';

  image.className = 'cms-works__image';
  image.src = item.thumbnail;
  image.alt = item.thumbnailAlt;
  image.loading = 'lazy';
  image.decoding = 'async';
  imageWrap.append(image);

  meta.className = 'cms-works__meta';
  label.className = 'cms-works__label';

  title.className = 'cms-works__title';
  title.textContent = item.title;
  label.append(title);

  if (item.year) {
    const year = document.createElement('span');

    year.className = 'cms-works__year';
    year.textContent = item.year;
    label.append(year);
  }

  meta.append(label, createEyeIcon());

  card.append(imageWrap, meta);

  return card;
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

function getColumnCount(root: HTMLElement): number {
  const styles = window.getComputedStyle(root);
  const rawValue = styles.getPropertyValue('--cms-works-active-columns').trim();
  const columnCount = Number.parseInt(rawValue, 10);

  return Number.isFinite(columnCount) && columnCount > 0 ? columnCount : 4;
}

function distributeItems(items: WorkItem[], measures: Map<string, ImageMeasure>, columnCount: number): PlacedWorkColumn[] {
  const columns: PlacedWorkColumn[] = Array.from({ length: columnCount }, () => ({
    items: [],
    height: 0,
  }));

  items.forEach((item) => {
    const measure = measures.get(item.id) ?? { width: 1, height: 1 };
    const shortestColumn = columns.reduce((shortest, column) => (column.height < shortest.height ? column : shortest), columns[0]);

    shortestColumn.items.push(item);
    shortestColumn.height += measure.height / Math.max(measure.width, 1);
  });

  return columns;
}

function renderGrid(root: HTMLElement, items: WorkItem[], measures: Map<string, ImageMeasure>): void {
  const grid = document.createElement('div');
  const columns = distributeItems(items, measures, getColumnCount(root));

  grid.className = 'cms-works__grid';

  columns.forEach((columnItems) => {
    const column = document.createElement('div');

    column.className = 'cms-works__column';
    columnItems.items.forEach((item) => {
      column.append(createWorkCard(item));
    });
    grid.append(column);
  });

  root.replaceChildren(grid);
  root.classList.add('is-ready');
}

function renderWorks(root: HTMLElement, source: HTMLElement): void {
  const items = sortItems(readItems(source), readSortMode(root), root);
  let animationFrame = 0;
  let previousColumnCount = 0;
  let previousWidth = 0;

  source.hidden = true;
  source.setAttribute('aria-hidden', 'true');
  root.classList.add('cms-works');

  Promise.all(items.map(async (item) => [item.id, await measureImage(item.thumbnail)] as const)).then((entries) => {
    const measures = new Map(entries);

    const rerender = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const nextColumnCount = getColumnCount(root);
        const nextWidth = Math.round(root.getBoundingClientRect().width);

        if (nextColumnCount === previousColumnCount && nextWidth === previousWidth) {
          return;
        }

        previousColumnCount = nextColumnCount;
        previousWidth = nextWidth;
        renderGrid(root, items, measures);
      });
    };

    const resizeObserver = new ResizeObserver(rerender);

    rerender();
    resizeObserver.observe(root);
    window.addEventListener('orientationchange', rerender);
  });
}

function mount(root: HTMLElement): void {
  const source = root.querySelector<HTMLElement>(SOURCE_SELECTOR) ?? document.querySelector<HTMLElement>(SOURCE_SELECTOR);

  if (!source) {
    console.error('CMS Works: Element mit data-cms-works-source wurde nicht gefunden.');
    return;
  }

  renderWorks(root, source);
}

ready(() => {
  const roots = Array.from(document.querySelectorAll<HTMLElement>(ROOT_SELECTOR));

  roots.forEach(mount);
});
