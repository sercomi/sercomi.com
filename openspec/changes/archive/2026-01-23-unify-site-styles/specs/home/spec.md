# home Specification

## MODIFIED Purpose
- **From**: TBD - created by archiving change create-home-page. Update Purpose after archive.
- **To**: Serves as the primary landing hub, summarizing the value proposition and directing traffic to specialized capabilities and successes.

## MODIFIED Requirements

### Requirement: Hero Section Visibility
The home page MUST show a hero section that clearly states the core value proposition: software engineering and AI. All styling MUST use theme variables from the global design system.

#### Scenario: Desktop Hero Display
- **Given** I am on the home page
- **Then** I should see a heading with "Construyo software sólido. Lo potencio con IA."
- **And** I should see a badge indicating project availability
- **And** all typography uses semantic theme variables (`font-display`, `font-body`)

### Requirement: Technical Capabilities
The home page MUST list technical capabilities organized by category. All styling MUST use theme variables from the global design system.

#### Scenario: Service Cards
- **Given** I scroll to the "Capacidades" section
- **Then** I should see cards for "Ingeniería de Software" and "Automatización e IA Aplicada"
- **And** each card MUST list at least three specific technical sub-capabilities
- **And** all card styling uses semantic theme variables (`brand-primary`, `accent-cyan`, etc.)

### Requirement: Portfolio Cases
The home page MUST showcase real-world use cases with measurable results. All styling MUST use theme variables from the global design system.

#### Scenario: Use Case Alternating Layout
- **Given** I scroll to "Casos de Uso"
- **Then** I should see at least two use cases with descriptive images and tags
- **And** the layout MUST alternate between image-left and image-right on desktop
- **And** all styling uses semantic theme variables

### Requirement: Methodology Timeline
The home page MUST present a clear three-step methodology. All styling MUST use theme variables from the global design system.

#### Scenario: Process Visualization
- **Given** I scroll to "Proceso"
- **Then** I should see three steps: "Auditoría & Estrategia", "Ingeniería Sólida", and "Automatización IA"
- **And** they MUST be numbered and accompanied by icons
- **And** all styling uses semantic theme variables

## ADDED Requirements
### Requirement: Design System Consistency
The home page MUST use only theme variables from the global design system and avoid hardcoded colors or font weights.

#### Scenario: Theme Variable Usage
- **Given** any home page component
- **Then** all colors use semantic theme variables (`brand-primary`, `brand-dark`, etc.)
- **Then** all typography uses semantic font variables (`font-display`, `font-body`, etc.)
- **Then** no hardcoded hex codes or arbitrary font weights exist in components

#### Scenario: Typography Hierarchy
- **Given** the home page content
- **Then** h1 elements use the defined h1 theme variables (7xl/5xl, font-bold/extrabold)
- **Then** h2 elements use the defined h2 theme variables (4xl/3xl, font-bold)
- **Then** body text uses the defined body theme variables (lg/xl or base, font-normal)

#### Scenario: Dark Mode Consistency
- **Given** dark mode is enabled
- **Then** the home page uses the defined dark theme variables
- **And** all text maintains proper contrast ratios
- **And** interactive elements have clear dark mode states
