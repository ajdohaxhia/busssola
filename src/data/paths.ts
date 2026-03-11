import { LearningPath } from "@/types";

export const LEARNING_PATHS: LearningPath[] = [
    {
        id: 'inizia-da-qui',
        title: 'Inizia da qui',
        description: "I passi fondamentali per costruire una base solida di sicurezza digitale. Ideale per chi vuole capire come proteggersi senza stress.",
        audience: 'Tutti',
        moduleIds: ['modulo-02-privacy-digitale', 'modulo-03-password', 'modulo-19-phishing'],
        estimatedDuration: '1.5 ore',
        cta: 'Comincia il percorso',
        relatedPathIds: ['proteggi-account', 'relazioni-social'],
        type: 'onboarding',
        level: 'base'
    },
    {
        id: 'proteggi-account',
        title: 'Proteggi i tuoi account',
        description: "Un percorso tecnico ma accessibile per blindare i tuoi profili social, email e servizi bancari. Niente più paura degli hacker.",
        audience: 'Tutti',
        moduleIds: ['modulo-02-privacy-digitale', 'modulo-03-password', 'modulo-22-recupero-account', 'modulo-45-cloud-backup'],
        estimatedDuration: '2 ore',
        cta: 'Metti al sicuro i tuoi dati',
        relatedPathIds: ['inizia-da-qui', 'sos-digitale'],
        type: 'security',
        level: 'intermedia'
    },
    {
        id: 'relazioni-social',
        title: 'Relazioni e sicurezza online',
        description: "Gestisci i social media, capisci i rischi delle relazioni online e impara a difenderti da bullismo e manipolazione.",
        audience: 'Ragazzi e Giovani Adulti',
        moduleIds: ['modulo-13-grooming', 'modulo-08-social-media', 'modulo-16-cyberbullismo', 'modulo-17-stalking'],
        estimatedDuration: '2.5 ore',
        cta: 'Naviga sicuro',
        relatedPathIds: ['inizia-da-qui', 'sos-digitale'],
        type: 'relational',
        level: 'base'
    },
    {
        id: 'sos-digitale',
        title: 'Se ti è successo qualcosa',
        description: "Protocolli di emergenza per situazioni critiche. Cosa fare se sei vittima di ricatto, furto d'identità o molestie.",
        audience: 'Chiunque sia in emergenza',
        moduleIds: ['modulo-24-emergenze', 'modulo-25-crisi-emotiva', 'modulo-42-segnalare-bloccare', 'modulo-15-sextortion'],
        estimatedDuration: '1 ora (situazionale)',
        cta: 'Chiedi aiuto ora',
        relatedPathIds: ['proteggi-account', 'relazioni-social'],
        type: 'emergency',
        level: 'avanzata'
    },
    {
        id: 'genitori-famiglie',
        title: 'Per genitori e famiglie',
        description: "Come accompagnare i figli nel mondo digitale, stabilire regole sane e gestire i momenti di tensione tecnologica in famiglia.",
        audience: 'Genitori e familiari',
        moduleIds: ['modulo-37-genitori-panico', 'modulo-38-famiglie-regole', 'modulo-46-casa-connessa', 'modulo-18-truffe-ragazzi'],
        estimatedDuration: '3 ore',
        cta: 'Supporta la tua famiglia',
        relatedPathIds: ['scuole-educatori', 'inizia-da-qui'],
        type: 'audience',
        level: 'base'
    },
    {
        id: 'scuole-educatori',
        title: 'Per scuole ed educatori',
        description: "Strumenti e policy per gestire la cittadinanza digitale in classe e proteggere l'ambiente scolastico dai rischi del web.",
        audience: 'Insegnanti e Dirigenti',
        moduleIds: ['modulo-39-educatori-classe', 'modulo-40-policy-scuole', 'modulo-34-scuola-digitale', 'modulo-36-privacy-scuola'],
        estimatedDuration: '3.5 ore',
        cta: 'Porta Busssola a scuola',
        relatedPathIds: ['genitori-famiglie', 'proteggi-account'],
        type: 'audience',
        level: 'intermedia'
    }
];
