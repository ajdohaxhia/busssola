# Ricerca della domanda di ricerca — novembre 2026

Documento di lavoro interno. Data di redazione: **8 novembre 2026**.
Ambito: Italia, lingua italiana. Obiettivo: decidere quali contenuti e strumenti costruire, senza inventare dati.

---

## 1. Metodo e limiti (da leggere prima delle tabelle)

**Cosa non è stato possibile fare**

- Non esiste nel repository un export di Google Search Console (nessun file CSV/JSON riconducibile a GSC).
- Non sono state usate API a pagamento (Keyword Planner, Ahrefs, Semrush) né scraping di servizi protetti.
- Google Trends non espone volumi assoluti e le pagine pubbliche non sono interrogabili in modo affidabile da un agente.

**Conseguenza editoriale**

Nessun numero di volume di ricerca è riportato in questo documento. Le priorità sono **qualitative** e derivano da tre segnali:

1. la lista di query seed fornita dalla direzione editoriale (gruppi A–J);
2. l'inventario reale delle pagine già pubblicate (verificato sul build di `out/`);
3. le fonti pubbliche consultate l'8 novembre 2026, usate solo come indicazione di tendenza, non come misura.

**Fonti consultate (solo indicazioni di tendenza)**

- Corriere Economia, articolo sulle ricerche “quanto costa” legate al carovita (giugno 2026): <https://www.corriere.it/economia/consumi/26_giugno_06/quanto-costa-la-paura-del-carovita-ora-sbarca-su-google-le-ricerche-delle-famiglie-preoccupate-dall-aumento-dei-prezzi-3414ad62-f6e0-4ad4-a6fa-b331242d2xlk.shtml>
- Comunicaffè, Google Trends Italia 2026 sulle ricerche legate al caffè (tendenze di consumo): <https://www.comunicaffe.it/google-trends-caffe-italiani-2026-flat-white-moka-latte-avena/>
- SocialTrends, pagina pubblica delle tendenze giornaliere per l'Italia: <https://socialtrends.app/country/IT>
- Google Trends, pagina ufficiale: <https://trends.withgoogle.com>

Queste fonti **non** dimostrano la domanda di una specifica query Busssola e non vanno citate come prova di volumi.

**Cosa renderebbe la ricerca misurabile**

1. Collegare Google Search Console (proprietà `busssola.com`) ed esportare query, impression, clic e CTR degli ultimi 16 mesi.
2. Esportare da Google Keyword Planner i volumi delle 60–80 query prioritarie.
3. Ripetere la misura ogni trimestre e confrontarla con questo documento.

---

## 2. Inventario pubblicato (verificato sul build)

| Tipo | Numero | URL di riferimento |
| :--- | ---: | :--- |
| Aree tematiche (moduli) | 51 | `/moduli/` |
| Procedure (lezioni) | 320 | `/moduli/{id}/lezione/{n}/` |
| Trucchi civici | 107 | `/tips/` |
| Modelli e kit | 52 | `/modelli/` |
| Novità verificate | 74 | `/novita/` |
| Percorsi guidati | 6 | `/percorsi/` |
| Strumenti interattivi | 5 | `/tool/` |
| Pagine HTML generate | 671 | `out/` |

---

## 3. Copertura dei gruppi A–J

Legenda stato: **Coperto** = esiste una pagina dedicata e aggiornata; **Parziale** = esiste una pagina che risponde solo in parte; **Scoperto** = manca una pagina specifica.

| Gruppo | Query seed principali | Pagina esistente | Stato | Nota |
| :--- | :--- | :--- | :--- | :--- |
| A — Bonus e ISEE | isee 2027, come fare isee online, bonus bollette, assegno unico, assegno inclusione, quali bonus posso richiedere | `/isee-2027/`, `/bonus-2027/`, `/modelli/isee-dsu-mini/`, `/modelli/assegno-unico/`, `/modelli/assegno-inclusione/`, `/tool/trova-bonus/` | Coperto | Manca un simulatore ISEE (solo orientamento) |
| B — Lavoro e tasse | calcolo stipendio netto, ral netto, tredicesima, quattordicesima, TFR, busta paga, NASpI, 730, F24, IMU | `/tool/calcolo-stipendio-netto/`, `/modelli/730-precompilato/`, `/modelli/naspi/`, `/guide/f24-acconti/`, `/moduli/modulo-25-fisco-cittadini/` | Parziale | **Mancano tredicesima, quattordicesima, TFR e assistente IMU** |
| C — Pensioni e INPS | pensioni 2027, quando vado in pensione, pensione minima, invalidità, legge 104, assegno sociale | `/pensioni-2027/`, `/moduli/modulo-27-pensioni-previdenza/`, `/moduli/modulo-31-disabilita-legge-104/` | Coperto | Nessun calcolatore previdenziale (corretto: non è stimabile senza contributi) |
| D — Identità e documenti | spid gratis, recupero spid, CIE, PIN/PUK, passaporto, IT-Wallet, permesso di soggiorno, cittadinanza, residenza, PEC | `/modelli/spid/`, `/moduli/cie-richiesta/`, `/modelli/it-wallet/`, `/modelli/passaporto/`, `/moduli/modulo-17-immigrazione/`, `/moduli/cambio-residenza/`, `/confronti/spid-cie-it-wallet/` | Coperto | PIN/PUK trattato dentro CIE; valutare pagina dedicata |
| E — AI e produttività | chatgpt gratis, gemini, claude, ai per studiare, chatgpt vs gemini, ai privacy | `/ai/` | Parziale | Una sola pagina hub: mancano guide operative riproducibili |
| F — Sicurezza digitale | whatsapp hackerato, instagram hackerato, phishing, sms truffa, deepfake, conto hackerato | `/sos/`, `/moduli/modulo-02-account-security/`, `/moduli/modulo-03-truffe-phishing/`, `/confronti/truffe-come-riconoscerle/` | Coperto | Triage interattivo non ancora presente |
| G — Casa ed energia | costo bolletta, consumo elettrico, costo kWh, condizionatore, voltura, subentro, cedolare secca | `/tool/calcolo-consumo-elettrico/`, `/moduli/categoria/casa/`, `/modelli/bonus-sociali/` | Parziale | Mancano voltura/subentro e cedolare secca in pagina dedicata |
| H — Scuola e università | maturità 2027, iscrizioni, borse di studio, ISEE universitario, concorsi, curriculum | `/moduli/modulo-08-scuola-famiglia/`, `/moduli/modulo-22-universita-giovani/`, `/moduli/modulo-33-concorsi-pa/`, `/scuole/` | Parziale | **Manca un CV builder** e un calendario scolastico dedicato |
| I — Consumatori | rimborso volo, ritardo aereo, reso Amazon, garanzia, disdetta abbonamento, reclamo operatore | `/moduli/modulo-18-consumatori/` | Parziale | Nessun albero decisionale né generatore di reclami |
| J — Stagionalità 2027 | legge bilancio 2027, novità bonus 2027, scadenze, canone RAI, detrazioni | `/scadenze/2027/`, `/bonus-2027/`, `/pensioni-2027/`, `/novita/` | Coperto | Distinzione proposta/legge già presente nelle schede |

