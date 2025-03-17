import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/project/', // استخدم نفس اسم المستودع بالضبط!
})
