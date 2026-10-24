/* footer: Webflow script */
/* Homepage Instagram slider. Static Webflow images remain visible until the feed loads. */
(function () {
  function formatQuote() {
    var quote = document.querySelector('.quote-h3');
    if (!quote || quote.querySelector('.home-quote-break')) return;
    var text = quote.textContent || '';
    var marker = 'Befindlichkeit. Auch';
    var markerIndex = text.indexOf(marker);
    if (markerIndex === -1) return;
    var breakIndex = markerIndex + 'Befindlichkeit. '.length;
    var lineBreak = document.createElement('br');
    lineBreak.className = 'home-quote-break';
    quote.replaceChildren(document.createTextNode(text.slice(0, breakIndex)), lineBreak, document.createTextNode(text.slice(breakIndex)));
  }

  function initFeed() {
    var root = document.querySelector('[data-insta-feed]');
    if (!root) return;

    var avatar = root.querySelector('[data-insta-avatar]');
    if (avatar && !avatar.closest('.insta-feed__avatar-frame')) {
      var avatarFrame = document.createElement('span');
      avatarFrame.className = 'insta-feed__avatar-frame';
      avatar.parentNode.insertBefore(avatarFrame, avatar);
      avatarFrame.appendChild(avatar);
    }

    var account = root.querySelector('[data-insta-account]');
    var follow = root.querySelector('a[data-insta-follow][href]');
    if (account && follow && !account.closest('a')) {
      var accountLink = document.createElement('a');
      accountLink.href = follow.href;
      accountLink.target = follow.target;
      accountLink.rel = follow.rel;
      accountLink.className = 'u-animate-underline';
      accountLink.setAttribute('data-insta-account-link', '');
      account.parentNode.insertBefore(accountLink, account);
      accountLink.appendChild(account);
    }

    if (root.hasAttribute('data-insta-ready')) return;
    var track = root.querySelector('[data-insta-track]');
    var previous = root.querySelector('[data-insta-prev]');
    var next = root.querySelector('[data-insta-next]');
    var viewport = root.querySelector('[data-insta-slider] > div:first-child');
    if (!track || !previous || !next || !viewport || track.children.length < 2) return;

    var originals = Array.prototype.slice.call(track.children);
    var index = 0;
    var busy = false;
    var finishTimer;
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    root.setAttribute('data-insta-ready', '');

    function installSlides(slides) {
      window.clearTimeout(finishTimer);
      busy = false;
      index = 0;
      track.style.transition = 'none';
      track.style.transform = '';
      track.replaceChildren.apply(track, slides);
      originals = slides;
      slides.forEach(function (slide) {
        var clone = slide.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        clone.tabIndex = -1;
        var image = clone.querySelector('img');
        if (image) image.alt = '';
        track.appendChild(clone);
      });
      position(false);
    }

    function step() {
      var first = track.children[0];
      var second = track.children[1];
      return second.getBoundingClientRect().left - first.getBoundingClientRect().left;
    }

    function position(animate) {
      track.style.transition = animate ? '' : 'none';
      track.style.transform = 'translate3d(' + (-index * step()) + 'px, 0, 0)';
      root.setAttribute('data-insta-index', String(index % originals.length));
    }

    function finish() {
      if (!busy) return;
      window.clearTimeout(finishTimer);
      busy = false;
      if (index === originals.length) {
        index = 0;
        position(false);
      }
    }

    function move(direction) {
      if (busy) return;
      if (reducedMotion.matches) {
        index = (index + direction + originals.length) % originals.length;
        position(false);
        return;
      }
      if (direction < 0 && index === 0) {
        index = originals.length;
        position(false);
        track.getBoundingClientRect();
      }
      index += direction;
      busy = true;
      position(true);
      finishTimer = window.setTimeout(finish, 650);
    }

    track.addEventListener('transitionend', function (event) {
      if (event.target === track && event.propertyName === 'transform') finish();
    });
    [[previous, -1], [next, 1]].forEach(function (pair) {
      var control = pair[0];
      var direction = pair[1];
      control.addEventListener('click', function (event) {
        event.preventDefault();
        move(direction);
      });
      control.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          move(direction);
        }
      });
    });

    var touchStart;
    viewport.addEventListener('touchstart', function (event) {
      if (event.touches.length !== 1) return;
      touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }, { passive: true });
    viewport.addEventListener('touchend', function (event) {
      if (!touchStart || !event.changedTouches.length) return;
      var dx = event.changedTouches[0].clientX - touchStart.x;
      var dy = event.changedTouches[0].clientY - touchStart.y;
      touchStart = null;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
    }, { passive: true });

    var dragStart = null;
    var dragged = false;
    var suppressSlideClick = false;
    viewport.addEventListener('dragstart', function (event) { event.preventDefault(); });
    viewport.addEventListener('pointerdown', function (event) {
      if (event.pointerType === 'touch' || event.button !== 0 || busy) return;
      dragStart = { id: event.pointerId, x: event.clientX, y: event.clientY };
      dragged = false;
    });
    window.addEventListener('pointermove', function (event) {
      if (!dragStart || event.pointerId !== dragStart.id) return;
      var dx = event.clientX - dragStart.x;
      var dy = event.clientY - dragStart.y;
      if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
        dragged = true;
        root.classList.add('is-insta-dragging');
      }
      if (dragged) event.preventDefault();
    }, { passive: false });
    window.addEventListener('pointerup', function (event) {
      if (!dragStart || event.pointerId !== dragStart.id) return;
      var dx = event.clientX - dragStart.x;
      var dy = event.clientY - dragStart.y;
      if (dragged) {
        suppressSlideClick = true;
        window.setTimeout(function () { suppressSlideClick = false; }, 0);
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
      }
      dragStart = null;
      dragged = false;
      root.classList.remove('is-insta-dragging');
    });
    window.addEventListener('pointercancel', function (event) {
      if (!dragStart || event.pointerId !== dragStart.id) return;
      dragStart = null;
      dragged = false;
      root.classList.remove('is-insta-dragging');
    });
    viewport.addEventListener('click', function (event) {
      if (!suppressSlideClick) return;
      event.preventDefault();
      event.stopPropagation();
      suppressSlideClick = false;
    }, true);

    var wheelDistance = 0;
    viewport.addEventListener('wheel', function (event) {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) {
        wheelDistance = 0;
        return;
      }
      var delta = event.deltaX;
      event.preventDefault();
      if (busy) {
        wheelDistance = 0;
        return;
      }
      if (wheelDistance && Math.sign(wheelDistance) !== Math.sign(delta)) wheelDistance = 0;
      wheelDistance += delta * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? viewport.clientWidth : 1);
      if (Math.abs(wheelDistance) < 40) return;
      move(wheelDistance > 0 ? 1 : -1);
      wheelDistance = 0;
    }, { passive: false });

    if (typeof ResizeObserver === 'function') {
      new ResizeObserver(function () { position(false); }).observe(viewport);
    } else {
      window.addEventListener('resize', function () { position(false); });
    }
    installSlides(originals);

    var endpoint = root.getAttribute('data-insta-api');
    if (!endpoint) return;
    var controller = new AbortController();
    var timeout = window.setTimeout(function () { controller.abort(); }, 8000);
    fetch(endpoint, { signal: controller.signal, credentials: 'omit', mode: 'cors' })
      .then(function (response) {
        if (!response.ok) throw new Error('Instagram feed unavailable');
        return response.json();
      })
      .then(function (feed) {
        if (!feed || !Array.isArray(feed.posts)) return;
        var slides = feed.posts.slice(0, 12).filter(function (post) {
          return post && /^https:\/\//.test(post.image) && /^https:\/\//.test(post.permalink);
        }).map(function (post) {
          var slide = document.createElement('a');
          slide.href = post.permalink;
          slide.target = '_blank';
          slide.rel = 'noopener noreferrer';
          slide.setAttribute('aria-label', 'Instagram-Beitrag öffnen');
          var image = document.createElement('img');
          image.src = post.image;
          image.alt = post.alt || 'Beitrag der Franz West Privatstiftung auf Instagram';
          image.loading = 'lazy';
          image.decoding = 'async';
          slide.appendChild(image);
          return slide;
        });
        if (slides.length < 2) return;
        root.setAttribute('data-insta-live', '');
        installSlides(slides);
      })
      .catch(function () { /* Keep the static Webflow images on feed failure. */ })
      .finally(function () { window.clearTimeout(timeout); });
  }

  function initHome() {
    formatQuote();
    initFeed();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHome, { once: true });
  } else {
    initHome();
  }
}());
