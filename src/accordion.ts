import { gsap } from 'gsap';

import { prefersReducedMotion, qsa } from './modules/utils';

interface AccordionItem {
  section: HTMLElement;
  itemElement: HTMLElement;
  header: HTMLElement;
  heading: HTMLElement | null;
  icon: SVGElement | HTMLElement | null;
  iconShapes: SVGElement[];
  content: HTMLElement | null;
  body: HTMLElement;
  isOpen: boolean;
}

const SECTION_SELECTOR = '.accordion_section';
const ITEM_SELECTOR = '.accordion_item';
const LEGACY_CONTAINER_SELECTOR = '.accordion_container';
const HEADER_SELECTOR = '.accordion_header';
const HEADING_SELECTOR = '.accordion_heading';
const ICON_SELECTOR = '.accordion_icon';
const BODY_SELECTOR = '.accordion_body';
const CONTENT_SELECTOR = '.accordion_content';

const DARK_PURPLE = 'var(--FW_Dark_Purple, var(--fw_dark_purple, #06021a))';
const DARK_PURPLE_50 = 'var(--FW_Dark_Purple_50, var(--fw_dark_purple_50, #82808c))';

const HEADING_HOVER_X = '2rem';
const ICON_NORMAL_X = '-2.45rem';
const ICON_HOVER_X = '-1.05rem';
const ICON_OPEN_X = '0rem';
const ICON_NORMAL_ROTATION = -90;
const ICON_HOVER_ROTATION = 0;
const ICON_OPEN_ROTATION = 45;
const MOTION_DURATION = 0.42;
const MOTION_EASE = 'power3.out';
const STYLE_ID = 'site-accordion-styles';

let initialized = false;
let itemCounter = 0;
const items: AccordionItem[] = [];

