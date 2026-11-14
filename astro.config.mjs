// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://liquedgit.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
