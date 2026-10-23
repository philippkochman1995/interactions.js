import { expect, test } from '@playwright/test';

test('mobile direct work popup starts at the top after late fragment scrolling', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  const page = await context.newPage();
  await page.goto('/tests/fixtures/work-overlay.html?work=echolalie#werke');

  const surface = page.locator('.work-overlay__surface');
  await expect(surface).toBeVisible();
  await expect(surface).toHaveAttribute('data-late-scroll', '500');
  await expect.poll(() => surface.evaluate((element) => element.scrollTop)).toBe(0);
  await context.close();
});
