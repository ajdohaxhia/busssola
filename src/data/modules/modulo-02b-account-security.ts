import { Module } from '@/types';

export const modulo_02b_account_security: Module = {
    id: 'modulo-02b-account-security',
    lastUpdated: '2024-05-13',
    title: 'Modulo 2b: Checkup Privacy & Sicurezza',
    description: 'Procedure guidate per controllare cosa sanno di te Google, Facebook e Instagram, e come blindare i tuoi dati.',
    category: 'sicurezza',
    difficulty: 'intermedia',
    icon: 'Key',
    themeColor: 'accent-cyan',
    lessons: [
        {
            id: 'google-privacy-audit',
            slug: 'google-privacy-checkup-guida-completa',
            title: 'Checkup Google: Pulizia totale dei dati',
            mainEntity: 'Google',
            category: 'sicurezza',
            audience: ['adults', 'minors', 'prevention'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Scopri come vedere ed eliminare la cronologia delle posizioni, delle ricerche e dei video che Google conserva su di te.',
            status: 'published',
            emergencyLevel: 'low',
            scenario: 'Ti accorgi che Google sa esattamente dove sei stato negli ultimi 5 anni, cosa hai cercato e quali prodotti hai guardato. Vuoi limitare questa raccolta di dati senza rinunciare ai servizi.',
            question: 'Come posso impedire a Google di tracciare ogni mio movimento?',
            whatIsHappening: 'Google raccoglie dati per "personalizzare l\'esperienza" e vendere pubblicità. Tuttavia, offre uno strumento ufficiale (Privacy Checkup) per permetterti di decidere cosa tenere e cosa cancellare automaticamente.',
            warningSigns: [
                'Ricevi "Riepiloghi degli spostamenti" via mail che non ricordavi di aver attivato.',
                'Vedi annunci pubblicitari basati su ricerche fatte mesi prima.',
                'Il tuo account risulta collegato a decine di app o siti che non usi più.'
            ],
            doNow: [
                'Accedi a "Dati e privacy" nel tuo Account Google.',
                'Esegui il "Controllo privacy" guidato.',
                'Attiva l\'"Eliminazione automatica" per la Cronologia delle posizioni e l\'Attività web e app (consigliato: 3 mesi).',
                'Controlla "Le tue connessioni con app e servizi di terze parti" e rimuovi quelle inutilizzate.'
            ],
            steps: [
                'Accedi a "Dati e privacy" nel tuo Account Google.',
                'Esegui il "Controllo privacy" guidato.',
                'Attiva l\'"Eliminazione automatica" per la Cronologia delle posizioni e l\'Attività web e app (consigliato: 3 mesi).',
                'Controlla "Le tue connessioni con app e servizi di terze parti" e rimuovi quelle inutilizzate.'
            ],
            dontDo: [
                'Non lasciare attiva la "Geolocalizzazione" perenne se non ti serve per il navigatore.',
                'Non condividere la tua posizione "In tempo reale" su Google Maps in modo permanente con chiunque.',
                'Non ignorare gli "Avvisi di sicurezza" che Google ti invia via mail.'
            ],
            preserveEvidence: [
                'Puoi scaricare una copia di tutti i tuoi dati tramite "Google Takeout" prima di cancellarli.'
            ],
            askHelpWhen: [
                'Se trovi attività nella tua cronologia che sei sicuro di non aver fatto (segno di accesso non autorizzato).',
                'Se non riesci a disattivare alcune impostazioni di tracciamento.'
            ],
            whoCanHelp: [
                'Google Safety Center',
                'Garante Privacy (Vademecum Tracciamento)',
                'Esperti di Privacy Digitale'
            ],
            checklist: [
                'Checkup Privacy Google',
                'Eliminazione automatica on',
                'Verifica App terze',
                'Mappa cronologia off'
            ],
            sources: [
                {
                    title: 'Controllo Privacy Google',
                    organization: 'Google Account',
                    url: 'https://myaccount.google.com/privacycheckup',
                    type: 'platform',
                    usedFor: 'Link diretto allo strumento ufficiale di gestione dati.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Come eliminare la cronologia delle attività',
                    organization: 'Google Support',
                    url: 'https://support.google.com/chrome/answer/95589',
                    type: 'platform',
                    usedFor: 'Istruzioni tecniche per la pulizia dei dati di navigazione.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'data-breach-response',
            slug: 'data-breach-violazione-dati-cosa-fare',
            title: 'Data Breach: Se i tuoi dati sono stati rubati',
            mainEntity: 'AgID',
            category: 'sicurezza',
            audience: ['adults', 'victims'],
            level: 'medio',
            estimatedMinutes: 6,
            summary: 'Password, email o numeri di telefono rubati da un sito? Ecco come capire l\'entità del danno e proteggerti.',
            status: 'published',
            emergencyLevel: 'medium',
            scenario: 'Ricevi una mail da un servizio che usi (es: un sito di shopping o un social) che ti informa di aver subito un attacco informatico e che i tuoi dati potrebbero essere stati esposti.',
            question: 'Cosa devo fare se un sito perde la mia password?',
            whatIsHappening: 'Un Data Breach (violazione dei dati) avviene quando hacker rubano il database di un\'azienda. Anche se la tua password è criptata, potrebbero riuscire a decifrarla o usare la tua mail per tentativi di phishing mirati.',
            warningSigns: [
                'Email ufficiale dall\'azienda che conferma la violazione.',
                'Il tuo indirizzo email compare su servizi come "Have I Been Pwned".',
                'Aumento improvviso di SMS di phishing o spam sulla tua mail.',
                'Notifiche di tentativi di accesso ai tuoi account da altri paesi.'
            ],
            doNow: [
                'Cambia immediatamente la password del sito coinvolto.',
                'Se usavi la stessa password su altri siti, cambiala OVUNQUE (e usa un password manager per non farlo mai più).',
                'Attiva la 2FA (Autenticazione a due fattori) su tutti gli account sensibili.',
                'Monitora il tuo conto bancario se il sito coinvolto conteneva dati di pagamento.',
                'Sii estremamente sospettoso verso mail o SMS che riceverai nei prossimi giorni: l\'hacker conosce i tuoi dati e li userà per farti cliccare su link falsi.'
            ],
            steps: [
                'Cambia immediatamente la password del sito coinvolto.',
                'Se usavi la stessa password su altri siti, cambiala OVUNQUE (e usa un password manager per non farlo mai più).',
                'Attiva la 2FA (Autenticazione a due fattori) su tutti gli account sensibili.',
                'Monitora il tuo conto bancario se il sito coinvolto conteneva dati di pagamento.',
                'Sii estremamente sospettoso verso mail o SMS che riceverai nei prossimi giorni: l\'hacker conosce i tuoi dati e li userà per farti cliccare su link falsi.'
            ],
            dontDo: [
                'Non ignorare la notifica pensando che "tanto non ho nulla da nascondere".',
                'Non cliccare sui link contenuti nella mail di notifica del breach: vai direttamente sul sito ufficiale digitando l\'indirizzo nel browser.'
            ],
            preserveEvidence: [
                'Conserva la mail di notifica ufficiale inviata dall\'azienda.',
                'Fai uno screenshot dei risultati su HaveIBeenPwned come promemoria dei dati esposti.'
            ],
            askHelpWhen: [
                'Se noti transazioni bancarie non autorizzate.',
                'Se perdi l\'accesso a un account critico subito dopo il breach.'
            ],
            whoCanHelp: [
                'Garante per la protezione dei dati personali (garanteprivacy.it)',
                'Polizia Postale',
                'La tua banca (se coinvolti dati finanziari)'
            ],
            checklist: [
                'Cambia password sito',
                'Cambia password duplicate',
                'Attiva 2FA ovunque',
                'Monitora spam/phishing',
                'Controlla HaveIBeenPwned'
            ],
            sources: [
                {
                    title: 'Cos\'è un data breach e cosa fare',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/temi/data-breach',
                    type: 'official',
                    usedFor: 'Definizione legale e obblighi di tutela dell\'interessato.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Have I Been Pwned - Verifica violazioni',
                    organization: 'Have I Been Pwned',
                    url: 'https://haveibeenpwned.com/',
                    type: 'expert',
                    usedFor: 'Strumento di verifica per confermare se i dati sono stati esposti in breach noti.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'digital-inheritance-setup',
            slug: 'eredita-digitale-contatto-erede-dati',
            title: 'Eredità Digitale: Prepara il tuo lascito',
            mainEntity: 'AgID',
            category: 'sicurezza',
            audience: ['adults'],
            level: 'medio',
            estimatedMinutes: 7,
            summary: 'Decidi oggi cosa succederà alle tue foto, alle tue mail e ai tuoi account social se un domani non dovessi più esserci.',
            status: 'published',
            emergencyLevel: 'low',
            scenario: 'Hai migliaia di foto nel cloud e documenti importanti. Se ti succedesse qualcosa, la tua famiglia non saprebbe come accedervi e i giganti del tech potrebbero cancellare tutto dopo un periodo di inattività.',
            question: 'Posso nominare un erede per i miei dati digitali?',
            whatIsHappening: 'Apple e Google offrono strumenti ufficiali per designare un "Erede" o un "Contatto Legale" che potrà accedere ai tuoi dati in modo sicuro e legale senza dover conoscere la tua password (che non va mai condivisa).',
            warningSigns: [
                'N/A - Si tratta di pianificazione preventiva.'
            ],
            doNow: [
                'Su iPhone: Vai in Impostazioni > [Nome] > Accesso e sicurezza > Contatto erede e aggiungi una persona di fiducia.',
                'Su Google: Cerca "Gestione account inattivo" e imposta dopo quanti mesi di inattività inviare i tuoi dati ai tuoi cari.',
                'Comunica alla persona scelta che riceverà una "chiave di accesso" digitale: senza quella, non potrà fare nulla.'
            ],
            steps: [
                'Su iPhone: Vai in Impostazioni > [Nome] > Accesso e sicurezza > Contatto erede e aggiungi una persona di fiducia.',
                'Su Google: Cerca "Gestione account inattivo" e imposta dopo quanti mesi di inattività inviare i tuoi dati ai tuoi cari.',
                'Comunica alla persona scelta che riceverà una "chiave di accesso" digitale: senza quella, non potrà fare nulla.'
            ],
            dontDo: [
                'Non scrivere le tue password su un foglio di carta insicuro: usa questi strumenti ufficiali che sono più sicuri e legali.',
                'Non aspettare: la procedura richiede pochi minuti ma è fondamentale per proteggere i ricordi di una vita.'
            ],
            preserveEvidence: [
                'Conserva la "Chiave di accesso erede" stampata in un luogo sicuro (es: con il testamento o documenti importanti).'
            ],
            askHelpWhen: [
                'Se vuoi gestire l\'eredità di criptovalute o asset finanziari digitali: in quel caso serve un notaio specializzato.'
            ],
            whoCanHelp: [
                'Supporto Apple / Google',
                'Notai specializzati in Digital Heritage'
            ],
            checklist: [
                'Contatto erede Apple',
                'Account inattivo Google',
                'Consegna chiavi erede',
                'Pianifica asset digitali'
            ],
            sources: [
                {
                    title: 'Aggiungere un contatto erede per il tuo ID Apple',
                    organization: 'Apple Support',
                    url: 'https://support.apple.com/it-it/102631',
                    type: 'platform',
                    usedFor: 'Istruzioni tecniche per la gestione del lascito digitale.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Informazioni su Gestione account inattivo',
                    organization: 'Google Help',
                    url: 'https://support.google.com/accounts/answer/3036546',
                    type: 'platform',
                    usedFor: 'Procedura di pianificazione inattività account Google.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
