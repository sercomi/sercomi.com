# Design: Skills Page Implementation

## Architecture
The skills page will follow the modular pattern established in the home page implementation. Components will reside in `src/components/skills/` to maintain a clean structure.

## Components
1. **SkillsHero**:
   - Visual: Simple heading with a decorative line and descriptive copy.
   - Content: "Especialización y Stack Tecnológico" + context paragraph.
2. **EngineeringSkills**:
   - Visual: Column layout with a list of cards.
   - Cards: "Diseño de Sistemas", "Arquitecturas Distribuidas", "Integración de APIs", "Clean Code & QA".
   - Features: Hover effects and Material Symbols icons.
3. **AISkills**:
   - Visual: Similar to Engineering but with a highlighted "Diferenciador" card for Spec-driven Development.
   - Cards: "Spec-driven Development + IA", "LLMs & Prompt Engineering", "Automatización de Procesos", "Agentes Inteligentes".
   - Features: Glow effect for the differentiator card.
4. **SkillsCTA**:
   - Visual: Dark card with radial gradients and blur effects.
   - Content: "¿Tienes un reto técnico?" + "Agendar Llamada" button.

## Adaptations
- **Dark Mode**: Implement dark mode equivalents for all sections, ensuring text contrast and subtle card borders.
- **Header/Footer**: Reuse existing `Header` and `Footer` components without modification as requested.
- **Typography**: Match the project's fonts (Inter/Noto Sans) vs. specific ones in the sample if they differ significantly from the design system.

## Technical Details
- **Path**: The page will be accessible via `/skills`.
- **Icons**: Use existing `Material Symbols Outlined` font.
- **Layout**: Use `BaseLayout`.
