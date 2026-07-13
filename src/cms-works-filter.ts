export type WorksSortMode = 'curated' | 'random' | 'alphabetical' | 'year';

export interface WorksFilterItem {
  categories: string[];
}

export interface WorksFilterState {
  appliedCategories: Set<string>;
  pendingCategories: Set<string>;
  appliedSortMode: WorksSortMode;
  pendingSortMode: WorksSortMode;
  open: boolean;
}

interface CategoryCount {
  name: string;
  count: number;
}

const FILTER_ICON = `
  <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path d="M8.50754 0.799805L0.608478 0.799805L0.308594 1.25064L1.3437 2.7998H8.50264H8.50754H15.6582L16.6932 1.25064L16.3933 0.799805L8.50754 0.799805Z" fill="currentColor"/>
    <path d="M9.13695 5H3.29988C3.17037 5.1947 3 5.45083 3 5.45083L4.03511 7H9.13205H9.13695H13.2339L14.2689 5.45083C14.1393 5.25613 14.0985 5.1947 13.969 5H9.13695Z" fill="currentColor"/>
    <path d="M8.08318 9.2002H6.29988L6 9.65103L7.03511 11.2002H8.07828H8.08318H10.1264L11.1613 9.65103L10.8614 9.2002H8.08318Z" fill="currentColor"/>
  </svg>
`;
const ARROW_ICON = `
  <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path d="M6 9L6 0L4 -8.74228e-08L4 9L6 9Z" fill="currentColor"/>
    <path d="M5.49717 10.9999L10 7.18921L8.59139 6L5.13553 8.92743L4.86446 8.92743L1.40861 6L-5.26956e-07 7.18921L4.50283 10.9999C4.69696 11 5.30303 11 5.49717 10.9999Z" fill="currentColor"/>
  </svg>
`;

const SORT_LABELS: Record<Exclude<WorksSortMode, 'random'>, string> = {
  curated: 'Kuratiert',
  alphabetical: 'Alphabetisch',
  year: 'Entstehungsjahr',
};

function getCategoryCounts(items: WorksFilterItem[]): CategoryCount[] {
  const counts = new Map<string, number>();

  items.forEach((item) => {
    item.categories.forEach((category) => {
      counts.set(category, (counts.get(category) ?? 0) + 1);
    });
  });

  return Array.from(counts, ([name, count]) => ({ name, count })).sort((first, second) =>
    first.name.localeCompare(second.name, 'de', { sensitivity: 'base' }),
  );
}

function createIconMarkup(markup: string, className: string): HTMLElement {
  const icon = document.createElement('span');

  icon.className = className;
  icon.innerHTML = markup;

  return icon;
}

function getVisibleSortLabel(mode: WorksSortMode): string {
  return mode === 'random' ? SORT_LABELS.curated : SORT_LABELS[mode];
}

