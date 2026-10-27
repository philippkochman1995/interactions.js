import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => sessionStorage.setItem('site-preloader-seen', '4'));
  await page.goto('/tests/fixtures/page-transition.html');
  await expect(page.locator('[data-page-transition-overlay]')).toHaveCount(1);
});

test('transition fades to white and back without a title', async ({ page }) => {
  const curtain = page.locator('[data-page-transition-overlay]');
  await expect(curtain).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  await expect(curtain).toHaveCSS('opacity', '0');
  await page.locator('#page-link').click({ noWaitAfter: true });
  await expect(curtain).toHaveClass(/is-covering/);
  await page.waitForTimeout(90);
  const duringCover = await curtain.evaluate((element) => Number(getComputedStyle(element).opacity));
  expect(duringCover).toBeGreaterThan(0);
  expect(duringCover).toBeLessThan(1);
  await page.waitForURL('**/page-transition.html?next=direct');
  await expect(page.locator('.page-transition-overlay__title')).toHaveCount(0);
  await expect(curtain).not.toHaveClass(/is-uncovering/);
  await expect(curtain).toHaveCSS('opacity', '0');
});

test('destination fades in before the main interaction bundle finishes loading', async ({ page }) => {
  await page.route('**/dist/site-interactions.js', async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    await route.continue();
  });
  await page.locator('#page-link').click({ noWaitAfter: true });
  await page.waitForURL('**/page-transition.html?next=direct', { waitUntil: 'commit' });
  await expect(page.locator('[data-page-transition-overlay]')).toHaveCSS('opacity', '0', { timeout: 600 });
  expect(await page.evaluate(() => Boolean(window.SiteInteractions))).toBe(false);
});

test('menu starts closing before the curtain begins', async ({ page }) => {
  const menu = page.locator('[data-site-menu]');
  const panel = page.locator('[data-site-menu-panel]');
  const curtain = page.locator('[data-page-transition-overlay]');
  await menu.locator('[data-site-menu-toggle]').click();
  await expect(menu).toHaveClass(/is-open/);
  await page.waitForTimeout(550);
  const openHeight = await panel.evaluate((element) => element.getBoundingClientRect().height);
  await menu.locator('[data-site-menu-link]').click({ noWaitAfter: true });
  await expect(curtain).toHaveClass(/is-covering/);
  const overlappingHeight = await panel.evaluate((element) => element.getBoundingClientRect().height);
  expect(overlappingHeight).toBeLessThan(openHeight);
  expect(overlappingHeight).toBeGreaterThan(50);
  await page.waitForURL('**/page-transition.html?next=menu');
});
