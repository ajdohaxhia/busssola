import { Lesson } from '../modules'

export const PHISHING_LESSONS: Lesson[] = [
    {
        id: '3-phishing-intro',
        title: 'Phishing: L\'Email del Pescatore',
        content: `# Phishing: Abboccare all'Amo
Il phishing è il tentativo di ingannarti per farti rivelare informazioni sensibili, fingendo di essere una fonte affidabile.

## Come funziona la psicologia del phishing
I truffatori usano due leve principali: **Urgenza** e **Paura**.
- "Il tuo account è stato sospeso!"
- "Hai vinto un buono da 500€, scade tra 10 minuti!"

### Perché lo fanno?
Vogliono che tu agisca d'impulso senza controllare i dettagli tecnici che rivelerebbero la truffa.`,
        tips: ['L\'urgenza è il segnale numero uno di una truffa.', 'Le aziende serie non ti mettono mai fretta eccessiva.']
    },
    {
        id: '3-mittente-reale',
        title: 'Verificare il Mittente Reale',
        content: `# Chi ha scritto davvero questa mail?
Il nome che vedi nel campo "Da:" può essere falsificato facilmente.

## Come controllare
Clicca o passa il mouse sopra il nome del mittente per vedere l'indirizzo email reale tra parentesi.
- Nome: **Supporto Amazon**
- Email Reale: \`account-update-392@outlook.com\` (SOSPETTO!)

### Il dominio conta
Le email ufficiali di Amazon arrivano da \`@amazon.it\`. Se il dominio è diverso o scritto male (es. \`@amozon.it\`), è phishing.`,
        tips: ['Controlla sempre l\'indirizzo email reale, non solo il nome visualizzato.', 'I domini gratuiti (@gmail, @outlook) non sono usati dalle banche.']
    },
    {
        id: '3-link-hover',
        title: 'Il Trucco dell\'Hovering',
        content: `# Dove porta davvero quel bottone?
Il testo di un link può dire qualsiasi cosa, ma l'URL di destinazione è quello che conta.

## La tecnica dell'Hover
Prima di cliccare su un bottone o un link in un'email:
1. Passa il mouse sopra il link senza cliccare.
2. Guarda nell'angolo in basso a sinistra del tuo browser.
3. Apparirà l'indirizzo reale a cui verrai mandato.

### Esempio
Testo: \`clicca qui per proteggere il tuo account\`
URL reale: \`http://bit.ly/hacked-your-data\` (PERICOLO!)`,
        tips: ['Hover prima di cliccare: è la regola d\'oro del web.', 'Se l\'URL è oscurato da un "URL shortener" (bit.ly, t.co), diffida.']
    },
    {
        id: '3-virus-total-intro',
        title: 'Tool: VirusTotal',
        content: `# Come analizzare file sospetti
Hai scaricato un file e hai paura che sia un virus? Non aprirlo!

## VirusTotal.com
È un servizio gratuito che analizza file e URL usando oltre 70 diversi antivirus contemporaneamente.

### Come usarlo
1. Vai su [VirusTotal.com](https://virustotal.com).
2. Carica il file sospetto.
3. Se vedi più di 2-3 rilevamenti in rosso, elimina il file immediatamente senza aprirlo.`,
        tips: ['VirusTotal è il miglior amico di chi scarica file dal web.', 'Analizza anche gli URL degli store non ufficiali.']
    },
    {
        id: '3-smishing-sms',
        title: 'Smishing: Phishing via SMS',
        content: `# Truffe che arrivano in tasca
Lo "Smishing" (SMS + Phishing) è diventato estremamente comune.

## Tattiche tipiche
- "Il tuo pacco è bloccato in dogana, paga 2€."
- "Accesso sospetto alla tua banca, clicca qui."
- "Sei stato selezionato per un lavoro da 500€ al giorno."

### Perché è efficace
Siamo abituati a fidarci degli SMS più che delle email. Inoltre, i truffatori possono far apparire i loro messaggi nella stessa cartella della tua vera banca (SMS Spoofing).`,
        tips: ['La dogana non ti contatta mai via SMS per pagamenti improvvisi.', 'Non cliccare mai su link in SMS che chiedono dati di accesso.']
    },
    {
        id: '3-vishing-vocal',
        title: 'Vishing: Le Truffe Telefoniche',
        content: `# Quando il truffatore ti chiama
Il "Vishing" (Voice + Phishing) usa la voce per guadagnare la tua fiducia.

## Il finto supporto tecnico
Ti chiamano dicendo di essere di Microsoft o della tua banca. Dicono che il tuo computer ha un virus o che c'è un bonifico sospetto in corso.

### Come difendersi
1. **Riaggancia:** Non dare mai codici 2FA o accessi remoti (AnyDesk/TeamViewer).
2. **Richiama tu:** Usa il numero ufficiale che trovi sul retro della tua carta di credito o sul sito ufficiale.`,
        tips: ['Nessuno ti contatterà per chiederti codici 2FA via voce.', 'Microsoft e Apple non ti chiameranno mai per "virus sul PC".']
    },
    {
        id: '3-malware-tipologie',
        title: 'Tipologie di Malware',
        content: `# Non sono tutti semplici "Virus"
Il termine Malware (Malicious Software) comprende molte minacce diverse.

## I più comuni
- **Ransomware:** Cripta i tuoi file e chiede un riscatto in Bitcoin per sbloccarli.
- **Spyware:** Spia quello che scrivi (keylogger) o attiva la tua webcam.
- **Adware:** Riempie il tuo computer di pubblicità invasiva.
- **Trojan:** Si finge un gioco o un programma utile per poi installare virus.`,
        tips: ['Il ransomware è la minaccia più distruttiva oggi.', 'Usa un buon antivirus e tieni il sistema aggiornato.']
    },
    {
        id: '3-ransomware-cosa-fare',
        title: 'Ransomware: Cosa fare?',
        content: `# I tuoi file sono ostaggi
Se vedi una schermata che dice "I tuoi file sono stati criptati", mantieni la calma.

## La regola d'oro: NON PAGARE
1. Pagare finanzia i criminali.
2. Molto spesso NON ti ridanno i file comunque.
3. Confermi di essere un bersaglio disposto a pagare.

### L'unica difesa reale
Il **Backup Offline**. Se hai i tuoi file su un hard disk scollegato dalla rete, puoi semplicemente formattare il PC e ripristinare tutto senza pagare nulla.`,
        tips: ['Un backup non è tale se è sempre collegato al PC.', 'Scollega l\'hard disk di backup dopo averlo usato.']
    },
    {
        id: '3-scam-marketplace',
        title: 'Truffe sui Marketplace (Vinted, Subito)',
        content: `# Vendere in sicurezza online
App come Vinted, Subito o eBay sono piene di truffatori.

## Lo schema del pagamento esterno
Il truffatore ti convince a uscire dall'app: "Pagami su PayPal Amici o tramite bonifico così risparmiamo le commissioni". 

### Perché è una trappola
Usando metodi esterni perdi ogni protezione dell'acquirente. Se non ti spediscono nulla, i tuoi soldi sono persi per sempre. Usa sempre il sistema di pagamento interno dell'app.`,
        tips: ['Mai uscire dal sistema di pagamento sicuro dell\'app.', 'PayPal "Amici e Parenti" non offre NESSUNA protezione acquisti.']
    },
    {
        id: '3-job-scam',
        title: 'Job Scam: Lavori troppo belli',
        content: `# Lavorare da casa per 200€ l'ora?
Le truffe di lavoro colpiscono spesso i giovani in cerca di indipendenza economica.

## I segnali del falso lavoro
- Ti contattano su WhatsApp senza che tu abbia mandato il CV.
- Il lavoro consiste nel "mettere like a video" o "recensire prodotti".
- Ti chiedono di "investire" dei soldi per avere i primi compiti o per sbloccare lo stipendio.

### Verità
Nessuna azienda seria ti chiederà mai soldi per lavorare o ti contatterà via WhatsApp in modo anonimo.`,
        tips: ['Se devi pagare per lavorare, è una truffa.', 'I lavori "guida facile" su TikTok sono spesso schemi Ponzi.']
    },
    {
        id: '3-crypto-scam-ponzi',
        title: 'Crypto Scam e Schemi Ponzi',
        content: `# Il miraggio del guadagno facile
Le criptovalute sono usate dai truffatori perché le transazioni sono irreversibili.

## Lo Schema Ponzi
Promettono guadagni del 10% al giorno. In realtà, pagano i vecchi investitori con i soldi dei nuovi, finché tutto non crolla e il proprietario scappa con i soldi (Rug Pull).

### Come proteggersi
Non investire in progetti "segnalati" da influencer su TikTok. Usa solo exchange regolati (Coinbase, Kraken, Binance) e diffida delle promesse di guadagno garantito.`,
        tips: ['Guadagno garantito = Truffa 100%.', 'Nessuno ti regala crypto su Telegram o Discord.']
    },
    {
        id: '3-tech-support-scam',
        title: 'Tech Support Scam',
        content: `# "Il tuo PC è infetto, chiama questo numero"
Navigando su siti streaming o torrent, può apparire un popup a tutto schermo con un allarme sonoro.

## Cosa sta succedendo
È solo una pagina web fatta per spaventarti. Il tuo computer non ha nulla. Vogliono che chiami il numero per farti pagare un abbonamento inutile o per farti installare un virus reale.

### Come uscirne
Premi \`ALT + F4\` o chiudi il browser dal task manager. Non chiamare mai il numero e non scaricare nulla.`,
        tips: ['I popup che parlano sono truffe.', 'Forza la chiusura del browser per liberarti del popup.']
    },
    {
        id: '3-social-engineering',
        title: 'Ingegneria Sociale: L\'Hacking Umano',
        content: `# Hackerare le persone, non i computer
A volte l'hacker non usa codici, usa le parole.

## Esempi comuni
- Fingere di essere un amico che ha perso il telefono e ha bisogno di un codice SMS.
- Fingere di essere un corriere che ha bisogno del tuo indirizzo per un pacco "fantasma".
- Chiederti il nome del tuo primo cane o della tua scuola (le risposte alle domande di sicurezza!).

### Difesa
Mantieni un sano scetticismo. Se un amico ti chiede cose strane, chiamalo a voce su un altro canale per verificare che sia davvero lui.`,
        tips: ['Non dare mai codici ricevuti via SMS a nessuno.', 'Le tue "domande di sicurezza" sono informazioni preziose.']
    },
    {
        id: '3-mule-account',
        title: 'Money Muling: Non diventare un complice',
        content: `# Usare il tuo conto per "pulire" soldi
I criminali cercano ragazzi giovani disposti a ricevere bonifici sul proprio conto (Revolut, Postepay) per poi girarli ad altri.

## La promessa
"Ti tieni il 10% come commissione per il disturbo".

### Il rischio legale
Stai commettendo il reato di **riciclaggio**. Anche se non sei tu l'hacker, prestare il tuo conto per far transitare soldi rubati ti rende penalmente responsabile e può portarti in prigione.`,
        tips: ['Mai prestare il proprio conto corrente per transazioni di altri.', 'Il riciclaggio è un reato gravissimo.']
    },
    {
        id: '3-prevenzione-attiva',
        title: 'Prevenzione Attiva e Backup',
        content: `# La tua strategia di difesa
Essere sicuri al 100% è impossibile, ma puoi rendere la vita difficile agli hacker.

## Checklist di protezione
1. **Aggiornamenti:** Installa subito le patch di sicurezza di Windows/Mac/Android.
2. **Antivirus:** Windows Defender è ottimo, tienilo attivo.
3. **Backup 3-2-1:** 3 copie dei dati, su 2 supporti diversi, 1 copia offline.

### Cosa fare se pensi di aver cliccato
Scollega internet, avvia una scansione completa dell'antivirus e cambia le password da un ALTRO dispositivo sicuro.`,
        tips: ['L\'aggiornamento del software chiude le falle usate dagli hacker.', 'Scollega la rete se sospetti un attacco in corso.']
    }
]

