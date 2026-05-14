import { Module } from '@/types';

export const modulo_08_scuola_famiglia: Module = {
    id: 'modulo-08-scuola-famiglia',
    lastUpdated: '2026-05-14',
    title: 'Scuola e Famiglia Digitale',
    description: 'Strumenti per genitori ed educatori per gestire la vita digitale dei minori in modo consapevole e sicuro.',
    category: 'famiglia',
    difficulty: 'base',
    icon: 'GraduationCap',
    themeColor: 'accent-orange',
    lessons: [
        {
            id: 'digital-pact-family',
            slug: 'come-creare-un-patto-digitale-famiglia',
            title: 'Come creare un patto digitale di famiglia',
            mainEntity: 'Generazioni Connesse',
            category: 'famiglia',
            audience: ['parents', 'teachers'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Un accordo scritto tra genitori e figli per stabilire regole chiare e condivise sull\'uso di smartphone e social.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: ['Figli che usano o iniziano a usare dispositivi digitali'],
            whatToPrepare: ['Un foglio di carta o un documento digitale', 'Tempo per parlarne insieme'],
            estimatedCosts: 'Gratis',
            timeToComplete: '30-60 minuti per la discussione',
            steps: [
                'Scegli un momento di calma, non farlo come punizione',
                'Definisci i tempi d\'uso: quando si può e quando no (es: niente a tavola, niente dopo le 21)',
                'Stabilisci quali app possono essere scaricate solo con permesso',
                'Decidi insieme le conseguenze in caso di violazione delle regole',
                'Prevedi anche degli impegni per i genitori (es: dare il buon esempio)',
                'Firmate il patto e appendetelo in un luogo visibile'
            ],
            officialLinksV2: [
                {
                    sourceId: 'antiviolenza1522',
                    label: 'Supporto Famiglie',
                    useWhen: 'Se la situazione in famiglia diventa conflittuale a causa del digitale',
                    beforeOpening: []
                }
            ],
            commonErrors: [
                'Imporre il patto dall\'alto senza ascoltare i figli',
                'Prevedere solo divieti e nessuna opportunità',
                'Non aggiornare il patto al crescere dell\'età del figlio'
            ],
            dontDo: [
                'Non usare il sequestro del telefono come unica soluzione a ogni problema'
            ],
            ifYouHaveProblems: [
                'Se il rapporto col digitale diventa un\'ossessione, contatta un consultorio o uno psicologo dell\'età evolutiva'
            ],
            checklist: [
                'Regole sui tempi scritte',
                'App permesse definite',
                'Impegni dei genitori inseriti',
                'Firma di tutti i componenti'
            ],
            sources: [
                {
                    title: 'Vademecum per genitori',
                    organization: 'Generazioni Connesse',
                    url: 'https://www.generazioniconnesse.it/',
                    type: 'official',
                    usedFor: 'Modelli di patti digitali',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'parental-control-setup',
            slug: 'come-impostare-parental-control-realistico',
            title: 'Come impostare il Parental Control',
            mainEntity: 'Google / Apple / Amazon',
            category: 'famiglia',
            audience: ['parents'],
            level: 'intermedia',
            estimatedMinutes: 20,
            summary: 'Guida tecnica per configurare i limiti di tempo e i filtri contenuti su iPhone, Android e console da gioco.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: ['Smartphone del genitore', 'Smartphone del figlio'],
            whatToPrepare: ['Accesso agli account (Google o Apple) del figlio'],
            estimatedCosts: 'Gratis (usando le funzioni integrate di sistema)',
            timeToComplete: '20 minuti',
            steps: [
                'Per Android: scarica ed usa l\'app "Google Family Link"',
                'Per iPhone: usa la funzione "In famiglia" e "Tempo di utilizzo"',
                'Attiva il filtro per i contenuti espliciti su Google Search e YouTube',
                'Imposta il blocco automatico degli acquisti in-app (per evitare spese folli)',
                'Configura il limite di tempo giornaliero e l\'ora di "buonanotte"',
                'Spiega al figlio perché lo stai facendo: è una protezione, non un controllo spionistico'
            ],
            officialLinksV2: [
                {
                    sourceId: 'emergenzaInfanzia114',
                    useWhen: 'Se sospetti che il minore stia visualizzando contenuti pericolosi nonostante i filtri',
                    beforeOpening: []
                }
            ],
            commonErrors: [
                'Pensare che il parental control sostituisca il dialogo',
                'Usare password di sblocco troppo facili (es: data di nascita)',
                'Non controllare i permessi di geolocalizzazione'
            ],
            dontDo: [
                'Non spiare ogni singolo messaggio: rispetta la privacy del minore se non ci sono segnali di pericolo'
            ],
            ifYouHaveProblems: [
                'Consulta le guide ufficiali Apple Support o Google Help per i passaggi tecnici specifici del tuo modello'
            ],
            checklist: [
                'Family Link o Tempo di Utilizzo configurato',
                'Blocco acquisti attivo',
                'Filtro contenuti espliciti attivo',
                'Ora di spegnimento impostata'
            ],
            sources: [
                {
                    title: 'Guida alla sicurezza dei minori online',
                    organization: 'Polizia Postale',
                    url: 'https://www.commissariatodips.it/consigli/per-i-genitori/index.html',
                    type: 'official',
                    usedFor: 'Consigli tecnici e pedagogici',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        }
    ]
};
