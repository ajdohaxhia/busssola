# Revisione schede ad alto rischio — Fase 1 del masterplan

Data: 12 novembre 2026. Stato: **revisione tecnica e di coerenza, non revisione specialistica**.

Questo report legge i testi di 17 schede SOS e 30 lezioni ad alto rischio (vedi [inventario](inventario.md)), e verifica coerenza interna, rispetto del masterplan e link alle fonti. Non verifica la correttezza giuridica né la disponibilità dei servizi citati: quella richiede revisori competenti. Non ho accesso a internet da questa sessione, quindi gli URL non sono stati aperti.

## Sintesi

- **Priorità 1 (contenuti da correggere prima di qualsiasi altra modifica):** 4 punti. Due promettono un valore che il masterplan vieta. Due suggeriscono azioni che in contesti di controllo domestico possono aumentare il rischio.
- **Priorità 2 (fonti):** molte fonti puntano alla homepage di un ente, con un titolo che promette una pagina specifica. Alcuni URL hanno forme che non riconosco come pagine esistenti e vanno verificati a mano.
- **Priorità 3 (duplicati e incoerenze):** la stessa situazione (telefono rubato, email compromessa, SIM swap) è trattata in 4–5 lezioni diverse.

## Priorità 1 — contenuti da correggere

1. **Prove "con valore legale"** — `modulo-04b / preserving-digital-evidence`.
   Il titolo promette valore legale e il testo suggerisce "servizi di Web Snapshot certificati". Il masterplan (§6) chiede di non promettere ammissibilità o efficacia probatoria. Riformulare come "conservazione utile" e indicare che la valutazione spetta alle autorità.

2. **Ripristino di fabbrica senza filtro di controllo domestico** — `modulo-06b / spyware-check-guide` e `modulo-15 / spyware-stalkerware`.
   La prima lezione consiglia il factory reset "se il rischio è alto" senza avvertenza iniziale. La seconda lo propone e avverte solo nell'ultimo passaggio. Il masterplan chiede percorsi condizionali per il controllo domestico. Spostare l'avvertenza in cima e collegare a supporto specialistico (1522, centri antiviolenza) prima di qualsiasi azione sul dispositivo.

3. **Sequenza di cambio password e revoca accessi, senza filtro** — `modulo-06 / ex-partner-shared-accounts`.
   Il passo "cambia le password di tutti gli account condivisi" appare prima dell'avvertenza, che compare solo in `askHelpWhen`. Il masterplan vieta la sequenza universale. Portare l'avvertenza prima dei passi.

4. **Sorveglianza del minore** — `modulo-05 / grooming-phases` e confronto con `modulo-05b / child-fear-silent-crisis`.
   `grooming-phases` dice di "monitorare le chat" e "prendere il controllo dei dispositivi". `child-fear-silent-crisis` dice di non sequestrare il telefono e di non violare la privacy. Le due lezioni si contraddicono e il masterplan chiede di non trasformare la protezione in sorveglianza. Allineare su un approccio: conservazione delle prove e colloquio, senza controllo unilaterale.

## Priorità 1bis — affermazioni da verificare o rimuovere

- `modulo-04 / paying-blackmail-risks` e `sextortion-what-is`: "chi paga viene inserito in liste di vittime redditizie". Affermazione senza fonte. Attenuare o citare.
- `telefono-rubato / telefono-rubato-primi-passi`: "denuncia necessaria per il blocco IMEI". Affermazione giuridica/operativa da verificare con l'operatore.
- `modulo-01 / otp-shared-sos`: "fornire un OTP equivale a consegnare le chiavi di casa". Retorica, non informazione. Sostituire.
- `modulo-06b / unwanted-tracker-detection`: il consiglio "non andare a casa tua... lo stalker vedrebbe l'indirizzo sulla mappa" è poco chiaro. Riscrivere.
- `modulo-05b / child-fear-silent-crisis`: "114 per una guida psicologica" attribuisce al servizio un ruolo che non è dichiarato. Riformulare come orientamento.
- `modulo-04 / stopncii-technical` (whoCanHelp): "Revenge Porn Helpline" è un servizio britannico, non italiano. Sostituire o chiarire.

