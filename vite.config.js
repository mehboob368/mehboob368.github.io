import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs', // ab dist ki jagah docs folder generate hoga
  },
  plugins: [react()],
})
