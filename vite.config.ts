import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    emptyOutDir: true,
    minify: true,
    sourcemap: true,
    target: 'es2018',
    lib: {
      entry: resolve(currentDir, 'src/main.ts'),
      formats: ['es'],
      fileName: () => 'site-interactions.js',
    },
    rolldownOptions: {
      output: {
        entryFileNames: 'site-interactions.js',
        chunkFileNames: 'site-interactions-[hash].js',
        assetFileNames: 'site-interactions-[name][extname]',
      },
    },
  },
});
