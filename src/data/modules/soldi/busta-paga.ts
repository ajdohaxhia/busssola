import { Module } from '@/types';

export const busta_paga: Module = {
    id: 'busta-paga',
    lastUpdated: '2026-05-16',
    title: 'Capire la Busta Paga',
    description: 'Guida essenziale per leggere le voci principali della tua retribuzione.',
    category: 'soldi',
    difficulty: 'base',
    icon: 'Receipt',
    lessons: [
        {
            id: 'busta-paga-basi',
            slug: 'leggere-busta-paga',
            title: 'Le voci fondamentali della busta paga',
            category: 'soldi',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 10,
            mainEntity: 'INPS',
            summary: 'Capire cosa sono RAL, netto, trattenute e contributi è fondamentale per ogni lavoratore.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            prerequisites: ['Busta paga cartacea o PDF'],
            whatToPrepare: ['Il tuo contratto di lavoro'],
            estimatedCosts: 'Gratis',
            timeToComplete: '10 minuti',
            steps: [
                'Individua la RAL (Retribuzione Annua Lorda)',
                'Controlla le trattenute fiscali (IRPEF)',
                'Verifica i contributi previdenziali INPS',
                'Controlla le voci variabili (ore straordinarie, rimborsi)',
                'Confronta il netto in busta con quello pattuito'
            ],
            officialLinksV2: [
                {
                    sourceId: 'inpsHome',
                    useWhen: 'Per approfondire la previdenza.',
                    beforeOpening: ['Codice Fiscale']
                }
            ],
            commonErrors: ['Confondere il lordo con il netto', 'Non controllare le trattenute IRPEF'],
            dontDo: ['Non dare per scontato che sia sempre corretta'],
            ifYouHaveProblems: ['Contatta il tuo ufficio risorse umane o un consulente del lavoro'],
            checklist: ['RAL verificata', 'Netto controllato', 'Contributi verificati'],
            faqs: [{ q: 'Cosa è la RAL?', a: 'La retribuzione lorda prima di tasse e contributi.' }],
            sources: [{ title: 'Portale INPS', organization: 'INPS', url: 'https://www.inps.it/', type: 'official', usedFor: 'Normativa previdenziale', lastCheckedAt: '2026-05-16' }]
        }
    ]
};
