# Architettura e modello editoriale — punto 2 del masterplan

Data: 12 novembre 2026. Stato: **proposta da discutere**. Nessun codice è stato modificato.

Questo documento traduce il masterplan (§5, §6, §8–§13) in decisioni concrete, ancorate al codice attuale. Le scelte aperte sono elencate in fondo.

## 1. Stato attuale verificato nel codice

- **URL delle lezioni numerici.** La pagina `src/app/moduli/[id]/lezione/[lessonId]/page.tsx` usa come `lessonId` la posizione nell'array (`index + 1`). Lo stesso schema è in `src/app/sitemap.ts` (riga 121) e in `src/lib/seo.ts` (righe 388 e 461). Riordinare un modulo cambia il contenuto servito allo stesso indirizzo: è il problema descritto in masterplan §13.
- **Slug già presenti.** Ogni lezione ha un campo `slug` (315 occorrenze nei moduli). Non è usato per il routing. È la base per gli URL permanenti.
- **Un solo archivio dei progressi.** `src/store/useGameStore.ts` salva in localStorage, con chiave `bussola-progress`, `lessonsViewed` per modulo, compresi i moduli sensibili (primo soccorso, sextortion, adescamento, stalking). Il masterplan (§12) chiede che i percorsi sensibili non producano cronologie applicative.
- **Cornice della lezione.** `src/components/layout/AppShell.tsx` nasconde header, footer e pulsante SOS nelle lezioni con una regex sul percorso. Un'uscita rapida dovrà convivere con questa logica.
- **Tipi delle fonti.** `Source.type` in `src/types/index.ts` accetta solo `official`, `institutional`, `platform`, `nonprofit`, `expert`. Non distingue una norma da una pagina di un ente, né una documentazione di prodotto da un'organizzazione specializzata. Le verifiche della fase 1 hanno mostrato questo limite.
- **Date di controllo.** `lastCheckedAt` è spesso un valore fisso nei dati (es. `2026-05-14` ripetuto per decine di fonti). Non è una prova di verifica (masterplan §11).
- **Scheda SOS.** `src/data/sos-cases.ts` ha 17 casi con azioni lineari e una data di controllo costante (`CHECKED`).
- **Scuole.** `src/app/scuole/page.tsx` mostra piani di lezione statici, con l'etichetta "LIM Ready" ma senza una modalità proiezione.

## 2. Architettura dell'informazione

### Navigazione (masterplan §5)

Impara · Proteggiti · Famiglie · Scuole · Trova aiuto · Fonti e metodo

La home parte dalle tre azioni: **Voglio imparare**, **Voglio proteggermi**, **Ho bisogno di aiuto**. Sotto: situazioni concrete, percorsi per età, accesso a Scuole e LIM, poche lezioni in evidenza. Nessun allarme in apertura.

### URL permanenti (masterplan §13)

| Area | URL | Stato attuale |
|---|---|---|
| Cyberbullismo | `/cyberbullismo/` | nuovo |
| Violenza digitale | `/violenza-digitale/` | nuovo |
| Bambini online | `/bambini-online/` | nuovo |
| Sicurezza account | `/sicurezza-account/` | nuovo |
| Truffe online | `/truffe-online/` | nuovo |
| Impara | `/impara/` | nuovo |
| Scuole | `/scuole/` | esiste |
| SOS | `/sos/` | esiste |

Le pagine `/moduli/...` restano fino alla migrazione, poi reindirizzate.

### Lezioni: URL basati sullo slug

Proposta: `/moduli/{moduleId}/lezione/{slug}/`, con lo slug già presente nei dati. Lo slug non cambia dopo la pubblicazione: una modifica richiede un redirect esplicito.

Redirect da `/moduli/{moduleId}/lezione/{n}/` a `/moduli/{moduleId}/lezione/{slug}/`, generati dal catalogo. Con export statico i redirect vanno configurati sul provider (il repository ha `netlify.toml` e `wrangler.toml`, quindi il provider non è ancora deciso). Il file dei redirect va generato, non scritto a mano.

## 3. Modello dei contenuti

### Lezione (estensione dei tipi esistenti)

Il masterplan chiede di estendere i tipi esistenti, non creare un sistema parallelo. Proposta:

