import { expect, test } from '@playwright/test';

test('map opens over Europe without automatic or gesture rotation', async ({ page }) => {
  await page.goto('/tests/fixtures/west-map-zoom.html');
  await page.waitForFunction(() => Boolean((window as any).westMapTest));

  expect(await page.evaluate(() => {
    const map = (window as any).westMapTest;
    map.fire('load');
    return {
      projection: map.options.projection,
      bounds: map.options.bounds,
      dragRotate: map.options.dragRotate,
      touchRotationDisabled: map.touchRotationDisabled,
      animated: Boolean(map.lastEase)
    };
  })).toEqual({
    projection: 'mercator',
    bounds: [[-12, 34], [37, 61]],
    dragRotate: false,
    touchRotationDisabled: true,
    animated: false
  });
});

test('all three categories start on and their switches filter independently', async ({ page }) => {
  await page.goto('/tests/fixtures/west-map-zoom.html');
  await page.waitForFunction(() => Boolean((window as any).westMapTest));
  await page.evaluate(() => (window as any).westMapTest.fire('load'));
  await page.getByRole('button', { name: 'Legende' }).click();

  const exhibitions = page.getByRole('switch', { name: 'Ausstellungen' });
  const works = page.getByRole('switch', { name: 'Werke' });
  const places = page.getByRole('switch', { name: 'Wichtige Orte' });
  await expect(exhibitions).toHaveAttribute('aria-checked', 'true');
  await expect(works).toHaveAttribute('aria-checked', 'true');
  await expect(places).toHaveAttribute('aria-checked', 'true');

  await exhibitions.click();
  await works.click();
  await expect(exhibitions).toHaveAttribute('aria-checked', 'false');
  await expect(works).toHaveAttribute('aria-checked', 'false');
  await expect(places).toHaveAttribute('aria-checked', 'true');
  expect(await page.evaluate(() => (window as any).westMapTest.source.data.features.map((f: any) => f.properties.kat))).toEqual(['o']);

  await exhibitions.click();
  expect(await page.evaluate(() => (window as any).westMapTest.source.data.features.map((f: any) => f.properties.kat))).toEqual(['a', 'o']);
});

test('open legend covers the logo while its filter icon stays clickable above it', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/tests/fixtures/west-map-zoom.html');
  await page.waitForFunction(() => Boolean((window as any).westMapTest));

  const filter = page.getByRole('button', { name: 'Legende' });
  await filter.click();

  expect(await page.evaluate(() => {
    const legend = document.getElementById('wmLegend')!;
    const logo = document.querySelector<HTMLElement>('.top_bar_center')!;
    const rect = legend.getBoundingClientRect();
    Object.assign(logo.style, {
      position: 'fixed', left: `${rect.left}px`, top: `${rect.top}px`,
      width: `${rect.width}px`, height: '72px', zIndex: '9999', background: 'red'
    });
    const hit = document.elementFromPoint(rect.left + 20, rect.top + 20);
    const button = document.querySelector<HTMLElement>('.wm-filter-btn')!;
    const buttonRect = button.getBoundingClientRect();
    const buttonHit = document.elementFromPoint(buttonRect.left + buttonRect.width / 2, buttonRect.top + buttonRect.height / 2);
    return legend.parentElement === document.body && legend.contains(hit)
      && button.parentElement === document.body && button.contains(buttonHit);
  })).toBe(true);

  await filter.click();
  await expect(filter).toHaveAttribute('aria-expanded', 'false');
  expect(await page.evaluate(() => document.querySelector('.wm-filter-btn')?.parentElement?.classList.contains('wm-zoom-controls'))).toBe(true);
});

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
