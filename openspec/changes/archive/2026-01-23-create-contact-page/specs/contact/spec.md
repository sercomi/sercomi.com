# Capability: Contact Page

Define the requirements for the contact page and lead generation form.

## ADDED Requirements

### Requirement: Contact Page Accessibility
The site MUST have a dedicated contact page at `/contact`.

#### Scenario: Navigate to Contact Page
- **Given** I navigate to `/contact`.
- **Then** I should see the "Hablemos de tu próximo sistema" title.
- **And** the page MUST use the site's standard layout.

### Requirement: Contact Form
The contact page MUST provide a functional form to collect inquiries.

#### Scenario: Form Fields
- **Given** I am on the contact page.
- **Then** I should see fields for Name, Corporate Email, Company, and Message.
- **And** there MUST be a button to "Solicitar diagnóstico inicial".

### Requirement: Services Context
The contact page MUST show a summary of services to contextualize the request.

#### Scenario: Services List
- **Given** I am on the contact page.
- **Then** I should see a list including Technical Consultancy, Tailored Development, AI Audit, and CTO Strategy.

### Requirement: Availability Notice
The contact page MUST communicate current availability.

#### Scenario: Availability Box
- **Given** I am on the contact page.
- **Then** I should see a notice about "Disponibilidad Limitada".
