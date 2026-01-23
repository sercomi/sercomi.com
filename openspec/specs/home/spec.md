# home Specification

## Purpose
TBD - created by archiving change create-home-page. Update Purpose after archive.
## Requirements
### Requirement: Hero Section Visibility
The home page MUST show a hero section that clearly states the core value proposition: software engineering and AI.

#### Scenario: Desktop Hero Display
- **Given** I am on the home page.
- **Then** I should see a heading with "Construyo software sólido. Lo potencio con IA."
- **And** I should see a badge indicating project availability.

### Requirement: Technical Capabilities
The home page MUST list technical capabilities organized by category.

#### Scenario: Service Cards
- **Given** I scroll to the "Capacidades" section.
- **Then** I should see cards for "Ingeniería de Software" and "Automatización e IA Aplicada".
- **And** each card MUST list at least three specific technical sub-capabilities.

### Requirement: Portfolio Cases
The home page MUST showcase real-world use cases with measurable results.

#### Scenario: Use Case Alternating Layout
- **Given** I scroll to "Casos de Uso".
- **Then** I should see at least two use cases with descriptive images and tags.
- **And** the layout MUST alternate between image-left and image-right on desktop.

### Requirement: Methodology Timeline
The home page MUST present a clear three-step methodology.

#### Scenario: Process Visualization
- **Given** I scroll to "Proceso".
- **Then** I should see three steps: "Auditoría & Estrategia", "Ingeniería Sólida", and "Automatización IA".
- **And** they MUST be numbered and accompanied by icons.

