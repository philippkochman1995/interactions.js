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
      entry: {
        'site-interactions': resolve(currentDir, 'src/main.ts'),
        'west-map': resolve(currentDir, 'src/west-map.ts'),
        'cms-canvas': resolve(currentDir, 'src/cms-canvas.tsx'),
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    rolldownOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'site-interactions-[hash].js',
        assetFileNames: 'site-interactions-[name][extname]',
      },
    },
  },
});
