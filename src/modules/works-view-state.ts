import type { WorksSortMode } from '../cms-works-filter';

const WORKS_VIEW_STORAGE_KEY = 'site-works-view';

export interface WorksViewState {
  categories: string[];
  sort: WorksSortMode;
  visibleCount: number;
  scrollY: number;
  ts: number;
}

export function readWorksViewState(): WorksViewState | null {
  try {
    const raw = window.sessionStorage.getItem(WORKS_VIEW_STORAGE_KEY);
    if (!raw) return null;
    const state = JSON.parse(raw) as WorksViewState;
    if (!state || !Array.isArray(state.categories) || typeof state.visibleCount !== 'number') return null;
    if (state.sort !== 'year' && state.sort !== 'random') state.sort = 'year';
    return state;
  } catch {
    return null;
  }
}

export function writeWorksViewState(state: WorksViewState): void {
  try {
    window.sessionStorage.setItem(WORKS_VIEW_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Session storage can be unavailable in private or embedded contexts.
  }
}

export function isBackForwardNavigation(): boolean {
  try {
    const entry = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    return entry?.type === 'back_forward';
  } catch {
    return false;
  }
}
