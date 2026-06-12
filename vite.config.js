import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  server: {
    proxy: {
      '/phpapi': {
        target: 'https://underuse-chaffing-stress.ngrok-free.dev',
        changeOrigin: true,
        secure: true,
        rewrite: (path) =>
          path.replace(/^\/phpapi/, '')
      }
    }
  }
})