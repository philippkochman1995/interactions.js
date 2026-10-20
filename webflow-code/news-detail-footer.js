/* footer: Webflow script */
(function () {
  function applyNewsTheme() {
    var category = document.querySelector('.news_detail_category');
    var isHighlight = category && category.textContent.trim().toLowerCase() === 'highlight';
    var sections = document.querySelectorAll('.news_detail_title_section, .news_detail_content_section, .news_detail_more_section');

    sections.forEach(function (section) {
      section.classList.toggle('u-theme-green', isHighlight);
      section.classList.toggle('u-theme-dark5', !isHighlight);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyNewsTheme);
  } else {
    applyNewsTheme();
  }
})();
