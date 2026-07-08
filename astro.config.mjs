// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Project-pages defaults (repo: Spectra-Player/website → /website/ path).
// When the custom domain is registered: add public/CNAME with the hostname and
// change these two defaults to the domain and '/' — nothing else moves.
const site = process.env.SITE_URL ?? 'https://spectra-player.github.io';
const base = process.env.SITE_BASE ?? '/website';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
