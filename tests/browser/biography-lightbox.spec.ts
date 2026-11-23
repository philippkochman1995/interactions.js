import { expect, test } from '@playwright/test';

for (const { path, caption, alt } of [
  { path: '/biografie', caption: 'Freude, 1985', alt: 'Goldfarbenes Relief' },
  { path: '/en/biografie', caption: 'Joyce, 1985', alt: 'Gold relief' },
]) {
  test(`biography lightbox follows the visible caption on ${path}`, async ({ page }) => {
    await page.route(`**${path}`, (route) => route.fulfill({
      contentType: 'text/html',
      body: `<!doctype html>
        <figure class="bio_photo">
          <img class="js-lightbox" src="/image-1.webp" alt="${alt}"
            data-lightbox-caption="Old title" data-lightbox-group="biografie-5">
          <p data-bio-caption>${caption}</p>
        </figure>
        <figure class="bio_photo">
          <img class="js-lightbox" src="/image-2.webp" alt="Second image"
            data-lightbox-caption="Old title" data-lightbox-group="biografie-5">
          <p data-bio-caption>&#8205;</p>
        </figure>
        <script type="module" src="/dist/site-interactions.js"></script>`,
    }));
    await page.goto(path);

    const trigger = page.locator('.bio_photo [data-lightbox-auto-wrapper]').first();
    await trigger.press('Enter');
    const output = page.locator('[data-lightbox-caption-output]');
    await expect(output).toHaveText(caption);
    await expect(page.locator('[data-lightbox-image]')).toHaveAttribute('alt', alt);

    await page.keyboard.press('ArrowRight');
    await expect(output).toBeHidden();
    await expect(output).toHaveText('');
    await page.keyboard.press('Escape');

    await page.locator('[data-bio-caption]').first().evaluate((text) => {
      text.textContent = 'New title';
    });
    await trigger.press('Enter');
    await expect(output).toHaveText('New title');
  });
}
