import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// On GitHub Actions, GITHUB_REPOSITORY is automatically `username/repository`.
// That lets one source tree support both username.github.io and project pages.
const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner, repo] = repository.split('/');
const userPage = owner && repo?.toLowerCase() === `${owner.toLowerCase()}.github.io`;

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || (owner ? `https://${owner}.github.io` : 'https://example.github.io'),
  base: process.env.PUBLIC_BASE_PATH || (repo && !userPage ? `/${repo}` : '/'),
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
