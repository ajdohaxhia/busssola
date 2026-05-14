import { Module } from '@/types';

export const modulo_22_universita_giovani: Module = {
    id: 'modulo-22-universita-giovani',
    title: 'Modulo 22: Università e Giovani',
    description: 'Orientamento per studenti universitari e giovani in cerca della prima occupazione: agevolazioni, borse e carriera.',
    category: 'universita',
    difficulty: 'base',
    icon: 'GraduationCap',
    themeColor: 'accent-indigo',
    lessons: [
        {
            id: 'isee-universitario',
            slug: 'isee-universitario-guida-pratica',
            title: 'ISEE universitario',
            mainEntity: 'AgID',
            category: 'universita',
            audience: ['studenti'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'L\'indicatore economico necessario per ridurre le tasse universitarie e accedere ai servizi.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            synthesis: 'L\'ISEE Università è una variante del modello ISEE standard specifica per le prestazioni del diritto allo studio. Serve a determinare la fascia di contribuzione (tasse) e l\'accesso a borse di studio e collaborazioni studentesche (150 ore).',
            prerequisites: ['DSU (Dichiarazione Sostitutiva Unica) compilata', 'Codice fiscale dei componenti del nucleo familiare'],
            whenToDo: 'Solitamente tra gennaio e ottobre di ogni anno, per l\'iscrizione all\'anno accademico successivo.',
            doNow: [
                'Raccogli i documenti del nucleo familiare (redditi e patrimoni di due anni prima).',
                'Accedi al sito INPS e usa il servizio "ISEE Precompilato" per velocizzare i tempi.',
                'Assicurati di barrare la casella relativa alle "prestazioni agevolate per il diritto allo studio universitario".',
                'Indica per quale studente si richiede l\'ISEE (codice fiscale dello studente).',
                'Una volta ottenuta l\'attestazione, verifica che l\'università la acquisisca automaticamente (solitamente tramite consenso nel portale studenti).'
            ],
            steps: [
                'Raccogli i documenti del nucleo familiare (redditi e patrimoni di due anni prima).',
                'Accedi al sito INPS e usa il servizio "ISEE Precompilato" per velocizzare i tempi.',
                'Assicurati di barrare la casella relativa alle "prestazioni agevolate per il diritto allo studio universitario".',
                'Indica per quale studente si richiede l\'ISEE (codice fiscale dello studente).',
                'Una volta ottenuta l\'attestazione, verifica che l\'università la acquisisca automaticamente (solitamente tramite consenso nel portale studenti).'
            ],
            dontDo: [
                'Non aspettare l\'ultimo giorno prima della scadenza delle tasse: il rilascio dell\'ISEE richiede circa 10-15 giorni.',
                'Non sbagliare la composizione del nucleo familiare (specialmente se lo studente è residente fuori casa ma non è "indipendente" per il fisco).',
                'Non presentare l\'ISEE ordinario se l\'università richiede specificamente quello "per prestazioni universitarie".'
            ],
            commonErrors: [
                'Dimenticare di inserire i saldi e le giacenze medie di tutti i conti correnti e carte prepagate.',
                'Sbagliare l\'indicazione dello studente universitario nel quadro C della DSU.',
                'Non aggiornare l\'ISEE se ci sono stati cambiamenti rilevanti nel reddito (possibilità di ISEE Corrente).'
            ],
            askHelpWhen: [
                'Se i genitori sono separati o divorziati (regole specifiche per il nucleo).',
                'Se sei uno studente straniero con famiglia all\'estero (serve l\'ISEE Parificato).'
            ],
            whoCanHelp: [
                'CAF (servizio gratuito per l\'ISEE)',
                'Segreteria studenti dell\'Università',
                'Ufficio Diritto allo Studio'
            ],
            whereToDo: 'Online sul sito INPS o presso un CAF.',
            timeToComplete: '1 ora per raccogliere i dati, 15 minuti per l\'invio online.',
            practicalDisclaimer: 'Per l\'università l\'ISEE scade solitamente il 31 dicembre, ma le scadenze per le tasse variano da ateneo ad ateneo.',
            sources: [
                {
                    title: 'ISEE Precompilato',
                    organization: 'INPS',
                    url: 'https://www.inps.it/it/it/dettaglio-approfondimento.schede-informative.50088.isee-precompilato.html',
                    type: 'official',
                    usedFor: 'Procedura di richiesta online.',
                    lastCheckedAt: '2024-05-14'
                },
                {
                    title: 'Guida all\'ISEE Università',
                    organization: 'Andisu',
                    url: 'https://www.andisu.it/',
                    type: 'nonprofit',
                    usedFor: 'Dettagli normativi sul diritto allo studio.',
                    lastCheckedAt: '2024-05-14'
                }
            ],
            checklist: [
                'Giacenze medie conti raccolte',
                'Redditi nucleo familiare inseriti',
                'Casella "Diritto allo studio" barrata',
                'Codice fiscale studente inserito',
                'Autorizzazione università verificata'
            ],
            relatedGlossaryTerms: ['DSU', 'ISEE Corrente', 'Nucleo familiare']
        },
        {
            id: 'borse-studio-regionali',
            slug: 'borse-di-studio-regionali-universita',
            title: 'Borse di studio regionali',
            mainEntity: 'AgID',
            category: 'universita',
            audience: ['studenti'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come ottenere contributi economici, posti letto e pasti gratuiti tramite gli enti regionali.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            synthesis: 'Ogni Regione ha un ente (es. EDiSU, ER.GO, DiSCo) che gestisce le borse di studio basate sul reddito (ISEE) e sul merito (CFU). I benefici includono una somma in denaro, l\'esenzione dalle tasse e l\'accesso agevolato a mense e residenze.',
            prerequisites: ['Iscrizione a un\'università italiana', 'ISEE universitario sotto la soglia prevista (solitamente 24-26k)'],
            whenToDo: 'Tra luglio e settembre (le date variano per Regione e tipo di studente: matricola o anni successivi).',
            doNow: [
                'Individua l\'ente regionale per il diritto allo studio della tua università.',
                'Leggi attentamente il "Bando Unico" dell\'anno accademico in corso.',
                'Compila la domanda online sul sito dell\'ente regionale.',
                'Allega l\'ISEE universitario (o autorizza l\'ente a prelevarlo dalla banca dati INPS).',
                'Controlla periodicamente le graduatorie provvisorie e definitive.'
            ],
            steps: [
                'Individua l\'ente regionale per il diritto allo studio della tua università.',
                'Leggi attentamente il "Bando Unico" dell\'anno accademico in corso.',
                'Compila la domanda online sul sito dell\'ente regionale.',
                'Allega l\'ISEE universitario (o autorizza l\'ente a prelevarlo dalla banca dati INPS).',
                'Controlla periodicamente le graduatorie provvisorie e definitive.'
            ],
            dontDo: [
                'Non dimenticare di caricare il numero di matricola appena ottenuto.',
                'Non perdere le scadenze: anche un solo giorno di ritardo comporta l\'esclusione.',
                'Non dare informazioni false: i controlli sono rigorosi e comportano la restituzione totale del beneficio con sanzioni.'
            ],
            commonErrors: [
                'Dimenticare di confermare la domanda online (spesso serve un ultimo click dopo il caricamento).',
                'Non raggiungere il numero minimo di CFU entro la scadenza estiva per mantenere la borsa.',
                'Sbagliare lo status di studente (in sede, pendolare, fuori sede).'
            ],
            askHelpWhen: [
                'Se hai problemi con il calcolo dei CFU necessari.',
                'Se risulti "idoneo non beneficiario" (significa che hai i requisiti ma mancano i fondi).'
            ],
            whoCanHelp: [
                'Ufficio Relazioni con il Pubblico dell\'ente regionale',
                'Rappresentanti degli studenti',
                'Associazioni universitarie'
            ],
            whereToDo: 'Portale web dell\'ente regionale per il diritto allo studio.',
            timeToComplete: '45 minuti.',
            practicalDisclaimer: 'Se abbandoni gli studi o non ottieni i crediti minimi entro l\'anno, dovrai restituire i soldi della borsa.',
            sources: [
                {
                    title: 'Diritto allo studio universitario',
                    organization: 'Ministero dell\'Università e della Ricerca',
                    url: 'https://www.mur.gov.it/it/aree-tematiche/universita/studenti/diritto-allo-studio-universitario',
                    type: 'official',
                    usedFor: 'Quadro normativo nazionale.',
                    lastCheckedAt: '2024-05-14'
                },
                {
                    title: 'Sito ufficiale ente regionale (es. EDISU)',
                    organization: 'Enti Regionali DSU',
                    url: 'https://www.istruzione.it/',
                    type: 'institutional',
                    usedFor: 'Dettaglio bandi e scadenze.',
                    lastCheckedAt: '2024-05-14'
                }
            ],
            checklist: [
                'Bando regionale letto',
                'ISEE universitario ottenuto',
                'Domanda online inviata',
                'CFU necessari verificati',
                'Graduatorie controllate'
            ],
            relatedGlossaryTerms: ['CFU (Credito Formativo Universitario)', 'Idoneo non beneficiario', 'Fuori sede']
        },
        {
            id: 'alloggi-studenti-cerca',
            slug: 'alloggi-studenti-cerca-casa',
            title: 'Alloggi studenti',
            mainEntity: 'AgID',
            category: 'universita',
            audience: ['studenti'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Consigli per trovare una stanza, conoscere i tipi di contratto e ottenere agevolazioni fiscali.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            synthesis: 'Trovare casa nelle città universitarie è una sfida. Esistono tre vie principali: le residenze universitarie (tramite bando), i collegi di merito e il mercato privato. È essenziale pretendere un contratto regolare per sicurezza e per detrazioni fiscali.',
            prerequisites: ['Budget mensile definito', 'Certificato di iscrizione all\'università'],
            whenToDo: 'Almeno 2-3 mesi prima dell\'inizio delle lezioni (maggio-luglio è il periodo migliore).',
            doNow: [
                'Consulta i bandi regionali per i posti letto nelle residenze universitarie.',
                'Cerca sui portali specializzati o nei gruppi social dell\'università, ma diffida da chi chiede soldi senza visita.',
                'Verifica la vicinanza ai mezzi pubblici o alla sede universitaria.',
                'Leggi bene il contratto: per gli studenti esiste il "Contratto Transitorio per Studenti Universitari" a canone concordato.',
                'Registra il contratto all\'Agenzia delle Entrate (spetta al proprietario ma verifica che lo faccia).'
            ],
            steps: [
                'Consulta i bandi regionali per i posti letto nelle residenze universitarie.',
                'Cerca sui portali specializzati o nei gruppi social dell\'università, ma diffida da chi chiede soldi senza visita.',
                'Verifica la vicinanza ai mezzi pubblici o alla sede universitaria.',
                'Leggi bene il contratto: per gli studenti esiste il "Contratto Transitorio per Studenti Universitari" a canone concordato.',
                'Registra il contratto all\'Agenzia delle Entrate (spetta al proprietario ma verifica che lo faccia).'
            ],
            dontDo: [
                'Non pagare mai caparre o "anticipi per bloccare la stanza" senza aver visto la casa e il proprietario di persona.',
                'Non accettare affitti "in nero": perdi il diritto a detrazioni e sei senza tutele legali.',
                'Non sottovalutare le spese condominiali e le utenze (chiedi se sono incluse nel prezzo).'
            ],
            commonErrors: [
                'Firmare un contratto senza clausola di recesso anticipato per lo studente.',
                'Dimenticare di fare il verbale di consegna con le foto della stanza per evitare che ti trattengano la cauzione alla fine.',
                'Non controllare lo stato degli elettrodomestici e degli infissi durante la visita.'
            ],
            askHelpWhen: [
                'Se il proprietario non ti restituisce la cauzione senza motivo.',
                'Se scopri che la casa ha problemi strutturali o di muffa nascosti.'
            ],
            whoCanHelp: [
                'Ufficio Alloggi dell\'Università',
                'Sindacati inquilini (SUNIA, ecc.)',
                'Agenzia delle Entrate (per verifica registrazione)'
            ],
            whereToDo: 'Siti di annunci, bacheche universitarie e uffici DSU.',
            timeToComplete: 'Diverse settimane di ricerca.',
            practicalDisclaimer: 'Le spese per l\'affitto dei "fuori sede" sono detraibili dalle tasse dei genitori se il comune è ad almeno 100km di distanza.',
            sources: [
                {
                    title: 'Detrazioni affitto studenti fuori sede',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/portale/web/guest/schede/agevolazioni/detrazioni-spese-affitto-studenti-fuori-sede',
                    type: 'official',
                    usedFor: 'Vantaggi fiscali per le famiglie.',
                    lastCheckedAt: '2024-05-14'
                },
                {
                    title: 'Residenze Universitarie',
                    organization: 'Ministero dell\'Università',
                    url: 'https://www.mur.gov.it/',
                    type: 'official',
                    usedFor: 'Mappatura alloggi pubblici.',
                    lastCheckedAt: '2024-05-14'
                }
            ],
            checklist: [
                'Budget stabilito',
                'Bando residenze controllato',
                'Visita alla stanza effettuata',
                'Contratto letto e firmato',
                'Verbale di consegna fatto'
            ],
            relatedGlossaryTerms: ['Canone concordato', 'Cedolare secca', 'Deposito cauzionale']
        },
        {
            id: 'cv-primo-lavoro-giovani',
            slug: 'cv-primo-lavoro-guida-giovani',
            title: 'CV primo lavoro',
            mainEntity: 'AgID',
            category: 'universita',
            audience: ['studenti'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Come valorizzare le tue competenze anche se non hai ancora esperienza lavorativa specifica.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            synthesis: 'Il primo CV deve puntare sulla formazione, sulle "soft skills" e sulle esperienze extra-curriculari (volontariato, sport, piccoli lavori). Deve essere pulito, chiaro e personalizzato per l\'azienda a cui lo invii.',
            prerequisites: ['Un indirizzo email professionale (es. nome.cognome@mail.com)'],
            whenToDo: 'Già durante l\'ultimo anno di studi o subito dopo la laurea/diploma.',
            doNow: [
                'Scegli un formato leggibile (Europass o un template moderno su Canva).',
                'Inserisci i tuoi dati di contatto in alto in modo visibile.',
                'Scrivi un breve "Profilo" di 3 righe che riassuma chi sei e cosa cerchi.',
                'Dettaglia il tuo percorso di studi, evidenziando tesi o progetti rilevanti.',
                'Inserisci competenze digitali, lingue (con certificazioni) e hobby significativi.'
            ],
            steps: [
                'Scegli un formato leggibile (Europass o un template moderno su Canva).',
                'Inserisci i tuoi dati di contatto in alto in modo visibile.',
                'Scrivi un breve "Profilo" di 3 righe che riassuma chi sei e cosa cerchi.',
                'Dettaglia il tuo percorso di studi, evidenziando tesi o progetti rilevanti.',
                'Inserisci competenze digitali, lingue (con certificazioni) e hobby significativi.'
            ],
            dontDo: [
                'Non mentire: le bugie vengono smascherate facilmente al colloquio.',
                'Non inviare lo stesso CV identico a 100 aziende diverse: personalizzalo sempre.',
                'Non superare le 1-2 pagine: i selezionatori hanno poco tempo.'
            ],
            commonErrors: [
                'Errori di ortografia o grammatica (fai sempre rileggere a qualcuno).',
                'Inserire una foto poco professionale (es. ritaglio da una festa).',
                'Dimenticare l\'autorizzazione al trattamento dei dati personali (GDPR).'
            ],
            askHelpWhen: [
                'Se non ricevi risposte dopo molti invii (forse il CV va riscritto).',
                'Se hai dubbi su come descrivere un\'esperienza particolare.'
            ],
            whoCanHelp: [
                'Career Service dell\'Università',
                'Centri per l\'Impiego (servizio orientamento)',
                'Informagiovani del Comune'
            ],
            whereToDo: 'Al computer.',
            timeToComplete: '2-3 ore per la prima versione ben fatta.',
            practicalDisclaimer: 'Accompagna sempre il CV con una breve Lettera di Presentazione nel corpo della mail.',
            sources: [
                {
                    title: 'Europass: Crea il tuo CV',
                    organization: 'Unione Europea',
                    url: 'https://europa.eu/europass/it/create-europass-cv',
                    type: 'institutional',
                    usedFor: 'Strumento ufficiale di creazione CV.',
                    lastCheckedAt: '2024-05-14'
                },
                {
                    title: 'Orientamento al lavoro',
                    organization: 'Anpal / Ministero del Lavoro',
                    url: 'https://www.anpal.gov.it/',
                    type: 'official',
                    usedFor: 'Consigli per la ricerca attiva di lavoro.',
                    lastCheckedAt: '2024-05-14'
                }
            ],
            checklist: [
                'Email professionale usata',
                'Formazione descritta bene',
                'Soft skills inserite',
                'Controllo ortografico fatto',
                'Clausola GDPR inserita'
            ],
            relatedGlossaryTerms: ['Soft Skills', 'Hard Skills', 'Europass']
        }
    ]
};
