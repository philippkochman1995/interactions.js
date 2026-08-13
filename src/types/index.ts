export type TranslationMap = Record<string, string>;

export interface I18nApi {
  readonly values: TranslationMap;
  t(key: string, fallback: string): string;
}

export interface ModalApi {
  openModal(id: string, trigger?: HTMLElement): void;
  openContentModal(content: ContentModalData, trigger?: HTMLElement): void;
  closeModal(): void;
}

export interface ContentModalData {
  id: string;
  address: string;
  layout?: 'default' | 'context';
  headline?: string;
  image: string;
  imageAlt: string;
  caption: string;
  html: string;
  work?: ContentModalWork | null;
  gallery?: ContentModalGalleryItem[];
}

export interface ContentModalWork {
  title: string;
  year: string;
  thumbnail: string;
  thumbnailAlt: string;
  href: string;
}

export interface ContentModalGalleryItem {
  src: string;
  alt: string;
  caption: string;
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
