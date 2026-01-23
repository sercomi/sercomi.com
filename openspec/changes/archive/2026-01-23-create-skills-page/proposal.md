# Proposal: Create Skills Page Implementation

Implement a new "Competencias" (Skills) page for sercomi.com using Astro components, following the design and content from `sample/skills.html`. This page will showcase the technical expertise in both software engineering and AI.

## Motivation
The portfolio needs a dedicated space to detail the technical stack and specializations. This helps potential clients understand the depth of expertise and the unique value proposition (Software Engineering + AI).

## Scope
- New page at `/skills` (link from header).
- Hero section with the title "Especialización y Stack Tecnológico".
- "Base Sólida: Ingeniería" section with skill cards.
- "Capa de IA y Automatización" section with highlighted "Diferenciador" card and other AI skills.
- Call to Action (CTA) card at the bottom.
- Modularity: Sections will be implemented as reusable Astro components.
- Responsive design and Dark Mode support.

## Deliverables
- `src/pages/skills.astro`
- Modular components in `src/components/skills/`:
    - `SkillsHero.astro`
    - `EngineeringSkills.astro`
    - `AISkills.astro`
    - `SkillsCTA.astro`
- OpenSpec requirements and scenarios for the skills page.
