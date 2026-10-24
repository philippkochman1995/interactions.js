export const SIGNATURE_FRAME_MS = 210;
export const SIGNATURE_VARIANTS = [
  '6ab93c11c0209913a6f4ab46_West-Signatur-Variant2.svg',
  '6ab93c11630b54996257245a_West-Signatur-Variant3.svg',
  '6ab93c12f66f79789e902f77_West-Signatur-Variant4.svg',
  '6ab93c1232f656f444927b94_West-Signatur-Variant8.svg',
  '6ad72a88caefffd11ac57818_Variant9.svg',
  '6a3a705c3445399a04fbd850_SIGNATUR2.svg',
].map((filename) => `https://cdn.prod.website-files.com/69b3f9edfc3e8e944fc06836/${filename}`);

export const PRELOADER_FINAL_SIGNATURE_INDEX = SIGNATURE_VARIANTS.length;

const storageKey = 'fw-signature-last-variant';

declare global {
  interface Window {
    __fwPageSignatureVariant?: number;
  }
}

function chooseVariant(): number {
  let previous = -1;
  try {
    const stored = window.sessionStorage.getItem(storageKey);
    if (stored !== null) previous = Number(stored);
  } catch { /* Storage may be disabled. */ }
  if (!Number.isInteger(previous) || previous < 0 || previous > SIGNATURE_VARIANTS.length) previous = -1;
  let choice = Math.floor(Math.random() * (previous < 0 ? SIGNATURE_VARIANTS.length + 1 : SIGNATURE_VARIANTS.length));
  if (previous >= 0 && choice >= previous) choice++;
  try { window.sessionStorage.setItem(storageKey, String(choice)); } catch { /* Storage may be disabled. */ }
  return choice;
}

// The classic body bundle and deferred module have separate module scopes.
// A page-level value keeps the preloader and every header on the same choice.
export function getPageSignatureVariant(): number {
  return window.__fwPageSignatureVariant ??= chooseVariant();
}

export function chooseNextPageSignatureVariant(): number {
  return window.__fwPageSignatureVariant = chooseVariant();
}

export function setPageSignatureVariant(index: number): void {
  window.__fwPageSignatureVariant = index;
  try { window.sessionStorage.setItem(storageKey, String(index)); } catch { /* Storage may be disabled. */ }
}

export function signatureSequence(active: number): number[] {
  return Array.from({ length: SIGNATURE_VARIANTS.length + 1 }, (_, index) => index)
    .filter((index) => index !== active)
    .concat(active);
}
