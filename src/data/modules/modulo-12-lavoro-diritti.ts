import { Module } from '@/types';

export const modulo_12_lavoro_diritti: Module = {
    id: 'modulo-12-lavoro-diritti',
    lastUpdated: '2026-05-14',
    title: 'Lavoro e Diritti',
    description: 'Guida ai diritti del lavoratore, ammortizzatori sociali e procedure amministrative del mercato del lavoro.',
    category: 'lavoro',
    difficulty: 'base',
    icon: 'Briefcase',
    themeColor: 'accent-green',
    lessons: [
        {
            id: 'naspi-domanda',
            slug: 'naspi-requisiti-e-domanda',
            title: 'NASpI: requisiti e domanda',
            category: 'lavoro',
            audience: ['lavoratori', 'cittadini'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Come richiedere l\'indennità di disoccupazione NASpI dopo la perdita involontaria del lavoro.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'INPS',
            synthesis: 'Domanda telematica all\'INPS entro 68 giorni dalla cessazione del rapporto di lavoro.',
            whenToDo: 'Quando perdi il lavoro involontariamente (licenziamento, scadenza contratto, dimissioni per giusta causa).',
            scenario: 'Il tuo contratto a termine è scaduto o sei stato licenziato e vuoi ricevere il sostegno al reddito mentre cerchi un nuovo impiego.',
            steps: [
                'Verifica di avere almeno 13 settimane di contributi negli ultimi 4 anni',
                'Accedi al sito INPS con SPID/CIE',
                'Invia la domanda NASpI online',
                'Rilascia la DID (Dichiarazione Immediata Disponibilità)'
            ],
            doNow: [
                'Accedi al sito INPS con SPID/CIE',
                'Inizia la domanda NASpI'
            ],
            dontDo: [
                'Non aspettare oltre i 68 giorni (perderesti il diritto)',
                'Non dimenticare di comunicare eventuali nuovi redditi durante la NASpI (NASpI-com)',
                'Non rifiutare offerte di lavoro congrue senza giustificato motivo'
            ],
            whatToPrepare: [
                'Lettera di licenziamento o contratto scaduto',
                'Ultime buste paga',
                'IBAN per l\'accredito',
                'Credenziali SPID/CIE'
            ],
            commonErrors: [
                'Sbagliare l\'IBAN (l\'accredito non andrà a buon fine)',
                'Non fare la DID presso il Centro per l\'Impiego',
                'Inviare la domanda prima dell\'ultimo giorno di lavoro'
            ],
            askHelpWhen: [
                'Se la domanda viene respinta e ritieni di avere i requisiti',
                'Se l\'importo accreditato sembra errato rispetto ai contributi versati'
            ],
            whoCanHelp: ['Patronati (assistenza gratuita)', 'Contact Center INPS', 'Centri per l\'Impiego'],
            officialLinks: ['https://www.inps.it/it/it/dettaglio-scheda.schede-servizi-e-strumenti.servizi.naspi-indennit-mensile-di-disoccupazione.html'],
            checklist: [
                'Requisito contributivo verificato',
                'Domanda inviata sul portale INPS',
                'Ricevuta di invio salvata',
                'DID effettuata',
                'IBAN inserito correttamente'
            ],
            sources: [
                {
                    title: 'Scheda prestazione NASpI',
                    organization: 'INPS',
                    url: 'https://www.inps.it/',
                    type: 'official',
                    usedFor: 'Requisiti e modalità invio domanda',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Guida alla disoccupazione',
                    organization: 'Ministero del Lavoro',
                    url: 'https://www.lavoro.gov.it/',
                    type: 'official',
                    usedFor: 'Quadro normativo ammortizzatori sociali',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'dimissioni-telematiche-procedura',
            slug: 'dimissioni-telematiche-procedura',
            title: 'Dimissioni telematiche',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'La procedura obbligatoria per rassegnare le dimissioni dal lavoro in modo legale tramite il portale del Ministero.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Ministero del Lavoro e delle Politiche Sociali',
            synthesis: 'Invio del modulo digitale per evitare il fenomeno delle dimissioni in bianco.',
            whenToDo: 'Quando decidi di lasciare volontariamente il tuo posto di lavoro.',
            scenario: 'Hai trovato un nuovo lavoro o vuoi lasciare quello attuale e devi comunicarlo ufficialmente al Ministero e al datore.',
            steps: [
                'Verifica il periodo di preavviso nel tuo contratto (CCNL)',
                'Accedi al sito "Cliclavoro" con SPID/CIE',
                'Compila il modulo online con i dati del datore di lavoro',
                'Indica l\'ultimo giorno di lavoro'
            ],
            doNow: [
                'Accedi al sito "Cliclavoro" con SPID/CIE',
                'Compila il modulo di dimissioni'
            ],
            dontDo: [
                'Non scrivere solo una lettera cartacea (non ha valore per la maggior parte dei contratti)',
                'Non sbagliare la data di decorrenza (il giorno successivo all\'ultimo lavorato)',
                'Non dimenticare di avvisare anche informalmente il datore per correttezza'
            ],
            whatToPrepare: [
                'PEC o email del datore di lavoro',
                'Codice Fiscale dell\'azienda (partita IVA)',
                'Data di inizio del rapporto di lavoro'
            ],
            commonErrors: [
                'Non rispettare il preavviso (può comportare trattenute in busta paga)',
                'Inserire l\'ultimo giorno di lavoro sbagliato',
                'Pensare che basti non presentarsi più a lavoro'
            ],
            askHelpWhen: [
                'In caso di dimissioni per giusta causa (es. mancato pagamento stipendi)',
                'Se il datore di lavoro ti impedisce di accedere ai dati necessari'
            ],
            whoCanHelp: ['Sindacati', 'Patronati', 'Ispettorato Nazionale del Lavoro'],
            officialLinks: ['https://www.servizi.lavoro.gov.it/'],
            checklist: [
                'Periodo di preavviso calcolato',
                'Accesso a Cliclavoro effettuato',
                'Modulo compilato correttamente',
                'Ricevuta telematica ottenuta',
                'Email di conferma ricevuta'
            ],
            sources: [
                {
                    title: 'Dimissioni Volontarie',
                    organization: 'Ministero del Lavoro e delle Politiche Sociali',
                    url: 'https://www.lavoro.gov.it/strumenti-e-servizi/Dimissioni-volontarie/Pagine/default.aspx',
                    type: 'official',
                    usedFor: 'Procedura ufficiale e normativa',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'FAQ Dimissioni Telematiche',
                    organization: 'Cliclavoro',
                    url: 'https://www.cliclavoro.gov.it/',
                    type: 'official',
                    usedFor: 'Risoluzione problemi tecnici',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'centro-impiego-did',
            slug: 'centro-per-impiego-did-patto-servizio',
            title: 'Centro per l\'Impiego (DID/Patto servizio)',
            category: 'lavoro',
            audience: ['lavoratori', 'studenti'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Come iscriversi ai Centri per l\'Impiego e attivare i percorsi di politica attiva del lavoro.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'ANPAL (Ministero del Lavoro)',
            synthesis: 'Rilascio della DID e sottoscrizione del Patto di Servizio Personalizzato (PSP).',
            whenToDo: 'Subito dopo essere rimasti disoccupati o se si è in cerca di prima occupazione.',
            scenario: 'Sei senza lavoro e vuoi accedere a corsi di formazione, bonus assunzionali o programmi come GOL.',
            steps: [
                'Rilascia la DID online sul portale ANPAL/MyANPAL',
                'Prendi appuntamento presso il Centro per l\'Impiego del tuo territorio',
                'Sottoscrivi il Patto di Servizio Personalizzato',
                'Aggiorna regolarmente il tuo stato occupazionale'
            ],
            doNow: [
                'Rilascia la DID online sul portale MyANPAL',
                'Fissa appuntamento al Centro per l\'Impiego'
            ],
            dontDo: [
                'Non mancare agli appuntamenti (rischio perdita indennità NASpI)',
                'Non dimenticare di portare un CV aggiornato all\'incontro',
                'Non aspettare mesi prima di iscriverti'
            ],
            whatToPrepare: [
                'Documento di identità',
                'Codice Fiscale',
                'Titoli di studio (diplomi/lauree)',
                'Curriculum Vitae'
            ],
            commonErrors: [
                'Pensare che il Centro per l\'Impiego ti trovi lavoro "automaticamente"',
                'Non comunicare variazioni di domicilio o telefono',
                'Sottovalutare l\'importanza del Patto di Servizio'
            ],
            askHelpWhen: [
                'Se hai difficoltà a registrarti sui portali regionali o nazionali',
                'Se appartieni a categorie protette (Legge 68/99)'
            ],
            whoCanHelp: ['Operatori del Centro per l\'Impiego (CPI)', 'Sportelli informagiovani'],
            officialLinks: ['https://www.anpal.gov.it/'],
            checklist: [
                'DID rilasciata online',
                'Profilo MyANPAL completato',
                'Appuntamento al CPI fissato',
                'Patto di servizio firmato',
                'CV caricato nel database regionale'
            ],
            sources: [
                {
                    title: 'Dichiarazione di Immediata Disponibilità',
                    organization: 'ANPAL (ora Ministero del Lavoro)',
                    url: 'https://www.anpal.gov.it/did',
                    type: 'official',
                    usedFor: 'Procedura DID',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Centri per l\'impiego',
                    organization: 'Ministero del Lavoro',
                    url: 'https://www.lavoro.gov.it/temi-e-priorita/politiche-attive-del-lavoro/Pagine/Centri-per-l-impiego.aspx',
                    type: 'official',
                    usedFor: 'Ruolo e funzioni dei CPI',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'contratto-lavoro-controllo',
            slug: 'contratto-di-lavoro-cosa-controllare',
            title: 'Contratto di lavoro: cosa controllare',
            category: 'lavoro',
            audience: ['lavoratori', 'studenti'],
            level: 'base',
            estimatedMinutes: 20,
            summary: 'I punti fondamentali da verificare prima di firmare un contratto di assunzione.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Ministero del Lavoro',
            synthesis: 'Verifica del CCNL applicato, livello, inquadramento, orario e retribuzione lorda.',
            whenToDo: 'Prima di apporre la firma definitiva sulla lettera di assunzione o sul contratto.',
            scenario: 'Ti hanno offerto un lavoro e ti hanno inviato la bozza del contratto. Vuoi essere sicuro che tutto sia in regola.',
            steps: [
                'Verifica la tipologia (tempo det./indet., apprendistato)',
                'Controlla il CCNL di riferimento (es. Commercio, Metalmeccanico)',
                'Verifica il periodo di prova',
                'Controlla la RAL (Retribuzione Annua Lorda) e il numero di mensilità'
            ],
            doNow: [
                'Leggi attentamente il CCNL di riferimento',
                'Verifica l\'inquadramento e la RAL'
            ],
            dontDo: [
                'Non firmare se ci sono accordi verbali non scritti nel contratto',
                'Non ignorare le clausole di non concorrenza o penali',
                'Non vergognarti di chiedere tempo (24-48 ore) per leggere tutto con calma'
            ],
            whatToPrepare: [
                'La bozza del contratto',
                'Il testo del CCNL (cercabile online)',
                'Calcolatore lordo/netto'
            ],
            commonErrors: [
                'Confondere stipendio lordo e netto',
                'Non verificare la durata del preavviso',
                'Sottovalutare la sede di lavoro e le clausole di trasferta'
            ],
            askHelpWhen: [
                'Se il contratto cita un CCNL inesistente o "pirata"',
                'Se la mansione descritta non corrisponde a quella discussa nei colloqui'
            ],
            whoCanHelp: ['Consulenti del lavoro', 'Sindacati di categoria', 'Ispettorato del Lavoro'],
            officialLinks: ['https://www.cnel.it/Archivio-Contratti'],
            checklist: [
                'Tipologia contrattuale chiara',
                'CCNL indicato correttamente',
                'Livello e mansione specificati',
                'Retribuzione lorda indicata',
                'Orario di lavoro e sede definiti',
                'Periodo di prova specificato'
            ],
            sources: [
                {
                    title: 'Archivio Nazionale Contratti Collettivi',
                    organization: 'CNEL',
                    url: 'https://www.cnel.it/Archivio-Contratti',
                    type: 'official',
                    usedFor: 'Verifica CCNL',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Tipologie contrattuali',
                    organization: 'Ministero del Lavoro',
                    url: 'https://www.lavoro.gov.it/temi-e-priorita/rapporto-di-lavoro/Pagine/default.aspx',
                    type: 'official',
                    usedFor: 'Descrizione forme di lavoro',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'busta-paga-lettura',
            slug: 'busta-paga-lettura-base',
            title: 'Busta paga: lettura base',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Guida per decifrare le voci principali del cedolino dello stipendio: dal lordo al netto.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Agenzia delle Entrate',
            synthesis: 'Scomposizione della busta paga in tre sezioni: anagrafica/paga base, corpo (competenze/trattenute) e piede (TFR/netto).',
            whenToDo: 'Ogni mese, al ricevimento del cedolino, per verificare che lo stipendio sia corretto.',
            scenario: 'Hai ricevuto lo stipendio ma non capisci perché è diverso dal mese scorso o come vengono calcolate le tasse.',
            steps: [
                'Verifica il numero di ore lavorate e gli eventuali straordinari',
                'Controlla i giorni di ferie e permessi maturati/goduti',
                'Controlla l\'importo del netto in busta e confrontalo col bonifico'
            ],
            doNow: [
                'Confronta il netto in busta col bonifico ricevuto',
                'Verifica le ore di straordinario o assenza'
            ],
            dontDo: [
                'Non guardare solo il "netto a pagare" in fondo',
                'Non buttare i cedolini (servono per mutui, prestiti e pensione)',
                'Non ignorare le trattenute sindacali se non hai dato l\'autorizzazione'
            ],
            whatToPrepare: [
                'Cedolino del mese corrente',
                'Contratto di assunzione per confronto parametri',
                'Foglio presenze personale'
            ],
            commonErrors: [
                'Non controllare i dati anagrafici e fiscali (es. familiari a carico)',
                'Confondere il TFR maturato con il netto mensile',
                'Non notare se mancano i bonus fiscali spettanti (es. ex Bonus Renzi)'
            ],
            askHelpWhen: [
                'Se il netto è significativamente diverso dal previsto senza motivo',
                'Se noti trattenute che non riconosci'
            ],
            whoCanHelp: ['Ufficio Risorse Umane/Paghe aziendale', 'Sindacati', 'Consulenti del lavoro'],
            officialLinks: ['https://www.agenziaentrate.gov.it/portale/web/guest/cittadini/agevolazioni/detrazioni-per-carichi-of-famiglia'],
            checklist: [
                'Dati anagrafici corretti',
                'Paga base corrispondente al livello',
                'Ore lavorate verificate',
                'Ferie e permessi aggiornati',
                'Netto a pagare verificato'
            ],
            sources: [
                {
                    title: 'Detrazioni per carichi di famiglia',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/',
                    type: 'official',
                    usedFor: 'Comprensione trattenute fiscali',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Guida al cedolino',
                    organization: 'INPS',
                    url: 'https://www.inps.it/',
                    type: 'official',
                    usedFor: 'Voci contributive in busta',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'malattia-certificato-medico',
            slug: 'malattia-e-certificato-medico-guida',
            title: 'Malattia e certificato medico',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Cosa fare quando non si può andare al lavoro per motivi di salute: obblighi e visite fiscali.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'INPS',
            synthesis: 'Comunicazione tempestiva al datore e rilascio del certificato telematico dal medico.',
            whenToDo: 'Al mattino presto del primo giorno di assenza per malattia.',
            scenario: 'Ti sei svegliato con la febbre o hai avuto un infortunio e non puoi recarti al lavoro.',
            steps: [
                'Avvisa immediatamente il datore di lavoro (secondo le modalità aziendali)',
                'Contatta il tuo Medico di Medicina Generale (MMG)',
                'Recati a visita o richiedi visita domiciliare',
                'Ottieni il Numero di Protocollo del certificato'
            ],
            doNow: [
                'Avvisa il datore di lavoro',
                'Chiama il medico di base'
            ],
            dontDo: [
                'Non aspettare il secondo giorno per chiamare il medico',
                'Non uscire di casa durante le fasce di reperibilità della visita fiscale',
                'Non dimenticare di comunicare al medico l\'indirizzo corretto per la reperibilità se diverso dalla residenza'
            ],
            whatToPrepare: [
                'Tessera Sanitaria',
                'Codice Fiscale',
                'Indirizzo completo dove trascorrerai la malattia'
            ],
            commonErrors: [
                'Pensare che il medico mandi il certificato automaticamente senza visita',
                'Sbagliare le fasce di reperibilità (10-12 e 17-19 per i privati, diverse per i pubblici)',
                'Non verificare che il certificato sia stato effettivamente inviato telematicamente'
            ],
            askHelpWhen: [
                'Se il medico di base è assente (rivolgiti alla Guardia Medica)',
                'Se ricevi una contestazione per assenza alla visita fiscale nonostante fossi in casa'
            ],
            whoCanHelp: ['Medico di base (MMG)', 'INPS (Polo unico per le visite fiscali)', 'Guardia Medica'],
            officialLinks: ['https://www.inps.it/it/it/dettaglio-scheda.schede-servizi-e-strumenti.servizi.certificati-di-malattia-telematici-consultazione-per-i-lavoratori.html'],
            checklist: [
                'Datore di lavoro avvisato',
                'Medico contattato',
                'Certificato inviato telematicamente',
                'Numero di protocollo ricevuto',
                'Fasce di reperibilità rispettate'
            ],
            sources: [
                {
                    title: 'Certificati di malattia telematici',
                    organization: 'INPS',
                    url: 'https://www.inps.it/',
                    type: 'official',
                    usedFor: 'Regole invio e consultazione certificati',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Visite mediche di controllo',
                    organization: 'INPS',
                    url: 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizi-e-strumenti.servizi.visite-mediche-di-controllo-vmc-.html',
                    type: 'official',
                    usedFor: 'Orari reperibilità e regole',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'tfr-spiegazione',
            slug: 'tfr-trattamento-fine-rapporto-cos-e',
            title: 'TFR: cos\'è e dove si vede',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Capire il Trattamento di Fine Rapporto, come viene accumulato e le opzioni di destinazione.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'INPS',
            synthesis: 'La "liquidazione": una parte dello stipendio accantonata e rivalutata, pagata alla fine del lavoro.',
            whenToDo: 'All\'assunzione (per scegliere la destinazione) e alla cessazione del rapporto.',
            scenario: 'Vuoi sapere quanti soldi hai messo da parte negli anni o se ti conviene lasciarli in azienda o metterli in un fondo pensione.',
            steps: [
                'Cerca la voce "TFR" o "Accantonamento mese/anno" nell\'ultima busta paga',
                'Decidi se lasciarlo in azienda (scelta silente) o destinarlo alla previdenza complementare',
                'Verifica sul sito INPS il TFR se l\'azienda ha più di 50 dipendenti (Fondo Tesoreria)'
            ],
            doNow: [
                'Verifica l\'accantonamento TFR in busta paga',
                'Scegli la destinazione del TFR (azienda o fondo)'
            ],
            dontDo: [
                'Non pensare che il TFR sia perso se l\'azienda fallisce (c\'è il Fondo di Garanzia INPS)',
                'Non chiedere l\'anticipo senza un motivo valido previsto dalla legge (es. acquisto prima casa, spese mediche)',
                'Non dimenticare di controllare la tassazione separata applicata al momento della liquidazione'
            ],
            whatToPrepare: [
                'Ultime buste paga',
                'Certificazione Unica (CU)',
                'Accesso al portale INPS'
            ],
            commonErrors: [
                'Confondere il TFR lordo con quello netto (è soggetto a tassazione)',
                'Non sapere che serve almeno 8 anni di anzianità per chiedere l\'anticipo',
                'Ignorare i termini di pagamento (spesso non è immediato il giorno dopo il licenziamento)'
            ],
            askHelpWhen: [
                'Se l\'azienda non paga il TFR entro i termini previsti dal CCNL',
                'Se hai dubbi sulla rivalutazione annua applicata'
            ],
            whoCanHelp: ['Ufficio paghe', 'Sindacati', 'Patronati', 'Legali specializzati in diritto del lavoro'],
            officialLinks: ['https://www.inps.it/it/it/dettaglio-scheda.schede-servizi-e-strumenti.servizi.tfr-trattamento-di-fine-rapporto.html'],
            checklist: [
                'Scelta destinazione effettuata (Modulo TFR2)',
                'Accantonamento verificato in busta paga',
                'Quota annua calcolata correttamente (circa una mensilità all\'anno)',
                'Saldo totale verificato periodicamente'
            ],
            sources: [
                {
                    title: 'Trattamento di Fine Rapporto (TFR)',
                    organization: 'INPS',
                    url: 'https://www.inps.it/',
                    type: 'official',
                    usedFor: 'Definizione e fondo di garanzia',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Previdenza Complementare',
                    organization: 'COVIP',
                    url: 'https://www.covip.it/',
                    type: 'official',
                    usedFor: 'Opzioni destinazione TFR',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'stage-tirocinio-diritti',
            slug: 'stage-tirocinio-diritti-minimi',
            title: 'Stage/tirocinio: diritti minimi',
            category: 'lavoro',
            audience: ['studenti', 'lavoratori'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Conoscere la differenza tra stage e lavoro dipendente e i diritti minimi garantiti (indennità, assicurazione).',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Ministero del Lavoro',
            synthesis: 'Il tirocinio non è un rapporto di lavoro ma un percorso formativo con obbligo di indennità minima.',
            whenToDo: 'Prima di iniziare uno stage extra-curriculare (dopo gli studi).',
            scenario: 'Ti hanno proposto uno stage di 6 mesi. Vuoi sapere se devono pagarti, quante ore puoi fare e se hai diritto alle ferie.',
            steps: [
                'Verifica che ci sia un Soggetto Promotore (es. Università, Centro Impiego)',
                'Controlla il Progetto Formativo Individuale (PFI)',
                'Verifica l\'importo dell\'indennità (variabile per regione, ma obbligatoria)',
                'Assicurati che sia attiva la copertura assicurativa INAIL'
            ],
            doNow: [
                'Leggi attentamente il Progetto Formativo',
                'Verifica l\'indennità minima regionale'
            ],
            dontDo: [
                'Non accettare stage non retribuiti se non sono curriculari (inseriti nel piano studi)',
                'Non farti sostituire a lavoratori dipendenti (è illegale)',
                'Non fare orari eccessivi o turni notturni se non previsti dal PFI'
            ],
            whatToPrepare: [
                'Convenzione di tirocinio',
                'Progetto Formativo',
                'Registro delle presenze'
            ],
            commonErrors: [
                'Pensare di avere diritto a malattia pagata o ferie (hai diritto a sospensioni concordate, ma non sono ferie pagate)',
                'Non sapere che lo stage non dà diritto alla NASpI',
                'Confondere il tirocinio con l\'apprendistato (che è un vero contratto di lavoro)'
            ],
            askHelpWhen: [
                'Se ti chiedono di lavorare da solo senza tutor',
                'Se l\'indennità non viene pagata o è inferiore al minimo regionale'
            ],
            whoCanHelp: ['Soggetto promotore (es. ufficio stage università)', 'Ispettorato del Lavoro', 'Sindacati (Settore giovani/NIdiL)'],
            officialLinks: ['https://www.cliclavoro.gov.it/Cittadini/Orientamento-al-lavoro/Pagine/Tirocini.aspx'],
            checklist: [
                'Soggetto promotore identificato',
                'Progetto formativo firmato',
                'Indennità minima garantita verificata',
                'Tutor aziendale assegnato',
                'Assicurazione INAIL presente'
            ],
            sources: [
                {
                    title: 'Linee guida tirocini',
                    organization: 'Conferenza Stato-Regioni / Ministero del Lavoro',
                    url: 'https://www.lavoro.gov.it/',
                    type: 'official',
                    usedFor: 'Normativa nazionale e regionale',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Tirocini formativi',
                    organization: 'Cliclavoro',
                    url: 'https://www.cliclavoro.gov.it/',
                    type: 'official',
                    usedFor: 'Informazioni pratiche per tirocinanti',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'lavoro-nero-aiuto',
            slug: 'lavoro-nero-orientamento-e-aiuto',
            title: 'Lavoro nero: orientamento e aiuto',
            category: 'lavoro',
            audience: ['lavoratori', 'victims'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Cosa fare e a chi rivolgersi se si lavora senza contratto o con pagamenti "fuori busta".',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Ispettorato Nazionale del Lavoro',
            synthesis: 'Tutela dei diritti contributivi e retributivi tramite denuncia o conciliazione.',
            whenToDo: 'Quando ti accorgi che non sei stato regolarizzato o vieni pagato in contanti senza cedolino.',
            scenario: 'Lavori da mesi in un ristorante ma il titolare continua a rimandare la firma del contratto e ti paga a mano.',
            steps: [
                'Raccogli prove della tua presenza (foto, messaggi, testimoni)',
                'Non firmare fogli in bianco o ricevute di pagamento mai avvenute',
                'Rivolgiti a uno sportello sindacale per un calcolo delle differenze retributive',
                'Valuta la denuncia all\'Ispettorato Nazionale del Lavoro'
            ],
            doNow: [
                'Inizia a raccogliere prove del rapporto di lavoro',
                'Contatta un sindacato per assistenza'
            ],
            dontDo: [
                'Non minacciare il datore di lavoro da solo (rischi ritorsioni)',
                'Non pensare che "meglio il nero che niente" (perdi pensione, assicurazione infortuni e diritti)',
                'Non accettare pagamenti tracciati (bonifici) con causali false'
            ],
            whatToPrepare: [
                'Diario dei giorni e orari lavorati',
                'Nomi di colleghi o clienti che possono testimoniare',
                'Messaggi WhatsApp o email di lavoro',
                'Foto del luogo di lavoro o divise'
            ],
            commonErrors: [
                'Aspettare anni prima di agire (alcuni crediti cadono in prescrizione)',
                'Non avere prove scritte del rapporto di lavoro',
                'Pensare che la denuncia porti al licenziamento immediato senza tutele'
            ],
            askHelpWhen: [
                'In caso di infortunio sul lavoro mentre sei in nero (situazione critica, vai al pronto soccorso e di\' la verità)',
                'Se subisci minacce o mobbing'
            ],
            whoCanHelp: ['Ispettorato Nazionale del Lavoro (INL)', 'Guardia di Finanza (117)', 'Sindacati', 'Uffici vertenze'],
            officialLinks: ['https://www.ispettorato.gov.it/'],
            checklist: [
                'Prove raccolte (foto/messaggi)',
                'Diario presenze compilato',
                'Consulenza sindacale effettuata',
                'Denuncia presentata (se deciso)',
                'Richiesta regolarizzazione contributiva inviata'
            ],
            sources: [
                {
                    title: 'Denuncia di lavoro irregolare',
                    organization: 'Ispettorato Nazionale del Lavoro',
                    url: 'https://www.ispettorato.gov.it/it-it/strumenti-e-servizi/Pagine/Richiesta-di-intervento-ispettivo.aspx',
                    type: 'official',
                    usedFor: 'Modalità di denuncia',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Contrasto al lavoro sommerso',
                    organization: 'Ministero del Lavoro',
                    url: 'https://www.lavoro.gov.it/',
                    type: 'official',
                    usedFor: 'Politiche di contrasto e diritti',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        }
    ]
};
