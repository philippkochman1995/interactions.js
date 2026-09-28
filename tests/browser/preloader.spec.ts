import { test, expect } from '@playwright/test';

const fixture = '/tests/fixtures/preloader.html';
const loader = '[data-site-preloader]';

test('cached assets, minimum visibility, session skip and ownership of inert', async ({ page }) => {
  await page.addInitScript(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const state = window.__sitePreloader;
      if (state) {
        (window as any).__wasLocked = document.querySelector('#content')?.hasAttribute('inert');
        void state.ready.then(() => { (window as any).__introDuration = Date.now() - state.startedAt; });
      }
    });
  });
  await page.goto(fixture);
  await page.waitForFunction(() => !window.__sitePreloader?.active);
  expect(await page.evaluate(() => (window as any).__wasLocked)).toBe(true);
  const duration = await page.evaluate(() => (window as any).__introDuration);
  expect(duration).toBeGreaterThanOrEqual(1950);
  await expect(page.locator('#content')).not.toHaveAttribute('inert', '');
  await expect(page.locator('#already-inert')).toHaveAttribute('inert', '');
  await page.reload();
  await expect(page.locator(loader)).toHaveCount(0);
  await expect(page.locator('html')).not.toHaveClass(/is-site-preloading/);
});

test('head watchdog releases a failed main bundle and a late body cannot reopen', async ({ page }) => {
  await page.route('**/dist/site-interactions.js', (route) => route.abort());
  await page.goto(fixture);
  await expect(page.locator(loader)).toBeVisible();
  await expect(page.locator(loader)).toHaveCount(0, { timeout: 10000 });
  await page.addScriptTag({ url: '/dist/site-body.js' });
  await expect(page.locator(loader)).toHaveCount(0);
  await expect(page.locator('#content')).not.toHaveAttribute('inert', '');
});

test('head watchdog also works without body script', async ({ page }) => {
  await page.route('**/dist/site-body.js', (route) => route.abort());
  await page.route('**/dist/site-interactions.js', (route) => route.abort());
  await page.goto(fixture);
  await expect(page.locator('html')).toHaveClass(/is-site-preloading/);
  await expect(page.locator('html')).not.toHaveClass(/is-site-preloading/, { timeout: 10000 });
});

test('blocked storage still releases, repeated boot creates only one overlay', async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(window, 'sessionStorage', { get() { throw new Error('Blocked'); } }));
  await page.route('**/dist/site-interactions.js', (route) => route.abort());
  await page.goto(fixture);
  await page.addScriptTag({ url: '/dist/site-head.js' });
  await page.addScriptTag({ url: '/dist/site-body.js' });
  await expect(page.locator(loader)).toHaveCount(1);
  await page.evaluate(() => window.__sitePreloader!.release());
  await expect(page.locator(loader)).toHaveCount(0);
});

test('late CMS assets join the frozen critical set, errors settle', async ({ page }) => {
  let failImage: () => void = () => {};
  const waiting = new Promise<void>((resolve) => { failImage = resolve; });
  await page.route('**/delayed.svg', async (route) => { await waiting; await route.abort(); });
  await page.goto(`${fixture}?mode=cms`);
  await page.evaluate(() => {
    const image = new Image();
    image.src = '/delayed.svg';
    image.setAttribute('data-preload-priority', 'critical');
    document.querySelector('main')!.append(image);
    document.querySelector('main')!.setAttribute('data-site-assets-ready', '');
  });
  await expect(page.locator(loader)).toBeVisible();
  await page.waitForTimeout(650);
  await expect(page.locator(loader)).toBeVisible();
  expect(Number(await page.locator(loader).getAttribute('aria-valuenow'))).toBeLessThan(100);
  failImage();
  await expect(page.locator(loader)).toHaveCount(0);
});

for (const mode of ['spline', 'native']) {
  test(`${mode} waits for real readiness, late events cannot reopen`, async ({ page }) => {
    await page.goto(`${fixture}?mode=${mode}`);
    await page.waitForTimeout(600);
    await expect(page.locator(loader)).toBeVisible();
    await page.locator('#scene').dispatchEvent(mode === 'native' ? 'w-spline-load' : 'load-complete');
    await expect(page.locator(loader)).toHaveCount(0);
    await page.locator('#scene').dispatchEvent('load-complete');
    await expect(page.locator(loader)).toHaveCount(0);
  });
}

