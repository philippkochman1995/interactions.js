import { expect, test } from '@playwright/test';

test('outlined buttons use the long fill easing without moving the button', async ({ page }) => {
  await page.goto('/tests/fixtures/outlined-buttons.html');
  const button = page.locator('.btn');
  const fill = button.locator('.f');
  const arrow = button.locator('svg');
  await expect(fill).toHaveCSS('transition-duration', '1.3s');
  await expect(fill).toHaveCSS('transition-timing-function', 'cubic-bezier(0.05, 0.85, 0.05, 1)');
  await expect(fill).toHaveCSS('transform', /matrix\(1, 0, 0, 1, 0, [\d.]+\)/);

  await button.hover();
  await expect.poll(() => fill.evaluate((element) => getComputedStyle(element).transform)).toBe('none');
  await expect(arrow).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 5, 0)');
  await expect(button).toHaveCSS('transform', 'none');
  await page.mouse.move(0, 0);
  await expect.poll(() => fill.evaluate((element) => getComputedStyle(element).transform)).not.toBe('none');

  const dark = page.locator('.dark .button-outlined');
  await expect(dark).not.toHaveAttribute('data-button-surface', 'dark');
  await dark.hover();
  await expect(dark.locator('span:not(.button-mask)')).toHaveCSS('color', 'rgb(242, 197, 208)');
});

test('touch and reduced motion keep the button accessible', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto('/tests/fixtures/outlined-buttons.html');
  const button = page.locator('.btn');
  await button.tap();
  await expect(button.locator('.f')).toHaveCSS('transition-duration', '0.01s');
  await expect(button.locator('.f')).toHaveCSS('transform', /matrix\(1, 0, 0, 1, 0, [\d.]+\)/);
  await expect(button).toHaveCSS('transform', 'none');
  await context.close();
});

test('keyboard focus fills the button and late buttons receive a layer', async ({ page }) => {
  await page.goto('/tests/fixtures/outlined-buttons.html');
  await page.keyboard.press('Tab');
  const button = page.locator('.btn');
  await button.focus();
  await expect(button).toBeFocused();
  await expect(button).toHaveCSS('outline-style', 'solid');
  await expect.poll(() => button.locator('.f').evaluate((element) => getComputedStyle(element).transform)).toBe('none');

  await page.evaluate(() => {
    const link = document.createElement('a');
    link.className = 'button-outlined';
    link.href = '#late';
    link.textContent = 'Später';
    link.id = 'late-button';
    document.body.append(link);
  });
  await expect(page.locator('#late-button > .f')).toHaveCount(1);
  await expect(page.locator('#late-button > span')).toHaveText('Später');
});
