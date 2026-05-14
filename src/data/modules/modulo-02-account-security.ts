import { Module } from '@/types';

export const modulo_02_account_security: Module = {
    id: 'modulo-02-account-security',
    lastUpdated: '2024-05-13',
    title: 'Modulo 2: Account e Sicurezza Accessi',
    description: 'Procedure e buone pratiche verificate per blindare i tuoi profili: password robuste, 2FA e gestione sessioni.',
    category: 'sicurezza',
    difficulty: 'base',
    icon: 'Key',
    themeColor: 'accent-cyan',
    lessons: [
        {
            id: 'password-strategy',
            slug: 'creare-password-robuste-passphrase',
            title: 'Password: La fine dell\'era "123456"',
            mainEntity: 'AgID / ACN',
            category: 'sicurezza',
            audience: ['adults', 'minors', 'prevention'],
            level: 'base',
            estimatedMinutes: 4,
            summary: 'Abbandona le password semplici. Impara a usare le Passphrase: lunghe, sicure e facili da ricordare.',
            status: 'published',
            emergencyLevel: 'low',
            scenario: 'Usi la stessa password per tutto, oppure password corte con nomi di familiari o date di nascita. Gli attacchi automatizzati (brute-force) possono indovinarle in pochi secondi.',
            question: 'Come posso creare una password che sia impossibile da hackerare ma facile da ricordare?',
            whatIsHappening: 'Gli hacker non "indovinano" le password a mano. Usano software che testano milioni di combinazioni al secondo partendo da parole comuni e dati pubblici. La lunghezza è la tua difesa principale: ogni carattere in più aumenta esponenzialmente il tempo necessario per violarla.',
            warningSigns: [
                'Usi la stessa password su più siti (social, banca, email).',
                'La tua password è più corta di 12 caratteri.',
                'Ricevi avvisi di "password compromessa" dal browser o dallo smartphone.',
                'La password contiene dati personali (nomi, compleanni, animali).'
            ],
            doNow: [
                'Usa una "Passphrase": una frase lunga invece di una parola (es: "IlMioGattoBluBallaSulTetto2024!").',
                'Assicurati che la password sia lunga almeno 14-16 caratteri.',
                'Cambia immediatamente la password della tua EMAIL principale: è il centro della tua vita digitale.',
                'Usa un Password Manager per non dover ricordare tutto.'
            ],
            steps: [
                'Usa una "Passphrase": una frase lunga invece di una parola (es: "IlMioGattoBluBallaSulTetto2024!").',
                'Assicurati che la password sia lunga almeno 14-16 caratteri.',
                'Cambia immediatamente la password della tua EMAIL principale: è il centro della tua vita digitale.',
                'Usa un Password Manager per non dover ricordare tutto.'
            ],
            dontDo: [
                'Non riutilizzare mai la stessa password su siti diversi.',
                'Non scrivere le password su foglietti o file di testo non protetti.',
                'Non condividere mai le password via chat o email.',
                'Non usare parole comuni presenti nel dizionario.'
            ],
            preserveEvidence: [
                'Se ricevi un avviso di password compromessa, fai uno screenshot dell\'avviso.',
                'Segnati il nome del sito coinvolto nel data breach.'
            ],
            askHelpWhen: [
                'Se ricevi avvisi di login da dispositivi che non riconosci nonostante il cambio password.',
                'Se i tuoi dati compaiono su siti come HaveIBeenPwned.com.'
            ],
            whoCanHelp: [
                'Agenzia per la Cybersicurezza Nazionale (ACN)',
                'CERT-AgID (per segnalazioni di campagne massive)',
                'Assistenza ufficiale della piattaforma'
            ],
            checklist: [
                'Minimo 14 caratteri',
                'Usa una frase (Passphrase)',
                'Password unica per email',
                'Attiva 2FA (prossima lezione)'
            ],
            sources: [
                {
                    title: 'Consigli per i cittadini: Password sicure',
                    organization: 'Agenzia per la Cybersicurezza Nazionale',
                    url: 'https://www.acn.gov.it/cittadini/consigli-utili',
                    type: 'official',
                    usedFor: 'Indicazioni sulla robustezza e sul divieto di riutilizzo delle password.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Linee guida conservazione password',
                    organization: 'Garante Privacy',
                    url: 'https://www.gpdp.it/web/guest/home/docweb/-/docweb-display/docweb/9933519',
                    type: 'official',
                    usedFor: 'Raccomandazioni sulla protezione delle credenziali d\'accesso.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: '2fa-shield',
            slug: 'autenticazione-due-fattori-2fa-guida',
            title: '2FA: Il tuo scudo più forte',
            mainEntity: 'AgID',
            category: 'sicurezza',
            audience: ['adults', 'minors', 'prevention'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'L\'autenticazione a due fattori impedisce l\'accesso al tuo account anche se l\'hacker conosce la tua password.',
            status: 'published',
            emergencyLevel: 'low',
            scenario: 'Un hacker scopre la tua password tramite phishing o un data breach. Prova a entrare nel tuo account. Se hai il 2FA, il sistema gli negherà l\'accesso chiedendo un codice che hai solo tu.',
            question: 'Perché la password da sola non basta più?',
            whatIsHappening: 'L\'autenticazione a più fattori (MFA/2FA) richiede due elementi diversi per l\'accesso: qualcosa che SAI (password) e qualcosa che HAI (smartphone o token). Questo neutralizza quasi tutti gli attacchi basati sul furto di credenziali.',
            warningSigns: [
                'Ricezione di codici di sicurezza (OTP) via SMS o app che non hai richiesto.',
                'Richieste push di autorizzazione accesso improvvise.',
                'Il servizio che usi ti suggerisce continuamente di attivare la protezione extra.'
            ],
            doNow: [
                'Attiva il 2FA su Email, Social e App Bancarie.',
                'Preferisci le App di Autenticazione (Google Authenticator, Microsoft Authenticator) rispetto agli SMS.',
                'Salva i "Codici di Backup" in un luogo sicuro e offline (es: stampati su carta).',
                'Controlla periodicamente i "Dispositivi collegati" nelle impostazioni.'
            ],
            steps: [
                'Attiva il 2FA su Email, Social e App Bancarie.',
                'Preferisci le App di Autenticazione (Google Authenticator, Microsoft Authenticator) rispetto agli SMS.',
                'Salva i "Codici di Backup" in un luogo sicuro e offline (es: stampati su carta).',
                'Controlla periodicamente i "Dispositivi collegati" nelle impostazioni.'
            ],
            dontDo: [
                'Non fornire MAI il codice 2FA a nessuno, nemmeno a chi dice di essere "l\'assistenza tecnica".',
                'Non disattivare il 2FA se il telefono ti "disturba" con troppe richieste: è il segno che qualcuno sta tentando di entrare.',
                'Non usare SMS come 2FA se il servizio offre opzioni più sicure (App o Chiavi hardware).'
            ],
            preserveEvidence: [
                'Fai uno screenshot di ogni richiesta di accesso non autorizzata (mostra data e ora).',
                'Non cancellare gli SMS di codici non richiesti.'
            ],
            askHelpWhen: [
                'Se ricevi decine di codici 2FA di fila (attacco di tipo "MFA Fatigue").',
                'Se perdi l\'accesso al dispositivo che genera i codici e non hai i backup.'
            ],
            whoCanHelp: [
                'Supporto ufficiale Google/Meta/Apple',
                'Agenzia per la Cybersicurezza Nazionale',
                'Polizia Postale (se l\'attacco è andato a buon fine)'
            ],
            checklist: [
                'Attiva su Email',
                'Attiva su Social',
                'Scarica codici backup',
                'Usa App Authenticator'
            ],
            sources: [
                {
                    title: 'Autenticazione a più fattori (MFA)',
                    organization: 'Agenzia per la Cybersicurezza Nazionale',
                    url: 'https://www.acn.gov.it/cittadini/consigli-utili',
                    type: 'official',
                    usedFor: 'Definizione e importanza della MFA per la protezione dei dati.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Verifica in due passaggi (2FA)',
                    organization: 'Google Safety Center',
                    url: 'https://safety.google/intl/it/authentication/',
                    type: 'platform',
                    usedFor: 'Procedure tecniche e funzionamento della protezione account.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'password-managers',
            slug: 'gestori-password-migliori-password-manager',
            title: 'Gestori Password: Perché usarli e quali scegliere',
            mainEntity: 'AgID',
            category: 'sicurezza',
            audience: ['adults', 'prevention'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'L\'unico modo per avere centinaia di password sicure senza impazzire. Scopri come funzionano i Password Manager.',
            status: 'published',
            emergencyLevel: 'low',
            scenario: 'Hai decine di account e finisci sempre per usare la stessa password o per resettarla ogni volta. Ti senti vulnerabile perché sai che le tue password sono deboli.',
            question: 'È sicuro affidare tutte le mie password a un unico software?',
            whatIsHappening: 'Un Password Manager è una cassaforte digitale crittografata. Tu devi ricordare solo una "Master Password" (molto robusta); il software genera, memorizza e inserisce automaticamente password lunghe e diverse per ogni sito. È molto più sicuro che scriverle o riutilizzarle.',
            warningSigns: [
                'Usi la funzione "Ricorda password" del browser su computer pubblici.',
                'Hai un file Excel o Word chiamato "Password" sul desktop.',
                'Usi la stessa password per la banca e per un sito di e-commerce poco noto.'
            ],
            doNow: [
                'Scegli un Password Manager affidabile (es. Bitwarden, KeePass o 1Password).',
                'Crea una Master Password lunghissima (almeno 20 caratteri) che non dimenticherai mai.',
                'Inizia a spostare le tue password più importanti (Email, Banca) nel gestore.',
                'Attiva l\'autenticazione a due fattori (2FA) anche sull\'account del Password Manager.'
            ],
            steps: [
                'Scegli un Password Manager affidabile (es. Bitwarden, KeePass o 1Password).',
                'Crea una Master Password lunghissima (almeno 20 caratteri) che non dimenticherai mai.',
                'Inizia a spostare le tue password più importanti (Email, Banca) nel gestore.',
                'Attiva l\'autenticazione a due fattori (2FA) anche sull\'account del Password Manager.'
            ],
            dontDo: [
                'Non usare Password Manager sconosciuti o gratuiti senza aver verificato la loro reputazione.',
                'Non dimenticare la Master Password: se la perdi, spesso non c\'è modo di recuperare i dati.',
                'Non condividere la Master Password con nessuno.'
            ],
            preserveEvidence: [
                'Stampa il "Recovery Code" (codice di recupero) del tuo Password Manager e conservalo offline in un posto sicuro.'
            ],
            askHelpWhen: [
                'Se sospetti che qualcuno abbia scoperto la tua Master Password.',
                'Se il servizio di Password Manager che usi subisce un data breach (segui le loro istruzioni ufficiali).'
            ],
            whoCanHelp: [
                'Supporto ufficiale del software scelto',
                'Agenzia per la Cybersicurezza Nazionale (consigli generali)',
                'Esperti di sicurezza informatica'
            ],
            checklist: [
                'Scegli il software',
                'Crea Master Password',
                'Sposta account critici',
                'Salva codice recupero'
            ],
            sources: [
                {
                    title: 'Uso dei Password Manager',
                    organization: 'Agenzia per la Cybersicurezza Nazionale',
                    url: 'https://www.acn.gov.it/cittadini/consigli-utili',
                    type: 'official',
                    usedFor: 'Raccomandazione sull\'uso di gestori per migliorare la sicurezza delle credenziali.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Guida alla sicurezza delle password',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/9933519',
                    type: 'official',
                    usedFor: 'Principi di conservazione sicura delle credenziali d\'accesso.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: '2fa-backup-codes-guide',
            slug: 'codici-backup-2fa-guida-sopravvivenza',
            title: 'Codici Backup 2FA: La tua ancora di salvezza',
            mainEntity: 'AgID',
            category: 'sicurezza',
            audience: ['adults', 'parents'],
            level: 'medio',
            estimatedMinutes: 5,
            summary: 'Se perdi il telefono o l\'app di autenticazione, i codici di backup sono l\'unico modo per non restare bloccato fuori dai tuoi account.',
            status: 'published',
            emergencyLevel: 'medium',
            scenario: 'Hai attivato l\'autenticazione a due fattori (2FA) su Google. Lo smartphone ti cade in acqua e non si accende più. Provi ad accedere dal PC, ti viene chiesto il codice dell\'app Authenticator, ma non puoi vederlo.',
            question: 'Cosa succede se perdo il telefono con la 2FA attiva?',
            whatIsHappening: 'Senza i codici di backup, il recupero di un account con 2FA può richiedere giorni o essere impossibile. I codici di backup sono una lista di codici monouso generati durante il setup iniziale.',
            warningSigns: [
                'Hai attivato la 2FA ma non hai mai scaricato o stampato i codici di emergenza.',
                'L\'unica opzione di backup è un numero di telefono che potresti perdere insieme al device.'
            ],
            doNow: [
                'Vai nelle impostazioni di sicurezza del tuo account (Google, Apple, Microsoft).',
                'Trova la sezione "Autenticazione a due fattori" -> "Codici di backup" o "Codici di recupero".',
                'Genera i codici e stampali oppure scrivili a mano su un foglio da conservare in un luogo sicuro (fisico).',
                'Se usi un gestore di password (es. Bitwarden), salva i codici all\'interno della nota protetta dell\'account.'
            ],
            steps: [
                'Vai nelle impostazioni di sicurezza del tuo account (Google, Apple, Microsoft).',
                'Trova la sezione "Autenticazione a due fattori" -> "Codici di backup" o "Codici di recupero".',
                'Genera i codici e stampali oppure scrivili a mano su un foglio da conservare in un luogo sicuro (fisico).',
                'Se usi un gestore di password (es. Bitwarden), salva i codici all\'interno della nota protetta dell\'account.'
            ],
            dontDo: [
                'Non salvare i codici di backup come file di testo non protetto sul desktop del PC o come foto non criptata in galleria.',
                'Non rimandare: fallo ora mentre hai ancora accesso al dispositivo.'
            ],
            preserveEvidence: [
                'N/A - Si tratta di prevenzione.'
            ],
            askHelpWhen: [
                'Se sei già bloccato fuori e non hai i codici: segui le procedure di "Recupero account" specifiche della piattaforma, ma preparati a tempi lunghi.'
            ],
            whoCanHelp: [
                'Supporto Clienti della piattaforma (Google/Apple/Meta)',
                'Un familiare fidato (se hai condiviso i codici con lui)'
            ],
            checklist: [
                'Accedi a Impostazioni Sicurezza',
                'Genera codici backup',
                'Stampa o salva offline',
                'Verifica che siano accessibili'
            ],
            sources: [
                {
                    title: 'Accedere con i codici di backup',
                    organization: 'Google Account Help',
                    url: 'https://support.google.com/accounts/answer/1187538',
                    type: 'platform',
                    usedFor: 'Spiegazione tecnica sull\'uso e la generazione dei codici.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
