import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
import ts from 'typescript';

function compile(path) {
  return ts.transpileModule(readFileSync(new URL(path, import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2018 },
  }).outputText;
}

const source = compile('../src/modules/spline-slider.ts');
const markup = compile('../src/modules/site-preloader-markup.ts');

function fixture({ visible = true, hidden = false, focused = true, loaded = true, observer = true,
  hiddenScene = -1, invisibleScene = -1, iframeFocused = false } = {}) {
  const documentEvents = new Map();
  const windowEvents = new Map();
  const mutations = [];
  const intersections = [];
  const state = [null, null, null];
  const instances = new Map();
  const timers = [];
  const intervals = new Map();
  let nextInterval = 0;
  const classes = new Set();
  let syncCount = 0;
  const display = new Map();
  const visibility = new Map();
  let hasFocus = focused;
  const listen = (events, name, callback) => {
    if (!events.has(name)) events.set(name, []);
    events.get(name).push(callback);
  };
  const emit = (events, name, event = {}) => {
    events.get(name)?.forEach((callback) => callback(event));
  };
  const schedule = (callback) => { timers.push(callback); return timers.length; };
  class Element {
    attrs = {};
    getAttribute(key) { return this.attrs[key] ?? null; }
    closest() { return slider; }
  }
  const slider = new Element();
  const track = new Element();
  const slides = Array.from({ length: 3 }, (_, index) => {
    const slide = new Element();
    slide.parentElement = track;
    slide.inert = index !== 0;
    slide.attrs['aria-hidden'] = String(index !== 0);
    return slide;
  });
  const scenes = slides.map((slide) => {
    const scene = new Element();
    scene.parentElement = slide;
    return scene;
  });
  if (hiddenScene >= 0) display.set(scenes[hiddenScene], 'none');
  if (invisibleScene >= 0) visibility.set(scenes[invisibleScene], 'hidden');
  let inViewport = visible;
  slider.getBoundingClientRect = () => ({
    top: inViewport ? 0 : -600, bottom: inViewport ? 600 : 0,
    left: 0, right: 800, width: 800, height: 600,
  });
  slider.querySelector = () => track;
  track.children = slides;
  track.querySelectorAll = () => scenes;
  const load = (index) => {
    // Model the public pause flag separately from the actual rendering loop.
    // Runtime 2.0.100 queues startup before emitting w-spline-load; that timer
    // can restore the loop after an early, subsequently idempotent stop().
    const app = {
      isStopped: false,
      loop: true,
      calls: { play: 0, stop: 0 },
      play() {
        this.calls.play++;
        if (!this.isStopped) return;
        this.isStopped = false;
        this.loop = true;
        if (instances.get(scenes[index])?.spline === this) state[index] = 'playing';
      },
      stop() {
        this.calls.stop++;
        if (this.isStopped) return;
        this.isStopped = true;
        this.loop = false;
        if (instances.get(scenes[index])?.spline === this) state[index] = 'stopped';
      },
    };
    instances.set(scenes[index], { spline: app });
    state[index] = 'playing';
    schedule(() => { app.loop = true; });
    return app;
  };
  if (loaded) scenes.forEach((_, index) => load(index));
  class MutationObserver {
    constructor(callback) { mutations.push(callback); }
    observe() {}
  }
  class IntersectionObserver {
    constructor(callback) { intersections.push(callback); }
    observe(target) { assert.equal(target, slider); }
  }
  const document = {
    hidden,
    activeElement: { tagName: iframeFocused ? 'IFRAME' : 'BODY' },
    hasFocus: () => hasFocus,
    documentElement: { classList: {
      toggle(name, enabled) {
        syncCount++;
        if (enabled) classes.add(name); else classes.delete(name);
      },
    } },
    querySelectorAll: () => [slider],
    addEventListener: (name, callback) => listen(documentEvents, name, callback),
  };
  const window = {
    innerWidth: 1000, innerHeight: 800,
    Webflow: { require: () => ({ getInstance: (scene) => instances.get(scene) }) },
    addEventListener: (name, callback) => listen(windowEvents, name, callback),
    setTimeout: schedule,
    setInterval(callback, delay) {
      const id = ++nextInterval;
      intervals.set(id, { callback, delay });
      return id;
    },
    clearInterval(id) { intervals.delete(id); },
  };
  const context = { exports: {}, window, document, Element, HTMLElement: Element, MutationObserver,
    getComputedStyle: (element) => ({
      display: display.get(element) ?? 'block',
      visibility: visibility.get(element) ?? 'visible',
    }),
    IntersectionObserver: observer ? IntersectionObserver : undefined };
  runInNewContext(source, context);
  context.exports.initHeroSplineSlides();
  return {
    state,
    apps() { return scenes.map((scene) => instances.get(scene)?.spline); },
    paused() { return classes.has('site-hero-paused'); },
    syncCount() { return syncCount; },
    intervalCount() { return intervals.size; },
    intervalDelays() { return [...intervals.values()].map(({ delay }) => delay); },
    tickIntervals() { [...intervals.values()].forEach(({ callback }) => callback()); },
    nextTimer() { assert.ok(timers.length, 'expected a queued timer'); timers.shift()(); },
    flushTimers() {
      let count = 0;
      while (timers.length) {
        assert.ok(++count < 100, 'timer reconciliation must settle without polling');
        timers.shift()();
      }
    },
    inactive(index) { return context.exports.isInactiveHeroSplineScene(scenes[index]); },
    visibility(hidden) { document.hidden = hidden; emit(documentEvents, 'visibilitychange'); },
    focus(value) { hasFocus = value; emit(windowEvents, value ? 'focus' : 'blur'); },
    blur({ focused = false } = {}) { hasFocus = focused; emit(windowEvents, 'blur'); },
    iframe(value = true) { document.activeElement = { tagName: value ? 'IFRAME' : 'BODY' }; },
    setFocus(value) { hasFocus = value; },
    pagehide() { emit(windowEvents, 'pagehide', { persisted: true }); },
    pageshow() { emit(windowEvents, 'pageshow', { persisted: true }); },
    setViewport(value) { inViewport = value; },
    setDisplay(index, value) { display.set(scenes[index], value); },
    resize() { emit(windowEvents, 'resize'); },
    viewport(value, width = 800, height = 600) {
      inViewport = value;
      intersections.forEach((callback) => callback([{
        target: slider, isIntersecting: value, intersectionRect: { width, height },
      }]));
      if (!observer) emit(windowEvents, 'scroll');
    },
    active(index) {
      slides.forEach((slide, i) => {
        slide.inert = i !== index;
        slide.attrs['aria-hidden'] = String(i !== index);
      });
      mutations.forEach((callback) => callback());
    },
    load(index) {
      const app = load(index);
      emit(documentEvents, 'w-spline-load', { target: scenes[index] });
      return app;
    },
  };
}

