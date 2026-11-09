import { expect, test } from '@playwright/test';

test('paragraphs fade upward on scroll and stay visible after resize', async ({ page }) => {
  await page.goto('/tests/fixtures/reveal.html?home');

  const hero = page.getByTestId('hero-heading');
  const body = page.getByTestId('scroll-paragraph');
  await expect(hero).toHaveAttribute('data-reveal-ready', '');
  await expect(body).toHaveAttribute('data-reveal-ready', '');
  await expect(hero.locator('.split-line')).toHaveCount(0);
  await expect(body.locator('.split-line')).toHaveCount(0);
  await expect(page.getByTestId('hero-paragraph').locator('.split-line')).toHaveCount(0);
  await expect(page.getByTestId('modal-heading')).not.toHaveAttribute('data-reveal-ready', '');
  await expect(hero).toHaveJSProperty('tagName', 'H1');
  await expect(body).toHaveJSProperty('tagName', 'P');

  const scrollTo = (viewportPosition: number) => page.evaluate((position) => {
    const paragraph = document.querySelector<HTMLElement>('[data-testid="scroll-paragraph"]')!;
    window.scrollTo(0, paragraph.getBoundingClientRect().top + scrollY - innerHeight * position);
  }, viewportPosition);
  await scrollTo(.85);
  await expect.poll(() => body.evaluate((element) => Number(getComputedStyle(element).opacity)))
    .toBeLessThan(0.1);
  await scrollTo(.7);
  await expect.poll(() => body.evaluate((element) => Number(getComputedStyle(element).opacity)))
    .toBeGreaterThan(0.99);
  await expect.poll(() => body.evaluate((element) => Math.abs(new DOMMatrix(getComputedStyle(element).transform).m42)))
    .toBeLessThan(0.5);

  await page.setViewportSize({ width: 390, height: 844 });
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
