// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// This repo's Pages site serves at the DOMAIN ROOT (the Pages record kept the
// org-site classification through a rename; `gh api repos/Spectra-Player/website/pages`
// reports html_url https://spectra-player.github.io/). When the custom domain is
// registered: add public/CNAME with the hostname and set SITE_URL — base stays '/'.
const site = process.env.SITE_URL ?? 'https://spectra-player.github.io';
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
