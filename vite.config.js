import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/buttons/", // ✅ تأكد أن اسم المستودع مطابق تمامًا
  plugins: [react()],
});
