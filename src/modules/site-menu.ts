import { gsap } from 'gsap';

import type { Cleanup } from '../types';
import { getStringAttr, prefersReducedMotion, qsa, qs } from './utils';

const ROOT_SELECTOR = '[data-site-menu]';
const PANEL_SELECTOR = '[data-site-menu-panel]';
const TOGGLE_SELECTOR = '[data-site-menu-toggle]';
const TOGGLE_LABEL_SELECTOR = '[data-site-menu-toggle-label]';
const TOGGLE_LABEL_TEXT_SELECTOR = '[data-site-menu-toggle-label-text]';
const TOGGLE_LABEL_GHOST_SELECTOR = '[data-site-menu-toggle-label-ghost]';
const TOGGLE_LABEL_TEXT_ATTR = 'data-site-menu-toggle-label-text';
const TOGGLE_LABEL_GHOST_ATTR = 'data-site-menu-toggle-label-ghost';
const LINK_SELECTOR = '[data-site-menu-link]';
const ACTIVE_INDICATOR_SELECTOR = '[data-site-menu-indicator]';
const ACTIVE_CLASS = 'is-active';
const OPEN_CLASS = 'is-open';
const READY_CLASS = 'is-ready';
const OPEN_TEXT_ATTR = 'data-site-menu-open-label';
const CLOSED_TEXT_ATTR = 'data-site-menu-closed-label';
const CURRENT_KEY_ATTR = 'data-site-menu-current-key';
const LABEL_ATTR = 'data-site-menu-label';
const LINK_KEY_ATTR = 'data-site-menu-key';
const ORIGINAL_TABINDEX_ATTR = 'data-site-menu-original-tabindex';
const DEFAULT_OPEN_LABEL = 'CLOSE';
const DEFAULT_CLOSED_LABEL = 'MENU';
const LABEL_SLIDE_DURATION = 0.42;

interface SiteMenuInstance {
  root: HTMLElement;
  panel: HTMLElement;
  toggle: HTMLButtonElement;
  toggleLabel: HTMLElement | null;
  links: HTMLElement[];
  isOpen: boolean;
  isHovered: boolean;
  cleanup: Cleanup[];
}

const instances: SiteMenuInstance[] = [];
let initialized = false;

function normalizePathname(pathname: string): string {
  const normalized = pathname
    .split('#')[0]
    .split('?')[0]
    .replace(/\/index\.html?$/i, '/')
    .replace(/\/+$/g, '');

  return normalized || '/';
}

function getLinkPath(link: HTMLElement): string {
  if (!(link instanceof HTMLAnchorElement)) {
    return '';
  }

  const href = getStringAttr(link, 'href');

  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return '';
  }

  try {
    return normalizePathname(new URL(link.href, window.location.href).pathname);
  } catch {
    return '';
  }
}

function matchesActiveKey(link: HTMLElement, currentKey: string): boolean {
  if (!currentKey) {
    return false;
  }

  return getStringAttr(link, LINK_KEY_ATTR) === currentKey;
}

function isCurrentLink(link: HTMLElement, root: HTMLElement): boolean {
  if (link.classList.contains('w--current') || link.getAttribute('aria-current') === 'page') {
    return true;
  }

  const currentKey =
    getStringAttr(root, CURRENT_KEY_ATTR) ||
    document.documentElement.getAttribute(CURRENT_KEY_ATTR)?.trim() ||
    document.body.getAttribute(CURRENT_KEY_ATTR)?.trim() ||
    '';

  if (matchesActiveKey(link, currentKey)) {
    return true;
  }

  const linkPath = getLinkPath(link);

  if (!linkPath) {
    return false;
  }

  return linkPath === normalizePathname(window.location.pathname);
}

function getLinkLabel(link: HTMLElement): string {
  const explicitLabel = getStringAttr(link, LABEL_ATTR);

  if (explicitLabel) {
    return explicitLabel;
  }

  return link.textContent?.replace(/\s+/g, ' ').trim() ?? '';
}

