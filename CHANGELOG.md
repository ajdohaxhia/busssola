# Changelog

## [Major Upgrade v2] - 2026-05-16
### Added
- **Massive Content Expansion**: Added/expanded over 14 civic modules with hundreds of new guides.
- **New Modules**:
  - Bonus, ISEE e Agevolazioni (ISEE Universitario, DSU Precompilata, Assegno Unico).
  - Fisco per cittadini (730, CU, Cassetto Fiscale).
  - Casa e Residenza (Contratti, Volture, Cedolare Secca).
  - Lavoro e INPS (NASpI, Dimissioni, Busta Paga).
  - Sanità Territoriale (FSE, Scelta Medico, CUP).
  - Immigrazione e Soggiorno (Permesso di Soggiorno, Cittadinanza).
  - Consumatori (Garanzia legale, Reclami).
  - Mobilità (Patente, Bollo, RCA).
  - Anziani e Caregiver (Invalidità, Deleghe INPS).
  - Scuola e Università (Iscrizioni, Borse di studio).
  - Digital Safety (2FA, Passkeys, Recovery account).
  - Poste e Pagamenti (pagoPA, App IO, PEC).
- **SOS Triage Center**: New operational emergency cards with "First 10 minutes" protocols, printable checklists, and copyable emergency messages.
- **Hub Scuole Upgrade**: Expanded to 10 lesson plans for teachers, including AI, Deepfake, and Fact-checking.
- **Glossary Expansion**: Added 30+ civic and technical terms (DSU, ADI, SFL, etc.).
- **New Validation Scripts**: `validate:seo`, `validate:rendered-pages`.

### Changed
- **Homepage Upgrade**: New search-focused layout with popular areas, urgent procedures, and clear audience segmentation.
- **SEO Optimization**: Unique metadata and structured data (JSON-LD) for every single page.
- **Accessibility**: Fixed FAQ accordion to ensure all content is in static HTML for SEO/Screen Readers.
- **Site Stats**: All counts are now dynamically derived from the real data source (no more hardcoded numbers).

### Fixed
- **Navigation Bugs**: Fixed "X of Y" count drift in lesson pages; navigation now correctly skips drafts.
- **Layout Consistency**: Unified Header, Footer, and PageHeader across all informational pages.
- **Validation**: Strict source quality gate (every guide must have an official source).
- **SEO**: Removed duplicate H1s in catalog and search pages.

## [Public Release Finalization] - 2026-05-15
- Initial structure for SOS and FAQ.
- Basic module catalog.
- Domain note added.
