// @ts-check
import { defineConfig } from 'astro/config';
// @ts-ignore
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://terraandinahotel.com', 

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },

  devToolbar: {
      enabled: false,
  },

  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});