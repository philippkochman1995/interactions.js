import { expect, test } from '@playwright/test';

const fixture = '/tests/fixtures/editions-split-slider.html';

test('Editionen images wipe in both directions while arrows, dots and swatches keep working', async ({ page }) => {
  await page.goto(fixture);
  const item = page.getByTestId('editions-item');
  const slider = item.locator('[data-edition-slider]');
  const slides = item.locator('[data-edition-slide]');
  const dots = item.locator('[data-edition-dots] [role="button"]');

  await expect(slider).toHaveClass(/is-edition-split-slider/);
  await expect(slides.nth(0)).toHaveClass(/is-active/);
  await expect(item.locator('[data-edition-next] svg')).toHaveCount(1);
  await expect(dots).toHaveCount(2);

  await item.locator('[data-edition-next]').click();
  await expect(slides.nth(0)).toHaveAttribute('data-edition-wipe-out', '');
  await expect(slides.nth(1)).toHaveAttribute('data-edition-wipe-in', '');
  const forwardClip = await slides.nth(1).evaluate((slide) =>
    (slide.getAnimations()[0]?.effect as KeyframeEffect | undefined)?.getKeyframes()[0]?.clipPath,
  );
  expect(forwardClip).toMatch(/100%\)$/);
  await expect(slides.nth(0)).not.toHaveAttribute('data-edition-wipe-out', '', { timeout: 3000 });
  await expect(slides.nth(0)).toHaveCSS('opacity', '0');
  await expect(slides.nth(1)).toHaveCSS('opacity', '1');
  await expect(item.locator('[data-edition-color="gelb"]:not([data-edition-slide])')).toHaveClass(/is-selected/);

  await item.locator('[data-edition-prev]').click();
  const backwardClip = await slides.nth(0).evaluate((slide) =>
    (slide.getAnimations()[0]?.effect as KeyframeEffect | undefined)?.getKeyframes()[0]?.clipPath,
  );
  expect(backwardClip).toMatch(/inset\(0(?:px)? 100%/);
  await expect(slides.nth(0)).toHaveClass(/is-active/);

  await dots.nth(1).click();
  await expect(dots.nth(1)).toHaveAttribute('aria-current', 'true');
  await item.locator('[data-edition-color="rosa"]:not([data-edition-slide])').click();
  await expect(slides.nth(0)).toHaveClass(/is-active/);

  await expect(page.getByTestId('single-item').locator('[data-edition-prev]')).toHaveClass(/is-hidden/);
  await expect(page.getByTestId('atelier-item').locator('[data-edition-slider]')).not.toHaveClass(/is-edition-split-slider/);
});

test('reduced motion changes Editionen images immediately', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(fixture);
  const item = page.getByTestId('editions-item');
  const slides = item.locator('[data-edition-slide]');
  await item.locator('[data-edition-next]').click();
  await expect(slides.nth(0)).toHaveCSS('opacity', '0');
  await expect(slides.nth(1)).toHaveCSS('opacity', '1');
  expect(await slides.nth(1).evaluate((slide) => slide.getAnimations().length)).toBe(0);
});
