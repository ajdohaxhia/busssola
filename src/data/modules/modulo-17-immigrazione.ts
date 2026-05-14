import { Module } from '@/types';

export const modulo_17_immigrazione: Module = {
    id: 'modulo-17-immigrazione',
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
            lastReviewedAt: '2026-05-14',
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Linee guida rinnovo',
                    organization: 'Patronato ACLI',
                    url: 'https://www.patronato.acli.it/',
                    type: 'nonprofit',
                    usedFor: 'Dettaglio documenti necessari.',
                    lastCheckedAt: '2026-05-14'
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Guida al Kit',
                    organization: 'Cinformi',
                    url: 'https://www.cinformi.it/',
                    type: 'nonprofit',
                    usedFor: 'Esempi di compilazione moduli.',
                    lastCheckedAt: '2026-05-14'
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
            id: 'codice-fiscale-stranieri',
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Attribuzione codice fiscale',
                    organization: 'Ministero degli Affari Esteri',
                    url: 'https://www.esteri.it/',
                    type: 'official',
                    usedFor: 'Richiesta tramite consolati all\'estero.',
                    lastCheckedAt: '2026-05-14'
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
        }
    ]
};
