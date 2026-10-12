import { test, expect } from '@playwright/test';

const fixture = '/tests/fixtures/mobile-hero-spline.html';

test('mobile HTML reaches Webflow with only the phone Spline scene', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(fixture);
  expect(await page.evaluate(() => (window as any).scenesAtWebflowInit)).toEqual([
    'werk_hero_spline is-mobile-scene',
  ]);
  await page.setViewportSize({ width: 844, height: 390 });
  await expect(page.locator('.is-mobile-scene')).toHaveCSS('visibility', 'visible');
});

test('desktop HTML retains its own Spline scene', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(fixture);
  expect(await page.evaluate(() => (window as any).scenesAtWebflowInit)).toEqual([
    'werk_hero_spline is-desktop-scene',
    'werk_hero_spline is-mobile-scene',
  ]);
});
