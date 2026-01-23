# Design: Contact Page Implementation

## Architecture
The contact page will reside at `/contact` and utilize `BaseLayout`. The structure will be divided into modular components for easier maintenance and testing.

## Components
1. **ContactHero**:
   - Visual: Impactful heading "Hablemos de tu próximo sistema" and subtitle.
   - Purpose: Set the tone for the conversion.

2. **ContactServices (Left Column)**:
   - Visual: Vertically stacked list of service items with icons and descriptions.
   - Items: Technical consultancy, Custom development, AI Audit, CTO Strategy.
   - Purpose: Reiterate the value proposition before the user fills the form.

3. **AvailabilityInfo (Part of Left Column)**:
   - Visual: Distinctive box with "workspace_premium" icon and "bronze" accent color.
   - Purpose: Create scarcity and set expectations for project start dates.

4. **ContactForm (Right Column)**:
   - Visual: Clean form with input groups for Name, Email, Company, and Message.
   - Interaction: Validation on submit, hover/focus states for inputs.
   - Purpose: Primary conversion element for the page.

## Adaptations
- **Dark Mode**: Use the site's dark mode color scheme (slate background, lighter text, primary accents).
- **Header/Footer**: Reuse existing `Header` and `Footer` components without modification.
- **Typography**: Match the established project fonts.

## Technical Details
- **Path**: `/contact`.
- **Form Handling**: Simple HTML5 form validation for now.
- **Icons**: `Material Symbols Outlined`.
