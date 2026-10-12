import { writeFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';

const baseUrl = process.env.FW_SITE_URL || 'https://website-4bff6e.webflow.io';
const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}),
});

try {
  const page = await browser.newPage();
  await page.goto(`${baseUrl}/werk-ueberblick`, { waitUntil: 'domcontentloaded' });

  const works = await page.evaluate(async () => {
    const overviewResponse = await fetch('/werk-ueberblick');
    if (!overviewResponse.ok) throw new Error(`Overview HTTP ${overviewResponse.status}`);
    const overview = new DOMParser().parseFromString(await overviewResponse.text(), 'text/html');
    const source = overview.querySelector('[data-cms-works-source]');
    if (!source) throw new Error('Missing overview CMS source');

    const items = [...source.querySelectorAll('[data-cms-works-item]')].map((element) => {
      const href = element.querySelector('[data-works-link]')?.getAttribute('href') || '';
      const thumbnail = element.querySelector('[data-works-thumbnail]');
      return {
        id: href.split('/').filter(Boolean).at(-1) || '',
        href,
        title: element.querySelector('[data-works-title]')?.textContent?.trim() || '',
        year: element.querySelector('[data-works-year]')?.textContent?.trim() || '',
        categories: (element.getAttribute('data-works-categories') || element.getAttribute('data-works-category') || '')
          .split(',').map((value) => value.trim()).filter(Boolean),
        thumbnail: thumbnail?.getAttribute('src') || '',
        thumbnailAlt: thumbnail?.getAttribute('alt') || '',
      };
    }).filter((item) => item.id && item.href && item.thumbnail);

    let cursor = 0;
    const results = new Array(items.length);
    const worker = async () => {
      while (cursor < items.length) {
        const index = cursor++;
        const item = items[index];
        const response = await fetch(item.href);
        if (!response.ok) throw new Error(`${item.href}: HTTP ${response.status}`);
        const detailPage = new DOMParser().parseFromString(await response.text(), 'text/html');
        const detail = detailPage.querySelector('[data-cms-work-detail]');
        if (!detail) throw new Error(`${item.href}: missing CMS detail`);
        const image = detail.querySelector('[data-work-detail-image]');
        const currentRelated = [...detail.querySelectorAll('[data-cms-work-related-source] [data-cms-works-item]')]
          .find((related) => related.getAttribute('data-works-id') === item.id);
        const readHtml = (selector) => detail.querySelector(selector)?.innerHTML.trim() || '';
        results[index] = {
          ...item,
          title: detail.querySelector('[data-work-detail-title]')?.textContent?.trim() || item.title,
          year: detail.getAttribute('data-work-detail-year')?.trim() ||
            currentRelated?.querySelector('[data-works-year]')?.textContent?.trim() || item.year,
          properties: readHtml('[data-work-detail-properties]'),
          html: readHtml('[data-work-detail-text]'),
          view: readHtml('[data-work-detail-view], [data-work-detail-ansicht]'),
          image: image?.getAttribute('src') || item.thumbnail,
          imageAlt: image?.getAttribute('alt')?.trim() || item.title,
          caption: image?.getAttribute('alt')?.trim() ||
            detail.querySelector('[data-work-detail-caption]')?.textContent?.trim() || '',
          categories: (detail.getAttribute('data-work-detail-categories') ||
            detail.getAttribute('data-work-detail-category') || item.categories.join(','))
            .split(',').map((value) => value.trim()).filter(Boolean),
        };
      }
    };

    await Promise.all(Array.from({ length: Math.min(6, items.length) }, worker));
    return results;
  });

  if (works.length === 0 || works.some((work) => !work?.id || !work.image)) {
    throw new Error('Work manifest is empty or incomplete');
  }

  await writeFile(new URL('../src/work-manifest.json', import.meta.url), `${JSON.stringify(works, null, 2)}\n`);
  console.log(`Generated ${works.length} works in src/work-manifest.json`);
} finally {
  await browser.close();
}