**Sintesi:** 5 gruppi coperti, 5 parziali, 0 completamente scoperti. Il collo di bottiglia non è la quantità di pagine, ma la profondità su lavoro/tasse, AI operativa, consumatori e casa.

---

## 4. Gap prioritari e proposta di intervento

| Priorità | Intervento | URL proposto | Tipo | Complessità | Perché |
| :--- | :--- | :--- | :--- | :--- | :--- |
| P1 | Calcolo tredicesima e quattordicesima | `/tool/calcolo-tredicesima/` | Calcolatore | Media | Domanda ricorrente a novembre–dicembre; riusa il motore di `/tool/calcolo-stipendio-netto/` |
| P1 | Checklist 730 personalizzata | `/tool/checklist-730/` | Questionario | Media | Alta stagione aprile–settembre; documenti verificabili |
| P2 | TFR educativo | `/tool/calcolo-tfr/` | Calcolatore | Alta | Richiede ipotesi su rivalutazione e contratti: va etichettato come stima |
| P2 | Assistente IMU di base | `/tool/calcolo-imu/` | Calcolatore | Alta | Aliquote comunali variabili: serve input manuale dell'aliquota |
| P2 | Triage SOS interattivo | `/sos/triage/` | Albero decisionale | Media | Estende il centro SOS senza duplicarlo |
| P2 | Rimborso volo: albero decisionale | `/consumatori/rimborso-volo/` | Guida + decision tree | Media | Regolamento CE 261/2004 stabile e verificabile |
| P3 | CV builder locale con export PDF | `/tool/cv-builder/` | Strumento | Alta | Nessun dato inviato a server; forte valore pratico |
| P3 | Guide AI operative | `/ai/chatgpt-per-studiare/` ecc. | Guide | Media | Oggi l'hub AI è unico e generico |

Regola: ogni intervento va pubblicato solo con fonti primarie verificabili e con la data di ultima verifica visibile.

---

## 5. Integrazione già realizzata in questo ciclo

- **Calcolatore Tredicesima Netta e Gratifica Natalizia** `/tool/calcolo-tredicesima/` (completato P1): calcolo da stipendio mensile o RAL, ratei maturati (mesi su 12), contributi IVS, IRPEF a scaglioni marginali senza detrazioni per lavoro dipendente, integrazione Bonus Natale fino a 100€ (D.L. 113 e 167/2024), scadenze CCNL e FAQ Schema.org.
- **Novità verificate 11 novembre 2026**:
  - Allarme bomba via email nelle scuole e bonifiche Forze dell'Ordine / chiarimenti MIM (`/novita/falsi-allarmi-bomba-scuole-11-novembre-2026-polizia-postale-mim/`).
  - Chiarimento ufficiale INPS perequazione pensioni da gennaio 2027 (`/novita/inps-perequazione-pensioni-conferma-gennaio-2027/`).
  - INPS Messaggio n. 3649/2026 conguagli e arretrati fine anno NASpI/CIG (`/novita/inps-messaggio-3649-arretrati-naspi-cassa-integrazione-novembre-2026/`).
- **Ricerca full-site** `/cerca/` con indice statico di 633 elementi (`public/search-index.json`), generato a build time. La pagina è `noindex, follow`.
- **Mappa del sito** `/mappa-del-sito/`: indice completo di guide, procedure, trucchi, modelli, novità, percorsi, strumenti interattivi e sezioni.
- **Feed RSS** `/feed.xml` con le 50 novità più recenti, collegato in `<head>` e nella pagina `/novita/`.
- **SearchAction** Schema.org aggiornata a `/cerca/?q={search_term_string}` (prima puntava a una pagina senza ricerca).
- **Link interni** aggiunti in header, footer, homepage, catalogo tool e hub novità.

---

## 6. Prossimo ciclo di misura

1. Collegare Search Console e salvare gli export in `docs/seo/gsc/` (fuori dal build).
2. Dopo 30 giorni, confrontare impression e CTR delle pagine dei gruppi B, E, I.
3. Aggiornare questo documento con i dati reali, mantenendo la distinzione tra misurato e stimato.
