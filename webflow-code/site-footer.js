/* footer: Webflow script */
(function () {
  function markExternalLinks() {
    document.querySelectorAll('a[href]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) === '#' || /^(mailto:|tel:|javascript:)/i.test(href)) return;

      try {
        var url = new URL(link.href, window.location.href);
        if (url.origin !== window.location.origin) {
          link.target = '_blank';
          link.rel = (link.rel + ' noopener noreferrer').trim().split(/\s+/).filter(function (value, index, values) {
            return values.indexOf(value) === index;
          }).join(' ');
        }
      } catch (error) {}
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', markExternalLinks);
  } else {
    markExternalLinks();
  }

  new MutationObserver(markExternalLinks).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();

/* footer: fw-content-modal-mobile-sheet */
(function () {
  if (window.__fwContentModalScrollReset) return;
  window.__fwContentModalScrollReset = true;
  document.addEventListener('site:modal-close', function (event) {
    var modal = event.target;
    if (!(modal instanceof HTMLElement) ||
        !modal.classList.contains('fwm-modal') ||
        modal.dataset.modalId === 'west-map-detail') return;
    window.setTimeout(function () {
      if (!modal.classList.contains('is-visible')) modal.scrollTop = 0;
    }, 470);
  });
})();
