import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 4173,
    host: true,
    allowedHosts: ['to-do-app-with-api-integration.onrender.com']
  },
  preview: {
    port: process.env.PORT || 4173,
    host: true
  }
});
