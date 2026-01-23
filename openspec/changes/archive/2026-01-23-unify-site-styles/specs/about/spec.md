# about Specification

## MODIFIED Purpose
- **From**: TBD - created by archiving change create-about-page. Update Purpose after archive.
- **To**: Formally defines the professional background and narrative of Sergi Comas, bridging technical depth with a clear vision for AI-driven engineering.

## MODIFIED Requirements

### Requirement: About Page Accessibility
The site MUST have a dedicated page at `/about` that details the professional background. All styling MUST use theme variables from the global design system.

#### Scenario: Navigate to About Page
- **Given** I navigate to `/about`
- **Then** I should see the "Trayectoria y Visión" title
- **And** the page MUST use the standard `BaseLayout`
- **And** all typography uses semantic theme variables (`font-display`, `font-body`)

### Requirement: Career Timeline
The about page MUST include a visual timeline of career stages. All styling MUST use theme variables from the global design system.

#### Scenario: Timeline Stages
- **Given** I am on the about page
- **Then** I should see a timeline with at least 3 stages: "La Base", "La Evolución", and "La Visión Actual"
- **And** all styling uses semantic theme variables

### Requirement: Visual Brand Anchor
The about page MUST include a visual representation of the professional vision. All styling MUST use theme variables from the global design system.

#### Scenario: Architectural Image
- **Given** I am on the about page
- **Then** I should see an architectural image on the left (desktop)
- **And** it MUST contain a floating badge representing a system version
- **And** all styling uses semantic theme variables

### Requirement: LinkedIn CTA
The about page MUST provide a way to connect professionally. All styling MUST use theme variables from the global design system.

#### Scenario: LinkedIn Button
- **Given** I am on the about page
- **Then** I should see a button with the text "Conectar en LinkedIn"
- **And** all styling uses semantic theme variables

## ADDED Requirements
### Requirement: Design System Consistency
The about page MUST use only theme variables from the global design system and avoid hardcoded colors or font weights.

#### Scenario: Theme Variable Usage
- **Given** any about page component
- **Then** all colors use semantic theme variables (`brand-primary`, `brand-dark`, etc.)
- **Then** all typography uses semantic font variables (`font-display`, `font-body`, etc.)
- **Then** no hardcoded hex codes or arbitrary font weights exist in components

#### Scenario: Typography Hierarchy
- **Given** the about page content
- **Then** h1 elements use the defined h1 theme variables (7xl/5xl, font-bold/extrabold)
- **Then** h2 elements use the defined h2 theme variables (4xl/3xl, font-bold)
- **Then** body text uses the defined body theme variables (lg/xl or base, font-normal)

#### Scenario: Dark Mode Consistency
- **Given** dark mode is enabled
- **Then** the about page uses the defined dark theme variables
- **And** all text maintains proper contrast ratios
- **And** interactive elements have clear dark mode states
