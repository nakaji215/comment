import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: assetInfo => {
          let extType = assetInfo.name.split('.').pop();
          if (/css|js/.test(extType)) {
            return `assets/${extType}/[name]-[hash][extname]`;
          }
          if (/svg|png|jpe?g|gif/.test(extType)) {
            return `assets/image/[name]-[hash][extname]`;
          }
          return `assets/other/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
});
