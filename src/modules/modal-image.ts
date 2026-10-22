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
