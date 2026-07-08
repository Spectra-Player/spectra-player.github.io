# Spectra Website

Landing page for [Spectra](https://github.com/Spectra-Player/player), the native macOS
IPTV player. Astro 5 + Tailwind CSS v4, static output, zero client JS.

## Development

```sh
npm install
npm run dev        # http://localhost:4321/website/
npm run build      # dist/
npm run preview    # serve the production build
```

## Deploy

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`
(`withastro/action` + `actions/deploy-pages`). **One-time setup:** repo
Settings → Pages → Source: **GitHub Actions**.

Live at: https://spectra-player.github.io/website/ (until the custom domain lands)

### Custom domain later

1. Add `public/CNAME` containing the domain.
2. Set the Pages custom domain in repo settings.
3. Build with `SITE_URL=https://yourdomain` (set as `env:` in the workflow or
   flip the default in `astro.config.mjs`).

## Screenshot checklist (src/assets/screenshots/)

Captured from the app in **dark mode**, window at a consistent **1440×900pt**
(2880×1800 retina masters), via `screencapture -o -l <windowID>` (keeps native
rounded corners + traffic lights, drops the shadow). Views: EPG guide (hero),
Live TV grid, player with control bar, series detail. Check no identifying
provider info (server URL, account name) is visible before committing.

## Brand assets

- `src/assets/appglyph.png` — chrome wordmark (from the app repo's AppGlyph asset)
- `public/favicon*` / `apple-touch-icon.png` / `og.png` — derived from the app icon set
