import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://world-dvq9.vercel.app',
    },
  },
  plugins: [react()],
})

// https://world-alpha.vercel.app

// https://world-dvq9.vercel.app/api/jokes