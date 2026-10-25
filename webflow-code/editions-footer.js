/* footer: Webflow script */
/* Editionen-Slider.
     Markup-Vertrag:
       [data-edition-slider]     Wrapper pro Edition
       [data-edition-track]      Container der Slides
       [data-edition-slide]      ein Bild; optional data-edition-color="rosa"
       [data-edition-prev|next]  Pfeile
       [data-edition-dots]       Dots-Container, enthaelt EINEN Dot als Vorlage
       [data-edition-color]      Farb-Swatch im Textblock derselben Edition
     Ein Slide pro Bild. Farben sind Slides mit data-edition-color:
     ein Klick auf den Swatch springt auf den passenden Slide.
     Pfeile und Dots blenden sich aus, solange es nur ein Bild gibt. */
  (function () {
    /* Gleiche Pfeil-Grafik wie im Designer, damit Slideshow und Lightbox
       identisch aussehen. Styling und Hover liegen im Head-CSS. */
    var ARROW_SVG =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="26 31 50 50" fill="none" aria-hidden="true" focusable="false">' +
      '<circle data-arrow-circle cx="51" cy="56" r="20.625" stroke-width="0.75"></circle>' +
      '<path data-arrow-dot d="M55.2685 54.5264H53.5352V58.4737H55.2685V54.5264Z"></path>' +
      '<path data-arrow-head d="M56.9961 55.7542L49.6604 49L47.3711 51.1129L53.0066 56.2967V56.7033L47.3711 61.8871L49.6604 64L56.9961 57.2458C56.9965 56.9546 56.9965 56.0454 56.9961 55.7542Z"></path>' +
      '</svg>';

    /* Use the real slider width for every responsive image.
       Webflow may keep thumbnail-sized hints on initially inactive slides. */
    function prepareSliderImages(root) {
      var images = Array.prototype.slice.call(root.querySelectorAll('img.editionen_img'));
      images.forEach(function (image) {
        var trigger = image.closest('.site-lightbox-trigger') || image;
        if (image.getAttribute('src')) {
          trigger.setAttribute('data-lightbox-src', image.src);
        }
        var caption = trigger.getAttribute('data-lightbox-caption');
        if (caption) {
          image.alt = caption;
          trigger.setAttribute('data-lightbox-alt', caption);
        }
      });
      function updateSizes() {
        var width = Math.ceil(root.getBoundingClientRect().width);
        if (!width) return;
        images.forEach(function (image) {
          image.sizes = width + 'px';
        });
      }
      updateSizes();
      if (typeof ResizeObserver === 'function') {
        new ResizeObserver(updateSizes).observe(root);
      } else {
        window.addEventListener('resize', updateSizes);
      }
    }

    function initSlider(root) {
      prepareSliderImages(root);
      var slides = Array.prototype.slice.call(root.querySelectorAll('[data-edition-slide]'));
      if (!slides.length) return;

      var dotsWrap = root.querySelector('[data-edition-dots]');
      var prev = root.querySelector('[data-edition-prev]');
      var next = root.querySelector('[data-edition-next]');
      [prev, next].forEach(function (control) {
        if (control && !control.querySelector('svg')) control.innerHTML = ARROW_SVG;
      });
      var item = root.closest('.editionen_item') || root.parentElement;

      var swatches = item
        ? Array.prototype.slice.call(item.querySelectorAll('[data-edition-color]')).filter(function (el) {
            return !el.hasAttribute('data-edition-slide');
          })
        : [];

      var dots = [];
      if (dotsWrap) {
        var template = dotsWrap.querySelector('[data-edition-dot]');
        dotsWrap.innerHTML = '';
        slides.forEach(function (slide, i) {
          var dot = template ? template.cloneNode(true) : document.createElement('div');
          if (!template) dot.className = 'editionen_dot';
          dot.classList.remove('is-active');
          dot.setAttribute('role', 'button');
          dot.setAttribute('tabindex', '0');
          dot.setAttribute('aria-label', 'Bild ' + (i + 1));
          dotsWrap.appendChild(dot);
          dots.push(dot);
        });
      }

      var index = 0;
      var initialized = false;
      var wipeAnimation = null;
      var imageAnimation = null;
      var splitSlider = slides.length > 1 && !root.closest('[data-atelier-slideshow-root]');
      var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (splitSlider) root.classList.add('is-edition-split-slider');

      function finishWipe() {
        if (wipeAnimation) {
          wipeAnimation.onfinish = null;
          wipeAnimation.cancel();
          wipeAnimation = null;
        }
        if (imageAnimation) {
          imageAnimation.cancel();
          imageAnimation = null;
        }
        slides.forEach(function (slide) {
          slide.removeAttribute('data-edition-wipe-out');
          slide.removeAttribute('data-edition-wipe-in');
        });
      }

      function show(i) {
        var nextIndex = (i + slides.length) % slides.length;
        var previousIndex = index;
        var changing = initialized && nextIndex !== previousIndex;
        finishWipe();
        index = nextIndex;
        var animateWipe = changing && splitSlider && !reducedMotion.matches
          && typeof slides[index].animate === 'function';
        if (animateWipe) {
          slides[previousIndex].setAttribute('data-edition-wipe-out', '');
          slides[index].setAttribute('data-edition-wipe-in', '');
        }
        slides.forEach(function (slide, n) {
          slide.classList.toggle('is-active', n === index);
        });
        dots.forEach(function (dot, n) {
          dot.classList.toggle('is-active', n === index);
          dot.setAttribute('aria-current', n === index ? 'true' : 'false');
        });
        var color = slides[index].getAttribute('data-edition-color');
        swatches.forEach(function (swatch) {
          swatch.classList.toggle(
            'is-selected',
            !!color && swatch.getAttribute('data-edition-color') === color
          );
        });
        initialized = true;

        if (animateWipe) {
          // The new image travels over the old one behind a vertical edge.
          var from = index > previousIndex ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)';
          wipeAnimation = slides[index].animate(
            [{ clipPath: from }, { clipPath: 'inset(0 0 0 0)' }],
            { duration: 850, easing: 'cubic-bezier(.76, 0, .24, 1)', fill: 'both' }
          );
          var image = slides[index].querySelector('.editionen_img');
          if (image && typeof image.animate === 'function') {
            imageAnimation = image.animate(
              [{ transform: 'scale(1.06)' }, { transform: 'scale(1)' }],
              { duration: 850, easing: 'cubic-bezier(.2, .65, .2, 1)', fill: 'both' }
            );
          }
          wipeAnimation.onfinish = finishWipe;
        }
      }

      function goToColor(color) {
        for (var i = 0; i < slides.length; i++) {
          if (slides[i].getAttribute('data-edition-color') === color) {
            show(i);
            return;
          }
        }
      }

      var multiple = slides.length > 1;
      [prev, next, dotsWrap].forEach(function (el) {
        if (el) el.classList.toggle('is-hidden', !multiple);
      });

      if (prev) prev.addEventListener('click', function () { show(index - 1); });
      if (next) next.addEventListener('click', function () { show(index + 1); });
      [[prev, -1], [next, 1]].forEach(function (pair) {
        if (!pair[0]) return;
        pair[0].addEventListener('keydown', function (event) {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.preventDefault();
          show(index + pair[1]);
        });
      });

      dots.forEach(function (dot, n) {
        dot.addEventListener('click', function () { show(n); });
        dot.addEventListener('keydown', function (event) {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            show(n);
          }
        });
      });

      swatches.forEach(function (swatch) {
        swatch.setAttribute('tabindex', '0');
        swatch.addEventListener('click', function () {
          goToColor(swatch.getAttribute('data-edition-color'));
        });
        swatch.addEventListener('keydown', function (event) {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            goToColor(swatch.getAttribute('data-edition-color'));
          }
        });
      });

      show(0);
    }

    /* Die Lightbox aus site-interactions.js baut ihre Pfeile mit den
       Textzeichen ‹ und ›. Hier werden sie durch dieselbe Grafik ersetzt.
       Das Overlay entsteht erst beim ersten Oeffnen, deshalb der Observer. */
    function paintLightboxArrows(lightbox) {
      ['[data-lightbox-prev]', '[data-lightbox-next]'].forEach(function (selector) {
        var button = lightbox.querySelector(selector);
        if (!button || button.querySelector('[data-arrow-head]')) return;
        button.innerHTML = ARROW_SVG;
      });
    }

    function watchLightbox() {
      var existing = document.querySelector('[data-site-lightbox]');
      if (existing) {
        paintLightboxArrows(existing);
        return;
      }

      if (typeof MutationObserver !== 'function') return;

      var observer = new MutationObserver(function () {
        var lightbox = document.querySelector('[data-site-lightbox]');
        if (!lightbox) return;
        paintLightboxArrows(lightbox);
        observer.disconnect();
      });

      observer.observe(document.body, { childList: true });
    }

    function init() {
      Array.prototype.forEach.call(
        document.querySelectorAll('[data-edition-slider]'),
        initSlider
      );
      watchLightbox();
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();

/* footer: fw-edition-inquiry-subject */
(function () {
  function setSubjects() {
    document.querySelectorAll('.editionen_item').forEach(function (item) {
      var title = item.querySelector('.editionen_title');
      var link = item.querySelector('.editionen_button_wrap a[href^="mailto:"]');
      if (!title || !link) return;
      var name = title.textContent.trim();
      if (!name) return;
      link.href = 'mailto:kontakt@fwps.at?subject=' + encodeURIComponent('Anfrage für Objekt ' + name);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setSubjects);
  else setSubjects();
})();
