import { expect, test } from '@playwright/test';

test('headings reveal by line while whole paragraphs fade upward and stay visible after resize', async ({ page }) => {
  await page.goto('/tests/fixtures/reveal.html');

  const hero = page.getByTestId('hero-heading');
  const body = page.getByTestId('scroll-paragraph');
  await expect(hero.locator('.split-line')).not.toHaveCount(0);
  await expect(body.locator('.split-line')).toHaveCount(0);
  await expect(page.getByTestId('hero-paragraph').locator('.split-line')).toHaveCount(0);
  await expect(page.getByTestId('modal-heading').locator('.split-line')).toHaveCount(0);
  await expect(hero).toHaveJSProperty('tagName', 'H1');
  await expect(body).toHaveJSProperty('tagName', 'P');

  const scrollHeading = page.getByTestId('scroll-heading');
  await scrollHeading.scrollIntoViewIfNeeded();
  await expect.poll(async () => scrollHeading.locator('.split-line').first().evaluate(
    (line) => getComputedStyle(line).clipPath,
  )).toMatch(/^inset\(-40% 0% -28%(?: 0%)?\)$/);
  await expect.poll(() => body.evaluate((element) => Number(getComputedStyle(element).opacity)))
    .toBeGreaterThan(0.99);
  await expect.poll(() => body.evaluate((element) => Math.abs(new DOMMatrix(getComputedStyle(element).transform).m42)))
    .toBeLessThan(0.5);

  await scrollHeading.locator('.split-line').first().evaluate(
    (line) => line.setAttribute('data-before-resize', ''),
  );
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(scrollHeading.locator('[data-before-resize]')).toHaveCount(0);
  await expect.poll(async () => scrollHeading.locator('.split-line').first().evaluate(
    (line) => getComputedStyle(line).clipPath,
  )).not.toBe('inset(0% 0% 100% 0%)');
  await expect(body.locator('.split-line')).toHaveCount(0);
  await expect.poll(() => body.evaluate((element) => Number(getComputedStyle(element).opacity)))
    .toBeGreaterThan(0.99);
  await expect(body).toBeVisible();
});

test('reduced motion leaves text unsplit and visible', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/tests/fixtures/reveal.html');
  await expect(page.getByTestId('hero-heading').locator('.split-line')).toHaveCount(0);
  await expect(page.getByTestId('scroll-paragraph')).toBeVisible();
});

test('News pages keep headings and paragraphs untouched', async ({ page }) => {
  await page.goto('/tests/fixtures/reveal.html?news');
  await expect(page.getByTestId('hero-heading').locator('.split-line')).toHaveCount(0);
  await expect(page.getByTestId('scroll-paragraph').locator('.split-line')).toHaveCount(0);
});
