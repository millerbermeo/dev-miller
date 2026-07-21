import { defineConfig } from 'astro/config';

// Sitio estático desplegado en Vercel (autodetecta Astro, sin adapter).
// Tailwind 3 se integra vía PostCSS (postcss.config.mjs), no como integración de Astro.
export default defineConfig({
  site: 'https://millerbermeo.dev',
});
