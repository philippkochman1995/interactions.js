import { expect, test } from '@playwright/test';

test('zoom buttons take two levels near Europe and stop at the overview before continuing out', async ({ page }) => {
  await page.goto('/tests/fixtures/west-map-zoom.html');
  await page.waitForFunction(() => Boolean((window as any).westMapTest));

  await page.evaluate(() => { (window as any).westMapTest.zoom = 12; });
  const out = page.getByRole('button', { name: 'Rauszoomen' });
  for(let i = 0; i < 5; i++) await out.click();

  expect(await page.evaluate(() => (window as any).westMapTest.zoomCalls)).toEqual([10, 8, 6, 4, 3]);
  await page.evaluate(() => (window as any).westMapTest.finishZoom());

  await page.getByRole('button', { name: 'Reinzoomen' }).click();
  expect(await page.evaluate(() => (window as any).westMapTest.zoomCalls.at(-1))).toBe(4);
  await page.getByRole('button', { name: 'Reinzoomen' }).click();
  expect(await page.evaluate(() => (window as any).westMapTest.zoomCalls.at(-1))).toBe(6);

  expect(await page.evaluate(() => (window as any).westMapTest.lastBounds)).toEqual([[-12, 34], [36, 72]]);
});

test('the Europe boundary follows the mobile viewport and zoom stays within map limits', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/tests/fixtures/west-map-zoom.html');
  await page.waitForFunction(() => Boolean((window as any).westMapTest));

  const out = page.getByRole('button', { name: 'Rauszoomen' });
  await page.evaluate(() => { (window as any).westMapTest.zoom = 3.2; });
  await out.click();
  await out.click();
  expect(await page.evaluate(() => (window as any).westMapTest.zoomCalls)).toEqual([2.5, 1.5]);

  await page.evaluate(() => {
    (window as any).westMapTest.zoom = 0;
    (window as any).westMapTest.fire('zoomend');
    document.getElementById('wmMap')!.dispatchEvent(new Event('wheel'));
  });
  await out.click();
  expect(await page.evaluate(() => (window as any).westMapTest.zoomCalls)).toEqual([2.5, 1.5]);

  await page.evaluate(() => { (window as any).westMapTest.zoom = 17; });
  await page.getByRole('button', { name: 'Reinzoomen' }).click();
  expect(await page.evaluate(() => (window as any).westMapTest.zoomCalls.at(-1))).toBe(18);
});

test('a cluster click clears a pending button zoom before the next click', async ({ page }) => {
  await page.goto('/tests/fixtures/west-map-zoom.html');
  await page.waitForFunction(() => Boolean((window as any).westMapTest));

  await page.evaluate(() => {
    const map = (window as any).westMapTest;
    map.zoom = 12;
    map.fire('load');
    map.fire('render');
  });

  await page.getByRole('button', { name: 'Reinzoomen' }).click();
  await page.evaluate(() => (document.querySelector('.wm-cluster') as HTMLElement).click());
  expect(await page.evaluate(() => (window as any).westMapTest.lastEase.zoom)).toBe(8.2);

  await page.getByRole('button', { name: 'Rauszoomen' }).click();
  expect(await page.evaluate(() => (window as any).westMapTest.zoomCalls)).toEqual([14, 10]);
});
