# Design: About Page Implementation

## Architecture
The "About" page will be implemented as a new page `/about` using the `BaseLayout`. To maintain modularity, the main layout of the page and its specialized sections will be broken into components under `src/components/about/`.

## Components
1. **AboutHero (Layout Container)**:
   - Manages the grid/flex layout (2 columns on desktop, 1 on mobile).
   - Houses the visual anchor (left) and the narrative content (right).
   - Desktop layout: Visual on left (column span 5), Narrative on right (column span 7).
   - Mobile: Narrative first, Visual second.

2. **VisualAnchor (Part of AboutHero)**:
   - Rounded architectural image with a mix-blend-multiply overlay.
   - Floating glassmorphic badge with a terminal icon and a progress bar representing "system_architecture.v2".

3. **TrajectoryTimeline**:
   - A vertical line with a 3-stage progression.
   - Stage 1: "La Base (10+ años)".
   - Stage 2: "La Evolución".
   - Stage 3: "La Visión Actual" (Active/Highlighted state).
   - Consistent typography using Inter/Noto Sans.

4. **ValueChips**:
   - A row of descriptive tags with icons: Seniority, Pragmatismo, Orientación a Negocio.
   - Hover effects for interactivity.

## Adaptations
- **Dark Mode**: Implement `dark:` specific classes for background (`#17191c`), text, borders, and timeline elements.
- **Header/Footer**: Reuse the existing `Header` and `Footer` components.
- **Navigation**: The "Sobre mí" link in the header should point to `/about`.

## Technical Details
- **Path**: `/about`.
- **Assets**: The architectural image will use the URL provided in the sample or a similar high-quality placeholder.
- **Icons**: Use `Material Symbols Outlined`.