test('three native Webflow scenes all gate release, including an offscreen scene', async ({ page }) => {
  const requests = new Set<string>();
  await page.route('https://prod.spline.design/**', (route) => {
    requests.add(route.request().url());
    return route.fulfill({ body: 'scene', contentType: 'application/octet-stream' });
  });
  await page.goto(`${fixture}?mode=native3`);
  await page.waitForTimeout(2050);
  await expect(page.locator(loader)).toBeVisible();
  await page.locator('#scene').dispatchEvent('w-spline-load');
  await page.locator('#scene-2').dispatchEvent('w-spline-load');
  await page.waitForTimeout(100);
  await expect(page.locator(loader)).toBeVisible();
  expect(Number(await page.locator(loader).getAttribute('aria-valuenow'))).toBeLessThan(100);
  await page.locator('#scene-3').dispatchEvent('w-spline-load');
  await expect(page.locator(loader)).toHaveCount(0);
  expect(requests.size).toBe(3);
});

test('visible progress advances continuously, then content fades before the panel reveals the page', async ({ page }) => {
  await page.addInitScript(() => {
    (window as any).__progressValues = [];
    (window as any).__preloaderExitOrder = { fadeAt: null, moveAt: null };
    const capture = (): void => {
      const overlay = document.querySelector<HTMLElement>('[data-site-preloader]');
      const value = Number(overlay?.getAttribute('aria-valuenow'));
      const values = (window as any).__progressValues as number[];
      if (Number.isFinite(value) && values.at(-1) !== value) values.push(value);
      if (!overlay) return;
      const order = (window as any).__preloaderExitOrder as { fadeAt: number | null; moveAt: number | null };
      const progress = overlay.querySelector<HTMLElement>('.site-preloader__progress');
      if (progress && Number(getComputedStyle(progress).opacity) < 0.99 && order.fadeAt === null) order.fadeAt = performance.now();
      if (Math.abs(new DOMMatrix(getComputedStyle(overlay).transform).m42) > 2 && order.moveAt === null) order.moveAt = performance.now();
    };
    new MutationObserver(capture).observe(document, { attributes: true, childList: true, subtree: true, attributeFilter: ['aria-valuenow', 'style'] });
  });
  await page.route('https://prod.spline.design/**', (route) => route.fulfill({ body: 'scene' }));
  await page.goto(`${fixture}?mode=native`);
  await page.waitForTimeout(1000);
  const values = await page.evaluate(() => (window as any).__progressValues as number[]);
  expect(values[0]).toBe(0);
  expect(values.length).toBeGreaterThan(5);
  expect(values.at(-1)).toBeGreaterThan(values[0]);
  expect(values.every((value, index) => index === 0 || value >= values[index - 1])).toBe(true);
  expect(values.every((value, index) => index === 0 || value - values[index - 1] <= 4)).toBe(true);
  expect(values.at(-1)).toBeLessThan(100);

  await page.locator('#scene').dispatchEvent('w-spline-load');
  await expect(page.locator('html')).toHaveClass(/is-site-preloader-exiting/);
  await expect(page.locator(loader)).toHaveAttribute('aria-valuenow', '100');
  await page.waitForFunction(() => {
    const overlay = document.querySelector<HTMLElement>('[data-site-preloader]');
    return overlay && new DOMMatrix(getComputedStyle(overlay).transform).m42 < -10;
  });
  await expect(page.locator(loader)).toHaveCount(0);
  const exitOrder = await page.evaluate(() => (window as any).__preloaderExitOrder as { fadeAt: number; moveAt: number });
  expect(exitOrder.fadeAt).toBeGreaterThan(0);
  expect(exitOrder.moveAt).toBeGreaterThan(exitOrder.fadeAt);
});

