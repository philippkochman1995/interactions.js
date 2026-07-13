interface WorkItem {
  id: string;
  title: string;
  thumbnail: string;
  thumbnailAlt: string;
  href: string;
  year: string;
  categories: string[];
  index: number;
}

interface WorkDetail {
  id: string;
  title: string;
  properties: string;
  html: string;
  image: string;
  imageAlt: string;
  caption: string;
  categories: string[];
}

const ROOT_SELECTOR = '[data-cms-work-detail]';
const SOURCE_SELECTOR = '[data-cms-work-related-source], [data-cms-works-source]';
const ITEM_SELECTOR = '[data-cms-works-item], [data-cms-work-related-item], [data-cms-canvas-item]';
const THUMBNAIL_SELECTOR = '[data-works-thumbnail], [data-canvas-thumbnail]';
const TITLE_SELECTOR = '[data-works-title], [data-canvas-title]';
const YEAR_SELECTOR = '[data-works-year], [data-canvas-year]';
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

function htmlFrom(element: HTMLElement, selector: string): string {
  return element.querySelector<HTMLElement>(selector)?.innerHTML.trim() ?? '';
}

function imageFrom(element: HTMLElement, selector: string): HTMLImageElement | null {
  const target = element.querySelector<HTMLElement>(selector);

  if (target instanceof HTMLImageElement) {
    return target;
  }

  return target?.querySelector<HTMLImageElement>('img') ?? element.querySelector<HTMLImageElement>('img');
}

function hashString(value: string): number {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function normalizeList(value: string): string[] {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function readCategories(element: HTMLElement, detailPrefix = false): string[] {
  const raw = detailPrefix
    ? element.getAttribute('data-work-detail-categories') ??
      element.getAttribute('data-work-detail-category') ??
      textFrom(element, '[data-work-detail-categories], [data-work-detail-category]')
    : element.getAttribute('data-works-categories') ??
      element.getAttribute('data-works-category') ??
      textFrom(element, CATEGORY_SELECTOR);

  return normalizeList(raw);
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
  const thumbnailElement = imageFrom(element, THUMBNAIL_SELECTOR);
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
    categories: readCategories(element),
    index,
  };
}

function readItems(source: HTMLElement): WorkItem[] {
  return Array.from(source.querySelectorAll<HTMLElement>(ITEM_SELECTOR))
    .map(readItem)
    .filter((item): item is WorkItem => item !== null);
}

function formatYear(value: string): string {
  const trimmedValue = value.trim();

  return trimmedValue.startsWith('[') && trimmedValue.endsWith(']') ? trimmedValue : `[${trimmedValue}]`;
}

function readDetail(root: HTMLElement): WorkDetail {
  const imageElement = imageFrom(root, '[data-work-detail-image]');
  const title = textFrom(root, '[data-work-detail-title]') || root.getAttribute('data-work-detail-title')?.trim() || '';
  const image = imageElement?.currentSrc || imageElement?.src || '';
  const rawImageAlt = imageElement?.alt.trim() || '';
  const imageAlt = rawImageAlt || title;

  return {
    id:
      root.getAttribute('data-work-detail-id')?.trim() ||
      textFrom(root, '[data-work-detail-id]') ||
      `current-work-${hashString(`${title}-${image}`)}`,
    title,
    properties: htmlFrom(root, '[data-work-detail-properties]'),
    html: htmlFrom(root, '[data-work-detail-text]'),
    image,
    imageAlt,
    caption: rawImageAlt || textFrom(root, '[data-work-detail-caption]'),
    categories: readCategories(root, true),
  };
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
    card.classList.add('cms-works__item--clickable');
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
    year.textContent = formatYear(item.year);
    label.append(year);
  }

  meta.append(label, createEyeIcon());
  card.append(imageWrap, meta);

  return card;
}

