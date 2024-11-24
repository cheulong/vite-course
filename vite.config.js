// vite.config.ts
import Inspect from 'vite-plugin-inspect'
import tailwindcss from '@tailwindcss/vite';

export default {
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  plugins: [
    Inspect(), tailwindcss(),
  ],
}