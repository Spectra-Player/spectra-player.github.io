// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project-site defaults. When a custom domain lands, build with:
//   SITE_URL=https://yourdomain SITE_BASE=/
// (and add public/CNAME) — everything else routes through site/base/BASE_URL.
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
