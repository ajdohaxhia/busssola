import { Module } from '@/types';

export const modulo_11_documenti_identita_avanzata: Module = {
    id: 'modulo-11-documenti-identita-avanzata',
    lastUpdated: '2026-05-14',
    title: 'Documenti e Identità Avanzata',
    description: 'Procedure digitali per passaporto, residenza, certificati e strumenti di firma elettronica.',
    category: 'documenti',
    difficulty: 'intermedia',
    icon: 'FileText',
    themeColor: 'accent-blue',
    lessons: [
        {
            id: 'passaporto-richiesta',
            slug: 'richiesta-rinnovo-passaporto',
            title: 'Passaporto: richiesta e rinnovo',
            category: 'documenti',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 20,
            summary: 'Come ottenere o rinnovare il passaporto elettronico tramite l\'agenda online della Polizia di Stato.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Polizia di Stato',
            synthesis: 'Prenotazione online dell\'appuntamento e preparazione documenti cartacei per la questura.',
            whenToDo: 'Quando devi recarti fuori dall\'Unione Europea o il tuo passaporto è scaduto/in scadenza.',
            scenario: 'Hai in programma un viaggio extra-UE e ti serve il passaporto, oppure il tuo scade tra meno di 6 mesi.',
            steps: [
                'Accedi all\'Agenda Passaporto con SPID o CIE',
                'Prenota un appuntamento presso la Questura o il Commissariato',
                'Paga il bollettino postale di 42,50€',
                'Acquista la marca da bollo da 73,50€'
            ],
            doNow: [
                'Accedi all\'Agenda Passaporto con SPID o CIE',
                'Prenota un appuntamento presso la Questura o il Commissariato'
            ],
            dontDo: [
                'Non presentarti senza prenotazione',
                'Non usare foto non conformi agli standard ICAO',
                'Non dimenticare il vecchio passaporto se si tratta di rinnovo'
            ],
            whatToPrepare: [
                'Modulo stampato della richiesta',
                'Documento di identità valido e fotocopia',
                '2 foto tessera identiche e recenti',
                'Ricevuta del bollettino postale',
                'Contributo amministrativo (marca da bollo)',
                'Ricevuta di prenotazione'
            ],
            commonErrors: [
                'Sottovalutare i tempi di attesa for l\'appuntamento',
                'Portare una sola foto tessera',
                'Sbagliare l\'intestazione del bollettino postale'
            ],
            askHelpWhen: [
                'Se hai urgenza documentata (salute, lavoro, studio)',
                'Se il sistema di prenotazione non mostra date disponibili'
            ],
            whoCanHelp: ['Ufficio Passaporti della Questura', 'Commissariato di Pubblica Sicurezza'],
            officialLinks: ['https://www.passaportonline.poliziadistato.it/'],
            checklist: [
                'Prenotazione effettuata online',
                'Bollettino postale pagato',
                'Marca da bollo acquistata',
                'Foto tessera conformi',
                'Modulo di richiesta compilato',
                'Documento identità originale e copia'
            ],
            sources: [
                {
                    title: 'Passaporto Elettronico',
                    organization: 'Polizia di Stato',
                    url: 'https://www.poliziadistato.it/articolo/il-rilascio-del-passaporto',
                    type: 'official',
                    usedFor: 'Procedura ufficiale e documenti necessari',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Agenda Passaporto',
                    organization: 'Ministero dell\'Interno',
                    url: 'https://www.passaportonline.poliziadistato.it/',
                    type: 'official',
                    usedFor: 'Prenotazione appuntamenti',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'cambio-residenza-online',
            slug: 'cambio-residenza-online-anpr',
            title: 'Cambio residenza online (ANPR)',
            category: 'documenti',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Procedura per cambiare residenza da un comune all\'altro o cambiare abitazione nello stesso comune via web.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Ministero dell\'Interno',
            synthesis: 'Dichiarazione telematica tramite il portale ANPR senza recarsi allo sportello comunale.',
            whenToDo: 'Quando ti trasferisci stabilmente in una nuova abitazione.',
            scenario: 'Hai cambiato casa e devi aggiornare la tua residenza ufficiale per i servizi pubblici e sanitari.',
            steps: [
                'Accedi al portale ANPR con SPID, CIE o CNS',
                'Seleziona "Cambio di Residenza"',
                'Compila i dati della nuova abitazione e dei componenti della famiglia',
                'Invia la dichiarazione'
            ],
            doNow: [
                'Accedi al portale ANPR con SPID, CIE o CNS',
                'Inizia la pratica di cambio residenza'
            ],
            dontDo: [
                'Non dichiarare il falso (conseguenze penali)',
                'Non dimenticare di allegare il contratto di affitto o atto di proprietà se richiesto',
                'Non aspettare più di 20 giorni dal trasferimento'
            ],
            whatToPrepare: [
                'Credenziali SPID/CIE/CNS',
                'Dati catastali dell\'immobile o estremi registrazione contratto affitto',
                'Documenti di identità di tutti i componenti che si trasferiscono'
            ],
            commonErrors: [
                'Sbagliare l\'indicazione del titolo di occupazione dell\'immobile',
                'Non inserire tutti i familiari che convivono nella nuova casa',
                'Mancata risposta alla visita del messo comunale per l\'accertamento'
            ],
            askHelpWhen: [
                'Se il sistema restituisce errori sui dati anagrafici esistenti',
                'Se non ricevi conferma dell\'avvio del procedimento entro pochi giorni'
            ],
            whoCanHelp: ['Ufficio Anagrafe del Comune', 'Supporto tecnico ANPR'],
            officialLinks: ['https://www.anagrafenazionale.interno.gov.it/'],
            checklist: [
                'Accesso effettuato al portale ANPR',
                'Dati dei familiari inseriti correttamente',
                'Titolo di possesso immobile specificato',
                'Dichiarazione inviata con successo',
                'Ricevuta di invio scaricata'
            ],
            sources: [
                {
                    title: 'Anagrafe Nazionale Popolazione Residente',
                    organization: 'Ministero dell\'Interno',
                    url: 'https://www.anagrafenazionale.interno.gov.it/servizi-al-cittadino/',
                    type: 'official',
                    usedFor: 'Procedura cambio residenza online',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Linee guida cambio residenza',
                    organization: 'PagoPA / ANPR',
                    url: 'https://www.anagrafenazionale.interno.gov.it/guida-ai-servizi-anagrafici-online/',
                    type: 'official',
                    usedFor: 'Istruzioni operative',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'certificati-anagrafici-online',
            slug: 'certificati-anagrafici-online-gratuiti',
            title: 'Certificati anagrafici online',
            category: 'documenti',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come scaricare certificati anagrafici (nascita, residenza, stato di famiglia) gratuitamente e con valore legale.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Ministero dell\'Interno',
            synthesis: 'Download immediato di certificati digitali dal portale ANPR con esenzione dal bollo per alcuni usi.',
            whenToDo: 'Quando una banca, un datore di lavoro o un ufficio pubblico ti chiede un certificato ufficiale.',
            scenario: 'Ti serve urgentemente uno stato di famiglia o un certificato di residenza e non vuoi andare in Comune.',
            steps: [
                'Accedi ad ANPR con SPID/CIE',
                'Scegli "Richiedi un certificato"',
                'Seleziona il tipo di certificato e l\'uso (motivo della richiesta)',
                'Scarica il PDF con il QR code di verifica'
            ],
            doNow: [
                'Accedi ad ANPR con SPID/CIE',
                'Seleziona il certificato desiderato'
            ],
            dontDo: [
                'Non pagare siti privati che offrono certificati (sono gratuiti su ANPR)',
                'Non stampare il certificato se è richiesto in formato digitale originale'
            ],
            whatToPrepare: [
                'Credenziali di accesso digitali (SPID o CIE)',
                'Conoscenza dell\'uso del certificato (es. mutuo, sport, successione)'
            ],
            commonErrors: [
                'Sbagliare il motivo dell\'esenzione dal bollo',
                'Cercare certificati di persone non appartenenti al proprio nucleo familiare (limitazioni presenti)'
            ],
            askHelpWhen: [
                'Se i dati nel certificato risultano errati',
                'Se il certificato richiesto non è tra quelli disponibili online'
            ],
            whoCanHelp: ['Ufficio Anagrafe', 'Assistenza portale ANPR'],
            officialLinks: ['https://www.anagrafenazionale.interno.gov.it/'],
            checklist: [
                'Accesso al portale ANPR eseguito',
                'Tipo di certificato selezionato',
                'Motivo esenzione/bollo indicato',
                'Anteprima verificata',
                'File PDF salvato'
            ],
            sources: [
                {
                    title: 'Servizi al Cittadino ANPR',
                    organization: 'Ministero dell\'Interno',
                    url: 'https://www.anagrafenazionale.interno.gov.it/area-cittadino/',
                    type: 'official',
                    usedFor: 'Emissione certificati',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Decreto Semplificazioni',
                    organization: 'Gazzetta Ufficiale',
                    url: 'https://www.gazzettaufficiale.it/',
                    type: 'official',
                    usedFor: 'Riferimento normativo digitalizzazione',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'codice-fiscale-richiesta',
            slug: 'richiesta-duplicato-codice-fiscale',
            title: 'Codice fiscale: richiesta e duplicato',
            category: 'documenti',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Come ottenere il certificato di attribuzione del codice fiscale o richiedere un duplicato della tessera smarrita.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Agenzia delle Entrate',
            synthesis: 'Richiesta online sul sito dell\'Agenzia delle Entrate per il certificato o il duplicato fisico.',
            whenToDo: 'In caso di smarrimento della tessera o necessità di certificato ufficiale di attribuzione.',
            scenario: 'Hai perso la tessera sanitaria/codice fiscale o ti serve il foglio ufficiale dell\'Agenzia per un atto notarile.',
            steps: [
                'Accedi all\'area riservata dell\'Agenzia delle Entrate',
                'Cerca "Duplicato della Tessera Sanitaria o del tesserino di codice fiscale"',
                'Inserisci i dati richiesti e la motivazione (smarrimento/furto)',
                'Scarica il certificato in PDF per uso immediato'
            ],
            doNow: [
                'Accedi all\'area riservata dell\'Agenzia delle Entrate',
                'Invia la richiesta di duplicato'
            ],
            dontDo: [
                'Non usare calcolatori online per fini ufficiali (non hanno valore legale)',
                'Non chiedere un nuovo codice se ne hai già uno (è univoco a vita)'
            ],
            whatToPrepare: [
                'SPID, CIE o CNS per l\'accesso',
                'Dati anagrafici esatti'
            ],
            commonErrors: [
                'Confondere il codice fiscale con la tessera sanitaria (la tessera lo contiene)',
                'Non aggiornare la residenza (il duplicato viene spedito all\'indirizzo registrato)'
            ],
            askHelpWhen: [
                'In caso di omocodia (due persone con dati che generano lo stesso codice)',
                'Se il sistema non riconosce i tuoi dati anagrafici'
            ],
            whoCanHelp: ['Agenzia delle Entrate (Uffici territoriali)', 'Contact center Agenzia delle Entrate'],
            officialLinks: ['https://www.agenziaentrate.gov.it/'],
            checklist: [
                'Accesso area riservata AdE effettuato',
                'Servizio duplicato selezionato',
                'Certificato di attribuzione scaricato',
                'Richiesta tessera fisica inviata (se necessaria)'
            ],
            sources: [
                {
                    title: 'Codice fiscale - Servizi online',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/portale/web/guest/schede/istanze/richiesta-ts-o-cf/duplicato-ts-cf-online',
                    type: 'official',
                    usedFor: 'Procedura duplicato e attribuzione',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Verifica codice fiscale',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://telematici.agenziaentrate.gov.it/VerificaCF/Scegli.do',
                    type: 'official',
                    usedFor: 'Verifica validità codice',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'tessera-sanitaria-europea',
            slug: 'tessera-sanitaria-europea-team',
            title: 'Tessera sanitaria europea (TEAM)',
            category: 'documenti',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come funziona la Tessera Europea di Assicurazione Malattia per l\'assistenza sanitaria all\'estero.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Ministero della Salute',
            synthesis: 'La TEAM è sul retro della tessera sanitaria italiana e garantisce cure urgenti in UE.',
            whenToDo: 'Prima di mettersi in viaggio per un paese dell\'Unione Europea, Svizzera, Norvegia, Islanda o Liechtenstein.',
            scenario: 'Stai per partire per le vacanze in Spagna e vuoi essere sicuro di poter ricevere cure mediche se necessario.',
            steps: [
                'Controlla il retro della tua Tessera Sanitaria',
                'Verifica la data di scadenza (se scaduta, non vale come TEAM)',
                'Se sta per scadere, richiedi il rinnovo o il certificato sostitutivo'
            ],
            doNow: [
                'Controlla il retro della tua Tessera Sanitaria',
                'Verifica la data di scadenza'
            ],
            dontDo: [
                'Non partire senza tessera fisica',
                'Non pensare che copra l\'assistenza privata o il rimpatrio (serve assicurazione viaggio per quello)',
                'Non usarla se ti trasferisci all\'estero stabilmente (serve il modello S1)'
            ],
            whatToPrepare: [
                'Tessera Sanitaria valida',
                'Documento di identità'
            ],
            commonErrors: [
                'Dimenticare la tessera a casa pensando che basti la foto sul telefono',
                'Credere che la TEAM copra tutto (copre solo cure necessarie e urgenti alle stesse condizioni dei residenti)'
            ],
            askHelpWhen: [
                'Se perdi la tessera mentre sei all\'estero (richiedi certificato sostitutivo alla ASL)',
                'Se ti viene rifiutata l\'assistenza nonostante la tessera'
            ],
            whoCanHelp: ['ASL di appartenenza', 'Ministero della Salute'],
            officialLinks: ['https://www.salute.gov.it/portale/assistenzaSanitaria/dettaglioContenutiAssistenzaSanitaria.jsp?lingua=italiano&id=897'],
            checklist: [
                'Retro della tessera verificato',
                'Data di scadenza valida for tutto il viaggio',
                'Tessera inserita nel portafoglio/bagaglio a mano'
            ],
            sources: [
                {
                    title: 'Assistenza sanitaria all\'estero',
                    organization: 'Ministero della Salute',
                    url: 'https://www.salute.gov.it/portale/assistenzaSanitaria/homeAssistenzaSanitaria.jsp',
                    type: 'official',
                    usedFor: 'Dettagli copertura TEAM',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Tessera Europea Assicurazione Malattia',
                    organization: 'Commissione Europea',
                    url: 'https://ec.europa.eu/social/main.jsp?catId=559&langId=it',
                    type: 'official',
                    usedFor: 'Regole europee assistenza',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'cie-pin-puk-smarriti',
            slug: 'recupero-pin-puk-cie-smarriti',
            title: 'CIE: PIN/PUK smarriti',
            category: 'documenti',
            audience: ['cittadini'],
            level: 'intermedia',
            estimatedMinutes: 10,
            summary: 'Come recuperare o rigenerare i codici PIN e PUK necessari per usare la Carta di Identità Elettronica online.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Ministero dell\'Interno',
            synthesis: 'Recupero della seconda metà dei codici tramite l\'app CieID o presso il Comune.',
            whenToDo: 'Quando hai perso i fogli ricevuti durante la richiesta o la consegna della CIE.',
            scenario: 'Vuoi accedere a un sito pubblico con la CIE ma non trovi più i codici di 8 cifre.',
            steps: [
                'Controlla la ricevuta cartacea rilasciata dal Comune (contiene la prima metà)',
                'Controlla la lettera di accompagnamento ricevuta per posta (contiene la seconda metà)',
                'Se non hai nulla, usa la funzione di recupero su App CieID (se avevi attivato il recupero)'
            ],
            doNow: [
                'Controlla la ricevuta cartacea rilasciata dal Comune',
                'Controlla la lettera di accompagnamento postale'
            ],
            dontDo: [
                'Non provare codici a caso (dopo 3 tentativi il PIN si blocca)',
                'Non buttare la ricevuta del Comune'
            ],
            whatToPrepare: [
                'La Carta di Identità Elettronica fisica',
                'Smartphone con NFC',
                'Email o numero di cellulare forniti al momento della richiesta'
            ],
            commonErrors: [
                'Confondere PIN (per accesso) e PUK (per sbloccare il PIN)',
                'Non sapere che i codici sono divisi in due parti consegnate in tempi diversi'
            ],
            askHelpWhen: [
                'Se non riesci a recuperare i codici tramite app',
                'Se la carta risulta bloccata permanentemente'
            ],
            whoCanHelp: ['Ufficio Anagrafe del Comune', 'Supporto portale CIE'],
            officialLinks: ['https://www.cartaidentita.interno.gov.it/'],
            checklist: [
                'Ricevuta del Comune verificata',
                'Lettera postale verificata',
                'App CieID installata',
                'Funzione recupero tentata',
                'Appuntamento in Comune preso (se nulla funziona)'
            ],
            sources: [
                {
                    title: 'PIN e PUK Carta Identità Elettronica',
                    organization: 'Ministero dell\'Interno',
                    url: 'https://www.cartaidentita.interno.gov.it/info-utili/pin-e-puk/',
                    type: 'official',
                    usedFor: 'Informazioni sui codici',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Manuale App CieID',
                    organization: 'Istituto Poligrafico e Zecca dello Stato',
                    url: 'https://www.cartaidentita.interno.gov.it/identificazione-digitale/cie-id/',
                    type: 'official',
                    usedFor: 'Istruzioni recupero via app',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'spid-recupero-credenziali',
            slug: 'recupero-credenziali-spid',
            title: 'SPID: recupero credenziali',
            category: 'documenti',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Procedura per resettare la password o recuperare l\'username del tuo account SPID.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'AgID',
            synthesis: 'Utilizzo delle funzioni "Password dimenticata" sul sito del proprio provider SPID.',
            whenToDo: 'Quando non ricordi più i dati di accesso o l\'app del provider non ti riconosce.',
            scenario: 'Devi entrare sul sito INPS ma hai dimenticato la password dello SPID (es. PosteID, Aruba, Sielte).',
            steps: [
                'Vai sulla pagina di login del tuo provider SPID',
                'Clicca su "Recupera username" o "Password dimenticata"',
                'Inserisci il codice fiscale e l\'email associata',
                'Segui il link ricevuto via email per impostare una nuova password'
            ],
            doNow: [
                'Vai sulla pagina di login del tuo provider SPID',
                'Seleziona il recupero credenziali'
            ],
            dontDo: [
                'Non creare un nuovo SPID con un altro provider senza aver prima provato il recupero',
                'Non inserire la password troppe volte se non sei sicuro (rischio blocco account)',
                'Non condividere i codici OTP di recupero con nessuno'
            ],
            whatToPrepare: [
                'Codice Fiscale',
                'Accesso all\'email usata per la registrazione',
                'Cellulare associato allo SPID per ricevere SMS/OTP'
            ],
            commonErrors: [
                'Non avere più accesso alla vecchia email usata per lo SPID',
                'Aver cambiato numero di telefono senza aggiornarlo nel profilo SPID'
            ],
            askHelpWhen: [
                'Se non hai più accesso né a email né a cellulare (serve contattare l\'assistenza clienti del provider)',
                'Se sospetti che qualcuno abbia cambiato la tua password senza autorizzazione'
            ],
            whoCanHelp: ['Assistenza clienti del Provider SPID (es. Poste, Aruba, Lepida)'],
            officialLinks: ['https://www.spid.gov.it/assistenza/'],
            checklist: [
                'Provider identificato',
                'Email di recupero ricevuta',
                'Nuova password impostata (robusta)',
                'Accesso di prova effettuato'
            ],
            sources: [
                {
                    title: 'Assistenza SPID',
                    organization: 'AgID',
                    url: 'https://www.spid.gov.it/domande-frequenti/',
                    type: 'official',
                    usedFor: 'FAQ recupero credenziali',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Sito ufficiale SPID',
                    organization: 'Governo Italiano',
                    url: 'https://www.spid.gov.it/',
                    type: 'official',
                    usedFor: 'Contatti provider',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'pec-guida-pratica',
            slug: 'pec-posta-elettronica-certificata-quando-serve',
            title: 'PEC: quando serve davvero',
            category: 'documenti',
            audience: ['cittadini', 'lavoratori'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Cos\'è la Posta Elettronica Certificata e perché è utile per i cittadini anche se non obbligatoria.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'AgID',
            synthesis: 'La PEC ha lo stesso valore legale di una raccomandata con ricevuta di ritorno.',
            whenToDo: 'Per disdire contratti, inviare comunicazioni formali alla PA, partecipare a concorsi pubblici o gestire controversie.',
            scenario: 'Devi inviare una disdetta d\'affitto o un reclamo a un fornitore e non vuoi andare alle Poste per la raccomandata.',
            steps: [
                'Valuta se ti serve una PEC (costo circa 5-10€/anno)',
                'Scegli un gestore autorizzato',
                'Attiva il tuo indirizzo (es. nome.cognome@pec.it)',
                'Registra l\'indirizzo sull\'Indice Nazionale dei Domicili Digitali (INAD)'
            ],
            doNow: [
                'Scegli un gestore PEC autorizzato',
                'Attiva il tuo indirizzo PEC'
            ],
            dontDo: [
                'Non usare la PEC per email personali ordinarie',
                'Non dimenticare di controllare la cartella PEC (le notifiche legali arrivano lì)',
                'Non rispondere a una PEC con una email normale (si perde il valore legale)'
            ],
            whatToPrepare: [
                'Documento di identità per l\'attivazione',
                'Codice Fiscale',
                'Carta di credito o PayPal per il pagamento'
            ],
            commonErrors: [
                'Lasciare che la PEC si riempia (se è piena, i messaggi non vengono consegnati)',
                'Pensare che sia gratuita per sempre (quasi tutti i servizi sono a canone)',
                'Non sapere che una mail normale inviata a una PEC non ha valore di raccomandata'
            ],
            askHelpWhen: [
                'Se non ricevi la ricevuta di consegna',
                'Se il destinatario nega di aver ricevuto il messaggio nonostante la ricevuta'
            ],
            whoCanHelp: ['Gestore del servizio PEC', 'AgID (per regole generali)'],
            officialLinks: ['https://www.agid.gov.it/it/piattaforme/posta-elettronica-certificata', 'https://domiciliodigitale.gov.it/'],
            checklist: [
                'PEC attivata',
                'Password salvata in modo sicuro',
                'INAD aggiornato con la propria PEC',
                'Notifiche su email ordinaria attivate'
            ],
            sources: [
                {
                    title: 'Posta Elettronica Certificata',
                    organization: 'AgID',
                    url: 'https://www.agid.gov.it/it/piattaforme/posta-elettronica-certificata',
                    type: 'official',
                    usedFor: 'Definizione e regole PEC',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Indice Nazionale dei Domicili Digitali',
                    organization: 'Dipartimento per la trasformazione digitale',
                    url: 'https://domiciliodigitale.gov.it/',
                    type: 'official',
                    usedFor: 'Registrazione domicilio digitale',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'firma-digitale-guida',
            slug: 'firma-digitale-cos-e-quando-usarla',
            title: 'Firma digitale: cos\'è e quando usarla',
            category: 'documenti',
            audience: ['cittadini', 'lavoratori'],
            level: 'intermedia',
            estimatedMinutes: 15,
            summary: 'Guida all\'uso della firma elettronica qualificata per firmare documenti PDF con valore legale.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'AgID',
            synthesis: 'Strumento per dare validità legale ai documenti informatici, equivalente alla firma autografa.',
            whenToDo: 'Per firmare contratti, bilanci, dichiarazioni ufficiali o atti notarili digitali.',
            scenario: 'Devi firmare un contratto di lavoro o un modulo per la banca ma non hai una stampante e vuoi farlo digitalmente.',
            steps: [
                'Verifica se hai già una firma digitale (spesso inclusa in alcune CNS o servizi professionali)',
                'Scegli tra Firma su Smart Card, Token USB o Firma Remota (via smartphone)',
                'Acquista il servizio da un certificatore accreditato',
                'Usa un software di firma (es. ArubaSign, FirmoConCIE) per apporre la firma'
            ],
            doNow: [
                'Scegli un fornitore di firma digitale',
                'Acquista il kit o il servizio di firma remota'
            ],
            dontDo: [
                'Non confondere la firma digitale con la scansione della firma autografa (non ha lo stesso valore)',
                'Non condividere mai il PIN della tua firma digitale',
                'Non firmare file in formati diversi da PDF o P7M se richiesto esplicitamente'
            ],
            whatToPrepare: [
                'Documento di identità per il riconoscimento',
                'Smartphone per la firma remota o computer per Smart Card',
                'Connessione internet'
            ],
            commonErrors: [
                'Far scadere i certificati di firma (vanno rinnovati ogni 3 anni)',
                'Sbagliare il formato della firma (CAdES vs PAdES)',
                'Dimenticare il PIN di sblocco'
            ],
            askHelpWhen: [
                'In caso di errore "Certificato non valido"',
                'Se il software di firma non riconosce il lettore smart card'
            ],
            whoCanHelp: ['Gestore della firma digitale', 'AgID (per elenco certificatori)'],
            officialLinks: ['https://www.agid.gov.it/it/piattaforme/firma-elettronica-qualificata'],
            checklist: [
                'Kit di firma ricevuto o app configurata',
                'Software di firma installato',
                'Documento caricato nel software',
                'PIN inserito correttamente',
                'File firmato salvato e verificato'
            ],
            sources: [
                {
                    title: 'Firme elettroniche',
                    organization: 'AgID',
                    url: 'https://www.agid.gov.it/it/piattaforme/firme-elettroniche',
                    type: 'official',
                    usedFor: 'Tipi di firma e validità',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Elenco prestatori servizi fiduciari',
                    organization: 'AgID',
                    url: 'https://www.agid.gov.it/it/piattaforme/firma-elettronica-qualificata/prestatori-servizi-fiduciari-attivi-italia',
                    type: 'official',
                    usedFor: 'Scelta del fornitore',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        }
    ]
};
