const BUTTON_SELECTOR = '.btn, .button-outlined';

function darkSurface(button: HTMLElement): boolean {
  for (let element = button.parentElement; element; element = element.parentElement) {
    const values = getComputedStyle(element).backgroundColor.match(/[\d.]+/g);
    if (!values || values.length < 3 || Number(values[3] ?? 1) < 0.9) continue;
    const channels = values.slice(0, 3).map((value) => {
      const component = Number(value) / 255;
      return component <= 0.04045 ? component / 12.92 : ((component + 0.055) / 1.055) ** 2.4;
    });
    return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722 < 0.25;
  }
  return false;
}

export function initOutlinedButtons(): void {
  const initialized = new WeakSet<HTMLElement>();

  function prepare(button: HTMLElement): void {
    if (initialized.has(button)) return;
    initialized.add(button);

    if (!button.querySelector(':scope > .f, :scope > .button-mask')) {
      const fill = document.createElement('i');
      fill.className = 'f';
      fill.setAttribute('aria-hidden', 'true');
      button.prepend(fill);
    }
    for (const node of Array.from(button.childNodes)) {
      if (node.nodeType !== Node.TEXT_NODE || !node.textContent?.trim()) continue;
      const label = document.createElement('span');
      node.replaceWith(label);
      label.append(node);
    }
    if (!button.hasAttribute('data-button-surface') && darkSurface(button)) {
      button.dataset.buttonSurface = 'dark';
    }
  }

  function prepareTree(root: ParentNode): void {
    if (root instanceof HTMLElement && root.matches(BUTTON_SELECTOR)) prepare(root);
    root.querySelectorAll<HTMLElement>(BUTTON_SELECTOR).forEach(prepare);
  }

  prepareTree(document);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node instanceof HTMLElement) prepareTree(node);
      }
    }
  }).observe(document.documentElement, { childList: true, subtree: true });
}
