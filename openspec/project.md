# Project Context

## Purpose
Personal website for Sercomi AI, a professional portfolio/blog site showcasing AI-related work and services.

## Tech Stack
- **Astro** 5.16.12 - Static site generator with file-based routing
- **Tailwind CSS** 4.1.7 - Utility-first CSS framework via Vite plugin
- **TypeScript** - Strict mode enabled with path aliases (`@/*` → `src/*`)
- **vanilla-cookieconsent** 3.1.0 - GDPR-compliant cookie consent management
- **Google Analytics 4** - Analytics with consent-based tracking
- **pnpm** 10.28.1 - Package manager

## Project Conventions

### Code Style
- TypeScript strict mode configuration (`astro/tsconfigs/strict`)
- No explicit ESLint or Prettier configuration (using defaults)
- Astro components use `.astro` extension
- TypeScript files use `.ts` extension
- Path alias `@/` for imports from `src/`

### Architecture Patterns
- **File-based routing**: Pages in `src/pages/` become routes
- **Component structure**: Reusable components in `src/components/`
- **Layout system**: Base layout in `src/layouts/BaseLayout.astro`
- **Styling**: Tailwind CSS 4 with custom dark mode variant using `@custom-variant dark (&:where(.dark, .dark *))`
- **Dark mode**: Implemented via localStorage with system preference fallback
- **Server-side generation**: Astro SSG for optimal performance

### Testing Strategy
- No tests currently configured

### Git Workflow
- **Main branch**: `main`
- **Deployment**: Automatic deployment to GitHub Pages on push to `main`
- **CI/CD**: GitHub Actions using `withastro/action@v3`
- **Hosting**: GitHub Pages

## Domain Context
- **Language**: Spanish
- **Theme**: AI-focused professional website
- **Compliance**: GDPR compliant with explicit cookie consent management
- **Analytics**: Google Analytics 4 with granular consent control (ad_storage, ad_user_data, ad_personalization, analytics_storage)
- **Cookie Consent**: Configured with Spanish (default) and English translations

## Important Constraints
- Cookie consent must be obtained before enabling Google Analytics tracking
- Dark mode preference stored in localStorage
- Site URL: https://sercomi.com (configured in astro.config.mjs)

## External Dependencies
- **GitHub Pages** - Hosting platform
- **Google Analytics** - Analytics tracking (G-H4MF1PP2NB)
- **vanilla-cookieconsent** - Cookie consent UI and management
