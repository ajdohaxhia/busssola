import { Module } from '@/types';

export const modulo_03_truffe_phishing: Module = {
    id: 'modulo-03-truffe-phishing',
    lastUpdated: '2026-05-14',
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
        }
    ]
};
