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
            id: 'bonifico-istantaneo-truffa',
            slug: 'bonifico-istantaneo-truffa-cosa-fare',
            title: 'Bonifico istantaneo truffa: cosa fare',
            category: 'soldi',
            audience: ['adults', 'victims'],
            level: 'avanzata',
            estimatedMinutes: 10,
            summary: 'Come reagire immediatamente se hai inviato un bonifico istantaneo a un truffatore.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Polizia Postale',
            synthesis: 'Il bonifico istantaneo non è revocabile, ma ci sono procedure di "recall" e denuncia obbligatorie.',
            whenToDo: 'Entro i primi minuti/ore dopo aver realizzato l\'errore.',
            scenario: 'Hai inviato dei soldi convinto di fare un acquisto o aiutare un parente, ma hai scoperto che era un inganno. Il bonifico è già arrivato al destinatario.',
            steps: [
                'Chiama immediatamente il servizio clienti della tua banca',
                'Chiedi l\'attivazione della procedura di "Recall" per frode',
                'Blocca l\'accesso all\'home banking se hai fornito credenziali',
                'Recati subito a fare denuncia alla Polizia Postale o Carabinieri'
            ],
            doNow: [
                'Chiama subito la tua banca',
                'Fai denuncia alla Polizia Postale'
            ],
            dontDo: [
                'Non aspettare il giorno dopo (i truffatori svuotano subito il conto)',
                'Non contattare il truffatore sperando che ti restituisca i soldi',
                'Non fidarti di chi ti contatta dicendo di essere della banca e chiedendo altri codici per "annullare" il bonifico'
            ],
            whatToPrepare: [
                'Dati del bonifico (TRN, importo, data, ora)',
                'IBAN del destinatario',
                'Screenshot della conversazione con il truffatore',
                'Documento di identità'
            ],
            commonErrors: [
                'Pensare che la banca possa annullare il bonifico istantaneo con un click (è irrevocabile)',
                'Non fare denuncia pensando che "tanto non serve"',
                'Fornire ulteriori codici OTP durante la fase di panico'
            ],
            askHelpWhen: [
                'Se la banca si rifiuta di avviare il recall',
                'Se il danno economico è ingente e serve assistenza legale'
            ],
            whoCanHelp: ['Servizio Frodi della propria banca', 'Polizia Postale', 'Arbitro Bancario Finanziario (ABF)'],
            officialLinks: ['https://www.commissariatodips.it/', 'https://www.arbitrobancariofinanziario.it/'],
            checklist: [
                'Banca contattata telefonicamente',
                'Procedura Recall richiesta',
                'Credenziali home banking cambiate',
                'Denuncia presentata',
                'Copia denuncia inviata alla banca via PEC'
            ],
            sources: [
                {
                    title: 'Truffe tramite bonifico',
                    organization: 'Polizia Postale',
                    url: 'https://www.commissariatodips.it/consigli/per-i-cittadini/acquisti-online/index.html',
                    type: 'official',
                    usedFor: 'Consigli sicurezza e denuncia',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Arbitro Bancario Finanziario - Guida',
                    organization: 'Banca d\'Italia',
                    url: 'https://www.arbitrobancariofinanziario.it/',
                    type: 'official',
                    usedFor: 'Risoluzione controversie bancarie',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'carta-clonata-blocco',
            slug: 'carta-clonata-blocco-e-disconoscimento',
            title: 'Carta clonata: blocco e disconoscimento',
            category: 'soldi',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Cosa fare se noti pagamenti non autorizzati sulla tua carta di credito o debito.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Banca d\'Italia',
            synthesis: 'Blocco immediato della carta e procedura di rimborso (chargeback) per operazioni fraudolente.',
            whenToDo: 'Appena ricevi una notifica di pagamento sospetta o vedi movimenti strani nell\'estratto conto.',
            scenario: 'Ti trovi a casa e ricevi un SMS che conferma un acquisto di 500€ in un negozio all\'estero dove non sei mai stato.',
            steps: [
                'Blocca la carta tramite app o numero verde blocchi (attivo 24/7)',
                'Annota il codice di blocco fornito dall\'operatore',
                'Fai una lista delle transazioni non autorizzate',
                'Fai denuncia entro 48 ore'
            ],
            doNow: [
                'Blocca la carta immediatamente',
                'Controlla l\'estratto conto per altre frodi'
            ],
            dontDo: [
                'Non aspettare di capire "cosa è successo" prima di bloccare',
                'Non buttare la carta fisica (potrebbe servire for la denuncia)',
                'Non cancellare gli SMS di notifica delle transazioni'
            ],
            whatToPrepare: [
                'Numero della carta (o ultime 4 cifre)',
                'Estratto conto con evidenziate le operazioni sospette',
                'Copia della denuncia',
                'Modulo di disconoscimento della banca'
            ],
            commonErrors: [
                'Dimenticare di bloccare la carta anche sui wallet digitali (Apple Pay/Google Pay)',
                'Non contestare per iscritto le transazioni entro i termini (solitamente 60-90 giorni)',
                'Pensare che il blocco della carta cancelli anche i pagamenti già autorizzati'
            ],
            askHelpWhen: [
                'Se la banca nega il rimborso sostenendo una tua "grave negligenza"',
                'Se la carta viene usata ripetutamente nonostante il blocco'
            ],
            whoCanHelp: ['Emittente della carta (Mastercard, Visa, American Express, ecc.)', 'Polizia di Stato', 'Associazioni consumatori'],
            officialLinks: ['https://www.bancaditalia.it/pubblicazioni/guide-bi/guida-pagamenti-elettronici/index.html'],
            checklist: [
                'Blocco effettuato via telefono/app',
                'Codice di blocco segnato',
                'Denuncia presentata',
                'Modulo disconoscimento inviato',
                'Nuova carta richiesta'
            ],
            sources: [
                {
                    title: 'Sicurezza dei pagamenti',
                    organization: 'Banca d\'Italia',
                    url: 'https://www.bancaditalia.it/',
                    type: 'official',
                    usedFor: 'Diritti al rimborso e PSD2',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Commissariato PS Online - Carte di pagamento',
                    organization: 'Polizia Postale',
                    url: 'https://www.commissariatodips.it/',
                    type: 'official',
                    usedFor: 'Modalità di denuncia clonazione',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'paypal-contestazione',
            slug: 'paypal-contestazione-e-chargeback',
            title: 'PayPal: contestazione e chargeback',
            category: 'soldi',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Come utilizzare la Protezione Acquisti di PayPal per ottenere il rimborso di un acquisto mai arrivato o non conforme.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'PayPal',
            synthesis: 'Apertura di una disputa nel Centro Risoluzioni entro 180 giorni dal pagamento.',
            whenToDo: 'Quando l\'oggetto non arriva dopo la data prevista o è palesemente diverso dalla descrizione.',
            scenario: 'Hai comprato un paio di scarpe su un sito, hai pagato con PayPal, ma sono passate tre settimane e il venditore è sparito.',
            steps: [
                'Accedi al tuo conto PayPal',
                'Vai nel "Centro risoluzioni" e clicca su "Segnala un problema"',
                'Seleziona la transazione e scegli il motivo (es. "Oggetto non ricevuto")',
                'Invia un messaggio al venditore tramite PayPal'
            ],
            doNow: [
                'Apri una contestazione nel Centro Risoluzioni PayPal',
                'Invia un messaggio al venditore'
            ],
            dontDo: [
                'Non chiudere la contestazione finché non hai ricevuto il rimborso o l\'oggetto (una volta chiusa non si può riaprire)',
                'Non accettare rimborsi "parziali" fuori dalla piattaforma PayPal',
                'Non inviare mai denaro con l\'opzione "Amici e Familiari" for acquisti commerciali (non ha protezione)'
            ],
            whatToPrepare: [
                'ID transazione PayPal',
                'Screenshot dell\'annuncio di vendita',
                'Email di conferma ordine',
                'Eventuali prove di mancata consegna (es. tracking fermo)'
            ],
            commonErrors: [
                'Aspettare troppo tempo per segnalare (oltre i 180 giorni)',
                'Dimenticare di convertire la "contestazione" in "reclamo" se il venditore non risponde (entro 20 giorni)',
                'Sbagliare il motivo della segnalazione'
            ],
            askHelpWhen: [
                'Se il venditore fornisce un numero di tracking falso che risulta "consegnato" in un\'altra città',
                'Se PayPal chiude il reclamo a tuo sfavore ingiustamente'
            ],
            whoCanHelp: ['Assistenza Clienti PayPal', 'Centro Risoluzioni PayPal', 'Associazioni Consumatori'],
            officialLinks: ['https://www.paypal.com/it/webapps/mpp/paypal-safety-and-security'],
            checklist: [
                'Segnalazione aperta in Centro Risoluzioni',
                'Messaggio inviato al venditore',
                'Conversione in reclamo effettuata (se necessario)',
                'Documentazione aggiuntiva caricata',
                'Esito monitorato via email'
            ],
            sources: [
                {
                    title: 'Protezione acquisti per gli acquirenti',
                    organization: 'PayPal Italia',
                    url: 'https://www.paypal.com/it/webapps/mpp/ua/buyer-protection',
                    type: 'platform',
                    usedFor: 'Regole ufficiali rimborso',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Consigli for acquisti sicuri',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/',
                    type: 'official',
                    usedFor: 'Protezione dati nei pagamenti online',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'marketplace-truffa',
            slug: 'marketplace-vinted-ebay-subito-truffato',
            title: 'Marketplace (Vinted/eBay/Subito): venditore/acquirente truffato',
            category: 'soldi',
            audience: ['adults', 'studenti', 'victims'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Come proteggersi e cosa fare se si viene raggirati su piattaforme di compravendita tra privati.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Polizia Postale',
            synthesis: 'Utilizzo esclusivo dei sistemi di pagamento integrati e segnalazione immediata alla piattaforma.',
            whenToDo: 'Sia in fase di vendita (per prevenire) che subito dopo aver subito un danno.',
            scenario: 'Sei un venditore e l\'acquirente dice che il pacco era vuoto, oppure sei un acquirente e hai ricevuto un mattone al posto di un telefono.',
            steps: [
                'Sospendi ogni comunicazione fuori dalla chat ufficiale',
                'Segnala l\'utente alla piattaforma tramite il tasto "Report"',
                'Apri una contestazione tramite il sistema di protezione del sito (es. "TuttoSubito", "Protezione Vinted")',
                'Scatta foto dettagliate di quanto ricevuto e dell\'imballaggio'
            ],
            doNow: [
                'Segnala l\'utente alla piattaforma',
                'Apri una contestazione ufficiale'
            ],
            dontDo: [
                'Non accettare pagamenti tramite ricariche Postepay, bonifici diretti o link esterni',
                'Non spedire l\'oggetto prima di aver ricevuto la conferma di pagamento dalla piattaforma',
                'Non fornire il tuo numero di telefono o email se la chat dell\'app è sufficiente'
            ],
            whatToPrepare: [
                'Screenshot della chat',
                'Foto del pacco e dell\'etichetta di spedizione',
                'Ricevuta di spedizione/tracking',
                'Email ricevute dalla piattaforma'
            ],
            commonErrors: [
                'Uscire dalla piattaforma per concludere l\'affare (si perde ogni protezione)',
                'Fidarsi di screenshot di avvenuto pagamento inviati dal compratore',
                'Non filmare l\'apertura del pacco for oggetti di alto valore'
            ],
            askHelpWhen: [
                'Se la piattaforma non interviene nonostante le prove',
                'Se ricevi minacce legali infondate dal truffatore'
            ],
            whoCanHelp: ['Supporto clienti della piattaforma', 'Polizia Postale', 'Altroconsumo / Associazioni consumatori'],
            officialLinks: ['https://www.commissariatodips.it/consigli/per-i-cittadini/acquisti-online/index.html'],
            checklist: [
                'Utente segnalato nell\'app',
                'Contestazione ufficiale aperta',
                'Chat salvata (screenshot)',
                'Piattaforma informata del numero di denuncia (se fatta)',
                'Metodo di pagamento sicuro verificato'
            ],
            sources: [
                {
                    title: 'Guida all\'acquisto sicuro',
                    organization: 'Polizia di Stato',
                    url: 'https://www.poliziadistato.it/articolo/consigli-per-acquisti-online-sicuri',
                    type: 'official',
                    usedFor: 'Prevenzione truffe marketplace',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Centro sicurezza Subito.it',
                    organization: 'Subito.it',
                    url: 'https://info.subito.it/sicurezza.htm',
                    type: 'platform',
                    usedFor: 'Esempi di truffe comuni',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'finto-corriere-sms',
            slug: 'finto-corriere-finta-banca-via-sms',
            title: 'Finto corriere / Finta banca via SMS',
            category: 'soldi',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Riconoscere e neutralizzare i tentativi di Smishing (SMS phishing) che sfruttano loghi di banche e corrieri.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'CERTFin',
            synthesis: 'Mai cliccare su link in SMS che chiedono dati sensibili o pagamenti urgenti.',
            whenToDo: 'Sempre, ogni volta che ricevi un SMS con un link, anche se il mittente sembra affidabile.',
            scenario: 'Ricevi un SMS che sembra arrivare dalla tua banca: "Accesso non autorizzato, clicca qui per bloccare". Oppure da un corriere: "Pacco bloccato, paga 2€ di dogana".',
            steps: [
                'Non cliccare sul link',
                'Controlla il numero del mittente (spesso è un numero lungo o anonimo)',
                'Accedi al sito ufficiale della banca o del corriere digitando l\'indirizzo nel browser',
                'Segnala l\'SMS come spam sul tuo smartphone'
            ],
            doNow: [
                'Ignora e cancella l\'SMS',
                'Segnala il numero come spam'
            ],
            dontDo: [
                'Non inserire mai PIN, password o dati della carta su siti aperti tramite SMS',
                'Non rispondere all\'SMS',
                'Non scaricare app suggerite via SMS'
            ],
            whatToPrepare: [
                'Screenshot dell\'SMS for segnalazione',
                'Contatti ufficiali della tua banca (salvati in rubrica)'
            ],
            commonErrors: [
                'Fidarsi perché l\'SMS appare nella stessa conversazione dei messaggi veri della banca (tecnica dello spoofing)',
                'Farsi prendere dall\'urgenza comunicata nel messaggio',
                'Pensare che 2€ di dogana siano "pochi" e non sia una truffa'
            ],
            askHelpWhen: [
                'Se hai cliccato e inserito dei dati (agisci subito: blocca conti e carte)',
                'Se il tuo telefono inizia a comportarsi in modo strano dopo il click'
            ],
            whoCanHelp: ['Servizio Clienti della tua banca', 'CERT Finanziario (CERTFin)', 'Polizia Postale'],
            officialLinks: ['https://www.certfin.it/cittadini/smishing.html'],
            checklist: [
                'Mittente verificato',
                'Link NON cliccato',
                'App ufficiale usata for controllo',
                'SMS cancellato/segnalato',
                'Password cambiate (se cliccato)'
            ],
            sources: [
                {
                    title: 'Smishing: cos\'è e come difendersi',
                    organization: 'CERTFin',
                    url: 'https://www.certfin.it/',
                    type: 'official',
                    usedFor: 'Definizione tecnica e prevenzione',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Attenzione alle truffe via SMS',
                    organization: 'Poste Italiane',
                    url: 'https://www.poste.it/sicurezza.html',
                    type: 'institutional',
                    usedFor: 'Esempi reali di messaggi fraudolenti',
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
            whatToPrepare: [
                'Nome esatto della piattaforma e del sito web',
                'Numeri di telefono da cui ti contattano',
                'Contabili dei bonifici effettuati'
            ],
            commonErrors: [
                'Pensare che la piccola vincita iniziale sia reale (è un esca for farti versare di più)',
                'Pagare "tasse" o "commissioni" aggiuntive per riavere indietro i propri soldi (è un ulteriore furto)',
                'Farsi convincere dalla gentilezza e professionalità apparente del "tutor"'
            ],
            askHelpWhen: [
                'Se non riesci più a prelevare i tuoi fondi',
                'Se ricevi minacce di denunce fiscali se non versi altri soldi'
            ],
            whoCanHelp: ['CONSOB (Commissione Nazionale per le Società e la Borsa)', 'Polizia Postale', 'Associazioni specializzate in truffe finanziarie'],
            officialLinks: ['https://www.consob.it/web/area-pubblica/occhio-alle-truffe'],
            checklist: [
                'Autorizzazione CONSOB verificata',
                'Warning list controllata',
                'Software di controllo remoto NON installato',
                'Promesse di guadagno verificate (se troppo alte è truffa)',
                'Denuncia pronta (se già versato)'
            ],
            sources: [
                {
                    title: 'Occhio alle truffe!',
                    organization: 'CONSOB',
                    url: 'https://www.consob.it/web/area-pubblica/occhio-alle-truffe',
                    type: 'official',
                    usedFor: 'Vademecum antibufala finanziaria',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Imprese di investimento autorizzate',
                    organization: 'CONSOB',
                    url: 'https://www.consob.it/web/area-pubblica/albi-e-elenchi',
                    type: 'official',
                    usedFor: 'Verifica licenze broker',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        }
    ]
};
