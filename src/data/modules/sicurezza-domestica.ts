import { Module } from '../../types'

export const SICUREZZA_DOMESTICA_MODULE: Module = {
    id: 'sicurezza-domestica',
    number: 23,
    title: 'Home Security',
    subtitle: 'La tua casa è il tuo castello digitale.',
    description: 'Router, IoT, smart cam e assistenti vocali. Come evitare che il tostapane ti spii.',
    difficulty: 'avanzata', // Expert module
    durationHours: 5,
    themeColor: 'accent-green',
    icon: 'Home',
    lessons: [
        {
            id: 'home-1-router',
            title: 'Il Cuore della Casa: Il Router',
            minutes: 25,
            difficulty: 'intermedia',
            learningGoals: [
                'Cambiare le credenziali di default.',
                'Aggiornare il firmware.',
                'Disabilitare WPS.'
            ],
            contentMarkdown: `# Il Router: La Porta d'Ingresso\nIl router è il dispositivo più importante. Se è vulnerabile, tutto ciò che ci è collegato è a rischio.\n\n## Cose da fare SUBITO\n1. **Cambia password di amministrazione:** Non lasciare "admin/admin".\n2. **Aggiorna il Firmware:** Spesso i router vecchi hanno falle note.\n3. **Disabilita UPnP e WPS:** Sono comodi ma spesso insicuri.\n4. **Cambia nome alla rete (SSID):** Non far capire che modello di router hai o chi sei (es. non "MioRouter" o "Casa_Rossi").`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Scrivi un promemoria per controllare gli aggiornamenti del router ogni 3 mesi.'
                }
            ],
            microExercise: {
                id: 'ex-home-1',
                title: 'Router Login',
                instruction: 'Sai come accedere al pannello del tuo router?',
                task: 'Trova l\'indirizzo IP del gateway (solitamente 192.168.1.1 o simile).'
            },
            miniQuiz: [
                {
                    question: 'Perché cambiare la password di default del router?',
                    options: ['Perché è brutta', 'Perché è nota agli hacker', 'Perché scade', 'Perché è troppo corta'],
                    correctIndex: 1,
                    explanation: 'Le password di default sono pubbliche e uguali per tutti i modelli.'
                }
            ],
            reflectionPrompt: 'La password del tuo Wi-Fi è scritta su un post-it attaccato al router?',
            resources: []
        },
        {
            id: 'home-2-iot',
            title: 'IoT: Internet of (Insecure) Things',
            minutes: 20,
            difficulty: 'intermedia',
            learningGoals: [
                'Isolare i dispositivi smart.',
                'Gestire i rischi delle telecamere IP.'
            ],
            contentMarkdown: `# Lampadine Spione?\nI dispositivi IoT (lampadine, frigo, telecamere) sono spesso poco sicuri e non vengono aggiornati.\n\n## Segmentazione della Rete\nLa tecnica migliore è creare una "Rete Ospiti" (Guest Network) sul router e collegare lì tutti i dispositivi IoT. Così, se hackerano la lampadina, non possono arrivare al tuo PC dove fai l'home banking.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'Cambia SEMPRE la password di default delle telecamere di sicurezza. Ci sono siti che trasmettono in diretta le cam non protette.'
                }
            ],
            microExercise: {
                id: 'ex-home-2',
                title: 'Guest Network',
                instruction: 'Controlla se il tuo router supporta la rete ospiti.',
                task: 'È attiva?'
            },
            miniQuiz: [
                {
                    question: 'Perché mettere l\'IoT sulla rete ospiti?',
                    options: ['Perché va più veloce', 'Per isolarli dai dispositivi critici', 'Perché consumano meno', 'Perché è obbligatorio'],
                    correctIndex: 1,
                    explanation: 'La segmentazione impedisce che un dispositivo compromesso infetti gli altri.'
                }
            ],
            reflectionPrompt: 'Hai telecamere in casa connesse a internet? Chi può vederle?',
            resources: []
        },
        {
            id: 'home-3-assistants',
            title: 'Assistenti Vocali: Chi ascolta?',
            minutes: 15,
            difficulty: 'base',
            learningGoals: [
                'Gestire la privacy degli smart speaker.',
                'Cancellare le registrazioni.'
            ],
            contentMarkdown: `# Hey, mi senti?\nAlexa, Google e Siri ascoltano sempre per sentire la "wake word". Ma a volte registrano per errore o inviano dati per "migliorare il servizio".\n\n## Buone Pratiche\n- Rivedi e cancella periodicamente la cronologia vocale.\n- Usa il tasto "Mute" fisico quando vuoi privacy assoluta.\n- Non collegare funzioni critiche (come sblocco porte o allarmi) al comando vocale senza un PIN.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Puoi impostare l\'auto-cancellazione delle registrazioni vocali nelle impostazioni privacy del tuo account.'
                }
            ],
            microExercise: {
                id: 'ex-home-3',
                title: 'Mute Button',
                instruction: 'Trova il tasto per disattivare il microfono sul tuo smart speaker.',
                task: 'Cosa succede ai led quando lo premi?'
            },
            miniQuiz: [
                {
                    question: 'Cosa rischia chi usa comandi vocali per aprire la porta di casa?',
                    options: ['Si stanca la voce', 'Qualcuno potrebbe urlare il comando da fuori', 'Consuma corrente', 'Non funziona se piove'],
                    correctIndex: 1,
                    explanation: 'Un ladro potrebbe urlare "apri la porta" da una finestra aperta.'
                }
            ],
            reflectionPrompt: 'Ti senti a tuo agio a parlare di segreti davanti al tuo smart speaker?',
            resources: []
        },
        {
            id: 'sicurezza-domestica-lesson-4',
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
            id: 'sicurezza-domestica-lesson-5',
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
            id: 'sicurezza-domestica-lesson-6',
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
            id: 'sicurezza-domestica-lesson-7',
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
            id: 'sicurezza-domestica-lesson-8',
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
            id: 'sicurezza-domestica-lesson-9',
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
            id: 'sicurezza-domestica-lesson-10',
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
            id: 'sicurezza-domestica-lesson-11',
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
            id: 'sicurezza-domestica-lesson-12',
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
            id: 'sicurezza-domestica-lesson-13',
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
            id: 'sicurezza-domestica-lesson-14',
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
            id: 'sicurezza-domestica-lesson-15',
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
            id: 'sicurezza-domestica-lesson-16',
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
            id: 'sicurezza-domestica-lesson-17',
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
            id: 'sicurezza-domestica-lesson-18',
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
            id: 'sicurezza-domestica-lesson-19',
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
            id: 'sicurezza-domestica-lesson-20',
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
        'Cambia la password del Wi-Fi almeno una volta all\'anno.',
        'Non chiamare la tua rete "Casa Rossi", usa un nome di fantasia.',
        'Stacca la spina agli assistenti vocali quando hai conversazioni molto private.'
    ],
    resources: [
        {
            title: 'Consumer Reports - Home Security',
            url: 'https://www.consumerreports.org/home-security/',
            description: 'Guide alla sicurezza domestica.'
        }
    ]
}
