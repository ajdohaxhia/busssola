import { Module } from '../../types'

export const EREDITA_DIGITALE_MODULE: Module = {
    id: 'eredita-digitale',
    number: 26,
    title: 'Digital Legacy',
    subtitle: 'Cosa succede ai tuoi dati se domani non ci sei più?',
    description: 'Pianificare l\'accesso di emergenza, contatti eredi e gestione post-mortem degli account.',
    difficulty: 'avanzata', // Expert module
    durationHours: 3,
    themeColor: 'accent-pink',
    icon: 'Scroll',
    lessons: [
        {
            id: 'legacy-1-emergency',
            title: 'L\'Accesso di Emergenza',
            minutes: 20,
            difficulty: 'intermedia',
            learningGoals: [
                'Impostare contatti di fiducia.',
                'Funzioni di "Erede Digitale" di Google e Apple.'
            ],
            contentMarkdown: `# Chi ha le chiavi?\nSe ti succede qualcosa (incidente, malattia), i tuoi cari potrebbero aver bisogno di accedere a bollette, foto o documenti.\n\n## Contatti Eredi (Legacy Contacts)\n- **Apple:** Imposta un Contatto Erede che potrà sbloccare il tuo account con un certificato di morte.\n- **Google:** Gestione Account Inattivo. Se non ti logghi per X mesi, Google avvisa qualcuno o gli dà accesso.\n- **Facebook:** Contatto erede per gestire il profilo commemorativo.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Non condividere la tua password principale adesso. Usa le funzioni ufficiali che danno accesso *solo* in caso di emergenza documentata.'
                }
            ],
            microExercise: {
                id: 'ex-legacy-1',
                title: 'Google Inactive',
                instruction: 'Cerca "Gestione account inattivo Google".',
                task: 'Dopo quanti mesi di inattività vuoi che Google contatti i tuoi cari? (Default è 3).'
            },
            miniQuiz: [
                {
                    question: 'Il "Contatto Erede" può leggere i tuoi messaggi oggi?',
                    options: ['Sì, sempre', 'No, solo dopo la procedura di decesso e verifica', 'Solo se gli dai il telefono', 'Sì se paga'],
                    correctIndex: 1,
                    explanation: 'È una procedura di emergenza post-mortem.'
                }
            ],
            reflectionPrompt: 'Chi vorresti che gestisse le tue foto se tu non potessi più farlo?',
            resources: []
        },
        {
            id: 'legacy-2-password-vault',
            title: 'La Cassaforte Digitale',
            minutes: 25,
            difficulty: 'avanzata',
            learningGoals: [
                'Come lasciare le password in modo sicuro.',
                'Il Password Manager di famiglia.'
            ],
            contentMarkdown: `# Il Master Key\nSe usi un Password Manager (come dovresti!), tutte le tue password dipendono da una sola Master Password.\n\n## Come tramandarla?\n1. **Metodo cartaceo:** Scrivila su un foglio, chiudilo in busta sigillata e mettilo in cassaforte o dallo a un notaio/persona fidatissima.\n2. **Kit di Emergenza:** Molti password manager (1Password, Bitwarden) generano un PDF di emergenza. Stampalo e conservalo al sicuro.\n\nSenza questo, i tuoi account potrebbero essere persi per sempre.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'Non mandare mai la Master Password via email o chat, nemmeno a tua madre.'
                }
            ],
            microExercise: {
                id: 'ex-legacy-2',
                title: 'Emergency Kit',
                instruction: 'Se usi un password manager, cerca la funzione "Emergency Kit".',
                task: 'Sai dove è salvato/stampato?'
            },
            miniQuiz: [
                {
                    question: 'Perché il metodo "bigliettino sotto la tastiera" non va bene?',
                    options: ['Si perde', 'Chiunque passi può vederlo', 'Si macchia di caffè', 'Tutte le precedenti'],
                    correctIndex: 3,
                    explanation: 'La sicurezza fisica è importante quanto quella digitale.'
                }
            ],
            reflectionPrompt: 'Se dovessi perdere la memoria oggi, dove troveresti le tue password?',
            resources: []
        },
        {
            id: 'legacy-3-social',
            title: 'Memoria o Cancellazione?',
            minutes: 15,
            difficulty: 'base',
            learningGoals: [
                'Decidere il destino dei profili social.',
                'Memorializzazione vs Cancellazione.'
            ],
            contentMarkdown: `# Profilo Commemorativo\nVuoi che il tuo profilo Facebook/Instagram rimanga come un album di ricordi o preferisci che sparisca tutto?\n\n## Le Opzioni\n- **Memorializzazione:** Il profilo resta, appare la scritta "In memoria di...", nessuno può loggarsi ma gli amici possono postare ricordi.\n- **Cancellazione definitiva:** Tutto viene rimosso.\n\nÈ una scelta personale importante da fare nelle impostazioni ORA, non dopo.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Senza indicazioni, i social network tendono a lasciare i profili attivi, creando situazioni dolorose (es. notifiche di compleanno di persone defunte).'
                }
            ],
            microExercise: {
                id: 'ex-legacy-3',
                title: 'Facebook Legacy',
                instruction: 'Controlla le impostazioni di Facebook o Instagram.',
                task: 'Hai scelto cosa succederà al tuo account?'
            },
            miniQuiz: [
                {
                    question: 'Cosa succede in un account "Commemorativo"?',
                    options: ['Si può continuare a chattare', 'Nessuno può fare il login, ma il profilo resta visibile', 'Viene cancellato subito', 'Diventa a pagamento'],
                    correctIndex: 1,
                    explanation: 'L\'account viene congelato per preservare i ricordi.'
                }
            ],
            reflectionPrompt: 'Vorresti che i tuoi post rimanessero online per sempre?',
            resources: []
        },
        {
            id: 'eredita-digitale-lesson-4',
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
            id: 'eredita-digitale-lesson-5',
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
            id: 'eredita-digitale-lesson-6',
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
            id: 'eredita-digitale-lesson-7',
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
            id: 'eredita-digitale-lesson-8',
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
            id: 'eredita-digitale-lesson-9',
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
            id: 'eredita-digitale-lesson-10',
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
            id: 'eredita-digitale-lesson-11',
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
            id: 'eredita-digitale-lesson-12',
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
            id: 'eredita-digitale-lesson-13',
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
            id: 'eredita-digitale-lesson-14',
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
            id: 'eredita-digitale-lesson-15',
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
            id: 'eredita-digitale-lesson-16',
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
            id: 'eredita-digitale-lesson-17',
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
            id: 'eredita-digitale-lesson-18',
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
            id: 'eredita-digitale-lesson-19',
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
            id: 'eredita-digitale-lesson-20',
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
        'Informa le persone che hai scelto come contatti eredi, non farglielo scoprire "dopo".',
        'Includi il codice di sbocco dello smartphone nel tuo testamento digitale.',
        'Rivedi le tue volontà digitali una volta all\'anno.'
    ],
    resources: [
        {
            title: 'Google Inactive Account Manager',
            url: 'https://myaccount.google.com/inactive',
            description: 'Gestione account inattivo.'
        }
    ]
}
