import { WORK_FLIP_PENDING_CLASS, WORK_FLIP_STORAGE_KEY } from './modules/work-flip-state';
import { createSitePreloader, primeSplinePreloads } from './modules/site-preloader-markup';

// Loaded synchronously at the end of <body>, before the deferred main bundle.
// This also runs when the once-per-session overlay is skipped, so later pages
// still begin fetching their own Spline scenes as early as possible.
primeSplinePreloads();
createSitePreloader();

function createWorkGhost(): void {
  try {
    if (!document.documentElement.classList.contains(WORK_FLIP_PENDING_CLASS)) return;
    if (document.querySelector('[data-work-flip-ghost]')) return;
    const raw = window.sessionStorage.getItem(WORK_FLIP_STORAGE_KEY);
    if (!raw) throw new Error('Missing work flip payload');
    const payload = JSON.parse(raw);
    const ghost = document.createElement('div');
    const image = document.createElement('img');
    ghost.className = 'work-flip-ghost';
    ghost.setAttribute('data-work-flip-ghost', '');
    ghost.setAttribute('aria-hidden', 'true');
    ghost.style.top = `${payload.rect.top}px`;
    ghost.style.left = `${payload.rect.left}px`;
    ghost.style.width = `${payload.rect.width}px`;
    ghost.style.height = `${payload.rect.height}px`;
    image.src = payload.src;
    image.alt = '';
    image.decoding = 'sync';
    ghost.appendChild(image);
    document.body.appendChild(ghost);
  } catch {
    document.documentElement.classList.remove(WORK_FLIP_PENDING_CLASS);
  }
}

createWorkGhost();
if (!document.querySelector('[data-page-transition-overlay], .page-transition-overlay')) {
  const overlay = document.createElement('div');
  overlay.className = 'page-transition-overlay';
  overlay.setAttribute('data-page-transition-overlay', '');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.appendChild(overlay);
}
