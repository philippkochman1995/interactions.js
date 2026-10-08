import { expect, test, type Page } from '@playwright/test';

async function visibleTile(page: Page): Promise<number> {
  return page.locator('.cms-canvas__item').evaluateAll((tiles) => tiles.findIndex((tile) => {
    const bounds = tile.getBoundingClientRect();
    const x = bounds.left + bounds.width / 2;
    const y = bounds.top + Math.min(bounds.height / 2, 20);
    return x > 0 && x < innerWidth && y > 0 && y < innerHeight
      && document.elementFromPoint(x, y)?.closest('.cms-canvas__item') === tile;
  }));
}

test('mobile canvas tiles open a modal that enters from below', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  const page = await context.newPage();
  await page.goto('/tests/fixtures/cms-canvas.html');
  await expect(page.locator('.cms-canvas.is-ready')).toBeVisible();
  await expect.poll(() => visibleTile(page)).toBeGreaterThanOrEqual(0);
  const index = await visibleTile(page);
  expect(index).toBeGreaterThanOrEqual(0);
  const tile = page.locator('.cms-canvas__item').nth(index);
  const size = await tile.evaluate((element) => element.getBoundingClientRect().width);
  expect(size).toBeGreaterThan(140);

  await tile.tap();
  const modal = page.locator('[data-site-modal]');
  await expect(modal).toHaveClass(/is-visible/);
  await expect(modal.locator('[data-modal-panel]')).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)');
  const panel = modal.locator('[data-modal-panel]');
  expect((await panel.boundingBox())?.width).toBe(390);
  await context.close();
});

test('desktop canvas tiles still open their modal', async ({ page }) => {
  await page.goto('/tests/fixtures/cms-canvas.html');
  await expect(page.locator('.cms-canvas.is-ready')).toBeVisible();
  const index = await visibleTile(page);
  expect(index).toBeGreaterThanOrEqual(0);
  const tile = page.locator('.cms-canvas__item').nth(index);
  await tile.click();
  await expect(page.locator('[data-site-modal]')).toHaveClass(/is-visible/);
  await page.keyboard.press('Escape');
  await tile.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('[data-site-modal]')).toHaveClass(/is-visible/);
});

test('touch dragging keeps the canvas at full scale', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  const page = await context.newPage();
  await page.goto('/tests/fixtures/cms-canvas.html');
  await expect(page.locator('.cms-canvas.is-ready')).toBeVisible();
  await page.locator('.cms-canvas').evaluate((root) => {
    const point = { pointerId: 12, pointerType: 'touch', bubbles: true, cancelable: true };
    root.dispatchEvent(new PointerEvent('pointerdown', { ...point, clientX: 120, clientY: 300 }));
    root.dispatchEvent(new PointerEvent('pointermove', { ...point, clientX: 180, clientY: 360 }));
  });
  await page.waitForTimeout(400);
  const scale = await page.locator('.cms-canvas__stage').evaluate((stage) =>
    new DOMMatrix(getComputedStyle(stage).transform).a,
  );
  expect(scale).toBeCloseTo(1, 5);
  await page.locator('.cms-canvas').evaluate((root) => {
    root.dispatchEvent(new PointerEvent('pointerup', {
      pointerId: 12, pointerType: 'touch', bubbles: true, clientX: 180, clientY: 360,
    }));
  });
  await context.close();
});
