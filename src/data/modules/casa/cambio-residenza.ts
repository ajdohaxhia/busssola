import { Module } from '@/types';

export const cambio_residenza: Module = {
    id: 'cambio-residenza',
    lastUpdated: '2026-05-16',
    title: 'Cambio di Residenza',
    description: 'Guida completa alla dichiarazione di cambio residenza online o allo sportello.',
    category: 'casa',
    difficulty: 'base',
    icon: 'Home',
    lessons: [
        {
            id: 'cambio-residenza-procedura',
            slug: 'come-fare-cambio-residenza',
            title: 'Come fare il cambio di residenza',
            category: 'casa',
            audience: ['cittadini', 'famiglie'],
            level: 'base',
            estimatedMinutes: 15,
            mainEntity: 'ANPR',
            summary: 'La residenza è dove hai la dimora abituale. Ecco come regolarizzare la tua posizione in pochi passi.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            prerequisites: ['SPID, CIE o CNS', 'Dati del nuovo immobile'],
            whatToPrepare: ['Dati catastali casa', 'Contratto affitto o titolo possesso', 'Documenti familiari'],
            estimatedCosts: 'Gratis',
            timeToComplete: '20 minuti online',
            steps: [
                'Accedi al portale ANPR con identità digitale',
                'Seleziona "Servizi Anagrafici" -> "Cambio di Residenza"',
                'Inserisci i dati della nuova abitazione',
                'Dichiara il titolo di possesso',
                'Aggiungi i componenti del nucleo familiare',
                'Invia la pratica e conserva il numero di protocollo',
                'Attendi la verifica della Polizia Locale (entro 45gg)'
            ],
            officialLinksV2: [
                {
                    sourceId: 'anprResidenza',
                    useWhen: 'Per la pratica ufficiale.',
                    beforeOpening: ['SPID/CIE']
                }
            ],
            commonErrors: ['Indirizzo incompleto', 'Dati catastali errati'],
            dontDo: ['Non dichiarare una residenza dove non abiti abitualmente'],
            ifYouHaveProblems: ['Contatta l\'anagrafe del tuo Comune'],
            checklist: ['Pratica inviata', 'Protocollo salvato', 'Verifica avvenuta'],
            faqs: [{ q: 'Cosa succede se non faccio la verifica?', a: 'La pratica può essere respinta e la residenza non confermata.' }],
            sources: [{ title: 'Portale ANPR', organization: 'Ministero dell\'Interno', url: 'https://www.anagrafenazionale.interno.it/', type: 'official', usedFor: 'Procedura online', lastCheckedAt: '2026-05-16' }]
        }
    ]
};
