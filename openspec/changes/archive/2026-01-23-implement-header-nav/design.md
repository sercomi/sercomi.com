# Design: Header and Navigation

## Architecture
The header will be a top-level layout component implemented in Astro. It will use Tailwind CSS 4 for styling, leveraging modern features like container queries or standard media queries for responsiveness.

## Components
1. **Header**: Main container, handles sticky positioning (`sticky top-0`) and backdrop blur (`backdrop-blur-md`).
2. **Identity Block**: Combined section on the left containing:
   - **Logo**: A blue square icon matching the design.
   - **Name/Title**: "Sergi Comas" and "SENIOR SOFTWARE ENGINEER" as shown in the design.
3. **NavMenu**: A list of navigation items. On desktop, displayed as a horizontal row. On mobile, hidden behind a hamburger menu or transformed into a slide-over.
4. **CTA Button**: A stylized button for "Hablemos".

## Design Decisions
- **Sticky Header**: Enhances UX by keeping navigation accessible.
- **Backdrop Blur**: Provides a premium feel over various page content.
- **Language**: Nav items will be in Spanish ("Capacidades", "Casos de Uso", "Procesos") to match project context.
