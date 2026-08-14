import { Module } from '@/types';

export const phishing_bancario: Module = {
    id: 'phishing-bancario',
    lastUpdated: '2026-05-16',
    title: 'Difesa dal Phishing Bancario',
    description: 'Come riconoscere gli SMS e le email false che chiedono dati bancari.',
    category: 'truffe',
    difficulty: 'base',
    icon: 'AlertTriangle',
    lessons: [
        {
            id: 'phishing-bancario-riconoscere',
            slug: 'riconoscere-phishing-bancario',
            title: 'Come distinguere un avviso vero da una truffa',
            category: 'truffe',
            audience: ['cittadini', 'anziani'],
            level: 'base',
            estimatedMinutes: 5,
            mainEntity: 'Banche / Polizia Postale',
            summary: 'Le banche non ti chiederanno mai i codici di accesso via SMS o link diretti.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            prerequisites: ['Attenzione ai dettagli'],
            whatToPrepare: ['Senso critico'],
            estimatedCosts: 'Gratis',
            timeToComplete: '5 minuti',
            steps: [
                'Controlla sempre il mittente (spesso è un numero generico o una mail strana)',
                'Non cliccare mai sui link negli SMS',
                'Vai sul sito ufficiale della banca digitando l\'indirizzo manualmente',
                'Contatta il numero ufficiale della banca se hai dubbi',
                'Non comunicare mai i codici OTP via telefono o chat'
            ],
            officialLinksV2: [
                {
                    sourceId: 'commissariatoPs',
                    useWhen: 'Per segnalare o informarti sulle truffe attuali.',
                    beforeOpening: ['Nessuno']
                }
            ],
            commonErrors: [
                'Cliccare sul link dell\'SMS',
                'Rispondere all\'SMS o alla chiamata'
            ],
            dontDo: [
                'Non condividere mai il codice OTP di conferma transazione'
            ],
            ifYouHaveProblems: [
                'Chiama immediatamente il numero verde della tua banca per bloccare il conto'
            ],
            checklist: [
                'Ho verificato il mittente',
                'Non ho cliccato il link',
                'Ho chiamato il numero ufficiale della banca',
                'Ho segnalato il numero di telefono'
            ],
            faqs: [
                { q: 'Cosa faccio se ho già cliccato?', a: 'Cambia subito la password della banca e chiama l\'assistenza per bloccare ogni operazione sospetta.' }
            ],
            sources: [
                {
                    title: 'Consigli contro il Phishing',
                    organization: 'Polizia Postale',
                    url: 'https://www.commissariatodips.it/consigli/internet/phishing/index.html',
                    type: 'official',
                    usedFor: 'Informazioni ufficiali sulle truffe',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        }
    ]
};
