import { Module } from '@/types';

export const modulo_18_consumatori: Module = {
    id: 'modulo-18-consumatori',
    lastUpdated: '2026-08-27',
    title: 'Modulo 18: Diritti dei Consumatori',
    description: 'Conosci i tuoi diritti quando acquisti online o in negozio: resi, garanzie e rimborsi spiegati in modo semplice.',
    category: 'consumatori',
    difficulty: 'base',
    icon: 'ShoppingBag',
    themeColor: 'accent-green',
    lessons: [
        {
            id: 'reso-online',
            slug: 'reso-online-come-funziona',
            title: 'Reso online',
            mainEntity: 'AgCM',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 4,
            summary: 'Come restituire un prodotto acquistato su internet e ottenere il rimborso.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il reso online è un diritto garantito dal Codice del Consumo. Permette di restituire un bene acquistato a distanza senza dover fornire spiegazioni. Il venditore deve rimborsare il prezzo pagato, solitamente entro 14 giorni dalla comunicazione.',
            prerequisites: ['Acquisto effettuato online or fuori dai locali commerciali', 'Prodotto integro (per quanto possibile)'],
            whenToDo: 'Quando ricevi un prodotto che non ti piace o non risponde alle tue aspettative.',
            doNow: [
                'Controlla la politica di reso sul sito del venditore.',
                'Compila il modulo di reso online o invia una comunicazione scritta.',
                'Imballa accuratamente il prodotto nella confezione originale.',
                'Applica l\'etichetta di spedizione fornita o prenota il corriere.',
                'Conserva la ricevuta di spedizione fino all\'avvenuto rimborso.'
            ],
            steps: [
                'Controlla la politica di reso sul sito del venditore.',
                'Compila il modulo di reso online o invia una comunicazione scritta.',
                'Imballa accuratamente il prodotto nella confezione originale.',
                'Applica l\'etichetta di spedizione fornita o prenota il corriere.',
                'Conserva la ricevuta di spedizione fino all\'avvenuto rimborso.'
            ],
            dontDo: [
                'Non rimuovere i cartellini o danneggiare le scatole originali se vuoi essere sicuro del rimborso.',
                'Non superare il termine dei 14 giorni per la comunicazione del recesso.',
                'Non spedire il pacco senza tracciabilità.'
            ],
            commonErrors: [
                'Dimenticare di inserire il modulo di reso all\'interno del pacco.',
                'Pensare che il reso sia gratuito per legge (le spese di spedizione possono essere a carico del consumatore se specificato).',
                'Usare il prodotto prima di renderlo (può comportare una diminuzione del rimborso).'
            ],
            askHelpWhen: [
                'Se il venditore rifiuta il reso senza motivo valido.',
                'Se il rimborso non arriva dopo 30 giorni.'
            ],
            whoCanHelp: [
                'Associazioni dei Consumatori (Altroconsumo, UNC, ecc.)',
                'Centro Europeo Consumatori (per acquisti in UE)',
                'AGCM (Autorità Garante della Concorrenza e del Mercato)'
            ],
            whereToDo: 'Online tramite il sito del venditore.',
            timeToComplete: '15 minuti per preparare il pacco.',
            practicalDisclaimer: 'Alcuni prodotti come software sigillati, beni personalizzati o intimi non possono essere resi.',
            sources: [
                {
                    title: 'Il diritto di recesso',
                    organization: 'Ministero delle Imprese e del Made in Italy',
                    url: 'https://www.mimit.gov.it/it/mercato-e-consumatori/tutela-del-consumatore/diritti-dei-consumatori/diritto-di-recesso',
                    type: 'official',
                    usedFor: 'Normativa di riferimento.',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Acquisti online: i consigli per evitare problemi',
                    organization: 'Altroconsumo',
                    url: 'https://www.altroconsumo.it/',
                    type: 'nonprofit',
                    usedFor: 'Consigli pratici e modelli.',
                    lastCheckedAt: '2026-05-14'
                }
            ],
            checklist: [
                'Comunicazione inviata entro 14gg',
                'Prodotto imballato correttamente',
                'Etichetta applicata',
                'Foto del prodotto prima di chiudere il pacco',
                'Ricevuta spedizione salvata'
            ],
            relatedGlossaryTerms: ['Diritto di recesso', 'Codice del Consumo', 'Rimborso']
        },
        {
            id: 'garanzia-legale',
            slug: 'garanzia-legale-2-anni',
            title: 'Garanzia legale 2 anni',
            mainEntity: 'AgCM',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Tutto quello che devi sapere sulla protezione obbligatoria di 24 mesi su ogni acquisto.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'In Italia e in UE, ogni bene di consumo ha una garanzia legale di 2 anni. Il responsabile è il venditore, non il produttore. Copre i difetti di conformità esistenti al momento della consegna.',
            prerequisites: ['Scontrino, fattura o prova di acquisto', 'Bene acquistato da un venditore professionista'],
            whenToDo: 'Quando un prodotto smette di funzionare correttamente o mostra difetti non causati da te entro 2 anni.',
            doNow: [
                'Recupera la prova d\'acquisto (scontrino o transazione bancaria).',
                'Contatta the venditore (non il centro assistenza del produttore, se preferisci esercitare la legale).',
                'Descrivi il difetto e richiedi la riparazione o la sostituzione gratuita.',
                'Se la riparazione è impossibile o troppo costosa, richiedi una riduzione del prezzo o il rimborso.',
                'Consegna il prodotto e fatti rilasciare una ricevuta di presa in carico.'
            ],
            steps: [
                'Recupera la prova d\'acquisto (scontrino o transazione bancaria).',
                'Contatta the venditore (non il centro assistenza del produttore, se preferisci esercitare la legale).',
                'Descrivi il difetto e richiedi la riparazione o la sostituzione gratuita.',
                'Se la riparazione è impossibile o troppo costosa, richiedi una riduzione del prezzo o il rimborso.',
                'Consegna il prodotto e fatti rilasciare una ricevuta di presa in carico.'
            ],
            dontDo: [
                'Non cercare di riparare il prodotto da solo o presso centri non autorizzati (fa decadere la garanzia).',
                'Non smarrire lo scontrino (fai sempre una foto perché la carta termica sbiadisce).',
                'Non accettare che ti vengano addebitate spese di spedizione o manodopera.'
            ],
            commonErrors: [
                'Pensare che la garanzia sia di un solo anno (1 anno è solo per acquisti con Partita IVA).',
                'Rivolgersi solo al produttore (il venditore è l\'unico obbligato per legge).',
                'Confondere la garanzia legale con quella "commerciale" aggiuntiva.'
            ],
            askHelpWhen: [
                'Se il venditore sostiene che il danno è "usura normale" ma tu non sei d\'accordo.',
                'Se i tempi di riparazione superano i 60 giorni.'
            ],
            whoCanHelp: [
                'Sportelli del Consumatore',
                'Camere di Commercio (servizio mediazione)',
                'AGCM (segnalazione pratica commerciale scorretta)'
            ],
            whereToDo: 'Presso il punto vendita fisico o tramite il servizio clienti online.',
            timeToComplete: '20 minuti per la segnalazione.',
            practicalDisclaimer: 'La garanzia non copre i danni accidentali (es. caduta del telefono).',
            sources: [
                {
                    title: 'Garanzia legale di conformità',
                    organization: 'AGCM',
                    url: 'https://www.agcm.it/consumatore/diritti-del-consumatore/garanzia-legale',
                    type: 'official',
                    usedFor: 'Definizione e obblighi del venditore.',
                    lastCheckedAt: '2026-05-16'
                },
                {
                    title: 'Your Europe: Garanzie e resi',
                    organization: 'Unione Europea',
                    url: 'https://europa.eu/youreurope/citizens/consumers/shopping/guarantees-returns/index_it.htm',
                    type: 'institutional',
                    usedFor: 'Quadro normativo europeo.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Scontrino trovato',
                'Difetto verificato entro i 2 anni',
                'Contatto venditore effettuato',
                'Richiesta riparazione/sostituzione',
                'Ricevuta di consegna ottenuta'
            ],
            relatedGlossaryTerms: ['Difetto di conformità', 'Venditore', 'Onere della prova']
        },
        {
            id: 'pacco-smarrito',
            slug: 'pacco-smarrito-o-danneggiato-cosa-fare',
            title: 'Pacco smarrito o danneggiato',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Cosa fare se il tuo acquisto online non arriva o arriva rotto.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Venditore / Corriere',
            synthesis: 'Il venditore è responsabile della consegna fino a quando non ricevi il pacco.',
            steps: [
                'Controlla il tracking per vedere dove si trova il pacco',
                'Se risulta consegnato ma non lo hai, contatta subito il venditore',
                'Se arriva danneggiato, firma "con riserva" se possibile o fai foto subito',
                'Invia un reclamo scritto al venditore chiedendo rispedizione o rimborso'
            ],
            checklist: [
                'Tracking verificato',
                'Foto del danno fatte',
                'Reclamo inviato'
            ],
            sources: [
                {
                    title: 'E-commerce: i diritti in caso di mancata consegna',
                    organization: 'Altroconsumo',
                    url: 'https://www.altroconsumo.it/',
                    type: 'nonprofit',
                    usedFor: 'Consigli pratici',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'prodotto-difettoso',
            slug: 'prodotto-difettoso-cosa-fare',
            title: 'Prodotto difettoso',
            mainEntity: 'AgCM',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Passaggi pratici per gestire un oggetto che arriva rotto o non conforme.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Un prodotto è difettoso se non funziona come promesso o se presenta danni strutturali. Hai diritto al ripristino della conformità senza spese. Se il difetto si manifesta entro 1 anno, si presume esistesse già al momento dell\'acquisto.',
            prerequisites: ['Il prodotto non è conforme alla descrizione o all\'uso previsto'],
            whenToDo: 'Appena ti accorgi del malfunzionamento.',
            doNow: [
                'Scatta foto o gira un video del difetto.',
                'Invia un reclamo scritto (mail o PEC) al venditore mettendo in mora.',
                'Indica chiaramente se preferisci la sostituzione o la riparazione.',
                'Metti a disposizione il bene per il ritiro o portalo in negozio.',
                'Prendi nota di ogni comunicazione e nome dell\'operatore.'
            ],
            steps: [
                'Scatta foto o gira un video del difetto.',
                'Invia un reclamo scritto (mail o PEC) al venditore mettendo in mora.',
                'Indica chiaramente se preferisci la sostituzione o la riparazione.',
                'Metti a disposizione il bene per il ritiro o portalo in negozio.',
                'Prendi nota di ogni comunicazione e nome dell\'operatore.'
            ],
            dontDo: [
                'Non continuare a usare un prodotto difettoso, specialmente se pericoloso.',
                'Non accettare "buoni acquisto" se hai diritto al rimborso in denaro.',
                'Non pagare per il preventivo di riparazione se il bene è in garanzia.'
            ],
            commonErrors: [
                'Aspettare troppo tempo per segnalare il difetto.',
                'Non documentare lo stato del bene prima della spedizione.',
                'Dimenticare di includere tutti gli accessori originali nella restituzione.'
            ],
            askHelpWhen: [
                'Se il prodotto esplode, prende fuoco o causa danni a persone (sicurezza prodotti).',
                'Se il venditore è sparito o è fallito.'
            ],
            whoCanHelp: [
                'Associazioni Consumatori',
                'Avvocato (per danni ingenti)',
                'Forze dell\'ordine (se il prodotto è contraffatto o pericoloso)'
            ],
            whereToDo: 'Contatto diretto col punto vendita o assistenza clienti.',
            timeToComplete: '30 minuti.',
            practicalDisclaimer: 'Conserva sempre gli imballaggi originali per almeno i primi 14-30 giorni.',
            sources: [
                {
                    title: 'Responsabilità per prodotti difettosi',
                    organization: 'Commissione Europea',
                    url: 'https://ec.europa.eu/info/law/law-topic/consumer-protection-law_it',
                    type: 'institutional',
                    usedFor: 'Informazioni sulla sicurezza prodotti.',
                    lastCheckedAt: '2026-05-16'
                },
                {
                    title: 'Guida pratica reclami',
                    organization: 'Unione Nazionale Consumatori',
                    url: 'https://www.consumatori.it/',
                    type: 'nonprofit',
                    usedFor: 'Modulistica reclami.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Foto del difetto fatte',
                'Reclamo scritto inviato',
                'Scelta riparazione/sostituzione indicata',
                'Accessori pronti per il reso',
                'Scadenza 2 anni controllata'
            ],
            relatedGlossaryTerms: ['Messa in mora', 'Conformità', 'Vizio occulto']
        },
        {
            id: 'chargeback-pagamento',
            slug: 'chargeback-contestare-pagamento-carta',
            title: 'Contestare pagamento carta / Chargeback',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'intermedia',
            estimatedMinutes: 10,
            summary: 'Come chiedere alla banca di annullare un pagamento fatto con carta in caso di truffa o mancata consegna.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Banca / Circuito Carta',
            synthesis: 'Il chargeback è una procedura per stornare transazioni non autorizzate o irregolari.',
            steps: [
                'Contatta il venditore per provare a risolvere bonariamente',
                'Se non risolvi, contatta la tua banca (entro 60-120 giorni)',
                'Compila il modulo di contestazione transazione',
                'Allega prove (mail, screenshot, ricevuta ordine non evaso)',
                'Attendi l\'esito della procedura di storno'
            ],
            checklist: [
                'Tentativo contatto venditore fatto',
                'Modulo contestazione inviato',
                'Prove allegate'
            ],
            sources: [
                {
                    title: 'Come contestare un addebito sulla carta',
                    organization: 'Altroconsumo',
                    url: 'https://www.altroconsumo.it/',
                    type: 'nonprofit',
                    usedFor: 'Guida chargeback',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'paypal-reclamo',
            slug: 'come-fare-reclamo-paypal',
            title: 'PayPal reclamo',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come usare la protezione acquisti di PayPal per riavere i tuoi soldi.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'PayPal',
            synthesis: 'Protezione per prodotti non ricevuti o notevolmente diversi dalla descrizione.',
            steps: [
                'Accedi al tuo conto PayPal e vai nel Centro Risoluzioni',
                'Apri una "Contestazione" per la transazione specifica',
                'Comunica con il venditore tramite PayPal',
                'Se non risolvi, converti la contestazione in "Reclamo" entro 20 giorni',
                'Lascia che PayPal decida dopo aver esaminato le prove'
            ],
            checklist: [
                'Contestazione aperta',
                'Termini rispettati',
                'Conversione in reclamo effettuata'
            ],
            sources: [
                {
                    title: 'Protezione acquisti PayPal',
                    organization: 'PayPal',
                    url: 'https://www.paypal.it/',
                    type: 'platform',
                    usedFor: 'Regole protezione',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'truffa-marketplace',
            slug: 'vinted-subito-marketplace-evitare-truffe',
            title: 'Vinted/Subito/Marketplace: truffe',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Come riconoscere e difendersi dai raggiri sui siti di compravendita tra privati.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Forze dell\'ordine / Piattaforme',
            synthesis: 'Consigli per acquistare e vendere in sicurezza sull\'usato.',
            steps: [
                'Diffida da chi vuole spostare la conversazione fuori dalla piattaforma (es. su WhatsApp)',
                'Non pagare mai con metodi non tracciati (es. ricarica Postepay, "amici e familiari" PayPal)',
                'Controlla le recensioni del venditore e la data di creazione del profilo',
                'Se vendi, non spedire prima di aver ricevuto conferma del pagamento nel tuo wallet ufficiale'
            ],
            checklist: [
                'Pagamento sicuro usato',
                'Conversione rimasta in app',
                'Feedback controllati'
            ],
            sources: [
                {
                    title: 'Truffe sui siti di annunci',
                    organization: 'Polizia Postale',
                    url: 'https://www.commissariatodips.it/',
                    type: 'official',
                    usedFor: 'Prevenzione truffe',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'recesso-14-giorni',
            slug: 'recesso-entro-14-giorni-guida',
            title: 'Recesso entro 14 giorni',
            mainEntity: 'AgCM',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 3,
            summary: 'Il "diritto di ripensamento": come annullare un contratto senza penali.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il diritto di recesso (o ripensamento) si applica ai contratti conclusi fuori dai locali commerciali (online, telefono, per strada). Hai 14 giorni di tempo dalla consegna del bene o dalla firma del contratto per annullare tutto.',
            prerequisites: ['Contratto firmato a distanza o fuori negozio'],
            whenToDo: 'Quando ti penti di un acquisto o di un cambio fornitore (luce, gas, telefonia) fatto via telefono o porta a porta.',
            doNow: [
                'Individua il modulo di recesso (solitamente allegato al contratto).',
                'Invia il modulo tramite Raccomandata A/R o PEC per avere prova legale.',
                'Se è un servizio (es. telefonia), chiedi il ripristino della situazione precedente.',
                'Se è un bene fisico, restituiscilo entro ulteriori 14 giorni dalla comunicazione.',
                'Verifica l\'avvenuto storno dell\'addebito sul conto o carta.'
            ],
            steps: [
                'Individua il modulo di recesso (solitamente allegato al contratto).',
                'Invia il modulo tramite Raccomandata A/R o PEC per avere prova legale.',
                'Se è un servizio (es. telefonia), chiedi il ripristino della situazione precedente.',
                'Se è un bene fisico, restituiscilo entro ulteriori 14 giorni dalla comunicazione.',
                'Verifica l\'avvenuto storno dell\'addebito sul conto o carta.'
            ],
            dontDo: [
                'Non chiamare solo il call center: la telefonata non ha valore legale senza una traccia scritta.',
                'Non aspettare il 15° giorno: il termine è perentorio.',
                'Non aver paura di ritorsioni o penali: il recesso è gratuito per legge (salvo costi di spedizione).'
            ],
            commonErrors: [
                'Confondere il recesso con la disdetta (la disdetta interrompe un contratto già avviato, il recesso lo annulla dall\'inizio).',
                'Pensare che valga anche per acquisti fatti fisicamente in negozio (in quel caso è a discrezione del negoziante).',
                'Non monitorare il conto corrente dopo l\'invio della raccomandata.'
            ],
            askHelpWhen: [
                'Se l\'azienda continua a inviare fatture dopo il recesso.',
                'Se sei stato vittima di una firma falsa o attivazione non richiesta.'
            ],
            whoCanHelp: [
                'Associazioni Consumatori',
                'ARERA (per energia e gas)',
                'AGCOM (per telefonia)'
            ],
            whereToDo: 'Tramite Posta (Raccomandata) o Posta Elettronica Certificata (PEC).',
            timeToComplete: '15 minuti per inviare una PEC o andare in Posta.',
            practicalDisclaimer: 'Il termine di 14 giorni si estende a 12 mesi se il professionista non ti ha informato correttamente del tuo diritto di recesso.',
            sources: [
                {
                    title: 'Diritto di recesso: 14 giorni per ripensarci',
                    organization: 'Unione Nazionale Consumatori',
                    url: 'https://www.consumatori.it/recesso-ripensamento/',
                    type: 'nonprofit',
                    usedFor: 'Dettagli sul diritto di ripensamento.',
                    lastCheckedAt: '2026-05-16'
                },
                {
                    title: 'Codice del Consumo',
                    organization: 'Gazzetta Ufficiale',
                    url: 'https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2005-10-08&atto.codiceRedazionale=005G0232',
                    type: 'official',
                    usedFor: 'Testo di legge.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Termine 14gg rispettato',
                'Invio tramite PEC o Raccomandata',
                'Modulo compilato correttamente',
                'Copia del documento d\'identità allegata',
                'Ricevuta di spedizione conservata'
            ],
            relatedGlossaryTerms: ['Ripensamento', 'PEC', 'Locali commerciali']
        },
        {
            id: 'reclamo-telefonico-agcom',
            slug: 'reclamo-operatore-telefonico-conciliaweb-agcom',
            title: 'Reclamo telefonia e Conciliaweb',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'intermedia',
            estimatedMinutes: 15,
            summary: 'Come risolvere controversie con operatori telefonici tramite l\'Autorità Garante.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'AGCOM',
            synthesis: 'Conciliaweb è la piattaforma obbligatoria per risolvere liti con gestori di telefonia e pay-tv.',
            steps: [
                'Invia un reclamo formale al tuo operatore (PEC o raccomandata)',
                'Attendi 45 giorni per la risposta',
                'Se la risposta è negativa o manca, accedi a Conciliaweb con SPID',
                'Inserisci i dati della controversia e chiedi un indennizzo',
                'Partecipa all\'udienza di conciliazione online'
            ],
            checklist: [
                'Reclamo formale inviato',
                'Accesso Conciliaweb effettuato',
                'Prove (fatture, contratti) allegate'
            ],
            sources: [
                {
                    title: 'Conciliaweb',
                    organization: 'AGCOM',
                    url: 'https://conciliaweb.agcom.it/',
                    type: 'official',
                    usedFor: 'Piattaforma conciliazione',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'bollette-contestate',
            slug: 'bollette-luce-gas-contestate-cosa-fare',
            title: 'Bollette contestate',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Cosa fare se ricevi una bolletta energetica troppo alta o con consumi stimati errati.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'ARERA / Sportello Consumatore',
            synthesis: 'Procedura per contestare importi non dovuti e chiedere la rettifica.',
            steps: [
                'Verifica l\'autolettura e confrontala con i dati in bolletta',
                'Invia un reclamo scritto al fornitore contestando l\'importo',
                'Non sospendere il pagamento (paga almeno la quota non contestata se possibile)',
                'Se il reclamo non basta, attiva la conciliazione presso lo Sportello per il Consumatore ARERA'
            ],
            checklist: [
                'Autolettura fatta',
                'Reclamo inviato',
                'Richiesta rettifica inoltrata'
            ],
            sources: [
                {
                    title: 'Reclami e conciliazione',
                    organization: 'ARERA',
                    url: 'https://www.arera.it/',
                    type: 'official',
                    usedFor: 'Tutela consumatori energia',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'abbonamenti-non-richiesti',
            slug: 'disattivare-abbonamenti-non-richiesti-smartphone',
            title: 'Abbonamenti non richiesti',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come bloccare i servizi a sovrapprezzo (VAS) che prosciugano il credito dello smartphone.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Operatore Telefonico / AGCOM',
            synthesis: 'I servizi a sovrapprezzo possono essere bloccati definitivamente chiedendo il "blacklisting" al proprio operatore.',
            steps: [
                'Chiama il servizio clienti o usa l\'app del tuo operatore',
                'Chiedi il blocco (barring) dei servizi VAS a sovrapprezzo',
                'Se ti sono già stati scalati soldi, chiedi il rimborso per attivazione non richiesta',
                'Il rimborso deve essere erogato entro pochi giorni'
            ],
            checklist: [
                'Blocco attivato',
                'Richiesta rimborso fatta',
                'Credito verificato'
            ],
            sources: [
                {
                    title: 'Servizi a sovrapprezzo',
                    organization: 'AGCOM',
                    url: 'https://www.agcom.it/',
                    type: 'official',
                    usedFor: 'Regole blocco',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'salvare-prove-acquisto',
            slug: 'come-salvare-prove-acquisto-scontrini',
            title: 'Come salvare prove di acquisto',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Metodi efficaci per non perdere gli scontrini e far valere la garanzia.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Esperto Consumi',
            synthesis: 'La prova d\'acquisto è l\'unico modo per far valere i propri diritti; ecco come conservarla.',
            steps: [
                'Fai una foto allo scontrino appena emesso (la carta termica sbiadisce col calore)',
                'Salva le conferme d\'ordine email in una cartella specifica',
                'Usa app per la gestione degli scontrini o caricali su un cloud',
                'Conserva anche le transazioni bancarie come prova supplementare'
            ],
            checklist: [
                'Foto fatte',
                'Email archiviate',
                'Cloud aggiornato'
            ],
            sources: [
                {
                    title: 'Garanzia legale: scontrino smarrito',
                    organization: 'Altroconsumo',
                    url: 'https://www.altroconsumo.it/',
                    type: 'nonprofit',
                    usedFor: 'Consigli conservazione',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'switching-fornitore-arera',
            slug: 'come-cambiare-fornitore-luce-o-gas-arera',
            title: 'Come cambiare fornitore di luce o gas',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 12,
            mainEntity: 'ARERA',
            summary: 'Si stipula il nuovo contratto: il venditore entrante attiva lo switching e recede dal vecchio. Per i domestici ARERA indica che il cambio non ha costi di disdetta, salvi bollo e oneri di legge.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-08-14',
            steps: [
                'Apri le pagine ARERA «single digital gateway» elettricità e gas: spiegano voltura e cambio fornitore.',
                'Confronta le offerte; quando scegli, firmi solo il nuovo contratto. Il nuovo venditore gestisce recesso e switching.',
                'Non disdire da solo il vecchio contratto se stai solo cambiando venditore: lo fa il nuovo, secondo ARERA.',
                'Se ti trasferisci e l’utenza è già attiva, chiedi una voltura (eventualmente con cambio fornitore contestuale, dove previsto).',
                'In caso di problemi: reclamo scritto al venditore, poi Servizio Conciliazione ARERA.',
            ],
            commonErrors: ['Disdire il vecchio contratto e restare senza fornitura', 'Confondere voltura e switching'],
            dontDo: ['Non firmare a un venditore porta a porta senza leggere le condizioni ARERA e il contratto'],
            checklist: ['POD/PDR a portata di mano', 'Nuovo contratto conservato', 'Niente doppia disdetta'],
            faqs: [
                { q: 'Il cambio è a pagamento?', a: 'ARERA: per i clienti del servizio elettrico/gas il cambio fornitore non ha costi, salvi quelli legati alla stipula (es. bollo se dovuto). Verifica la pagina aggiornata.' },
                { q: 'Perdo il bonus sociale?', a: 'I bonus economici sono automatici con ISEE, non si «domandano» al venditore. Dopo uno switching resta la DSU: vedi ARERA bonus.' },
            ],
            officialLinksV2: [
                { sourceId: 'areraSwitchingElettricita', useWhen: 'Cambio fornitore e voltura luce', beforeOpening: [] },
                { sourceId: 'areraSwitchingGas', useWhen: 'Cambio fornitore e voltura gas', beforeOpening: [] },
                { sourceId: 'areraBonusCome', useWhen: 'Bonus sociale automatico con ISEE', beforeOpening: [] },
            ],
            sources: [
                {
                    title: 'ARERA — servizio elettrico, cambiare fornitore',
                    organization: 'ARERA',
                    url: 'https://www.arera.it/single-digital-gateway-elettricita',
                    type: 'official',
                    usedFor: 'Switching e voltura luce',
                    lastCheckedAt: '2026-08-14',
                },
                {
                    title: 'ARERA — servizio gas, cambiare fornitore',
                    organization: 'ARERA',
                    url: 'https://www.arera.it/single-digital-gateway-gas',
                    type: 'official',
                    usedFor: 'Switching e voltura gas',
                    lastCheckedAt: '2026-08-14',
                },
            ],
        },
        {
            id: 'reclamo-conciliazione-arera',
            slug: 'reclamo-e-conciliazione-arera',
            title: 'Reclamo e conciliazione ARERA',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'intermedia',
            estimatedMinutes: 12,
            mainEntity: 'ARERA',
            summary: 'Prima il reclamo al venditore. Poi il Servizio Conciliazione ARERA, gratuito, è il tentativo obbligatorio prima della causa per energia, gas, idrico e teleriscaldamento (rifiuti: disciplina diversa).',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-08-14',
            steps: [
                'Invio reclamo scritto al venditore (o al distributore solo per allacci/misura, secondo ARERA).',
                'Attendi i termini indicati da ARERA (la FAQ conciliazione cita, tra l’altro, 40 giorni per l’energia; verifica la pagina per idrico e rifiuti).',
                'Se non si risolve, attiva il Servizio Conciliazione ARERA (web o call conference con conciliatore).',
                'Il tentativo è condizione per andare in giudizio nelle materie indicate dal TICO (delibera 209/2016/E/com), salvo eccezioni (es. rifiuti).',
                'Conserva reclamo, risposte e verbale di conciliazione.',
            ],
            commonErrors: ['Saltare il reclamo e aprire subito la conciliazione', 'Usare il form reclami AdeR per una bolletta luce'],
            dontDo: ['Non sospendere del tutto i pagamenti senza aver letto le tutele ARERA sulla morosità'],
            checklist: ['Reclamo inviato e protocollato', 'Termini scaduti o risposta insoddisfacente', 'Domanda di conciliazione presentata'],
            faqs: [
                { q: 'Costa?', a: 'ARERA descrive il Servizio Conciliazione come gratuito per i clienti finali.' },
                { q: 'Posso usare un organismo ADR?', a: 'Sì, per i consumatori domestici ARERA cita anche organismi ADR iscritti e Camere di commercio aderenti alla convenzione.' },
            ],
            officialLinksV2: [
                { sourceId: 'areraConciliazione', useWhen: 'FAQ e accesso al Servizio Conciliazione', beforeOpening: [] },
                { sourceId: 'areraSwitchingElettricita', useWhen: 'A chi fare reclamo (venditore vs distributore)', beforeOpening: [] },
            ],
            sources: [
                {
                    title: 'Servizio Conciliazione ARERA',
                    organization: 'ARERA',
                    url: 'https://www.arera.it/consumatori/conciliazione/servizio-conciliazione-domande-e-risposte',
                    type: 'official',
                    usedFor: 'Tentativo obbligatorio e tempi',
                    lastCheckedAt: '2026-08-14',
                },
            ],
        }
    ]
};

