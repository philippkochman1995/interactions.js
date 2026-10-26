/* Atelier images: one viewport reveal; hover motion stays on cards only. */
(function () {
  var PAGE = /^\/atelier\/?$/i;
  var CARD = 'data-atelier-image-card';
  var MASK = 'data-atelier-image-mask';
  var ZOOM = 'data-atelier-image-zoom';
  var HERO = 'data-atelier-hero-image-reveal';
  var pending = new WeakSet();
  var observer = null;
  var mutationObserver = null;
  var scheduled = false;

  if (!PAGE.test(window.location.pathname)) return;
  document.body.setAttribute('data-atelier-image-page', '');

  function reveal(target) {
    if (!target.isConnected || target.classList.contains('in') || pending.has(target)) return;
    var image = target instanceof HTMLImageElement ? target : target.querySelector('img');
    if (!image) return;
    pending.add(target);

    function finish() {
      pending.delete(target);
      if (!target.isConnected || !image.naturalWidth) return;
      target.classList.add('in');
      if (observer) observer.unobserve(target);
    }

    if (image.complete) {
      if (image.naturalWidth && image.decode) {
        image.decode().then(finish, finish);
      } else {
        finish();
      }
    } else {
      image.addEventListener('load', function () {
        if (image.decode) image.decode().then(finish, finish);
        else finish();
      }, { once: true });
      image.addEventListener('error', function () { pending.delete(target); }, { once: true });
    }
  }

  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) reveal(entry.target);
      });
    }, { threshold: 0 });
  }

  function register(mask) {
    if (mask.hasAttribute(MASK)) return;
    mask.setAttribute(MASK, '');
    mask.classList.add('mask');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !observer) {
      mask.classList.add('in');
    } else {
      observer.observe(mask);
    }
  }

  function registerHero(image) {
    if (image.hasAttribute(HERO)) return;
    image.setAttribute(HERO, '');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !observer) {
      image.classList.add('in');
    } else {
      observer.observe(image);
    }
  }

  function wrapImage(image, card, existingMask) {
    if (image.closest('[' + MASK + ']')) return;
    var mask = existingMask || document.createElement('span');
    var zoom = document.createElement('span');
    zoom.className = 'zoom';
    zoom.setAttribute(ZOOM, '');
    card.setAttribute(CARD, '');
    if (!existingMask) image.before(mask);
    mask.append(zoom);
    zoom.append(image);
    register(mask);
  }

  function scan() {
    scheduled = false;
    if (!PAGE.test(window.location.pathname)) {
      if (observer) observer.disconnect();
      return;
    }

    document.querySelectorAll('.atelier_hero_section > img.atelier_hero_img').forEach(registerHero);

    document.querySelectorAll('.news_event .img-zoom > img.intro_img').forEach(function (image) {
      var mask = image.parentElement;
      var card = image.closest('.news_event');
      if (mask && card) wrapImage(image, card, mask);
    });

    document.querySelectorAll('.atelier_about_section img.site-lightbox-trigger__image').forEach(function (image) {
      if (!image.matches('.editionen_img, .atelier_about_img')) return;
      var trigger = image.closest('.site-lightbox-trigger');
      if (!trigger || image.closest('[' + MASK + ']')) return;
      var card = trigger.closest('[data-atelier-slideshow-root]') || trigger;
      wrapImage(image, card, null);
    });
  }

  function scheduleScan() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(scan);
  }

  scan();
  mutationObserver = new MutationObserver(scheduleScan);
  mutationObserver.observe(document.body, { childList: true, subtree: true });
  window.addEventListener('pageshow', scheduleScan);
  window.addEventListener('popstate', scheduleScan);
  window.addEventListener('pagehide', function () {
    if (observer) observer.disconnect();
    if (mutationObserver) mutationObserver.disconnect();
  }, { once: true });
})();
