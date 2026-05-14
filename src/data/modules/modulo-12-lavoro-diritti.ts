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
            id: 'busta-paga-lettura-guida',
            slug: 'come-leggere-busta-paga',
            title: 'Come leggere una busta paga base',
            mainEntity: 'CNEL',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Impara a decifrare le voci principali del tuo cedolino: lordo, netto, trattenute e ferie.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: [
                'Avere un contratto di lavoro subordinato',
                'Ricevere regolarmente il cedolino (cartaceo o digitale)'
            ],
            whatToPrepare: [
                'L\'ultima busta paga ricevuta',
                'Il contratto di assunzione per verificare il livello'
            ],
            estimatedCosts: 'Gratuito',
            timeToComplete: '15 minuti',
            steps: [
                'Controlla la "Testata": verifica dati anagrafici, livello, mansione e paga base',
                'Analizza il "Corpo": guarda le ore lavorate, straordinari, assegni familiari e bonus',
                'Verifica le "Trattenute": contributi INPS e tasse IRPEF (ritenute fiscali)',
                'Guarda il "Piede": controlla il netto a pagare e i contatori delle ferie/permessi',
                'Confronta il "Netto a pagare" con l\'importo accreditato in banca'
            ],
            officialLinksV2: [
                {
                    sourceId: 'adeCfTs',
                    label: 'Guida alle detrazioni',
                    useWhen: 'Per capire come funzionano le detrazioni per carichi di famiglia',
                    beforeOpening: ['Tieni pronto il tuo Codice Fiscale']
                }
            ],
            commonErrors: [
                'Confondere il "Lordo" con il "Netto"',
                'Non controllare se le ferie godute corrispondono a quelle effettivamente fatte',
                'Ignorare variazioni sospette nel netto mensile'
            ],
            dontDo: [
                'Non buttare i cedolini: ti serviranno per la pensione, mutui o prestiti',
                'Non firmare la busta paga per "ricevuta dei soldi" se non hai ancora ricevuto il bonifico'
            ],
            ifYouHaveProblems: [
                'Chiedi chiarimenti all\'ufficio Risorse Umane o al Consulente del Lavoro dell\'azienda',
                'Rivolgiti a un Sindacato per un controllo formale dei conteggi'
            ],
            checklist: [
                'I dati anagrafici sono corretti',
                'Il livello corrisponde al contratto',
                'Le ore lavorate sono giuste',
                'Il netto corrisponde al bonifico',
                'Le ferie residue sono aggiornate'
            ],
            sources: [
                {
                    title: 'Guida alla lettura del cedolino',
                    organization: 'CNEL',
                    url: 'https://www.cnel.it/',
                    type: 'official',
                    usedFor: 'Standardizzazione voci',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'tfr-controllo-guida',
            slug: 'come-controllare-tfr',
            title: 'Come controllare il TFR',
            mainEntity: 'INPS',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Scopri quanto Trattamento di Fine Rapporto hai accumulato e dove si trova.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: [
                'Almeno 6 mesi di anzianità lavorativa',
                'Credenziali SPID o CIE'
            ],
            whatToPrepare: [
                'Ultime buste paga dell\'anno',
                'Certificazione Unica (CU) dell\'anno precedente'
            ],
            estimatedCosts: 'Gratuito',
            timeToComplete: '10 minuti',
            steps: [
                'Cerca la voce "Fondo TFR" o "Accantonamento annuo" nella tua busta paga (solitamente in basso)',
                'Verifica se hai scelto di lasciare il TFR in azienda o in un fondo pensione',
                'Se l\'azienda ha più di 50 dipendenti, accedi al sito INPS per vedere il "Fondo Tesoreria"',
                'Se hai un fondo pensione, accedi all\'area riservata del fondo per vedere il saldo'
            ],
            officialLinksV2: [
                {
                    sourceId: 'inpsHome',
                    label: 'TFR in INPS',
                    url: 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizi-e-strumenti.servizi.tfr-trattamento-di-fine-rapporto.html',
                    useWhen: 'Per verificare il TFR versato al Fondo di Tesoreria INPS',
                    beforeOpening: ['Entra con SPID']
                }
            ],
            commonErrors: [
                'Pensare che il TFR in busta paga sia già al netto delle tasse (verrà tassato alla fine)',
                'Dimenticare di aver scelto un fondo pensione anni prima'
            ],
            dontDo: [
                'Non chiedere l\'anticipo del TFR se non hai almeno 8 anni di servizio (salvo casi eccezionali)',
                'Non preoccuparti eccessivamente se non vedi il saldo totale in ogni busta paga: alcune aziende indicano solo l\'incremento mensile'
            ],
            ifYouHaveProblems: [
                'Se l\'azienda non versa il TFR al fondo scelto, segnalalo immediatamente al rappresentante sindacale',
                'In caso di fallimento dell\'azienda, rivolgiti al Fondo di Garanzia INPS'
            ],
            checklist: [
                'So dove viene accantonato il mio TFR',
                'Ho verificato l\'importo accumulato nell\'ultimo anno',
                'Conosco la procedura per chiedere un eventuale anticipo'
            ],
            sources: [
                {
                    title: 'Fondo di Garanzia TFR',
                    organization: 'INPS',
                    url: 'https://www.inps.it/',
                    type: 'official',
                    usedFor: 'Tutele in caso di insolvenza',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'documenti-colloquio-preparazione',
            slug: 'come-preparare-documenti-colloquio',
            title: 'Come preparare documenti per un colloquio',
            mainEntity: 'ANPAL',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Cosa portare con sé a un colloquio di lavoro per dare un\'impressione professionale e completa.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: [
                'Avere un colloquio fissato'
            ],
             whatToPrepare: [
                'Copie cartacee del CV aggiornato',
                'Documento di identità e Codice Fiscale',
                'Eventuali certificati o diplomi originali/copie',
                'Portfolio lavori (se applicabile)',
                'Penna e taccuino per appunti'
            ],
            estimatedCosts: 'Pochi euro per le stampe',
            timeToComplete: '30 minuti di preparazione',
            steps: [
                'Aggiorna il CV e stampane almeno 2 copie (una per te, una per l\'intervistatore)',
                'Prepara una cartellina pulita con tutti i documenti ordinati',
                'Porta una copia del tuo documento di identità e codice fiscale (potrebbero servire per l\'ingresso in azienda)',
                'Se hai attestati di corsi specifici citati nel CV, portali con te',
                'Segnati le domande che vuoi fare all\'azienda sul tuo taccuino'
            ],
            officialLinksV2: [
                {
                    sourceId: 'inpsHome',
                    label: 'Modello Europass CV',
                    url: 'https://europa.eu/europass/it',
                    useWhen: 'Per creare un CV standard riconosciuto in tutta Europa',
                    beforeOpening: ['Puoi compilarlo online e scaricarlo in PDF']
                }
            ],
            commonErrors: [
                'Portare un CV vecchio o con errori di battitura',
                'Non avere una copia del proprio documento',
                'Cercare i file sul telefono all\'ultimo momento perché non sono stati stampati'
            ],
            dontDo: [
                'Non consegnare documenti sgualciti o sporchi',
                'Non dare per scontato che l\'intervistatore abbia già stampato il tuo CV'
            ],
            ifYouHaveProblems: [
                'Se non hai una stampante, vai in una copisteria o in biblioteca',
                'Se hai smarrito un diploma, chiedi un certificato sostitutivo alla scuola/università'
            ],
            checklist: [
                'CV aggiornato e stampato',
                'Documento di identità valido',
                'Cartellina ordinata',
                'Penna funzionante',
                'Indirizzo e nome del referente segnati'
            ],
            sources: [
                {
                    title: 'Guida alla ricerca del lavoro',
                    organization: 'ANPAL',
                    url: 'https://www.anpal.gov.it/',
                    type: 'official',
                    usedFor: 'Consigli carriera',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'scelta-caf-patronato-sindacato',
            slug: 'come-capire-serve-caf-patronato-sindacato',
            title: 'Come capire se serve CAF, patronato o sindacato',
            mainEntity: 'Ministero del Lavoro',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Guida rapida per distinguere i vari enti di assistenza e scegliere quello giusto per le tue esigenze.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: [
                'Necessità di assistenza fiscale, previdenziale o lavorativa'
            ],
            whatToPrepare: [
                'Descrizione chiara del problema o della pratica da svolgere'
            ],
            estimatedCosts: 'Variabile (spesso gratuito per gli iscritti o con tariffe agevolate)',
            timeToComplete: '5 minuti di lettura',
            steps: [
                'Scegli il **CAF** per questioni FISCALI: dichiarazione dei redditi (730), ISEE, IMU, successioni',
                'Scegli il **Patronato** per questioni PREVIDENZIALI: pensioni, NASpI, maternità, invalidità, assegni familiari',
                'Scegli il **Sindacato** per questioni CONTRATTUALI: controllo busta paga, vertenze, licenziamenti, mobbing',
                'Controlla se l\'ente scelto richiede un appuntamento o l\'iscrizione (tessera)'
            ],
            officialLinksV2: [
                {
                    sourceId: 'inpsElencoPatronati',
                    label: 'Elenco Patronati convenzionati',
                    useWhen: 'Per trovare un patronato riconosciuto dall\'INPS',
                    beforeOpening: []
                }
            ],
            commonErrors: [
                'Andare al CAF per chiedere la pensione (serve il Patronato)',
                'Andare al Patronato per fare il 730 (serve il CAF)',
                'Pensare che siano tutti organi dello Stato (sono enti privati convenzionati o legati alle parti sociali)'
            ],
            dontDo: [
                'Non pagare cifre elevate per pratiche che dovrebbero essere gratuite per legge (come la NASpI)',
                'Non dare deleghe in bianco senza aver capito cosa si sta firmando'
            ],
            ifYouHaveProblems: [
                'Se non sei soddisfatto dell\'assistenza, puoi revocare la delega e rivolgerti a un altro ufficio',
                'Verifica sempre le recensioni o chiedi consiglio a conoscenti per trovare uffici affidabili'
            ],
            checklist: [
                'Ho capito la differenza tra i tre enti',
                'Ho individuato quello adatto alla mia pratica',
                'Ho controllato se serve un appuntamento'
            ],
            sources: [
                {
                    title: 'Disciplina dei Patronati',
                    organization: 'Ministero del Lavoro',
                    url: 'https://www.lavoro.gov.it/',
                    type: 'official',
                    usedFor: 'Definizione ruoli',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'contratto-lavoro-controllo-guida',
            slug: 'cosa-controllare-contratto-lavoro',
            title: 'Contratto di lavoro: cosa controllare',
            mainEntity: 'Ministero del Lavoro',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 20,
            summary: 'Le clausole fondamentali da verificare prima di firmare un nuovo contratto di assunzione.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: [
                'Bozza di contratto ricevuta'
            ],
            whatToPrepare: [
                'Documento di identità',
                'Codice Fiscale',
                'Calcolatrice per il calcolo lordo/netto'
            ],
            estimatedCosts: 'Gratuito',
            timeToComplete: '20 minuti',
            steps: [
                'Verifica la tipologia contrattuale (Indeterminato, Determinato, Apprendistato)',
                'Controlla il CCNL di riferimento e il livello di inquadramento',
                'Verifica la Retribuzione Annua Lorda (RAL) e il numero di mensilità (13 o 14)',
                'Controlla la durata del periodo di prova',
                'Verifica la sede di lavoro e l\'orario settimanale'
            ],
            officialLinksV2: [
                {
                    sourceId: 'cnelArchivioContratti',
                    label: 'Archivio Contratti CNEL',
                    useWhen: 'Per consultare il testo completo del tuo CCNL',
                    beforeOpening: []
                }
            ],
            commonErrors: [
                'Firmare senza sapere quanto sarà il netto mensile',
                'Non notare clausole di non concorrenza eccessivamente restrittive',
                'Dimenticare di verificare la durata del preavviso in uscita'
            ],
            dontDo: [
                'Non farti pressare per firmare subito: hai diritto a portare il contratto a casa per leggerlo con calma',
                'Non accettare accordi verbali su benefit o aumenti: se non sono scritti, non valgono'
            ],
            ifYouHaveProblems: [
                'Se il contratto non cita un CCNL conosciuto, chiedi chiarimenti',
                'Fai analizzare la bozza a un esperto di un Sindacato'
            ],
            checklist: [
                'RAL specificata correttamente',
                'Livello corrispondente alle mansioni',
                'Periodo di prova chiaro',
                'Sede di lavoro definita'
            ],
            sources: [
                {
                    title: 'Tipologie contrattuali',
                    organization: 'Ministero del Lavoro',
                    url: 'https://www.lavoro.gov.it/',
                    type: 'official',
                    usedFor: 'Quadro normativo',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'malattia-certificato-medico-guida',
            slug: 'guida-malattia-lavoro',
            title: 'Malattia e certificato medico',
            mainEntity: 'INPS',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Cosa fare quando non puoi andare al lavoro per salute: obblighi, orari e visite fiscali.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: [
                'Stato di malattia'
            ],
            whatToPrepare: [
                'Tessera Sanitaria',
                'Indirizzo completo di reperibilità'
            ],
            estimatedCosts: 'Gratuito (visita medica di base)',
            timeToComplete: '1 ora (per la visita)',
            steps: [
                'Avvisa tempestivamente il datore di lavoro dell\'assenza',
                'Recati dal medico di base il primo giorno di malattia',
                'Assicurati che il medico invii il certificato telematico all\'INPS',
                'Fatti dare il Numero di Protocollo del certificato',
                'Resta reperibile a casa durante le fasce orarie per la visita fiscale'
            ],
            officialLinksV2: [
                {
                    sourceId: 'inpsCertificatiMalattia',
                    label: 'Consulta certificati online',
                    useWhen: 'Per verificare che il medico abbia inviato correttamente il certificato',
                    beforeOpening: []
                }
            ],
            commonErrors: [
                'Dimenticare di avvisare il datore via mail o telefono',
                'Uscire di casa durante le fasce di reperibilità (10-12 e 17-19 per i privati)',
                'Aspettare il secondo giorno per chiamare il medico'
            ],
            dontDo: [
                'Non dare per scontato che il medico mandi il certificato senza visitarti',
                'Non dimenticare di segnalare al medico se l\'indirizzo di malattia è diverso dalla residenza'
            ],
            ifYouHaveProblems: [
                'Se il medico di base è assente, rivolgiti alla Guardia Medica',
                'In caso di contestazione per assenza alla visita fiscale, hai 10 giorni per giustificarti'
            ],
            checklist: [
                'Datore di lavoro avvisato',
                'Visita medica effettuata',
                'Numero di protocollo ricevuto',
                'Fasce di reperibilità note'
            ],
            sources: [
                {
                    title: 'Regole sulla malattia',
                    organization: 'INPS',
                    url: 'https://www.inps.it/',
                    type: 'official',
                    usedFor: 'Disciplina visite fiscali',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'stage-tirocinio-diritti-guida',
            slug: 'diritti-stage-tirocinio',
            title: 'Stage/tirocinio: diritti minimi',
            mainEntity: 'Conferenza Stato-Regioni',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Conosci i tuoi diritti durante un tirocinio: indennità, assicurazione e orari.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: [
                'Inizio di un tirocinio extra-curriculare'
            ],
            whatToPrepare: [
                'Progetto Formativo Individuale (PFI)',
                'Convenzione di tirocinio'
            ],
            estimatedCosts: 'Gratuito',
            timeToComplete: '15 minuti',
            steps: [
                'Verifica che l\'indennità minima corrisponda a quanto stabilito dalla tua Regione',
                'Controlla la presenza di un tutor aziendale e di un tutor del soggetto promotore',
                'Assicurati di essere coperto dall\'assicurazione INAIL e per la responsabilità civile',
                'Rispetta gli orari previsti dal Progetto Formativo',
                'Ricorda che il tirocinio non è un rapporto di lavoro subordinato'
            ],
            officialLinksV2: [
                {
                    sourceId: 'lavoroTirocini',
                    label: 'Linee guida Tirocini',
                    useWhen: 'Per conoscere la normativa nazionale e regionale',
                    beforeOpening: []
                }
            ],
            commonErrors: [
                'Confondere lo stage con un lavoro dipendente (non c\'è obbligo di ferie o malattia pagata)',
                'Svolgere mansioni che non corrispondono al Progetto Formativo',
                'Lavorare senza la presenza di un tutor'
            ],
            dontDo: [
                'Non accettare stage non retribuiti (se extra-curriculari)',
                'Non farti sostituire a personale dipendente in momenti di picco o per sostituire lavoratori in ferie'
            ],
            ifYouHaveProblems: [
                'Contatta il soggetto promotore (es. Università, Centro per l\'Impiego)',
                'Segnala eventuali abusi all\'Ispettorato del Lavoro'
            ],
            checklist: [
                'Progetto Formativo firmato',
                'Indennità minima garantita',
                'Assicurazione attiva',
                'Tutor assegnato'
            ],
            sources: [
                {
                    title: 'Accordo Stato-Regioni sui tirocini',
                    organization: 'Conferenza Stato-Regioni',
                    url: 'https://www.lavoro.gov.it/',
                    type: 'official',
                    usedFor: 'Requisiti minimi',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'lavoro-nero-orientamento-guida',
            slug: 'aiuto-lavoro-nero',
            title: 'Lavoro nero: orientamento e aiuto',
            mainEntity: 'Ispettorato Nazionale del Lavoro',
            category: 'lavoro',
            audience: ['lavoratori'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Cosa fare e a chi rivolgersi se lavori senza contratto o in modo irregolare.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: [
                'Situazione di lavoro irregolare (totale o parziale)'
            ],
            whatToPrepare: [
                'Prove del rapporto di lavoro (foto, messaggi, testimoni)',
                'Diario dei giorni e delle ore lavorate'
            ],
            estimatedCosts: 'Gratuito',
            timeToComplete: '15 minuti',
            steps: [
                'Raccogli in modo discreto tutte le prove della tua presenza sul posto di lavoro',
                'Non firmare documenti di cui non sei sicuro o fogli in bianco',
                'Rivolgiti a uno sportello sindacale per un calcolo delle differenze retributive',
                'Valuta di presentare una richiesta di intervento all\'Ispettorato Nazionale del Lavoro (INL)',
                'In caso di infortunio, comunica sempre la verità al pronto soccorso sulla dinamica e sul luogo'
            ],
            officialLinksV2: [
                {
                    sourceId: 'inlRichiestaIntervento',
                    label: 'Ispettorato Nazionale del Lavoro',
                    useWhen: 'Per denunciare irregolarità lavorative',
                    beforeOpening: []
                }
            ],
            commonErrors: [
                'Pensare che senza contratto non si abbiano diritti (i diritti esistono anche nel lavoro di fatto)',
                'Aspettare anni prima di agire (alcuni crediti cadono in prescrizione)',
                'Cancellare messaggi o prove del lavoro'
            ],
            dontDo: [
                'Non minacciare il datore di lavoro: agisci sempre tramite vie legali o sindacali',
                'Non accettare "transazioni" a voce senza assistenza di un esperto'
            ],
            ifYouHaveProblems: [
                'Contatta il numero di emergenza 117 (Guardia di Finanza) per segnalazioni urgenti',
                'Chiedi assistenza legale a un avvocato giuslavorista o a un ufficio vertenze sindacale'
            ],
            checklist: [
                'Prove raccolte',
                'Diario presenze compilato',
                'Consulenza sindacale effettuata',
                'Denuncia pronta (se necessaria)'
            ],
            sources: [
                {
                    title: 'Guida ai diritti del lavoratore',
                    organization: 'Ispettorato Nazionale del Lavoro',
                    url: 'https://www.ispettorato.gov.it/',
                    type: 'official',
                    usedFor: 'Tutele legali',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        }
    ]
};
