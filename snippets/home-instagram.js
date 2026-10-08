/* Homepage Instagram preview slider. Four static Figma images are repeated for a seamless loop. */
(function () {
  function initFeed() {
    var root = document.querySelector('[data-insta-feed]');
    if (!root || root.hasAttribute('data-insta-ready')) return;

    var track = root.querySelector('[data-insta-track]');
    var previous = root.querySelector('[data-insta-prev]');
    var next = root.querySelector('[data-insta-next]');
    var viewport = root.querySelector('[data-insta-slider] > div:first-child');
    if (!track || !previous || !next || !viewport) return;

    var originals = Array.prototype.slice.call(track.children);
    if (originals.length < 2) return;
    root.setAttribute('data-insta-ready', '');

    originals.forEach(function (slide) {
      var clone = slide.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      var image = clone.querySelector('img');
      if (image) image.alt = '';
      track.appendChild(clone);
    });

    var index = 0;
    var busy = false;
    var finishTimer;
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

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

    if (typeof ResizeObserver === 'function') {
      new ResizeObserver(function () { position(false); }).observe(viewport);
    } else {
      window.addEventListener('resize', function () { position(false); });
    }
    position(false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFeed, { once: true });
  } else {
    initFeed();
  }
}());