function getCurrentPageLabel(instance: SiteMenuInstance): string {
  const activeLink =
    instance.links.find((link) => link.classList.contains(ACTIVE_CLASS) || link.classList.contains('w--current')) ??
    instance.links.find((link) => isCurrentLink(link, instance.root));

  return activeLink ? getLinkLabel(activeLink) : '';
}

function reserveLabelWidth(instance: SiteMenuInstance): Cleanup {
  const target = instance.toggleLabel ?? instance.toggle;
  const originalWidth = target.style.width;
  let active = true;
  let resizeFrame = 0;

  const probe = document.createElement('span');
  probe.setAttribute('aria-hidden', 'true');
  probe.style.cssText = [
    'position:absolute',
    'left:-100000px',
    'top:0',
    'display:inline-block',
    'width:max-content',
    'min-width:0',
    'max-width:none',
    'white-space:nowrap',
    'visibility:hidden',
    'pointer-events:none',
    'overflow:visible',
    'transform:none',
    'transition:none',
  ].join(';');

  target.append(probe);

  const measure = (): void => {
    if (!active) return;

    const labels = [
      getCurrentPageLabel(instance),
      getStringAttr(instance.root, CLOSED_TEXT_ATTR) || DEFAULT_CLOSED_LABEL,
      getStringAttr(instance.root, OPEN_TEXT_ATTR) || DEFAULT_OPEN_LABEL,
    ];

    probe.textContent = '';
    const width = labels.reduce((maximum, label) => {
      probe.textContent = label;
      return Math.max(maximum, probe.getBoundingClientRect().width);
    }, 0);

    if (width > 0) {
      target.style.width = `${Math.ceil(width)}px`;
    }
  };

  const onResize = (): void => {
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      resizeFrame = 0;
      measure();
    });
  };

  measure();
  window.addEventListener('resize', onResize);
  document.fonts?.ready.then(measure);

  return () => {
    active = false;
    window.removeEventListener('resize', onResize);
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    probe.remove();
    target.style.width = originalWidth;
  };
}

/* Das Label wechselt zwischen Seitenname, MENU und CLOSE mit zwei
   uebereinanderliegenden Textebenen. Die maximale Textbreite wird separat
   reserviert; die Ghost-Ebene traegt das alte Wort waehrend des vertikalen
   Wechsels. */
function getLabelTextLayer(target: HTMLElement): HTMLElement {
  const existing = qs<HTMLElement>(TOGGLE_LABEL_TEXT_SELECTOR, target);

  if (existing) {
    return existing;
  }

  const layer = document.createElement('span');

  layer.setAttribute(TOGGLE_LABEL_TEXT_ATTR, '');
  layer.textContent = target.textContent?.replace(/\s+/g, ' ').trim() ?? '';
  target.textContent = '';
  target.appendChild(layer);

  return layer;
}

function removeLabelGhosts(target: HTMLElement): void {
  qsa<HTMLElement>(TOGGLE_LABEL_GHOST_SELECTOR, target).forEach((ghost) => {
    gsap.killTweensOf(ghost);
    ghost.remove();
  });
}

function setLabel(instance: SiteMenuInstance, animate = true): void {
  const openLabel = getStringAttr(instance.root, OPEN_TEXT_ATTR) || DEFAULT_OPEN_LABEL;
  const closedHoverLabel = getStringAttr(instance.root, CLOSED_TEXT_ATTR) || DEFAULT_CLOSED_LABEL;
  const currentPageLabel = getCurrentPageLabel(instance);
  const label = instance.isOpen ? openLabel : instance.isHovered ? closedHoverLabel : currentPageLabel || closedHoverLabel;
  const target = instance.toggleLabel ?? instance.toggle;
  const textLayer = getLabelTextLayer(target);
  const previous = textLayer.textContent ?? '';

  if (previous === label) {
    return;
  }

  gsap.killTweensOf(textLayer);

  if (prefersReducedMotion() || !animate || !previous) {
    removeLabelGhosts(target);
    textLayer.textContent = label;
    gsap.set(textLayer, { clearProps: 'opacity' });
    return;
  }

  removeLabelGhosts(target);
  gsap.set(textLayer, { yPercent: 0 });

  const ghost = document.createElement('span');

  ghost.setAttribute(TOGGLE_LABEL_GHOST_ATTR, '');
  ghost.setAttribute('aria-hidden', 'true');
  ghost.textContent = previous;
  target.appendChild(ghost);

  textLayer.textContent = label;

  gsap.fromTo(ghost, { yPercent: 0 }, {
    yPercent: -100,
    duration: LABEL_SLIDE_DURATION,
    ease: 'power2.inOut',
    onComplete: () => ghost.remove(),
  });
  gsap.fromTo(
    textLayer,
    { yPercent: 100 },
    {
      yPercent: 0,
      duration: LABEL_SLIDE_DURATION,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.set(textLayer, { clearProps: 'transform' });
      },
    },
  );
}

