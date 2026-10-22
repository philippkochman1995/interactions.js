/** Read CMS images without turning empty Webflow fields into lightbox entries. */
export function getCmsImageSource(image: HTMLImageElement | null): string {
  if (!image || image.closest('.w-dyn-bind-empty, .w-condition-invisible')) {
    return '';
  }

  const src = image.getAttribute('src')?.trim() ?? '';
  const srcset = image.getAttribute('srcset')?.trim() ?? '';

  // An empty src property can resolve to the page URL. Check the attributes first.
  if ((!src && !srcset) || src.includes('/plugins/Basic/assets/placeholder.')) {
    return '';
  }

  const resolved = image.currentSrc || (src ? image.src : '');
  return resolved.includes('/plugins/Basic/assets/placeholder.') ? '' : resolved;
}

/** Keep the original for the lightbox even when the browser selected a smaller srcset candidate. */
export function getCmsImageOriginalSource(image: HTMLImageElement | null): string {
  if (!image || image.closest('.w-dyn-bind-empty, .w-condition-invisible')) return '';
  const src = image.getAttribute('src')?.trim() ?? '';
  if (src.includes('/plugins/Basic/assets/placeholder.')) return '';
  return src ? image.src : getCmsImageSource(image);
}
