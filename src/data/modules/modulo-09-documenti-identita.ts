import { Module } from '@/types';

export const modulo_09_documenti_identita: Module = {
    id: 'modulo-09-documenti-identita',
    lastUpdated: '2026-05-14',
    title: 'Documenti e Identità',
    description: 'Guida pratica ai principali documenti di identità e strumenti di accesso digitale ai servizi pubblici.',
    category: 'documenti',
    difficulty: 'base',
    icon: 'IdCard',
    themeColor: 'accent-blue',
    topProcedures: ['Richiesta SPID', 'Cambio Residenza', 'Recupero PUK CIE', 'Pagamento pagoPA'],
    relatedChecklists: ['Richiesta Passaporto', 'Cambio Residenza'],
    lessons: [
        {
            id: 'spid-request',
            slug: 'come-richiedere-lo-spid',
            title: 'Come richiedere lo SPID',
            category: 'documenti',
            audience: ['cittadini', 'lavoratori', 'studenti'],
            level: 'base',
            estimatedMinutes: 15,
            mainEntity: 'AgID / Provider SPID',
            summary: 'Lo SPID è la tua chiave digitale per entrare nei siti della Pubblica Amministrazione.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: ['Email personale', 'Numero di cellulare', 'Documento d\'identità'],
            whatToPrepare: [
                'Carta d\'identità (o passaporto/patente)',
                'Tessera sanitaria (per il codice fiscale)',
                'Smartphone con fotocamera'
            ],
            estimatedCosts: 'Gratis (il riconoscimento di persona o video può essere a pagamento)',
            timeToComplete: '15-20 minuti per la registrazione, attivazione variabile',
            steps: [
                'Scegli un Identity Provider (es. Poste Italiane, Aruba, Sielte)',
                'Inserisci i tuoi dati anagrafici sul sito del provider',
                'Crea le tue credenziali (username e password)',
                'Scegli la modalità di riconoscimento (CIE, firma digitale, di persona o video)',
                'Effettua il riconoscimento seguendo le istruzioni',
                'Scarica l\'app del provider per generare i codici di accesso'
            ],
            officialLinksV2: [
                {
                    sourceId: 'spidHome',
                    useWhen: 'Per iniziare la procedura e confrontare i provider.',
                    beforeOpening: ['Documento identità', 'Tessera sanitaria'],
                    warning: 'Controlla quali provider offrono il servizio gratuitamente.'
                },
                {
                    sourceId: 'spidAssistenzaIdp',
                    useWhen: 'Se hai problemi durante la registrazione con un provider specifico.',
                    beforeOpening: ['Nome del provider scelto']
                }
            ],
            commonErrors: [
                'Usare una mail di lavoro o condivisa',
                'Dimenticare la password subito dopo la creazione',
                'Non avere la tessera sanitaria a portata di mano'
            ],
            dontDo: [
                'Non dare mai le tue credenziali a terzi',
                'Non fare lo SPID per altre persone a tuo nome'
            ],
            ifYouHaveProblems: [
                'Contatta l\'assistenza del provider scelto',
                'Consulta l\'Help Desk di AgID'
            ],
            checklist: [
                'Ho scelto il provider',
                'Ho inserito i dati correttamente',
                'Ho effettuato il riconoscimento',
                'Ho installato l\'app sul telefono',
                'Ho verificato l\'accesso su un sito (es. INPS)'
            ],
            faqs: [
                { q: 'Quanto costa fare lo SPID?', a: 'Lo SPID è generalmente gratuito per i cittadini. Alcuni provider potrebbero chiedere un pagamento per il riconoscimento via webcam o di persona.' },
                { q: 'Serve lo SPID per vedere la pensione?', a: 'Sì, lo SPID è uno dei metodi principali (insieme a CIE e CNS) per accedere al portale INPS e consultare la propria situazione previdenziale.' },
                { q: 'Posso avere due account SPID?', a: 'Sì, puoi avere più identità SPID fornite da provider diversi, ma sono tutte collegate alla tua persona fisica tramite il codice fiscale.' }
            ],
            relatedLessons: ['spid-recovery', 'cie-puk-recovery'],
            sources: [
                {
                    title: 'Linee guida SPID',
                    organization: 'AgID',
                    url: 'https://www.spid.gov.it/',
                    type: 'official',
                    usedFor: 'Procedura standard e requisiti',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'spid-recovery',
            slug: 'come-recuperare-credenziali-spid',
            title: 'Come recuperare lo SPID',
            category: 'documenti',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            mainEntity: 'Provider SPID',
            summary: 'Se hai perso username o password del tuo SPID, puoi recuperarli in pochi minuti.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: ['Accesso alla mail usata per la registrazione', 'Cellulare associato allo SPID'],
            whatToPrepare: [
                'Codice Fiscale',
                'Nome del tuo provider SPID'
            ],
            estimatedCosts: 'Gratis',
            timeToComplete: '5 minuti',
            steps: [
                'Vai sulla pagina di login del tuo provider SPID',
                'Clicca su "Non ricordi le credenziali?" o "Password dimenticata"',
                'Inserisci il tuo codice fiscale e la mail',
                'Segui il link ricevuto via email',
                'Imposta una nuova password sicura',
                'Se hai perso lo username, controlla la mail di benvenuto ricevuta al momento dell\'attivazione'
            ],
            officialLinksV2: [
                {
                    sourceId: 'spidHelpdesk',
                    useWhen: 'Se non ricordi nemmeno quale provider avevi scelto.',
                    beforeOpening: ['Codice Fiscale']
                }
            ],
            commonErrors: [
                'Cercare di recuperare la password su un provider diverso',
                'Non avere più accesso al numero di telefono associato'
            ],
            dontDo: [
                'Non creare un secondo SPID se il primo è ancora attivo (recuperalo!)'
            ],
            ifYouHaveProblems: [
                'Usa il servizio di assistenza del tuo Identity Provider'
            ],
            checklist: [
                'Ho trovato il sito del mio provider',
                'Ho inserito il codice fiscale',
                'Ho ricevuto la mail di reset',
                'Ho impostato la nuova password'
            ],
            sources: [
                {
                    title: 'Recupero credenziali SPID',
                    organization: 'AgID',
                    url: 'https://helpdesk.spid.gov.it/',
                    type: 'official',
                    usedFor: 'Procedure di assistenza',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'anpr-residenza',
            slug: 'cambio-residenza-online-anpr',
            title: 'Come fare il cambio di residenza online',
            category: 'documenti',
            audience: ['cittadini', 'famiglie'],
            level: 'base',
            estimatedMinutes: 20,
            mainEntity: 'Ministero dell\'Interno / ANPR',
            summary: 'Puoi trasferire la tua residenza in un altro Comune o cambiare indirizzo senza andare allo sportello.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: ['SPID, CIE o CNS attivo', 'Dati del nuovo indirizzo'],
            whatToPrepare: [
                'Dati catastali dell\'immobile (o estremi contratto affitto)',
                'Dati di tutti i componenti della famiglia che si trasferiscono',
                'Documento d\'identità'
            ],
            estimatedCosts: 'Gratis',
            timeToComplete: '20-30 minuti per l\'invio, circa 45 giorni per la chiusura pratica',
            steps: [
                'Accedi al portale ANPR con SPID o CIE',
                'Seleziona "Servizi Anagrafici" e poi "Cambio di Residenza"',
                'Scegli se ti trasferisci in un nuovo Comune o nello stesso',
                'Inserisci i dati del nuovo indirizzo e il titolo di possesso (proprietà/affitto)',
                'Aggiungi eventuali familiari che si spostano con te',
                'Invia la dichiarazione e salva il numero di protocollo',
                'Attendi l\'accertamento dei vigili urbani (entro 45 giorni)'
            ],
            officialLinksV2: [
                {
                    sourceId: 'anprResidenza',
                    useWhen: 'Per inviare la dichiarazione ufficiale.',
                    beforeOpening: ['SPID o CIE', 'Dati nuovo indirizzo'],
                    warning: 'Usa solo il portale ANPR ufficiale del Ministero.'
                }
            ],
            commonErrors: [
                'Dimenticare di inserire i dati catastali',
                'Non inserire tutti i familiari coinvolti',
                'Indirizzo incompleto (manca interno o scala)'
            ],
            dontDo: [
                'Non fare la richiesta se non hai ancora le chiavi della nuova casa'
            ],
            ifYouHaveProblems: [
                'Contatta l\'ufficio anagrafe del Comune di destinazione'
            ],
            checklist: [
                'Ho effettuato l\'accesso ad ANPR',
                'Ho inserito l\'indirizzo preciso',
                'Ho indicato il titolo di occupazione casa',
                'Ho aggiunto i familiari',
                'Ho inviato la pratica e salvato la ricevuta'
            ],
            sources: [
                {
                    title: 'Portale ANPR - Cambio Residenza',
                    organization: 'Ministero dell\'Interno',
                    url: 'https://www.anagrafenazionale.interno.it/area-cittadino/cambio-di-residenza/',
                    type: 'official',
                    usedFor: 'Procedura ufficiale online',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'cie-puk-recovery',
            slug: 'recuperare-pin-puk-cie',
            title: 'Come recuperare PIN/PUK della CIE',
            category: 'documenti',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            mainEntity: 'Ministero dell\'Interno',
            summary: 'Se hai smarrito i codici della tua Carta d\'Identità Elettronica, puoi recuperarli online o in Comune.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: ['CIE fisica', 'Accesso all\'app CieID o portale CIE'],
            whatToPrepare: [
                'Numero della CIE',
                'Email o numero di cellulare forniti al momento della richiesta'
            ],
            estimatedCosts: 'Gratis',
            timeToComplete: '5 minuti (online) o tempo di attesa allo sportello',
            steps: [
                'Se hai fornito email/cellulare in fase di richiesta, usa la funzione "Recupero PUK" sul sito CIE',
                'Inserisci il numero della carta e i tuoi dati',
                'Riceverai il PUK via email o SMS',
                'Se non hai fornito contatti, devi recarti fisicamente all\'ufficio anagrafe del Comune',
                'Una volta ottenuto il PUK, puoi generare un nuovo PIN tramite l\'app CieID'
            ],
            officialLinksV2: [
                {
                    sourceId: 'cieRecuperoPuk',
                    useWhen: 'Per recuperare il codice PUK via web.',
                    beforeOpening: ['Numero carta CIE', 'Codice fiscale']
                }
            ],
            commonErrors: [
                'Confondere il PIN con il PUK',
                'Inserire troppe volte il PIN sbagliato bloccando la carta'
            ],
            dontDo: [
                'Non buttare il foglio ricevuto con la CIE: lì ci sono le prime metà dei codici'
            ],
            ifYouHaveProblems: [
                'Vai all\'ufficio anagrafe del tuo Comune'
            ],
            checklist: [
                'Ho trovato il numero della mia carta',
                'Ho provato la procedura di recupero online',
                'Ho ricevuto il PUK',
                'Ho resettato il PIN tramite app CieID'
            ],
            sources: [
                {
                    title: 'Recupero codici CIE',
                    organization: 'Ministero dell\'Interno',
                    url: 'https://www.cartaidentita.interno.gov.it/cittadini/recupero-puk/',
                    type: 'official',
                    usedFor: 'Procedura di recupero codici',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'pagopa-payment',
            slug: 'come-pagare-avviso-pagopa',
            title: 'Come pagare un avviso pagoPA',
            category: 'documenti',
            audience: ['cittadini', 'famiglie', 'studenti'],
            level: 'base',
            estimatedMinutes: 3,
            mainEntity: 'pagoPA S.p.A.',
            summary: 'Pagare multe, tasse scolastiche o tributi verso lo Stato in modo sicuro e tracciabile.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: ['Avviso di pagamento (cartaceo o digitale)', 'Strumento di pagamento (carta, conto, app)'],
            whatToPrepare: [
                'Codice IUV (Codice Avviso) di 18 cifre',
                'Codice fiscale dell\'ente creditore'
            ],
            estimatedCosts: 'Costo commissione variabile (da 0€ a circa 2€)',
            timeToComplete: '2 minuti',
            steps: [
                'Inquadra il QR code dell\'avviso con l\'app IO o con l\'app della tua banca',
                'In alternativa, inserisci manualmente il codice IUV sul sito del creditore o del tuo home banking',
                'Verifica l\'importo e l\'ente destinatario',
                'Scegli il metodo di pagamento preferito',
                'Conferma l\'operazione e scarica la ricevuta telematica',
                'Puoi pagare anche fisicamente in tabaccheria, posta o banca mostrando l\'avviso'
            ],
            officialLinksV2: [
                {
                    sourceId: 'pagopaComePagare',
                    useWhen: 'Per conoscere tutti i canali di pagamento disponibili.',
                    beforeOpening: ['Nessuno']
                },
                {
                    sourceId: 'pagopaPhishing',
                    useWhen: 'Per capire se l\'avviso che hai ricevuto è vero o una truffa.',
                    beforeOpening: ['L\'avviso ricevuto']
                }
            ],
            commonErrors: [
                'Dimenticare di scaricare la ricevuta',
                'Pagare due volte lo stesso avviso (pagoPA impedisce i doppi pagamenti se usi i canali digitali)'
            ],
            dontDo: [
                'Non cliccare su link di pagamento ricevuti via SMS sospetti'
            ],
            ifYouHaveProblems: [
                'Consulta l\'assistenza ufficiale pagoPA'
            ],
            checklist: [
                'Ho l\'avviso sottomano',
                'Ho scansionato il QR code',
                'Ho verificato l\'importo',
                'Ho effettuato il pagamento',
                'Ho salvato la ricevuta'
            ],
            sources: [
                {
                    title: 'Come pagare con pagoPA',
                    organization: 'pagoPA S.p.A.',
                    url: 'https://www.pagopa.gov.it/it/cittadini/dove-pagare/',
                    type: 'official',
                    usedFor: 'Metodi di pagamento e canali',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        }
    ]
};
