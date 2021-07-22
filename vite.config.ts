import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteESLint from '@ehutch79/vite-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteESLint()],
  server: {
    fs: {
      strict: false,
    },
  },
});
