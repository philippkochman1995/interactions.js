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
