# Darius H. — Single-page portfolio

An English, single-page Astro + Tailwind CSS portfolio configured for GitHub Pages, with **Inter** throughout. The main focus is Coin, blubank.design, blu illustrations, and blu icons; Podro appears only in the Experience timeline.

## Replace images without editing code

All replaceable images live in **`public/images/`**. Keep the **exact filename and extension** when replacing a file. Commit/push the replacements to `main` and GitHub Pages redeploys automatically.

| Filename | Used for | Suggested replacement image |
| --- | --- | --- |
| `work-blu.png` | Coin / blu Bank work cover | 1600 × 1050 PNG |
| `work-blu-illustrations.png` | blu Illustrations work cover | 1600 × 1050 PNG |
| `work-blu-icons.png` | blu Icons work cover | 1600 × 1050 PNG |
| `work-iconamoon.png` | IconaMoon work cover | 1600 × 1050 PNG |
| `work-khooger.png` | Khooger work cover | 1600 × 1050 PNG |
| `blu-bank-logo.png` | Small image next to blu Bank in the featured work card | Square transparent PNG |
| `profile-avatar.png` | Circular portrait in top navigation | Square PNG, face centered |
| `favicon.png` | Circular portrait in browser tab | Square transparent PNG, ideally 180 × 180 |
| `article-git-cover.png` | Git article thumbnail | PNG cover image |
| `article-icons-cover.png` | Icon design article thumbnail | PNG cover image |

Work covers use **bare `<img>` elements, with no HTML captions, stickers, or CSS overlays**. The image filenames above are referenced in `src/data/portfolio.ts`, and all internal paths respect GitHub Pages' repository base path.

### Important notes

- **For the header avatar:** replace `profile-avatar.png` with a tightly cropped, centered headshot. CSS clips the image to a circle.
- **For the browser tab:** replace `favicon.png` if the portrait changes. Browsers may cache favicons; refresh or open a private window to see a new one.
- **For the blu Bank logo:** `blu-bank-logo.png` is currently an **editable placeholder**, not an official brand asset. Replace it with your preferred original logo.
- **Khooger case study:** the Work card links directly to your Behance portfolio project.
- The files under `public/images/` are independent. Replacing any image does not require touching Astro components or CSS.

## Edit content

Change copy, projects, work experience, article covers, and links in `src/data/portfolio.ts`. The original resume PDF is `public/Darius-H-Resume-2026.pdf`.

## Publish on GitHub Pages

1. Extract the ZIP. Upload **the files inside it** to the **root** of `dariushhpg1/portfolio` on the `main` branch. Include hidden `.github/workflows/deploy.yml`. Do not upload the ZIP itself or a folder containing all project files.
2. In **Settings > Pages > Build and deployment**, leave **Source = GitHub Actions**.
3. Changes trigger `.github/workflows/deploy.yml` automatically. When the workflow is successful, your website is at https://dariushhpg1.github.io/portfolio/.

On subsequent edits, you can upload only the changed files instead of the entire project.

## Run locally

Node 24+ recommended:

```bash
npm install
npm run dev
npm run check
npm run build
```

`preview.html` is a standalone static visual reference; the site published by GitHub Actions is built from the source under `src/`. To regenerate the static preview after **content** changes, run `python scripts/generate_preview.py` (requires Python, `jinja2`, `json5`).

Inter loads via Google Fonts when online, with system-font fallback if that service is blocked.

## Version 5 updates

- Replaced Khooger and IconaMoon covers with the latest supplied files, without changing paths.
- Replaced `public/images/blu-bank-logo.png` with the supplied blu Bank logo (shown alongside all blu projects).
- Linked the Khooger work card to its Behance case study.
- Updated all Work links to high-contrast, pill-shaped buttons with hover and keyboard focus styling.
