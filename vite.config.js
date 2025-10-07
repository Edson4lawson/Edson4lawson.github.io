import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Base '/' pour un site utilisateur <user>.github.io
  base: '/',
  plugins: [vue(), tailwindcss(),],
})
