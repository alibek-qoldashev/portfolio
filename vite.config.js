import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-portfolio/12/', // bu yerga repo nomini yoz
  plugins: [react(),   tailwindcss(),],
})
