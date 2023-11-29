import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Jardin-Online/",
  build: {
    outDir: 'build' // Esta línea especifica el directorio de salida
  }
})
