import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [vue(), svgLoader({ defaultImport: 'component' })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  define: {
    'process.env': {}
  }
});
