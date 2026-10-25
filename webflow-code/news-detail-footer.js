/* footer: Webflow script */
(function () {
  function applyNewsTheme() {
    var category = document.querySelector('.news_detail_category');
    var isHighlight = category && category.textContent.trim().toLowerCase() === 'highlight';
    var sections = document.querySelectorAll('.news_detail_title_section, .news_detail_content_section');

    sections.forEach(function (section) {
      section.classList.toggle('u-theme-green', isHighlight);
      section.classList.toggle('u-theme-dark5', !isHighlight);
    });

    document.querySelectorAll('.news_detail_more_section').forEach(function (section) {
      section.classList.remove('u-theme-green', 'u-theme-dark5');
    });
  }

  function initHeroParallax() {
    var hero = document.querySelector('.news_detail_hero_section');
    if (!hero || !hero.querySelector('img.bild-detail') || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var travel = 24;
    var pending = false;

    function update() {
      pending = false;
      var height = hero.getBoundingClientRect().height;
      var progress = height > 0 ? Math.max(0, Math.min(1, window.scrollY / height)) : 0;
      hero.style.setProperty('--fw-news-detail-image-shift', (travel / 2 - travel * progress) + 'px');
    }

    function schedule() {
      if (pending) return;
      pending = true;
      window.requestAnimationFrame(update);
    }

    hero.setAttribute('data-news-image-parallax', '');
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    window.addEventListener('pageshow', schedule);
  }

  function init() {
    applyNewsTheme();
    initHeroParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
