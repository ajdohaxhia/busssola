import { Module } from '@/types';

export const modulo_17_immigrazione: Module = {
    id: 'modulo-17-immigrazione',
    lastUpdated: '2026-08-14',
    title: 'Modulo 17: Immigrazione e Soggiorno',
    description: 'Guida pratica per orientarsi tra permessi di soggiorno, rinnovi e documenti essenziali per cittadini stranieri in Italia.',
    category: 'immigrazione',
    difficulty: 'base',
    icon: 'Globe',
    themeColor: 'accent-blue',
    lessons: [
        {
            id: 'permesso-soggiorno-base',
            slug: 'permesso-di-soggiorno-orientamento-base',
            title: 'Permesso di soggiorno: orientamento base',
            mainEntity: 'Ministero dell\'Interno',
            category: 'immigrazione',
            audience: ['stranieri'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Cos\'è il permesso di soggiorno, a chi serve e quali sono i tipi principali per risiedere regolarmente in Italia.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il permesso di soggiorno è il documento che permette ai cittadini non UE di vivere in Italia. Esistono diverse tipologie (lavoro, famiglia, studio) con durate differenti. È fondamentale richiederlo entro 8 giorni dall\'ingresso in Italia.',
            prerequisites: ['Visto d\'ingresso (se richiesto)', 'Passaporto in corso di validità'],
            whenToDo: 'Quando entri in Italia con un visto di lunga durata o quando devi regolarizzare la tua posizione.',
            doNow: [
                'Verifica il tipo di visto con cui sei entrato.',
                'Recati presso un ufficio postale abilitato (Sportello Amico) per ritirare il kit.',
                'Compila i moduli necessari in base alla tua motivazione di soggiorno.',
                'Paga i bollettini postali previsti per il rilascio.',
                'Spedisci il kit e conserva la ricevuta (assicurata).'
            ],
            steps: [
                'Verifica il tipo di visto con cui sei entrato.',
                'Recati presso un ufficio postale abilitato (Sportello Amico) per ritirare il kit.',
                'Compila i moduli necessari in base alla tua motivazione di soggiorno.',
                'Paga i bollettini postali previsti per il rilascio.',
                'Spedisci il kit e conserva la ricevuta (assicurata).'
            ],
            dontDo: [
                'Non aspettare oltre gli 8 giorni lavorativi dall\'ingresso in Italia.',
                'Non affidarti a intermediari non ufficiali che chiedono pagamenti extra.',
                'Non perdere la ricevuta dell\'invio del kit: è il tuo documento provvisorio.'
            ],
            commonErrors: [
                'Compilare il modulo con inchiostro non nero.',
                'Dimenticare di firmare i moduli all\'interno del kit.',
                'Non inserire la fotocopia di tutte le pagine del passaporto.'
            ],
            askHelpWhen: [
                'Se non capisci quale tipologia di permesso richiedere.',
                'Se ricevi un preavviso di rigetto dalla Questura.'
            ],
            whoCanHelp: [
                'Patronati (servizio gratuito)',
                'Sportelli immigrazione del Comune',
                'Avvocati esperti in diritto dell\'immigrazione'
            ],
            whereToDo: 'Uffici Postali (Sportello Amico) e Questura (Ufficio Immigrazione).',
            timeToComplete: '1-2 ore per la compilazione, diversi mesi per il rilascio.',
            practicalDisclaimer: 'Le normative sull\'immigrazione cambiano spesso; verifica sempre le ultime circolari del Ministero dell\'Interno.',
            sources: [
                {
                    title: 'Il rilascio del permesso di soggiorno',
                    organization: 'Polizia di Stato',
                    url: 'https://www.poliziadistato.it/articolo/rilascio-del-permesso-di-soggiorno',
                    type: 'official',
                    usedFor: 'Procedure ufficiali e scadenze.',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Portale Immigrazione',
                    organization: 'Ministero dell\'Interno',
                    url: 'https://www.portaleimmigrazione.it/',
                    type: 'official',
                    usedFor: 'Informazioni sui kit postali e stato della pratica.',
                    lastCheckedAt: '2026-05-14'
                }
            ],
            checklist: [
                'Passaporto valido',
                'Kit postale ritirato',
                'Marca da bollo da 16€',
                'Fotocopie documenti allegati',
                'Ricevuta spedizione conservata'
            ],
            relatedGlossaryTerms: ['Permesso di soggiorno', 'Visto', 'Questura']
        },
        {
            id: 'rinnovo-permesso-documenti',
            slug: 'rinnovo-permesso-documenti-comuni',
            title: 'Rinnovo permesso: documenti comuni',
            mainEntity: 'Ministero dell\'Interno',
            category: 'immigrazione',
            audience: ['stranieri'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Elenco dei documenti necessari per rinnovare il permesso di soggiorno prima della scadenza.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Per rinnovare il permesso servono prove della continuità dei requisiti (lavoro, reddito, alloggio). La domanda va presentata tra 60 e 90 giorni prima della scadenza, a seconda della durata del permesso attuale.',
            prerequisites: ['Permesso di soggiorno in scadenza', 'Documentazione reddituale (CUD, buste paga)'],
            whenToDo: 'Almeno 60 giorni prima della scadenza del permesso attuale.',
            doNow: [
                'Controlla la data di scadenza sul tuo permesso attuale.',
                'Raccogli le ultime 3 buste paga o l\'ultimo CUD/Unico.',
                'Ottieni il certificato di residenza o la comunicazione di ospitalità.',
                'Fai la fotocopia del permesso di soggiorno in scadenza e del passaporto.',
                'Inserisci tutto nel kit postale e spediscilo.'
            ],
            steps: [
                'Controlla la data di scadenza sul tuo permesso attuale.',
                'Raccogli le ultime 3 buste paga o l\'ultimo CUD/Unico.',
                'Ottieni il certificato di residenza o la comunicazione di ospitalità.',
                'Fai la fotocopia del permesso di soggiorno in scadenza e del passaporto.',
                'Inserisci tutto nel kit postale e spediscilo.'
            ],
            dontDo: [
                'Non far scadere il permesso senza aver presentato la domanda di rinnovo.',
                'Non presentare documentazione falsa o incompleta.',
                'Non viaggiare fuori dall\'Italia se hai solo la ricevuta (verifica le regole per i paesi scalo).'
            ],
            commonErrors: [
                'Presentare la domanda troppo tardi.',
                'Non dimostrare un reddito sufficiente per il mantenimento.',
                'Indirizzo di residenza non aggiornato.'
            ],
            askHelpWhen: [
                'Se hai perso il lavoro poco prima del rinnovo.',
                'Se hai cambiato stato civile (matrimonio, divorzio).'
            ],
            whoCanHelp: [
                'Patronati',
                'Associazioni di categoria',
                'Sindacati (Ufficio Stranieri)'
            ],
            whereToDo: 'Ufficio Postale e poi appuntamento in Questura.',
            timeToComplete: '2 ore per la preparazione dei documenti.',
            practicalDisclaimer: 'La ricevuta di rinnovo permette di continuare a lavorare regolarmente in Italia.',
            sources: [
                {
                    title: 'Rinnovo del permesso di soggiorno',
                    organization: 'Polizia di Stato',
                    url: 'https://www.poliziadistato.it/articolo/rinnovo-del-permesso-di-soggiorno',
                    type: 'official',
                    usedFor: 'Tempistiche e requisiti di rinnovo.',
                    lastCheckedAt: '2026-05-16'
                },
                {
                    title: 'Linee guida rinnovo',
                    organization: 'Patronato ACLI',
                    url: 'https://www.patronato.acli.it/',
                    type: 'nonprofit',
                    usedFor: 'Dettaglio documenti necessari.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Permesso originale e copia',
                'Passaporto e copia',
                'Documenti di reddito',
                'Certificato di residenza',
                'Marca da bollo'
            ],
            relatedGlossaryTerms: ['Rinnovo', 'CUD', 'Ricevuta assicurata']
        },
        {
            id: 'kit-postale-guida',
            slug: 'kit-postale-permesso-soggiorno',
            title: 'Kit postale permesso soggiorno',
            mainEntity: 'Ministero dell\'Interno',
            category: 'immigrazione',
            audience: ['stranieri'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Guida alla compilazione dei moduli (Modello 1 e 2) contenuti nel kit giallo di Poste Italiane.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il "kit giallo" è il pacchetto di moduli da compilare per la maggior parte delle richieste di soggiorno. Include il Modulo 1 (dati anagrafici) e il Modulo 2 (dati lavorativi). Va spedito tramite Sportello Amico di Poste Italiane.',
            prerequisites: ['Kit ritirato in posta', 'Penna nera', 'Codice Fiscale'],
            whenToDo: 'Ogni volta che devi richiedere o rinnovare un permesso tramite Poste.',
            doNow: [
                'Scrivi in stampatello e usa solo penna nera.',
                'Compila il Modulo 1 con i tuoi dati anagrafici e del passaporto.',
                'Compila il Modulo 2 se richiedi il permesso per motivi di lavoro.',
                'Non incollare la marca da bollo sul modulo (va solo mostrata o applicata nell\'apposito spazio senza coprire dati).',
                'Consegna il kit aperto all\'impiegato postale per il controllo.'
            ],
            steps: [
                'Scrivi in stampatello e usa solo penna nera.',
                'Compila il Modulo 1 con i tuoi dati anagrafici e del passaporto.',
                'Compila il Modulo 2 se richiedi il permesso per motivi di lavoro.',
                'Non incollare la marca da bollo sul modulo (va solo mostrata o applicata nell\'apposito spazio senza coprire dati).',
                'Consegna il kit aperto all\'impiegato postale per il controllo.'
            ],
            dontDo: [
                'Non inserire documenti originali nel kit (solo fotocopie).',
                'Non chiudere la busta prima di andare in posta.',
                'Non cancellare o usare correttori sui moduli.'
            ],
            commonErrors: [
                'Sbagliare il codice della provincia o dello stato estero.',
                'Dimenticare di barrare la casella relativa al tipo di richiesta.',
                'Scrivere fuori dai margini delle caselle.'
            ],
            askHelpWhen: [
                'Se hai dubbi sui codici da inserire.',
                'Se hai figli a carico da inserire nel permesso.'
            ],
            whoCanHelp: [
                'Operatori di Patronato',
                'Mediazioni culturali',
                'Personale Poste (solo per la spedizione)'
            ],
            whereToDo: 'A casa per la compilazione, in Posta per l\'invio.',
            timeToComplete: '30-45 minuti.',
            practicalDisclaimer: 'Il costo della spedizione assicurata è di circa 30 euro, oltre ai contributi per il permesso.',
            sources: [
                {
                    title: 'Istruzioni compilazione moduli',
                    organization: 'Poste Italiane',
                    url: 'https://www.poste.it/prodotti/permesso-di-soggiorno.html',
                    type: 'official',
                    usedFor: 'Specifiche tecniche di spedizione.',
                    lastCheckedAt: '2026-05-16'
                },
                {
                    title: 'Guida al Kit',
                    organization: 'Cinformi',
                    url: 'https://www.cinformi.it/',
                    type: 'nonprofit',
                    usedFor: 'Esempi di compilazione moduli.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Modulo 1 compilato',
                'Modulo 2 (se lavoratore)',
                'Fotocopia passaporto (tutte le pagine)',
                'Bollettino pagato',
                'Busta aperta'
            ],
            relatedGlossaryTerms: ['Sportello Amico', 'Ricevuta assicurata', 'Marca da bollo']
        },
        {
            id: 'codice-fiscale-stranieri-immigrazione',
            slug: 'codice-fiscale-per-stranieri',
            title: 'Codice fiscale per stranieri',
            mainEntity: 'Ministero dell\'Interno',
            category: 'immigrazione',
            audience: ['stranieri'],
            level: 'base',
            estimatedMinutes: 4,
            summary: 'Come ottenere il codice fiscale, indispensabile per lavorare, affittare casa e aprire un conto corrente.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Il codice fiscale è un codice alfanumerico che identifica il cittadino nei rapporti con la Pubblica Amministrazione. Per gli stranieri viene rilasciato dall\'Agenzia delle Entrate o dallo Sportello Unico per l\'Immigrazione.',
            prerequisites: ['Passaporto o permesso di soggiorno', 'Visto d\'ingresso'],
            whenToDo: 'Subito dopo l\'arrivo in Italia, è prioritario per qualsiasi contratto.',
            doNow: [
                'Individua l\'ufficio dell\'Agenzia delle Entrate più vicino.',
                'Compila il modello AA4/8 (Domanda di attribuzione codice fiscale).',
                'Presenta il passaporto con visto valido o la ricevuta del permesso di soggiorno.',
                'Ritira il certificato cartaceo immediato.',
                'Attendi l\'invio della tessera plastificata a casa (se hai una residenza stabile).'
            ],
            steps: [
                'Individua l\'ufficio dell\'Agenzia delle Entrate più vicino.',
                'Compila il modello AA4/8 (Domanda di attribuzione codice fiscale).',
                'Presenta il passaporto con visto valido o la ricevuta del permesso di soggiorno.',
                'Ritira il certificato cartaceo immediato.',
                'Attendi l\'invio della tessera plastificata a casa (se hai una residenza stabile).'
            ],
            dontDo: [
                'Non usare calcolatori online per generare il tuo codice fiscale: solo quello rilasciato dall\'Agenzia è legale.',
                'Non pagare nessuno per ottenere il codice fiscale: il rilascio è gratuito.'
            ],
            commonErrors: [
                'Riportare male il nome o cognome (deve corrispondere esattamente al passaporto).',
                'Non aggiornare l\'indirizzo se si cambia casa.',
                'Confondere il codice fiscale provvisorio (numerico) con quello definitivo.'
            ],
            askHelpWhen: [
                'Se il tuo codice fiscale risulta errato o "omocodice".',
                'Se hai smarrito il tesserino.'
            ],
            whoCanHelp: [
                'Agenzia delle Entrate',
                'Sportello Unico per l\'Immigrazione',
                'Patronati'
            ],
            whereToDo: 'Agenzia delle Entrate (qualsiasi ufficio territoriale).',
            timeToComplete: '30 minuti (più eventuale coda).',
            practicalDisclaimer: 'Il codice fiscale non scade mai, a differenza del permesso di soggiorno.',
            sources: [
                {
                    title: 'Codice fiscale per cittadini stranieri',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/portale/web/guest/schede/istanze/richiesta-ts_cf/cf-cittadini-stranieri',
                    type: 'official',
                    usedFor: 'Modalità di richiesta e modulistica.',
                    lastCheckedAt: '2026-05-16'
                },
                {
                    title: 'Attribuzione codice fiscale',
                    organization: 'Ministero degli Affari Esteri',
                    url: 'https://www.esteri.it/',
                    type: 'official',
                    usedFor: 'Richiesta tramite consolati all\'estero.',
                    lastCheckedAt: '2026-05-16'
                }
            ],
            checklist: [
                'Passaporto originale',
                'Fotocopia passaporto',
                'Modello AA4/8 compilato',
                'Indirizzo di recapito',
                'Visto d\'ingresso'
            ],
            relatedGlossaryTerms: ['Agenzia delle Entrate', 'Omocodia', 'Tessera Sanitaria']
        },
        {
            id: 'residenza-stranieri',
            slug: 'residenza-per-cittadini-stranieri',
            title: 'Residenza per cittadini stranieri',
            category: 'immigrazione',
            audience: ['stranieri'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Come richiedere l\'iscrizione anagrafica al Comune per chi ha un permesso di soggiorno.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Comune',
            synthesis: 'La residenza è fondamentale per l\'accesso ai servizi sociali, sanitari e per la cittadinanza.',
            steps: [
                'Recati all\'Ufficio Anagrafe del Comune dove dimori',
                'Presenta il passaporto e il permesso di soggiorno valido (o la ricevuta di rinnovo)',
                'Dimostra il titolo di occupazione dell\'alloggio (contratto affitto o dichiarazione ospitalità)',
                'Attendi l\'accertamento dei vigili urbani entro 45 giorni'
            ],
            checklist: [
                'Permesso di soggiorno originale',
                'Contratto di affitto',
                'Modulo di richiesta compilato'
            ],
            sources: [
                {
                    title: 'Iscrizione anagrafica stranieri',
                    organization: 'Ministero dell\'Interno',
                    url: 'https://www.interno.gov.it/',
                    type: 'official',
                    usedFor: 'Normativa anagrafe',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'tessera-sanitaria-ssn',
            slug: 'tessera-sanitaria-iscrizione-ssn-stranieri',
            title: 'Tessera sanitaria / iscrizione SSN',
            category: 'immigrazione',
            audience: ['stranieri'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Come iscriversi al Servizio Sanitario Nazionale e ottenere il medico di base per cittadini stranieri.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'ASL / Ministero della Salute',
            synthesis: 'L\'iscrizione può essere obbligatoria (per chi lavora) o volontaria.',
            steps: [
                'Recati allo sportello scelta e revoca della ASL territoriale',
                'Presenta il permesso di soggiorno e il codice fiscale',
                'Scegli il medico di medicina generale tra quelli disponibili',
                'Ritira il certificato d\'iscrizione e attendi la tessera sanitaria plastificata'
            ],
            checklist: [
                'Codice fiscale ottenuto',
                'Permesso di soggiorno pronto',
                'Certificato residenza o ospitalità'
            ],
            sources: [
                {
                    title: 'Assistenza sanitaria cittadini stranieri',
                    organization: 'Ministero della Salute',
                    url: 'https://www.salute.gov.it/',
                    type: 'official',
                    usedFor: 'Diritto alla salute',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'ricongiungimento-familiare',
            slug: 'ricongiungimento-familiare-orientamento',
            title: 'Ricongiungimento familiare orientamento',
            category: 'immigrazione',
            audience: ['stranieri'],
            level: 'intermedia',
            estimatedMinutes: 15,
            summary: 'La procedura per portare in Italia i propri familiari (coniuge, figli, genitori).',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Sportello Unico per l\'Immigrazione (Prefettura)',
            synthesis: 'Richiede il Nulla Osta della Prefettura dimostrando reddito e alloggio idoneo.',
            steps: [
                'Verifica di avere i requisiti di reddito annuo (parametro assegno sociale)',
                'Ottieni il certificato di idoneità alloggiativa dal Comune',
                'Invia la domanda telematicamente allo Sportello Unico (Nulla Osta)',
                'Una volta ottenuto il Nulla Osta, il familiare può chiedere il visto al consolato italiano all\'estero'
            ],
            checklist: [
                'Reddito minimo verificato',
                'Idoneità alloggiativa ottenuta',
                'Documenti familiari tradotti e legalizzati'
            ],
            sources: [
                {
                    title: 'Ricongiungimento familiare',
                    organization: 'Ministero dell\'Interno',
                    url: 'https://www.interno.gov.it/',
                    type: 'official',
                    usedFor: 'Procedura Nulla Osta',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'permesso-ue-lungo-periodo',
            slug: 'permesso-soggiorno-ue-lungo-periodo-ex-carta',
            title: 'Permesso UE lungo periodo',
            category: 'immigrazione',
            audience: ['stranieri'],
            level: 'intermedia',
            estimatedMinutes: 10,
            summary: 'Come ottenere il permesso di soggiorno a tempo indeterminato dopo 5 anni di residenza.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Questura',
            synthesis: 'Permesso che non scade, garantisce diritti quasi pari ai cittadini UE.',
            prerequisites: ['Soggiorno regolare da almeno 5 anni', 'Reddito non inferiore all\'assegno sociale', 'Superamento test di lingua italiana (livello A2)'],
            steps: [
                'Prenota e supera il test di lingua italiana presso i centri abilitati',
                'Raccogli i CUD/Unico degli ultimi anni',
                'Presenta la domanda tramite kit postale specifico',
                'Attendi la convocazione per il fotosegnalamento'
            ],
            checklist: [
                '5 anni di residenza compiuti',
                'Test A2 superato',
                'Certificato casellario giudiziale'
            ],
            sources: [
                {
                    title: 'Permesso di soggiorno UE per soggiornanti di lungo periodo',
                    organization: 'Polizia di Stato',
                    url: 'https://www.poliziadistato.it/',
                    type: 'official',
                    usedFor: 'Requisiti e test lingua',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'conversione-permesso',
            slug: 'conversione-permesso-soggiorno-orientamento',
            title: 'Conversione permesso orientamento',
            category: 'immigrazione',
            audience: ['stranieri'],
            level: 'intermedia',
            estimatedMinutes: 10,
            summary: 'Come cambiare il motivo del proprio soggiorno (es. da studio a lavoro).',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Questura / Sportello Unico',
            synthesis: 'Trasformazione del titolo di soggiorno in presenza di nuovi requisiti.',
            steps: [
                'Verifica se la conversione è soggetta a quote (Decreto Flussi) o fuori quota',
                'Presenta domanda di conversione prima della scadenza del permesso attuale',
                'Se da studio a lavoro, dimostra di avere un contratto di lavoro o partita IVA',
                'Completa la procedura in Questura dopo il Nulla Osta'
            ],
            checklist: [
                'Contratto di lavoro firmato',
                'Permesso attuale valido',
                'Domanda telematica inviata'
            ],
            sources: [
                {
                    title: 'Conversione del permesso di soggiorno',
                    organization: 'Ministero dell\'Interno',
                    url: 'https://www.interno.gov.it/',
                    type: 'official',
                    usedFor: 'Casi di conversione',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'cittadinanza-base',
            slug: 'cittadinanza-italiana-orientamento-base',
            title: 'Cittadinanza: orientamento base',
            category: 'immigrazione',
            audience: ['stranieri'],
            level: 'avanzata',
            estimatedMinutes: 20,
            summary: 'Le vie principali per diventare cittadini italiani: per residenza o per matrimonio.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Ministero dell\'Interno (Prefettura)',
            synthesis: 'Processo lungo e complesso che richiede fedina penale pulita, reddito e conoscenza della lingua.',
            steps: [
                'Verifica gli anni di residenza ininterrotta (10 anni per extracomunitari, 4 per comunitari)',
                'Oppure verifica i termini se sposato con cittadino italiano (2 anni se residenti in Italia)',
                'Ottieni il certificato di conoscenza della lingua italiana (livello B1)',
                'Recupera i certificati penali dal paese d\'origine (legalizzati e tradotti)',
                'Invia la domanda online sul portale del Ministero dell\'Interno'
            ],
            checklist: [
                'Residenza ininterrotta verificata',
                'Test lingua B1 superato',
                'Certificati originali esteri pronti',
                'Reddito ultimi 3 anni dimostrabile'
            ],
            sources: [
                {
                    title: 'Cittadinanza italiana',
                    organization: 'Ministero dell\'Interno',
                    url: 'https://www.interno.gov.it/it/temi/cittadinanza',
                    type: 'official',
                    usedFor: 'Requisiti e portale domande',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'titoli-soggiorno-sito-interno',
            slug: 'titoli-di-soggiorno-dove-verificarli-interno',
            title: 'Titoli di soggiorno: dove verificarli',
            category: 'immigrazione',
            audience: ['stranieri', 'cittadini'],
            level: 'base',
            estimatedMinutes: 10,
            mainEntity: 'Ministero dell’Interno',
            summary: 'Tipologie, rinnovo e kit si verificano sulle pagine Interno e Questura, non sui gruppi social. Il portale istituzionale è il punto di partenza prima di Poste o appuntamento.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-08-14',
            steps: [
                'Apri la pagina del Ministero dell’Interno «Titoli di soggiorno».',
                'Identifica il titolo che hai o che chiedi (lavoro, famiglia, studio, UE lungo periodo, ecc.).',
                'Segui solo i canali indicati (kit Poste, Questura, portali): scadenze e documenti cambiano per tipologia.',
                'Per cittadinanza usa la scheda Interno dedicata, che è un procedimento diverso dal permesso.',
            ],
            commonErrors: ['Usare un elenco documenti trovato su un forum per un titolo diverso'],
            dontDo: ['Non pagare «agenzie» che tengono il passaporto originale senza ricevuta Questura/Poste'],
            checklist: ['Pagina Interno aperta', 'Tipologia titolo identificata', 'Scadenza annotata'],
            faqs: [
                { q: 'Il kit Poste vale per tutti i permessi?', a: 'No. Alcuni titoli seguono altri canali. La pagina Interno e la Questura lo specificano.' },
                { q: 'Posso viaggiare con la ricevuta?', a: 'Dipende dal titolo e dagli accordi. Verifica Questura/Interno, non un post.' },
            ],
            officialLinksV2: [
                { sourceId: 'permessoSoggiorno', useWhen: 'Scheda titoli di soggiorno', beforeOpening: [] },
                { sourceId: 'cittadinanzaInterno', useWhen: 'Se valuti la cittadinanza', beforeOpening: [] },
            ],
            sources: [
                {
                    title: 'Titoli di soggiorno',
                    organization: 'Ministero dell’Interno',
                    url: 'https://www.interno.gov.it/it/temi/immigrazione-e-asilo/titoli-soggiorno',
                    type: 'official',
                    usedFor: 'Quadro ufficiale dei titoli',
                    lastCheckedAt: '2026-08-14',
                },
            ],
        }
    ]
};

