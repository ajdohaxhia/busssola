import { Module } from '@/types';

export const modulo_05b_grooming_minori: Module = {
    id: 'modulo-05b-grooming-minori',
    title: 'Modulo 5b: Grooming (Educazione e Gaming)',
    description: 'Come spiegare l\'adescamento ai bambini e come proteggerli durante le sessioni di gioco online.',
    category: 'school',
    difficulty: 'intermedia',
    icon: 'UserCheck',
    themeColor: 'accent-purple',
    lessons: [
        {
            id: 'grooming-indicators-kids',
            slug: 'grooming-regola-segreto-brutto-bambini',
            title: 'La regola del "Segreto Brutto"',
            category: 'school',
            audience: ['parents', 'teachers', 'minors'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Uno strumento educativo fondamentale per permettere ai bambini di riconoscere quando un adulto online sta superando il limite.',
            status: 'published',
            emergencyLevel: 'low',
            scenario: 'Un bambino riceve messaggi da un "amico" conosciuto online che gli chiede di fare cose strane (mandare foto, accendere la webcam) e gli dice: "Non dirlo ai tuoi genitori, è il nostro segreto".',
            question: 'Come posso insegnare a mio figlio a distinguere una sorpresa da un ricatto?',
            whatIsHappening: 'Gli adescatori usano la manipolazione psicologica. Spieghiamo ai bambini che esistono "segreti belli" (che fanno stare bene, come un regalo) e "segreti brutti" (che fanno sentire a disagio, confusi o spaventati). Un adulto che chiede a un bambino di mentire ai genitori sta sempre nascondendo un segreto brutto.',
            warningSigns: [
                'L\'adulto chiede al bambino di spostarsi su una chat privata (es. Discord, WhatsApp).',
                'L\'adulto fa regali virtuali (skin, crediti di gioco) in cambio di "favori".',
                'L\'adulto dice che i genitori "non capirebbero" la loro amicizia.',
                'L\'adulto fa domande sulla vita privata del bambino o chiede foto.'
            ],
            doNow: [
                'Insegna la regola: "Se qualcuno ti chiede un segreto che ti fa sentire strano, dimmelo subito: non sarai mai sgridato".',
                'Attiva il Parental Control sui dispositivi del minore.',
                'Controlla periodicamente le chat dei giochi preferiti di tuo figlio.',
                'Stabilite che i videogiochi si usano solo in spazi comuni (es. salotto), non chiusi in cameretta.'
            ],
            dontDo: [
                'Non demonizzare la tecnologia: il bambino smetterebbe di confidarsi per paura che gli venga tolto il gioco.',
                'Non lasciare che il bambino usi cuffie con microfono senza supervisione se gioca con sconosciuti.',
                'Non permettere l\'uso di webcam durante le sessioni di gioco online.'
            ],
            preserveEvidence: [
                'Se noti messaggi sospetti, non cancellarli: fai screenshot della chat e del profilo dell\'utente.'
            ],
            askHelpWhen: [
                'Se scopri che tuo figlio ha già inviato foto o video.',
                'Se l\'adulto minaccia il bambino per convincerlo a continuare.'
            ],
            whoCanHelp: [
                'Polizia Postale',
                'Save the Children (Linee guida)',
                'Telefono Azzurro (1.96.96)'
            ],
            checklist: [
                'Spiega i segreti',
                'Parental Control',
                'Gioco in salotto',
                'No webcam'
            ],
            sources: [
                {
                    title: 'Guida per genitori: Grooming',
                    organization: 'Save the Children Italia',
                    url: 'https://www.savethechildren.it/blog-11/cos-e-il-grooming-e-come-proteggere-i-bambini',
                    type: 'nonprofit',
                    usedFor: 'Definizione pedagogica e consigli pratici per famiglie.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
