/* Use the generous footer spacing only when the complete menu fits. */
(() => {
  const ROOM_CLASS = 'has-footer-room';

  function updateMenu(menu) {
    const panel = menu.querySelector('[data-site-menu-panel]');
    const content = menu.querySelector('.site-menu__content');
    const footer = menu.querySelector('.site-menu__footer-links');
    const toggle = menu.querySelector('[data-site-menu-toggle]');
    if (!panel || !content || !footer || !toggle) return;

    menu.classList.add(ROOM_CLASS);

    const maxHeight = parseFloat(getComputedStyle(panel).maxHeight);
    const footerMarginBottom = parseFloat(getComputedStyle(footer).marginBottom) || 0;
    const contentPaddingBottom = parseFloat(getComputedStyle(content).paddingBottom) || 0;
    const contentHeight = footer.getBoundingClientRect().bottom
      - content.getBoundingClientRect().top
      + content.scrollTop
      + footerMarginBottom
      + contentPaddingBottom;
    const requiredHeight = contentHeight + toggle.getBoundingClientRect().height;

    menu.classList.toggle(ROOM_CLASS, Number.isFinite(maxHeight) && requiredHeight <= maxHeight - 1);
  }

  function init() {
    const menus = document.querySelectorAll('[data-site-menu]');
    const update = () => menus.forEach(updateMenu);

    update();
    window.addEventListener('resize', update, { passive: true });
    document.fonts?.ready.then(update);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
