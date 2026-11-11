import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Sitio estático desplegado en Vercel (autodetecta Astro, sin adapter).
// Tailwind 4 se integra con el plugin de Vite; la config vive en src/styles/global.css.
export default defineConfig({
  site: 'https://millerbermeo.dev',
  server: { port: 4324 },
  vite: { plugins: [tailwindcss()] },
});
