import { Module } from '@/types';

export const modulo_21_anziani_caregiver: Module = {
    id: 'modulo-21-anziani-caregiver',
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
            lastReviewedAt: '2026-05-14',
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Abilitazione all\'uso dei servizi online per conto di terzi',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/',
                    type: 'official',
                    usedFor: 'Specifiche per i servizi fiscali.',
                    lastCheckedAt: '2026-05-14'
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Guida all\'invalidità',
                    organization: 'Handicap on line',
                    url: 'https://www.handylex.org/',
                    type: 'nonprofit',
                    usedFor: 'Dettagli su Legge 104 e agevolazioni.',
                    lastCheckedAt: '2026-05-14'
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Campagna contro le truffe',
                    organization: 'Arma dei Carabinieri',
                    url: 'https://www.carabinieri.it/in-vostro-aiuto/consigli/Cose-di-tutti-i-giorni/contro-le-truffe/',
                    type: 'official',
                    usedFor: 'Esempi di tecniche di raggiro.',
                    lastCheckedAt: '2026-05-14'
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
        }
    ]
};
