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

  resolve: {
    alias: {
      '/backgrounds': path.resolve(__dirname, './public/backgrounds'),
      '/contactsIcons': path.resolve(__dirname, './public/contactsIcons'),
      '/howHelp': path.resolve(__dirname, './public/howHelp'),
    }
  }
});