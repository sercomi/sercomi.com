# skills Specification

## MODIFIED Purpose
- **From**: TBD - created by archiving change create-skills-page. Update Purpose after archive.
- **To**: Details the technical surface area and specialized technology stack, highlighting the "Spec-driven + AI" methodology.

## MODIFIED Requirements

### Requirement: Skills Page Accessibility
The site MUST have a dedicated page at `/skills` that details technical skills. All styling MUST use theme variables from the global design system.

#### Scenario: Navigate to Skills Page
- **Given** I navigate to `/skills`
- **Then** I should see the "Especialización y Stack Tecnológico" title
- **And** the page MUST use the standard `BaseLayout`
- **And** all typography uses semantic theme variables (`font-display`, `font-body`)

### Requirement: Engineering Specialization
The skills page MUST detail engineering core competencies. All styling MUST use theme variables from the global design system.

#### Scenario: Engineering List
- **Given** I am on the skills page
- **Then** I should see a section for "Ingeniería"
- **And** it MUST include at least 4 key areas: Design, Distributed Architectures, APIs, and Clean Code
- **And** all styling uses semantic theme variables

### Requirement: AI Specialization
The skills page MUST detail AI and automation competencies. All styling MUST use theme variables from the global design system.

#### Scenario: AI Differentiation
- **Given** I am on the skills page
- **Then** I should see a section for "IA y Automatización"
- **And** it MUST highlight "Spec-driven Development + IA" as a differentiator
- **And** all styling uses semantic theme variables

### Requirement: CTA Section
The skills page MUST conclude with a clear call to action. All styling MUST use theme variables from the global design system.

#### Scenario: Bottom CTA
- **Given** I scroll to the bottom of the skills page
- **Then** I should see a CTA card asking if I have a technical challenge
- **And** it MUST have a button to schedule a call
- **And** all styling uses semantic theme variables

## ADDED Requirements
### Requirement: Design System Consistency
The skills page MUST use only theme variables from the global design system and avoid hardcoded colors or font weights.

#### Scenario: Theme Variable Usage
- **Given** any skills page component
- **Then** all colors use semantic theme variables (`brand-primary`, `brand-dark`, etc.)
- **Then** all typography uses semantic font variables (`font-display`, `font-body`, etc.)
- **Then** no hardcoded hex codes or arbitrary font weights exist in components

#### Scenario: Typography Hierarchy
- **Given** the skills page content
- **Then** h1 elements use the defined h1 theme variables (7xl/5xl, font-bold/extrabold)
- **Then** h2 elements use the defined h2 theme variables (4xl/3xl, font-bold)
- **Then** body text uses the defined body theme variables (lg/xl or base, font-normal)

#### Scenario: Dark Mode Consistency
- **Given** dark mode is enabled
- **Then** the skills page uses the defined dark theme variables
- **And** all text maintains proper contrast ratios
- **And** interactive elements have clear dark mode states
