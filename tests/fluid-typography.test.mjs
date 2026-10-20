import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { chromium } from '@playwright/test';

const snippet = await readFile(new URL('../snippets/fluid-typography.html', import.meta.url), 'utf8');
const siteHead = await readFile(new URL('../snippets/site-head.html', import.meta.url), 'utf8');
const detailCss = await readFile(new URL('../cms-work-detail.css', import.meta.url), 'utf8');
const canvasCss = await readFile(new URL('../cms-canvas.css', import.meta.url), 'utf8');
const worksCss = await readFile(new URL('../cms-works.css', import.meta.url), 'utf8');
const targets = {
  'h-large-font-size': [60, 60, 75], 'h1-font-size': [40, 40, 50],
  'h2-font-size': [26.672, 26.672, 33.34], 'h3-font-size': [18.336, 18.336, 22.92],
  'p-large-font-size': [20, 20, 25], 'p-font-size': [16, 16, 20],
  'p-small-font-size': [14, 14, 17.5], 'footer-14': [14, 14, 17.5],
  'footer-12': [12, 12, 15],
};
const widths = [320, 390, 478, 479, 767, 768, 991, 992, 1439, 1440, 1441, 1920, 2560, 3440];
const expected = (values, width) => width <= 390 ? values[0] : width <= 1440
  ? values[0] + (values[1] - values[0]) * (width - 390) / 1050
  : width < 2560 ? values[1] + (values[2] - values[1]) * (width - 1440) / 1120 : values[2];

function fixture() {
  const probes = Object.keys(targets).map(name => `<span data-token="${name}" style="font-size:var(--_sizes---${name})">Probe</span>`).join('');
  return `<!doctype html><html lang="de"><head><meta charset="utf-8">
    <style>*{box-sizing:border-box}body{margin:0}:root{--_sizes---h1-font-size:2.5rem;--_sizes---p-font-size:.9375rem}
    .u-section{padding-inline:var(--fw-fluid-site-margin,1.5625rem)}
    .u-container{width:100%;max-width:2560px;margin-inline:auto}
    .u-h1{font-size:var(--_sizes---h1-font-size);line-height:1;max-width:17ch}
    .u-p{font-size:var(--_sizes---p-font-size);line-height:1.4;max-width:60ch}
    .bio_hero_section{position:relative;height:92svh;min-height:34rem;padding:0 1.56rem 4.896rem;overflow:hidden}
    .bio_hero_container{height:100%;display:flex;flex-direction:column;justify-content:flex-end}
    .bio_hero_content{max-width:46rem}.bio_hero_sub{font-size:var(--_sizes---h1-font-size);line-height:1.15;max-width:34ch}
    .accordion_header{display:flex;justify-content:space-between;align-items:center}.accordion_heading{margin:0}
    .accordion_icon{height:1.7rem;flex:none}.accordion_item{padding-block:var(--accordion-item-padding-y,1rem)}
    .site-menu{position:fixed;right:1.5rem;bottom:1.5rem;width:21rem;max-width:calc(100vw - 2rem)}
    [data-token]{display:block}.site-menu__toggle{font-size:var(--_sizes---footer-14);line-height:1.375;min-height:3.125rem;height:auto;padding:.75rem 1.5rem;max-width:100%}
    .cms-canvas__title{position:static!important;opacity:1!important;transform:none!important}
    </style><style>${detailCss}\n${canvasCss}\n${worksCss}</style>${snippet}</head><body>
    <section class="bio_hero_section"><div class="bio_hero_container u-container"><div class="bio_hero_content">
    <div class="bio_hero_sub">Franz West ist einer der österreichischen Künstler, der bereits zu Lebzeiten Weltruhm erlangte.</div>
    </div></div></section>
    <section class="u-section"><div class="u-container" data-work-label>Ausgewählte Werke</div></section>
    <div class="cms-works"><section class="cms-works-filter u-section"><div class="cms-works-filter__container u-container">Filter</div></section>
    <div class="cms-works__grid-host u-section"><div class="cms-works__grid-mount"><div class="cms-works__grid">
    <div class="cms-works__column">Werk A</div><div class="cms-works__column">Werk B</div><div class="cms-works__column">Werk C</div><div class="cms-works__column">Werk D</div>
    </div></div></div></div>
    <section class="accordion_section u-section"><div class="accordion_item"><div class="accordion_header">
    <h2 class="accordion_heading u-h1">Ausstellungsgeschichtedokumentationsarchivveröffentlichungen</h2><span class="accordion_icon">+</span></div>
    <div class="accordion_content"><p class="accordion_p u-p">Die Beschreibung der Werkgruppen wächst mit der gemeinsamen Schriftgröße.</p></div></div></section>
    <div class="site-menu"><button class="site-menu__toggle">Überblick</button></div>
    <section class="u-section"><div class="u-container">${probes}
    <h1 class="u-h1">Franz West und die internationale Ausstellungsgeschichte</h1>
    <h1 class="u-h1" data-long-title>Ausstellungsgeschichtedokumentationsarchivveröffentlichungen</h1>
    <p class="u-p">Langer deutscher Lesetext für die Prüfung der Zeilenbreite und der flüssigen Schriftgrößen.</p>
    <h1 class="cms-work-detail__title">Franz West und Wien</h1>
    <div class="cms-work-detail__text"><p>Werkdetails mit derselben Absatzgröße.</p></div>
    <div class="cms-canvas__title">Werk im Überblick</div>
    <button class="site-menu__toggle">Werk und Ausstellungsgeschichte</button>
    </div></section></body></html>`;
}

