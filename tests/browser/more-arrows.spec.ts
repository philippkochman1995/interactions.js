import { expect, test } from '@playwright/test';

test('more links use the carousel arrow paths and animate without a circle', async ({ page }) => {
  await page.goto('/tests/fixtures/more-arrows.html');

  const arrow = page.locator('#more .more-arrow');
  await expect(arrow).toHaveAttribute('viewBox', '40 49 19 15');
  await expect(arrow).toHaveCSS('overflow', 'visible');
  await expect(arrow.locator('circle')).toHaveCount(0);
  await expect(arrow.locator('[data-more-arrow-dot]')).toHaveAttribute(
    'd', 'M55.2685 54.5264H53.5352V58.4737H55.2685V54.5264Z',
  );
  await expect(arrow.locator('[data-more-arrow-head]')).toHaveAttribute(
    'd', 'M56.9961 55.7542L49.6604 49L47.3711 51.1129L53.0066 56.2967V56.7033L47.3711 61.8871L49.6604 64L56.9961 57.2458C56.9965 56.9546 56.9965 56.0454 56.9961 55.7542Z',
  );
  await expect(page.locator('#other .more-arrow')).toHaveCount(0);

  await page.locator('#more').hover();
  await expect.poll(() => arrow.locator('[data-more-arrow-dot]').evaluate(
    (path) => getComputedStyle(path).transform,
  )).not.toBe('none');
  await page.waitForTimeout(450);
  const iconFits = await arrow.evaluate((svg) => {
    const bounds = svg.getBoundingClientRect();
    return [...svg.querySelectorAll('path')].every((path) => {
      const shape = path.getBoundingClientRect();
      return shape.left >= bounds.left - 0.5 && shape.right <= bounds.right + 0.5;
    });
  });
  expect(iconFits).toBe(true);

  await page.evaluate(() => {
    const link = document.createElement('a');
    link.href = '/news/another';
    link.textContent = 'MEHR ERFAHREN';
    link.id = 'late-more';
    document.body.appendChild(link);
  });
  await expect(page.locator('#late-more .more-arrow')).toHaveCount(1);
});
