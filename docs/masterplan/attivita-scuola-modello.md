# Attività scuola/LIM: modello per autori e revisori

Riferimento: masterplan §8, §9, §10, §12. Struttura dati: `src/types/school.ts`. Validatore: `npm run validate:school`.

## Regola di base

Il testo didattico delle attività non è generato automaticamente. Lo scrivono autori con competenza in educazione digitale e lo revisionano persone con competenze di tutela dei minori e, dove serve, di diritto. Un'attività entra nel sito solo con revisori nominati e data di revisione reale.

## Le quattro attività iniziali (masterplan §10)

Il masterplan indica solo titolo, destinatari indicativi, obiettivo e materiali. Il contenuto va scritto da zero dagli autori.

| Titolo (masterplan) | Destinatari indicativi | Obiettivo (masterplan) |
|---|---|---|
| Il gruppo dei messaggi gentili | Primaria | Riconoscere esclusione e richieste di aiuto |
| Una foto non è di tutti | Secondaria di primo grado | Comprendere consenso e responsabilità nella condivisione |
| Prima di inoltrare | Secondaria di secondo grado | Valutare contenuti manipolati, umiliazione e ruolo di chi assiste |
| Chi ti sta chiedendo quel codice? | Secondaria I e II grado, con versioni distinte | Riconoscere phishing e proteggere gli accessi |

## Campi richiesti per ogni attività

- **Identità:** id, slug permanente, titolo, ordini di scuola, tema.
- **Tempo e modalità:** durata (15, 30, 45 o 60 minuti), modalità (discussione, coppie, gruppi, carta, LIM), risorse richieste (solo LIM, LIM e carta, dispositivi facoltativi). Nessun filtro senza attività corrispondenti (§8.1).
- **Obiettivi osservabili** e prerequisiti.
- **Materiali**: scheda docente, scheda studente accessibile, checklist.
- **Schermate**: scenario, consegna, scelta, spiegazione, riepilogo. Ogni schermata ha il testo per la classe e, se serve, una nota per il docente che non viene proiettata. La spiegazione è rivelata dal docente (§9.3).
- **Avvertenze** per il docente, obbligatorie (§8.4): niente nomi reali, niente racconto di episodi personali, nessun ruolo di vittima e aggressore, alternativa alla partecipazione, interruzione se emerge un caso reale.
- **Risposte commentate, adattamenti per bisogni diversi, fonti.**
- **Fonti**: ogni fonte con URL https di una pagina specifica, tipo (norma, ente pubblico, documentazione di prodotto, organizzazione specializzata), data di verifica reale.
- **Revisori** con nome e ruolo, data di revisione. Un'attività in stato `pubblicata` senza revisori non passa il validatore.

## Vincoli dal masterplan

- Niente classifiche, premi, dashboard individuali, né raccolta di risposte con identificativi (§9.3).
- Nessuna memorizzazione di nomi, classi o risposte individuali (§9.4).
- Tutto ciò che si apre in proiezione è visibile alla classe: niente dati personali in schermo.
- Temi come violenza nelle relazioni o immagini intime non si propongono in tutte le età: richiedono una versione dedicata e revisionata (§10).
- Le attività con studenti vanno organizzate con l'istituto e con le tutele necessarie prima della sperimentazione (§15).

## Passi per pubblicare una attività

1. Autore scrive la bozza con i campi sopra, stato `bozza`.
2. Revisore per la tutela dei minori e revisore per il tema esaminano testi, fonti e avvertenze.
3. Un docente prova l'attività con tempi reali, con una LIM o un proiettore di riferimento (§9.2).
4. Revisione finale: data reale, revisori nominati, stato `pubblicata`.
5. `npm run validate:school` deve passare prima del deploy.
