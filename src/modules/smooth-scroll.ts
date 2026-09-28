import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { prefersReducedMotion } from './utils';

let connected = false;

export function initSmoothScrollSync(): void {
  if (connected || prefersReducedMotion() || /(?:^|\/)news(?:\/|$)/i.test(location.pathname)) return;

  const connect = (): void => {
    const lenis = window.lenis;
    if (connected || !window.__siteLenisManaged || !lenis) return;
    connected = true;
    gsap.registerPlugin(ScrollTrigger);
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (seconds: number): void => lenis.raf(seconds * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    window.__siteLenisTickerConnected = true;
    window.dispatchEvent(new Event('site:lenis-ticker-connected'));
    ScrollTrigger.refresh();

    window.addEventListener('pagehide', () => {
      gsap.ticker.remove(tick);
      lenis.off('scroll', ScrollTrigger.update);
    }, { once: true });
  };

  connect();
  if (!connected) window.addEventListener('site:lenis-ready', connect, { once: true });
}
