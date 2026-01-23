# contact Specification

## MODIFIED Purpose
- **From**: TBD - created by archiving change create-contact-page. Update Purpose after archive.
- **To**: Provides a professional channel for B2B engagement, emphasizing high-fidelity communication and strategic alignment.

## MODIFIED Requirements

### Requirement: Contact Page Accessibility
The site MUST have a dedicated contact page at `/contact`. All styling MUST use theme variables from the global design system.

#### Scenario: Navigate to Contact Page
- **Given** I navigate to `/contact`
- **Then** I should see the "Hablemos de tu próximo sistema" title
- **And** the page MUST use the site's standard layout
- **And** all typography uses semantic theme variables (`font-display`, `font-body`)

### Requirement: Contact Form
The contact page MUST provide a functional form to collect inquiries. All styling MUST use theme variables from the global design system.

#### Scenario: Form Fields
- **Given** I am on the contact page
- **Then** I should see fields for Name, Corporate Email, Company, and Message
- **And** there MUST be a button to "Solicitar diagnóstico inicial"
- **And** all form styling uses semantic theme variables

### Requirement: Services Context
The contact page MUST show a summary of services to contextualize the request. All styling MUST use theme variables from the global design system.

#### Scenario: Services List
- **Given** I am on the contact page
- **Then** I should see a list including Technical Consultancy, Tailored Development, AI Audit, and CTO Strategy
- **And** all styling uses semantic theme variables

### Requirement: Availability Notice
The contact page MUST communicate current availability. All styling MUST use theme variables from the global design system.

#### Scenario: Availability Box
- **Given** I am on the contact page
- **Then** I should see a notice about "Disponibilidad Limitada"
- **And** all styling uses semantic theme variables

## ADDED Requirements
### Requirement: Design System Consistency
The contact page MUST use only theme variables from the global design system and avoid hardcoded colors or font weights.

#### Scenario: Theme Variable Usage
- **Given** any contact page component
- **Then** all colors use semantic theme variables (`brand-primary`, `brand-dark`, etc.)
- **Then** all typography uses semantic font variables (`font-display`, `font-body`, etc.)
- **Then** no hardcoded hex codes or arbitrary font weights exist in components

#### Scenario: Typography Hierarchy
- **Given** the contact page content
- **Then** h1 elements use the defined h1 theme variables (7xl/5xl, font-bold/extrabold)
- **Then** h2 elements use the defined h2 theme variables (4xl/3xl, font-bold)
- **Then** body text uses the defined body theme variables (lg/xl or base, font-normal)

#### Scenario: Dark Mode Consistency
- **Given** dark mode is enabled
- **Then** the contact page uses the defined dark theme variables
- **And** all text maintains proper contrast ratios
- **And** interactive elements have clear dark mode states
