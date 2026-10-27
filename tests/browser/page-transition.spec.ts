import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => sessionStorage.setItem('site-preloader-seen', '4'));
  await page.goto('/tests/fixtures/page-transition.html');
  await expect(page.locator('[data-page-transition-overlay]')).toHaveCount(1);
});

test('curtain covers and uncovers from top to bottom without a title', async ({ page }) => {
  const curtain = page.locator('[data-page-transition-overlay]');
  await expect(curtain).toHaveCSS('clip-path', 'inset(0px 0px 100%)');
  await page.locator('#page-link').click();
  await expect(curtain).toHaveClass(/is-covering/);
  await page.waitForTimeout(230);
  const duringCover = await curtain.evaluate((element) => getComputedStyle(element).clipPath);
  expect(duringCover).toMatch(/^inset\(0px 0px (?:[1-9]\d?|100)(?:\.\d+)?%/);
  await page.waitForURL('**/page-transition.html?next=direct');
  await expect(page.locator('.page-transition-overlay__title')).toHaveCount(0);
  await expect(curtain).toHaveClass(/is-uncovering/);
  await page.waitForTimeout(250);
  const duringUncover = await curtain.evaluate((element) => getComputedStyle(element).clipPath);
  expect(duringUncover).toMatch(/^inset\((?:[1-9]\d?|100)(?:\.\d+)?% 0px 0px/);
  await expect(curtain).not.toHaveClass(/is-uncovering/);
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
