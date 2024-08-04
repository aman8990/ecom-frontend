import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['vite.svg', 'robots.txt'],
      manifest: {
        name: 'App',
        short_name: 'App',
        description: 'E-Commerce App Description',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/vite.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: '/vite.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
  server: {
    host: '127.0.0.1',
    port: 4173,
  },
});
