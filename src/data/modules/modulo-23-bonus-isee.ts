import { Module } from '@/types';

export const modulo_23_bonus_isee: Module = {
    id: 'modulo-23-bonus-isee',
    lastUpdated: '2026-08-14',
    title: 'Bonus, ISEE e Agevolazioni',
    description: 'Guida pratica per preparare l\'ISEE, richiedere bonus sociali, assegno unico e altre agevolazioni economiche per famiglie e cittadini in Italia.',
    category: 'bonus',
    difficulty: 'base',
    icon: 'Banknote',
    themeColor: 'accent-emerald',
    lessons: [
        {
            id: 'isee-cose-serve',
            slug: 'isee-cose-e-quando-serve',
            title: 'ISEE: cos\'è e quando serve',
            category: 'bonus',
            audience: ['cittadini', 'famiglie', 'studenti'],
            level: 'base',
            estimatedMinutes: 10,
            mainEntity: 'INPS',
            summary: 'L’ISEE 2026 si ottiene con la DSU. Per AUU, nido, ADI, SFL e bonus nuovi nati vale l’ISEE per prestazioni familiari (franchigia casa 91.500 euro, 120.000 in capoluoghi di Città metropolitane).',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-08-14',
            prerequisites: ['SPID, CIE o CNS', 'Dati del nucleo'],
            whatToPrepare: ['Codici fiscali del nucleo', 'Dati sulla casa di abitazione', 'Eventuali saldi se non usi la precompilata'],
            estimatedCosts: 'Gratuito',
            timeToComplete: 'Da pochi minuti in precompilata a diversi giorni se autodichiarata',
            steps: [
                'Accedi al Portale ISEE INPS o all’app INPS Mobile.',
                'Scegli la DSU precompilata se possibile: INPS e Ade precaricano redditi e patrimoni (anno d’imposta 2024).',
                'Verifica nucleo, casa e patrimoni. Titoli di Stato, BFP e libretti postali fino a 50.000 euro sono esclusi in automatico in precompilata.',
                'Invia e scarica l’attestazione. L’INPS ha ricalcolato d’ufficio le DSU 2026 dopo i nuovi modelli (messaggio 799/2026).',
            ],
            commonErrors: [
                'Dimenticare di dichiarare tutti i componenti della famiglia',
                'Non aggiornare i dati dopo un cambiamento familiare'
            ],
            dontDo: [
                'NON affidarti a intermediari a pagamento per fare l\'ISEE',
                'NON inserire dati reddituali errati'
            ],
            ifYouHaveProblems: [
                'Contatta il numero verde INPS: 803 164',
                'Vai in un patronato convenzionato INPS'
            ],
            checklist: [
                'Ho raccolto i documenti necessari',
                'Ho effettuato l\'accesso al sito INPS',
                'Ho presentato la DSU',
                'Ho scaricato l\'ISEE in PDF'
            ],
            faqs: [
                { q: 'Quanto dura l\'ISEE 2026?', a: 'L’attestazione ISEE 2026 vale fino al 31 dicembre 2026 e va rinnovata ogni anno, presentando una nuova DSU.' },
                { q: 'Posso fare l\'ISEE per un familiare?', a: 'Puoi presentare la DSU per il nucleo secondo le regole INPS; per deleghe usa i canali ufficiali, non condividere lo SPID.' }
            ],
            sources: [
                {
                    title: 'Nuovo ISEE per prestazioni familiari',
                    organization: 'Ministero del Lavoro',
                    url: 'https://www.lavoro.gov.it/notizie/pagine/nuovo-isee-specifiche-prestazioni-familiari-e-linclusione',
                    type: 'official',
                    usedFor: 'Ambito di applicazione e franchigia casa',
                    lastCheckedAt: '2026-08-14',
                },
                {
                    title: 'Comunicato INPS nuovi modelli DSU 2026',
                    organization: 'INPS',
                    url: 'https://www.inps.it/content/dam/inps-site/it/scorporati/comunicati-stampa/2026/03/Allegati/4030_CS_Nuovi_modelli_ISEE_.pdf',
                    type: 'official',
                    usedFor: 'Messaggio 799/2026 e decreto 3/2026',
                    lastCheckedAt: '2026-08-14',
                },
            ]
        },
        {
            id: 'bonus-sociali-luce-gas',
            slug: 'bonus-sociali-luce-gas-acqua',
            title: 'Bonus sociali luce, gas e acqua',
            category: 'bonus',
            audience: ['cittadini', 'famiglie'],
            level: 'base',
            estimatedMinutes: 15,
            mainEntity: 'ARERA',
            summary: 'Sconto automatico in bolletta se l’ISEE è sotto soglia. Dal 1° gennaio 2026 la soglia è 9.796 euro (20.000 euro con almeno 4 figli a carico). Non si domanda al venditore: basta la DSU.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-08-14',
            prerequisites: ['DSU/ISEE in corso di validità', 'Forniture ammissibili intestate a un componente'],
            whatToPrepare: ['ISEE 2026', 'Codici utenza se vuoi verificare la bolletta'],
            estimatedCosts: 'Gratuito',
            timeToComplete: 'Il riconoscimento è automatico dopo la DSU',
            steps: [
                'Presenta la DSU all’INPS e ottieni ISEE sotto soglia.',
                'Non compilare una domanda al venditore: ARERA spiega che il SII verifica le utenze.',
                'Lo sconto dura 12 mesi; ogni anno serve una nuova DSU.',
            ],
            commonErrors: [
                'Cercare un modulo di domanda dal fornitore',
                'Non rinnovare la DSU l’anno dopo',
            ],
            dontDo: [
                'NON pagare intermediari per “attivare” un bonus che è automatico',
            ],
            ifYouHaveProblems: [
                'Verifica l’ISEE sul sito INPS',
                'Consulta le pagine ARERA sui bonus sociali',
            ],
            checklist: [
                'Ho presentato la DSU 2026',
                'L’ISEE è sotto 9.796 euro (o 20.000 con 4+ figli)',
                'Le utenze sono nel nucleo',
            ],
            faqs: [
                { q: 'Chi può ottenere il bonus sociale nel 2026?', a: 'Nuclei con ISEE fino a 9.796 euro, oppure fino a 20.000 euro se hanno almeno 4 figli a carico, con utenze ammissibili. Fonte: comunicato ARERA 23 gennaio 2026 e delibera 2/2026/R/com.' },
                { q: 'Quanto dura?', a: '12 mesi. Va presentata una nuova DSU ogni anno.' }
            ],
            sources: [
                {
                    title: 'Bonus sociali: soglia ISEE 9.796 euro',
                    organization: 'ARERA',
                    url: 'https://www.arera.it/comunicati-stampa/dettaglio/bonus-sociali-arera-alza-a-9796-euro-la-soglia-isee-per-laccesso-alle-agevolazioni-per-acqua-luce-gas-e-rifiuti',
                    type: 'official',
                    usedFor: 'Soglia 2026',
                    lastCheckedAt: '2026-08-14',
                },
                {
                    title: 'Come si ottengono i bonus',
                    organization: 'ARERA',
                    url: 'https://www.arera.it/consumatori/bonus-sociale/bonus-sociale-per-disagio-economico/come-si-ottengono-i-bonus',
                    type: 'official',
                    usedFor: 'Riconoscimento automatico tramite DSU',
                    lastCheckedAt: '2026-08-14',
                },
            ]
        },
        {
            id: 'assegno-unico',
            slug: 'assegno-unico-universale',
            title: 'Assegno Unico Universale',
            category: 'bonus',
            audience: ['famiglie', 'parents'],
            level: 'base',
            estimatedMinutes: 12,
            mainEntity: 'INPS',
            summary: 'Contributo mensile INPS per i figli. Nel 2026 la domanda accolta continua d’ufficio. Senza ISEE da marzo: importi minimi. DSU entro il 30 giugno 2026 per gli arretrati da marzo.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-08-14',
            prerequisites: ['Residenza in Italia', 'Figlio/a di età compresa tra 0 e 21 anni', 'Codice fiscale del figlio'],
            whatToPrepare: ['Codice fiscale componenti famiglia', 'IBAN per accredito', 'Eventuale ISEE'],
            estimatedCosts: 'Gratuito',
            timeToComplete: '15 minuti',
            steps: [
                'Se hai già una domanda in stato accolta, non presentarla di nuovo: l’INPS eroga in continuità (circolare n. 7/2026).',
                'Presenta la DSU 2026. Da marzo l’importo usa l’ISEE per prestazioni familiari.',
                'Se la DSU arriva entro il 30 giugno 2026, gli importi da marzo vengono ricalcolati con arretrati.',
                'Controlla IBAN e composizione del nucleo sul servizio INPS.',
            ],
            commonErrors: [
                'Inserire un IBAN errato',
                'Non aggiornare i dati in caso di fatto nuovo (es. nascita di un altro figlio)'
            ],
            dontDo: [
                'NON richiedere l\'Assegno più volte per lo stesso figlio',
                'NON usare un conto corrente non intestato al genitore richiedente'
            ],
            ifYouHaveProblems: [
                'Contatta il numero verde INPS: 803 164',
                'Rivolgiti a un patronato convenzionato'
            ],
            checklist: [
                'Ho preparato il codice fiscale del figlio',
                'Ho inserito l\'IBAN corretto',
                'Ho inviato la domanda e salvato il numero di pratica',
                'Ho controllato la data di accredito'
            ],
            sources: [
                {
                    title: 'Assegno unico 2026: domanda e importi',
                    organization: 'INPS',
                    url: 'https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.02.assegno-unico-2026-presentazione-domanda-e-aggiornamento-importi.html',
                    type: 'official',
                    usedFor: 'Continuità domanda, rivalutazione 1,4%, termine 30 giugno',
                    lastCheckedAt: '2026-08-14',
                },
                {
                    title: 'Scheda Assegno unico e universale',
                    organization: 'INPS',
                    url: 'https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.assegno-unico-e-universale-per-i-figli-a-carico-55984.assegno-unico-e-universale-per-i-figli-a-carico.html',
                    type: 'official',
                    usedFor: 'Regole di decorrenza e arretrati',
                    lastCheckedAt: '2026-08-14',
                },
            ]
        },
        {
            id: 'bonus-nido',
            slug: 'bonus-asilo-nido',
            title: 'Bonus Asilo Nido',
            category: 'bonus',
            audience: ['famiglie', 'parents'],
            level: 'base',
            estimatedMinutes: 10,
            mainEntity: 'INPS',
            summary: 'Il Bonus Asilo Nido è un contributo per i genitori lavoratori per le spese di frequenza di asili nido e servizi affini.',
            status: 'published',
            qualityGatePassed: true,

            prerequisites: ['Residenza in Italia', 'Figlio tra 0 e 3 anni', 'Contratto di lavoro di almeno un genitore'],
            whatToPrepare: ['Codice fiscale genitore e bambino', 'ISEE', 'Documenti di iscrizione all\'asilo nido'],
            estimatedCosts: 'Gratuito',
            timeToComplete: '15 minuti',
            steps: [
                'Accedi al portale INPS con SPID o CIE',
                'Cerca il servizio \'Bonus Asilo Nido\'',
                'Compila i dati del bambino e dell\'asilo',
                'Carica i documenti richiesti',
                'Invia la domanda e attendi l\'accredito'
            ],
            commonErrors: [
                'Presentare domanda fuori dai termini',
                'Dimenticare di allegare il contratto di iscrizione all\'asilo'
            ],
            dontDo: [
                'NON inserire dati falsi sull\'asilo',
                'NON richiedere il bonus se il bambino non è iscritto all\'asilo nido'
            ],
            ifYouHaveProblems: [
                'Contatta il numero verde INPS',
                'Consulta un patronato o un CAF'
            ],
            checklist: [
                'Ho preparato i documenti del bambino',
                'Ho inserito i dati dell\'asilo nido',
                'Ho inviato la domanda nei termini',
                'Ho ricevuto conferma'
            ],
            sources: [
                {
                    title: 'Bonus Asilo Nido',
                    organization: 'INPS',
                    url: 'https://www.inps.it/it/it/dettaglio-scheda/29207.html',
                    type: 'official',
                    usedFor: 'Informazioni sul Bonus Asilo Nido',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            lastReviewedAt: '2026-05-16'
        },
        {
            id: 'dsu-precompilata',
            slug: 'come-preparare-dsu-precompilata-isee',
            title: 'DSU precompilata: come prepararla',
            category: 'bonus',
            audience: ['cittadini', 'famiglie'],
            level: 'intermedia',
            estimatedMinutes: 15,
            mainEntity: 'INPS',
            summary: 'La DSU precompilata contiene dati già inseriti da INPS e Agenzia delle Entrate, rendendo l\'ISEE più veloce e meno soggetto a errori.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            prerequisites: ['SPID, CIE o CNS', 'Dati su saldi e giacenze medie non ancora precompilati (se necessari)'],
            whatToPrepare: ['Dati dei componenti il nucleo familiare', 'Elementi di riscontro (es. saldo contabile di un conto corrente se richiesto per sicurezza)'],
            steps: [
                'Accedi al Portale Unico ISEE su inps.it',
                'Scegli "Acquisizione DSU precompilata"',
                'Inserisci i codici fiscali e gli elementi di riscontro per ogni maggiorenne (o chiedi loro di autorizzare via SPID)',
                'Attendi la lavorazione di INPS (solitamente poche ore)',
                'Accetta o modifica i dati precompilati (redditi e patrimoni)',
                'Invia la DSU per ottenere l\'attestazione ISEE'
            ],
            commonErrors: [
                'Sbagliare gli elementi di riscontro (es. saldo banca al 31/12)',
                'Non confermare i dati dopo che l\'INPS li ha resi disponibili'
            ],
            dontDo: [
                'Non comunicare i tuoi dati di accesso ad altri',
                'Non ignorare la notifica di "DSU sospesa"'
            ],
            checklist: [
                'Ho inserito i codici fiscali corretti',
                'Ho ottenuto le autorizzazioni dai familiari maggiorenni',
                'Ho controllato che i dati precompilati siano esatti',
                'Ho inviato la conferma finale'
            ],
            officialLinksV2: [
                {
                    sourceId: 'inpsIsee',
                    useWhen: 'Per iniziare la DSU precompilata',
                    beforeOpening: ['Assicurati di avere i dati bancari di riferimento per i controlli di sicurezza']
                }
            ],
            sources: [
                {
                    title: 'ISEE Precompilato',
                    organization: 'INPS',
                    url: 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.50088.isee-precompilato.html',
                    type: 'official',
                    usedFor: 'Procedura ufficiale',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'documenti-necessari-isee',
            slug: 'documenti-necessari-per-isee',
            title: 'Documenti necessari per ISEE',
            category: 'bonus',
            audience: ['cittadini', 'famiglie'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Elenco completo dei documenti da raccogliere prima di iniziare la DSU, sia online che al CAF.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'INPS',
            whatToPrepare: [
                'Codice Fiscale e Documento d’identità del dichiarante',
                'Codice Fiscale di tutti i componenti del nucleo familiare',
                'Contratto di affitto registrato (se in affitto)',
                'Saldo e giacenza media dei conti correnti (al 31/12 di due anni prima)',
                'Targa di auto, moto e imbarcazioni di proprietà',
                'Rendita catastale di immobili di proprietà',
                'Certificazioni di invalidità (se presenti)'
            ],
            steps: [
                'Recupera i dati bancari (saldi e giacenza media) del secondo anno precedente',
                'Verifica i dati catastali delle proprietà immobiliari',
                'Controlla se ci sono state variazioni nel nucleo familiare',
                'Tieni a portata di mano le targhe dei veicoli'
            ],
            checklist: [
                'Ho i saldi bancari di due anni fa',
                'Ho la giacenza media di due anni fa',
                'Ho i codici fiscali di tutti i conviventi',
                'Ho la visura catastale o l\'atto di acquisto casa'
            ],
            sources: [
                {
                    title: 'Documenti per la DSU',
                    organization: 'INPS',
                    url: 'https://www.inps.it/',
                    type: 'official',
                    usedFor: 'Elenco requisiti',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'isee-universitario-guida',
            slug: 'isee-universitario-come-funziona',
            title: 'ISEE universitario',
            category: 'bonus',
            audience: ['studenti', 'famiglie'],
            level: 'base',
            estimatedMinutes: 12,
            summary: 'Come richiedere l\'ISEE specifico per l\'università, fondamentale per tasse ridotte e borse di studio.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'INPS',
            whenToDo: 'Va fatto ogni anno, solitamente entro ottobre/novembre (controlla le scadenze del tuo Ateneo).',
            steps: [
                'Inizia una normale DSU per ISEE ordinario',
                'Seleziona l\'opzione "Prestazioni agevolate per il diritto allo studio universitario"',
                'Indica il codice fiscale dello studente/i interessato/i',
                'Specifica se lo studente è autonomo o convivente con i genitori',
                'Attendi l\'attestazione che riporterà la dicitura "si applica alle prestazioni universitarie"'
            ],
            commonErrors: [
                'Non barrare la casella specifica per l\'università',
                'Considerarsi studente "autonomo" senza averne i requisiti (reddito proprio e residenza fuori casa da almeno 2 anni)'
            ],
            checklist: [
                'Ho selezionato l\'uso universitario nella DSU',
                'Ho inserito il codice fiscale dello studente',
                'Ho verificato la dicitura corretta sull\'attestazione finale',
                'Ho controllato la scadenza sul sito dell\'Università'
            ],
            sources: [
                {
                    title: 'ISEE per l\'università',
                    organization: 'INPS',
                    url: 'https://www.inps.it/',
                    type: 'official',
                    usedFor: 'Dettagli normativi',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'carta-acquisti-guida',
            slug: 'carta-acquisti-requisiti-domanda',
            title: 'Carta acquisti',
            category: 'bonus',
            audience: ['famiglie', 'anziani'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Una carta prepagata con 80€ ogni due mesi per la spesa alimentare, sanitaria e il pagamento delle bollette.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Ministero dell\'Economia',
            prerequisites: [
                'Cittadinanza italiana o UE (o permesso lungo periodo)',
                'Avere figli sotto i 3 anni O avere più di 65 anni',
                'ISEE inferiore alla soglia annuale prevista (circa 8.000€)'
            ],
            steps: [
                'Scarica il modulo di domanda dal sito del Ministero o di Poste Italiane',
                'Compila il modulo relativo alla tua categoria (minori 3 anni o over 65)',
                'Recati presso un Ufficio Postale con il modulo e l\'ISEE valido',
                'Se la domanda è accolta, riceverai la carta già caricata'
            ],
            officialLinksV2: [
                {
                    sourceId: 'inpsCartaAcquisti',
                    useWhen: 'Per scaricare i moduli aggiornati',
                    beforeOpening: ['Controlla i limiti ISEE aggiornati all\'anno in corso']
                }
            ],
            sources: [
                {
                    title: 'Carta Acquisti',
                    organization: 'MEF',
                    url: 'https://www.mef.gov.it/focus/Carta-Acquisti/',
                    type: 'official',
                    usedFor: 'Requisiti e moduli',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'adi-sfl-orientamento',
            slug: 'assegno-inclusione-adi-sfl-differenze',
            title: 'ADI e SFL: orientamento base',
            category: 'bonus',
            audience: ['cittadini', 'famiglie'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Le nuove misure che hanno sostituito il Reddito di Cittadinanza: chi ha diritto all\'Assegno di Inclusione e chi al Supporto Formazione Lavoro.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'INPS',
            synthesis: 'L\'ADI è per nuclei con fragilità (minori, disabili, over 60); lo SFL è per singoli occupabili tra 18 e 59 anni.',
            steps: [
                'Verifica il tuo ISEE (soglia ADI 9.360€)',
                'Controlla se nel nucleo ci sono minori, disabili o persone con oltre 60 anni (diritto ADI)',
                'Se sei occupabile senza fragilità in famiglia, valuta lo SFL (350€ al mese per max 12 mesi)',
                'Presenta domanda online sul sito INPS',
                'Iscriviti al portale SIISL e sottoscrivi il PAD (Patto Attivazione Digitale)'
            ],
            commonErrors: [
                'Non fare il PAD subito dopo la domanda (l\'erogazione non parte senza PAD)',
                'Dimenticare di aggiornare l\'ISEE ogni anno'
            ],
            officialLinksV2: [
                {
                    sourceId: 'inpsAdi',
                    useWhen: 'Per richiedere l\'Assegno di Inclusione',
                    beforeOpening: ['Verifica di avere l\'ISEE aggiornato']
                },
                {
                    sourceId: 'inpsSfl',
                    useWhen: 'Per richiedere il Supporto Formazione e Lavoro',
                    beforeOpening: ['Necessario se hai tra 18 e 59 anni e non hai fragilità nel nucleo']
                }
            ],
            sources: [
                {
                    title: 'Assegno di Inclusione',
                    organization: 'INPS',
                    url: 'https://www.inps.it/it/it/dettaglio-scheda/56942.html',
                    type: 'official',
                    usedFor: 'Dettagli ADI',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'stato-domanda-inps-controllo',
            slug: 'come-controllare-stato-domanda-inps',
            title: 'Come controllare lo stato di una domanda INPS',
            category: 'bonus',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Guida rapida per sapere se la tua richiesta (Bonus, NASpI, ADI) è stata accolta, respinta o è ancora in lavorazione.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'INPS',
            steps: [
                'Accedi al sito INPS con SPID/CIE',
                'Cerca "Fascicolo Previdenziale del Cittadino"',
                'Clicca su "Domande Presentate" nel menu laterale',
                'Cerca la prestazione di tuo interesse (es. Assegno Unico, Bonus Nido)',
                'Controlla la colonna "Stato" (es. Accolta, In elaborazione, Respinta)'
            ],
            checklist: [
                'Ho effettuato l\'accesso',
                'Ho individuato la domanda corretta',
                'Ho letto le eventuali "Note" in caso di domanda respinta'
            ],
            sources: [
                {
                    title: 'Accesso ai servizi INPS',
                    organization: 'INPS',
                    url: 'https://www.inps.it/',
                    type: 'official',
                    usedFor: 'Navigazione portale',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'correzione-errori-isee',
            slug: 'come-correggere-errori-isee-dsu',
            title: 'Come correggere errori ISEE',
            category: 'bonus',
            audience: ['cittadini', 'famiglie'],
            level: 'intermedia',
            estimatedMinutes: 10,
            summary: 'Cosa fare se ti accorgi di un errore dopo aver inviato la DSU o se l\'attestazione presenta omissioni o difformità.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'INPS',
            whenToDo: 'Quando l\'attestazione ISEE riporta la dicitura "Omissioni o Difformità" o se hai inserito un dato errato per sbaglio.',
            steps: [
                'Se la DSU è stata appena inviata ma non ancora attestata, prova a chiederne l\'annullamento (se possibile online)',
                'Se l\'attestazione è già uscita, presenta una "DSU Integrativa" per correggere i dati autodichiarati',
                'Se l\'errore è nei dati precompilati (es. un conto corrente non tuo), contatta l\'Agenzia delle Entrate o la banca per la rettifica',
                'Puoi anche presentare una nuova DSU completa (l\'ultima presentata sovrascrive la precedente)'
            ],
            commonErrors: [
                'Ignorare le "omissioni" segnalate (i bonus potrebbero essere bloccati)',
                'Pensare che l\'errore si corregga da solo l\'anno dopo'
            ],
            checklist: [
                'Ho letto il modulo di attestazione con le segnalazioni di errore',
                'Ho verificato con la banca i dati segnalati come omessi',
                'Ho presentato una nuova DSU o integrativa'
            ],
            sources: [
                {
                    title: 'FAQ ISEE Difformità',
                    organization: 'INPS',
                    url: 'https://www.inps.it/',
                    type: 'official',
                    usedFor: 'Gestione errori',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'differenze-tipi-isee',
            slug: 'differenza-isee-ordinario-corrente-universitario',
            title: 'Tipi di ISEE: quale ti serve?',
            category: 'bonus',
            audience: ['cittadini', 'famiglie'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Breve guida alle diverse versioni dell\'ISEE e a quando è necessario richiedere quelle specifiche.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'INPS',
            synthesis: 'Esistono diversi ISEE a seconda della prestazione richiesta: l\'ordinario non basta sempre.',
            scenario: 'Vuoi chiedere l\'abbonamento scontato del bus, le tasse universitarie o un bonus per i figli.',
            whatToPrepare: [
                '**ISEE Ordinario**: per la maggior parte dei bonus sociali.',
                '**ISEE Universitario**: per tasse universitarie e borse di studio.',
                '**ISEE Minorenni**: per prestazioni rivolte a figli di genitori non coniugati e non conviventi.',
                '**ISEE Socio-Sanitario**: per assistenza domiciliare o ricoveri in RSA.',
                '**ISEE Corrente**: si fa se hai avuto un calo drastico di reddito (es. perdita lavoro) negli ultimi mesi, per fotografare la situazione attuale e non quella di 2 anni fa.'
            ],
            checklist: [
                'Ho verificato quale ISEE richiede il bando',
                'Ho controllato se ho diritto all\'ISEE Corrente (perdita lavoro > 25% reddito)',
                'Ho indicato correttamente i genitori non conviventi per l\'ISEE minorenni'
            ],
            sources: [
                {
                    title: 'Tipi di ISEE',
                    organization: 'INPS',
                    url: 'https://www.inps.it/it/it/dettaglio-scheda/21760.html',
                    type: 'official',
                    usedFor: 'Classificazione ISEE',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'isee-corrente-quando-servire',
            slug: 'isee-corrente-quando-farlo-e-come',
            title: 'ISEE corrente: quando farlo',
            category: 'bonus',
            audience: ['cittadini', 'famiglie', 'lavoratori'],
            level: 'intermedia',
            estimatedMinutes: 12,
            mainEntity: 'INPS / Ministero del Lavoro',
            summary: 'L’ISEE corrente aggiorna l’indicatore se il reddito è cambiato in modo rilevante rispetto alla DSU ordinaria. Requisiti e durata si verificano sul Portale ISEE e sulle pagine del Ministero del Lavoro.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-08-14',
            steps: [
                'Completa prima una DSU ordinaria (meglio precompilata) sul Portale ISEE.',
                'Apri le istruzioni ISEE sul sito del Ministero del Lavoro e la scheda INPS: l’ISEE corrente si usa solo nei casi previsti (variazioni di lavoro/reddito indicate nei modelli).',
                'Non inventare la soglia di calo reddituale: è nei modelli DSU 2026. Se non la trovi, ferma e leggi le istruzioni ufficiali.',
                'Presenta l’ISEE corrente dallo stesso canale della DSU. Conserva l’attestazione: ha una validità limitata, indicata sul modello.',
                'Per AUU, ADI, nido e prestazioni familiari 2026 resta il nuovo ISEE familiare: verifica quale indicatore chiede l’ente erogatore.',
            ],
            commonErrors: ['Fare solo l’ISEE corrente senza DSU ordinaria', 'Usarlo per una prestazione che chiede un altro tipo di ISEE'],
            dontDo: ['Non copiare da un CAF i requisiti di un anno precedente senza aprire i modelli 2026'],
            checklist: ['DSU ordinaria presente', 'Istruzioni MLPS/INPS lette', 'Attestazione corrente scaricata'],
            faqs: [
                { q: 'Sostituisce l’ISEE ordinario per sempre?', a: 'No. Ha durata limitata. Poi si torna all’ordinario o se ne fa uno nuovo, secondo le istruzioni.' },
                { q: 'Serve dopo un licenziamento?', a: 'Può servire se ricorrono le condizioni dei modelli. Leggi INPS/MLPS: non è automatico con la sola NASpI.' },
            ],
            officialLinksV2: [
                { sourceId: 'inpsIsee', useWhen: 'Portale ISEE / DSU', beforeOpening: ['SPID o CIE'] },
                { sourceId: 'lavoroIseePagina', useWhen: 'Scheda istituzionale ISEE', beforeOpening: [] },
                { sourceId: 'lavoroIseeDsu2026', useWhen: 'Modelli DSU 2026', beforeOpening: [] },
            ],
            sources: [
                {
                    title: 'ISEE precompilato',
                    organization: 'INPS',
                    url: 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.50088.isee-precompilato.html',
                    type: 'official',
                    usedFor: 'Canale DSU e ISEE corrente',
                    lastCheckedAt: '2026-08-14',
                },
                {
                    title: 'ISEE — scheda istituzionale',
                    organization: 'Ministero del Lavoro',
                    url: 'https://lavoro.gov.it/strumenti-e-servizi/isee/pagine/default',
                    type: 'official',
                    usedFor: 'Quadro ISEE',
                    lastCheckedAt: '2026-08-14',
                },
            ],
        }
    ]
};