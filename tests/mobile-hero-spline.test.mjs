import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
import ts from 'typescript';

const source = ts.transpileModule(readFileSync(new URL('../src/modules/mobile-hero-spline.ts', import.meta.url), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2018 },
}).outputText;

function fixture({ narrow = false, coarse = false, screenWidth = 390, screenHeight = 844 } = {}) {
  const scenes = [];
  const listeners = new Map();
  let mutation;
  class Element {
    constructor(kind = '') { this.kind = kind; this.removed = false; }
    matches(selector) { return selector.includes('.is-desktop-scene') && this.kind === 'desktop'; }
    querySelectorAll(selector) { return scenes.filter((scene) => !scene.removed && scene.matches(selector)); }
    remove() { this.removed = true; }
  }
  class MutationObserver {
    constructor(callback) { mutation = callback; }
    observe() {}
    disconnect() {}
  }
  const root = new Element();
  const classes = new Set();
  root.classList = { add: (value) => classes.add(value) };
  const document = { documentElement: root, readyState: 'loading', addEventListener: (name, callback) => listeners.set(name, callback) };
  const window = { screen: { width: screenWidth, height: screenHeight }, matchMedia: (query) => ({
    matches: query.includes('max-width') ? narrow : coarse,
  }) };
  const context = { exports: {}, Element, MutationObserver, document, window };
  runInNewContext(source, context);
  context.exports.pruneMobileHeroSpline();
  return {
    classes,
    parseScene(kind) {
      const scene = new Element(kind);
      scenes.push(scene);
      mutation?.([{ addedNodes: [scene] }]);
      return scene;
    },
  };
}

test('phone removes desktop renderer before Webflow can scan parsed scenes', () => {
  const page = fixture({ narrow: true });
  const desktop = page.parseScene('desktop');
  const mobile = page.parseScene('mobile');
  assert.equal(desktop.removed, true);
  assert.equal(mobile.removed, false);
  assert.equal(page.classes.has('site-mobile-hero-spline'), true);
});

test('phone in landscape still keeps only the mobile scene', () => {
  const page = fixture({ coarse: true, screenWidth: 844, screenHeight: 390 });
  assert.equal(page.parseScene('desktop').removed, true);
  assert.equal(page.parseScene('mobile').removed, false);
});

test('desktop leaves both scenes for its normal breakpoint behavior', () => {
  const page = fixture({ screenWidth: 1440, screenHeight: 900 });
  assert.equal(page.parseScene('desktop').removed, false);
  assert.equal(page.parseScene('mobile').removed, false);
  assert.equal(page.classes.has('site-mobile-hero-spline'), false);
});
