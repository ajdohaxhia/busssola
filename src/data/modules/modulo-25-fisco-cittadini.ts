import { Module } from '@/types';

export const modulo_25_fisco_cittadini: Module = {
    id: 'modulo-25-fisco-cittadini',
    lastUpdated: '2026-05-16',
    title: 'Fisco e Cittadini',
    description: 'Guida ai servizi dell\'Agenzia delle Entrate, dichiarazione dei redditi e gestione delle scadenze fiscali.',
    category: 'soldi',
    difficulty: 'base',
    icon: 'Receipt',
    themeColor: 'accent-orange',
    lessons: [
        {
            id: '730-precompilato-base',
            slug: '730-precompilato-orientamento-base',
            title: '730 precompilato 2026: calendario e invio',
            category: 'soldi',
            audience: ['cittadini', 'lavoratori'],
            level: 'base',
            estimatedMinutes: 15,
            mainEntity: 'Agenzia delle Entrate',
            summary: 'Il 730/2026 si consulta dal 30 aprile. Accettazione e invio dal 14 maggio al 30 settembre 2026, dal web Ade o tramite CAF/sostituto.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-08-14',
            prerequisites: ['SPID, CIE o CNS', 'Essere lavoratori dipendenti o pensionati, se usi il 730'],
            whatToPrepare: ['Certificazione Unica', 'IBAN', 'Spese da confrontare con la precompilata'],
            steps: [
                'Dal 30 aprile 2026 accedi all’area riservata dell’Agenzia delle Entrate e apri il 730 precompilato (modalità semplificata o ordinaria).',
                'Dal 14 maggio 2026 puoi accettare, modificare e inviare. Il termine è il 30 settembre 2026.',
                'Se il reddito complessivo supera 75.000 euro, la procedura calcola il limite alle detrazioni in base a reddito e figli a carico.',
                'Puoi presentare anche a sostituto, CAF o professionista; il termine è lo stesso.',
                'Scarica ricevuta e modello 730-3.',
            ],
            commonErrors: [
                'Confondere la data di consultazione (30 aprile) con quella di invio (dal 14 maggio)',
                'Usare link arrivati via SMS invece del sito istituzionale',
            ],
            officialLinksV2: [
                {
                    sourceId: 'adePrecompilata2026',
                    useWhen: 'Per le novità e i dati presenti in precompilata 2026',
                    beforeOpening: ['SPID o CIE'],
                },
                {
                    sourceId: 'ade730Calendario',
                    useWhen: 'Per il calendario ufficiale',
                    beforeOpening: [],
                },
                {
                    sourceId: 'ade730Quando',
                    useWhen: 'Per come e dove presentare il 730',
                    beforeOpening: [],
                },
            ],
            sources: [
                {
                    title: 'La dichiarazione precompilata 2026',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/portale/la-dichiarazione-precompilata-20261',
                    type: 'official',
                    usedFor: 'Novità e disponibilità del 730/2026',
                    lastCheckedAt: '2026-08-14',
                },
                {
                    title: 'Calendario precompilata 2026',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/portale/info-assistenza-e-calendario2',
                    type: 'official',
                    usedFor: 'Date di consultazione e invio',
                    lastCheckedAt: '2026-08-14',
                },
                {
                    title: 'Quando e come presentare il 730 2026',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/portale/quando-e-come-presentare-il-730-2026-cittadini',
                    type: 'official',
                    usedFor: 'Canali di presentazione e scheda 730-1',
                    lastCheckedAt: '2026-08-14',
                },
            ],
        },
        {
            id: 'cu-dove-trovarla',
            slug: 'certificazione-unica-cu-dove-si-scarica',
            title: 'CU: dove trovarla',
            category: 'soldi',
            audience: ['cittadini', 'lavoratori'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'La Certificazione Unica è il documento che riassume i tuoi redditi dell\'anno. Ecco come recuperarla se il datore di lavoro non te la consegna.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Agenzia delle Entrate',
            steps: [
                'Chiedi al tuo datore di lavoro o ente pensionistico (obbligatorio entro il 16 marzo)',
                'Se non la ricevi, accedi al tuo "Cassetto Fiscale" sul sito dell\'Agenzia delle Entrate',
                'Vai in "Dichiarazioni fiscali" > "Certificazione Unica"',
                'Scarica il PDF della tua CU'
            ],
            officialLinksV2: [
                {
                    sourceId: 'adeCassettoFiscale',
                    useWhen: 'Per scaricare la CU autonomamente',
                    beforeOpening: ['Accesso con SPID o CIE']
                }
            ],
            sources: [
                {
                    title: 'Cassetto Fiscale',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/portale/web/guest/area-riservata/cassetto-fiscale',
                    type: 'official',
                    usedFor: 'Recupero documenti',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'cassetto-fiscale-cos-e',
            slug: 'cassetto-fiscale-agenzia-entrate-cosa-contiene',
            title: 'Cassetto fiscale: cos’è',
            category: 'soldi',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Il tuo archivio personale presso l\'Agenzia delle Entrate: contiene dichiarazioni, rimborsi, atti registrati e versamenti F24.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Agenzia delle Entrate',
            steps: [
                'Accedi all\'area riservata dell\'Agenzia delle Entrate',
                'Cerca "Cassetto Fiscale" nel menu Servizi',
                'Consulta i tuoi dati anagrafici, le dichiarazioni degli anni passati e i pagamenti effettuati con F24'
            ],
            checklist: [
                'Ho verificato la correttezza del mio indirizzo di residenza',
                'Ho controllato lo storico dei miei versamenti F24',
                'Ho visualizzato le mie Certificazioni Uniche'
            ],
            sources: [
                {
                    title: 'Il Cassetto Fiscale',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/',
                    type: 'official',
                    usedFor: 'Descrizione servizio',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'rimborsi-agenzia-entrate',
            slug: 'rimborsi-agenzia-entrate-come-riceverli',
            title: 'Rimborsi Agenzia Entrate',
            category: 'soldi',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Come ricevere i soldi se il tuo 730 è a credito o se hai diritto a un rimborso d\'imposta.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Agenzia delle Entrate',
            steps: [
                'Se hai un datore di lavoro, il rimborso arriva direttamente in busta paga (solitamente a luglio)',
                'Se non hai un sostituto d\'imposta, l\'Agenzia ti pagherà direttamente',
                'Comunica il tuo IBAN sul sito dell\'Agenzia per accelerare i tempi ed evitare assegni postali',
                'Controlla lo stato del rimborso nel tuo Cassetto Fiscale'
            ],
            dontDo: [
                'Non aspettare l\'assegno cartaceo se puoi inserire l\'IBAN (è molto più lento)',
                'Non cadere in truffe via SMS che chiedono dati bancari per "rimborsi fiscali"'
            ],
            checklist: [
                'Ho inserito l\'IBAN nell\'area riservata dell\'Agenzia',
                'Ho verificato l\'esito della dichiarazione (730 o Redditi PF)',
                'Ho controllato la sezione "Rimborsi" nel Cassetto Fiscale'
            ],
            sources: [
                {
                    title: 'Rimborsi',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/portale/web/guest/cittadini/rimborsi',
                    type: 'official',
                    usedFor: 'Modalità di rimborso',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'canone-tv-esonero',
            slug: 'canone-tv-casi-di-esonero-domanda',
            title: 'Canone TV: casi di esonero',
            category: 'soldi',
            audience: ['cittadini', 'anziani'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Chi non deve pagare il canone RAI in bolletta e come presentare la dichiarazione di non detenzione dell\'apparecchio.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Agenzia delle Entrate',
            whenToDo: 'La domanda di esonero va presentata ogni anno (entro il 31 gennaio per l\'intero anno, o entro il 30 giugno per il secondo semestre).',
            steps: [
                'Verifica se rientri nei casi: non detenzione di TV, over 75 con reddito basso (sotto 8.000€), diplomatici e militari stranieri',
                'Scarica il modulo di dichiarazione sostitutiva dal sito dell\'Agenzia delle Entrate',
                'Invia il modulo online tramite l\'area riservata, via PEC o tramite raccomandata senza busta'
            ],
            commonErrors: [
                'Dimenticare che l\'esonero vale solo per un anno e va rinnovato',
                'Pensare che basti non guardare i canali RAI (il canone è sulla detenzione dell\'apparecchio)'
            ],
            sources: [
                {
                    title: 'Canone TV',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/portale/aree-tematiche/canone-tv',
                    type: 'official',
                    usedFor: 'Regole e moduli',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'codice-fiscale-fiscale-focus',
            slug: 'codice-fiscale-tessera-sanitaria-servizi-fiscali',
            title: 'Codice fiscale e tessera sanitaria',
            category: 'soldi',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'L\'importanza del codice fiscale per le detrazioni e come usarlo correttamente per le spese mediche.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Agenzia delle Entrate',
            steps: [
                'Presenta sempre la tessera sanitaria in farmacia o alle visite mediche',
                'Verifica che lo scontrino riporti il tuo codice fiscale corretto',
                'Controlla periodicamente sul sito "Sistema Tessera Sanitaria" se le spese sono state registrate'
            ],
            officialLinksV2: [
                {
                    sourceId: 'adeCfTs',
                    useWhen: 'Per informazioni su emissione e validità',
                    beforeOpening: ['Utile in caso di smarrimento']
                }
            ],
            sources: [
                {
                    title: 'Servizi online Tessera Sanitaria',
                    organization: 'Ministero dell\'Economia',
                    url: 'https://sistemats1.sanita.finanze.it/',
                    type: 'official',
                    usedFor: 'Controllo spese sanitarie',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'appuntamento-agenzia-entrate',
            slug: 'come-prenotare-appuntamento-agenzia-entrate',
            title: 'Come prenotare appuntamento Agenzia Entrate',
            category: 'soldi',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Evita le code: come fissare un appuntamento in ufficio o una videochiamata con un funzionario.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Agenzia delle Entrate',
            steps: [
                'Vai sul sito ufficiale dell\'Agenzia delle Entrate',
                'Seleziona "Contatti e assistenza" > "Prenota appuntamento"',
                'Scegli l\'ufficio territoriale più vicino',
                'Scegli il servizio richiesto e l\'orario',
                'In alternativa, seleziona "Web Ticket" per lo stesso giorno o un appuntamento via videochiamata'
            ],
            officialLinksV2: [
                {
                    sourceId: 'adePrenotazione',
                    useWhen: 'Per prenotare direttamente online',
                    beforeOpening: ['Scegli bene il motivo dell\'appuntamento per non sbagliare ufficio']
                }
            ],
            sources: [
                {
                    title: 'Assistenza in ufficio',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/portale/contatti/assistenza-fiscale/in-ufficio/prenotazione-appuntamenti',
                    type: 'official',
                    usedFor: 'Prenotazione',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'servizi-fiscali-spid-cie',
            slug: 'usare-spid-cie-per-servizi-fiscali',
            title: 'Come usare SPID/CIE per servizi fiscali',
            category: 'soldi',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'L\'accesso digitale è ormai l\'unico modo per gestire la propria posizione fiscale in autonomia.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Agenzia delle Entrate',
            steps: [
                'Ottieni SPID o usa la tua CIE con l\'app CieID',
                'Vai sul sito dell\'Agenzia delle Entrate e clicca su "Area Riservata"',
                'Scegli il tuo metodo di accesso',
                'Una volta dentro, potrai firmare documenti, inviare dichiarazioni e pagare F24 direttamente dal tuo conto'
            ],
            officialLinksV2: [
                {
                    sourceId: 'adeHome',
                    label: 'Area Riservata AdE',
                    useWhen: 'Per entrare nel portale dei servizi',
                    beforeOpening: ['Tieni pronto lo smartphone per l\'OTP']
                }
            ],
            sources: [
                {
                    title: 'Accesso ai servizi online',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/portale/web/guest/area-riservata',
                    type: 'official',
                    usedFor: 'Istruzioni accesso',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        }
    ]
};
