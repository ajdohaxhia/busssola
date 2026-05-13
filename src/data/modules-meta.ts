import { ModuleMetadata } from '@/types';

export const MODULES_MAP: ModuleMetadata[] = [
    {
        id: 'modulo-01-primo-soccorso',
        number: 1,
        title: 'Primo Soccorso Digitale',
        description: 'Procedure rapide per sextortion, furto account e smarrimento device.',
        lessonCount: 4,
        difficulty: 'base',
        icon: 'ShieldAlert',
        featuredType: 'start'
    },
    {
        id: 'modulo-01b-primo-soccorso',
        number: 2,
        title: 'Emergenze Specifiche',
        description: 'Doxxing, SIM Swapping e casi critici di furto d\'identità.',
        lessonCount: 2,
        difficulty: 'intermedia',
        icon: 'ShieldAlert',
        featuredType: 'curated'
    },
    {
        id: 'modulo-02-account-security',
        number: 3,
        title: 'Account e Sicurezza Accessi',
        description: 'Blindare i tuoi profili con password robuste, 2FA e gestori dedicati.',
        lessonCount: 3,
        difficulty: 'base',
        icon: 'Key',
        featuredType: 'start'
    },
    {
        id: 'modulo-02b-account-security',
        number: 4,
        title: 'Checkup Privacy & Dati',
        description: 'Pulizia totale della cronologia Google e gestione tracciamento.',
        lessonCount: 1,
        difficulty: 'intermedia',
        icon: 'Key',
        featuredType: 'curated'
    },
    {
        id: 'modulo-03-truffe-phishing',
        number: 5,
        title: 'Frodi, Truffe e Phishing',
        description: 'Riconoscere e bloccare smishing, vishing e truffe marketplace.',
        lessonCount: 3,
        difficulty: 'base',
        icon: 'Target',
        featuredType: 'curated'
    },
    {
        id: 'modulo-03b-truffe-phishing',
        number: 6,
        title: 'Truffe Marketplace Avanzate',
        description: 'Casi specifici su Vinted, eBay e Facebook Marketplace.',
        lessonCount: 1,
        difficulty: 'intermedia',
        icon: 'Target',
        featuredType: 'situational'
    },
    {
        id: 'modulo-04-sextortion-ricatti',
        number: 7,
        title: 'Sextortion e Ricatti Sessuali',
        description: 'Protocolli d\'azione e tutele legali per estorsioni e revenge porn.',
        lessonCount: 3,
        difficulty: 'intermedia',
        icon: 'AlertCircle',
        featuredType: 'situational'
    },
    {
        id: 'modulo-04b-sextortion-ricatti',
        number: 8,
        title: 'Analisi del Ricatto',
        description: 'Riconoscere i profili Catfish e analizzare la minaccia.',
        lessonCount: 1,
        difficulty: 'intermedia',
        icon: 'AlertCircle',
        featuredType: 'situational'
    },
    {
        id: 'modulo-05-grooming-minori',
        number: 9,
        title: 'Grooming e Protezione Minori',
        description: 'Riconoscere l\'adescamento e proteggere i più piccoli online.',
        lessonCount: 1,
        difficulty: 'intermedia',
        icon: 'UserCheck',
        featuredType: 'situational'
    },
    {
        id: 'modulo-05b-grooming-minori',
        number: 10,
        title: 'Educazione al Consenso',
        description: 'La regola del segreto brutto e sicurezza nei videogiochi.',
        lessonCount: 1,
        difficulty: 'intermedia',
        icon: 'UserCheck',
        featuredType: 'situational'
    },
    {
        id: 'modulo-06-stalking-doxxing',
        number: 11,
        title: 'Cyberstalking e Doxxing',
        description: 'Difesa dalle persecuzioni e protezione dei dati personali.',
        lessonCount: 1,
        difficulty: 'intermedia',
        icon: 'Eye',
        featuredType: 'situational'
    },
    {
        id: 'modulo-06b-stalking-doxxing',
        number: 12,
        title: 'Tutele Legali Stalking',
        description: 'L\'ammonimento del Questore e strumenti di prevenzione.',
        lessonCount: 1,
        difficulty: 'intermedia',
        icon: 'Eye',
        featuredType: 'situational'
    },
    {
        id: 'modulo-07-privacy-smartphone',
        number: 13,
        title: 'Privacy e Smartphone',
        description: 'Gestione permessi app e sicurezza in mobilità.',
        lessonCount: 1,
        difficulty: 'base',
        icon: 'Smartphone',
        featuredType: 'curated'
    },
    {
        id: 'modulo-07b-privacy-smartphone',
        number: 14,
        title: 'Smartphone Avanzato',
        description: 'Audit profondo dei permessi e monitoraggio sensori.',
        lessonCount: 1,
        difficulty: 'avanzata',
        icon: 'Smartphone',
        featuredType: 'curated'
    },
    {
        id: 'modulo-08-scuola-famiglia',
        number: 15,
        title: 'Scuola e Famiglia',
        description: 'Bullismo online e protocolli scuola-famiglia.',
        lessonCount: 1,
        difficulty: 'base',
        icon: 'GraduationCap',
        featuredType: 'situational'
    },
    {
        id: 'modulo-08b-scuola-famiglia',
        number: 16,
        title: 'Rischi dello Sharenting',
        description: 'Proteggere l\'immagine dei figli e identità digitale.',
        lessonCount: 1,
        difficulty: 'intermedia',
        icon: 'GraduationCap',
        featuredType: 'situational'
    }
];
