const PICKER_SELECTOR = '.site-menu__languages';
const LINK_SELECTOR = '.site-menu__language';
const INDICATOR_CLASS = 'site-menu__language-indicator';

function getActiveLink(links: HTMLAnchorElement[]): HTMLAnchorElement | undefined {
  return links.find((link) =>
    link.classList.contains('site-menu__language--active') ||
    link.getAttribute('aria-current') === 'page' ||
    link.classList.contains('w--current'),
  ) ?? links[0];
}

function setIndicatorPosition(
  picker: HTMLElement,
  indicator: HTMLElement,
  link: HTMLAnchorElement,
): void {
  const pickerRect = picker.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();

  indicator.style.width = `${linkRect.width}px`;
  indicator.style.transform = `translate3d(${linkRect.left - pickerRect.left}px, 0, 0)`;
  indicator.style.top = `${linkRect.bottom - pickerRect.top + 1}px`;
}

function initPicker(picker: HTMLElement): void {
  const links = Array.from(picker.querySelectorAll<HTMLAnchorElement>(LINK_SELECTOR));
  const activeLink = getActiveLink(links);

  if (!activeLink || picker.querySelector(`.${INDICATOR_CLASS}`)) return;

  const indicator = document.createElement('span');
  indicator.className = INDICATOR_CLASS;
  indicator.setAttribute('aria-hidden', 'true');
  picker.appendChild(indicator);

  const moveTo = (link: HTMLAnchorElement): void => setIndicatorPosition(picker, indicator, link);
  const moveToCurrent = (): void => {
    const hoveredOrFocused = links.find((link) => link.matches(':hover, :focus-visible'));
    moveTo(hoveredOrFocused ?? activeLink);
  };

  moveToCurrent();
  requestAnimationFrame(() => picker.classList.add('has-language-indicator'));

  links.forEach((link) => {
    link.addEventListener('mouseenter', () => moveTo(link));
    link.addEventListener('focus', () => moveTo(link));
    link.addEventListener('blur', (event) => {
      const nextTarget = event.relatedTarget;
      if (!(nextTarget instanceof Node) || !picker.contains(nextTarget)) moveToCurrent();
    });
  });

  picker.addEventListener('mouseleave', moveToCurrent);

  window.addEventListener('resize', moveToCurrent, { passive: true });
}

export function initLanguagePicker(): void {
  document.querySelectorAll<HTMLElement>(PICKER_SELECTOR).forEach(initPicker);
}
