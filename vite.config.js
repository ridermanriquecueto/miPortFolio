import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Base path para servir desde GitHub Pages: reemplazar por el nombre del repo
  base: '/miPortFolio/',
  root: '.',
  server: {
    port: 5173
  }
})
