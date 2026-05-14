import { Module } from '@/types';

export const modulo_13_casa_residenza: Module = {
    id: 'modulo-13-casa-residenza',
    lastUpdated: '2026-05-14',
    title: 'Casa e Residenza',
    description: 'Gestione del contratto di affitto, utenze domestiche, agevolazioni fiscali e diritti abitativi.',
    category: 'casa',
    difficulty: 'base',
    icon: 'Home',
    themeColor: 'accent-orange',
    lessons: [
        {
            id: 'contratto-affitto-controllo',
            slug: 'contratto-affitto-cosa-controllare',
            title: 'Contratto d’affitto: cosa controllare',
            category: 'casa',
            audience: ['cittadini', 'studenti'],
            level: 'base',
            estimatedMinutes: 20,
            summary: 'Gli elementi essenziali da verificare in un contratto di locazione prima della firma.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Agenzia delle Entrate',
            synthesis: 'Verifica della tipologia contrattuale (4+4, 3+2, transitorio), canone, spese e deposito cauzionale.',
            whenToDo: 'Prima di firmare il contratto di locazione e consegnare la caparra.',
            scenario: 'Hai trovato una casa in affitto e il proprietario ti ha inviato la bozza del contratto. Vuoi evitare clausole vessatorie o costi nascosti.',
            steps: [
                'Verifica la durata del contratto e le modalità di disdetta (recesso)',
                'Controlla l\'importo del canone e delle spese condominiali (se incluse o a parte)',
                'Verifica l\'entità del deposito cauzionale (massimo 3 mensilità)',
                'Assicurati che sia prevista la registrazione del contratto'
            ],
            doNow: [
                'Controlla la durata e il preavviso di recesso',
                'Verifica le spese condominiali e il deposito'
            ],
            dontDo: [
                'Non accettare accordi verbali per pagamenti in nero',
                'Non firmare se non è presente il verbale di consegna con lo stato dell\'immobile',
                'Non accettare clausole che pongono a tuo carico la manutenzione straordinaria'
            ],
            whatToPrepare: [
                'Bozza del contratto',
                'Documento di identità e codice fiscale',
                'Verbale di inventario (se arredata)'
            ],
            commonErrors: [
                'Sottovalutare l\'importanza del preavviso per il recesso (solitamente 6 mesi)',
                'Non distinguere tra spese ordinarie (inquilino) e straordinarie (proprietario)',
                'Non verificare se il contratto è a "cedolare secca" (niente aumenti ISTAT e bolli)'
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
                'APE (Attestazione Prestazione Energetica) allegata',
                'Verbale di consegna pronto'
            ],
            sources: [
                {
                    title: 'Locazione immobili: guida alla registrazione',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/',
                    type: 'official',
                    usedFor: 'Regole registrazione e tipologie',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Legge 431/98 sulle locazioni',
                    organization: 'Parlamento Italiano',
                    url: 'https://www.normattiva.it/',
                    type: 'official',
                    usedFor: 'Riferimento normativo contratti',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'registrazione-locazione',
            slug: 'registrazione-contratto-locazione-procedura',
            title: 'Registrazione contratto locazione',
            category: 'casa',
            audience: ['cittadini'],
            level: 'intermedia',
            estimatedMinutes: 15,
            summary: 'Come registrare ufficialmente il contratto di affitto all\'Agenzia delle Entrate e perché è fondamentale.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Agenzia delle Entrate',
            synthesis: 'Procedura telematica (RLI) o fisica entro 30 giorni dalla firma per dare validità fiscale al contratto.',
            whenToDo: 'Entro 30 giorni dalla data di stipula o dalla data di decorrenza (se anteriore).',
            scenario: 'Hai firmato il contratto e devi assicurarti che venga registrato per poter detrarre l\'affitto dalle tasse o chiedere la residenza.',
            steps: [
                'Verifica chi effettua la registrazione (solitamente il proprietario, ma l\'inquilino è co-responsabile)',
                'Accedi al servizio RLI online sul sito dell\'Agenzia delle Entrate',
                'Paga l\'imposta di registro e l\'imposta di bollo (se non in cedolare secca)',
                'Conserva la ricevuta di avvenuta registrazione'
            ],
            doNow: [
                'Accedi al servizio RLI sul sito AdE',
                'Invia la richiesta di registrazione'
            ],
            dontDo: [
                'Non lasciare il contratto non registrato (è nullo per la legge)',
                'Non pagare l\'imposta di registro interamente (si divide a metà tra proprietario e inquilino, salvo cedolare secca)'
            ],
            whatToPrepare: [
                'Contratto firmato in PDF',
                'Dati catastali dell\'immobile',
                'Modello RLI compilato',
                'Credenziali SPID/CIE'
            ],
            commonErrors: [
                'Dimenticare di registrare le proroghe o le risoluzioni anticipate',
                'Sbagliare il calcolo dell\'imposta di registro (2% del canone annuo)',
                'Non indicare correttamente l\'opzione per la cedolare secca'
            ],
            askHelpWhen: [
                'Se il proprietario non ti consegna la ricevuta di registrazione',
                'Se ricevi un avviso di accertamento per omessa registrazione'
            ],
            whoCanHelp: ['Agenzia delle Entrate', 'Centri di Assistenza Fiscale (CAF)', 'Professionisti abilitati'],
            officialLinks: ['https://www.agenziaentrate.gov.it/portale/web/guest/schede/istanze/registrazione-di-un-nuovo-contratto/rli-web'],
            checklist: [
                'Contratto firmato da entrambe le parti',
                'Modello RLI inviato',
                'Imposte pagate (F24 o addebito)',
                'Ricevuta telematica scaricata',
                'Copia del contratto registrato conservata'
            ],
            sources: [
                {
                    title: 'Registrazione contratti di locazione',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/',
                    type: 'official',
                    usedFor: 'Istruzioni RLI',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Vademecum Casa',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/portale/l-agenzia-informa/guide-fiscali',
                    type: 'official',
                    usedFor: 'Approfondimenti fiscali casa',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'voltura-subentro-utenze',
            slug: 'voltura-e-subentro-utenze-luce-gas',
            title: 'Voltura e Subentro utenze (Luce/Gas)',
            category: 'casa',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'La differenza tra voltura e subentro e come gestire il passaggio dei contratti di energia e gas.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'ARERA',
            synthesis: 'Voltura: cambio nome su contratto attivo. Subentro: riattivazione di contatore chiuso.',
            whenToDo: 'In concomitanza con l\'ingresso nella nuova abitazione.',
            scenario: 'Ti sei trasferito in una nuova casa e devi intestarti le bollette della luce e del gas che sono ancora a nome del vecchio inquilino o del proprietario.',
            steps: [
                'Recupera una vecchia bolletta per i codici POD (luce) e PDR (gas)',
                'Prendi la lettura dei contatori al momento del subentro',
                'Contatta il fornitore scelto per avviare la pratica',
                'Sottoscrivi il nuovo contratto'
            ],
            doNow: [
                'Recupera i codici POD e PDR',
                'Effettua la lettura dei contatori'
            ],
            dontDo: [
                'Non aspettare troppo tempo (rischi il distacco della fornitura)',
                'Non accettare debiti del precedente inquilino (chiedi la "voltura senza accollo")',
                'Non dimenticare di chiudere le utenze della vecchia casa'
            ],
            whatToPrepare: [
                'Codice POD e PDR',
                'Documento di identità e codice fiscale',
                'Titolo di possesso immobile (es. data registrazione affitto)',
                'IBAN for domiciliazione (opzionale)'
            ],
            commonErrors: [
                'Confondere voltura e subentro (hanno costi e tempi diversi)',
                'Non comunicare la lettura esatta (rischio bollette basate su stime errate)',
                'Dimenticare di attivare anche l\'utenza dell\'acqua e della TARI (rifiuti)'
            ],
            askHelpWhen: [
                'Se il contatore è piombato per morosità del precedente inquilino',
                'Se il fornitore rifiuta la voltura senza motivo'
            ],
            whoCanHelp: ['ARERA (Autorità di Regolazione per Energia Reti e Ambiente)', 'Sportello per il consumatore Energia e Ambiente'],
            officialLinks: ['https://www.arera.it/it/consumatori/consumatori.htm'],
            checklist: [
                'Codici POD/PDR recuperati',
                'Lettura contatori effettuata',
                'Contratto con fornitore firmato',
                'Documentazione immobile inviata',
                'Conferma attivazione ricevuta'
            ],
            sources: [
                {
                    title: 'Guida alla Voltura e al Subentro',
                    organization: 'ARERA',
                    url: 'https://www.arera.it/it/consumatori/voltura.htm',
                    type: 'official',
                    usedFor: 'Definizioni e diritti dei consumatori',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Portale Offerte Energia',
                    organization: 'Acquirente Unico / ARERA',
                    url: 'https://www.ilportaleofferte.it/',
                    type: 'official',
                    usedFor: 'Confronto tariffe fornitura',
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
            lastReviewedAt: '2026-05-14',
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
                    url: 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizi-e-strumenti.servizi.isee-precompilato-e-dsu.html',
                    type: 'official',
                    usedFor: 'Procedura e precompilata',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Ministero del Lavoro - ISEE',
                    organization: 'Ministero del Lavoro e delle Politiche Sociali',
                    url: 'https://www.lavoro.gov.it/temi-e-priorita/poverta-ed-esclusione-sociale/Pagine/ISEE.aspx',
                    type: 'official',
                    usedFor: 'Finalità e normativa ISEE',
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
            lastReviewedAt: '2026-05-14',
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
                    url: 'https://www.arera.it/it/bonus_sociali.htm',
                    type: 'official',
                    usedFor: 'Regole applicazione automatica',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Bonus per disagio fisico',
                    organization: 'Ministero della Salute',
                    url: 'https://www.salute.gov.it/',
                    type: 'official',
                    usedFor: 'Informazioni apparecchiature salvavita',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'problemi-proprietario-affitto',
            slug: 'problemi-col-proprietario-primi-passi',
            title: 'Problemi col proprietario: primi passi',
            category: 'casa',
            audience: ['cittadini', 'victims'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Come gestire le controversie più comuni tra inquilino e proprietario (riparazioni, spese, cauzione).',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Ministero della Giustizia',
            synthesis: 'Comunicazione formale e distinzione legale tra oneri del locatore e del conduttore.',
            whenToDo: 'Non appena sorge un problema che non si risolve con una conversazione informale.',
            scenario: 'La caldaia si è rotta e il proprietario dice che devi pagarla tu, oppure non vuole restituirti la cauzione senza motivo.',
            steps: [
                'Leggi cosa dice il contratto e il codice civile sul problema specifico',
                'Invia una comunicazione scritta (PEC o raccomandata A/R) esponendo il problema',
                'Documenta il guasto o la situazione con foto e video',
                'Metti in mora il proprietario se necessario'
            ],
            doNow: [
                'Invia una PEC o raccomandata formale',
                'Scatta foto e video del danno'
            ],
            dontDo: [
                'Non smettere di pagare l\'affitto per protesta (rischi lo sfratto anche se hai ragione)',
                'Non fare riparazioni costose senza autorizzazione scritta (potresti non essere rimborsato)',
                'Non cambiare la serratura impedendo l\'accesso (salvo casi eccezionali)'
            ],
            whatToPrepare: [
                'Copia del contratto registrato',
                'Ricevute dei pagamenti effettuati',
                'Foto/video del problema',
                'Corrispondenza precedente'
            ],
            commonErrors: [
                'Agire solo a voce senza lasciare tracce scritte',
                'Confondere manutenzione ordinaria (inquilino) e straordinaria (proprietario)',
                'Aspettare la fine del contratto per contestare guasti presenti da tempo'
            ],
            askHelpWhen: [
                'In caso di minaccia di sfratto',
                'Se il proprietario entra in casa senza permesso e senza urgenza'
            ],
            whoCanHelp: ['Sindacati Inquilini', 'Avvocati specializzati in locazioni', 'Organismi di mediazione'],
            officialLinks: ['https://www.giustizia.it/giustizia/it/mg_2_7_2.page'],
            checklist: [
                'Contratto verificato',
                'Foto del danno scattate',
                'Comunicazione formale inviata',
                'Parere sindacale richiesto',
                'Pagamenti affitto regolari'
            ],
            sources: [
                {
                    title: 'Obblighi del locatore e del conduttore',
                    organization: 'Codice Civile (Artt. 1571 e successivi)',
                    url: 'https://www.normattiva.it/',
                    type: 'official',
                    usedFor: 'Riferimento legislativo',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Mediazione civile',
                    organization: 'Ministero della Giustizia',
                    url: 'https://www.giustizia.it/',
                    type: 'official',
                    usedFor: 'Risoluzione extragiudiziale',
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
            lastReviewedAt: '2026-05-14',
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
                },
                {
                    title: 'Diritto alla residenza',
                    organization: 'Associazione Avvocato di Strada',
                    url: 'https://www.avvocatodistrada.it/',
                    type: 'nonprofit',
                    usedFor: 'Supporto pratico e legale',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        }
    ]
};
