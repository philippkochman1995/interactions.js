import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { prefersReducedMotion } from './utils';

let connected = false;
let initialized = false;

export function initSmoothScrollSync(): void {
  if (initialized || prefersReducedMotion()) return;
  initialized = true;
  let disconnect: (() => void) | undefined;

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

    disconnect = () => {
      gsap.ticker.remove(tick);
      lenis.off('scroll', ScrollTrigger.update);
      connected = false;
      window.__siteLenisTickerConnected = false;
      disconnect = undefined;
    };
  };

  window.addEventListener('pagehide', () => disconnect?.());
  window.addEventListener('pageshow', (event) => {
    if (!event.persisted) return;
    connect();
    window.lenis?.resize();
  });
  connect();
  if (!connected) window.addEventListener('site:lenis-ready', connect, { once: true });
}
