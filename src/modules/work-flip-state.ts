import type { WorksSortMode } from '../cms-works-filter';

export const WORK_FLIP_STORAGE_KEY = 'site-work-flip';
export const WORKS_VIEW_STORAGE_KEY = 'site-works-view';
export const WORK_FLIP_PENDING_CLASS = 'is-work-flip-pending';

/**
 * Wie lange eine gespeicherte Flip-Uebergabe gueltig bleibt. Deckt einen normalen
 * Seitenwechsel ab, verhindert aber, dass ein spaeterer Besuch derselben Seite
 * (oder ein Reload) die Animation erneut ausloest.
 */
export const WORK_FLIP_MAX_AGE = 8000;

export type WorkFlipDirection = 'forward' | 'back';

export interface WorkFlipRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface WorkFlipPayload {
  direction: WorkFlipDirection;
  workId: string;
  src: string;
  href: string;
  rect: WorkFlipRect;
  /** Breite durch Hoehe des Ausgangsbildes; beide Seiten zeigen dasselbe Motiv ungeschnitten. */
  ratio: number;
  /** true, wenn die Uebergabe ohne Klick beim Verlassen der Seite entstanden ist. */
  auto: boolean;
  ts: number;
}

export interface WorksViewState {
  categories: string[];
  sort: WorksSortMode;
  visibleCount: number;
  scrollY: number;
  ts: number;
}

function readJson<T>(key: string): T | null {
  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function writeJson(key: string, value: unknown): void {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage kann in privaten oder eingebetteten Kontexten fehlen; ohne Payload
    // laeuft die Navigation einfach ohne Flip.
  }
}

function removeKey(key: string): void {
  try {
    window.sessionStorage.removeItem(key);
  } catch {
    // siehe writeJson
  }
}

function isRect(value: unknown): value is WorkFlipRect {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const rect = value as WorkFlipRect;

  return (
    typeof rect.top === 'number' &&
    typeof rect.left === 'number' &&
    typeof rect.width === 'number' &&
    typeof rect.height === 'number' &&
    rect.width > 0 &&
    rect.height > 0
  );
}

export function readWorkFlipPayload(): WorkFlipPayload | null {
  const payload = readJson<WorkFlipPayload>(WORK_FLIP_STORAGE_KEY);

  if (!payload || !isRect(payload.rect) || typeof payload.src !== 'string' || !payload.src) {
    return null;
  }

  if (payload.direction !== 'forward' && payload.direction !== 'back') {
    return null;
  }

  if (typeof payload.ts !== 'number' || Date.now() - payload.ts > WORK_FLIP_MAX_AGE) {
    removeKey(WORK_FLIP_STORAGE_KEY);
    return null;
  }

  return payload;
}

export function writeWorkFlipPayload(payload: WorkFlipPayload): void {
  writeJson(WORK_FLIP_STORAGE_KEY, payload);
}

export function clearWorkFlipPayload(): void {
  removeKey(WORK_FLIP_STORAGE_KEY);
}

export function readWorksViewState(): WorksViewState | null {
  const state = readJson<WorksViewState>(WORKS_VIEW_STORAGE_KEY);

  if (!state || !Array.isArray(state.categories) || typeof state.visibleCount !== 'number') {
    return null;
  }

  return state;
}

export function writeWorksViewState(state: WorksViewState): void {
  writeJson(WORKS_VIEW_STORAGE_KEY, state);
}

export function isBackForwardNavigation(): boolean {
  try {
    const entry = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    return entry?.type === 'back_forward';
  } catch {
    return false;
  }
}
