/* footer: Webflow script */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var track = document.querySelector('[data-bio-timeline="track"]');
  var fill = document.querySelector('[data-bio-timeline="fill"]');
  if (!track || !fill) return;
  var rail = track.querySelector('.bio_timeline_rail');
  var finalChapter = track.querySelector('.bio_era_final');
  var firstDot = track.querySelector('.bio_era_dot');

  var texts = document.querySelectorAll('.bio_era_years, .bio_era_title');
  var dots = document.querySelectorAll('.bio_era_dot');
  var allFades = document.querySelectorAll('.bio_fade');
  var fades = [];
  for (var f = 0; f < allFades.length; f++) {
    if (allFades[f].closest('.bio_photo') || allFades[f].querySelector('h1, h2, h3, h4, h5, h6, p')) {
      allFades[f].style.opacity = '1';
      allFades[f].style.transform = 'none';
    } else {
      fades.push(allFades[f]);
    }
  }

  var EASE = reduce ? 1 : 0.26;  /* groesser = weniger Nachlauf der Linie */
  var ENTER_AT = 0.85;           /* ab welcher Viewporthoehe das Einblenden startet */
  var BAND = 0.22;               /* Laenge der Ein-/Ausblendzone, Anteil der Viewporthoehe */
  var LIFT = 1.5;                /* rem, aus denen der Inhalt hochkommt */

  var current = 0;
  var queued = false;
  var railStart = 0;
  var railLength = 0;

  if (reduce) {
    for (var k = 0; k < fades.length; k++) {
      fades[k].style.opacity = '1';
      fades[k].style.transform = 'none';
    }
  }

  function viewportH() {
    return window.innerHeight || document.documentElement.clientHeight;
  }

  function clamp01(v) {
    return v < 0 ? 0 : (v > 1 ? 1 : v);
  }

  function targetProgress() {
    var r = track.getBoundingClientRect();
    if (window.innerWidth > 767) return r.height ? clamp01((viewportH() * 0.5 - r.top) / r.height) : current;
    if (!railLength) return current;
    return clamp01((viewportH() * 0.5 - r.top - railStart) / railLength);
  }

  function updateRail() {
    if (!rail || !finalChapter) {
      railStart = 0;
      railLength = track.getBoundingClientRect().height;
      return;
    }
    var trackRect = track.getBoundingClientRect();
    var end = Math.max(0, finalChapter.getBoundingClientRect().top - trackRect.top);
    var dotRect = firstDot && firstDot.getBoundingClientRect();
    railStart = window.innerWidth <= 767 && dotRect
      ? Math.max(0, dotRect.top + dotRect.height / 2 - trackRect.top)
      : 0;
    railLength = Math.max(0, end - railStart);
    rail.style.setProperty('top', railStart + 'px', 'important');
    rail.style.setProperty('bottom', 'auto', 'important');
    rail.style.setProperty('height', railLength + 'px', 'important');
    fill.style.setProperty('top', (rail.contains(fill) ? 0 : railStart) + 'px', 'important');
    fill.style.setProperty('max-height', railLength + 'px', 'important');
    schedule();
  }

  /* Elemente, die von der Linienspitze eingefaerbt werden */
  function paintFilled(list, tip) {
    for (var i = 0; i < list.length; i++) {
      var r = list[i].getBoundingClientRect();
      if (!r.height) continue;
      var p = clamp01((tip - r.top) / r.height);
      list[i].style.backgroundSize = '100% ' + (p * 100).toFixed(2) + '%';
    }
  }

  /* Bilder blenden nur ein; andere Inhalte behalten ihre bisherige Scrollanimation. */
  function paintFades() {
    var h = viewportH();
    var band = h * BAND;
    var startAt = h * ENTER_AT;
    for (var i = 0; i < fades.length; i++) {
      var el = fades[i];
      var r = el.getBoundingClientRect();
      var enter = clamp01((startAt - r.top) / band);
      var leave = clamp01(r.bottom / band);
      // Bildinhalte behalten nach dem Einblenden ihre volle Deckkraft.
      var o = el.querySelector('img') ? enter : (enter < leave ? enter : leave);
      el.style.opacity = o.toFixed(3);
      el.style.transform = 'translate(0px, ' + ((1 - enter) * LIFT).toFixed(3) + 'rem)';
    }
  }

  function render() {
    fill.style.height = window.innerWidth <= 767
      ? (current * railLength).toFixed(3) + 'px'
      : (current * 100).toFixed(3) + '%';
    var tip = fill.getBoundingClientRect().bottom;
    paintFilled(texts, tip);
    paintFilled(dots, tip);
    if (!reduce) paintFades();
  }

  function frame() {
    queued = false;
    var target = targetProgress();
    var diff = target - current;
    if (Math.abs(diff) < 0.0006) {
      current = target;
    } else {
      current += diff * EASE;
      schedule();
    }
    render();
  }

  function schedule() {
    if (!queued) { queued = true; requestAnimationFrame(frame); }
  }

  updateRail();
  current = targetProgress();
  render();
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', updateRail);
  window.addEventListener('load', updateRail);
  if ('ResizeObserver' in window && finalChapter) {
    var observer = new ResizeObserver(updateRail);
    observer.observe(track);
    observer.observe(finalChapter);
  }
})();