function pickRelatedItems(items: WorkItem[], detail: WorkDetail): WorkItem[] {
  const currentCategories = new Set(detail.categories);

  if (currentCategories.size === 0) {
    return items.filter((item) => item.id !== detail.id).slice(0, 4);
  }

  return items
    .filter((item) => item.id !== detail.id && item.categories.some((category) => currentCategories.has(category)))
    .slice(0, 4);
}

function createDetailSection(detail: WorkDetail): HTMLElement {
  const section = document.createElement('section');
  const intro = document.createElement('div');
  const content = document.createElement('div');
  const title = document.createElement('h1');
  const properties = document.createElement('div');
  const text = document.createElement('div');
  const figure = document.createElement('figure');
  const image = document.createElement('img');
  const caption = document.createElement('figcaption');

  section.className = 'cms-work-detail__hero';
  intro.className = 'cms-work-detail__intro';
  content.className = 'cms-work-detail__content';
  title.className = 'cms-work-detail__title';
  properties.className = 'cms-work-detail__properties';
  text.className = 'cms-work-detail__text';
  figure.className = 'cms-work-detail__figure';
  image.className = 'cms-work-detail__image';
  caption.className = 'cms-work-detail__caption';

  title.textContent = detail.title;
  properties.innerHTML = detail.properties;
  text.innerHTML = detail.html;
  image.src = detail.image;
  image.alt = detail.imageAlt;
  image.decoding = 'async';
  caption.textContent = detail.caption;

  content.append(title);

  if (detail.properties) {
    content.append(properties);
  }

  if (detail.html) {
    content.append(text);
  }

  if (detail.image) {
    figure.append(image);

    if (detail.caption) {
      figure.append(caption);
    }
  }

  intro.append(content, figure);
  section.append(intro);

  return section;
}

function createRelatedSection(root: HTMLElement, relatedItems: WorkItem[]): HTMLElement | null {
  const overviewHref = root.getAttribute('data-work-detail-overview-href')?.trim() || '';

  if (relatedItems.length === 0 && !overviewHref) {
    return null;
  }

  const section = document.createElement('section');
  const inner = document.createElement('div');
  const heading = document.createElement('h2');
  const grid = document.createElement('div');

  section.className = 'cms-work-detail cms-work-detail__related';
  inner.className = 'cms-work-detail__related-inner';
  heading.className = 'cms-work-detail__related-heading';
  heading.textContent = root.getAttribute('data-work-detail-related-label')?.trim() || 'Ähnliche Werke';
  grid.className = 'cms-work-detail__related-grid';

  relatedItems.forEach((item) => {
    grid.append(createWorkCard(item));
  });

  inner.append(heading, grid);

  if (overviewHref) {
    const overviewLink = document.createElement('a');

    overviewLink.className = 'cms-work-detail__overview-link';
    overviewLink.href = overviewHref;
    overviewLink.textContent = root.getAttribute('data-work-detail-overview-label')?.trim() || 'Zur Übersicht';
    inner.append(overviewLink);
  }

  section.append(inner);

  return section;
}

function renderDetail(root: HTMLElement, source: HTMLElement | null): void {
  const detail = readDetail(root);
  const relatedItems = source ? pickRelatedItems(readItems(source), detail) : [];
  const detailSection = createDetailSection(detail);
  const relatedSection = createRelatedSection(root, relatedItems);

  if (source) {
    source.hidden = true;
    source.setAttribute('aria-hidden', 'true');
  }

  root.classList.add('cms-work-detail');
  root.replaceChildren(detailSection);

  if (relatedSection) {
    root.after(relatedSection);
  }
}

function mount(root: HTMLElement): void {
  const source =
    root.querySelector<HTMLElement>(SOURCE_SELECTOR) ??
    document.querySelector<HTMLElement>(root.getAttribute('data-work-detail-source') || SOURCE_SELECTOR);

  renderDetail(root, source);
}

ready(() => {
  const roots = Array.from(document.querySelectorAll<HTMLElement>(ROOT_SELECTOR));

  roots.forEach(mount);
});
