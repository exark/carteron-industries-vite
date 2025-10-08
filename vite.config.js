import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps for better debugging
    terserOptions: {
      compress: {
        drop_console: false, // Keep console logs for Speed Insights
      },
    },
  },
  // Improve development experience
  server: {
    open: true,
  },
})
