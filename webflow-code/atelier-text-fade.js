/* Three fade-up tiers per Atelier text block; no splitting or text replacement. */
(function () {
  if (!/^\/atelier\/?$/i.test(window.location.pathname)) return;

  var GROUP = '[data-fade-group]';
  var seen = new WeakSet();
  var pending = new WeakSet();
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var observer = null;
  var mutations = null;
  var scheduled = false;

  function tier(element) {
    if (element.matches('a, button, .atelier_button_wrap') ||
        element.querySelector(':scope > a, :scope > button')) return 2;
    if (element.matches('h1, h2, h3, h4, h5, h6, .u-text-eyebrow, .atlier_slide_eyebrow')) return 0;
    return 1;
  }

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
    var group = element.closest(GROUP);
    if (!group || element.classList.contains('is-in') || pending.has(element)) return;
    var level = tier(element);
    var peers = Array.from(group.querySelectorAll('[data-fade]')).filter(function (peer) {
      return tier(peer) === level && !peer.classList.contains('is-in');
    });
    peers.forEach(function (peer) {
      pending.add(peer);
      if (observer) observer.unobserve(peer);
    });
    afterPageEntrance(function () {
      if (!/^\/atelier\/?$/i.test(window.location.pathname)) return;
      peers.forEach(function (peer) {
        if (peer.isConnected) peer.classList.add('is-in');
      });
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
      group.querySelectorAll('[data-fade]').forEach(function (element) {
        if (seen.has(element)) return;
        seen.add(element);
        element.style.setProperty('--fade-index', tier(element));
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
