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

function fixture({ visible = true, hidden = false, loaded = true, observer = true } = {}) {
  const documentEvents = new Map();
  const windowEvents = new Map();
  const mutations = [];
  const intersections = [];
  const state = [null, null, null];
  const instances = new Map();
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
  let inViewport = visible;
  slider.getBoundingClientRect = () => ({
    top: inViewport ? 0 : -600, bottom: inViewport ? 600 : 0,
    left: 0, right: 800, width: 800, height: 600,
  });
  slider.querySelector = () => track;
  track.children = slides;
  track.querySelectorAll = () => scenes;
  const load = (index) => instances.set(scenes[index], { spline: {
    play() { state[index] = 'playing'; },
    stop() { state[index] = 'stopped'; },
  } });
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
    querySelectorAll: () => [slider],
    addEventListener: (name, callback) => documentEvents.set(name, callback),
  };
  const window = {
    innerWidth: 1000, innerHeight: 800,
    Webflow: { require: () => ({ getInstance: (scene) => instances.get(scene) }) },
    addEventListener: (name, callback) => windowEvents.set(name, callback),
  };
  const context = { exports: {}, window, document, Element, HTMLElement: Element, MutationObserver,
    IntersectionObserver: observer ? IntersectionObserver : undefined };
  runInNewContext(source, context);
  context.exports.initHeroSplineSlides();
  return {
    state,
    visibility(hidden) { document.hidden = hidden; documentEvents.get('visibilitychange')(); },
    viewport(value, width = 800, height = 600) {
      inViewport = value;
      intersections.forEach((callback) => callback([{
        target: slider, isIntersecting: value, intersectionRect: { width, height },
      }]));
      if (!observer) windowEvents.get('scroll')();
    },
    active(index) {
      slides.forEach((slide, i) => {
        slide.inert = i !== index;
        slide.attrs['aria-hidden'] = String(i !== index);
      });
      mutations.forEach((callback) => callback());
    },
    load(index) { load(index); documentEvents.get('w-spline-load')({ target: scenes[index] }); },
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

test('inline Webflow boot keeps the same preloader asset URL as the hosted bundle', () => {
  const base = 'https://cdn.jsdelivr.net/gh/philippkochman1995/interactions.js@ffd5e84/dist/site-body.js';
  for (const inline of [false, true]) {
    const images = [];
    class Element {
      children = [];
      setAttribute() {}
      appendChild(child) { this.children.push(child); }
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
      window: { __sitePreloader: { active: true, cleanup: [] } },
      MutationObserver: class { observe() {} },
      require: () => ({ PRELOADER_SELECTOR: '[data-site-preloader]' }),
    };
    runInNewContext(markup, context);
    context.exports.createSitePreloader();
    assert.equal(images[0].src,
      'https://cdn.jsdelivr.net/gh/philippkochman1995/interactions.js@ffd5e84/assets/preloader-signature.svg');
  }
});
