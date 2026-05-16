import { Module } from '@/types';

export const telefono_rubato: Module = {
    id: 'telefono-rubato',
    lastUpdated: '2026-05-16',
    title: 'Emergenza: Telefono Rubato o Smarrito',
    description: 'Cosa fare subito per bloccare tutto, proteggere i dati e tentare il recupero.',
    category: 'emergenze',
    difficulty: 'base',
    icon: 'ShieldAlert',
    lessons: [
        {
            id: 'telefono-rubato-primi-passi',
            slug: 'telefono-rubato-cosa-fare',
            title: 'Cosa fare nei primi 10 minuti',
            category: 'emergenze',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 10,
            mainEntity: 'Polizia di Stato',
            summary: 'Il panico è il tuo peggior nemico. Ecco la sequenza operativa per blindare la tua identità.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            prerequisites: ['Conoscenza delle credenziali email principale'],
            whatToPrepare: [
                'IMEI del telefono (se segnato)',
                'Codice cliente dell\'operatore mobile'
            ],
            estimatedCosts: 'Gratis',
            timeToComplete: '10-15 minuti',
            steps: [
                'Contatta subito il tuo operatore per bloccare la SIM',
                'Accedi a "Trova il mio dispositivo" (Google/Apple) da un altro device',
                'Attiva la modalità "Smarrito" o "Blocca dispositivo"',
                'Cambia le password di email, banca e social',
                'Esci da tutti gli account dai dispositivi attivi',
                'Recati presso una caserma per sporgere denuncia (necessaria per il blocco IMEI)'
            ],
            officialLinksV2: [
                {
                    sourceId: 'poliziaPostaleSegnalazioni',
                    useWhen: 'Per sporgere denuncia.',
                    beforeOpening: ['Documento identità']
                }
            ],
            commonErrors: [
                'Aspettare sperando di ritrovarlo',
                'Non bloccare subito la SIM',
                'Non denunciare il furto'
            ],
            dontDo: [
                'Non cercare di recuperarlo da solo rischiando la sicurezza fisica'
            ],
            ifYouHaveProblems: [
                'Contatta immediatamente il tuo istituto bancario per bloccare carte collegate'
            ],
            checklist: [
                'SIM bloccata',
                'Account Google/Apple protetti',
                'Password email cambiate',
                'Denuncia sporta',
                'IMEI segnalato all\'operatore'
            ],
            faqs: [
                { q: 'Posso ritrovarlo se è spento?', a: 'Se è spento, la posizione GPS non è aggiornata, ma la modalità "Smarrito" attiva il blocco appena si connetterà.' }
            ],
            sources: [
                {
                    title: 'Consigli Polizia Postale',
                    organization: 'Polizia di Stato',
                    url: 'https://www.commissariatodips.it/',
                    type: 'official',
                    usedFor: 'Denuncia e procedure',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        }
    ]
};