test('a native ready event captured before the main bundle still completes after two seconds', async ({ page }) => {
  await page.route('https://prod.spline.design/**', (route) => route.fulfill({ body: 'scene' }));
  await page.goto(`${fixture}?mode=native-early`);
  await page.waitForFunction(() => !window.__sitePreloader?.active);
  const duration = await page.evaluate(() => Date.now() - window.__sitePreloader!.startedAt);
  expect(duration).toBeGreaterThanOrEqual(1950);
  await expect(page.locator(loader)).toHaveCount(0);
});

test('successful splinecode prefetch alone never counts as runtime readiness', async ({ page }) => {
  await page.route('https://prod.spline.design/**', (route) => route.fulfill({ body: 'scene' }));
  const startedAt = Date.now();
  await page.goto(`${fixture}?mode=native`);
  await page.waitForTimeout(2200);
  await expect(page.locator(loader)).toBeVisible();
  await expect(page.locator(loader)).toHaveCount(0, { timeout: 6500 });
  expect(Date.now() - startedAt).toBeGreaterThanOrEqual(5900);
  await expect(page.locator('#content')).not.toHaveAttribute('inert', '');
});

test('iframe load does not falsely signal a ready scene; timeout releases', async ({ page }) => {
  await page.route('https://prod.spline.design/**', (route) => route.fulfill({ body: '<html></html>', contentType: 'text/html' }));
  await page.goto(`${fixture}?mode=iframe`);
  await page.waitForTimeout(600);
  await expect(page.locator(loader)).toBeVisible();
  await expect(page.locator(loader)).toHaveCount(0, { timeout: 10000 });
});

test('rolling digits carry 9→10 and 99→100 without queued intermediate values', async ({ page }) => {
  await page.route('**/dist/site-interactions.js', (route) => route.abort());
  await page.goto(fixture);
  for (const value of [9, 10, 99, 100]) {
    await page.evaluate(async (value) => {
      const { setPreloaderProgress } = await import('/src/modules/site-preloader.ts');
      setPreloaderProgress(document.querySelector('[data-site-preloader]')!, value);
    }, value);
    await expect(page.locator(loader)).toHaveAttribute('aria-valuenow', String(value));
    await expect.poll(async () => {
      const shown = await page.locator('.site-preloader__digit:not([hidden]) .site-preloader__track > span:first-child').allTextContents();
      return shown.join('');
    }).toBe(String(value));
  }
});

test('reduced motion switches digits immediately; pagehide restores and never replays', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.route('**/dist/site-interactions.js', (route) => route.abort());
  await page.goto(fixture);
  const shown = await page.evaluate(async () => {
    const { setPreloaderProgress } = await import('/src/modules/site-preloader.ts');
    setPreloaderProgress(document.querySelector('[data-site-preloader]')!, 100);
    return [...document.querySelectorAll('.site-preloader__track > span:first-child')].map((e) => e.textContent).join('');
  });
  expect(shown).toBe('100');
  await page.evaluate(() => {
    window.dispatchEvent(new PageTransitionEvent('pagehide', { persisted: true }));
    window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true }));
  });
  await expect(page.locator(loader)).toHaveCount(0);
  await expect(page.locator('#content')).not.toHaveAttribute('inert', '');
});

