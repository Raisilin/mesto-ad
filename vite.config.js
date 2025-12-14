import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',     // папка для сборки
    emptyOutDir: true,  // очистка dist перед сборкой
  },
  server: {
    open: true,   
  },
});