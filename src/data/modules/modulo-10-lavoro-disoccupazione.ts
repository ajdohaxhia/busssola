import { Module } from '@/types';

export const modulo_10_lavoro_disoccupazione: Module = {
    id: 'modulo-10-lavoro-disoccupazione',
    lastUpdated: '2024-05-13',
    title: 'Lavoro e Disoccupazione',
    description: 'Guida ai principali servizi digitali legati al mondo del lavoro, al sostegno al reddito e alla cessazione dei rapporti lavorativi.',
    category: 'lavoro',
    difficulty: 'base',
    icon: 'Briefcase',
    themeColor: 'accent-green',
    lessons: [
        {
            id: 'naspi-request',
            slug: 'come-richiedere-la-naspi-disoccupazione',
            title: 'Come richiedere la NASpI (Disoccupazione)',
            category: 'lavoro',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 30,
            mainEntity: 'INPS',
            summary: 'Guida alla presentazione della domanda per l\'indennità mensile di disoccupazione.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2024-05-13',
            scenario: 'Hai perso involontariamente il lavoro e hai maturato i requisiti contributivi necessari per il sostegno al reddito.',
            whenToDo: 'In caso di licenziamento, dimissioni per giusta causa o scadenza di contratto a termine.',
            whatYouNeed: [
                'Credenziali SPID, CIE o CNS',
                'Dati del datore di lavoro e dell\'ultimo rapporto lavorativo',
                'IBAN per l\'accredito dei pagamenti'
            ],
            whereToDo: 'Online sul sito INPS o tramite un Patronato',
            steps: [
                'Accedi al portale INPS con la tua identità digitale',
                'Compila il modulo di domanda NASpI online',
                'Invia la domanda entro 68 giorni dalla cessazione del rapporto',
                'Sottoscrivi il Patto di Servizio Personalizzato presso il Centro per l\'Impiego'
            ],
            estimatedCosts: 'Gratuito',
            commonErrors: [
                'Presentare la domanda oltre i 68 giorni',
                'IBAN errato o non intestato al richiedente',
                'Mancata comunicazione di nuovi redditi da lavoro (NASpI-Com)'
            ],
            officialLinks: ['https://www.inps.it/it/it/dettaglio-scheda.schede-paginazione.scheda-info.50508.naspi-indennit-mensile-di-disoccupazione.html'],
            
            // Backward compatibility
            question: 'Come posso presentare la domanda di disoccupazione?',
            whatIsHappening: 'La NASpI è l\'indennità mensile di disoccupazione erogata dall\'INPS ai lavoratori con rapporto di lavoro subordinato che hanno perduto involontariamente l\'occupazione.',
            warningSigns: [],
            doNow: [
                'Accedi al portale INPS con la tua identità digitale',
                'Compila il modulo di domanda NASpI online',
                'Invia la domanda entro 68 giorni dalla cessazione del rapporto',
                'Sottoscrivi il Patto di Servizio Personalizzato presso il Centro per l\'Impiego'
            ],
            dontDo: [
                'Non attendere troppo per inviare la domanda: il termine di 68 giorni è perentorio',
                'Non dimenticare di dichiarare eventuali altre attività lavorative in corso'
            ],
            preserveEvidence: [],
            askHelpWhen: [
                'In caso di errori nel calcolo dei contributi',
                'Se la domanda viene respinta senza motivazione chiara'
            ],
            whoCanHelp: ['Online sul sito INPS o tramite un Patronato'],
            checklist: [
                'Credenziali SPID, CIE o CNS',
                'Dati del datore di lavoro e dell\'ultimo rapporto lavorativo',
                'IBAN per l\'accredito dei pagamenti'
            ],
            sources: [
                {
                    title: 'Scheda prestazione NASpI',
                    organization: 'INPS',
                    url: 'https://www.inps.it/it/it/dettaglio-scheda.schede-paginazione.scheda-info.50508.naspi-indennit-mensile-di-disoccupazione.html',
                    type: 'official',
                    usedFor: 'Informazioni sui requisiti e invio domanda',
                    lastCheckedAt: '2024-05-13'
                }
            ]
        },
        {
            id: 'dimissioni-telematiche',
            slug: 'come-dare-le-dimissioni-telematiche',
            title: 'Come dare le dimissioni telematiche',
            category: 'lavoro',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 15,
            mainEntity: 'Ministero del Lavoro / INPS',
            summary: 'Procedura obbligatoria per comunicare le dimissioni volontarie o la risoluzione consensuale.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2024-05-13',
            scenario: 'Hai deciso di lasciare il tuo posto di lavoro e devi comunicarlo formalmente secondo la normativa vigente.',
            whenToDo: 'Quando si intende interrompere volontariamente un rapporto di lavoro subordinato.',
            whatYouNeed: [
                'Credenziali SPID o CIE',
                'Indirizzo email del datore di lavoro (anche PEC)',
                'Data di inizio del rapporto di lavoro e data di decorrenza delle dimissioni'
            ],
            whereToDo: 'Online sul portale del Ministero del Lavoro o tramite soggetti abilitati (Patronati, Sindacati)',
            steps: [
                'Accedi al portale Servizi Lavoro del Ministero',
                'Seleziona "Dimissioni Volontarie"',
                'Inserisci i dati del rapporto di lavoro e dell\'azienda',
                'Invia il modulo e conserva la ricevuta con il codice identificativo'
            ],
            estimatedCosts: 'Gratuito (se fatto autonomamente online)',
            commonErrors: [
                'Sbagliare la data di decorrenza (il giorno successivo all\'ultimo giorno di lavoro)',
                'Non rispettare il periodo di preavviso previsto dal contratto',
                'Dimenticare che per i genitori con figli sotto i 3 anni la procedura è diversa (convalida ITL)'
            ],
            officialLinks: ['https://servizi.lavoro.gov.it/'],
            
            // Backward compatibility
            question: 'Qual è la procedura corretta per dimettersi?',
            whatIsHappening: 'Le dimissioni volontarie e la risoluzione consensuale del rapporto di lavoro devono essere effettuate esclusivamente in modalità telematica, pena l\'inefficacia delle stesse.',
            warningSigns: [],
            doNow: [
                'Accedi al portale Servizi Lavoro del Ministero',
                'Seleziona "Dimissioni Volontarie"',
                'Inserisci i dati del rapporto di lavoro e dell\'azienda',
                'Invia il modulo e conserva la ricevuta con il codice identificativo'
            ],
            dontDo: [
                'Non consegnare solo un foglio di carta al datore di lavoro: non è più sufficiente per legge',
                'Non sbagliare il calcolo del preavviso per evitare trattenute in busta paga'
            ],
            preserveEvidence: [],
            askHelpWhen: [
                'In caso di dubbi sul calcolo del preavviso',
                'Se il rapporto di lavoro non risulta nei sistemi ministeriali'
            ],
            whoCanHelp: ['Online sul portale del Ministero del Lavoro o tramite soggetti abilitati (Patronati, Sindacati)'],
            checklist: [
                'Credenziali SPID o CIE',
                'Indirizzo email del datore di lavoro (anche PEC)',
                'Data di inizio del rapporto di lavoro e data di decorrenza delle dimissioni'
            ],
            sources: [
                {
                    title: 'Portale Servizi Lavoro',
                    organization: 'Ministero del Lavoro e delle Politiche Sociali',
                    url: 'https://servizi.lavoro.gov.it/',
                    type: 'official',
                    usedFor: 'Invio telematico delle dimissioni',
                    lastCheckedAt: '2024-05-13'
                }
            ]
        }
    ]
};
