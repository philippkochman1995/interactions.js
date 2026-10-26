/** Pick an existing Webflow rendition for a modal preview; keep the original URL for the lightbox. */
export function modalPreviewSource(original: string, srcset: string | undefined, width: number): string {
  const candidates = (srcset ?? '').split(',')
    .map((entry) => entry.trim().match(/^(\S+)\s+(\d+)w$/))
    .filter((entry): entry is RegExpMatchArray => Boolean(entry))
    .map((entry) => ({ url: entry[1], width: Number(entry[2]) }))
    .sort((a, b) => a.width - b.width);
  const selected = candidates.find((entry) => entry.width >= width) ?? candidates[candidates.length - 1];
  if (selected) return selected.url;

  // CMS items passed by URL alone still have Webflow's standard renditions.
  // Limit the inferred path to Webflow-hosted raster images.
  try {
    const url = new URL(original, document.baseURI);
    if (!/^(cdn\.prod\.website-files\.com|uploads-ssl\.webflow\.com)$/.test(url.hostname)) return original;
    if (!/\.(jpe?g|png|webp)$/i.test(url.pathname) || /-p-\d+\.[^.]+$/i.test(url.pathname)) return original;
    url.pathname = url.pathname.replace(/\.(jpe?g|png|webp)$/i, `-p-${width}.$1`);
    return url.href;
  } catch {
    return original;
  }
}

const preparedImages = new Map<string, Promise<string>>();
const readyImages = new Map<string, string>();

function imageKey(preview: string, original: string): string {
  return `${preview}\n${original}`;
}

function loadAndDecode(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    const image = new Image();
    image.loading = 'eager';
    image.onload = () => {
      if (typeof image.decode === 'function') image.decode().then(() => resolve(true), () => resolve(false));
      else resolve(true);
    };
    image.onerror = () => resolve(false);
    image.src = src;
  });
}

/** Fetch and decode before a modal starts revealing its content. */
export function prepareModalImage(preview: string, original: string): Promise<string> {
  const key = imageKey(preview, original);
  const existing = preparedImages.get(key);
  if (existing) return existing;

  const prepared = (async () => {
    const source = await loadAndDecode(preview) ? preview : original;
    if (source !== preview) await loadAndDecode(original);
    readyImages.set(key, source);
    return source;
  })();
  preparedImages.set(key, prepared);
  return prepared;
}

export function readyModalImageSource(preview: string, original: string): string {
  return readyImages.get(imageKey(preview, original)) ?? preview;
}

const imageVersions = new WeakMap<HTMLImageElement, number>();

/** Keep old pixels invisible while a new source loads, then fade in the decoded image. */
export function revealModalImage(image: HTMLImageElement, source?: string, fallback?: string): void {
  const version = (imageVersions.get(image) ?? 0) + 1;
  imageVersions.set(image, version);
  image.classList.add('is-image-pending');
  image.loading = 'eager';
  image.decoding = 'async';

  const reveal = (): void => {
    const decoded = typeof image.decode === 'function' ? image.decode().catch(() => undefined) : Promise.resolve();
    void decoded.then(() => {
      if (imageVersions.get(image) === version && image.naturalWidth > 0) {
        image.classList.remove('is-image-pending');
      }
    });
  };

  image.onload = reveal;
  image.onerror = () => {
    if (imageVersions.get(image) !== version || !fallback) return;
    const next = fallback;
    fallback = undefined;
    image.src = next;
  };
  if (source !== undefined) image.src = source;
  if (image.complete && image.naturalWidth > 0 && image.currentSrc === image.src) reveal();
}

export function clearModalImage(image: HTMLImageElement): void {
  imageVersions.set(image, (imageVersions.get(image) ?? 0) + 1);
  image.onload = null;
  image.onerror = null;
  image.classList.remove('is-image-pending');
  image.removeAttribute('src');
}

export function setModalPreview(image: HTMLImageElement, original: string, srcset: string | undefined, width: number): void {
  const preview = readyModalImageSource(modalPreviewSource(original, srcset, width), original);
  revealModalImage(image, preview, preview === original ? undefined : original);
}

// Webflow does not provide responsive candidates for these AVIF CMS images.
// The exact resized copies live with the bundle so the modal never requests
// their 2000px originals just to show a small work card.
const MODAL_WORK_THUMBNAIL_IDS = new Set([
  '6a7db30517820876cd23f469',
  '6a7db3187795b95db7804762',
  '6a7db33f5031a1007e109876',
  '6a7db3495031a1007e10a89e',
  '6a7db34bd247654adf43324d',
]);

export function modalWorkThumbnailSource(original: string, srcset?: string): string {
  const id = original.match(/\/([0-9a-f]{24})_/i)?.[1]?.toLowerCase();
  if (id && MODAL_WORK_THUMBNAIL_IDS.has(id)) {
    return new URL('../assets/modal-work-thumbnails/' + id + '.webp', import.meta.url).href;
  }
  return modalPreviewSource(original, srcset, 500);
}
