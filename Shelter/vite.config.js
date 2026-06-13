import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',

  build: {
    rollupOptions: {
      base: './',
      input: {
        main: resolve(__dirname, 'index.html')
      },
    },
    minify: false,
    compact: false,
    sourcemap: true
  },
});