/* footer: Webflow script */
(() => {
  const credits = new Map();
  let observedImage = null;
  const observer = new MutationObserver(() => { void updateCredit(); });

  function imageKey(src) {
    try {
      return new URL(src, location.href).pathname.match(/(?:^|[_/])(fw-biografie-\d+)(?:-p-\d+)?\.webp$/i)?.[1]?.toLowerCase() || '';
    } catch {
      return '';
    }
  }

  function output(root) {
    let element = root.querySelector('[data-lightbox-credit-output]');
    if (!element) {
      element = document.createElement('span');
      element.className = 'site-lightbox__credit';
      element.setAttribute('data-lightbox-credit-output', '');
      element.hidden = true;
      root.querySelector('.site-lightbox__figure')?.append(element);
    }
    return element;
  }

  async function creditFor(key) {
    if (!credits.has(key)) {
      credits.set(key, fetch(`/biografie-bildnachweise/${encodeURIComponent(key)}`, {
        credentials: 'same-origin',
      }).then(async (response) => {
        if (!response.ok) return '';
        const page = new DOMParser().parseFromString(await response.text(), 'text/html');
        const field = page.querySelector('[data-bio-credit-key]');
        return field?.getAttribute('data-bio-credit-key')?.toLowerCase() === key
          ? field.getAttribute('data-bio-credit-value')?.trim() || ''
          : '';
      }).catch(() => ''));
    }
    return credits.get(key);
  }

  async function updateCredit() {
    const root = document.querySelector('[data-site-lightbox]');
    const image = root?.querySelector('[data-lightbox-image]');
    if (!root || !image) return;
    const element = output(root);
    if (!element) return;
    const src = image.getAttribute('src') || '';
    const key = imageKey(src);
    element.textContent = '';
    element.hidden = true;
    if (!key || root.hidden) return;
    const credit = await creditFor(key);
    if (root.hidden || image.getAttribute('src') !== src) return;
    element.textContent = credit;
    element.hidden = !credit;
  }

  document.addEventListener('site:lightbox-open', () => {
    const image = document.querySelector('[data-site-lightbox] [data-lightbox-image]');
    if (image && image !== observedImage) {
      observer.disconnect();
      observer.observe(image, { attributes: true, attributeFilter: ['src'] });
      observedImage = image;
    }
    void updateCredit();
  });
})();

/* footer: fw-biography-year-alternation */
(() => {
  const lastSideByYear = new Map();
  document.querySelectorAll('.bio_year_row[data-bio-year]').forEach((row) => {
    const copy = row.querySelector(':scope > .bio_year_copy');
    if (!copy) return;
    const year = row.getAttribute('data-bio-year')?.trim();
    if (!year) return;
    const images = row.querySelector(':scope > .bio_year_images');
    const previousSide = lastSideByYear.get(year);
    const copyOnRight = previousSide === undefined
      ? copy.classList.contains('bio_copy_right')
      : !previousSide;
    copy.classList.toggle('bio_copy_right', copyOnRight);
    images?.classList.toggle('bio_images_left', copyOnRight);
    lastSideByYear.set(year, copyOnRight);
  });
})();

