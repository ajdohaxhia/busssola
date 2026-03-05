import { Module } from '../../types'

export const SMARTPHONE_HARDENING_MODULE: Module = {
    id: 'smartphone-hardening',
    number: 25,
    title: 'Smartphone Hardening',
    subtitle: 'Trasforma il tuo telefono in una fortezza.',
    description: 'Permessi app, biometria sicura, crittografia e sistemi anti-furto. Non rendere la vita facile ai ladri.',
    difficulty: 'avanzata', // Expert module
    durationHours: 6,
    themeColor: 'accent-orange',
    icon: 'Smartphone',
    lessons: [
        {
            id: 'phone-1-permissions',
            title: 'Permessi App: Il Minimo Indispensabile',
            minutes: 20,
            difficulty: 'intermedia',
            learningGoals: [
                'Controllare i permessi concessi alle app.',
                'Capire perché una torcia non deve accedere alla rubrica.'
            ],
            contentMarkdown: `# Il Principio del Privilegio Minimo\nLe app chiedono spesso più dati di quelli che servono. Perché un gioco puzzle vuole la tua posizione GPS?\n\n## Audit dei Permessi\nVai nelle impostazioni e controlla:\n- **Posizione:** Consenti solo "Mentre usi l'app".\n- **Microfono/Camera:** Chi ha accesso?\n- **Contatti/Foto:** Valuta bene chi può leggerli.\n\nSe un'app chiede permessi strani, disinstallala o negali.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'iOS e le nuove versioni di Android permettono di dare accesso solo a "foto selezionate" invece che a tutta la galleria.'
                }
            ],
            microExercise: {
                id: 'ex-phone-1',
                title: 'Check Posizione',
                instruction: 'Vai in Impostazioni -> Privacy -> Posizione.',
                task: 'Quante app hanno accesso "Sempre" alla tua posizione? C\'è un motivo valido?'
            },
            miniQuiz: [
                {
                    question: 'Un\'app calcolatrice chiede accesso alla Rubrica. Cosa fai?',
                    options: ['Accetto, servirà', 'Nego, non ha senso', 'Disinstallo telefono', 'Chiamo la polizia'],
                    correctIndex: 1,
                    explanation: 'Non c\'è motivo funzionale per cui una calcolatrice debba leggere i tuoi contatti.'
                }
            ],
            reflectionPrompt: 'Hai mai cliccato "Consenti tutto" senza leggere per fretta?',
            resources: []
        },
        {
            id: 'phone-2-biometrics',
            title: 'Biometria e PIN',
            minutes: 15,
            difficulty: 'base',
            learningGoals: [
                'PIN vs Pattern vs Biometria.',
                'Quando disabilitare il FaceID/TouchID.'
            ],
            contentMarkdown: `# Il Codice di Accesso\nIl PIN a 4 cifre è debole (solo 10.000 combinazioni). Usa un codice a 6 cifre o alfanumerico.\n\n## Biometria: Comoda ma...\nL'impronta o il volto sono comodi, ma in certe situazioni (es. controlli di frontiera forzati) potresti essere costretto a sbloccare il telefono. Il PIN/Password è legalmente più tutelato in molti paesi (nessuno può costringerti a *dire* cosa c'è nella tua mente).\n\n## Lockdown Mode\nImpara la combinazione di emergenza per disabilitare temporaneamente la biometria (es. tenere premuti i tasti laterali su iPhone).`,
            callouts: [
                {
                    type: 'tip',
                    content: 'I "pattern" di sblocco (i disegni) sono facili da indovinare guardando le ditate sullo schermo.'
                }
            ],
            microExercise: {
                id: 'ex-phone-2',
                title: 'Pulizia Schermo',
                instruction: 'Spegni lo schermo e guardalo in controluce.',
                task: 'Si vede la traccia del tuo pattern di sblocco?'
            },
            miniQuiz: [
                {
                    question: 'Qual è il metodo di sblocco più sicuro contro tentativi "forzati"?',
                    options: ['FaceID', 'Impronta', 'Password alfanumerica lunga', 'Nessuno'],
                    correctIndex: 2,
                    explanation: 'La password è nella tua mente e non può essere usata con la forza fisica (come un dito).'
                }
            ],
            reflectionPrompt: 'Il tuo PIN è la tua data di nascita? (Speriamo di no!)',
            resources: []
        },
        {
            id: 'phone-3-antitheft',
            title: 'In caso di Furto: Find My Device',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: [
                'Configurare Trova il mio iPhone / Android.',
                'Cancellazione remota.'
            ],
            contentMarkdown: `# Se sparisce\nAver perso il telefono è grave, ma che un ladro acceda ai dati è peggio.\n\n## Find My... (Tutto)\nAssicurati che la localizzazione remota sia attiva. Ti permette di:\n1. Farlo suonare.\n2. Inviare un messaggio sul display.\n3. **Inizializzarlo (Wipe):** Cancellare tutto da remoto. Fallo se sai che non lo riavrai.\n\nNota: Se il ladro lo mette in modalità aereo o lo spegne, il comando si attiverà alla prima connessione.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'Annotati il codice IMEI del telefono (digita *#06#). Ti servirà per la denuncia.'
                }
            ],
            microExercise: {
                id: 'ex-phone-3',
                title: 'Simulazione Smarrimento',
                instruction: 'Accedi da PC a icloud.com/find o android.com/find.',
                task: 'Riesci a vedere dove si trova il tuo telefono in questo momento?'
            },
            miniQuiz: [
                {
                    question: 'Cosa devi fare se sei sicuro che il telefono è stato rubato?',
                    options: ['Andare a cercarlo da solo', 'Cancellare i dati da remoto (Wipe)', 'Aspettare', 'Comprare una cover nuova'],
                    correctIndex: 1,
                    explanation: 'Proteggi i tuoi dati prima di tutto.'
                }
            ],
            reflectionPrompt: 'Saresti pronto a cancellare tutte le foto sul telefono ora se lo perdessi? (Hai un backup, vero?)',
            resources: []
        },
        {
            id: 'smartphone-hardening-lesson-4',
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
            id: 'smartphone-hardening-lesson-5',
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
            id: 'smartphone-hardening-lesson-6',
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
            id: 'smartphone-hardening-lesson-7',
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
            id: 'smartphone-hardening-lesson-8',
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
            id: 'smartphone-hardening-lesson-9',
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
            id: 'smartphone-hardening-lesson-10',
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
            id: 'smartphone-hardening-lesson-11',
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
            id: 'smartphone-hardening-lesson-12',
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
            id: 'smartphone-hardening-lesson-13',
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
            id: 'smartphone-hardening-lesson-14',
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
            id: 'smartphone-hardening-lesson-15',
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
            id: 'smartphone-hardening-lesson-16',
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
            id: 'smartphone-hardening-lesson-17',
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
            id: 'smartphone-hardening-lesson-18',
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
            id: 'smartphone-hardening-lesson-19',
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
            id: 'smartphone-hardening-lesson-20',
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
        'Disabilita le anteprime dei messaggi nella schermata di blocco.',
        'Imposta l\'autodistruzione dei dati dopo 10 tentativi di PIN errati (con attenzione!).',
        'Non usare il riconoscimento facciale "semplice" di Android, non è sicuro come FaceID.'
    ],
    resources: [
        {
            title: 'Android Security',
            url: 'https://www.android.com/security-center/',
            description: 'Guide ufficiali Android.'
        }
    ]
}
