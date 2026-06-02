import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

const page = (name) => resolve(__dirname, name);

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: page('index.html'),
        features: page('features.html'),
        lessons: page('lessons.html'),
        pricing: page('pricing.html'),
        dashboard: page('dashboard.html'),
        about: page('about.html'),
        contact: page('contact.html'),
        privacy: page('privacy.html'),
        terms: page('terms.html'),
      },
    },
  },
});
