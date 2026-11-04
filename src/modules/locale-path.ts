/** Webflow prefixes secondary-locale routes; interaction checks use the page's base path. */
export function sitePathname(pathname = window.location.pathname): string {
  return pathname.replace(/^\/en(?=\/|$)/i, '') || '/';
}

/** Preserve the active locale when code creates an internal link. */
export function localizedPath(path: string, pathname = window.location.pathname): string {
  return `${/^\/en(?=\/|$)/i.test(pathname) ? '/en' : ''}${path}`;
}
