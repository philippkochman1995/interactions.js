(function () {
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

    var frame = 0;
    var suspended = false;
    function tick(time) {
      frame = 0;
      if (suspended || window.__siteLenisTickerConnected) return;
      lenis.raf(time);
      frame = requestAnimationFrame(tick);
    }
    function startFallback() {
      if (!suspended && !window.__siteLenisTickerConnected && !frame)
        frame = requestAnimationFrame(tick);
    }
    function stopFallback() {
      clearTimeout(fallback);
      cancelAnimationFrame(frame);
      frame = 0;
    }
    var fallback = setTimeout(startFallback, 1000);
    window.addEventListener('site:lenis-ticker-connected', stopFallback);
    window.addEventListener('pagehide', function () {
      suspended = true;
      stopFallback();
      window.__siteLenisTickerConnected = false;
    });
    window.addEventListener('pageshow', function (event) {
      if (!event.persisted) return;
      suspended = false;
      lenis.resize();
      startFallback();
    });

    window.dispatchEvent(new Event('site:lenis-ready'));
  }
  boot();
})();
