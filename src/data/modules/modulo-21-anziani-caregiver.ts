import { Module } from '@/types';

export const modulo_21_anziani_caregiver: Module = {
    id: 'modulo-21-anziani-caregiver',
    lastUpdated: '2026-08-27',
    title: 'Modulo 21: Anziani e Caregiver',
    description: 'Strumenti e tutele per assistere i propri cari anziani: supporto digitale, deleghe e protezione dalle truffe.',
    category: 'anziani',
    difficulty: 'base',
    icon: 'HeartHandshake',
    themeColor: 'accent-rose',
    lessons: [
        {
            id: 'spid-cie-anziani',
            slug: 'spid-cie-per-genitore-anziano',
            title: 'SPID/CIE per genitore anziano',
            mainEntity: 'AgID',
            category: 'anziani',
            audience: ['caregiver', 'anziani'],
            level: 'base',
            estimatedMinutes: 7,
            summary: 'Come aiutare un anziano a ottenere l\'identità digitale indispensabile per INPS e Sanità.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'L\'identità digitale (SPID o CIE) è obbligatoria per accedere ai servizi della Pubblica Amministrazione. Per un anziano non tecnologico, il caregiver può fare da supporto operativo per la creazione e la gestione delle credenziali, nel rispetto della titolarità dell\'identità.',
            prerequisites: ['Smartphone dell\'anziano (o con SIM dedicata)', 'Documento d\'identità valido', 'Email'],
            whenToDo: 'Quando l\'anziano deve consultare il cedolino della pensione o accedere al fascicolo sanitario.',
            doNow: [
                'Scegli un Identity Provider (es. Poste Italiane) che offra riconoscimento fisico se possibile.',
                'Crea una casella email dedicata per l\'anziano se non ne ha una.',
                'Effettua la registrazione online inserendo i dati dell\'anziano.',
                'Accompagna l\'anziano per il riconoscimento (in posta o via webcam).',
                'Configura l\'app (PosteID o LepidaID) sullo smartphone dell\'anziano e spiega come autorizzare gli accessi.'
            ],
            steps: [
                'Scegli un Identity Provider (es. Poste Italiane) che offra riconoscimento fisico se possibile.',
                'Crea una casella email dedicata per l\'anziano se non ne ha una.',
                'Effettua la registrazione online inserendo i dati dell\'anziano.',
                'Accompagna l\'anziano per il riconoscimento (in posta o via webcam).',
                'Configura l\'app (PosteID o LepidaID) sullo smartphone dell\'anziano e spiega come autorizzare gli accessi.'
            ],
            dontDo: [
                'Non usare la TUA email o il TUO numero di telefono per lo SPID di un altro: ogni identità deve avere contatti unici.',
                'Non scrivere la password su foglietti appesi al muro o vicino al PC.',
                'Non sostituirti totalmente all\'anziano durante il riconoscimento: lui deve essere presente e consenziente.'
            ],
            commonErrors: [
                'Dimenticare le credenziali poco dopo averle create.',
                'Sbagliare l\'inserimento dei dati del documento (scadenza, numero).',
                'Non aggiornare l\'app, rendendola inutilizzabile nel momento del bisogno.'
            ],
            askHelpWhen: [
                'Se l\'anziano ha difficoltà motorie o cognitive che impediscono il riconoscimento standard.',
                'Se lo SPID viene bloccato per troppi tentativi errati.'
            ],
            whoCanHelp: [
                'Uffici Postali',
                'Sportelli digitali del Comune',
                'Facilitatori digitali (punti Roma Facile, ecc.)'
            ],
            whereToDo: 'Online e presso sportelli fisici accreditati.',
            timeToComplete: '30 minuti per la registrazione, 15 per il riconoscimento.',
            practicalDisclaimer: 'Ricorda che lo SPID è personale e non cedibile per legge.',
            sources: [
                {
                    title: 'SPID per i cittadini',
                    organization: 'AgID',
                    url: 'https://www.spid.gov.it/',
                    type: 'official',
                    usedFor: 'Procedure di rilascio e gestori.',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Guida all\'identità digitale per anziani',
                    organization: 'FNP CISL',
                    url: 'https://www.pensionati.cisl.it/',
                    type: 'nonprofit',
                    usedFor: 'Consigli pratici per la terza età.',
                    lastCheckedAt: '2026-05-14'
                }
            ],
            checklist: [
                'Documento e Tessera Sanitaria pronti',
                'Email dedicata creata',
                'Numero di telefono dedicato pronto',
                'Riconoscimento effettuato',
                'App configurata e testata'
            ],
            relatedGlossaryTerms: ['Identità Digitale', 'Identity Provider', '2FA']
        },
        {
            id: 'delega-digitale',
            slug: 'delega-digitale-inps-sanita',
            title: 'Delega digitale',
            mainEntity: 'AgID',
            category: 'anziani',
            audience: ['caregiver', 'anziani'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Gestire legalmente i servizi online per conto di un familiare tramite la "delega dell\'identità digitale".',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'La delega digitale permette a un caregiver di accedere ai portali della PA (INPS, Agenzia Entrate) usando il PROPRIO SPID/CIE per conto del familiare delegante. È lo strumento legale corretto per chi non può usare gli strumenti tecnologici.',
            prerequisites: ['SPID/CIE sia per il delegante che per il delegato (o presenza fisica allo sportello)'],
            whenToDo: 'Quando un anziano vuole che un figlio gestisca la sua pensione o le sue tasse online in modo ufficiale.',
            doNow: [
                'Scarica il modulo di delega dal sito dell\'INPS o dell\'ente d\'interesse.',
                'Compila il modulo con i dati di entrambi (delegante e delegato).',
                'Se il delegante ha lo SPID, può fare la delega online dall\'area MyINPS.',
                'Se il delegante non ha lo SPID, deve recarsi fisicamente allo sportello con il delegato (o inviare il modulo via PEC se impossibilitato per motivi di salute).',
                'Una volta attiva, il delegato potrà scegliere "Accedi come delegato" al momento del login.'
            ],
            steps: [
                'Scarica il modulo di delega dal sito dell\'INPS o dell\'ente d\'interesse.',
                'Compila il modulo con i dati di entrambi (delegante e delegato).',
                'Se il delegante ha lo SPID, può fare la delega online dall\'area MyINPS.',
                'Se il delegante non ha lo SPID, deve recarsi fisicamente allo sportello con il delegato (o inviare il modulo via PEC se impossibilitato per motivi di salute).',
                'Una volta attiva, il delegato potrà scegliere "Accedi come delegato" al momento del login.'
            ],
            dontDo: [
                'Non usare le password del genitore per accedere: usa la delega ufficiale per tracciabilità e sicurezza.',
                'Non pensare che una delega valga per tutti gli enti: INPS e Agenzia delle Entrate hanno procedure separate.',
                'Non forzare la mano: il delegante può revocare la delega in qualsiasi momento.'
            ],
            commonErrors: [
                'Dimenticare di allegare i documenti d\'identità al modulo cartaceo.',
                'Pensare che la delega digitale sostituisca la procura legale (hanno scopi diversi).',
                'Non indicare una data di scadenza (se si vuole che la delega sia temporanea).'
            ],
            askHelpWhen: [
                'Se il familiare è incapace di intendere e volere (serve l\'Amministratore di Sostegno).',
                'Se la delega non viene accettata dal sistema.'
            ],
            whoCanHelp: [
                'Sportelli INPS',
                'Agenzia delle Entrate (Servizi Online)',
                'Patronati'
            ],
            whereToDo: 'Portali MyINPS, Agenzia delle Entrate o sportelli fisici.',
            timeToComplete: '20 minuti online, 1 ora allo sportello.',
            practicalDisclaimer: 'Puoi essere delegato per un massimo di 5 persone (per l\'INPS).',
            sources: [
                {
                    title: 'Delega dell\'identità digitale',
                    organization: 'INPS',
                    url: 'https://www.inps.it/it/it/dettaglio-approfondimento.schede-informative.55214.delega-dell-identit-digitale.html',
                    type: 'official',
                    usedFor: 'Guida ufficiale INPS alla delega.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Modulo scaricato',
                'Documenti d\'identità fotocopiati',
                'Accesso MyINPS delegante verificato',
                'Delega inviata/presentata',
                'Conferma attivazione ricevuta'
            ],
            relatedGlossaryTerms: ['Delegante/Delegato', 'MyINPS', 'Amministratore di Sostegno']
        },
        {
            id: 'invalidita-civile-base',
            slug: 'invalidita-civile-domanda-base',
            title: 'Invalidità civile: domanda base',
            mainEntity: 'AgID',
            category: 'anziani',
            audience: ['caregiver', 'anziani', 'disabili'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'I primi passi per ottenere il riconoscimento dell\'invalidità e le relative agevolazioni.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'L\'invalidità civile è il riconoscimento di una difficoltà nello svolgere le attività della vita quotidiana. È il presupposto per ottenere benefici come l\'indennità di accompagnamento, le esenzioni ticket e i permessi Legge 104.',
            prerequisites: ['Certificato medico telematico (rilasciato dal medico di base)'],
            whenToDo: 'Quando le condizioni di salute riducono sensibilmente l\'autonomia della persona.',
            doNow: [
                'Vai dal medico di base per farti rilasciare il "certificato medico introduttivo" (a pagamento).',
                'Fatti dare dal medico il codice univoco del certificato (fondamentale!).',
                'Entro 90 giorni, presenta la domanda all\'INPS (online con SPID o tramite patronato).',
                'Attendi la convocazione per la visita presso la Commissione Medica Integrata (ASL/INPS).',
                'Ricevi il verbale a casa tramite posta o nel cassetto previdenziale.'
            ],
            steps: [
                'Vai dal medico di base per farti rilasciare il "certificato medico introduttivo" (a pagamento).',
                'Fatti dare dal medico il codice univoco del certificato (fondamentale!).',
                'Entro 90 giorni, presenta la domanda all\'INPS (online con SPID o tramite patronato).',
                'Attendi la convocazione per la visita presso la Commissione Medica Integrata (ASL/INPS).',
                'Ricevi il verbale a casa tramite posta o nel cassetto previdenziale.'
            ],
            dontDo: [
                'Non andare alla visita senza tutta la documentazione medica originale e recente.',
                'Non aspettare che la salute peggiori troppo: i tempi burocratici sono lunghi (alcuni mesi).',
                'Non dimenticare di richiedere anche il riconoscimento dello stato di handicap (Legge 104) contestualmente.'
            ],
            commonErrors: [
                'Presentare la domanda prima di avere il certificato del medico.',
                'Non portare alla visita referti specialistici aggiornati.',
                'Sbagliare l\'IBAN per l\'eventuale accredito dei benefici economici.'
            ],
            askHelpWhen: [
                'Se l\'invalidità viene negata o riconosciuta in percentuale inferiore alle aspettative (possibilità di ricorso).',
                'Se la persona non è trasportabile alla visita (richiesta di visita domiciliare).'
            ],
            whoCanHelp: [
                'Patronati (raccomandato per la complessità)',
                'Associazioni di categoria (ANMIC, UIC, ecc.)',
                'Medico di Medicina Generale'
            ],
            whereToDo: 'Medico di base, poi Patronato o Sito INPS.',
            timeToComplete: '1 ora per la parte burocratica, 3-6 mesi per l\'esito.',
            practicalDisclaimer: 'Il certificato del medico di base ha una validità limitata: se non fai la domanda entro 90 giorni, scade.',
            sources: [
                {
                    title: 'Invalidità Civile',
                    organization: 'INPS',
                    url: 'https://www.inps.it/it/it/dettaglio-approfondimento.schede-informative.50022.invalidit-civile.html',
                    type: 'official',
                    usedFor: 'Iter procedurale e benefici.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Certificato medico introduttivo fatto',
                'Codice certificato ottenuto',
                'Domanda presentata all\'INPS',
                'Cartella clinica organizzata per la visita',
                'Verbale ricevuto e controllato'
            ],
            relatedGlossaryTerms: ['Legge 104', 'Accompagnamento', 'Commissione Medica']
        },
        {
            id: 'accompagnamento-orientamento',
            slug: 'indennita-di-accompagnamento-guida',
            title: 'Accompagnamento: orientamento',
            mainEntity: 'INPS',
            category: 'anziani',
            audience: ['caregiver', 'anziani', 'disabili'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Cos\'è l\'indennità di accompagnamento e come richiederla per chi non è autosufficiente.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'L\'indennità di accompagnamento è un sostegno economico erogato dall\'INPS a chi è impossibilitato a deambulare senza l\'aiuto di un accompagnatore o non è in grado di compiere gli atti quotidiani della vita. Non dipende dal reddito.',
            prerequisites: ['Certificato medico telematico con richiesta di accompagnamento'],
            whenToDo: 'Quando la persona anziana perde l\'autonomia fisica o cognitiva di base.',
            doNow: [
                'Verifica col medico se ci sono i presupposti per la richiesta nel certificato introduttivo.',
                'Presenta la domanda all\'INPS (contestualmente a quella di invalidità se non ancora fatta).',
                'Prepara la documentazione che attesti la necessità di assistenza continua.',
                'Dopo la visita, se l\'esito è positivo, inserisci il modello AP70 sul sito INPS per i dati di pagamento.',
                'Controlla l\'accredito mensile (importo fisso annuale rivalutato).'
            ],
            steps: [
                'Verifica col medico se ci sono i presupposti per la richiesta nel certificato introduttivo.',
                'Presenta la domanda all\'INPS (contestualmente a quella di invalidità se non ancora fatta).',
                'Prepara la documentazione che attesti la necessità di assistenza continua.',
                'Dopo la visita, se l\'esito è positivo, inserisci il modello AP70 sul sito INPS per i dati di pagamento.',
                'Controlla l\'accredito mensile (importo fisso annuale rivalutato).'
            ],
            dontDo: [
                'Non pensare che basti essere "vecchi" per averla: serve una patologia invalidante certificata.',
                'Non dimenticare che l\'indennità viene sospesa in caso di ricovero gratuito in istituto per più di 29 giorni.'
            ],
            commonErrors: [
                'Confondere l\'accompagnamento con la pensione di invalidità (che invece ha limiti di reddito).',
                'Non comunicare i periodi di ricovero all\'INPS, rischiando di dover restituire le somme.'
            ],
            askHelpWhen: [
                'Se la domanda viene respinta nonostante la palese non autosufficienza.',
                'Se hai dubbi sulla compilazione del modello AP70.'
            ],
            whoCanHelp: [
                'Patronati',
                'Associazioni anziani',
                'Medico Legale privato (per consulenza pre-visita)'
            ],
            whereToDo: 'Online (Sito INPS) o tramite Patronato.',
            timeToComplete: '30 minuti per la domanda, attesa verbale 3-6 mesi.',
            practicalDisclaimer: 'L\'importo dell\'indennità è uguale per tutti ed è esente da IRPEF.',
            sources: [
                {
                    title: 'Indennità di accompagnamento',
                    organization: 'INPS',
                    url: 'https://www.inps.it/it/it/dettaglio-approfondimento.schede-informative.50021.indennit-di-accompagnamento.html',
                    type: 'official',
                    usedFor: 'Requisiti e modalità di domanda.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Certificato medico con spunta accompagnamento',
                'Domanda INPS inviata',
                'Visita effettuata',
                'Verbale positivo ricevuto',
                'Modello AP70 inviato'
            ],
            relatedGlossaryTerms: ['Non autosufficienza', 'Modello AP70', 'Requisito sanitario']
        },
        {
            id: 'legge-104-orientamento',
            slug: 'legge-104-permessi-e-agevolazioni',
            title: 'Legge 104: orientamento',
            mainEntity: 'INPS',
            category: 'anziani',
            audience: ['caregiver', 'lavoratori', 'disabili'],
            level: 'base',
            estimatedMinutes: 7,
            summary: 'Come funzionano i permessi lavorativi e le agevolazioni fiscali per chi assiste un familiare con disabilità grave.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'La Legge 104/92 tutela le persone con disabilità e chi le assiste. L\'articolo 3 comma 3 (handicap grave) dà diritto a 3 giorni di permesso mensile retribuito e al congedo straordinario fino a 2 anni per il caregiver lavoratore dipendente.',
            prerequisites: ['Verbale di handicap con riconoscimento dell\'art. 3 comma 3'],
            whenToDo: 'Appena ottenuto il verbale che riconosce la gravità dell\'handicap.',
            doNow: [
                'Invia la domanda di "Permessi Legge 104" all\'INPS tramite il portale online o patronato.',
                'Comunica al datore di lavoro l\'intenzione di fruire dei permessi (allegando la ricevuta INPS).',
                'Verifica le agevolazioni fiscali (IVA al 4% per auto e sussidi tecnici, detrazioni IRPEF).',
                'Se necessario, richiedi il congedo straordinario (per assistere il familiare convivente).',
                'Conserva copia del verbale per l\'acquisto di beni con IVA agevolata.'
            ],
            steps: [
                'Invia la domanda di "Permessi Legge 104" all\'INPS tramite il portale online o patronato.',
                'Comunica al datore di lavoro l\'intenzione di fruire dei permessi (allegando la ricevuta INPS).',
                'Verifica le agevolazioni fiscali (IVA al 4% per auto e sussidi tecnici, detrazioni IRPEF).',
                'Se necessario, richiedi il congedo straordinario (per assistere il familiare convivente).',
                'Conserva copia del verbale per l\'acquisto di beni con IVA agevolata.'
            ],
            dontDo: [
                'Non usare i permessi 104 per scopi personali diversi dall\'assistenza: è causa di licenziamento per giusta causa.',
                'Non pensare che l\'invalidità civile e la Legge 104 siano la stessa cosa: servono due riconoscimenti distinti (anche se richiesti con la stessa visita).'
            ],
            commonErrors: [
                'Non presentare la domanda all\'INPS pensando che basti dare il verbale al datore di lavoro.',
                'Dimenticare che per il congedo straordinario serve la convivenza (residenza nello stesso immobile).',
                'Sbagliare il calcolo dell\'IVA agevolata sugli acquisti online.'
            ],
            askHelpWhen: [
                'Se il datore di lavoro ostacola la fruizione dei permessi.',
                'Se devi cambiare il familiare assistito (referente unico).'
            ],
            whoCanHelp: [
                'Ufficio Personale / HR',
                'Patronati',
                'Associazioni per la tutela dei disabili'
            ],
            whereToDo: 'Sito INPS e comunicazione al Datore di Lavoro.',
            timeToComplete: '20 minuti per la domanda online.',
            practicalDisclaimer: 'Dal 2022 è stato abolito il "referente unico": più familiari possono assistere la stessa persona, ma i giorni totali rimangono 3 al mese.',
            sources: [
                {
                    title: 'Permessi Legge 104',
                    organization: 'INPS',
                    url: 'https://www.inps.it/it/it/dettaglio-approfondimento.schede-informative.49964.permessi-legge-104.html',
                    type: 'official',
                    usedFor: 'Guida ai permessi lavorativi.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Verbale Art. 3 comma 3 ottenuto',
                'Domanda permessi inviata all\'INPS',
                'Comunicazione al datore fatta',
                'IVA agevolata verificata per acquisti',
                'Residenza verificata (per congedo)'
            ],
            relatedGlossaryTerms: ['Handicap grave', 'Congedo straordinario', 'IVA 4%']
        },
        {
            id: 'amministratore-sostegno-orientamento',
            slug: 'amministratore-di-sostegno-come-funziona',
            title: 'Amministratore di sostegno',
            mainEntity: 'Tribunale',
            category: 'anziani',
            audience: ['caregiver', 'famiglie'],
            level: 'intermedia',
            estimatedMinutes: 8,
            summary: 'Come tutelare una persona non più autonoma nelle decisioni legali e patrimoniali.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'L\'Amministratore di Sostegno (AdS) è una figura nominata dal Giudice Tutelare per affiancare o sostituire una persona che, per infermità o menomazione, non può provvedere ai propri interessi. È uno strumento meno rigido dell\'interdizione.',
            prerequisites: ['Stato di fragilità o incapacità del familiare', 'Certificazione medica che attesti la condizione'],
            whenToDo: 'Quando l\'anziano non è più in grado di gestire il conto in banca, firmare contratti o prendere decisioni sanitarie consapevoli.',
            doNow: [
                'Presenta un ricorso al Giudice Tutelare presso il Tribunale di residenza del familiare.',
                'Il ricorso può essere presentato anche senza avvocato dai familiari stretti.',
                'Indica nel ricorso i motivi e gli atti per i quali è necessaria l\'assistenza.',
                'Partecipa all\'udienza in cui il Giudice incontra l\'interessato (anche a domicilio se necessario).',
                'Dopo il giuramento, l\'AdS deve presentare ogni anno un rendiconto delle attività e delle spese al Tribunale.'
            ],
            steps: [
                'Presenta un ricorso al Giudice Tutelare presso il Tribunale di residenza del familiare.',
                'Il ricorso può essere presentato anche senza avvocato dai familiari stretti.',
                'Indica nel ricorso i motivi e gli atti per i quali è necessaria l\'assistenza.',
                'Partecipa all\'udienza in cui il Giudice incontra l\'interessato (anche a domicilio se necessario).',
                'Dopo il giuramento, l\'AdS deve presentare ogni anno un rendiconto delle attività e delle spese al Tribunale.'
            ],
            dontDo: [
                'Non usare i soldi dell\'assistito per spese personali dell\'amministratore: ogni spesa deve essere nell\'interesse del beneficiario.',
                'Non compiere atti di "straordinaria amministrazione" (es. vendere casa) senza l\'autorizzazione scritta del Giudice.',
                'Non pensare che l\'AdS tolga tutti i diritti: la persona mantiene la capacità per gli atti della vita quotidiana non indicati nel decreto.'
            ],
            commonErrors: [
                'Dimenticare di allegare i documenti medici al ricorso.',
                'Non tenere traccia di scontrini e fatture per il rendiconto annuale.',
                'Agire d\'impulso senza consultare il decreto di nomina.'
            ],
            askHelpWhen: [
                'Se ci sono conflitti tra fratelli/parenti sulla scelta dell\'amministratore.',
                'Se la gestione del patrimonio diventa molto complessa (es. eredità, debiti).'
            ],
            whoCanHelp: [
                'Ufficio del Giudice Tutelare (Volontaria Giurisdizione)',
                'Servizi Sociali del Comune',
                'Associazioni per i diritti degli anziani'
            ],
            whereToDo: 'Tribunale (Ufficio Volontaria Giurisdizione).',
            timeToComplete: '30-60 minuti per la domanda, 3-6 mesi per la nomina.',
            practicalDisclaimer: 'L\'incarico è solitamente gratuito, salvo il rimborso delle spese documentate o un\'equa indennità decisa dal Giudice.',
            sources: [
                {
                    title: 'Amministratore di Sostegno',
                    organization: 'Ministero della Giustizia',
                    url: 'https://www.giustizia.it/',
                    type: 'official',
                    usedFor: 'Informazioni legali e modulistica.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Ricorso compilato',
                'Certificati medici allegati',
                'Udienza fissata',
                'Decreto di nomina ricevuto',
                'Rendiconto annuale segnato'
            ],
            relatedGlossaryTerms: ['Giudice Tutelare', 'Rendiconto', 'Capacità di agire']
        },
        {
            id: 'truffe-anziani-protezione',
            slug: 'truffe-agli-anziani-prevenzione',
            title: 'Truffe agli anziani',
            mainEntity: 'AgID',
            category: 'anziani',
            audience: ['anziani', 'caregiver'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Come riconoscere e prevenire i raggiri più comuni, sia fisici che telefonici.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Le truffe agli anziani sfruttano spesso l\'emotività o la gentilezza. Conoscere le tecniche dei truffatori (finto tecnico, finto incidente, finto nipote) è la prima barriera difensiva. La regola d\'oro è: diffidare e verificare sempre con una persona di fiducia.',
            prerequisites: ['Sospetto di una richiesta anomala'],
            whenToDo: 'Sempre, come prevenzione, o immediatamente se si riceve una visita o chiamata sospetta.',
            doNow: [
                'Non aprire la porta a sconosciuti che sostengono di dover controllare contatori o rimborsare soldi.',
                'Se ricevi una chiamata su un parente in difficoltà, riattacca e chiama tu direttamente il parente al suo numero abituale.',
                'Non consegnare mai denaro o gioielli a nessuno che si presenta a casa, anche se dice di essere mandato da enti ufficiali o figli.',
                'Installa un sistema di visualizzazione del chiamante sul telefono fisso (se disponibile).',
                'In caso di dubbio, chiama subito il 112 per una verifica.'
            ],
            steps: [
                'Non aprire la porta a sconosciuti che sostengono di dover controllare contatori o rimborsare soldi.',
                'Se ricevi una chiamata su un parente in difficoltà, riattacca e chiama tu direttamente il parente al suo numero abituale.',
                'Non consegnare mai denaro o gioielli a nessuno che si presenta a casa, anche se dice di essere mandato da enti ufficiali o figli.',
                'Installa un sistema di visualizzazione del chiamante sul telefono fisso (se disponibile).',
                'In caso di dubbio, chiama subito il 112 per una verifica.'
            ],
            dontDo: [
                'Non dare informazioni sensibili al telefono (codici bancari, se vivi da solo, orari di uscita).',
                'Non sentirti in colpa se sembri "scortese" chiudendo la porta o il telefono: la tua sicurezza viene prima.',
                'Non vergognarti se sei stato truffato: denuncia subito per aiutare altri a non cadere nello stesso errore.'
            ],
            commonErrors: [
                'Credere alla divisa: a volte i truffatori usano finti abiti da forze dell\'ordine.',
                'Pensare che i tecnici delle aziende (luce/gas) passino senza preavviso a chiedere soldi (non lo fanno mai).',
                'Agire d\'impulso per l\'ansia causata da una notizia falsa.'
            ],
            askHelpWhen: [
                'Se qualcuno insiste per entrare in casa.',
                'Se hai dato soldi o dati e ti accorgi dell\'errore.'
            ],
            whoCanHelp: [
                'Carabinieri / Polizia di Stato (112)',
                'Parenti e Vicini di casa',
                'Associazioni Anziani del territorio'
            ],
            whereToDo: 'A casa propria.',
            timeToComplete: 'Continuativo (prevenzione).',
            practicalDisclaimer: 'Le forze dell\'ordine non chiedono mai denaro per risolvere pratiche o incidenti.',
            sources: [
                {
                    title: 'Truffe agli anziani: consigli della Polizia',
                    organization: 'Polizia di Stato',
                    url: 'https://www.poliziadistato.it/articolo/16574f9d2a632a6111116632',
                    type: 'official',
                    usedFor: 'Vademecum antitruffa.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Spioncino della porta usato',
                'Numero del nipote chiamato per verifica',
                'Nessun dato dato al telefono',
                'Tecnici sconosciuti non fatti entrare',
                'Numero 112 memorizzato'
            ],
            relatedGlossaryTerms: ['Ingegneria Sociale', 'Finto tecnico', 'Riconoscimento chiamante']
        },
        {
            id: 'farmaci-fascicolo-sanitario',
            slug: 'fascicolo-sanitario-e-farmaci-anziani',
            title: 'Farmaci e fascicolo sanitario',
            mainEntity: 'Regione',
            category: 'anziani',
            audience: ['caregiver', 'anziani'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Come gestire le ricette elettroniche, consultare i referti e monitorare le terapie online.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il Fascicolo Sanitario Elettronico (FSE) raccoglie tutta la storia clinica del paziente. Per un anziano, il caregiver può accedere (tramite delega) per scaricare ricette, prenotare visite e controllare l\'esito degli esami senza spostarsi da casa.',
            prerequisites: ['Delega al Fascicolo Sanitario attivata', 'SPID/CIE del caregiver'],
            whenToDo: 'Dopo una visita medica o quando serve una ricetta ripetitiva per farmaci cronici.',
            doNow: [
                'Accedi al portale FSE della tua Regione.',
                'Verifica nella sezione "Ricette" la presenza del NRE (Numero Ricetta Elettronica).',
                'Mostra il codice a barre della ricetta in farmacia direttamente dallo smartphone.',
                'Consulta la sezione "Referti" per scaricare i risultati delle analisi in PDF.',
                'Attiva le notifiche via SMS o email per essere avvisato quando viene caricato un nuovo documento.'
            ],
            steps: [
                'Accedi al portale FSE della tua Regione.',
                'Verifica nella sezione "Ricette" la presenza del NRE (Numero Ricetta Elettronica).',
                'Mostra il codice a barre della ricetta in farmacia direttamente dallo smartphone.',
                'Consulta la sezione "Referti" per scaricare i risultati delle analisi in PDF.',
                'Attiva le notifiche via SMS o email per essere avvisato quando viene caricato un nuovo documento.'
            ],
            dontDo: [
                'Non dimenticare che per alcuni farmaci (es. stupefacenti o particolari terapie) serve ancora la ricetta cartacea rossa o bianca.',
                'Non ignorare il consenso alla consultazione: se non lo presti, i medici del pronto soccorso non potranno vedere la storia clinica in emergenza.'
            ],
            commonErrors: [
                'Cercare referti di strutture private non convenzionate (spesso non caricano i dati sul FSE).',
                'Confondere il FSE nazionale con quello regionale (bisogna usare quello della Regione di residenza).',
                'Non aggiornare il numero di telefono per gli avvisi.'
            ],
            askHelpWhen: [
                'Se la delega non risulta attiva nonostante la procedura fatta.',
                'Se mancano referti importanti di strutture pubbliche.'
            ],
            whoCanHelp: [
                'Ufficio Scelta e Revoca della ASL',
                'Medico di Medicina Generale',
                'Assistenza tecnica portale regionale'
            ],
            whereToDo: 'Online sul portale sanitario regionale o app dedicata (es. Salute Lazio, Fascicolo Sanitario Lombardia).',
            timeToComplete: '10 minuti.',
            practicalDisclaimer: 'Il FSE è un diritto gratuito di ogni cittadino assistito dal Servizio Sanitario Nazionale.',
            sources: [
                {
                    title: 'Fascicolo Sanitario Elettronico',
                    organization: 'Ministero della Salute',
                    url: 'https://www.fascicolosanitario.gov.it/',
                    type: 'official',
                    usedFor: 'Informazioni generali e collegamenti regionali.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Accesso portale regionale fatto',
                'Consenso consultazione prestato',
                'Delega caregiver verificata',
                'Ricetta elettronica individuata',
                'Notifiche referti attivate'
            ],
            relatedGlossaryTerms: ['NRE (Numero Ricetta Elettronica)', 'FSE', 'Consenso informato']
        },
        {
            id: 'organizzare-documenti-familiare',
            slug: 'come-organizzare-documenti-familiare-fragile',
            title: 'Come organizzare documenti di un familiare fragile',
            mainEntity: 'Busssola',
            category: 'anziani',
            audience: ['caregiver'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Consigli pratici per creare un archivio ordinato di documenti medici, legali e amministrativi.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Gestire un familiare anziano comporta una mole enorme di carta e dati digitali. Organizzare tutto in modo logico permette di risparmiare tempo nelle emergenze e di non perdere scadenze importanti per bonus o tutele.',
            prerequisites: ['Cartelle fisiche o spazio cloud sicuro'],
            whenToDo: 'Appena si inizia il percorso di assistenza o in un momento di calma.',
            doNow: [
                'Crea tre sezioni principali: Salute (referti, esenzioni), Amministrazione (pensione, utenze, tasse), Legale (documenti identità, deleghe, AdS).',
                'Digitalizza i documenti più importanti (es. verbali invalidità) e caricali su un cloud protetto.',
                'Prepara una "Scheda di Emergenza" con patologie, allergie e farmaci assunti da tenere sempre nel portafoglio dell\'anziano.',
                'Segna in un calendario condiviso tutte le scadenze (rinnovo documenti, visite, bollo auto, scadenze bonus).',
                'Crea un elenco dei contatti utili (medico, farmacia, numeri emergenza) da appendere in casa.'
            ],
            steps: [
                'Crea tre sezioni principali: Salute (referti, esenzioni), Amministrazione (pensione, utenze, tasse), Legale (documenti identità, deleghe, AdS).',
                'Digitalizza i documenti più importanti (es. verbali invalidità) e caricali su un cloud protetto.',
                'Prepara una "Scheda di Emergenza" con patologie, allergie e farmaci assunti da tenere sempre nel portafoglio dell\'anziano.',
                'Segna in un calendario condiviso tutte le scadenze (rinnovo documenti, visite, bollo auto, scadenze bonus).',
                'Crea un elenco dei contatti utili (medico, farmacia, numeri emergenza) da appendere in casa.'
            ],
            dontDo: [
                'Non tenere solo copie digitali: alcuni uffici richiedono ancora gli originali (specialmente i verbali cartacei vecchi).',
                'Non condividere password o documenti sensibili su gruppi WhatsApp non sicuri.',
                'Non buttare via documenti senza aver controllato i tempi di prescrizione.'
            ],
            commonErrors: [
                'Dimenticare dove si è messo l\'originale del verbale di invalidità (fondamentale per ogni pratica).',
                'Non aggiornare la lista dei farmaci dopo un cambio di terapia.',
                'Tenere i documenti in luoghi umidi o poco accessibili.'
            ],
            askHelpWhen: [
                'Se la mole di documenti diventa ingestibile.',
                'Se devi ricostruire la storia contributiva per la pensione.'
            ],
            whoCanHelp: [
                'Associazioni di caregiver',
                'Servizi di assistenza domiciliare',
                'Patronati (per la parte previdenziale)'
            ],
            whereToDo: 'A casa, in un angolo dedicato all\'ufficio familiare.',
            timeToComplete: '2-3 ore per l\'impostazione iniziale.',
            practicalDisclaimer: 'Un archivio ordinato riduce drasticamente lo stress del caregiver nei momenti critici.',
            sources: [
                {
                    title: 'Guida per i Caregiver Familiari',
                    organization: 'Ministero della Salute',
                    url: 'https://www.salute.gov.it/',
                    type: 'official',
                    usedFor: 'Suggerimenti organizzativi.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Cartelle per argomenti create',
                'Scheda emergenza compilata',
                'Verbali invalidità digitalizzati',
                'Calendario scadenze attivo',
                'Numeri utili appesi in cucina'
            ],
            relatedGlossaryTerms: ['Caregiver', 'Digitalizzazione', 'Scheda di emergenza']
        },
        {
            id: 'servizi-sociali-comunali-anziani',
            slug: 'numeri-utili-e-servizi-sociali-anziani',
            title: 'Numeri utili e servizi sociali comunali',
            mainEntity: 'Comune',
            category: 'anziani',
            audience: ['caregiver', 'anziani'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Quali aiuti puoi chiedere al tuo Comune e come contattare gli assistenti sociali.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'I Servizi Sociali comunali offrono supporto concreto alle persone anziane: assistenza domiciliare (SAD), consegna pasti, trasporto sociale e telesoccorso. L\'accesso avviene solitamente tramite colloquio con l\'assistente sociale di zona.',
            prerequisites: ['Residenza nel Comune', 'ISEE ordinario (spesso richiesto per le tariffe)'],
            whenToDo: 'Quando l\'anziano vive solo e ha bisogno di aiuto per le pulizie, i pasti o il trasporto per visite mediche.',
            doNow: [
                'Cerca sul sito del tuo Comune la sezione "Servizi Sociali" o "Politiche Sociali".',
                'Individua il numero del PUA (Punto Unico di Accesso) o del Segretariato Sociale.',
                'Prenota un colloquio conoscitivo con l\'assistente sociale di riferimento per il tuo quartiere.',
                'Informati sui bandi per i "Contributi Caregiver" o "Bonus Caregiver" regionali.',
                'Attiva il Telesoccorso (il pulsante da tenere al collo per chiamare aiuto in caso di caduta).'
            ],
            steps: [
                'Cerca sul sito del tuo Comune la sezione "Servizi Sociali" o "Politiche Sociali".',
                'Individua il numero del PUA (Punto Unico di Accesso) o del Segretariato Sociale.',
                'Prenota un colloquio conoscitivo con l\'assistente sociale di riferimento per il tuo quartiere.',
                'Informati sui bandi per i "Contributi Caregiver" o "Bonus Caregiver" regionali.',
                'Attiva il Telesoccorso (il pulsante da tenere al collo per chiamare aiuto in caso di caduta).'
            ],
            dontDo: [
                'Non vergognarti di chiedere aiuto: i servizi sociali sono un diritto e una risorsa della comunità.',
                'Non aspettare l\'emergenza assoluta: le graduatorie per l\'assistenza domiciliare possono essere lunghe.'
            ],
            commonErrors: [
                'Pensare che i servizi siano solo per chi è in povertà estrema (molti servizi sono aperti a tutti con tariffe legate all\'ISEE).',
                'Non sapere che esiste il "Pronto Intervento Sociale" per le emergenze fuori orario ufficio.'
            ],
            askHelpWhen: [
                'Se l\'anziano è a rischio isolamento sociale.',
                'Se il caregiver è sull\'orlo del burnout e ha bisogno di un sollievo.'
            ],
            whoCanHelp: [
                'Assistente Sociale del Comune',
                'PUA (Punto Unico di Accesso) presso l\'ASL',
                'Centri Anziani'
            ],
            whereToDo: 'Municipio o sportello sociale territoriale.',
            timeToComplete: '15 minuti per la ricerca contatti, 1 ora per il colloquio.',
            practicalDisclaimer: 'Ogni Comune ha un proprio regolamento e tipi di servizi differenti.',
            sources: [
                {
                    title: 'Servizi sociali per anziani',
                    organization: 'Ministero del Lavoro e delle Politiche Sociali',
                    url: 'https://www.lavoro.gov.it/',
                    type: 'official',
                    usedFor: 'Quadro nazionale dei servizi sociali.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Numero assistente sociale trovato',
                'ISEE aggiornato pronto',
                'Servizio SAD verificato',
                'Telesoccorso informato',
                'Mensa/Pasti a domicilio controllati'
            ],
            relatedGlossaryTerms: ['SAD (Servizio Assistenza Domiciliare)', 'PUA', 'Telesoccorso']
        },
        {
            id: 'cedolino-pensione-inps-anziani',
            slug: 'come-leggere-il-cedolino-pensione-inps',
            title: 'Come leggere il cedolino pensione INPS',
            category: 'anziani',
            audience: ['anziani', 'caregiver'],
            level: 'base',
            estimatedMinutes: 10,
            mainEntity: 'INPS',
            summary: 'Il cedolino mensile e i servizi «cambiare le coordinate di accredito» stanno nel Fascicolo previdenziale. Non comunicare l’IBAN a chi si finge INPS al telefono.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-08-14',
            steps: [
                'Accedi al Fascicolo previdenziale o all’app INPS Mobile con SPID/CIE, o usa una delega INPS.',
                'Apri il cedolino della pensione e confronta l’importo accreditato con l’IBAN.',
                'Per cambiare le coordinate usa solo il servizio INPS indicato nel Fascicolo, mai un link arrivato via SMS.',
                'La CU annuale per il 730 si recupera da INPS o dal cassetto fiscale Ade.',
            ],
            commonErrors: ['Confondere cedolino e Certificazione Unica'],
            dontDo: ['Non dettare PIN SPID a un «operatore INPS» che chiama sul cellulare'],
            checklist: ['Cedolino aperto dal sito/app ufficiale', 'IBAN verificato'],
            faqs: [
                { q: 'Il caregiver può vederlo?', a: 'Sì, con delega INPS, non con le tue credenziali.' },
                { q: 'Serve per il 730?', a: 'Per la dichiarazione serve la CU, non il solo cedolino. Calendario 730/2026 sul sito Ade.' },
            ],
            officialLinksV2: [
                { sourceId: 'inpsFascicoloPrevidenziale', useWhen: 'Cedolino e accredito', beforeOpening: ['SPID, CIE o delega INPS'] },
                { sourceId: 'delegaInps', useWhen: 'Se opera un familiare', beforeOpening: [] },
            ],
            sources: [
                {
                    title: 'Fascicolo previdenziale del cittadino',
                    organization: 'INPS',
                    url: 'https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.fascicolo-previdenziale-del-cittadino-50865.fascicolo-previdenziale-del-cittadino.html',
                    type: 'official',
                    usedFor: 'Cedolino e servizi del pensionato',
                    lastCheckedAt: '2026-08-14',
                },
            ],
        }
    ]
};