/* footer: fw-bio-videos */
(() => {
  const videos = [
    { year: '1982–84', id: '1-6ffmUcIyWdewtJgRlrgJSLzSnMXxeH_', src: 'https://cdn.prod.website-files.com/69b3f9edfc3e8e944fc06836/6acf41c2b66a4c88b765a90c_fw-biografie-1982.mp4', title: 'Studien zu ernster Musik' },
    { year: '1992/93', id: '1c5Dwf5AFq-BUnZEW3obKYlmR4PGwDvCy', src: 'https://cdn.prod.website-files.com/69b3f9edfc3e8e944fc06836/6acf42041bfe50a6b9794903_fw-biografie-1992.mp4', title: 'Investigations of American Art' },
    { year: '1998', id: '1v0L8chnNrXEQucDi1XewfcNbTNxIg6bg', src: 'https://cdn.prod.website-files.com/69b3f9edfc3e8e944fc06836/6acf4207dd05ddb1ea150f56_fw-biografie-1998.mp4', title: 'Der Ast am Kasten' },
  ];
  const rows = [...document.querySelectorAll('.bio_year_row[data-bio-year]')];
  for (const video of videos) {
    const row = rows.find((item) => item.getAttribute('data-bio-year') === video.year);
    if (!row || row.querySelector('[data-bio-video]')) continue;

    const card = document.createElement('figure');
    card.className = 'bio_photo bio_video';
    const button = document.createElement('button');
    button.className = 'bio_video_trigger';
    button.type = 'button';
    button.dataset.bioVideo = video.id;
    button.setAttribute('aria-label', video.title + ' abspielen');
    const image = document.createElement('img');
    image.src = 'https://drive.google.com/thumbnail?id=' + video.id + '&sz=w1200';
    image.alt = '';
    image.loading = 'lazy';
    image.onerror = () => image.remove();
    const play = document.createElement('span');
    play.className = 'bio_video_play';
    play.setAttribute('aria-hidden', 'true');
    button.append(image, play);
    const caption = document.createElement('figcaption');
    caption.className = 'bio_caption u-p-small';
    caption.textContent = video.title;
    card.append(button, caption);

    if (video.year === '1998') {
      row.querySelectorAll('.bio_year_copy .bio_entry_text')[1]?.after(card);
    } else {
      let gallery = row.querySelector('.bio_year_images .bio_gallery');
      if (!gallery) {
        const column = document.createElement('div');
        column.className = 'bio_col bio_year_images';
        gallery = document.createElement('div');
        gallery.className = 'bio_gallery';
        column.append(gallery);
        row.append(column);
      }
      card.classList.add('bio_size_l');
      video.year === '1992/93' ? gallery.prepend(card) : gallery.append(card);
    }
  }

  const dialog = document.createElement('dialog');
  dialog.className = 'bio_video_dialog';
  dialog.setAttribute('aria-label', 'Videoplayer');
  dialog.innerHTML = `<button class="site-lightbox__close bio_video_close" type="button" aria-label="Video schließen">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20"/>
      <path d="M13.2357 15.1706L17.7555 19.6904L17.7555 20.3096L13.2357 24.8294L15.1707 26.7644L19.6905 22.2446L20.3097 22.2446L24.8295 26.7644L26.7645 24.8294L22.2447 20.3096L22.2447 19.6904L26.7645 15.1706L24.8295 13.2356L20.3097 17.7554L19.6905 17.7554L15.1707 13.2356L13.2357 15.1706Z"/>
    </svg>
  </button><div class="bio_video_frame"></div>`;
  document.body.append(dialog);
  let trigger = null;
  let activeVideo = null;
  document.addEventListener('click', (event) => {
    const button = event.target.closest?.('[data-bio-video]');
    if (!button) return;
    trigger = button;
    const video = videos.find((item) => item.id === button.dataset.bioVideo);
    if (!video) return;
    const player = document.createElement('video-player');
    const skin = document.createElement('video-skin');
    const media = document.createElement('video');
    media.src = video.src;
    media.title = video.title;
    media.playsInline = true;
    media.preload = 'metadata';
    media.addEventListener('error', () => {
      const link = document.createElement('a');
      link.className = 'bio_video_error';
      link.href = 'https://drive.google.com/file/d/' + video.id + '/view';
      link.target = '_blank';
      link.rel = 'noopener';
      link.textContent = 'Video direkt öffnen';
      dialog.querySelector('.bio_video_frame').append(link);
    }, { once: true });
    skin.append(media);
    player.append(skin);
    dialog.querySelector('.bio_video_frame').replaceChildren(player);
    activeVideo = media;
    dialog.showModal();
    document.documentElement.classList.add('bio_video_open');
    window.lenis?.stop();
    media.play().catch(() => {});
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog || event.target.closest?.('.bio_video_close')) dialog.close();
  });
  dialog.addEventListener('close', () => {
    activeVideo?.pause();
    activeVideo = null;
    dialog.querySelector('.bio_video_frame').replaceChildren();
    document.documentElement.classList.remove('bio_video_open');
    window.lenis?.start();
    trigger?.focus({ preventScroll: true });
  });
})();

/* footer: fw-biography-updated-lightbox-sources */
(() => {
  const assetBase = 'https://cdn.prod.website-files.com/69b3f9edfc3e8e944fc06836/';
  const images = {
    '1977-einladung': '6acf47c71bfe50a6b97a75d6_025340_1977.jpg',
    '1983-signaturalismen': '6acf474073f6a75f57416308_002116_1983.jpg',
    '1995-otium': '6acf47c77e74197326606e45_029346_1995.jpg',
    '1996-proforma': '6acf47c673000d4255e889e4_000715_1996.jpg',
    rId51: '6acf47c673000d4255e88a00_002379.jpg',
    rId54: '6acf47c75f1b13664d2352c0_Peter-H%C3%B6ll_002516.jpg',
    rId57: '6acf47c6554f28a149096ee4_003950_1998.jpg',
  };
  for (const [key, file] of Object.entries(images)) {
    const image = [...document.querySelectorAll('.bio_photo[data-bio-image]')]
      .find((photo) => photo.dataset.bioImage === key)?.querySelector('img.js-lightbox');
    image?.setAttribute('data-lightbox-src', assetBase + file);
  }
})();
