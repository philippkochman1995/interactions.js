import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const currentDir = dirname(fileURLToPath(import.meta.url));

// Separate classic bundles: these must execute synchronously, before module boot.
export default defineConfig(({ mode }) => {
  if (mode !== 'head' && mode !== 'body') throw new Error('Expected head or body mode');
  return {
    build: {
      emptyOutDir: false,
      sourcemap: true,
      target: 'es2018',
      lib: {
        entry: resolve(currentDir, `src/site-${mode}.ts`),
        formats: ['iife'],
        name: mode === 'head' ? 'SiteHead' : 'SiteBody',
        fileName: () => `site-${mode}.js`,
      },
    },
  };
});
