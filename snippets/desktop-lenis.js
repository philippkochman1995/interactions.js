(function () {
  if (/(?:^|\/)news(?:\/|$)/i.test(location.pathname)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(max-width: 767px)').matches) return;
  if (window.lenis) return;

  function boot() {
    if (!window.Lenis) return;

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
  if (window.Lenis) {
    boot();
  } else {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/lenis@1.3.26/dist/lenis.min.js';
    script.integrity = 'sha384-jqpi9VmOdhyLoLURgjCn7EpnG9BbnHW57ibIZoeaIU+erWDH3k8fQQg0xH2ySjnw';
    script.crossOrigin = 'anonymous';
    script.onload = boot;
    document.head.appendChild(script);
  }
})();
