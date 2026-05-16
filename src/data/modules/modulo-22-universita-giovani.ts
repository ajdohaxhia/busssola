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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Guida all\'ISEE Università',
                    organization: 'Andisu',
                    url: 'https://www.andisu.it/',
                    type: 'nonprofit',
                    usedFor: 'Dettagli normativi sul diritto allo studio.',
                    lastCheckedAt: '2026-05-14'
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Sito ufficiale ente regionale (es. EDISU)',
                    organization: 'Enti Regionali DSU',
                    url: 'https://www.istruzione.it/',
                    type: 'institutional',
                    usedFor: 'Dettaglio bandi e scadenze.',
                    lastCheckedAt: '2026-05-14'
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Residenze Universitarie',
                    organization: 'Ministero dell\'Università',
                    url: 'https://www.mur.gov.it/',
                    type: 'official',
                    usedFor: 'Mappatura alloggi pubblici.',
                    lastCheckedAt: '2026-05-14'
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
            lastReviewedAt: '2026-05-16',
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Orientamento al lavoro',
                    organization: 'Anpal / Ministero del Lavoro',
                    url: 'https://www.anpal.gov.it/',
                    type: 'official',
                    usedFor: 'Consigli per la ricerca attiva di lavoro.',
                    lastCheckedAt: '2026-05-14'
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
        },
        {
            id: 'tasse-universitarie-guida',
            slug: 'tasse-universitarie-scadenze-e-rate',
            title: 'Tasse universitarie',
            mainEntity: 'Università',
            category: 'universita',
            audience: ['studenti'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come funzionano le rate, la "no tax area" e i rimborsi per merito.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Le tasse universitarie sono divise in tre parti: l\'imposta di bollo, la tassa regionale per il diritto allo studio e il contributo onnicomprensivo annuale dell\'ateneo (calcolato in base all\'ISEE).',
            prerequisites: ['ISEE universitario in corso di validità'],
            whenToDo: 'Solitamente tre scadenze: ottobre (iscrizione), gennaio (seconda rata) e maggio (terza rata).',
            doNow: [
                'Verifica se rientri nella "No Tax Area" (ISEE sotto i 22.000€, variabile per ateneo).',
                'Controlla sul portale studenti l\'avviso di pagamento PagoPA per la prima rata.',
                'Autorizza l\'università ad acquisire l\'ISEE dalla banca dati INPS.',
                'Paga le rate entro le scadenze per evitare le morose (multe per ritardo).',
                'Verifica se hai diritto a rimborsi per merito (es. media alta o laurea in corso).'
            ],
            steps: [
                'Verifica se rientri nella "No Tax Area" (ISEE sotto i 22.000€, variabile per ateneo).',
                'Controlla sul portale studenti l\'avviso di pagamento PagoPA per la prima rata.',
                'Autorizza l\'università ad acquisire l\'ISEE dalla banca dati INPS.',
                'Paga le rate entro le scadenze per evitare le morose (multe per ritardo).',
                'Verifica se hai diritto a rimborsi per merito (es. media alta o laurea in corso).'
            ],
            dontDo: [
                'Non dimenticare di pagare la tassa regionale: senza quella non puoi dare esami, anche se hai pagato il resto.',
                'Non aspettare l\'ultimo giorno: il sistema PagoPA può metterci 24h a comunicare il pagamento all\'ateneo.'
            ],
            commonErrors: [
                'Dimenticare di inserire l\'ISEE, pagando così la fascia massima (anche oltre 3000€).',
                'Pensare che la borsa di studio paghi tutto automaticamente (spesso serve comunque pagare il bollo da 16€).'
            ],
            askHelpWhen: [
                'Se il calcolo delle tasse sul portale ti sembra errato rispetto al tuo ISEE.',
                'Se hai difficoltà economiche improvvise (chiedi rateizzazioni extra o bonus disagio).'
            ],
            whoCanHelp: [
                'Ufficio Tasse dell\'Università',
                'Segreteria Studenti',
                'CAF (per errori ISEE)'
            ],
            whereToDo: 'Portale studenti dell\'università.',
            timeToComplete: '5 minuti per il pagamento.',
            practicalDisclaimer: 'Molte università rimborsano la tassa regionale agli studenti che vincono la borsa di studio.',
            sources: [
                {
                    title: 'Contribuzione studentesca',
                    organization: 'Ministero dell\'Università',
                    url: 'https://www.mur.gov.it/',
                    type: 'official',
                    usedFor: 'Quadro normativo No Tax Area.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'ISEE universitario acquisito',
                'Fascia di reddito corretta',
                'Prima rata/bollo pagato',
                'Scadenze successive in calendario',
                'Tassa regionale verificata'
            ],
            relatedGlossaryTerms: ['No Tax Area', 'Mora', 'Contributo onnicomprensivo']
        },
        {
            id: 'rinuncia-sospensione-studi',
            slug: 'rinuncia-o-sospensione-studi-universitari',
            title: 'Rinuncia/sospensione studi',
            mainEntity: 'Università',
            category: 'universita',
            audience: ['studenti'],
            level: 'intermedia',
            estimatedMinutes: 7,
            summary: 'Cosa fare se decidi di interrompere il percorso universitario temporaneamente o per sempre.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'La rinuncia agli studi è un atto irrevocabile che chiude la carriera scolastica. La sospensione (o interruzione) permette invece di "congelare" gli studi per motivi di salute, maternità o lavoro, evitando di pagare le tasse per quel periodo.',
            prerequisites: ['Regolarità con i pagamenti degli anni precedenti'],
            whenToDo: 'Quando non si è più in grado di seguire o si vuole cambiare totalmente facoltà.',
            doNow: [
                'Valuta se ti conviene la "Sospensione" (temporanea) o la "Rinuncia" (definitiva).',
                'Scarica il modulo di rinuncia dal sito dell\'ateneo.',
                'Paga l\'imposta di bollo richiesta per la chiusura della pratica.',
                'Riconsegna il libretto universitario (se ancora cartaceo).',
                'Se vuoi ricominciare altrove, richiedi il "Trasferimento" invece della rinuncia (per non perdere gli esami dati).'
            ],
            steps: [
                'Valuta se ti conviene la "Sospensione" (temporanea) o la "Rinuncia" (definitiva).',
                'Scarica il modulo di rinuncia dal sito dell\'ateneo.',
                'Paga l\'imposta di bollo richiesta per la chiusura della pratica.',
                'Riconsegna il libretto universitario (se ancora cartaceo).',
                'Se vuoi ricominciare altrove, richiedi il "Trasferimento" invece della rinuncia (per non perdere gli esami dati).'
            ],
            dontDo: [
                'Non smettere semplicemente di pagare le tasse: rimarresti "in sospeso" e accumuleresti debiti e more per anni.',
                'Non fare la rinuncia se hai intenzione di riprendere lo stesso corso tra un anno: usa la sospensione.'
            ],
            commonErrors: [
                'Pensare che la rinuncia cancelli i debiti pregressi (vanno pagati comunque).',
                'Perdere i diritti sulla borsa di studio (la rinuncia comporta spesso la restituzione della borsa dell\'anno in corso).'
            ],
            askHelpWhen: [
                'Se vuoi sapere quanti esami ti verrebbero riconosciuti in un nuovo corso.',
                'Se la sospensione è dovuta a gravi motivi di salute (hai diritto a tutele speciali).'
            ],
            whoCanHelp: [
                'Segreteria Studenti',
                'Ufficio Orientamento (per riorientamento)',
                'Rappresentanti degli studenti'
            ],
            whereToDo: 'Segreteria studenti o sportello online.',
            timeToComplete: '30 minuti per la pratica, tempi amministrativi per la chiusura.',
            practicalDisclaimer: 'La rinuncia agli studi non impedisce una futura nuova immatricolazione, anche allo stesso corso.',
            sources: [
                {
                    title: 'Guida amministrativa studenti',
                    organization: 'Università degli Studi',
                    url: 'https://www.istruzione.it/',
                    type: 'institutional',
                    usedFor: 'Esempi di procedure di rinuncia.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Modulo scaricato',
                'Debiti pregressi saldati',
                'Bollo pagato',
                'Richiesta certificato esami dati (prima della rinuncia)',
                'Libretto riconsegnato'
            ],
            relatedGlossaryTerms: ['Rinuncia irrevocabile', 'Carriera alias', 'Ricongiunzione di carriera']
        },
        {
            id: 'stage-tirocini-guida',
            slug: 'stage-e-tirocini-come-funzionano',
            title: 'Stage/tirocini',
            mainEntity: 'Ministero del Lavoro',
            category: 'lavoro',
            audience: ['studenti', 'lavoratori'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Diritti, doveri e differenze tra stage curriculare (per l\'università) ed extracurriculare (per il lavoro).',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Lo stage non è un contratto di lavoro ma un percorso formativo. Il tirocinio curriculare è parte del piano di studi e spesso non è retribuito. Quello extracurriculare è per neolaureati/disoccupati e prevede obbligatoriamente un rimborso spese minimo.',
            prerequisites: ['Convenzione tra ente promotore (es. Università) e azienda ospitante'],
            whenToDo: 'Durante gli studi per acquisire CFU o dopo la laurea per entrare nel mondo del lavoro.',
            doNow: [
                'Verifica che ci sia un "Progetto Formativo" firmato da te, dall\'azienda e dal tutor.',
                'Controlla il limite massimo di ore settimanali (solitamente 40).',
                'Assicurati di essere coperto dall\'assicurazione INAIL (a carico dell\'ente promotore).',
                'Richiedi l\'attestazione delle competenze a fine tirocinio.',
                'Se extracurriculare, verifica che il rimborso spese rispetti il minimo regionale (es. 600-800€).'
            ],
            steps: [
                'Verifica che ci sia un "Progetto Formativo" firmato da te, dall\'azienda e dal tutor.',
                'Controlla il limite massimo di ore settimanali (solitamente 40).',
                'Assicurati di essere coperto dall\'assicurazione INAIL (a carico dell\'ente promotore).',
                'Richiedi l\'attestazione delle competenze a fine tirocinio.',
                'Se extracurriculare, verifica che il rimborso spese rispetti il minimo regionale (es. 600-800€).'
            ],
            dontDo: [
                'Non farti sostituire a un lavoratore dipendente: lo stagista deve imparare, non coprire carenze di organico.',
                'Non accettare stage extracurriculari senza alcun rimborso spese: è illegale.'
            ],
            commonErrors: [
                'Non avere un tutor aziendale di riferimento.',
                'Svolgere mansioni pericolose o non previste nel progetto formativo.',
                'Pensare che lo stage dia diritto a ferie pagate o malattia (esistono solo permessi concordati).'
            ],
            askHelpWhen: [
                'Se l\'azienda ti chiede di lavorare da solo o con responsabilità eccessive.',
                'Se il rimborso spese non viene pagato.'
            ],
            whoCanHelp: [
                'Ufficio Stage dell\'Università',
                'Centro per l\'Impiego',
                'Ispettorato Nazionale del Lavoro (per abusi)'
            ],
            whereToDo: 'Aziende, Enti Pubblici o Studi Professionali.',
            timeToComplete: 'Dai 2 ai 6 mesi.',
            practicalDisclaimer: 'Lo stage non dà diritto a contributi pensionistici, ma vale come esperienza nel CV.',
            sources: [
                {
                    title: 'Linee guida tirocini',
                    organization: 'Ministero del Lavoro',
                    url: 'https://www.lavoro.gov.it/temi-e-priorita/politiche-attive-del-lavoro/Pagine/Tirocini.aspx',
                    type: 'official',
                    usedFor: 'Normativa nazionale stage.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Progetto formativo firmato',
                'Tutor individuato',
                'Copertura INAIL attiva',
                'Rimborso spese concordato',
                'Registro presenze compilato'
            ],
            relatedGlossaryTerms: ['Ente Promotore', 'Ente Ospitante', 'Indennità di partecipazione']
        },
        {
            id: 'garanzia-giovani-orientamento',
            slug: 'garanzia-giovani-come-iscriversi',
            title: 'Garanzia Giovani',
            mainEntity: 'ANPAL',
            category: 'lavoro',
            audience: ['studenti', 'lavoratori'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Il programma europeo per favorire l\'occupazione dei giovani sotto i 30 (o 35) anni.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Garanzia Giovani (Youth Guarantee) offre corsi di formazione, tirocini retribuiti e incentivi per l\'assunzione. Si rivolge ai NEET (giovani che non studiano e non lavorano).',
            prerequisites: ['Età tra 15 e 29 anni (esteso a 34 in alcune regioni)', 'Essere disoccupati o non frequentare corsi di studio'],
            whenToDo: 'Subito dopo aver terminato gli studi se non si trova occupazione.',
            doNow: [
                'Iscriviti online sul portale nazionale MyANPAL o sul sito regionale dedicato.',
                'Recati al Centro per l\'Impiego per il "colloquio di profilazione".',
                'Firma il "Patto di Servizio Personalizzato".',
                'Scegli tra le misure disponibili: formazione, tirocinio, supporto all\'autoimprenditorialità.',
                'Monitora le offerte di lavoro dedicate nel portale.'
            ],
            steps: [
                'Iscriviti online sul portale nazionale MyANPAL o sul sito regionale dedicato.',
                'Recati al Centro per l\'Impiego per il "colloquio di profilazione".',
                'Firma il "Patto di Servizio Personalizzato".',
                'Scegli tra le misure disponibili: formazione, tirocinio, supporto all\'autoimprenditorialità.',
                'Monitora le offerte di lavoro dedicate nel portale.'
            ],
            dontDo: [
                'Non rifiutare più di un\'offerta congrua: potresti perdere lo status di beneficiario del programma.',
                'Non dimenticare di aggiornare i tuoi recapiti sul portale.'
            ],
            commonErrors: [
                'Pensare che sia un sussidio economico diretto (è un pacchetto di servizi, non un assegno).',
                'Iscriversi mentre si è ancora studenti (verresti scartato automaticamente dai controlli).'
            ],
            askHelpWhen: [
                'Se dopo 4 mesi dall\'iscrizione non sei ancora stato contattato per il primo colloquio.',
                'Se hai problemi con l\'accesso al portale MyANPAL.'
            ],
            whoCanHelp: [
                'Centro per l\'Impiego (CPI)',
                'Agenzie per il lavoro accreditate',
                'Informagiovani'
            ],
            whereToDo: 'Online (MyANPAL) e Centro per l\'Impiego territoriale.',
            timeToComplete: '15 minuti per l\'iscrizione online.',
            practicalDisclaimer: 'Il programma è finanziato dall\'Unione Europea e gestito dalle singole Regioni.',
            sources: [
                {
                    title: 'Garanzia Giovani Italia',
                    organization: 'ANPAL',
                    url: 'https://www.anpal.gov.it/garanzia-giovani',
                    type: 'official',
                    usedFor: 'Accesso al programma e regole.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Iscrizione MyANPAL fatta',
                'Colloquio CPI effettuato',
                'Patto di servizio firmato',
                'Profilazione ottenuta',
                'Corso o tirocinio scelto'
            ],
            relatedGlossaryTerms: ['NEET', 'DID (Dichiarazione di Immediata Disponibilità)', 'MyANPAL']
        },
        {
            id: 'erasmus-documenti-base',
            slug: 'erasmus-documenti-e-preparazione',
            title: 'Erasmus documenti base',
            mainEntity: 'Università / Unione Europea',
            category: 'universita',
            audience: ['studenti'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Tutto quello che serve preparare prima di partire per uno studio all\'estero.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'L\'Erasmus+ permette di studiare in un\'altra università europea. La parte più complessa è la burocrazia: il Learning Agreement deve essere approvato prima della partenza per garantire il riconoscimento degli esami.',
            prerequisites: ['Vincita del bando Erasmus del proprio ateneo', 'Conoscenza linguistica certificata'],
            whenToDo: 'Almeno 3-6 mesi prima della partenza (appena pubblicate le graduatorie).',
            doNow: [
                'Compila il Learning Agreement (LA) inserendo gli esami esteri e i corrispondenti italiani.',
                'Firma l\'Accordo di Mobilità finanziaria per ricevere la borsa di studio.',
                'Richiedi la Tessera Sanitaria Europea (TEAM) valida per tutto il periodo.',
                'Verifica la validità della Carta d\'Identità per l\'espatrio.',
                'Effettua il test linguistico OLS (Online Linguistic Support) richiesto dalla UE.'
            ],
            steps: [
                'Compila il Learning Agreement (LA) inserendo gli esami esteri e i corrispondenti italiani.',
                'Firma l\'Accordo di Mobilità finanziaria per ricevere la borsa di studio.',
                'Richiedi la Tessera Sanitaria Europea (TEAM) valida per tutto il periodo.',
                'Verifica la validità della Carta d\'Identità per l\'espatrio.',
                'Effettua il test linguistico OLS (Online Linguistic Support) richiesto dalla UE.'
            ],
            dontDo: [
                'Non partire senza il LA firmato da ENTRAMBE le università: rischi che gli esami non vengano riconosciuti.',
                'Non dimenticare di stipulare un\'assicurazione sanitaria integrativa se il paese di destinazione lo richiede.'
            ],
            commonErrors: [
                'Sbagliare il calcolo dei CFU: controlla sempre le tabelle di conversione (ECTS).',
                'Dimenticare di fare il "Certificate of Arrival" appena arrivati (blocca il pagamento della borsa).',
                'Non controllare la scadenza del documento d\'identità.'
            ],
            askHelpWhen: [
                'Se l\'università ospitante non risponde alle email.',
                'Se devi cambiare gli esami scelti dopo l\'arrivo (procedura "Changes to LA").'
            ],
            whoCanHelp: [
                'Ufficio Relazioni Internazionali / Erasmus',
                'Coordinatore didattico del corso di laurea',
                'ESN (Erasmus Student Network) locale'
            ],
            whereToDo: 'Ufficio Erasmus della propria università e portali online.',
            timeToComplete: 'Diverse ore per la compilazione dei piani di studio.',
            practicalDisclaimer: 'La borsa Erasmus è un contributo, non copre quasi mai il 100% delle spese vive all\'estero.',
            sources: [
                {
                    title: 'Programma Erasmus+',
                    organization: 'Commissione Europea',
                    url: 'https://erasmus-plus.ec.europa.eu/',
                    type: 'official',
                    usedFor: 'Regole generali del programma.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Learning Agreement approvato',
                'Accordo finanziario firmato',
                'TEAM controllata',
                'Documento identità valido',
                'Test OLS completato'
            ],
            relatedGlossaryTerms: ['Learning Agreement', 'ECTS', 'TEAM (Tessera Europea Assicurazione Malattia)']
        }
    ]
};
