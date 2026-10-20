const photos = [
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

// The same arrow graphic, slide classes, dots and manual navigation as Editionen.
const arrowSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="26 31 50 50" fill="none" aria-hidden="true" focusable="false">' +
  '<circle data-arrow-circle cx="51" cy="56" r="20.625" stroke-width="0.75"></circle>' +
  '<path data-arrow-dot d="M55.2685 54.5264H53.5352V58.4737H55.2685V54.5264Z"></path>' +
  '<path data-arrow-head d="M56.9961 55.7542L49.6604 49L47.3711 51.1129L53.0066 56.2967V56.7033L47.3711 61.8871L49.6604 64L56.9961 57.2458C56.9965 56.9546 56.9965 56.0454 56.9961 55.7542Z"></path>' +
  '</svg>';

function navigationButton(direction: 'prev' | 'next'): HTMLButtonElement {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `editionen_nav is-${direction}`;
  button.setAttribute(`data-edition-${direction}`, '');
  button.setAttribute('aria-label', direction === 'prev' ? 'Vorheriges Bild' : 'Nächstes Bild');
  button.innerHTML = arrowSvg;
  return button;
}

function matchEditionenLightboxArrows(): void {
  function paint(): boolean {
    const lightbox = document.querySelector<HTMLElement>('[data-site-lightbox]');
    if (!lightbox) return false;
    lightbox.querySelectorAll<HTMLElement>('[data-lightbox-prev], [data-lightbox-next]').forEach((button) => {
      if (!button.querySelector('[data-arrow-head]')) button.innerHTML = arrowSvg;
    });
    return true;
  }
  if (paint()) return;
  const observer = new MutationObserver(() => { if (paint()) observer.disconnect(); });
  observer.observe(document.body, { childList: true });
}

function initAtelierSlideshow(): void {
  const source = document.querySelector<HTMLImageElement>('img[data-atelier-slideshow]');
  if (!source || !source.parentElement) return;

  const root = document.createElement('div');
  root.className = 'atelier_about_img editionen_media atelier-slideshow';
  root.setAttribute('data-edition-slider', '');
  root.setAttribute('role', 'region');
  root.setAttribute('aria-roledescription', 'Karussell');
  root.setAttribute('aria-label', 'Einblicke in das Atelier am Esteplatz');
  source.parentElement.replaceChild(root, source);

  const track = document.createElement('div');
  track.className = 'editionen_track';
  track.setAttribute('data-edition-track', '');
  const slides = photos.map((photo, index) => {
    const slide = document.createElement('div');
    slide.className = `editionen_slide${index === 0 ? ' is-active' : ''}`;
    slide.setAttribute('data-edition-slide', '');
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'atelier-slideshow__lightbox js-lightbox';
    trigger.setAttribute('data-lightbox-group', 'atelier-esteplatz');
    trigger.setAttribute('data-lightbox-src', photo.src);
    trigger.setAttribute('data-lightbox-caption', photo.alt);
    trigger.setAttribute('aria-label', `${photo.alt} vergrößern`);
    const image = index === 0 ? source : document.createElement('img');
    if (index === 0) {
      image.classList.remove('atelier_about_img', 'js-lightbox');
      image.removeAttribute('data-lightbox-fill');
      image.removeAttribute('data-atelier-slideshow');
      // Webflow keeps the first photo visible if JavaScript is unavailable.
    } else {
      image.src = photo.src;
      image.loading = 'lazy';
      image.decoding = 'async';
    }
    image.classList.add('editionen_img');
    image.alt = photo.alt;
    image.style.objectPosition = photo.position;
    trigger.appendChild(image);
    slide.appendChild(trigger);
    track.appendChild(slide);
    return { slide, trigger };
  });
  const prev = navigationButton('prev');
  const next = navigationButton('next');
  const dots = document.createElement('div');
  dots.className = 'editionen_dots';
  dots.setAttribute('data-edition-dots', '');
  const dotButtons = photos.map((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'editionen_dot';
    dot.setAttribute('data-edition-dot', '');
    dot.setAttribute('aria-label', `Bild ${index + 1}`);
    dots.appendChild(dot);
    return dot;
  });
  root.append(track, prev, next, dots);

  let active = 0;
  function show(index: number): void {
    active = (index + slides.length) % slides.length;
    slides.forEach(({ slide, trigger }, slideIndex) => {
      const selected = slideIndex === active;
      slide.classList.toggle('is-active', selected);
      slide.setAttribute('aria-hidden', String(!selected));
      trigger.tabIndex = selected ? 0 : -1;
    });
    dotButtons.forEach((dot, dotIndex) => {
      const selected = dotIndex === active;
      dot.classList.toggle('is-active', selected);
      dot.setAttribute('aria-current', String(selected));
    });
  }
  prev.addEventListener('click', () => show(active - 1));
  next.addEventListener('click', () => show(active + 1));
  dotButtons.forEach((dot, index) => dot.addEventListener('click', () => show(index)));
  show(0);
  matchEditionenLightboxArrows();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAtelierSlideshow, { once: true });
} else {
  initAtelierSlideshow();
}