function injectAccordionStyles(): void {
  if (document.getElementById(STYLE_ID)) {
    return;
  }

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    .accordion_item {
      border-bottom: 0.5px solid var(--FW_Dark_Purple, var(--fw_dark_purple, #06021a));
      padding-top: var(--accordion-item-padding-y, 1rem);
      padding-bottom: var(--accordion-item-padding-y, 1rem);
    }

    .accordion_section > .accordion_item:first-child,
    .accordion_item:first-child {
      border-top: 0.5px solid var(--FW_Dark_Purple, var(--fw_dark_purple, #06021a));
    }

    .accordion_section + .accordion_section > .accordion_item:first-child {
      border-top: 0;
    }
  `;

  document.head.append(style);
}

function getInitialOpenState(section: HTMLElement, header: HTMLElement): boolean {
  return (
    section.classList.contains('is-open') ||
    section.classList.contains('is-active') ||
    section.hasAttribute('data-accordion-open') ||
    header.getAttribute('aria-expanded') === 'true'
  );
}

function getIconShapes(icon: SVGElement | HTMLElement | null): SVGElement[] {
  if (!icon) {
    return [];
  }

  return qsa<SVGElement>('path, circle, rect, polygon, line, polyline', icon);
}

function setIconColor(item: AccordionItem, color: string): void {
  if (!item.icon) {
    return;
  }

  gsap.set([item.icon, ...item.iconShapes], {
    color,
    fill: color,
  });

  item.iconShapes
    .filter((shape) => {
      const stroke = shape.getAttribute('stroke');
      return Boolean(stroke && stroke !== 'none');
    })
    .forEach((shape) => {
      gsap.set(shape, { stroke: color });
    });
}

function animateIconColor(item: AccordionItem, color: string): void {
  if (!item.icon) {
    return;
  }

  gsap.to([item.icon, ...item.iconShapes], {
    color,
    fill: color,
    duration: MOTION_DURATION * 0.75,
    ease: MOTION_EASE,
    overwrite: 'auto',
  });

  item.iconShapes
    .filter((shape) => {
      const stroke = shape.getAttribute('stroke');
      return Boolean(stroke && stroke !== 'none');
    })
    .forEach((shape) => {
      gsap.to(shape, {
        stroke: color,
        duration: MOTION_DURATION * 0.75,
        ease: MOTION_EASE,
        overwrite: 'auto',
      });
    });
}

function animateIcon(item: AccordionItem, state: 'normal' | 'hover' | 'open'): void {
  if (!item.icon) {
    return;
  }

  const config = {
    normal: {
      x: ICON_NORMAL_X,
      rotation: ICON_NORMAL_ROTATION,
      color: DARK_PURPLE_50,
    },
    hover: {
      x: ICON_HOVER_X,
      rotation: ICON_HOVER_ROTATION,
      color: DARK_PURPLE,
    },
    open: {
      x: ICON_OPEN_X,
      rotation: ICON_OPEN_ROTATION,
      color: DARK_PURPLE,
    },
  }[state];

  gsap.to(item.icon, {
    x: config.x,
    rotation: config.rotation,
    duration: MOTION_DURATION,
    ease: MOTION_EASE,
    overwrite: 'auto',
  });

  animateIconColor(item, config.color);
}

function animateHeading(item: AccordionItem, active: boolean): void {
  if (!item.heading) {
    return;
  }

  gsap.to(item.heading, {
    x: active ? HEADING_HOVER_X : 0,
    color: active ? DARK_PURPLE : '',
    duration: MOTION_DURATION,
    ease: MOTION_EASE,
    overwrite: 'auto',
    clearProps: active ? undefined : 'color',
  });
}

function animateBodyIndent(item: AccordionItem, active: boolean, immediate = false): void {
  gsap.to(item.body, {
    x: active ? HEADING_HOVER_X : 0,
    duration: immediate || prefersReducedMotion() ? 0 : MOTION_DURATION,
    ease: MOTION_EASE,
    overwrite: 'auto',
  });
}

function syncExpandedState(item: AccordionItem): void {
  item.section.classList.toggle('is-open', item.isOpen);
  item.section.classList.toggle('is-active', item.isOpen);
  item.itemElement.classList.toggle('is-open', item.isOpen);
  item.header.classList.toggle('is-open', item.isOpen);
  item.header.setAttribute('aria-expanded', String(item.isOpen));
}

function setContentState(item: AccordionItem, immediate = false): void {
  const { body } = item;

  gsap.killTweensOf(body);
  animateBodyIndent(item, item.isOpen, immediate);

  if (prefersReducedMotion() || immediate) {
    gsap.set(body, {
      height: item.isOpen ? 'auto' : 0,
      autoAlpha: item.isOpen ? 1 : 0,
      overflow: item.isOpen ? 'visible' : 'hidden',
    });
    return;
  }

  if (item.isOpen) {
    gsap.set(body, {
      height: 'auto',
      autoAlpha: 1,
      overflow: 'hidden',
    });

    const targetHeight = body.offsetHeight;

    gsap.fromTo(
      body,
      {
        height: 0,
        autoAlpha: 0,
      },
      {
        height: targetHeight,
        autoAlpha: 1,
        duration: MOTION_DURATION,
        ease: MOTION_EASE,
        onComplete: () => {
          gsap.set(body, { height: 'auto', overflow: 'visible' });
        },
      },
    );
    return;
  }

  gsap.to(body, {
    height: 0,
    autoAlpha: 0,
    overflow: 'hidden',
    duration: MOTION_DURATION * 0.85,
    ease: MOTION_EASE,
  });
}

function setOpen(item: AccordionItem, isOpen: boolean): void {
  if (item.isOpen === isOpen) {
    return;
  }

  if (isOpen) {
    items.forEach((otherItem) => {
      if (otherItem !== item && otherItem.isOpen) {
        setOpen(otherItem, false);
      }
    });
  }

  const isHovered = item.itemElement.matches(':hover');
  item.isOpen = isOpen;
  syncExpandedState(item);
  setContentState(item);
  animateHeading(item, item.isOpen || (!item.isOpen && isHovered));
  animateIcon(item, item.isOpen ? 'open' : isHovered ? 'hover' : 'normal');
}

function normalizeInitialOpenItems(): void {
  let foundOpenItem = false;

  items.forEach((item) => {
    if (!item.isOpen) {
      return;
    }

    if (!foundOpenItem) {
      foundOpenItem = true;
      return;
    }

    item.isOpen = false;
    syncExpandedState(item);
    setContentState(item, true);
    animateHeading(item, false);
    animateIcon(item, item.itemElement.matches(':hover') ? 'hover' : 'normal');
  });
}

function setupAccessibility(item: AccordionItem): void {
  itemCounter += 1;

  const contentId = item.body.id || item.content?.id || `accordion-content-${itemCounter}`;
  item.body.id = contentId;

  item.header.setAttribute('role', 'button');
  item.header.setAttribute('tabindex', item.header.getAttribute('tabindex') ?? '0');
  item.header.setAttribute('aria-controls', contentId);
  item.header.setAttribute('aria-expanded', String(item.isOpen));
}

function createItem(section: HTMLElement, itemElement: HTMLElement): AccordionItem | null {
  const header = itemElement.querySelector<HTMLElement>(HEADER_SELECTOR);
  const body = itemElement.querySelector<HTMLElement>(BODY_SELECTOR);
  const content = body?.querySelector<HTMLElement>(CONTENT_SELECTOR) ?? itemElement.querySelector<HTMLElement>(CONTENT_SELECTOR);

  if (!header || !body) {
    return null;
  }

  const icon = header.querySelector<SVGElement | HTMLElement>(ICON_SELECTOR);
  const item: AccordionItem = {
    section,
    itemElement,
    header,
    heading: header.querySelector<HTMLElement>(HEADING_SELECTOR),
    icon,
    iconShapes: getIconShapes(icon),
    content,
    body,
    isOpen: getInitialOpenState(section, header),
  };

  setupAccessibility(item);
  syncExpandedState(item);

  gsap.set(item.heading, {
    x: item.isOpen ? HEADING_HOVER_X : 0,
    color: item.isOpen ? DARK_PURPLE : '',
    transformOrigin: 'left center',
    willChange: 'transform, color',
  });

  gsap.set(item.body, {
    x: item.isOpen ? HEADING_HOVER_X : 0,
    willChange: 'transform, height, opacity',
  });

  if (item.icon) {
    gsap.set(item.icon, {
      x: item.isOpen ? ICON_OPEN_X : ICON_NORMAL_X,
      rotation: item.isOpen ? ICON_OPEN_ROTATION : ICON_NORMAL_ROTATION,
      transformOrigin: '50% 50%',
      transformBox: 'fill-box',
      willChange: 'transform',
      flexShrink: 0,
    });
    setIconColor(item, item.isOpen ? DARK_PURPLE : DARK_PURPLE_50);
  }

  setContentState(item, true);

  item.itemElement.addEventListener('click', (event) => {
    const target = event.target;

    if (target instanceof Element && target.closest(BODY_SELECTOR)) {
      return;
    }

    setOpen(item, !item.isOpen);
  });

  item.header.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    setOpen(item, !item.isOpen);
  });

  item.itemElement.addEventListener('mouseenter', () => {
    if (item.isOpen) {
      return;
    }

    animateHeading(item, true);
    animateIcon(item, 'hover');
  });

  item.itemElement.addEventListener('mouseleave', () => {
    if (!item.isOpen) {
      animateHeading(item, false);
    }

    animateIcon(item, item.isOpen ? 'open' : 'normal');
  });

  return item;
}

export function initAccordions(root: ParentNode = document): AccordionItem[] {
  if (initialized) {
    return items;
  }

  initialized = true;
  injectAccordionStyles();

  qsa<HTMLElement>(SECTION_SELECTOR, root).forEach((section) => {
    const itemElements = qsa<HTMLElement>(ITEM_SELECTOR, section);
    const legacyItemElements = qsa<HTMLElement>(LEGACY_CONTAINER_SELECTOR, section);
    const targets =
      itemElements.length > 0
        ? itemElements
        : legacyItemElements.length > 0
          ? legacyItemElements
          : [section];

    targets.forEach((itemElement) => {
      const item = createItem(section, itemElement);

      if (item) {
        items.push(item);
      }
    });
  });

  normalizeInitialOpenItems();

  return items;
}

function boot(): void {
  initAccordions();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
