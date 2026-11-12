# Decisioni applicate e processo di aggiornamento

Data: 12 novembre 2026. Stato: **decisioni prese con le raccomandazioni del documento di architettura**, salvo dove indicato. Il codice non è ancora cambiato.

## Decisioni

| # | Tema | Decisione | Stato |
|---|---|---|---|
| D1 | Hosting | **Cloudflare Workers** con asset statici da `out/`. | Da configurare, vedi sotto |
| D2 | Uscita rapida | Pagina neutra e configurabile in un'unica costante. Testo accanto al pulsante con i limiti. Destinazione predefinita da scegliere (proposta: `https://www.google.com/`). | Da confermare la destinazione |
| D3 | Pubblico | I sette percorsi del masterplan (§3) sono la segmentazione visibile. L'età è un'indicazione editoriale, mai un dato raccolto. | Applicata |
| D4 | Revisione | Tre ruoli: responsabile editoriale, revisore tutela minori, revisore violenza di genere e controllo domestico. Nessuna scheda sensibile può andare in `published` senza revisore nominato. | Nomi da fornire |
| D5 | Tipi di fonte | Aggiungere `norma`, `ente_pubblico`, `documentazione_prodotto`, `organizzazione_specializzata`. Le organizzazioni non sono fonti per affermazioni giuridiche. | Da implementare |
| D6 | SOS | Indicizzati hub e schede di orientamento, con canonical. Nessuno strumento di analisi sulle pagine SOS e sulle lezioni sensibili. | Applicata alla progettazione |
| D7 | Aggiornamento | Ciclo settimanale, descritto sotto. | Applicata alla progettazione |

## Cloudflare Workers: cosa non torna

`wrangler.toml` contiene la configurazione di **Cloudflare Pages** (`pages_build_output_dir = "out"`), non di Workers. Per Workers con asset statici la configurazione è diversa, con `[assets] directory = "./out"`. Non ho cambiato il file: non posso testare il deploy da qui, e il comando di pubblicazione che usi va confermato.

Da verificare:

- Il comando di deploy che usi (`wrangler deploy` o integrazione Git).
- Se i redirect dello schema `/moduli/{id}/lezione/{n}/` vanno in `out/_redirects`. Workers con asset statici li supporta, come `public/_headers` già presente.
- Se `netlify.toml` è ancora usato o va rimosso.

## Notizie automatiche: un rischio da decidere

`.github/workflows/fetch-news.yml` esegue ogni giorno uno script che legge Google News RSS e scrive `src/data/news.ts`, con commit automatico se cambia. Per le novità civiche può andare bene. Per la sezione sicurezza e per le schede sensibili è un problema: testi esterni, non rivisti, pubblicati ogni giorno.

Raccomandazione: tenere il workflow solo per le novità civiche, separare le novità di sicurezza, e richiedere revisione umana prima di qualunque pubblicazione nella sezione sicurezza. Non l'ho modificato: è una decisione tua.

## Processo di aggiornamento settimanale

Il sito cambierà quasi ogni settimana. Ogni cambiamento deve passare dallo stesso ciclo, così che le date e le fonti restino vere.

1. **Raccolta (lunedì).** Controllo delle fonti ufficiali per le schede a rischio: Polizia Postale, Garante Privacy, 1522, 114, normattiva. Si registra cosa è cambiato, con l'URL preciso.
2. **Bozza.** Ogni modifica è una riga nel registro delle modifiche, con motivo e fonte. Nessun testo generato automaticamente entra nelle lezioni.
3. **Verifica.** Un revisore apre ogni fonte citata e confronta l'affermazione. Solo allora `lastCheckedAt` viene aggiornato, a mano, alla data reale.
4. **Controlli automatici.** `npm run validate:content`, `npm run typecheck`, `npm run validate:rendered-pages`, `npm test`. Una modifica che fallisce non si pubblica.
5. **Pubblicazione.** Deploy solo dopo i passi 3 e 4. Le schede sensibili richiedono il revisore nominato.
6. **Registro.** Le modifiche della settimana restano elencate con data e revisore.

Il ciclo è pensato per essere ripetuto: ogni settimana, poche modifiche verificate valgono più di molte modifiche non controllate.

## Priorità dei contenuti

Le fasce più a rischio guidano l'ordine:

1. Bambini e preadolescenti (6–13): adescamento, gruppi, foto, giochi online.
2. Adolescenti (14–17): ricatti con immagini, cyberbullismo, deepfake.
3. Persone anziane e chi le assiste: falsi familiari, falsi operatori, truffe affettive.
4. Vittime di violenza digitale e controllo domestico: percorsi condizionali, con 1522 prima di ogni azione che possa allertare l'autore.
5. Genitori e scuole: dialogo, attività per la classe, LIM.

## Prossimo passo

Prototipo, in quest'ordine:

1. Configurazione Cloudflare Workers (dopo conferma del comando di deploy).
2. Registro fonti con i nuovi tipi (D5) e validatore che blocca `published` senza revisore per le schede sensibili (D4).
3. Scheda SOS a percorsi condizionali con il primo caso completo (violenza digitale e controllo domestico), perché è il più delicato.
4. Uscita rapida e home con le tre azioni.
5. Modalità LIM per la prima attività scolastica.

Ogni passo è una PR separata.