function setLinksFocusable(instance: SiteMenuInstance, enabled: boolean): void {
  instance.links.forEach((link) => {
    if (enabled) {
      const originalTabIndex = getStringAttr(link, ORIGINAL_TABINDEX_ATTR);

      if (originalTabIndex) {
        link.setAttribute('tabindex', originalTabIndex);
      } else {
        link.removeAttribute('tabindex');
      }

      return;
    }

    if (!link.hasAttribute(ORIGINAL_TABINDEX_ATTR) && link.hasAttribute('tabindex')) {
      link.setAttribute(ORIGINAL_TABINDEX_ATTR, String(link.tabIndex));
    }

    link.setAttribute('tabindex', '-1');
  });
}

function setPanelState(instance: SiteMenuInstance, open: boolean, animateLabel = true): void {
  instance.isOpen = open;
  instance.root.classList.toggle(OPEN_CLASS, open);
  instance.toggle.setAttribute('aria-expanded', String(open));
  instance.panel.setAttribute('aria-hidden', String(!open));
  setLinksFocusable(instance, open);
  setLabel(instance, animateLabel);
}

function animatePanel(instance: SiteMenuInstance, open: boolean, fromHeight: number): void {
  gsap.killTweensOf(instance.panel);

  gsap.set(instance.panel, { clearProps: 'height' });
  const toHeight = instance.panel.getBoundingClientRect().height;

  if (prefersReducedMotion()) {
    return;
  }

  gsap.fromTo(
    instance.panel,
    { height: fromHeight },
    {
      height: toHeight,
      duration: open ? 0.38 : 0.28,
      ease: open ? 'power3.out' : 'power2.inOut',
      onComplete: () => {
        gsap.set(instance.panel, { clearProps: 'height' });
      },
    },
  );
}

function openMenu(instance: SiteMenuInstance): void {
  if (instance.isOpen) {
    return;
  }

  const fromHeight = instance.panel.getBoundingClientRect().height;
  setPanelState(instance, true);
  animatePanel(instance, true, fromHeight);
}

function closeMenu(instance: SiteMenuInstance): void {
  if (!instance.isOpen) {
    return;
  }

  const fromHeight = instance.panel.getBoundingClientRect().height;
  setPanelState(instance, false);
  animatePanel(instance, false, fromHeight);
}

function toggleMenu(instance: SiteMenuInstance): void {
  if (instance.isOpen) {
    closeMenu(instance);
  } else {
    openMenu(instance);
  }
}

function updateActiveLinks(instance: SiteMenuInstance): void {
  instance.links.forEach((link) => {
    const active = isCurrentLink(link, instance.root);
    const indicator = qs<HTMLElement>(ACTIVE_INDICATOR_SELECTOR, link);

    link.classList.toggle(ACTIVE_CLASS, active);

    if (active) {
      link.setAttribute('aria-current', 'page');
    } else if (link.getAttribute('aria-current') === 'page') {
      link.removeAttribute('aria-current');
    }

    if (indicator) {
      indicator.setAttribute('aria-hidden', 'true');
    }
  });
}

