import { Module } from '@/types';

export const modulo_05_grooming_minori: Module = {
    id: 'modulo-05-grooming-minori',
    title: 'Modulo 5: Grooming e Protezione Minori',
    description: 'Riconosci le fasi dell\'adescamento online, i segnali di allarme nei minori e i protocolli di intervento di Polizia Postale e Save the Children.',
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
        },
        {
            id: 'gaming-grooming-safety',
            slug: 'grooming-nel-gaming-e-chat-vocali',
            title: 'Pericolo Gaming: Più che un gioco',
            category: 'grooming',
            audience: ['parents', 'minors'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'I videogiochi online sono piazze pubbliche. Impara come i predatori usano le chat vocali e i regali in-game per avvicinare i minori.',
            status: 'published',
            emergencyLevel: 'medium',
            scenario: 'Tuo figlio gioca a un titolo popolare (come Roblox o Fortnite). Un altro giocatore, apparentemente coetaneo, inizia a regalargli "skin" o moneta del gioco e lo invita a spostare la conversazione su Discord o WhatsApp.',
            question: 'Perché un estraneo dovrebbe fare regali a mio figlio nei videogiochi?',
            whatIsHappening: 'Si tratta di una tecnica di grooming chiamata "Gifting". Il predatore crea un debito di gratitudine nel minore per manipolarlo più facilmente. Spostare la conversazione su app esterne serve a sfuggire ai filtri di moderazione del gioco.',
            warningSigns: [
                'Il minore riceve regali costosi in-game da sconosciuti.',
                'Uso costante di cuffie e microfono in isolamento, con reazioni nervose se un adulto si avvicina.',
                'Il minore usa termini o gergo che non appartengono alla sua età.',
                'Richiesta di fare "sfide" in videochiamata per ottenere premi nel gioco.'
            ],
            doNow: [
                'Disabilita la chat vocale con estranei nelle impostazioni del gioco (Parental Control).',
                'Spiega al minore che gli oggetti virtuali hanno un valore reale e non vanno accettati da chi non si conosce offline.',
                'Mantieni la console o il PC in una stanza comune della casa.',
                'Controlla periodicamente le amicizie nelle app di chat collegate (es. Discord).'
            ],
            dontDo: [
                'Non colpevolizzare il minore se ha accettato regali: il predatore conta proprio sul suo senso di colpa per farlo tacere.',
                'Non vietare il gioco tout-court senza spiegare il motivo: spingeresti il minore a giocare di nascosto.'
            ],
            preserveEvidence: [
                'Screenshot della chat del gioco e del profilo del sospetto.',
                'ID utente (username univoco) dell\'interlocutore.'
            ],
            askHelpWhen: [
                'Se scopri che il minore ha inviato foto reali o ha fornito l\'indirizzo di casa.',
                'Se il minore riceve minacce di "ban" o ritorsioni nel gioco se smette di rispondere.'
            ],
            whoCanHelp: [
                'Telefono Azzurro (19696)',
                'Generazioni Connesse',
                'Polizia Postale'
            ],
            checklist: [
                'Parental Control on',
                'No chat estranei',
                'Regali non ammessi',
                'Gioco in sala comune'
            ],
            sources: [
                {
                    title: 'Il Grooming nei videogiochi: Guida per genitori',
                    organization: 'Save the Children Italia',
                    url: 'https://www.savethechildren.it/blog-11/grooming-adescamento-online-minori-cosa-e-come-prevenirlo',
                    type: 'nonprofit',
                    usedFor: 'Descrizione delle tecniche di manipolazione attraverso il gaming.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
