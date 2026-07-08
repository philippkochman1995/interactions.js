export type TranslationMap = Record<string, string>;

export interface I18nApi {
  readonly values: TranslationMap;
  t(key: string, fallback: string): string;
}

export interface ModalApi {
  openModal(id: string, trigger?: HTMLElement): void;
  closeModal(): void;
}

export interface LightboxApi {
  openLightbox(trigger: HTMLElement): void;
  closeLightbox(): void;
}

export interface LightboxItem {
  src: string;
  caption: string;
  alt: string;
  group: string;
  trigger: HTMLElement;
}

export type Cleanup = () => void;

declare global {
  interface Window {
    SiteInteractions?: ModalApi & LightboxApi;
  }
}
