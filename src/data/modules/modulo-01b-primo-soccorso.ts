import { Module } from '@/types';

export const modulo_01b_primo_soccorso: Module = {
    id: 'modulo-01b-primo-soccorso',
    title: 'Modulo 1b: Primo Soccorso (Casi Specifici)',
    description: 'Procedure per emergenze meno comuni ma gravissime: doxxing, sim-swapping e truffe bancarie mirate.',
    category: 'first-aid',
    difficulty: 'intermedia',
    icon: 'ShieldAlert',
    themeColor: 'accent-red',
    lessons: [
        {
            id: 'doxxing-sos',
            slug: 'doxxing-rimuovere-indirizzo-telefono-online',
            title: 'Doxxing: Rimuovere indirizzo e telefono online',
            category: 'first-aid',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Cosa fare se qualcuno ha pubblicato i tuoi dati privati (casa, numero, mail) online per colpirti.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Dopo una discussione online o una minaccia, scopri che qualcuno ha pubblicato il tuo indirizzo di casa, il tuo numero di telefono o il tuo posto di lavoro su un forum, un gruppo Telegram o sui social, incitando altri a molestarti.',
            question: 'Come posso far sparire i miei dati privati da Google e dai social?',
            whatIsHappening: 'Il doxxing è una violazione gravissima della privacy che mira a esporti al pericolo reale. La priorità è de-indicizzare i dati dai motori di ricerca e segnalare i contenuti per la rimozione immediata dalle piattaforme.',
            warningSigns: [
                'Ricezione improvvisa di chiamate o messaggi anonimi di insulti.',
                'Post pubblici che contengono screenshot dei tuoi documenti o dati di residenza.',
                'Presenza di tue informazioni personali in thread di forum ostili.'
            ],
            doNow: [
                'Usa lo strumento "Risultati che ti riguardano" di Google per chiedere la rimozione dei tuoi dati dai risultati di ricerca.',
                'Segnala il post alla piattaforma (es. Twitter/X, Facebook, Telegram) come "Molestia" o "Condivisione di informazioni private".',
                'Cambia le impostazioni di privacy dei tuoi social in "Massima Protezione".',
                'Se temi per la tua incolumità fisica, recati immediatamente alla stazione di Polizia più vicina.'
            ],
            dontDo: [
                'Non rispondere agli aggressori: il doxxing si alimenta dell\'attenzione e della tua reazione.',
                'Non cercare di negoziare con chi ha pubblicato i dati.',
                'Non cancellare le prove: fai screenshot completi prima che i post vengano rimossi.'
            ],
            preserveEvidence: [
                'Fai screenshot degli URL esatti delle pagine che contengono i tuoi dati.',
                'Segnati lo username o l\'ID univoco del profilo che ha iniziato la diffusione.',
                'Salva eventuali messaggi di minaccia ricevuti.'
            ],
            askHelpWhen: [
                'Se gli aggressori iniziano a presentarsi fisicamente presso il tuo domicilio o lavoro.',
                'Se le piattaforme si rifiutano di rimuovere i contenuti nonostante le segnalazioni.'
            ],
            whoCanHelp: [
                'Polizia Postale (commissariatodips.it)',
                'Garante Privacy (Reclamo per violazione GDPR)',
                'Google Support (Modulo rimozione dati personali)'
            ],
            checklist: [
                'Segnala post social',
                'Modulo rimozione Google',
                'Screenshot URL',
                'Contatta Polizia'
            ],
            sources: [
                {
                    title: 'Rimozione di informazioni personali da Google',
                    organization: 'Google Search Help',
                    url: 'https://support.google.com/websearch/answer/9673730',
                    type: 'platform',
                    usedFor: 'Procedura tecnica per la de-indicizzazione di dati sensibili.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Esercizio dei diritti (Cancellazione)',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/diritti',
                    type: 'official',
                    usedFor: 'Base legale per richiedere la rimozione dei propri dati ai sensi del GDPR.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'sim-swap-sos',
            slug: 'sim-swapping-cosa-fare-emergenza',
            title: 'SIM Swapping: Se il telefono "muore" all\'improvviso',
            category: 'first-aid',
            audience: ['adults', 'victims'],
            level: 'medio',
            estimatedMinutes: 6,
            summary: 'Se il tuo telefono non ha più rete e non riesci a fare chiamate, potresti essere vittima di un furto d\'identità tramite SIM.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Il tuo smartphone segna "Nessun Servizio" all\'improvviso, anche se sei in un posto dove di solito prende. Poco dopo, ricevi mail di accessi non autorizzati alla tua banca o ai tuoi social.',
            question: 'Come può qualcuno rubare il mio numero di telefono senza toccare la mia SIM?',
            whatIsHappening: 'Si chiama SIM Swapping. Un criminale convince il tuo operatore telefonico a trasferire il tuo numero su una nuova SIM in suo possesso. Una volta ottenuto il controllo del numero, può ricevere i codici 2FA via SMS per svuotare il tuo conto o rubare i tuoi account.',
            warningSigns: [
                'Perdita improvvisa di segnale di rete mobile (non Wi-Fi).',
                'Ricezione di notifiche di "Cambio password" o "Nuovo dispositivo collegato".',
                'L\'impossibilità di ricevere o effettuare chiamate/SMS.'
            ],
            doNow: [
                'Chiama subito il tuo operatore (da un altro telefono) e chiedi il blocco immediato della SIM.',
                'Accedi immediatamente alla tua App Bancaria e blocca l\'accesso o contatta il numero verde blocchi.',
                'Cambia la password della tua EMAIL principale (e disattiva temporaneamente il recupero via SMS se possibile).',
                'Recati presso un punto vendita del tuo operatore per richiedere una nuova SIM fisica.'
            ],
            dontDo: [
                'Non aspettare: se il telefono perde rete in modo inspiegabile, agisci come se fossi sotto attacco.',
                'Non ignorare gli avvisi di "SIM non valida" o "Nessun servizio".',
                'Non usare SMS come unico fattore di protezione per i tuoi conti se puoi usare App di autenticazione.'
            ],
            preserveEvidence: [
                'Segnati l\'orario esatto in cui il telefono ha smesso di funzionare.',
                'Conserva la vecchia SIM (potrebbe servire per verifiche tecniche).'
            ],
            askHelpWhen: [
                'Sempre. Il SIM Swapping è l\'inizio di una frode finanziaria.',
                'Se l\'operatore conferma che è stata richiesta una sostituzione della SIM che tu non hai mai fatto.'
            ],
            whoCanHelp: [
                'Operatore Telefonico (TIM, Vodafone, WINDTRE, Iliad, etc.)',
                'Polizia Postale',
                'Servizio Clienti della tua Banca'
            ],
            checklist: [
                'Chiama Operatore',
                'Blocca Banca',
                'Cambia Password Email',
                'Denuncia Polizia'
            ],
            sources: [
                {
                    title: 'SIM Swap: La truffa dello scambio della SIM',
                    organization: 'Commissariato di PS Online',
                    url: 'https://www.commissariatodips.it/notizie/articolo/sim-swap-la-truffa-dello-scambio-della-sim/index.html',
                    type: 'official',
                    usedFor: 'Spiegazione del fenomeno e consigli di prevenzione e reazione.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