## Priorità 1ter — coperture mancanti dal masterplan

- **Take It Down e StopNCII** per immagini create quando la persona era minorenne. Il masterplan (§6) chiede di spiegare l'età al momento della creazione e i requisiti dei servizi. Oggi `revenge-porn-legal` e le schede SOS `revenge-porn` e `sextortion-adulti` citano solo il Garante. Aggiungere Take It Down e chiarire i requisiti.
- **Violenza domestica** (`violenza-domestica` SOS): "conserva messaggi, foto di lesioni" senza avvertire che l'attività può essere visibile all'autore della violenza. Aggiungere avvertenza e rinvio al 1522 prima di conservare.

## Priorità 2 — fonti

Fonti puntate a una homepage con titolo che promette una pagina specifica (il masterplan chiede fonti puntuali):

| Lezione | Titolo fonte | URL |
|---|---|---|
| modulo-01 / account-hacked-10min | Recupero account compromesso | commissariatodips.it/ |
| modulo-01b / email-hacked-sos | Proteggere un account Google violato | support.google.com (pagina specifica, ok) |
| modulo-15 / email-compromessa | Cosa fare se l'account è violato | commissariatodips.it/ |
| modulo-15 / smartphone-rubato | Smarrimento o furto smartphone | poliziadistato.it/ |
| modulo-15 / spyware-stalkerware | Guida contro lo Stalkerware | garanteprivacy.it/ |
| modulo-15 / sim-swap-protezione | SIM Swap Fraud | acn.gov.it/ |
| modulo-99 / kit-telefono-rubato | Commissariato Online | commissariatodips.it/ |
| modulo-01 / otp-shared-sos | Allerta Ingegneria Sociale | acn.gov.it/ |

Titolo e URL non coincidono:

- `modulo-04b / preserving-digital-evidence`: "Raccogliere prove online" punta a una pagina del Garante su "cyberbullismo".
- `modulo-06 / stalking-safety-plan`: "Guida alla sicurezza personale" punta a una pagina di supporto Apple sulla sicurezza personale. Verificare se è la pagina giusta.

URL che non riesco a riconoscere come pagine esistenti senza aprirli, da verificare a mano:

- `poliziadistato.it/articolo/116259074a38f3d640989052` (`sextortion-what-is`)
- `poliziadistato.it/articolo/3358356828v1` (`cyberstalking-legal-steps`)
- `vinted.it/help/615` (`vinted-wallet-scam`)
- `savethechildren.it/blog-notizie/...` e `savethechildren.it/blog-11/...` (`grooming-phases`, `gaming-grooming-safety`, `grooming-indicators-kids`): due formati diversi, uno dei due potrebbe non esistere.
- `gazzettaufficiale.it/atto/...art.idArticolo=10...` (`revenge-porn-legal`, art. 612-ter): parametri da controllare.

Incoerenza tra lezioni e scheda SOS sullo stesso argomento: il Garante per il revenge porn compare con tre percorsi diversi:

- `garanteprivacy.it/revengeporn` (`sextortion-what-is`)
- `garanteprivacy.it/temi/revenge-porn` (`revenge-porn-legal`, `stopncii-technical`)
- `garanteprivacy.it/temi/internet-e-nuove-tecnologie/revenge-porn` (scheda SOS `revenge-porn`)

Scegliere un URL canonico e verificarlo.

Contatti da verificare: `support@whatsapp.com` nella scheda SOS `whatsapp-rubato`, e il numero verde delle banche, che è "generico" in più schede.

## Priorità 3 — duplicati e incoerenze

Lo stesso contenuto appare in più lezioni con titoli simili:

