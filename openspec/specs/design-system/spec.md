# design-system Specification

## Purpose
TBD - created by archiving change unify-site-styles. Update Purpose after archive.
## Requirements
### Requirement: Centralized Theme Definition
The site MUST define all brand colors, typography, and spacing patterns in a centralized CSS theme (Tailwind `@theme`).

#### Scenario: Verify Theme Variables
- **Given** I inspect `src/styles/global.css`.
- **Then** I should see definitions for `--font-sans`, `--font-display`, `--font-heading`, and `--font-body`.
- **And** I should see semantic color definitions for brand primary, brand dark, and brand accents.

### Requirement: Consistent Typography Pairings
Every page MUST strictly follow the designated typography pairings for each intent (impact, technical, body).

#### Scenario: Heading Style Consistency
- **Given** I am on any page with an `h2` section heading.
- **Then** the font MUST match the established pairing for that page context (e.g., Manrope for About/Contact, Space Grotesk for Skills).
- **And** headings MUST have consistent weight and tracking.

### Requirement: Unified Dark Mode
The site MUST apply a consistent dark mode transformation across all UI elements.

#### Scenario: Dark Mode Contrast
- **Given** I switch to dark mode on any page.
- **Then** text contrast MUST remain accessibility-compliant (WCAG AA).
- **And** background colors MUST use the defined `brand-dark` palette.

