import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
import ts from 'typescript';

const head = readFileSync(new URL('../dist/site-head.js', import.meta.url), 'utf8');
const body = readFileSync(new URL('../dist/site-body.js', import.meta.url), 'utf8');
const logo = ts.transpileModule(readFileSync(new URL('../src/modules/logo-variants.ts', import.meta.url), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2018 },
}).outputText;

function fixture(values = {}, reduced = false, blocked = false) {
  const classes = new Set();
  const storage = new Map(Object.entries(values));
  const events = {};
  const timers = [];
  const intervals = new Map();
  let timerId = 0;
  function element(tag) {
    return {
      tag, children: [], attrs: {}, events: {},
      style: { visibility: '', setProperty(key, value) { this[key] = value; } },
      setAttribute(key, value) { this.attrs[key] = value; },
      appendChild(child) { this.children.push(child); },
      addEventListener(event, handler) { this.events[event] = handler; },
    };
  }
  const rootBody = element('body');
  const document = {
    body: rootBody,
    documentElement: { classList: {
      add: (...names) => names.forEach((name) => classes.add(name)),
      remove: (...names) => names.forEach((name) => classes.delete(name)),
      contains: (name) => classes.has(name),
    } },
    createElement: element,
    querySelector(selector) {
      const attr = selector.includes('data-work-flip-ghost') ? 'data-work-flip-ghost' : 'data-page-transition-overlay';
      return rootBody.children.find((node) => attr in node.attrs) ?? null;
    },
    querySelectorAll: () => [],
    addEventListener: (name, handler) => { events[name] = handler; },
  };
  const window = {
    sessionStorage: {
      getItem(key) { if (blocked) throw new Error('Blocked'); return storage.get(key) ?? null; },
      removeItem: (key) => storage.delete(key),
    },
    matchMedia: () => ({ matches: reduced }),
    setTimeout: (fn) => timers.push(fn),
    setInterval(fn, delay) { assert.equal(delay, 250); intervals.set(++timerId, fn); return timerId; },
    clearInterval: (id) => intervals.delete(id),
  };
  const context = { document, window, Date, exports: {}, Image: class {}, getComputedStyle: () => ({ position: 'static', color: 'rgb(6, 2, 26)' }) };
  return { context, classes, storage, events, timers, intervals, element, run: (source) => runInNewContext(source, context) };
}

const payload = () => JSON.stringify({ src: 'https://example.test/work.jpg', rect: { top: 10, left: 20, width: 300, height: 400 }, ts: Date.now() });

test('classic boot bundles execute without module syntax and create one overlay', () => {
  const f = fixture();
  f.run(head); f.run(body); f.run(body);
  assert.equal(f.classes.size, 0);
  assert.equal(f.context.document.body.children.length, 1);
});

test('pending page transition covers boot, then releases at DOM ready; missing module fails open', () => {
  const f = fixture({ 'site-page-transition': 'pending' });
  f.run(head); f.run(body);
  assert.ok(f.classes.has('is-page-transition-boot'));
  f.events.DOMContentLoaded();
  assert.ok(!f.classes.has('is-page-transition-boot'));
  assert.ok(f.classes.has('is-page-transition-pending'));
  f.timers.forEach((fn) => fn());
  assert.equal(f.classes.size, 0);
});

test('failsafe leaves an overlay already controlled by GSAP alone', () => {
  const f = fixture({ 'site-page-transition': 'pending' });
  f.run(head); f.run(body);
  f.context.document.body.children[0].style.transform = 'translate(0,0)';
  f.timers.forEach((fn) => fn());
  assert.ok(f.classes.has('is-page-transition-pending'));
});

test('work flip ghost retains image and geometry, without duplicates', () => {
  const f = fixture({ 'site-work-flip': payload() });
  f.run(head); f.run(body); f.run(body);
  assert.ok(f.classes.has('is-work-flip-pending'));
  const ghost = f.context.document.body.children[0];
  assert.equal(ghost.style.width, '300px');
  assert.equal(ghost.style.top, '10px');
  assert.equal(ghost.children[0].src, 'https://example.test/work.jpg');
  assert.equal(f.context.document.body.children.length, 2);
});

test('invalid, expired, reduced motion and unavailable storage do not hide the page', () => {
  const stale = JSON.parse(payload()); stale.ts -= 9000;
  const invalid = JSON.parse(payload()); invalid.rect.width = 0;
  for (const f of [fixture({ 'site-work-flip': '{bad' }), fixture({ 'site-work-flip': JSON.stringify(stale) }),
    fixture({ 'site-work-flip': JSON.stringify(invalid) }), fixture({ 'site-work-flip': payload() }, true), fixture({}, false, true)]) {
    f.run(head); f.run(body);
    assert.equal(f.classes.size, 0);
  }
});

test('payload removed between head and body releases work flip visibility', () => {
  const f = fixture({ 'site-work-flip': payload() });
  f.run(head); f.storage.clear(); f.run(body);
  assert.equal(f.classes.size, 0);
});

for (const tag of ['svg', 'img']) {
  test(`logo ${tag}: single pass, tall Variant7, original colour and pointerleave reset`, () => {
    const f = fixture();
    const link = f.element('a');
    const original = f.element(tag);
    link.querySelector = (selector) => selector.includes('data-logo-variant') ? link.children[0] : original;
    f.context.document.querySelectorAll = () => [link];
    f.run(logo); f.context.exports.initLogoVariants(); f.context.exports.initLogoVariants();
    assert.equal(link.children.length, 1);
    link.events.pointerenter();
    const overlay = link.children[0];
    assert.equal(original.style.visibility, 'hidden');
    assert.equal(overlay.style.color, 'rgb(6, 2, 26)');
    for (let i = 0; i < 4; i++) [...f.intervals.values()][0]();
    assert.equal(overlay.style.height, '240%');
    [...f.intervals.values()][0](); [...f.intervals.values()][0]();
    assert.equal(original.style.visibility, '');
    assert.equal(f.intervals.size, 0);
    link.events.pointerenter(); link.events.pointerleave();
    assert.equal(overlay.style.display, 'none');
    assert.equal(f.intervals.size, 0);
  });
}

test('logo honours reduced motion', () => {
  const f = fixture({}, true);
  const link = f.element('a');
  const original = f.element('svg');
  link.querySelector = (selector) => selector.includes('data-logo-variant') ? null : original;
  f.context.document.querySelectorAll = () => [link];
  f.run(logo); f.context.exports.initLogoVariants(); link.events.pointerenter();
  assert.equal(original.style.visibility, '');
  assert.equal(f.intervals.size, 0);
});
