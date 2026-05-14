import { LearningPath } from "@/types";

export const LEARNING_PATHS: LearningPath[] = [
    {
        id: 'inizia-da-qui',
        title: 'Inizia da qui',
        description: "I passi fondamentali per costruire una base solida di sicurezza digitale. Ideale per chi vuole capire come proteggersi senza stress.",
        audience: 'Tutti',
        moduleIds: [
            'modulo-01-primo-soccorso',
            'modulo-02-account-security',
            'modulo-03-truffe-phishing',
            'modulo-07-privacy-smartphone'
        ],
        estimatedDuration: '1 ora',
        cta: 'Comincia il percorso',
        relatedPathIds: ['proteggi-account', 'relazioni-social'],
        type: 'onboarding',
        level: 'base'
    },
    {
        id: 'proteggi-account',
        title: 'Proteggi i tuoi account',
        description: "Un percorso tecnico ma accessibile per blindare i tuoi profili social, email e servizi e sapere cosa fare se qualcosa va storto.",
        audience: 'Tutti',
        moduleIds: [
            'modulo-02-account-security',
            'modulo-02b-account-security',
            'modulo-07-privacy-smartphone',
            'modulo-07b-privacy-smartphone'
        ],
        estimatedDuration: '1 ora e 30',
        cta: 'Metti al sicuro i tuoi dati',
        relatedPathIds: ['inizia-da-qui', 'sos-digitale'],
        type: 'security',
        level: 'intermedia'
    },
    {
        id: 'sos-digitale',
        title: 'Se ti è successo qualcosa',
        description: "Protocolli di emergenza per situazioni critiche: ricatti, furti d'identità, stalking o accessi non autorizzati ai tuoi profili.",
        audience: 'Chiunque sia in emergenza',
        moduleIds: [
            'modulo-01-primo-soccorso',
            'modulo-01b-primo-soccorso',
            'modulo-04-sextortion-ricatti',
            'modulo-06-stalking-doxxing',
            'modulo-06b-stalking-doxxing'
        ],
        estimatedDuration: '1 ora (situazionale)',
        cta: 'Chiedi aiuto ora',
        relatedPathIds: ['proteggi-account', 'relazioni-social'],
        type: 'emergency',
        level: 'avanzata'
    },
    {
        id: 'relazioni-social',
        title: 'Relazioni e sicurezza online',
        description: "Gestisci i social, capisci i rischi delle relazioni online e impara a difenderti da grooming, stalking e altre forme di abuso digitale.",
        audience: 'Ragazzi e giovani adulti',
        moduleIds: [
            'modulo-04-sextortion-ricatti',
            'modulo-05-grooming-minori',
            'modulo-05b-grooming-minori',
            'modulo-06-stalking-doxxing',
            'modulo-08-scuola-famiglia'
        ],
        estimatedDuration: '2 ore',
        cta: 'Naviga sicuro',
        relatedPathIds: ['inizia-da-qui', 'sos-digitale'],
        type: 'relational',
        level: 'base'
    },
    {
        id: 'genitori-famiglie',
        title: 'Genitori e scuola',
        description: "Come accompagnare i figli nel mondo digitale e gestire i rischi scolastici e familiari legati alla tecnologia.",
        audience: 'Genitori e familiari',
        moduleIds: [
            'modulo-05-grooming-minori',
            'modulo-05b-grooming-minori',
            'modulo-08-scuola-famiglia',
            'modulo-08b-scuola-famiglia'
        ],
        estimatedDuration: '1 ora e 30',
        cta: 'Supporta la tua famiglia',
        relatedPathIds: ['inizia-da-qui', 'sos-digitale'],
        type: 'audience',
        level: 'base'
    },
    {
        id: 'truffe-soldi',
        title: 'Truffe e soldi',
        description: "Proteggi i tuoi risparmi e impara a riconoscere i segnali di phishing, smishing e truffe sui marketplace online.",
        audience: 'Tutti',
        moduleIds: [
            'modulo-03-truffe-phishing',
            'modulo-03b-truffe-phishing',
            'modulo-01b-primo-soccorso'
        ],
        estimatedDuration: '1 ora',
        cta: 'Difendi i tuoi risparmi',
        relatedPathIds: ['inizia-da-qui', 'proteggi-account'],
        type: 'security',
        level: 'intermedia'
    },
    {
        id: 'documenti-essenziali',
        title: 'Documenti Essenziali',
        description: "Tutto quello che serve per gestire la tua identità digitale e i documenti fondamentali: SPID, CIE e Tessera Sanitaria.",
        audience: 'Tutti i cittadini',
        moduleIds: [
            'modulo-09-documenti-identita'
        ],
        estimatedDuration: '30 minuti',
        cta: 'Gestisci i tuoi documenti',
        relatedPathIds: ['inizia-da-qui', 'lavoro-e-diritti'],
        type: 'onboarding',
        level: 'base'
    },
    {
        id: 'lavoro-e-diritti',
        title: 'Lavoro e Diritti',
        description: "Guide pratiche per muoversi nel mondo del lavoro: NASpI, dimissioni e altri servizi INPS fondamentali.",
        audience: 'Lavoratori e disoccupati',
        moduleIds: [
            'modulo-10-lavoro-disoccupazione'
        ],
        estimatedDuration: '45 minuti',
        cta: 'Scopri i tuoi diritti',
        relatedPathIds: ['documenti-essenziali', 'inizia-da-qui'],
        type: 'onboarding',
        level: 'base'
    }
];
