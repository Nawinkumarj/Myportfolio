import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  plugins: [react()],
  base: '/Myportfolio/', //Repository name
})
