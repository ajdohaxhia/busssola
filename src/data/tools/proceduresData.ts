export interface CivicProcedureItem {
    id: string
    title: string
    category: 'documenti' | 'lavoro' | 'fisco' | 'casa' | 'emergenza' | 'famiglia'
    keywords: string[]
    commonScenarios: string[]
    firstAction: string
    estimatedTime: string
    cost: string
    documentsNeeded: string[]
    whatNeverToDo: string
    officialPortalName: string
    officialPortalUrl: string
    busssolaGuideUrl: string
    alternativeProcedures: { title: string; url: string }[]
}

export const CIVIC_PROCEDURES: CivicProcedureItem[] = [
    {
        id: 'cie-smarrimento-rinnovo',
        title: 'Carta d’Identità Elettronica (CIE): Furto, Smarrimento o Rinnovo',
        category: 'documenti',
        keywords: [
            'carta identita', 'cie', 'perso carta identita', 'smarrimento cie',
            'rinnovo carta identita', 'carta identita scaduta', 'denuncia carta identita',
        ],
        commonScenarios: [
            'Ho perso la carta d’identità e devo rifarla urgentemente',
            'Mi hanno rubato il portafoglio con la CIE',
            'La mia carta d’identità è scaduta o scade a breve',
        ],
        firstAction: 'In caso di furto o smarrimento: fai subito denuncia ai Carabinieri o alla Polizia di Stato (anche online con pre-denuncia). Se è solo scaduta, puoi richiedere il rinnovo già nei 180 giorni prima della scadenza.',
        estimatedTime: 'Appuntamento in Comune: 15 minuti. Consegna a casa: 6 giorni lavorativi.',
        cost: 'Circa 22,21€ per rilascio ordinario (circa 27,37€ per duplicato a seguito di smarrimento/deterioramento).',
        documentsNeeded: [
            'Originale della denuncia di furto/smarrimento resa alle Forze dell’Ordine',
            'Una fototessera recente su sfondo chiaro (formato cartaceo o su chiavetta USB)',
            'Codice fiscale o tessera sanitaria',
            'Altro documento di riconoscimento valido (patente o passaporto), oppure 2 testimoni maggiorenni',
        ],
        whatNeverToDo: 'Non andare in Comune senza aver prima verificato se nel tuo Comune è obbligatorio prenotare su prenotazionicie.interno.gov.it.',
        officialPortalName: 'Ministero dell’Interno — Portale Prenotazioni CIE',
        officialPortalUrl: 'https://www.prenotazionicie.interno.gov.it',
        busssolaGuideUrl: '/moduli/cie-richiesta',
        alternativeProcedures: [
            { title: 'Come recuperare PIN e PUK della CIE', url: '/moduli/modulo-09-documenti-identita/lezione/4' },
            { title: 'Confronto SPID vs CIE vs IT-Wallet', url: '/confronti/spid-cie-it-wallet' },
        ],
    },
    {
        id: 'spid-recupero-credenziali',
        title: 'SPID: Richiesta Gratuita, Recupero Password o Blocco Credenziali',
        category: 'documenti',
        keywords: [
            'spid', 'recupero spid', 'spid gratis', 'password spid persa',
            'posteid bloccato', 'credenziali spid', 'spid non entra',
        ],
        commonScenarios: [
            'Non ricordo più la password o il nome utente del mio SPID',
            'Ho cambiato numero di telefono e non ricevo più il codice SMS OTP',
            'Devo attivare uno SPID gratuito senza spendere soldi',
        ],
        firstAction: 'Non creare un nuovo account: vai sulla schermata di login del tuo Identity Provider (es. PosteID, Sielte, Aruba) e clicca su "Password o nome utente dimenticato".',
        estimatedTime: 'Recupero password: 3 minuti. Nuova attivazione con CIE: 10 minuti.',
        cost: 'Gratuito con riconoscimento tramite CIE 3.0, CNS o firma digitale (oppure allo sportello postale abilitato).',
        documentsNeeded: [
            'Indirizzo email registrato in fase di attivazione',
            'Numero di cellulare associato alle credenziali',
            'Codice fiscale del titolare',
            'Carta d’Identità o CIE se si richiede una nuova attivazione',
        ],
        whatNeverToDo: 'Non pagare servizi privati che chiedono 20-30€ promettendo lo SPID rapido: la procedura online con CIE è immediata e a costo zero.',
        officialPortalName: 'AgID — Portale Ufficiale SPID',
        officialPortalUrl: 'https://www.spid.gov.it/tariffario-spid/',
        busssolaGuideUrl: '/modelli/spid',
        alternativeProcedures: [
            { title: 'Attivare i livelli 1 e 2 della CIE come alternativa a SPID', url: '/confronti/spid-cie-it-wallet' },
        ],
    },
    {
        id: 'cambio-residenza-anpr',
        title: 'Cambio di Residenza Online tramite ANPR',
        category: 'casa',
        keywords: [
            'cambio residenza', 'cambiare residenza online', 'anpr cambio residenza',
            'trasferimento residenza', 'dichiarazione residenza comune',
        ],
        commonScenarios: [
            'Ho cambiato casa e devo aggiornare la mia residenza anagrafica',
            'Mi trasferisco in un altro Comune italiano',
            'Vado a convivere e cambio nucleo familiare',
        ],
        firstAction: 'Accedi con SPID o CIE su anagrafenazionale.interno.gov.it e seleziona "Richiedi un cambio di residenza". Tutta la procedura si fa online in 10 minuti senza andare all’ufficio anagrafe.',
        estimatedTime: 'Compilazione: 10 minuti. Registrazione anagrafica: 2 giorni lavorativi (con decorrenza retroattiva alla data d’invio).',
        cost: 'Completamente gratuito (nessun bollo o imposta di registro dovuta).',
        documentsNeeded: [
            'Credenziali SPID o CIE di livello 2 di tutti i componenti maggiorenni del nucleo che si trasferiscono',
            'Dati catastali dell’immobile (foglio, particella, subalterno) o contratto di locazione registrato all’Agenzia delle Entrate',
            'Targhe dei veicoli intestati e numeri delle patenti di guida (per aggiornamento telematico della Motorizzazione)',
        ],
        whatNeverToDo: 'Non dimenticare di caricare il titolo di occupazione dell’immobile (proprietà, contratto d’affitto o consenso del proprietario): l’art. 5 del D.L. 47/2014 vieta la residenza senza titolo.',
        officialPortalName: 'Ministero dell’Interno — Anagrafe Nazionale Popolazione Residente',
        officialPortalUrl: 'https://www.anagrafenazionale.interno.gov.it/servizi-anagrafici/cambio-di-residenza/',
        busssolaGuideUrl: '/moduli/cambio-residenza',
        alternativeProcedures: [
            { title: 'Voltura e subentro utenze luce e gas', url: '/moduli/modulo-13-casa-residenza' },
        ],
    },
    {
        id: 'naspi-disoccupazione-inps',
        title: 'Domanda di Disoccupazione NASpI',
        category: 'lavoro',
        keywords: [
            'naspi', 'disoccupazione', 'domanda naspi', 'calcolo naspi',
            'ho perso il lavoro', 'licenziamento disoccupazione', 'quanti giorni per naspi',
        ],
        commonScenarios: [
            'Il mio contratto a tempo determinato è scaduto e non è stato rinnovato',
            'Sono stato licenziato dal datore di lavoro',
            'Mi sono dimesso per giusta causa o durante la maternità',
        ],
        firstAction: 'Verifica la data di cessazione del rapporto di lavoro e presenta la domanda telematica sul portale INPS entro il termine perentorio di 68 giorni.',
        estimatedTime: 'Compilazione online: 20 minuti. Prima liquidazione: mediamente 30-45 giorni dalla domanda.',
        cost: 'Completamente gratuito (autonomamente con SPID/CIE o tramite patronato).',
        documentsNeeded: [
            'Credenziali SPID o CIE per accedere all’area MyINPS',
            'Codice IBAN intestato al richiedente per l’accredito dell’indennità',
            'Lettera di licenziamento o contratto di lavoro scaduto (anche se il datore invia la comunicazione Unilav in automatico)',
            'Certificazione dell’Accordo di conciliazione in caso di risoluzione consensuale agevolata',
        ],
        whatNeverToDo: 'Non aspettare l’ultimo dei 68 giorni: se presenti la domanda entro 8 giorni dalla cessazione, la NASpI decorre dall’ottavo giorno senza perdere nemmeno una mensilità.',
        officialPortalName: 'INPS — Servizio Domanda NASpI',
        officialPortalUrl: 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.50585.naspi-indennita-mensile-di-disoccupazione.html',
        busssolaGuideUrl: '/modelli/naspi',
        alternativeProcedures: [
            { title: 'Come calcolare il TFR maturato', url: '/moduli/modulo-10-lavoro-disoccupazione' },
            { title: 'Supporto per la Formazione e il Lavoro (SFL)', url: '/tool/trova-bonus' },
        ],
    },
    {
        id: 'dimissioni-volontarie-online',
        title: 'Dimissioni Telematiche Volontarie (Ministero del Lavoro)',
        category: 'lavoro',
        keywords: [
            'dimissioni', 'dimissioni online', 'cliclavoro dimissioni',
            'dare le dimissioni', 'come dimettersi', 'preavviso dimissioni',
        ],
        commonScenarios: [
            'Ho trovato un nuovo lavoro e devo dare le dimissioni dal vecchio impiego',
            'Voglio licenziarmi volontariamente rispettando i termini di preavviso',
        ],
        firstAction: 'Verifica sul tuo CCNL di categoria i giorni di preavviso obbligatori dovuti al datore prima di fissare la data di decorrenza delle dimissioni.',
        estimatedTime: 'Compilazione telematica: 10 minuti su Cliclavoro.',
        cost: 'Completamente gratuito se effettuato autonomamente con SPID o CIE.',
        documentsNeeded: [
            'Codice fiscale del lavoratore e credenziali SPID/CIE',
            'Codice fiscale o Partita IVA dell’azienda datrice di lavoro',
            'Indirizzo email o PEC dell’azienda (a cui il sistema invierà la notifica automatica)',
            'Contratto collettivo nazionale applicato (CCNL) e livello d’inquadramento',
        ],
        whatNeverToDo: 'Non consegnare una semplice lettera cartacea firmata: la legge prevede che le dimissioni ordinarie siano valide esclusivamente se inviate in via telematica.',
        officialPortalName: 'Ministero del Lavoro — Cliclavoro Dimissioni Telematiche',
        officialPortalUrl: 'https://www.cliclavoro.gov.it/Cittadini/Pagine/Dimissioni-Volontarie.aspx',
        busssolaGuideUrl: '/moduli/modulo-10-lavoro-disoccupazione/lezione/4',
        alternativeProcedures: [
            { title: 'Verifica giorni di preavviso contrattuale', url: '/moduli/modulo-12-lavoro-diritti' },
        ],
    },
    {
        id: 'truffa-phishing-bancario-sos',
        title: 'SOS Truffa Bancaria o Clic su Link Phishing / Smishing',
        category: 'emergenza',
        keywords: [
            'truffa', 'sms banca truffa', 'bonifico truffa', 'conto svuotato',
            'cliccato link truffa', 'carta clonata', 'phishing banca cosa fare',
        ],
        commonScenarios: [
            'Ho cliccato su un SMS della finta banca e inserito le mie credenziali',
            'Un finto operatore antifrode mi ha convinto a fare un bonifico',
            'Vedo addebiti non autorizzati sulla mia carta di credito o debito',
        ],
        firstAction: 'Chiama immediatamente il numero verde di blocco della tua banca (attivo 24 ore su 24) e blocca carte e home banking. Se hai fatto un bonifico istantaneo, richiedi un tentativo urgente di richiamo (recall).',
        estimatedTime: 'Blocco carte: immediato (2 minuti al telefono). Denuncia: 30 minuti.',
        cost: 'Gratuito.',
        documentsNeeded: [
            'Estratto conto e numero della transazione disconosciuta',
            'Screenshot del messaggio SMS, email o numero chiamante',
            'Copia della denuncia sporta alle Forze dell’Ordine (Polizia di Stato o Carabinieri)',
            'Modulo di disconoscimento operazioni fraudolente fornito dalla propria banca',
        ],
        whatNeverToDo: 'Non cancellare i messaggi o la cronologia chiamate: sono prove legali indispensabili per il rimborso davanti all’Arbitro Bancario Finanziario (ABF).',
        officialPortalName: 'Polizia di Stato — Commissariato di P.S. Online',
        officialPortalUrl: 'https://www.commissariatodips.it',
        busssolaGuideUrl: '/sos',
        alternativeProcedures: [
            { title: 'Matrice completa di riconoscimento truffe per canale', url: '/confronti/truffe-come-riconoscerle' },
            { title: 'Modulo di disconoscimento bonifici fraudolenti', url: '/modelli/disconoscimento-operazioni-bancarie-frode' },
        ],
    },
    {
        id: 'passaporto-elettronico-questura',
        title: 'Rilascio e Rinnovo Passaporto Elettronico',
        category: 'documenti',
        keywords: [
            'passaporto', 'prenotare passaporto', 'rinnovo passaporto', 'questura passaporto',
            'agenda passaporto', 'passaporto urgente',
        ],
        commonScenarios: [
            'Devo viaggiare fuori dall’Unione Europea e non ho il passaporto',
            'Il mio passaporto è scaduto o ha meno di 6 mesi di validità residua',
            'Ho un’urgenza di lavoro, studio o salute e non trovo date libere',
        ],
        firstAction: 'Accedi su passaportonline.poliziadistato.it con SPID o CIE per prenotare l’appuntamento presso la Questura o il Commissariato competente per residenza o domicilio.',
        estimatedTime: 'Appuntamento in questura: 20 minuti. Ritiro: da 15 a 45 giorni lavorativi.',
        cost: '116€ totali: contrassegno telematico da 73,50€ (comprato in tabaccheria) + bollettino postale da 42,50€ sul c/c 67422012 intestato a MEF Dipartimento del Tesoro.',
        documentsNeeded: [
            'Ricevuta stampata dell’appuntamento telematico',
            'Due fotografie formato tessera identiche e recenti su sfondo bianco a capo scoperto',
            'Contrassegno telematico da 73,50€ per passaporto',
            'Attestazione di versamento di 42,50€ con bollettino postale premarcato',
            'Documento di riconoscimento valido e vecchio passaporto (se si tratta di rinnovo)',
        ],
        whatNeverToDo: 'Se hai un’urgenza documentata di viaggio (biglietto aereo entro 30 giorni o certificato medico/aziendale), non aspettare l’agenda ordinaria: usa il tasto "Procedura d’urgenza" per ottenere una data entro pochi giorni.',
        officialPortalName: 'Polizia di Stato — Agenda Passaporto Online',
        officialPortalUrl: 'https://passaportonline.poliziadistato.it',
        busssolaGuideUrl: '/modelli/passaporto',
        alternativeProcedures: [
            { title: 'Verifica validità CIE per l’espatrio in area UE', url: '/confronti/spid-cie-it-wallet' },
        ],
    },
]
