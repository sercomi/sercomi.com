# Proposal: Unify Site-Wide Styles

Review and unify the design system across all pages to ensure consistent typography and color palettes. This includes standardizing Tailwind theme variables and removing ad-hoc styling in components.

## Motivation
The current implementation has grown organically through multiple page additions. While fonts have been recently aligned, there are still inconsistencies in color usage, font weights, and spacing patterns that detract from a premium, coherent user experience.

## Scope
- Centralize all brand colors and typography settings in `global.css`.
- Standardize heading levels (h1-h6) and paragraph styles across all pages.
- Ensure consistent accessibility (contrast ratios) in both light and dark modes.
- Audit all components to remove ad-hoc colors/font-weights in favor of theme variables.
- Update OpenSpec specifications to include design system requirements.

## Deliverables
- `src/styles/global.css` (updated theme)
- Refined components across `src/components/`
- New or modified OpenSpec requirements for consistency.
