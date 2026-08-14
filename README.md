# Busssola

Busssola è un'iniziativa civica gratuita, open-source e privacy-friendly per orientare cittadini, famiglie, studenti, lavoratori e persone fragili tra diritti, doveri e procedure pubbliche in Italia.

## Scopo
Tradurre la burocrazia in passi verificabili: guide, kit documentali stampabili e novità con fonti ufficiali. **Non siamo un servizio di emergenza.** Se c'è pericolo fisico, chiama il **112**.

## Cosa contiene
- **Guide:** schede passo-passo su SPID, CIE, ISEE, 730, NASpI, casa, sanità, immigrazione.
- **Modelli:** kit di documenti da riunire (non PDF ufficiali) per le pratiche più comuni.
- **Novità:** cambiamenti 2026 citati da INPS, Agenzia delle Entrate, Ministero del Lavoro, ARERA.
- **Centro SOS:** il 112 prima di tutto se c'è pericolo; poi protocolli per stalking, sextortion, truffe, account.
- **Hub Scuole, checklist, glossario.**

## Nota sul dominio
Il dominio `busssola.com` ha tre ‘s’ per disponibilità del nome. Non ha significati simbolici.

## Stack
- Next.js 15 (App Router, static export)
- TypeScript, Tailwind CSS 4
- Cloudflare Pages / Netlify (`out/`)

## Comandi
1. `npm install`
2. `npm run dev`
- `npm run validate:content`
- `npm run update-stats`
- `npm run typecheck`

## Licenza
MIT — vedi `LICENSE`.

---
*Busssola non è un sito ufficiale della Pubblica Amministrazione. Non fornisce consulenza legale, medica, fiscale o psicologica. In caso di pericolo immediato, chiama il 112.*
