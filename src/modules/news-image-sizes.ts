/** Correct Webflow's intrinsic-width sizes value before lazy images load. */
export function optimizeNewsImageSizes(): void {
  if (!/^\/news\/?$/.test(window.location?.pathname || '')) return;

  const update = (): void => {
    for (const image of document.querySelectorAll<HTMLImageElement>('img.intro_img[sizes*="6001px"]')) {
      const slot = image.closest('.news_img') ? '70vw' : image.closest('.news_event') ? '35vw' : null;
      if (slot) image.sizes = `(max-width: 991px) 100vw, ${slot}`;
    }
  };
  const observer = new MutationObserver(update);
  observer.observe(document, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', () => {
    update();
    observer.disconnect();
  }, { once: true });
}
