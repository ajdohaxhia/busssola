import { Module } from '@/types';

export const modulo_04_sextortion_ricatti: Module = {
    id: 'modulo-04-sextortion-ricatti',
    title: 'Modulo 4: Sextortion e Ricatti Sessuali',
    description: 'Protocolli rigorosi per gestire estorsioni basate su immagini intime, blocco tecnico della diffusione e tutele legali del Garante Privacy.',
    category: 'sextortion',
    difficulty: 'intermedia',
    icon: 'AlertCircle',
    themeColor: 'accent-red',
    lessons: [
        {
            id: 'sextortion-what-is',
            slug: 'sextortion-riconoscere-il-ricatto',
            title: 'Sextortion: Riconoscere il ricatto',
            category: 'sextortion',
            audience: ['adults', 'minors', 'victims'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come avviene l\'estorsione sessuale online e perché il silenzio è l\'unico potere che ha il ricattatore su di te.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Dopo aver scambiato foto o video intimi con una persona conosciuta online, questa ti rivela di aver registrato tutto. Ti minaccia di inviare il video a tutti i tuoi amici o familiari se non paghi una somma di denaro (solitamente tra i 200 e i 2000 euro).',
            question: 'Perché il ricattatore insiste sull\'urgenza?',
            whatIsHappening: 'La sextortion è un reato di estorsione. L\'attaccante usa la tua vergogna e la paura del giudizio sociale come arma. Spesso si tratta di gruppi criminali organizzati (non singoli individui) che gestiscono decine di ricatti contemporaneamente. Il loro unico obiettivo è il denaro, non la tua reputazione.',
            warningSigns: [
                'Il profilo con cui hai parlato sparisce o cambia nome subito dopo l\'invio delle foto.',
                'Ti vengono mostrati screenshot dei tuoi contatti social o della tua rubrica.',
                'Richieste di pagamento tramite canali anonimi (Bitcoin, Western Union, carte regalo).',
                'Minacce di "rovinarti la vita" o "distruggere la tua carriera".'
            ],
            doNow: [
                'Mantieni la calma. Il panico ti spinge a pagare, che è l\'errore più grave.',
                'INTERROMPI OGNI CONTATTO. Non rispondere, non supplicare, non giustificarti.',
                'Metti i tuoi profili social in modalità privata e cambia lo username se possibile.',
                'Fai screenshot di tutto: la chat, il profilo del ricattatore, le prove che ha del materiale.'
            ],
            dontDo: [
                'NON PAGARE. Pagare non ferma il ricatto, lo alimenta. Chi paga viene inserito in liste di "vittime redditizie" e riceverà nuove richieste.',
                'Non cancellare la chat prima di aver fatto gli screenshot (sono la tua prova legale).',
                'Non cercare di hackerare a tua volta il ricattatore.',
                'Non isolarti. Parlane con una persona di fiducia o con un esperto.'
            ],
            preserveEvidence: [
                'URL del profilo del ricattatore (fondamentale per la Polizia).',
                'ID della chat o username esatto.',
                'Screenshot delle minacce e delle richieste di pagamento.'
            ],
            askHelpWhen: [
                'Sempre. La sextortion è un reato penale grave.',
                'Se ricevi minacce continue anche dopo aver bloccato il profilo.'
            ],
            whoCanHelp: [
                'Polizia Postale (commissariatodips.it)',
                'Garante Privacy (per il blocco della diffusione)',
                'StopNCII.org (strumento tecnico di prevenzione)'
            ],
            checklist: [
                'Interrompi contatti',
                'NON PAGARE',
                'Salva screenshot',
                'Denuncia subito'
            ],
            sources: [
                {
                    title: 'Sextortion: I consigli della Polizia',
                    organization: 'Polizia di Stato',
                    url: 'https://www.poliziadistato.it/articolo/116259074a38f3d640989052',
                    type: 'official',
                    usedFor: 'Protocollo di emergenza e indicazioni sul non pagamento.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Revenge Porn e tutela dei dati',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/revengeporn',
                    type: 'official',
                    usedFor: 'Informazioni legali sulla tutela della dignità e rimozione contenuti.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'revenge-porn-legal',
            slug: 'revenge-porn-diritti-legali-rimozione',
            title: 'Revenge Porn: I tuoi diritti legali',
            category: 'sextortion',
            audience: ['adults', 'victims'],
            level: 'medio',
            estimatedMinutes: 6,
            summary: 'Come utilizzare il canale prioritario del Garante Privacy per richiedere la rimozione di foto intime diffuse senza consenso.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Qualcuno ha pubblicato o sta per pubblicare tue foto o video intimi su siti web o gruppi Telegram/WhatsApp senza il tuo permesso.',
            question: 'Come posso far sparire quelle foto dal web il prima possibile?',
            whatIsHappening: 'In Italia, la diffusione illecita di immagini sessualmente esplicite è un reato (Art. 612-ter c.p.). Il Garante Privacy ha un potere speciale: può ordinare alle piattaforme (Facebook, Instagram, Google, Telegram) di bloccare la diffusione di tali contenuti entro tempi brevissimi.',
            warningSigns: [
                'Vedi tue immagini su siti pornografici o forum.',
                'Qualcuno ti avvisa che le tue foto circolano in gruppi chat.',
                'Ricevi link che portano a contenuti che ti ritraggono in situazioni intime.'
            ],
            doNow: [
                'Segnala il contenuto al Garante Privacy tramite il modulo online dedicato.',
                'Segnala il contenuto direttamente alla piattaforma (es. "Segnala per nudità o atti sessuali").',
                'Se il contenuto è su Google, usa lo strumento di rimozione per "Informazioni personali non consensuali".',
                'Fai screenshot degli URL esatti dove si trova il materiale.'
            ],
            dontDo: [
                'Non cercare di contattare l\'amministratore del sito se è un sito illegale o amatoriale (potrebbe chiederti soldi).',
                'Non diffondere ulteriormente il link, nemmeno per farlo vedere agli amici per "conferma".',
                'Non cancellare il post originale se puoi ancora farne uno screenshot con l\'URL.'
            ],
            preserveEvidence: [
                'URL completo della pagina web.',
                'Screenshot della pagina dove si vede chiaramente il contenuto e la data.',
                'Eventuali messaggi di accompagnamento alla foto.'
            ],
            askHelpWhen: [
                'Immediatamente. Ogni minuto conta per limitare la viralità.',
                'Se la piattaforma non risponde alle tue segnalazioni dirette.'
            ],
            whoCanHelp: [
                'Garante Privacy (Canale segnalazione Revenge Porn)',
                'Polizia Postale',
                'Legale esperto in diritto digitale'
            ],
            checklist: [
                'Modulo Garante Privacy',
                'Segnalazione Piattaforma',
                'Screenshot URL',
                'Denuncia Penale'
            ],
            sources: [
                {
                    title: 'Segnalazione per la diffusione illecita di immagini intime',
                    organization: 'Garante per la protezione dei dati personali',
                    url: 'https://www.garanteprivacy.it/temi/revenge-porn',
                    type: 'official',
                    usedFor: 'Procedura ufficiale di segnalazione e base legale dei diritti della vittima.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Articolo 612-ter Codice Penale',
                    organization: 'Gazzetta Ufficiale',
                    url: 'https://www.gazzettaufficiale.it/atto/serie_generale/caricaArticolo?art.progressivo=0&art.idArticolo=10&art.versione=1&art.codiceRedazionale=19G00076',
                    type: 'official',
                    usedFor: 'Riferimento normativo sul reato di diffusione illecita di immagini intime.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'stopncii-technical',
            slug: 'stopncii-bloccare-foto-intime-online',
            title: 'StopNCII: Bloccare la diffusione tecnica',
            category: 'sextortion',
            audience: ['adults', 'minors', 'victims'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Uno strumento gratuito e sicuro per impedire che le tue foto intime vengano caricate sui principali social network.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Sei stato vittima di sextortion o temi che qualcuno pubblichi tue foto private su Facebook, Instagram o TikTok. Vuoi un modo proattivo per bloccare il caricamento di quei file.',
            question: 'Devo caricare le mie foto intime su un sito per bloccarle? Non è pericoloso?',
            whatIsHappening: 'StopNCII.org NON carica le tue foto. Il sistema genera un "Hash" (un\'impronta digitale numerica) del file direttamente sul tuo dispositivo. Solo questa impronta viene inviata ai social partner (Meta, TikTok, Bumble). Se qualcuno tenta di caricare un file con la stessa impronta, il sistema lo blocca automaticamente.',
            warningSigns: [
                'Il ricattatore possiede file digitali specifici che non sono ancora online.',
                'Temi che un ex partner possa caricare materiale intimo per vendetta.'
            ],
            doNow: [
                'Vai su StopNCII.org dal tuo browser privato.',
                'Seleziona i file che vuoi proteggere (foto o video).',
                'Il sito genererà l\'Hash localmente. Segnati il "Case Number" e il PIN generati: sono gli unici modi per gestire la tua segnalazione in futuro.',
                'Invia gli Hash alle piattaforme partecipanti tramite il portale.'
            ],
            dontDo: [
                'Non cancellare il file originale dal tuo telefono finché non hai generato l\'Hash su StopNCII.',
                'Non perdere il PIN e il Case Number: senza di essi non potrai mai rimuovere il blocco se deciderai di farlo.',
                'Non fidarti di siti simili che ti chiedono di inviare i file reali via email.'
            ],
            preserveEvidence: [
                'Conserva il Case Number di StopNCII in un luogo sicuro.'
            ],
            askHelpWhen: [
                'Se hai difficoltà tecniche a generare l\'impronta del file.',
                'Se il contenuto è già online (in quel caso usa anche il modulo del Garante Privacy).'
            ],
            whoCanHelp: [
                'StopNCII.org Support',
                'Revenge Porn Helpline',
                'Garante Privacy'
            ],
            checklist: [
                'Accedi a StopNCII.org',
                'Genera Hash locale',
                'Salva PIN e Case ID',
                'Invia alle piattaforme'
            ],
            sources: [
                {
                    title: 'StopNCII Official Website',
                    organization: 'StopNCII.org',
                    url: 'https://stopncii.org/',
                    type: 'nonprofit',
                    usedFor: 'Strumento tecnologico per la prevenzione della diffusione di immagini intime.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Guida all\'uso di StopNCII',
                    organization: 'Garante Privacy (Vademecum)',
                    url: 'https://www.garanteprivacy.it/temi/revenge-porn',
                    type: 'official',
                    usedFor: 'Raccomandazione istituzionale dello strumento come prevenzione tecnica.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'paying-blackmail-risks',
            slug: 'perche-non-pagare-mai-ricatto-sextortion',
            title: 'Perché pagare un ricatto quasi sempre peggiora la situazione',
            category: 'sextortion',
            audience: ['victims', 'adults'],
            level: 'medio',
            estimatedMinutes: 5,
            summary: 'La reazione istintiva è pagare per far sparire il problema. Ecco perché questa è la scelta più pericolosa che puoi fare.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Il ricattatore ti chiede 500€ per non inviare il tuo video intimo a tutti i tuoi follower. Ti dice: "Paga e cancello tutto, giuro". Sei tentato di farlo solo per chiudere la faccenda e tornare a dormire.',
            question: 'Se pago, l\'hacker cancellerà davvero il mio video?',
            whatIsHappening: 'No. Il pagamento conferma al ricattatore due cose: 1. Che hai i soldi. 2. Che sei terrorizzato. Per lui diventi una "mucca da mungere". Subito dopo il primo pagamento, chiederà ancora più soldi, spesso usando la scusa che "il video è su un server e serve un altro pagamento per cancellarlo".',
            warningSigns: [
                'Il ricattatore accetta "sconti" o pagamenti rateali: è un segno che vuole solo legarti a sé.',
                'Le minacce aumentano di tono appena mostri disponibilità a pagare.',
                'Ti chiede pagamenti in criptovalute o carte regalo (Apple/Amazon) per essere anonimo.'
            ],
            doNow: [
                'Interrompi immediatamente ogni comunicazione. Non rispondere più a nessun messaggio.',
                'Non pagare nulla. Se hai già pagato, fermati subito e non inviare altro denaro.',
                'Salva le prove del ricatto (screenshot dei messaggi e delle richieste di soldi).',
                'Denuncia il fatto alla Polizia Postale: hanno protocolli specifici per questi criminali internazionali.'
            ],
            dontDo: [
                'Non credere alle promesse dell\'estorsore: non hanno alcun onore, il loro unico scopo è il profitto.',
                'Non cercare di negoziare o "prendere tempo": ogni parola che scrivi dà loro informazioni che useranno contro di te.'
            ],
            preserveEvidence: [
                'Screenshot delle richieste di denaro e delle coordinate fornite per il pagamento.',
                'Se hai pagato, conserva la ricevuta della transazione.'
            ],
            askHelpWhen: [
                'Immediatamente. La sextortion è un crimine grave e non devi affrontarlo da solo.'
            ],
            whoCanHelp: [
                'Polizia Postale',
                'Garante Privacy',
                'Associazioni di supporto vittime online'
            ],
            checklist: [
                'Stop comunicazioni',
                'Non pagare mai',
                'Salva prove ricatto',
                'Contatta Polizia'
            ],
            sources: [
                {
                    title: 'Sextortion: Non pagare mai e denunciare',
                    organization: 'Polizia di Stato',
                    url: 'https://www.commissariatodips.it/consigli/per-i-genitori/adescamento-online/sextortion/index.html',
                    type: 'official',
                    usedFor: 'Indicazione categorica sul divieto di pagamento e gestione psicologica della minaccia.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
