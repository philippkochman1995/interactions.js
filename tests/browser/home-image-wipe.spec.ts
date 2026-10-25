import { expect, test } from '@playwright/test';

test('home images and the yellow West Map card wipe into view; Instagram stays visible', async ({ page }) => {
  await page.goto('/tests/fixtures/home-image-wipe.html');

  const news = page.getByTestId('news-image');
  const about = page.getByTestId('about-image');
  const mapCard = page.getByTestId('map-card');
  await expect(news).toHaveAttribute('data-home-image-wipe', '');
  await expect(about).toHaveAttribute('data-home-image-wipe', '');
  await expect(mapCard).toHaveAttribute('data-home-image-wipe', '');
  await expect(page.getByTestId('map-background')).not.toHaveAttribute('data-home-image-wipe');
  await expect(page.getByTestId('initial-card')).not.toHaveAttribute('data-home-image-wipe');
  await expect(news).toHaveCSS('clip-path', 'inset(100% 0px 0px)');

  await news.scrollIntoViewIfNeeded();
  await expect.poll(() => news.evaluate((element) => element.getAnimations().map((animation) => animation.effect?.getTiming().easing)))
    .toContain('cubic-bezier(0.05, 0.85, 0.05, 1)');
  await expect(news).not.toHaveAttribute('data-home-image-wipe');

  await about.scrollIntoViewIfNeeded();
  await expect(about).not.toHaveAttribute('data-home-image-wipe');

  await mapCard.scrollIntoViewIfNeeded();
  await expect.poll(() => mapCard.evaluate((element) => element.getAnimations().map((animation) => animation.effect?.getTiming().easing)))
    .toContain('cubic-bezier(0.05, 0.85, 0.05, 1)');
  await expect(mapCard).not.toHaveAttribute('data-home-image-wipe');

  await page.locator('[data-insta-track]').evaluate((track) => {
    const card = document.createElement('div');
    card.dataset.testid = 'new-card';
    card.innerHTML = '<img alt="Post" src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'240\' height=\'180\'%3E%3Crect width=\'240\' height=\'180\' fill=\'green\'/%3E%3C/svg%3E">';
    track.append(card);
  });
  const card = page.getByTestId('new-card');
  await expect(card).not.toHaveAttribute('data-home-image-wipe');
  await expect(card).toHaveCSS('clip-path', 'none');
});

test('reduced motion leaves home images visible', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/tests/fixtures/home-image-wipe.html');
  const news = page.getByTestId('news-image');
  await expect(news).not.toHaveAttribute('data-home-image-wipe');
  await expect(news).toHaveCSS('clip-path', 'none');
});