function setupInstance(root: HTMLElement): SiteMenuInstance | null {
  const panel = qs<HTMLElement>(PANEL_SELECTOR, root);
  const toggle = qs<HTMLButtonElement>(TOGGLE_SELECTOR, root);

  if (!panel || !toggle) {
    return null;
  }

  const instance: SiteMenuInstance = {
    root,
    panel,
    toggle,
    toggleLabel: qs<HTMLElement>(TOGGLE_LABEL_SELECTOR, toggle) ?? qs<HTMLElement>(TOGGLE_LABEL_SELECTOR, root),
    links: qsa<HTMLElement>(LINK_SELECTOR, root),
    isOpen: root.classList.contains(OPEN_CLASS),
    isHovered: false,
    cleanup: [],
  };

  if (!toggle.type) {
    toggle.type = 'button';
  }

  if (!panel.id) {
    panel.id = `site-menu-panel-${instances.length + 1}`;
  }

  toggle.setAttribute('aria-controls', panel.id);
  updateActiveLinks(instance);
  setPanelState(instance, instance.isOpen, false);
  instance.cleanup.push(reserveLabelWidth(instance));

  root.classList.add(READY_CLASS);

  const onToggleClick = (event: MouseEvent): void => {
    event.preventDefault();
    toggleMenu(instance);
  };

  const onDocumentClick = (event: MouseEvent): void => {
    if (!instance.isOpen || !(event.target instanceof Node) || root.contains(event.target)) {
      return;
    }

    closeMenu(instance);
  };

  const onDocumentKeydown = (event: KeyboardEvent): void => {
    if (event.key !== 'Escape' || !instance.isOpen) {
      return;
    }

    closeMenu(instance);
    instance.toggle.focus({ preventScroll: true });
  };

  const onLinkClick = (event: Event): void => {
    const target = event.target;

    if (!(target instanceof Element) || !target.closest(LINK_SELECTOR)) {
      return;
    }

    closeMenu(instance);
  };

  const onPointerEnter = (): void => {
    instance.isHovered = true;
    setLabel(instance);
  };

  const onPointerLeave = (): void => {
    instance.isHovered = false;
    setLabel(instance);
  };

  toggle.addEventListener('click', onToggleClick);
  root.addEventListener('pointerenter', onPointerEnter);
  root.addEventListener('pointerleave', onPointerLeave);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
  root.addEventListener('click', onLinkClick);

  instance.cleanup.push(
    () => toggle.removeEventListener('click', onToggleClick),
    () => root.removeEventListener('pointerenter', onPointerEnter),
    () => root.removeEventListener('pointerleave', onPointerLeave),
    () => document.removeEventListener('click', onDocumentClick),
    () => document.removeEventListener('keydown', onDocumentKeydown),
    () => root.removeEventListener('click', onLinkClick),
  );

  return instance;
}

export function initSiteMenu(root: Document | HTMLElement = document): Cleanup {
  if (initialized && root === document) {
    return () => undefined;
  }

  if (root === document) {
    initialized = true;
  }

  const createdInstances = qsa<HTMLElement>(ROOT_SELECTOR, root)
    .map(setupInstance)
    .filter((instance): instance is SiteMenuInstance => Boolean(instance));

  instances.push(...createdInstances);

  return () => {
    createdInstances.forEach((instance) => {
      instance.cleanup.forEach((cleanup) => cleanup());
      instance.root.classList.remove(READY_CLASS, OPEN_CLASS);
      const labelTarget = instance.toggleLabel ?? instance.toggle;
      const labelTextLayer = qs<HTMLElement>(TOGGLE_LABEL_TEXT_SELECTOR, labelTarget);

      gsap.killTweensOf(instance.panel);
      gsap.killTweensOf(labelTarget);
      removeLabelGhosts(labelTarget);

      if (labelTextLayer) {
        gsap.killTweensOf(labelTextLayer);
        labelTarget.textContent = labelTextLayer.textContent;
      }

      gsap.set(instance.panel, { clearProps: 'height' });
      gsap.set(labelTarget, { clearProps: 'transform,overflow' });
      instance.panel.removeAttribute('aria-hidden');
      instance.toggle.removeAttribute('aria-expanded');
      setLinksFocusable(instance, true);
    });
  };
}
