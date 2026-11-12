import { Module } from '@/types';

export const modulo_15_sicurezza_avanzata: Module = {
    id: 'modulo-15-sicurezza-avanzata',
    lastUpdated: '2026-05-16',
    title: 'Sicurezza Digitale Avanzata',
    description: 'Tecniche e strumenti avanzati per la protezione dei dati personali, della privacy online e dell\'identità digitale.',
    category: 'sicurezza',
    difficulty: 'avanzata',
    icon: 'ShieldCheck',
    themeColor: 'accent-purple',
    lessons: [
        {
            id: 'password-manager',
            slug: 'guida-gestore-password',
            title: 'Gestore di password (Password Manager)',
            category: 'sicurezza',
            audience: ['adults', 'prevention'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Smetti di ricordare decine di password. Usa un gestore sicuro per creare e conservare chiavi d\'accesso inattaccabili.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'ACN',
            synthesis: 'Un archivio digitale criptato che conserva tutte le tue password, accessibile tramite una sola "Master Password".',
            whenToDo: 'Subito, specialmente se usi la stessa password per più siti o se sono facili da indovinare.',
            steps: [
                'Scegli un gestore affidabile (es. Bitwarden, KeePass, o quelli integrati in Apple/Google)',
                'Crea una Master Password molto robusta (almeno 14-16 caratteri, simboli, numeri)',
                'Importa le password esistenti dal browser',
                'Usa il generatore automatico per sostituire le password deboli con nuove chiavi casuali'
            ],
            doNow: [
                'Scegli un password manager',
                'Crea la tua Master Password sicura'
            ],
            dontDo: [
                'Non usare la Master Password per altri account',
                'Non scrivere la Master Password su post-it o file non protetti',
                'Non usare gestori di password gratuiti di dubbia provenienza'
            ],
            checklist: [
                'Gestore installato su tutti i dispositivi',
                'Master Password robusta e memorizzata',
                'Autenticazione a due fattori attiva sul gestore',
                'Password duplicate eliminate',
                'Kit di recupero del gestore stampato o salvato offline'
            ],
            sources: [
                {
                    title: 'Consigli per password sicure',
                    organization: 'ACN',
                    url: 'https://www.acn.gov.it/',
                    type: 'official',
                    usedFor: 'Standard di sicurezza',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: '2fa-autenticazione-due-fattori',
            slug: 'guida-autenticazione-due-fattori-2fa',
            title: 'Autenticazione a due fattori (2FA)',
            category: 'sicurezza',
            audience: ['adults', 'prevention'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Aggiungi un secondo lucchetto ai tuoi account: anche se scoprono la tua password, non potranno entrare.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'ACN',
            synthesis: 'Un codice temporaneo inviato via SMS o generato da un\'app (come Google Authenticator) necessario per l\'accesso.',
            whenToDo: 'Su tutti gli account principali: Email, Banca, Social Network, Amazon.',
            steps: [
                'Vai nelle impostazioni di sicurezza del tuo account',
                'Cerca "Verifica in due passaggi" o "2FA"',
                'Scegli il metodo: App di autenticazione (più sicuro) o SMS (base)',
                'Scansiona il QR code con l\'app scelta o inserisci il numero di telefono',
                'Salva i codici di backup di emergenza'
            ],
            doNow: [
                'Attiva la 2FA sulla tua email principale',
                'Scarica un\'app di autenticazione (es. Google Authenticator o Authy)'
            ],
            dontDo: [
                'Non comunicare mai a nessuno i codici 2FA ricevuti via SMS',
                'Non cancellare l\'app di autenticazione senza aver prima disattivato il servizio o spostato le chiavi',
                'Non ignorare le notifiche di accesso che non hai richiesto tu'
            ],
            checklist: [
                '2FA attiva sull\'email',
                '2FA attiva sui Social',
                'Codici di backup salvati offline',
                'App di autenticazione configurata',
                'Notifiche di accesso attivate'
            ],
            sources: [
                {
                    title: 'Cyber Hygiene - 2FA',
                    organization: 'ACN',
                    url: 'https://www.acn.gov.it/',
                    type: 'official',
                    usedFor: 'Best practices',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'passkey-guida',
            slug: 'passkey-guida-pratica-sicurezza',
            title: 'Passkey: guida pratica',
            category: 'sicurezza',
            audience: ['adults', 'prevention'],
            level: 'avanzata',
            estimatedMinutes: 15,
            summary: 'Come eliminare le password e usare le Passkey per un accesso più sicuro e veloce ai tuoi account.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'ACN (Agenzia per la Cybersicurezza Nazionale)',
            synthesis: 'Utilizzo della biometria del dispositivo (impronta o volto) al posto delle tradizionali password.',
            whenToDo: 'Quando i tuoi account principali (Google, Apple, Microsoft, Amazon) supportano questa tecnologia.',
            scenario: 'Sei stanco di ricordare decine di password complicate e vuoi un metodo che sia immune al phishing.',
            steps: [
                'Verifica se il tuo dispositivo ha un blocco schermo (PIN, Impronta, Volto)',
                'Accedi alle impostazioni di sicurezza del tuo account (es. Google)',
                'Seleziona "Crea una passkey"',
                'Segui le istruzioni per salvare la passkey sul dispositivo o su un gestore di password'
            ],
            doNow: [
                'Attiva il blocco schermo sul dispositivo',
                'Crea la tua prima passkey'
            ],
            dontDo: [
                'Non creare passkey su dispositivi pubblici o condivisi',
                'Non disattivare l\'autenticazione a due fattori finché non hai configurato almeno due metodi di recupero',
                'Non condividere mai il codice di sblocco del tuo telefono'
            ],
            whatToPrepare: [
                'Smartphone recente o computer con modulo TPM',
                'Browser aggiornato (Chrome, Safari, Edge)',
                'Account principale già attivo'
            ],
            commonErrors: [
                'Pensare che la passkey sia una password da scrivere',
                'Perdere l\'unico dispositivo su cui è salvata la passkey senza avoir un backup',
                'Confondere le passkey con i semplici gestori di password'
            ],
            askHelpWhen: [
                'Se il tuo dispositivo non viene riconosciuto durante la creazione',
                'Se devi trasferire le passkey da un sistema operativo a un altro (es. da Android a iOS)'
            ],
            whoCanHelp: ['Supporto tecnico del fornitore del servizio (Google, Apple, ecc.)', 'Esperti di sicurezza informatica'],
            officialLinks: ['https://safety.google/authentication/passkey/', 'https://support.apple.com/it-it/HT213305'],
            checklist: [
                'Dispositivo aggiornato',
                'Blocco schermo attivo',
                'Passkey creata correttamente',
                'Metodo di recupero account verificato',
                'Accesso di prova effettuato senza password'
            ],
            sources: [
                {
                    title: 'Passkeys (FIDO Alliance)',
                    organization: 'FIDO Alliance',
                    url: 'https://fidoalliance.org/passkeys/',
                    type: 'expert',
                    usedFor: 'Definizione standard tecnico',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'email-compromessa',
            slug: 'cosa-fare-email-compromessa-violata',
            title: 'Email compromessa: cosa fare subito',
            category: 'sicurezza',
            audience: ['adults', 'victims'],
            level: 'intermedia',
            estimatedMinutes: 20,
            summary: 'Se qualcuno è entrato nella tua email, ogni minuto conta. Ecco i passaggi per riprendere il controllo e limitare i danni.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            emergencyLevel: 'high',
            synthesis: 'Cambio password immediato, controllo inoltri automatici e revoca sessioni attive.',
            whenToDo: 'Se ricevi avvisi di accesso sospetto, se i tuoi contatti ricevono email strane da te o se non riesci più ad accedere.',
            steps: [
                'Prova a cambiare la password immediatamente se riesci ancora ad accedere',
                'Se non riesci ad accedere, usa il modulo di recupero ufficiale (Google, Outlook, Yahoo)',
                'Controlla le impostazioni di "Inoltro email": gli hacker spesso inoltrano le tue mail alla loro per spiarti',
                'Controlla le "Regole" o i "Filtri": potrebbero nascondere le notifiche della banca',
                'Disconnetti tutti gli altri dispositivi'
            ],
            doNow: [
                'Cambia la password della mail',
                'Controlla le regole di inoltro automatico',
                'Verifica i metodi di recupero (telefono e mail alternativa)'
            ],
            dontDo: [
                'Non usare la vecchia password mai più',
                'Non ignorare l\'accaduto: la mail è la chiave di tutti i tuoi account (banca, social, ecc.)',
                'Non resettare le password degli altri siti finché la mail non è di nuovo sicura'
            ],
            checklist: [
                'Accesso riottenuto',
                'Password nuova e complessa impostata',
                'Inoltri automatici sospetti eliminati',
                'Sessioni attive rimosse',
                '2FA attivata o ripristinata'
            ],
            sources: [
                {
                    title: 'Cosa fare se l\'account è violato',
                    organization: 'Polizia Postale',
                    url: 'https://www.commissariatodips.it/',
                    type: 'official',
                    usedFor: 'Procedure di emergenza',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'recupero-account-major',
            slug: 'recupero-account-google-apple-meta',
            title: 'Recupero Account Google, Apple o Meta',
            category: 'sicurezza',
            audience: ['adults', 'victims'],
            level: 'intermedia',
            estimatedMinutes: 15,
            summary: 'Perso l\'accesso a Google, iCloud, Facebook o Instagram? Ecco i link diretti e i consigli per dimostrare che l\'account è tuo.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Utilizzo dei canali ufficiali di recupero identità dei principali fornitori di servizi digitali.',
            whenToDo: 'Quando hai dimenticato la password o l\'account è stato hackerato e i dati di accesso modificati.',
            steps: [
                'Usa un dispositivo o una rete Wi-Fi che l\'account riconosce (es. il Wi-Fi di casa)',
                'Per Google: vai su g.co/recover',
                'Per Apple: vai su iforgot.apple.com',
                'Per Meta (FB/IG): vai su facebook.com/hacked',
                'Rispondi con precisione alle domande di sicurezza o usa i codici ricevuti via SMS/Email alternativa'
            ],
            doNow: [
                'Avvia la procedura dal tuo computer abituale',
                'Prepara i documenti di identità (alcuni servizi potrebbero chiederli)'
            ],
            commonErrors: [
                'Cercare numeri di telefono di assistenza su Google (spesso sono truffatori)',
                'Arrendersi al primo tentativo fallito',
                'Non avere una mail di recupero aggiornata'
            ],
            checklist: [
                'Procedura avviata da dispositivo noto',
                'Identità verificata via SMS/Mail',
                'Nuova password impostata',
                'Dati di recupero aggiornati',
                'Accesso riottenuto'
            ],
            officialLinks: [
                'https://accounts.google.com/signin/recovery',
                'https://iforgot.apple.com/',
                'https://www.facebook.com/hacked'
            ],
            sources: [
                {
                    title: 'Guida al recupero account',
                    organization: 'ACN',
                    url: 'https://www.acn.gov.it/',
                    type: 'official',
                    usedFor: 'Best practices',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'smartphone-rubato',
            slug: 'cosa-fare-smartphone-rubato-perso',
            title: 'Smartphone rubato o perso: azioni urgenti',
            category: 'sicurezza',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Hai perso il telefono o te l\'hanno rubato? Devi agire in pochi minuti per bloccare pagamenti e accesso ai tuoi dati.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            emergencyLevel: 'high',
            synthesis: 'Localizzazione remota, blocco SIM e denuncia dell\'IMEI.',
            whenToDo: 'Immediatamente dopo esserti accorto dello smarrimento o del furto.',
            steps: [
                'Usa "Trova il mio dispositivo" (Android) o "Dov\'è" (iPhone) da un altro computer',
                'Blocca il dispositivo e scrivi un messaggio sul display con un numero di contatto',
                'Se il recupero è impossibile, avvia il "Reset di fabbrica remoto" (Cancella dati)',
                'Chiama l\'operatore telefonico per bloccare la SIM',
                'Denuncia il furto alla Polizia indicando il codice IMEI (lo trovi sulla scatola o sull\'account Google/Apple)'
            ],
            doNow: [
                'Prova a localizzare il telefono',
                'Blocca la SIM chiamando l\'operatore',
                'Cambia la password dell\'account principale'
            ],
            dontDo: [
                'Non andare da solo a recuperare il telefono se è stato rubato',
                'Non rimuovere il dispositivo dal tuo account finché non hai fatto il reset remoto',
                'Non aspettare domani per bloccare le carte di credito associate'
            ],
            checklist: [
                'Localizzazione tentata',
                'Dati cancellati da remoto',
                'SIM bloccata',
                'IMEI comunicato per la denuncia',
                'Carte di credito (Apple/Google Pay) bloccate'
            ],
            sources: [
                {
                    title: 'Smarrimento o furto smartphone',
                    organization: 'Polizia di Stato',
                    url: 'https://www.poliziadistato.it/',
                    type: 'official',
                    usedFor: 'Procedure denuncia',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'sim-swap-protezione',
            slug: 'sim-swap-truffa-come-proteggersi',
            title: 'SIM Swap: cos\'è e come proteggersi',
            category: 'sicurezza',
            audience: ['adults', 'prevention', 'victims'],
            level: 'intermedia',
            estimatedMinutes: 12,
            summary: 'Quando il tuo numero di telefono passa nelle mani dei criminali. Impara a riconoscere i segnali prima che svuotino il conto.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            emergencyLevel: 'high',
            synthesis: 'Furto dell\'identità digitale tramite il trasferimento del numero telefonico su una nuova SIM controllata dai truffatori.',
            whenToDo: 'Se il tuo telefono smette improvvisamente di avere rete (nessun segnale) senza motivo apparente.',
            steps: [
                'Se perdi il segnale in un posto dove di solito prendi, chiama subito l\'operatore da un altro telefono',
                'Chiedi se è stata richiesta una sostituzione della SIM a tuo nome',
                'Se confermato, blocca immediatamente il numero e i conti bancari associati',
                'Avvisa la tua banca e cambia le password principali'
            ],
            doNow: [
                'Verifica lo stato della rete con l\'operatore',
                'Blocca l\'accesso alla banca'
            ],
            dontDo: [
                'Non pensare che sia un semplice guasto tecnico se dura più di qualche minuto',
                'Non ignorare SMS strani che parlano di "configurazione SIM" o "trasferimento numero"'
            ],
            checklist: [
                'Operatore contattato',
                'SIM illegittima disattivata',
                'Banca avvisata',
                'Denuncia presentata',
                'Passaggio a 2FA basata su App (non SMS)'
            ],
            sources: [
                {
                    title: 'SIM Swap Fraud',
                    organization: 'ACN',
                    url: 'https://www.acn.gov.it/',
                    type: 'official',
                    usedFor: 'Descrizione minaccia',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'spyware-stalkerware',
            slug: 'spyware-stalkerware-riconoscere-rimuovere',
            title: 'Spyware e Stalkerware: difesa attiva',
            category: 'sicurezza',
            audience: ['adults', 'victims'],
            level: 'avanzata',
            estimatedMinutes: 15,
            summary: 'Sospetti che qualcuno stia leggendo i tuoi messaggi o seguendo la tua posizione? Ecco come rilevare software spia.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            emergencyLevel: 'high',
            synthesis: 'Individuazione di app nascoste che monitorano GPS, microfono e messaggi senza consenso.',
            whenToDo: 'Se la batteria scende troppo in fretta, il telefono è sempre caldo, o se qualcuno sa cose che hai scritto solo in chat private.',
            steps: [
                'Controlla l\'elenco completo delle app (anche quelle di sistema) nelle impostazioni',
                'Verifica l\'uso dei dati e della batteria: app sospette che consumano molto in background',
                'Controlla le "App di amministrazione del dispositivo"',
                'Usa un antivirus affidabile o, in casi gravi, esegui un ripristino di fabbrica completo',
                'Attenzione: se sei vittima di violenza domestica, chiedi aiuto prima di rimuovere lo spyware per sicurezza'
            ],
            doNow: [
                'Controlla i consumi della batteria per app',
                'Verifica i permessi di geolocalizzazione',
                'Fai un backup solo dei file (non delle impostazioni) e resetta il telefono'
            ],
            askHelpWhen: [
                'Se temi per la tua incolumità fisica, contatta il 1522 prima di agire sul telefono'
            ],
            checklist: [
                'Lista app controllata',
                'Permessi sensibili verificati',
                'Consumi batteria anomali assenti',
                'Reset effettuato (se necessario)',
                'Password account principali cambiate'
            ],
            officialLinks: ['https://stopstalkerware.org/it/'],
            sources: [
                {
                    title: 'Guida contro lo Stalkerware',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/',
                    type: 'official',
                    usedFor: 'Tutela privacy',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'doxxing-protezione',
            slug: 'doxxing-come-difendersi',
            title: 'Doxxing: difendersi dalla diffusione dati',
            category: 'sicurezza',
            audience: ['adults', 'victims'],
            level: 'intermedia',
            estimatedMinutes: 12,
            summary: 'Cosa fare se qualcuno pubblica online il tuo indirizzo, numero di telefono o foto private per danneggiarti.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            emergencyLevel: 'medium',
            synthesis: 'Rimozione di contenuti lesivi dalle piattaforme social e motori di ricerca.',
            whenToDo: 'Appena scopri che i tuoi dati sensibili sono stati diffusi senza consenso.',
            steps: [
                'Fai degli screenshot o salva le prove (URL, profili)',
                'Segnala il contenuto alla piattaforma (Facebook, Twitter, Telegram) per violazione della privacy',
                'Richiedi la rimozione a Google tramite il modulo "Richiesta di rimozione di informazioni personali"',
                'Denuncia l\'accaduto alla Polizia Postale'
            ],
            doNow: [
                'Salva le prove',
                'Invia segnalazione ai social media',
                'Contatta il Garante Privacy'
            ],
            checklist: [
                'Prove salvate',
                'Segnalazione social inviata',
                'Richiesta rimozione Google fatta',
                'Denuncia presentata',
                'Privacy profili social aumentata'
            ],
            officialLinks: ['https://www.garanteprivacy.it/cyberbullismo'],
            sources: [
                {
                    title: 'Cyberbullismo e Doxxing',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/',
                    type: 'official',
                    usedFor: 'Procedure rimozione',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'data-breach-controllo',
            slug: 'data-breach-come-sapere-se-dati-rubati',
            title: 'Data Breach: i tuoi dati sono stati rubati?',
            category: 'sicurezza',
            audience: ['adults', 'prevention'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Siti come Facebook o LinkedIn vengono spesso violati. Scopri se la tua email e le tue password sono in mano ai criminali.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Verifica della presenza delle proprie credenziali in database di fughe di dati note.',
            whenToDo: 'Periodicamente, o quando ricevi notizie di attacchi a servizi che utilizzi.',
            steps: [
                'Vai sul sito "Have I Been Pwned" (servizio sicuro e riconosciuto)',
                'Inserisci la tua email',
                'Controlla l\'elenco dei siti violati dove comparivi',
                'Se trovi corrispondenze, cambia subito la password di quei siti e di tutti quelli dove usavi la stessa password'
            ],
            doNow: [
                'Controlla la tua mail su haveibeenpwned.com',
                'Cambia le password coinvolte'
            ],
            checklist: [
                'Controllo Have I Been Pwned effettuato',
                'Password dei siti violati cambiate',
                '2FA attivata sui siti coinvolti',
                'Password uniche impostate ovunque'
            ],
            officialLinks: ['https://haveibeenpwned.com/'],
            sources: [
                {
                    title: 'Guida ai Data Breach',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/data-breach',
                    type: 'official',
                    usedFor: 'Definizione e diritti',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'backup-3-2-1',
            slug: 'backup-3-2-1-spiegato-semplice',
            title: 'Backup 3-2-1 spiegato semplice',
            category: 'sicurezza',
            audience: ['adults', 'prevention'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'La strategia d\'oro per non perdere mai i tuoi file, foto e documenti importanti.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'ACN / AgID',
            synthesis: '3 copie dei dati, su 2 supporti diversi, di cui 1 copia fuori sede (cloud).',
            whenToDo: 'Subito, per prevenire perdite dovute a guasti, furti o virus (Ransomware).',
            scenario: 'Il tuo computer si rompe o ti rubano lo smartphone. Se non hai un backup, perdi anni di ricordi e documenti di lavoro.',
            steps: [
                'Identifica i file che non vuoi assolutamente perdere',
                'Copia i file su un hard disk esterno o chiavetta USB',
                'Carica una copia su un servizio cloud sicuro (Google Drive, iCloud, OneDrive)',
                'Pianifica una sincronizzazione automatica'
            ],
            doNow: [
                'Copia i file più importanti su disco esterno',
                'Avvia un backup in cloud'
            ],
            dontDo: [
                'Non tenere il backup collegato permanentemente al computer (rischio fulmini o virus)',
                'Non fidarti di un solo supporto (anche i cloud possono avere problemi)',
                'Non dimenticare di testare il backup (prova a riaprire i file copiati)'
            ],
            whatToPrepare: [
                'Hard disk esterno o NAS',
                'Account cloud con spazio sufficiente',
                'Connessione internet stabile'
            ],
            commonErrors: [
                'Pensare che la "sincronizzazione" sia un backup (se cancelli un file sul PC, sparisce anche dal cloud)',
                'Usare supporti economici e poco affidabili',
                'Dimenticare di criptare i backup che contengono dati sensibili'
            ],
            askHelpWhen: [
                'Se la quantità di dati è enorme e non sai come gestirla',
                'Se devi recuperare dati da un disco già rotto'
            ],
            whoCanHelp: ['Esperti IT', 'Servizi di assistenza tecnica', 'Guide ufficiali dei servizi cloud'],
            officialLinks: ['https://www.cert.agid.gov.it/news/perche-e-importante-fare-il-backup/'],
            checklist: [
                'File prioritari identificati',
                'Copia su disco esterno effettuata',
                'Copia su cloud completata',
                'Verifica integrità file fatta',
                'Programmazione automatica impostata'
            ],
            sources: [
                {
                    title: 'Importanza del backup',
                    organization: 'AgID - CERT-AGID',
                    url: 'https://www.cert.agid.gov.it/',
                    type: 'official',
                    usedFor: 'Linee guida protezione dati',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'privacy-smartphone-impostazioni',
            slug: 'privacy-smartphone-impostazioni-essenziali',
            title: 'Privacy Smartphone: impostazioni essenziali',
            category: 'sicurezza',
            audience: ['adults', 'prevention'],
            level: 'base',
            estimatedMinutes: 12,
            summary: 'Il tuo telefono sa tutto di te. Riprendi il controllo limitando ciò che le app possono vedere e sentire.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Configurazione dei permessi di tracciamento, microfono, fotocamera e posizione.',
            whenToDo: 'Subito, e dopo ogni installazione di nuove app.',
            steps: [
                'Vai in "Privacy e sicurezza" nelle impostazioni',
                'Controlla "Gestione autorizzazioni" o "Privacy Report"',
                'Nega l\'accesso alla posizione "Sempre" (consenti solo "Mentre usi l\'app")',
                'Disattiva il "Tracciamento pubblicitario" (IDFA su iPhone)',
                'Rivedi quali app hanno accesso a Contatti e Microfono'
            ],
            doNow: [
                'Disattiva la geolocalizzazione per le app che non ne hanno bisogno',
                'Nega l\'accesso ai contatti alle app social che non usi per chattare'
            ],
            checklist: [
                'Permessi posizione revisionati',
                'Tracciamento pubblicitario limitato',
                'Accesso a contatti/microfono controllato',
                'Privacy Report verificato',
                'App inutilizzate rimosse'
            ],
            sources: [
                {
                    title: 'Smartphone e privacy',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/',
                    type: 'official',
                    usedFor: 'Consigli protezione',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'watermark-documenti',
            slug: 'come-mettere-watermark-documenti-identita',
            title: 'Watermark documenti: proteggere le copie',
            category: 'sicurezza',
            audience: ['adults', 'prevention'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Quando invii la foto della tua carta d\'identità, scrivi sopra "Solo per uso X". Eviterai che venga riutilizzata per truffe a tuo nome.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Apposizione di una scritta sovrapposta digitale o manuale sulle copie dei documenti per impedirne l\'uso improprio.',
            whenToDo: 'Ogni volta che devi inviare una scansione o foto di un documento a un servizio online, hotel o privato.',
            steps: [
                'Usa l\'editor di foto dello smartphone o del PC',
                'Aggiungi un testo semitrasparente sopra la foto (non coprire i dati importanti)',
                'Scrivi: "Copia per uso [Nome Servizio] - Data [GG/MM/AA]"',
                'Salva e invia solo la versiona modificata'
            ],
            doNow: [
                'Prova a mettere un watermark su una foto d\'esempio',
                'Usa sempre questa tecnica per i noleggi o iscrizioni online'
            ],
            dontDo: [
                'Non coprire i dati che il destinatario deve effettivamente leggere (es. numero documento o scadenza)',
                'Non inviare mai foto "pulite" se non strettamente necessario'
            ],
            checklist: [
                'Testo aggiunto chiaramente',
                'Dati fondamentali leggibili',
                'Scopo dell\'invio specificato nel testo',
                'File salvato separatamente dall\'originale'
            ],
            sources: [
                {
                    title: 'Prevenzione furto identità',
                    organization: 'ACN',
                    url: 'https://www.acn.gov.it/',
                    type: 'official',
                    usedFor: 'Suggerimento pratico',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'invio-sicuro-documenti',
            slug: 'come-inviare-documenti-modo-sicuro',
            title: 'Inviare documenti in modo più sicuro',
            category: 'sicurezza',
            audience: ['adults', 'prevention'],
            level: 'intermedia',
            estimatedMinutes: 10,
            summary: 'L\'email non è sicura per inviare documenti sensibili. Scopri i metodi criptati e le alternative migliori.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Utilizzo di link protetti da password, messaggi a scomparsa o servizi di file-sharing criptati.',
            whenToDo: 'Quando devi inviare contratti, documenti d\'identità o dati sanitari.',
            steps: [
                'Usa servizi come WeTransfer (con password) o ProtonDrive / Google Drive (con link a tempo)',
                'Se usi WhatsApp o Telegram, attiva i "Messaggi effimeri" o "Visualizza una volta"',
                'Comunica la password per aprire il file tramite un canale diverso (es. se mandi il file via mail, manda la password via SMS)',
                'Revoca l\'accesso al link appena il destinatario conferma il download'
            ],
            doNow: [
                'Proteggi con password il prossimo file sensibile che invii',
                'Usa un servizio di cloud protetto invece di allegare file alla mail'
            ],
            dontDo: [
                'Non scrivere la password del file nella stessa email del file',
                'Non lasciare link a documenti privati pubblici per sempre'
            ],
            checklist: [
                'Metodo di invio criptato scelto',
                'Password comunicata via canale separato',
                'Scadenza del link impostata',
                'Watermark applicato al documento (opzionale)'
            ],
            sources: [
                {
                    title: 'Trasmissione sicura dei dati',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/',
                    type: 'official',
                    usedFor: 'Standard di protezione',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'pulizia-sessioni-digitale',
            slug: 'pulizia-sessioni-google-apple-meta',
            title: 'Pulizia sessioni Google/Apple/Meta',
            category: 'sicurezza',
            audience: ['adults', 'prevention'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Come controllare e chiudere gli accessi ai tuoi account da vecchi telefoni o dispositivi sconosciuti.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Garante Privacy',
            synthesis: 'Monitoraggio dei "Dispositivi attivi" nelle impostazioni di sicurezza per prevenire accessi abusivi.',
            whenToDo: 'Ogni 3-6 mesi o se sospetti che qualcuno abbia la tua password.',
            scenario: 'Hai venduto il vecchio telefono o hai fatto l\'accesso da un computer in hotel e non sei sicuro di aver fatto il logout.',
            steps: [
                'Entra nelle impostazioni di sicurezza dell\'account (Google, Facebook, Instagram, ecc.)',
                'Cerca la voce "I tuoi dispositivi" o "Dove hai effettuato l\'accesso"',
                'Riconosci i dispositivi che usi attualmente',
                'Clicca su "Esci" o "Rimuovi" per tutti gli altri'
            ],
            doNow: [
                'Verifica i dispositivi collegati al tuo account',
                'Rimuovi le sessioni attive sconosciute'
            ],
            dontDo: [
                'Non ignorare dispositivi con nomi generici o posizioni geografiche approssimative (spesso sono reali, ma vanno verificati)',
                'Non dimenticare di cambiare password se trovi un dispositivo sospetto',
                'Non cliccare su "Esci da tutte le sessioni" se non ricordi la password attuale (rischi di rimanere fuori ovunque)'
            ],
            whatToPrepare: [
                'Smartphone attuale per confermare l\'identità (2FA)',
                'Elenco dei dispositivi che possiedi realmente'
            ],
            commonErrors: [
                'Confondere un accesso browser (Chrome/Safari) con un nuovo dispositivo',
                'Sottovalutare sessioni aperte anni fa',
                'Non accorgersi di accessi da città diverse (possono essere dovuti alla rete cellulare o VPN)'
            ],
            askHelpWhen: [
                'Se un dispositivo rimosso continua a ricomparire',
                'Se trovi un accesso attivo in una data in cui non eri online'
            ],
            whoCanHelp: ['Centro assistenza dell\'account specifico', 'Polizia Postale (se trovi intrusioni reali)'],
            officialLinks: ['https://myaccount.google.com/device-activity', 'https://www.facebook.com/settings?tab=security'],
            checklist: [
                'Accesso impostazioni sicurezza effettuato',
                'Elenco dispositivi controllato',
                'Sessioni vecchie chiuse',
                'Dispositivi sconosciuti rimossi',
                'Password aggiornata (se necessario)'
            ],
            sources: [
                {
                    title: 'Gestione della sicurezza',
                    organization: 'Garante per la protezione dei dati personali',
                    url: 'https://www.garanteprivacy.it/home/doveri/sicurezza',
                    type: 'official',
                    usedFor: 'Principi di controllo accessi',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'controllo-app-collegate',
            slug: 'controllo-app-e-servizi-collegati',
            title: 'Controllo app collegate',
            category: 'sicurezza',
            audience: ['adults', 'prevention'],
            level: 'intermedia',
            estimatedMinutes: 10,
            summary: 'Verificare quali applicazioni di terze parti hanno accesso ai tuoi dati di Google, Facebook o Apple.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Garante Privacy',
            synthesis: 'Revoca dei permessi a siti e app che non usi più o che chiedono troppi dati.',
            whenToDo: 'Dopo aver provato nuovi servizi online o durante la pulizia periodica della privacy.',
            scenario: 'Hai usato "Accedi con Google" per provare un gioco o un sito di coupon anni fa. Quel sito potrebbe ancora leggere i tuoi contatti o la tua email.',
            steps: [
                'Vai nelle impostazioni di sicurezza dell\'account principale',
                'Cerca "App con accesso al tuo account" o "Accesso di terze parti"',
                'Leggi i permessi concessi a ogni app (es. "Vedere le email", "Gestire il calendario")',
                'Rimuovi l\'accesso per tutte le app non indispensabili'
            ],
            doNow: [
                'Rivedi l\'elenco delle app di terze parti autorizzate',
                'Revoca i permessi alle app inutilizzate'
            ],
            dontDo: [
                'Non dare permessi "Full access" ad app non affidabili',
                'Non pensare che cancellare l\'app dal telefono revochi anche l\'accesso all\'account cloud',
                'Non usare "Accedi con..." su siti che non hanno una chiara privacy policy'
            ],
            whatToPrepare: [
                'Credenziali di accesso',
                'Smartphone per la verifica'
            ],
            commonErrors: [
                'Autorizzare app che chiedono di "inviare email per tuo conto"',
                'Dimenticare che alcune app collegate possono leggere i tuoi file su Drive/iCloud',
                'Pensare che sia un controllo solo per esperti'
            ],
            askHelpWhen: [
                'Se un\'app rimossa continua a inviarti notifiche o email',
                'Se trovi app che non ricordi assolutamente di aver mai autorizzato'
            ],
            whoCanHelp: ['Garante Privacy', 'Supporto tecnico della piattaforma principale'],
            officialLinks: ['https://myaccount.google.com/permissions'],
            checklist: [
                'Pagina permessi aperta',
                'Analisi permessi per singola app fatta',
                'App inutilizzate rimosse',
                'App sospette segnalate',
                'Lista rimanente verificata'
            ],
            sources: [
                {
                    title: 'App e siti di terze parti con accesso al tuo account',
                    organization: 'Google Safety Center',
                    url: 'https://safety.google/',
                    type: 'platform',
                    usedFor: 'Procedura di revoca',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'verifica-mail-falsa',
            slug: 'come-verificare-una-mail-falsa',
            title: 'Verifica mail falsa',
            category: 'sicurezza',
            audience: ['adults', 'prevention'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Tecniche veloci per smascherare i tentativi di phishing prima di cliccare su qualsiasi link.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Polizia Postale',
            synthesis: 'Analisi del mittente reale, degli errori di linguaggio e dei link nascosti.',
            whenToDo: 'Ogni volta che ricevi una email inaspettata che ti chiede di agire con urgenza.',
            scenario: 'Ricevi una mail da "Poste Italiane" (o così sembra) che dice: "Il tuo conto è sospeso, clicca qui per riattivarlo".',
            steps: [
                'Controlla l\'indirizzo email del mittente (clicca sul nome per vedere l\'indirizzo completo)',
                'Passa il mouse sopra il tasto o il link senza cliccare: guarda in basso a sinistra nel browser l\'indirizzo reale',
                'Verifica se ci sono errori grammaticali o toni minacciosi',
                'Controlla se la mail ti chiama per nome o usa un generico "Gentile cliente"'
            ],
            doNow: [
                'Analizza l\'indirizzo email del mittente',
                'Fai "hover" sui link senza cliccare'
            ],
            dontDo: [
                'Non cliccare su nessun tasto o link se hai dubbi',
                'Non scaricare allegati (soprattutto .zip, .html, .exe, .pdf)',
                'Non rispondere alla mail per "chiedere spiegazioni"'
            ],
            whatToPrepare: [
                'Lente d\'ingrandimento digitale (il tuo occhio critico)',
                'Conoscenza del sito ufficiale del presunto mittente'
            ],
            commonErrors: [
                'Fidarsi del logo (è facilissimo da copiare)',
                'Pensare che se la mail arriva nella posta in arrivo sia sicura',
                'Credere che le email di phishing siano sempre scritte male (ora usano l\'IA per scrivere bene)'
            ],
            askHelpWhen: [
                'Se hai già cliccato e inserito dati (cambia subito password!)',
                'Se ricevi decine di email simili ogni giorno'
            ],
            whoCanHelp: ['Polizia Postale', 'Servizio Clienti dell\'azienda citata nella mail'],
            officialLinks: ['https://www.commissariatodips.it/consigli/per-i-cittadini/phishing/index.html'],
            checklist: [
                'Mittente verificato (dominio corretto)',
                'Link analizzato (hover)',
                'Contenuto valutato criticamente',
                'Allegati NON aperti',
                'Mail segnalata come phishing/spam'
            ],
            sources: [
                {
                    title: 'Phishing - Come difendersi',
                    organization: 'Polizia di Stato',
                    url: 'https://www.poliziadistato.it/articolo/phishing--come-difendersi',
                    type: 'official',
                    usedFor: 'Tecniche di difesa',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'dns-sicuro-vpn',
            slug: 'dns-sicuro-e-vpn-quando-servono',
            title: 'DNS sicuro / VPN: quando serve',
            category: 'sicurezza',
            audience: ['adults', 'avanzata'],
            level: 'avanzata',
            estimatedMinutes: 15,
            summary: 'Migliorare la privacy della navigazione e proteggersi su reti Wi-Fi pubbliche.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'ACN',
            synthesis: 'Utilizzo di DNS criptati e tunnel VPN per nascondere il traffico dati a terzi.',
            whenToDo: 'Quando usi Wi-Fi di bar, aeroporti o hotel, o quando vuoi evitare il tracciamento del tuo provider internet.',
            scenario: 'Sei in aeroporto e devi accedere alla tua banca usando il Wi-Fi gratuito. Hai paura che qualcuno possa "intercettare" i tuoi dati.',
            steps: [
                'Attiva il "DNS privato" o "DNS sicuro" nelle impostazioni del browser o dello smartphone',
                'Usa fornitori affidabili (es. Cloudflare 1.1.1.1, Google 8.8.8.8, Quad9)',
                'Attiva una VPN affidabile se devi trasmettere dati molto sensibili',
                'Verifica che il sito visitato abbia il lucchetto (HTTPS)'
            ],
            doNow: [
                'Imposta un DNS sicuro sul dispositivo',
                'Attiva la VPN prima di connetterti a Wi-Fi pubblici'
            ],
            dontDo: [
                'Non usare VPN gratuite sospette (spesso vendono i tuoi dati o iniettano pubblicità)',
                'Non pensare che la VPN ti renda "invisibile" alla legge',
                'Non disattivare il firewall del sistema operativo'
            ],
            whatToPrepare: [
                'App VPN (se scelta)',
                'Conoscenza delle impostazioni di rete del dispositivo'
            ],
            commonErrors: [
                'Pensare che la VPN protegga dai virus (non lo fa)',
                'Usare DNS sconosciuti che potrebbero reindirizzarti su siti falsi',
                'Rallentare eccessivamente la connessione scegliendo server VPN troppo lontani'
            ],
            askHelpWhen: [
                'Se dopo aver cambiato DNS non riesci più a navigare',
                'Se la VPN impedisce il funzionamento di alcune app (es. banca o streaming)'
            ],
            whoCanHelp: ['Supporto tecnico del provider VPN', 'Esperti di networking'],
            officialLinks: ['https://www.acn.gov.it/'],
            checklist: [
                'DNS sicuro impostato',
                'VPN attivata su reti pubbliche',
                'Kill-switch VPN attivo (se disponibile)',
                'Test IP effettuato',
                'Navigazione in HTTPS verificata'
            ],
            sources: [
                {
                    title: 'Privacy e reti Wi-Fi',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/1523496',
                    type: 'official',
                    usedFor: 'Rischi reti pubbliche',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'browser-privacy-settings',
            slug: 'browser-privacy-settings-configurazione',
            title: 'Browser privacy settings',
            category: 'sicurezza',
            audience: ['adults', 'prevention'],
            level: 'intermedia',
            estimatedMinutes: 15,
            summary: 'Configurare Chrome, Safari o Firefox per bloccare il tracciamento pubblicitario e i cookie invasivi.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Garante Privacy',
            synthesis: 'Ottimizzazione delle impostazioni del browser per ridurre l\'impronta digitale e i fastidi pubblicitari.',
            whenToDo: 'Subito, e dopo ogni aggiornamento importante del browser.',
            scenario: 'Navighi su un sito di viaggi e per i successivi dieci giorni vedi solo pubblicità di hotel su ogni sito che visiti.',
            steps: [
                'Attiva "Invia richiesta Do Not Track"',
                'Blocca i "Cookie di terze parti"',
                'Attiva il "Safe Browsing" (Protezione standard o avanzata)',
                'Rivedi le estensioni installate e rimuovi quelle inutili'
            ],
            doNow: [
                'Blocca i cookie di terze parti nel browser',
                'Attiva la protezione contro il tracciamento'
            ],
            dontDo: [
                'Non salvare password importanti nel browser senza una "Master Password" o blocco sistema',
                'Non ignorare gli avvisi di "Sito non sicuro" (rosso)',
                'Non installare decine di estensioni (possono rallentare e spiare)'
            ],
            whatToPrepare: [
                'Browser aperto (PC o Smartphone)',
                'Pochi minuti di tempo per esplorare i menu'
            ],
            commonErrors: [
                'Pensare che la "Navigazione in incognito" ti renda anonimo (nasconde solo la cronologia sul tuo PC)',
                'Accettare tutti i cookie per fretta',
                'Non cancellare periodicamente la cache e i dati di navigazione'
            ],
            askHelpWhen: [
                'Se alcuni siti smettono di funzionare correttamente (potresti aver bloccato troppo)',
                'Se compaiono pop-up pubblicitari anche quando il browser è chiuso'
            ],
            whoCanHelp: ['Guide ufficiali (Google Support, Mozilla Support)', 'Associazioni per i diritti digitali'],
            officialLinks: ['https://www.garanteprivacy.it/cookie'],
            checklist: [
                'Cookie terze parti bloccati',
                'Safe browsing attivo',
                'Estensioni revisionate',
                'HTTPS-only mode attivo (se disponibile)',
                'Cronologia pulita periodicamente'
            ],
            sources: [
                {
                    title: 'Linee guida cookie e altri strumenti di tracciamento',
                    organization: 'Garante per la protezione dei dati personali',
                    url: 'https://www.garanteprivacy.it/cookie',
                    type: 'official',
                    usedFor: 'Normativa e diritti',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        }
    ]
};