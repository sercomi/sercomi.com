# Design: Home Page Implementation

## Architecture
The home page will be composed of several modular Astro components located in `src/components/home/`. This organization keeps the home-specific logic separated from generic UI components.

## Components
1. **Hero**: 
   - Visual: Grid background with radial mask, animated "available" badge.
   - Content: Large display heading, descriptive paragraph, and two CTA buttons.
   - Technologies: Tailwind CSS 4, standard CSS for grid-bg.
2. **Capabilities**:
   - Visual: Two-column grid with cards. Cards have hover effects, icons, and list items.
   - Content: "Ingeniería de Software" and "Automatización e IA Aplicada".
3. **UseCases**:
   - Visual: Alternating horizontal layout (image vs. text).
   - Content: "Procesamiento Inteligente de Documentos" and "Orquestador de Inventario Predictivo".
   - Data: Can be passed as props or defined in a local array for easy updates.
4. **Process**:
   - Visual: Three-step horizontal timeline on desktop, vertical on mobile.
   - Content: "Auditoría & Estrategia", "Ingeniería Sólida", "Automatización IA".

## Adaptations from `sample/code.html`
- **Dark Mode**: The sample is light mode. I will implement dark mode equivalents for all sections using Tailwind's `dark:` variant and the project's custom dark mode colors (`background-dark`).
- **Reuse**: Use the existing `Button.astro` for CTAs.
- **Paths**: Ensure all local links match the defined sections (`#capacidades`, `#casos-de-uso`, `#procesos`). Note that `Header.astro` uses `#casos-de-uso` and `#procesos`, while `sample/code.html` uses `#casos` and `#proceso`. I will synchronize them.

## Technical Details
- **Images**: Use placeholder images or `generate_image` assets as needed. The sample uses external URLs which should be replaced with local assets or high-quality placeholders.
- **Animations**: Include the pulse animation for the status badge and hover transitions for cards.
