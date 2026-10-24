import { expect, test } from '@playwright/test';

test('preloader follows the staged intro and timed signature progress', async ({ page }) => {
  test.setTimeout(30000);
  await page.addInitScript(() => {
    const marks: Record<string, number> = {};
    (window as any).__preloaderMarks = marks;
    const watch = (): void => {
      const overlay = document.querySelector<HTMLElement>('[data-site-preloader]');
      const name = overlay?.querySelector<HTMLElement>('.site-preloader__name');
      if (!overlay || !name) return;
      const now = performance.now();
      if (name.classList.contains('is-ready') && !marks.ready) marks.ready = now;
      if (name.children[0].classList.contains('is-visible') && !marks.title) marks.title = now;
      if (name.children[1].classList.contains('is-visible') && !marks.date) marks.date = now;
      if (name.classList.contains('is-settled') && !marks.settle) marks.settle = now;
      if (overlay.classList.contains('is-loading') && !marks.loading) marks.loading = now;
      if (overlay.getAttribute('aria-valuenow') === '100' && !marks.complete) marks.complete = now;
      if (overlay.classList.contains('is-fading') && !marks.fade) marks.fade = now;
      if (overlay.classList.contains('is-curtain') && !marks.curtain) marks.curtain = now;
    };
    new MutationObserver(watch).observe(document, { subtree: true, childList: true, attributes: true, attributeFilter: ['class', 'aria-valuenow'] });
  });
  await page.goto('/tests/fixtures/preloader.html');
  await expect(page.locator('[data-site-preloader]')).toHaveCount(0, { timeout: 20000 });
  const marks = await page.evaluate(() => (window as any).__preloaderMarks as Record<string, number>);
  const near = (actual: number, expected: number, tolerance = 180) => expect(actual).toBeGreaterThanOrEqual(expected - tolerance);
  near(marks.title - marks.ready, 400);
  expect(marks.title - marks.ready).toBeLessThan(580);
  near(marks.date - marks.ready, 1500);
  expect(marks.date - marks.ready).toBeLessThan(1680);
  near(marks.settle - marks.ready, 3400);
  expect(marks.settle - marks.ready).toBeLessThan(3580);
  near(marks.loading - marks.ready, 4200);
  expect(marks.loading - marks.ready).toBeLessThan(4380);
  near(marks.complete - marks.loading, 6800, 200);
  expect(marks.complete - marks.loading).toBeLessThan(7000);
  near(marks.fade - marks.complete, 600, 200);
  near(marks.curtain - marks.fade, 500, 160);
  await expect(page.locator('.site-preloader-replay')).toBeVisible();
});

test('replay resets progress and starts the first signature again', async ({ page }) => {
  test.setTimeout(35000);
  await page.goto('/tests/fixtures/preloader.html');
  await expect(page.locator('.site-preloader-replay')).toBeVisible({ timeout: 20000 });
  await page.locator('.site-preloader-replay').click();
  const overlay = page.locator('[data-site-preloader]');
  await expect(overlay).toBeVisible();
  await expect(overlay).toHaveAttribute('aria-valuenow', '0');
  await expect(overlay).toHaveAttribute('data-signature-index', '0', { timeout: 6000 });
  await expect(page.locator('.site-preloader-replay')).toBeHidden();
  await page.evaluate(() => window.__sitePreloader?.release());
});

test('reduced motion skips the timed choreography', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const started = Date.now();
  await page.goto('/tests/fixtures/preloader.html');
  await expect(page.locator('[data-site-preloader]')).toHaveCount(0, { timeout: 5000 });
  expect(Date.now() - started).toBeLessThan(5000);
});
