import { LearningPath } from "@/types";

export const LEARNING_PATHS: LearningPath[] = [
    {
        id: 'inizia-da-qui',
        title: 'Inizia da qui',
        description: "I passi fondamentali per costruire una base solida di sicurezza digitale. Ideale per chi vuole capire come proteggersi senza stress.",
        audience: 'Tutti',
        moduleIds: ['modulo-02-privacy-digitale', 'modulo-03-password', 'modulo-19-phishing'],
        estimatedDuration: '1 ora',
        cta: 'Comincia il percorso',
        relatedPathIds: ['proteggi-account', 'relazioni-social'],
        type: 'onboarding',
        level: 'base'
    },
    {
        id: 'proteggi-account',
        title: 'Proteggi i tuoi account',
        description: "Un percorso tecnico ma accessibile per blindare i tuoi profili social, email e servizi bancari, e sapere cosa fare se qualcosa va storto.",
        audience: 'Tutti',
        moduleIds: ['modulo-02-privacy-digitale', 'modulo-03-password', 'modulo-19-phishing', 'modulo-22-recupero-account'],
        estimatedDuration: '1 ora e 30',
        cta: 'Metti al sicuro i tuoi dati',
        relatedPathIds: ['inizia-da-qui', 'sos-digitale'],
        type: 'security',
        level: 'intermedia'
    },
    {
        id: 'relazioni-social',
        title: 'Relazioni e sicurezza online',
        description: "Gestisci i social, capisci i rischi delle relazioni online e impara a difenderti da bullismo, manipolazione e stalking digitale.",
        audience: 'Ragazzi e giovani adulti',
        moduleIds: ['modulo-08-social-media', 'modulo-13-grooming', 'modulo-16-cyberbullismo', 'modulo-17-stalking'],
        estimatedDuration: '2 ore',
        cta: 'Naviga sicuro',
        relatedPathIds: ['inizia-da-qui', 'sos-digitale'],
        type: 'relational',
        level: 'base'
    },
    {
        id: 'sos-digitale',
        title: 'Se ti è successo qualcosa',
        description: "Protocolli di emergenza per situazioni critiche: ricatti a sfondo sessuale, furti d'identità, attacchi di gruppo o crisi emotiva acuta.",
        audience: 'Chiunque sia in emergenza',
        moduleIds: ['modulo-24-emergenze', 'modulo-15-sextortion', 'modulo-22-recupero-account', 'modulo-25-crisi-emotiva'],
        estimatedDuration: '1 ora (situazionale)',
        cta: 'Chiedi aiuto ora',
        relatedPathIds: ['proteggi-account', 'relazioni-social'],
        type: 'emergency',
        level: 'avanzata'
    },
    {
        id: 'genitori-famiglie',
        title: 'Per genitori e famiglie',
        description: "Come accompagnare i figli nel mondo digitale e gestire i momenti di tensione tecnologica in famiglia, senza farsi prendere dal panico.",
        audience: 'Genitori e familiari',
        moduleIds: ['modulo-37-genitori-panico', 'modulo-13-grooming', 'modulo-16-cyberbullismo', 'modulo-25-crisi-emotiva'],
        estimatedDuration: '1 ora e 30',
        cta: 'Supporta la tua famiglia',
        relatedPathIds: ['inizia-da-qui', 'sos-digitale'],
        type: 'audience',
        level: 'base'
    }
];