test('responsive picture uses only the selected candidate', async ({ page }) => {
  await page.route('**/wide.svg', (route) => route.fulfill({ contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"/>' }));
  await page.goto(`${fixture}?mode=cms`);
  const tasks = await page.evaluate(async () => {
    const { collectPreloadTasks } = await import('/src/modules/site-preloader-assets.ts');
    const picture = document.createElement('picture');
    picture.innerHTML = '<source media="(min-width: 800px)" srcset="/wide.svg"><img src="/small.svg" data-preload-priority="warm">';
    document.querySelector('main')!.append(picture);
    await new Promise((resolve) => picture.querySelector('img')!.addEventListener('load', resolve, { once: true }));
    return collectPreloadTasks().filter((t) => /wide.svg|small.svg/.test(t.key)).map((t) => ({ key: t.key, priority: t.priority }));
  });
  expect(tasks).toHaveLength(1);
  expect(tasks[0].priority).toBe('warm');
  expect(tasks[0].key).toContain('wide.svg');
});

test('incoming page transition takes precedence over session intro', async ({ page }) => {
  await page.addInitScript(() => sessionStorage.setItem('site-page-transition', 'pending'));
  await page.goto(fixture);
  await expect(page.locator(loader)).toHaveCount(0);
  await expect(page.locator('[data-page-transition-overlay]')).toHaveCount(1);
});

test('warmup stays non-blocking and malformed manifests fail open', async ({ page }) => {
  let finishWarm!: () => void;
  const hold = new Promise<void>((resolve) => { finishWarm = resolve; });
  await page.route('**/warm-scene.splinecode', async (route) => { await hold; await route.abort(); });
  await page.goto(`${fixture}?mode=cms`);
  await page.evaluate(() => {
    const manifest = document.createElement('script');
    manifest.type = 'application/json';
    manifest.setAttribute('data-site-preload-manifest', '');
    manifest.textContent = JSON.stringify([{ type: 'spline', url: '/warm-scene.splinecode', priority: 'warm' }]);
    document.body.append(manifest);
    const malformed = manifest.cloneNode() as HTMLScriptElement;
    malformed.textContent = '{bad';
    document.body.append(malformed);
    document.querySelector('main')!.setAttribute('data-site-assets-ready', '');
  });
  await expect(page.locator(loader)).toHaveCount(0);
  finishWarm();
});

test('critical lazy image is started without scrolling; duplicate URL counts once', async ({ page }) => {
  await page.route('**/lazy.svg', (route) => route.fulfill({ contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"/>' }));
  await page.goto(`${fixture}?mode=cms`);
  const count = await page.evaluate(async () => {
    const image = new Image();
    image.loading = 'lazy';
    image.style.marginTop = '5000px';
    image.src = '/lazy.svg';
    image.setAttribute('data-preload-priority', 'critical');
    document.querySelector('main')!.append(image, image.cloneNode());
    const { collectPreloadTasks } = await import('/src/modules/site-preloader-assets.ts');
    const count = collectPreloadTasks().filter(t => t.key.endsWith('/lazy.svg')).length;
    document.querySelector('main')!.setAttribute('data-site-assets-ready', '');
    return count;
  });
  expect(count).toBe(1);
  await expect(page.locator(loader)).toHaveCount(0);
  expect(await page.locator('img[src="/lazy.svg"]').first().evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
});

test('preloader is excluded from work-flip hiding and background cannot receive focus', async ({ page }) => {
  await page.route('**/dist/site-interactions.js', route => route.abort());
  await page.goto(fixture);
  await page.evaluate(() => document.documentElement.classList.add('is-work-flip-pending'));
  await expect(page.locator(loader)).toBeVisible();
  await page.keyboard.press('Tab');
  expect(await page.locator('#content a').evaluate(a => a === document.activeElement)).toBe(false);
  await page.evaluate(() => window.__sitePreloader!.release());
  await expect(page.locator('html')).toHaveClass(/is-work-flip-pending/);
});

test('srcset-only lazy pictures are critical even before currentSrc exists', async ({ page }) => {
  let release!: () => void;
  const hold = new Promise<void>((resolve) => { release = resolve; });
  await page.route('**/only-srcset.svg', async (route) => {
    await hold;
    await route.fulfill({ contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"/>' });
  });
  await page.goto(`${fixture}?mode=cms`);
  await page.evaluate(() => {
    const picture = document.createElement('picture');
    picture.innerHTML = '<source srcset="/only-srcset.svg"><img id="srcset-only" loading="lazy" data-preload-priority="critical" style="margin-top:5000px">';
    document.querySelector('main')!.append(picture);
    document.querySelector('main')!.setAttribute('data-site-assets-ready', '');
  });
  await page.waitForTimeout(650);
  await expect(page.locator(loader)).toBeVisible();
  release();
  await expect(page.locator(loader)).toHaveCount(0);
  expect(await page.locator('#srcset-only').evaluate((img: HTMLImageElement) => img.naturalWidth)).toBe(100);
});
