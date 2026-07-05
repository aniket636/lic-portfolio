import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the LIC Advisor portfolio client
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Forward API calls to the Express backend during local development
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
