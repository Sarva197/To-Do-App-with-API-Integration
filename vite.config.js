import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: process.env.PORT || 4173,
    host: true
  },
  preview: {
    port: process.env.PORT || 4173,
    host: true,
    allowedHosts: ['to-do-app-with-api-integration.onrender.com']
  }
});
