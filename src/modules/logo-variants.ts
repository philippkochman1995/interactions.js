const assetBase = 'https://cdn.prod.website-files.com/69b3f9edfc3e8e944fc06836/';
const variants = [
  '6ab93c11c0209913a6f4ab46_West-Signatur-Variant2.svg',
  '6ab93c11630b54996257245a_West-Signatur-Variant3.svg',
  '6ab93c12f66f79789e902f77_West-Signatur-Variant4.svg',
  '6ab93c127b1c73994a56f043_West-Signatur-Variant5.svg',
  '6ab93c12f66f79789e902fc4_West-Signatur-Variant7.svg',
  '6ab93c1232f656f444927b94_West-Signatur-Variant8.svg',
].map((filename) => assetBase + filename);

/** One pass through the signature variants on hover, inheriting the logo colour. */
export function initLogoVariants(): void {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll<HTMLElement>('.top_bar_center .nav_logo_link, .top_bar_center .nav_logo_image_link').forEach((link) => {
    const original = link.querySelector<SVGElement | HTMLImageElement>('svg, img.nav_logo');
    if (!original || link.querySelector('[data-logo-variant]')) return;

    const overlay = document.createElement('span');
    overlay.setAttribute('data-logo-variant', '');
    overlay.setAttribute('aria-hidden', 'true');
    if (getComputedStyle(link).position === 'static') link.style.position = 'relative';
    link.appendChild(overlay);
    const originalVisibility = original.style.visibility;
    let timer: number | null = null;
    let index = 0;

    function reset(): void {
      if (timer !== null) window.clearInterval(timer);
      timer = null;
      overlay.style.display = 'none';
      original!.style.visibility = originalVisibility;
    }

    function showNext(): void {
      if (index >= variants.length) {
        reset();
        return;
      }
      const variantIndex = index++;
      const mask = `url("${variants[variantIndex]}")`;
      overlay.style.height = variantIndex === 4 ? '240%' : '100%';
      overlay.style.maskImage = mask;
      overlay.style.setProperty('-webkit-mask-image', mask);
      overlay.style.color = getComputedStyle(original!).color;
      overlay.style.display = 'block';
      original!.style.visibility = 'hidden';
    }

    link.addEventListener('pointerenter', () => {
      if (reducedMotion.matches) return;
      reset();
      index = 0;
      showNext();
      timer = window.setInterval(showNext, 250);
    });
    link.addEventListener('pointerleave', reset);
    link.addEventListener('blur', reset);
  });
  variants.forEach((url) => { const preload = new Image(); preload.src = url; });
}
