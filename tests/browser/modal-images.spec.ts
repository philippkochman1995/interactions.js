import { expect, test } from '@playwright/test';

test('modal uses small renditions and requests the original only in the lightbox', async ({ page }) => {
  const requested: string[] = [];
  await page.route('https://cdn.prod.website-files.com/test/**', (route) => {
    requested.push(route.request().url());
    return route.fulfill({
      contentType: 'image/svg+xml',
      body: '<svg xmlns="http://www.w3.org/2000/svg" width="2000" height="1500"/>',
    });
  });
  await page.goto('/tests/fixtures/modal.html');
  await page.evaluate(() => {
    const first = 'https://cdn.prod.website-files.com/test/first.jpg';
    const second = 'https://cdn.prod.website-files.com/test/second.jpg';
    window.SiteInteractions!.openContentModal({
      id: 'image-test', address: '', image: first, imageAlt: '', caption: '', html: '',
      gallery: [
        { src: first, srcset: `${first.replace('.jpg', '-p-500.jpg')} 500w, ${first.replace('.jpg', '-p-1080.jpg')} 1080w`, alt: '', caption: '' },
        { src: second, alt: '', caption: '' },
      ],
    });
  });

  const main = page.locator('[data-site-modal] > .fwm-modal__panel > .fwm-modal__image-link img');
  const gallery = page.locator('.fwm-modal__gallery img');
  await expect(main).toHaveAttribute('src', /first-p-1080\.jpg$/);
  await expect(gallery).toHaveAttribute('src', /second-p-500\.jpg$/);
  await expect(main).toHaveJSProperty('complete', true);
  await expect(gallery).toHaveJSProperty('complete', true);
  expect(requested.some((url) => /\/first\.jpg$|\/second\.jpg$/.test(url))).toBe(false);

  await page.locator('.fwm-modal__gallery .fwm-modal__image-link').click();
  await expect(page.locator('[data-site-lightbox] [data-lightbox-image]')).toHaveAttribute('src', /second\.jpg$/);
  await expect.poll(() => requested.some((url) => url.endsWith('/second.jpg'))).toBe(true);
});
