# skills Specification

## Purpose
TBD - created by archiving change create-skills-page. Update Purpose after archive.
## Requirements
### Requirement: Skills Page Accessibility
The site MUST have a dedicated page at `/skills` that details technical skills.

#### Scenario: Navigate to Skills Page
- **Given** I navigate to `/skills`.
- **Then** I should see the "Especialización y Stack Tecnológico" title.
- **And** the page MUST use the standard `BaseLayout`.

### Requirement: Engineering Specialization
The skills page MUST detail engineering core competencies.

#### Scenario: Engineering List
- **Given** I am on the skills page.
- **Then** I should see a section for "Ingeniería".
- **And** it MUST include at least 4 key areas: Design, Distributed Architectures, APIs, and Clean Code.

### Requirement: AI Specialization
The skills page MUST detail AI and automation competencies.

#### Scenario: AI Differentiation
- **Given** I am on the skills page.
- **Then** I should see a section for "IA y Automatización".
- **And** it MUST highlight "Spec-driven Development + IA" as a differentiator.

### Requirement: CTA Section
The skills page MUST conclude with a clear call to action.

#### Scenario: Bottom CTA
- **Given** I scroll to the bottom of the skills page.
- **Then** I should see a CTA card asking if I have a technical challenge.
- **And** it MUST have a button to schedule a call.

