import { Module } from '@/types';

export const modulo_13_casa_residenza: Module = {
    id: 'modulo-13-casa-residenza',
    lastUpdated: '2026-08-27',
    title: 'Casa e Residenza',
    description: 'Gestione del contratto di affitto, utenze domestiche, agevolazioni fiscali e diritti abitativi.',
    category: 'casa',
    difficulty: 'base',
    icon: 'Home',
    themeColor: 'accent-orange',
    lessons: [
        {
            id: 'contratto-affitto-controllo',
            slug: 'come-controllare-contratto-affitto',
            title: 'Come controllare un contratto d’affitto',
            category: 'casa',
            audience: ['cittadini', 'studenti'],
            level: 'base',
            estimatedMinutes: 20,
            summary: 'Gli elementi essenziali da verificare in un contratto di locazione prima della firma per evitare brutte sorprese.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Agenzia delle Entrate',
            synthesis: 'Verifica della tipologia contrattuale (4+4, 3+2, transitorio), canone, spese e deposito cauzionale.',
            whenToDo: 'Prima di firmare il contratto di locazione e consegnare la caparra.',
            scenario: 'Hai trovato una casa in affitto e il proprietario ti ha inviato la bozza del contratto. Vuoi evitare clausole vessatorie o costi nascosti.',
            steps: [
                'Verifica la durata del contratto e le modalità di disdetta (recesso)',
                'Controlla l\'importo del canone e se le spese condominiali sono incluse',
                'Verifica l\'entità del deposito cauzionale (per legge massimo 3 mensilità)',
                'Assicurati che sia prevista la registrazione del contratto a carico di entrambi',
                'Controlla la presenza del verbale di consegna con lo stato dell\'immobile'
            ],
            doNow: [
                'Controlla la durata e il preavviso di recesso',
                'Verifica le spese condominiali e il deposito',
                'Chiedi se il contratto è in cedolare secca'
            ],
            dontDo: [
                'Non accettare accordi verbali per pagamenti in nero',
                'Non firmare se non è presente l\'APE (Attestazione Prestazione Energetica)',
                'Non accettare clausole che pongono a tuo carico la manutenzione straordinaria'
            ],
            whatToPrepare: [
                'Bozza del contratto',
                'Documento di identità e codice fiscale',
                'Verbale di inventario (se casa arredata)'
            ],
            commonErrors: [
                'Sottovalutare l\'importanza del preavviso per il recesso (solitamente 6 mesi)',
                'Non distinguere tra spese ordinarie (inquilino) e straordinarie (proprietario)',
                'Dimenticare di allegare le planimetrie catastali'
            ],
            askHelpWhen: [
                'Se il proprietario rifiuta di registrare il contratto',
                'Se vengono richieste somme non giustificate prima della firma'
            ],
            whoCanHelp: ['Sindacati Inquilini (SUNIA, SICET, UNIAT)', 'Associazioni della proprietà edilizia', 'Agenzia delle Entrate'],
            officialLinks: ['https://www.agenziaentrate.gov.it/portale/schede/istanze/registrazione-di-un-nuovo-contratto/info-gen-registrazione-contratti-locazione'],
            checklist: [
                'Tipologia contratto corretta',
                'Canone e spese specificati',
                'Deposito cauzionale indicato',
                'Modalità di recesso chiare',
                'APE allegata',
                'Verbale di consegna pronto'
            ],
            faqs: [
                { q: 'Quanto può essere al massimo il deposito cauzionale?', a: 'Per legge, il deposito cauzionale (spesso chiamato impropriamente caparra) non può superare le tre mensilità del canone.' },
                { q: 'Chi paga le spese di registrazione del contratto?', a: 'Le spese di registrazione (imposta di registro e di bollo) sono divise al 50% tra proprietario (locatore) e inquilino (conduttore), a meno che non si scelga la cedolare secca.' },
                { q: 'Posso andarmene prima della scadenza?', a: 'Sì, ma devi dare il preavviso stabilito nel contratto (generalmente 6 mesi) e avere un giustificato motivo (gravi motivi), a meno che non sia prevista una clausola di recesso libero.' }
            ],
            relatedLessons: ['registrazione-locazione', 'gestione-cauzione-non-restituita'],
            sources: [
                {
                    title: 'Locazione immobili: guida alla registrazione',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/',
                    type: 'official',
                    usedFor: 'Regole registrazione e tipologie',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'registrazione-locazione',
            slug: 'come-registrare-contratto-locazione',
            title: 'Come registrare un contratto di locazione',
            category: 'casa',
            audience: ['cittadini'],
            level: 'intermedia',
            estimatedMinutes: 15,
            summary: 'La procedura passo-passo per rendere valido il contratto di affitto presso l\'Agenzia delle Entrate.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Agenzia delle Entrate',
            synthesis: 'Procedura telematica (RLI) o fisica entro 30 giorni dalla firma per dare validità fiscale al contratto.',
            whenToDo: 'Entro 30 giorni dalla data di stipula o dalla data di decorrenza (se anteriore).',
            scenario: 'Hai firmato il contratto e devi assicurarti che venga registrato per poter detrarre l\'affitto dalle tasse o chiedere la residenza.',
            steps: [
                'Accedi al sito dell\'Agenzia delle Entrate con SPID/CIE',
                'Utilizza il software RLI web per la compilazione online',
                'Inserisci i dati del locatore, del conduttore e dell\'immobile (dati catastali)',
                'Carica la copia del contratto firmata in formato PDF/A o TIF',
                'Paga le imposte (se dovute) tramite addebito su conto corrente'
            ],
            doNow: [
                'Recupera i dati catastali dell\'immobile',
                'Verifica di avere le credenziali SPID attive'
            ],
            dontDo: [
                'Non lasciare il contratto non registrato (è nullo per la legge)',
                'Non sbagliare il calcolo dell\'imposta di registro (2% del canone annuo, diviso a metà)'
            ],
            whatToPrepare: [
                'Contratto firmato in PDF',
                'Dati catastali (Foglio, Particella, Subalterno)',
                'IBAN per il pagamento delle imposte'
            ],
            commonErrors: [
                'Dimenticare di registrare le proroghe o le risoluzioni anticipate',
                'Non spuntare l\'opzione "Cedolare Secca" se concordata',
                'Inserire un canone diverso da quello reale'
            ],
            askHelpWhen: [
                'Se il proprietario non ti consegna la ricevuta di registrazione',
                'Se non riesci a caricare il file nel formato richiesto'
            ],
            whoCanHelp: ['Agenzia delle Entrate', 'Centri di Assistenza Fiscale (CAF)', 'Sindacati Inquilini'],
            officialLinks: ['https://www.agenziaentrate.gov.it/portale/web/guest/schede/istanze/registrazione-di-un-nuovo-contratto/rli-web'],
            checklist: [
                'File PDF/A creato correttamente',
                'Dati catastali verificati',
                'Opzione cedolare secca confermata',
                'Invio telematico effettuato',
                'Ricevuta scaricata e conservata'
            ],
            sources: [
                {
                    title: 'Registrazione contratti di locazione',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/',
                    type: 'official',
                    usedFor: 'Istruzioni RLI',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'voltura-luce-gas',
            slug: 'come-fare-voltura-luce-gas',
            title: 'Come fare voltura luce/gas',
            category: 'casa',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Come cambiare il nome dell\'intestatario sulle bollette quando il contatore è ancora attivo.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'ARERA',
            synthesis: 'La voltura permette il passaggio del contratto dal vecchio al nuovo inquilino senza interruzione del servizio.',
            whenToDo: 'Immediatamente dopo essere entrati nella nuova casa se i contatori sono ancora accesi.',
            scenario: 'Ti sei trasferito e la luce è accesa. Devi intestarti il contratto che è ancora a nome del precedente inquilino.',
            steps: [
                'Recupera una vecchia bolletta per i codici POD (luce) e PDR (gas)',
                'Prendi la lettura aggiornata dei contatori',
                'Contatta il fornitore attuale (o scegline uno nuovo se disponibile la voltura con cambio)',
                'Fornisci i tuoi dati personali e il titolo di possesso (es. estremi registrazione affitto)',
                'Ricevi e firma il nuovo contratto'
            ],
            doNow: [
                'Fai una foto alla lettura del contatore',
                'Chiedi al precedente inquilino l\'ultima bolletta'
            ],
            dontDo: [
                'Non accettare di pagare i debiti arretrati del precedente inquilino (chiedi voltura senza accollo)',
                'Non aspettare: se il vecchio inquilino chiude il contratto, dovrai fare un subentro (più costoso)'
            ],
            whatToPrepare: [
                'Codice POD e PDR',
                'Lettura del contatore',
                'Documento di identità e codice fiscale',
                'IBAN per la domiciliazione'
            ],
            commonErrors: [
                'Confondere voltura e subentro',
                'Non comunicare la data esatta del passaggio',
                'Sbagliare a trascrivere i codici POD/PDR'
            ],
            askHelpWhen: [
                'Se il fornitore ti chiede di pagare bollette non tue',
                'Se non riesci a rintracciare il precedente intestatario'
            ],
            whoCanHelp: ['ARERA (Autorità di Regolazione)', 'Sportello per il consumatore energia', 'Associazioni consumatori'],
            officialLinks: ['https://www.arera.it/it/consumatori/voltura.htm'],
            checklist: [
                'Codici POD/PDR pronti',
                'Lettura effettuata',
                'Dati del precedente inquilino (se richiesti)',
                'Contratto firmato',
                'Prima bolletta a tuo nome verificata'
            ],
            sources: [
                {
                    title: 'Guida alla Voltura',
                    organization: 'ARERA',
                    url: 'https://www.arera.it/',
                    type: 'official',
                    usedFor: 'Definizioni e costi',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'subentro-utenze',
            slug: 'come-fare-subentro-utenze',
            title: 'Come fare subentro utenze',
            category: 'casa',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 20,
            summary: 'Come riattivare la fornitura di luce e gas quando il contatore è stato chiuso.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'ARERA',
            synthesis: 'Il subentro è necessario quando il precedente inquilino ha disdetto il contratto e il contatore è piombato.',
            whenToDo: 'Almeno una settimana prima del trasloco per avere i servizi pronti.',
            scenario: 'Entri in una casa nuova e non c\'è corrente né gas. Il contatore è presente ma non eroga nulla.',
            steps: [
                'Individua i codici POD/PDR sul contatore o su vecchi documenti',
                'Scegli un fornitore del mercato libero o tutelato',
                'Invia la richiesta di subentro fornendo i dati catastali dell\'immobile',
                'Attendi la riattivazione (solitamente 7 giorni lavorativi per la luce, 12 per il gas)',
                'Assicurati che un tecnico possa accedere al contatore del gas se richiesto'
            ],
            doNow: [
                'Trova i codici POD/PDR',
                'Confronta le offerte sui portali ufficiali'
            ],
            dontDo: [
                'Non aspettare l\'ultimo giorno: i tempi tecnici non sono immediati',
                'Non forzare mai i sigilli del contatore (è un reato)'
            ],
            whatToPrepare: [
                'Codice POD/PDR',
                'Documento di identità',
                'Titolo di possesso (data contratto affitto)',
                'Dati catastali'
            ],
            commonErrors: [
                'Non essere in casa quando passa il tecnico per il gas',
                'Richiedere il subentro a un fornitore che ha bloccato il contatore per morosità precedente'
            ],
            askHelpWhen: [
                'Se il contatore è piombato per morosità e il fornitore rifiuta il subentro',
                'Se passano i termini massimi e la luce non torna'
            ],
            whoCanHelp: ['Sportello per il consumatore Energia', 'ARERA', 'Fornitore scelto'],
            officialLinks: ['https://www.arera.it/it/consumatori/subentro.htm'],
            checklist: [
                'Codice identificativo contatore trovato',
                'Pratica avviata con il fornitore',
                'Documenti immobile inviati',
                'Appuntamento col tecnico fissato (se necessario)',
                'Erogazione verificata'
            ],
            sources: [
                {
                    title: 'Rientro in fornitura',
                    organization: 'ARERA',
                    url: 'https://www.arera.it/',
                    type: 'official',
                    usedFor: 'Tempistiche e procedure',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'gestione-cauzione-non-restituita',
            slug: 'come-gestire-cauzione-non-restituita',
            title: 'Come gestire cauzione non restituita',
            category: 'casa',
            audience: ['cittadini'],
            level: 'intermedia',
            estimatedMinutes: 15,
            summary: 'Cosa fare se il proprietario di casa non restituisce il deposito cauzionale al termine dell\'affitto.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Ministero della Giustizia',
            synthesis: 'La cauzione deve essere restituita con gli interessi, salvo danni documentati e quantificati.',
            whenToDo: 'Al momento della riconsegna delle chiavi o subito dopo.',
            scenario: 'Hai lasciato la casa in ordine, ma il proprietario inventa scuse o non risponde al telefono per non renderti i soldi della cauzione.',
            steps: [
                'Firma sempre un verbale di riconsegna delle chiavi che attesti lo stato dell\'immobile',
                'Invia una richiesta formale di restituzione tramite PEC o Raccomandata A/R',
                'Ricorda al proprietario che ha diritto agli interessi legali maturati',
                'Se il proprietario trattiene somme per danni, pretendi fatture o preventivi reali',
                'Invia una lettera di messa in mora se non ricevi il bonifico entro 15 giorni'
            ],
            doNow: [
                'Scatta foto dettagliate della casa vuota e pulita',
                'Controlla sul contratto l\'importo esatto versato'
            ],
            dontDo: [
                'Non "compensare" l\'ultimo mese di affitto con la cauzione (è illegale se non concordato)',
                'Non firmare verbali dove riconosci danni che non hai causato'
            ],
            whatToPrepare: [
                'Copia del contratto con ricevuta versamento cauzione',
                'Verbale di riconsegna firmato',
                'Foto dello stato dell\'immobile a fine locazione'
            ],
            commonErrors: [
                'Andarsene senza un verbale scritto e firmato',
                'Accettare contestazioni generiche senza prove',
                'Dimenticare di chiedere gli interessi legali'
            ],
            askHelpWhen: [
                'Se il proprietario trattiene l\'intera somma per "usura normale" (non può farlo)',
                'Se passano mesi senza alcuna giustificazione scritta'
            ],
            whoCanHelp: ['Sindacati Inquilini', 'Avvocati civilisti', 'Organismi di Mediazione'],
            officialLinks: ['https://www.giustizia.it/giustizia/it/mg_2_7.page'],
            checklist: [
                'Verbale di riconsegna chiavi firmato',
                'Foto scattate',
                'Richiesta formale inviata',
                'Conteggio interessi effettuato',
                'Eventuale messa in mora pronta'
            ],
            sources: [
                {
                    title: 'Disciplina del deposito cauzionale',
                    organization: 'Codice Civile Art. 11 Legge 392/78',
                    url: 'https://www.normattiva.it/',
                    type: 'official',
                    usedFor: 'Base legale',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'condominio-spese',
            slug: 'spese-condominiali-ordinarie-straordinarie',
            title: 'Condominio: spese ordinarie/straordinarie',
            category: 'casa',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Come distinguere tra le spese che spettano all\'inquilino e quelle che spettano al proprietario.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Confedilizia / Sindacati Inquilini',
            synthesis: 'In genere l\'inquilino paga l\'ordinaria amministrazione e i servizi, il proprietario le opere strutturali.',
            steps: [
                'Controlla la tabella di ripartizione spese allegata al contratto',
                'Ricorda: luce scale, pulizia, acqua, ascensore (uso) sono spese ordinarie (inquilino)',
                'Ricorda: rifacimento facciata, tetto, sostituzione caldaia sono spese straordinarie (proprietario)',
                'Chiedi sempre il rendiconto dell\'amministratore prima di pagare'
            ],
            checklist: [
                'Tabella ripartizione consultata',
                'Rendiconto amministratore richiesto',
                'Spese straordinarie identificate'
            ],
            sources: [
                {
                    title: 'Ripartizione spese proprietario inquilino',
                    organization: 'Confedilizia',
                    url: 'https://www.confedilizia.it/',
                    type: 'expert',
                    usedFor: 'Tabelle ripartizione',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'orientamento-sfratto',
            slug: 'cosa-fare-dopo-uno-sfratto',
            title: 'Come capire cosa fare dopo uno sfratto (orientamento base)',
            category: 'casa',
            audience: ['cittadini', 'victims'],
            level: 'intermedia',
            estimatedMinutes: 25,
            summary: 'Guida d\'emergenza per chi ha ricevuto una convalida di sfratto e deve trovare una soluzione abitativa.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Comune / Servizi Sociali',
            synthesis: 'Azioni legali e sociali per gestire l\'uscita dall\'alloggio e accedere al sostegno pubblico.',
            whenToDo: 'Non appena ricevi l\'atto di citazione per sfratto o la notifica del precetto.',
            scenario: 'Non sei riuscito a pagare l\'affitto e il giudice ha convalidato lo sfratto. L\'ufficiale giudiziario arriverà a breve.',
            steps: [
                'Verifica la data fissata per l\'esecuzione (primo accesso dell\'ufficiale giudiziario)',
                'Recati subito ai Servizi Sociali del tuo Comune per segnalare l\'emergenza abitativa',
                'Controlla se hai i requisiti per il "Fondo Morosità Incolpevole" (se lo sfratto è per morosità)',
                'Chiedi un termine di grazia al giudice se non l\'hai già fatto (per saldare il debito)',
                'Contatta un sindacato inquilini per verificare se ci sono i presupposti per una sospensione (es. presenza minori o disabili)'
            ],
            doNow: [
                'Porta gli atti legali ai servizi sociali',
                'Contatta un sindacato inquilini immediatamente'
            ],
            dontDo: [
                'Non ignorare le notifiche: lo sfratto non si ferma da solo',
                'Non aspettare l\'ultimo giorno per cercare un nuovo alloggio o aiuto'
            ],
            whatToPrepare: [
                'Atto di convalida dello sfratto',
                'Attestazione ISEE aggiornata',
                'Certificati medici se presenti persone fragili nel nucleo'
            ],
            commonErrors: [
                'Pensare che la presenza di bambini blocchi automaticamente lo sfratto (lo rallenta soltanto)',
                'Non presentarsi all\'udienza davanti al giudice'
            ],
            askHelpWhen: [
                'Se ricevi il "Preccetto" o il "Preavviso di rilascio"',
                'Se non hai nessun posto dove andare dopo l\'uscita'
            ],
            whoCanHelp: ['Sindacati Inquilini (SUNIA, SICET, ecc.)', 'Servizi Sociali Comunali', 'Agenzia Sociale per la Casa', 'Avvocato di Strada'],
            officialLinks: ['https://www.prefettura.it/'],
            checklist: [
                'Data esecuzione segnata',
                'Colloquio servizi sociali effettuato',
                'ISEE aggiornato',
                'Domanda contributo morosità presentata (se possibile)',
                'Soluzione temporanea individuata'
            ],
            sources: [
                {
                    title: 'Fondo morosità incolpevole',
                    organization: 'Ministero delle Infrastrutture e dei Trasporti',
                    url: 'https://www.mit.gov.it/',
                    type: 'official',
                    usedFor: 'Requisiti contributi',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'bonus-affitto-comunali',
            slug: 'come-cercare-bonus-affitto-comunali',
            title: 'Come cercare bonus affitto comunali',
            category: 'casa',
            audience: ['cittadini', 'famiglie'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Come individuare e richiedere i contributi economici messi a disposizione dai comuni per pagare l\'affitto.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Comune',
            synthesis: 'Bandi periodici che offrono rimborsi parziali del canone di locazione basati sul reddito ISEE.',
            whenToDo: 'Periodicamente, verificando i bandi solitamente pubblicati tra autunno e primavera.',
            scenario: 'Fai fatica a pagare l\'affitto ogni mese e vuoi sapere se il tuo Comune offre aiuti economici.',
            steps: [
                'Vai sul sito ufficiale del tuo Comune di residenza',
                'Cerca nella sezione "Sociale" o "Bandi" parole come "Contributo affitto" o "Sostegno locazione"',
                'Leggi attentamente il bando per verificare la soglia ISEE richiesta',
                'Assicurati di avere un contratto di affitto regolarmente registrato',
                'Compila la domanda online o presso i CAF convenzionati nei tempi previsti'
            ],
            doNow: [
                'Controlla l\'ISEE attuale',
                'Iscriviti alla newsletter del tuo Comune'
            ],
            dontDo: [
                'Non aspettare la scadenza del bando: spesso servono molti documenti',
                'Non presentare domanda se il contratto non è registrato (requisito fondamentale)'
            ],
            whatToPrepare: [
                'Attestazione ISEE',
                'Contratto di locazione registrato',
                'Ricevute di pagamento dell\'affitto dell\'anno corrente',
                'Copia documento identità'
            ],
            commonErrors: [
                'Mancato aggiornamento dell\'ISEE',
                'Non allegare la ricevuta di registrazione del contratto',
                'Sbagliare l\'IBAN per l\'accredito del contributo'
            ],
            askHelpWhen: [
                'Se il sito del Comune è poco chiaro',
                'Se non sai come calcolare l\'incidenza del canone sul reddito'
            ],
            whoCanHelp: ['Ufficio Relazioni con il Pubblico (URP) del Comune', 'CAF', 'Sindacati Inquilini'],
            officialLinks: ['https://www.comuni-italiani.it/'],
            checklist: [
                'Bando individuato',
                'Requisiti verificati',
                'Documentazione scansionata',
                'Domanda inviata',
                'Ricevuta di protocollo conservata'
            ],
            sources: [
                {
                    title: 'Fondo nazionale per il sostegno all\'accesso alle abitazioni in locazione',
                    organization: 'Ministero delle Infrastrutture e dei Trasporti',
                    url: 'https://www.mit.gov.it/',
                    type: 'official',
                    usedFor: 'Normativa generale bandi',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'tari-cambio-casa',
            slug: 'come-fare-tari-dopo-cambio-casa',
            title: 'Come fare TARI dopo cambio casa',
            category: 'casa',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Come comunicare al Comune l\'occupazione di un nuovo immobile per il pagamento della tassa sui rifiuti.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Comune / Gestore Rifiuti',
            synthesis: 'Dichiarazione obbligatoria per attivare il servizio rifiuti e cessare quello nella vecchia abitazione.',
            whenToDo: 'Entro 90 giorni dal trasloco (o secondo il termine previsto dal regolamento comunale).',
            scenario: 'Ti sei trasferito in una nuova casa e devi assicurarti di ricevere le bollette dei rifiuti e di non pagare più quelle della vecchia casa.',
            steps: [
                'Identifica il gestore dei rifiuti del tuo nuovo Comune',
                'Scarica il modulo di "Inizio Occupazione" dal sito del Comune o del gestore',
                'Recupera i dati catastali e la superficie calpestabile (mq) dell\'immobile',
                'Invia la dichiarazione tramite PEC, email o sportello fisico',
                'Contestualmente, invia il modulo di "Cessazione" per la vecchia abitazione'
            ],
            doNow: [
                'Controlla la superficie sulla planimetria catastale',
                'Verifica la scadenza per la denuncia nel tuo Comune'
            ],
            dontDo: [
                'Non dimenticare di dichiarare box o cantine (fanno cumulo)',
                'Non aspettare l\'anno successivo: rischi sanzioni per omessa denuncia'
            ],
            whatToPrepare: [
                'Dati catastali (Foglio, Particella, Subalterno)',
                'Metri quadri calpestabili',
                'Numero componenti del nucleo familiare',
                'Data di inizio occupazione (es. data trasloco)'
            ],
            commonErrors: [
                'Dichiarare meno metri quadri del reale (rischio accertamento)',
                'Dimenticare di chiudere la posizione nel vecchio comune',
                'Non comunicare variazioni nel numero di occupanti'
            ],
            askHelpWhen: [
                'Se l\'immobile è vuoto e privo di utenze (potresti avere diritto all\'esenzione)',
                'Se ricevi bollette doppie per lo stesso periodo'
            ],
            whoCanHelp: ['Ufficio Tributi del Comune', 'Sportello Tari gestore locale', 'CAF'],
            officialLinks: ['https://www.amministrazionicomunali.it/tari/calcolo_tari.php'],
            checklist: [
                'Modulo inizio occupazione inviato',
                'Modulo cessazione vecchia casa inviato',
                'Dati catastali corretti inseriti',
                'Metratura verificata',
                'Conferma ricezione ottenuta'
            ],
            sources: [
                {
                    title: 'La Tassa sui Rifiuti (TARI)',
                    organization: 'Ministero dell\'Economia e delle Finanze',
                    url: 'https://www.finanze.gov.it/',
                    type: 'official',
                    usedFor: 'Regole generali tributo',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'isee-documenti-necessari',
            slug: 'isee-documenti-necessari-per-domanda',
            title: 'ISEE: documenti necessari',
            category: 'casa',
            audience: ['cittadini', 'famiglie'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'L\'elenco completo dei documenti per richiedere l\'Indicatore della Situazione Economica Equivalente.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'INPS',
            synthesis: 'Raccolta dati reddituali e patrimoniali di due anni precedenti per ottenere agevolazioni e bonus.',
            whenToDo: 'Ogni anno, solitamente a gennaio, per rinnovare le prestazioni sociali (es. Assegno Unico, Bonus Sociali).',
            scenario: 'Devi richiedere il bonus bollette o l\'iscrizione all\'asilo nido e ti serve l\'attestazione ISEE aggiornata.',
            steps: [
                'Recupera il saldo e la giacenza media dei conti correnti al 31/12 di due anni fa',
                'Prendi le Certificazioni Uniche (CU) o il Modello 730 sempre di due anni fa',
                'Raccogli i dati di targhe auto/moto e visure catastali immobili',
                'Accedi al portale INPS per l\'ISEE Precompilato (più veloce)'
            ],
            doNow: [
                'Richiedi giacenza media e saldo bancario',
                'Recupera la dichiarazione dei redditi'
            ],
            dontDo: [
                'Non omettere conti correnti o carte prepagate (anche se con pochi euro)',
                'Non dimenticare i dati del contratto di affitto registrato',
                'Non dichiarare un nucleo familiare diverso da quello risultante in anagrafe'
            ],
            whatToPrepare: [
                'Stato di famiglia e codici fiscali',
                'Saldo e giacenza media conti al 31/12 (di 2 anni fa)',
                'Dati patrimoniali immobiliari e mobiliari',
                'Certificato di invalidità (se presente)'
            ],
            commonErrors: [
                'Usare i dati dell\'anno scorso invece di quelli di due anni fa',
                'Dimenticare di dichiarare il patrimonio detenuto all\'estero',
                'Sbagliare il valore IMU degli immobili'
            ],
            askHelpWhen: [
                'Se hai una situazione familiare complessa (es. genitori non conviventi)',
                'Se riscontri difformità nei dati precompilati dall\'Agenzia delle Entrate/INPS'
            ],
            whoCanHelp: ['CAF (Centri Assistenza Fiscale)', 'Patronati', 'Sito web INPS (ISEE Precompilato)'],
            officialLinks: ['https://servizi2.inps.it/servizi/iseeprecompilato/home.aspx'],
            checklist: [
                'Giacenze medie banche ottenute',
                'Dichiarazioni redditi recuperate',
                'Dati immobiliari/catastali pronti',
                'Targhe veicoli segnate',
                'DSU (Dichiarazione Sostitutiva Unica) inviata'
            ],
            sources: [
                {
                    title: 'ISEE - Guida alla prestazione',
                    organization: 'INPS',
                    url: 'https://www.inps.it/',
                    type: 'official',
                    usedFor: 'Procedura e precompilata',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'bonus-sociali-energia',
            slug: 'bonus-sociali-energia-gas-acqua',
            title: 'Bonus sociali energia/gas/acqua',
            category: 'casa',
            audience: ['cittadini', 'famiglie'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Come funzionano gli sconti automatici in bolletta per le famiglie in condizione di disagio economico.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'ARERA',
            synthesis: 'Sconto automatico applicato dai fornitori a chi ha un ISEE sotto le soglie previste.',
            whenToDo: 'Automaticamente dopo aver ottenuto l\'attestazione ISEE valida.',
            scenario: 'Hai un reddito basso o una famiglia numerosa e vuoi sapere come pagare meno le bollette di luce, gas e acqua.',
            steps: [
                'Richiedi l\'attestazione ISEE al CAF o online',
                'Controlla la soglia ISEE aggiornata per l\'anno in corso',
                'Verifica che le utenze siano intestate a un componente del nucleo ISEE',
                'Controlla se in bolletta compare la voce "Bonus Sociale"'
            ],
            doNow: [
                'Ottieni l\'attestazione ISEE aggiornata',
                'Controlla le voci della bolletta'
            ],
            dontDo: [
                'Non fare domanda al Comune o al fornitore (dal 2021 è automatico)',
                'Non dimenticare di rinnovare l\'ISEE ogni anno',
                'Non ignorare il "Bonus per disagio fisico" (quello va richiesto alla ASL)'
            ],
            whatToPrepare: [
                'Attestazione ISEE valida',
                'Bolletta per verifica dati intestatario'
            ],
            commonErrors: [
                'Pensare che serva una domanda specifica per i bonus per disagio economico',
                'Avere le utenze intestate a persone esterne al nucleo familiare anagrafico',
                'Non accorgersi se il bonus non viene applicato nonostante l\'ISEE basso'
            ],
            askHelpWhen: [
                'Se nonostante l\'ISEE sotto soglia il bonus non compare dopo qualche mese',
                'Per richiedere il bonus per disagio fisico (uso di apparecchiature elettromedicali)'
            ],
            whoCanHelp: ['ARERA', 'Sportello per il consumatore', 'Comune (solo per disagio fisico)', 'SGAE'],
            officialLinks: ['https://www.arera.it/it/consumatori/bonus.htm'],
            checklist: [
                'ISEE aggiornato',
                'Intestatario utenza nel nucleo ISEE',
                'Soglia reddito verificata',
                'Voce Bonus controllata in bolletta'
            ],
            sources: [
                {
                    title: 'Bonus sociali',
                    organization: 'ARERA',
                    url: 'https://www.arera.it/',
                    type: 'official',
                    usedFor: 'Regole applicazione automatica',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'residenza-senza-dimora',
            slug: 'residenza-senza-dimora-fittizia',
            title: 'Residenza senza dimora',
            category: 'casa',
            audience: ['cittadini', 'victims'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Il diritto alla residenza per chi non ha un\'abitazione stabile e come richiedere la residenza in "via fittizia".',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Comune',
            synthesis: 'Iscrizione anagrafica nel luogo del domicilio abituale per garantire i diritti civili fondamentali.',
            whenToDo: 'Quando si vive in strada, in centri di accoglienza o in situazioni di precarietà abitativa estrema.',
            scenario: 'Hai perso la casa e vivi in una sistemazione temporanea. Senza residenza non puoi avere il medico, votare o ricevere documenti.',
            steps: [
                'Individua il Comune dove dimori abitualmente',
                'Recati all\'Ufficio Anagrafe o ai servizi sociali comunali',
                'Dichiara di essere senza fissa dimora e chiedi l\'iscrizione in una "via fittizia" (es. Via della Casa Comunale)',
                'Fornisci un recapito per ricevere le notifiche'
            ],
            doNow: [
                'Contatta i servizi sociali del Comune',
                'Richiedi l\'iscrizione in via fittizia'
            ],
            dontDo: [
                'Non accettare rifiuti verbali (la residenza è un diritto-dovere, non una concessione)',
                'Non pensare che serva un tetto per avere la residenza',
                'Non perdere il contatto con i servizi sociali dopo la richiesta'
            ],
            whatToPrepare: [
                'Documento di identità (se posseduto)',
                'Eventuale verbale di perdita dell\'alloggio',
                'Recapito telefonico o email'
            ],
            commonErrors: [
                'Pensare che la residenza fittizia comporti la perdita di altri sussidi',
                'Non presentarsi agli accertamenti del Comune',
                'Confondere il domicilio con la residenza'
            ],
            askHelpWhen: [
                'Se l\'ufficio anagrafe rifiuta l\'iscrizione nonostante la dichiarazione',
                'Se non conosci le associazioni che collaborano col Comune per la domiciliazione'
            ],
            whoCanHelp: ['Servizi Sociali del Comune', 'Associazioni di tutela dei senzatetto (es. avvocato di strada)', 'Garante dei diritti delle persone private della libertà'],
            officialLinks: ['https://www.interno.gov.it/it/temi/enti-locali/anagrafe-e-stato-civile'],
            checklist: [
                'Comune di domicilio abituale identificato',
                'Colloquio con assistenti sociali effettuato',
                'Istanza di iscrizione anagrafica presentata',
                'Indirizzo di notifica fornito',
                'Tessera sanitaria aggiornata'
            ],
            sources: [
                {
                    title: 'Iscrizione anagrafica dei senza fissa dimora',
                    organization: 'Ministero dell\'Interno',
                    url: 'https://www.interno.gov.it/',
                    type: 'official',
                    usedFor: 'Circolari e normativa anagrafica',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'imu-e-visura-dopo-trasloco',
            slug: 'imu-e-visura-catastale-dopo-trasloco',
            title: 'IMU e visura dopo un trasloco o un atto',
            category: 'casa',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 12,
            mainEntity: 'Comune / Agenzia delle Entrate',
            summary: 'Dopo compravendita, successione o cambio di abitazione principale verifica visura Ade, voltura e IMU sul Comune. Le volture utenze (luce/gas) non spostano l’IMU.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-08-14',
            steps: [
                'Scarica la visura catastale dei tuoi immobili in area riservata Ade (gratuita se sei titolare).',
                'Se l’intestazione non è aggiornata dopo una successione, usa Voltura catastale Web (dal 12 gennaio 2026 non esiste più Voltura 2.0).',
                'Apri il sito del Comune per aliquote IMU e scadenze dell’anno in corso; il quadro nazionale è sul MEF.',
                'Le volture luce/gas si fanno col venditore (ARERA): sono un contratto, non il catasto.',
            ],
            commonErrors: ['Credere che il cambio residenza ANPR aggiorni da solo il catasto'],
            dontDo: ['Non pagare l’IMU con l’aliquota di un altro Comune'],
            checklist: ['Visura aggiornata', 'Aliquote comunali lette', 'Utenze e IMU trattate come adempimenti distinti'],
            faqs: [
                { q: 'La residenza toglie l’IMU?', a: 'L’abitazione principale ha regole proprie (categoria catastale e Comune). Verifica MEF e regolamento comunale, non l’ANPR da sola.' },
                { q: 'Chi paga l’IMU in affitto?', a: 'Di regola il proprietario. Il contratto può regolare i rapporti interni, ma il tributo segue titolarità e legge.' },
            ],
            officialLinksV2: [
                { sourceId: 'adeVisuraCatastale', useWhen: 'Visura dei propri immobili', beforeOpening: ['SPID, CIE o CNS'] },
                { sourceId: 'mefImu', useWhen: 'Quadro nazionale IMU', beforeOpening: [] },
                { sourceId: 'adeVolturaCatastale', useWhen: 'Voltura Web dopo successione o atto', beforeOpening: ['SPID, CIE o CNS'] },
            ],
            sources: [
                {
                    title: 'Visura catastale online',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/visura-catastale/visura-catastale-online',
                    type: 'official',
                    usedFor: 'Dati catastali',
                    lastCheckedAt: '2026-08-14',
                },
                {
                    title: 'IMU — fiscalità locale',
                    organization: 'Ministero dell’Economia e delle Finanze',
                    url: 'https://www.finanze.gov.it/it/Fiscalita-locale/IMU/',
                    type: 'official',
                    usedFor: 'Quadro IMU',
                    lastCheckedAt: '2026-08-14',
                },
            ],
        }
    ]
};
