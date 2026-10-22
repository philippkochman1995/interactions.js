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

export function setModalPreview(image: HTMLImageElement, original: string, srcset: string | undefined, width: number): void {
  const preview = modalPreviewSource(original, srcset, width);
  image.onerror = preview === original ? null : () => {
    image.onerror = null;
    image.src = original;
  };
  image.src = preview;
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
