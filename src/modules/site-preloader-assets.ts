export type AssetPriority = 'critical' | 'warm';
export interface PreloadTask {
  key: string;
  priority: AssetPriority;
  load: (signal: AbortSignal) => Promise<void>;
}

// Abort settles every waiter and removes its listeners; late callbacks cannot
// change progress or reopen an overlay after the head watchdog has released it.
export function untilAborted(work: Promise<unknown>, signal: AbortSignal): Promise<void> {
  return new Promise((resolve) => {
    const finish = (): void => { signal.removeEventListener('abort', finish); resolve(); };
    if (signal.aborted) return finish();
    signal.addEventListener('abort', finish, { once: true });
    work.then(finish, finish);
  });
}

export function loadImage(image: HTMLImageElement, signal: AbortSignal): Promise<void> {
  return new Promise((resolve) => {
    let settled = false;
    const finish = (): void => {
      if (settled) return;
      settled = true;
      image.removeEventListener('load', decode);
      image.removeEventListener('error', finish);
      signal.removeEventListener('abort', finish);
      resolve();
    };
    const decode = (): void => {
      if (typeof image.decode === 'function' && image.naturalWidth > 0) image.decode().then(finish, finish);
      else finish();
    };
    if (signal.aborted) return finish();
    signal.addEventListener('abort', finish, { once: true });
    image.addEventListener('load', decode, { once: true });
    image.addEventListener('error', finish, { once: true });
    image.loading = 'eager';
    if (image.complete) decode();
  });
}

function download(url: string, signal: AbortSignal): Promise<void> {
  return fetch(url, { signal, cache: 'force-cache', credentials: 'omit' })
    .then(async (response) => { if (response.ok) await response.arrayBuffer(); })
    .catch(() => undefined);
}

function absoluteUrl(value: string | null): string | null {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value, document.baseURI);
    return /^(https?:|data:|blob:)$/.test(url.protocol) ? url.href : null;
  } catch { return null; }
}

function explicitPriority(element: Element): AssetPriority | undefined {
  const value = element.closest('[data-preload-priority]')?.getAttribute('data-preload-priority');
  return value === 'critical' || value === 'warm' ? value : undefined;
}

function inInitialViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0 && rect.top < window.innerHeight && rect.bottom > 0
    && rect.left < window.innerWidth && rect.right > 0;
}

function splineReady(element: Element, signal: AbortSignal): Promise<void> {
  return new Promise((resolve) => {
    const events = ['load-complete', 'w-spline-load', 'site:spline-ready', 'error'];
    const finish = (): void => {
      events.forEach((name) => element.removeEventListener(name, finish));
      signal.removeEventListener('abort', finish);
      resolve();
    };
    if (signal.aborted) return finish();
    events.forEach((name) => element.addEventListener(name, finish, { once: true }));
    signal.addEventListener('abort', finish, { once: true });
    if (element.hasAttribute('data-site-spline-ready')) return finish();
    if (element.matches('spline-viewer')) element.setAttribute('loading', 'eager');
    if (element.matches('[data-animation-type="spline"]')) {
      // Read the existing native instance; never replace Webflow's load handler
      // (IX2 uses that handler), and never create a second canvas/runtime.
      const webflow = (window as Window & { Webflow?: { require?: (name: string) => { getInstance?: (node: Element) => { spline?: unknown } | undefined } } }).Webflow;
      try { if (webflow?.require?.('spline')?.getInstance?.(element)?.spline) finish(); } catch { /* Await the native w-spline-load event. */ }
    }
  });
}