- `id` e `slug` permanenti (esistono; `slug` diventa l'URL).
- `audience` con fasce d'età editoriali (oggi esistono valori come `adults`, `minors`, `victims`; da allineare alle fasce del masterplan §3).
- `sources`: aggiungere i tipi `norma`, `ente_pubblico`, `documentazione_prodotto`, `organizzazione_specializzata`. Oggi `platform` mescola le pagine di Apple e Google con i prodotti commerciali.
- **`claims`** (nuovo): elenco di affermazioni della lezione, ciascuna collegata a una o più fonti. È la richiesta di masterplan §11 ("ogni contenuto registra quale affermazione è sostenuta da quale fonte"). Senza `claims`, una pagina che esiste non dimostra nulla.
- `reviewers` (nuovo): persone reali, con ruolo e data della revisione. `lastReviewedAt` oggi non è collegato a nessun revisore: va separato.
- `nextReviewDue` (nuovo): data della prossima revisione, con il controllo mensile dei link di aiuto e quello trimestrale per le schede sensibili (masterplan §11).
- `status` con gate: una lezione non può essere `published` senza `claims` completi e revisore assegnato. Oggi il gate `qualityGatePassed` è un flag manuale.

### Registro fonti

`src/data/officialSources.ts` esiste già e va esteso invece di duplicato. Ogni voce: tipo (vedi sopra), ente, URL di pagina (non homepage), data di verifica effettiva, responsabile.

### Scheda SOS (percorsi condizionali)

Il masterplan (§6) chiede domande a scelta, senza testo libero, e nessuna sequenza universale. Proposta di modello:

- `SosNode`: una domanda con opzioni, ciascuna con un `next` (altro nodo o scheda finale).
- `SosCase` (scheda finale): le sei parti del masterplan (priorità di sicurezza, prime azioni, cose da evitare, prove da conservare solo se sicuro, servizi con collegamento diretto, fonti e ultima verifica).
- Un flag `controlloDomestico` sui percorsi che possono riguardare una persona che controlla la vittima. Su quei percorsi le azioni che possono allertare l'autore (cambio password, factory reset, raccolta prove sul dispositivo condiviso) compaiono solo dopo il rinvio al 1522 o a un centro antiviolenza.
- Le schede finali hanno `verifiedAt` e `verifiedBy` reali, non la costante `CHECKED`.

### Attività scuola / LIM (nuovo tipo)

Il masterplan (§12) prevede campi tipizzati separati dalla lezione individuale, con gli stessi contenuti usati per lettura, proiezione e stampa:

- `SchoolActivity`: id, slug, ordine di scuola, fascia d'età, tema, durata (15/30/45/60), modalità (discussione, coppie, gruppi, carta, LIM), risorse richieste, obiettivi osservabili, prerequisiti, avvertenze.
- `screens`: sequenza di schermate (scenario, consegna, scelta, spiegazione, riepilogo), ciascuna con testo breve per la classe e note docente separate.
- `printable`: versione stampabile con data di revisione.

Su una scheda SOS o in una lezione sensibile la LIM non è prevista: le attività scolastiche sono su argomenti scelti con cura e con scenari fittizi (masterplan §8.4).

## 4. Persistenza e privacy

- **Due archivi distinti.** `bussola-progress` resta per l'apprendimento generale, facoltativo e attivabile dall'utente. Le preferenze grafiche restano separate (masterplan §12).
- **Nessuna registrazione per moduli sensibili.** `completeLesson` non deve essere chiamato per i moduli con `emergencyLevel` alto o per la sezione SOS. Oggi lo è per tutti.
- **Dati preesistenti.** All'avvio, una funzione legge `bussola-progress`, mostra cosa contiene e propone di cancellarlo. Non si elimina nulla senza conferma.
- **Modalità classe.** Nessun localStorage. Lo stato delle schermate vive in memoria e si azzera con "Termina attività" (masterplan §9.4).

## 5. Uscita rapida

- Un pulsante fisso visibile in ogni pagina SOS e in ogni lezione sensibile, anche con la cornice nascosta (`AppShell`).
- Cambia pagina, non cancella nulla. La pagina di destinazione è configurabile e va scelta con il masterplan (§6): la scelta va decisa, non assunta.
- Un testo accanto al pulsante spiega i limiti: non cancella cronologia, cache, file o tracce di rete.
- "Termina attività" nella LIM è un controllo distinto dall'uscita rapida (§9.4).

## 6. Migrazione e ordine di lavoro

1. Generare la mappa `numero → slug` per tutte le 320 lezioni dal codice. È un lavoro meccanico, verificabile.
2. Introdurre `slug` come URL senza rimuovere `/lezione/{n}/`: redirect da `n` allo slug, verificati con `validate:rendered-pages`.
3. Estendere i tipi (`claims`, `reviewers`, tipi di fonte) e far passare il validatore con i campi vuoti come avvisi, non come errori, finché i revisori non li compilano.
4. Separare i progressi sensibili.
5. Prototipo della home, della scheda SOS a nodi e della modalità LIM, da verificare su una LIM reale (masterplan §9.2).
6. Solo dopo, spostare le sezioni (`/cyberbullismo/`, ecc.) e rigenerare sitemap, ricerca e feed.

## 7. Decisioni da prendere

1. **Pagina di destinazione dell'uscita rapida.** Sito neutro? Quale?
2. **Fasce d'età.** Confermare le quattro del masterplan (§3) e il loro uso in `audience`.
3. **Chi revisiona.** Servono nomi reali prima di compilare `reviewers`. Senza revisori, `status: published` non è raggiungibile per le schede sensibili.
4. **Fonti per i minori.** Confermare se le fonti di organizzazioni specializzate (Save the Children, Telefono Azzurro) restano come fonti di supporto, con tipo proprio.
5. **Hosting e redirect.** Quale provider ospita il sito? Serve per i redirect.
6. **Indicizzazione delle schede SOS.** Indicizzare o no? Il masterplan lascia il punto aperto (§13).
