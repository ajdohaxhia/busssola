import { Module } from '@/types';

export const modulo_06_stalking_doxxing: Module = {
    id: 'modulo-06-stalking-doxxing',
    lastUpdated: '2026-11-27',
    title: 'Modulo 6: Cyberstalking e Doxxing',
    description: 'Difenditi dalle persecuzioni online e dalla diffusione illecita dei tuoi dati personali con le procedure legali di ammonimento e reclamo al Garante.',
    category: 'privacy',
    difficulty: 'intermedia',
    icon: 'Eye',
    themeColor: 'accent-purple',
    lessons: [
        {
            id: 'cyberstalking-logic',
            slug: 'cyberstalking-assedio-digitale',
            title: 'Cyberstalking: L\'assedio digitale',
            category: 'privacy',
            audience: ['adults', 'minors', 'victims'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come riconoscere quando le attenzioni online diventano reato di atti persecutori (Art. 612-bis c.p.).',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Un ex partner, un conoscente o uno sconosciuto ti tempesta di messaggi su ogni piattaforma, crea profili falsi per spiarti, contatta i tuoi amici o pubblica post offensivi su di te in modo ossessivo.',
            question: 'Quando un comportamento online diventa "stalking" per la legge?',
            whatIsHappening: 'Il cyberstalking non è solo fastidioso: è un reato se provoca un perdurante stato di ansia, paura per la propria incolumità o ti costringe a cambiare le tue abitudini.',
            warningSigns: [
                'Ricezione di decine di messaggi o chiamate al giorno da numeri diversi.',
                'Commenti ossessivi o minacciosi su ogni tuo post.',
                'Creazione di account "fake" che imitano il tuo o che ti seguono ovunque.',
                'Lo stalker dimostra di sapere dove sei o cosa stai facendo in tempo reale.'
            ],
            steps: [
                'Non rispondere mai: il silenzio è la migliore difesa.',
                'Salva le prove e contatta le autorità.'
            ],
            doNow: [
                'INTERROMPI OGNI RISPOSTA. Anche rispondere "lasciami in pace" dà allo stalker l\'attenzione che cerca.',
                'Fai screenshot di ogni singolo messaggio, commento o profilo (con data e ora visibili).',
                'Blocca l\'utente, ma solo dopo aver salvato le prove.',
                'Avvisa le persone vicine della situazione affinché non forniscano informazioni su di te.'
            ],
            dontDo: [
                'Non cercare di "ragionare" con lo stalker: la sua logica è ossessiva, non razionale.',
                'Non pubblicare post di sfida o insulti rivolti a lui.',
                'Non cancellare il tuo account prima di aver esportato le chat.',
                'Non sottovalutare le minacce.'
            ],
            preserveEvidence: [
                'Screenshot integrali (non ritagliati) di tutte le comunicazioni.',
                'URL dei profili social del persecutore.',
                'Registri delle chiamate e log dei messaggi.',
                'Copia di eventuali mail ricevute.'
            ],
            askHelpWhen: [
                'Se senti ansia costante o hai paura di uscire di casa.',
                'Se lo stalker minaccia la tua incolumità o quella dei tuoi cari.',
                'Se il comportamento persiste nonostante i blocchi tecnici.'
            ],
            whoCanHelp: [
                'Polizia Postale (commissariatodips.it)',
                'Numero Nazionale Antiviolenza e Stalking 1522',
                'Centri Antiviolenza locali'
            ],
            checklist: [
                'Zero risposte',
                'Salva screenshot',
                'Blocca profili',
                'Chiama il 1522'
            ],
            sources: [
                {
                    title: 'Cyberstalking e Atti Persecutori',
                    organization: 'Polizia di Stato',
                    url: 'https://www.commissariatodips.it/approfondimenti/cyberstalking/cyber-stalking/index.html',
                    type: 'official',
                    usedFor: 'Definizione del reato e consigli pratici di autodifesa.',
                    lastCheckedAt: '2026-11-27'
                }
            ],
            lastReviewedAt: '2026-05-14',
            qualityGatePassed: true
        },
        {
            id: 'stalking-safety-plan',
            slug: 'piano-sicurezza-digitale-personale-stalking',
            title: 'Piano di sicurezza digitale personale',
            mainEntity: 'Apple Support',
            category: 'privacy',
            audience: ['adults', 'victims'],
            level: 'medio',
            estimatedMinutes: 8,
            summary: 'Un protocollo completo per blindare la tua identità online quando sei vittima di una persecuzione.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Sei vittima di stalking e sospetti che il persecutore possa accedere ai tuoi account o sapere dove ti trovi. Hai bisogno di un "reset" totale della tua impronta digitale per sicurezza.',
            question: 'Come posso sparire dal radar di uno stalker senza rinunciare alla tecnologia?',
            whatIsHappening: 'Lo stalking digitale si nutre di informazioni. Ridurre la tua superficie di attacco significa chiudere ogni porta che lo stalker potrebbe usare per spiarti.',
            warningSigns: [
                'Lo stalker sa cose che hai detto solo in chat private.',
                'Ricevi avvisi di login da dispositivi che non riconosci.',
                'Le persone che frequenti vengono contattate dallo stalker.'
            ],
            steps: [
                'Attiva l\'autenticazione a due fattori (2FA) su ogni account.',
                'Rimuovi le autorizzazioni di posizione per app non necessarie.'
            ],
            doNow: [
                'Cambia la password della tua Email e del Cloud (iCloud/Google) usando un dispositivo sicuro.',
                'Attiva la 2FA (Autenticazione a due fattori) su tutti gli account.',
                'Rendi privati tutti i tuoi profili social e rimuovi i follower che non conosci personalmente.',
                'Disattiva la condivisione della posizione in tempo reale su Google Maps, "Dov\'è" di Apple e WhatsApp.',
                'Controlla la lista dei "Dispositivi connessi" nei tuoi account ed espelli quelli sospetti.'
            ],
            dontDo: [
                'Non postare mai foto in tempo reale (fallo quando te ne sei già andato dal luogo).',
                'Non accettare richieste di amicizia da profili nuovi o senza foto.'
            ],
            preserveEvidence: [
                'Prima di rendere i profili privati, assicurati di aver salvato le prove delle molestie passate.'
            ],
            askHelpWhen: [
                'Se sospetti che il tuo telefono sia stato infettato da uno "Stalkerware".',
                'Se lo stalker si presenta fisicamente nei luoghi che frequenti.'
            ],
            whoCanHelp: [
                '1522 - Numero Antiviolenza',
                'Esperti di sicurezza digitale',
                'Polizia Postale'
            ],
            checklist: [
                'Reset password Cloud',
                'Privacy social totale',
                'Posizione OFF',
                'Logout sessioni sconosciute',
                '2FA attiva ovunque'
            ],
            sources: [
                {
                    title: 'Guida alla sicurezza personale',
                    organization: 'Apple Support',
                    url: 'https://support.apple.com/it-it/guide/personal-safety/welcome/web',
                    type: 'platform',
                    usedFor: 'Protocollo di sicurezza per proteggere account e posizioni.',
                    lastCheckedAt: '2026-05-14'
                }
            ],
            lastReviewedAt: '2026-05-14',
            qualityGatePassed: true
        },
        {
            id: 'ex-partner-shared-accounts',
            slug: 'ex-partner-account-condivisi-sicurezza',
            title: 'Ex partner e account condivisi',
            mainEntity: 'Electronic Frontier Foundation (EFF)',
            category: 'privacy',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Cosa fare dopo una rottura per evitare che un ex partner possa ancora controllare la tua vita digitale.',
            status: 'published',
            emergencyLevel: 'medium',
            scenario: 'Ti sei separato da poco. In passato avete condiviso password di Netflix, Spotify, ma anche account Amazon, l\'accesso al Cloud delle foto o il "In famiglia" di Apple/Google.',
            question: 'Come posso separare i miei dati da quelli di un ex senza perdere i miei contenuti?',
            whatIsHappening: 'Gli account condivisi sono uno strumento comune di "Abuso Facilitato dalla Tecnologia". Un ex partner malintenzionato può usare questi accessi per spiare le tue foto.',
            warningSigns: [
                'L\'ex partner fa commenti su acquisti che hai fatto online.',
                'Ricevi notifiche che il tuo account è in uso su un altro dispositivo.',
                'Trovi foto o contatti nuovi nel tuo cloud che non hai aggiunto tu.'
            ],
            steps: [
                'Esci dai gruppi "In famiglia" (Apple/Google).',
                'Cambia le password di tutti gli account condivisi.'
            ],
            doNow: [
                'Esci dai gruppi "In famiglia" (Apple/Google) se non sei tu l\'organizzatore.',
                'Cambia le password di tutti gli account che avevate in comune, specialmente Amazon, Netflix e siti di utility.',
                'Controlla se il tuo indirizzo di casa è ancora salvato come "Casa" sul navigatore dell\'ex o viceversa.',
                'Revoca l\'accesso alle "App di terze parti" che potrebbero essere collegate ai suoi account.'
            ],
            dontDo: [
                'Non sottovalutare gli account "secondari" (es: l\'app del termostato o delle telecamere di casa).',
                'Non mantenere password "per comodità" se la rottura non è stata consensuale e serena.'
            ],
            preserveEvidence: [
                'Se trovi segni di accesso abusivo (IP diversi nei log), fai uno screenshot prima di cambiare password.'
            ],
            askHelpWhen: [
                'Se la rottura è legata a violenza domestica: contatta centri specializzati PRIMA di cambiare password.'
            ],
            whoCanHelp: [
                '1522 - Numero Antiviolenza',
                'EFF Surveillance Self-Defense Guide',
                'Avvocato familiarista'
            ],
            checklist: [
                'Esci da "In famiglia"',
                'Cambia password comuni',
                'Verifica cloud foto',
                'Controlla domotica/app casa'
            ],
            sources: [
                {
                    title: 'Surveillance Self-Defense: Domestic Violence',
                    organization: 'Electronic Frontier Foundation (EFF)',
                    url: 'https://ssd.eff.org/module/privacy-strategies-survivors-domestic-violence',
                    type: 'nonprofit',
                    usedFor: 'Strategie di difesa per sopravvissuti a violenza domestica.',
                    lastCheckedAt: '2026-05-14'
                }
            ],
            lastReviewedAt: '2026-05-14',
            qualityGatePassed: true
        },
        {
            id: 'risorse-1522-rete-antiviolenza-sostegni',
            slug: '1522-centri-antiviolenza-reddito-liberta-tutele',
            title: '1522, Centri Antiviolenza, Reddito di Libertà e tutele lavoro',
            mainEntity: 'Dipartimento per le Pari Opportunità / INPS',
            category: 'privacy',
            audience: ['adults', 'victims', 'cittadini'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Come contattare il 1522 via telefono o chat anonima su 1522.eu, trovare un Centro Antiviolenza e attivare Reddito di Libertà, Microcredito, congedo 90 giorni e gratuito patrocinio.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Subisci violenza fisica, psicologica, economica o atti persecutori (o vuoi aiutare una persona vicina) e hai bisogno di sapere come chiedere aiuto in sicurezza e quali sostegni pratici spettano.',
            question: 'Cosa offre concretamente il 1522 oltre al numero di emergenza telefonico?',
            whatIsHappening: 'Il 1522 del Dipartimento per le Pari Opportunità è il punto d’accesso pubblico gratuito h24 alla rete territoriale dei Centri Antiviolenza (CAV) e Case Rifugio, collegato alle misure di autonomia economica INPS/Comuni (Reddito di Libertà e Microcredito di Libertà), tutele lavorative e difesa legale gratuita.',
            warningSigns: [
                'Controllo sistematico del telefono, degli spostamenti o accesso impedito al conto bancario e al denaro (violenza economica)',
                'Minacce, pedinamenti, ricatti o isolamento da familiari e colleghe di lavoro',
                'Paura di perdere casa, stipendio o tutela dei figli se ti allontani da una situazione violenta',
            ],
            steps: [
                'Se c’è pericolo immediato o violenza in corso, chiama prima il 112 (o segnala tramite app YouPol della Polizia di Stato).',
                'Chiama il 1522 gratuitamente da fisso o cellulare (attivo 24/7 in italiano, inglese, francese, spagnolo, arabo, tedesco e altre lingue su appuntamento) oppure usa la chat anonima su 1522.eu.',
                'Consulta la mappatura ufficiale dei Centri Antiviolenza su 1522.eu/centri-antiviolenza/mappa.html o sulla rete D.i.Re per colloquio riservato, supporto psicologico e eventuale ospitalità in Casa Rifugio.',
                'Chiedi al Centro Antiviolenza e ai servizi sociali comunali l’attivazione del Reddito di Libertà INPS e del Microcredito di Libertà (microcredito.gov.it/mdl/) oltre ai percorsi di inclusione bancaria previsti dal Protocollo DPO-ABI.',
                'Se lavori, richiedi la certificazione del percorso di protezione per fruire fino a 90 giorni lavorativi retribuiti di congedo in 3 anni (art. 24 D.Lgs. 80/2015) e sappi che per i reati di violenza di genere e stalking spetta il patrocinio a spese dello Stato in deroga ai limiti di reddito (art. 76 co. 4-ter D.P.R. 115/2002).',
            ],
            doNow: [
                'Usa la navigazione privata o il pulsante di uscita rapida su 1522.eu se il dispositivo è condiviso o controllato',
                'Salva il contatto di un Centro Antiviolenza o del 1522 sotto un nome neutro se temi controlli sul telefono',
                'Verifica le condizioni per ISEE escluso dal nucleo violento e gli Sportelli Rosa presso INPS e Comune tramite CAV',
            ],
            dontDo: [
                'Non rinunciare a chiedere aiuto pensando di non poter sostenere spese legali o abitative: il supporto 1522/CAV e il patrocinio per vittime di violenza sono gratuiti',
                'Non cancellare messaggi di minaccia, referti o movimenti bancari prima di averli messi al sicuro tramite CAV o forze dell’ordine',
            ],
            preserveEvidence: [
                'Referti di pronto soccorso, verbali delle forze dell’ordine e attestazioni di presa in carico del Centro Antiviolenza',
                'Screenshot datati di messaggi, mail o controlli bancari non consensuali conservati su account sicuro',
            ],
            askHelpWhen: [
                'Subito, anche solo per un primo consiglio anonimo su 1522.eu senza obbligo di denuncia immediata',
            ],
            whoCanHelp: [
                '1522 — Numero verde e chat anonima h24 (Dipartimento Pari Opportunità)',
                'Centri Antiviolenza territoriali (Mappa 1522 / Rete D.i.Re)',
                'Forze dell’Ordine 112 e app YouPol (anche per ammonimento del Questore)',
                'Servizi Sociali comunali e Sportelli INPS (Reddito di Libertà e congedo 90 giorni)',
            ],
            officialLinksV2: [
                {
                    sourceId: 'antiviolenza1522Portale',
                    useWhen: 'Per accedere alla chat anonima h24 e alle informazioni 1522',
                    beforeOpening: ['Se temi controlli sul dispositivo, apri in finestra anonima']
                },
                {
                    sourceId: 'antiviolenza1522Mappa',
                    useWhen: 'Per individuare il Centro Antiviolenza accreditato più vicino',
                    beforeOpening: []
                },
                {
                    sourceId: 'dpoSostegnoEconomicoViolenza',
                    useWhen: 'Per verificare Reddito di Libertà, Microcredito di Libertà e autonomia finanziaria',
                    beforeOpening: []
                },
                {
                    sourceId: 'giustiziaPatrocinioPenale',
                    useWhen: 'Per consultare le regole di accesso gratuito all’avvocato senza limiti di reddito',
                    beforeOpening: []
                }
            ],
            checklist: [
                'Numero 1522 / chat 1522.eu salvati in sicurezza',
                'Centro Antiviolenza locale individuato sulla mappa ufficiale',
                'Valutati Reddito di Libertà, Microcredito e congedo art. 24 D.Lgs. 80/2015',
                'Verificato accesso gratuito a patrocinio legale e ammonimento Questore',
            ],
            faqs: [
                { q: 'Devo aver già sporto denuncia per chiamare il 1522 o andare in un Centro Antiviolenza?', a: 'No. Il contatto con il 1522 e con i Centri Antiviolenza è gratuito, riservato e non comporta alcun obbligo di denuncia: serve prima di tutto a proteggerti e informarti.' },
                { q: 'Chi subisce stalking o violenza può avere l’avvocato gratis anche se supera i limiti di reddito ISEE?', a: 'Sì: nei procedimenti penali per maltrattamenti, atti persecutori (stalking), violenza sessuale e reati correlati, l’art. 76 comma 4-ter del D.P.R. 115/2002 consente l’ammissione al patrocinio a spese dello Stato alla persona offesa anche in deroga ai limiti di reddito.' },
            ],
            sources: [
                {
                    title: '1522 — Il servizio gratuito h24 multilingua e chat',
                    organization: 'Dipartimento per le Pari Opportunità',
                    url: 'https://www.1522.eu/1522/il-servizio.html',
                    type: 'official',
                    usedFor: 'Modalità di accesso voce, chat e lingue disponibili',
                    lastCheckedAt: '2026-11-27'
                },
                {
                    title: 'DPO — Il sostegno economico alle vittime della violenza di genere',
                    organization: 'Presidenza del Consiglio dei Ministri — DPO',
                    url: 'https://www.pariopportunita.gov.it/it/politiche-e-attivita/violenza-di-genere/il-sostegno-economico-alle-vittime-della-violenza-di-genere/',
                    type: 'official',
                    usedFor: 'Reddito di Libertà e Microcredito di Libertà',
                    lastCheckedAt: '2026-11-27'
                },
                {
                    title: 'Ministero della Giustizia — Patrocinio a spese dello Stato nei giudizi penali',
                    organization: 'Ministero della Giustizia',
                    url: 'https://www.giustizia.it/giustizia/page/it/patrocinio_a_spese_dello_stato_nei_giudizi_penali',
                    type: 'official',
                    usedFor: 'Deroga limiti di reddito ex art. 76 co. 4-ter D.P.R. 115/2002',
                    lastCheckedAt: '2026-11-27'
                }
            ],
            lastReviewedAt: '2026-11-27',
            qualityGatePassed: true
        }
    ]
};
