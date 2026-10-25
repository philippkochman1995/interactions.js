import { expect, test } from '@playwright/test';

test('home images wipe into view with the button easing, including new slider cards', async ({ page }) => {
  await page.goto('/tests/fixtures/home-image-wipe.html');

  const news = page.getByTestId('news-image');
  const about = page.getByTestId('about-image');
  await expect(news).toHaveAttribute('data-home-image-wipe', '');
  await expect(about).toHaveAttribute('data-home-image-wipe', '');
  await expect(news).toHaveCSS('clip-path', 'inset(100% 0px 0px)');

  await news.scrollIntoViewIfNeeded();
  await expect.poll(() => news.evaluate((element) => element.getAnimations().map((animation) => animation.effect?.getTiming().easing)))
    .toContain('cubic-bezier(0.05, 0.85, 0.05, 1)');
  await expect(news).not.toHaveAttribute('data-home-image-wipe');

  await about.scrollIntoViewIfNeeded();
  await expect(about).not.toHaveAttribute('data-home-image-wipe');

  await page.locator('[data-insta-track]').evaluate((track) => {
    const card = document.createElement('div');
    card.dataset.testid = 'new-card';
    card.innerHTML = '<img alt="Post" src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'240\' height=\'180\'%3E%3Crect width=\'240\' height=\'180\' fill=\'green\'/%3E%3C/svg%3E">';
    track.append(card);
  });
  const card = page.getByTestId('new-card');
  await expect(card).toHaveAttribute('data-home-image-wipe', '');
  await card.scrollIntoViewIfNeeded();
  await expect(card).not.toHaveAttribute('data-home-image-wipe');
});

test('reduced motion leaves home images visible', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/tests/fixtures/home-image-wipe.html');
  const news = page.getByTestId('news-image');
  await expect(news).not.toHaveAttribute('data-home-image-wipe');
  await expect(news).toHaveCSS('clip-path', 'none');
});
