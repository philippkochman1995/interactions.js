import { gsap } from 'gsap';

import { prefersReducedMotion, qsa } from './modules/utils';

interface AccordionItem {
  section: HTMLElement;
  header: HTMLElement;
  heading: HTMLElement | null;
  icon: SVGElement | HTMLElement | null;
  iconShapes: SVGElement[];
  content: HTMLElement;
  isOpen: boolean;
}

const SECTION_SELECTOR = '.accordion_section';
const CONTAINER_SELECTOR = '.accordion_container';
const HEADER_SELECTOR = '.accordion_header';
const HEADING_SELECTOR = '.accordion_heading';
const ICON_SELECTOR = '.accordion_icon';
const CONTENT_SELECTOR = '.accordion_content';

const DARK_PURPLE = 'var(--FW_Dark_Purple, var(--fw_dark_purple, #06021a))';
const DARK_PURPLE_50 = 'var(--FW_Dark_Purple_50, var(--fw_dark_purple_50, #82808c))';

const HEADING_HOVER_X = '2rem';
const ICON_NORMAL_X = '-4rem';
const ICON_HOVER_X = '-2rem';
const ICON_OPEN_X = '0rem';
const ICON_NORMAL_ROTATION = -90;
const ICON_HOVER_ROTATION = 0;
const ICON_OPEN_ROTATION = 45;
const MOTION_DURATION = 0.42;
const MOTION_EASE = 'power3.out';

let initialized = false;
let itemCounter = 0;
const items: AccordionItem[] = [];

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

function animateHeading(item: AccordionItem, hovering: boolean): void {
  if (!item.heading) {
    return;
  }

  gsap.to(item.heading, {
    x: hovering ? HEADING_HOVER_X : 0,
    color: hovering ? DARK_PURPLE : '',
    duration: MOTION_DURATION,
    ease: MOTION_EASE,
    overwrite: 'auto',
    clearProps: hovering ? undefined : 'color',
  });
}

function syncExpandedState(item: AccordionItem): void {
  const container = item.section.querySelector<HTMLElement>(CONTAINER_SELECTOR);

  item.section.classList.toggle('is-open', item.isOpen);
  item.section.classList.toggle('is-active', item.isOpen);
  container?.classList.toggle('is-open', item.isOpen);
  item.header.classList.toggle('is-open', item.isOpen);
  item.header.setAttribute('aria-expanded', String(item.isOpen));
}

function setContentState(item: AccordionItem, immediate = false): void {
  const { content } = item;

  gsap.killTweensOf(content);

  if (prefersReducedMotion() || immediate) {
    gsap.set(content, {
      height: item.isOpen ? 'auto' : 0,
      autoAlpha: item.isOpen ? 1 : 0,
      overflow: item.isOpen ? 'visible' : 'hidden',
    });
    return;
  }

  if (item.isOpen) {
    gsap.set(content, {
      height: 'auto',
      autoAlpha: 1,
      overflow: 'hidden',
    });

    const targetHeight = content.offsetHeight;

    gsap.fromTo(
      content,
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
          gsap.set(content, { height: 'auto', overflow: 'visible' });
        },
      },
    );
    return;
  }

  gsap.to(content, {
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

  item.isOpen = isOpen;
  syncExpandedState(item);
  setContentState(item);
  animateIcon(item, item.isOpen ? 'open' : item.header.matches(':hover') ? 'hover' : 'normal');
}

function setupAccessibility(item: AccordionItem): void {
  itemCounter += 1;

  const contentId = item.content.id || `accordion-content-${itemCounter}`;
  item.content.id = contentId;

  item.header.setAttribute('role', 'button');
  item.header.setAttribute('tabindex', item.header.getAttribute('tabindex') ?? '0');
  item.header.setAttribute('aria-controls', contentId);
  item.header.setAttribute('aria-expanded', String(item.isOpen));
}

function createItem(section: HTMLElement): AccordionItem | null {
  const header = section.querySelector<HTMLElement>(HEADER_SELECTOR);
  const content = section.querySelector<HTMLElement>(CONTENT_SELECTOR);

  if (!header || !content) {
    return null;
  }

  const icon = header.querySelector<SVGElement | HTMLElement>(ICON_SELECTOR);
  const item: AccordionItem = {
    section,
    header,
    heading: header.querySelector<HTMLElement>(HEADING_SELECTOR),
    icon,
    iconShapes: getIconShapes(icon),
    content,
    isOpen: getInitialOpenState(section, header),
  };

  setupAccessibility(item);
  syncExpandedState(item);

  gsap.set(item.heading, {
    x: 0,
    transformOrigin: 'left center',
    willChange: 'transform, color',
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

  item.header.addEventListener('click', () => {
    setOpen(item, !item.isOpen);
  });

  item.header.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    setOpen(item, !item.isOpen);
  });

  item.header.addEventListener('mouseenter', () => {
    animateHeading(item, true);

    if (!item.isOpen) {
      animateIcon(item, 'hover');
    }
  });

  item.header.addEventListener('mouseleave', () => {
    animateHeading(item, false);
    animateIcon(item, item.isOpen ? 'open' : 'normal');
  });

  return item;
}

export function initAccordions(root: ParentNode = document): AccordionItem[] {
  if (initialized) {
    return items;
  }

  initialized = true;

  qsa<HTMLElement>(SECTION_SELECTOR, root)
    .map(createItem)
    .forEach((item) => {
      if (item) {
        items.push(item);
      }
    });

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
