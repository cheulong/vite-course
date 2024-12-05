// vite.config.ts
import Inspect from 'vite-plugin-inspect'
import tailwindcss from '@tailwindcss/vite';
import checker from 'vite-plugin-checker';

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
    }),
    tailwindcss(),
  ],
}