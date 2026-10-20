/* footer: Webflow script */
document.addEventListener('site:modal-open', (event) => {
  const root = event.target;
  if (!(root instanceof HTMLElement) || root.dataset.modalVariant !== 'context') return;
  const id = root.dataset.modalId?.replace(/^canvas-/, '') || '';
  const source = Array.from(document.querySelectorAll('[data-cms-canvas-item]'))
    .find((item) => item.getAttribute('data-canvas-id') === id);
  const rights = source?.getAttribute('data-canvas-modal-rights')?.trim() || '';
  let output = root.querySelector('[data-site-modal-rights]');
  if (!output) {
    output = document.createElement('div');
    output.className = 'fwm-modal__rights';
    output.setAttribute('data-site-modal-rights', '');
    root.querySelector('[data-modal-panel]')?.append(output);
  }
  if (!output) return;
  output.textContent = rights;
  output.hidden = !rights;
});
