function animateIn(element: HTMLElement, distance: number, duration: number): Promise<void> {
  const animation = element.animate(
    [
      { opacity: 0, transform: `translateY(${distance}px)` },
      { opacity: 1, transform: 'translateY(0)' },
    ],
    { duration, easing: 'cubic-bezier(.22, 1, .36, 1)', fill: 'forwards' },
  );

  return animation.finished.then(() => {
    element.style.opacity = '1';
    element.style.transform = 'none';
    animation.cancel();
  });
}

async function start(): Promise<void> {
  const eyebrow = document.querySelector<HTMLElement>('.bio_hero_eyebrow');
  const heading = document.querySelector<HTMLElement>('.bio_hero_heading');
  if (!eyebrow || !heading || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  eyebrow.style.opacity = '0';
  eyebrow.style.transform = 'translateY(12px)';
  heading.style.opacity = '0';
  heading.style.transform = 'translateY(24px)';

  try {
    await Promise.all([document.fonts.ready, window.__sitePreloader?.ready]);
    await animateIn(eyebrow, 12, 600);
    await animateIn(heading, 24, 850);
  } catch {
    eyebrow.style.opacity = '1';
    heading.style.opacity = '1';
    eyebrow.style.transform = 'none';
    heading.style.transform = 'none';
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => { void start(); }, { once: true });
} else {
  void start();
}
