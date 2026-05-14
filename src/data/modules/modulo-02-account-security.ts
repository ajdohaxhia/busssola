import { Module } from '@/types';

export const modulo_02_account_security: Module = {
    id: 'modulo-02-account-security',
    lastUpdated: '2026-05-14',
    title: 'Sicurezza Account e Password',
    description: 'Procedure pratiche per blindare i tuoi accessi digitali e proteggere la tua identità online.',
    category: 'sicurezza',
    difficulty: 'base',
    icon: 'Lock',
    themeColor: 'accent-indigo',
    lessons: [
        {
            id: 'password-strategy',
            slug: 'creare-password-sicure-strategia',
            title: 'Come creare password sicure',
            mainEntity: 'AgID / ACN',
            category: 'sicurezza',
            audience: ['adults', 'minors', 'prevention'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Le vecchie regole (cambiare password ogni 3 mesi) sono superate. Ecco la strategia moderna basata su lunghezza e unicità.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: ['Un account da proteggere'],
            whatToPrepare: ['Un foglio di carta (solo per appuntare la password master temporaneamente)'],
            estimatedCosts: 'Gratis',
            timeToComplete: '5 minuti',
            steps: [
                'Usa almeno 12-14 caratteri (la lunghezza conta più della complessità)',
                'Crea una "Passphrase": una frase lunga ma facile da ricordare (es: "IlGattoBluCorreSuiTetti2024!")',
                'Non usare mai dati personali (date di nascita, nomi di figli o animali)',
                'Usa una password diversa per ogni sito importante (Email, Banca, Social)',
                'Non scriverle su post-it attaccati al PC'
            ],
            officialLinksV2: [
                {
                    sourceId: 'acnHome',
                    useWhen: 'Per approfondire le linee guida nazionali sulla cybersicurezza',
                    beforeOpening: []
                }
            ],
            commonErrors: [
                'Usare la stessa password ovunque',
                'Usare password come "Password123" o "Admin"',
                'Salvare le password nel browser senza una password master di sistema'
            ],
            dontDo: [
                'Non condividere mai le tue password via chat o email',
                'Non dettare mai le password al telefono'
            ],
            ifYouHaveProblems: [
                'Se temi che una password sia stata rubata, cambiala immediatamente ovunque sia usata'
            ],
            checklist: [
                'Password lunga almeno 12 caratteri',
                'Unica per questo sito',
                'Senza dati personali ovvi'
            ],
            sources: [
                {
                    title: 'Consigli per i cittadini: Password sicure',
                    organization: 'Agenzia per la Cybersicurezza Nazionale',
                    url: 'https://www.acn.gov.it/cittadini/consigli-utili',
                    type: 'official',
                    usedFor: 'Standard di sicurezza',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: '2fa-activation',
            slug: 'come-attivare-autenticazione-due-fattori-2fa',
            title: 'Come attivare la 2FA',
            mainEntity: 'AgID / ACN',
            category: 'sicurezza',
            audience: ['adults', 'minors', 'prevention'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'L\'autenticazione a due fattori (2FA) è la protezione più efficace: anche se ti rubano la password, non possono entrare.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: ['Smartphone'],
            whatToPrepare: ['App di autenticazione (es. Google Authenticator, Bitwarden, Authy)'],
            estimatedCosts: 'Gratis',
            timeToComplete: '10 minuti',
            steps: [
                'Scarica un\'App di autenticazione (preferibile agli SMS)',
                'Vai nelle impostazioni di Sicurezza dell\'account (Google, Instagram, Amazon, ecc.)',
                'Cerca "Autenticazione a due fattori" o "Verifica in due passaggi"',
                'Inquadra il codice QR mostrato a schermo con l\'app installata',
                'Inserisci il codice di 6 cifre generato dall\'app per confermare',
                'IMPORTANTE: Salva i codici di backup che ti verranno forniti e conservali fuori dal telefono'
            ],
            officialLinksV2: [
                {
                    sourceId: 'acnHome',
                    useWhen: 'Per capire perché gli SMS sono meno sicuri delle app',
                    beforeOpening: []
                }
            ],
            commonErrors: [
                'Disinstallare l\'app di autenticazione senza aver prima salvato i codici di backup',
                'Pensare che basti la password per essere sicuri'
            ],
            dontDo: [
                'Non dare mai a nessuno i codici a 6 cifre che ricevi via SMS o app'
            ],
            ifYouHaveProblems: [
                'Se perdi l\'accesso all\'app e non hai i codici di backup, dovrai contattare l\'assistenza del servizio fornendo documenti'
            ],
            checklist: [
                'App di autenticazione installata',
                '2FA attivata sui servizi critici',
                'Codici di backup salvati e stampati'
            ],
            sources: [
                {
                    title: 'Linee guida sulla sicurezza degli account',
                    organization: 'Agenzia per la Cybersicurezza Nazionale',
                    url: 'https://www.acn.gov.it/',
                    type: 'official',
                    usedFor: 'Metodologia 2FA',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'passkey-guide',
            slug: 'come-usare-le-passkey-guida-pratica',
            title: 'Come usare le Passkey',
            mainEntity: 'FIDO Alliance',
            category: 'sicurezza',
            audience: ['adults', 'avanzata'],
            level: 'intermedia',
            estimatedMinutes: 12,
            summary: 'Le Passkey sostituiscono la password con la biometria del tuo telefono (impronta o volto). Sono il futuro della sicurezza.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: ['Smartphone moderno con sblocco biometrico', 'Account compatibile (Google, Apple, Microsoft, Amazon)'],
            whatToPrepare: ['Smartphone connesso all\'account'],
            estimatedCosts: 'Gratis',
            timeToComplete: '5 minuti',
            steps: [
                'Accedi alle impostazioni di sicurezza del tuo account da browser',
                'Seleziona "Passkey" o "Chiavi di accesso"',
                'Clicca su "Crea una passkey"',
                'Segui le istruzioni del tuo smartphone per confermare con l\'impronta o il volto',
                'Al prossimo accesso, non dovrai digitare la password: basterà sbloccare il telefono'
            ],
            officialLinksV2: [
                {
                    sourceId: 'acnHome',
                    useWhen: 'Per capire come la tecnologia passkey previene il phishing',
                    beforeOpening: []
                }
            ],
            commonErrors: [
                'Pensare che se perdi il telefono perdi l\'account (le passkey si sincronizzano nel tuo cloud Google o Apple)',
                'Confondere la passkey con lo sblocco schermo locale'
            ],
            dontDo: [
                'Non creare passkey su dispositivi pubblici o condivisi'
            ],
            ifYouHaveProblems: [
                'Se il tuo dispositivo non supporta le passkey, continua a usare un Password Manager con 2FA app'
            ],
            checklist: [
                'Account principale protetto da Passkey',
                'Sincronizzazione cloud attiva',
                'Nessuna password digitata per l\'accesso'
            ],
            sources: [
                {
                    title: 'Passkeys (WebAuthn)',
                    organization: 'FIDO Alliance',
                    url: 'https://fidoalliance.org/passkeys/',
                    type: 'expert',
                    usedFor: 'Spiegazione standard tecnologico',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        }
    ]
};
