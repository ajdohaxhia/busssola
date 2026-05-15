# Changelog - Busssola 🧭

Tutte le modifiche significative a questo progetto saranno documentate in questo file.

## [2.2.0] - 2026-05-15
### Aggiunto
- **SEO Overhaul Completo**: implementata strategia basata su long-tail keyword e intenti pratici dei cittadini.
- **HowTo Structured Data**: aggiunto markup Schema.org HowTo per tutte le guide procedurali e i Life Hacks.
- **FAQPage Structured Data**: integrato markup FAQPage per le lezioni che includono domande frequenti.
- **Category Landing Pages**: create nuove route statiche `/moduli/categoria/[slug]` per migliorare il posizionamento sui cluster tematici (es. Lavoro, Documenti).
- **SEO Keyword Map**: creato documento interno di mapping intenti/query in `src/data/seo/keywordMap.md`.
- **Validazione SEO**: integrati controlli sulla lunghezza di summary e titoli nello script di validazione.

### Migliorato
- **Metadata API**: centralizzata la gestione dei metadati in `src/lib/seo.ts` con supporto a OpenGraph, Twitter Cards e Canonical dinamici.
- **Sitemap**: aggiornata per includere tips, categorie e tutte le lezioni pubblicate con priorità differenziate.
- **Internal Linking**: potenziati i collegamenti tra guide, glossario e checklist correlate.
- **Documentazione**: aggiornati README.md e CONTRIBUTING.md con le nuove linee guida SEO.

## [2.1.0] - 2026-05-14
### Aggiunto
- **Nuova Sezione "Life Hacks Civici"**: oltre 85 consigli pratici e scorciatoie legali per burocrazia, privacy e sicurezza.
- **Route /tips**: catalogo completo dei tips con filtri per categoria e beneficio.
- **Dettaglio Tips**: pagine dedicate per ogni life hack con passi procedurali e link ufficiali.
- **Nuovi Kit Checklist**: aggiunti kit per documenti personali, sicurezza account e emergenza telefono rubato.
- **Voci Glossario**: aggiunti termini tecnici legati alla sicurezza e alla burocrazia (alias email, watermark, IMEI, etc.).
- **Registry Fonti**: integrato il registro centrale delle fonti ufficiali per tutti i nuovi contenuti.

### Migliorato
- **Homepage**: aggiunta sezione dedicata ai Life Hacks con card in evidenza.
- **Navbar**: aggiunta voce "Tips" per un accesso rapido.
- **Documentazione**: aggiornato README.md e CONTRIBUTING.md con le nuove sezioni.
- **SEO**: implementati metadati e JSON-LD per la nuova sezione tips.

## [2.0.0] - 2026-05-14
...
