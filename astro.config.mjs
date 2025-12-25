import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  adapter: node({
    mode: 'standalone'
  }),
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en', 'de', 'fr', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});