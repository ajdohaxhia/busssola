import { Module } from '../../types'

export const PRIVACY_TECNICA_MODULE: Module = {
    id: 'privacy-tecnica',
    number: 2,
    title: 'Privacy Tecnica Avanzata',
    subtitle: 'Dall\'anonimato digitale alla crittografia: padroneggia i tool da professionista.',
    description: 'Un percorso hardcore nella protezione della privacy online. VPN, Tor, encryption, browser hardening e tecniche per blindare ogni byte della tua vita digitale.',
    difficulty: 'intermedia',
    durationHours: 15,
    themeColor: 'accent-cyan',
    icon: 'Lock',
    lessons: [
        {
            id: '1-vpn-basics',
            title: 'VPN 101: Cosa sono e come funzionano davvero',
            minutes: 25,
            difficulty: 'base',
            learningGoals: [
                'Comprendere il funzionamento tecnico di una VPN.',
                'Identificare quando una VPN serve davvero e quando è marketing.',
                'Distinguere tra VPN gratuite e a pagamento.'
            ],
            contentMarkdown: `# VPN: Virtual Private Network\nUna VPN (Virtual Private Network) crea un tunnel crittografato tra il tuo dispositivo e un server remoto. Il tuo traffico internet passa attraverso questo tunnel, nascondendo il tuo IP reale.\n\n## Come Funziona (Tecnicamente)\n1. **Encryption**: I tuoi dati vengono crittografati sul tuo dispositivo.\n2. **Tunneling**: Vengono inviati al server VPN attraverso un tunnel sicuro.\n3. **IP Swapping**: Il server VPN usa il suo IP per accedere al web al posto tuo.\n4. **Risposta**: I dati di ritorno seguono il percorso inverso.\n\n## Quando Serve una VPN?\n- **WiFi Pubblico**: Proteggiti dagli sniffing attacks in aeroporti, bar, hotel.\n- **Censura**: Bypassare blocchi geografici o censura governativa.\n- **Sorveglianza ISP**: Impedire al tuo provider internet di vendere i tuoi dati di navigazione.\n\n## Quando NON Serve\n- **Anonimato Totale**: Una VPN non ti rende invisibile. Puoi comunque essere tracciato con cookies, fingerprinting, o login.\n- **Protezione dai Malware**: Una VPN non sostituisce un antivirus.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'Le VPN gratuite spesso vendono i tuoi dati o iniettano pubblicità. Se non paghi, il prodotto sei TU.'
                },
                {
                    type: 'tip',
                    content: 'Controlla sempre la "No-Log Policy" certificata da audit indipendenti (es. PwC).'
                }
            ],
            microExercise: {
                id: 'ex-1',
                title: 'Test di Leakage',
                instruction: 'Visita ipleak.net con e senza VPN attiva.',
                task: 'Verifica che il tuo vero IP non sia visibile quando la VPN è connessa.'
            },
            miniQuiz: [
                {
                    question: 'Una VPN ti rende completamente anonimo online?',
                    options: ['Sì, sempre', 'No, protegge solo il traffico di rete ma non le tue attività sui siti', 'Solo se è a pagamento', 'Solo su Tor'],
                    correctIndex: 1,
                    explanation: 'La VPN nasconde il tuo IP, ma non impedisce ai siti di tracciarti con cookies o account.'
                }
            ],
            reflectionPrompt: 'Secondo te, perché molte aziende offrono VPN gratuite?',
            resources: [
                {
                    title: 'PrivacyTools.io',
                    url: 'https://www.privacytools.io',
                    description: 'Lista di VPN raccomandate con audit pubblici.'
                }
            ]
        },
        {
            id: '2-choosing-vpn',
            title: 'Scegliere una VPN: Criteri tecnici e red flags',
            minutes: 20,
            difficulty: 'intermedia',
            learningGoals: [
                'Valutare una VPN in base a criteri tecnici.',
                'Riconoscere le false promesse di marketing.'
            ],
            contentMarkdown: `# Come Valutare una VPN\n\n## Criteri Essenziali\n1. **Giurisdizione**: Dove ha sede legale? Paesi come Svizzera, Islanda o Romania hanno leggi sulla privacy più forti.\n2. **Audit Indipendenti**: Verifica pubblicata da società di audit come PwC o Cure53.\n3. **Protocolli**: WireGuard e OpenVPN sono i più sicuri. Evita PPTP.\n4. **Kill Switch**: Se la VPN si disconnette, blocca tutto il traffico per evitare leak.\n5. **RAM-Only Servers**: Server che non scrivono nulla su disco, solo su RAM (si cancella tutto al riavvio).\n\n## Red Flags\n- **"Logs Minimi"**: Significa che tengono dei log. Punto.\n- **Sede in 5/9/14 Eyes**: Paesi con accordi di sorveglianza di massa (USA, UK, ecc.).\n- **Proprietà Sconosciuta**: Se non dichiarano chi li possiede, scappa.\n- **Troppo Economica**: Se costa 1€/mese, come si mantiene?`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Le migliori VPN costano tra 3 e 10 euro al mese. Non esistono miracoli a 99 centesimi.'
                }
            ],
            microExercise: {
                id: 'ex-2',
                title: 'Analisi Comparativa',
                instruction: 'Confronta 3 VPN popolari (Mullvad, ProtonVPN, NordVPN).',
                task: 'Quali hanno audit pubblici? Quali usano server RAM-only?'
            },
            miniQuiz: [
                {
                    question: 'Quale protocollo VPN è considerato il più sicuro e moderno?',
                    options: ['PPTP', 'WireGuard', 'L2TP', 'IKEv2'],
                    correctIndex: 1,
                    explanation: 'WireGuard è il protocollo più recente, veloce e sicuro.'
                }
            ],
            reflectionPrompt: 'Saresti disposto a pagare per proteggere la tua privacy?',
            resources: [
                {
                    title: 'ThatOnePrivacySite',
                    url: 'https://thatoneprivacysite.net',
                    description: 'Confronto dettagliato di decine di VPN.'
                }
            ]
        },
        {
            id: '3-tor-browser',
            title: 'Tor Browser: L\'anonimato a strati come una cipolla',
            minutes: 30,
            difficulty: 'avanzata',
            learningGoals: [
                'Capire come funziona la rete Tor.',
                'Usare Tor Browser in modo sicuro.',
                'Evitare errori che compromettono l\'anonimato.'
            ],
            contentMarkdown: `# Tor: The Onion Router\nTor è una rete di migliaia di server volontari che instradano il tuo traffico attraverso almeno 3 nodi casuali, crittografando ogni passaggio.\n\n## Come Funziona\n1. **Nodo di Entrata**: Conosce il tuo IP ma non la destinazione finale.\n2. **Nodo Intermedio**: Non conosce né l\'origine né la destinazione.\n3. **Nodo di Uscita**: Conosce la destinazione ma non il tuo IP.\n\nRisultato: Nessuno ha il quadro completo.\n\n## Usare Tor in Sicurezza\n- **Non ridimensionare la finestra**: Il fingerprinting usa la risoluzione dello schermo.\n- **Non installare plugin**: Possono bypassare Tor e rivelare il tuo IP.\n- **Non fare login con account reali**: Annulla l\'anonimato.\n- **Usa solo HTTPS**: Il nodo di uscita può vedere il traffico non crittografato.\n\n## Tor vs VPN\n- **Tor**: Anonimato forte, ma lento.\n- **VPN**: Veloce, ma devi fidarti del provider.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'Tor è legale, ma in alcuni paesi autoritari usarlo può attirare attenzione.'
                },
                {
                    type: 'tip',
                    content: 'Per massima sicurezza: VPN → Tor (il tuo ISP non sa che usi Tor).'
                }
            ],
            microExercise: {
                id: 'ex-3',
                title: 'Tor Setup',
                instruction: 'Scarica Tor Browser dal sito ufficiale.',
                task: 'Verifica che la connessione passi attraverso la rete Tor controllando il circuito.'
            },
            miniQuiz: [
                {
                    question: 'Quanti nodi attraversa il tuo traffico nella rete Tor?',
                    options: ['1', '2', '3', '5'],
                    correctIndex: 2,
                    explanation: 'Tor usa sempre 3 nodi: entrata, intermedio, uscita.'
                }
            ],
            reflectionPrompt: 'Ti fideresti di una rete gestita da volontari anonimi?',
            resources: [
                {
                    title: 'Tor Project',
                    url: 'https://www.torproject.org',
                    description: 'Sito ufficiale e guida completa.'
                }
            ]
        },
        {
            id: '4-browser-fingerprinting',
            title: 'Browser Fingerprinting: Come i siti ti riconoscono senza cookie',
            minutes: 25,
            difficulty: 'avanzata',
            learningGoals: [
                'Comprendere il browser fingerprinting.',
                'Testare la tua unicità digitale.',
                'Ridurre la superficie di tracking.'
            ],
            contentMarkdown: `# Browser Fingerprinting\nOgni browser ha una "impronta digitale" unica basata su: risoluzione schermo, font installati, timezone, lingua, GPU, estensioni, e molto altro.\n\n## Perché è Pericoloso?\n- **No Cookie Needed**: Funziona anche se blocchi i cookie.\n- **Cross-Site Tracking**: Ti seguono da un sito all\'altro.\n- **Quasi Impossibile da Evitare**: Richiederebbe uniformare tutti i parametri.\n\n## Difese Parziali\n- **Browser Privacy-Focused**: Brave, Firefox con configurazioni avanzate.\n- **Disabilitare JavaScript**: Riduce drasticamente il fingerprinting ma rompe molti siti.\n- **Estensioni**: uBlock Origin, Canvas Blocker, Decentraleyes.\n- **User Agent Spoofing**: Camuffa il tuo browser.\n\n## Il Paradosso\nSe personalizzi troppo il tuo browser per proteggerti, diventi più unico e quindi più tracciabile!`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Testa il tuo fingerprint su amiunique.org e coveryourtracks.eff.org.'
                }
            ],
            microExercise: {
                id: 'ex-4',
                title: 'Fingerprint Test',
                instruction: 'Visita amiunique.org.',
                task: 'Quanti altri utenti nel database hanno un fingerprint identico al tuo?'
            },
            miniQuiz: [
                {
                    question: 'Il fingerprinting funziona anche senza cookie?',
                    options: ['No, richiede cookie', 'Sì, usa caratteristiche del browser', 'Solo su Chrome', 'Solo in modalità incognito'],
                    correctIndex: 1,
                    explanation: 'Il fingerprinting si basa su parametri del browser, non sui cookie.'
                }
            ],
            reflectionPrompt: 'Ti senti a disagio sapendo che sei tracciabile anche senza cookie?',
            resources: [
                {
                    title: 'EFF - Cover Your Tracks',
                    url: 'https://coveryourtracks.eff.org',
                    description: 'Test di fingerprinting del browser.'
                }
            ]
        },
        {
            id: '5-dns-privacy',
            title: 'DNS: Il Grande Fratello che spia ogni tuo clic',
            minutes: 20,
            difficulty: 'intermedia',
            learningGoals: [
                'Capire come il DNS rivela la tua cronologia.',
                'Configurare DNS crittografati (DoH/DoT).'
            ],
            contentMarkdown: `# DNS: Domain Name System\nOgni volta che digiti un indirizzo (es. google.com), il tuo dispositivo chiede a un server DNS di tradurlo in un IP. **Il problema? Il tuo ISP vede ogni richiesta DNS e sa esattamente cosa stai visitando.**\n\n## DNS Standard vs Crittografato\n- **DNS Normale**: In chiaro, il tuo ISP vede tutto.\n- **DoH (DNS over HTTPS)**: Crittografato dentro il traffico HTTPS.\n- **DoT (DNS over TLS)**: Crittografato ma su porta dedicata (853).\n\n## Provider DNS Privacy-Friendly\n- **Cloudflare 1.1.1.1**: Veloce, promette di cancellare i log in 24h.\n- **Quad9 (9.9.9.9)**: Filtra siti malevoli, no log.\n- **NextDNS**: Personalizzabile, privacy-first.\n\n## Come Configurare DoH\n- **Firefox**: Settings → Network → Enable DNS over HTTPS.\n- **Chrome**: Settings → Security → Use secure DNS.\n- **iOS/Android**: Impostazioni WiFi o app dedicate.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Usa dnsleaktest.com per verificare che il tuo DNS sia privato.'
                }
            ],
            microExercise: {
                id: 'ex-5',
                title: 'DNS Leak Test',
                instruction: 'Visita dnsleaktest.com.',
                task: 'Quale provider DNS stai usando? È il tuo ISP o uno privato?'
            },
            miniQuiz: [
                {
                    question: 'Cosa significa DoH?',
                    options: ['Domain over HTTP', 'DNS over HTTPS', 'Data over Hosting', 'Dynamic over HTML'],
                    correctIndex: 1,
                    explanation: 'DoH significa DNS over HTTPS, crittografia delle richieste DNS.'
                }
            ],
            reflectionPrompt: 'Sapevi che il tuo ISP può vedere ogni sito che visiti anche in HTTPS?',
            resources: [
                {
                    title: 'Cloudflare DNS',
                    url: 'https://1.1.1.1',
                    description: 'Guida per configurare DNS crittografato.'
                }
            ]
        },
        {
            id: '6-https-everywhere',
            title: 'HTTPS: Il Lucchetto Verde Non Basta',
            minutes: 18,
            difficulty: 'base',
            learningGoals: ['Capire cosa protegge HTTPS e cosa no.', 'Identificare siti non sicuri.'],
            contentMarkdown: `# HTTPS vs HTTP\nHTTPS crittografa la comunicazione tra te e il sito. Ma attenzione: non garantisce che il sito sia legittimo!`,
            callouts: [{ type: 'warning', content: 'Anche i siti di phishing possono avere HTTPS.' }],
            microExercise: { id: 'ex-6', title: 'Check HTTPS', instruction: 'Verifica il certificato di un sito.', task: 'Chi ha emesso il certificato?' },
            miniQuiz: [{ question: 'HTTPS garantisce che il sito sia sicuro?', options: ['Sì', 'No, solo che la connessione è crittografata', 'Solo su Chrome', 'Solo con VPN'], correctIndex: 1, explanation: 'HTTPS crittografa, non autentica.' }],
            reflectionPrompt: 'Controlli sempre il lucchetto prima di inserire dati?',
            resources: [{ title: 'HTTPS Everywhere', url: 'https://www.eff.org/https-everywhere', description: 'Estensione EFF.' }]
        },
        {
            id: '7-password-manager',
            title: 'Password Manager: La Cassaforte Digitale',
            minutes: 25,
            difficulty: 'base',
            learningGoals: ['Usare un password manager.', 'Generare password sicure.'],
            contentMarkdown: `# Password Manager\nUn password manager genera e memorizza password uniche per ogni sito. Tu devi ricordare solo una master password.`,
            callouts: [{ type: 'tip', content: 'Bitwarden è open source e gratuito.' }],
            microExercise: { id: 'ex-7', title: 'Setup Manager', instruction: 'Installa Bitwarden.', task: 'Importa le password del browser.' },
            miniQuiz: [{ question: 'Quante password devi ricordare con un manager?', options: ['Tutte', 'Solo la master password', 'Nessuna', '10'], correctIndex: 1, explanation: 'Il manager ricorda tutto tranne la master.' }],
            reflectionPrompt: 'Quante password riusi attualmente?',
            resources: [{ title: 'Bitwarden', url: 'https://bitwarden.com', description: 'Password manager open source.' }]
        },
        {
            id: '8-2fa-authentication',
            title: '2FA: Due Fattori di Sicurezza',
            minutes: 20,
            difficulty: 'base',
            learningGoals: ['Attivare 2FA su tutti gli account.', 'Preferire app authenticator a SMS.'],
            contentMarkdown: `# Autenticazione a Due Fattori\n2FA aggiunge un secondo livello: qualcosa che sai (password) + qualcosa che hai (telefono).`,
            callouts: [{ type: 'warning', content: 'SMS 2FA è vulnerabile al SIM swapping. Usa app come Aegis.' }],
            microExercise: { id: 'ex-8', title: 'Attiva 2FA', instruction: 'Attiva 2FA su Google.', task: 'Usa un app authenticator, non SMS.' },
            miniQuiz: [{ question: 'Perché SMS 2FA è meno sicuro?', options: ['Costa di più', 'Può essere intercettato con SIM swap', 'Non funziona offline', 'È più lento'], correctIndex: 1, explanation: 'I criminali possono rubare il tuo numero.' }],
            reflectionPrompt: 'Su quanti account hai attivato 2FA?',
            resources: [{ title: 'Aegis Authenticator', url: 'https://getaegis.app', description: 'App 2FA open source per Android.' }]
        },
        {
            id: '9-email-privacy',
            title: 'Email: Il Tracciamento Invisibile',
            minutes: 22,
            difficulty: 'intermedia',
            learningGoals: ['Bloccare i tracker nelle email.', 'Usare email alias.'],
            contentMarkdown: `# Tracker nelle Email\nLe email contengono pixel invisibili che tracciano quando apri, da dove, e su che dispositivo.`,
            callouts: [{ type: 'tip', content: 'SimpleLogin crea alias email illimitati.' }],
            microExercise: { id: 'ex-9', title: 'Email Alias', instruction: 'Crea un alias con SimpleLogin.', task: 'Usalo per una newsletter.' },
            miniQuiz: [{ question: 'I tracking pixel nelle email possono rivelare:', options: ['Solo se hai aperto', 'Quando, dove, che dispositivo usi', 'Niente se blocchi le immagini', 'Solo il tuo nome'], correctIndex: 1, explanation: 'I pixel raccolgono molte informazioni.' }],
            reflectionPrompt: 'Disabiliti il caricamento automatico delle immagini nelle email?',
            resources: [{ title: 'SimpleLogin', url: 'https://simplelogin.io', description: 'Email aliasing.' }]
        },
        {
            id: '10-metadata',
            title: 'Metadati: I Dati sui Tuoi Dati',
            minutes: 20,
            difficulty: 'intermedia',
            learningGoals: ['Capire cosa sono i metadati.', 'Rimuovere metadati da foto e documenti.'],
            contentMarkdown: `# Metadati\nOgni foto contiene EXIF: GPS, ora, modello telefono. Ogni documento Word: autore, revisioni, date.`,
            callouts: [{ type: 'warning', content: 'Una foto può rivelare dove abiti!' }],
            microExercise: { id: 'ex-10', title: 'EXIF Check', instruction: 'Usa exifdata.com su una tua foto.', task: 'Quali metadati sono visibili?' },
            miniQuiz: [{ question: 'Cosa possono contenere i metadati EXIF di una foto?', options: ['Solo la data', 'Posizione GPS esatta', 'Solo il nome del file', 'Niente di sensibile'], correctIndex: 1, explanation: 'EXIF può contenere coordinate GPS precise.' }],
            reflectionPrompt: 'Rimuovi i metadati prima di postare foto online?',
            resources: [{ title: 'ExifTool', url: 'https://exiftool.org', description: 'Strumento per gestire metadati.' }]
        },
        {
            id: '11-encryption-basics',
            title: 'Crittografia: Chiavi Pubbliche e Private',
            minutes: 28,
            difficulty: 'avanzata',
            learningGoals: ['Capire la crittografia asimmetrica.', 'Generare una coppia di chiavi.'],
            contentMarkdown: `# Crittografia Asimmetrica\nDue chiavi: pubblica (per cifrare) e privata (per decifrare). Nessuno può leggere senza la chiave privata.`,
            callouts: [{ type: 'tip', content: 'La chiave pubblica è come l\'indirizzo, la privata come la chiave di casa.' }],
            microExercise: { id: 'ex-11', title: 'GPG Setup', instruction: 'Genera una coppia di chiavi GPG.', task: 'Esporta la chiave pubblica.' },
            miniQuiz: [{ question: 'Quale chiave condividi con altri?', options: ['Privata', 'Pubblica', 'Entrambe', 'Nessuna'], correctIndex: 1, explanation: 'La chiave pubblica serve agli altri per cifrare i messaggi per te.' }],
            reflectionPrompt: 'Hai mai usato la crittografia per proteggere un file?',
            resources: [{ title: 'GnuPG', url: 'https://gnupg.org', description: 'Tool di crittografia open source.' }]
        },
        {
            id: '12-signal-app',
            title: 'Signal: La Messaggistica Ultra-Sicura',
            minutes: 18,
            difficulty: 'base',
            learningGoals: ['Configurare Signal per massima privacy.', 'Capire la crittografia end-to-end.'],
            contentMarkdown: `# Signal\nCreato da Moxie Marlinspike, Signal usa il protocollo Signal per crittografia E2E. Neanche Signal può leggere i tuoi messaggi.`,
            callouts: [{ type: 'tip', content: 'Attiva la scomparsa automatica dei messaggi.' }],
            microExercise: { id: 'ex-12', title: 'Signal Setup', instruction: 'Installa Signal.', task: 'Attiva PIN e blocco schermo.' },
            miniQuiz: [{ question: 'Chi può leggere i messaggi Signal?', options: ['Signal', 'Il governo', 'Solo mittente e destinatario', 'Tutti'], correctIndex: 2, explanation: 'La crittografia E2E garantisce che solo voi due possiate leggere.' }],
            reflectionPrompt: 'Usi ancora WhatsApp per conversazioni sensibili?',
            resources: [{ title: 'Signal', url: 'https://signal.org', description: 'App di messaggistica sicura.' }]
        },
        {
            id: '13-cloud-privacy',
            title: 'Cloud Storage: Zero-Knowledge è la Chiave',
            minutes: 22,
            difficulty: 'intermedia',
            learningGoals: ['Differenza tra cloud normale e zero-knowledge.', 'Scegliere provider sicuri.'],
            contentMarkdown: `# Cloud Zero-Knowledge\nCon provider come Proton Drive o Tresorit, i tuoi file sono crittografati prima di lasciare il tuo dispositivo. Il provider non può accedervi.`,
            callouts: [{ type: 'warning', content: 'Google Drive e Dropbox possono accedere ai tuoi file.' }],
            microExercise: { id: 'ex-13', title: 'Cloud Audit', instruction: 'Controlla cosa hai su Google Drive.', task: 'Ci sono documenti sensibili non crittografati?' },
            miniQuiz: [{ question: 'Cosa significa zero-knowledge?', options: ['Il provider non sa nulla', 'Nessun log', 'Crittografia debole', 'Server in Svizzera'], correctIndex: 0, explanation: 'Il provider non può decifrare i tuoi dati.' }],
            reflectionPrompt: 'Ti fidi di Google con i tuoi documenti più personali?',
            resources: [{ title: 'Proton Drive', url: 'https://proton.me/drive', description: 'Storage crittografato.' }]
        },
        {
            id: '14-browser-hardening',
            title: 'Firefox Hardening: Configurazioni Avanzate',
            minutes: 30,
            difficulty: 'avanzata',
            learningGoals: ['Configurare about:config per privacy.', 'Installare estensioni essenziali.'],
            contentMarkdown: `# Firefox Hardening\nFirefox è l'unico browser mainstream che permette personalizzazioni profonde della privacy.`,
            callouts: [{ type: 'tip', content: 'Usa arkenfox user.js come base di partenza.' }],
            microExercise: { id: 'ex-14', title: 'Hardening', instruction: 'Apri about:config.', task: 'Disabilita WebRTC: media.peerconnection.enabled = false' },
            miniQuiz: [{ question: 'Quale browser è più personalizzabile per la privacy?', options: ['Chrome', 'Edge', 'Firefox', 'Safari'], correctIndex: 2, explanation: 'Firefox permette modifiche profonde tramite about:config.' }],
            reflectionPrompt: 'Hai mai modificato le impostazioni avanzate del tuo browser?',
            resources: [{ title: 'Arkenfox', url: 'https://github.com/arkenfox/user.js', description: 'Configurazione privacy Firefox.' }]
        },
        {
            id: '15-tails-os',
            title: 'Tails OS: Il Sistema Operativo Amnesico',
            minutes: 25,
            difficulty: 'avanzata',
            learningGoals: ['Capire cosa fa Tails.', 'Creare una chiavetta USB avviabile.'],
            contentMarkdown: `# Tails\nTails è un sistema operativo che gira da USB, instrada tutto attraverso Tor, e non lascia tracce sul computer. Usato da giornalisti e attivisti.`,
            callouts: [{ type: 'warning', content: 'Tails non protegge da keylogger hardware.' }],
            microExercise: { id: 'ex-15', title: 'Boot Test', instruction: 'Scarica Tails dal sito ufficiale.', task: 'Verifica la firma GPG del download.' },
            miniQuiz: [{ question: 'Cosa succede quando spegni un computer con Tails?', options: ['Tutto si salva', 'Tutto viene cancellato dalla RAM', 'Niente', 'Si aggiorna'], correctIndex: 1, explanation: 'Tails è amnesico: non salva nulla.' }],
            reflectionPrompt: 'In quali situazioni useresti Tails?',
            resources: [{ title: 'Tails Project', url: 'https://tails.boum.org', description: 'Sistema operativo privacy.' }]
        },
        {
            id: '16-anonymous-payments',
            title: 'Pagamenti Anonimi: Crypto e Card Prepagate',
            minutes: 22,
            difficulty: 'intermedia',
            learningGoals: ['Capire le basi delle criptovalute per privacy.', 'Usare carte virtuali usa e getta.'],
            contentMarkdown: `# Pagamenti Anonimi\nLe carte di credito tracciano ogni acquisto. Alternative: Monero (crypto privacy-first), carte virtuali come Privacy.com.`,
            callouts: [{ type: 'warning', content: 'Bitcoin NON è anonimo, è pseudonimo. Ogni transazione è pubblica.' }],
            microExercise: { id: 'ex-16', title: 'Card Virtuale', instruction: 'Crea un account su Revolut.', task: 'Genera una carta usa e getta.' },
            miniQuiz: [{ question: 'Bitcoin è anonimo?', options: ['Sì, completamente', 'No, è pseudonimo e tracciabile', 'Solo su Tor', 'Dipende dal wallet'], correctIndex: 1, explanation: 'Ogni transazione Bitcoin è registrata su blockchain pubblica.' }],
            reflectionPrompt: 'Useresti Monero per acquisti legittimi?',
            resources: [{ title: 'GetMonero', url: 'https://getmonero.org', description: 'Crypto privacy-first.' }]
        },
        {
            id: '17-physical-security',
            title: 'Privacy Fisica: Webcam, Microfoni e USB',
            minutes: 20,
            difficulty: 'base',
            learningGoals: ['Protezione fisica dei dispositivi.', 'Rischi delle porte USB.'],
            contentMarkdown: `# Privacy Fisica\nLa privacy non è solo digitale. Copri la webcam, disabilita il microfono quando non serve, non inserire USB sconosciute.`,
            callouts: [{ type: 'tip', content: 'Una cover per webcam costa 2 euro e blocca qualsiasi spione.' }],
            microExercise: { id: 'ex-17', title: 'Webcam Check', instruction: 'Copri la webcam del tuo laptop.', task: 'Usa un adesivo opaco o una cover dedicata.' },
            miniQuiz: [{ question: 'Perché non dovresti inserire USB trovate in giro?', options: ['Si rovinano', 'Possono contenere malware autoeseguibile', 'Sono lente', 'Nessun rischio'], correctIndex: 1, explanation: 'Le USB malevole possono infettare il PC al solo inserimento.' }],
            reflectionPrompt: 'Hai mai trovato una USB e pensato di vedere cosa contenesse?',
            resources: [{ title: 'USB Rubber Ducky', url: 'https://shop.hak5.org', description: 'Esempio di USB malevola.' }]
        },
        {
            id: '18-search-engines',
            title: 'Motori di Ricerca Privacy: Oltre Google',
            minutes: 15,
            difficulty: 'base',
            learningGoals: ['Usare motori di ricerca che non tracciano.', 'Capire le differenze.'],
            contentMarkdown: `# Alternative a Google\n- **DuckDuckGo**: Non traccia, ma usa risultati Bing.\n- **Brave Search**: Indice indipendente.\n- **Startpage**: Risultati Google senza tracking.`,
            callouts: [{ type: 'tip', content: 'Imposta DuckDuckGo come motore predefinito.' }],
            microExercise: { id: 'ex-18', title: 'Cambio Default', instruction: 'Imposta Brave Search come motore predefinito.', task: 'Fai 10 ricerche e valuta la qualità.' },
            miniQuiz: [{ question: 'Quale motore ha un indice completamente indipendente?', options: ['DuckDuckGo', 'Startpage', 'Brave Search', 'Yahoo'], correctIndex: 2, explanation: 'Brave Search ha costruito il proprio indice web.' }],
            reflectionPrompt: 'Ti mancherebbe Google se smettessi di usarlo?',
            resources: [{ title: 'Brave Search', url: 'https://search.brave.com', description: 'Motore indipendente.' }]
        },
        {
            id: '19-mobile-privacy',
            title: 'Android vs iOS: Chi Protegge la Privacy?',
            minutes: 25,
            difficulty: 'intermedia',
            learningGoals: ['Confrontare i modelli di privacy.', 'Configurare entrambi per massima protezione.'],
            contentMarkdown: `# Mobile Privacy\niOS: Walled garden, App Tracking Transparency. Android: Più aperto ma più invasivo con Google. Soluzione: GrapheneOS su Pixel.`,
            callouts: [{ type: 'tip', content: 'Su iOS attiva "Chiedi alle app di non tracciarmi".' }],
            microExercise: { id: 'ex-19', title: 'Privacy Check', instruction: 'Controlla i permessi delle tue app.', task: 'Quante app hanno accesso alla posizione?' },
            miniQuiz: [{ question: 'Quale sistema mobile ha App Tracking Transparency?', options: ['Android', 'iOS', 'Windows Phone', 'Nessuno'], correctIndex: 1, explanation: 'Apple ha introdotto ATT in iOS 14.5.' }],
            reflectionPrompt: 'Preferiresti più controllo (Android) o più semplicità (iOS)?',
            resources: [{ title: 'GrapheneOS', url: 'https://grapheneos.org', description: 'Android privacy-focused.' }]
        },
        {
            id: '20-smartphone-hardening',
            title: 'Smartphone Hardening: Configurazioni Essenziali',
            minutes: 22,
            difficulty: 'intermedia',
            learningGoals: ['Disattivare funzioni invasive.', 'Limitare permessi app.'],
            contentMarkdown: `# Hardening Smartphone\n- Disattiva assistenti vocali (Siri, Google Assistant).\n- Limita la condivisione posizione.\n- Usa DNS privato anche su mobile.\n- Rivedi permessi app mensilmente.`,
            callouts: [{ type: 'warning', content: 'Gli assistenti vocali ascoltano sempre, anche quando pensi di no.' }],
            microExercise: { id: 'ex-20', title: 'Assistant Off', instruction: 'Disabilita completamente Google Assistant o Siri.', task: 'Noti differenze nell\'uso quotidiano?' },
            miniQuiz: [{ question: 'Perché disabilitare gli assistenti vocali?', options: ['Consumano batteria', 'Ascoltano costantemente per attivazione', 'Sono inutili', 'Occupano spazio'], correctIndex: 1, explanation: 'Per funzionare, devono ascoltare sempre il trigger word.' }],
            reflectionPrompt: 'Quanto ti affidi agli assistenti vocali?',
            resources: [{ title: 'Privacy Guides Mobile', url: 'https://privacyguides.org/android', description: 'Guida Android.' }]
        },
        {
            id: '21-iot-privacy',
            title: 'Smart Home e IoT: Rischi Nascosti',
            minutes: 22,
            difficulty: 'intermedia',
            learningGoals: ['Identificare i rischi dei dispositivi connessi.', 'Isolare dispositivi IoT sulla rete.'],
            contentMarkdown: `# Internet of Things\nOgni dispositivo smart (Alexa, telecamere, termostati) è un potenziale punto di ingresso per hacker e spie aziendali.`,
            callouts: [{ type: 'warning', content: 'Le telecamere smart economiche cinesi spesso inviano dati non crittografati.' }],
            microExercise: { id: 'ex-21', title: 'IoT Audit', instruction: 'Conta i dispositivi smart in casa.', task: 'Quanti sono davvero necessari?' },
            miniQuiz: [{ question: 'Cosa rende vulnerabili i dispositivi IoT?', options: ['Sono costosi', 'Firmware raramente aggiornato', 'Sono wireless', 'Consumano troppo'], correctIndex: 1, explanation: 'I produttori IoT spesso abbandonano il supporto software rapidamente.' }],
            reflectionPrompt: 'Rinunceresti alla comodità smart per più privacy?',
            resources: [{ title: 'IoT Security Foundation', url: 'https://iotsecurityfoundation.org', description: 'Best practices IoT.' }]
        },
        {
            id: '22-social-settings',
            title: 'Configurazioni Privacy Social: Guida Pratica',
            minutes: 28,
            difficulty: 'base',
            learningGoals: ['Configurare Instagram, TikTok, Facebook per privacy.', 'Limitare la visibilità dei contenuti.'],
            contentMarkdown: `# Privacy sui Social\nOgni social ha impostazioni nascoste che limitano chi può vedere cosa. Devi trovarle e attivarle manualmente.\n- Instagram: Account privato, limita interazioni, nascondi stato attività.\n- TikTok: Privacy account, limita chi può commentare.\n- Facebook: Controlla chi vede i post passati.`,
            callouts: [{ type: 'tip', content: 'Fai un "Privacy Checkup" mensile su ogni social.' }],
            microExercise: { id: 'ex-22', title: 'Social Audit', instruction: 'Vai nelle impostazioni privacy di Instagram.', task: 'Nascondi il tuo stato attività.' },
            miniQuiz: [{ question: 'Ogni quanto dovresti rivedere le impostazioni privacy social?', options: ['Mai', 'Una volta al mese', 'Solo quando c\'è uno scandal', 'Ogni anno'], correctIndex: 1, explanation: 'I social cambiano spesso le opzioni, controlla regolarmente.' }],
            reflectionPrompt: 'Sai esattamente chi vede i tuoi contenuti?',
            resources: [{ title: 'Privacy Checkup Meta', url: 'https://www.facebook.com/privacy/checkup', description: 'Tool ufficiale Facebook.' }]
        },
        {
            id: '23-secure-file-sharing',
            title: 'Condivisione File Sicura: Onionshare e Magic Wormhole',
            minutes: 20,
            difficulty: 'avanzata',
            learningGoals: ['Inviare file senza intermediari.', 'Usare strumenti crittografati.'],
            contentMarkdown: `# File Sharing Sicuro\n- **Onionshare**: Condivide file attraverso Tor. Il destinatario riceve un link .onion.\n- **Magic Wormhole**: Trasferimento diretto E2E con una parola segreta.\n- **Tresorit Send**: Alternative commerciale con E2E.`,
            callouts: [{ type: 'tip', content: 'Onionshare è perfetto per inviare documenti sensibili a giornalisti.' }],
            microExercise: { id: 'ex-23', title: 'Wormhole Test', instruction: 'Installa magic-wormhole.', task: 'Invia un file a un amico con una password di 2 parole.' },
            miniQuiz: [{ question: 'Quale tool usa la rete Tor per la condivisione?', options: ['Dropbox', 'Google Drive', 'Onionshare', 'WeTransfer'], correctIndex: 2, explanation: 'Onionshare crea un server temporaneo .onion.' }],
            reflectionPrompt: 'Come condividi attualmente i file sensibili?',
            resources: [{ title: 'Onionshare', url: 'https://onionshare.org', description: 'Condivisione anonima.' }]
        },
        {
            id: '24-location-tracking',
            title: 'Tracciamento Posizione: Chi sa dove sei ora?',
            minutes: 22,
            difficulty: 'intermedia',
            learningGoals: ['Capire come il telefono traccia la posizione.', 'Limitare il tracking GPS.'],
            contentMarkdown: `# Location Tracking\nIl tuo telefono comunica costantemente la tua posizione tramite: GPS, Wi-Fi, celle telefoniche, Bluetooth. Google e Apple tengono una cronologia completa.`,
            callouts: [{ type: 'warning', content: 'Google Maps tiene anni di cronologia delle tue posizioni. Cancellala!' }],
            microExercise: { id: 'ex-24', title: 'Location History', instruction: 'Vai su myactivity.google.com.', task: 'Quanti dati di posizione ha Google su di te?' },
            miniQuiz: [{ question: 'Anche senza GPS, il telefono può determinare la posizione tramite:', options: ['Microfono', 'Wi-Fi e celle telefoniche', 'Accelerometro solo', 'Niente'], correctIndex: 1, explanation: 'Il triangolamento WiFi e celle è molto preciso.' }],
            reflectionPrompt: 'Ti spaventa vedere la mappa di tutti i tuoi spostamenti?',
            resources: [{ title: 'Google Timeline', url: 'https://timeline.google.com', description: 'Cronologia posizioni Google.' }]
        },
        {
            id: '25-wifi-security',
            title: 'WiFi Pubblico: I Pericoli delle Reti Aperte',
            minutes: 18,
            difficulty: 'base',
            learningGoals: ['Identificare i rischi del WiFi pubblico.', 'Proteggersi con VPN e HTTPS.'],
            contentMarkdown: `# WiFi Pubblico\nLe reti WiFi aperte sono terreno di caccia per gli attaccanti. Man-in-the-Middle attacks, Evil Twin, sniffing sono all\'ordine del giorno.`,
            callouts: [{ type: 'tip', content: 'Usa sempre una VPN su WiFi pubblico, senza eccezioni.' }],
            microExercise: { id: 'ex-25', title: 'VPN Always On', instruction: 'Configura la VPN per connettersi automaticamente su WiFi non trusted.', task: 'Hai attivato la connessione automatica?' },
            miniQuiz: [{ question: 'Cos\'è un Evil Twin?', options: ['Un virus', 'Un WiFi fake che imita uno legittimo', 'Un tipo di malware', 'Un bot'], correctIndex: 1, explanation: 'L\'attaccante crea un WiFi con lo stesso nome del legittimo.' }],
            reflectionPrompt: 'Ti connetti spesso a WiFi pubblici senza protezione?',
            resources: [{ title: 'Wireshark', url: 'https://wireshark.org', description: 'Analizzatore di traffico di rete.' }]
        },
        {
            id: '26-data-brokers',
            title: 'Data Broker: Chi Vende i Tuoi Dati?',
            minutes: 22,
            difficulty: 'intermedia',
            learningGoals: ['Capire il mercato dei dati personali.', 'Rimuovere i propri dati dai broker.'],
            contentMarkdown: `# Data Broker\nAcurian, Experian, Oracle: aziende che raccolgono e vendono i tuoi dati senza che tu lo sappia. Comprano da app, siti, registri pubblici.`,
            callouts: [{ type: 'warning', content: 'Ogni app gratuita probabilmente vende i tuoi dati a broker.' }],
            microExercise: { id: 'ex-26', title: 'Opt-Out', instruction: 'Cerca il tuo nome su haveibeensold.app.', task: 'Trovi risultati?' },
            miniQuiz: [{ question: 'Cosa fanno i data broker?', options: ['Proteggono i dati', 'Raccolgono e vendono dati personali', 'Criptano le password', 'Bloccano gli hacker'], correctIndex: 1, explanation: 'I data broker monetizzano le informazioni personali.' }],
            reflectionPrompt: 'Ti infastidisce che qualcuno guadagni vendendo i tuoi dati?',
            resources: [{ title: 'DeleteMe', url: 'https://joindeleteme.com', description: 'Servizio di rimozione dati.' }]
        },
        {
            id: '27-dark-patterns',
            title: 'Dark Patterns: I Trucchi per Farti Cedere i Dati',
            minutes: 20,
            difficulty: 'base',
            learningGoals: ['Riconoscere i dark patterns.', 'Resistere alle manipolazioni UI.'],
            contentMarkdown: `# Dark Patterns\nDesign ingannevoli che ti spingono a condividere più dati di quanto vorresti. "Accetta tutto" grande, "Personalizza" minuscolo.`,
            callouts: [{ type: 'tip', content: 'Cerca sempre il link piccolo "Rifiuta tutti" o "Impostazioni".' }],
            microExercise: { id: 'ex-27', title: 'Pattern Hunting', instruction: 'Visita 5 siti e cerca i cookie banner.', task: 'Quanti hanno il tasto "Rifiuta" visibile quanto "Accetta"?' },
            miniQuiz: [{ question: 'Cosa sono i dark patterns?', options: ['Temi scuri del browser', 'Design ingannevoli per manipolare l\'utente', 'Virus', 'Estensioni mal fatte'], correctIndex: 1, explanation: 'Sono trucchi visivi per farti cliccare dove vogliono loro.' }],
            reflectionPrompt: 'Quante volte hai cliccato "Accetta tutti" solo per fare in fretta?',
            resources: [{ title: 'Dark Patterns', url: 'https://darkpatterns.org', description: 'Hall of shame.' }]
        },
        {
            id: '28-privacy-policies',
            title: 'Leggere le Privacy Policy (Senza Impazzire)',
            minutes: 15,
            difficulty: 'base',
            learningGoals: ['Individuare le clausole critiche.', 'Usare tool di analisi automatica.'],
            contentMarkdown: `# Privacy Policy\nNessuno le legge, ma contengono tutto. Tool come ToS;DR riassumono le policy più importanti in pochi punti.`,
            callouts: [{ type: 'tip', content: 'Cerca "third party", "share", "sell" nella policy.' }],
            microExercise: { id: 'ex-28', title: 'Policy Check', instruction: 'Vai su tosdr.org.', task: 'Che voto ha il tuo social preferito?' },
            miniQuiz: [{ question: 'Cosa fa ToS;DR?', options: ['Blocca i cookie', 'Riassume le policy in voti semplici', 'Cripta le email', 'Nasconde l\'IP'], correctIndex: 1, explanation: 'ToS;DR assegna voti da A (buono) a E (pessimo).' }],
            reflectionPrompt: 'Saresti disposto a smettere di usare un servizio con una policy pessima?',
            resources: [{ title: 'ToS;DR', url: 'https://tosdr.org', description: 'Terms of Service; Didn\'t Read.' }]
        },
        {
            id: '29-digital-identity',
            title: 'Identità Digitale: Separare Vita Reale e Online',
            minutes: 25,
            difficulty: 'avanzata',
            learningGoals: ['Creare identità digitali separate.', 'Gestire più profili privacy.'],
            contentMarkdown: `# Compartimentazione\nSepara la tua identità: email diverse per scopi diversi, nickname non collegabili, browser profiles separati.`,
            callouts: [{ type: 'tip', content: 'Usa un email per ogni categoria: lavoro, shopping, social, personale.' }],
            microExercise: { id: 'ex-29', title: 'Email Audit', instruction: 'Conta quante email hai.', task: 'Sono davvero separate o sono tutte collegate tra loro?' },
            miniQuiz: [{ question: 'Perché separare le identità digitali?', options: ['Per confondere gli amici', 'Per limitare i danni in caso di breach', 'Per avere più follower', 'Per nessun motivo'], correctIndex: 1, explanation: 'Se un\'identità è compromessa, le altre restano protette.' }],
            reflectionPrompt: 'Il tuo nickname è collegabile al tuo nome reale?',
            resources: [{ title: 'ProtonMail', url: 'https://proton.me', description: 'Email crittografata.' }]
        },
        {
            id: '30-privacy-final',
            title: 'Certificazione: Maestro della Privacy Tecnica',
            minutes: 45,
            difficulty: 'avanzata',
            learningGoals: ['Dimostrare padronanza completa.', 'Costruire un piano di privacy personale.'],
            contentMarkdown: `# Esame Finale\nHai completato 30 lezioni sulla privacy tecnica. Ora metti tutto insieme: crea il tuo "Privacy Stack" personale.\n\n**Il tuo stack dovrebbe includere:**\n- VPN di fiducia\n- Password manager\n- 2FA su tutti gli account\n- Browser hardened\n- Email privacy-first\n- DNS sicuro`,
            callouts: [{ type: 'tip', content: 'Documenta il tuo stack e rivedilo ogni 6 mesi.' }],
            microExercise: { id: 'ex-30', title: 'Privacy Stack', instruction: 'Scrivi il tuo Privacy Stack personale.', task: 'Quali tool usi per VPN, email, password, browser, e 2FA?' },
            miniQuiz: [{ question: 'Qual è lo scopo di un Privacy Stack?', options: ['Mostrare agli altri', 'Avere un sistema coerente di protezione', 'Risparmiare soldi', 'Nessuno'], correctIndex: 1, explanation: 'Un piano integrato è più efficace di tool casuali.' }],
            reflectionPrompt: 'Cosa hai imparato che non sapevi prima di iniziare questo modulo?',
            resources: [{ title: 'Privacy Guides', url: 'https://privacyguides.org', description: 'La risorsa definitiva.' }]
        }
    ],
    tips: [
        'Cambia le password ogni 6 mesi, anche se non ci sono state violazioni.',
        'Non usare mai lo stesso DNS del tuo provider internet.',
        'Tor + VPN = anonimato stratificato.'
    ],
    resources: [
        {
            title: 'Privacy Guides',
            url: 'https://www.privacyguides.org',
            description: 'La Bibbia della privacy digitale.'
        }
    ]
}
