/* Individual fade-up for existing Atelier text; no splitting or text replacement. */
(function () {
  if (!/^\/atelier\/?$/i.test(window.location.pathname)) return;

  var GROUP = '[data-fade-group]';
  var seen = new WeakSet();
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var observer = null;
  var mutations = null;
  var scheduled = false;

  function afterPageEntrance(callback) {
    var root = document.documentElement;
    function isCovered() {
      if (root.classList.contains('is-site-preloading') ||
          root.classList.contains('is-site-preloader-exiting')) return true;
      var transitioning = root.classList.contains('is-page-transition-pending') ||
        root.classList.contains('is-page-transition-entering');
      return transitioning && !document.querySelector('.page-transition-overlay.is-uncovering');
    }
    function start() { requestAnimationFrame(callback); }
    if (!isCovered()) { start(); return; }
    var transitionObserver = new MutationObserver(function () {
      if (isCovered()) return;
      transitionObserver.disconnect();
      start();
    });
    transitionObserver.observe(root, { attributes: true, attributeFilter: ['class'], subtree: true });
  }

  function revealHeaderWithSubhead() {
    var header = document.querySelector('.top_bar_section:not(.work-overlay__header)');
    if (!header || header.classList.contains('is-atelier-header-in')) return;
    if (reduced.matches) { header.classList.add('is-atelier-header-in'); return; }
    var subhead = document.querySelector('.atelier_hero_section .atlier_slide_eyebrow');
    var subheadObserver = null;
    function start() {
      if (subheadObserver) subheadObserver.disconnect();
      if (header.isConnected) header.classList.add('is-atelier-header-in');
    }
    if (!subhead) { afterPageEntrance(start); return; }
    function hasStarted() {
      return subhead.classList.contains('is-masked-reveal-playing') ||
        subhead.hasAttribute('data-masked-reveal-complete');
    }
    if (hasStarted()) { start(); return; }
    subheadObserver = new MutationObserver(function () {
      if (hasStarted()) start();
    });
    subheadObserver.observe(subhead, { attributes: true, attributeFilter: ['class', 'data-masked-reveal-complete'] });
  }

  function enter(element) {
    if (element.classList.contains('is-in')) return;
    if (observer) observer.unobserve(element);
    afterPageEntrance(function () {
      if (element.isConnected && /^\/atelier\/?$/i.test(window.location.pathname)) {
        element.classList.add('is-in');
      }
    });
  }

  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) enter(entry.target);
      });
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0 });
  }

  function scan() {
    scheduled = false;
    if (!/^\/atelier\/?$/i.test(window.location.pathname)) return;
    document.querySelectorAll(GROUP).forEach(function (group) {
      group.querySelectorAll('div[data-fade]').forEach(function (wrapper) {
        var children = wrapper.children;
        if (children.length === 1 && children[0].matches('.w-richtext')) {
          children = children[0].children;
        }
        var blocks = Array.from(children).filter(function (child) {
          return child.matches('p, h2, h3, h4, ul, ol, blockquote');
        });
        if (!blocks.length) return;
        if (!wrapper.hasAttribute('data-fade-richtext')) wrapper.setAttribute('data-fade-richtext', '');
        blocks.forEach(function (block) {
          if (!block.hasAttribute('data-fade')) block.setAttribute('data-fade', '');
        });
      });
      group.querySelectorAll('[data-fade]:not([data-fade-richtext])').forEach(function (element, index) {
        if (seen.has(element)) return;
        seen.add(element);
        element.style.setProperty('--fade-index', index);
        if (element.classList.contains('is-in')) return;
        if (reduced.matches || !observer) element.classList.add('is-in');
        else observer.observe(element);
      });
    });
  }

  function scheduleScan() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(scan);
  }

  scan();
  revealHeaderWithSubhead();
  mutations = new MutationObserver(scheduleScan);
  mutations.observe(document.body, { childList: true, subtree: true });
  window.addEventListener('pageshow', scheduleScan);
  window.addEventListener('popstate', scheduleScan);
  window.addEventListener('pagehide', function () {
    if (observer) observer.disconnect();
    if (mutations) mutations.disconnect();
  }, { once: true });
})();
