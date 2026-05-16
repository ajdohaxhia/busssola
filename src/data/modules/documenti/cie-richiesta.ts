import { Module } from '@/types';

export const cie_richiesta: Module = {
    id: 'cie-richiesta',
    lastUpdated: '2026-05-16',
    title: 'Carta d\'Identità Elettronica (CIE)',
    description: 'Guida completa alla richiesta, rinnovo e smarrimento della CIE.',
    category: 'documenti',
    difficulty: 'base',
    icon: 'IdCard',
    lessons: [
        {
            id: 'cie-richiesta-rinnovo',
            slug: 'richiesta-rinnovo-cie',
            title: 'Come richiedere o rinnovare la CIE',
            category: 'documenti',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 20,
            mainEntity: 'Ministero dell\'Interno',
            summary: 'La CIE è il documento principale per l\'identificazione. Ecco come richiederla al Comune.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            prerequisites: ['Codice Fiscale', 'Prenotazione appuntamento al Comune'],
            whatToPrepare: [
                'Vecchia carta d\'identità (o denuncia di furto/smarrimento)',
                'Fotografia formato tessera recente',
                'Tessera sanitaria',
                'Denaro per i diritti di segreteria'
            ],
            estimatedCosts: 'Circa 22€ (variabile in base al Comune)',
            timeToComplete: '15 minuti allo sportello',
            steps: [
                'Accedi al sito Prenotazioni CIE del Ministero',
                'Registrati e prenota un appuntamento nel tuo Comune',
                'Presentati il giorno dell\'appuntamento con i documenti richiesti',
                'Fornisci la fotografia e i dati biometrici',
                'Paga i diritti di segreteria',
                'Ricevi la carta per posta entro 6 giorni lavorativi'
            ],
            officialLinksV2: [
                {
                    sourceId: 'cieHome',
                    useWhen: 'Per prenotare l\'appuntamento e vedere i costi.',
                    beforeOpening: ['SPID o CIE'],
                    warning: 'Il servizio di prenotazione è attivo solo se il Comune è convenzionato.'
                }
            ],
            commonErrors: [
                'Portare una foto non conforme agli standard',
                'Dimenticare di portare la vecchia carta d\'identità',
                'Non aver prenotato l\'appuntamento (in molti Comuni è obbligatorio)'
            ],
            dontDo: [
                'Non attendere la scadenza se hai in programma viaggi internazionali'
            ],
            ifYouHaveProblems: [
                'Contatta l\'ufficio anagrafe del tuo Comune'
            ],
            checklist: [
                'Ho prenotato l\'appuntamento',
                'Ho la foto tessera conforme',
                'Ho la tessera sanitaria',
                'Ho il denaro contante/carta per i diritti',
                'Ho la denuncia (se furto/smarrimento)'
            ],
            faqs: [
                { q: 'Quanto tempo prima posso rinnovare la CIE?', a: 'Puoi rinnovare la CIE a partire da 180 giorni prima della scadenza.' },
                { q: 'Quanto costa?', a: 'Il costo è di 16,79€ per lo Stato più i diritti di segreteria del Comune, che variano.' }
            ],
            sources: [
                {
                    title: 'Portale CIE',
                    organization: 'Ministero dell\'Interno',
                    url: 'https://www.cartaidentita.interno.gov.it/',
                    type: 'official',
                    usedFor: 'Informazioni ufficiali e prenotazioni',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        }
    ]
};
