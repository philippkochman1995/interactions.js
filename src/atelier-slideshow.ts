const images = [
  {
    alt: 'Franz West arbeitet an einer Skulptur im Atelier am Esteplatz',
    src: 'https://s3.amazonaws.com/webflow-prod-assets/69b3f9edfc3e8e944fc06836/6ad716772edac11d79be657c_024668_Esteplatz.jpg',
    position: '35% center',
  },
  {
    alt: 'Einblick in die Arbeit im Atelier am Esteplatz',
    src: 'https://s3.amazonaws.com/webflow-prod-assets/69b3f9edfc3e8e944fc06836/6ad71676bfdf66d836104e80_024681_Esteplatz.jpg',
    position: '50% center',
  },
  {
    alt: 'Skulpturen im Atelier am Esteplatz',
    src: 'https://s3.amazonaws.com/webflow-prod-assets/69b3f9edfc3e8e944fc06836/6ad71677491f17f6faf5e6e9_036733_Esteplatz.jpg',
    position: '45% center',
  },
] as const;

const intervalMs = 5500;

function initAtelierSlideshow(): void {
  const source = document.querySelector<HTMLImageElement>('img[data-atelier-slideshow]');
  if (!source || !source.parentElement) return;

  const frame = document.createElement('div');
  frame.className = 'atelier_about_img atelier-slideshow';
  frame.setAttribute('role', 'region');
  frame.setAttribute('aria-roledescription', 'Karussell');
  frame.setAttribute('aria-label', 'Einblicke in das Atelier am Esteplatz');
  source.parentElement.replaceChild(frame, source);

  const viewport = document.createElement('div');
  viewport.className = 'atelier-slideshow__viewport';
  const slides = images.map((photo, index) => {
    const image = index === 0 ? source : document.createElement('img');
    if (index === 0) {
      image.classList.remove('atelier_about_img', 'js-lightbox');
      image.removeAttribute('data-lightbox-fill');
      image.removeAttribute('data-atelier-slideshow');
      // The Webflow image asset is the first photo and remains the no-JS fallback.
    } else {
      image.src = photo.src;
      image.loading = 'lazy';
      image.decoding = 'async';
    }
    image.classList.add('atelier-slideshow__image');
    image.alt = photo.alt;
    image.style.objectPosition = photo.position;
    image.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
    viewport.appendChild(image);
    return image;
  });

  const controls = document.createElement('div');
  controls.className = 'atelier-slideshow__controls';
  const previous = document.createElement('button');
  previous.type = 'button';
  previous.className = 'atelier-slideshow__arrow';
  previous.setAttribute('aria-label', 'Vorheriges Atelierfoto');
  previous.textContent = '←';
  const dots = document.createElement('div');
  dots.className = 'atelier-slideshow__dots';
  dots.setAttribute('role', 'group');
  dots.setAttribute('aria-label', 'Atelierfotos auswählen');
  const dotButtons = images.map((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'atelier-slideshow__dot';
    dot.setAttribute('aria-label', `Atelierfoto ${index + 1} von ${images.length} anzeigen`);
    dots.appendChild(dot);
    return dot;
  });
  const next = document.createElement('button');
  next.type = 'button';
  next.className = 'atelier-slideshow__arrow';
  next.setAttribute('aria-label', 'Nächstes Atelierfoto');
  next.textContent = '→';
  controls.append(previous, dots, next);

  const announcement = document.createElement('span');
  announcement.className = 'atelier-slideshow__announcement';
  announcement.setAttribute('aria-live', 'polite');
  frame.append(viewport, controls, announcement);

  let active = 0;
  let timer: number | undefined;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function show(index: number): void {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const selected = slideIndex === active;
      slide.classList.toggle('is-active', selected);
      slide.setAttribute('aria-hidden', String(!selected));
    });
    dotButtons.forEach((dot, dotIndex) => {
      const selected = dotIndex === active;
      dot.classList.toggle('is-active', selected);
      dot.setAttribute('aria-current', String(selected));
    });
    announcement.textContent = `Atelierfoto ${active + 1} von ${slides.length}`;
  }
  function stop(): void {
    if (timer !== undefined) window.clearInterval(timer);
    timer = undefined;
  }
  function start(): void {
    stop();
    if (reducedMotion.matches || document.hidden) return;
    timer = window.setInterval(() => show(active + 1), intervalMs);
  }
  previous.addEventListener('click', () => { show(active - 1); start(); });
  next.addEventListener('click', () => { show(active + 1); start(); });
  dotButtons.forEach((dot, index) => dot.addEventListener('click', () => { show(index); start(); }));
  frame.addEventListener('mouseenter', stop);
  frame.addEventListener('mouseleave', start);
  frame.addEventListener('focusin', stop);
  frame.addEventListener('focusout', (event) => {
    if (!(event.relatedTarget instanceof Node) || !frame.contains(event.relatedTarget)) start();
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else start(); });
  reducedMotion.addEventListener('change', start);
  show(0);
  start();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAtelierSlideshow, { once: true });
} else {
  initAtelierSlideshow();
}
