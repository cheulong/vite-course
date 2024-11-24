// vite.config.ts
import Inspect from 'vite-plugin-inspect'
import tailwindcss from '@tailwindcss/vite';

export default {
  plugins: [
    Inspect(), tailwindcss(),
  ],
}