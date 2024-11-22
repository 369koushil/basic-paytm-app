import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/",
  plugins: [react()],
  define: {
    'BACKEND_API': JSON.stringify('https://basic-paytm-app-2pd5.onrender.com/api/v1/'),
  },
})
