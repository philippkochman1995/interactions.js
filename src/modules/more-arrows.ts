const ARROW_PATHS = `
  <path data-more-arrow-dot d="M55.2685 54.5264H53.5352V58.4737H55.2685V54.5264Z" fill="currentColor"/>
  <path data-more-arrow-head d="M56.9961 55.7542L49.6604 49L47.3711 51.1129L53.0066 56.2967V56.7033L47.3711 61.8871L49.6604 64L56.9961 57.2458C56.9965 56.9546 56.9965 56.0454 56.9961 55.7542Z" fill="currentColor"/>
`;

function updateMoreLink(link: Element): void {
  // The Webflow label can contain a nested text block and arbitrary whitespace.
  if (!/^mehr\s+erfahren$/i.test(link.textContent?.trim() ?? '')) return;

  let arrow = link.querySelector<SVGSVGElement>('svg.arrow');
  if (arrow?.hasAttribute('data-more-arrow')) return;

  if (!arrow) {
    arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    arrow.classList.add('arrow');
    link.appendChild(arrow);
  }

  // Keep Webflow's icon height. The wider viewBox contains both the expanded
  // shaft and the tip at its furthest hover position.
  arrow.classList.add('more-arrow');
  arrow.setAttribute('data-more-arrow', '');
  arrow.setAttribute('viewBox', '40 49 19 15');
  arrow.setAttribute('aria-hidden', 'true');
  arrow.setAttribute('focusable', 'false');
  arrow.innerHTML = ARROW_PATHS;
}

function updateLinks(root: Element | Document): void {
  if (root instanceof Element && root.matches('a, button, [role="button"]')) {
    updateMoreLink(root);
  }
  root.querySelectorAll('a, button, [role="button"]').forEach(updateMoreLink);
}

export function initMoreArrows(): void {
  updateLinks(document);

  // CMS cards and modal content may be inserted after the first page render.
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node instanceof Element) updateLinks(node);
      }
    }
  }).observe(document.body, { childList: true, subtree: true });
}
