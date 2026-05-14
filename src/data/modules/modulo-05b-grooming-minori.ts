import { Module } from '@/types';

export const modulo_05b_grooming_minori: Module = {
    id: 'modulo-05b-grooming-minori',
    lastUpdated: '2024-05-13',
    title: 'Modulo 5b: Grooming (Educazione e Gaming)',
    description: 'Come spiegare l\'adescamento ai bambini e come proteggerli durante le sessioni di gioco online.',
    category: 'famiglia',
    difficulty: 'intermedia',
    icon: 'UserCheck',
    themeColor: 'accent-purple',
    lessons: [
        {
            id: 'grooming-indicators-kids',
            slug: 'grooming-regola-segreto-brutto-bambini',
            title: 'La regola del "Segreto Brutto"',
            mainEntity: 'AgID',
            category: 'famiglia',
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
            steps: [
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
                    lastCheckedAt: '2026-05-14'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'child-fear-silent-crisis',
            slug: 'cosa-fare-se-minore-ha-paura-e-tace',
            title: 'Se il minore ha paura e tace',
            mainEntity: 'AgID',
            category: 'famiglia',
            audience: ['parents', 'teachers'],
            level: 'medio',
            estimatedMinutes: 7,
            summary: 'Riconoscere i segnali di una crisi silenziosa e imparare come aprire un canale di comunicazione senza spaventare ulteriormente il minore.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Noti che tuo figlio o uno studente è diventato improvvisamente cupo, cancella ossessivamente la cronologia o le chat, e sobbalza se riceve una notifica. Quando chiedi cosa succede, risponde "nulla" con rabbia o pianto.',
            question: 'Come posso aiutarlo se non vuole dirmi cosa è successo online?',
            whatIsHappening: 'Il minore potrebbe essere sotto ricatto o manipolazione. Spesso il predatore lo ha convinto che se parlerà con gli adulti, finirà nei guai (o lo faranno i genitori). La vergogna e la paura sono le barriere più forti.',
            warningSigns: [
                'Abbandono improvviso di attività che prima amava.',
                'Disturbi del sonno o dell\'appetito.',
                'Tendenza a nascondere lo schermo appena qualcuno entra nella stanza.',
                'Richiesta improvvisa di denaro o carte regalo (per pagare piccoli ricatti).'
            ],
            doNow: [
                'Non sequestrare il telefono: per il minore è l\'unico legame col problema e toglierlo aumenterebbe il panico.',
                'Dì chiaramente: "Qualunque cosa sia successa, non sei nei guai e io sono qui per risolvere il problema con te, non contro di te".',
                'Contatta il 114 (Emergenza Infanzia) per avere una guida psicologica professionale su come gestire il colloquio.',
                'Cerca segnali di "grooming" o "cyberbullismo" senza violare brutalmente la privacy, ma spiegando che la sicurezza viene prima del segreto.'
            ],
            steps: [
                'Non sequestrare il telefono: per il minore è l\'unico legame col problema e toglierlo aumenterebbe il panico.',
                'Dì chiaramente: "Qualunque cosa sia successa, non sei nei guai e io sono qui per risolvere il problema con te, non contro di te".',
                'Contatta il 114 (Emergenza Infanzia) per avere una guida psicologica professionale su come gestire il colloquio.',
                'Cerca segnali di "grooming" o "cyberbullismo" senza violare brutalmente la privacy, ma spiegando che la sicurezza viene prima del segreto.'
            ],
            dontDo: [
                'Non reagire con rabbia o shock se scopri foto o messaggi espliciti: il minore si chiuderebbe istantaneamente.',
                'Non promettere di non fare nulla: se c\'è un reato, dovrai agire, ma spiega che lo farai insieme a lui.'
            ],
            preserveEvidence: [
                'Cerca di salvare i dati prima che il minore, preso dal panico, cancelli tutto per "far sparire il problema".'
            ],
            askHelpWhen: [
                'Sempre. In questi casi il supporto professionale di psicologi ed esperti di sicurezza è fondamentale.'
            ],
            whoCanHelp: [
                '114 Emergenza Infanzia',
                'Telefono Azzurro',
                'Servizi Sociali / Psicologo scolastico'
            ],
            checklist: [
                'Rassicurazione totale',
                'Niente punizioni',
                'Chiama il 114',
                'Ascolto non giudicante'
            ],
            sources: [
                {
                    title: 'Cosa fare se un minore è vittima di abusi online',
                    organization: 'Telefono Azzurro',
                    url: 'https://azzurro.it/cyberbullismo-e-pericoli-online/',
                    type: 'nonprofit',
                    usedFor: 'Supporto psicologico e protocolli di intervento per famiglie.',
                    lastCheckedAt: '2026-05-14'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