test('fluid snippet stays in sync with the deployable head', () => {
  const start = siteHead.indexOf('<!-- BEGIN FW FLUID TYPOGRAPHY v2 -->');
  const end = siteHead.indexOf('<!-- END FW FLUID TYPOGRAPHY v2 -->') + '<!-- END FW FLUID TYPOGRAPHY v2 -->'.length;
  assert.equal(siteHead.slice(start, end).trim(), snippet.trim());
});

test('browser resolves every anchor, CMS alias and cap without a breakpoint jump', async () => {
  const browser = await chromium.launch(process.platform === 'darwin'
    ? { executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' } : {});
  try {
    const page = await browser.newPage();
    await page.setContent(fixture());
    for (const width of widths) {
      await page.setViewportSize({ width, height: 1000 });
      const values = await page.evaluate(() => {
        const font = selector => parseFloat(getComputedStyle(document.querySelector(selector)).fontSize);
        const section = getComputedStyle(document.querySelector('.u-section'));
        const container = document.querySelector('.u-container');
        const toggle = document.querySelector('.site-menu__toggle');
        const rect = selector => { const r = document.querySelector(selector).getBoundingClientRect(); return {left:r.left,right:r.right,width:r.width,bottom:r.bottom}; };
        return {
          tokens: Object.fromEntries([...document.querySelectorAll('[data-token]')].map(el => [el.dataset.token, parseFloat(getComputedStyle(el).fontSize)])),
          title: font('.cms-work-detail__title'), body: font('.cms-work-detail__text'), canvas: font('.cms-canvas__title'),
          root: parseFloat(getComputedStyle(document.documentElement).fontSize),
          margin: parseFloat(section.paddingLeft), container: container.getBoundingClientRect().width,
          overflow: document.documentElement.scrollWidth > innerWidth,
          clippedToggle: toggle.scrollHeight > toggle.clientHeight || toggle.scrollWidth > toggle.clientWidth,
          label: rect('[data-work-label]'), filter: rect('.cms-works-filter__container'), grid: rect('.cms-works__grid-mount'),
          accordion: rect('.accordion_item'), menu: rect('.site-menu'), bio: rect('.bio_hero_content'),
          bioContainer: rect('.bio_hero_container'), bioText: rect('.bio_hero_sub'), bioSection: rect('.bio_hero_section'),
          gutter: parseFloat(getComputedStyle(document.querySelector('.cms-works__grid')).columnGap),
        };
      });
      for (const [name, anchors] of Object.entries(targets)) {
        assert.ok(Math.abs(values.tokens[name] - expected(anchors, width)) < .002, `${name} at ${width}: ${values.tokens[name]}`);
      }
      assert.equal(values.title, values.tokens['h1-font-size']);
      assert.equal(values.body, values.tokens['p-font-size']);
      assert.equal(values.canvas, values.tokens['p-font-size']);
      assert.equal(values.root, 16);
      assert.ok(Math.abs(values.margin - expected([16, 48, 80], width)) < .002);
      assert.ok(Math.abs(values.gutter - expected([16, 24, 40], width)) < .002);
      assert.ok(values.container <= 2560);
      for (const key of ['filter','grid','accordion']) {
        assert.ok(Math.abs(values[key].left - values.label.left) < .02, `${key} left at ${width}`);
        assert.ok(Math.abs(values[key].right - values.label.right) < .02, `${key} right at ${width}`);
      }
      assert.ok(Math.abs(values.menu.right - values.label.right) < .02, `menu edge at ${width}`);
      assert.ok(Math.abs(values.bio.width / values.bioContainer.width - (width <= 991 ? 1 : 7/12)) < .0001);
      assert.ok(values.bioText.bottom <= values.bioSection.bottom, `cropped bio at ${width}`);
      for (const [name, anchors] of Object.entries(targets)) {
        assert.ok(Math.abs(values.tokens[name] / values.tokens['p-font-size'] - anchors[1]/16) < .00002, `${name} ratio at ${width}`);
      }
      assert.equal(values.overflow, false, `horizontal overflow at ${width}`);
      assert.equal(values.clippedToggle, false, `clipped toggle at ${width}`);
    }
  } finally { await browser.close(); }
});

test('200% zoom equivalent retains readable CMS text and unclipped controls', async () => {
  const browser = await chromium.launch(process.platform === 'darwin'
    ? { executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' } : {});
  try {
    // A 1440px desktop zoomed to 200% has 720 CSS pixels of layout width.
    const context = await browser.newContext({ viewport: { width: 720, height: 500 }, deviceScaleFactor: 2 });
    const page = await context.newPage();
    await page.setContent(fixture());
    assert.deepEqual(await page.evaluate(() => {
      const button = document.querySelector('button');
      return { body: getComputedStyle(document.querySelector('.cms-work-detail__text')).fontSize,
        overflow: document.documentElement.scrollWidth > innerWidth,
        clipped: button.scrollHeight > button.clientHeight || button.scrollWidth > button.clientWidth };
    }), { body: '16px', overflow: false, clipped: false });
  } finally { await browser.close(); }
});
