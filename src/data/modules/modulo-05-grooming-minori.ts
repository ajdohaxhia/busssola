import { Module } from '@/types';

export const modulo_05_grooming_minori: Module = {
    id: 'modulo-05-grooming-minori',
    title: 'Modulo 5: Grooming e Protezione Minori',
    description: 'Riconosci le fasi dell\\'adescamento online, i segnali di allarme nei minori e i protocolli di intervento di Polizia Postale e Save the Children.',
    category: 'grooming',
    difficulty: 'intermedia',
    icon: 'UserCheck',
    themeColor: 'accent-yellow',
    lessons: [
        {
            id: 'grooming-phases',
            slug: 'fasi-adescamento-online-grooming',
            title: 'Le fasi dell\'adescamento online',
            category: 'grooming',
            audience: ['parents', 'teachers', 'adults'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'L\'adescamento non è un evento improvviso, ma un processo manipolatorio a tappe. Impara a riconoscerle prima che sia tardi.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Un adulto (l\'adescatore) contatta un minore su un gioco online (come Roblox o Fortnite) o sui social. Non chiede subito foto; inizia costruendo un\'amicizia basata su interessi comuni per "abbassare le difese".',
            question: 'Come fa un estraneo a convincere un bambino a fidarsi di lui?',
            whatIsHappening: 'Il grooming segue fasi precise: 1. Scelta della vittima (osservazione profili). 2. Contatto e amicizia (interessi comuni). 3. Creazione del segreto (isolare il minore dai genitori). 4. Sessualizzazione (testare i limiti con battute o richieste soft). 5. Controllo e ricatto.',
            warningSigns: [
                'L\'interlocutore regala monete virtuali, skin di gioco o ricariche telefoniche.',
                'Richieste insistenti di spostare la conversazione su app private (Telegram/WhatsApp).',
                'L\'uso della frase "Questo è il nostro piccolo segreto, i tuoi non capirebbero".',
                'Curiosità eccessiva sulla vita privata, orari dei genitori e se il minore è solo in camera.'
            ],
            doNow: [
                'Se sospetti un adescamento, non affrontare l\'adescatore: potrebbe sparire e cancellare le prove.',
                'Inizia a monitorare (senza allarmare il minore) le chat e i profili coinvolti.',
                'Prendi il controllo dei dispositivi e fai screenshot di tutte le conversazioni.',
                'Contatta immediatamente la Polizia Postale per una consulenza.'
            ],
            dontDo: [
                'Non rispondere al posto del minore per "scovare" l\'adulto: è pericoloso e inutile legalmente.',
                'Non cancellare le chat per "vergogna" o "paura": sono l\'unica prova del reato.',
                'Non colpevolizzare il minore: lui è la vittima di un manipolatore esperto.',
                'Non sequestrare il telefono come punizione: il minore non ti dirà più nulla.'
            ],
            preserveEvidence: [
                'Screenshot integrali delle conversazioni (non tagliati).',
                'Username esatto, foto profilo e ID del giocatore se su piattaforme di gaming.',
                'Email o numeri di telefono eventualmente scambiati.'
            ],
            askHelpWhen: [
                'Appena hai il minimo sospetto che un adulto stia parlando in modo inappropriato con un minore.',
                'Se il minore riceve regali o soldi da sconosciuti online.'
            ],
            whoCanHelp: [
                'Polizia Postale (commissariatodips.it)',
                'Save the Children Italia',
                'Telefono Azzurro (Servizio 114 Emergenza Infanzia)'
            ],
            checklist: [
                'Osserva cambiamenti',
                'No confronto diretto',
                'Screenshot prove',
                'Contatta 114/Polizia'
            ],
            sources: [
                {
                    title: 'Adescamento online: Conoscere e prevenire',
                    organization: 'Save the Children Italia',
                    url: 'https://www.savethechildren.it/blog-notizie/adescamento-online-cos-e-e-come-proteggere-i-bambini',
                    type: 'nonprofit',
                    usedFor: 'Definizione del fenomeno e fasi della manipolazione.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Guida per i genitori sul Grooming',
                    organization: 'Polizia di Stato',
                    url: 'https://www.commissariatodips.it/consigli/per-i-genitori/adescamento-online/index.html',
                    type: 'official',
                    usedFor: 'Consigli operativi e segnali comportamentali dei minori.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
