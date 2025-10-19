import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // You can add configurations here for build output, CSS preprocessors, etc.
  build: {
    outDir: 'build', 
  },
});