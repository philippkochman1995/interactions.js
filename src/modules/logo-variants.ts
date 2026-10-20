const selector = '.top_bar_center .nav_logo_link, .top_bar_center .nav_logo_image_link';
const assetBase = 'https://cdn.prod.website-files.com/69b3f9edfc3e8e944fc06836/';
const variants = [
  '6ab93c11c0209913a6f4ab46_West-Signatur-Variant2.svg',
  '6ab93c11630b54996257245a_West-Signatur-Variant3.svg',
  '6ab93c12f66f79789e902f77_West-Signatur-Variant4.svg',
  '6ab93c1232f656f444927b94_West-Signatur-Variant8.svg',
  '6ad72a88caefffd11ac57818_Variant9.svg',
].map((filename) => assetBase + filename);
const storageKey = 'fw-signature-last-variant';
let initialized = false;

function chooseVariant(): number {
  let previous = -1;
  try {
    const stored = window.sessionStorage.getItem(storageKey);
    if (stored !== null) previous = Number(stored);
  } catch { /* Storage may be disabled. */ }
  if (!Number.isInteger(previous) || previous < 0 || previous > variants.length) previous = -1;
  let choice = Math.floor(Math.random() * (previous < 0 ? variants.length + 1 : variants.length));
  if (previous >= 0 && choice >= previous) choice++;
  try { window.sessionStorage.setItem(storageKey, String(choice)); } catch { /* Storage may be disabled. */ }
  return choice;
}

/** Rotate the five legible signatures and the original logo across page views. */
export function initLogoVariants(): void {
  if (initialized) return;
  initialized = true;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const known = new WeakSet<HTMLElement>();
  const states: Array<{ link: HTMLElement; reset: () => void }> = [];
  let active = chooseVariant();

  function setup(link: HTMLElement): void {
    if (known.has(link)) return;
    const original = link.querySelector<SVGElement | HTMLImageElement>('svg, img.nav_logo');
    if (!original) return;
    known.add(link);
    let overlay = link.querySelector<HTMLElement>('[data-logo-variant]');
    if (!overlay) {
      overlay = document.createElement('span');
      overlay.setAttribute('data-logo-variant', '');
      overlay.setAttribute('aria-hidden', 'true');
      link.appendChild(overlay);
    }
    const layer = overlay;
    if (getComputedStyle(link).position === 'static') link.style.position = 'relative';
    const originalVisibility = original.style.visibility;
    let timer: number | null = null;
    let hovering = false;

    function render(index: number): void {
      if (index === 0) {
        layer.style.display = 'none';
        original!.style.visibility = originalVisibility;
        return;
      }
      const mask = `url("${variants[index - 1]}")`;
      layer.style.height = '100%';
      layer.style.maskImage = mask;
      layer.style.setProperty('-webkit-mask-image', mask);
      layer.style.color = getComputedStyle(original!).color;
      layer.style.display = 'block';
      original!.style.visibility = 'hidden';
    }
    function reset(): void {
      if (timer !== null) window.clearInterval(timer);
      timer = null;
      render(active);
    }
    link.addEventListener('pointerenter', (event) => {
      event.stopImmediatePropagation();
      if (hovering || reducedMotion.matches) return;
      hovering = true;
      reset();
      const order = Array.from({ length: variants.length + 1 }, (_, index) => index)
        .filter((index) => index !== active);
      order.push(active);
      let frame = 0;
      timer = window.setInterval(() => {
        render(order[frame++]);
        if (frame === order.length) {
          window.clearInterval(timer!);
          timer = null;
        }
      }, 210);
    }, true);
    link.addEventListener('pointerleave', (event) => {
      event.stopImmediatePropagation();
      if (event.relatedTarget instanceof Node && link.contains(event.relatedTarget)) return;
      hovering = false;
      reset();
    }, true);
    link.addEventListener('blur', (event) => {
      event.stopImmediatePropagation();
      hovering = false;
      reset();
    }, true);
    states.push({ link, reset });
    render(active);
  }

  function scan(root: ParentNode): void {
    if (root instanceof HTMLElement && root.matches(selector)) setup(root);
    root.querySelectorAll<HTMLElement>(selector).forEach(setup);
  }
  scan(document);
  new MutationObserver((records) => {
    records.forEach((record) => record.addedNodes.forEach((node) => {
      if (node instanceof HTMLElement) scan(node);
    }));
  }).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('pageshow', (event) => {
    if (!event.persisted) return;
    active = chooseVariant();
    states.forEach((state) => { if (state.link.isConnected) state.reset(); });
  });
  variants.forEach((url) => { const image = new Image(); image.src = url; });
}