- **Email compromessa:** `modulo-01b / email-hacked-sos`, `modulo-15 / email-compromessa`, più la scheda SOS `whatsapp-rubato` per l'account.
- **SIM swap:** `modulo-01b / sim-swap-sos`, `modulo-15 / sim-swap-protezione`, scheda SOS `sim-swap`.
- **Telefono rubato:** `telefono-rubato` (lezione e SOS), `modulo-99 / kit-telefono-rubato`, `modulo-15 / smartphone-rubato`, `modulo-07b / iphone-lost-protocol`, `modulo-07b / android-lost-protocol`.

Proposta: una lezione canonica per ciascun argomento, con gli altri percorsi che rimandano a essa. Va deciso in fase di architettura.

Incoerenza di date: le lezioni con `lastReviewedAt` 2024 (sei lezioni) citano fonti con `lastCheckedAt` 2026-05-14. La data della fonte non dimostra la revisione della lezione. Il masterplan chiede di distinguere le due cose.

Incoerenza di livelli: `emergencyLevel` varia senza criterio chiaro (per esempio `sim-swap-sos` è "high", `telefono-rubato-primi-passi` è "sos", `catfishing-indicators` è "low" pur essendo in un modulo sensibile). Definire i livelli.

## Punti in buona forma

- Quasi tutte le lezioni hanno un primo passo chiaro, un "non fare" esplicito e un riferimento a Polizia Postale o servizi dedicati.
- Il "non pagare" è presente in tutte le lezioni di sextortion.
- La schede SOS di pericolo fisico rimandano correttamente al 112 e non sostituiscono il servizio di emergenza.

## Falsi positivi nell'inventario (tema sicurezza in moduli archiviati)

Ho esaminato i 36 casi per titolo. Quasi tutti sono falsi positivi: la regex ha intercettato "dati", "codice", "pagamento", "SPID" in contesti burocratici (NASpI, TARI, IMU, concorsi, visure).

Candidati reali da estrarre dal modulo archiviato:

- `modulo-18-consumatori`, "Vinted/Subito/Marketplace: truffe": truffe su marketplace. Da tenere.
- `modulo-11-documenti-identita-avanzata`, "Documento smarrito o rubato": furto documento. Da tenere nel percorso identità.
- `modulo-11-documenti-identita-avanzata`, "SPID: recupero credenziali": sicurezza credenziali. Da tenere nel percorso identità.
- `modulo-11-documenti-identita-avanzata`, "CIE: PIN/PUK smarriti": protezione PIN/PUK. Da tenere nel percorso identità.
- `modulo-18-consumatori`, "Contestare pagamento carta / Chargeback": contestazione di frode di pagamento. Da valutare.
- `modulo-20-sanita-territoriale`, "Tessera sanitaria smarrita": borderline. Da valutare.

Il resto (NASpI, malattia, codice fiscale, TARI, multe, RCA, DSU, CU, cartelle, partita IVA, IMU, 104, inPA, visura) può restare archiviato.

Il conteggio dei falsi positivi va corretto nell'inventario: da 36 a circa 6 candidati reali. Da fare in un commit successivo.

## Limiti

- Lettura dei testi solo tramite export dei dati. Nessuna verifica online di URL, numeri o normativa.
- Nessuna valutazione della disponibilità dei servizi citati (numeri, sportelli, orari).
- Il livello di rischio resta da validare con revisori specialistici, come richiede il masterplan (§11, §15).

## Prossimi passi proposti

1. Correggere le quattro voci di priorità 1 (testi e avvertenze).
2. Decidere l'URL canonico per ciascuna fonte del Garante e della Polizia, e verificare gli URL segnalati.
3. Aggiungere Take It Down e i requisiti di StopNCII.
4. Correggere il conteggio dei falsi positivi nell'inventario.
5. Affidare la revisione specialistica delle schede SOS e delle lezioni di sextortion, adescamento e stalking a un revisore con competenza.
