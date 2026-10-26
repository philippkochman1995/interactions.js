/* Grouped fade-up for existing Atelier text; no splitting or text replacement. */
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

  function enter(group) {
    if (group.classList.contains('is-in')) return;
    if (observer) observer.unobserve(group);
    afterPageEntrance(function () {
      if (group.isConnected && /^\/atelier\/?$/i.test(window.location.pathname)) {
        group.classList.add('is-in');
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
      if (seen.has(group)) return;
      seen.add(group);
      group.querySelectorAll('[data-fade]').forEach(function (element, index) {
        element.style.setProperty('--fade-index', index);
      });
      if (group.classList.contains('is-in')) return;
      if (reduced.matches || !observer) group.classList.add('is-in');
      else observer.observe(group);
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
