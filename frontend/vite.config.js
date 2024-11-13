import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/app",
  plugins: [react()],
  define: {
    'BACKEND_API': JSON.stringify('http://localhost:36969/api/v1/'),
  },
})
