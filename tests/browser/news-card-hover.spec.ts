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
    await expect(image).toHaveCSS('transition-duration', '0.42s, 0.42s');
    await expect(image).toHaveCSS('transform', 'matrix(1.0315, 0, 0, 1.0315, 0, 0)');
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

test('the learn-more link uses its direct-hover color when the card is hovered', async ({ page }) => {
  await page.goto('/tests/fixtures/news-card-hover.html');

  for (const cardId of ['news-card', 'highlight-card', 'atelier-card']) {
    const card = page.getByTestId(cardId);
    const link = card.locator('a.text-link');
    await expect(link).toHaveCSS('color', 'rgb(130, 128, 140)');
    await card.locator('img').hover();
    await expect(link).toHaveCSS('color', 'rgb(6, 2, 26)');
    await page.locator('body').hover({ position: { x: 700, y: 5 } });
    await expect(link).toHaveCSS('color', 'rgb(130, 128, 140)');
  }
});
