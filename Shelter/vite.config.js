import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',

  build: {
    cssCodeSplit: false,
    rollupOptions: {
      base: './',
      input: {
        main: resolve(__dirname, 'index.html'),
       // pets: resolve(__dirname, 'pets.html')
      },
    },
    minify: false,
    compact: false,
    sourcemap: true
  },

  resolve: {
    alias: {
      '/backgrounds': resolve(__dirname, './public/backgrounds'),
      '/contactsIcons': resolve(__dirname, './public/contactsIcons'),
      '/howHelp': resolve(__dirname, './public/howHelp'),
    }
  }
});