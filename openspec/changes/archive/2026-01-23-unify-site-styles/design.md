# Design: Global Design System Unification

## Architecture
The design system will be anchored in Tailwind 4's `@theme` block in `src/styles/global.css`. Components MUST only use theme variables (e.g., `text-brand-primary`, `font-display`) and avoid hardcoded hex codes or arbitrary weight classes unless specifically justified.

## Typography System
We use a hybrid pairing strategy to match the professional/AI domain:
- **Display/Headings**: `Manrope` for high-impact pages (Contact, About) and `Space Grotesk` for technical data (Skills).
- **Body**: `Noto Sans` for readability in descriptions and long-form text.
- **Base UI**: `Inter` for navigation and standard UI elements.

### Standardized Classes
We will define utility classes or semantic components for:
- `h1`: Primary impact (7xl/5xl, font-bold or font-extrabold)
- `h2`: Section headings (4xl/3xl, font-bold)
- `body-lg`: Large descriptions (lg/xl, font-normal)
- `body-md`: Standard text (base, font-normal)

## Color Palette
Current brand colors:
- `brand-primary`: `#176782` (Cyan-heavy teal)
- `brand-dark`: `#0c141d` (Rich charcoal)
- `brand-dark-alt`: `#162431`
- `accent-cyan`: `#06b6d4`
- `accent-indigo`: `#6366f1`

The unification will ensure these are used consistently for semantic purposes (primary actions, information hierarchies, success/warning states).

## Dark Mode
The unification will formalize the dark mode mapping to ensure that every light-mode color has a deliberate and high-contrast dark-mode counterpart, especially for text and border elements.