export function collectPreloadTasks(): PreloadTask[] {
  const tasks = new Map<string, PreloadTask>();
  const add = (task: PreloadTask): void => {
    const previous = tasks.get(task.key);
    if (!previous || (previous.priority === 'warm' && task.priority === 'critical')) tasks.set(task.key, task);
  };
  const addUrl = (url: string, type: 'image' | 'spline', priority: AssetPriority): void => {
    add({ key: `${type}:${url}`, priority, load: (signal) => {
      if (type === 'spline') return download(url, signal);
      const image = new Image();
      image.src = url;
      return loadImage(image, signal);
    } });
  };
  for (const [index, image] of Array.from(document.images).entries()) {
    // Hidden Webflow CMS sources and transition copies are not displayed assets.
    if (image.closest('[data-work-flip-ghost], [data-cms-works-source], [data-cms-work-related-source], [data-cms-canvas-source], template')) continue;
    const priority = explicitPriority(image);
    if (!priority && (image.closest('[hidden]') || getComputedStyle(image).display === 'none')) continue;
    const url = absoluteUrl(image.currentSrc || image.getAttribute('src'));
    const responsive = image.srcset || image.closest('picture')?.querySelector('source[srcset]');
    if (!url && !responsive) continue;
    // A srcset-only lazy image may not expose currentSrc yet. Still start and
    // await the original element; only the browser can select its picture source.
    add({ key: url ? `image:${url}` : `image:responsive-${index}`, priority: priority ?? (image.closest('[data-site-preloader]') || inInitialViewport(image) ? 'critical' : 'warm'), load: (signal) => loadImage(image, signal) });
  }
  const signature = document.querySelector<HTMLImageElement>('.site-preloader__signature');
  if (signature) addUrl(new URL('preloader-background.svg', signature.src).href, 'image', 'critical');

  for (const element of Array.from(document.querySelectorAll('spline-viewer, [data-animation-type="spline"], [data-preload-spline], iframe[src]'))) {
    const isIframe = element instanceof HTMLIFrameElement;
    const url = absoluteUrl(element.getAttribute('data-preload-spline-url') || element.getAttribute('data-spline-url') || element.getAttribute('url') || element.getAttribute('src'));
    if (!url || (isIframe && !element.hasAttribute('data-preload-spline') && !/(^|\.)spline\.design$/.test(new URL(url).hostname))) continue;
    const priority = explicitPriority(element) ?? 'warm';
    const hasRuntime = element.matches('spline-viewer, [data-animation-type="spline"]');
    if (priority === 'critical' && hasRuntime) {
      add({ key: `spline:${url}`, priority, load: (signal) => splineReady(element, signal) });
    } else if (isIframe) {
      // Cross-origin iframe load does not mean scene-ready. Only an explicit
      // integration signal on the host iframe can satisfy a critical scene.
      if (priority === 'critical') {
        add({ key: `spline:${url}`, priority, load: (signal) => {
          element.loading = 'eager';
          return splineReady(element, signal);
        } });
      }
      else add({ key: `spline:${url}`, priority, load: async () => {
        // Warm the existing embed only, without a duplicate hidden renderer.
        element.loading = 'eager';
      } });
    } else addUrl(url, 'spline', priority);
  }
  for (const manifest of Array.from(document.querySelectorAll('script[type="application/json"][data-site-preload-manifest]'))) {
    try {
      const entries: unknown = JSON.parse(manifest.textContent || '[]');
      if (!Array.isArray(entries)) continue;
      for (const entry of entries) {
        if (!entry || typeof entry.url !== 'string' || !['image', 'spline'].includes(entry.type)) continue;
        const url = absoluteUrl(entry.url);
        if (url) addUrl(url, entry.type, entry.priority === 'critical' ? 'critical' : 'warm');
      }
    } catch { /* Invalid optional manifests must not block the page. */ }
  }
  if (document.fonts) {
    add({ key: 'fonts', priority: 'critical', load: (signal) => untilAborted(
      document.fonts.load('500 16px "StyreneA"').then(() => document.fonts.ready), signal,
    ) });
  }
  return Array.from(tasks.values());
}

export function waitForCmsAssets(signal: AbortSignal): Promise<void> {
  const roots = Array.from(document.querySelectorAll('[data-cms-works], [data-cms-work-detail]'));
  if (!roots.length || roots.every((root) => root.hasAttribute('data-site-assets-ready'))) return Promise.resolve();
  return new Promise((resolve) => {
    const finish = (): void => {
      observer.disconnect();
      window.clearTimeout(timer);
      signal.removeEventListener('abort', finish);
      resolve();
    };
    const observer = new MutationObserver(() => {
      if (roots.every((root) => root.hasAttribute('data-site-assets-ready'))) finish();
    });
    observer.observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ['data-site-assets-ready'] });
    // Missing CMS scripts must not consume the whole intro budget.
    const timer = window.setTimeout(finish, 2000);
    signal.addEventListener('abort', finish, { once: true });
    if (signal.aborted) finish();
  });
}

export async function warmAssets(tasks: PreloadTask[]): Promise<void> {
  if ((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData) return;
  const controller = new AbortController();
  const stop = (): void => controller.abort();
  window.addEventListener('pagehide', stop, { once: true });
  const timer = window.setTimeout(stop, 30000);
  const queue = tasks.filter((task) => task.priority === 'warm');
  const worker = async (): Promise<void> => {
    while (queue.length && !controller.signal.aborted) {
      const task = queue.shift()!;
      await untilAborted(task.load(controller.signal), controller.signal);
    }
  };
  try { await Promise.all([worker(), worker(), worker()]); }
  finally { window.clearTimeout(timer); window.removeEventListener('pagehide', stop); }
}
