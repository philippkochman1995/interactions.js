import { expect, test } from '@playwright/test';

test('news, highlight and atelier event images zoom inward on card hover', async ({ page }) => {
  await page.goto('/tests/fixtures/news-card-hover.html');

  for (const [cardId, imageId] of [
    ['news-card', 'news-image'],
    ['highlight-card', 'highlight-image'],
    ['atelier-card', 'atelier-image'],
  ]) {
    const card = page.getByTestId(cardId);
    const image = page.getByTestId(imageId);
    const cardWidth = (await card.boundingBox())?.width;

    await card.locator('a').hover();
    await expect(image).toHaveCSS('transform', 'matrix(1.035, 0, 0, 1.035, 0, 0)');
    await expect(image).toHaveCSS('clip-path', 'inset(3%)');
    expect((await card.boundingBox())?.width).toBe(cardWidth);

    await page.locator('body').hover({ position: { x: 700, y: 5 } });
    await expect(image).toHaveCSS('transform', 'none');
    await expect(image).toHaveCSS('clip-path', 'inset(0px)');
  }
});

test('event images stay still with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/tests/fixtures/news-card-hover.html');
  await page.getByTestId('news-card').locator('a').hover();
  await expect(page.getByTestId('news-image')).toHaveCSS('transform', 'none');
  await expect(page.getByTestId('news-image')).toHaveCSS('clip-path', 'none');
});
