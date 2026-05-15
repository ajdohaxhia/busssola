import { Module } from '@/types';

export const modulo_07b_privacy_smartphone: Module = {
    id: 'modulo-07b-privacy-smartphone',
    lastUpdated: '2024-05-13',
    title: 'Modulo 7b: Privacy Smartphone (Avanzata)',
    description: 'Tecniche di difesa avanzate: audit dei permessi sensibili e gestione della biometria.',
    category: 'privacy',
    difficulty: 'avanzata',
    icon: 'Smartphone',
    themeColor: 'accent-cyan',
    lessons: [
        {
            id: 'app-permission-audit',
            slug: 'audit-permessi-app-microfono-fotocamera',
            title: 'Audit dei Permessi: Chi ti spia?',
            mainEntity: 'Google Android Help',
            category: 'privacy',
            audience: ['adults', 'prevention'],
            level: 'medio',
            estimatedMinutes: 6,
            summary: 'Come controllare quali app hanno accesso al tuo microfono, alla tua fotocamera e alla tua posizione proprio in questo momento.',
            status: 'published',
            emergencyLevel: 'low',
            scenario: 'Hai il sospetto che il tuo telefono ti "ascolti" perché vedi pubblicità di cose di cui hai solo parlato a voce.',
            question: 'Perché una calcolatrice dovrebbe accedere alle mie foto?',
            whatIsHappening: 'Molte app gratuite guadagnano rivendendo i tuoi dati a società di marketing. Limitare questi accessi non solo protegge la tua privacy, ma aumenta anche la durata della batteria.',
            warningSigns: [
                'Vedi un puntino verde o arancione in alto sullo schermo.',
                'La batteria si scarica molto velocemente.'
            ],
            steps: [
                'Vai in "Impostazioni > Privacy" del tuo telefono.',
                'Controlla e revoca i permessi per microfono, fotocamera e posizione per le app non necessarie.'
            ],
            doNow: [
                'Vai in "Impostazioni > Privacy > Gestione autorizzazioni" (Android) o "Impostazioni > Privacy e sicurezza" (iOS).',
                'Controlla la lista "Microfono" e "Fotocamera": revoca l\'accesso a tutte le app che non lo richiedono per la loro funzione principale.',
                'Imposta la geolocalizzazione su "Solo mentre l\'app è in uso" per tutte le app, tranne forse il navigatore.',
                'Attiva gli "Avvisi di accesso agli appunti" per sapere se un\'app copia i tuoi testi incollati.'
            ],
            dontDo: [
                'Non scaricare app "Torcia" o "Calcolatrice" che chiedono l\'accesso ai contatti o alla posizione.',
                'Non dare il permesso "Consenti sempre" alla posizione a meno che non sia strettamente necessario.',
                'Non ignorare il Privacy Dashboard del tuo telefono.'
            ],
            preserveEvidence: [
                'Se trovi un\'app che ti spia, fai uno screenshot dei permessi che ha ottenuto prima di disinstallarla.'
            ],
            askHelpWhen: [
                'Se noti che i permessi che hai revocato si riattivano da soli.',
                'Se vedi il puntino di accesso alla fotocamera attivo mentre sei nella schermata home.'
            ],
            whoCanHelp: [
                'Polizia Postale',
                'Supporto ufficiale Android/Apple',
                'Esperti di Cybersecurity'
            ],
            checklist: [
                'Check Microfono',
                'Check Fotocamera',
                'Localizzazione "In uso"',
                'Privacy Dashboard'
            ],
            sources: [
                {
                    title: 'Gestire le autorizzazioni delle app',
                    organization: 'Google Android Help',
                    url: 'https://support.google.com/android/answer/9431959',
                    type: 'platform',
                    usedFor: 'Istruzioni tecniche per il controllo dei permessi su Android.',
                    lastCheckedAt: '2026-05-14'
                }
            ],
            lastReviewedAt: '2026-05-14',
            qualityGatePassed: true
        },
        {
            id: 'iphone-lost-protocol',
            slug: 'iphone-rubato-modalita-smarrito-procedura',
            title: 'iPhone rubato: Protocollo emergenza',
            mainEntity: 'Apple Support',
            category: 'privacy',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Se non trovi più il tuo iPhone, la Modalità Smarrito è lo strumento che impedisce ai ladri di accedere ai tuoi dati.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Ti accorgi che il tuo iPhone non è più in tasca o in borsa.',
            question: 'Cosa devo fare se il mio iPhone è spento o offline?',
            whatIsHappening: 'Grazie alla rete "Dov\'è" (Find My), puoi localizzare, bloccare o inizializzare un iPhone anche se non è connesso a internet.',
            warningSigns: [
                'Non vedi il dispositivo nell\'elenco di "Dov\'è".',
                'Ricevi mail di "Trova il mio iPhone" disattivato.'
            ],
            steps: [
                'Accedi a iCloud.com/find da un altro dispositivo.',
                'Attiva la "Modalità Smarrito" per bloccare il telefono.'
            ],
            doNow: [
                'Accedi subito a iCloud.com/find da un qualunque browser.',
                'Seleziona il dispositivo e attiva "Contrassegna come smarrito". Questo bloccherà il telefono con il tuo codice e disabiliterà Apple Pay.',
                'Inserisci un numero di telefono di un amico e un messaggio da visualizzare sullo schermo.',
                'Denuncia il furto indicando il codice IMEI.'
            ],
            dontDo: [
                'NON rimuovere il dispositivo dal tuo account iCloud.',
                'Non andare da solo nel luogo indicato sulla mappa.'
            ],
            preserveEvidence: [
                'Fai uno screenshot dell\'ultima posizione nota sulla mappa di "Dov\'è".'
            ],
            askHelpWhen: [
                'Immediatamente.'
            ],
            whoCanHelp: [
                'Supporto Apple',
                'Polizia Postale',
                'Tuo operatore telefonico'
            ],
            checklist: [
                'iCloud.com/find',
                'Attiva Modalità Smarrito',
                'NON rimuovere account',
                'Blocca SIM / IMEI'
            ],
            sources: [
                {
                    title: 'Usare la Modalità smarrito in Dov\'è',
                    organization: 'Apple Support',
                    url: 'https://support.apple.com/it-it/102431',
                    type: 'platform',
                    usedFor: 'Istruzioni ufficiali per il blocco remoto del dispositivo.',
                    lastCheckedAt: '2026-05-14'
                }
            ],
            lastReviewedAt: '2026-05-14',
            qualityGatePassed: true
        },
        {
            id: 'android-lost-protocol',
            slug: 'android-perso-trova-mio-dispositivo-guida',
            title: 'Android perso: Blocco e localizzazione',
            mainEntity: 'Google Help',
            category: 'privacy',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Se il tuo smartphone Android sparisce, Google mette a disposizione strumenti potenti per proteggere la tua privacy da remoto.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Hai perso il tuo telefono Android. Temi per i tuoi dati.',
            question: 'Posso cancellare i miei dati se non riesco a recuperare il telefono?',
            whatIsHappening: 'Il servizio "Trova il mio dispositivo" di Google ti permette di localizzare lo smartphone, farlo squillare, bloccarlo o cancellarne completamente i dati da remoto.',
            warningSigns: [
                'Ricevi avvisi di login sospetti su Google.',
                'Il telefono risulta offline sulla mappa.'
            ],
            steps: [
                'Vai sul sito "Trova il mio dispositivo" di Google.',
                'Blocca o inizializza il dispositivo da remoto.'
            ],
            doNow: [
                'Vai su google.com/android/find.',
                'Seleziona "Proteggi il dispositivo": questo bloccherà il telefono con il tuo PIN e ti permetterà di visualizzare un messaggio sullo schermo.',
                'Se sei sicuro di non poterlo recuperare, seleziona "Resetta dispositivo": tutti i tuoi dati verranno cancellati.',
                'Contatta il tuo operatore per bloccare la SIM.'
            ],
            dontDo: [
                'Non dimenticare di denunciare il furto portando con te il codice IMEI.',
                'Non fidarti di SMS che ti dicono "Il tuo Android è stato ritrovato, clicca qui per vedere la posizione".'
            ],
            preserveEvidence: [
                'Salva la cronologia delle posizioni se utile per la denuncia.'
            ],
            askHelpWhen: [
                'Immediatamente.'
            ],
            whoCanHelp: [
                'Google Help Center',
                'Polizia Postale',
                'Operatore telefonico'
            ],
            checklist: [
                'Google.com/android/find',
                'Proteggi dispositivo',
                'Blocca SIM',
                'Denuncia IMEI'
            ],
            sources: [
                {
                    title: 'Trovare, bloccare o resettare un dispositivo Android perso',
                    organization: 'Google Help',
                    url: 'https://support.google.com/android/answer/6160491',
                    type: 'platform',
                    usedFor: 'Procedura ufficiale di gestione emergenza per device Android.',
                    lastCheckedAt: '2026-05-14'
                }
            ],
            lastReviewedAt: '2026-05-14',
            qualityGatePassed: true
        }
    ]
};
