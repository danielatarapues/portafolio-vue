import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 5173, 
  },
  resolve: {
    alias: {
      // Esta forma es más compatible con entornos ESM modernos
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})