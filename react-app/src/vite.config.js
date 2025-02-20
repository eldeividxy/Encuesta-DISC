import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite conexiones externas
    allowedHosts: 'all', // Autoriza cualquier host
    cors: true, // Habilita CORS
    // Desactiva la verificación de CSRF (solo para desarrollo)
    csrf: {
      allowedOrigins: ['*']
    }
  }
});