test('only the active visible scene plays; leaving and returning resumes it', () => {
  const f = fixture();
  assert.deepEqual(f.state, ['playing', 'stopped', 'stopped']);
  f.viewport(false);
  assert.deepEqual(f.state, ['stopped', 'stopped', 'stopped']);
  f.viewport(true);
  assert.deepEqual(f.state, ['playing', 'stopped', 'stopped']);
});

test('a scene hidden at the current breakpoint is inactive and does not play', () => {
  const f = fixture({ hiddenScene: 0 });
  assert.equal(f.inactive(0), true);
  assert.deepEqual(f.state, ['stopped', 'stopped', 'stopped']);
});

test('a sized but invisible scene is inactive and does not play', () => {
  const f = fixture({ invisibleScene: 0 });
  assert.equal(f.inactive(0), true);
  assert.deepEqual(f.state, ['stopped', 'stopped', 'stopped']);
});

test('hidden tabs stop every scene and resume only the current visible slide', () => {
  const f = fixture();
  f.visibility(true);
  f.active(1);
  assert.deepEqual(f.state, ['stopped', 'stopped', 'stopped']);
  f.visibility(false);
  assert.deepEqual(f.state, ['stopped', 'playing', 'stopped']);
  f.viewport(false);
  f.visibility(true);
  f.visibility(false);
  assert.deepEqual(f.state, ['stopped', 'stopped', 'stopped']);
});

test('switching slides offscreen never starts a scene', () => {
  const f = fixture({ visible: false });
  f.active(2);
  assert.deepEqual(f.state, ['stopped', 'stopped', 'stopped']);
  f.viewport(true);
  assert.deepEqual(f.state, ['stopped', 'stopped', 'playing']);
});

