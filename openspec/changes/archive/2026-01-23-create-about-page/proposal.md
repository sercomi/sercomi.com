# Proposal: Create About Page Implementation

Implement a new "Sobre mí" (About) page for sercomi.com using Astro components, following the design and content from `sample/about.html`. This page will detail the career path, vision, and core values of Sergi Comas.

## Motivation
Potential clients and collaborators need to understand the human side, the experience level (Seniority), and the philosophy behind the technical work. The "About" page provides this narrative context.

## Scope
- New page at `/about`.
- Left column with a visual anchor: an abstract architectural image and a "system_architecture.v2" floating badge.
- Right column with narrative:
    - Heading "Trayectoria y Visión".
    - Three-stage vertical timeline detailing the career evolution.
    - Specialized chips (Seniority, Pragmatismo, etc.).
    - LinkedIn connection CTA button.
- Use `BaseLayout` to ensure header and footer consistency.
- Responsive design and full Dark Mode support.

## Deliverables
- `src/pages/about.astro`
- Modular components in `src/components/about/`:
    - `AboutHero.astro` (Main layout container for the 2 columns)
    - `TrajectoryTimeline.astro` (The 3-stage vertical timeline)
    - `ValueChips.astro` (The chips section)
- OpenSpec requirements and scenarios for the about page.
