/* head: Webflow script */
/* The full-width CMS hero needs a full-width sizes hint for Webflow's srcset. */
(function () {
  function updateImages(node) {
    if (node.nodeType !== 1) return;
    if (node.matches && node.matches('img.bild-detail')) node.sizes = '100vw';
    if (node.querySelectorAll) {
      node.querySelectorAll('img.bild-detail').forEach(function (image) {
        image.sizes = '100vw';
      });
    }
  }

  updateImages(document.documentElement);
  var observer = new MutationObserver(function (records) {
    records.forEach(function (record) {
      record.addedNodes.forEach(updateImages);
    });
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', function () {
    updateImages(document.documentElement);
    observer.disconnect();
  }, { once: true });
})();
