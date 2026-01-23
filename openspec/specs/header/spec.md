# header Specification

## Purpose
TBD - created by archiving change implement-header-nav. Update Purpose after archive.
## Requirements
### Requirement: Identity Branding (Design Sample)
The header MUST strictly follow the design branding: a blue square logo icon, followed by the name "Sergi Comas" and the title "SENIOR SOFTWARE ENGINEER".
#### Scenario: Design-Led Identity
- Given any viewport
- Then the blue logo icon is visible on the left
- Then "Sergi Comas" is displayed in bold text next to or below the logo (matching design layout)
- Then "SENIOR SOFTWARE ENGINEER" is displayed in uppercase, smaller font

### Requirement: Sticky Positioning
The header MUST remain fixed at the top of the viewport when scrolling.
#### Scenario: Scrolling down the page
- Given a user is on any page
- When the user scrolls down
- Then the header remains visible at the top of the window

### Requirement: Navigation Links
The header MUST provide links to "Capacidades", "Casos de Uso", and "Procesos".
#### Scenario: Desktop Navigation
- Given a desktop viewport (width > 768px)
- Then the navigation links are displayed horizontally in the center of the header

### Requirement: Call to Action Button
The header MUST include a "Hablemos" button on the right side.
#### Scenario: CTA Visibility
- Given any device
- Then the "Hablemos" button is clearly visible and styled as a primary action

### Requirement: Mobile Layout
The header MUST adapt to smaller screens using a mobile-friendly menu pattern.
#### Scenario: Mobile Menu Toggle
- Given a mobile viewport
- Then navigation links are hidden by default
- When the user clicks the menu toggle
- Then the navigation menu becomes visible