export const BULLISMO_LESSONS: Lesson[] = [
    {
        id: '4-cyber-definizione',
        title: 'Che cos\'è il Cyberbullismo?',
        content: `# Bullismo Online: Oltre lo Scherzo
Il cyberbullismo è l'uso delle tecnologie digitali per intimorire, provocare o umiliare qualcuno.

## Differenze dal bullismo fisico
- **Senza Fine:** Ti segue a casa, di notte, 24/7.
- **Vastità:** Un post umiliante può essere visto da migliaia di persone in pochi minuti.
- **Anonimato:** Il bullo può nascondersi dietro profili fake, sentendosi "potente".

### Perché è pericoloso
L'assenza di contatto fisico fa sì che il bullo non veda la sofferenza della vittima, portandolo a spingersi molto più oltre di quanto farebbe dal vivo.`,
        tips: ['Il cyberbullismo non è una fase della crescita, è un abuso.', 'L\'anonimato online è un\'illusione per la Polizia.']
    },
    {
        id: '4-tipologie-bullismo',
        title: 'Le varie facce del Cyberbullismo',
        content: `# Non è solo "insultare"
Esistono diverse forme di aggressione digitale.

## Conoscere il nemico
- **Flaming:** Battaglie verbali online con linguaggio volgare.
- **Harassment:** Invio ripetuto di messaggi offensivi.
- **Denigrazione:** Sparlare di qualcuno per rovinare la sua reputazione.
- **Esclusione:** Escludere intenzionalmente qualcuno da un gruppo chat come punizione sociale.
- **Cyberstalking:** Molestie e denigrazioni ripetute e minacciose.`,
        tips: ['Escludere qualcuno da un gruppo è una forma di violenza.', 'L\'insulto ripetuto diventa stalking.']
    },
    {
        id: '4-doxxing-pericolo',
        title: 'Doxxing e Dossieraggio',
        content: `# Quando i tuoi dati diventano armi
Il Doxxing consiste nel pubblicare online informazioni private di qualcuno senza il suo consenso.

## Cosa viene pubblicato
- Indirizzo di casa.
- Numero di telefono privato.
- Scuola frequentata e orari.
- Documenti medici o foto private.

### Lo scopo
Incitare altri utenti a molestare la vittima nella vita reale. Se subisci doxxing, contatta subito la Polizia: la tua incolumità fisica è a rischio.`,
        tips: ['Mai condividere indirizzo o scuola su profili pubblici.', 'Il doxxing è l\'inizio dello stalking fisico.']
    },
    {
        id: '4-outstage-trickery',
        title: 'Outing e Trickery',
        content: `# Tradire la fiducia
L'Outing e il Trickery sono tecniche basate sull'inganno.

## Come funzionano
- **Outing:** Condividere segreti o informazioni intime di qualcuno (es. orientamento sessuale) che erano state confidate in privato.
- **Trickery:** Convincere qualcuno a rivelare segreti con l'inganno per poi pubblicarli o usarli per ricattarlo.

### Difesa
Sii selettivo con chi condividi informazioni profonde online. Anche un "migliore amico" digitale potrebbe cambiare idea domani.`,
        tips: ['Tutto ciò che scrivi può diventare pubblico in un secondo.', 'Non confidare segreti compromettenti via chat.']
    },
    {
        id: '4-impersonificazione',
        title: 'Impersonificazione (Masquerading)',
        content: `# Rubare l'Identità per Umiliare
Il bullo crea un profilo falso con il tuo nome e la tua foto per rovinare la tua reputazione.

## Cosa fa il bullo
- Pubblica contenuti offensivi o volgari a tuo nome.
- Contatta i tuoi amici o insegnanti insultandoli.
- Cerca di farti espellere dai gruppi o dalla scuola.

### Cosa fare
Segnala immediatamente il profilo alla piattaforma come "Impersonificazione". Avvisa i tuoi contatti che quello non sei tu.`,
        tips: ['Segnala il profilo fake come "Impersonificazione" subito.', 'Avvisa amici e prof se qualcuno scrive a tuo nome.']
    },
    {
        id: '4-coordinated-hate',
        title: 'Campagne di Odio Coordinate',
        content: `# La Forza del Branco Digitale
A volte non è un solo bullo, ma un intero gruppo che si organizza (spesso su Discord o Telegram) per attaccare una vittima.

## Come avviene
Il "leader" indica il profilo della vittima e decine di persone iniziano a commentare con insulti, segnalare il profilo in massa per farlo chiudere o mandare minacce private contemporaneamente.

### Strategia di difesa
Metti il profilo in modalità privata e disabilita i commenti da parte di chi non segui. Togli al branco il loro palcoscenico.`,
        tips: ['In modalità privata, il branco non ha potere.', 'Disabilita i messaggi dai non-follower.']
    },
    {
        id: '4-screenshot-legali',
        title: 'Come fare Screenshot Validi',
        content: `# Salvare le prove correttamente
Un semplice screenshot può essere contestato se non è fatto bene.

## Cosa deve apparire
1. **Contenuto offensivo:** Chiaramente visibile.
2. **Data e Ora:** Fondamentali per la cronologia.
3. **Username e URL:** Per identificare l'autore.
4. **Contesto:** Includi i messaggi precedenti e successivi.

### Tool avanzati
Usa software come **OBS Studio** per registrare video dello scorrimento della chat (dimostra che non è un fotomontaggio) o servizi come **Archive.is** per salvare pagine web in modo permanente.`,
        tips: ['Registra un video mentre scorri la chat offensiva.', 'Archive.is impedisce al bullo di cancellare le prove.']
    },
    {
        id: '4-archive-is',
        title: 'Archive.is: La Prova Immutabile',
        content: `# Impedire la cancellazione delle prove
I bulli spesso scrivono cose orribili e poi le cancellano.

## Come usare Archive.is
1. Copia l'URL del post o del profilo offensivo.
2. Incollalo su [Archive.is](https://archive.is).
3. Il sito scatterà una "istantanea" della pagina che rimarrà salvata nei loro server per sempre, anche se il bullo cancella il post originale.

### Valore Legale
Questa prova è molto difficile da contestare perché gestita da una terza parte neutra.`,
        tips: ['Archivia link sospetti prima che vengano cancellati.', 'Archive.is è la memoria storica dei reati online.']
    },
    {
        id: '4-polizia-postale-bullismo',
        title: 'Denunciare il Bullismo',
        content: `# Quando intervenire legalmente
In Italia, la Legge 71/2017 protegge specificamente le vittime di cyberbullismo.

## I tuoi diritti
- Puoi chiedere al gestore del sito la rimozione del contenuto (deve farlo entro 48 ore).
- Se il gestore non risponde, puoi rivolgerti al Garante della Privacy.
- Se hai più di 14 anni, puoi sporgere denuncia autonomamente (anche se è sempre meglio coinvolgere un genitore).

### Ammonimento del Questore
Esiste una procedura veloce: il Questore può "ammonire" il bullo (se minore di 18 anni), convocandolo con i genitori in commissariato. Spesso basta questo per far finire tutto.`,
        tips: ['La Legge 71/2017 è lo scudo dei minori.', 'L\'ammonimento del Questore è una procedura rapida ed efficace.']
    },
    {
        id: '4-psicologia-vittima',
        title: 'L\'Impatto Psicologico',
        content: `# Non sei tu il problema
Essere vittima di bullismo causa ansia, depressione e calo del rendimento scolastico.

## Cosa NON fare
- **Non isolarti:** Il bullo vince se resti solo.
- **Non rispondere:** Ogni tua risposta è "cibo" per il bullo (don't feed the troll).
- **Non vergognarti:** Sei la vittima di un comportamento criminale altrui.

### Parlane
Trova una persona di cui ti fidi. Può essere un prof, l'allenatore, un genitore o il servizio di ascolto di Telefono Azzurro. Mettere fuori le parole rompe il potere del bullo.`,
        tips: ['Parlarne è la prima forma di difesa.', 'Il bullo si nutre della tua reazione: non dargliela.']
    },
    {
        id: '4-upstander-culture',
        title: 'Cultura dell\'Upstander',
        content: `# Non restare a guardare
Se vedi un compagno bullizzato, il tuo silenzio è un aiuto per il bullo.

## Cosa può fare un Upstander
1. **Non mettere like:** Non partecipare alla derisione.
2. **Segnala in massa:** Se 10 persone segnalano un contenuto, viene rimosso più velocemente.
3. **Supporto privato:** Scrivi alla vittima: "Ehi, ho visto cosa hanno scritto, sono dei cretini, io ci sono".
4. **Dillo a un adulto:** Non sei una spia, stai salvando una persona da una sofferenza enorme.`,
        tips: ['L\'indifferenza è la migliore amica del bullo.', 'Un messaggio di supporto può cambiare la giornata di una vittima.']
    },
    {
        id: '4-reporting-piattaforme',
        title: 'Segnalare sulle Piattaforme',
        content: `# Usare i tool di Instagram, TikTok e FB
Ogni social ha un team di moderazione. Impara a segnalare nel modo giusto.

## Categorie di segnalazione
Non scegliere "Non mi piace". Scegli:
- **Molestie o Bullismo**
- **Incitamento all'odio**
- **Minacce di violenza**

### Note aggiuntive
Se la piattaforma risponde che il post "non viola le linee guida" ma tu ti senti in pericolo, non fermarti. Fai screenshot e vai alla Polizia Postale o rivolgiti al Garante della Privacy.`,
        tips: ['Le segnalazioni in massa funzionano meglio.', 'Usa le categorie giuste per attirare l\'attenzione dei moderatori.']
    },
    {
        id: '4-cyber-stalking-legge',
        title: 'Cyberstalking e Atti Persecutori',
        content: `# Quando il bullismo diventa stalking
Se le molestie sono ripetute e ti causano un perdurante stato di ansia o paura, si parla di Atti Persecutori (Art. 612-bis c.p.).

## Segnali di stalking
- Ricevere decine di chiamate al giorno da numeri anonimi.
- Qualcuno che commenta ogni tuo post su ogni social.
- Minacce credibili alla tua sicurezza o a quella dei tuoi cari.

### Conseguenze Penali
Lo stalking è un reato grave che prevede la reclusione da un anno a sei anni e sei mesi. Non sottovalutarlo mai.`,
        tips: ['Lo stalking è punito con il carcere.', 'Non cancellare mai le prove dei contatti ripetuti.']
    },
    {
        id: '4-privacy-shield',
        title: 'Costruire uno Scudo di Privacy',
        content: `# Prevenire è meglio che curare
Rendi difficile al bullo trovarti.

## Checklist Privacy
1. **Social Privati:** Solo chi accetti può seguirti.
2. **Tag Manuali:** Nessuno può taggarti in foto senza la tua approvazione.
3. **Nascondi lo stato online:** Non far sapere quando sei attivo o quando hai letto i messaggi.
4. **Whitelist commenti:** Permetti i commenti solo agli amici.

### Il risultato
Se il bullo non può raggiungerti e non riceve risposta, si stancherà presto e cercherà un altro bersaglio più "facile".`,
        tips: ['Togli al bullo il suo pubblico.', 'Account privato = meno rischi di doxxing.']
    },
    {
        id: '4-risorse-psicologiche',
        title: 'Risorse e Telefono Azzurro',
        content: `# Hai bisogno di aiuto ora?
Non aspettare che la situazione diventi insopportabile.

## Numeri utili
- **Telefono Azzurro:** 1-96-96 (gratuito, 24/7).
- **Emergenza:** 112 se senti di essere in pericolo fisico imminente.

### Gruppi di supporto
Esistono associazioni come la Fondazione Carolina (dedicata a Carolina Picchio, prima vittima riconosciuta di cyberbullismo in Italia) che aiutano i ragazzi e le famiglie a gestire queste crisi.`,
        tips: ['Carolina Picchio ci ha insegnato che "le parole fanno più male delle botte".', 'Chiedi aiuto prima che sia troppo tardi.']
    }
]
