import { Module } from '@/types';

export const modulo_20_sanita_territoriale: Module = {
    id: 'modulo-20-sanita-territoriale',
    lastUpdated: '2026-08-14',
    title: 'Modulo 20: Sanità Territoriale',
    description: 'Guida ai servizi sanitari di base e specialistici vicini a te: dal medico di famiglia ai centri di salute mentale.',
    category: 'sanita',
    difficulty: 'base',
    icon: 'Stethoscope',
    themeColor: 'accent-teal',
    lessons: [
        {
            id: 'scelta-revoca-medico',
            slug: 'scelta-e-revoca-medico-di-base',
            title: 'Scelta e revoca medico',
            mainEntity: 'AgID',
            category: 'sanita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come scegliere o cambiare il Medico di Medicina Generale o il Pediatra.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il Medico di Medicina Generale (MMG) è il primo punto di contatto con il Servizio Sanitario Nazionale. Ogni cittadino ha diritto a sceglierne uno tra quelli disponibili nel proprio distretto di residenza. La scelta può essere fatta online o agli sportelli ASL.',
            prerequisites: ['Iscrizione al Servizio Sanitario Nazionale', 'Tessera Sanitaria valida'],
            whenToDo: 'Quando ti trasferisci, quando il tuo medico va in pensione o quando vuoi cambiarlo per motivi personali.',
            doNow: [
                'Accedi al portale della salute della tua Regione (es. Fascicolo Sanitario).',
                'Consulta l\'elenco dei medici disponibili e i loro orari di studio.',
                'Effettua la scelta online con un click (richiede SPID/CIE).',
                'In alternativa, recati allo sportello "Scelta e Revoca" della tua ASL/ATS.',
                'Stampa o salva il nuovo libretto sanitario provvisorio.'
            ],
            steps: [
                'Accedi al portale della salute della tua Regione (es. Fascicolo Sanitario).',
                'Consulta l\'elenco dei medici disponibili e i loro orari di studio.',
                'Effettua la scelta online con un click (richiede SPID/CIE).',
                'In alternativa, recati allo sportello "Scelta e Revoca" della tua ASL/ATS.',
                'Stampa o salva il nuovo libretto sanitario provvisorio.'
            ],
            dontDo: [
                'Non restare senza medico assegnato: è fondamentale per ricette e certificati.',
                'Non dimenticare di portare i documenti d\'identità se vai fisicamente allo sportello.',
                'Non scegliere un medico troppo lontano da casa se hai difficoltà di spostamento.'
            ],
            commonErrors: [
                'Cercare di scegliere un medico che ha già raggiunto il massimale di pazienti.',
                'Pensare che il cambio sia immediato ovunque (alcune regioni richiedono 24-48 ore per l\'aggiornamento dei sistemi).',
                'Confondere il medico di base con la guardia medica.'
            ],
            askHelpWhen: [
                'Se il sistema online non riconosce i tuoi dati.',
                'Se hai bisogno di un medico temporaneo perché sei fuori sede per studio o lavoro.'
            ],
            whoCanHelp: [
                'Ufficio Scelta e Revoca della ASL',
                'URP (Ufficio Relazioni con il Pubblico) della sanità locale',
                'Farmacie abilitate (in alcune regioni)'
            ],
            whereToDo: 'Online sul portale regionale o presso gli uffici ASL.',
            timeToComplete: '10 minuti online, 1 ora allo sportello.',
            practicalDisclaimer: 'Se il medico scelto non ti soddisfa, puoi cambiarlo di nuovo anche il giorno dopo.',
            sources: [
                {
                    title: 'Scelta e revoca del medico',
                    organization: 'Ministero della Salute',
                    url: 'https://www.salute.gov.it/portale/esenzioni/dettaglioContenutiEsenzioni.jsp?area=esenzioni&id=1016&lingua=italiano',
                    type: 'official',
                    usedFor: 'Informazioni generali sul diritto al medico.',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Guida ai servizi territoriali',
                    organization: 'Regione Lombardia / Altre Regioni',
                    url: 'https://www.regione.lombardia.it/',
                    type: 'institutional',
                    usedFor: 'Esempio di portale per la scelta online.',
                    lastCheckedAt: '2026-05-14'
                }
            ],
            checklist: [
                'Tessera sanitaria a portata di mano',
                'SPID o CIE pronti',
                'Lista medici disponibili consultata',
                'Scelta effettuata',
                'Nuovo libretto salvato'
            ],
            relatedGlossaryTerms: ['Medico di Medicina Generale', 'ASL', 'Massimale']
        },
        {
            id: 'fascicolo-sanitario-elettronico',
            slug: 'fascicolo-sanitario-elettronico-guida',
            title: 'Fascicolo sanitario elettronico',
            mainEntity: 'AgID',
            category: 'sanita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Accedere alla tua storia clinica, referti e ricette direttamente dallo smartphone.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il Fascicolo Sanitario Elettronico (FSE) è lo strumento che raccoglie in sicurezza tutta la tua documentazione sanitaria prodotta da strutture pubbliche. Permette di vedere referti, ricette farmaceutiche, verbali di pronto soccorso e certificati vaccinali.',
            prerequisites: ['Identità digitale (SPID o CIE)', 'Codice Fiscale'],
            whenToDo: 'Per controllare l\'esito di un esame, scaricare una ricetta per la farmacia o vedere lo storico delle tue cure.',
            doNow: [
                'Scarica l\'app sanitaria della tua Regione o accedi al sito ufficiale del FSE.',
                'Effettua l\'accesso sicuro con SPID o CIE.',
                'Presta il consenso alla consultazione (fondamentale perché i medici possano vedere i tuoi dati in emergenza).',
                'Naviga nelle sezioni "Referti" e "Ricette".',
                'Usa il codice NRE della ricetta direttamente in farmacia senza stamparla.'
            ],
            steps: [
                'Scarica l\'app sanitaria della tua Regione o accedi al sito ufficiale del FSE.',
                'Effettua l\'accesso sicuro con SPID o CIE.',
                'Presta il consenso alla consultazione (fondamentale perché i medici possano vedere i tuoi dati in emergenza).',
                'Naviga nelle sezioni "Referti" e "Ricette".',
                'Usa il codice NRE della ricetta direttamente in farmacia senza stamparla.'
            ],
            dontDo: [
                'Non condividere le tue credenziali SPID con nessuno.',
                'Non dimenticare di caricare manualmente i referti fatti in strutture private se il sistema lo consente.',
                'Non temere per la privacy: l\'accesso è tracciato e protetto da crittografia.'
            ],
            commonErrors: [
                'Pensare che il FSE contenga automaticamente i dati di 20 anni fa (solitamente partono dalla data di attivazione o poco prima).',
                'Non dare il consenso: in questo caso il fascicolo esiste ma è vuoto per gli operatori sanitari.',
                'Cercare referti di esami fatti privatamente (spesso non vengono inviati automaticamente).'
            ],
            askHelpWhen: [
                'Se mancano referti di esami fatti in ospedali pubblici.',
                'Se vuoi delegare un figlio o un parente alla gestione del tuo fascicolo.'
            ],
            whoCanHelp: [
                'Help desk tecnico del portale regionale',
                'Uffici amministrativi ASL',
                'Farmacie (per supporto attivazione consensi)'
            ],
            whereToDo: 'Smartphone (App) o PC.',
            timeToComplete: '5 minuti per l\'accesso.',
            practicalDisclaimer: 'Il FSE è attivo per tutti i cittadini, ma l\'alimentazione con i dati dipende dalle singole strutture sanitarie.',
            sources: [
                {
                    title: 'Fascicolo Sanitario Elettronico',
                    organization: 'Dipartimento per la trasformazione digitale',
                    url: 'https://www.fascicolosanitario.gov.it/',
                    type: 'official',
                    usedFor: 'Informazioni sul progetto nazionale.',
                    lastCheckedAt: '2026-05-16'
                },
                {
                    title: 'Privacy e Fascicolo Sanitario',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/',
                    type: 'official',
                    usedFor: 'Dettagli sulla protezione dei dati sensibili.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Accesso effettuato con SPID/CIE',
                'Consenso alla consultazione dato',
                'Consenso all\'alimentazione verificato',
                'Ultimi referti visibili',
                'Notifiche ricette attivate'
            ],
            relatedGlossaryTerms: ['NRE (Numero Ricetta Elettronica)', 'Referto', 'Consenso informato']
        },
        {
            id: 'ricetta-elettronica',
            slug: 'ricetta-elettronica-come-funziona',
            title: 'Ricetta elettronica',
            category: 'sanita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come ricevere e utilizzare le prescrizioni mediche digitali senza bisogno del foglio cartaceo.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Ministero della Salute',
            synthesis: 'La ricetta dematerializzata identifica la prescrizione tramite un codice (NRE) associato al codice fiscale.',
            steps: [
                'Il medico emette la ricetta e ti comunica il codice NRE (via SMS, email o app)',
                'Recati in farmacia con la tessera sanitaria',
                'Mostra il codice NRE o lascia che il farmacista lo recuperi tramite tessera sanitaria',
                'Ritira il farmaco pagando l\'eventuale ticket'
            ],
            checklist: [
                'Codice NRE ricevuto',
                'Tessera sanitaria disponibile',
                'Farmacia raggiunta'
            ],
            sources: [
                {
                    title: 'La ricetta elettronica',
                    organization: 'Ministero della Salute',
                    url: 'https://www.salute.gov.it/',
                    type: 'official',
                    usedFor: 'Normativa ricette',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'esenzioni-ticket',
            slug: 'esenzioni-ticket-sanitario-guida',
            title: 'Esenzioni ticket',
            category: 'sanita',
            audience: ['cittadini', 'anziani', 'disabili'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Chi ha diritto a non pagare il ticket sanitario per reddito, età o patologia.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Ministero della Salute / ASL',
            synthesis: 'Agevolazioni per l\'accesso gratuito a visite ed esami basate su criteri specifici.',
            steps: [
                'Verifica se rientri nelle categorie per reddito (E01, E02, E03, E04)',
                'Controlla se hai diritto per patologia cronica o rara',
                'Recati allo sportello ASL o usa il portale regionale per l\'autocertificazione',
                'Assicurati che il medico inserisca il codice esenzione sulla ricetta'
            ],
            checklist: [
                'Requisiti verificati',
                'Codice esenzione ottenuto',
                'Certificato conservato'
            ],
            sources: [
                {
                    title: 'Esenzioni dal ticket',
                    organization: 'Ministero della Salute',
                    url: 'https://www.salute.gov.it/',
                    type: 'official',
                    usedFor: 'Elenco esenzioni',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'prenotare-visite-cup',
            slug: 'come-prenotare-visite-cup',
            title: 'Prenotare visite CUP',
            category: 'sanita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Guida all\'uso del Centro Unico di Prenotazione per esami e visite specialistiche.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Regione / ASL',
            synthesis: 'Il CUP è il sistema centralizzato per prenotare prestazioni sanitarie nel SSN.',
            steps: [
                'Ottieni l\'impegnativa dal medico di base',
                'Chiama il numero verde CUP o usa il portale online della tua regione',
                'Fornisci il numero della ricetta (NRE) e il codice fiscale',
                'Scegli tra le date e le sedi proposte (puoi chiedere la prima disponibilità in tutta la provincia)',
                'Segna il codice di prenotazione e le istruzioni per il pagamento del ticket'
            ],
            checklist: [
                'Ricetta medica ottenuta',
                'Prenotazione effettuata',
                'Luogo e data segnati'
            ],
            sources: [
                {
                    title: 'Prenotazioni CUP',
                    organization: 'Ministero della Salute',
                    url: 'https://www.salute.gov.it/',
                    type: 'official',
                    usedFor: 'Modalità di accesso',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'guardia-medica',
            slug: 'guardia-medica-continuita-assistenziale',
            title: 'Guardia medica / continuità assistenziale',
            category: 'sanita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'A chi rivolgersi di notte o nei festivi quando il medico di base non c\'è.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'ASL',
            synthesis: 'Servizio di assistenza medica per casi non urgenti fuori dagli orari ambulatoriali.',
            whenToDo: 'Dalle 20:00 alle 8:00 nei giorni feriali e 24h/24 nei prefestivi e festivi.',
            steps: [
                'Chiama il numero della Guardia Medica del tuo territorio (o il 116117 se attivo)',
                'Descrivi i sintomi al medico che risponde',
                'Attendi il consiglio telefonico, l\'invito a recarti in ambulatorio o la visita a domicilio',
                'Ricorda che la guardia medica può fare ricette solo per terapie urgenti'
            ],
            checklist: [
                'Numero telefonico trovato',
                'Sintomi chiari da riferire',
                'Tessera sanitaria a portata di mano'
            ],
            sources: [
                {
                    title: 'Continuità assistenziale',
                    organization: 'Ministero della Salute',
                    url: 'https://www.salute.gov.it/',
                    type: 'official',
                    usedFor: 'Descrizione servizio',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'consultorio-servizi',
            slug: 'consultorio-familiare-cosa-offre',
            title: 'Consultorio: cosa offre',
            mainEntity: 'AgID',
            category: 'sanita',
            audience: ['famiglie', 'minors'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Assistenza gratuita per la salute della donna, della coppia e dei giovani.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'I consultori familiari sono servizi territoriali ad accesso libero e gratuito (o con ticket). Offrono supporto ginecologico, psicologico, sociale e legale. Sono luoghi protetti dove la privacy e l\'accoglienza sono prioritari.',
            prerequisites: ['Nessuna impegnativa del medico necessaria per molti servizi'],
            whenToDo: 'Per contraccezione, gravidanza, prevenzione, difficoltà di coppia o supporto psicologico agli adolescenti.',
            doNow: [
                'Cerca il consultorio pubblico più vicino a te sul sito della ASL.',
                'Controlla gli orari di apertura e le modalità di accesso (alcuni sono a libero accesso, altri su appuntamento).',
                'Telefona o recati di persona per chiedere un colloquio o una visita.',
                'Esponi il tuo bisogno con fiducia: il personale è multidisciplinare.',
                'Ricorda che per i minori l\'accesso è possibile anche senza genitori per temi legati alla sessualità e contraccezione.'
            ],
            steps: [
                'Cerca il consultorio pubblico più vicino a te sul sito della ASL.',
                'Controlla gli orari di apertura e le modalità di accesso (alcuni sono a libero accesso, altri su appuntamento).',
                'Telefona o recati di persona per chiedere un colloquio o una visita.',
                'Esponi il tuo bisogno con fiducia: il personale è multidisciplinare.',
                'Ricorda che per i minori l\'accesso è possibile anche senza genitori per temi legati alla sessualità e contraccezione.'
            ],
            dontDo: [
                'Non pensare che sia solo per le donne: i consultori sono aperti a tutti, anche agli uomini e alle coppie.',
                'Non aver paura dei costi: la maggior parte delle prestazioni è gratuita.',
                'Non esitare a chiedere supporto se sei vittima di violenza domestica.'
            ],
            commonErrors: [
                'Confondere il consultorio con un semplice ambulatorio ginecologico (offre molto di più, come supporto sociale e psicologico).',
                'Pensare che serva sempre la ricetta del medico di base.',
                'Ritenere che i tempi di attesa siano lunghi come in ospedale (spesso sono più brevi).'
            ],
            askHelpWhen: [
                'In caso di gravidanza indesiderata (supporto IVG).',
                'Se hai dubbi sulla tua salute sessuale o contraccezione.',
                'Se ci sono conflitti familiari gravi.'
            ],
            whoCanHelp: [
                'Ostetriche e Ginecologi del consultorio',
                'Psicologi e Assistenti Sociali',
                'Educatori professionali'
            ],
            whereToDo: 'Sedi territoriali dei consultori (solitamente distinte dagli ospedali).',
            timeToComplete: '30-60 minuti per un colloquio conoscitivo.',
            practicalDisclaimer: 'L\'anonimato è garantito per legge in specifiche situazioni (es. minori, IVG).',
            sources: [
                {
                    title: 'I Consultori Familiari',
                    organization: 'Istituto Superiore di Sanità',
                    url: 'https://www.iss.it/consultori-familiari',
                    type: 'official',
                    usedFor: 'Mappatura e funzioni dei consultori.',
                    lastCheckedAt: '2026-05-16'
                },
                {
                    title: 'Salute della donna',
                    organization: 'Ministero della Salute',
                    url: 'https://www.salute.gov.it/',
                    type: 'official',
                    usedFor: 'Informazioni su screening e prevenzione.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Consultorio vicino individuato',
                'Orari verificati',
                'Tipo di servizio richiesto identificato',
                'Appuntamento preso (se necessario)',
                'Documenti d\'identità portati'
            ],
            relatedGlossaryTerms: ['Contraccezione', 'IVG', 'Ostetrica']
        },
        {
            id: 'cps-csm-orientamento',
            slug: 'cps-csm-salute-mentale-orientamento',
            title: 'CPS/CSM: orientamento informativo',
            mainEntity: 'AgID',
            category: 'sanita',
            audience: ['adults', 'famiglie'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Capire come funzionano i Centri Psico-Sociali per il benessere mentale.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il CPS (Centro Psico-Sociale) o CSM (Centro Salute Mentale) è il presidio pubblico che si occupa della diagnosi, cura e riabilitazione del disagio psichico. È un servizio accogliente che lavora per garantire il diritto alla salute mentale sul territorio.',
            prerequisites: ['Impegnativa del medico di base (solitamente richiesta per la prima visita)'],
            whenToDo: 'Quando senti un disagio psicologico che interferisce con la tua vita quotidiana o per disturbi ansiosi, depressivi o più complessi.',
            doNow: [
                'Parlane con il tuo Medico di Medicina Generale: lui può valutare e fare l\'impegnativa.',
                'Contatta il CPS del tuo distretto di residenza per fissare un primo colloquio.',
                'Al primo incontro (accoglienza), racconterai la tua situazione a un operatore.',
                'Verrà valutato un percorso personalizzato (colloqui psicologici, visite psichiatriche, interventi sociali).',
                'Sappi che il servizio è basato sul rispetto assoluto della dignità della persona.'
            ],
            steps: [
                'Parlane con il tuo Medico di Medicina Generale: lui può valutare e fare l\'impegnativa.',
                'Contatta il CPS del tuo distretto di residenza per fissare un primo colloquio.',
                'Al primo incontro (accoglienza), racconterai la tua situazione a un operatore.',
                'Verrà valutato un percorso personalizzato (colloqui psicologici, visite psichiatriche, interventi sociali).',
                'Sappi che il servizio è basato sul rispetto assoluto della dignità della persona.'
            ],
            dontDo: [
                'Non aver vergogna di chiedere aiuto: la salute mentale è importante quanto quella fisica.',
                'Non pensare che "andarci" significhi essere "matti": migliaia di persone usufruiscono di questi servizi per ansia o momenti di crisi.',
                'Non interrompere le cure o i colloqui senza parlarne con l\'équipe.'
            ],
            commonErrors: [
                'Pensare che sia un luogo chiuso (è un servizio ambulatoriale aperto).',
                'Ritenere che vengano usati solo farmaci (l\'approccio è multidisciplinare e include il supporto psicologico).',
                'Aspettare che la situazione diventi critica prima di rivolgersi al servizio.'
            ],
            askHelpWhen: [
                'In caso di attacchi di panico frequenti, tristezza profonda o pensieri intrusivi.',
                'Se un familiare mostra segni di grave sofferenza psichica.',
                'In situazioni di emergenza (in quel caso rivolgersi al Pronto Soccorso).'
            ],
            whoCanHelp: [
                'Psichiatri e Psicologi del SSN',
                'Infermieri professionali psichiatrici',
                'Educatori e Assistenti Sociali'
            ],
            whereToDo: 'Presso le sedi dei CPS/CSM della tua ASL di appartenenza.',
            timeToComplete: '45-60 minuti per il primo colloquio.',
            practicalDisclaimer: 'Il segreto professionale è rigoroso; i tuoi dati sono protetti e non accessibili al datore di lavoro o altri enti esterni.',
            sources: [
                {
                    title: 'La salute mentale in Italia',
                    organization: 'Ministero della Salute',
                    url: 'https://www.salute.gov.it/portale/saluteMentale/homeSaluteMentale.jsp',
                    type: 'official',
                    usedFor: 'Descrizione dei servizi territoriali.',
                    lastCheckedAt: '2026-05-16'
                },
                {
                    title: 'Salute Mentale: guida ai servizi',
                    organization: 'AIRSAM',
                    url: 'https://www.airsam.it/',
                    type: 'nonprofit',
                    usedFor: 'Orientamento e diritti del paziente.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Impegnativa del medico ottenuca',
                'Indirizzo del CPS trovato',
                'Primo colloquio prenotato',
                'Tessera sanitaria pronta',
                'Documentazione clinica precedente raccolta'
            ],
            relatedGlossaryTerms: ['Psichiatria', 'Psicoterapia', 'TSO (Trattamento Sanitario Obbligatorio)']
        },
        {
            id: 'numero-116117',
            slug: 'numero-116117-quando-chiamare',
            title: 'Numero 116117: dove attivo',
            category: 'sanita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 3,
            summary: 'Il numero europeo armonizzato per le cure mediche non urgenti.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Regione',
            synthesis: 'Numero unico per continuità assistenziale e altre prestazioni sanitarie non in emergenza.',
            steps: [
                'Verifica se il numero è attivo nella tua regione (es. Lombardia, Piemonte)',
                'Componi il 116117 da telefono fisso o mobile',
                'Parla con l\'operatore per ricevere assistenza medica non urgente',
                'Usa questo numero per trovare la guardia medica o per informazioni sanitarie'
            ],
            checklist: [
                'Numero composto',
                'Regione coperta',
                'Assistenza ricevuta'
            ],
            sources: [
                {
                    title: 'Numero Europeo 116117',
                    organization: 'Ministero della Salute',
                    url: 'https://www.salute.gov.it/',
                    type: 'official',
                    usedFor: 'Informazioni nazionali',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'tessera-sanitaria-smarrita',
            slug: 'tessera-sanitaria-smarrita-cosa-fare',
            title: 'Tessera sanitaria smarrita',
            category: 'sanita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come richiedere il duplicato della tessera sanitaria o del tesserino del codice fiscale.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Agenzia delle Entrate',
            synthesis: 'Procedura per ottenere una nuova tessera in caso di furto, smarrimento o deterioramento.',
            steps: [
                'Accedi al sito dell\'Agenzia delle Entrate con SPID/CIE',
                'Cerca il servizio "Richiesta duplicato della Tessera Sanitaria"',
                'Inserisci il codice fiscale e conferma i dati',
                'In alternativa, recati presso uno sportello della tua ASL o dell\'Agenzia delle Entrate',
                'La nuova tessera verrà spedita all\'indirizzo di residenza registrato'
            ],
            checklist: [
                'Accesso effettuato',
                'Richiesta inviata',
                'Indirizzo verificato'
            ],
            sources: [
                {
                    title: 'Duplicato Tessera Sanitaria',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/',
                    type: 'official',
                    usedFor: 'Procedura duplicato',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'invalidita-civile-orientamento',
            slug: 'invalidita-civile-orientamento-sanitario',
            title: 'Invalidità civile: orientamento sanitario',
            category: 'sanita',
            audience: ['cittadini', 'disabili', 'anziani'],
            level: 'intermedia',
            estimatedMinutes: 12,
            summary: 'Primi passi per il riconoscimento dell\'invalidità civile e dei benefici sanitari correlati.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'INPS',
            synthesis: 'Percorso per il riconoscimento dello stato di invalido civile, cieco o sordo.',
            steps: [
                'Recati dal tuo medico curante per il "certificato medico introduttivo" telematico',
                'Fatti consegnare la ricevuta con il numero di certificato',
                'Presenta la domanda online sul sito INPS o tramite patronato entro 90 giorni',
                'Attendi la convocazione per la visita presso la Commissione Medica Integrata (ASL-INPS)',
                'Ricevi il verbale definitivo a casa o via PEC'
            ],
            checklist: [
                'Certificato medico fatto',
                'Domanda INPS inviata',
                'Visita effettuata',
                'Verbale ricevuto'
            ],
            sources: [
                {
                    title: 'Invalidità civile',
                    organization: 'INPS',
                    url: 'https://www.inps.it/',
                    type: 'official',
                    usedFor: 'Domanda e benefici',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'scelta-pediatra-ssn',
            slug: 'come-scegliere-o-cambiare-il-pediatra',
            title: 'Come scegliere o cambiare il pediatra',
            category: 'sanita',
            audience: ['famiglie'],
            level: 'base',
            estimatedMinutes: 10,
            mainEntity: 'Regione / ASL',
            summary: 'Il pediatra di libera scelta si richiede all’ASL/Regione, con gli stessi canali della scelta del medico di base. Tessera sanitaria e residenza sanitaria devono essere in regola.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-08-14',
            steps: [
                'Verifica che il minore sia iscritto al SSN (tessera sanitaria).',
                'Usa i servizi online della Regione/ASL per scelta e revoca del pediatra, oppure lo sportello.',
                'Se cambi Comune, aggiorna l’assistenza sanitaria: la residenza ANPR e l’iscrizione ASL vanno allineate.',
                'Per il Fascicolo sanitario del minore valgono le regole regionali e il consenso dei genitori.',
            ],
            commonErrors: ['Andare al Pronto Soccorso per una scelta del pediatra'],
            dontDo: ['Non lasciare il bambino senza medico di riferimento dopo un trasloco'],
            checklist: ['Tessera sanitaria minore', 'Scelta/revoca effettuata sul canale regionale'],
            faqs: [
                { q: 'Fino a che età vale il pediatra?', a: 'Di regola fino ai 14 anni, con possibili proroghe previste dalle ASL. Conferma sul sito della tua Regione.' },
                { q: 'Serve l’ISEE?', a: 'Per la scelta no. L’ISEE può servire per esenzioni ticket o altre prestazioni.' },
            ],
            officialLinksV2: [
                { sourceId: 'fseSalute', useWhen: 'FSE e rinvio ai servizi regionali', beforeOpening: ['SPID o CIE'] },
                { sourceId: 'anprHome', useWhen: 'Residenza da allineare all’ASL', beforeOpening: [] },
            ],
            sources: [
                {
                    title: 'Fascicolo Sanitario Elettronico',
                    organization: 'Ministero della Salute',
                    url: 'https://www.salute.gov.it/portale/fascicoloSanitarioElettronico/homeFascicoloSanitarioElettronico.jsp',
                    type: 'official',
                    usedFor: 'Accesso ai servizi sanitari digitali',
                    lastCheckedAt: '2026-08-14',
                },
            ],
        }
    ]
};

