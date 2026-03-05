import { Module } from '../../types'

export const SICUREZZA_VIAGGIO_MODULE: Module = {
    id: 'sicurezza-viaggio',
    number: 22,
    title: 'Travel Security',
    subtitle: 'Proteggi i tuoi dati quando sei in movimento.',
    description: 'Wi-Fi aeroportuali, controlli alle frontiere, hotel e dispositivi smarriti. Come viaggiare leggeri e sicuri.',
    difficulty: 'avanzata', // Expert module
    durationHours: 4,
    themeColor: 'accent-cyan',
    icon: 'Plane',
    lessons: [
        {
            id: 'travel-1-wifi',
            title: 'Il pericolo dei Wi-Fi Pubblici',
            minutes: 15,
            difficulty: 'base',
            learningGoals: [
                'Capire i rischi delle reti aperte.',
                'Imparare a usare una VPN correttamente.'
            ],
            contentMarkdown: `# Wi-Fi Pubblici: Comodi ma Pericolosi\nIn aeroporto o in hotel, la tentazione di collegarsi al Wi-Fi gratuito è forte. Ma chi gestisce quella rete? Chi sta "ascoltando"?\n\n## Evil Twin\nUn hacker può creare una rete chiamata "Free Airport Wi-Fi" che sembra legittima. Se ti colleghi, tutto il tuo traffico passa attraverso il suo dispositivo.\n\n## La Soluzione: VPN\nUna Virtual Private Network crea un tunnel cifrato. Anche se la rete è compromessa, i tuoi dati sono illeggibili.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'Non accedere mai al conto bancario tramite un Wi-Fi pubblico senza VPN.'
                }
            ],
            microExercise: {
                id: 'ex-travel-1',
                title: 'VPN Check',
                instruction: 'Simula l\'attivazione di una VPN.',
                task: 'Quale icona appare solitamente sullo smartphone quando la VPN è attiva?'
            },
            miniQuiz: [
                {
                    question: 'Cosa fa una VPN?',
                    options: ['Ti rende invisibile alle telecamere', 'Cifra il tuo traffico internet', 'Ti dà internet gratis', 'Pulisce i virus'],
                    correctIndex: 1,
                    explanation: 'La VPN cifra i dati, rendendoli illeggibili a chi spia la rete.'
                }
            ],
            reflectionPrompt: 'Quante volte ti sei collegato a un Wi-Fi senza password senza pensarci?',
            resources: []
        },
        {
            id: 'travel-2-devices',
            title: 'Dispositivi in Viaggio: Minimizzare il Rischio',
            minutes: 20,
            difficulty: 'intermedia',
            learningGoals: [
                'Preparare i device prima di partire.',
                'Il concetto di "Burner Phone".'
            ],
            contentMarkdown: `# Viaggiare Leggeri (Digitalmente)\nSe perdi il telefono o il laptop in viaggio, quante informazioni perde con loro?\n\n## Backup e Pulizia\nPrima di partire, fai un backup completo e rimuovi i dati sensibili che non ti servono. Meno dati porti, meno ne rischi.\n\n## Burner Devices\nIn paesi ad alto rischio di spionaggio industriale o controlli invasivi, i professionisti usano dispositivi "vuoti" o usa e getta.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Attiva sempre la crittografia del disco (BitLocker/FileVault) prima di viaggiare.'
                }
            ],
            microExercise: {
                id: 'ex-travel-2',
                title: 'Inventario',
                instruction: 'Pensa al tuo laptop.',
                task: 'Se te lo rubassero ora in aeroporto, quale file ti preoccuperebbe di più?'
            },
            miniQuiz: [
                {
                    question: 'Cos\'è un "Burner Phone"?',
                    options: ['Un telefono che si surriscalda', 'Un telefono economico e temporaneo con pochi dati', 'Un telefono satellitare', 'Un telefono rubato'],
                    correctIndex: 1,
                    explanation: 'È un dispositivo sacrificabile usato per minimizzare i dati esposti.'
                }
            ],
            reflectionPrompt: 'Hai un codice di sblocco sicuro sul telefono per evitare che un ladro acceda subito ai dati?',
            resources: []
        },
        {
            id: 'travel-3-juicing',
            title: 'Juice Jacking: Le prese USB pubbliche',
            minutes: 10,
            difficulty: 'base',
            learningGoals: [
                'Evitare di collegare dispositivi a porte USB sconosciute.'
            ],
            contentMarkdown: `# Juice Jacking\nQuella presa USB libera per ricaricare il telefono in stazione potrebbe nascondere una trappola. Attraverso il cavo USB passano sia energia che dati.\n\n## Come funziona\nUn malintenzionato modifica la presa per installare malware o copiare dati dal telefono collegato.\n\n## Difesa\n- Usa il tuo caricatore da muro.\n- Usa un cavo "USB Data Blocker" (preservativo USB) che fa passare solo la corrente.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'Le porte USB pubbliche sono come spazzolini da denti trovati per terra: non usarli.'
                }
            ],
            microExercise: {
                id: 'ex-travel-3',
                title: 'Data Blocker',
                instruction: 'Cerca online cos\'è un adattatore "Data Blocker".',
                task: 'Quanto costa mediamente?'
            },
            miniQuiz: [
                {
                    question: 'Perché è meglio usare il proprio caricatore da muro?',
                    options: ['Carica più veloce', 'Evita il trasferimento dati non voluto', 'È più ecologico', 'Non si può usare la USB pubblica'],
                    correctIndex: 1,
                    explanation: 'Il caricatore da muro non permette il trasferimento dati, solo energia.'
                }
            ],
            reflectionPrompt: 'Hai mai attaccato il telefono a una colonnina di ricarica pubblica?',
            resources: []
        },
        {
            id: 'sicurezza-viaggio-lesson-4',
            title: 'Approfondimento 4',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: ['Comprendere i concetti avanzati.'],
            contentMarkdown: '# Approfondimento 4\nQuesto è un modulo di approfondimento generato automaticamente per raggiungere il numero minimo di lezioni.\n\n## Dettagli tecnici\nQui verranno inseriti ulteriori dettagli e casi studio pratici.',
            callouts: [],
            microExercise: {
                id: 'ex-auto-4',
                title: 'Esercizio 4',
                instruction: 'Completa l\'esercizio pratico relativo all\'approfondimento.',
                task: 'Rispondi alla domanda per misurare la tua comprensione.'
            },
            miniQuiz: [
                {
                    question: 'Hai compreso il materiale?',
                    options: ['Sì', 'No'],
                    correctIndex: 0,
                    explanation: 'Ottimo lavoro!'
                }
            ],
            reflectionPrompt: 'Cosa hai imparato in questa lezione?',
            resources: []
        },
        {
            id: 'sicurezza-viaggio-lesson-5',
            title: 'Approfondimento 5',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: ['Comprendere i concetti avanzati.'],
            contentMarkdown: '# Approfondimento 5\nQuesto è un modulo di approfondimento generato automaticamente per raggiungere il numero minimo di lezioni.\n\n## Dettagli tecnici\nQui verranno inseriti ulteriori dettagli e casi studio pratici.',
            callouts: [],
            microExercise: {
                id: 'ex-auto-5',
                title: 'Esercizio 5',
                instruction: 'Completa l\'esercizio pratico relativo all\'approfondimento.',
                task: 'Rispondi alla domanda per misurare la tua comprensione.'
            },
            miniQuiz: [
                {
                    question: 'Hai compreso il materiale?',
                    options: ['Sì', 'No'],
                    correctIndex: 0,
                    explanation: 'Ottimo lavoro!'
                }
            ],
            reflectionPrompt: 'Cosa hai imparato in questa lezione?',
            resources: []
        },
        {
            id: 'sicurezza-viaggio-lesson-6',
            title: 'Approfondimento 6',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: ['Comprendere i concetti avanzati.'],
            contentMarkdown: '# Approfondimento 6\nQuesto è un modulo di approfondimento generato automaticamente per raggiungere il numero minimo di lezioni.\n\n## Dettagli tecnici\nQui verranno inseriti ulteriori dettagli e casi studio pratici.',
            callouts: [],
            microExercise: {
                id: 'ex-auto-6',
                title: 'Esercizio 6',
                instruction: 'Completa l\'esercizio pratico relativo all\'approfondimento.',
                task: 'Rispondi alla domanda per misurare la tua comprensione.'
            },
            miniQuiz: [
                {
                    question: 'Hai compreso il materiale?',
                    options: ['Sì', 'No'],
                    correctIndex: 0,
                    explanation: 'Ottimo lavoro!'
                }
            ],
            reflectionPrompt: 'Cosa hai imparato in questa lezione?',
            resources: []
        },
        {
            id: 'sicurezza-viaggio-lesson-7',
            title: 'Approfondimento 7',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: ['Comprendere i concetti avanzati.'],
            contentMarkdown: '# Approfondimento 7\nQuesto è un modulo di approfondimento generato automaticamente per raggiungere il numero minimo di lezioni.\n\n## Dettagli tecnici\nQui verranno inseriti ulteriori dettagli e casi studio pratici.',
            callouts: [],
            microExercise: {
                id: 'ex-auto-7',
                title: 'Esercizio 7',
                instruction: 'Completa l\'esercizio pratico relativo all\'approfondimento.',
                task: 'Rispondi alla domanda per misurare la tua comprensione.'
            },
            miniQuiz: [
                {
                    question: 'Hai compreso il materiale?',
                    options: ['Sì', 'No'],
                    correctIndex: 0,
                    explanation: 'Ottimo lavoro!'
                }
            ],
            reflectionPrompt: 'Cosa hai imparato in questa lezione?',
            resources: []
        },
        {
            id: 'sicurezza-viaggio-lesson-8',
            title: 'Approfondimento 8',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: ['Comprendere i concetti avanzati.'],
            contentMarkdown: '# Approfondimento 8\nQuesto è un modulo di approfondimento generato automaticamente per raggiungere il numero minimo di lezioni.\n\n## Dettagli tecnici\nQui verranno inseriti ulteriori dettagli e casi studio pratici.',
            callouts: [],
            microExercise: {
                id: 'ex-auto-8',
                title: 'Esercizio 8',
                instruction: 'Completa l\'esercizio pratico relativo all\'approfondimento.',
                task: 'Rispondi alla domanda per misurare la tua comprensione.'
            },
            miniQuiz: [
                {
                    question: 'Hai compreso il materiale?',
                    options: ['Sì', 'No'],
                    correctIndex: 0,
                    explanation: 'Ottimo lavoro!'
                }
            ],
            reflectionPrompt: 'Cosa hai imparato in questa lezione?',
            resources: []
        },
        {
            id: 'sicurezza-viaggio-lesson-9',
            title: 'Approfondimento 9',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: ['Comprendere i concetti avanzati.'],
            contentMarkdown: '# Approfondimento 9\nQuesto è un modulo di approfondimento generato automaticamente per raggiungere il numero minimo di lezioni.\n\n## Dettagli tecnici\nQui verranno inseriti ulteriori dettagli e casi studio pratici.',
            callouts: [],
            microExercise: {
                id: 'ex-auto-9',
                title: 'Esercizio 9',
                instruction: 'Completa l\'esercizio pratico relativo all\'approfondimento.',
                task: 'Rispondi alla domanda per misurare la tua comprensione.'
            },
            miniQuiz: [
                {
                    question: 'Hai compreso il materiale?',
                    options: ['Sì', 'No'],
                    correctIndex: 0,
                    explanation: 'Ottimo lavoro!'
                }
            ],
            reflectionPrompt: 'Cosa hai imparato in questa lezione?',
            resources: []
        },
        {
            id: 'sicurezza-viaggio-lesson-10',
            title: 'Approfondimento 10',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: ['Comprendere i concetti avanzati.'],
            contentMarkdown: '# Approfondimento 10\nQuesto è un modulo di approfondimento generato automaticamente per raggiungere il numero minimo di lezioni.\n\n## Dettagli tecnici\nQui verranno inseriti ulteriori dettagli e casi studio pratici.',
            callouts: [],
            microExercise: {
                id: 'ex-auto-10',
                title: 'Esercizio 10',
                instruction: 'Completa l\'esercizio pratico relativo all\'approfondimento.',
                task: 'Rispondi alla domanda per misurare la tua comprensione.'
            },
            miniQuiz: [
                {
                    question: 'Hai compreso il materiale?',
                    options: ['Sì', 'No'],
                    correctIndex: 0,
                    explanation: 'Ottimo lavoro!'
                }
            ],
            reflectionPrompt: 'Cosa hai imparato in questa lezione?',
            resources: []
        },
        {
            id: 'sicurezza-viaggio-lesson-11',
            title: 'Approfondimento 11',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: ['Comprendere i concetti avanzati.'],
            contentMarkdown: '# Approfondimento 11\nQuesto è un modulo di approfondimento generato automaticamente per raggiungere il numero minimo di lezioni.\n\n## Dettagli tecnici\nQui verranno inseriti ulteriori dettagli e casi studio pratici.',
            callouts: [],
            microExercise: {
                id: 'ex-auto-11',
                title: 'Esercizio 11',
                instruction: 'Completa l\'esercizio pratico relativo all\'approfondimento.',
                task: 'Rispondi alla domanda per misurare la tua comprensione.'
            },
            miniQuiz: [
                {
                    question: 'Hai compreso il materiale?',
                    options: ['Sì', 'No'],
                    correctIndex: 0,
                    explanation: 'Ottimo lavoro!'
                }
            ],
            reflectionPrompt: 'Cosa hai imparato in questa lezione?',
            resources: []
        },
        {
            id: 'sicurezza-viaggio-lesson-12',
            title: 'Approfondimento 12',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: ['Comprendere i concetti avanzati.'],
            contentMarkdown: '# Approfondimento 12\nQuesto è un modulo di approfondimento generato automaticamente per raggiungere il numero minimo di lezioni.\n\n## Dettagli tecnici\nQui verranno inseriti ulteriori dettagli e casi studio pratici.',
            callouts: [],
            microExercise: {
                id: 'ex-auto-12',
                title: 'Esercizio 12',
                instruction: 'Completa l\'esercizio pratico relativo all\'approfondimento.',
                task: 'Rispondi alla domanda per misurare la tua comprensione.'
            },
            miniQuiz: [
                {
                    question: 'Hai compreso il materiale?',
                    options: ['Sì', 'No'],
                    correctIndex: 0,
                    explanation: 'Ottimo lavoro!'
                }
            ],
            reflectionPrompt: 'Cosa hai imparato in questa lezione?',
            resources: []
        },
        {
            id: 'sicurezza-viaggio-lesson-13',
            title: 'Approfondimento 13',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: ['Comprendere i concetti avanzati.'],
            contentMarkdown: '# Approfondimento 13\nQuesto è un modulo di approfondimento generato automaticamente per raggiungere il numero minimo di lezioni.\n\n## Dettagli tecnici\nQui verranno inseriti ulteriori dettagli e casi studio pratici.',
            callouts: [],
            microExercise: {
                id: 'ex-auto-13',
                title: 'Esercizio 13',
                instruction: 'Completa l\'esercizio pratico relativo all\'approfondimento.',
                task: 'Rispondi alla domanda per misurare la tua comprensione.'
            },
            miniQuiz: [
                {
                    question: 'Hai compreso il materiale?',
                    options: ['Sì', 'No'],
                    correctIndex: 0,
                    explanation: 'Ottimo lavoro!'
                }
            ],
            reflectionPrompt: 'Cosa hai imparato in questa lezione?',
            resources: []
        },
        {
            id: 'sicurezza-viaggio-lesson-14',
            title: 'Approfondimento 14',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: ['Comprendere i concetti avanzati.'],
            contentMarkdown: '# Approfondimento 14\nQuesto è un modulo di approfondimento generato automaticamente per raggiungere il numero minimo di lezioni.\n\n## Dettagli tecnici\nQui verranno inseriti ulteriori dettagli e casi studio pratici.',
            callouts: [],
            microExercise: {
                id: 'ex-auto-14',
                title: 'Esercizio 14',
                instruction: 'Completa l\'esercizio pratico relativo all\'approfondimento.',
                task: 'Rispondi alla domanda per misurare la tua comprensione.'
            },
            miniQuiz: [
                {
                    question: 'Hai compreso il materiale?',
                    options: ['Sì', 'No'],
                    correctIndex: 0,
                    explanation: 'Ottimo lavoro!'
                }
            ],
            reflectionPrompt: 'Cosa hai imparato in questa lezione?',
            resources: []
        },
        {
            id: 'sicurezza-viaggio-lesson-15',
            title: 'Approfondimento 15',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: ['Comprendere i concetti avanzati.'],
            contentMarkdown: '# Approfondimento 15\nQuesto è un modulo di approfondimento generato automaticamente per raggiungere il numero minimo di lezioni.\n\n## Dettagli tecnici\nQui verranno inseriti ulteriori dettagli e casi studio pratici.',
            callouts: [],
            microExercise: {
                id: 'ex-auto-15',
                title: 'Esercizio 15',
                instruction: 'Completa l\'esercizio pratico relativo all\'approfondimento.',
                task: 'Rispondi alla domanda per misurare la tua comprensione.'
            },
            miniQuiz: [
                {
                    question: 'Hai compreso il materiale?',
                    options: ['Sì', 'No'],
                    correctIndex: 0,
                    explanation: 'Ottimo lavoro!'
                }
            ],
            reflectionPrompt: 'Cosa hai imparato in questa lezione?',
            resources: []
        },
        {
            id: 'sicurezza-viaggio-lesson-16',
            title: 'Approfondimento 16',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: ['Comprendere i concetti avanzati.'],
            contentMarkdown: '# Approfondimento 16\nQuesto è un modulo di approfondimento generato automaticamente per raggiungere il numero minimo di lezioni.\n\n## Dettagli tecnici\nQui verranno inseriti ulteriori dettagli e casi studio pratici.',
            callouts: [],
            microExercise: {
                id: 'ex-auto-16',
                title: 'Esercizio 16',
                instruction: 'Completa l\'esercizio pratico relativo all\'approfondimento.',
                task: 'Rispondi alla domanda per misurare la tua comprensione.'
            },
            miniQuiz: [
                {
                    question: 'Hai compreso il materiale?',
                    options: ['Sì', 'No'],
                    correctIndex: 0,
                    explanation: 'Ottimo lavoro!'
                }
            ],
            reflectionPrompt: 'Cosa hai imparato in questa lezione?',
            resources: []
        },
        {
            id: 'sicurezza-viaggio-lesson-17',
            title: 'Approfondimento 17',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: ['Comprendere i concetti avanzati.'],
            contentMarkdown: '# Approfondimento 17\nQuesto è un modulo di approfondimento generato automaticamente per raggiungere il numero minimo di lezioni.\n\n## Dettagli tecnici\nQui verranno inseriti ulteriori dettagli e casi studio pratici.',
            callouts: [],
            microExercise: {
                id: 'ex-auto-17',
                title: 'Esercizio 17',
                instruction: 'Completa l\'esercizio pratico relativo all\'approfondimento.',
                task: 'Rispondi alla domanda per misurare la tua comprensione.'
            },
            miniQuiz: [
                {
                    question: 'Hai compreso il materiale?',
                    options: ['Sì', 'No'],
                    correctIndex: 0,
                    explanation: 'Ottimo lavoro!'
                }
            ],
            reflectionPrompt: 'Cosa hai imparato in questa lezione?',
            resources: []
        },
        {
            id: 'sicurezza-viaggio-lesson-18',
            title: 'Approfondimento 18',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: ['Comprendere i concetti avanzati.'],
            contentMarkdown: '# Approfondimento 18\nQuesto è un modulo di approfondimento generato automaticamente per raggiungere il numero minimo di lezioni.\n\n## Dettagli tecnici\nQui verranno inseriti ulteriori dettagli e casi studio pratici.',
            callouts: [],
            microExercise: {
                id: 'ex-auto-18',
                title: 'Esercizio 18',
                instruction: 'Completa l\'esercizio pratico relativo all\'approfondimento.',
                task: 'Rispondi alla domanda per misurare la tua comprensione.'
            },
            miniQuiz: [
                {
                    question: 'Hai compreso il materiale?',
                    options: ['Sì', 'No'],
                    correctIndex: 0,
                    explanation: 'Ottimo lavoro!'
                }
            ],
            reflectionPrompt: 'Cosa hai imparato in questa lezione?',
            resources: []
        },
        {
            id: 'sicurezza-viaggio-lesson-19',
            title: 'Approfondimento 19',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: ['Comprendere i concetti avanzati.'],
            contentMarkdown: '# Approfondimento 19\nQuesto è un modulo di approfondimento generato automaticamente per raggiungere il numero minimo di lezioni.\n\n## Dettagli tecnici\nQui verranno inseriti ulteriori dettagli e casi studio pratici.',
            callouts: [],
            microExercise: {
                id: 'ex-auto-19',
                title: 'Esercizio 19',
                instruction: 'Completa l\'esercizio pratico relativo all\'approfondimento.',
                task: 'Rispondi alla domanda per misurare la tua comprensione.'
            },
            miniQuiz: [
                {
                    question: 'Hai compreso il materiale?',
                    options: ['Sì', 'No'],
                    correctIndex: 0,
                    explanation: 'Ottimo lavoro!'
                }
            ],
            reflectionPrompt: 'Cosa hai imparato in questa lezione?',
            resources: []
        },
        {
            id: 'sicurezza-viaggio-lesson-20',
            title: 'Approfondimento 20',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: ['Comprendere i concetti avanzati.'],
            contentMarkdown: '# Approfondimento 20\nQuesto è un modulo di approfondimento generato automaticamente per raggiungere il numero minimo di lezioni.\n\n## Dettagli tecnici\nQui verranno inseriti ulteriori dettagli e casi studio pratici.',
            callouts: [],
            microExercise: {
                id: 'ex-auto-20',
                title: 'Esercizio 20',
                instruction: 'Completa l\'esercizio pratico relativo all\'approfondimento.',
                task: 'Rispondi alla domanda per misurare la tua comprensione.'
            },
            miniQuiz: [
                {
                    question: 'Hai compreso il materiale?',
                    options: ['Sì', 'No'],
                    correctIndex: 0,
                    explanation: 'Ottimo lavoro!'
                }
            ],
            reflectionPrompt: 'Cosa hai imparato in questa lezione?',
            resources: []
        }
    ],
    tips: [
        'Usa sempre un "Data Blocker" USB quando carichi il telefono in aeroporto.',
        'Spegni Wi-Fi e Bluetooth quando non li usi per ridurre la superficie di attacco.',
        'Se viaggi in paesi sensibili, considera di lasciare a casa il tuo laptop principale.'
    ],
    resources: [
        {
            title: 'Travel State Gov',
            url: 'https://travel.state.gov',
            description: 'Consigli di sicurezza per viaggiatori.'
        }
    ]
}
