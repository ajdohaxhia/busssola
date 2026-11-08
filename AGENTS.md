# AGENTS.md — Regole Architetturali, Editoriali e SEO per Busssola.com

## 1. Identità e Brand
- **Brand Name**: `Busssola` (scritto rigorosamente con tre "s").
- **Termine comune**: `bussola` (con una sola "s"). Va utilizzato nei testi in modo fluido, naturale e contestualizzato (es. "la tua bussola per scegliere", "una bussola digitale nelle decisioni complesse"), senza forzature, senza doorway pages e senza keyword stuffing.
- **Concept**: Piattaforma digitale indipendente per orientarsi tra scelte, informazioni, strumenti, risorse e opportunità (AI, benessere, finanza personale, lavoro, orientamento studenti, sicurezza, energia, viaggi, confronti e guide civiche).
- **Mission**: Ridurre l'ansia informativa e il carico cognitivo dell'utente fornendo percorsi chiari, pro/contro, passi pratici e fonti verificate.
- **Posizionamento**: Indipendente, autorevole, trasparente, no hype, no clickbait, no paywall, no profilazione invasiva.

## 2. Standard URL e Architettura delle Pagine
- **Pattern URL**:
  - Hub tematici: `/{categoria}/` (es. `/intelligenza-artificiale/`, `/benessere-psicologia/`, `/soldi-finanza-personale/`)
  - Pillar page: `/{categoria}/guida/` o `/{categoria}/{slug-pilastro}/`
  - Articoli cluster: `/{categoria}/{slug-argomento}/`
  - Tool e confronti: `/confronti/`, `/confronti/{slug}/`, `/tool/{slug}/`
  - Trust e trasparenza: `/chi-siamo/`, `/metodo-editoriale/`, `/fonti-e-verifica/`, `/disclaimer/`
- **Regole URL**:
  - Solo lettere minuscole, numeri e trattini (`-`).
  - Trailing slash coerente (`withTrailingSlash`).
  - **Divieto di duplicazione annuale**: mai creare URL separati per anno (es. `isee-2026`, `isee-2027`, `isee-2028`). L'URL resta permanente (`/modelli/isee-dsu-mini/` o `/guide/isee/`), mentre il contenuto, il title e i dati vengono aggiornati tempestivamente mantenendo il link equity e la cronologia revisioni.
  - **Divieto di pagine per singola città**: evitare pagine doorway localizzate duplicate.

## 3. Standard Editoriale ed E-E-A-T
- **Struttura della pagina**:
  1. Risposta rapida nei primi 150 caratteri (cosa serve, quanto costa, quanto tempo ci vuole).
  2. Tabella di confronto o passi operativi numerati.
  3. Sezione "Cosa succede se..." (rischi, errori comuni, conseguenze di mancati adempimenti o scelte errate).
  4. Sezione FAQ con domande reali e markup Schema.org `FAQPage`.
  5. Box autore, revisore editoriale e data di ultima revisione (`dateModified`).
  6. Box fonti con collegamenti a documentazione primaria (leggi, enti ufficiali, paper scientifici, repository open-source).
- **Disclaimer obbligatori**:
  - *Salute e psicologia*: "Contenuto puramente divulgativo e informativo. Non costituisce diagnosi medica né percorso psicoterapeutico. In caso di sofferenza psicologica acuta o emergenze, contatta il 112, il Telefono Amico (02 2327 2327) o il numero verde nazionale 199 284 284."
  - *Finanza personale*: "I contenuti di Busssola sono formulati a scopo educativo e informativo e non costituiscono in alcun modo consulenza finanziaria personalizzata ai sensi del TUF. Prima di compiere scelte d'investimento, valuta il tuo profilo di rischio o consulta un consulente autonomo iscritto all'albo OCF."
  - *Legale e burocratico*: "Busssola è una guida civica indipendente e non sostituisce gli sportelli ufficiali della Pubblica Amministrazione o l'assistenza legale professionale."

## 4. Standard Tecnici e Accessibilità
- **Framework**: Next.js (App Router), TypeScript, Tailwind CSS.
- **Accessibilità**: Conforme a **WCAG 2.2 Livello AA**.
  - Navigazione integrale da tastiera con focus ring visibile ad alto contrasto.
  - Contrasto cromatico minimo 4.5:1 per testo normale, 3:1 per testo grande e componenti UI.
  - Supporto nativo a `prefers-reduced-motion` e `prefers-color-scheme`.
  - Dark mode e Light mode con persistenza delle preferenze utente.
- **Dati strutturati**:
  - `WebSite`, `Organization`, `Article`, `HowTo`, `FAQPage`, `BreadcrumbList`, `DefinedTerm`, `SoftwareApplication`.
- **Comandi di verifica del repository**:
  - Validazione contenuti: `npm run validate:content`
  - Typecheck: `npm run typecheck`
  - Linting: `npm run lint`
  - Build: `npm run build`
  - Verifica SEO: `npm run validate:seo`
