import { Module } from '@/types';

export const modulo_08_scuola_famiglia: Module = {
    id: 'modulo-08-scuola-famiglia',
    lastUpdated: '2026-05-14',
    title: 'Scuola e Famiglia Digitale',
    description: 'Strumenti per genitori ed educatori per gestire la vita digitale dei minori in modo consapevole e sicuro.',
    category: 'famiglia',
    difficulty: 'base',
    icon: 'GraduationCap',
    themeColor: 'accent-orange',
    lessons: [
        {
            id: 'digital-pact-family',
            slug: 'come-creare-un-patto-digitale-famiglia',
            title: 'Come creare un patto digitale di famiglia',
            mainEntity: 'Generazioni Connesse',
            category: 'famiglia',
            audience: ['parents', 'teachers'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Un accordo scritto tra genitori e figli per stabilire regole chiare e condivise sull\'uso di smartphone e social.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            prerequisites: ['Figli che usano o iniziano a usare dispositivi digitali'],
            whatToPrepare: ['Un foglio di carta o un documento digitale', 'Tempo per parlarne insieme'],
            estimatedCosts: 'Gratis',
            timeToComplete: '30-60 minuti per la discussione',
            steps: [
                'Scegli un momento di calma, non farlo come punizione',
                'Definisci i tempi d\'uso: quando si può e quando no (es: niente a tavola, niente dopo le 21)',
                'Stabilisci quali app possono essere scaricate solo con permesso',
                'Decidi insieme le conseguenze in caso di violazione delle regole',
                'Prevedi anche degli impegni per i genitori (es: dare il buon esempio)',
                'Firmate il patto e appendetelo in un luogo visibile'
            ],
            officialLinksV2: [
                {
                    sourceId: 'antiviolenza1522',
                    label: 'Supporto Famiglie',
                    useWhen: 'Se la situazione in famiglia diventa conflittuale a causa del digitale',
                    beforeOpening: []
                }
            ],
            commonErrors: [
                'Imporre il patto dall\'alto senza ascoltare i figli',
                'Prevedere solo divieti e nessuna opportunità',
                'Non aggiornare il patto al crescere dell\'età del figlio'
            ],
            dontDo: [
                'Non usare il sequestro del telefono come unica soluzione a ogni problema'
            ],
            ifYouHaveProblems: [
                'Se il rapporto col digitale diventa un\'ossessione, contatta un consultorio o uno psicologo dell\'età evolutiva'
            ],
            checklist: [
                'Regole sui tempi scritte',
                'App permesse definite',
                'Impegni dei genitori inseriti',
                'Firma di tutti i componenti'
            ],
            sources: [
                {
                    title: 'Vademecum per genitori',
                    organization: 'Generazioni Connesse',
                    url: 'https://www.generazioniconnesse.it/',
                    type: 'official',
                    usedFor: 'Modelli di patti digitali',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'parental-control-setup',
            slug: 'come-impostare-parental-control-realistico',
            title: 'Come impostare il Parental Control',
            mainEntity: 'Google / Apple / Amazon',
            category: 'famiglia',
            audience: ['parents'],
            level: 'intermedia',
            estimatedMinutes: 20,
            summary: 'Guida tecnica per configurare i limiti di tempo e i filtri contenuti su iPhone, Android e console da gioco.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            prerequisites: ['Smartphone del genitore', 'Smartphone del figlio'],
            whatToPrepare: ['Accesso agli account (Google o Apple) del figlio'],
            estimatedCosts: 'Gratis (usando le funzioni integrate di sistema)',
            timeToComplete: '20 minuti',
            steps: [
                'Per Android: scarica ed usa l\'app "Google Family Link"',
                'Per iPhone: usa la funzione "In famiglia" e "Tempo di utilizzo"',
                'Attiva il filtro per i contenuti espliciti su Google Search e YouTube',
                'Imposta il blocco automatico degli acquisti in-app (per evitare spese folli)',
                'Configura il limite di tempo giornaliero e l\'ora di "buonanotte"',
                'Spiega al figlio perché lo stai facendo: è una protezione, non un controllo spionistico'
            ],
            officialLinksV2: [
                {
                    sourceId: 'emergenzaInfanzia114',
                    useWhen: 'Se sospetti che il minore stia visualizzando contenuti pericolosi nonostante i filtri',
                    beforeOpening: []
                }
            ],
            commonErrors: [
                'Pensare che il parental control sostituisca il dialogo',
                'Usare password di sblocco troppo facili (es: data di nascita)',
                'Non controllare i permessi di geolocalizzazione'
            ],
            dontDo: [
                'Non spiare ogni singolo messaggio: rispetta la privacy del minore se non ci sono segnali di pericolo'
            ],
            ifYouHaveProblems: [
                'Consulta le guide ufficiali Apple Support o Google Help per i passaggi tecnici specifici del tuo modello'
            ],
            checklist: [
                'Family Link o Tempo di Utilizzo configurato',
                'Blocco acquisti attivo',
                'Filtro contenuti espliciti attivo',
                'Ora di spegnimento impostata'
            ],
            sources: [
                {
                    title: 'Guida alla sicurezza dei minori online',
                    organization: 'Polizia Postale',
                    url: 'https://www.commissariatodips.it/consigli/per-i-genitori/index.html',
                    type: 'official',
                    usedFor: 'Consigli tecnici e pedagogici',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'iscrizione-scuola-online',
            slug: 'iscrizione-scuola-online-guida',
            title: 'Iscrizione scuola online',
            mainEntity: 'Ministero dell\'Istruzione e del Merito',
            category: 'scuola',
            audience: ['parents'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Come iscrivere i figli alla prima classe di elementari, medie e superiori tramite il portale Unica.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Le iscrizioni alle classi prime si effettuano esclusivamente online (solitamente a gennaio). Si accede tramite il portale "Unica" con SPID o CIE. È possibile indicare fino a tre scuole in ordine di preferenza.',
            prerequisites: ['SPID o CIE del genitore', 'Codice fiscale del figlio', 'Codice meccanografico della scuola scelta'],
            whenToDo: 'Durante la finestra temporale ministeriale (solitamente tra gennaio e febbraio).',
            doNow: [
                'Accedi al portale "Unica" del Ministero dell\'Istruzione.',
                'Compila i dati anagrafici del genitore e del minore.',
                'Inserisci il codice meccanografico della scuola (lo trovi sul sito della scuola o su "Scuola in Chiaro").',
                'Indica le preferenze per il tempo scuola (es. tempo pieno) e la scelta dell\'insegnamento della religione.',
                'Invia la domanda e controlla la conferma via email.'
            ],
            steps: [
                'Accedi al portale "Unica" del Ministero dell\'Istruzione.',
                'Compila i dati anagrafici del genitore e del minore.',
                'Inserisci il codice meccanografico della scuola (lo trovi sul sito della scuola o su "Scuola in Chiaro").',
                'Indica le preferenze per il tempo scuola (es. tempo pieno) e la scelta dell\'insegnamento della religione.',
                'Invia la domanda e controlla la conferma via email.'
            ],
            dontDo: [
                'Non aspettare l\'ultimo giorno: il sistema potrebbe rallentare per il traffico elevato.',
                'Non compilare più domande per lo stesso figlio: vale l\'ultima inviata.'
            ],
            commonErrors: [
                'Sbagliare il codice meccanografico (fondamentale per identificare la scuola esatta).',
                'Non completare l\'iscrizione cartacea o i pagamenti richiesti dalla scuola dopo l\'accettazione online.',
                'Dimenticare di inserire le seconde e terze scelte (se la prima scuola ha troppe domande, rischi il riorientamento d\'ufficio).'
            ],
            askHelpWhen: [
                'Se il sistema non riconosce il codice fiscale del minore.',
                'Se devi fare un\'iscrizione fuori termine o un trasferimento.'
            ],
            whoCanHelp: [
                'Segreteria della scuola di destinazione',
                'Ufficio Relazioni con il Pubblico (URP) del Ministero',
                'Supporto tecnico portale Unica'
            ],
            whereToDo: 'Online sul portale Unica (unica.istruzione.gov.it).',
            timeToComplete: '20 minuti.',
            practicalDisclaimer: 'L\'ordine di invio non dà priorità: le graduatorie sono fatte in base ai criteri decisi da ogni singola scuola.',
            sources: [
                {
                    title: 'Iscrizioni Online',
                    organization: 'Ministero dell\'Istruzione e del Merito',
                    url: 'https://unica.istruzione.gov.it/it/orientamento/iscrizioni',
                    type: 'official',
                    usedFor: 'Portale ufficiale iscrizioni.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'SPID/CIE funzionante',
                'Codice meccanografico scuola pronto',
                'Scelta religione effettuata',
                'Seconda e terza scelta inserite',
                'Mail di conferma ricevuta'
            ],
            relatedGlossaryTerms: ['Codice Meccanografico', 'Unica', 'Scuola in Chiaro']
        },
        {
            id: 'pagopa-scuola',
            slug: 'pagopa-scuola-pagamenti-elettronici',
            title: 'PagoPA scuola',
            mainEntity: 'PagoPA',
            category: 'scuola',
            audience: ['parents'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come pagare gite, mensa e contributi scolastici tramite il sistema PagoInRete.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'PagoInRete è la piattaforma del Ministero che consente di gestire tutti i pagamenti verso le scuole tramite PagoPA. Assicura la tracciabilità e la generazione automatica della ricevuta per le detrazioni fiscali.',
            prerequisites: ['Accesso al portale PagoInRete con SPID/CIE'],
            whenToDo: 'Quando la scuola emette un avviso di pagamento (gite, assicurazione, contributi volontari).',
            doNow: [
                'Accedi a PagoInRete o controlla se l\'avviso è arrivato sull\'app IO.',
                'Visualizza gli avvisi telematici intestati ai tuoi figli.',
                'Scegli se pagare subito online (carta, conto) o scaricare l\'avviso per pagare dal tabaccaio o in banca.',
                'Scarica la ricevuta telematica dopo il pagamento.',
                'Conserva la ricevuta per la dichiarazione dei redditi (spese scolastiche detraibili).'
            ],
            steps: [
                'Accedi a PagoInRete o controlla se l\'avviso è arrivato sull\'app IO.',
                'Visualizza gli avvisi telematici intestati ai tuoi figli.',
                'Scegli se pagare subito online (carta, conto) o scaricare l\'avviso per pagare dal tabaccaio o in banca.',
                'Scarica la ricevuta telematica dopo il pagamento.',
                'Conserva la ricevuta per la dichiarazione dei redditi (spese scolastiche detraibili).'
            ],
            dontDo: [
                'Non fare bonifici diretti sul conto della scuola se non espressamente richiesto (complica la rendicontazione).',
                'Non smarrire le ricevute se paghi fisicamente: ti serviranno per le tasse.'
            ],
            commonErrors: [
                'Cercare i pagamenti sul sito della scuola invece che sul portale ministeriale.',
                'Sbagliare l\'intestatario del pagamento (solitamente deve essere il genitore che detrae la spesa).',
                'Non visualizzare l\'avviso perché non si sono associati i figli al proprio profilo.'
            ],
            askHelpWhen: [
                'Se l\'avviso di pagamento non compare nonostante la scadenza imminente.',
                'Se il pagamento risulta "in corso" per troppo tempo.'
            ],
            whoCanHelp: [
                'Segreteria didattica della scuola',
                'Assistenza PagoPA',
                'Assistenza PagoInRete'
            ],
            whereToDo: 'Portale PagoInRete o App IO.',
            timeToComplete: '5 minuti.',
            practicalDisclaimer: 'Le ricevute di PagoInRete sono accettate dall\'Agenzia delle Entrate per le detrazioni del 19%.',
            sources: [
                {
                    title: 'PagoInRete',
                    organization: 'Ministero dell\'Istruzione',
                    url: 'https://www.istruzione.it/pagoinrete/',
                    type: 'official',
                    usedFor: 'Gestione pagamenti scolastici.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Accesso PagoInRete effettuato',
                'Associazione figlio verificata',
                'Avviso di pagamento individuato',
                'Pagamento confermato',
                'Ricevuta detraibile scaricata'
            ],
            relatedGlossaryTerms: ['PagoInRete', 'IUV', 'Detrazione 19%']
        },
        {
            id: 'libri-cedole-scuola',
            slug: 'libri-di-testo-cedole-e-rimborsi',
            title: 'Libri e cedole',
            mainEntity: 'Comune',
            category: 'scuola',
            audience: ['parents'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Come ottenere i libri di testo gratuiti per le elementari e i rimborsi per medie e superiori.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Per la scuola primaria (elementari) i libri sono gratuiti tramite il sistema delle cedole librarie. Per le scuole secondarie, i Comuni e le Regioni mettono a disposizione dei "Buoni Libro" o rimborsi basati sull\'ISEE.',
            prerequisites: ['ISEE sotto la soglia regionale (per medie e superiori)', 'Residenza nel Comune'],
            whenToDo: 'Tra giugno e settembre (periodo di acquisto libri e pubblicazione bandi).',
            doNow: [
                'Per le elementari: scarica la cedola dal sito del Comune o attendi quella cartacea dalla scuola.',
                'Prenota i libri presso una libreria convenzionata consegnando la cedola.',
                'Per medie/superiori: verifica sul sito del Comune/Regione il bando "Diritto allo Studio" o "Buono Libri".',
                'Acquista i libri e conserva RIGOROSAMENTE le fatture o gli scontrini parlanti.',
                'Presenta la domanda online caricando l\'ISEE e le pezze d\'appoggio richieste.'
            ],
            steps: [
                'Per le elementari: scarica la cedola dal sito del Comune o attendi quella cartacea dalla scuola.',
                'Prenota i libri presso una libreria convenzionata consegnando la cedola.',
                'Per medie/superiori: verifica sul sito del Comune/Regione il bando "Diritto allo Studio" o "Buono Libri".',
                'Acquista i libri e conserva RIGOROSAMENTE le fatture o gli scontrini parlanti.',
                'Presenta la domanda online caricando l\'ISEE e le pezze d\'appoggio richieste.'
            ],
            dontDo: [
                'Non buttare gli scontrini: senza "scontrino parlante" (con codice fiscale) o fattura, non avrai il rimborso.',
                'Non acquistare libri usati da privati se vuoi il rimborso pubblico (spesso non è ammesso per mancanza di fattura fiscale).'
            ],
            commonErrors: [
                'Confondere la cedola (gratis per tutti alle elementari) con il buono libri (solo per ISEE basso alle medie/superiori).',
                'Sbagliare l\'elenco dei libri (controlla sempre quello ufficiale sul sito della scuola).',
                'Dimenticare di confermare la ricezione dei libri alla scuola.'
            ],
            askHelpWhen: [
                'Se la libreria non accetta la cedola.',
                'Se l\'ISEE supera di poco la soglia (verifica se ci sono altre agevolazioni comunali).'
            ],
            whoCanHelp: [
                'Ufficio Istruzione del Comune',
                'Librerie convenzionate',
                'Rappresentanti di classe'
            ],
            whereToDo: 'Libreria (per ritiro), Sito del Comune (per rimborsi).',
            timeToComplete: '15 minuti per la domanda online.',
            practicalDisclaimer: 'In molte regioni i libri per le elementari si possono ritirare solo in librerie accreditate col Comune di residenza.',
            sources: [
                {
                    title: 'Diritto allo studio: libri di testo',
                    organization: 'Ministero dell\'Istruzione',
                    url: 'https://www.miur.gov.it/libri-di-testo',
                    type: 'official',
                    usedFor: 'Informazioni generali sull\'adozione libri.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Cedola elementari scaricata',
                'Elenco libri ufficiale controllato',
                'Scontrini parlanti conservati',
                'Domanda rimborso inviata',
                'IBAN per accredito inserito'
            ],
            relatedGlossaryTerms: ['Cedola libraria', 'Scontrino parlante', 'Buono libri']
        },
        {
            id: 'mensa-trasporto-scolastico',
            slug: 'mensa-e-trasporto-scolastico-iscrizione',
            title: 'Mensa e trasporto scolastico',
            mainEntity: 'Comune',
            category: 'scuola',
            audience: ['parents'],
            level: 'base',
            estimatedMinutes: 7,
            summary: 'Come richiedere i servizi accessori alla scuola e ottenere tariffe agevolate in base all\'ISEE.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'La mensa e il trasporto (scuolabus) sono servizi gestiti dai Comuni. L\'iscrizione è annuale e obbligatoria se si usufruisce del tempo pieno. Le tariffe sono quasi sempre graduate in base al reddito ISEE.',
            prerequisites: ['Iscrizione alla scuola confermata', 'ISEE ordinario aggiornato'],
            whenToDo: 'Solitamente tra maggio e luglio, prima dell\'inizio dell\'anno scolastico.',
            doNow: [
                'Accedi al portale dei servizi scolastici del tuo Comune.',
                'Inserisci i dati del minore e seleziona i servizi richiesti (Mensa, Scuolabus, Pre/Post scuola).',
                'Carica l\'ISEE per il calcolo della fascia tariffaria (se non lo fai, pagherai la quota massima).',
                'Indica eventuali diete speciali (per motivi medici o religiosi) allegando certificato se necessario.',
                'Scarica l\'app del gestore (es. SpazioScuola) per ricaricare il credito pasti.'
            ],
            steps: [
                'Accedi al portale dei servizi scolastici del tuo Comune.',
                'Inserisci i dati del minore e seleziona i servizi richiesti (Mensa, Scuolabus, Pre/Post scuola).',
                'Carica l\'ISEE per il calcolo della fascia tariffaria (se non lo fai, pagherai la quota massima).',
                'Indica eventuali diete speciali (per motivi medici o religiosi) allegando certificato se necessario.',
                'Scarica l\'app del gestore (es. SpazioScuola) per ricaricare il credito pasti.'
            ],
            dontDo: [
                'Non dimenticare di segnalare le allergie alimentari: è fondamentale per la sicurezza del bambino.',
                'Non accumulare debiti sulla mensa: il Comune può sospendere il servizio o avviare il recupero crediti.'
            ],
            commonErrors: [
                'Pensare che l\'iscrizione a scuola includa automaticamente la mensa (sono pratiche diverse).',
                'Non disdire il pasto in caso di assenza del figlio (pagheresti il pasto inutilmente).',
                'Sbagliare la fermata dello scuolabus nella domanda.'
            ],
            askHelpWhen: [
                'Se hai difficoltà economiche temporanee (puoi chiedere l\'esonero ai servizi sociali).',
                'Se il servizio di trasporto non copre la tua zona.'
            ],
            whoCanHelp: [
                'Ufficio Istruzione del Comune',
                'Ditta che gestisce la ristorazione',
                'Commissione Mensa dei genitori'
            ],
            whereToDo: 'Portale web del Comune di residenza.',
            timeToComplete: '15 minuti.',
            practicalDisclaimer: 'Il costo della mensa scolastica è parzialmente detraibile dalle tasse (al 19%).',
            sources: [
                {
                    title: 'Servizi scolastici comunali',
                    organization: 'Anci',
                    url: 'https://www.anci.it/',
                    type: 'institutional',
                    usedFor: 'Riferimenti generali sui servizi locali.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Domanda mensa inviata',
                'ISEE caricato sul portale',
                'Certificato diete speciali inviato',
                'App ricarica pasti scaricata',
                'Iscrizione scuolabus confermata'
            ],
            relatedGlossaryTerms: ['Fascia ISEE', 'Dieta speciale', 'Trasporto sociale']
        },
        {
            id: 'cyberbullismo-cosa-fare',
            slug: 'cyberbullismo-come-intervenire',
            title: 'Cyberbullismo: cosa fare',
            mainEntity: 'Polizia Postale / Scuola',
            category: 'sicurezza',
            audience: ['parents', 'teachers', 'minors'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Azioni immediate per proteggere un minore vittima di bullismo online e attivare le tutele legali.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il cyberbullismo è un reato che si manifesta con molestie, insulti o diffusione di contenuti privati online. La legge 71/2017 permette di richiedere l\'oscuramento dei contenuti e l\'ammonimento del questore per i minori sopra i 14 anni.',
            prerequisites: ['Evidenze delle molestie (screenshot, link)'],
            whenToDo: 'Appena ti accorgi che un minore è bersaglio di attacchi sistematici online.',
            doNow: [
                'Raccogli le prove: fai screenshot di messaggi, post e commenti prima che vengano cancellati.',
                'Non rispondere agli attacchi e non alimentare il conflitto.',
                'Invia una segnalazione al gestore del social network o sito web chiedendo l\'oscuramento.',
                'Contatta il Referente per il Cyberbullismo della scuola (obbligatorio in ogni istituto).',
                'Se il contenuto non viene rimosso entro 48 ore, invia segnalazione al Garante Privacy.',
                'Valuta la denuncia alla Polizia Postale o la richiesta di Ammonimento al Questore.'
            ],
            steps: [
                'Raccogli le prove: fai screenshot di messaggi, post e commenti prima che vengano cancellati.',
                'Non rispondere agli attacchi e non alimentare il conflitto.',
                'Invia una segnalazione al gestore del social network o sito web chiedendo l\'oscuramento.',
                'Contatta il Referente per il Cyberbullismo della scuola (obbligatorio in ogni istituto).',
                'Se il contenuto non viene rimosso entro 48 ore, invia segnalazione al Garante Privacy.',
                'Valuta la denuncia alla Polizia Postale o la richiesta di Ammonimento al Questore.'
            ],
            dontDo: [
                'Non sottovalutare il problema: il dolore psicologico del digitale è reale e persistente.',
                'Non cancellare le prove per "vergogna": sono indispensabili per fermare il bullo.',
                'Non agire da solo contro la famiglia del bullo: usa i canali ufficiali.'
            ],
            commonErrors: [
                'Pensare che basti bloccare l\'utente (il bullo può creare altri profili o continuare in gruppi chiusi).',
                'Non coinvolgere la scuola pensando che riguardi solo la vita privata.',
                'Aspettare troppo tempo sperando che passi da solo.'
            ],
            askHelpWhen: [
                'Se il minore mostra segnali di forte disagio, isolamento o autolesionismo.',
                'Se le minacce sono gravi o estorsive.'
            ],
            whoCanHelp: [
                'Polizia Postale (commissariatodips.it)',
                'Garante per la protezione dei dati personali',
                'Referente Cyberbullismo della scuola',
                'Telefono Azzurro (1.96.96)'
            ],
            whereToDo: 'Online (Garante/Polizia) e a Scuola.',
            timeToComplete: 'Immediato (fase di emergenza).',
            practicalDisclaimer: 'La segnalazione al Garante può essere fatta direttamente dal minore se ha più di 14 anni.',
            sources: [
                {
                    title: 'Legge 71/2017 Cyberbullismo',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/cyberbullismo',
                    type: 'official',
                    usedFor: 'Normativa e modulistica segnalazione.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Screenshot salvati',
                'Segnalazione al social fatta',
                'Scuola informata',
                'Segnalazione Garante inviata (se serve)',
                'Supporto psicologico attivato'
            ],
            relatedGlossaryTerms: ['Ammonimento del Questore', 'Oscuramento contenuti', 'Referente Cyberbullismo']
        },
        {
            id: 'sexting-minori-orientamento',
            slug: 'sexting-tra-minori-rischi-e-prevenzione',
            title: 'Sexting tra minori',
            mainEntity: 'Polizia Postale',
            category: 'sicurezza',
            audience: ['parents', 'minors'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Capire i rischi legali e relazionali della condivisione di immagini intime tra coetanei.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il sexting tra minori, pur nascendo spesso come gioco o prova di fiducia, comporta rischi legali gravissimi (pedopornografia) e psicologici. È fondamentale spiegare che un\'immagine inviata esce per sempre dal controllo di chi l\'ha prodotta.',
            prerequisites: ['Dialogo aperto sulla sessualità e il digitale'],
            whenToDo: 'Come prevenzione prima che inizino a usare i social, o subito se scopri uno scambio di foto.',
            doNow: [
                'Spiega il concetto di "consenso digitale": una foto data a uno non è data a tutti.',
                'Avvisa sui rischi legali: diffondere foto intime di minori è un reato penale, anche tra coetanei.',
                'Se una foto è stata diffusa, non punire ma proteggi: la priorità è fermare la diffusione.',
                'Chiedi aiuto alla Polizia Postale per tentare di bloccare i link.',
                'Lavora sull\'empatia: far capire il danno che subisce chi vede la propria intimità violata.'
            ],
            steps: [
                'Spiega il concetto di "consenso digitale": una foto data a uno non è data a tutti.',
                'Avvisa sui rischi legali: diffondere foto intime di minori è un reato penale, anche tra coetanei.',
                'Se una foto è stata diffusa, non punire ma proteggi: la priorità è fermare la diffusione.',
                'Chiedi aiuto alla Polizia Postale per tentare di bloccare i link.',
                'Lavora sull\'empatia: far capire il danno che subisce chi vede la propria intimità violata.'
            ],
            dontDo: [
                'Non reagire con violenza o togliendo il telefono per mesi: rischi di chiudere il canale di comunicazione proprio quando ne hanno più bisogno.',
                'Non minimizzare dicendo "sono cose da ragazzi".'
            ],
            commonErrors: [
                'Pensare che le app con messaggi che "spariscono" (Snapchat, Telegram) siano sicure (si possono fare screenshot o foto con un altro cellulare).',
                'Ignorare che il possesso di foto intime di coetanei configura comunque un illecito.'
            ],
            askHelpWhen: [
                'Se la vittima subisce ricatti (sextortion).',
                'Se le foto circolano in chat di gruppo ampie.'
            ],
            whoCanHelp: [
                'Polizia Postale',
                'Consultori familiari',
                'Psicologi scolastici'
            ],
            whereToDo: 'A casa (dialogo) e uffici giudiziari (se necessario).',
            timeToComplete: 'Continuativo.',
            practicalDisclaimer: 'In Italia la produzione e diffusione di materiale pedopornografico è punita severamente anche se il materiale riguarda se stessi.',
            sources: [
                {
                    title: 'Sexting e rischi online',
                    organization: 'Generazioni Connesse',
                    url: 'https://www.generazioniconnesse.it/site/it/sexting/',
                    type: 'official',
                    usedFor: 'Materiale educativo per famiglie.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Dialogo preventivo fatto',
                'Rischi legali spiegati',
                'Concetto di screenshot chiarito',
                'Clima di fiducia creato',
                'Parental control attivo'
            ],
            relatedGlossaryTerms: ['Revenge Porn', 'Pedopornografia', 'Consenso']
        },
        {
            id: 'grooming-scuola',
            slug: 'grooming-adescamento-online-minori',
            title: 'Grooming',
            mainEntity: 'Polizia Postale',
            category: 'sicurezza',
            audience: ['parents', 'minors'],
            level: 'intermedia',
            estimatedMinutes: 9,
            summary: 'Riconoscere le tecniche di adescamento online e proteggere i minori dai malintenzionati.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il grooming è l\'adescamento di minori online tramite la manipolazione psicologica. L\'adulto finge di essere un coetaneo o un amico per ottenere la fiducia del minore e, successivamente, materiale intimo o incontri dal vivo.',
            prerequisites: ['Minore che usa videogiochi online, social o chat'],
            whenToDo: 'Sempre come prevenzione, o se il minore mostra comportamenti sospetti (segretezza, regali da sconosciuti).',
            doNow: [
                'Monitora i contatti insoliti sui social e nei giochi (es. Roblox, Fortnite, Discord).',
                'Spiega al minore di non accettare mai "amicizie" da persone che non conosce dal vivo.',
                'Insegna a non attivare mai la webcam con sconosciuti.',
                'Se sospetti un adescamento, non affrontare l\'adescatore: vai subito alla Polizia Postale.',
                'Salva ogni conversazione, ID utente e orario della chat.'
            ],
            steps: [
                'Monitora i contatti insoliti sui social e nei giochi (es. Roblox, Fortnite, Discord).',
                'Spiega al minore di non accettare mai "amicizie" da persone che non conosce dal vivo.',
                'Insegna a non attivare mai la webcam con sconosciuti.',
                'Se sospetti un adescamento, non affrontare l\'adescatore: vai subito alla Polizia Postale.',
                'Salva ogni conversazione, ID utente e orario della chat.'
            ],
            dontDo: [
                'Non lasciare i minori da soli per ore in chat senza alcuna supervisione.',
                'Non pensare che il "profilo verificato" o la foto di un ragazzino siano una garanzia di identità.'
            ],
            commonErrors: [
                'Sottovalutare i "regali" digitali (skin dei giochi, valuta virtuale) usati per adescare.',
                'Pensare che succeda solo a chi ha profili pubblici (l\'adescamento avviene spesso in chat private).',
                'Cancellare la chat per rabbia: sono prove fondamentali per l\'arresto.'
            ],
            askHelpWhen: [
                'Se il minore ha già inviato foto o ha fissato un appuntamento.',
                'Se l\'adulto minaccia il minore di diffondere segreti.'
            ],
            whoCanHelp: [
                'Polizia Postale',
                'Associazioni specializzate (es. Meter)',
                'Numero Emergenza 114'
            ],
            whereToDo: 'Online e Denuncia presso le autorità.',
            timeToComplete: 'Monitoraggio costante.',
            practicalDisclaimer: 'L\'adescamento di minori è un reato punito anche se non avviene un incontro fisico.',
            sources: [
                {
                    title: 'Adescamento online (Grooming)',
                    organization: 'Polizia di Stato',
                    url: 'https://www.commissariatodips.it/consigli/per-i-genitori/adescamento-online-grooming/index.html',
                    type: 'official',
                    usedFor: 'Vademecum sicurezza.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Impostazioni privacy controllate',
                'Webcam coperta quando non usata',
                'Dialogo su sconosciuti fatto',
                'Cronologia giochi monitorata',
                'App segnalazione Polizia scaricata'
            ],
            relatedGlossaryTerms: ['Social Engineering', 'Adescamento', 'Identità fake']
        },
        {
            id: 'privacy-foto-minori',
            slug: 'privacy-e-condivisione-foto-minori-online',
            title: 'Privacy foto minori',
            mainEntity: 'Garante Privacy',
            category: 'privacy',
            audience: ['parents', 'teachers'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Regole e consigli per pubblicare foto di figli o alunni senza violare la legge e la loro sicurezza.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Pubblicare foto di minori online (Sharenting) espone a rischi di pedopornografia e furto d\'identità. La legge richiede il consenso di ENTRAMBI i genitori. I minori hanno diritto alla propria immagine e potranno chiedere la rimozione in futuro.',
            prerequisites: ['Foto di minori da pubblicare'],
            whenToDo: 'Prima di caricare foto su Facebook, Instagram o siti scolastici.',
            doNow: [
                'Evita di pubblicare foto in cui il minore è chiaramente riconoscibile (usa emoji o inquadrature da dietro).',
                'Non pubblicare mai foto in costume da bagno, durante il bagnetto o in situazioni intime.',
                'Rimuovi i metadati della geolocalizzazione dalle foto prima di caricarle.',
                'Chiedi sempre il consenso all\'altro genitore prima di pubblicare (è un obbligo legale).',
                'Usa profili privati e limita la cerchia di chi può vedere le immagini.'
            ],
            steps: [
                'Evita di pubblicare foto in cui il minore è chiaramente riconoscibile (usa emoji o inquadrature da dietro).',
                'Non pubblicare mai foto in costume da bagno, durante il bagnetto o in situazioni intime.',
                'Rimuovi i metadati della geolocalizzazione dalle foto prima di caricarle.',
                'Chiedi sempre il consenso all\'altro genitore prima di pubblicare (è un obbligo legale).',
                'Usa profili privati e limita la cerchia di chi può vedere le immagini.'
            ],
            dontDo: [
                'Non creare profili social "a nome del bambino" gestiti dai genitori: violi i termini di servizio e la sua privacy futura.',
                'Non pubblicare foto di compagni di classe senza il consenso scritto dei loro genitori.'
            ],
            commonErrors: [
                'Pensare che cancellando la foto dal profilo questa sparisca dal web (qualcuno potrebbe averla già salvata).',
                'Pubblicare foto con la divisa scolastica o davanti casa (rivela dove vive e dove studia).',
                'Ignorare il volere del minore se chiede di non essere pubblicato.'
            ],
            askHelpWhen: [
                'Se scopri che le foto di tuo figlio sono state rubate o riutilizzate in altri contesti.',
                'Se l\'altro genitore pubblica foto senza il tuo consenso (puoi ricorrere al giudice).'
            ],
            whoCanHelp: [
                'Garante Privacy',
                'Avvocato familiarista',
                'Polizia Postale'
            ],
            whereToDo: 'Impostazioni social e comportamento quotidiano.',
            timeToComplete: '5 minuti per impostare la privacy.',
            practicalDisclaimer: 'La giurisprudenza italiana è sempre più severa: un genitore può obbligare l\'altro a rimuovere le foto dei figli dai social.',
            sources: [
                {
                    title: 'Documento Sharenting',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/temi/minori',
                    type: 'official',
                    usedFor: 'Linee guida condivisione foto.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Consenso altro genitore ottenuto',
                'Volto coperto o non visibile',
                'Geolocalizzazione rimossa',
                'Profilo impostato su Privato',
                'Scuola avvisata su permessi foto'
            ],
            relatedGlossaryTerms: ['Sharenting', 'Metadati EXIF', 'Diritto all\'oblio']
        },
        {
            id: 'segnalazione-contenuti-online',
            slug: 'come-segnalare-contenuti-inappropriati-online',
            title: 'Segnalazione contenuti online',
            mainEntity: 'Garante Privacy / Social Networks',
            category: 'sicurezza',
            audience: ['parents', 'minors', 'teachers'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Guida rapida per segnalare video, post o profili pericolosi sulle principali piattaforme.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Ogni piattaforma digitale ha strumenti interni per segnalare violazioni dei termini di servizio (violenza, odio, nudo, bullismo). Se la segnalazione interna non basta, si può ricorrere alle autorità nazionali.',
            prerequisites: ['Link al contenuto o nome profilo'],
            whenToDo: 'Quando ti imbatti in contenuti che violano la dignità, la privacy o la sicurezza di qualcuno.',
            doNow: [
                'Usa il tasto "Segnala" presente su ogni post/video (solitamente nei tre puntini in alto a destra).',
                'Seleziona la categoria corretta (es. "Molestie", "Contenuti espliciti").',
                'Se il contenuto riguarda un minore, seleziona l\'opzione specifica per la protezione dell\'infanzia.',
                'Non condividere il contenuto "per indignazione": aiuti solo l\'algoritmo a diffonderlo di più.',
                'Se il contenuto è illegale (es. pedopornografia), usa il portale della Polizia Postale invece del tasto segnala.'
            ],
            steps: [
                'Usa il tasto "Segnala" presente su ogni post/video (solitamente nei tre puntini in alto a destra).',
                'Seleziona la categoria corretta (es. "Molestie", "Contenuti espliciti").',
                'Se il contenuto riguarda un minore, seleziona l\'opzione specifica per la protezione dell\'infanzia.',
                'Non condividere il contenuto "per indignazione": aiuti solo l\'algoritmo a diffonderlo di più.',
                'Se il contenuto è illegale (es. pedopornografia), usa il portale della Polizia Postale invece del tasto segnala.'
            ],
            dontDo: [
                'Non segnalare in massa contenuti che semplicemente non ti piacciono: svilisci l\'efficacia dello strumento.',
                'Non pensare che la segnalazione sia anonima per la piattaforma (lo è per l\'utente segnalato).'
            ],
            commonErrors: [
                'Pensare che una sola segnalazione porti alla rimozione immediata (spesso servono più segnalazioni o una revisione umana).',
                'Non salvare il link prima di segnalare (potrebbe servire alle autorità).'
            ],
            askHelpWhen: [
                'Se sei vittima di una segnalazione ingiusta che ha portato al blocco del tuo profilo.',
                'Se il contenuto pericoloso non viene rimosso nonostante le segnalazioni.'
            ],
            whoCanHelp: [
                'Supporto tecnico della piattaforma',
                'Garante Privacy',
                'Polizia Postale'
            ],
            whereToDo: 'All\'interno delle App social.',
            timeToComplete: '2 minuti.',
            practicalDisclaimer: 'La segnalazione è il primo dovere civico digitale per mantenere il web sicuro.',
            sources: [
                {
                    title: 'Segnala un contenuto al Garante',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/home/modulistica-e-servizi-online',
                    type: 'official',
                    usedFor: 'Link a servizi di segnalazione ufficiali.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Link salvato',
                'Segnalazione interna fatta',
                'Categoria corretta scelta',
                'Nessuna condivisione fatta',
                'Segnalazione autorità (se grave)'
            ],
            relatedGlossaryTerms: ['Termini di Servizio', 'Moderazione contenuti', 'Flagging']
        },
        {
            id: 'bullismo-protocollo-scuola',
            slug: 'bullismo-protocollo-e-azioni-della-scuola',
            title: 'Bullismo: protocollo scuola',
            mainEntity: 'Ministero dell\'Istruzione',
            category: 'scuola',
            audience: ['parents', 'teachers'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Cosa deve fare legalmente la scuola quando viene segnalato un caso di bullismo.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Ogni scuola deve avere un protocollo interno per la gestione del bullismo. Questo prevede l\'individuazione del Referente, l\'attivazione di azioni di supporto per vittima e bullo, e la comunicazione obbligatoria alle famiglie e, nei casi gravi, alle autorità.',
            prerequisites: ['Segnalazione scritta o orale al Dirigente Scolastico'],
            whenToDo: 'Quando si ha notizia di atti di bullismo avvenuti all\'interno della scuola o che ne influenzano la vita scolastica.',
            doNow: [
                'Invia una segnalazione formale (email o PEC) al Dirigente Scolastico e al Referente Bullismo.',
                'Richiedi un incontro con il Consiglio di Classe per analizzare il clima relazionale.',
                'La scuola deve attivare misure di sorveglianza e, se necessario, sanzioni disciplinari a scopo educativo.',
                'Verifica se la scuola ha attivato progetti di prevenzione o supporto psicologico.',
                'In casi estremi, richiedi l\'intervento del GIT (Gruppo d\'Intervento Territoriale).'
            ],
            steps: [
                'Invia una segnalazione formale (email o PEC) al Dirigente Scolastico e al Referente Bullismo.',
                'Richiedi un incontro con il Consiglio di Classe per analizzare il clima relazionale.',
                'La scuola deve attivare misure di sorveglianza e, se necessario, sanzioni disciplinari a scopo educativo.',
                'Verifica se la scuola ha attivato progetti di prevenzione o supporto psicologico.',
                'In casi estremi, richiedi l\'intervento del GIT (Gruppo d\'Intervento Territoriale).'
            ],
            dontDo: [
                'Non accettare che la scuola minimizzi dicendo che "sono solo scherzi".',
                'Non cercare di risolvere la questione parlando direttamente con lo studente bullo: passa sempre per l\'istituzione o i genitori.'
            ],
            commonErrors: [
                'Pensare che la scuola non sia responsabile se il bullismo avviene appena fuori dai cancelli o via chat (la responsabilità educativa permane).',
                'Non mettere per iscritto le segnalazioni.'
            ],
            askHelpWhen: [
                'Se la scuola rimane inerte dopo la segnalazione.',
                'Se le sanzioni peggiorano la situazione per la vittima.'
            ],
            whoCanHelp: [
                'Dirigente Scolastico',
                'Referente Bullismo d\'Istituto',
                'Ufficio Scolastico Regionale (USR)',
                'Associazioni genitori'
            ],
            whereToDo: 'Presso la sede scolastica.',
            timeToComplete: 'Variabile in base alla gravità.',
            practicalDisclaimer: 'La scuola ha una responsabilità civile per "culpa in vigilando" se non interviene adeguatamente.',
            sources: [
                {
                    title: 'Linee di orientamento bullismo',
                    organization: 'Ministero dell\'Istruzione',
                    url: 'https://www.miur.gov.it/bullismo-e-cyberbullismo',
                    type: 'official',
                    usedFor: 'Linee guida nazionali.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Segnalazione scritta inviata',
                'Incontro col Dirigente fatto',
                'Referente Bullismo contattato',
                'Piano di azione concordato',
                'Monitoraggio periodico fissato'
            ],
            relatedGlossaryTerms: ['Culpa in vigilando', 'Consiglio di Classe', 'Patto di Corresponsabilità']
        },
        {
            id: 'dsa-bes-orientamento',
            slug: 'dsa-bes-orientamento-base-per-famiglie',
            title: 'DSA/BES orientamento base',
            mainEntity: 'ASL / Scuola',
            category: 'scuola',
            audience: ['parents', 'teachers'],
            level: 'base',
            estimatedMinutes: 9,
            summary: 'Primi passi per gestire disturbi dell\'apprendimento e bisogni educativi speciali.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'I DSA (Dislessia, Disgrafia, ecc.) e i BES sono condizioni che richiedono una didattica personalizzata. La legge 170/2010 garantisce agli studenti DSA l\'uso di strumenti compensativi e misure dispensative tramite il Piano Didattico Personalizzato (PDP).',
            prerequisites: ['Sospetto di difficoltà persistente nella lettura, scrittura o calcolo'],
            whenToDo: 'Quando gli insegnanti segnalano difficoltà o i genitori notano un affaticamento eccessivo nello studio.',
            doNow: [
                'Parlane con i docenti per capire se le difficoltà sono generalizzate.',
                'Richiedi una valutazione diagnostica presso la ASL o centri accreditati.',
                'Consegna la certificazione ufficiale alla segreteria della scuola.',
                'Collabora con la scuola per la stesura del PDP (Piano Didattico Personalizzato).',
                'Verifica che nel PDP siano inseriti gli strumenti necessari (es. sintesi vocale, mappe concettuali, tempo aggiuntivo).'
            ],
            steps: [
                'Parlane con i docenti per capire se le difficoltà sono generalizzate.',
                'Richiedi una valutazione diagnostica presso la ASL o centri accreditati.',
                'Consegna la certificazione ufficiale alla segreteria della scuola.',
                'Collabora con la scuola per la stesura del PDP (Piano Didattico Personalizzato).',
                'Verifica che nel PDP siano inseriti gli strumenti necessari (es. sintesi vocale, mappe concettuali, tempo aggiuntivo).'
            ],
            dontDo: [
                'Non considerare il DSA come una malattia: è una caratteristica del neurosviluppo.',
                'Non rifiutare gli strumenti compensativi pensando che siano un "aiutino" ingiusto: servono a pareggiare le opportunità.'
            ],
            commonErrors: [
                'Aspettare troppo tempo per la diagnosi sperando che il bambino "sbocci".',
                'Pensare che il PDP sia uguale per tutti: deve essere costruito sul singolo studente.',
                'Dimenticare che la certificazione DSA va aggiornata ad ogni cambio di ciclo scolastico.'
            ],
            askHelpWhen: [
                'Se la scuola non applica le misure previste nel PDP.',
                'Se lo studente prova frustrazione e rifiuta lo studio.'
            ],
            whoCanHelp: [
                'AID (Associazione Italiana Dislessia)',
                'Neuropsichiatra infantile',
                'Referente DSA della scuola',
                'Logopedista / Pedagogista'
            ],
            whereToDo: 'ASL e Scuola.',
            timeToComplete: 'Alcuni mesi per l\'iter diagnostico.',
            practicalDisclaimer: 'Gli studenti DSA hanno diritto alle stesse misure anche durante l\'esame di stato e i test universitari.',
            sources: [
                {
                    title: 'Legge 170/2010 DSA',
                    organization: 'AID Italia',
                    url: 'https://www.aiditalia.org/',
                    type: 'nonprofit',
                    usedFor: 'Informazioni legali e supporto.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Diagnosi ottenuta',
                'Consegna in segreteria fatta',
                'Incontro PDP effettuato',
                'PDP firmato dai genitori',
                'Strumenti digitali pronti'
            ],
            relatedGlossaryTerms: ['PDP (Piano Didattico Personalizzato)', 'Strumenti compensativi', 'Misure dispensative']
        }
    ]
};
