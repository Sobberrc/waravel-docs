# WaravelBuilder Developer Guide

## Architecture
WaravelBuilder uses a client-side JavaScript engine (often based on GrapeJS or a custom Vue/React implementation) to handle the UI. On the server side, it stores HTML/CSS output and structured JSON data.

### Models
- BuilderTemplate: Stores reusable templates (contains JSON structure, compiled HTML, CSS).

### Services
- Sanitizer: Ensures the generated HTML is clean and secure before saving to the database. Helps prevent XSS attacks.

### Controllers
- BuilderController: Handles the saving, loading, and previewing of builder pages.
- BuilderTemplateController: Manages custom template CRUD operations.

### Integrating Custom Blocks
Developers can add custom blocks by defining new views in esources/views/scripts/blocks/. These are typically Blade templates that output the necessary structure and configuration for the builder engine. Supported block categories include:
- dvanced (accordion, slider, map)
- asic (button, div, link)
- orms (input, checkbox)
- layout (columns, sections)
- 	ypography (headings, paragraphs)

### Database Output
Pages created with WaravelBuilder save their content as clean HTML in the standard pages table, alongside a separate metadata field for the builder's specific JSON structure.
