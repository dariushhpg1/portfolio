# Darius H. — Modern Product Portfolio

A polished, **single-page, English, left-to-right** portfolio using **Astro 7 + Tailwind CSS 4**, designed for **GitHub Pages**. The sections are anchors on one scrolling page: `#work`, `#approach`, `#about`, `#experience`, `#writing`, and `#contact`.

## Contents and links

Actual résumé details were sourced from the provided October 2026 CV and LinkedIn profile PDF. All portfolio copy and outgoing links are in **`src/data/portfolio.ts`**. The live site has no fake case-study links or unverified testimonials.

- **blu Bank:** [blubank.design](https://blubank.design/), with a supporting Medium article.
- **IconaMoon:** [Figma Community](https://www.figma.com/community/file/1014143897459418663/iconamoon-1-1-2400-icons-8-styles) and [GitHub](https://github.com/dariushhpg1/IconaMoon).
- **Khooger:** the case-study link is intentionally displayed as *coming soon*, **not** a broken link. Add the real link to `projects` when ready.
- **Podro:** intentionally appears only in **Experience**, not as a featured project.
- **Writing:** two provided Medium links.
- **Contact:** personal email, LinkedIn, GitHub, downloadable local PDF résumé.

The **blu** case uses a real image taken from blubank.design alongside original editorial overlays. Other project covers use conceptual CSS/SVG artwork; article cover images are local illustrations. You can replace any of these visuals in `src/components/ProjectArtwork.astro`, `public/` and `src/data/portfolio.ts`.

## Run locally

Use Node 22.12+ or Node 24+.

```bash
npm install
npm run dev
```

Visit `http://localhost:4321/`. To check and build:

```bash
npm run check
npm run build
npm run preview
```

## Customize

1. Edit copy, project results, articles, external URLs, and CV details in `src/data/portfolio.ts`.
2. When the Khooger case study URL arrives, add it to `links` for the `khooger` entry and remove `pendingLink`.
3. Swap conceptual visuals for approved product imagery by changing `src/components/ProjectArtwork.astro` and `src/styles/global.css`.
4. Replace `public/Darius-H-Resume-2026.pdf` when you update your résumé (or change the `profile.resume` path).
5. Change accent colors and layout tokens in `src/styles/global.css`.

The static `preview.html` is a standalone visual reference; the **Astro source is the publishing source of truth**.

## Publish to GitHub Pages

1. Unzip the release archive, then upload **the contents** (including hidden `.github/`) to the **root** of a GitHub repository on the `main` branch. Do **not** upload the ZIP itself or a containing folder.
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
3. GitHub Actions will run `.github/workflows/deploy.yml` to install, check, build and deploy the site. See the **Actions** tab for status.
4. The included `astro.config.mjs` detects the repo name and automatically configures `base` for `username.github.io/repo/` project pages. If the repository is exactly `username.github.io`, it builds for the root domain.

For a custom domain, configure `PUBLIC_SITE_URL` and `PUBLIC_BASE_PATH` in the workflow/repository environment as needed.

## Notes

- Metrics were taken from the résumé, not independently audited. The project highlights use the conservative 27M+ users figure from the CV.
- The IconaMoon usage/download metric differs between supplied CV copies; the site intentionally only uses the consistent **2,400+ icons** claim.
- The updated title of the icon article on Medium is "Design and deliver icons to +12m users" although the URL slug still says `7m-users`.
- `public/.nojekyll` is included for static GitHub Pages output.
