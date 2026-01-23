# Proposal: Create Contact Page Implementation

Implement a new "Contacto" (Contact) page for sercomi.com using Astro components, following the design and content from `sample/contact.html`. This page will include a contact form and a summary of exclusive services.

## Motivation
To provide a dedicated and professional channel for potential clients to reach out, enquire about services, and request a diagnostic initial.

## Scope
- New page at `/contact`.
- Page heading with impact text and description.
- Two-column layout:
    - Left column: List of exclusive services (technical consultancy, tailored development, AI audit, CTO strategy) and a limited availability info box.
    - Right column: A professional contact form with fields for name, email, company, and message.
- Use `BaseLayout` to maintain Header and Footer consistency.
- Responsive design and full Dark Mode support.
- Form validation (HTML5) and clear CTA for submission.

## Deliverables
- `src/pages/contact.astro`
- Modular components in `src/components/contact/`:
    - `ContactHero.astro`
    - `ContactServices.astro`
    - `AvailabilityInfo.astro`
    - `ContactForm.astro`
- OpenSpec requirements and scenarios for the contact page.
