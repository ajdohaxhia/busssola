import { Module } from '@/types';

export const modulo_08b_scuola_famiglia: Module = {
    id: 'modulo-08b-scuola-famiglia',
    title: 'Modulo 8b: Scuola e Famiglia (Approfondimento)',
    description: 'Approfondimento sui rischi dello Sharenting e sulle conseguenze legali del sexting tra minori.',
    category: 'school',
    difficulty: 'intermedia',
    icon: 'GraduationCap',
    themeColor: 'accent-yellow',
    lessons: [
        {
            id: 'sharenting-risks',
            slug: 'sharenting-rischi-pubblicare-foto-figli-online',
            title: 'Sharenting: I rischi dell\'orgoglio',
            category: 'school',
            audience: ['parents', 'teachers'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Perché pubblicare le foto dei tuoi figli sui social può esporli a pericoli che non avevi considerato.',
            status: 'published',
            emergencyLevel: 'low',
            scenario: 'Sei orgoglioso dei traguardi di tuo figlio e pubblichi regolarmente foto della sua vita quotidiana, della scuola e dello sport sui tuoi profili social aperti a tutti.',
            question: 'Cosa c\'è di male nel condividere la gioia dei miei figli?',
            whatIsHappening: 'Lo "Sharenting" (Share + Parenting) crea un\'identità digitale per il minore senza il suo consenso. Queste foto possono essere rubate per creare profili falsi, alimentare circuiti di pedopornografia "non convenzionale" o esporre il minore a bullismo futuro. Una volta online, perdi il controllo dell\'immagine.',
            warningSigns: [
                'Ricevi commenti da account sconosciuti che sembrano troppo interessati ai dettagli delle foto.',
                'Le foto includono dettagli della scuola, del parco o della casa (geolocalizzazione involontaria).',
                'Il profilo social su cui pubblichi è "Pubblico" e chiunque può scaricare le immagini.'
            ],
            doNow: [
                'Imposta i tuoi profili social su "Privato" e consenti la vista solo ad amici stretti.',
                'Evita di pubblicare foto dove il viso del minore è chiaramente visibile (usa emoticon o inquadrature di spalle).',
                'Non pubblicare mai foto del minore in situazioni intime (bagnetto, spiaggia, abbigliamento succinto).',
                'Chiedi il permesso al co-genitore prima di pubblicare (è un obbligo legale in Italia).'
            ],
            dontDo: [
                'Non pubblicare foto con la divisa scolastica o loghi di associazioni sportive identificabili.',
                'Non taggare la posizione geografica della casa o della scuola.',
                'Non ignorare il diritto alla privacy del minore: anche lui ha una dignità digitale.'
            ],
            preserveEvidence: [
                'Se trovi una foto di tuo figlio su un profilo che non conosci, fai uno screenshot e segnalalo immediatamente alla piattaforma.'
            ],
            askHelpWhen: [
                'Se scopri che le foto di tuo figlio circolano su siti esterni o forum.',
                'Se ricevi minacce o tentativi di estorsione legati a quelle foto.'
            ],
            whoCanHelp: [
                'Garante Privacy (Segnalazione rimozione foto minori)',
                'Polizia Postale',
                'Associazioni per la tutela dei minori (Save the Children)'
            ],
            checklist: [
                'Profilo privato',
                'Oscura viso',
                'No luoghi scuola',
                'Consenso altro genitore'
            ],
            sources: [
                {
                    title: 'Vademecum Sharenting',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/9933519',
                    type: 'official',
                    usedFor: 'Raccomandazioni ufficiali per genitori sulla tutela dell\'immagine dei minori.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
