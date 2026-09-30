import { expect, test } from '@playwright/test';

test('CMS detail text stays visible after reveal styles were applied to its source', async ({ page }) => {
  await page.goto('/tests/fixtures/work-detail.html');

  const properties = page.locator('.cms-work-detail__properties p');
  const text = page.locator('.cms-work-detail__text p');

  await expect(properties).toContainText('Eisendraht, Gaze, Gips, Farbe');
  await expect(properties).toContainText('35 x 53 x 22 cm');
  await expect(properties).toHaveCSS('opacity', '1');
  await expect(properties).toHaveCSS('transform', 'none');
  await expect(properties).toHaveCSS('color', 'rgb(255, 0, 0)');
  await expect(text).toHaveCSS('opacity', '1');
  await expect(text).toHaveCSS('transform', 'none');
  await expect(page.locator('.cms-work-detail__properties [data-reveal-ready], .cms-work-detail__text [data-reveal-pending]')).toHaveCount(0);
});

test('detail title shows the overview year in brackets and in the same gray', async ({ page }) => {
  await page.goto('/tests/fixtures/work-detail.html');

  const title = page.locator('.cms-work-detail__title');
  const year = title.locator('.cms-work-detail__year');

  await expect(title).toContainText('„PA 1” [1990]');
  await expect(year).toHaveText('[1990]');
  await expect(year).toHaveCSS('color', 'rgb(130, 128, 140)');
  await expect(year).toHaveCSS('font-size', await title.evaluate((element) => getComputedStyle(element).fontSize));
});

test('detail image keeps a 1.5rem gap below a custom header', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/tests/fixtures/work-detail-fit.html');

  const image = page.locator('.cms-work-detail__image');

  for (const height of [900, 700]) {
    await page.setViewportSize({ width: 1440, height });

    await expect.poll(async () => image.evaluate((element) => {
      const gap = window.innerHeight - element.getBoundingClientRect().bottom;
      const expectedGap = 1.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);

      return Math.abs(gap - expectedGap);
    })).toBeLessThanOrEqual(1);

    await expect(image).toBeVisible();
  }
});
