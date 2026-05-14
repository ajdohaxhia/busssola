import { Module } from '@/types';

export const modulo_14_soldi_banche_truffe: Module = {
    id: 'modulo-14-soldi-banche-truffe',
    lastUpdated: '2026-05-14',
    title: 'Soldi, Banche e Truffe',
    description: 'Protezione dei risparmi, gestione delle frodi bancarie e tutela negli acquisti online.',
    category: 'soldi',
    difficulty: 'intermedia',
    icon: 'ShieldAlert',
    themeColor: 'accent-red',
    lessons: [
        {
            id: 'bloccare-carta-clonata',
            slug: 'come-bloccare-una-carta-clonata',
            title: 'Come bloccare una carta clonata',
            category: 'soldi',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Procedura d\'emergenza per bloccare istantaneamente una carta di credito o debito in caso di uso non autorizzato.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Banca d\'Italia',
            synthesis: 'Il blocco della carta è l\'unica azione che interrompe immediatamente ulteriori furti dal conto.',
            whenToDo: 'Appena ricevi un SMS di pagamento sospetto o non trovi più la carta.',
            scenario: 'Ricevi una notifica di acquisto da un sito estero che non hai effettuato, oppure ti accorgi di aver perso il portafoglio.',
            prerequisites: ['Essere titolare della carta o avere i dati del titolare'],
            whatToPrepare: ['Ultime 4 cifre della carta (se disponibili)', 'Codice fiscale', 'Numero verde blocchi della propria banca'],
            estimatedCosts: 'Gratuito',
            timeToComplete: '2 minuti',
            steps: [
                'Chiama immediatamente il Numero Verde Blocchi della tua banca (attivo 24/7)',
                'In alternativa, usa l\'opzione "Blocca carta" nell\'app della tua banca',
                'Comunica all\'operatore i tuoi dati e il motivo del blocco',
                'Segna il "Codice di blocco" che ti verrà fornito (è la prova legale dell\'avvenuto blocco)',
                'Verifica se sono presenti altre operazioni sospette nell\'estratto conto'
            ],
            doNow: [
                'Usa l\'app della banca per il blocco istantaneo',
                'Chiama il numero verde se l\'app non è accessibile'
            ],
            dontDo: [
                'Non aspettare il mattino successivo per chiamare',
                'Non contattare prima i carabinieri: il blocco deve essere la prima cosa'
            ],
            commonErrors: [
                'Pensare che bloccare l\'account della banca blocchi anche la carta fisica',
                'Non segnarsi il codice di blocco fornito al telefono'
            ],
            ifYouHaveProblems: [
                'Se non trovi il numero verde, chiama il numero generico della banca e chiedi del servizio blocchi'
            ],
            officialLinksV2: [
                {
                    sourceId: 'bancaItaliaSicurezza',
                    useWhen: 'Per capire i tuoi diritti in caso di carta clonata',
                    beforeOpening: ['Controlla i contatti della tua banca']
                }
            ],
            checklist: [
                'Blocco effettuato via app o telefono',
                'Codice di blocco salvato',
                'Notifiche della banca attivate per il futuro'
            ],
            sources: [
                {
                    title: 'Guida ai pagamenti elettronici',
                    organization: 'Banca d\'Italia',
                    url: 'https://www.bancaditalia.it/pubblicazioni/guide-bi/guida-pagamenti-elettronici/index.html',
                    type: 'official',
                    usedFor: 'Procedure di sicurezza',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'disconoscere-operazione-bancaria',
            slug: 'come-disconoscere-operazione-bancaria-rimborso',
            title: 'Come disconoscere un’operazione bancaria',
            category: 'soldi',
            audience: ['adults', 'victims'],
            level: 'intermedia',
            estimatedMinutes: 15,
            summary: 'Procedura formale per contestare pagamenti fraudolenti e richiedere il rimborso alla banca.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Arbitro Bancario Finanziario',
            synthesis: 'Dopo il blocco, hai diritto al rimborso delle somme rubate, al netto di un\'eventuale franchigia di 50€.',
            whenToDo: 'Entro 60 giorni (o secondo i termini contrattuali) dalla ricezione dell\'estratto conto con l\'operazione sospetta.',
            scenario: 'Hai bloccato la carta per clonazione e ora devi formalizzare la richiesta per riavere indietro i 200€ che ti hanno sottratto.',
            prerequisites: ['Aver già bloccato la carta', 'Aver sporto denuncia'],
            whatToPrepare: ['Copia della denuncia alle autorità', 'Codice di blocco della carta', 'Modulo di disconoscimento (fornito dalla banca)', 'Estratto conto con l\'operazione evidenziata'],
            estimatedCosts: 'Gratuito',
            timeToComplete: '30 minuti per la pratica, fino a 30 giorni per il rimborso',
            steps: [
                'Recati presso una caserma (Carabinieri o Polizia) per sporgere denuncia',
                'Scarica il modulo di disconoscimento dal sito della tua banca o richiedilo in filiale',
                'Compila il modulo indicando data, ora, importo e tipologia dell\'operazione fraudolenta',
                'Allega la copia della denuncia e del tuo documento di identità',
                'Invia tutto via PEC o raccomandata A/R alla banca, oppure consegnalo a mano in filiale facendoti timbrare una copia per ricevuta'
            ],
            doNow: [
                'Fai la denuncia alle autorità',
                'Invia il modulo di disconoscimento via PEC'
            ],
            dontDo: [
                'Non inviare la richiesta tramite semplice email ordinaria',
                'Non aspettare mesi: i termini per la contestazione scadono'
            ],
            commonErrors: [
                'Non allegare la denuncia (obbligatoria per il rimborso)',
                'Dimenticare di firmare il modulo'
            ],
            ifYouHaveProblems: [
                'Se la banca rifiuta il rimborso, puoi fare ricorso all\'ABF'
            ],
            officialLinksV2: [
                {
                    sourceId: 'abfHome',
                    useWhen: 'Se la banca non ti rimborsa le somme contestate',
                    beforeOpening: ['Assicurati di avere la risposta scritta di rifiuto della banca']
                }
            ],
            checklist: [
                'Denuncia effettuata',
                'Modulo compilato e firmato',
                'Invio tracciabile effettuato (PEC/Raccomandata)',
                'Copia di tutta la documentazione salvata'
            ],
            sources: [
                {
                    title: 'Come contestare un\'operazione',
                    organization: 'Arbitro Bancario Finanziario',
                    url: 'https://www.arbitrobancariofinanziario.it/',
                    type: 'official',
                    usedFor: 'Regole di rimborso',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'reagire-bonifico-truffa',
            slug: 'reagire-bonifico-truffa-primi-10-minuti',
            title: 'Come reagire a un bonifico truffa (Primi 10 min)',
            category: 'soldi',
            audience: ['adults', 'victims'],
            level: 'avanzata',
            estimatedMinutes: 10,
            summary: 'Azioni immediate da compiere nei primi minuti dopo aver inviato denaro a un truffatore tramite bonifico.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Polizia Postale',
            synthesis: 'La velocità è tutto: un bonifico ordinario può essere revocato in poche ore, uno istantaneo richiede un "recall" immediato.',
            whenToDo: 'Immediatamente dopo aver realizzato che il destinatario è un truffatore.',
            scenario: 'Hai appena inviato un bonifico per un acquisto o per "aiutare un parente" e ti accorgi di essere stato ingannato.',
            prerequisites: ['Avere sottomano il TRN o CRO del bonifico'],
            whatToPrepare: ['Dati del destinatario (IBAN)', 'Importo esatto', 'App della banca o numero del servizio clienti'],
            estimatedCosts: 'Costo commissionale del richiamo bonifico (variabile)',
            timeToComplete: '10 minuti',
            steps: [
                'Entra nell\'app e prova a cliccare su "Revoca bonifico" (se ordinario ed entro i tempi)',
                'Se la revoca non è disponibile, chiama subito il Servizio Frodi della tua banca',
                'Chiedi esplicitamente l\'attivazione della procedura di "Recall" per sospetta frode',
                'Informa la banca che procederai immediatamente con la denuncia',
                'Se hai fornito anche codici OTP o credenziali, chiedi il blocco dell\'home banking'
            ],
            doNow: [
                'Chiama il servizio frodi della banca',
                'Prova a revocare il bonifico via app'
            ],
            dontDo: [
                'Non chiamare prima il truffatore per "chiedere spiegazioni"',
                'Non aspettare che la banca riapra se è notte: usa i numeri di emergenza 24/7'
            ],
            commonErrors: [
                'Pensare che la banca possa annullare un bonifico istantaneo con un click',
                'Dimenticare di fare la denuncia subito dopo la chiamata alla banca'
            ],
            ifYouHaveProblems: [
                'Se la banca dice che non può fare nulla, insisti per l\'invio della segnalazione di frode alla banca del destinatario'
            ],
            officialLinksV2: [
                {
                    sourceId: 'commissariatoPs',
                    useWhen: 'Per segnalare la frode e avere indicazioni legali',
                    beforeOpening: ['Prepara gli screenshot della truffa']
                }
            ],
            checklist: [
                'Banca contattata',
                'Procedura di recall/revoca avviata',
                'IBAN del truffatore segnato per la denuncia',
                'Denuncia pronta per essere sporta'
            ],
            sources: [
                {
                    title: 'Truffe tramite bonifico',
                    organization: 'Polizia Postale',
                    url: 'https://www.commissariatodips.it/',
                    type: 'official',
                    usedFor: 'Consigli operativi',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'capire-chiamata-banca-falsa',
            slug: 'come-capire-se-una-chiamata-della-banca-e-falsa',
            title: 'Come capire se una chiamata della banca è falsa',
            category: 'soldi',
            audience: ['adults', 'prevention'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Riconoscere le tecniche di "Vishing" (Voice Phishing) usate dai truffatori che fingono di essere operatori bancari.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'CERTFin',
            synthesis: 'La banca vera non ti chiederà mai codici OTP o di spostare soldi per "sicurezza".',
            whenToDo: 'Ogni volta che ricevi una chiamata inaspettata dalla "banca", anche se il numero sembra quello vero.',
            scenario: 'Ricevi una chiamata da un numero che sembra quello della tua banca. L\'operatore dice che ci sono movimenti sospetti e devi spostare i soldi su un "conto sicuro".',
            prerequisites: ['Essere consapevoli che i numeri di telefono possono essere falsificati (spoofing)'],
            whatToPrepare: ['Nessun documento (non devi dare informazioni al telefono)'],
            estimatedCosts: 'Gratuito',
            timeToComplete: '2 minuti',
            steps: [
                'Ascolta con attenzione: se l\'operatore ha fretta o crea allarme, diffida',
                'Se ti chiedono un codice OTP che hai appena ricevuto via SMS, riattacca immediatamente',
                'Se ti chiedono di fare un bonifico verso un altro conto per "proteggere i soldi", è una truffa',
                'Riattacca e chiama tu il numero ufficiale della banca che trovi sul retro della tua carta',
                'Non usare la funzione "richiama" del telefono: digita il numero manualmente'
            ],
            doNow: [
                'Riattacca la chiamata sospetta',
                'Chiama tu il numero ufficiale della banca'
            ],
            dontDo: [
                'Non dettare mai codici ricevuti via SMS',
                'Non confermare dati sensibili come password o PIN',
                'Non installare app (come AnyDesk) su richiesta dell\'operatore'
            ],
            commonErrors: [
                'Fidarsi perché il numero sul display è quello vero della banca (tecnica dello spoofing)',
                'Farsi prendere dal panico per le minacce di "conto bloccato" o "furto in corso"'
            ],
            ifYouHaveProblems: [
                'Se hai già dato dei codici, chiama subito il numero ufficiale per bloccare tutto'
            ],
            officialLinksV2: [
                {
                    sourceId: 'certfinHome',
                    useWhen: 'Per imparare a riconoscere le nuove tecniche di vishing',
                    beforeOpening: []
                }
            ],
            checklist: [
                'Chiamata interrotta',
                'Nessun codice fornito',
                'Verifica fatta chiamando il numero ufficiale'
            ],
            sources: [
                {
                    title: 'Attenzione al Vishing',
                    organization: 'CERTFin',
                    url: 'https://www.certfin.it/cittadini/',
                    type: 'official',
                    usedFor: 'Tecniche di difesa',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'contestare-pagamento-paypal',
            slug: 'come-contestare-un-pagamento-paypal',
            title: 'Come contestare un pagamento PayPal',
            category: 'soldi',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Guida all\'uso del Centro Risoluzioni PayPal per ottenere rimborsi su acquisti non ricevuti o non conformi.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'PayPal',
            synthesis: 'Hai 180 giorni di tempo per aprire una contestazione, ma agisci appena possibile.',
            whenToDo: 'Quando l\'oggetto non arriva, è rotto o è diverso dalla descrizione.',
            scenario: 'Hai comprato un vestito online pagando con PayPal, ma hai ricevuto un pacco vuoto o un oggetto totalmente diverso.',
            prerequisites: ['Aver effettuato il pagamento tramite PayPal (opzione "Beni e Servizi")'],
            whatToPrepare: ['ID transazione PayPal', 'Foto dell\'oggetto ricevuto', 'Screenshot della descrizione originale', 'Prove di contatto col venditore'],
            estimatedCosts: 'Gratuito',
            timeToComplete: '15 minuti per l\'apertura, fino a 20 giorni per la risoluzione',
            steps: [
                'Accedi al tuo conto PayPal e vai nel "Centro risoluzioni"',
                'Clicca su "Segnala un problema" e seleziona la transazione interessata',
                'Scegli il tipo di contestazione (es. "Oggetto non ricevuto" o "Notevolmente diverso")',
                'Invia un messaggio al venditore tramite la piattaforma PayPal',
                'Se il venditore non risponde o non risolve, clicca su "Converti in reclamo" entro 20 giorni'
            ],
            doNow: [
                'Apri la contestazione nel Centro Risoluzioni',
                'Raccogli le foto delle prove'
            ],
            dontDo: [
                'Non chiudere mai la contestazione finché non hai i soldi (non potrai riaprirla)',
                'Non accettare rimborsi parziali fuori da PayPal'
            ],
            commonErrors: [
                'Dimenticare di convertire la contestazione in reclamo (se non lo fai, la pratica si chiude da sola)',
                'Aver usato l\'opzione "Amici e Familiari" (che non offre protezione acquisti)'
            ],
            ifYouHaveProblems: [
                'Se PayPal rigetta il reclamo e hai pagato con carta, puoi provare il chargeback tramite la tua banca'
            ],
            officialLinksV2: [
                {
                    sourceId: 'paypalRisoluzioni',
                    useWhen: 'Per aprire ufficialmente la pratica di rimborso',
                    beforeOpening: ['Prepara le credenziali di accesso']
                }
            ],
            checklist: [
                'Contestazione aperta',
                'Messaggio inviato al venditore',
                'Data di scadenza per reclamo segnata in calendario'
            ],
            sources: [
                {
                    title: 'Protezione acquisti PayPal',
                    organization: 'PayPal Italia',
                    url: 'https://www.paypal.com/it/webapps/mpp/ua/buyer-protection',
                    type: 'platform',
                    usedFor: 'Termini del servizio',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'reagire-truffa-marketplace',
            slug: 'come-reagire-a-truffa-marketplace-vinted-ebay-subito',
            title: 'Come reagire a truffa marketplace (Vinted/eBay/Subito)',
            category: 'soldi',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 12,
            summary: 'Cosa fare se vieni truffato durante una compravendita tra privati su piattaforme online.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Polizia Postale',
            synthesis: 'Agisci subito all\'interno della piattaforma per bloccare il pagamento al venditore.',
            whenToDo: 'Appena ti accorgi che l\'oggetto ricevuto è falso, danneggiato o che il venditore è sparito.',
            scenario: 'Hai comprato uno smartphone su Subito o Vinted, hai pagato tramite la piattaforma, ma hai ricevuto un pacco con dentro un mattone.',
            prerequisites: ['Aver concluso l\'affare tramite il sistema di pagamento interno del sito'],
            whatToPrepare: ['Screenshot della chat', 'Foto del pacco e dell\'etichetta', 'Video dell\'apertura (se disponibile)'],
            estimatedCosts: 'Gratuito',
            timeToComplete: '20 minuti',
            steps: [
                'Non cliccare su "Tutto ok" o "Conferma ricezione" nell\'app',
                'Clicca su "Ho un problema" o "Contesta" nella pagina dell\'ordine',
                'Segnala l\'utente al supporto clienti del marketplace',
                'Salva tutta la chat (fai degli screenshot prima che l\'utente possa cancellarli o essere bloccato)',
                'Se il danno è superiore a poche decine di euro, fai denuncia online alla Polizia Postale'
            ],
            doNow: [
                'Blocca il pagamento nell\'app del marketplace',
                'Fai screenshot di chat e annuncio'
            ],
            dontDo: [
                'Non continuare la conversazione su WhatsApp: resta nella chat del sito',
                'Non accettare scuse dal venditore che ti chiede di aspettare "qualche giorno" prima di contestare'
            ],
            commonErrors: [
                'Aver pagato fuori piattaforma (es. ricarica Postepay): in questo caso la protezione del sito è nulla',
                'Buttare l\'imballaggio originale del pacco ricevuto'
            ],
            ifYouHaveProblems: [
                'Se il marketplace non ti aiuta, verifica se la tua carta di credito offre un\'assicurazione sugli acquisti online'
            ],
            officialLinksV2: [
                {
                    sourceId: 'psSegnalaOnline',
                    useWhen: 'Per sporgere denuncia se la piattaforma non risolve',
                    beforeOpening: ['Prepara i dati del venditore e del pagamento']
                }
            ],
            checklist: [
                'Contestazione aperta sul sito',
                'Supporto clienti contattato',
                'Screenshot salvati',
                'Denuncia effettuata (se necessario)'
            ],
            sources: [
                {
                    title: 'Acquisti online sicuri',
                    organization: 'Polizia di Stato',
                    url: 'https://www.commissariatodips.it/consigli/per-i-cittadini/acquisti-online/index.html',
                    type: 'official',
                    usedFor: 'Prevenzione e denuncia',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'riconoscere-finto-corriere',
            slug: 'come-riconoscere-finto-corriere-smishing',
            title: 'Come riconoscere finto corriere',
            category: 'soldi',
            audience: ['adults', 'prevention'],
            level: 'base',
            estimatedMinutes: 7,
            summary: 'Difendersi dai messaggi (SMS/Email) che chiedono pagamenti per sbloccare pacchi mai ordinati o in giacenza.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'ACN',
            synthesis: 'Nessun corriere (BRT, Poste, UPS) ti chiederà mai soldi via SMS per sbloccare una consegna.',
            whenToDo: 'Ogni volta che ricevi un messaggio relativo a una spedizione, specialmente se contiene un link.',
            scenario: 'Ricevi un SMS: "Il tuo pacco è bloccato in dogana, paga 1.99€ per sbloccarlo". C\'è un link che sembra quello del corriere.',
            prerequisites: ['Diffidenza verso le comunicazioni urgenti non sollecitate'],
            whatToPrepare: ['Nessun documento'],
            estimatedCosts: 'Gratuito',
            timeToComplete: '1 minuto',
            steps: [
                'Controlla il testo: spesso ci sono errori grammaticali o accenti sbagliati',
                'Guarda il link: se l\'indirizzo non è quello ufficiale (es. bit.ly, siti strani) è una truffa',
                'Non cliccare sul link per nessun motivo',
                'Se aspetti davvero un pacco, vai sul sito ufficiale del corriere e inserisci manualmente il codice di tracking',
                'Segnala il messaggio come Spam ed eliminalo'
            ],
            doNow: [
                'Ignora e cancella il messaggio',
                'Blocca il mittente'
            ],
            dontDo: [
                'Non inserire mai i dati della carta di credito "solo per pagare 2 euro"',
                'Non scaricare file allegati o app suggerite nel messaggio'
            ],
            commonErrors: [
                'Fidarsi perché si sta effettivamente aspettando un pacco (i truffatori mandano milioni di SMS a caso)',
                'Pensare che, essendo un piccolo importo, non possa essere una truffa'
            ],
            ifYouHaveProblems: [
                'Se hai già inserito i dati della carta, bloccala immediatamente: l\'obiettivo era rubare i tuoi dati, non i 2 euro'
            ],
            officialLinksV2: [
                {
                    sourceId: 'pagopaPhishing',
                    useWhen: 'Per capire come distinguere comunicazioni vere da false',
                    beforeOpening: []
                }
            ],
            checklist: [
                'Link NON cliccato',
                'Messaggio eliminato',
                'Mittente bloccato'
            ],
            sources: [
                {
                    title: 'Smishing e truffe sui pacchi',
                    organization: 'Agenzia per la Cybersicurezza Nazionale',
                    url: 'https://www.acn.gov.it/',
                    type: 'official',
                    usedFor: 'Alert sicurezza',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'salvare-prove-truffa-online',
            slug: 'come-salvare-prove-di-una-truffa-online',
            title: 'Come salvare prove di una truffa online',
            category: 'soldi',
            audience: ['adults', 'victims'],
            level: 'intermedia',
            estimatedMinutes: 15,
            summary: 'Metodologia corretta per raccogliere prove digitali valide per una denuncia o una richiesta di rimborso.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Polizia Postale',
            synthesis: 'Non cancellare nulla: gli screenshot e le ricevute sono le tue uniche armi legali.',
            whenToDo: 'Appena sospetti di essere vittima di una truffa, prima che il truffatore sparisca.',
            scenario: 'Ti sei accorto che il sito su cui hai comprato è falso e il venditore non risponde. Devi raccogliere tutto per andare dalla Polizia.',
            prerequisites: ['Accesso alle chat e alle email scambiate'],
            whatToPrepare: ['Smartphone o PC', 'Spazio cloud o chiavetta USB per il backup'],
            estimatedCosts: 'Gratuito',
            timeToComplete: '15 minuti',
            steps: [
                'Fai screenshot di tutta la chat, assicurandoti che si veda il numero di telefono o l\'ID dell\'utente',
                'Salva l\'annuncio di vendita originale (anche se dice "non più disponibile")',
                'Salva l\'email di conferma ordine e la ricevuta di pagamento (PayPal, bonifico, ecc.)',
                'Non cancellare gli SMS o i messaggi WhatsApp: la polizia potrebbe aver bisogno dei file originali',
                'Se possibile, stampa tutto in PDF per averne una copia pronta per la denuncia'
            ],
            doNow: [
                'Fai gli screenshot ora',
                'Salva le email in una cartella dedicata'
            ],
            dontDo: [
                'Non cancellare la chat "per rabbia" o per pulizia',
                'Non modificare o tagliare gli screenshot: devono essere integri'
            ],
            commonErrors: [
                'Salvare solo una parte della conversazione',
                'Dimenticare di salvare l\'URL (indirizzo web) del sito truffaldino'
            ],
            ifYouHaveProblems: [
                'Se il sito è sparito, prova a cercarlo su "Wayback Machine" (Archive.org) per vedere se ne esiste una copia salvata'
            ],
            officialLinksV2: [
                {
                    sourceId: 'psDenunceWeb',
                    useWhen: 'Per iniziare la procedura di denuncia allegando le prove',
                    beforeOpening: ['Assicurati di avere tutti i file pronti']
                }
            ],
            checklist: [
                'Chat salvata interamente',
                'Ricevuta di pagamento salvata',
                'URL del sito segnato',
                'Backup fatto su un secondo dispositivo'
            ],
            sources: [
                {
                    title: 'Conservazione delle prove informatiche',
                    organization: 'Polizia Postale',
                    url: 'https://www.commissariatodips.it/',
                    type: 'official',
                    usedFor: 'Standard di prova',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'truffa-trading-online',
            slug: 'truffa-trading-online-investimenti-falsi',
            title: 'Investimenti truffa (Trading online)',
            category: 'soldi',
            audience: ['adults', 'victims'],
            level: 'avanzata',
            estimatedMinutes: 20,
            summary: 'Come riconoscere le false piattaforme di trading che promettono guadagni facili con criptovalute o azioni.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'CONSOB',
            synthesis: 'Verifica dell\'autorizzazione CONSOB e diffidenza verso promesse di rendimenti fuori mercato.',
            whenToDo: 'Prima di versare anche un solo euro in piattaforme pubblicizzate sui social o proposte telefonicamente.',
            scenario: 'Hai visto una pubblicità con un personaggio famoso che parla di un nuovo metodo per guadagnare con i Bitcoin. Ti registri e un "consulente" ti chiama per farti fare il primo deposito di 250€.',
            prerequisites: ['Accesso al sito CONSOB'],
            whatToPrepare: ['Nome della piattaforma', 'Sito web'],
            estimatedCosts: 'Gratuito',
            timeToComplete: '10 minuti per la verifica',
            steps: [
                'Verifica se il broker è nell\'elenco delle imprese autorizzate sul sito CONSOB',
                'Controlla la sezione "Warning" della CONSOB per siti segnalati o oscurati',
                'Cerca recensioni indipendenti (non quelle sul sito del broker)',
                'Interrompi ogni contatto se ti chiedono soldi per "sbloccare" i prelievi'
            ],
            doNow: [
                'Controlla l\'elenco broker autorizzati CONSOB',
                'Verifica la Blacklist CONSOB'
            ],
            dontDo: [
                'Non investire soldi che non puoi permetterti di perdere',
                'Non permettere a nessuno di accedere al tuo computer tramite software come AnyDesk o TeamViewer',
                'Non credere a chi dice che il rischio è zero'
            ],
            commonErrors: [
                'Pensare che la piccola vincita iniziale sia reale (è un esca per farti versare di più)',
                'Pagare "tasse" o "commissioni" aggiuntive per riavere indietro i propri soldi (è un ulteriore furto)'
            ],
            ifYouHaveProblems: [
                'Se hai già versato soldi e non riesci a ritirarli, interrompi i pagamenti e fai denuncia'
            ],
            officialLinksV2: [
                {
                    sourceId: 'consobTruffe',
                    useWhen: 'Per verificare la legittimità di una piattaforma di trading',
                    beforeOpening: []
                }
            ],
            checklist: [
                'Autorizzazione CONSOB verificata',
                'Blacklist consultata',
                'Controlli remoti NON installati'
            ],
            sources: [
                {
                    title: 'Occhio alle truffe!',
                    organization: 'CONSOB',
                    url: 'https://www.consob.it/web/area-pubblica/occhio-alle-truffe',
                    type: 'official',
                    usedFor: 'Vademecum antibufala finanziaria',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        }
    ]
};
