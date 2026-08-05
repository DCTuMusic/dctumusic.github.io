// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // site: 'https://dctumusic.github.io',
  site: 'https://dctumusic.com',
  // base: '/DCTu_Site/',
  base: '/',
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