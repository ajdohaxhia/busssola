import { Module } from '@/types';

export const modulo_19_mobilita: Module = {
    id: 'modulo-19-mobilita',
    title: 'Modulo 19: Mobilità e Veicoli',
    description: 'Gestisci le scadenze e gli adempimenti legati all\'auto e alla guida: multe, bollo e patente senza stress.',
    category: 'mobilita',
    difficulty: 'base',
    icon: 'Car',
    themeColor: 'accent-orange',
    lessons: [
        {
            id: 'leggere-verbale-multa',
            slug: 'multa-come-leggere-il-verbale',
            title: 'Multa: come leggere il verbale',
            mainEntity: 'Comune',
            category: 'mobilita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Capire le voci di una sanzione amministrativa e i termini per il pagamento ridotto.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il verbale di contravvenzione contiene informazioni cruciali: la norma violata, l\'importo della sanzione, i punti decurtati e le modalità di ricorso. È fondamentale distinguere tra la sanzione base e le spese di notifica/accertamento.',
            prerequisites: ['Ricezione di un verbale di contestazione'],
            whenToDo: 'Appena ricevi una multa per posta o trovi l\'avviso sul parabrezza.',
            doNow: [
                'Cerca la "Data di notifica" (quella in cui hai ricevuto la raccomandata, non quella dell\'infrazione).',
                'Verifica se è previsto lo sconto del 30% se paghi entro 5 giorni.',
                'Controlla se c\'è l\'obbligo di comunicare i dati del conducente (per i punti della patente).',
                'Identifica l\'organo accertatore (Polizia Locale, Carabinieri, Polizia Stradale).',
                'Controlla la targa e il modello del veicolo per escludere errori di persona.'
            ],
            steps: [
                'Cerca la "Data di notifica" (quella in cui hai ricevuto la raccomandata, non quella dell\'infrazione).',
                'Verifica se è previsto lo sconto del 30% se paghi entro 5 giorni.',
                'Controlla se c\'è l\'obbligo di comunicare i dati del conducente (per i punti della patente).',
                'Identifica l\'organo accertatore (Polizia Locale, Carabinieri, Polizia Stradale).',
                'Controlla la targa e il modello del veicolo per escludere errori di persona.'
            ],
            dontDo: [
                'Non ignorare la multa sperando che vada in prescrizione (ci vogliono 5 anni e l\'importo raddoppia in breve tempo).',
                'Non pagare l\'importo ridotto se sono passati più di 5 giorni dalla notifica.',
                'Non dimenticare di comunicare i dati del conducente se richiesto, anche se paghi subito (rischi un\'altra multa pesante).'
            ],
            commonErrors: [
                'Confondere l\'avviso di accertamento (sul vetro) con il verbale notificato (a casa).',
                'Pagare solo la sanzione dimenticando le spese di notifica.',
                'Sbagliare il calcolo dei giorni (si conta dal giorno successivo alla notifica).'
            ],
            askHelpWhen: [
                'Se ritieni che la multa sia ingiusta e vuoi fare ricorso.',
                'Se ricevi una multa per un\'auto che hai già venduto.'
            ],
            whoCanHelp: [
                'Ufficio Contravvenzioni dell\'ente accertatore',
                'Prefettura (per ricorso gratuito)',
                'Giudice di Pace (per ricorso a pagamento)'
            ],
            whereToDo: 'A casa, analizzando il documento ricevuto.',
            timeToComplete: '10 minuti.',
            practicalDisclaimer: 'Se il postino lascia un avviso di giacenza, la notifica si perfeziona dopo 10 giorni anche se non ritiri la busta.',
            sources: [
                {
                    title: 'Codice della Strada',
                    organization: 'ACI',
                    url: 'https://www.aci.it/i-servizi/normative/codice-della-strada.html',
                    type: 'official',
                    usedFor: 'Quadro normativo sanzioni.',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Guida alle multe',
                    organization: 'Polizia di Stato',
                    url: 'https://www.poliziadistato.it/articolo/13',
                    type: 'official',
                    usedFor: 'Modalità di notifica e pagamento.',
                    lastCheckedAt: '2026-05-14'
                }
            ],
            checklist: [
                'Data notifica segnata',
                'Importo ridotto (-30%) calcolato',
                'Comunicazione dati conducente verificata',
                'Targa e modello corretti',
                'Scadenza 60gg per ricorso segnata'
            ],
            relatedGlossaryTerms: ['Notifica', 'Ricorso', 'Punti patente']
        },
        {
            id: 'pagare-multa-online',
            slug: 'pagare-multa-online-guida',
            title: 'Pagare multa online',
            mainEntity: 'PagoPA',
            category: 'mobilita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 4,
            summary: 'Come saldare le contravvenzioni tramite PagoPA, app IO o siti comunali.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Oggi la maggior parte delle multe può essere pagata digitalmente tramite il sistema PagoPA. Questo garantisce la certezza della ricezione e l\'aggiornamento immediato della tua posizione debitoria.',
            prerequisites: ['Verbale con codice IUV o avviso PagoPA', 'App IO o accesso Home Banking'],
            whenToDo: 'Entro 5 giorni per lo sconto del 30%, o entro 60 giorni per l\'importo base.',
            doNow: [
                'Inquadra il codice QR presente sull\'avviso PagoPA con l\'App IO o l\'app della tua banca.',
                'In alternativa, collegati al portale del cittadino del Comune che ha emesso la multa.',
                'Inserisci il numero del verbale e la targa se richiesti.',
                'Scegli il metodo di pagamento (carta, conto corrente, PayPal).',
                'Scarica e conserva la ricevuta telematica (RT).'
            ],
            steps: [
                'Inquadra il codice QR presente sull\'avviso PagoPA con l\'App IO o l\'app della tua banca.',
                'In alternativa, collegati al portale del cittadino del Comune che ha emesso la multa.',
                'Inserisci il numero del verbale e la targa se richiesti.',
                'Scegli il metodo di pagamento (carta, conto corrente, PayPal).',
                'Scarica e conserva la ricevuta telematica (RT).'
            ],
            dontDo: [
                'Non fare un bonifico bancario generico se non espressamente indicato (il pagamento non verrebbe agganciato al verbale).',
                'Non pagare due volte se l\'app IO ti mostra ancora il debito (il sistema può metterci qualche ora ad aggiornarsi).',
                'Non smarrire la ricevuta digitale: è la tua unica prova di pagamento.'
            ],
            commonErrors: [
                'Inserire l\'importo sbagliato (es. dimenticare i centesimi).',
                'Usare bollettini postali vecchi non PagoPA se il verbale richiede il nuovo sistema.',
                'Pagare dopo la mezzanotte del 5° giorno perdendo lo sconto.'
            ],
            askHelpWhen: [
                'Se il sistema PagoPA dà errore ripetutamente.',
                'Se hai pagato ma ricevi comunque un sollecito.'
            ],
            whoCanHelp: [
                'Assistenza PagoPA',
                'Sportello telematico del Comune',
                'Tua banca (per problemi tecnici di pagamento)'
            ],
            whereToDo: 'Smartphone o PC.',
            timeToComplete: '5 minuti.',
            practicalDisclaimer: 'Il pagamento online effettuato nei giorni festivi o dopo l\'orario di cut-off bancario viene registrato il giorno lavorativo successivo.',
            sources: [
                {
                    title: 'Come pagare con PagoPA',
                    organization: 'PagoPA S.p.A.',
                    url: 'https://www.pagopa.gov.it/',
                    type: 'official',
                    usedFor: 'Istruzioni sul sistema di pagamento nazionale.',
                    lastCheckedAt: '2026-05-16'
                },
                {
                    title: 'Servizi App IO',
                    organization: 'App IO',
                    url: 'https://io.italia.it/',
                    type: 'official',
                    usedFor: 'Integrazione multe e pagamenti.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Codice IUV individuato',
                'Importo corretto inserito',
                'Transazione confermata',
                'Ricevuta scaricata',
                'Ricevuta salvata in cloud o mail'
            ],
            relatedGlossaryTerms: ['PagoPA', 'IUV', 'Ricevuta Telematica']
        },
        {
            id: 'multa-ricorso',
            slug: 'multe-pagare-o-fare-ricorso',
            title: 'Multe: pagare o fare ricorso',
            mainEntity: 'Prefettura / Giudice di Pace',
            category: 'mobilita',
            audience: ['cittadini'],
            level: 'intermedia',
            estimatedMinutes: 8,
            summary: 'Valutare quando conviene contestare una multa e come presentare ricorso.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il ricorso è l\'atto con cui si contesta la validità di una multa. Può essere presentato al Prefetto (gratuito ma raddoppia se perdi) o al Giudice di Pace (costo del contributo unificato). Pagare la multa estingue il diritto al ricorso.',
            prerequisites: ['Verbale notificato', 'Elementi di prova (foto, testimonianze, vizi di forma)'],
            whenToDo: 'Entro 60 giorni dalla notifica (Prefetto) o 30 giorni (Giudice di Pace).',
            doNow: [
                'Analizza il verbale alla ricerca di vizi di forma (targa errata, norma sbagliata, mancanza elementi obbligatori).',
                'Verifica se la notifica è avvenuta oltre i 90 giorni dall\'infrazione.',
                'Scegli tra Ricorso al Prefetto (raccomandata o PEC) o Giudice di Pace.',
                'Prepara lo scritto difensivo allegando prove (es. foto segnaletica assente, permesso ZTL valido).',
                'Se scegli il Prefetto, attendi l\'ordinanza (se non risponde entro i termini, il ricorso è accolto per silenzio-assenso).'
            ],
            steps: [
                'Analizza il verbale alla ricerca di vizi di forma (targa errata, norma sbagliata, mancanza elementi obbligatori).',
                'Verifica se la notifica è avvenuta oltre i 90 giorni dall\'infrazione.',
                'Scegli tra Ricorso al Prefetto (raccomandata o PEC) o Giudice di Pace.',
                'Prepara lo scritto difensivo allegando prove (es. foto segnaletica assente, permesso ZTL valido).',
                'Se scegli il Prefetto, attendi l\'ordinanza (se non risponde entro i termini, il ricorso è accolto per silenzio-assenso).'
            ],
            dontDo: [
                'Non pagare la multa se hai intenzione di fare ricorso: il pagamento equivale all\'accettazione della sanzione.',
                'Non fare ricorso basandoti solo sulla "buona fede" o scuse generiche: servono prove oggettive o vizi legali.',
                'Non dimenticare di firmare il ricorso, pena l\'inammissibilità.'
            ],
            commonErrors: [
                'Sbagliare l\'autorità a cui indirizzare il ricorso.',
                'Inviare il ricorso oltre i termini (30 o 60 giorni).',
                'Non allegare copia del verbale contestato.'
            ],
            askHelpWhen: [
                'Se la sanzione è molto elevata o comporta la sospensione della patente.',
                'Se il ricorso riguarda punti complessi del Codice della Strada.'
            ],
            whoCanHelp: [
                'Associazioni dei consumatori',
                'Avvocato (per ricorsi complessi)',
                'Sportello del Cittadino del Comune'
            ],
            whereToDo: 'PEC, Raccomandata A/R o deposito presso la cancelleria del Giudice di Pace.',
            timeToComplete: '2 ore per la preparazione del documento.',
            practicalDisclaimer: 'Se il ricorso al Prefetto viene respinto, la sanzione sarà pari al doppio del minimo edittale (circa il doppio della multa originale).',
            sources: [
                {
                    title: 'Come fare ricorso al Prefetto',
                    organization: 'Ministero dell\'Interno',
                    url: 'https://www.prefettura.it/',
                    type: 'official',
                    usedFor: 'Procedure e modulistica ricorsi.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Vizio di forma individuato',
                'Termini (30/60gg) rispettati',
                'Autorità scelta (Prefetto/GdP)',
                'Documento firmato',
                'Prove allegate'
            ],
            relatedGlossaryTerms: ['Prefetto', 'Giudice di Pace', 'Vizio di forma']
        },
        {
            id: 'patente-rinnovo',
            slug: 'patente-rinnovo-procedura',
            title: 'Patente: rinnovo',
            mainEntity: 'Ministero delle Infrastrutture e dei Trasporti',
            category: 'mobilita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Scadenze, costi e passaggi per rinnovare la validità della patente di guida.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'La patente B scade ogni 10 anni fino ai 50 anni di età, poi ogni 5 anni. Il rinnovo consiste in una visita medica per l\'accertamento dei requisiti fisici e psichici. La nuova scadenza coinciderà con il giorno del tuo compleanno.',
            prerequisites: ['Patente in scadenza o scaduta da meno di 5 anni', 'Una foto tessera recente'],
            whenToDo: 'Fino a 4 mesi prima della scadenza indicata sul documento.',
            doNow: [
                'Prenota una visita medica presso una ASL, un\'autoscuola o un centro abilitato.',
                'Paga i bollettini PagoPA (Tariffa N004 per diritti motorizzazione e bollo).',
                'Recati alla visita con patente, codice fiscale e occhiali (se necessari).',
                'Il medico rilascia un documento provvisorio valido per guidare.',
                'Ricevi la nuova patente a casa tramite posta assicurata (costo circa 7€ da pagare al postino).'
            ],
            steps: [
                'Prenota una visita medica presso una ASL, un\'autoscuola o un centro abilitato.',
                'Paga i bollettini PagoPA (Tariffa N004 per diritti motorizzazione e bollo).',
                'Recati alla visita con patente, codice fiscale e occhiali (se necessari).',
                'Il medico rilascia un documento provvisorio valido per guidare.',
                'Ricevi la nuova patente a casa tramite posta assicurata (costo circa 7€ da pagare al postino).'
            ],
            dontDo: [
                'Non guidare con la patente scaduta: rischi una multa pesante e il ritiro del documento.',
                'Non aspettare che la patente sia scaduta da oltre 5 anni (dovrai rifare gli esami teorici e pratici).',
                'Non dimenticare di dichiarare patologie croniche (es. diabete) che potrebbero influenzare la durata del rinnovo.'
            ],
            commonErrors: [
                'Dimenticare di portare la ricevuta dei pagamenti PagoPA alla visita.',
                'Non avere con sé la foto tessera cartacea (se il medico non la acquisisce digitalmente).',
                'Fornire un indirizzo di recapito dove non c\'è nessuno per ritirare la raccomandata.'
            ],
            askHelpWhen: [
                'Se hai patologie che richiedono la Commissione Medica Locale.',
                'Se la nuova patente non arriva a casa dopo 15 giorni.'
            ],
            whoCanHelp: [
                'Autoscuole (gestiscono tutta la pratica)',
                'Centri medici abilitati',
                'Uffici della Motorizzazione Civile'
            ],
            whereToDo: 'Visita medica presso centri autorizzati, ricezione documento a casa.',
            timeToComplete: '30 minuti per la visita, 7 giorni per la ricezione.',
            practicalDisclaimer: 'Il documento provvisorio rilasciato dal medico vale solo in Italia; non puoi guidare all\'estero finché non arriva la patente nuova.',
            sources: [
                {
                    title: 'Rinnovo patente',
                    organization: 'Il Portale dell\'Automobilista',
                    url: 'https://www.ilportaledellautomobilista.it/',
                    type: 'official',
                    usedFor: 'Pagamento bollettini e verifica scadenza.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Data scadenza controllata',
                'Bollettini PagoPA pagati',
                'Visita medica prenotata',
                'Foto tessera pronta',
                'Nuova patente ricevuta'
            ],
            relatedGlossaryTerms: ['Motorizzazione', 'Commissione Medica Locale', 'Portale dell\'Automobilista']
        },
        {
            id: 'patente-punti-verifica',
            slug: 'patente-punti-e-verifica',
            title: 'Patente: punti e verifica',
            mainEntity: 'Il Portale dell\'Automobilista',
            category: 'mobilita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come controllare il saldo punti della propria patente e come recuperare i punti persi.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Ogni patente parte con 20 punti. In assenza di infrazioni, si riceve un bonus di 2 punti ogni 2 anni (fino a un massimo di 30). In caso di infrazioni, i punti vengono decurtati. È possibile controllare il saldo online o via telefono.',
            prerequisites: ['SPID o CIE per l\'accesso online'],
            whenToDo: 'Periodicamente per monitorare il proprio stato o dopo aver ricevuto una multa che comporta decurtazione.',
            doNow: [
                'Accedi al "Portale dell\'Automobilista" con SPID o CIE.',
                'Vai nella sezione "Estratto conto punti" per vedere il saldo attuale e lo storico.',
                'In alternativa, chiama il numero 06 45775962 (attivo 24h) da telefono fisso.',
                'Se hai perso punti, verifica se hai diritto al recupero automatico (2 anni senza infrazioni riportano a 20 punti se ne avevi meno).',
                'Valuta l\'iscrizione a un corso di recupero punti presso un\'autoscuola se il saldo è critico.'
            ],
            steps: [
                'Accedi al "Portale dell\'Automobilista" con SPID o CIE.',
                'Vai nella sezione "Estratto conto punti" per vedere il saldo attuale e lo storico.',
                'In alternativa, chiama il numero 06 45775962 (attivo 24h) da telefono fisso.',
                'Se hai perso punti, verifica se hai diritto al recupero automatico (2 anni senza infrazioni riportano a 20 punti se ne avevi meno).',
                'Valuta l\'iscrizione a un corso di recupero punti presso un\'autoscuola se il saldo è critico.'
            ],
            dontDo: [
                'Non aspettare di arrivare a zero punti: scatta l\'obbligo di revisione della patente (nuovo esame teorico e pratico).',
                'Non dimenticare di comunicare i dati del conducente se ricevi una multa a casa: in mancanza, perdi 286€ ma non i punti, ma se sei tu alla guida è un obbligo legale.'
            ],
            commonErrors: [
                'Pensare che i punti si recuperino pagando la multa (il pagamento e la decurtazione sono processi diversi).',
                'Non sapere che per i neopatentati (primi 3 anni) le sanzioni in punti sono raddoppiate.'
            ],
            askHelpWhen: [
                'Se il saldo punti sul portale non corrisponde a quello che ti aspetti.',
                'Se ricevi un preavviso di sospensione della patente.'
            ],
            whoCanHelp: [
                'Motorizzazione Civile',
                'Autoscuole',
                'Polizia Stradale'
            ],
            whereToDo: 'Online (Portale dell\'Automobilista) o App iPatente.',
            timeToComplete: '5 minuti.',
            practicalDisclaimer: 'Il saldo punti non viene aggiornato immediatamente dopo l\'infrazione, ma solo dopo che il verbale è diventato definitivo.',
            sources: [
                {
                    title: 'Verifica Punti Patente',
                    organization: 'Il Portale dell\'Automobilista',
                    url: 'https://www.ilportaledellautomobilista.it/',
                    type: 'official',
                    usedFor: 'Servizio di verifica saldo online.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Accesso Portale effettuato',
                'Saldo punti visualizzato',
                'Storico infrazioni controllato',
                'Bonus biennale verificato',
                'App iPatente scaricata'
            ],
            relatedGlossaryTerms: ['Neopatentato', 'Revisione patente', 'Bonus punti']
        },
        {
            id: 'bollo-auto-guida',
            slug: 'bollo-auto-pagamento-scadenze',
            title: 'Bollo auto',
            mainEntity: 'ACI',
            category: 'mobilita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 4,
            summary: 'Tutto sulla tassa automobilistica regionale: come calcolarla e pagarla senza errori.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il bollo auto è una tassa di possesso gestita dalle Regioni. Si paga ogni anno entro l\'ultimo giorno del mese successivo a quello di scadenza. L\'importo dipende dalla potenza del motore (kW) e dalla classe ambientale (Euro).',
            prerequisites: ['Targa del veicolo'],
            whenToDo: 'Ogni anno, solitamente nel mese in cui è stata immatricolata l\'auto.',
            doNow: [
                'Verifica la scadenza e l\'importo sul sito dell\'ACI o tramite l\'app IO.',
                'Controlla se hai diritto a esenzioni (es. auto elettriche, Legge 104, auto storiche).',
                'Effettua il pagamento tramite PagoPA (online, tabaccheria, posta).',
                'Conserva la ricevuta per 5 anni (tempo di prescrizione per controlli).',
                'Se paghi in ritardo, aggiungi sanzioni e interessi (ridotti se paghi entro l\'anno col ravvedimento operoso).'
            ],
            steps: [
                'Verifica la scadenza e l\'importo sul sito dell\'ACI o tramite l\'app IO.',
                'Controlla se hai diritto a esenzioni (es. auto elettriche, Legge 104, auto storiche).',
                'Effettua il pagamento tramite PagoPA (online, tabaccheria, posta).',
                'Conserva la ricevuta per 5 anni (tempo di prescrizione per controlli).',
                'Se paghi in ritardo, aggiungi sanzioni e interessi (ridotti se paghi entro l\'anno col ravvedimento operoso).'
            ],
            dontDo: [
                'Non circolare senza aver pagato: sebbene non sia un documento da mostrare durante i controlli su strada, rischi il fermo amministrativo del veicolo dopo vari solleciti.',
                'Non dimenticare di pagare il bollo anche se l\'auto è ferma in garage.',
                'Non pagare l\'importo dell\'anno scorso senza verificare se ci sono stati aumenti regionali.'
            ],
            commonErrors: [
                'Sbagliare il calcolo dei kW se si guarda solo la potenza in CV.',
                'Pagare alla regione sbagliata se hai cambiato residenza da poco.',
                'Dimenticare di pagare dopo il primo acquisto di un\'auto usata.'
            ],
            askHelpWhen: [
                'Se ricevi un accertamento per un bollo che hai già pagato.',
                'Se vuoi chiedere il rimborso per un pagamento doppio.'
            ],
            whoCanHelp: [
                'Ufficio Tributi della propria Regione',
                'Delegazioni ACI',
                'Agenzia delle Entrate (solo per Sardegna e Friuli V.G.)'
            ],
            whereToDo: 'Online (ACI, App IO) o fisicamente (Tabaccai, Poste).',
            timeToComplete: '5 minuti.',
            practicalDisclaimer: 'Dal 2020 i pagamenti del bollo auto devono transitare obbligatoriamente su PagoPA.',
            sources: [
                {
                    title: 'Calcolo Bollo Auto',
                    organization: 'ACI',
                    url: 'https://iservizi.aci.it/VisualizzaBollo/',
                    type: 'official',
                    usedFor: 'Verifica importo e scadenza.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Scadenza verificata',
                'Importo calcolato',
                'Pagamento effettuato',
                'Ricevuta salvata',
                'Controllo esenzioni fatto'
            ],
            relatedGlossaryTerms: ['Tassa di possesso', 'kW', 'Ravvedimento operoso']
        },
        {
            id: 'cambio-residenza-patente',
            slug: 'cambio-residenza-su-patente-libretto',
            title: 'Cambio residenza su patente/libretto',
            mainEntity: 'Comune / ANPR',
            category: 'mobilita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 4,
            summary: 'Come aggiornare i dati di residenza sui documenti del veicolo in modo automatico e gratuito.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Quando cambi residenza, l\'aggiornamento della patente e del libretto (DU) è contestuale alla domanda in Comune. Non vengono più inviati adesivi da applicare; i database vengono aggiornati telematicamente.',
            prerequisites: ['Nuovo indirizzo di residenza', 'Targhe dei veicoli intestati'],
            whenToDo: 'Contestualmente alla richiesta di cambio residenza presso il nuovo Comune.',
            doNow: [
                'Comunica i dati della patente e le targhe dei veicoli al momento della domanda di cambio residenza in Comune o su ANPR.',
                'Il Comune trasmette i dati alla Motorizzazione Civile.',
                'Verifica l\'avvenuto aggiornamento sul Portale dell\'Automobilista dopo circa 30 giorni.',
                'Scarica dal portale l\'attestazione di avvenuta variazione (da tenere insieme ai documenti se desiderato, ma non obbligatorio).'
            ],
            steps: [
                'Comunica i dati della patente e le targhe dei veicoli al momento della domanda di cambio residenza in Comune o su ANPR.',
                'Il Comune trasmette i dati alla Motorizzazione Civile.',
                'Verifica l\'avvenuto aggiornamento sul Portale dell\'Automobilista dopo circa 30 giorni.',
                'Scarica dal portale l\'attestazione di avvenuta variazione (da tenere insieme ai documenti se desiderato, ma non obbligatorio).'
            ],
            dontDo: [
                'Non cercare più gli adesivi per posta: la procedura è stata semplificata e non prevede più l\'invio di etichette cartacee.',
                'Non dimenticare di aggiornare anche l\'assicurazione (cambiare provincia di residenza può variare il premio RCA).'
            ],
            commonErrors: [
                'Dimenticare di inserire le targhe di moto o rimorchi nella domanda.',
                'Pensare che la patente vada rifatta: la residenza non è più stampata sulla nuova tessera plastificata.'
            ],
            askHelpWhen: [
                'Se dopo 60 giorni i dati sul Portale dell\'Automobilista risultano ancora quelli vecchi.',
                'Se il veicolo è in leasing o a noleggio (procedura diversa via società di noleggio).'
            ],
            whoCanHelp: [
                'Ufficio Anagrafe del Comune',
                'Motorizzazione Civile (numero verde 800 23 23 23)',
                'Portale dell\'Automobilista'
            ],
            whereToDo: 'Comune (fisicamente o tramite portale ANPR).',
            timeToComplete: '5 minuti (all\'interno della pratica di residenza).',
            practicalDisclaimer: 'L\'aggiornamento è gratuito e obbligatorio per evitare problemi con la notifica di multe o atti ufficiali.',
            sources: [
                {
                    title: 'Variazione indirizzo su patente',
                    organization: 'Il Portale dell\'Automobilista',
                    url: 'https://www.ilportaledellautomobilista.it/',
                    type: 'official',
                    usedFor: 'Informazioni e verifica stato.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Targhe indicate nella domanda',
                'Patente indicata nella domanda',
                'Ricevuta del Comune conservata',
                'Verifica su Portale fatta dopo 30gg',
                'Assicurazione avvisata'
            ],
            relatedGlossaryTerms: ['ANPR', 'DU (Documento Unico)', 'Motorizzazione']
        },
        {
            id: 'pass-disabili-richiesta',
            slug: 'pass-disabili-guida-richiesta',
            title: 'Pass disabili',
            mainEntity: 'Comune / ASL',
            category: 'mobilita',
            audience: ['disabili', 'caregiver'],
            level: 'base',
            estimatedMinutes: 7,
            summary: 'Come ottenere il Contrassegno Unificato Disabili Europeo (CUDE) per parcheggi e ZTL.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il contrassegno disabili è un tagliando strettamente personale che permette di sostare negli spazi riservati e accedere alle zone a traffico limitato. Ha validità europea ed è rilasciato dal Comune di residenza previo accertamento medico.',
            prerequisites: ['Certificato della Commissione Medica Legale o del Medico Legale ASL'],
            whenToDo: 'In presenza di capacità di deambulazione sensibilmente ridotta o cecità assoluta.',
            doNow: [
                'Ottieni la certificazione medica dalla tua ASL di riferimento che attesti il diritto al contrassegno.',
                'Presenta la domanda al Sindaco del tuo Comune (solitamente tramite l\'Ufficio Protocollo o la Polizia Locale).',
                'Allega il certificato medico e due foto tessera.',
                'Una volta ottenuto, esponi sempre l\'ORIGINALE sul parabrezza (non fotocopie).',
                'Se viaggi in altri comuni, controlla se devi comunicare la targa preventivamente per la ZTL.'
            ],
            steps: [
                'Ottieni la certificazione medica dalla tua ASL di riferimento che attesti il diritto al contrassegno.',
                'Presenta la domanda al Sindaco del tuo Comune (solitamente tramite l\'Ufficio Protocollo o la Polizia Locale).',
                'Allega il certificato medico e due foto tessera.',
                'Una volta ottenuto, esponi sempre l\'ORIGINALE sul parabrezza (non fotocopie).',
                'Se viaggi in altri comuni, controlla se devi comunicare la targa preventivamente per la ZTL.'
            ],
            dontDo: [
                'Non usare il pass se il titolare non è a bordo del veicolo: è un reato (sostituzione di persona) e comporta multe pesanti e ritiro del pass.',
                'Non fotocopiare il pass per usarlo su più auto: deve essere spostato l\'originale.',
                'Non parcheggiare dove vige il divieto di sosta con rimozione (salvo diversa indicazione).'
            ],
            commonErrors: [
                'Dimenticare di rinnovare il pass (quelli permanenti scadono ogni 5 anni).',
                'Pensare che il pass dia diritto a parcheggiare ovunque gratuitamente (nelle strisce blu dipende dal regolamento comunale).',
                'Non comunicare il cambio targa se il pass è associato a un veicolo specifico per l\'accesso ZTL automatico.'
            ],
            askHelpWhen: [
                'Se devi viaggiare all\'estero (il CUDE è valido in UE, ma le regole di sosta variano).',
                'Se il pass viene smarrito o rubato (serve denuncia dai Carabinieri).'
            ],
            whoCanHelp: [
                'Ufficio Disabili del Comune',
                'Polizia Locale',
                'Associazioni di categoria (ANMIC, ecc.)'
            ],
            whereToDo: 'ASL per la visita, Comune per il rilascio.',
            timeToComplete: '15-30 giorni.',
            practicalDisclaimer: 'Il pass è legato alla persona, non al veicolo: può essere usato su qualsiasi auto su cui il disabile sta viaggiando.',
            sources: [
                {
                    title: 'Contrassegno unificato disabili europeo',
                    organization: 'ACI / Ministero delle Infrastrutture',
                    url: 'https://www.aci.it/i-servizi/per-la-mobilita/disabili.html',
                    type: 'official',
                    usedFor: 'Normativa e diritti.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Visita medica ASL fatta',
                'Domanda in Comune presentata',
                'Foto tessera consegnate',
                'Pass originale ritirato',
                'Scadenza segnata in calendario'
            ],
            relatedGlossaryTerms: ['CUDE', 'ZTL', 'Deambulazione ridotta']
        },
        {
            id: 'passaggio-proprieta-veicolo',
            slug: 'veicolo-venduto-passaggio-proprieta',
            title: 'Veicolo venduto: passaggio proprietà',
            mainEntity: 'ACI / PRA',
            category: 'mobilita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'I passaggi necessari per vendere o comprare un\'auto usata tra privati in sicurezza.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il passaggio di proprietà consiste nell\'aggiornamento dell\'intestatario del veicolo presso il Pubblico Registro Automobilistico (PRA). Deve essere effettuato entro 60 giorni dalla firma dell\'atto di vendita autenticato.',
            prerequisites: ['Documento Unico di Circolazione (o libretto e certificato di proprietà)', 'Documenti d\'identità di venditore e acquirente'],
            whenToDo: 'Immediatamente dopo aver raggiunto un accordo di compravendita.',
            doNow: [
                'Autentica la firma del venditore sull\'atto di vendita (puoi farlo in Comune, all\'ACI, o presso uno STA).',
                'Entro 60 giorni, l\'acquirente deve registrare l\'atto al PRA e aggiornare il Documento Unico.',
                'Se vai in uno Sportello Telematico dell\'Automobilista (STA), la pratica è immediata.',
                'Il venditore deve conservare copia dell\'atto autenticato per prova di avvenuta vendita (utile per bollo e multe post-vendita).',
                'Comunica la vendita alla tua assicurazione per estinguere o trasferire la polizza.'
            ],
            steps: [
                'Autentica la firma del venditore sull\'atto di vendita (puoi farlo in Comune, all\'ACI, o presso uno STA).',
                'Entro 60 giorni, l\'acquirente deve registrare l\'atto al PRA and aggiornare il Documento Unico.',
                'Se vai in uno Sportello Telematico dell\'Automobilista (STA), la pratica è immediata.',
                'Il venditore deve conservare copia dell\'atto autenticato per prova di avvenuta vendita (utile per bollo e multe post-vendita).',
                'Comunica la vendita alla tua assicurazione per estinguere o trasferire la polizza.'
            ],
            dontDo: [
                'Non consegnare le chiavi e l\'auto senza aver autenticato la firma sull\'atto di vendita.',
                'Non fidarti se l\'acquirente dice "ci penso io al passaggio più tardi" senza andare insieme a uno sportello: resti tu il responsabile legale del veicolo.',
                'Non dimenticare di controllare se sul veicolo gravano fermi amministrativi prima di comprare.'
            ],
            commonErrors: [
                'Non aggiornare la carta di circolazione, rischiando multe pesanti.',
                'Smarrire il certificato di proprietà cartaceo (per i vecchi veicoli, ora è digitale).',
                'Non verificare l\'identità dell\'acquirente tramite documento originale.'
            ],
            askHelpWhen: [
                'Se dopo mesi ricevi multe per l\'auto venduta (significa che il passaggio non è stato registrato).',
                'Se l\'auto è ereditata (procedura specifica per successione).'
            ],
            whoCanHelp: [
                'Unità Territoriali ACI (PRA)',
                'Agenzie di pratiche auto (costo maggiore ma zero code)',
                'STA (Sportello Telematico dell\'Automobilista)'
            ],
            whereToDo: 'ACI, STA, o agenzie pratiche auto.',
            timeToComplete: '30-60 minuti presso uno STA.',
            practicalDisclaimer: 'Il costo del passaggio varia in base alla potenza del veicolo (kW) e alla provincia di residenza dell\'acquirente (IPT).',
            sources: [
                {
                    title: 'Passaggio di proprietà',
                    organization: 'ACI',
                    url: 'https://www.aci.it/i-servizi/guide-utili/guida-pratiche-auto/passaggio-di-proprieta.html',
                    type: 'official',
                    usedFor: 'Guida alle procedure e costi.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Documento Unico pronto',
                'Marca da bollo acquistata (se serve)',
                'Firma autenticata',
                'Pagamento IPT effettuato',
                'Assicurazione avvisata'
            ],
            relatedGlossaryTerms: ['PRA (Pubblico Registro Automobilistico)', 'STA', 'IPT (Imposta Provinciale di Trascrizione)']
        },
        {
            id: 'assicurazione-rca-controlli',
            slug: 'assicurazione-rca-cosa-controllare',
            title: 'Assicurazione RCA: cosa controllare',
            mainEntity: 'IVASS',
            category: 'mobilita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Come leggere il preventivo, verificare la copertura e evitare le truffe sulle polizze online.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'La polizza RCA è obbligatoria per legge. Oltre al prezzo, è fondamentale controllare i massimali, le franchigie e le clausole di esclusione (es. rivalsa). Verifica sempre che l\'impresa sia autorizzata per evitare di girare con una polizza falsa.',
            prerequisites: ['Targa del veicolo', 'Attestato di rischio (digitale)'],
            whenToDo: 'Almeno 15-30 giorni prima della scadenza della polizza attuale.',
            doNow: [
                'Usa il "Preventivass" (portale ufficiale pubblico) per confrontare le offerte in modo imparziale.',
                'Controlla il massimale: quello di legge è circa 6 milioni per persone e 1.3 per cose; valuta se alzarlo.',
                'Verifica la clausola "Guida Esclusiva" o "Guida Esperta": se guidano giovani sotto i 26 anni, deve essere attiva la "Guida Libera".',
                'Controlla la "Rivalsa": assicurati che sia rinunciata dalla compagnia per casi come patente scaduta o ebbrezza (se vuoi massima tutela).',
                'Verifica sul sito IVASS se il sito o la compagnia sono nella lista dei siti irregolari.'
            ],
            steps: [
                'Usa il "Preventivass" (portale ufficiale pubblico) per confrontare le offerte in modo imparziale.',
                'Controlla il massimale: quello di legge è circa 6 milioni per persone e 1.3 per cose; valuta se alzarlo.',
                'Verifica la clausola "Guida Esclusiva" o "Guida Esperta": se guidano giovani sotto i 26 anni, deve essere attiva la "Guida Libera".',
                'Controlla la "Rivalsa": assicurati che sia rinunciata dalla compagnia per casi come patente scaduta o ebbrezza (se vuoi massima tutela).',
                'Verifica sul sito IVASS se il sito o la compagnia sono nella lista dei siti irregolari.'
            ],
            dontDo: [
                'Non pagare mai una polizza tramite ricarica Postepay o sistemi di trasferimento denaro anonimi: le compagnie serie usano bonifici, carte o PayPal.',
                'Non mentire sulla residenza o sul ricovero notturno del veicolo per abbassare il premio: rischi che l\'assicurazione non paghi in caso di sinistro.',
                'Non dimenticare che il "periodo di tolleranza" di 15 giorni vale solo in Italia e solo per la RCA base.'
            ],
            commonErrors: [
                'Scegliere la polizza solo in base al prezzo più basso trascurando le franchigie alte.',
                'Non includere l\'assistenza stradale per risparmiare pochi euro (un carro attrezzi costa molto di più).',
                'Pensare che la polizza furto/incendio sia inclusa nella RCA base.'
            ],
            askHelpWhen: [
                'Se hai dubbi sull\'autenticità di un sito di assicurazioni.',
                'Se l\'assicurazione si rifiuta di risarcire un danno dopo un incidente.'
            ],
            whoCanHelp: [
                'IVASS (Istituto per la Vigilanza sulle Assicurazioni)',
                'Intermediari assicurativi iscritti al RUI',
                'Associazioni dei consumatori'
            ],
            whereToDo: 'Online (Preventivass) o presso agenzie fisiche.',
            timeToComplete: '20 minuti.',
            practicalDisclaimer: 'Dal 2015 non è più obbligatorio esporre il contrassegno cartaceo sul parabrezza: il controllo avviene tramite targa.',
            sources: [
                {
                    title: 'Preventivass',
                    organization: 'IVASS',
                    url: 'https://www.preventivass.it/',
                    type: 'official',
                    usedFor: 'Confronto preventivi certificato.',
                    lastCheckedAt: '2026-05-16'
                },
                {
                    title: 'Verifica copertura RCA',
                    organization: 'Il Portale dell\'Automobilista',
                    url: 'https://www.ilportaledellautomobilista.it/',
                    type: 'official',
                    usedFor: 'Verifica se un veicolo è assicurato.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Compagnia autorizzata IVASS',
                'Massimali adeguati',
                'Rivalsa esclusa',
                'Tipo guida corretto',
                'Pagamento tracciabile fatto'
            ],
            relatedGlossaryTerms: ['Massimale', 'Franchigia', 'Rivalsa']
        },
        {
            id: 'ztl-notifiche-guida',
            slug: 'ztl-e-notifiche-multe',
            title: 'ZTL e notifiche',
            mainEntity: 'Comune',
            category: 'mobilita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come funzionano i varchi ZTL, come richiedere permessi e cosa fare se ricevi una notifica.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Le Zone a Traffico Limitato (ZTL) sono aree urbane dove l\'accesso è riservato solo ad alcune categorie di veicoli o in certi orari. L\'accesso non autorizzato è rilevato da telecamere e comporta una sanzione automatica.',
            prerequisites: ['Targa del veicolo'],
            whenToDo: 'Prima di entrare in un centro storico sconosciuto o se devi trasportare una persona disabile in area ZTL.',
            doNow: [
                'Controlla i cartelli stradali all\'ingresso: il pannello luminoso deve indicare "Varco Attivo" (non si passa) o "Varco Non Attivo" (si passa).',
                'Se hai un pass disabili, comunica la targa al Comune di destinazione prima di entrare (o entro le 48h successive, a seconda del regolamento locale).',
                'Verifica le fasce orarie sul sito del Comune (molte ZTL sono libere la notte o la domenica).',
                'Usa app di navigazione aggiornate (es. Waze o Google Maps) che segnalano la presenza di varchi.',
                'Se ricevi una multa, verifica che la foto mostri chiaramente la targa e che il varco fosse correttamente segnalato.'
            ],
            steps: [
                'Controlla i cartelli stradali all\'ingresso: il pannello luminoso deve indicare "Varco Attivo" (non si passa) o "Varco Non Attivo" (si passa).',
                'Se hai un pass disabili, comunica la targa al Comune di destinazione prima di entrare (o entro le 48h successive, a seconda del regolamento locale).',
                'Verifica le fasce orarie sul sito del Comune (molte ZTL sono libere la notte o la domenica).',
                'Usa app di navigazione aggiornate (es. Waze o Google Maps) che segnalano la presenza di varchi.',
                'Se ricevi una multa, verifica che la foto mostri chiaramente la targa e che il varco fosse correttamente segnalato.'
            ],
            dontDo: [
                'Non entrare sperando che la telecamera sia spenta: i sistemi moderni hanno tassi di errore quasi nulli.',
                'Non seguire altri veicoli (es. taxi o bus) pensando che la strada sia aperta a tutti.',
                'Non dimenticare che ogni singolo passaggio sotto un varco diverso può generare una multa separata (anche se nello stesso tragitto).'
            ],
            commonErrors: [
                'Confondere la ZTL con le zone pedonali (dove non passano nemmeno i residenti).',
                'Entrare con un veicolo elettrico senza averlo registrato (molti comuni offrono l\'accesso gratuito ma serve la registrazione della targa).',
                'Sbagliare l\'orario di uscita: se entri quando è libero ma esci quando è attivo, vieni multato.'
            ],
            askHelpWhen: [
                'Se hai ricevuto una multa nonostante avessi un permesso valido.',
                'Se devi entrare per un\'emergenza medica (spesso si può regolarizzare a posteriori con documentazione del pronto soccorso).'
            ],
            whoCanHelp: [
                'Ufficio Mobilità del Comune',
                'Polizia Locale (Ufficio ZTL)',
                'Gestore dei parcheggi comunali'
            ],
            whereToDo: 'Sito web del Comune o sportelli mobilità.',
            timeToComplete: '5 minuti per la verifica online.',
            practicalDisclaimer: 'Esistono anche le ZEL (Zone a Emissioni Limitate) dove l\'accesso dipende dalla classe Euro del veicolo.',
            sources: [
                {
                    title: 'Regolamento ZTL (Esempio Roma/Milano)',
                    organization: 'Comune di residenza',
                    url: 'https://www.comune.roma.it/',
                    type: 'official',
                    usedFor: 'Esempi di regole di accesso.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Varco attivo/non attivo verificato',
                'Orari ZTL consultati',
                'Targa registrata (se elettrica/disabili)',
                'Navigatore configurato',
                'Permessi temporanei richiesti'
            ],
            relatedGlossaryTerms: ['Varco attivo', 'Area C / Area B', 'CUDE (per ZTL)']
        },
        {
            id: 'portale-automobilista-servizi',
            slug: 'portale-dell-automobilista-guida-servizi',
            title: 'Portale dell’Automobilista',
            mainEntity: 'Ministero delle Infrastrutture e dei Trasporti',
            category: 'mobilita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come navigare nel sito ufficiale della Motorizzazione per gestire patente e veicoli.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il Portale dell\'Automobilista è il punto di riferimento digitale per ogni guidatore. Permette di consultare i dati della propria patente, verificare le scadenze della revisione, pagare i bollettini per le pratiche motorizzazione e molto altro.',
            prerequisites: ['SPID o CIE per i servizi personali'],
            whenToDo: 'Sempre utile per monitorare scadenze o prima di vendere/comprare un veicolo.',
            doNow: [
                'Effettua il login con SPID per accedere al tuo "Fascicolo Conducente".',
                'Verifica la scadenza della tua patente e il saldo punti.',
                'Usa il servizio "Verifica Revisione" inserendo la targa per vedere l\'ultima revisione effettuata e i km rilevati.',
                'Scarica l\'App "iPatente" per avere tutto sincronizzato sul tuo smartphone.',
                'Utilizza la sezione "Pagamento Pratiche Online" se devi fare un rinnovo o duplicato documenti.'
            ],
            steps: [
                'Effettua il login con SPID per accedere al tuo "Fascicolo Conducente".',
                'Verifica la scadenza della tua patente e il saldo punti.',
                'Usa il servizio "Verifica Revisione" inserendo la targa per vedere l\'ultima revisione effettuata e i km rilevati.',
                'Scarica l\'App "iPatente" per avere tutto sincronizzato sul tuo smartphone.',
                'Utilizza la sezione "Pagamento Pratiche Online" se devi fare un rinnovo o duplicato documenti.'
            ],
            dontDo: [
                'Non fidarti di siti simili che chiedono pagamenti per servizi che sul portale ufficiale sono gratuiti.',
                'Non dimenticare di aggiornare la tua email nel profilo per ricevere gli avvisi automatici di scadenza.'
            ],
            commonErrors: [
                'Pensare che il portale mostri le multe (non è così, le multe sono gestite dai singoli comuni o organi accertatori).',
                'Cercare i dati di un veicolo non intestato a sé (puoi vedere solo i dati pubblici come la revisione, non i dati personali del proprietario).'
            ],
            askHelpWhen: [
                'Se riscontri errori nei dati tecnici del tuo veicolo.',
                'Se il sistema non riconosce la tua patente nonostante sia valida.'
            ],
            whoCanHelp: [
                'Assistenza tecnica del Portale (800 23 23 23)',
                'Uffici della Motorizzazione Civile territoriale'
            ],
            whereToDo: 'Online sul sito www.ilportaledellautomobilista.it.',
            timeToComplete: '10 minuti per l\'esplorazione completa.',
            practicalDisclaimer: 'Il portale è gestito direttamente dal Dipartimento per i Trasporti, garantendo l\'ufficialità dei dati.',
            sources: [
                {
                    title: 'Home Portale dell\'Automobilista',
                    organization: 'Ministero delle Infrastrutture e dei Trasporti',
                    url: 'https://www.ilportaledellautomobilista.it/',
                    type: 'official',
                    usedFor: 'Accesso a tutti i servizi motorizzazione.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Login SPID effettuato',
                'Saldo punti controllato',
                'Scadenza revisione verificata',
                'App iPatente installata',
                'Email profilo aggiornata'
            ],
            relatedGlossaryTerms: ['Motorizzazione', 'Revisione ministeriale', 'iPatente']
        }
    ]
};
