import { Module } from '@/types';

export const modulo_03_truffe_phishing: Module = {
    id: 'modulo-03-truffe-phishing',
    lastUpdated: '2026-10-21',
    title: 'Truffe e Phishing',
    description: 'Come riconoscere i tentativi di truffa online, proteggere i propri dati e reagire in caso di errore.',
    category: 'truffe',
    difficulty: 'base',
    icon: 'AlertTriangle',
    themeColor: 'accent-orange',
    lessons: [
        {
            id: 'phishing-basics',
            slug: 'riconoscere-phishing-basi',
            title: 'Come riconoscere il Phishing',
            mainEntity: 'Polizia Postale',
            category: 'truffe',
            audience: ['adults', 'minors', 'prevention'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Il phishing è la tecnica più usata per rubare password. Impara i segnali per non abboccare.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: ['Ricezione di email o SMS'],
            whatToPrepare: ['Nessun documento'],
            estimatedCosts: 'Gratis',
            timeToComplete: '2 minuti per la verifica',
            steps: [
                'Controlla il mittente: l\'indirizzo email deve essere quello ufficiale (es: @inps.it, non @inps-assistenza.com)',
                'Diffida dai messaggi che creano urgenza o paura (es: "Conto bloccato!", "Paga ora o perdi tutto")',
                'Guarda i link senza cliccare: passa il mouse sopra per vedere l\'indirizzo reale',
                'Cerca errori di grammatica o loghi sgranati',
                'Non inserire mai password partendo da un link ricevuto: vai sempre sul sito digitandolo tu'
            ],
            officialLinksV2: [
                {
                    sourceId: 'commissariatoPs',
                    useWhen: 'Per leggere gli alert aggiornati sulle nuove truffe in circolazione',
                    beforeOpening: []
                }
            ],
            commonErrors: [
                'Fidarsi perché il messaggio ha i loghi giusti',
                'Pensare che un SMS sia più sicuro di una email'
            ],
            dontDo: [
                'Non cliccare mai sui link per "sbloccare" un account',
                'Non scaricare allegati da mittenti sconosciuti'
            ],
            ifYouHaveProblems: [
                'Se hai cliccato, cambia subito la password del servizio e attiva la 2FA'
            ],
            checklist: [
                'Ho controllato l\'indirizzo del mittente',
                'Ho verificato l\'URL del link',
                'Non ho inserito dati sensibili'
            ],
            sources: [
                {
                    title: 'Cos\'è il phishing',
                    organization: 'Polizia Postale',
                    url: 'https://www.commissariatodips.it/consigli/per-i-cittadini/il-phishing/index.html',
                    type: 'official',
                    usedFor: 'Definizione e consigli',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'phishing-pagopa',
            slug: 'phishing-pagopa-riconoscere-avvisi-falsi',
            title: 'Come capire se un avviso pagoPA è vero',
            mainEntity: 'pagoPA S.p.A.',
            category: 'truffe',
            audience: ['adults', 'prevention'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Sempre più truffatori inviano finti avvisi di pagamento pagoPA. Ecco come distinguerli da quelli reali.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: ['Ricezione di un avviso di pagamento'],
            whatToPrepare: ['L\'avviso cartaceo o digitale ricevuto'],
            estimatedCosts: 'Gratis',
            timeToComplete: '2 minuti',
            steps: [
                'Controlla la presenza del logo pagoPA e dell\'ente creditore (Comune, INPS, ecc.)',
                'Verifica il codice IUV (18 cifre): deve essere unico',
                'Usa l\'app IO: se l\'avviso è reale, lo troverai spesso già caricato nei tuoi messaggi',
                'Prova a inquadrare il QR code con l\'app IO o della banca: se il sistema non lo riconosce, è falso',
                'Non pagare mai tramite link ricevuti via SMS che portano a siti di carte di credito'
            ],
            officialLinksV2: [
                {
                    sourceId: 'pagopaPhishing',
                    useWhen: 'Per verificare se la comunicazione ricevuta segue gli standard di sicurezza',
                    beforeOpening: ['Tieni l\'avviso sottomano']
                }
            ],
            commonErrors: [
                'Pagare subito per paura di sanzioni senza verificare l\'ente',
                'Inserire i dati della carta su siti che non sono quelli della banca o di pagoPA'
            ],
            dontDo: [
                'Non fidarti di avvisi che chiedono pagamenti in criptovalute o ricariche Postepay'
            ],
            ifYouHaveProblems: [
                'In caso di dubbio, contatta l\'ufficio relazioni con il pubblico dell\'ente creditore'
            ],
            checklist: [
                'Logo ente presente',
                'Codice IUV di 18 cifre presente',
                'QR code verificato con app ufficiale'
            ],
            sources: [
                {
                    title: 'Sicurezza pagoPA',
                    organization: 'pagoPA S.p.A.',
                    url: 'https://assistenza.pagopa.gov.it/hc/it/articles/34467698417297-Come-evitare-tentativi-di-phishing-o-truffa-a-nome-di-pagoPA',
                    type: 'official',
                    usedFor: 'Indicatori di frode',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'falsi-rilevatori-truffe-ia',
            slug: 'perche-non-fidarsi-falsi-rilevatori-truffe-ia',
            title: 'Perché non fidarsi di finti "Rilevatori di truffe IA"',
            mainEntity: 'Polizia Postale',
            category: 'truffe',
            audience: ['adults', 'prevention', 'cittadini'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'I siti che promettono di "analizzare truffe con l’IA" spesso sono inaffidabili o raccolgono dati privati. Ecco il metodo ufficiale per verificare un messaggio sospetto.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-10-21',
            prerequisites: ['Ricezione di un messaggio, email o SMS sospetto'],
            whatToPrepare: ['Indirizzo web (URL) o mittente del messaggio da esaminare'],
            estimatedCosts: 'Gratis',
            timeToComplete: '1 minuto',
            steps: [
                'Non incollare testi privati o screenshot contenenti dati sensibili in presunti "scanner IA online": molti di questi siti sono non ufficiali e potrebbero archiviare le tue informazioni.',
                'Controlla il dominio reale: la Pubblica Amministrazione italiana usa solo domini che terminano con .gov.it, .inps.it, .agenziaentrate.gov.it, .carabinieri.it, .poliziadistato.it. Tutto ciò che ha suffissi diversi (es. .cc, .top, .online, .info-inps) è una frode.',
                'Verifica la regola del contatto diretto: né le banche né gli enti pubblici chiedono mai password, PIN dispositivi, codici OTP ricevuti via SMS o autorizzazioni di bonifico per messaggio.',
                'Usa esclusivamente l’applicazione ufficiale scaricata dagli store certificati (App Store o Google Play) o digita manualmente l’indirizzo web ufficiale dell’istituto.',
                'In caso di persistente dubbio o tentativo di estorsione, effettua una segnalazione sul portale ufficiale del Commissariato di P.S. Online della Polizia Postale.'
            ],
            officialLinksV2: [
                {
                    sourceId: 'commissariatoPs',
                    useWhen: 'Per segnalare alla Polizia Postale una truffa o un finto sito istituzionale',
                    beforeOpening: ['Non cliccare sui link contenuti nel messaggio truffaldino']
                },
                {
                    sourceId: 'certAgidHome',
                    useWhen: 'Per consultare il bollettino ufficiale CERT-AgID sulle campagne malevole in corso',
                    beforeOpening: []
                }
            ],
            commonErrors: [
                'Credere che un algoritmo o un finto prompt IA possa certificare al 100% che un link sia sicuro',
                'Inviare numeri di telefono, IBAN o codici fiscali a bot o strumenti online non istituzionali'
            ],
            dontDo: [
                'Non fidarti mai di "bollini di sicurezza" inventati su siti terzi',
                'Non rispondere all’SMS o al messaggio WhatsApp anche solo per insultare i truffatori (confermerebbe che il tuo numero è attivo)'
            ],
            ifYouHaveProblems: [
                'Se hai già inserito credenziali su un sito clone, blocca immediatamente le carte e cambia le password dai canali ufficiali'
            ],
            checklist: [
                'Non ho inserito dati sensibili su siti terzi',
                'Ho verificato l\'indirizzo ufficiale sul browser',
                'Ho segnalato il tentativo di phishing alla Polizia Postale se necessario'
            ],
            sources: [
                {
                    title: 'Come difendersi dal phishing e dalle truffe online',
                    organization: 'Polizia Postale — Commissariato di P.S. Online',
                    url: 'https://www.commissariatodips.it/consigli/per-i-cittadini/il-phishing/index.html',
                    type: 'official',
                    usedFor: 'Linee guida ufficiali di verifica',
                    lastCheckedAt: '2026-10-21'
                }
            ]
        }
    ]
};
