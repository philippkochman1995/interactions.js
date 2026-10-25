import { chooseNextPageSignatureVariant, getPageSignatureVariant, SIGNATURE_FRAME_MS, SIGNATURE_VARIANTS, signatureSequence } from './signature-variants';

const selector = '.top_bar_center .nav_logo_link, .top_bar_center .nav_logo_image_link';
let initialized = false;

/** Rotate the signature variants and the original logo across page views. */
export function initLogoVariants(): void {
  if (initialized) return;
  initialized = true;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const known = new WeakSet<HTMLElement>();
  const states: Array<{ link: HTMLElement; reset: () => void }> = [];
  let active = getPageSignatureVariant();

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
      const mask = `url("${SIGNATURE_VARIANTS[index - 1]}")`;
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
      if (hovering || reducedMotion.matches || window.location.pathname === '/') return;
      hovering = true;
      reset();
      const order = signatureSequence(active);
      let frame = 0;
      timer = window.setInterval(() => {
        render(order[frame++]);
        if (frame === order.length) {
          window.clearInterval(timer!);
          timer = null;
        }
      }, SIGNATURE_FRAME_MS);
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
    active = chooseNextPageSignatureVariant();
    states.forEach((state) => { if (state.link.isConnected) state.reset(); });
  });
  SIGNATURE_VARIANTS.forEach((url) => { const image = new Image(); image.src = url; });
}
