# Busssola

Busssola è un'iniziativa civica gratuita, open-source e privacy-friendly per orientare cittadini, famiglie, studenti, lavoratori e persone fragili tra diritti, doveri e procedure pubbliche in Italia.

## Scopo del Progetto
L'obiettivo di Busssola è semplificare l'accesso ai servizi pubblici e la comprensione dei propri diritti. Non sostituiamo gli enti ufficiali, ma agiamo come un "traduttore" tra il gergo burocratico e le necessità reali delle persone.

## Cosa contiene
Busssola offre oggi una vasta libreria di risorse aggiornate al 2026:
- **Moduli Civici:** Raccolte tematiche su grandi aree della vita pubblica.
- **Guide Pratiche:** Centinaia di schede passo-passo su SPID, CIE, ISEE, NASpI, contratti d'affitto, sanità, immigrazione e altro.
- **Centro SOS:** Protocolli di intervento immediato per emergenze digitali (furti account, ricatti, truffe bancarie).
- **Hub Scuole:** Piani di lezione da 45 minuti e kit pronti per docenti che vogliono insegnare educazione civica digitale.
- **Checklist Operative:** Liste di controllo azionabili per non dimenticare documenti o passaggi critici.
- **Dizionario Civico:** Glossario dei termini tecnici e burocratici spiegati in parole povere.

## Nota sul dominio
Il dominio `busssola.com` contiene tre ‘s’ per un motivo puramente pratico: la versione con grafia standard non era disponibile. La scelta non ha significati simbolici, politici o ideologici; il progetto richiama semplicemente l’idea di una **bussola civica** per orientarsi tra procedure e servizi.

## Stack Tecnico
- **Framework:** Next.js 15 (App Router)
- **Linguaggio:** TypeScript
- **Stile:** Tailwind CSS 4
- **Icone:** Lucide React
- **Hosting:** Ottimizzato per Cloudflare Pages (Static Export)

## Sviluppo e Contributi
Il progetto è aperto a tutti su GitHub. Puoi contribuire scrivendo nuove guide, segnalando errori o migliorando il codice.
1. `npm install`
2. `npm run dev`

### Comandi di Qualità
- `npm run validate:content`: Controlla l'integrità dei dati e la presenza di fonti ufficiali.
- `npm run validate:seo`: Verifica metadati, H1 e tag OpenGraph.
- `npm run validate:rendered-pages`: Assicura che le pagine statiche siano generate correttamente.
- `npm run update-stats`: Rigenera le statistiche globali e i metadati dei moduli.

## Licenza
MIT - Il contenuto è un bene comune.

---
*Busssola non è un sito ufficiale della Pubblica Amministrazione. Non fornisce consulenza legale, medica, fiscale o psicologica. In caso di pericolo immediato, chiama sempre il 112.*
