import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
import ts from 'typescript';

const source = ts.transpileModule(readFileSync(new URL('../src/modules/smooth-scroll.ts', import.meta.url), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2018 },
}).outputText;
const bootstrap = readFileSync(new URL('../snippets/smoothscrollinit.js', import.meta.url), 'utf8');

function fixture(pathname = '/werk-ueberblick') {
  const frames = new Map();
  const timers = new Map();
  const ticks = new Set();
  const scrollListeners = new Set();
  const rafCalls = [];
  let nextId = 0;
  let resizeCount = 0;
  class Lenis {
    raf(time) { rafCalls.push(time); }
    on(_event, callback) { scrollListeners.add(callback); }
    off(_event, callback) { scrollListeners.delete(callback); }
    resize() { resizeCount++; }
  }
  const window = new EventTarget();
  window.Lenis = Lenis;
  window.matchMedia = () => ({ matches: false });
  const context = {
    window, Event, location: { pathname }, exports: {},
    setTimeout(callback) { timers.set(++nextId, callback); return nextId; },
    clearTimeout: (id) => timers.delete(id),
    requestAnimationFrame(callback) { frames.set(++nextId, callback); return nextId; },
    cancelAnimationFrame: (id) => frames.delete(id),
    require(name) {
      if (name === 'gsap') return { gsap: {
        registerPlugin() {}, ticker: { add: (tick) => ticks.add(tick), remove: (tick) => ticks.delete(tick), lagSmoothing() {} },
      } };
      if (name === 'gsap/ScrollTrigger') return { ScrollTrigger: { update() {}, refresh() {} } };
      return { prefersReducedMotion: () => false };
    },
  };
  return {
    window, ticks, frames, scrollListeners, rafCalls,
    get resizeCount() { return resizeCount; },
    boot() { runInNewContext(bootstrap, context); },
    sync() { runInNewContext(source, context); context.exports.initSmoothScrollSync(); },
    initAgain() { context.exports.initSmoothScrollSync(); },
    event(name, persisted = true) {
      const event = new Event(name);
      Object.defineProperty(event, 'persisted', { value: persisted });
      window.dispatchEvent(event);
    },
    timers() {
      for (const [id, callback] of [...timers]) { timers.delete(id); callback(); }
    },
    frame(time) {
      for (const [id, callback] of [...frames]) { frames.delete(id); callback(time); }
    },
    legacyTicker() {
      const tick = (seconds) => window.lenis.raf(seconds * 1000);
      ticks.add(tick);
      window.__siteLenisTickerConnected = true;
      window.dispatchEvent(new Event('site:lenis-ticker-connected'));
      // The already-published main bundle detaches once and never reconnects.
      window.addEventListener('pagehide', () => ticks.delete(tick), { once: true });
    },
  };
}

for (const pathname of ['/news', '/news/atelier']) {
  test(`Lenis and GSAP scrolling start on ${pathname}`, () => {
    const f = fixture(pathname);
    f.boot(); f.sync(); f.timers();
    assert.ok(f.window.lenis);
    assert.equal(f.ticks.size, 1);
    assert.equal(f.scrollListeners.size, 1);
    [...f.ticks][0](1);
    assert.equal(f.rafCalls.at(-1), 1000);
  });
}

test('the GSAP driver reconnects after repeated back/forward cache restores', () => {
  const f = fixture();
  f.boot(); f.sync(); f.timers();
  assert.equal(f.ticks.size, 1);
  for (let cycle = 0; cycle < 3; cycle++) {
    f.event('pagehide');
    assert.equal(f.ticks.size, 0);
    assert.equal(f.scrollListeners.size, 0);
    assert.equal(f.window.__siteLenisTickerConnected, false);
    f.event('pageshow');
    f.timers();
    assert.equal(f.ticks.size, 1);
    assert.equal(f.scrollListeners.size, 1);
    assert.equal(f.frames.size, 0);
    [...f.ticks][0](cycle + 1);
    assert.equal(f.rafCalls.at(-1), (cycle + 1) * 1000);
  }
});

test('deferred Lenis initialization and repeated init do not duplicate drivers', () => {
  const f = fixture();
  f.sync(); f.initAgain(); f.boot(); f.timers();
  assert.equal(f.ticks.size, 1);
  assert.equal(f.scrollListeners.size, 1);
  f.event('pageshow', false);
  assert.equal(f.ticks.size, 1);
  f.event('pagehide'); f.event('pageshow');
  assert.equal(f.ticks.size, 1);
  assert.equal(f.frames.size, 0);
});

test('updated Webflow bootstrap restores scrolling with the currently published legacy bundle', () => {
  const f = fixture();
  f.boot(); f.legacyTicker(); f.timers();
  assert.equal(f.frames.size, 0);
  for (let cycle = 0; cycle < 3; cycle++) {
    f.event('pagehide');
    assert.equal(f.frames.size, 0);
    assert.equal(f.ticks.size, 0);
    f.event('pageshow'); f.timers();
    assert.equal(f.frames.size, 1);
    f.frame((cycle + 1) * 1000);
    assert.equal(f.rafCalls.at(-1), (cycle + 1) * 1000);
    assert.equal(f.frames.size, 1);
  }
  assert.ok(f.resizeCount >= 3);
});

test('fallback yields whenever GSAP connects, including after returning from history', () => {
  const f = fixture();
  f.boot(); f.timers();
  assert.equal(f.frames.size, 1);
  f.legacyTicker();
  assert.equal(f.frames.size, 0);
  f.event('pagehide'); f.event('pageshow'); f.timers();
  assert.equal(f.frames.size, 1);
  f.window.__siteLenisTickerConnected = true;
  f.event('site:lenis-ticker-connected');
  assert.equal(f.frames.size, 0);
});
