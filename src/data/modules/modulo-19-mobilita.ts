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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2024-05-14'
                },
                {
                    title: 'Guida alle multe',
                    organization: 'Polizia di Stato',
                    url: 'https://www.poliziadistato.it/articolo/13',
                    type: 'official',
                    usedFor: 'Modalità di notifica e pagamento.',
                    lastCheckedAt: '2024-05-14'
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2024-05-14'
                },
                {
                    title: 'Servizi App IO',
                    organization: 'App IO',
                    url: 'https://io.italia.it/',
                    type: 'official',
                    usedFor: 'Integrazione multe e pagamenti.',
                    lastCheckedAt: '2024-05-14'
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
            id: 'rinnovo-patente',
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2024-05-14'
                },
                {
                    title: 'Circolare rinnovo patente',
                    organization: 'Ministero delle Infrastrutture e dei Trasporti',
                    url: 'https://www.mit.gov.it/',
                    type: 'official',
                    usedFor: 'Normativa e tariffe.',
                    lastCheckedAt: '2024-05-14'
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2024-05-14'
                },
                {
                    title: 'Tassa automobilistica',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/portale/web/guest/schede/pagamenti/tassa-automobilistica',
                    type: 'official',
                    usedFor: 'Informazioni generali e normativa.',
                    lastCheckedAt: '2024-05-14'
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
        }
    ]
};
