import { prefersReducedMotion } from './utils';

const SHIFT = 40;

export function initHomeImageParallax(): void {
  if (!document.querySelector('.werk_hero_section') || prefersReducedMotion()) return;

  const newsImage = document.querySelector<HTMLImageElement>('.news_event img.intro_img');
  const portrait = document.querySelector<HTMLElement>('.about_section .about_img');
  if (!newsImage && !portrait) return;

  // The portrait already has its own image frame and can use the shared parallax.
  if (portrait && !portrait.hasAttribute('data-parallax')) {
    portrait.setAttribute('data-parallax', String(SHIFT));
  }

  if (!newsImage || newsImage.closest('.home-news-parallax-frame')) return;

  // Keep the CMS image in the layout as a sizing placeholder. The shared
  // parallax moves its decorative copy within this clipping frame.
  const frame = document.createElement('span');
  frame.className = 'home-news-parallax-frame';
  newsImage.before(frame);
  frame.append(newsImage);

  const image = newsImage.cloneNode(true) as HTMLImageElement;
  image.classList.add('home-news-parallax-copy');
  image.removeAttribute('id');
  image.removeAttribute('data-home-image-wipe');
  image.setAttribute('data-parallax', String(SHIFT));
  image.setAttribute('alt', '');
  image.setAttribute('aria-hidden', 'true');
  frame.append(image);
}