test('scenes loaded late offscreen or in a hidden tab are stopped', () => {
  const f = fixture({ visible: false, loaded: false });
  f.load(0); f.load(1); f.load(2);
  assert.deepEqual(f.state, ['stopped', 'stopped', 'stopped']);
  const hidden = fixture({ hidden: true, loaded: false });
  hidden.load(0);
  assert.equal(hidden.state[0], 'stopped');
  hidden.visibility(false);
  assert.equal(hidden.state[0], 'playing');
});

test('touching the viewport boundary without visible pixels does not play', () => {
  const f = fixture();
  f.viewport(true, 800, 0);
  assert.deepEqual(f.state, ['stopped', 'stopped', 'stopped']);
});

test('scroll fallback pauses and resumes when IntersectionObserver is unavailable', () => {
  const f = fixture({ observer: false });
  f.viewport(false);
  assert.deepEqual(f.state, ['stopped', 'stopped', 'stopped']);
  f.viewport(true);
  assert.equal(f.state[0], 'playing');
});

test('late runtime startup cannot leave an inactive scene rendering after stop', () => {
  const f = fixture({ loaded: false });
  const app = f.load(1);
  assert.equal(app.isStopped, true);
  assert.equal(app.loop, false);
  f.nextTimer(); // The runtime's already queued startup runs before reconciliation.
  assert.equal(app.isStopped, true);
  assert.equal(app.loop, true, 'the fixture reproduces the runtime race');
  f.nextTimer();
  assert.equal(app.isStopped, true);
  assert.equal(app.loop, false, 'reconciliation removes the actual rendering callback');
  assert.deepEqual(app.calls, { play: 1, stop: 2 });
});

test('already discovered scenes reconcile their runtime startup without a load event', () => {
  const f = fixture({ visible: false });
  f.flushTimers();
  assert.deepEqual(f.apps().map((app) => app.loop), [false, false, false]);
});

test('a page opened without focus pauses scenes and grain until focus returns', () => {
  const f = fixture({ focused: false });
  assert.equal(f.paused(), true);
  assert.deepEqual(f.state, ['stopped', 'stopped', 'stopped']);
  f.flushTimers();
  assert.deepEqual(f.apps().map((app) => app.loop), [false, false, false]);
  f.focus(true);
  assert.equal(f.paused(), false);
  assert.deepEqual(f.state, ['playing', 'stopped', 'stopped']);
});

test('focus and tab visibility independently gate scene and grain playback', () => {
  const f = fixture();
  f.flushTimers();
  f.focus(false);
  assert.equal(f.paused(), true);
  assert.deepEqual(f.state, ['stopped', 'stopped', 'stopped']);
  f.visibility(true);
  f.focus(true);
  assert.equal(f.paused(), true);
  assert.deepEqual(f.state, ['stopped', 'stopped', 'stopped']);
  f.visibility(false);
  assert.equal(f.paused(), false);
  assert.equal(f.state[0], 'playing');
  f.focus(false);
  f.visibility(false);
  assert.equal(f.paused(), true);
  assert.equal(f.state[0], 'stopped');
});

test('iframe focus keeps scene playback and grain running when the document still has focus', () => {
  const f = fixture();
  f.flushTimers();
  const before = f.apps().map((app) => ({ ...app.calls }));

  // Focusing Spline's iframe blurs the parent window while the page remains focused.
  f.iframe();
  f.blur({ focused: true });
  assert.equal(f.paused(), false);
  assert.deepEqual(f.state, ['playing', 'stopped', 'stopped']);
  assert.equal(f.apps()[0].loop, true);
  assert.deepEqual(f.apps().map((app) => app.calls), before);
  assert.equal(f.intervalCount(), 1);
  assert.deepEqual(f.intervalDelays(), [500]);

  f.blur({ focused: true });
  f.tickIntervals();
  assert.equal(f.intervalCount(), 1, 'repeated iframe blur must not create parallel focus checks');
  assert.deepEqual(f.apps().map((app) => app.calls), before,
    'repeated iframe blur must not interrupt a drag with playback API calls');
});

test('iframe focus checks start when activeElement updates after the blur event', () => {
  const f = fixture();
  f.flushTimers();
  f.blur({ focused: true }); // Some browsers still report BODY during blur.
  assert.equal(f.intervalCount(), 0);
  f.iframe();
  f.flushTimers();
  assert.equal(f.intervalCount(), 1);
  assert.equal(f.paused(), false);
  assert.equal(f.state[0], 'playing');
});

