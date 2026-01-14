import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    proxy: {
      '/api-iol': {
        target: 'https://api.invertironline.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-iol/, '')
      }
    }
  }
})
