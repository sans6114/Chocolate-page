import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  base: '/Chocolate-page/', // Ajuste correcto del 'base' para GitHub Pages
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
