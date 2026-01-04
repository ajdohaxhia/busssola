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
