import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Sitio estático desplegado en Vercel (autodetecta Astro, sin adapter).
// Tailwind 4 se integra con el plugin de Vite; la config vive en src/styles/global.css.
export default defineConfig({
  site: 'https://millerbermeo.com',
  server: { port: 4324 },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
