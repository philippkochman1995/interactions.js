(function () {
  if (/(?:^|\/)news(?:\/|$)/i.test(location.pathname)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.lenis) return;

  var tries = 0;
  function boot() {
    if (!window.Lenis) {
      if (++tries <= 100) setTimeout(boot, 50);
      return;
    }

    var lenis = new window.Lenis({
      lerp: 0.0822,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 2.5,
      syncTouch: true,
      autoRaf: false
    });
    window.lenis = lenis;
    window.__siteLenisManaged = true;

    // Keep the current published bundle functional until its GSAP ticker is deployed.
    var frame = 0;
    var fallback = setTimeout(function () {
      if (window.__siteLenisTickerConnected) return;
      function tick(time) {
        lenis.raf(time);
        frame = requestAnimationFrame(tick);
      }
      frame = requestAnimationFrame(tick);
    }, 1000);
    window.addEventListener('site:lenis-ticker-connected', function () {
      clearTimeout(fallback);
      cancelAnimationFrame(frame);
    }, { once: true });

    window.dispatchEvent(new Event('site:lenis-ready'));
  }
  boot();
})();
