import { Module } from '@/types';

export const modulo_15_sicurezza_avanzata: Module = {
    id: 'modulo-15-sicurezza-avanzata',
    lastUpdated: '2026-05-14',
    title: 'Sicurezza Digitale Avanzata',
    description: 'Tecniche e strumenti avanzati per la protezione dei dati personali, della privacy online e dell\'identità digitale.',
    category: 'sicurezza',
    difficulty: 'avanzata',
    icon: 'ShieldCheck',
    themeColor: 'accent-purple',
    lessons: [
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
            lastReviewedAt: '2026-05-14',
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
                'Perdere l\'unico dispositivo su cui è salvata la passkey senza avere un backup',
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Sicurezza Account - Passkey',
                    organization: 'ACN - Agenzia per la Cybersicurezza Nazionale',
                    url: 'https://www.acn.gov.it/',
                    type: 'official',
                    usedFor: 'Raccomandazioni di sicurezza nazionale',
                    lastCheckedAt: '2026-05-14'
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'World Backup Day - Guida',
                    organization: 'ACN',
                    url: 'https://www.acn.gov.it/portale/notizie/world-backup-day-2024',
                    type: 'official',
                    usedFor: 'Best practices backup',
                    lastCheckedAt: '2026-05-14'
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Privacy e Sicurezza online',
                    organization: 'Commissariato PS Online',
                    url: 'https://www.commissariatodips.it/',
                    type: 'official',
                    usedFor: 'Consigli protezione account',
                    lastCheckedAt: '2026-05-14'
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Consigli per il corretto uso delle app',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/temi/app',
                    type: 'official',
                    usedFor: 'Educazione alla privacy',
                    lastCheckedAt: '2026-05-14'
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Cyber Security - Phishing',
                    organization: 'ACN',
                    url: 'https://www.acn.gov.it/portale/notizie/campagna-phishing',
                    type: 'official',
                    usedFor: 'Allerta nazionale',
                    lastCheckedAt: '2026-05-14'
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'DNS e sicurezza',
                    organization: 'ACN',
                    url: 'https://www.acn.gov.it/',
                    type: 'official',
                    usedFor: 'Raccomandazioni infrastruttura',
                    lastCheckedAt: '2026-05-14'
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Cyber Hygiene - Browser',
                    organization: 'ACN',
                    url: 'https://www.acn.gov.it/',
                    type: 'official',
                    usedFor: 'Consigli igiene digitale',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        }
    ]
};
