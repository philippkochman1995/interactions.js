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

test('context work card uses a real 500px preview for Webflow AVIF images', async ({ page }) => {
  const original = 'https://cdn.prod.website-files.com/6a4c2adfd1cf2c1e8aa0ddfc/6a7db33f5031a1007e109876_034671.avif';
  let originalRequests = 0;
  await page.route(original, (route) => {
    originalRequests++;
    return route.abort();
  });
  await page.goto('/tests/fixtures/modal.html');
  await page.evaluate((thumbnail) => {
    window.SiteInteractions!.openContentModal({
      id: 'work-preview-test', address: '', layout: 'context', image: '', imageAlt: '', caption: '', html: '',
      work: { title: 'Werk', year: '1989', thumbnail, thumbnailAlt: 'Werk', href: '/werke/liege-vermeer' },
    });
  }, original);

  const image = page.locator('.fwm-modal__work-image');
  await expect(image).toHaveAttribute('src', /\/assets\/modal-work-thumbnails\/6a7db33f5031a1007e109876\.webp$/);
  await expect(image).toHaveJSProperty('naturalWidth', 500);
  expect(originalRequests).toBe(0);
});

test('modal stays hidden until its preview has loaded and decoded', async ({ page }) => {
  const original = 'https://cdn.prod.website-files.com/test/slow.jpg';
  const preview = 'https://cdn.prod.website-files.com/test/slow-p-1080.jpg';
  let releasePreview!: () => void;
  const previewGate = new Promise<void>((resolve) => { releasePreview = resolve; });
  await page.route(preview, async (route) => {
    await previewGate;
    await route.fulfill({
      contentType: 'image/svg+xml',
      body: '<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="720"/>',
    });
  });
  await page.goto('/tests/fixtures/modal.html');
  await page.evaluate(({ original, preview }) => {
    window.SiteInteractions!.openContentModal({
      id: 'slow-modal', address: '', image: original,
      imageSrcset: `${preview} 1080w`, imageAlt: '', caption: '', html: '',
    });
  }, { original, preview });

  const modal = page.locator('[data-site-modal]');
  await expect(modal).toBeHidden();
  releasePreview();
  await expect(modal).toBeVisible();
  await expect(modal.locator('> .fwm-modal__panel > .fwm-modal__image-link img')).toHaveJSProperty('naturalWidth', 1080);
});

test('a failed preview falls back before the modal appears', async ({ page }) => {
  const original = 'https://cdn.prod.website-files.com/test/fallback.jpg';
  const preview = 'https://cdn.prod.website-files.com/test/fallback-p-1080.jpg';
  let releaseOriginal!: () => void;
  const originalGate = new Promise<void>((resolve) => { releaseOriginal = resolve; });
  await page.route(preview, (route) => route.abort());
  await page.route(original, async (route) => {
    await originalGate;
    await route.fulfill({
      contentType: 'image/svg+xml',
      body: '<svg xmlns="http://www.w3.org/2000/svg" width="2000" height="1500"/>',
    });
  });
  await page.goto('/tests/fixtures/modal.html');
  await page.evaluate(({ original, preview }) => {
    window.SiteInteractions!.openContentModal({
      id: 'fallback-modal', address: '', image: original,
      imageSrcset: `${preview} 1080w`, imageAlt: '', caption: '', html: '',
    });
  }, { original, preview });

  const modal = page.locator('[data-site-modal]');
  await expect(modal).toBeHidden();
  releaseOriginal();
  await expect(modal).toBeVisible();
  await expect(modal.locator('> .fwm-modal__panel > .fwm-modal__image-link img')).toHaveAttribute('src', original);
});

test('an older image load cannot replace a newer modal', async ({ page }) => {
  const first = 'https://cdn.prod.website-files.com/test/first-slow.jpg';
  const second = 'https://cdn.prod.website-files.com/test/second-fast.jpg';
  let releaseFirst!: () => void;
  const firstGate = new Promise<void>((resolve) => { releaseFirst = resolve; });
  await page.route(/https:\/\/cdn\.prod\.website-files\.com\/test\/(first-slow|second-fast)-p-1080\.jpg/, async (route) => {
    if (route.request().url().includes('first-slow')) await firstGate;
    await route.fulfill({
      contentType: 'image/svg+xml',
      body: '<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="720"/>',
    });
  });
  await page.goto('/tests/fixtures/modal.html');
  await page.evaluate(({ first, second }) => {
    const open = (id: string, image: string) => window.SiteInteractions!.openContentModal({
      id, address: '', image, imageAlt: '', caption: '', html: '',
    });
    open('first-slow', first);
    open('second-fast', second);
  }, { first, second });

  const modal = page.locator('[data-site-modal]');
  await expect(modal).toHaveAttribute('data-modal-id', 'second-fast');
  await expect(modal).toBeVisible();
  releaseFirst();
  await expect(modal).toHaveAttribute('data-modal-id', 'second-fast');
  await expect(modal.locator('> .fwm-modal__panel > .fwm-modal__image-link img')).toHaveAttribute('src', /second-fast-p-1080\.jpg$/);
});
