const BUTTON_SELECTOR = '.btn, .button-outlined';

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
