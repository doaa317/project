import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/project/", // ✅ تأكد أن اسم المستودع مطابق تمامًا
  plugins: [react()],
});
