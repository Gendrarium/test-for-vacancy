import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@UI': path.resolve(__dirname, 'src', 'UI'),
      '@interfaces': path.resolve(__dirname, 'src', 'interfaces'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
      '@redux': path.resolve(__dirname, 'src', 'store'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
    },
  },
});
