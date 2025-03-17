import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/buttons/", // 🛠️ ضع اسم مستودعك على GitHub هنا
  plugins: [react()],
});