test('deferred iframe detection cannot restart checks after hiding or suspending the page', () => {
  for (const suspend of [(f) => f.visibility(true), (f) => f.pagehide()]) {
    const f = fixture();
    f.flushTimers();
    f.blur({ focused: true });
    f.iframe();
    suspend(f);
    f.flushTimers();
    assert.equal(f.intervalCount(), 0);
    assert.equal(f.paused(), true);
    assert.deepEqual(f.state, ['stopped', 'stopped', 'stopped']);
  }
});

test('a real window blur still pauses scenes and grain after iframe interaction', () => {
  const f = fixture();
  f.flushTimers();
  f.iframe();
  f.blur({ focused: true });
  f.blur({ focused: false });
  assert.equal(f.paused(), true);
  assert.deepEqual(f.state, ['stopped', 'stopped', 'stopped']);
  assert.deepEqual(f.apps().map((app) => app.loop), [false, false, false]);

  f.focus(true);
  assert.equal(f.paused(), false);
  assert.deepEqual(f.state, ['playing', 'stopped', 'stopped']);
});

test('iframe focus checks detect application loss and return without parent window events', () => {
  const f = fixture({ iframeFocused: true });
  f.flushTimers();
  assert.equal(f.intervalCount(), 1, 'an iframe already focused at initialization is tracked');
  assert.deepEqual(f.intervalDelays(), [500]);

  f.setFocus(false); // Only the cross-origin child receives the native blur.
  f.tickIntervals();
  assert.equal(f.paused(), true);
  assert.deepEqual(f.state, ['stopped', 'stopped', 'stopped']);
  assert.deepEqual(f.apps().map((app) => app.loop), [false, false, false]);
  assert.equal(f.intervalCount(), 1, 'keep checking the iframe to detect application return');

  const pausedCalls = f.apps().map((app) => ({ ...app.calls }));
  const pausedSyncs = f.syncCount();
  f.tickIntervals();
  assert.equal(f.syncCount(), pausedSyncs, 'unchanged focus must not resynchronize the sliders');
  assert.deepEqual(f.apps().map((app) => app.calls), pausedCalls,
    'unchanged focus must not trigger playback calls');

  f.setFocus(true); // Return focuses the iframe without a parent focus event.
  f.tickIntervals();
  assert.equal(f.paused(), false);
  assert.deepEqual(f.state, ['playing', 'stopped', 'stopped']);
  const playingCalls = f.apps().map((app) => ({ ...app.calls }));
  const playingSyncs = f.syncCount();
  f.tickIntervals();
  assert.equal(f.syncCount(), playingSyncs);
  assert.deepEqual(f.apps().map((app) => app.calls), playingCalls);
});

test('focus checks end when iframe focus is left, including without a parent event', () => {
  const f = fixture();
  assert.equal(f.intervalCount(), 0, 'ordinary document focus needs no polling');
  f.iframe();
  f.blur({ focused: true });
  assert.equal(f.intervalCount(), 1);
  f.iframe(false);
  f.focus(true);
  assert.equal(f.intervalCount(), 0);

  f.iframe();
  f.blur({ focused: true });
  assert.equal(f.intervalCount(), 1);
  f.iframe(false);
  f.tickIntervals();
  assert.equal(f.intervalCount(), 0);
});

test('hidden tabs stop iframe focus checks and visible tabs restart only one', () => {
  const f = fixture({ iframeFocused: true });
  assert.equal(f.intervalCount(), 1);
  f.visibility(true);
  assert.equal(f.intervalCount(), 0);
  f.visibility(false);
  assert.equal(f.intervalCount(), 1);
  f.visibility(false);
  assert.equal(f.intervalCount(), 1);

  const hidden = fixture({ iframeFocused: true, hidden: true });
  assert.equal(hidden.intervalCount(), 0, 'a hidden initial page must not start focus checks');
  hidden.visibility(false);
  assert.equal(hidden.intervalCount(), 1);
});

test('page suspension stops iframe focus checks and restoration restarts them', () => {
  const f = fixture({ iframeFocused: true });
  f.pagehide();
  assert.equal(f.intervalCount(), 0);
  f.focus(true);
  assert.equal(f.intervalCount(), 0, 'focus events cannot restart a suspended page');
  f.pageshow();
  assert.equal(f.intervalCount(), 1);
  f.pageshow();
  assert.equal(f.intervalCount(), 1);
});

