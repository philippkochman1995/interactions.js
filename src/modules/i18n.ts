import type { I18nApi, TranslationMap } from '../types';
import { isNonEmptyString, safeParseJson, qs } from './utils';

let translations: TranslationMap = {};

function normalizeTranslations(value: unknown): TranslationMap {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return {};
  }

  return Object.entries(value as Record<string, unknown>).reduce<TranslationMap>(
    (accumulator, [key, translation]) => {
      if (isNonEmptyString(key) && isNonEmptyString(translation)) {
        accumulator[key.trim()] = translation.trim();
      }

      return accumulator;
    },
    {},
  );
}

export function initI18n(root: ParentNode = document): I18nApi {
  translations = {};

  const script = qs<HTMLScriptElement>('[data-site-i18n]', root);
  const rawJson = script?.textContent?.trim() ?? '';

  if (rawJson) {
    const parsed = safeParseJson<unknown>(rawJson);
    translations = normalizeTranslations(parsed);
  }

  return {
    get values() {
      return { ...translations };
    },
    t,
  };
}

export function t(key: string, fallback: string): string {
  const normalizedKey = key.trim();
  const value = translations[normalizedKey];

  if (isNonEmptyString(value)) {
    return value.trim();
  }

  return fallback.trim();
}
