# Changelog

## [Novità 11 novembre e Calcolatore Tredicesima] - 2026-11-11
### Added
- **Calcolatore Tredicesima Netta e Gratifica Natalizia `/tool/calcolo-tredicesima/`**: simulatore trasparente con calcolo ratei mensili maturati, contributi IVS 9,19%, ritenute IRPEF con aliquota marginale (spiegando perché sulla tredicesima non si applicano le detrazioni per lavoro dipendente), integrazione con il Bonus Natale fino a 100€ (D.L. 113 e 167/2024), scadenze per settore e FAQ Schema.org.
- **Novità verificate 11 novembre 2026**:
  - *Allarme bomba scuole 11 novembre 2026*: chiarimenti ufficiali del Ministro dell'Istruzione Giuseppe Valditara, bonifiche con esito negativo delle Forze dell'Ordine, indagini della Polizia Postale per procurato allarme e protocollo di sicurezza per famiglie e istituti.
  - *Perequazione pensioni dal 1° gennaio 2027*: nota di chiarimento dell'INPS che smentisce lo slittamento a marzo 2027 per i trattamenti sopra 4 volte il minimo e conferma la decorrenza degli aumenti fin dal primo cedolino dell'anno.
  - *INPS Messaggio n. 3649/2026*: avvio della liquidazione di conguagli ed arretrati di fine anno per percettori di NASpI, Cassa Integrazione e disoccupazione agricola entro 20.000€ di reddito.
- **Fonti ufficiali aggiunte**: inseriti in `OFFICIAL_SOURCES` e nell'albo editoriale di verità i riferimenti di MIM, Polizia Postale, Ministero dell'Interno e INPS.

### Changed
- **Directory strumenti `/tool/`**: aggiunto il nuovo strumento dedicato al calcolo della tredicesima netta con badge "Nuovo · Scadenze Dicembre".
- **Mappa del sito e indice di ricerca**: integrato il nuovo strumento in `search-index.json`, nella mappa del sito `/mappa-del-sito/` e nel feed RSS `/feed.xml`.
- **Data di revisione generale**: aggiornata all'11 novembre 2026 in tutte le sezioni e statistiche del sito.

## [Ricerca full-site, mappa e feed] - 2026-11-08
### Added
- **Ricerca full-site `/cerca/`**: indice statico di 629 elementi generato a build time (`scripts/build-site-artifacts.ts`), filtri per tipo di contenuto, navigazione da tastiera e conteggio accessibile dei risultati. La pagina è `noindex, follow` e non invia query a server.
- **Mappa del sito `/mappa-del-sito/`**: indice HTML completo di aree tematiche, procedure, trucchi, modelli, novità e percorsi (670 URL interni).
- **Feed RSS `/feed.xml`**: 50 novità più recenti, collegato in `<head>` e nella pagina `/novita/`.
- **Test unitari della ricerca** (`npm test`): 7 casi su normalizzazione, stopword, filtri e pertinenza.
- **Documentazione SEO**: `docs/seo/ricerca-domanda-2026-11.md` con metodo, copertura dei gruppi A–J e gap prioritari.

### Changed
- **SearchAction Schema.org** aggiornata a `/cerca/?q={search_term_string}`: prima puntava a una pagina senza ricerca.
- **Header, footer e homepage** collegano ricerca e mappa del sito.
- **`noindex`** ora imposta `follow: true`, così i link interni restano esplorabili.

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
