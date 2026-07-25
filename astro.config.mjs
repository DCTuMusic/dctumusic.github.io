// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dctumusic.github.io',
  base: '/DCTu_Site/',
  i18n: {
    locales: ['en', { path: 'zh-hant', codes: ['zh-Hant'] }],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});