# Contribuire a Busssola

## Prima di iniziare

Busssola è una risorsa informativa pubblica. Non è un servizio di emergenza e non sostituisce supporto legale, medico, psicologico o intervento urgente.

Se sei in pericolo, chiama il 112.

---

## Modi utili per contribuire

### Bug e problemi tecnici

- Link rotti o pagine 404
- Problemi di visualizzazione su mobile
- Problemi di contrasto o leggibilità
- Errori di build
- Problemi con sitemap, robots.txt o SEO tecnico
- Import inutilizzati o codice morto

### Contenuti

- Correggere frasi poco chiare o ambigue
- Migliorare tono e leggibilità
- Aggiornare fonti ufficiali (URL cambiati, procedure aggiornate)
- Segnalare contenuti deboli o non verificati
- Proporre nuove checklist pratiche

### Fonti

Ogni fonte citata in una guida deve avere:

- **Titolo** della pagina o documento
- **Organizzazione** (es. Polizia Postale, Garante Privacy, Google, ecc.)
- **URL ufficiale** (HTTPS, niente link abbreviati)
- **Cosa supporta** nella guida (a quale punto fa riferimento)
- **Data ultimo controllo**

Se una fonte non è più raggiungibile o è stata spostata, apri una issue.

### Nuove guide

Una nuova guida può essere proposta solo se:

- Risponde a una **domanda concreta** che una persona reale potrebbe avere
- **Non duplica** una guida esistente
- Ha **fonti ufficiali** o altamente affidabili
- Contiene una **checklist** pratica
- Contiene una sezione **"Cosa non fare"**
- Indica **quando chiedere aiuto** e a chi rivolgersi
- Usa un tono **calmo, diretto e non colpevolizzante**

---

## Cosa evitare

- Contenuti generici generati da AI senza verifica
- Fonti inventate o non verificabili
- Blog SEO casuali come fonte primaria
- Consigli legali presentati come assoluti
- Promesse impossibili ("non ti succederà mai più")
- Linguaggio allarmista o sensazionalistico
- Tono da prodotto commerciale o startup
- Colpevolizzazione della vittima ("non dovevi cliccare")
- Consigli di vendetta, contro-hacking o azioni illegali

---

## Setup locale

```bash
# Installazione dipendenze
npm install

# Avvio server di sviluppo
npm run dev

# Validazione contenuti (Quality Gate)
npm run validate:content

# Aggiornamento statistiche
npm run update-stats

# Linting
npm run lint

# Controllo tipi TypeScript
npm run typecheck

# Build di produzione
npm run build
```

---

## Prima di aprire una Pull Request

Esegui tutti i controlli:

```bash
npm run validate:content
npm run update-stats
npm run lint
npm run typecheck
npm run build
```

Se un comando fallisce, spiega il problema nella PR. Non disattivare i controlli per "far passare" la build.

---

## Licenza

Contribuendo a Busssola accetti che i tuoi contributi siano distribuiti con la stessa licenza del progetto.
