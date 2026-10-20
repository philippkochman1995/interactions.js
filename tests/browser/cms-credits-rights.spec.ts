import { readFile } from 'node:fs/promises';
import { expect, test } from '@playwright/test';

async function script(name: string): Promise<string> {
  const html = await readFile(new URL(`../../snippets/${name}.html`, import.meta.url), 'utf8');
  return html.match(/<script>([\s\S]*?)<\/script>/)?.[1] ?? '';
}

test('biography lightbox reads the matching CMS credit and hides an empty one', async ({ page }) => {
  await page.goto('/tests/fixtures/preloader.html');
  await page.route('**/biografie-bildnachweise/fw-biografie-04', (route) => route.fulfill({
    contentType: 'text/html',
    body: '<div data-bio-credit-key="fw-biografie-04" data-bio-credit-value="© Archiv Wien"></div>',
  }));
  await page.route('**/biografie-bildnachweise/fw-biografie-05', (route) => route.fulfill({
    contentType: 'text/html',
    body: '<div data-bio-credit-key="fw-biografie-05" data-bio-credit-value=""></div>',
  }));
  await page.setContent(`
    <div data-site-lightbox>
      <figure class="site-lightbox__figure">
        <img data-lightbox-image src="https://cdn.example.com/fw-biografie-04.webp">
        <figcaption>Bildbeschreibung</figcaption>
      </figure>
    </div>
  `);
  await page.addScriptTag({ content: await script('biography-photo-credits') });
  await page.locator('[data-site-lightbox]').evaluate((root) => {
    root.dispatchEvent(new CustomEvent('site:lightbox-open', { bubbles: true }));
  });

  const credit = page.locator('[data-lightbox-credit-output]');
  await expect(credit).toHaveText('© Archiv Wien');
  await expect(credit).toBeVisible();
  await expect(page.locator('.site-lightbox__figure > figcaption + [data-lightbox-credit-output]')).toHaveCount(1);

  await page.locator('[data-lightbox-image]').evaluate((image: HTMLImageElement) => {
    image.src = 'https://cdn.example.com/fw-biografie-05.webp';
  });
  await expect(credit).toBeHidden();
  await expect(credit).toHaveText('');
});

test('context modal shows CMS image rights at the bottom and hides empty values', async ({ page }) => {
  await page.goto('/tests/fixtures/preloader.html');
  await page.setContent(`
    <div data-cms-canvas-item data-canvas-id="context-a" data-canvas-modal-rights="© Fotoarchiv"></div>
    <div data-site-modal data-modal-variant="context" data-modal-id="canvas-context-a">
      <div data-modal-panel><div data-site-modal-gallery></div></div>
    </div>
  `);
  await page.addScriptTag({ content: await script('contexts-image-rights') });
  const modal = page.locator('[data-site-modal]');
  await modal.evaluate((root) => root.dispatchEvent(new CustomEvent('site:modal-open', { bubbles: true })));

  const rights = modal.locator('[data-site-modal-rights]');
  await expect(rights).toHaveText('© Fotoarchiv');
  await expect(rights).toBeVisible();
  await expect(modal.locator('[data-site-modal-gallery] + [data-site-modal-rights]')).toHaveCount(1);

  await page.locator('[data-cms-canvas-item]').evaluate((item) => item.setAttribute('data-canvas-modal-rights', ''));
  await modal.evaluate((root) => root.dispatchEvent(new CustomEvent('site:modal-open', { bubbles: true })));
  await expect(rights).toBeHidden();
});
