## MODIFIED Requirements
### Requirement: Identity Branding (Design Sample)
The header MUST strictly follow the design branding: a blue square logo icon, followed by the name "Sergi Comas" and the title "SENIOR SOFTWARE ENGINEER". All styling MUST use theme variables from the global design system.

#### Scenario: Design-Led Identity
- Given any viewport
- Then the blue logo icon is visible on the left
- Then "Sergi Comas" is displayed in bold text next to or below the logo (matching design layout)
- Then "SENIOR SOFTWARE ENGINEER" is displayed in uppercase, smaller font
- And all colors and fonts use theme variables (e.g., `text-brand-primary`, `font-display`)

## ADDED Requirements
### Requirement: Design System Consistency
The header MUST use only theme variables from the global design system and avoid hardcoded colors or font weights.

#### Scenario: Theme Variable Usage
- Given the header component
- Then all colors use semantic theme variables (`brand-primary`, `brand-dark`, etc.)
- Then all typography uses semantic font variables (`font-display`, `font-body`, etc.)
- Then no hardcoded hex codes or arbitrary font weights exist in the component

#### Scenario: Dark Mode Consistency
- Given dark mode is enabled
- Then the header uses the defined dark theme variables
- And all text maintains proper contrast ratios
- And interactive elements have clear dark mode states