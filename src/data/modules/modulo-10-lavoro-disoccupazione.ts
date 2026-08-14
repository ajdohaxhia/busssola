import { Module } from '@/types';

export const modulo_10_lavoro_disoccupazione: Module = {
    id: 'modulo-10-lavoro-disoccupazione',
    lastUpdated: '2026-05-14',
    title: 'Lavoro e Disoccupazione',
    description: 'Guida ai principali servizi digitali legati al mondo del lavoro, al sostegno al reddito e alla cessazione dei rapporti lavorativi.',
    category: 'lavoro',
    difficulty: 'base',
    icon: 'Briefcase',
    themeColor: 'accent-green',
    lessons: [
        {
            id: 'naspi-domanda',
            slug: 'come-fare-domanda-naspi',
            title: 'Come fare domanda NASpI',
            mainEntity: 'INPS',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 20,
            summary: 'Guida passo dopo passo per richiedere l\'indennità di disoccupazione all\'INPS dopo la perdita del lavoro.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-08-14',
            prerequisites: [
                'Perdita involontaria del lavoro (licenziamento o scadenza contratto)',
                'Almeno 13 settimane di contributi negli ultimi 4 anni',
                'Credenziali SPID, CIE o CNS'
            ],
            whatToPrepare: [
                'Codice Fiscale',
                'IBAN per l\'accredito (intestato o cointestato)',
                'Ultimo contratto di lavoro o lettera di licenziamento',
                'Buste paga degli ultimi mesi (per sicurezza)'
            ],
            estimatedCosts: 'Gratuito',
            timeToComplete: '20-30 minuti',
            steps: [
                'Accedi al sito INPS tramite SPID, CIE o CNS',
                'Cerca il servizio "NASpI: indennità mensile di disoccupazione"',
                'Seleziona "Nuova domanda" e verifica i tuoi dati anagrafici',
                'Compila i campi relativi all\'ultimo rapporto di lavoro',
                'Inserisci l\'IBAN per ricevere il pagamento',
                'Dichiara se percepisci altre indennità o redditi',
                'Invia la domanda e scarica la ricevuta di protocollo. Dal 2026, se chiedi l’anticipo per avvio attività, l’erogazione è in due rate (70% e 30%) secondo la legge di Bilancio 2026.',
            ],
            officialLinksV2: [
                {
                    sourceId: 'naspiDomanda',
                    useWhen: 'Per iniziare direttamente la compilazione della domanda online',
                    beforeOpening: ['Assicurati di avere lo SPID a portata di mano', 'Tieni pronto il tuo IBAN']
                },
                {
                    sourceId: 'naspiServizio',
                    useWhen: 'Per leggere tutti i dettagli normativi e i requisiti completi',
                    beforeOpening: ['Utile se hai dubbi sui requisiti contributivi']
                }
            ],
            commonErrors: [
                'Inviare la domanda prima dell\'ultimo giorno di lavoro (va fatta DOPO)',
                'Sbagliare l\'IBAN (l\'accredito fallirà)',
                'Dimenticare di inserire i redditi presunti se si ha una Partita IVA aperta'
            ],
            dontDo: [
                'Non aspettare oltre i 68 giorni dalla fine del lavoro: perderesti il diritto',
                'Non chiudere il conto corrente indicato prima di aver ricevuto i pagamenti'
            ],
            ifYouHaveProblems: [
                'Contatta il Contact Center INPS al numero 803 164',
                'Rivolgiti a un Patronato per assistenza gratuita nella compilazione'
            ],
            checklist: [
                'Ho controllato di avere almeno 13 settimane di contributi',
                'Ho inserito l\'IBAN correttamente',
                'Ho scaricato la ricevuta con il numero di protocollo',
                'So che dovrò fare la DID entro 15 giorni'
            ],
            faqs: [
                { q: 'Entro quando va fatta la domanda NASpI?', a: 'Hai 68 giorni di tempo dalla data di cessazione del rapporto di lavoro. Se la fai entro 8 giorni, la disoccupazione parte subito; altrimenti parte dal giorno dopo la domanda.' },
                { q: 'Cosa succede se trovo un nuovo lavoro?', a: 'Se il lavoro è breve (sotto i 6 mesi) la NASpI viene sospesa. Se superi certi limiti di reddito o durata, decade. Va sempre comunicato all\'INPS tramite NASpI-COM.' },
                { q: 'La NASpI vale per i dipendenti pubblici?', a: 'No, la NASpI è per i lavoratori del settore privato con contratto subordinato. I dipendenti pubblici a tempo indeterminato non ne hanno diritto.' }
            ],
            relatedLessons: ['naspi-stato-controllo', 'naspi-com-variazioni', 'did-procedura-online'],
            sources: [
                {
                    title: 'NASpI: indennità mensile di disoccupazione',
                    organization: 'INPS',
                    url: 'https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.50593.naspi-indennit-mensile-di-disoccupazione.html',
                    type: 'official',
                    usedFor: 'Requisiti, 13 settimane, 68 giorni, DID',
                    lastCheckedAt: '2026-08-14',
                },
                {
                    title: 'NASpI — scheda istituzionale',
                    organization: 'Ministero del Lavoro',
                    url: 'https://lavoro.gov.it/temi-e-priorita/ammortizzatori-sociali/focus-on/indennita-disoccupazione/naspi/pagine/naspi',
                    type: 'official',
                    usedFor: 'Requisiti e misura dell’indennità',
                    lastCheckedAt: '2026-08-14',
                },
            ]
        },
        {
            id: 'naspi-stato-controllo',
            slug: 'come-controllare-stato-naspi',
            title: 'Come controllare lo stato della NASpI',
            mainEntity: 'INPS',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come verificare se la tua domanda è stata accolta e quando arriveranno i pagamenti.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: [
                'Domanda NASpI già inviata',
                'Credenziali SPID, CIE o CNS'
            ],
            whatToPrepare: [
                'Credenziali di accesso',
                'Numero di protocollo della domanda (opzionale)'
            ],
            estimatedCosts: 'Gratuito',
            timeToComplete: '5 minuti',
            steps: [
                'Accedi al portale INPS',
                'Cerca "Fascicolo Previdenziale del Cittadino"',
                'Dal menu a sinistra, seleziona "Prestazioni" e poi "Pagamenti"',
                'Verifica lo stato della domanda in "Le mie domande"',
                'Controlla la sezione "Notifiche" per eventuali comunicazioni dell\'INPS'
            ],
            officialLinksV2: [
                {
                    sourceId: 'inpsHome',
                    label: 'Fascicolo Previdenziale',
                    useWhen: 'Per vedere lo storico dei pagamenti e lo stato pratiche',
                    beforeOpening: ['Entra con SPID', 'Vai nell\'area personale']
                }
            ],
            commonErrors: [
                'Cercare il pagamento il giorno dopo la domanda (servono solitamente 30-45 giorni)',
                'Non controllare le comunicazioni di "Sospensione" per mancanza documenti'
            ],
            dontDo: [
                'Non chiamare l\'INPS ogni giorno: i tempi di lavorazione sono standard',
                'Non ignorare SMS o email dall\'INPS: potrebbero chiederti integrazioni'
            ],
            ifYouHaveProblems: [
                'Usa il servizio "INPS Risponde" online per chiedere chiarimenti sulla tua pratica',
                'Verifica se il tuo IBAN è stato validato dalla banca'
            ],
            checklist: [
                'Ho effettuato l\'accesso al Fascicolo Previdenziale',
                'Ho controllato la sezione Pagamenti',
                'Ho verificato se ci sono richieste di documenti integrativi'
            ],
            sources: [
                {
                    title: 'Manuale Fascicolo Previdenziale',
                    organization: 'INPS',
                    url: 'https://www.inps.it/',
                    type: 'official',
                    usedFor: 'Istruzioni navigazione portale',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'naspi-com-variazioni',
            slug: 'come-comunicare-variazioni-naspi',
            title: 'Come comunicare variazioni NASpI (NASpI-COM)',
            mainEntity: 'INPS',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Procedura per comunicare all\'INPS cambi di reddito, nuovi lavori o altre variazioni per non perdere la disoccupazione.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: [
                'Essere percettore di NASpI',
                'Nuovo evento da comunicare (es. inizio nuovo lavoro, reddito annuo presunto)'
            ],
            whatToPrepare: [
                'Dati del nuovo datore di lavoro',
                'Data inizio attività',
                'Reddito lordo previsto per l\'anno in corso'
            ],
            estimatedCosts: 'Gratuito',
            timeToComplete: '10 minuti',
            steps: [
                'Accedi al sito INPS',
                'Cerca il servizio "NASpI-COM"',
                'Seleziona "Invio comunicazione"',
                'Scegli il motivo della comunicazione (es. Attività lavorativa autonoma/subordinata)',
                'Inserisci i dati richiesti e il reddito presunto',
                'Invia la comunicazione e conserva la ricevuta'
            ],
            officialLinksV2: [
                {
                    sourceId: 'naspiCom',
                    useWhen: 'Per inviare la comunicazione obbligatoria di variazioni',
                    beforeOpening: ['Tieni pronto il contratto del nuovo lavoro o la stima del reddito']
                }
            ],
            commonErrors: [
                'Non comunicare l\'inizio di un lavoro a chiamata anche se di un solo giorno',
                'Sbagliare il calcolo del reddito presunto (meglio stare leggermente più alti)',
                'Inviare la comunicazione oltre i 30 giorni dall\'evento'
            ],
            dontDo: [
                'Non dimenticare di comunicare la Partita IVA anche se non produce reddito',
                'Non pensare che l\'INPS lo sappia già in automatico: la NASpI-COM è un obbligo del cittadino'
            ],
            ifYouHaveProblems: [
                'Se il sistema dà errore, prova a cambiare browser o usa l\'app INPS Mobile',
                'Chiedi supporto a un Patronato'
            ],
            checklist: [
                'Ho inviato la NASpI-COM entro 30 giorni',
                'Ho inserito il reddito lordo presunto',
                'Ho scaricato la ricevuta di invio'
            ],
            sources: [
                {
                    title: 'Guida NASpI-COM',
                    organization: 'INPS',
                    url: 'https://www.inps.it/',
                    type: 'official',
                    usedFor: 'Istruzioni tecniche',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'dimissioni-telematiche-guida',
            slug: 'come-fare-dimissioni-telematiche',
            title: 'Come fare le dimissioni telematiche',
            mainEntity: 'Ministero del Lavoro',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'La procedura ufficiale per lasciare il posto di lavoro in modo corretto e legale.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: [
                'Rapporto di lavoro subordinato attivo',
                'Credenziali SPID o CIE'
            ],
            whatToPrepare: [
                'Codice Fiscale del datore di lavoro',
                'Email o PEC dell\'azienda',
                'Data di decorrenza (il giorno DOPO l\'ultimo giorno di lavoro)'
            ],
            estimatedCosts: 'Gratuito (online autonomamente)',
            timeToComplete: '15 minuti',
            steps: [
                'Accedi al portale "Servizi Lavoro" del Ministero del Lavoro tramite SPID/CIE',
                'Seleziona "Dimissioni Volontarie"',
                'Inserisci i tuoi dati e quelli del datore di lavoro (molti saranno precompilati)',
                'Indica la data di decorrenza delle dimissioni',
                'Specifica se si tratta di dimissioni volontarie o per giusta causa',
                'Invia il modulo: il sistema invierà automaticamente una PEC al datore e all\'Ispettorato'
            ],
            officialLinksV2: [
                {
                    sourceId: 'inpsHome',
                    label: 'Portale Servizi Lavoro',
                    url: 'https://servizi.lavoro.gov.it/',
                    useWhen: 'Per inviare ufficialmente le dimissioni online',
                    beforeOpening: ['Prendi nota del preavviso previsto dal tuo contratto']
                }
            ],
            commonErrors: [
                'Sbagliare la data di decorrenza (va inserito il primo giorno in cui NON sei più al lavoro)',
                'Non rispettare il periodo di preavviso (rischio trattenute in busta paga)',
                'Pensare che basti una lettera firmata a mano (non è valida per legge)'
            ],
            dontDo: [
                'Non rassegnare le dimissioni online se sei in maternità o hai figli sotto i 3 anni: devi andare all\'Ispettorato del Lavoro (ITL) per la convalida',
                'Non dimenticare di avvisare il datore anche informalmente prima dell\'invio per correttezza'
            ],
            ifYouHaveProblems: [
                'Se non trovi il tuo contratto nel sistema, seleziona "Inserimento manuale"',
                'Rivolgiti a un Sindacato o Patronato per assistenza nella procedura'
            ],
            checklist: [
                'Ho controllato il preavviso sul mio CCNL',
                'Ho inserito la data di decorrenza corretta',
                'Ho ricevuto la mail di conferma con il codice identificativo'
            ],
            sources: [
                {
                    title: 'Normativa sulle dimissioni telematiche',
                    organization: 'Ministero del Lavoro',
                    url: 'https://www.lavoro.gov.it/',
                    type: 'official',
                    usedFor: 'Quadro legale',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'cpi-iscrizione-guida',
            slug: 'come-iscriversi-centro-impiego',
            title: 'Come iscriversi al Centro per l’Impiego',
            mainEntity: 'Ministero del Lavoro',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Come registrarsi ai servizi pubblici per l\'impiego per accedere a offerte di lavoro e corsi di formazione.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: [
                'Essere disoccupati o in cerca di prima occupazione',
                'Essere residenti o domiciliati nella zona di competenza del CPI'
            ],
            whatToPrepare: [
                'Documento di identità valido',
                'Codice Fiscale',
                'Curriculum Vitae aggiornato',
                'Titoli di studio (diplomi, lauree, certificati)'
            ],
            estimatedCosts: 'Gratuito',
            timeToComplete: '20 minuti (online) + colloquio',
            steps: [
                'Individua il Centro per l\'Impiego (CPI) competente per il tuo domicilio',
                'Registrati sul portale regionale del lavoro della tua regione',
                'Effettua l\'accesso tramite SPID/CIE',
                'Compila il tuo profilo professionale e carica il CV',
                'Rilascia la DID (Dichiarazione Immediata Disponibilità)',
                'Prenota il primo appuntamento per la sottoscrizione del Patto di Servizio'
            ],
            officialLinksV2: [
                {
                    sourceId: 'inpsHome',
                    label: 'Cerca il tuo CPI',
                    url: 'https://www.anpal.gov.it/centri-per-l-impiego',
                    useWhen: 'Per trovare l\'indirizzo e i contatti del centro più vicino',
                    beforeOpening: ['Controlla gli orari di apertura']
                }
            ],
            commonErrors: [
                'Pensare che l\'iscrizione sia automatica con la NASpI (va completata col colloquio)',
                'Non aggiornare i recapiti telefonici (non verrai chiamato per offerte)'
            ],
            dontDo: [
                'Non mancare agli appuntamenti fissati: rischi la perdita dello stato di disoccupazione e della NASpI',
                'Non fornire informazioni false sulle tue esperienze lavorative'
            ],
            ifYouHaveProblems: [
                'Se il portale regionale non funziona, chiama il centralino del tuo CPI',
                'Se hai una disabilità, chiedi di parlare con l\'ufficio "Collocamento Mirato" (Legge 68/99)'
            ],
            checklist: [
                'Ho individuato il mio CPI',
                'Ho caricato un CV in formato PDF',
                'Ho rilasciato la DID online',
                'Ho l\'appuntamento per il Patto di Servizio'
            ],
            sources: [
                {
                    title: 'Servizi per l\'impiego',
                    organization: 'Ministero del Lavoro',
                    url: 'https://www.lavoro.gov.it/',
                    type: 'official',
                    usedFor: 'Descrizione servizi',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'did-procedura-online',
            slug: 'come-fare-did-online',
            title: 'Come fare DID (Dichiarazione Immediata Disponibilità)',
            mainEntity: 'ANPAL',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'La procedura per dichiarare ufficialmente di essere disponibili al lavoro e ottenere lo stato di disoccupazione.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: [
                'Essere privi di impiego',
                'Credenziali SPID o CIE'
            ],
            whatToPrepare: [
                'Dati dell\'ultimo rapporto di lavoro',
                'Titolo di studio',
                'Credenziali di accesso'
            ],
            estimatedCosts: 'Gratuito',
            timeToComplete: '10 minuti',
            steps: [
                'Accedi al portale MyANPAL o al portale regionale del lavoro',
                'Seleziona il servizio "Dichiarazione di Immediata Disponibilità"',
                'Inserisci le informazioni sulla tua ultima esperienza lavorativa',
                'Conferma la disponibilità a partecipare a misure di politica attiva del lavoro',
                'Invia la dichiarazione e salva la ricevuta',
                'Ricorda che se fai domanda NASpI, questa equivale già a aver fatto la DID'
            ],
            officialLinksV2: [
                {
                    sourceId: 'inpsHome',
                    label: 'Portale MyANPAL',
                    url: 'https://myanpal.anpal.gov.it/',
                    useWhen: 'Per rilasciare la DID a livello nazionale',
                    beforeOpening: ['Usa SPID per entrare']
                }
            ],
            commonErrors: [
                'Dimenticare di confermare la DID presso il CPI entro i termini',
                'Non sapere che la domanda NASpI presentata all\'INPS "vale" come DID'
            ],
            dontDo: [
                'Non fare la DID se stai lavorando con un contratto a tempo pieno',
                'Non ignorare la convocazione del Centro per l\'Impiego dopo aver fatto la DID'
            ],
            ifYouHaveProblems: [
                'Se sei straniero e hai dubbi sul permesso di soggiorno, contatta un ufficio immigrazione o un patronato',
                'In caso di errori tecnici su MyANPAL, contatta l\'assistenza tecnica del portale'
            ],
            checklist: [
                'Ho rilasciato la DID online o tramite domanda NASpI',
                'Ho conservato il documento di ricevuta',
                'Ho verificato la data per l\'appuntamento al CPI'
            ],
            sources: [
                {
                    title: 'Manuale utente MyANPAL',
                    organization: 'ANPAL',
                    url: 'https://www.anpal.gov.it/',
                    type: 'official',
                    usedFor: 'Istruzioni operative',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'patto-servizio-personalizzato',
            slug: 'patto-di-servizio-personalizzato-psp',
            title: 'Patto di servizio',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'L\'accordo tra cittadino e Centro per l\'Impiego che definisce le attività da svolgere per trovare lavoro.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Centro per l\'Impiego',
            steps: [
                'Vieni convocato dal CPI dopo aver rilasciato la DID',
                'Svolgi un colloquio di profilazione con un operatore',
                'Sottoscrivi il Patto di Servizio Personalizzato (PSP)',
                'Rispetta gli impegni presi (corsi, colloqui, ricerca attiva) per non perdere i sussidi'
            ],
            checklist: [
                'Ho firmato il PSP',
                'Ho una copia dell\'accordo',
                'Conosco i miei obblighi per mantenere la NASpI/ADI'
            ],
            sources: [
                {
                    title: 'Politiche attive del lavoro',
                    organization: 'Ministero del Lavoro',
                    url: 'https://www.lavoro.gov.it/',
                    type: 'official',
                    usedFor: 'Descrizione PSP',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'busta-paga-lettura',
            slug: 'come-leggere-la-busta-paga',
            title: 'Busta paga: come leggerla',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Comprendere le voci principali della busta paga: lordo, netto, contributi e ferie residue.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            steps: [
                'Controlla la parte alta: dati anagrafici, inquadramento e CCNL',
                'Analizza il corpo centrale: paga base, scatti di anzianità, ore lavorate, festività',
                'Verifica le trattenute: contributi INPS (a carico lavoratore) e IRPEF (tasse)',
                'Guarda il "piede" della busta: ferie e permessi maturati/goduti, TFR e netto in tasca'
            ],
            checklist: [
                'Il netto corrisponde a quanto ricevuto in banca',
                'Le ferie maturate sono aggiornate',
                'Il livello di inquadramento è corretto'
            ],
            sources: [
                {
                    title: 'Guida alla lettura del prospetto paga',
                    organization: 'CNEL',
                    url: 'https://www.cnel.it/',
                    type: 'official',
                    usedFor: 'Orientamento voci paga',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'tfr-orientamento',
            slug: 'tfr-trattamento-fine-rapporto-come-funziona',
            title: 'TFR: orientamento base',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Cos\'è la "liquidazione", come viene accantonata e quando si può chiedere un anticipo.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'INPS',
            steps: [
                'Scegli se lasciare il TFR in azienda o destinarlo a un fondo pensione entro 6 mesi dall\'assunzione',
                'Verifica ogni anno l\'accantonamento nella busta paga di dicembre',
                'In caso di necessità (salute, acquisto prima casa) e dopo 8 anni, puoi chiedere un anticipo del 70%',
                'Ricevi l\'intera somma al termine del rapporto di lavoro'
            ],
            sources: [
                {
                    title: 'Trattamento di fine rapporto',
                    organization: 'INPS',
                    url: 'https://www.inps.it/',
                    type: 'official',
                    usedFor: 'Normativa TFR',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'contratti-lavoro-tipologie',
            slug: 'differenza-contratto-determinato-indeterminato',
            title: 'Contratto determinato/indeterminato',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 12,
            summary: 'Le differenze tra le principali forme contrattuali in Italia e le tutele previste.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            steps: [
                'Indeterminato: stabilità, tutele crescenti, senza scadenza',
                'Determinato: ha una data di fine, massimo 24 mesi (salvo deroghe)',
                'Apprendistato: per giovani, include formazione obbligatoria',
                'Somministrazione: assunto da agenzia per lavorare in altra azienda'
            ],
            sources: [
                {
                    title: 'Tipologie contrattuali',
                    organization: 'Ministero del Lavoro',
                    url: 'https://www.lavoro.gov.it/',
                    type: 'official',
                    usedFor: 'Quadro normativo',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'malattia-certificato-telematico',
            slug: 'malattia-lavoro-certificato-medico-inps',
            title: 'Malattia e certificato telematico',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Cosa fare se ti ammali: dal medico alla comunicazione al datore di lavoro.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'INPS',
            steps: [
                'Vai dal medico il primo giorno di malattia',
                'Il medico invia il certificato telematico all\'INPS',
                'Comunica subito al datore di lavoro il numero di protocollo (PUC)',
                'Rispetta le fasce di reperibilità per le visite fiscali'
            ],
            officialLinksV2: [
                {
                    sourceId: 'inpsCertificatiMalattia',
                    useWhen: 'Per consultare i tuoi certificati inviati',
                    beforeOpening: ['Tieni pronto il codice fiscale']
                }
            ],
            sources: [
                {
                    title: 'Certificati di malattia telematici',
                    organization: 'INPS',
                    url: 'https://www.inps.it/',
                    type: 'official',
                    usedFor: 'Procedura malattia',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'maternita-paternita-base',
            slug: 'congedo-maternita-paternita-guida-base',
            title: 'Maternità/paternità base',
            category: 'lavoro',
            audience: ['parents'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Diritti e congedi per i nuovi genitori: obbligatori, facoltativi e indennità INPS.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'INPS',
            steps: [
                'Maternità obbligatoria: 5 mesi (solitamente 2 prima e 3 dopo il parto)',
                'Paternità obbligatoria: 10 giorni lavorativi per il padre dipendente',
                'Congedo parentale: mesi facoltativi indennizzati in percentuale',
                'Presenta domanda online all\'INPS prima dell\'inizio del congedo'
            ],
            sources: [
                {
                    title: 'Maternità e paternità',
                    organization: 'INPS',
                    url: 'https://www.inps.it/',
                    type: 'official',
                    usedFor: 'Dettagli congedi',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'lavoro-nero-tutele',
            slug: 'lavoro-nero-cosa-rischiano-aziende-tutele-lavoratori',
            title: 'Lavoro nero: orientamento e tutele',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'intermedia',
            estimatedMinutes: 15,
            summary: 'Perché il lavoro "in nero" è un rischio per te e come puoi tutelarti o denunciare.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Ispettorato Nazionale del Lavoro',
            steps: [
                'Il lavoro nero non ti dà contributi pensione, assicurazione INAIL e tutele in caso di licenziamento',
                'Se lavori in nero, puoi richiedere la regolarizzazione tramite i sindacati',
                'Puoi inviare una segnalazione (esposto) all\'Ispettorato Nazionale del Lavoro (INL)',
                'Conserva prove del lavoro svolto (messaggi, testimoni, foto)'
            ],
            officialLinksV2: [
                {
                    sourceId: 'inlRichiestaIntervento',
                    useWhen: 'Per segnalare irregolarità lavorative',
                    beforeOpening: ['Valuta di farti assistere da un sindacato']
                }
            ],
            sources: [
                {
                    title: 'Tutela del lavoro',
                    organization: 'INL',
                    url: 'https://www.ispettorato.gov.it/',
                    type: 'official',
                    usedFor: 'Esposti e denunce',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'ccnl-contratto-ricerca',
            slug: 'come-trovare-ccnl-nel-contratto-di-lavoro',
            title: 'Come trovare CCNL nel contratto',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Il Contratto Collettivo Nazionale di Lavoro (CCNL) stabilisce i tuoi diritti minimi. Ecco come capire quale si applica a te.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            steps: [
                'Leggi la prima pagina del tuo contratto di assunzione',
                'Cerca diciture come "si applica il CCNL Commercio" o "Metalmeccanici"',
                'Se non lo trovi nel contratto, controlla la parte alta della busta paga',
                'Usa il nome del CCNL per cercare online i minimi tabellari e le ore di ferie previste'
            ],
            officialLinksV2: [
                {
                    sourceId: 'cnelArchivioContratti',
                    useWhen: 'Per consultare il testo integrale di un CCNL',
                    beforeOpening: ['Devi conoscere il nome esatto del contratto']
                }
            ],
            sources: [
                {
                    title: 'Archivio Contratti',
                    organization: 'CNEL',
                    url: 'https://www.cnel.it/Archivio-Contratti',
                    type: 'official',
                    usedFor: 'Consultazione CCNL',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        }
    ]
};
