// vite.config.ts
import Inspect from 'vite-plugin-inspect'
import tailwindcss from '@tailwindcss/vite';
import checker from 'vite-plugin-checker';
import path from 'path';

export default {
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  plugins: [
    Inspect(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./**/*.{ts,tsx}"',
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
}