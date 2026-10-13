# Darius H. — Minimal Portfolio

A single-page English portfolio built with **Astro 7 + Tailwind 4**, intended for GitHub Pages. The visual approach is deliberately minimal: typography, space, understated blue accents, and five visual case studies.

## What changed in V7

- New personal photo in both the circular navigation avatar and the circular, transparent favicon
- Removed the decorative hero showcase, decorative About graphic, and career-metric strip
- Reworked all project cards with much shorter text and a clear visual hierarchy
- Every project image and article thumbnail is displayed inside a **4:3 landscape frame**
- The source images are never cropped or edited on disk: **CSS `object-fit: cover`** crops visually where the source aspect ratio differs
- Reduced site palette to near-white, charcoal, muted grey, and a subdued blue
- Improved blu Bank pills (circular logo slot, fully rounded corners, even vertical and left padding)
- Changed IconaMoon's main metric to **135K+ users**, as stated in the October 2026 CV
- Kept all project links, Medium articles, work experience (including Podro), and contact information

## Replace pictures

All the assets are inside `public/images`. Replacing an image with another image of the same name and extension will automatically update the website after your next GitHub commit.

| File | Purpose |
| --- | --- |
| `profile-avatar.png` | Circle in the site navigation |
| `favicon.png` | Round browser tab icon, currently derived from your new portrait |
| `blu-bank-logo.png` | blu Bank logo in the small pill on all three blu projects |
| `work-blu.png` | Coin and blubank.design cover |
| `work-blu-illustrations.png` | blu Illustrations cover |
| `work-blu-icons.png` | blu Icons cover |
| `work-iconamoon.png` | IconaMoon cover |
| `work-khooger.png` | Khooger cover |
| `article-git-cover.png` | Medium article about Git workflow |
| `article-icons-cover.png` | Medium article about icon delivery |

**Framing:** project cards and article covers use `aspect-ratio: 4/3; object-fit: cover; object-position: center;`. To show an entire image without cropping, change `object-fit: cover` to `contain` in `src/styles/global.css` (note this will add empty space within some frames).

## Edit content

Text, project sequence, URLs, metrics, and work history are in `src/data/portfolio.ts`. Images are referenced there by file path. The site remains **one scrolling page** at `src/pages/index.astro`.

The downloadable PDF CV is at `public/Darius-H-Resume-2026.pdf`. The `preview.html` in this ZIP is a self-contained browser preview; GitHub Pages builds the actual site from the files in `src/`.

## Update the live GitHub Pages website

1. Unzip this file and upload the **contents** to the root of the existing `dariushhpg1/portfolio` repository, on `main`, replacing old files. Include hidden `.github/workflows/deploy.yml`.
2. Click **Commit changes**. The configured GitHub Actions workflow automatically rebuilds and deploys the site.
3. Check the deployment status at <https://github.com/dariushhpg1/portfolio/actions>. The site is at <https://dariushhpg1.github.io/portfolio/>.

Leave **Settings → Pages → Build and deployment → Source** set to **GitHub Actions**.

## Local development

Use Node 24 or newer to match the GitHub Actions workflow:

```bash
npm install
npm run dev
npm run check
npm run build
```

A standalone preview can be regenerated with `python3 scripts/generate_preview.py` (`jinja2` and `json5` packages required). Inter loads from Google Fonts with system-font fallback.

**Build note:** Visual QA was performed with the browser preview at desktop and mobile sizes. The Astro `npm run build` requires installation of dependencies and could not be completed in the current offline authoring environment; the GitHub Actions workflow performs that build on commit.
