import { Module } from '@/types';

export const modulo_03_truffe_phishing: Module = {
    id: 'modulo-03-truffe-phishing',
    lastUpdated: '2026-11-27',
    title: 'Truffe e Phishing',
    description: 'Come riconoscere i tentativi di truffa online, proteggere i propri dati e reagire in caso di errore.',
    category: 'truffe',
    difficulty: 'base',
    icon: 'AlertTriangle',
    themeColor: 'accent-orange',
    lessons: [
        {
            id: 'phishing-basics',
            slug: 'riconoscere-phishing-basi',
            title: 'Come riconoscere il Phishing',
            mainEntity: 'Polizia Postale',
            category: 'truffe',
            audience: ['adults', 'minors', 'prevention'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Il phishing è la tecnica più usata per rubare password. Impara i segnali per non abboccare.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: ['Ricezione di email o SMS'],
            whatToPrepare: ['Nessun documento'],
            estimatedCosts: 'Gratis',
            timeToComplete: '2 minuti per la verifica',
            steps: [
                'Controlla il mittente: l\'indirizzo email deve essere quello ufficiale (es: @inps.it, non @inps-assistenza.com)',
                'Diffida dai messaggi che creano urgenza o paura (es: "Conto bloccato!", "Paga ora o perdi tutto")',
                'Guarda i link senza cliccare: passa il mouse sopra per vedere l\'indirizzo reale',
                'Cerca errori di grammatica o loghi sgranati',
                'Non inserire mai password partendo da un link ricevuto: vai sempre sul sito digitandolo tu'
            ],
            officialLinksV2: [
                {
                    sourceId: 'commissariatoPs',
                    useWhen: 'Per leggere gli alert aggiornati sulle nuove truffe in circolazione',
                    beforeOpening: []
                }
            ],
            commonErrors: [
                'Fidarsi perché il messaggio ha i loghi giusti',
                'Pensare che un SMS sia più sicuro di una email'
            ],
            dontDo: [
                'Non cliccare mai sui link per "sbloccare" un account',
                'Non scaricare allegati da mittenti sconosciuti'
            ],
            ifYouHaveProblems: [
                'Se hai cliccato, cambia subito la password del servizio e attiva la 2FA'
            ],
            checklist: [
                'Ho controllato l\'indirizzo del mittente',
                'Ho verificato l\'URL del link',
                'Non ho inserito dati sensibili'
            ],
            sources: [
                {
                    title: 'Polizia Postale — Allerte e notizie sulle truffe online',
                    organization: 'Polizia Postale',
                    url: 'https://www.commissariatodips.it/notizie/index.html',
                    type: 'official',
                    usedFor: 'Definizione e consigli',
                    lastCheckedAt: '2026-11-25'
                }
            ]
        },
        {
            id: 'phishing-pagopa',
            slug: 'phishing-pagopa-riconoscere-avvisi-falsi',
            title: 'Come capire se un avviso pagoPA è vero',
            mainEntity: 'pagoPA S.p.A.',
            category: 'truffe',
            audience: ['adults', 'prevention'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Sempre più truffatori inviano finti avvisi di pagamento pagoPA. Ecco come distinguerli da quelli reali.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: ['Ricezione di un avviso di pagamento'],
            whatToPrepare: ['L\'avviso cartaceo o digitale ricevuto'],
            estimatedCosts: 'Gratis',
            timeToComplete: '2 minuti',
            steps: [
                'Controlla la presenza del logo pagoPA e dell\'ente creditore (Comune, INPS, ecc.)',
                'Verifica il codice IUV (18 cifre): deve essere unico',
                'Usa l\'app IO: se l\'avviso è reale, lo troverai spesso già caricato nei tuoi messaggi',
                'Prova a inquadrare il QR code con l\'app IO o della banca: se il sistema non lo riconosce, è falso',
                'Non pagare mai tramite link ricevuti via SMS che portano a siti di carte di credito'
            ],
            officialLinksV2: [
                {
                    sourceId: 'pagopaPhishing',
                    useWhen: 'Per verificare se la comunicazione ricevuta segue gli standard di sicurezza',
                    beforeOpening: ['Tieni l\'avviso sottomano']
                }
            ],
            commonErrors: [
                'Pagare subito per paura di sanzioni senza verificare l\'ente',
                'Inserire i dati della carta su siti che non sono quelli della banca o di pagoPA'
            ],
            dontDo: [
                'Non fidarti di avvisi che chiedono pagamenti in criptovalute o ricariche Postepay'
            ],
            ifYouHaveProblems: [
                'In caso di dubbio, contatta l\'ufficio relazioni con il pubblico dell\'ente creditore'
            ],
            checklist: [
                'Logo ente presente',
                'Codice IUV di 18 cifre presente',
                'QR code verificato con app ufficiale'
            ],
            sources: [
                {
                    title: 'Sicurezza pagoPA',
                    organization: 'pagoPA S.p.A.',
                    url: 'https://assistenza.pagopa.gov.it/hc/it/articles/34467698417297-Come-evitare-tentativi-di-phishing-o-truffa-a-nome-di-pagoPA',
                    type: 'official',
                    usedFor: 'Indicatori di frode',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'falsi-rilevatori-truffe-ia',
            slug: 'perche-non-fidarsi-falsi-rilevatori-truffe-ia',
            title: 'Perché non fidarsi di finti "Rilevatori di truffe IA"',
            mainEntity: 'Polizia Postale',
            category: 'truffe',
            audience: ['adults', 'prevention', 'cittadini'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'I siti che promettono di "analizzare truffe con l’IA" spesso sono inaffidabili o raccolgono dati privati. Ecco il metodo ufficiale per verificare un messaggio sospetto.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-10-21',
            prerequisites: ['Ricezione di un messaggio, email o SMS sospetto'],
            whatToPrepare: ['Indirizzo web (URL) o mittente del messaggio da esaminare'],
            estimatedCosts: 'Gratis',
            timeToComplete: '1 minuto',
            steps: [
                'Non incollare testi privati o screenshot contenenti dati sensibili in presunti "scanner IA online": molti di questi siti sono non ufficiali e potrebbero archiviare le tue informazioni.',
                'Controlla il dominio reale: la Pubblica Amministrazione italiana usa solo domini che terminano con .gov.it, .inps.it, .agenziaentrate.gov.it, .carabinieri.it, .poliziadistato.it. Tutto ciò che ha suffissi diversi (es. .cc, .top, .online, .info-inps) è una frode.',
                'Verifica la regola del contatto diretto: né le banche né gli enti pubblici chiedono mai password, PIN dispositivi, codici OTP ricevuti via SMS o autorizzazioni di bonifico per messaggio.',
                'Usa esclusivamente l’applicazione ufficiale scaricata dagli store certificati (App Store o Google Play) o digita manualmente l’indirizzo web ufficiale dell’istituto.',
                'In caso di persistente dubbio o tentativo di estorsione, effettua una segnalazione sul portale ufficiale del Commissariato di P.S. Online della Polizia Postale.'
            ],
            officialLinksV2: [
                {
                    sourceId: 'commissariatoPs',
                    useWhen: 'Per segnalare alla Polizia Postale una truffa o un finto sito istituzionale',
                    beforeOpening: ['Non cliccare sui link contenuti nel messaggio truffaldino']
                },
                {
                    sourceId: 'certAgidHome',
                    useWhen: 'Per consultare il bollettino ufficiale CERT-AgID sulle campagne malevole in corso',
                    beforeOpening: []
                }
            ],
            commonErrors: [
                'Credere che un algoritmo o un finto prompt IA possa certificare al 100% che un link sia sicuro',
                'Inviare numeri di telefono, IBAN o codici fiscali a bot o strumenti online non istituzionali'
            ],
            dontDo: [
                'Non fidarti mai di "bollini di sicurezza" inventati su siti terzi',
                'Non rispondere all’SMS o al messaggio WhatsApp anche solo per insultare i truffatori (confermerebbe che il tuo numero è attivo)'
            ],
            ifYouHaveProblems: [
                'Se hai già inserito credenziali su un sito clone, blocca immediatamente le carte e cambia le password dai canali ufficiali'
            ],
            checklist: [
                'Non ho inserito dati sensibili su siti terzi',
                'Ho verificato l\'indirizzo ufficiale sul browser',
                'Ho segnalato il tentativo di phishing alla Polizia Postale se necessario'
            ],
            sources: [
                {
                    title: 'Come difendersi dal phishing e dalle truffe online',
                    organization: 'Polizia Postale — Commissariato di P.S. Online',
                    url: 'https://www.commissariatodips.it/notizie/index.html',
                    type: 'official',
                    usedFor: 'Linee guida ufficiali di verifica',
                    lastCheckedAt: '2026-11-25'
                }
            ]
        },
        {
            id: 'quishing-qr-code-truffe',
            slug: 'quishing-qr-code-truffe-parcometri-multe',
            title: 'Quishing: riconoscere finti QR code su parcometri e multe',
            category: 'truffe',
            audience: ['cittadini', 'lavoratori'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Il quishing è il phishing tramite QR code. Scopri come i truffatori manomettono parcometri comunali, colonnine di ricarica e notifiche postali per rubare i dati delle carte di credito.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-10-26',
            mainEntity: 'Polizia Postale',
            synthesis: 'Il quishing (QR phishing) sfrutta adesivi contraffatti applicati su parcometri fisici, colonnine di ricarica o finti avvisi di multa sul parabrezza. La scansione indirizza a siti clone di pagamento per sottrarre dati della carta di credito.',
            whenToDo: 'Quando paghi la sosta alle strisce blu, usi colonnine di ricarica o trovi un avviso cartaceo con QR code.',
            scenario: 'Stai parcheggiando l\'auto e ti avvicini al parcometro per pagare la sosta strisce blu inquadrando il QR code con lo smartphone.',
            steps: [
                'Verifica fisicamente il QR code: passa un dito sul supporto per accertarti che non sia un adesivo applicato sopra il cartello originale',
                'Usa esclusivamente l\'app Fotocamera di sistema del tuo telefono e non scanner QR di terze parti',
                'Prima di aprire la pagina, leggi l\'anteprima del dominio web che appare a schermo',
                'Controlla che l\'indirizzo appartenga al gestore ufficiale del servizio o al dominio istituzionale (.gov.it)',
                'Se preferisci, digita manualmente il codice stallo o zona all\'interno dell\'app ufficiale della sosta già installata',
                'Se il sito aperto richiede numeri di carta di credito con urgenza o commissioni anomale, abbandona la pagina immediatamente'
            ],
            doNow: [
                'Verifica al tatto l\'integrità dell\'adesivo o del cartello prima di inquadrare',
                'Leggi sempre l\'URL completo prima di fare tap sul link generato'
            ],
            dontDo: [
                'Non inserire mai codici CVC/CVV o credenziali bancarie su pagine aperte da codici QR in spazi pubblici',
                'Non installare file APK o profili di configurazione scaricati dopo aver scansionato un codice per strada'
            ],
            whatToPrepare: [
                'App ufficiale del gestore sosta o mobilità (es. EasyPark, MooneyGo, app comunale)',
                'Numero della targa del veicolo e codice identificativo della zona'
            ],
            commonErrors: [
                'Dare per scontato che un QR code stampato su un cartello pubblico sia autentico',
                'Confondere la grafica clonata di PagoPA con il vero portale statale dei pagamenti'
            ],
            askHelpWhen: [
                'Se noti parcometri o cartelli palesemente manomessi con adesivi sovrapposti',
                'Se hai scansionato un codice sospetto e inserito i dati della tua carta di pagamento'
            ],
            whoCanHelp: [
                'Polizia Locale del Comune di riferimento (per segnalare la manomissione)',
                'Polizia Postale e delle Comunicazioni (tramite commissariatodips.it)',
                'Servizio antifrode della tua banca (per blocco preventivo della carta)'
            ],
            officialLinks: [
                'https://www.commissariatodips.it/notizie/index.html'
            ],
            officialLinksV2: [
                {
                    sourceId: 'poliziaPostaleQuishing2026',
                    useWhen: 'Per approfondire l\'allerta ufficiale della Polizia Postale sul quishing',
                    beforeOpening: ['Verifica sempre l\'indirizzo della pagina di destinazione']
                },
                {
                    sourceId: 'commissariatoPs',
                    useWhen: 'Per segnalare online tentativi di frode e codici contraffatti',
                    beforeOpening: []
                }
            ],
            checklist: [
                'Ho controllato che il QR code non sia un adesivo incollato sopra il supporto originale',
                'Ho letto il dominio nell\'anteprima prima di aprire il browser',
                'Non ho inserito dati di carte bancarie su siti dubbi',
                'Ho usato l\'app di sosta ufficiale'
            ],
            sources: [
                {
                    title: 'Polizia Postale — Allerte su Quishing e QR Code contraffatti',
                    organization: 'Polizia Postale',
                    url: 'https://www.commissariatodips.it/notizie/index.html',
                    type: 'official',
                    usedFor: 'Dinamica della frode e linee guida di tutela',
                    lastCheckedAt: '2026-11-27'
                }
            ]
        },
        {
            id: 'malware-apk-falso-app-io-pec-truffa',
            slug: 'difendersi-da-file-apk-falsa-app-io-e-false-pec-fiscali',
            title: 'Falsa App IO (.apk) e false PEC fiscali: come proteggersi',
            category: 'truffe',
            audience: ['cittadini', 'lavoratori'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Come riconoscere i falsi aggiornamenti di App IO che installano trojan bancari Android (Mirax) e le false PEC di rimborso IRAP o riscossione segnalate da CERT-AgID, Agenzia delle Entrate e AdER.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-11-25',
            mainEntity: 'CERT-AgID / Agenzia delle Entrate',
            steps: [
                'Non scaricare mai applicazioni o file `.apk` da siti web o link ricevuti via messaggio: App IO si installa e si aggiorna solo da Google Play Store o Apple App Store.',
                'Controlla sempre la barra degli indirizzi: i portali dell’Agenzia delle Entrate e degli enti pubblici terminano in `.gov.it` o `.italia.it` (diffida di domini simili o falsi bollini Play Protect su pagine web).',
                'Nelle comunicazioni PEC fiscali, verifica il dominio esatto del mittente: AdER utilizza esclusivamente `@pec.agenziariscossione.gov.it`, mentre indirizzi come `pec.dp2romarimborsiagenziaentrate.it` sono truffe.',
                'Non compilare né inviare moduli con dati aziendali o personali in risposta a PEC che promettono «rimborsi IRAP a titolo di simulazione».',
                'Se hai installato un `.apk` sconosciuto su Android, scollega subito il telefono dalla rete (modalità aereo), revoca i permessi di Accessibilità all’app sospetta e contatta la tua banca.',
            ],
            commonErrors: [
                'Concedere i permessi di Accessibilità Android a un’app scaricata fuori dal Play Store',
                'Rispondere a una PEC fraudolenta pensando che l’estensione «PEC» garantisca l’identità del mittente',
            ],
            dontDo: [
                'Non disattivare i controlli di sicurezza di Android per installare pacchetti `.apk` provenienti da browser o chat',
            ],
            checklist: [
                'App IO aggiornata solo tramite store ufficiale',
                'Domini PEC controllati prima di aprire allegati',
                'Nessun file .apk scaricato da siti esterni',
            ],
            faqs: [
                { q: 'Una PEC può essere una truffa di phishing?', a: 'Sì: i truffatori registrano domini PEC con nomi somiglianti a quelli degli uffici pubblici. Occorre verificare il dominio ufficiale dell’ente (es. `@pec.agenziariscossione.gov.it` o consultare agenziaentrate.gov.it) prima di rispondere o inviare documenti.' },
            ],
            officialLinksV2: [
                {
                    sourceId: 'certAgidMalwareMirax2026',
                    useWhen: 'Per leggere l’analisi CERT-AgID sul malware Mirax e finto aggiornamento App IO',
                    beforeOpening: []
                },
                {
                    sourceId: 'adeAvvisoFalsaPecIrap2026',
                    useWhen: 'Per consultare l’avviso AdE sulle false PEC di rimborso',
                    beforeOpening: []
                },
                {
                    sourceId: 'aderAvvisoFalsePec2026',
                    useWhen: 'Per verificare il dominio PEC ufficiale di AdER',
                    beforeOpening: []
                }
            ],
            sources: [
                {
                    title: 'CERT-AgID — Malware Mirax via falso dominio AdE e finto aggiornamento App IO',
                    organization: 'CERT-AgID',
                    url: 'https://cert-agid.gov.it/news/malware-mirax-veicolato-in-italia-tramite-falso-domini-di-agenzia-delle-entrate-e-finto-aggiornamento-app-io/',
                    type: 'official',
                    usedFor: 'Indicatori tecnici di compromissione',
                    lastCheckedAt: '2026-11-25'
                },
                {
                    title: 'Agenzia delle Entrate — Avviso del 23 novembre 2026 su false PEC di rimborso',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/portale/avviso-del-23-novembre-2026-nuova-campagna-di-false-comunicazioni-di-rimborso',
                    type: 'official',
                    usedFor: 'Riconoscimento false PEC fiscali',
                    lastCheckedAt: '2026-11-25'
                }
            ]
        },
        {
            id: 'phishing-cie-clickfix-infocamere',
            slug: 'difendersi-da-finto-login-cie-clickfix-cloudflare-e-phishing-infocamere',
            title: 'Phishing CIE, falsi CAPTCHA ClickFix e portali InfoCamere',
            category: 'truffe',
            audience: ['cittadini', 'lavoratori'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Come difendersi da finti login CIE livello 2 a nome Agenzia Entrate, falsi CAPTCHA Cloudflare (ClickFix) con comandi PowerShell e portali clone InfoCamere.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-11-27',
            mainEntity: 'CERT-AgID / Agenzia delle Entrate',
            steps: [
                'Verifica sempre l’indirizzo prima di inserire le credenziali CIE: il login CIE livello 2 avviene solo su `entrata.cie.interno.gov.it`, mai su pagine raggiunte da link SMS o email fiscali.',
                'Se un portale promete un rimborso IRPEF e chiede numero di carta di pagamento, scadenza e codice CVV, chiudi subito la pagina: i rimborsi fiscali arrivano solo su IBAN indicato in area riservata o 730.',
                'Non eseguire mai comandi suggeriti da presunti popup CAPTCHA Cloudflare (“ClickFix”: premi Windows+X, apri PowerShell, premi CTRL+V): nessuna verifica anti-bot usa il terminale di sistema.',
                'Sui portali camerali (InfoCamere / Registro Imprese) diffida delle pagine dove i bottoni SPID, CIE o CNS non funzionano costringendoti a inserire utente e password.',
                'Controlla le eventuali notifiche di multe PagoPA o atti INPS/SEND esclusivamente accedendo manualmente dall’app IO o su `notifichedigitali.it`.',
            ],
            commonErrors: [
                'Incollare un comando dalla clipboard in PowerShell credendo sia una verifica Cloudflare legittima',
                'Inserire numero CIE e password su domini compromessi che imitano il Ministero dell’Interno e l’Agenzia delle Entrate',
            ],
            dontDo: [
                'Non comunicare codici carta o CVV per ricevere presunti accrediti fiscali',
                'Non incollare mai istruzioni prese da siti web dentro PowerShell, CMD o Terminale',
            ],
            checklist: [
                'Dominio entrata.cie.interno.gov.it verificato prima del login CIE',
                'Nessun comando copiato dal browser eseguito nel terminale',
                'Nessun dato carta/CVV inserito per falsi rimborsi IRPEF',
            ],
            faqs: [
                { q: 'Ho inserito numero CIE e password su una pagina falsa: cosa devo fare?', a: 'Accedi subito al portale/app ufficiale CieID per cambiare la password e revocare eventuali sessioni attive, poi controlla Cassetto Fiscale, MyINPS e App IO per verificare accessi o pratiche non autorizzate e segnala alla Polizia Postale.' },
            ],
            officialLinksV2: [
                {
                    sourceId: 'adeAvvisoPhishingCie2026',
                    useWhen: 'Per leggere l’avviso ufficiale Agenzia delle Entrate sul falso accesso CIE',
                    beforeOpening: []
                },
                {
                    sourceId: 'certAgidClickFixOlympic2026',
                    useWhen: 'Per conoscere lo schema ClickFix su finti CAPTCHA segnalato dal CERT-AgID',
                    beforeOpening: []
                },
                {
                    sourceId: 'certAgidSintesiNov2127',
                    useWhen: 'Per consultare il riepilogo settimanale delle 129 campagne attive in Italia',
                    beforeOpening: []
                }
            ],
            sources: [
                {
                    title: 'Agenzia delle Entrate — Avviso del 27 novembre 2026: campagna phishing falso accesso CIE',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/portale/avviso-del-27-novembre',
                    type: 'official',
                    usedFor: 'Riconoscimento finto login CIE livello 2',
                    lastCheckedAt: '2026-11-27'
                },
                {
                    title: 'CERT-AgID — ClickFix: falsa verifica Cloudflare diffonde RAT Olympic 0.1.0',
                    organization: 'CERT-AgID',
                    url: 'https://cert-agid.gov.it/news/clickfix-falsa-verifica-cloudflare-su-un-portale-scolastico-diffonde-nuovo-rat-olympic-0-1-0/',
                    type: 'official',
                    usedFor: 'Difesa da attacchi ClickFix via PowerShell',
                    lastCheckedAt: '2026-11-27'
                }
            ]
        }
    ]
};
