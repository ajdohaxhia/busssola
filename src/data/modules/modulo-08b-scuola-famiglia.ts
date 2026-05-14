import { Module } from '@/types';

export const modulo_08b_scuola_famiglia: Module = {
    id: 'modulo-08b-scuola-famiglia',
    lastUpdated: '2024-05-13',
    title: 'Modulo 8b: Scuola e Famiglia (Approfondimento)',
    description: 'Approfondimento sui rischi dello Sharenting e sulle conseguenze legali del sexting tra minori.',
    category: 'famiglia',
    difficulty: 'intermedia',
    icon: 'GraduationCap',
    themeColor: 'accent-yellow',
    lessons: [
        {
            id: 'sharenting-risks',
            slug: 'sharenting-rischi-pubblicare-foto-figli-online',
            title: 'Sharenting: I rischi dell\'orgoglio',
            mainEntity: 'Garante Privacy',
            category: 'famiglia',
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
            steps: [
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
                    lastCheckedAt: '2026-05-14'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'family-digital-agreement',
            slug: 'patto-digitale-famiglia-regole-condivise',
            title: 'Patto digitale di famiglia',
            mainEntity: 'AgID',
            category: 'famiglia',
            audience: ['parents', 'minors'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Non limitarti a dare un telefono: firma un patto. Uno strumento per stabilire regole, tempi e responsabilità in modo condiviso.',
            status: 'published',
            emergencyLevel: 'low',
            scenario: 'Stai per regalare il primo smartphone a tuo figlio. Vuoi che lo usi in modo responsabile ma non vuoi sembrare solo "quello che mette divieti".',
            question: 'Come posso dare lo smartphone senza perdere il controllo?',
            whatIsHappening: 'Il "Patto Digitale" è un contratto simbolico (ma efficace) tra genitori e figli. Serve a chiarire che lo smartphone è uno strumento potente che richiede responsabilità. Invece di subire le regole, il minore le accetta consapevolmente in cambio della fiducia.',
            warningSigns: [
                'Uso notturno eccessivo dello smartphone.',
                'Il minore si isola durante i pasti per stare al telefono.',
                'Reazioni aggressive se il tempo d\'uso viene limitato.'
            ],
            doNow: [
                'Scarica o scrivi un "Patto di Famiglia" (trovi modelli su Save the Children o Internet Matters).',
                'Stabilite insieme gli "orari offline" (es: niente telefoni a tavola, niente telefoni dopo le 21:00).',
                'Definite le "Zone Bianche" della casa (es: la camera da letto è una zona senza smartphone di notte).',
                'Chiarisci che il genitore ha il diritto/dovere di conoscere le password finché il minore non dimostra piena maturità.',
                'Stabilite le conseguenze per la violazione del patto (es: riduzione del tempo d\'uso).'
            ],
            steps: [
                'Scarica o scrivi un "Patto di Famiglia" (trovi modelli su Save the Children o Internet Matters).',
                'Stabilite insieme gli "orari offline" (es: niente telefoni a tavola, niente telefoni dopo le 21:00).',
                'Definite le "Zone Bianche" della casa (es: la camera da letto è una zona senza smartphone di notte).',
                'Chiarisci che il genitore ha il diritto/dovere di conoscere le password finché il minore non dimostra piena maturità.',
                'Stabilite le conseguenze per la violazione del patto (es: riduzione del tempo d\'uso).'
            ],
            dontDo: [
                'Non imporre il patto senza discussione: ascolta le esigenze di tuo figlio.',
                'Non violare tu stesso il patto: i genitori devono essere i primi a dare l\'esempio (niente telefono a tavola anche per gli adulti!).'
            ],
            preserveEvidence: [
                'Conserva il patto cartaceo appeso in un luogo visibile (es: sul frigorifero).'
            ],
            askHelpWhen: [
                'Se noti che il minore non riesce assolutamente a rispettare i patti, manifestando una possibile dipendenza tecnologica.'
            ],
            whoCanHelp: [
                'Save the Children Italia',
                'Rete dei Patti Digitali',
                'Pediatra / Psicologo infantile'
            ],
            checklist: [
                'Modello patto pronto',
                'Firma condivisa',
                'Orari offline certi',
                'Genitori danno esempio'
            ],
            sources: [
                {
                    title: 'Patto digitale tra genitori e figli',
                    organization: 'Save the Children',
                    url: 'https://www.savethechildren.it/blog-11/regole-uso-smartphone-minori-modello-patto-digitale',
                    type: 'nonprofit',
                    usedFor: 'Modello educativo e principi di responsabilità condivisa.',
                    lastCheckedAt: '2026-05-14'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
