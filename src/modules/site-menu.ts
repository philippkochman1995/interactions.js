import { gsap } from 'gsap';

import type { Cleanup } from '../types';
import { getStringAttr, prefersReducedMotion, qsa, qs } from './utils';

const ROOT_SELECTOR = '[data-site-menu]';
const PANEL_SELECTOR = '[data-site-menu-panel]';
const TOGGLE_SELECTOR = '[data-site-menu-toggle]';
const TOGGLE_LABEL_SELECTOR = '[data-site-menu-toggle-label]';
const LINK_SELECTOR = '[data-site-menu-link]';
const ACTIVE_INDICATOR_SELECTOR = '[data-site-menu-indicator]';
const ACTIVE_CLASS = 'is-active';
const OPEN_CLASS = 'is-open';
const READY_CLASS = 'is-ready';
const OPEN_TEXT_ATTR = 'data-site-menu-open-label';
const CLOSED_TEXT_ATTR = 'data-site-menu-closed-label';
const CURRENT_KEY_ATTR = 'data-site-menu-current-key';
const LINK_KEY_ATTR = 'data-site-menu-key';
const ORIGINAL_TABINDEX_ATTR = 'data-site-menu-original-tabindex';
const DEFAULT_OPEN_LABEL = 'Close';
const DEFAULT_CLOSED_LABEL = 'Menu';
const CLOSED_TRANSFORM = 'translateY(calc(100% - var(--site-menu-toggle-height, 50px)))';

interface SiteMenuInstance {
  root: HTMLElement;
  panel: HTMLElement;
  toggle: HTMLButtonElement;
  toggleLabel: HTMLElement | null;
  links: HTMLElement[];
  isOpen: boolean;
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

function setLabel(instance: SiteMenuInstance): void {
  const label = instance.isOpen
    ? getStringAttr(instance.root, OPEN_TEXT_ATTR) || DEFAULT_OPEN_LABEL
    : getStringAttr(instance.root, CLOSED_TEXT_ATTR) || DEFAULT_CLOSED_LABEL;

  if (instance.toggleLabel) {
    instance.toggleLabel.textContent = label;
  } else {
    instance.toggle.textContent = label;
  }
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

function setPanelState(instance: SiteMenuInstance, open: boolean): void {
  instance.isOpen = open;
  instance.root.classList.toggle(OPEN_CLASS, open);
  instance.toggle.setAttribute('aria-expanded', String(open));
  instance.panel.setAttribute('aria-hidden', String(!open));
  setLinksFocusable(instance, open);
  setLabel(instance);
}

function animatePanel(instance: SiteMenuInstance, open: boolean): void {
  gsap.killTweensOf(instance.panel);

  if (prefersReducedMotion()) {
    gsap.set(instance.panel, {
      transform: open ? 'translateY(0)' : CLOSED_TRANSFORM,
    });
    return;
  }

  gsap.to(instance.panel, {
    duration: open ? 0.38 : 0.28,
    ease: open ? 'power3.out' : 'power2.inOut',
    transform: open ? 'translateY(0)' : CLOSED_TRANSFORM,
  });
}

function openMenu(instance: SiteMenuInstance): void {
  if (instance.isOpen) {
    return;
  }

  setPanelState(instance, true);
  animatePanel(instance, true);
}

function closeMenu(instance: SiteMenuInstance): void {
  if (!instance.isOpen) {
    return;
  }

  setPanelState(instance, false);
  animatePanel(instance, false);
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
  setPanelState(instance, instance.isOpen);

  if (!instance.isOpen) {
    gsap.set(panel, { transform: CLOSED_TRANSFORM });
  }

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

  toggle.addEventListener('click', onToggleClick);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
  root.addEventListener('click', onLinkClick);

  instance.cleanup.push(
    () => toggle.removeEventListener('click', onToggleClick),
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
      gsap.killTweensOf(instance.panel);
      instance.panel.removeAttribute('aria-hidden');
      instance.toggle.removeAttribute('aria-expanded');
      setLinksFocusable(instance, true);
    });
  };
}
