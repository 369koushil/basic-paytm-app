import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/",
  plugins: [react()],
  define: {
    'BACKEND_API': JSON.stringify('https://render-backend-deploy.onrender.com/api/v1/'),
  },
})
