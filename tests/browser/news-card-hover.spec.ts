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

test('the animation preserves the original event image size at every layout', async ({ page }) => {
  for (const width of [1728, 800, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/tests/fixtures/news-card-hover.html?nojs');
    const original = await page.getByTestId('home-image').evaluate((image) => ({
      width: image.clientWidth,
      height: image.clientHeight,
    }));

    await page.goto('/tests/fixtures/news-card-hover.html');
    const mask = page.getByTestId('home-card').locator('.img-zoom[data-site-image-reveal="event"]');
    await expect(mask).toHaveCount(1);
    const wrapped = await mask.evaluate((element) => ({
      width: element.clientWidth,
      height: element.clientHeight,
    }));

    expect(wrapped.width).toBeCloseTo(original.width, 0);
    expect(wrapped.height).toBeCloseTo(original.height, 0);
    await expect(mask).toHaveCSS('aspect-ratio', 'auto');
    if (width === 390) {
      await expect(mask).toHaveCSS('order', '-1');
      await expect(mask).toHaveCSS('margin-bottom', '24px');
    }
  }
});

test('the Atelier mask also preserves its event image dimensions', async ({ page }) => {
  for (const width of [1728, 800, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/tests/fixtures/atelier-event-ratio.html');
    const original = await page.getByTestId('original-image').evaluate((image) => ({
      width: image.clientWidth,
      height: image.clientHeight,
    }));
    const mask = page.getByTestId('animated-card').locator('[data-atelier-image-mask]');
    const wrapped = await mask.evaluate((element) => ({
      width: element.clientWidth,
      height: element.clientHeight,
    }));

    expect(wrapped.width).toBeCloseTo(original.width, 0);
    expect(wrapped.height).toBeCloseTo(original.height, 0);
    await expect(mask).toHaveCSS('aspect-ratio', 'auto');
  }
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
