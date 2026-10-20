/* The full-width Atelier hero must use the original asset, not a small srcset variant. */
(function () {
  var originalImage = 'https://s3.amazonaws.com/webflow-prod-assets/69b3f9edfc3e8e944fc06836/6a563dabdcef1ea2e26cae44_Kontakt.jpg';

  function useOriginalImage() {
    var image = document.querySelector('img.atelier_hero_img');
    if (!image) return;

    image.removeAttribute('srcset');
    image.removeAttribute('sizes');
    image.setAttribute('src', originalImage);
    image.setAttribute('loading', 'eager');
    image.setAttribute('fetchpriority', 'high');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', useOriginalImage, { once: true });
  } else {
    useOriginalImage();
  }
})();
