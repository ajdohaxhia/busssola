import { LifeHack } from '@/types';

export const LIFE_HACKS: LifeHack[] = [
    {
        title: "Scaricare certificati anagrafici online da ANPR",
        slug: "certificati-anagrafici-online-anpr",
        category: "documenti",
        target: ["cittadini", "famiglie"],
        difficulty: "facile",
        time: "5 minuti",
        benefit: "Risparmi tempo ed eviti code allo sportello",
        summary: "Accedi al portale ANPR per scaricare certificati anagrafici (residenza, stato di famiglia, ecc.) con validità legale.",
        whyUseful: "I certificati scaricati da ANPR sono gratuiti (se previsto dalla legge) e immediati, evitandoti di andare fisicamente in Comune.",
        steps: [
            "Accedi al portale ANPR con SPID, CIE o CNS",
            "Seleziona 'Servizi al cittadino'",
            "Scegli 'Certificati'",
            "Seleziona per chi richiedi il certificato",
            "Scegli il tipo di certificato e il motivo dell'esenzione bollo",
            "Scarica il PDF"
        ],
        whatYouNeed: ["SPID, CIE o CNS", "Connessione internet"],
        officialLinks: ["anprCertificati"],
        commonErrors: [
            "Pagare siti non ufficiali per certificati gratuiti",
            "Dimenticare di selezionare l'esenzione corretta"
        ],
        limitations: [
            "Alcuni certificati storici richiedono ancora lo sportello",
            "L'esenzione bollo dipende dall'uso"
        ],
        sources: [
            {
                title: "ANPR - Portale del Cittadino",
                organization: "Ministero dell'Interno",
                url: "https://www.anagrafenazionale.interno.it/",
                type: "official",
                usedFor: "Erogazione servizi",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Risparmia tempo", "Documenti"]
    },
    {
        title: "Fare il cambio di residenza online da ANPR",
        slug: "cambio-residenza-online-anpr",
        category: "documenti",
        target: ["cittadini", "famiglie"],
        difficulty: "media",
        time: "15 minuti",
        benefit: "Pratica inviata da casa senza appuntamenti",
        summary: "Puoi inviare la dichiarazione di cambio residenza (da un comune a un altro o cambio indirizzo) direttamente online.",
        whyUseful: "Sostituisce la necessità di inviare raccomandate o presentarsi allo sportello anagrafe del nuovo comune.",
        steps: [
            "Accedi ad ANPR con SPID o CIE",
            "Seleziona 'Cambio di residenza'",
            "Inserisci i dati del nuovo indirizzo",
            "Aggiungi gli altri componenti della famiglia se necessario",
            "Allega i documenti richiesti (es. contratto affitto o proprietà)",
            "Invia la richiesta e monitora lo stato"
        ],
        whatYouNeed: ["SPID o CIE", "Contratto di affitto o dati catastali", "Documenti d'identità dei familiari"],
        officialLinks: ["anprResidenza"],
        commonErrors: [
            "Non includere tutti i componenti della famiglia",
            "Dati catastali errati o incompleti"
        ],
        limitations: [
            "Il Comune ha 45 giorni per i controlli definitivi",
            "Alcuni casi particolari potrebbero richiedere integrazioni"
        ],
        sources: [
            {
                title: "ANPR - Cambio di Residenza",
                organization: "Ministero dell'Interno",
                url: "https://www.anagrafenazionale.interno.it/area-cittadino/cambio-di-residenza/",
                type: "official",
                usedFor: "Procedura online",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Risparmia tempo", "Documenti"]
    },
    {
        title: "Recuperare il PUK della CIE",
        slug: "recupero-puk-cie",
        category: "documenti",
        target: ["cittadini"],
        difficulty: "facile",
        time: "5 minuti",
        benefit: "Sblocchi la tua identità digitale senza rifare la carta",
        summary: "Se hai perso il PUK della Carta d'Identità Elettronica, puoi recuperarlo tramite l'app o il sito ufficiale se hai fornito i contatti.",
        whyUseful: "Senza PUK non puoi sbloccare il PIN se lo sbagli 3 volte, rendendo la CIE inutilizzabile per i servizi online.",
        steps: [
            "Apri l'app CieID o il portale CIE",
            "Usa la funzione 'Recupero PUK'",
            "Inserisci il numero della CIE e i dati richiesti",
            "Ricevi il PUK via email o SMS (se avevi associato i contatti in fase di rilascio)",
            "Se non avevi fornito contatti, devi recarti in Comune"
        ],
        whatYouNeed: ["Numero della CIE", "Email o cellulare fornito al Comune"],
        officialLinks: ["cieRecuperoPuk"],
        commonErrors: [
            "Pensare che serva rifare la carta intera",
            "Non aver fornito email/cellulare al momento della richiesta della CIE"
        ],
        limitations: [
            "Possibile solo se i dati di contatto sono stati certificati al momento del rilascio"
        ],
        sources: [
            {
                title: "CIE - Recupero PUK",
                organization: "Ministero dell'Interno",
                url: "https://www.cartaidentita.interno.gov.it/",
                type: "official",
                usedFor: "Procedura di recupero",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Evita errore", "Sicurezza"]
    },
    {
        title: "Usare CieID come alternativa a SPID",
        slug: "usare-cieid-alternativa-spid",
        category: "documenti",
        target: ["cittadini"],
        difficulty: "facile",
        time: "5 minuti",
        benefit: "Non devi pagare o rinnovare abbonamenti SPID",
        summary: "La CIE (Carta d'Identità Elettronica) è un'identità digitale di livello 3 (massima sicurezza) accettata da tutte le PA.",
        whyUseful: "Molti siti richiedono SPID, ma la CIE è altrettanto valida e spesso più sicura, nativa dello Stato.",
        steps: [
            "Scarica l'app CieID sul tuo smartphone con NFC",
            "Registra la tua CIE nell'app inserendo il PIN",
            "Quando un sito chiede l'accesso, scegli 'Entra con CIE'",
            "Avvicina la carta al telefono o usa il QR code su PC"
        ],
        whatYouNeed: ["CIE valida", "PIN della CIE (8 cifre)", "Smartphone con NFC"],
        officialLinks: ["cieIdApp"],
        commonErrors: [
            "Perdere la seconda metà del PIN (consegnata col postino)",
            "Usare uno smartphone senza lettore NFC"
        ],
        limitations: [
            "Richiede un dispositivo con lettore NFC (quasi tutti i moderni)",
            "Necessità del PIN completo"
        ],
        sources: [
            {
                title: "CIE - Identità Digitale",
                organization: "Ministero dell'Interno",
                url: "https://www.cartaidentita.interno.gov.it/identifica-online/entra-con-cie/",
                type: "official",
                usedFor: "Guida all'uso",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Documenti"]
    },
    {
        title: "Tenere copia sicura PIN/PUK CIE",
        slug: "copia-sicura-pin-puk-cie",
        category: "sicurezza",
        target: ["cittadini"],
        difficulty: "facile",
        time: "2 minuti",
        benefit: "Eviti di restare bloccato fuori dai servizi PA",
        summary: "I codici della CIE arrivano in due parti: una in Comune e una via posta. Salvali in un posto sicuro ma accessibile.",
        whyUseful: "Molti dimenticano la seconda metà o perdono il foglio cartaceo, rendendo impossibile l'uso digitale della carta.",
        steps: [
            "Recupera la prima parte del PIN/PUK (ricevuta in Comune)",
            "Recupera la seconda parte (ricevuta via posta col foglio della carta)",
            "Uniscile in un unico documento",
            "Salvalo in un Password Manager o in un file protetto da password",
            "Non scriverli mai direttamente sulla carta o nel portafoglio"
        ],
        whatYouNeed: ["Fogli originali CIE", "Password Manager (consigliato)"],
        officialLinks: ["ciePinPuk"],
        commonErrors: [
            "Buttare il foglio arrivato via posta",
            "Scrivere il PIN sulla carta con il pennarello"
        ],
        limitations: [
            "Se perdi entrambi i pezzi e non hai certificato i contatti, devi chiedere un nuovo PIN in Comune"
        ],
        sources: [
            {
                title: "CIE - Informazioni codici",
                organization: "Ministero dell'Interno",
                url: "https://www.cartaidentita.interno.gov.it/",
                type: "official",
                usedFor: "Gestione codici",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Evita errore"]
    },
    {
        title: "Controllare la scadenza dei documenti",
        slug: "controllo-scadenza-documenti",
        category: "documenti",
        target: ["cittadini"],
        difficulty: "facile",
        time: "5 minuti",
        benefit: "Eviti multe o impossibilità di viaggiare",
        summary: "Imposta un promemoria sul calendario per la scadenza di Carta d'Identità, Passaporto e Patente.",
        whyUseful: "Le attese per il rinnovo (specialmente passaporti) possono durare mesi. Accorgersene all'ultimo è un rischio enorme.",
        steps: [
            "Prendi tutti i documenti fisici",
            "Controlla le date di scadenza",
            "Inserisci un evento sul calendario 6 mesi prima della scadenza",
            "Controlla se la tua carta d'identità scade nel giorno del tuo compleanno (nuova regola)",
            "Verifica la validità per l'espatrio"
        ],
        whatYouNeed: ["Documenti fisici", "App Calendario"],
        officialLinks: ["cieHome"],
        commonErrors: [
            "Accorgersi della scadenza pochi giorni prima di un volo",
            "Non considerare i tempi di attesa degli uffici"
        ],
        limitations: [
            "Il promemoria è manuale se non usi app specifiche come IO (che avvisa per alcuni documenti)"
        ],
        sources: [
            {
                title: "Portale della Polizia di Stato - Passaporti",
                organization: "Polizia di Stato",
                url: "https://www.passaportonline.poliziadistato.it/",
                type: "official",
                usedFor: "Prenotazioni",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Evita errore", "Urgente"]
    },
    {
        title: "Cartella 'Documenti essenziali' smartphone",
        slug: "cartella-documenti-essenziali-smartphone",
        category: "documenti",
        target: ["cittadini", "famiglie"],
        difficulty: "facile",
        time: "10 minuti",
        benefit: "Sempre pronto per emergenze o pratiche improvvise",
        summary: "Crea una cartella protetta o un album nascosto sul telefono con le scansioni dei documenti principali.",
        whyUseful: "Spesso serve il codice fiscale o il numero del documento mentre sei fuori casa. Averli in PDF velocizza tutto.",
        steps: [
            "Scansiona fronte/retro (usa app come Note su iPhone o Google Drive)",
            "Salva in PDF (non solo foto)",
            "Crea una cartella 'Documenti' nel cloud o in locale",
            "Proteggi la cartella con FaceID/Impronta o password",
            "Includi: CI, Patente, Tessera Sanitaria, Contratto Affitto, Ultima Busta Paga"
        ],
        whatYouNeed: ["Smartphone", "App scanner (es. Adobe Scan, Microsoft Lens)"],
        officialLinks: ["appIo"],
        commonErrors: [
            "Salvare i documenti come foto nella galleria pubblica (rischio privacy)",
            "Scansioni tagliate o illeggibili"
        ],
        limitations: [
            "La copia digitale non sempre sostituisce l'originale fisico per le forze dell'ordine"
        ],
        sources: [
            {
                title: "Guida alla scansione sicura",
                organization: "Garante Privacy",
                url: "https://www.garanteprivacy.it/",
                type: "official",
                usedFor: "Best practices",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Risparmia tempo", "Privacy"]
    },
    {
        title: "Tessera sanitaria in PDF protetto",
        slug: "tessera-sanitaria-pdf-protetto",
        category: "sanita",
        target: ["cittadini"],
        difficulty: "facile",
        time: "5 minuti",
        benefit: "Codice fiscale sempre a portata di mano",
        summary: "Scarica il duplicato o la scansione della tessera sanitaria e proteggila con password.",
        whyUseful: "Serve in farmacia, dal medico o per acquisti online. Il PDF è più leggibile di una foto rovinata.",
        steps: [
            "Accedi al portale dell'Agenzia delle Entrate o Tessera Sanitaria",
            "Scarica la versione digitale o scansiona la tua",
            "Usa un tool per aggiungere una password al PDF",
            "Salvalo sul telefono"
        ],
        whatYouNeed: ["Tessera Sanitaria", "Accesso AdE"],
        officialLinks: ["adeDuplicatoTsCf"],
        commonErrors: [
            "Inviare il PDF via WhatsApp senza protezione",
            "Perdere la tessera fisica e non avere il duplicato"
        ],
        limitations: [
            "Alcuni lettori ottici richiedono la tessera fisica (chip)"
        ],
        sources: [
            {
                title: "Sistema Tessera Sanitaria",
                organization: "Ministero Economia e Finanze",
                url: "https://sistemats1.sanita.finanze.it/",
                type: "official",
                usedFor: "Servizi sanitari",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Documenti", "Risparmia tempo"]
    },
    {
        title: "App IO per avvisi e pagamenti",
        slug: "app-io-avvisi-pagamenti",
        category: "documenti",
        target: ["cittadini"],
        difficulty: "facile",
        time: "5 minuti",
        benefit: "Non perdi nessuna scadenza pubblica",
        summary: "L'App IO centralizza le comunicazioni di migliaia di enti pubblici in un unico posto.",
        whyUseful: "Ti avvisa se scade la carta d'identità, se hai un bonus da usare o una multa da pagare con lo sconto.",
        steps: [
            "Scarica l'App IO",
            "Accedi con SPID o CIE",
            "Attiva le notifiche",
            "Controlla regolarmente la sezione 'Messaggi' e 'Portafoglio'",
            "Configura i tuoi metodi di pagamento per pagare gli avvisi con un click"
        ],
        whatYouNeed: ["SPID o CIE", "Smartphone"],
        officialLinks: ["appIo"],
        commonErrors: [
            "Disattivare le notifiche e perdere avvisi importanti",
            "Pensare che sia solo per il Cashback (che è finito)"
        ],
        limitations: [
            "Non tutti i Comuni sono ancora integrati al 100%"
        ],
        sources: [
            {
                title: "IO, l'app dei servizi pubblici",
                organization: "PagoPA S.p.A.",
                url: "https://io.italia.it/",
                type: "official",
                usedFor: "App ufficiale",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Risparmia tempo", "Documenti"]
    },
    {
        title: "Verificare comunicazione pagoPA",
        slug: "verificare-comunicazione-pagopa",
        category: "soldi",
        target: ["cittadini"],
        difficulty: "facile",
        time: "2 minuti",
        benefit: "Eviti di pagare truffe mascherate da avvisi",
        summary: "Ogni avviso di pagamento pagoPA ha un codice IUV unico. Verifica sempre l'attendibilità prima di pagare.",
        whyUseful: "Esistono tentativi di phishing che simulano avvisi di pagamento. Usare l'app ufficiale o il sito della banca è più sicuro.",
        steps: [
            "Prendi l'avviso cartaceo o digitale",
            "Cerca il codice IUV (Identificativo Unico di Versamento)",
            "Inseriscilo nell'app IO o nel sito della tua banca",
            "Se i dati (ente, importo) corrispondono, puoi procedere",
            "Non pagare mai tramite link arrivati via SMS sospetti"
        ],
        whatYouNeed: ["Avviso di pagamento", "App IO o Home Banking"],
        officialLinks: ["pagopaHome"],
        commonErrors: [
            "Pagare tramite link diretti in email senza controllare",
            "Sbagliare a digitare lo IUV"
        ],
        limitations: [
            "Alcuni enti piccoli potrebbero non mostrare subito tutti i dettagli online"
        ],
        sources: [
            {
                title: "Sicurezza pagoPA",
                organization: "PagoPA S.p.A.",
                url: "https://www.pagopa.gov.it/",
                type: "official",
                usedFor: "Linee guida sicurezza",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Soldi"]
    },
    {
        title: "Link ufficiali SPID/CIE",
        slug: "link-ufficiali-spid-cie",
        category: "sicurezza",
        target: ["cittadini"],
        difficulty: "facile",
        time: "1 minuto",
        benefit: "Proteggi le tue credenziali da siti fake",
        summary: "Usa sempre e solo i portali governativi per gestire la tua identità digitale.",
        whyUseful: "Cercando su Google 'SPID' potresti finire su siti di intermediari che chiedono soldi per servizi gratuiti o, peggio, rubano dati.",
        steps: [
            "Salva nei preferiti: spid.gov.it e cartaidentita.interno.gov.it",
            "Verifica che l'URL finisca sempre in .gov.it",
            "Controlla il lucchetto nella barra degli indirizzi",
            "Non inserire mai le credenziali se il sito ti sembra strano"
        ],
        whatYouNeed: ["Browser sicuro"],
        officialLinks: ["spidHome", "cieHome"],
        commonErrors: [
            "Cliccare sui primi risultati 'Annuncio' su Google",
            "Usare siti di assistenza non ufficiali"
        ],
        limitations: [
            "Alcuni Identity Provider hanno siti .it o .com (es. posteid.it), verifica che siano quelli ufficiali"
        ],
        sources: [
            {
                title: "AgID - Identità Digitale",
                organization: "AgID",
                url: "https://www.agid.gov.it/",
                type: "official",
                usedFor: "Regole ufficiali",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Privacy"]
    },
    {
        title: "Kit documenti pre-pratica",
        slug: "kit-documenti-pre-pratica",
        category: "documenti",
        target: ["cittadini", "famiglie"],
        difficulty: "facile",
        time: "10 minuti",
        benefit: "Nessuno stress durante la compilazione online",
        summary: "Prima di iniziare una pratica (es. ISEE, bonus, iscrizione scuola), prepara i file in una cartella dedicata.",
        whyUseful: "Molti siti vanno in timeout se ci metti troppo tempo a cercare i documenti, costringendoti a ricominciare da capo.",
        steps: [
            "Leggi la lista dei documenti necessari",
            "Raccoglili tutti (PDF o JPG leggibili)",
            "Rinominali in modo chiaro (es. 'CI_Fronte.pdf')",
            "Controlla che la dimensione dei file non superi i limiti (spesso 2MB o 5MB)",
            "Tieni a portata di mano SPID e cellulare per gli OTP"
        ],
        whatYouNeed: ["Documenti necessari", "Computer"],
        officialLinks: ["anprHome"],
        commonErrors: [
            "Cercare i documenti mentre il timer del sito scorre",
            "Caricare file troppo pesanti che bloccano l'invio"
        ],
        limitations: [
            "I requisiti variano per ogni singola pratica"
        ],
        sources: [
            {
                title: "Linee guida PA",
                organization: "Dipartimento per la trasformazione digitale",
                url: "https://innovazione.gov.it/",
                type: "official",
                usedFor: "Best practices",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Risparmia tempo", "Documenti"]
    },
    {
        title: "Screenshot ricevuta/protocollo",
        slug: "screenshot-ricevuta-protocollo",
        category: "documenti",
        target: ["cittadini", "lavoratori"],
        difficulty: "facile",
        time: "10 secondi",
        benefit: "Prova certa dell'invio anche se il sistema fallisce",
        summary: "Fai sempre uno screenshot o salva il PDF della pagina finale di conferma di una pratica.",
        whyUseful: "A volte le email di conferma non arrivano o finiscono in spam. Il numero di protocollo è l'unica prova che hai inviato tutto.",
        steps: [
            "Arriva alla pagina 'Inviato con successo' o 'Riepilogo'",
            "Cattura l'intera schermata (su PC: Stamp o Win+Shift+S)",
            "Assicurati che si veda bene il Numero di Protocollo e la Data/Ora",
            "Salva lo screenshot nella cartella della pratica"
        ],
        whatYouNeed: ["Smartphone o PC"],
        officialLinks: ["anprHome"],
        commonErrors: [
            "Chiudere la finestra prima di aver segnato il numero",
            "Pensare che 'tanto mi arriva l'email'"
        ],
        limitations: [
            "Lo screenshot non ha valore legale quanto il PDF di ricevuta, ma aiuta molto in caso di contestazioni"
        ],
        sources: [
            {
                title: "Consigli pratici PA",
                organization: "AgID",
                url: "https://www.agid.gov.it/",
                type: "official",
                usedFor: "Supporto utenti",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Evita errore", "Documenti"]
    },
    {
        title: "Salvare numero protocollo",
        slug: "salvare-numero-protocollo",
        category: "documenti",
        target: ["cittadini", "lavoratori"],
        difficulty: "facile",
        time: "1 minuto",
        benefit: "Puoi sollecitare o controllare lo stato della pratica",
        summary: "Il protocollo è il 'nome' della tua pratica per la PA. Segnalo subito nelle tue note.",
        whyUseful: "Se chiami un ufficio senza protocollo, difficilmente sapranno aiutarti. È la chiave di ricerca per ogni operatore pubblico.",
        steps: [
            "Copia il codice alfanumerico del protocollo",
            "Incollalo in un'app di note o nel nome della cartella sul PC",
            "Se la pratica è importante, scrivilo anche su un'agenda fisica",
            "Usalo per controllare lo stato sui portali (es. INPS, Comune)"
        ],
        whatYouNeed: ["App Note o Agenda"],
        officialLinks: ["inpsHome"],
        commonErrors: [
            "Confondere il numero di protocollo con l'ID della transazione",
            "Perdere il codice prima che la pratica sia conclusa"
        ],
        limitations: [
            "Alcuni sistemi usano ID diversi per protocollo interno e ricevuta esterna"
        ],
        sources: [
            {
                title: "Guida ai servizi INPS",
                organization: "INPS",
                url: "https://www.inps.it/",
                type: "official",
                usedFor: "Esempio protocollo",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Risparmia tempo", "Documenti"]
    },
    {
        title: "PEC quando serve davvero",
        slug: "pec-quando-serve-davvero",
        category: "documenti",
        target: ["cittadini", "lavoratori"],
        difficulty: "media",
        time: "5 minuti",
        benefit: "Valore legale di una raccomandata senza uscire di casa",
        summary: "Usa la Posta Elettronica Certificata (PEC) per disdette, reclami formali o invio di documenti ufficiali.",
        whyUseful: "Una mail normale non garantisce la consegna né l'integrità del contenuto. La PEC sì, e costa meno di una raccomandata A/R.",
        steps: [
            "Attiva una PEC (esistono servizi da pochi euro l'anno)",
            "Cerca l'indirizzo PEC del destinatario (su INI-PEC o siti ufficiali)",
            "Scrivi il messaggio allegando i PDF",
            "Conserva le due ricevute che riceverai: 'accettazione' e 'consegna'",
            "Attenzione: la PEC ha valore legale solo se inviata da PEC a PEC"
        ],
        whatYouNeed: ["Indirizzo PEC", "Documenti in PDF"],
        officialLinks: ["spidHome"],
        commonErrors: [
            "Inviare una mail normale a un indirizzo PEC (potrebbe essere rifiutata)",
            "Non conservare la ricevuta di consegna"
        ],
        limitations: [
            "Richiede un abbonamento annuale (anche se economico)",
            "Molti privati non hanno la PEC, serve soprattutto verso PA e aziende"
        ],
        sources: [
            {
                title: "Indice Nazionale Indirizzi PEC",
                organization: "Ministero delle Imprese e del Made in Italy",
                url: "https://www.inipec.gov.it/",
                type: "official",
                usedFor: "Ricerca indirizzi",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Documenti", "Urgente"]
    },
    {
        title: "Nominare i file intelligentemente",
        slug: "nominare-file-intelligentemente",
        category: "documenti",
        target: ["cittadini", "studenti", "lavoratori"],
        difficulty: "facile",
        time: "1 minuto",
        benefit: "Trovi subito quello che cerchi anche dopo anni",
        summary: "Usa uno standard per rinominare i tuoi documenti digitali, ad esempio: AAAA-MM-DD_NomeDocumento_NomeSoggetto.",
        whyUseful: "File chiamati 'scansione1.pdf' o 'img_1234.jpg' sono impossibili da gestire quando devi allegarli a una pratica urgente.",
        steps: [
            "Apri il file appena scansionato",
            "Usa il formato ISO per la data (Anno-Mese-Giorno) per l'ordinamento automatico",
            "Aggiungi una descrizione breve e chiara",
            "Usa l'underscore (_) o il trattino (-) al posto degli spazi per evitare problemi di upload",
            "Esempio: 2024-05-10_Contratto-Affitto_Mario-Rossi.pdf"
        ],
        whatYouNeed: ["File manager su PC o Smartphone"],
        officialLinks: ["anprHome"],
        commonErrors: [
            "Usare nomi lunghissimi con caratteri speciali (ò, à, €, ecc.)",
            "Lasciare il nome generico dato dallo scanner"
        ],
        limitations: [
            "Richiede costanza nel rinominare i file appena creati"
        ],
        sources: [
            {
                title: "Organizzazione file digitali",
                organization: "AgID",
                url: "https://www.agid.gov.it/",
                type: "official",
                usedFor: "Standard consigliati",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Risparmia tempo", "Documenti"]
    },
    {
        title: "Cercare il sito ufficiale senza pubblicità",
        slug: "cercare-sito-ufficiale-no-ads",
        category: "sicurezza",
        target: ["cittadini"],
        difficulty: "facile",
        time: "30 secondi",
        benefit: "Eviti di finire su siti che ti fanno pagare per servizi gratuiti",
        summary: "Impara a distinguere tra i risultati organici di Google e gli annunci a pagamento (Ads) che spesso imitano i siti della PA.",
        whyUseful: "Molte aziende pagano per apparire sopra i siti ufficiali di INPS o ANPR per venderti assistenza che non ti serve.",
        steps: [
            "Digita la tua ricerca (es. 'rinnovo patente')",
            "Salta i primi risultati che hanno l'etichetta 'Annuncio' o 'Sponsorizzato'",
            "Cerca URL che terminano in .gov.it o .it (se ente locale)",
            "Verifica che il nome del sito corrisponda all'ente ufficiale"
        ],
        whatYouNeed: ["Motore di ricerca"],
        officialLinks: ["spidHome"],
        commonErrors: [
            "Cliccare sul primo link in alto senza leggere l'URL",
            "Fornire dati personali a siti di 'assistenza pratiche' non richiesti"
        ],
        limitations: [
            "Google a volte mescola molto bene gli annunci con i risultati reali"
        ],
        sources: [
            {
                title: "Vademecum contro le truffe online",
                organization: "Polizia Postale",
                url: "https://www.commissariatodips.it/",
                type: "official",
                usedFor: "Prevenzione",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Evita errore"]
    },
    {
        title: "Usare site:gov.it per ricerche sicure",
        slug: "usare-site-gov-it-ricerche",
        category: "documenti",
        target: ["cittadini", "studenti"],
        difficulty: "media",
        time: "1 minuto",
        benefit: "Risultati solo da fonti ufficiali certificate",
        summary: "Usa i comandi avanzati di Google per filtrare i risultati e vedere solo quelli provenienti da siti governativi.",
        whyUseful: "Elimina blog, siti di news e forum che potrebbero dare informazioni datate o errate sulle leggi.",
        steps: [
            "Vai sulla barra di ricerca di Google",
            "Scrivi quello che cerchi seguito da 'site:gov.it'",
            "Esempio: 'bonus mobili site:gov.it'",
            "Premi invio: vedrai solo risultati da siti ufficiali dello Stato"
        ],
        whatYouNeed: ["Google o altro motore di ricerca"],
        officialLinks: ["spidHome"],
        commonErrors: [
            "Dimenticare i due punti tra site e l'estensione",
            "Usare estensioni sbagliate (es. .com o .org)"
        ],
        limitations: [
            "Esclude alcuni enti che usano .it invece di .gov.it (es. Comuni o INPS)"
        ],
        sources: [
            {
                title: "Trucchi ricerca Google",
                organization: "Google Support",
                url: "https://support.google.com/websearch/answer/2466433",
                type: "platform",
                usedFor: "Comandi di ricerca",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Documenti", "Risparmia tempo"]
    },
    {
        title: "Controllare la data di aggiornamento delle pagine",
        slug: "data-aggiornamento-pagine-pubbliche",
        category: "documenti",
        target: ["cittadini"],
        difficulty: "facile",
        time: "1 minuto",
        benefit: "Eviti di seguire regole vecchie non più valide",
        summary: "Verifica sempre quando è stata aggiornata l'ultima volta la pagina che stai leggendo su un sito pubblico.",
        whyUseful: "Le leggi cambiano spesso. Una guida sul 'Bonus Facciate' del 2021 non è valida nel 2024.",
        steps: [
            "Scorri fino in fondo alla pagina web",
            "Cerca scritte come 'Ultimo aggiornamento', 'Data pubblicazione' o 'Revisione'",
            "Se la data è più vecchia di un anno, cerca una versione più recente",
            "Controlla se c'è un avviso di 'contenuto archiviato'"
        ],
        whatYouNeed: ["Browser"],
        officialLinks: ["anprHome"],
        commonErrors: [
            "Seguire una guida trovata su un blog senza controllare la data dell'articolo",
            "Assumere che se il sito è online, l'info è per forza attuale"
        ],
        limitations: [
            "Non tutti i siti indicano chiaramente la data di aggiornamento"
        ],
        sources: [
            {
                title: "Qualità dei dati pubblici",
                organization: "AgID",
                url: "https://www.agid.gov.it/",
                type: "official",
                usedFor: "Standard di trasparenza",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Evita errore", "Documenti"]
    },
    {
        title: "No ads per le pratiche pubbliche",
        slug: "no-ads-pratiche-pubbliche",
        category: "sicurezza",
        target: ["cittadini"],
        difficulty: "facile",
        time: "5 minuti",
        benefit: "Navigazione più pulita e meno rischi di phishing",
        summary: "Installa un ad-blocker nel tuo browser per eliminare le pubblicità ingannevoli che si sovrappongono ai siti PA.",
        whyUseful: "Molti siti 'fake' usano i banner pubblicitari per attirare utenti che stanno cercando servizi governativi.",
        steps: [
            "Scegli un ad-blocker affidabile (es. uBlock Origin)",
            "Installalo come estensione nel tuo browser (Chrome, Firefox, Edge)",
            "Attivalo e vedrai sparire i risultati sponsorizzati in alto nelle ricerche",
            "Ricordati di disattivarlo solo se un sito ufficiale ha problemi di visualizzazione"
        ],
        whatYouNeed: ["Browser su PC"],
        officialLinks: ["spidHome"],
        commonErrors: [
            "Installare ad-blocker sospetti che rubano dati",
            "Pensare che l'ad-blocker blocchi anche i malware (non sempre)"
        ],
        limitations: [
            "Alcuni siti istituzionali potrebbero non funzionare correttamente con il blocco attivo"
        ],
        sources: [
            {
                title: "Guida alla navigazione sicura",
                organization: "ACN",
                url: "https://www.acn.gov.it/",
                type: "official",
                usedFor: "Sicurezza browser",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Privacy"]
    },
    {
        title: "Usare solo moduli da siti ufficiali",
        slug: "moduli-siti-ufficiali",
        category: "documenti",
        target: ["cittadini", "famiglie"],
        difficulty: "facile",
        time: "2 minuti",
        benefit: "Documenti accettati al primo colpo senza rifiuti",
        summary: "Scarica i moduli PDF (es. dichiarazione sostitutiva, delega) solo dai siti degli enti che li richiedono.",
        whyUseful: "Un modulo trovato su un sito di 'modulistica generica' potrebbe essere obsoleto o non contenere le clausole sulla privacy aggiornate.",
        steps: [
            "Individua l'ente destinatario (es. INPS, Comune di Milano)",
            "Vai nella sezione 'Modulistica' o 'Documenti' del loro sito",
            "Scarica l'ultima versione disponibile",
            "Compila digitalmente se possibile per evitare errori di lettura"
        ],
        whatYouNeed: ["Browser", "Lettore PDF"],
        officialLinks: ["anprHome"],
        commonErrors: [
            "Usare un modulo vecchio stampato anni fa",
            "Cercare 'modulo delega' su Google Immagini"
        ],
        limitations: [
            "A volte i siti ufficiali sono difficili da navigare per trovare il modulo giusto"
        ],
        sources: [
            {
                title: "Diritto alla trasparenza",
                organization: "Funzione Pubblica",
                url: "https://www.funzionepubblica.gov.it/",
                type: "official",
                usedFor: "Standard modulistica",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Evita errore", "Documenti"]
    },
    {
        title: "Stampare in PDF le conferme",
        slug: "stampare-pdf-conferme",
        category: "documenti",
        target: ["cittadini", "studenti"],
        difficulty: "facile",
        time: "30 secondi",
        benefit: "Hai una copia digitale immutabile di quello che hai fatto",
        summary: "Invece di fare solo screenshot, usa la funzione 'Stampa -> Salva come PDF' della pagina di conferma.",
        whyUseful: "Il PDF conserva i link cliccabili e tutto il testo selezionabile, a differenza di una foto, facilitando ricerche future.",
        steps: [
            "Una volta conclusa la pratica, premi Ctrl+P (o Cmd+P)",
            "Nella scelta della stampante, seleziona 'Salva come PDF' o 'Microsoft Print to PDF'",
            "Salva il file con un nome intelligente",
            "Verifica che il file si apra correttamente"
        ],
        whatYouNeed: ["Browser", "PC o Smartphone"],
        officialLinks: ["anprHome"],
        commonErrors: [
            "Chiudere la scheda prima di aver salvato",
            "Dimenticare dove si è salvato il file"
        ],
        limitations: [
            "Alcune pagine web protette potrebbero non visualizzarsi bene in stampa PDF"
        ],
        sources: [
            {
                title: "Gestione documenti digitali",
                organization: "AgID",
                url: "https://www.agid.gov.it/",
                type: "official",
                usedFor: "Consigli tecnici",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Risparmia tempo", "Documenti"]
    },
    {
        title: "Pratica online vs sportello",
        slug: "pratica-online-vs-sportello",
        category: "documenti",
        target: ["cittadini", "anziani"],
        difficulty: "facile",
        time: "5 minuti",
        benefit: "Scegli la via più veloce e meno stressante",
        summary: "Prima di andare in ufficio, controlla se la pratica può essere fatta online. Spesso è obbligatorio o molto più rapido.",
        whyUseful: "Molti uffici ormai ricevono solo su appuntamento e per casi che non si possono risolvere digitalmente.",
        steps: [
            "Cerca il servizio sul sito dell'ente",
            "Verifica se c'è un pulsante 'Accedi al servizio' con SPID/CIE",
            "Controlla i tempi di risposta dichiarati per l'online",
            "Valuta se la complessità richiede un operatore umano o se bastano pochi click"
        ],
        whatYouNeed: ["SPID o CIE", "Accesso internet"],
        officialLinks: ["anprHome"],
        commonErrors: [
            "Andare in Comune per un certificato che su ANPR si scarica in 2 minuti",
            "Non sapere che alcune pratiche sono ormai *solo* online"
        ],
        limitations: [
            "Il digital divide colpisce chi non ha competenze o strumenti"
        ],
        sources: [
            {
                title: "Relazione sulla digitalizzazione PA",
                organization: "Dipartimento Trasformazione Digitale",
                url: "https://innovazione.gov.it/",
                type: "official",
                usedFor: "Statistiche e trend",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Risparmia tempo", "Documenti"]
    },
    {
        title: "Documenti PDF separati",
        slug: "documenti-pdf-separati",
        category: "documenti",
        target: ["cittadini", "lavoratori"],
        difficulty: "media",
        time: "2 minuti",
        benefit: "Eviti rifiuti dal sistema di upload",
        summary: "Non scansionare 10 documenti diversi in un unico file PDF a meno che non sia esplicitamente richiesto.",
        whyUseful: "I sistemi della PA spesso chiedono file distinti per 'Carta Identità', 'Codice Fiscale' e 'Modulo A'. Se carichi un file unico, la pratica viene bloccata.",
        steps: [
            "Scansiona ogni documento separatamente",
            "Controlla i requisiti del sito (es. 'caricare fronte e retro in un unico file')",
            "Usa tool online (o Anteprima su Mac) per dividere o unire PDF se necessario",
            "Controlla il peso di ogni singolo file"
        ],
        whatYouNeed: ["Scanner o App smartphone", "Tool PDF"],
        officialLinks: ["anprHome"],
        commonErrors: [
            "Caricare un PDF di 50 pagine quando serviva solo la prima",
            "Non dividere i documenti dei vari familiari"
        ],
        limitations: [
            "Richiede un minimo di dimestichezza con la gestione dei file PDF"
        ],
        sources: [
            {
                title: "Guida all'invio telematico",
                organization: "Agenzia delle Entrate",
                url: "https://www.agenziaentrate.gov.it/",
                type: "official",
                usedFor: "Specifiche tecniche",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Evita errore", "Documenti"]
    },
    {
        title: "Nomi file semplici per l'upload",
        slug: "nomi-file-semplici-upload",
        category: "documenti",
        target: ["cittadini"],
        difficulty: "facile",
        time: "30 secondi",
        benefit: "Eviti errori tecnici inspiegabili dei siti web",
        summary: "Evita spazi, accenti e simboli strani nei nomi dei file che carichi sui siti della PA.",
        whyUseful: "Molti vecchi server della PA vanno in errore se carichi un file chiamato 'Carta d'identità di papà.pdf'. Meglio 'CI_Papa.pdf'.",
        steps: [
            "Controlla il nome del file prima di cliccare 'Invia'",
            "Rimuovi spazi e sostituiscili con _",
            "Rimuovi accenti (es. da 'è' a 'e')",
            "Non usare caratteri come @, #, $, %, ( )"
        ],
        whatYouNeed: ["File manager"],
        officialLinks: ["spidHome"],
        commonErrors: [
            "Usare nomi troppo lunghi (oltre i 50 caratteri)",
            "Mantenere il nome originale della foto dello smartphone"
        ],
        limitations: [
            "È un accorgimento tecnico per superare i limiti di sistemi vecchi"
        ],
        sources: [
            {
                title: "Linee guida accessibilità e usabilità",
                organization: "AgID",
                url: "https://www.agid.gov.it/",
                type: "official",
                usedFor: "Best practices tecniche",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Evita errore", "Risparmia tempo"]
    },
    {
        title: "Scaricare ricevuta prima di chiudere",
        slug: "scaricare-ricevuta-prima-chiudere",
        category: "documenti",
        target: ["cittadini", "lavoratori"],
        difficulty: "facile",
        time: "10 secondi",
        benefit: "Nessun dubbio sull'esito della pratica",
        summary: "Non dare per scontato che la ricevuta ti arrivi via email. Scaricala sempre dalla pagina di conferma.",
        whyUseful: "In caso di bug del sistema o email smarrita, quella ricevuta scaricata è l'unica prova del tuo adempimento legale.",
        steps: [
            "Trova il pulsante 'Scarica Ricevuta' o 'Download PDF'",
            "Clicca prima di chiudere il browser o fare il logout",
            "Verifica che il file si sia salvato correttamente nella tua cartella",
            "Se non c'è il tasto, stampa la pagina in PDF"
        ],
        whatYouNeed: ["Browser"],
        officialLinks: ["anprHome"],
        commonErrors: [
            "Chiudere la scheda appena compare 'Successo'",
            "Pensare che la ricevuta sia sempre disponibile nell'area riservata (non sempre lo è subito)"
        ],
        limitations: [
            "Alcuni sistemi generano la ricevuta dopo qualche ora, in quel caso segnati il numero pratica"
        ],
        sources: [
            {
                title: "Diritti del cittadino digitale",
                organization: "Difensore Civico Digitale",
                url: "https://www.agid.gov.it/it/agenzia/difensore-civico-digitale",
                type: "official",
                usedFor: "Tutela",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Evita errore", "Documenti"]
    },
    {
        title: "Lista credenziali senza password",
        slug: "lista-credenziali-no-password",
        category: "sicurezza",
        target: ["cittadini", "anziani"],
        difficulty: "facile",
        time: "5 minuti",
        benefit: "Rapida consultazione senza rischi di sicurezza",
        summary: "Tieni un foglio (o file) con i nomi utente e i servizi, ma MAI le password accanto.",
        whyUseful: "Spesso il problema non è la password, ma non ricordarsi con quale email ci si è registrati a un servizio (es. 'ho usato quella del lavoro o quella privata?').",
        steps: [
            "Crea una tabella: Servizio | Email/User usato | Note (no password)",
            "Aggiungi i servizi principali: INPS, Comune, Banca, Email, Social",
            "Tienila a portata di mano vicino al PC",
            "Usa un Password Manager per le password vere e proprie"
        ],
        whatYouNeed: ["App Note o Carta"],
        officialLinks: ["spidHome"],
        commonErrors: [
            "Scrivere la password accanto al nome utente",
            "Attaccare il foglio con le password sullo schermo del PC"
        ],
        limitations: [
            "Ti costringe comunque a ricordare o recuperare la password separatamente"
        ],
        sources: [
            {
                title: "Consigli per la sicurezza informatica",
                organization: "ACN",
                url: "https://www.acn.gov.it/",
                type: "official",
                usedFor: "Igiene digitale",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Evita errore"]
    },
    {
        title: "Mini scheda dati ricorrenti",
        slug: "mini-scheda-dati-ricorrenti",
        category: "documenti",
        target: ["cittadini", "lavoratori"],
        difficulty: "facile",
        time: "5 minuti",
        benefit: "Velocità incredibile nella compilazione moduli",
        summary: "Tieni un file di testo con i dati che scrivi continuamente: Codice Fiscale, IBAN, Partita IVA, Numero Documento.",
        whyUseful: "Invece di andare ogni volta a prendere il portafoglio, fai copia-incolla. Eviti anche refusi (es. scambiare uno 0 con una O nel CF).",
        steps: [
            "Apri un'app di note sicura",
            "Scrivi i tuoi dati principali e quelli dei tuoi familiari",
            "Usa il copia-incolla durante la compilazione dei form online",
            "Verifica i dati una volta per tutte per essere sicuro che siano corretti"
        ],
        whatYouNeed: ["App Note"],
        officialLinks: ["anprHome"],
        commonErrors: [
            "Sbagliare a digitare il Codice Fiscale e bloccare la pratica",
            "Cercare l'IBAN in vecchie chat di WhatsApp ogni volta"
        ],
        limitations: [
            "Non memorizzare password in questo file, solo dati anagrafici o pubblici"
        ],
        sources: [
            {
                title: "Produttività digitale",
                organization: "Busssola",
                url: "https://busssola.com/",
                type: "expert",
                usedFor: "Metodologia",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Risparmia tempo", "Documenti"]
    },
    {
        title: "Bloccare la carta dall'app",
        slug: "bloccare-carta-da-app",
        category: "soldi",
        target: ["cittadini"],
        difficulty: "facile",
        time: "1 minuto",
        benefit: "Reazione immediata in caso di furto o smarrimento",
        summary: "Impara a trovare il tasto 'Blocca carta' o 'Freeze' nell'app della tua banca PRIMA che ti serva.",
        whyUseful: "In preda al panico, cercare il numero verde da chiamare è difficile. L'app è il modo più veloce per impedire pagamenti non autorizzati.",
        steps: [
            "Apri l'app della tua banca",
            "Vai nella sezione 'Carte' o 'Gestione'",
            "Individua l'opzione per il blocco temporaneo o definitivo",
            "Prova a 'congelarla' e 'scongelarla' se la funzione lo permette"
        ],
        whatYouNeed: ["Smartphone", "App della Banca"],
        officialLinks: ["bancaItaliaSicurezza"],
        commonErrors: [
            "Aspettare di arrivare a casa al PC per bloccare la carta",
            "Dimenticare il PIN dell'app nel momento del bisogno"
        ],
        limitations: [
            "Richiede connessione internet e accesso all'app"
        ],
        sources: [
            {
                title: "Sicurezza dei pagamenti",
                organization: "Banca d'Italia",
                url: "https://www.bancaditalia.it/",
                type: "official",
                usedFor: "Educazione finanziaria",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Urgente"]
    },
    {
        title: "Impostare limiti giornalieri carta",
        slug: "limiti-giornalieri-carta",
        category: "soldi",
        target: ["cittadini", "famiglie"],
        difficulty: "facile",
        time: "2 minuti",
        benefit: "Limiti i danni in caso di clonazione",
        summary: "Abbassa i limiti di spesa giornalieri e mensili della tua carta al minimo necessario per le tue spese abituali.",
        whyUseful: "Se ti clonano la carta e il limite è 500€, non potranno svuotarti il conto se hai 5000€. Puoi alzarli al volo quando devi fare un acquisto grande.",
        steps: [
            "Accedi all'area carte della tua banca",
            "Cerca 'Limiti di spesa' o 'Massimali'",
            "Imposta una soglia di sicurezza (es. 200€ al giorno)",
            "Salva le impostazioni"
        ],
        whatYouNeed: ["App o Sito Banca"],
        officialLinks: ["bancaItaliaSicurezza"],
        commonErrors: [
            "Tenere massimali altissimi per pigrizia",
            "Dimenticare di averli abbassati e trovarsi alla cassa impossibilitati a pagare"
        ],
        limitations: [
            "Alcune banche richiedono un tempo di attesa o un OTP per modificare i limiti"
        ],
        sources: [
            {
                title: "Guida all'uso sicuro delle carte",
                organization: "ABI",
                url: "https://www.abi.it/",
                type: "institutional",
                usedFor: "Linee guida",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Soldi"]
    },
    {
        title: "Disattivare pagamenti online se non usati",
        slug: "disattivare-pagamenti-online",
        category: "soldi",
        target: ["cittadini"],
        difficulty: "facile",
        time: "1 minuto",
        benefit: "Protezione totale contro acquisti web fraudolenti",
        summary: "Molte app bancarie permettono di disabilitare gli acquisti online lasciando attivi quelli fisici.",
        whyUseful: "Se non compri mai online o usi una carta dedicata, disattivare la funzione sulla carta principale annulla il rischio di frodi web.",
        steps: [
            "Vai nelle impostazioni della carta nell'app",
            "Cerca l'interruttore 'Acquisti online' o 'E-commerce'",
            "Spegni la funzione",
            "Riaccendila solo nei 5 minuti in cui devi fare un acquisto"
        ],
        whatYouNeed: ["Smartphone", "App Banca"],
        officialLinks: ["bancaItaliaSicurezza"],
        commonErrors: [
            "Lasciare tutto attivo 'per comodità'",
            "Pensare che basti il 3D Secure per essere sicuri al 100%"
        ],
        limitations: [
            "Un po' scomodo se fai acquisti online frequenti"
        ],
        sources: [
            {
                title: "Difesa dai cyber-attacchi finanziari",
                organization: "CERTFin",
                url: "https://www.certfin.it/",
                type: "official",
                usedFor: "Cybersecurity finanziaria",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Privacy"]
    },
    {
        title: "Attivare notifiche push per i pagamenti",
        slug: "notifiche-push-pagamenti",
        category: "soldi",
        target: ["cittadini", "famiglie"],
        difficulty: "facile",
        time: "2 minuti",
        benefit: "Accorgersi di una truffa nel momento esatto in cui avviene",
        summary: "Attiva gli avvisi in tempo reale per ogni operazione sulla tua carta o conto corrente.",
        whyUseful: "Se ricevi una notifica di una spesa che non hai fatto, puoi bloccare la carta immediatamente, limitando i danni a pochi euro.",
        steps: [
            "Vai nelle impostazioni notifiche dell'app bancaria",
            "Attiva le notifiche push per 'Pagamenti', 'Prelievi' e 'Bonifici'",
            "Se possibile, imposta la soglia a 0€ (notifica per ogni spesa)",
            "Assicurati che l'app abbia il permesso di mostrare notifiche sullo smartphone"
        ],
        whatYouNeed: ["Smartphone", "App Banca"],
        officialLinks: ["bancaItaliaSicurezza"],
        commonErrors: [
            "Usare solo gli SMS (spesso a pagamento) quando le push sono gratis",
            "Ignorare le notifiche pensando sia pubblicità"
        ],
        limitations: [
            "Richiede connessione dati attiva per ricevere la notifica in tempo reale"
        ],
        sources: [
            {
                title: "Sicurezza digitale nei pagamenti",
                organization: "Banca d'Italia",
                url: "https://www.bancaditalia.it/",
                type: "official",
                usedFor: "Best practices",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Soldi"]
    },
    {
        title: "Usare carte virtuali per siti nuovi",
        slug: "carte-virtuali-siti-nuovi",
        category: "soldi",
        target: ["cittadini", "studenti"],
        difficulty: "media",
        time: "2 minuti",
        benefit: "I tuoi dati bancari reali restano segreti",
        summary: "Genera una carta di credito virtuale (usa e getta o di durata limitata) per acquisti su siti che non conosci bene.",
        whyUseful: "Se il sito viene hackerato o è una truffa, la carta virtuale scadrà subito o avrà un budget limitato, proteggendo il tuo conto principale.",
        steps: [
            "Apri l'app della tua banca (es. Revolut, Intesa, Hype)",
            "Seleziona 'Crea carta virtuale'",
            "Scegli 'Usa e getta' (scade dopo un acquisto) o 'Durata' (es. 1 mese)",
            "Usa quei dati per pagare",
            "La carta si autodistruggerà o potrà essere eliminata manualmente"
        ],
        whatYouNeed: ["Banca che supporta carte virtuali"],
        officialLinks: ["bancaItaliaSicurezza"],
        commonErrors: [
            "Usare la carta virtuale per abbonamenti ricorrenti (falliranno al rinnovo)",
            "Pensare che la carta virtuale protegga dalla mancata spedizione del prodotto"
        ],
        limitations: [
            "Non tutte le banche offrono questo servizio gratuitamente"
        ],
        sources: [
            {
                title: "Shopping online sicuro",
                organization: "Polizia Postale",
                url: "https://www.commissariatodips.it/",
                type: "official",
                usedFor: "Consigli acquisti",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Privacy"]
    },
    {
        title: "No salvataggio carte su siti occasionali",
        slug: "no-salvataggio-carte-siti-occasionali",
        category: "soldi",
        target: ["cittadini"],
        difficulty: "facile",
        time: "10 secondi",
        benefit: "Meno tracce dei tuoi dati finanziari sul web",
        summary: "Quando paghi, non spuntare mai 'Salva i dati della carta per la prossima volta' su siti che usi raramente.",
        whyUseful: "Ogni sito che memorizza la tua carta è un potenziale punto di furto dati se il sito subisce un attacco informatico.",
        steps: [
            "Inserisci i dati per il pagamento",
            "Cerca la casella pre-selezionata 'Salva dati' o 'Memorizza'",
            "Togli la spunta",
            "Se l'hai già fatto in passato, vai nel tuo profilo sul sito e rimuovi il metodo di pagamento salvato"
        ],
        whatYouNeed: ["Attenzione durante il checkout"],
        officialLinks: ["pagopaHome"],
        commonErrors: [
            "Dimenticare la spunta attiva per fretta",
            "Salvare la carta su siti di piccoli negozi locali meno protetti"
        ],
        limitations: [
            "Dover reinserire i dati la prossima volta (ma è più sicuro)"
        ],
        sources: [
            {
                title: "Protezione dati e pagamenti",
                organization: "Garante Privacy",
                url: "https://www.garanteprivacy.it/",
                type: "official",
                usedFor: "Linee guida privacy",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Privacy"]
    },
    {
        title: "Controllo IBAN dei bonifici",
        slug: "controllo-iban-bonifici",
        category: "soldi",
        target: ["cittadini", "lavoratori"],
        difficulty: "facile",
        time: "1 minuto",
        benefit: "Eviti di mandare soldi a sconosciuti o truffatori",
        summary: "Prima di confermare un bonifico, verifica sempre che l'intestatario corrisponda davvero all'IBAN inserito.",
        whyUseful: "Esistono virus (Clipper) che cambiano l'IBAN negli appunti quando fai copia-incolla. Finiresti per pagare un truffatore senza accorgertene.",
        steps: [
            "Copia l'IBAN",
            "Incollalo nella tua app bancaria",
            "Rileggi le ultime 4 cifre dell'IBAN originale e confrontale con quelle incollate",
            "Verifica se la tua banca ti mostra il nome dell'intestatario prima di confermare",
            "Usa il servizio CBILL se devi pagare bollettini, è più sicuro dell'IBAN manuale"
        ],
        whatYouNeed: ["IBAN corretto", "App Banca"],
        officialLinks: ["bancaItaliaSicurezza"],
        commonErrors: [
            "Fare affidamento solo sul copia-incolla",
            "Non controllare l'intestatario"
        ],
        limitations: [
            "I bonifici istantanei non sono revocabili, il controllo deve essere preventivo"
        ],
        sources: [
            {
                title: "Sicurezza bonifici online",
                organization: "CERTFin",
                url: "https://www.certfin.it/",
                type: "official",
                usedFor: "Allerta malware",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Soldi"]
    },
    {
        title: "Doppio canale per verifica IBAN",
        slug: "doppio-canale-verifica-iban",
        category: "sicurezza",
        target: ["cittadini", "lavoratori"],
        difficulty: "media",
        time: "2 minuti",
        benefit: "Sei certo che l'IBAN non sia stato manomesso da un hacker",
        summary: "Se ricevi un IBAN via email (es. da un fornitore o per un affitto), chiedi conferma tramite un altro mezzo (es. telefonata o SMS).",
        whyUseful: "Esistono attacchi (BEC - Business Email Compromise) in cui gli hacker entrano nelle email e cambiano l'IBAN sulle fatture per farsi mandare i soldi.",
        steps: [
            "Ricevi l'email con l'IBAN",
            "Non cliccare sul tasto 'Paga ora' nell'email",
            "Chiama il mittente a un numero che già conosci (non quello scritto nell'email sospetta!)",
            "Dettagli le ultime cifre dell'IBAN per conferma"
        ],
        whatYouNeed: ["Telefono", "Contatto verificato"],
        officialLinks: ["bancaItaliaSicurezza"],
        commonErrors: [
            "Fidarsi ciecamente di un PDF arrivato via email",
            "Chiamare il numero indicato nella stessa email potenzialmente falsa"
        ],
        limitations: [
            "Richiede un passaggio in più che può sembrare paranoico, ma salva migliaia di euro"
        ],
        sources: [
            {
                title: "Truffe BEC: come difendersi",
                organization: "Polizia Postale",
                url: "https://www.commissariatodips.it/",
                type: "official",
                usedFor: "Prevenzione frodi",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Soldi"]
    },
    {
        title: "No al finto operatore antifrode",
        slug: "no-finto-operatore-antifrode",
        category: "truffe",
        target: ["cittadini", "anziani"],
        difficulty: "facile",
        time: "1 minuto",
        benefit: "Non regali l'accesso al tuo conto ai truffatori",
        summary: "Se ricevi una chiamata da qualcuno che dice di essere della tua banca e ti chiede di fare operazioni 'per sicurezza', riattacca.",
        whyUseful: "I truffatori usano lo 'spoofing' per far apparire il numero reale della banca sul tuo schermo. La banca vera non ti chiederà mai di spostare soldi o dare codici.",
        steps: [
            "Ascolta il messaggio: se parlano di 'bonifici sospetti' o 'conto clonato', mantieni la calma",
            "Non dare MAI codici OTP o PIN al telefono",
            "Riattacca senza dare spiegazioni",
            "Chiama tu la banca usando il numero scritto dietro la tua carta fisica"
        ],
        whatYouNeed: ["Consapevolezza", "Numero ufficiale banca"],
        officialLinks: ["bancaItaliaSicurezza"],
        commonErrors: [
            "Pensare che siccome il numero è quello della banca, la chiamata sia vera",
            "Farsi prendere dal panico e seguire le istruzioni del truffatore"
        ],
        limitations: [
            "I truffatori sono molto persuasivi e gentili"
        ],
        sources: [
            {
                title: "Vademecum sicurezza bancaria",
                organization: "ABI",
                url: "https://www.abi.it/",
                type: "institutional",
                usedFor: "Allerta truffe",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Urgente"]
    },
    {
        title: "No OTP al telefono da banca",
        slug: "no-otp-telefono-banca",
        category: "sicurezza",
        target: ["cittadini"],
        difficulty: "facile",
        time: "30 secondi",
        benefit: "Protezione della tua identità digitale",
        summary: "Nessun operatore della banca, di Poste o di Amazon ti chiederà mai di leggere a voce il codice OTP che ti è arrivato via SMS.",
        whyUseful: "Il codice OTP serve per confermare un'operazione che *tu* hai iniziato. Se te lo chiedono, vuol dire che *loro* stanno cercando di rubarti l'account.",
        steps: [
            "Ricevi un SMS con un codice (OTP)",
            "Leggi bene il testo dell'SMS: spesso c'è scritto 'Non comunicare a nessuno'",
            "Se qualcuno al telefono te lo chiede, è un truffatore",
            "Chiudi la chiamata immediatamente"
        ],
        whatYouNeed: ["Attenzione ai messaggi"],
        officialLinks: ["spidHome"],
        commonErrors: [
            "Pensare che sia una procedura di verifica standard",
            "Confondere l'operatore del call center con un hacker"
        ],
        limitations: [
            "Nessuna: è una regola ferrea da seguire sempre"
        ],
        sources: [
            {
                title: "Sicurezza dei conti correnti",
                organization: "Banca d'Italia",
                url: "https://www.bancaditalia.it/",
                type: "official",
                usedFor: "Educazione",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Evita errore"]
    },
    {
        title: "Salvare prove di contestazione",
        slug: "salvare-prove-contestazione",
        category: "consumatori",
        target: ["cittadini"],
        difficulty: "media",
        time: "5 minuti",
        benefit: "Vinci i reclami grazie a prove oggettive",
        summary: "In caso di disservizi (treno in ritardo, pacco rotto), salva subito foto, screenshot e orari.",
        whyUseful: "Le aziende spesso chiedono prove che dopo qualche giorno sono difficili da recuperare. Avere tutto pronto accelera il rimborso.",
        steps: [
            "Fai una foto al tabellone dei ritardi o al pacco danneggiato (prima di aprirlo)",
            "Salva l'email di conferma ordine",
            "Segnati il nome dell'operatore se parli con un call center",
            "Tieni tutto in una cartella 'Reclami'"
        ],
        whatYouNeed: ["Smartphone", "App Note"],
        officialLinks: ["paypalRisoluzioni"],
        commonErrors: [
            "Buttare l'imballaggio prima di aver verificato il prodotto",
            "Non fare foto pensando che basti la parola"
        ],
        limitations: [
            "Non garantisce il rimborso, ma lo rende molto più probabile"
        ],
        sources: [
            {
                title: "Guida ai diritti dei consumatori",
                organization: "MIMIT",
                url: "https://www.mimit.gov.it/",
                type: "official",
                usedFor: "Normativa",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Soldi", "Documenti"]
    },
    {
        title: "Causali chiare per i bonifici",
        slug: "causali-chiare-bonifici",
        category: "soldi",
        target: ["cittadini", "lavoratori"],
        difficulty: "facile",
        time: "1 minuto",
        benefit: "Eviti controlli fiscali o problemi con il destinatario",
        summary: "Scrivi sempre causali precise ed esaustive, evitando termini generici come 'regalo' o 'spese'.",
        whyUseful: "Una causale come 'Saldo fattura n. 12 del 2024' è inattaccabile. 'Soldi per te' potrebbe attirare l'attenzione dell'Agenzia delle Entrate per accertamenti.",
        steps: [
            "Indica l'oggetto della spesa",
            "Inserisci riferimenti a contratti o fatture se esistono",
            "Se è un regalo tra parenti, scrivi 'Liberalità per compleanno' o simile",
            "Evita battute o scritte goliardiche (restano per sempre nell'estratto conto)"
        ],
        whatYouNeed: ["Bonifico in corso"],
        officialLinks: ["bancaItaliaSicurezza"],
        commonErrors: [
            "Lasciare la causale vuota",
            "Usare causali scherzose che sembrano sospette ai sistemi automatici"
        ],
        limitations: [
            "Nessuna"
        ],
        sources: [
            {
                title: "Tracciabilità dei pagamenti",
                organization: "Agenzia delle Entrate",
                url: "https://www.agenziaentrate.gov.it/",
                type: "official",
                usedFor: "Norme fiscali",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Evita errore", "Soldi"]
    },
    {
        title: "Controllare abbonamenti Apple/Google/PayPal",
        slug: "controllare-abbonamenti-digitali",
        category: "soldi",
        target: ["cittadini", "studenti"],
        difficulty: "facile",
        time: "5 minuti",
        benefit: "Smetti di pagare per servizi che non usi",
        summary: "Verifica periodicamente le liste di pagamenti ricorrenti nascoste nelle impostazioni dei tuoi account.",
        whyUseful: "Spesso attiviamo prove gratuite e dimentichiamo di disdirle. 5€ al mese per 3 anni sono 180€ buttati.",
        steps: [
            "Su iPhone: Impostazioni -> Tuo Nome -> Abbonamenti",
            "Su Android: Play Store -> Profilo -> Pagamenti e abbonamenti",
            "Su PayPal: Impostazioni -> Pagamenti -> Pagamenti automatici",
            "Disdici tutto quello che non ricordi di usare quotidianamente"
        ],
        whatYouNeed: ["Smartphone", "Account PayPal"],
        officialLinks: ["paypalRisoluzioni"],
        commonErrors: [
            "Cercare di disdire dall'app del servizio invece che dal gestore pagamenti",
            "Pensare che basti cancellare l'app per fermare il pagamento"
        ],
        limitations: [
            "Alcuni abbonamenti fatti via web non appaiono in queste liste"
        ],
        sources: [
            {
                title: "Gestione abbonamenti",
                organization: "Altroconsumo",
                url: "https://www.altroconsumo.it/",
                type: "nonprofit",
                usedFor: "Consigli risparmio",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Soldi", "Risparmia tempo"]
    },
    {
        title: "Screenshot ordini e tracking",
        slug: "screenshot-ordini-tracking",
        category: "consumatori",
        target: ["cittadini"],
        difficulty: "facile",
        time: "30 secondi",
        benefit: "Prova d'acquisto se il sito sparisce o l'email si perde",
        summary: "Fai sempre uno screenshot della pagina di conferma ordine appena hai pagato online.",
        whyUseful: "A volte i siti di e-commerce hanno bug e non inviano l'email. Lo screenshot col numero d'ordine è la tua unica garanzia.",
        steps: [
            "Completa il pagamento",
            "Cattura lo schermo della pagina di riepilogo",
            "Assicurati che si veda bene il numero ordine e l'importo",
            "Salva anche il numero di tracking quando ti viene fornito"
        ],
        whatYouNeed: ["Smartphone o PC"],
        officialLinks: ["paypalRisoluzioni"],
        commonErrors: [
            "Chiudere la pagina pensando 'mi arriverà l'email'",
            "Non salvare il codice di tracciamento della spedizione"
        ],
        limitations: [
            "Nessuna"
        ],
        sources: [
            {
                title: "Shopping online sicuro",
                organization: "Polizia Postale",
                url: "https://www.commissariatodips.it/",
                type: "official",
                usedFor: "Consigli",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Soldi", "Documenti"]
    },
    {
        title: "Attivare 2FA subito",
        slug: "attivare-2fa-subito",
        category: "sicurezza",
        target: ["cittadini", "studenti", "lavoratori"],
        difficulty: "media",
        time: "5 minuti",
        benefit: "Rendi quasi impossibile l'accesso ai tuoi account agli hacker",
        summary: "Attiva l'autenticazione a due fattori (2FA) su tutti i servizi principali: Email, Social, Amazon, Banche.",
        whyUseful: "Anche se un hacker scopre la tua password, non potrà entrare perché gli mancherà il codice che arriva solo sul tuo telefono.",
        steps: [
            "Vai nelle impostazioni di sicurezza del tuo account",
            "Cerca 'Verifica in due passaggi' o '2FA'",
            "Scegli un'app come Google Authenticator o Microsoft Authenticator (meglio degli SMS)",
            "Segui la procedura e salva i codici di recupero"
        ],
        whatYouNeed: ["Smartphone", "App Authenticator"],
        officialLinks: ["spidHome"],
        commonErrors: [
            "Usare solo gli SMS (possono essere intercettati con lo SIM Swap)",
            "Non salvare i codici di backup"
        ],
        limitations: [
            "Un po' più lento l'accesso, ma immensamente più sicuro"
        ],
        sources: [
            {
                title: "Guida alla 2FA",
                organization: "ACN",
                url: "https://www.acn.gov.it/",
                type: "official",
                usedFor: "Standard sicurezza",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Privacy"]
    },
    {
        title: "Usare un Password Manager",
        slug: "usare-password-manager",
        category: "sicurezza",
        target: ["cittadini", "lavoratori"],
        difficulty: "media",
        time: "10 minuti",
        benefit: "Non devi più ricordare mille password e sono tutte sicurissime",
        summary: "Smetti di usare la stessa password ovunque. Usa un software che le crea e le ricorda per te.",
        whyUseful: "Se un sito viene bucato, gli hacker proveranno la tua password su tutti gli altri siti. Se sono diverse e complesse, sei al sicuro.",
        steps: [
            "Scegli un gestore affidabile (es. Bitwarden, 1Password o il Portachiavi iCloud/Google)",
            "Crea una 'Master Password' unica e molto forte (l'unica che dovrai ricordare)",
            "Inizia a salvare le password esistenti",
            "Usa la funzione 'Genera password' per i nuovi siti"
        ],
        whatYouNeed: ["App Password Manager"],
        officialLinks: ["spidHome"],
        commonErrors: [
            "Scrivere la Master Password su un post-it",
            "Dimenticare la Master Password (se la perdi, perdi tutto)"
        ],
        limitations: [
            "Richiede un cambio di abitudini iniziale"
        ],
        sources: [
            {
                title: "Gestione sicura delle password",
                organization: "Garante Privacy",
                url: "https://www.garanteprivacy.it/",
                type: "official",
                usedFor: "Consigli privacy",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Risparmia tempo"]
    },
    {
        title: "Codici backup offline",
        slug: "codici-backup-offline",
        category: "sicurezza",
        target: ["cittadini"],
        difficulty: "media",
        time: "5 minuti",
        benefit: "Non resti chiuso fuori dai tuoi account se perdi il telefono",
        summary: "Quando attivi la 2FA, il sito ti dà dei codici di emergenza. Stampali o scrivili su carta.",
        whyUseful: "Se il tuo telefono si rompe o viene rubato, non potrai ricevere i codici OTP. Senza i codici di backup, potresti perdere l'account per sempre.",
        steps: [
            "Genera i codici di backup nelle impostazioni sicurezza (es. Google, Facebook)",
            "Stampa il PDF o scrivili a mano",
            "Nascondi il foglio in un posto sicuro in casa (non nel portafoglio!)",
            "Considera di darne una copia a una persona di estrema fiducia"
        ],
        whatYouNeed: ["Codici generati dal sito", "Carta e penna"],
        officialLinks: ["spidHome"],
        commonErrors: [
            "Salvare i codici di backup solo sullo stesso telefono che dovrebbero proteggere",
            "Pensare che 'tanto non succederà nulla al telefono'"
        ],
        limitations: [
            "Nessuna"
        ],
        sources: [
            {
                title: "Sicurezza degli account",
                organization: "CERT-AGID",
                url: "https://cert-agid.gov.it/",
                type: "official",
                usedFor: "Best practices",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Evita errore"]
    },
    {
        title: "Controllare sessioni attive Google/Meta",
        slug: "sessioni-attive-google-meta",
        category: "privacy",
        target: ["cittadini", "studenti"],
        difficulty: "media",
        time: "3 minuti",
        benefit: "Scopri subito se qualcuno è entrato nel tuo account",
        summary: "Verifica regolarmente l'elenco dei dispositivi collegati ai tuoi account social ed email.",
        whyUseful: "Potresti aver lasciato l'accesso aperto su un computer dell'università o di un amico. Da qui puoi chiudere quelle sessioni da remoto.",
        steps: [
            "Su Google: Gestisci Account -> Sicurezza -> I tuoi dispositivi",
            "Su Facebook/Instagram: Centro gestione account -> Password e sicurezza -> Dispositivi da cui hai effettuato l'accesso",
            "Controlla se vedi città o telefoni che non riconosci",
            "Clicca su 'Esci' per tutte le sessioni sospette"
        ],
        whatYouNeed: ["Smartphone o PC"],
        officialLinks: ["garanteModulistica"],
        commonErrors: [
            "Ignorare la lista pensando siano bug del sistema",
            "Non cambiare password se si trova un accesso abusivo"
        ],
        limitations: [
            "La geolocalizzazione dei dispositivi non è sempre precisa al 100%"
        ],
        sources: [
            {
                title: "Sicurezza dei social network",
                organization: "Garante Privacy",
                url: "https://www.garanteprivacy.it/temi/social-network",
                type: "official",
                usedFor: "Protezione dati",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Privacy", "Sicurezza"]
    },
    {
        title: "Rimuovere app collegate",
        slug: "rimuovere-app-collegate",
        category: "privacy",
        target: ["cittadini", "studenti"],
        difficulty: "media",
        time: "5 minuti",
        benefit: "Meno aziende che leggono i tuoi dati privati",
        summary: "Controlla a quali app esterne hai dato il permesso di accedere al tuo account Google o Facebook.",
        whyUseful: "Molti siti chiedono 'Accedi con Google'. Spesso quelle app continuano a leggere i tuoi dati anche se non le usi più da anni.",
        steps: [
            "Vai nelle impostazioni sicurezza del tuo account principale",
            "Cerca 'App di terze parti con accesso all'account' o simile",
            "Leggi i permessi di ogni app",
            "Rimuovi l'accesso per tutte quelle che non usi più"
        ],
        whatYouNeed: ["Smartphone o PC"],
        officialLinks: ["garanteModulistica"],
        commonErrors: [
            "Dare permessi 'Leggi email' ad app di giochi o quiz",
            "Sottovalutare quanti dati un'app può raccogliere nel tempo"
        ],
        limitations: [
            "Nessuna"
        ],
        sources: [
            {
                title: "Vademecum Privacy App",
                organization: "Garante Privacy",
                url: "https://www.garanteprivacy.it/",
                type: "official",
                usedFor: "Consigli",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Privacy", "Sicurezza"]
    },
    {
        title: "Autorizzazioni app iPhone/Android",
        slug: "autorizzazioni-app-smartphone",
        category: "privacy",
        target: ["cittadini"],
        difficulty: "facile",
        time: "5 minuti",
        benefit: "Maggiore durata della batteria e più privacy",
        summary: "Revisiona i permessi (fotocamera, microfono, contatti) che hai dato alle app sul tuo telefono.",
        whyUseful: "Perché un'app di torcia o di calcolatrice dovrebbe aver bisogno di leggere i tuoi contatti? Negare permessi inutili protegge la tua vita privata.",
        steps: [
            "Impostazioni -> Privacy -> Gestione autorizzazioni (Android)",
            "Impostazioni -> Privacy e sicurezza (iPhone)",
            "Controlla le categorie critiche: Microfono, Fotocamera, Posizione",
            "Disattiva l'accesso per le app che non ne hanno un bisogno reale per funzionare"
        ],
        whatYouNeed: ["Smartphone"],
        officialLinks: ["garanteModulistica"],
        commonErrors: [
            "Cliccare sempre 'Consenti' a tutto durante l'installazione",
            "Pensare che se l'app è famosa sia per forza rispettosa della privacy"
        ],
        limitations: [
            "Alcune app potrebbero smettere di funzionare correttamente"
        ],
        sources: [
            {
                title: "Guida alla privacy smartphone",
                organization: "Garante Privacy",
                url: "https://www.garanteprivacy.it/",
                type: "official",
                usedFor: "Linee guida",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Privacy", "Sicurezza"]
    },
    {
        title: "No posizione per app inutili",
        slug: "no-posizione-app-inutili",
        category: "privacy",
        target: ["cittadini"],
        difficulty: "facile",
        time: "2 minuti",
        benefit: "Eviti il pedinamento digitale costante",
        summary: "Imposta la localizzazione GPS solo su 'Mentre usi l'app' e solo per app di mappe o trasporti.",
        whyUseful: "Molte app tracciano i tuoi spostamenti in background per vendere i dati a fini pubblicitari. Impedirlo risparmia anche molta batteria.",
        steps: [
            "Vai nelle impostazioni di localizzazione",
            "Controlla la lista delle app con accesso alla posizione",
            "Imposta 'Mai' o 'Chiedi ogni volta' per quasi tutte",
            "Usa 'Posizione approssimativa' dove possibile (es. app del meteo)"
        ],
        whatYouNeed: ["Smartphone"],
        officialLinks: ["garanteModulistica"],
        commonErrors: [
            "Lasciare 'Sempre' attivo per app che non hanno mappe",
            "Tenere il GPS acceso per app di fotoritocco"
        ],
        limitations: [
            "Le app di mappe e navigazione hanno bisogno della posizione esatta per funzionare"
        ],
        sources: [
            {
                title: "Dati di geolocalizzazione",
                organization: "Garante Privacy",
                url: "https://www.garanteprivacy.it/",
                type: "official",
                usedFor: "Tutela dati",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Privacy", "Risparmia tempo"]
    },
    {
        title: "No anteprime notifiche lockscreen",
        slug: "no-anteprime-notifiche-lockscreen",
        category: "privacy",
        target: ["cittadini", "victims"],
        difficulty: "facile",
        time: "1 minuto",
        benefit: "Nessuno può leggere i tuoi messaggi privati sbirciando il telefono",
        summary: "Nascondi il contenuto dei messaggi (WhatsApp, Email, SMS) quando il telefono è bloccato.",
        whyUseful: "Fondamentale per la sicurezza: se ricevi un codice OTP per accedere alla banca, un malintenzionato potrebbe leggerlo dallo schermo senza nemmeno sbloccare il telefono.",
        steps: [
            "Impostazioni -> Notifiche",
            "Cerca 'Mostra anteprime'",
            "Seleziona 'Mai' o 'Solo quando sbloccato'",
            "Verifica che sulla schermata di blocco compaia solo '1 nuovo messaggio' senza il testo"
        ],
        whatYouNeed: ["Smartphone"],
        officialLinks: ["garanteModulistica"],
        commonErrors: [
            "Pensare che sia inutile se si tiene il telefono sempre in mano",
            "Dimenticare di farlo per app sensibili come quelle bancarie"
        ],
        limitations: [
            "Leggera scomodità nel dover sbloccare il telefono per leggere ogni notifica"
        ],
        sources: [
            {
                title: "Sicurezza dei dispositivi mobili",
                organization: "ACN",
                url: "https://www.acn.gov.it/",
                type: "official",
                usedFor: "Consigli tecnici",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Privacy", "Sicurezza"]
    },
    {
        title: "Usare le Passkey dove possibile",
        slug: "usare-passkey",
        category: "sicurezza",
        target: ["cittadini", "studenti"],
        difficulty: "media",
        time: "2 minuti",
        benefit: "Dì addio alle password e al phishing",
        summary: "Le Passkey usano il volto (FaceID) o l'impronta del telefono per farti entrare nei siti, senza digitare nulla.",
        whyUseful: "Le passkey non possono essere rubate con il phishing perché non sono codici che puoi scrivere. Sono il futuro della sicurezza digitale.",
        steps: [
            "Controlla se il sito supporta le Passkey (es. Google, Apple, Amazon, PayPal)",
            "Vai nelle impostazioni di accesso e scegli 'Crea Passkey'",
            "Usa il tuo metodo di sblocco biometrico del telefono",
            "La prossima volta ti basterà un'impronta per entrare"
        ],
        whatYouNeed: ["Smartphone moderno con biometria", "Browser aggiornato"],
        officialLinks: ["spidHome"],
        commonErrors: [
            "Confonderle con i Password Manager (possono lavorare insieme)",
            "Non avere un backup se si perde l'unico dispositivo con la passkey"
        ],
        limitations: [
            "Ancora non tutti i siti le supportano"
        ],
        sources: [
            {
                title: "Standard FIDO e Passkey",
                organization: "FIDO Alliance",
                url: "https://fidoalliance.org/",
                type: "expert",
                usedFor: "Spiegazione tecnica",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Privacy"]
    },
    {
        title: "Email secondaria casuale",
        slug: "email-secondaria-casuale",
        category: "privacy",
        target: ["cittadini", "studenti"],
        difficulty: "facile",
        time: "5 minuti",
        benefit: "La tua email principale resta pulita dallo spam",
        summary: "Crea un indirizzo email dedicato solo a iscrizioni poco importanti, newsletter o sconti.",
        whyUseful: "Se un sito vende i tuoi dati o subisce un attacco, sarà colpita solo l'email secondaria, lasciando al sicuro le comunicazioni di banca e PA.",
        steps: [
            "Crea un nuovo account gratuito (es. su Gmail o Outlook) con un nome neutro",
            "Usalo per tutti i siti di shopping, coupon o forum",
            "Non collegare questo account a dati sensibili o numeri di telefono principali se non necessario"
        ],
        whatYouNeed: ["Nuovo account email"],
        officialLinks: ["garanteModulistica"],
        commonErrors: [
            "Usare la stessa password dell'email principale",
            "Dimenticare la password dell'email secondaria"
        ],
        limitations: [
            "Dover gestire due caselle di posta"
        ],
        sources: [
            {
                title: "Protezione contro lo spam",
                organization: "Garante Privacy",
                url: "https://www.garanteprivacy.it/",
                type: "official",
                usedFor: "Prevenzione",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Privacy", "Risparmia tempo"]
    },
    {
        title: "Usare Alias Email (Hide My Email)",
        slug: "usare-alias-email",
        category: "privacy",
        target: ["cittadini", "studenti"],
        difficulty: "media",
        time: "2 minuti",
        benefit: "Non riveli mai la tua vera email ai siti web",
        summary: "Usa servizi che creano indirizzi email temporanei o alias che inoltrano i messaggi alla tua vera casella.",
        whyUseful: "Se inizi a ricevere spam da un alias, puoi semplicemente 'spegnerlo' senza dover cambiare la tua email principale.",
        steps: [
            "Usa 'Nascondi la mia email' su Apple (iCloud+)",
            "O usa servizi come SimpleLogin, AnonAddy o Firefox Relay",
            "Crea un alias unico per ogni nuovo sito",
            "Se un sito ti bombarda di pubblicità, cancella l'alias"
        ],
        whatYouNeed: ["Servizio di alias (spesso incluso in abbonamenti cloud)"],
        officialLinks: ["garanteModulistica"],
        commonErrors: [
            "Usare alias per comunicazioni con la PA (potrebbero esserci problemi di consegna)",
            "Perdere l'accesso al servizio di alias"
        ],
        limitations: [
            "Alcuni siti bloccano gli indirizzi email troppo palesemente temporanei"
        ],
        sources: [
            {
                title: "Tecniche di difesa della privacy",
                organization: "Electronic Frontier Foundation",
                url: "https://www.eff.org/",
                type: "nonprofit",
                usedFor: "Best practices",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Privacy", "Sicurezza"]
    },
    {
        title: "Controllare i data breach (Have I Been Pwned)",
        slug: "data-breach-checker",
        category: "sicurezza",
        target: ["cittadini"],
        difficulty: "facile",
        time: "1 minuto",
        benefit: "Sai subito se la tua password è nelle mani degli hacker",
        summary: "Inserisci la tua email su siti sicuri che monitorano le violazioni dei database globali.",
        whyUseful: "Potresti non sapere che un sito che usavi 5 anni fa è stato hackerato. Se usi ancora quella password, sei in pericolo.",
        steps: [
            "Vai su haveibeenpwned.com",
            "Inserisci il tuo indirizzo email",
            "Se compare 'Oh no - pwned!', leggi quali siti sono stati colpiti",
            "Cambia immediatamente la password su quei siti e su tutti quelli dove usavi la stessa"
        ],
        whatYouNeed: ["Browser", "Tua email"],
        officialLinks: ["spidHome"],
        commonErrors: [
            "Ignorare il risultato pensando che 'tanto il sito non lo uso più'",
            "Usare siti di controllo non affidabili che rubano le email inserite"
        ],
        limitations: [
            "Non tutti i leak sono nel database, ma i principali sì"
        ],
        sources: [
            {
                title: "Have I Been Pwned",
                organization: "Troy Hunt",
                url: "https://haveibeenpwned.com/",
                type: "expert",
                usedFor: "Strumento di verifica",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Privacy"]
    },
    {
        title: "No invio documenti via chat",
        slug: "no-documenti-via-chat",
        category: "privacy",
        target: ["cittadini", "lavoratori"],
        difficulty: "facile",
        time: "1 minuto",
        benefit: "I tuoi documenti non restano salvati sui server delle app di chat",
        summary: "Evita di mandare foto di Carta d'Identità o Tessera Sanitaria via WhatsApp o Telegram.",
        whyUseful: "Le chat spesso fanno il backup automatico (anche non criptato) sul cloud. Se il tuo account o quello del destinatario viene rubato, l'hacker avrà i tuoi documenti pronti per furti d'identità.",
        steps: [
            "Se devi mandare un documento, usa l'email con allegato protetto",
            "O usa servizi di condivisione file che scadono dopo 1 ora (es. Wormhole)",
            "Se l'hai già mandato, usa la funzione 'Elimina per tutti' nella chat",
            "Chiedi al destinatario di cancellare la foto dalla sua galleria"
        ],
        whatYouNeed: ["Attenzione"],
        officialLinks: ["garanteModulistica"],
        commonErrors: [
            "Mandare il codice fiscale 'al volo' perché è comodo",
            "Pensare che siccome la chat è crittografata, il file sia al sicuro per sempre"
        ],
        limitations: [
            "A volte i datori di lavoro o proprietari di casa lo pretendono via chat"
        ],
        sources: [
            {
                title: "Rischi del furto d'identità",
                organization: "Mef - prevenzione reati finanziari",
                url: "https://www.mef.gov.it/",
                type: "official",
                usedFor: "Prevenzione",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Privacy", "Sicurezza"]
    },
    {
        title: "Watermark sui documenti",
        slug: "watermark-documenti",
        category: "privacy",
        target: ["cittadini"],
        difficulty: "media",
        time: "2 minuti",
        benefit: "Rendi i tuoi documenti inutilizzabili per truffe a tuo nome",
        summary: "Aggiungi una scritta sovrapposta alle scansioni dei documenti indicando l'uso specifico.",
        whyUseful: "Se mandi la carta d'identità per un affitto, scrivi sopra 'SOLO PER AFFITTO CASA MAGGIO 2024'. Se un malintenzionato la ruba, non potrà usarla per aprire conti online a tuo nome.",
        steps: [
            "Usa un'app di fotoritocco o un tool online di watermark",
            "Scrivi un testo semi-trasparente che attraversa tutto il documento",
            "Assicurati che i dati siano ancora leggibili ma che la scritta sia impossibile da rimuovere senza rovinare la foto",
            "Esempio: 'Copia per attivazione SIM Iliad - 20/05/2024'"
        ],
        whatYouNeed: ["App fotoritocco (es. Markup su iPhone, Google Photos)"],
        officialLinks: ["garanteModulistica"],
        commonErrors: [
            "Coprire i dati importanti (nome, scadenza, numero) rendendo il documento inutile",
            "Mettere una scritta troppo piccola o d'angolo"
        ],
        limitations: [
            "Alcuni enti ufficiali rigidi potrebbero rifiutare documenti con watermark"
        ],
        sources: [
            {
                title: "Difesa contro il furto d'identità",
                organization: "Garante Privacy",
                url: "https://www.garanteprivacy.it/",
                type: "official",
                usedFor: "Best practices",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Privacy", "Sicurezza"]
    },
    {
        title: "Sfondo neutro per foto documenti",
        slug: "sfondo-neutro-foto-documenti",
        category: "documenti",
        target: ["cittadini"],
        difficulty: "facile",
        time: "1 minuto",
        benefit: "Accettazione immediata dai sistemi di riconoscimento automatico",
        summary: "Scatta le foto ai documenti su una superficie piana, scura e senza riflessi.",
        whyUseful: "I sistemi di intelligenza artificiale delle banche o della PA rifiutano le foto se vedono le tue dita, ombre o sfondi confusi (es. il copriletto o il tavolo sporco).",
        steps: [
            "Appoggia il documento su un foglio bianco o un tavolo scuro uniforme",
            "Assicurati che ci sia molta luce ma non diretta (per evitare riflessi sulla plastica)",
            "Inquadra dall'alto cercando di far coincidere i bordi del documento con quelli della foto",
            "Verifica che tutto il testo sia leggibile zoomando sulla foto scattata"
        ],
        whatYouNeed: ["Smartphone", "Superficie piana"],
        officialLinks: ["cieHome"],
        commonErrors: [
            "Tenere il documento in mano (le dita coprono dati)",
            "Usare il flash (crea una macchia bianca illeggibile)"
        ],
        limitations: [
            "Nessuna"
        ],
        sources: [
            {
                title: "Guida alla fotografia per CIE",
                organization: "Ministero dell'Interno",
                url: "https://www.cartaidentita.interno.gov.it/",
                type: "official",
                usedFor: "Standard tecnici",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Evita errore", "Documenti"]
    },
    {
        title: "Strategia di Backup 3-2-1",
        slug: "backup-3-2-1",
        category: "sicurezza",
        target: ["cittadini", "lavoratori"],
        difficulty: "media",
        time: "20 minuti",
        benefit: "Impossibile perdere i tuoi documenti importanti",
        summary: "Segui la regola d'oro del backup per non perdere mai nulla: 3 copie, 2 supporti diversi, 1 copia fuori casa.",
        whyUseful: "Un hard disk può rompersi, una casa può allagarsi, un account cloud può essere hackerato. Con il 3-2-1 sei coperto in ogni scenario.",
        steps: [
            "Tieni i file sul PC (Copia 1)",
            "Copia i file su un hard disk esterno o chiavetta USB (Copia 2)",
            "Carica i file su un servizio cloud protetto (Copia 3 - fuori casa)",
            "Aggiorna i backup almeno una volta al mese"
        ],
        whatYouNeed: ["Hard Disk esterno", "Account Cloud (Google, iCloud, Dropbox)"],
        officialLinks: ["acnHome"],
        commonErrors: [
            "Pensare che tenere i file 'solo sul cloud' sia un backup (se perdi l'accesso, perdi tutto)",
            "Non testare mai se i file sull'hard disk si aprono ancora"
        ],
        limitations: [
            "Richiede un minimo di spesa per l'hard disk e tempo per la gestione"
        ],
        sources: [
            {
                title: "Giornata Mondiale del Backup",
                organization: "World Backup Day",
                url: "https://www.worldbackupday.com/",
                type: "expert",
                usedFor: "Metodologia",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Evita errore"]
    },
    {
        title: "Cambio password dopo phishing",
        slug: "cambio-password-dopo-phishing",
        category: "sicurezza",
        target: ["cittadini", "victims"],
        difficulty: "media",
        time: "5 minuti",
        benefit: "Blocchi l'hacker prima che possa fare danni",
        summary: "Se hai cliccato su un link sospetto e inserito i dati, devi agire in pochi secondi.",
        whyUseful: "Molti truffatori non usano i dati subito, ma aspettano la notte. Se cambi la password immediatamente e attivi la 2FA, rendi i dati rubati inutili.",
        steps: [
            "Vai sul sito VERO (non quello del link!) e cambia la password",
            "Se il sito è lo stesso di altri servizi (es. stessa password per email e social), cambiale tutte",
            "Disconnetti tutte le sessioni attive",
            "Controlla se sono stati aggiunti numeri di telefono o email di recupero non tuoi"
        ],
        whatYouNeed: ["Accesso al sito ufficiale"],
        officialLinks: ["commissariatodips"],
        commonErrors: [
            "Pensare 'vabbè, ormai hanno i dati' e non fare nulla",
            "Cambiare solo la password del sito fake (che non serve a nulla)"
        ],
        limitations: [
            "Se l'hacker è stato più veloce di te a cambiarti l'email di recupero, devi contattare l'assistenza"
        ],
        sources: [
            {
                title: "Cosa fare in caso di phishing",
                organization: "Polizia Postale",
                url: "https://www.commissariatodips.it/",
                type: "official",
                usedFor: "Guida emergenza",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Urgente"]
    },
    {
        title: "OTP dato = account compromesso",
        slug: "otp-dato-account-compromesso",
        category: "sicurezza",
        target: ["cittadini"],
        difficulty: "facile",
        time: "30 secondi",
        benefit: "Consapevolezza del rischio reale",
        summary: "Ricorda: chiunque abbia il tuo codice OTP ha in quel momento il controllo totale del tuo account.",
        whyUseful: "Spesso i truffatori dicono che il codice serve per 'annullare un'operazione'. In realtà lo stanno usando per confermare il cambio della tua password.",
        steps: [
            "Non dettare mai codici arrivati via SMS",
            "Non inoltrare mai screenshot di messaggi con codici",
            "Se lo hai fatto per errore, considera l'account come già rubato e segui le procedure di recupero d'urgenza"
        ],
        whatYouNeed: ["Consapevolezza"],
        officialLinks: ["spidHome"],
        commonErrors: [
            "Fidarsi della voce gentile al telefono",
            "Pensare che un codice 'usa e getta' non sia pericoloso"
        ],
        limitations: [
            "Nessuna"
        ],
        sources: [
            {
                title: "Sicurezza informatica per i cittadini",
                organization: "ACN",
                url: "https://www.acn.gov.it/",
                type: "official",
                usedFor: "Best practices",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Evita errore"]
    },
    {
        title: "No pagamento ricatti online",
        slug: "no-pagamento-ricatti-online",
        category: "truffe",
        target: ["cittadini", "victims"],
        difficulty: "avanzata",
        time: "10 minuti",
        benefit: "Interrompi il ciclo dell'estorsione",
        summary: "Se qualcuno ti ricatta minacciando di diffondere foto o dati (sextortion), NON PAGARE MAI.",
        whyUseful: "Se paghi una volta, il truffatore capisce che hai paura e chiederà sempre più soldi. Il pagamento non garantisce mai la cancellazione dei dati.",
        steps: [
            "Smetti subito di rispondere al ricattatore",
            "NON pagare assolutamente nulla",
            "Fai screenshot di tutte le minacce e del profilo del ricattatore",
            "Segnala subito al Commissariato di PS Online o al Garante Privacy (per Revenge Porn)"
        ],
        whatYouNeed: ["Coraggio", "Screenshot delle prove"],
        officialLinks: ["garanteRevengePorn", "psSegnalaOnline"],
        commonErrors: [
            "Pagare 'solo questa volta' sperando che finisca",
            "Cancellare tutto per la vergogna (perdi le prove per la Polizia)"
        ],
        limitations: [
            "Il rischio di diffusione esiste, ma il pagamento lo alimenta invece di fermarlo"
        ],
        sources: [
            {
                title: "Vittime di sextortion",
                organization: "Polizia Postale",
                url: "https://www.commissariatodips.it/",
                type: "official",
                usedFor: "Soccorso vittime",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Urgente"]
    },
    {
        title: "Salvare prove prima di bloccare",
        slug: "salvare-prove-prima-blocco",
        category: "sicurezza",
        target: ["victims"],
        difficulty: "media",
        time: "5 minuti",
        benefit: "Aver prove legali anche se il truffatore sparisce",
        summary: "Prima di bloccare un profilo molesto o un truffatore, salva tutto ciò che può servire alla Polizia.",
        whyUseful: "Una volta bloccato, alcune chat potrebbero sparire o potresti non riuscire più a trovare l'URL del profilo. Gli screenshot sono necessari per la denuncia.",
        steps: [
            "Copia il link (URL) del profilo del truffatore",
            "Fai screenshot della conversazione completa",
            "Salva eventuali messaggi vocali o foto ricevute",
            "Solo DOPO aver salvato tutto, procedi al blocco e alla segnalazione sulla piattaforma"
        ],
        whatYouNeed: ["Smartphone", "App Note"],
        officialLinks: ["psDenunceWeb"],
        commonErrors: [
            "Bloccare subito per la rabbia e perdere la cronologia",
            "Dimenticare di copiare l'ID utente numerico (se disponibile)"
        ],
        limitations: [
            "Richiede sangue freddo in un momento difficile"
        ],
        sources: [
            {
                title: "Come denunciare reati informatici",
                organization: "Polizia di Stato",
                url: "https://www.poliziadistato.it/",
                type: "official",
                usedFor: "Istruzioni denunce",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Documenti"]
    },
    {
        title: "No cancellazione chat di minacce",
        slug: "no-cancellazione-chat-minacce",
        category: "sicurezza",
        target: ["victims", "minors"],
        difficulty: "media",
        time: "2 minuti",
        benefit: "Mantieni il valore legale delle prove",
        summary: "Non cancellare le conversazioni in cui ricevi minacce o insulti, anche se ti fanno soffrire.",
        whyUseful: "Per un'eventuale causa per stalking o cyberbullismo, la chat originale sul telefono è molto più forte di un semplice screenshot.",
        steps: [
            "Fai un backup della chat specifica (es. esporta chat su WhatsApp)",
            "Non cancellare il messaggio dal telefono",
            "Se hai paura che qualcuno lo veda, usa le funzioni 'Archivia' o 'Lucchetto chat'",
            "Consegna il telefono integro alla Polizia se decidi di denunciare"
        ],
        whatYouNeed: ["Smartphone"],
        officialLinks: ["emergenzaInfanzia114"],
        commonErrors: [
            "Cancellare tutto per 'voltare pagina'",
            "Usare app che cancellano i messaggi automaticamente"
        ],
        limitations: [
            "Dolore psicologico nel mantenere le minacce sul dispositivo"
        ],
        sources: [
            {
                title: "Guida per vittime di cyberbullismo",
                organization: "Generazioni Connesse",
                url: "https://www.generazioniconnesse.it/",
                type: "institutional",
                usedFor: "Supporto",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Documenti"]
    },
    {
        title: "Screenshot con data e ora",
        slug: "screenshot-con-data-ora",
        category: "sicurezza",
        target: ["victims", "cittadini"],
        difficulty: "facile",
        time: "30 secondi",
        benefit: "Prova contestualizzata nel tempo",
        summary: "Quando fai uno screenshot per una denuncia, assicurati che si veda l'orario del telefono e la data.",
        whyUseful: "Uno screenshot 'ritagliato' solo sul testo è meno credibile. Vedere l'ora, il livello della batteria e le icone di sistema aiuta a dimostrare l'autenticità.",
        steps: [
            "Non ritagliare lo screenshot: lascialo intero",
            "Se possibile, includi la barra delle notifiche in alto",
            "Se il sistema non mostra la data, scorri la tendina delle notifiche e fai lo screenshot da lì",
            "Salva il file senza rinominarlo subito per mantenere i metadati originali"
        ],
        whatYouNeed: ["Smartphone"],
        officialLinks: ["psSegnalaOnline"],
        commonErrors: [
            "Usare app che mettono filtri o ritagliano automaticamente",
            "Cancellare l'originale dopo averlo inviato a un amico"
        ],
        limitations: [
            "Nessuna"
        ],
        sources: [
            {
                title: "Acquisizione forense delle prove digitali",
                organization: "Associazione Informatica Forense",
                url: "https://www.informaticaforense.it/",
                type: "expert",
                usedFor: "Consigli tecnici",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Documenti"]
    },
    {
        title: "Non avvisare il truffatore",
        slug: "non-avvisare-truffatore",
        category: "truffe",
        target: ["victims"],
        difficulty: "facile",
        time: "1 minuto",
        benefit: "Aumenti le possibilità che la Polizia lo prenda",
        summary: "Se capisci di essere vittima di una truffa, non scrivere al truffatore 'Ti ho scoperto, ora ti denuncio'.",
        whyUseful: "Se lo avvisi, il truffatore cancellerà subito il profilo, i conti correnti e tutte le tracce digitali prima che la Polizia possa intervenire.",
        steps: [
            "Smetti di inviare soldi o dati",
            "Prendi tempo con una scusa se necessario per raccogliere prove",
            "Vai subito alla Polizia o in Banca",
            "Mantieni il silenzio radio con il criminale"
        ],
        whatYouNeed: ["Autocontrollo"],
        officialLinks: ["psDenunceWeb"],
        commonErrors: [
            "Insultare il truffatore per sfogarsi",
            "Minacciare denunce su Facebook taggandolo"
        ],
        limitations: [
            "Difficile da fare quando si è arrabbiati"
        ],
        sources: [
            {
                title: "Indagini informatiche",
                organization: "Polizia Postale",
                url: "https://www.commissariatodips.it/",
                type: "official",
                usedFor: "Prevenzione",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Evita errore"]
    },
    {
        title: "Contatto banca solo su numero ufficiale",
        slug: "contatto-banca-numero-ufficiale",
        category: "soldi",
        target: ["cittadini"],
        difficulty: "facile",
        time: "2 minuti",
        benefit: "Certezza assoluta di parlare con la tua banca",
        summary: "Non richiamare mai i numeri che ti hanno chiamato. Digita tu il numero verde ufficiale.",
        whyUseful: "Il 'caller ID spoofing' permette ai truffatori di far comparire il nome 'BANCA' sul tuo display. Richiamando quel numero dal registro chiamate, potresti finire di nuovo dal truffatore.",
        steps: [
            "Ricevi una chiamata sospetta",
            "Riattacca",
            "Prendi la tua carta di credito/debito fisica",
            "Leggi il numero verde sul retro e digitalo manualmente sul tastierino"
        ],
        whatYouNeed: ["Carta fisica", "Telefono"],
        officialLinks: ["bancaItaliaSicurezza"],
        commonErrors: [
            "Usare la funzione 'Richiama' dello smartphone",
            "Cercare il numero su siti di assistenza non ufficiali"
        ],
        limitations: [
            "I tempi di attesa dei numeri verdi ufficiali possono essere lunghi"
        ],
        sources: [
            {
                title: "Frodi telefoniche e bancarie",
                organization: "CERTFin",
                url: "https://www.certfin.it/",
                type: "official",
                usedFor: "Allerta truffe",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Soldi"]
    },
    {
        title: "Controllo mittente email reale",
        slug: "controllo-mittente-email",
        category: "sicurezza",
        target: ["cittadini"],
        difficulty: "media",
        time: "1 minuto",
        benefit: "Smascheri il 90% delle email di phishing",
        summary: "Non guardare il nome del mittente, ma l'indirizzo email completo tra le parentesi angolari < >.",
        whyUseful: "Il mittente può chiamarsi 'Poste Italiane', ma se l'email tra parentesi è 'info@topolino123.com', è palesemente una truffa.",
        steps: [
            "Apri l'email sospetta",
            "Clicca o tocca sul nome del mittente per espandere i dettagli",
            "Leggi l'indirizzo dopo la @",
            "Se non corrisponde al sito ufficiale (es. @poste.it), cancella tutto"
        ],
        whatYouNeed: ["App Email"],
        officialLinks: ["spidHome"],
        commonErrors: [
            "Fidarsi del logo e dei colori nell'email",
            "Pensare che l'indirizzo sia vero solo perché contiene la parola 'servizio-clienti'"
        ],
        limitations: [
            "Hacker esperti possono usare tecniche di 'email spoofing' più sofisticate"
        ],
        sources: [
            {
                title: "Come riconoscere il phishing",
                organization: "ACN",
                url: "https://www.acn.gov.it/",
                type: "official",
                usedFor: "Educazione digitale",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Evita errore"]
    },
    {
        title: "No urgenza o paura nei messaggi",
        slug: "no-urgenza-paura-messaggi",
        category: "truffe",
        target: ["cittadini", "anziani"],
        difficulty: "facile",
        time: "1 minuto",
        benefit: "Mantiene la lucidità per evitare errori",
        summary: "Se un messaggio ti mette fretta ('Conto bloccato!', 'Hai 2 ore per pagare') o ti spaventa, è quasi certamente una truffa.",
        whyUseful: "La PA e le banche usano toni formali e tempi certi. L'urgenza estrema serve al truffatore per non farti ragionare e farti agire d'impulso.",
        steps: [
            "Fai tre respiri profondi",
            "Chiediti: 'Perché la banca mi scrive via SMS alle 11 di sera?'",
            "Cerca il testo del messaggio su Google per vedere se è una truffa nota",
            "Non cliccare su nulla"
        ],
        whatYouNeed: ["Senso critico"],
        officialLinks: ["pagopaPhishing"],
        commonErrors: [
            "Rispondere subito per paura di conseguenze legali",
            "Inserire i dati 'per sbloccare la situazione' velocemente"
        ],
        limitations: [
            "Nessuna"
        ],
        sources: [
            {
                title: "Ingegneria sociale e truffe",
                organization: "Polizia Postale",
                url: "https://www.commissariatodips.it/",
                type: "official",
                usedFor: "Prevenzione",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Urgente"]
    },
    {
        title: "Cerca frasi sospette su Google",
        slug: "cerca-frasi-sospette-google",
        category: "truffe",
        target: ["cittadini"],
        difficulty: "facile",
        time: "2 minuti",
        benefit: "Verifica in tempo reale se altri hanno ricevuto lo stesso inganno",
        summary: "Copia e incolla una parte del testo del messaggio ricevuto su Google seguito dalla parola 'truffa'.",
        whyUseful: "I truffatori inviano lo stesso messaggio a migliaia di persone. Qualcuno lo avrà sicuramente già segnalato online sui forum o sui social.",
        steps: [
            "Seleziona il testo strano dell'email o SMS",
            "Incollalo nella barra di ricerca di Google",
            "Aggiungi 'truffa' o 'pericolo'",
            "Leggi i primi risultati: se vedi siti come 'Truffa.net' o articoli di giornale, cancella il messaggio"
        ],
        whatYouNeed: ["Browser"],
        officialLinks: ["commissariatodips"],
        commonErrors: [
            "Cercare solo il mittente e non il testo",
            "Fidarsi se non si trovano risultati subito (potrebbe essere una truffa nuova)"
        ],
        limitations: [
            "Richiede che la truffa sia già stata segnalata da altri"
        ],
        sources: [
            {
                title: "Community anti-truffa",
                organization: "Truffa.net",
                url: "https://www.truffa.net/",
                type: "expert",
                usedFor: "Ricerca segnalazioni",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Sicurezza", "Risparmia tempo"]
    },
    {
        title: "Pagina SOS Busssola",
        slug: "pagina-sos-busssola",
        category: "emergenze",
        target: ["victims", "cittadini"],
        difficulty: "facile",
        time: "30 secondi",
        benefit: "Accesso immediato ai numeri che contano",
        summary: "Salva nei preferiti del browser o sulla home del telefono la pagina con tutti i contatti di emergenza.",
        whyUseful: "In un momento di panico (incidente, aggressione, truffa in corso) non avrai tempo di cercare numeri. Averli a un click di distanza salva la vita.",
        steps: [
            "Vai sulla sezione SOS di Busssola",
            "Clicca sul tasto 'Condividi' o 'Impostazioni' del browser",
            "Scegli 'Aggiungi a Home' o 'Crea scorciatoia'",
            "Metti l'icona in prima pagina sul tuo smartphone"
        ],
        whatYouNeed: ["Smartphone"],
        officialLinks: ["emergenza112", "antiviolenza1522"],
        commonErrors: [
            "Pensare di ricordare i numeri a memoria (sotto stress si dimenticano)",
            "Non testare se i link 'chiama ora' funzionano"
        ],
        limitations: [
            "Nessuna"
        ],
        sources: [
            {
                title: "Emergenze e Soccorso",
                organization: "Stato Italiano",
                url: "https://www.112.gov.it/",
                type: "official",
                usedFor: "Numeri emergenza",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Urgente", "Sicurezza"]
    },
    {
        title: "Foto contatori ingresso casa",
        slug: "foto-contatori-ingresso-casa",
        category: "casa",
        target: ["cittadini"],
        difficulty: "facile",
        time: "2 minuti",
        benefit: "Eviti di pagare consumi non tuoi al subentro",
        summary: "Fai una foto leggibile di tutti i contatori (Luce, Gas, Acqua) il giorno esatto in cui ricevi le chiavi.",
        whyUseful: "Le società di vendita potrebbero addebitarti i consumi del vecchio inquilino. La foto con la data è la tua prova indiscutibile per la voltura.",
        steps: [
            "Individua i contatori",
            "Scatta una foto nitida dove si veda il numero di matricola e la lettura",
            "Assicurati che la foto abbia i metadati della data corretti",
            "Invia la foto via email a te stesso come ulteriore prova temporale"
        ],
        whatYouNeed: ["Smartphone", "Luce per i contatori bui"],
        officialLinks: ["pagopaHome"],
        commonErrors: [
            "Fare foto sfocate dove i numeri non si leggono",
            "Dimenticare il contatore dell'acqua (spesso in posti scomodi)"
        ],
        limitations: [
            "Richiede l'accesso fisico ai contatori"
        ],
        sources: [
            {
                title: "Guida alla voltura",
                organization: "ARERA",
                url: "https://www.arera.it/",
                type: "official",
                usedFor: "Normativa energia",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Casa", "Soldi"]
    },
    {
        title: "Foto stato immobile ingresso",
        slug: "foto-stato-immobile-ingresso",
        category: "casa",
        target: ["cittadini"],
        difficulty: "facile",
        time: "15 minuti",
        benefit: "Proteggi la tua cauzione da richieste ingiuste",
        summary: "Documenta con foto e video ogni piccolo danno, macchia o malfunzionamento prima di traslocare.",
        whyUseful: "A fine contratto, il proprietario potrebbe accusarti di aver rotto qualcosa che era già rotto. Senza foto, sarà la tua parola contro la sua.",
        steps: [
            "Gira ogni stanza scattando foto ai dettagli: angoli dei muri, pavimenti, infissi, elettrodomestici",
            "Apri e chiudi tutte le finestre e i rubinetti",
            "Crea un album 'Casa [Indirizzo] Inizio' nel cloud",
            "Manda una mail al proprietario con le foto dei danni principali come promemoria"
        ],
        whatYouNeed: ["Smartphone", "Buona illuminazione"],
        officialLinks: ["pagopaHome"],
        commonErrors: [
            "Fidarsi delle promesse verbali ('tranquillo, so che è rotto')",
            "Dimenticare di fotografare l'interno del forno o del frigo"
        ],
        limitations: [
            "Lungo da fare, ma fondamentale"
        ],
        sources: [
            {
                title: "Locazione: obblighi del conduttore",
                organization: "Unione Piccoli Proprietari Immobiliari",
                url: "https://www.uppi.it/",
                type: "institutional",
                usedFor: "Consigli legali",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Casa", "Documenti"]
    },
    {
        title: "Ricevute cauzione e bonifici",
        slug: "ricevute-cauzione-bonifici",
        category: "casa",
        target: ["cittadini"],
        difficulty: "facile",
        time: "2 minuti",
        benefit: "Prova legale del deposito cauzionale",
        summary: "Salva separatamente la ricevuta del bonifico della cauzione e non perderla mai fino a fine affitto.",
        whyUseful: "La cauzione non è un pagamento, ma un deposito. Deve essere restituita con gli interessi. Se perdi la prova del versamento dopo 4-5 anni, riaverla sarà difficilissimo.",
        steps: [
            "Fai il bonifico con causale 'Deposito cauzionale contratto affitto [Data]'",
            "Scarica il PDF della ricevuta dalla banca",
            "Salvalo nella cartella 'Casa' e stampalo per tenerlo insieme al contratto cartaceo"
        ],
        whatYouNeed: ["App Banca", "Cartella Documenti"],
        officialLinks: ["pagopaHome"],
        commonErrors: [
            "Pagare la cauzione in contanti senza ricevuta scritta e firmata",
            "Confondere la cauzione con la prima mensilità"
        ],
        limitations: [
            "Nessuna"
        ],
        sources: [
            {
                title: "Legge sulle locazioni (431/98)",
                organization: "Parlamento Italiano",
                url: "https://www.normattiva.it/",
                type: "official",
                usedFor: "Riferimento normativo",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Casa", "Soldi"]
    },
    {
        title: "Voltura/subentro canali ufficiali",
        slug: "voltura-subentro-canali-ufficiali",
        category: "casa",
        target: ["cittadini"],
        difficulty: "media",
        time: "10 minuti",
        benefit: "Eviti contratti truffa con prezzi fuori mercato",
        summary: "Gestisci i passaggi delle utenze solo tramite i siti o i call center ufficiali dei fornitori che hai scelto.",
        whyUseful: "Diffida da chi ti chiama dicendo 'il suo fornitore sta chiudendo'. Sono truffe per farti cambiare contratto a tua insaputa.",
        steps: [
            "Scegli il fornitore (controlla su Portale Offerte ARERA)",
            "Vai sul sito ufficiale del fornitore scelto",
            "Inserisci i codici POD (luce) e PDR (gas)",
            "Segui la procedura online guidata"
        ],
        whatYouNeed: ["Bolletta del precedente inquilino", "Documento identità"],
        officialLinks: ["pagopaHome"],
        commonErrors: [
            "Accettare proposte telefoniche da numeri sconosciuti",
            "Non chiedere il 'codice di migrazione' se stai cambiando"
        ],
        limitations: [
            "A volte i tempi tecnici di attivazione possono arrivare a 2-3 settimane"
        ],
        sources: [
            {
                title: "Portale Offerte ARERA",
                organization: "ARERA",
                url: "https://www.ilportaleofferte.it/",
                type: "official",
                usedFor: "Confronto prezzi",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Casa", "Risparmia tempo"]
    },
    {
        title: "Codice POD/PDR bolletta",
        slug: "codice-pod-pdr-bolletta",
        category: "casa",
        target: ["cittadini"],
        difficulty: "facile",
        time: "1 minuto",
        benefit: "Individui la tua utenza senza possibilità di errore",
        summary: "Il POD e il PDR sono il 'codice fiscale' del tuo contatore. Segnateli separatamente.",
        whyUseful: "Senza questi codici non puoi fare nulla: né cambiare fornitore, né segnalare guasti, né fare volture. Averli pronti velocizza ogni chiamata all'assistenza.",
        steps: [
            "Prendi l'ultima bolletta",
            "Cerca i codici (POD inizia con IT..., PDR è numerico di 14 cifre)",
            "Segnali nell'app Note sotto la voce 'Dati Casa'",
            "Scrivili con un pennarello indelebile vicino al contatore fisico per comodità"
        ],
        whatYouNeed: ["Bolletta", "App Note"],
        officialLinks: ["pagopaHome"],
        commonErrors: [
            "Confondere il codice cliente con il POD/PDR",
            "Sbagliare una cifra (rendendo impossibile trovare l'utenza)"
        ],
        limitations: [
            "Nessuna"
        ],
        sources: [
            {
                title: "Glossario bolletta",
                organization: "ARERA",
                url: "https://www.arera.it/it/glossario.htm",
                type: "official",
                usedFor: "Definizioni",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Casa", "Documenti"]
    },
    {
        title: "Contratto di affitto in PDF",
        slug: "contratto-affitto-pdf",
        category: "casa",
        target: ["cittadini"],
        difficulty: "facile",
        time: "5 minuti",
        benefit: "Consultazione rapida delle clausole e delle scadenze",
        summary: "Scansiona il contratto di affitto completo di tutte le pagine e i timbri di registrazione.",
        whyUseful: "In caso di guasti o discussioni con il proprietario, devi sapere subito chi paga cosa. Averlo sul telefono evita di doverlo cercare in polverosi faldoni.",
        steps: [
            "Scansiona ogni pagina del contratto",
            "Includi la ricevuta del modello RLI (registrazione)",
            "Unisci tutto in un unico PDF chiamato 'Affitto_Indirizzo_Data.pdf'",
            "Salvalo nella tua cartella 'Documenti essenziali'"
        ],
        whatYouNeed: ["Scanner o App", "Contratto cartaceo"],
        officialLinks: ["pagopaHome"],
        commonErrors: [
            "Scansionare solo la prima pagina",
            "Non includere gli allegati (es. elenco mobili)"
        ],
        limitations: [
            "Nessuna"
        ],
        sources: [
            {
                title: "Contratti di locazione",
                organization: "Agenzia delle Entrate",
                url: "https://www.agenziaentrate.gov.it/",
                type: "official",
                usedFor: "Normativa",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Casa", "Documenti"]
    },
    {
        title: "Controllo registrazione contratto",
        slug: "controllo-registrazione-contratto",
        category: "casa",
        target: ["cittadini"],
        difficulty: "media",
        time: "5 minuti",
        benefit: "Certezza che il contratto sia legale e depositato",
        summary: "Verifica sul portale dell'Agenzia delle Entrate che il tuo contratto di affitto sia stato effettivamente registrato.",
        whyUseful: "Se il proprietario non registra il contratto, tu non puoi detrarre l'affitto dalle tasse e non sei tutelato legalmente in caso di sfratto o controversie.",
        steps: [
            "Accedi all'area riservata dell'Agenzia delle Entrate con SPID/CIE",
            "Vai in 'Servizi per' -> 'Fabbricati e terreni'",
            "Cerca 'Contratti di locazione'",
            "Verifica che compaia il tuo contratto attuale"
        ],
        whatYouNeed: ["SPID o CIE"],
        officialLinks: ["adeCfTs"],
        commonErrors: [
            "Fidarsi della parola del proprietario senza controllare",
            "Non sapere che la registrazione deve avvenire entro 30 giorni"
        ],
        limitations: [
            "Richiede accesso digitale"
        ],
        sources: [
            {
                title: "Registrazione contratti di locazione",
                organization: "Agenzia delle Entrate",
                url: "https://www.agenziaentrate.gov.it/",
                type: "official",
                usedFor: "Verifica",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Casa", "Soldi"]
    },
    {
        title: "Scadenze disdetta sul calendario",
        slug: "scadenze-disdetta-calendario",
        category: "casa",
        target: ["cittadini"],
        difficulty: "facile",
        time: "2 minuti",
        benefit: "Eviti di pagare mesi di affitto in più per dimenticanza",
        summary: "Imposta un promemoria per la disdetta del contratto di affitto (di solito 6 mesi prima della scadenza).",
        whyUseful: "Se decidi di andartene ma dimentichi i termini di preavviso, il contratto potrebbe rinnovarsi automaticamente per anni o potresti dover pagare mesi extra a vuoto.",
        steps: [
            "Controlla sul contratto quanti mesi di preavviso servono (es. 6 mesi)",
            "Guarda la data di scadenza del contratto (es. 4+4)",
            "Metti un avviso sul calendario 7 mesi prima della scadenza ('Decidere se dare disdetta')",
            "Metti un secondo avviso alla data limite esatta"
        ],
        whatYouNeed: ["Contratto", "App Calendario"],
        officialLinks: ["pagopaHome"],
        commonErrors: [
            "Confondere la scadenza dei primi 4 anni con quella finale",
            "Pensare che basti una telefonata (serve quasi sempre PEC o raccomandata)"
        ],
        limitations: [
            "Nessuna"
        ],
        sources: [
            {
                title: "Guida all'inquilino",
                organization: "Sunia",
                url: "https://www.sunia.it/",
                type: "nonprofit",
                usedFor: "Consigli pratici",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Casa", "Soldi"]
    },
    {
        title: "Inventario fotografico casa",
        slug: "inventario-fotografico-casa",
        category: "casa",
        target: ["cittadini"],
        difficulty: "media",
        time: "30 minuti",
        benefit: "Velocizza il rimborso assicurativo in caso di furto o incendio",
        summary: "Fai una carrellata di foto o un video a tutti i tuoi beni di valore (TV, PC, Gioielli, Mobili) all'interno della casa.",
        whyUseful: "In caso di sventura, dimostrare all'assicurazione o alla Polizia cosa avevi esattamente in casa è difficilissimo a memoria. Le foto sono la prova del possesso.",
        steps: [
            "Fai un video lento passando per tutte le stanze",
            "Apri gli armadi e i cassetti principali",
            "Fai foto ravvicinate alle etichette con i numeri di serie degli elettrodomestici",
            "Salva il tutto su un cloud diverso da quello del telefono (es. Google Drive o Dropbox)"
        ],
        whatYouNeed: ["Smartphone", "Cloud"],
        officialLinks: ["psDenunceWeb"],
        commonErrors: [
            "Tenere le foto solo sul telefono (che potrebbe essere rubato insieme al resto)",
            "Non aggiornare l'inventario quando compri cose nuove"
        ],
        limitations: [
            "Nessuna"
        ],
        sources: [
            {
                title: "Consigli per la sicurezza domestica",
                organization: "Polizia di Stato",
                url: "https://www.poliziadistato.it/",
                type: "official",
                usedFor: "Prevenzione furti",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Casa", "Sicurezza"]
    },
    {
        title: "PEC o Raccomandata per le prove",
        slug: "pec-raccomandata-prove",
        category: "documenti",
        target: ["cittadini", "lavoratori"],
        difficulty: "media",
        time: "10 minuti",
        benefit: "Il destinatario non potrà mai dire 'non ho ricevuto nulla'",
        summary: "Per ogni comunicazione importante (disdetta, reclamo, sollecito), usa solo mezzi tracciabili legalmente.",
        whyUseful: "WhatsApp, email semplici o telefonate non hanno valore in tribunale per dimostrare una notifica. La PEC e la Raccomandata A/R sì.",
        steps: [
            "Scrivi il documento e firmalo (digitalmente o a mano)",
            "Invia via PEC (se il destinatario ha una PEC)",
            "Oppure vai in Posta per una Raccomandata con Ricevuta di Ritorno",
            "Conserva gelosamente la ricevuta di spedizione e quella di consegna"
        ],
        whatYouNeed: ["PEC o Ufficio Postale"],
        officialLinks: ["spidHome"],
        commonErrors: [
            "Usare la raccomandata semplice (senza ricevuta di ritorno)",
            "Perdere la ricevuta prima che la questione sia risolta"
        ],
        limitations: [
            "Ha un costo (da 2€ a 10€ circa)"
        ],
        sources: [
            {
                title: "Valore legale della PEC",
                organization: "AgID",
                url: "https://www.agid.gov.it/",
                type: "official",
                usedFor: "Riferimento tecnico",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Documenti", "Evita errore"]
    },
    {
        title: "Ricevuta NASpI (Disoccupazione)",
        slug: "ricevuta-naspi",
        category: "lavoro",
        target: ["lavoratori"],
        difficulty: "facile",
        time: "2 minuti",
        benefit: "Verifica immediata che la domanda sia partita",
        summary: "Dopo aver fatto domanda di disoccupazione, scarica la ricevuta col protocollo INPS.",
        whyUseful: "Serve per dimostrare al centro per l'impiego che sei disoccupato e per controllare quando arriverà il primo pagamento.",
        steps: [
            "Accedi al portale INPS",
            "Vai in 'Le mie domande'",
            "Scarica il PDF della ricevuta NASpI",
            "Controlla che lo stato sia 'Inviata' o 'In lavorazione'"
        ],
        whatYouNeed: ["SPID o CIE"],
        officialLinks: ["naspiServizio"],
        commonErrors: [
            "Pensare che la domanda fatta al CAF sia automatica (controlla sempre sul tuo profilo INPS)",
            "Perdere il numero di protocollo"
        ],
        limitations: [
            "I tempi di elaborazione possono essere lunghi (anche 1-2 mesi)"
        ],
        sources: [
            {
                title: "Guida NASpI",
                organization: "INPS",
                url: "https://www.inps.it/",
                type: "official",
                usedFor: "Procedura",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Lavoro", "Soldi"]
    },
    {
        title: "Controllare lo stato domanda INPS",
        slug: "stato-domanda-inps",
        category: "lavoro",
        target: ["lavoratori", "famiglie"],
        difficulty: "facile",
        time: "3 minuti",
        benefit: "Sai esattamente quando riceverai i soldi",
        summary: "Usa la funzione 'Stato di un servizio o di una domanda' sul sito INPS per monitorare bonus e sussidi.",
        whyUseful: "Invece di chiamare il call center e aspettare 20 minuti, puoi vedere in tempo reale se mancano documenti o se il pagamento è stato emesso.",
        steps: [
            "Accedi a INPS con SPID/CIE",
            "Cerca 'Fascicolo Previdenziale del Cittadino'",
            "Vai su 'Domande Presentate'",
            "Clicca sui dettagli per vedere le note dell'operatore"
        ],
        whatYouNeed: ["SPID o CIE"],
        officialLinks: ["inpsHome"],
        commonErrors: [
            "Non controllare mai e accorgersi dopo mesi che la domanda era stata respinta per un errore banale"
        ],
        limitations: [
            "Il sito INPS è spesso offline per manutenzione di notte o nei weekend"
        ],
        sources: [
            {
                title: "Servizi online INPS",
                organization: "INPS",
                url: "https://www.inps.it/",
                type: "official",
                usedFor: "Monitoraggio",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Lavoro", "Risparmia tempo"]
    },
    {
        title: "Protocollo INPS: la tua chiave",
        slug: "protocollo-inps-chiave",
        category: "lavoro",
        target: ["lavoratori"],
        difficulty: "facile",
        time: "1 minuto",
        benefit: "Risolvi i problemi al call center in metà tempo",
        summary: "Ogni domanda INPS ha un numero di protocollo (es. INPS-0000-00/00/2024-000000). Tienilo a portata di mano.",
        whyUseful: "Se devi sollecitare una pratica al telefono, l'operatore ti chiederà il protocollo. Senza quello, dovrà cercarti per nome e cognome, rischiando errori e perdite di tempo.",
        steps: [
            "Trova il protocollo sulla ricevuta della domanda",
            "Segnalo in una nota chiamata 'Pratiche INPS'",
            "Dettalo chiaramente quando parli con l'assistenza"
        ],
        whatYouNeed: ["Ricevuta INPS"],
        officialLinks: ["inpsHome"],
        commonErrors: [
            "Confondere il numero di protocollo con il PIN dispositivo (che non esiste più)"
        ],
        limitations: [
            "Nessuna"
        ],
        sources: [
            {
                title: "Assistenza INPS",
                organization: "INPS",
                url: "https://www.inps.it/",
                type: "official",
                usedFor: "Supporto",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Lavoro", "Risparmia tempo"]
    },
    {
        title: "Documenti pre-CAF (Kit ISEE)",
        slug: "documenti-pre-caf-isee",
        category: "soldi",
        target: ["famiglie", "studenti"],
        difficulty: "media",
        time: "20 minuti",
        benefit: "Eviti di dover tornare al CAF due volte",
        summary: "Prepara la lista completa dei documenti per l'ISEE almeno una settimana prima dell'appuntamento.",
        whyUseful: "Mancare anche solo un saldo bancario di una carta prepagata dimenticata blocca tutta la pratica. Il CAF non può inventare i dati.",
        steps: [
            "Scarica la 'Lista documenti ISEE' aggiornata",
            "Raccogli i saldi e le giacenze medie di TUTTI i conti e carte (anche cointestati)",
            "Prendi la targa di tutti i veicoli della famiglia",
            "Recupera l'ultima visura catastale se hai case di proprietà"
        ],
        whatYouNeed: ["Estratti conto", "Libretti circolazione", "Visure catastali"],
        officialLinks: ["inpsHome"],
        commonErrors: [
            "Dimenticare le carte prepagate (Postepay, Hype, ecc.)",
            "Non portare il Codice Fiscale di tutti i componenti conviventi"
        ],
        limitations: [
            "Richiede tempo per recuperare i dati dalle varie banche"
        ],
        sources: [
            {
                title: "Istruzioni ISEE",
                organization: "Ministero del Lavoro",
                url: "https://www.lavoro.gov.it/",
                type: "official",
                usedFor: "Requisiti",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Soldi", "Documenti"]
    },
    {
        title: "Lettura busta paga base",
        slug: "lettura-busta-paga-base",
        category: "lavoro",
        target: ["lavoratori"],
        difficulty: "media",
        time: "10 minuti",
        benefit: "Capisci se ti stanno pagando il giusto",
        summary: "Impara a leggere le tre sezioni della busta paga: anagrafica/contrattuale, corpo (competenze/trattenute) e piede (totali/ferie).",
        whyUseful: "Molti guardano solo il 'Netto in busta'. Ma è fondamentale controllare se le ore di straordinario, i bonus o le detrazioni per figli sono corretti.",
        steps: [
            "Controlla il 'Minimo Tabellare' in base al tuo CCNL",
            "Verifica che le ore lavorate corrispondano a quelle segnate",
            "Guarda la voce 'Trattenute Fiscali' (IRPEF) e 'Contributive' (INPS)",
            "Controlla i residui delle ferie e dei permessi (ROL) in fondo"
        ],
        whatYouNeed: ["Tua busta paga", "Contratto di lavoro"],
        officialLinks: ["cnelArchivioContratti"],
        commonErrors: [
            "Non accorgersi di errori nei giorni di detrazione fiscale",
            "Confondere la busta paga con il CUD (ora CU)"
        ],
        limitations: [
            "Le buste paga possono essere molto complesse a seconda del settore"
        ],
        sources: [
            {
                title: "Come leggere il cedolino",
                organization: "Consulenti del Lavoro",
                url: "https://www.consulentidellavoro.it/",
                type: "expert",
                usedFor: "Formazione",
                lastCheckedAt: "2024-05-20"
            }
        ],
        lastReviewedAt: "2024-05-20",
        badges: ["Lavoro", "Soldi"]
    }
];
