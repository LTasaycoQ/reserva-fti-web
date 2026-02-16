// @ts-check
import { defineConfig } from 'astro/config';
// @ts-ignore
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  base: '/',
  site: 'https://terraandinahotel.com',
  build: {
    assets: 'assets', 
  },
  
i18n: {
  defaultLocale: "es",
  locales: ["es", "en"],
  routing: {
    prefixDefaultLocale: false,
    fallbackType: "rewrite"
  },
  fallback: {
    en: "es"
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