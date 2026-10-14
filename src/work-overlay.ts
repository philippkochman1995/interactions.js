import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

import manifest from './work-manifest.json';
import {
  createDetailSection,
  createRelatedSection,
  fitDetailImage,
  pickRelatedItems,
  type WorkDetail,
  type WorkItem,
} from './cms-work-detail';
import { afterSitePreloader } from './modules/site-preloader-state';
import { getFocusableElements, hasModifierKey, prefersReducedMotion } from './modules/utils';

gsap.registerPlugin(Flip);

type OverlayPhase = 'closed' | 'opening' | 'open' | 'closing';
type ManifestWork = WorkDetail & WorkItem;

const works = manifest as ManifestWork[];
const worksById = new Map(works.map((work) => [work.id, work]));
const relatedItems: WorkItem[] = works.map((work, index) => ({ ...work, index }));
const FLIP_DURATION = 0.82;

function overviewUrl(): string {
  const url = new URL(window.location.href);
  url.searchParams.delete('work');
  return `${url.pathname}${url.search}${url.hash}`;
}

function slugFromHref(href: string): string {
  try {
    return new URL(href, document.baseURI).pathname.split('/').filter(Boolean).pop() || '';
  } catch {
    return '';
  }
}

function createFlyer(image: HTMLImageElement, bounds: DOMRect): HTMLElement {
  const flyer = document.createElement('div');
  flyer.className = 'work-overlay__flyer';
  flyer.setAttribute('aria-hidden', 'true');
  Object.assign(flyer.style, {
    top: `${bounds.top}px`,
    left: `${bounds.left}px`,
    width: `${bounds.width}px`,
    height: `${bounds.height}px`,
  });
  flyer.append(image);
  document.body.append(flyer);
  return flyer;
}

function placeHolderFor(image: HTMLImageElement): HTMLImageElement {
  const placeholder = image.cloneNode(false) as HTMLImageElement;
  placeholder.removeAttribute('id');
  placeholder.setAttribute('aria-hidden', 'true');
  placeholder.style.visibility = 'hidden';
  if (image.naturalWidth && image.naturalHeight) {
    placeholder.width = image.naturalWidth;
    placeholder.height = image.naturalHeight;
  }
  return placeholder;
}

function createOverlayHeader(): { header: HTMLElement; backLink: HTMLAnchorElement } {
  const source = document.querySelector<HTMLElement>('.top_bar_section');
  const header = source?.cloneNode(true) as HTMLElement || document.createElement('nav');
  header.classList.add('top_bar_section', 'u-section', 'is-relative', 'work-overlay__header');
  header.removeAttribute('data-wf--top-bar--variant');
  header.removeAttribute('inert');
  header.removeAttribute('aria-hidden');
  header.querySelectorAll<HTMLElement>('[id]').forEach((element) => element.removeAttribute('id'));
  header.querySelectorAll<HTMLElement>('[data-logo-variant]').forEach((element) => element.remove());

  const left = header.querySelector<HTMLElement>('.top_bar_left') || header;
  const backLink = document.createElement('a');
  backLink.className = 'text-link is-back w-inline-block work-overlay__back';
  backLink.href = overviewUrl();
  backLink.setAttribute('data-transition', 'false');
  backLink.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 15" class="arrow is-rotate" aria-hidden="true"><path d="M3.60046 5.7002H0V9.3002H3.60046V5.7002Z" fill="currentColor" class="arrow-dot"/><path d="M11.9979 6.75425L5.22647 0L3.11328 2.11291L8.31525 7.2967V7.7033L3.11328 12.8871L5.22647 15L11.9979 8.24575C11.9982 7.95455 11.9982 7.04545 11.9979 6.75425Z" fill="currentColor" class="arrow-arrow"/></svg><div class="text-block">Zurück</div>';
  left.replaceChildren(backLink);
  return { header, backLink };
}

