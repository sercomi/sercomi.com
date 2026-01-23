# about Specification

## Purpose
TBD - created by archiving change create-about-page. Update Purpose after archive.
## Requirements
### Requirement: About Page Accessibility
The site MUST have a dedicated page at `/about` that details the professional background.

#### Scenario: Navigate to About Page
- **Given** I navigate to `/about`.
- **Then** I should see the "Trayectoria y Visión" title.
- **And** the page MUST use the standard `BaseLayout`.

### Requirement: Career Timeline
The about page MUST include a visual timeline of career stages.

#### Scenario: Timeline Stages
- **Given** I am on the about page.
- **Then** I should see a timeline with at least 3 stages: "La Base", "La Evolución", and "La Visión Actual".

### Requirement: Visual Brand Anchor
The about page MUST include a visual representation of the professional vision.

#### Scenario: Architectural Image
- **Given** I am on the about page.
- **Then** I should see an architectural image on the left (desktop).
- **And** it MUST contain a floating badge representing a system version.

### Requirement: LinkedIn CTA
The about page MUST provide a way to connect professionally.

#### Scenario: LinkedIn Button
- **Given** I am on the about page.
- **Then** I should see a button with the text "Conectar en LinkedIn".

