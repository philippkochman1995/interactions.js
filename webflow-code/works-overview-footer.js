/* footer: fw-work-overlay-layer-and-button */
(function () {
  var targetUrl = '/werk-ueberblick#werke';

  function enhanceOverviewLink(link) {
    link.href = targetUrl;
    link.setAttribute('data-transition', 'false');
    link.classList.add('button-outlined');
    if (link.querySelector('.button-mask')) return;

    var label = link.textContent.trim() || 'Zur Übersicht';
    var mask = document.createElement('span');
    var text = document.createElement('span');
    var arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    mask.className = 'button-mask';
    mask.setAttribute('aria-hidden', 'true');
    text.className = 'button-text';
    text.textContent = label;
    arrow.classList.add('arrow');
    arrow.setAttribute('viewBox', '0 0 17 15');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.innerHTML = '<path class="arrow-dot" d="M3.60046 5.7002H0V9.3002H3.60046V5.7002Z" fill="currentColor"/><path class="arrow-arrow" d="M11.9979 6.75425L5.22647 0L3.11328 2.11291L8.31525 7.2967V7.7033L3.11328 12.8871L5.22647 15L11.9979 8.24575C11.9982 7.95455 11.9982 7.04545 11.9979 6.75425Z" fill="currentColor"/>';
    link.replaceChildren(mask, text, arrow);
  }

  function update() {
    var overlay = document.querySelector('[data-work-overlay]');
    if (!overlay) return;
    document.querySelectorAll('body > .work-overlay__flyer').forEach(function (flyer) {
      overlay.appendChild(flyer);
    });
    overlay.querySelectorAll('a.cms-work-detail__overview-link').forEach(enhanceOverviewLink);
  }

  new MutationObserver(update).observe(document.body, { childList: true, subtree: true });
  update();
})();

/* footer: fw-works-overview-fade */
(function () {
  var root = document.documentElement;
  var url = '/werk-ueberblick#werke';
  var duration = 320;
  var navigating = false;
  function showOverview() {
    var section = document.getElementById('werke');
    if (section) section.scrollIntoView({ behavior: 'auto', block: 'start' });
    root.classList.add('fw-works-fade-in');
    requestAnimationFrame(function () {
      root.classList.remove('fw-works-fade-entry');
      window.setTimeout(function () { root.classList.remove('fw-works-fade-in'); }, duration + 50);
    });
  }
  if (root.classList.contains('fw-works-fade-entry')) {
    if (document.readyState === 'complete') showOverview();
    else window.addEventListener('load', showOverview, { once: true });
  }
  document.addEventListener('click', function (event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    var target = event.target;
    if (!(target instanceof Element)) return;
    var link = target.closest('a.cms-work-detail__overview-link');
    if (!link || !link.closest('[data-work-overlay]')) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (navigating) return;
    navigating = true;
    try { sessionStorage.setItem('fw-works-overview-fade', 'pending'); } catch (error) {}
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.location.assign(url);
      return;
    }
    root.classList.add('fw-works-fade-out');
    window.setTimeout(function () { window.location.assign(url); }, duration);
  }, true);
})();

/* footer: fw-works-filter-reset */
(function () {
  function install() {
    var section = document.querySelector('.cms-works-filter');
    var left = section && section.querySelector('.cms-works-filter__bar-left');
    var label = left && left.querySelector('.cms-works-filter__label');
    if (!section || !left || !label || left.querySelector('.cms-works-filter__reset')) return !!left;
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'cms-works-filter__reset';
    button.textContent = 'Filter zurücksetzen';
    button.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      var bar = section.querySelector('.cms-works-filter__bar');
      if (!section.classList.contains('is-open') && bar) bar.click();
      section.querySelectorAll('.cms-works-filter__pill.is-active').forEach(function (pill) { pill.click(); });
      var apply = section.querySelector('.cms-works-filter__apply');
      if (apply) apply.click();
    });
    label.insertAdjacentElement('afterend', button);
    return true;
  }
  if (!install()) {
    var observer = new MutationObserver(function () { if (install()) observer.disconnect(); });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
