import { expect, test } from '@playwright/test';

const cards = [
  ['home-card', 'home-image'],
  ['news-card', 'news-image'],
  ['detail-card', 'detail-image'],
  ['works-card', 'works-image'],
] as const;

test('event cards use the Atelier image mask, zoom and link movement', async ({ page }) => {
  await page.goto('/tests/fixtures/news-card-hover.html');

  for (const [cardId, imageId] of cards) {
    const card = page.getByTestId(cardId);
    const mask = card.locator('.img-zoom[data-site-image-reveal="event"]');
    const zoom = mask.locator('[data-site-event-zoom]');
    const image = page.getByTestId(imageId);
    const link = card.locator('a.text-link');

    await expect(mask).toHaveCount(1);
    await expect(zoom).toHaveCount(1);
    await mask.scrollIntoViewIfNeeded();
    await expect(mask).toHaveClass(/is-site-image-in/);
    await expect(mask).toHaveCSS('clip-path', 'inset(0px)');
    await expect(image).toHaveCSS('clip-path', 'none');
    await expect(image).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)');
    const cardWidth = (await card.boundingBox())?.width;

    await image.hover();
    await expect(zoom).toHaveCSS('transform', 'matrix(1.03, 0, 0, 1.03, 0, 0)');
    await expect(image).toHaveCSS('transform', 'matrix(1.015, 0, 0, 1.015, 0, 0)');
    await expect(link).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 6, 0)');
    await expect(link).toHaveCSS('color', 'rgb(6, 2, 26)');
    expect((await card.boundingBox())?.width).toBe(cardWidth);

    await page.mouse.move(1300, 10);
    await expect(zoom).toHaveCSS('transform', 'none');
    await expect(image).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)');
  }
});

test('the separate News highlight keeps its existing image treatment', async ({ page }) => {
  await page.goto('/tests/fixtures/news-card-hover.html');
  const card = page.getByTestId('highlight-card');
  const image = page.getByTestId('highlight-image');

  await expect(card.locator('[data-site-event-zoom]')).toHaveCount(0);
  await image.hover();
  await expect(image).toHaveCSS('transform', 'matrix(1.0189, 0, 0, 1.0189, 0, 0)');
  await expect(image).toHaveCSS('clip-path', 'inset(2.05%)');
});

test('the wrapped image keeps the Atelier frame and mobile card order', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/tests/fixtures/news-card-hover.html');
  const card = page.getByTestId('home-card');
  const mask = card.locator('.img-zoom[data-site-image-reveal="event"]');

  await expect(mask).toHaveCSS('order', '-1');
  await expect(mask).toHaveCSS('aspect-ratio', '4 / 3');
  await expect(mask).toHaveCSS('margin-bottom', '24px');
  const box = await mask.boundingBox();
  expect(box).not.toBeNull();
  expect(box!.width / box!.height).toBeCloseTo(4 / 3, 2);
  expect(box!.width).toBeLessThanOrEqual((await card.boundingBox())!.width);
});

test('event images and links stay still with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/tests/fixtures/news-card-hover.html');
  const card = page.getByTestId('news-card');
  const image = page.getByTestId('news-image');
  const link = card.locator('a.text-link');

  await image.hover();
  await expect(card.locator('[data-site-event-zoom]')).toHaveCount(0);
  await expect(image).toHaveCSS('transform', 'none');
  await expect(image).toHaveCSS('clip-path', 'none');
  await expect(link).toHaveCSS('transform', 'none');
});
