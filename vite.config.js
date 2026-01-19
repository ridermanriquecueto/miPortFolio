import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',   // <--- CAMBIÁ EL '/' POR './' (con el punto)
  server: {
    port: 5173
  }
})