export function initWorkOverlay(root: HTMLElement, gridMount: HTMLElement): void {
  const overviewTitle = document.title;
  const overlay = document.createElement('div');
  const backdrop = document.createElement('div');
  const surface = document.createElement('div');
  const content = document.createElement('div');
  const { header, backLink } = createOverlayHeader();
  let siteMenu: HTMLElement | null = null;
  const menuMarker = document.createComment('site menu position');
  const previousInert = new Map<HTMLElement, boolean>();
  let phase: OverlayPhase = 'closed';
  let activeWork: ManifestWork | null = null;
  let activeImage: HTMLImageElement | null = null;
  let activeFlyer: HTMLElement | null = null;
  let sourceSlot: HTMLElement | null = null;
  let sourceSlotStyle = '';
  let originFocus: HTMLElement | null = null;
  let gridScrollY = window.scrollY;
  let revision = 0;
  let flipTween: gsap.core.Animation | null = null;
  let motion: gsap.core.Timeline | null = null;
  let previousHtmlOverflow = '';
  let previousBodyWidth = '';
  let previousScrollRestoration = history.scrollRestoration;
  let detailLayoutCleanup: (() => void) | null = null;

  overlay.className = 'work-overlay';
  overlay.hidden = true;
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Werkdetails');
  overlay.setAttribute('data-work-overlay', '');
  overlay.tabIndex = -1;
  backdrop.className = 'work-overlay__backdrop';
  surface.className = 'work-overlay__surface';
  surface.setAttribute('data-lenis-prevent', '');
  content.className = 'work-overlay__content';
  surface.append(header, content);
  overlay.append(backdrop, surface);
  overlay.setAttribute('data-work-detail-overview-href', overviewUrl());
  document.body.append(overlay);

  const findSlot = (id: string): HTMLElement | null => {
    const card = Array.from(gridMount.querySelectorAll<HTMLElement>('[data-works-rendered-item]'))
      .find((element) => element.getAttribute('data-works-rendered-item') === id);
    return card?.querySelector<HTMLElement>('.cms-works__image-wrap') || null;
  };

  const moveSiteMenuIntoOverlay = (): void => {
    siteMenu ||= document.querySelector<HTMLElement>('[data-site-menu]');
    if (!siteMenu || overlay.contains(siteMenu)) return;
    if (!menuMarker.parentNode) siteMenu.parentNode?.insertBefore(menuMarker, siteMenu);
    overlay.append(siteMenu);
  };

  const visibleContent = (): HTMLElement[] => [
    ...Array.from(content.querySelectorAll<HTMLElement>(
      '.cms-work-detail__content > *, .cms-work-detail__caption, .cms-work-detail__related',
    )),
  ];

  const cancelMotion = (): void => {
    flipTween?.kill();
    flipTween = null;
    motion?.kill();
    motion = null;
    gsap.killTweensOf([backdrop, gridMount, surface, ...visibleContent()]);
  };

  const applyBackgroundInert = (): void => {
    for (const child of Array.from(document.body.children)) {
      if (!(child instanceof HTMLElement) || child === overlay || child === activeFlyer) continue;
      if (!previousInert.has(child)) previousInert.set(child, child.inert);
      child.inert = true;
    }
  };

  const lockBackground = (): void => {
    if (document.documentElement.classList.contains('work-overlay-active')) return;
    gridScrollY = window.scrollY;
    previousHtmlOverflow = document.documentElement.style.overflow;
    previousBodyWidth = document.body.style.width;
    previousScrollRestoration = history.scrollRestoration;
    document.body.style.width = `${document.documentElement.clientWidth}px`;
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.classList.add('work-overlay-active');
    history.scrollRestoration = 'manual';
    window.lenis?.stop();
    applyBackgroundInert();
  };

  const unlockBackground = (): void => {
    document.documentElement.classList.remove('work-overlay-active');
    document.documentElement.style.overflow = previousHtmlOverflow;
    document.body.style.width = previousBodyWidth;
    history.scrollRestoration = previousScrollRestoration;
    previousInert.forEach((value, element) => { element.inert = value; });
    previousInert.clear();
    window.lenis?.start();
    window.scrollTo(0, gridScrollY);
  };

  const reserveSlot = (slot: HTMLElement): void => {
    sourceSlot = slot;
    sourceSlotStyle = slot.getAttribute('style') || '';
    const bounds = slot.getBoundingClientRect();
    slot.style.aspectRatio = `${bounds.width} / ${Math.max(bounds.height, 1)}`;
  };

  const releaseSlot = (): void => {
    if (sourceSlot?.isConnected) {
      if (sourceSlotStyle) sourceSlot.setAttribute('style', sourceSlotStyle);
      else sourceSlot.removeAttribute('style');
    }
    sourceSlot = null;
    sourceSlotStyle = '';
  };

  const restoreImageToGrid = (): void => {
    if (!activeImage || !activeWork) return;
    const slot = findSlot(activeWork.id) || sourceSlot;
    if (slot?.isConnected) {
      if (!slot.querySelector('img')) {
        activeImage.className = 'cms-works__image';
        slot.append(activeImage);
      }
    }
    activeFlyer?.remove();
    activeFlyer = null;
    activeImage = null;
    releaseSlot();
  };

  const renderDetail = (work: ManifestWork): HTMLImageElement => {
    detailLayoutCleanup?.();
    detailLayoutCleanup = null;
    const hero = createDetailSection(work);
    const related = createRelatedSection(overlay, work, pickRelatedItems(relatedItems, work));
    const title = hero.querySelector<HTMLElement>('.cms-work-detail__title');
    const image = hero.querySelector<HTMLImageElement>('.cms-work-detail__image');
    if (!image) throw new Error(`Missing detail image for ${work.id}`);
    if (title) {
      title.id = 'work-overlay-title';
      overlay.setAttribute('aria-labelledby', title.id);
    }
    if (related) {
      related.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((link) => {
        link.setAttribute('data-transition', 'false');
      });
    }
    const detailRoot = document.createElement('div');
    detailRoot.className = 'work-detail_wrapper u-section cms-work-detail work-overlay__detail';
    detailRoot.append(hero);
    content.replaceChildren(detailRoot);
    if (related) content.append(related);
    detailLayoutCleanup = fitDetailImage(detailRoot);
    surface.scrollTop = 0;
    document.title = `${work.title} – Franz West`;
    return image;
  };

  const finishOpen = (token: number): void => {
    if (token !== revision || !activeWork) return;
    if (activeFlyer && activeImage) {
      const detailImage = content.querySelector<HTMLImageElement>('.cms-work-detail__image');
      if (detailImage) detailImage.style.removeProperty('visibility');
      restoreImageToGrid();
    }
    phase = 'open';
    gsap.to(visibleContent(), {
      autoAlpha: 1,
      duration: prefersReducedMotion() ? 0 : 0.42,
      stagger: prefersReducedMotion() ? 0 : 0.055,
      ease: 'power2.out',
      onComplete: () => overlay.focus({ preventScroll: true }),
    });
  };

  const openWork = (work: ManifestWork, fromCard: HTMLElement | null, instant = false): void => {
    const token = ++revision;
    const oldWork = activeWork;
    cancelMotion();
    if (oldWork) restoreImageToGrid();
    phase = 'opening';
    activeWork = work;
    if (!overlay.hidden && oldWork) {
      gsap.set(backdrop, { opacity: 1 });
    }

    let sourceImage: HTMLImageElement | null = null;
    let startBounds: DOMRect | null = null;
    if (!instant && fromCard) {
      const slot = fromCard.querySelector<HTMLElement>('.cms-works__image-wrap');
      const image = slot?.querySelector<HTMLImageElement>('img');
      if (slot && image && image.complete && image.naturalWidth > 0) {
        sourceImage = image;
        startBounds = slot.getBoundingClientRect();
        reserveSlot(slot);
      }
    }

    const placeholder = renderDetail(work);
    if (sourceImage && startBounds) {
      activeImage = sourceImage;
      if (sourceImage.naturalWidth && sourceImage.naturalHeight) {
        placeholder.width = sourceImage.naturalWidth;
        placeholder.height = sourceImage.naturalHeight;
      }
      placeholder.style.visibility = 'hidden';
      activeFlyer = createFlyer(sourceImage, startBounds);
    }

    overlay.hidden = false;
    moveSiteMenuIntoOverlay();
    lockBackground();
    applyBackgroundInert();
    overlay.focus({ preventScroll: true });
    document.documentElement.classList.remove('work-overlay-initial');
    gsap.set(visibleContent(), { autoAlpha: 0 });

    if (instant || prefersReducedMotion() || !activeFlyer) {
      gsap.set(backdrop, { opacity: 1 });
      gsap.set(gridMount, { opacity: 0 });
      finishOpen(token);
      return;
    }

    gsap.set(backdrop, { opacity: oldWork ? 1 : 0 });
    motion = gsap.timeline();
    motion.to(backdrop, { opacity: 1, duration: 0.32, ease: 'power2.out' }, 0);
    motion.to(gridMount, { opacity: 0, duration: 0.26, ease: 'power2.out' }, 0);
    flipTween = Flip.fit(activeFlyer, placeholder, {
      duration: FLIP_DURATION,
      ease: 'power3.inOut',
      onComplete: () => finishOpen(token),
    }) as gsap.core.Animation;
  };

  const finishClose = (token: number): void => {
    if (token !== revision) return;
    restoreImageToGrid();
    detailLayoutCleanup?.();
    detailLayoutCleanup = null;
    if (siteMenu && menuMarker.parentNode) menuMarker.parentNode.insertBefore(siteMenu, menuMarker.nextSibling);
    overlay.hidden = true;
    content.replaceChildren();
    activeWork = null;
    phase = 'closed';
    document.title = overviewTitle;
    gsap.set(gridMount, { clearProps: 'opacity' });
    gsap.set(backdrop, { clearProps: 'opacity' });
    unlockBackground();
    const focusTarget = originFocus?.isConnected ? originFocus : null;
    focusTarget?.focus({ preventScroll: true });
    originFocus = null;
  };

  const closeWork = (): void => {
    if (phase === 'closed') return;
    const token = ++revision;
    cancelMotion();
    phase = 'closing';
    const returnImage = (): void => {
      if (token !== revision) return;
      const slot = activeWork ? findSlot(activeWork.id) || sourceSlot : null;
      const detailImage = activeImage || content.querySelector<HTMLImageElement>('.cms-work-detail__image');
      if (!slot?.isConnected || !detailImage || prefersReducedMotion()) {
        gsap.to(backdrop, { opacity: 0, duration: prefersReducedMotion() ? 0 : 0.25 });
        gsap.to(gridMount, { opacity: 1, duration: prefersReducedMotion() ? 0 : 0.25,
          onComplete: () => finishClose(token) });
        return;
      }

      if (!activeFlyer) {
        const bounds = detailImage.getBoundingClientRect();
        const placeholder = placeHolderFor(detailImage);
        detailImage.replaceWith(placeholder);
        activeImage = detailImage;
        activeFlyer = createFlyer(detailImage, bounds);
      }
      gsap.to(backdrop, { opacity: 0, duration: FLIP_DURATION * 0.75, ease: 'power2.inOut' });
      gsap.to(gridMount, { opacity: 1, duration: FLIP_DURATION * 0.75, ease: 'power2.inOut' });
      flipTween = Flip.fit(activeFlyer, slot, {
        duration: FLIP_DURATION,
        ease: 'power3.inOut',
        onComplete: () => finishClose(token),
      }) as gsap.core.Animation;
    };

    const scrollHome = (): void => {
      if (surface.scrollTop > 0 && !prefersReducedMotion()) {
        gsap.to(surface, {
          scrollTop: 0,
          duration: Math.min(0.55, 0.25 + surface.scrollTop / 2000),
          ease: 'power2.inOut',
          onComplete: returnImage,
        });
      } else {
        surface.scrollTop = 0;
        returnImage();
      }
    };

    gsap.to(visibleContent(), {
      autoAlpha: 0,
      duration: prefersReducedMotion() ? 0 : 0.16,
      stagger: prefersReducedMotion() ? 0 : 0.015,
      onComplete: scrollHome,
    });
  };

  const reconcileUrl = (instant = false): void => {
    const slug = new URL(window.location.href).searchParams.get('work')?.trim() || '';
    const target = worksById.get(slug);
    if (slug && !target) {
      history.replaceState({}, '', overviewUrl());
      closeWork();
      return;
    }
    if (!target) {
      closeWork();
      return;
    }
    if (activeWork?.id === target.id && (phase === 'open' || phase === 'opening')) return;
    const card = Array.from(gridMount.querySelectorAll<HTMLElement>('[data-works-rendered-item]'))
      .find((element) => element.getAttribute('data-works-rendered-item') === target.id) || null;
    openWork(target, card, instant);
  };

  const requestClose = (): void => {
    const state = history.state as { fwWorkOverlay?: boolean; fromOverview?: boolean; depth?: number } | null;
    if (state?.fwWorkOverlay && state.fromOverview && state.depth && history.length > state.depth) {
      history.go(-state.depth);
      return;
    }
    history.replaceState({ fwWorkOverlay: false }, '', overviewUrl());
    reconcileUrl();
  };

  root.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element) || event.defaultPrevented || hasModifierKey(event)) return;
    const link = target.closest<HTMLAnchorElement>('a[data-work-overlay-trigger]');
    if (!link || !root.contains(link)) return;
    const id = link.getAttribute('data-work-overlay-trigger') || slugFromHref(link.href);
    const work = worksById.get(id);
    if (!work) return;
    event.preventDefault();
    originFocus = link;
    const url = new URL(window.location.href);
    url.searchParams.set('work', work.id);
    history.replaceState({ ...(history.state || {}), fwWorkOverlayBase: true }, '', overviewUrl());
    history.pushState({ fwWorkOverlay: true, fromOverview: true, depth: 1 }, '', url);
    openWork(work, link);
  });

  overlay.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element) || hasModifierKey(event)) return;
    const link = target.closest<HTMLAnchorElement>('a[href]');
    if (!link || !overlay.contains(link)) return;
    if (link === backLink || link.classList.contains('cms-work-detail__overview-link')) {
      event.preventDefault();
      requestClose();
      return;
    }
    const work = worksById.get(slugFromHref(link.href));
    if (!work) return;
    event.preventDefault();
    const state = history.state as { fromOverview?: boolean; depth?: number } | null;
    const url = new URL(window.location.href);
    url.searchParams.set('work', work.id);
    history.pushState({
      fwWorkOverlay: true,
      fromOverview: Boolean(state?.fromOverview),
      depth: (state?.depth || 0) + 1,
    }, '', url);
    openWork(work, null);
  });

  window.addEventListener('popstate', () => reconcileUrl());
  window.addEventListener('pageshow', (event) => { if (event.persisted) reconcileUrl(true); });
  window.addEventListener('site:lenis-ready', () => {
    if (phase !== 'closed') window.lenis?.stop();
  });
  document.addEventListener('keydown', (event) => {
    if (phase === 'closed') return;
    if (event.key === 'Escape') {
      if (siteMenu?.classList.contains('is-open')) return;
      event.preventDefault();
      requestClose();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = getFocusableElements(overlay);
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  if (new URL(window.location.href).searchParams.has('work')) {
    reconcileUrl(true);
    afterSitePreloader(() => {
      if (phase !== 'closed') {
        applyBackgroundInert();
        window.lenis?.stop();
      }
    });
  } else {
    document.documentElement.classList.remove('work-overlay-initial');
  }
}