export function createWorksFilterInterface(
  items: WorksFilterItem[],
  state: WorksFilterState,
  onApply: () => void,
): {
  element: HTMLElement;
  sync: () => void;
} {
  const section = document.createElement('section');
  const overlay = document.createElement('button');
  const container = document.createElement('div');
  const topbar = document.createElement('button');
  const left = document.createElement('span');
  const filterText = document.createElement('span');
  const count = document.createElement('span');
  const right = document.createElement('span');
  const sortLabel = document.createElement('span');
  const activeSort = document.createElement('span');
  const panel = document.createElement('div');
  const panelInner = document.createElement('div');
  const categories = document.createElement('div');
  const sortControls = document.createElement('div');
  const applyButton = document.createElement('button');
  const categoryCounts = getCategoryCounts(items);
  const categoryButtons = new Map<string, HTMLButtonElement>();
  const sortButtons = new Map<WorksSortMode, HTMLButtonElement>();

  section.className = 'cms-works-filter u-section';
  overlay.className = 'cms-works-filter__overlay';
  overlay.type = 'button';
  overlay.setAttribute('aria-label', 'Filter schliessen');

  container.className = 'cms-works-filter__container u-container';

  topbar.className = 'cms-works-filter__bar';
  topbar.type = 'button';
  topbar.setAttribute('aria-expanded', 'false');

  left.className = 'cms-works-filter__bar-left';
  filterText.className = 'cms-works-filter__label';
  filterText.textContent = 'FILTER';
  count.className = 'cms-works-filter__count';

  left.append(createIconMarkup(FILTER_ICON, 'cms-works-filter__filter-icon'), filterText, count);

  right.className = 'cms-works-filter__bar-right';
  sortLabel.className = 'cms-works-filter__sort-label';
  sortLabel.textContent = 'SORTIERUNG';
  activeSort.className = 'cms-works-filter__active-sort';
  right.append(sortLabel, activeSort, createIconMarkup(ARROW_ICON, 'cms-works-filter__arrow-icon'));

  topbar.append(left, right);

  panel.className = 'cms-works-filter__panel';
  panelInner.className = 'cms-works-filter__panel-inner u-container';
  categories.className = 'cms-works-filter__categories';
  sortControls.className = 'cms-works-filter__sort-controls';

  categoryCounts.forEach((category) => {
    const button = document.createElement('button');
    const label = document.createElement('span');
    const buttonCount = document.createElement('span');

    button.className = 'cms-works-filter__pill';
    button.type = 'button';
    button.setAttribute('aria-pressed', 'false');
    label.textContent = category.name;
    buttonCount.className = 'cms-works-filter__pill-count';
    buttonCount.textContent = `[${category.count}]`;
    button.append(label, buttonCount);
    button.addEventListener('click', () => {
      if (state.pendingCategories.has(category.name)) {
        state.pendingCategories.delete(category.name);
      } else {
        state.pendingCategories.add(category.name);
      }

      sync();
    });

    categoryButtons.set(category.name, button);
    categories.append(button);
  });

  (['year', 'alphabetical', 'curated'] as const).forEach((mode) => {
    const button = document.createElement('button');

    button.className = 'cms-works-filter__sort-option';
    button.type = 'button';
    button.textContent = SORT_LABELS[mode];
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      state.pendingSortMode = mode;
      sync();
    });

    sortButtons.set(mode, button);
    sortControls.append(button);
  });

  applyButton.className = 'cms-works-filter__apply';
  applyButton.type = 'button';
  applyButton.textContent = 'ANWENDEN';
  applyButton.addEventListener('click', () => {
    state.appliedCategories = new Set(state.pendingCategories);
    state.appliedSortMode = state.pendingSortMode;
    closeFilter(false);
    onApply();
  });

  panelInner.append(categories, sortControls);
  panel.append(panelInner, applyButton);
  container.append(topbar);
  section.append(overlay, container, panel);

  function sync(): void {
    count.textContent = `[${state.appliedCategories.size}]`;
    activeSort.textContent = getVisibleSortLabel(state.appliedSortMode);
    section.classList.toggle('is-open', state.open);
    topbar.setAttribute('aria-expanded', state.open ? 'true' : 'false');

    categoryButtons.forEach((button, category) => {
      const active = state.pendingCategories.has(category);
      const buttonCount = button.querySelector<HTMLElement>('.cms-works-filter__pill-count');

      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');

      if (!buttonCount) {
        return;
      }

      if (active) {
        buttonCount.textContent = 'x';
        return;
      }

      const categoryCount = categoryCounts.find((entry) => entry.name === category)?.count ?? 0;
      buttonCount.textContent = `[${categoryCount}]`;
    });

    sortButtons.forEach((button, mode) => {
      const active = state.pendingSortMode === mode;

      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function openFilter(): void {
    state.pendingCategories = new Set(state.appliedCategories);
    state.pendingSortMode = state.appliedSortMode;
    state.open = true;
    sync();
  }

  function closeFilter(discardPending: boolean): void {
    if (discardPending) {
      state.pendingCategories = new Set(state.appliedCategories);
      state.pendingSortMode = state.appliedSortMode;
    }

    state.open = false;
    sync();
  }

  topbar.addEventListener('click', () => {
    if (state.open) {
      closeFilter(true);
    } else {
      openFilter();
    }
  });
  overlay.addEventListener('click', () => closeFilter(true));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && state.open) {
      closeFilter(true);
    }
  });
  document.addEventListener('pointerdown', (event) => {
    if (!state.open || section.contains(event.target as Node)) {
      return;
    }

    closeFilter(true);
  });

  sync();

  return { element: section, sync };
}