test('deferred load reconciliation uses the latest slide and focus state', () => {
  const f = fixture({ loaded: false, focused: false });
  const first = f.load(0);
  f.focus(true);
  f.active(1);
  const second = f.load(1);
  f.flushTimers();
  assert.deepEqual(f.state, ['stopped', 'playing', null]);
  assert.equal(first.loop, false);
  assert.equal(second.loop, true);
  f.viewport(false);
  assert.equal(second.loop, false);
  f.focus(false);
  f.focus(true);
  assert.equal(second.loop, false, 'returning focus does not resume an offscreen scene');
});

test('resize updates responsive scene playback without another intersection entry', () => {
  const f = fixture({ hiddenScene: 0 });
  f.flushTimers();
  assert.equal(f.state[0], 'stopped');
  f.setDisplay(0, 'block');
  f.resize();
  assert.equal(f.state[0], 'playing');
  f.setDisplay(0, 'none');
  f.resize();
  assert.equal(f.state[0], 'stopped');
});

test('BFCache suspension pauses and restoration recomputes the viewport', () => {
  const f = fixture();
  f.flushTimers();
  f.pagehide();
  assert.equal(f.paused(), true);
  assert.deepEqual(f.state, ['stopped', 'stopped', 'stopped']);
  f.setViewport(false); // Scroll restoration need not deliver an intersection event first.
  f.pageshow();
  assert.equal(f.paused(), false);
  assert.deepEqual(f.state, ['stopped', 'stopped', 'stopped']);
  f.pagehide();
  f.setViewport(true);
  f.pageshow();
  assert.equal(f.state[0], 'playing');
  f.focus(false);
  f.pagehide();
  f.pageshow();
  assert.equal(f.paused(), true);
  assert.equal(f.state[0], 'stopped');
});

test('settled scenes receive no repeated playback calls for unchanged state', () => {
  const f = fixture();
  f.flushTimers();
  const before = f.apps().map((app) => ({ ...app.calls }));
  f.viewport(true);
  f.active(0);
  f.visibility(false);
  f.resize();
  f.focus(true);
  f.pageshow();
  f.flushTimers();
  assert.deepEqual(f.apps().map((app) => app.calls), before);
});

test('a stale deferred callback does not control an app replaced before settling', () => {
  const f = fixture({ loaded: false });
  const old = f.load(1);
  const oldCalls = { ...old.calls };
  const replacement = f.load(1);
  f.flushTimers();
  assert.deepEqual(old.calls, oldCalls);
  assert.equal(replacement.isStopped, true);
  assert.equal(replacement.loop, false);
});

test('inline Webflow boot keeps the same preloader asset URL as the hosted bundle', () => {
  const base = 'https://cdn.jsdelivr.net/gh/philippkochman1995/interactions.js@ffd5e84/dist/site-body.js';
  for (const inline of [false, true]) {
    const images = [];
    class Element {
      children = [];
      style = { setProperty() {} };
      setAttribute() {}
      appendChild(child) { this.children.push(child); }
      removeEventListener() {}
    }
    const document = {
      documentElement: { lang: 'de' }, body: new Element(),
      baseURI: 'https://website-4bff6e.webflow.io/werk-ueberblick',
      currentScript: { src: inline ? '' : base, getAttribute: () => inline ? base : null },
      querySelector: () => null,
      createElement(tag) { const node = new Element(); if (tag === 'img') images.push(node); return node; },
    };
    const context = {
      exports: {}, document, URL, HTMLElement: Element,
      window: { __sitePreloader: { active: true, cleanup: [] }, matchMedia: () => ({ matches: true }) },
      MutationObserver: class { observe() {} },
      require: (path) => path.includes('signature-variants')
        ? { PRELOADER_FINAL_SIGNATURE_INDEX: 0, setPageSignatureVariant: () => {}, signatureSequence: () => [], SIGNATURE_VARIANTS: [], SIGNATURE_FRAME_MS: 210 }
        : { PRELOADER_SELECTOR: '[data-site-preloader]' },
    };
    runInNewContext(markup, context);
    context.exports.createSitePreloader();
    assert.equal(images[0].src,
      'https://cdn.jsdelivr.net/gh/philippkochman1995/interactions.js@ffd5e84/assets/preloader-signature.svg');
  }
});
