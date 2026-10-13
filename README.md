# Darius H. — Minimal portfolio (complete Astro project)

A single-page English portfolio built using **Astro**, the **Tailwind CSS Vite integration**, and a custom minimal stylesheet. Configured for **GitHub Pages**, including automatic deployment via `.github/workflows/deploy.yml`.

## Publish on GitHub Pages

1. Extract this ZIP, then upload the **contents** to the root of your `dariushhpg1/portfolio` repository (including the hidden `.github` folder).
2. Commit to the `main` branch.
3. Under **Settings → Pages → Build and deployment**, set Source to **GitHub Actions**.
4. Check Actions for a successful build and deployment, then visit `https://dariushhpg1.github.io/portfolio/`.

You do not need to upload the ZIP itself to GitHub.

## Run locally

```sh
npm install
npm run dev
```

Production build:

```sh
npm run check
npm run build
```

## Edit the portfolio

- Page content and links: `src/pages/index.astro`
- Fonts, colors and layout: `src/styles/global.css`
- Image files (replace them with the **same filename and file extension**): `public/images/`
- CV: `public/Darius-H-Resume-2026.pdf`
- Favicon image: `public/images/favicon.png`
- Header portrait: `public/images/profile-avatar.png`

Key images:

| Filename | Usage |
|---|---|
| `work-blu.png` | Coin / blubank.design work |
| `work-about-coin.png` | One Design System To Rule Them All presentation |
| `work-blu-illustrations.png` | blu Illustrations |
| `work-blu-icons.png` | blu Icons |
| `work-iconamoon.png` | IconaMoon |
| `work-khooger.png` | Khooger |
| `article-git-cover.png` | Git workflow article |
| `article-icons-cover.png` | Icon-design article |
| `blu-bank-logo.png` | blu Bank company pill logo |

All project and writing cards use 4:3 landscape image frames with CSS `object-fit:cover`. Their source files are not cropped or altered by the site. Some image edges may be hidden on certain screen sizes.

Presentation link: [One Design System To Rule Them All](https://www.figma.com/proto/dib2nAxOTm9aRAjpTWQvql/About-Coin?node-id=1-72443&viewport=236%2C259%2C0.14&t=spF1rJiazW7Tci5X-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A72443&page-id=0%3A1).

## Notes

- `preview.html` is a standalone visual preview, not the source for deployment. GitHub Pages builds the Astro source under `src/`.
- The repository name is detected automatically in GitHub Actions and Astro's `base` path is set accordingly.
- `public/.nojekyll` is included to prevent Jekyll processing.
