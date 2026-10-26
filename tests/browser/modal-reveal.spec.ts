import { expect, test } from '@playwright/test';

test('modal text has no reveal hooks and its backdrop fades in', async ({ page }) => {
  await page.goto('/tests/fixtures/modal.html');

  const source = page.getByTestId('modal-source');
  await expect(source.locator('h2, p')).toHaveCount(2);
  await expect(source.locator('[data-reveal-pending], .split-line')).toHaveCount(0);

  const samples = await page.evaluate(async () => {
    window.SiteInteractions!.openContentModal({
      id: 'modal-check',
      address: '',
      image: '',
      imageAlt: '',
      caption: '',
      html: '<h2 class="bio_fade" data-reveal-ready style="opacity:0;transform:translateY(12px)">Plain heading</h2><p class="split-line" data-reveal-pending data-splitline style="opacity:0;transform:translateY(12px);clip-path:inset(0 0 100% 0)">Plain paragraph</p>',
    });
    const modal = document.querySelector<HTMLElement>('[data-site-modal]')!;
    const backdropAlpha = () => Number(getComputedStyle(modal).backgroundColor.match(/([\d.]+)\)$/)?.[1] ?? 0);
    const initial = backdropAlpha();
    await new Promise((resolve) => window.setTimeout(resolve, 120));
    const mid = backdropAlpha();
    return { initial, mid };
  });

  const modal = page.locator('[data-site-modal]');
  const text = modal.locator('[data-site-modal-text]');
  await expect(text.locator('[data-reveal-pending], [data-reveal-ready], [data-splitline], .split-line, .bio_fade')).toHaveCount(0);
  await expect(text.locator('h2')).toBeVisible();
  await expect(text.locator('p')).toBeVisible();
  await expect(text.locator('h2')).toHaveCSS('opacity', '1');
  await expect(text.locator('p')).toHaveCSS('opacity', '1');
  expect(samples.initial).toBeLessThan(0.05);
  expect(samples.mid).toBeGreaterThan(0.02);
  expect(samples.mid).toBeLessThan(0.49);
  await expect.poll(() => modal.evaluate((element) => getComputedStyle(element).backgroundColor))
    .toBe('rgba(6, 2, 26, 0.5)');
});

test('a duplicate modal trigger opens only once', async ({ page }) => {
  await page.goto('/tests/fixtures/modal.html');
  const result = await page.evaluate(() => {
    const content = document.createElement('div');
    content.setAttribute('data-modal-content', 'dual-trigger');
    content.innerHTML = '<div data-modal-body>Details</div>';
    document.body.append(content);
    const trigger = document.createElement('a');
    trigger.href = '#modal:dual-trigger';
    trigger.setAttribute('data-modal-open', 'dual-trigger');
    trigger.textContent = 'Open';
    document.body.append(trigger);
    let opens = 0;
    let closes = 0;
    document.addEventListener('site:modal-open', () => { opens++; });
    document.addEventListener('site:modal-close', () => { closes++; });
    trigger.click();
    trigger.click();
    return {
      opens,
      closes,
      visible: document.querySelector('[data-site-modal]')?.classList.contains('is-visible'),
    };
  });

  expect(result).toEqual({ opens: 1, closes: 0, visible: true });
});
