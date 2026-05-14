import { Module } from '@/types';

export const modulo_16_famiglia_minori: Module = {
    id: 'modulo-16-famiglia-minori',
    lastUpdated: '2026-05-14',
    title: 'Famiglia e Minori',
    description: 'Tutela dei minori online, gestione dei rischi digitali in famiglia e strumenti di supporto psicologico e legale.',
    category: 'famiglia',
    difficulty: 'base',
    icon: 'Users',
    themeColor: 'accent-pink',
    lessons: [
        {
            id: 'cyberbullismo-24-ore',
            slug: 'cyberbullismo-prime-24-ore-cosa-fare',
            title: 'Cyberbullismo: prime 24 ore',
            category: 'famiglia',
            audience: ['parents', 'teachers', 'victims'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Azioni immediate da compiere se scopri che un minore è vittima di bullismo online.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Ministero dell\'Istruzione e del Merito',
            synthesis: 'Protezione della vittima, conservazione delle prove e attivazione delle procedure scolastiche o legali.',
            whenToDo: 'Non appena vieni a conoscenza di atti di bullismo, insulti o esclusione sistematica online.',
            scenario: 'Tuo figlio torna da scuola scosso e ti mostra una chat di gruppo dove viene insultato pesantemente da alcuni compagni.',
            steps: [
                'Ascolta il minore senza giudicare o colpevolizzare',
                'Fai screenshot di tutti i messaggi, commenti e profili coinvolti',
                'Non rispondere e non cancellare nulla',
                'Segnala i contenuti alla piattaforma (Instagram, TikTok, ecc.)'
            ],
            doNow: [
                'Ascolta il minore e rassicuralo',
                'Salva gli screenshot delle prove'
            ],
            dontDo: [
                'Non sequestrare il telefono al minore (è la sua finestra sul mondo e si sentirebbe punito)',
                'Non contattare i genitori dei bulli impulsivamente',
                'Non agire da solo senza coinvolgere la scuola'
            ],
            whatToPrepare: [
                'Screenshot chiari con data e ora',
                'Link ai profili social dei responsabili',
                'Eventuali registrazioni audio/video'
            ],
            commonErrors: [
                'Minimizzare dicendo "sono solo ragazzate"',
                'Rispondere ai bulli aggravando la situazione',
                'Cancellare le prove per "non vederle più"'
            ],
            askHelpWhen: [
                'Se il minore manifesta autolesionismo o rifiuto scolastico',
                'Se gli atti di bullismo includono minacce fisiche o diffusione di materiale intimo'
            ],
            whoCanHelp: ['Referente Cyberbullismo della scuola', 'Polizia Postale', 'Telefono Azzurro (1.96.96)', 'Centri antiviolenza'],
            officialLinks: ['https://www.miur.gov.it/bullismo-e-cyberbullismo', 'https://www.azzurro.it/'],
            checklist: [
                'Vittima rassicurata',
                'Prove salvate (screenshot)',
                'Contenuti segnalati sui social',
                'Scuola informata formalmente',
                'Denuncia presentata (se grave)'
            ],
            sources: [
                {
                    title: 'Linee Guida Bullismo e Cyberbullismo',
                    organization: 'Ministero dell\'Istruzione e del Merito',
                    url: 'https://www.miur.gov.it/',
                    type: 'official',
                    usedFor: 'Procedure scolastiche',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Legge 71/2017 - Cyberbullismo',
                    organization: 'Gazzetta Ufficiale',
                    url: 'https://www.gazzettaufficiale.it/eli/id/2017/06/3/17G00085/sg',
                    type: 'official',
                    usedFor: 'Riferimento normativo e diritto all\'oblio',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'ricatto-sessuale-minori',
            slug: 'parlare-a-un-figlio-vittima-di-ricatto',
            title: 'Parlare a un figlio vittima di ricatto',
            category: 'famiglia',
            audience: ['parents', 'victims'],
            level: 'avanzata',
            estimatedMinutes: 20,
            summary: 'Come gestire la comunicazione e l\'emergenza se un minore è vittima di sextortion (ricatto con foto intime).',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Polizia Postale',
            synthesis: 'Calma assoluta, rimozione della colpa e intervento tecnico-legale immediato.',
            whenToDo: 'Nel momento in cui il minore confessa di aver inviato foto intime e di essere ricattato.',
            scenario: 'Tuo figlio ha inviato una foto senza vestiti a un profilo che credeva essere una ragazza, e ora questo profilo minaccia di inviarla a tutti i suoi contatti se non paga o non invia altre foto.',
            steps: [
                'Di\' a tuo figlio: "Non è colpa tua, ti aiuto io"',
                'Non pagare mai nulla e non inviare altro materiale',
                'Interrompi ogni contatto con il ricattatore',
                'Fai screenshot della chat e del profilo del ricattatore'
            ],
            doNow: [
                'Interrompi ogni contatto col ricattatore',
                'Non pagare e non inviare altro materiale'
            ],
            dontDo: [
                'Non urlare e non punire il minore (ha bisogno di protezione)',
                'Non cancellare il profilo o la chat prima di aver salvato le prove',
                'Non cercare di negoziare con il criminale'
            ],
            whatToPrepare: [
                'Prove del ricatto (screenshot)',
                'Dati dell\'account del ricattatore',
                'Eventuali estremi del pagamento richiesto'
            ],
            commonErrors: [
                'Pagare sperando che finisca (chiederanno sempre più soldi)',
                'Sottovalutare lo stato psicologico del minore (rischio suicidio elevato)',
                'Pensare che sia "colpa" del minore per aver fatto la foto'
            ],
            askHelpWhen: [
                'Sempre. In questi casi serve aiuto professionale immediato.',
                'Se il minore manifesta ansia estrema o panico'
            ],
            whoCanHelp: ['Polizia Postale (SOS Sextortion)', 'Telefono Azzurro', 'Servizi di psicologia clinica'],
            officialLinks: ['https://www.commissariatodips.it/notizie/articolo/sextortion-e-minori-come-difendersi/index.html'],
            checklist: [
                'Minore messo in sicurezza emotiva',
                'Dialogo aperto senza colpevolizzazione',
                'Prove salvate offline',
                'Segnalazione immediata alla Polizia Postale',
                'Supporto psicologico attivato'
            ],
            sources: [
                {
                    title: 'Sextortion: i consigli della Polizia',
                    organization: 'Polizia Postale',
                    url: 'https://www.commissariatodips.it/',
                    type: 'official',
                    usedFor: 'Gestione tecnica emergenza',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Cyber-sextortion e minori',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/temi/cyberbullismo',
                    type: 'official',
                    usedFor: 'Tutela della privacy dei minori',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'gaming-chat-rischi',
            slug: 'gaming-e-chat-vocali-rischi-reali',
            title: 'Gaming e chat vocali: rischi reali',
            category: 'famiglia',
            audience: ['parents', 'minors'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Capire cosa succede nelle chat di gioco (Roblox, Fortnite, Discord) e come proteggere i minori.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Generazioni Connesse',
            synthesis: 'Monitoraggio delle interazioni, gestione degli acquisti in-app e impostazioni di privacy.',
            whenToDo: 'Prima di permettere l\'uso di giochi online con componenti social.',
            scenario: 'Tuo figlio gioca online tutto il giorno con le cuffie. Senti che parla con persone sconosciute e usa un linguaggio aggressivo.',
            steps: [
                'Gioca insieme a lui per capire come funziona il gioco',
                'Disattiva le chat vocali con sconosciuti nelle impostazioni',
                'Imposta una password per gli acquisti (niente carta di credito libera)',
                'Spiega che non deve mai dire nome vero, scuola o città'
            ],
            doNow: [
                'Imposta una password per gli acquisti in-app',
                'Disattiva la chat vocale libera'
            ],
            dontDo: [
                'Non vietare il gioco senza spiegare i motivi',
                'Non pensare che "sono solo altri bambini" (molti adulti usano questi giochi per adescamento)',
                'Non lasciare il computer/console in camera da letto durante la notte'
            ],
            whatToPrepare: [
                'Accesso alle impostazioni della console/PC',
                'Conoscenza del sistema PEGI (classificazione età)'
            ],
            commonErrors: [
                'Ignorare gli acquisti di "skin" o "valuta virtuale" (possono costare centinaia di euro)',
                'Pensare che il gioco sia sicuro solo perché la grafica è "da bambini"',
                'Sottovalutare l\'effetto delle chat vocali non moderate'
            ],
            askHelpWhen: [
                'Se il minore riceve regali virtuali da sconosciuti',
                'Se lo sconosciuto chiede di spostare la conversazione su altri canali (es. Telegram/WhatsApp)'
            ],
            whoCanHelp: ['Supporto tecnico del gioco', 'Generazioni Connesse (Safer Internet Centre Italia)', 'Pedagogisti digitali'],
            officialLinks: ['https://www.generazioniconnesse.it/'],
            checklist: [
                'PEGI verificato',
                'Chat vocale limitata ad amici',
                'Acquisti protetti da PIN',
                'Tempo di gioco concordato',
                'Privacy del profilo impostata'
            ],
            sources: [
                {
                    title: 'Guida per i genitori al gaming online',
                    organization: 'Generazioni Connesse',
                    url: 'https://www.generazioniconnesse.it/site/it/home-page/',
                    type: 'official',
                    usedFor: 'Consigli educativi',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'PEGI - Classificazione dei giochi',
                    organization: 'PEGI S.A.',
                    url: 'https://pegi.info/it',
                    type: 'institutional',
                    usedFor: 'Verifica contenuti adatti all\'età',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'parental-control-realistico',
            slug: 'parental-control-realistico-guida',
            title: 'Parental control realistico',
            category: 'famiglia',
            audience: ['parents'],
            level: 'base',
            estimatedMinutes: 20,
            summary: 'Come usare gli strumenti tecnici (Family Link, Apple Screen Time) senza distruggere il rapporto di fiducia.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'AGCOM',
            synthesis: 'Il controllo tecnico è solo un aiuto, la vera sicurezza passa per l\'educazione e il dialogo.',
            whenToDo: 'Quando fornisci il primo smartphone o tablet a un minore.',
            scenario: 'Vuoi proteggere tuo figlio da contenuti pornografici o violenti, ma non vuoi sembrare una spia che controlla ogni messaggio.',
            steps: [
                'Configura Google Family Link (Android) o "In famiglia" (Apple)',
                'Imposta filtri per contenuti espliciti su Google e YouTube',
                'Definisci un orario di "pausa" per i dispositivi',
                'Spiega a tuo figlio perché stai usando questi strumenti'
            ],
            doNow: [
                'Attiva i filtri per contenuti espliciti',
                'Concorda un limite di tempo quotidiano'
            ],
            dontDo: [
                'Non leggere i messaggi privati di nascosto (distrugge la fiducia)',
                'Non usare il parental control come unica forma di protezione',
                'Non impostare limiti troppo rigidi senza averne parlato insieme'
            ],
            whatToPrepare: [
                'Smartphone del genitore e del minore',
                'Account Google o Apple ID per entrambi',
                'Pochi minuti per la configurazione'
            ],
            commonErrors: [
                'Dimenticare di filtrare anche i risultati di ricerca delle immagini',
                'Pensare che il filtro blocchi il 100% dei contenuti (nulla è perfetto)',
                'Non aggiornare i filtri man mano che il minore cresce'
            ],
            askHelpWhen: [
                'Se il minore riesce a bypassare i blocchi sistematicamente',
                'Se l\'uso della tecnologia diventa motivo di scontro violento quotidiano'
            ],
            whoCanHelp: ['Esperti di media education', 'Sportelli per la genitorialità', 'Siti ufficiali dei produttori (Apple/Google)'],
            officialLinks: ['https://families.google/familylink/', 'https://www.apple.com/it/families/'],
            checklist: [
                'Account minori creato correttamente',
                'Filtri web attivati',
                'Limite tempo d\'uso impostato',
                'Approvazione app attiva',
                'Patto educativo digitale firmato'
            ],
            sources: [
                {
                    title: 'Vademecum Parental Control',
                    organization: 'Autorità per le Garanzie nelle Comunicazioni (AGCOM)',
                    url: 'https://www.agcom.it/sistemi-di-parental-control',
                    type: 'official',
                    usedFor: 'Linee guida tecniche e normative',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Internet sicuro per i minori',
                    organization: 'ACN',
                    url: 'https://www.acn.gov.it/',
                    type: 'official',
                    usedFor: 'Sicurezza informatica in famiglia',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'sharenting-rischi',
            slug: 'sharenting-e-foto-di-minori-online',
            title: 'Sharenting e foto di minori online',
            category: 'famiglia',
            audience: ['parents'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'I rischi legati alla pubblicazione delle foto dei propri figli sui social media.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Garante Privacy',
            synthesis: 'Protezione dell\'identità e della dignità del minore nel mondo digitale.',
            whenToDo: 'Sempre, prima di caricare qualsiasi immagine che ritragga un minore.',
            scenario: 'Vuoi condividere la gioia del primo giorno di scuola o del bagnetto, ma non pensi a chi altro potrebbe vedere quelle foto.',
            steps: [
                'Copri il volto del minore con un adesivo o una emoji',
                'Imposta i profili social come "Privati"',
                'Chiedi il consenso all\'altro genitore',
                'Pensa: "Mio figlio sarà felice di vedere questa foto online tra 10 anni?"'
            ],
            doNow: [
                'Imposta il tuo profilo social come privato',
                'Usa adesivi per coprire il volto del minore'
            ],
            dontDo: [
                'Non pubblicare mai foto del minore nudo o seminudo (anche se è un neonato)',
                'Non mostrare elementi che rendano identificabile la scuola o la casa',
                'Non pubblicare foto di figli di altri senza permesso esplicito dei loro genitori'
            ],
            whatToPrepare: [
                'Consapevolezza dei termini di servizio dei social (spesso acquisiscono i diritti sulle foto)',
                'Conoscenza delle impostazioni di privacy del tuo profilo'
            ],
            commonErrors: [
                'Pensare che "lo fanno tutti, non succede nulla"',
                'Sottovalutare il rischio che le foto finiscano in circuiti pedopornografici (accade spesso anche con foto innocenti)',
                'Creare profili social dedicati ai neonati'
            ],
            askHelpWhen: [
                'Se trovi foto di tuo figlio pubblicate da altri senza permesso',
                'Se sospetti un uso improprio delle immagini pubblicate'
            ],
            whoCanHelp: ['Garante Privacy', 'Polizia Postale', 'Associazioni per la tutela dell\'infanzia'],
            officialLinks: ['https://www.garanteprivacy.it/temi/minori'],
            checklist: [
                'Volto protetto/nascosto',
                'Profilo privato verificato',
                'Nessun dato sensibile visibile (scuola/indirizzo)',
                'Consenso dell\'altro genitore ottenuto',
                'Metadati foto rimossi'
            ],
            sources: [
                {
                    title: 'Sharenting: i consigli del Garante',
                    organization: 'Garante per la protezione dei dati personali',
                    url: 'https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9886364',
                    type: 'official',
                    usedFor: 'Campagna di sensibilizzazione',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Polizia Postale - Sharenting',
                    organization: 'Commissariato PS Online',
                    url: 'https://www.commissariatodips.it/',
                    type: 'official',
                    usedFor: 'Rischi di sicurezza',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'segnalare-contenuti-dannosi',
            slug: 'segnalare-contenuti-dannosi-numeri-utili',
            title: 'Segnalare contenuti dannosi',
            category: 'famiglia',
            audience: ['cittadini', 'parents', 'victims'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'I numeri di emergenza e i portali per segnalare violenza, pedopornografia o cyberbullismo.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            mainEntity: 'Polizia Postale',
            synthesis: 'Conoscenza degli strumenti istituzionali per la rimozione di contenuti illegali o pericolosi.',
            whenToDo: 'Immediatamente quando ti imbatti in contenuti illegali, violenti o che ritraggono minori in situazioni di pericolo.',
            scenario: 'Stai navigando e trovi un sito che mostra violenza estrema, oppure ricevi un video illegale su un gruppo WhatsApp.',
            steps: [
                'Chiama il 114 (Emergenza Infanzia) per casi urgenti sui minori',
                'Chiama il 1522 in caso di violenza di genere o stalking',
                'Segnala il sito/contenuto sul portale della Polizia Postale',
                'Usa le funzioni di report interne alle piattaforme (es. YouTube "Segnala")'
            ],
            doNow: [
                'Identifica il numero di emergenza corretto',
                'Effettua la segnalazione ufficiale'
            ],
            dontDo: [
                'Non diffondere il contenuto dannoso per "far vedere quanto è brutto" (potresti commettere un reato)',
                'Non cercare di indagare da solo',
                'Non aver paura di segnalare anche se non sei la vittima diretta'
            ],
            whatToPrepare: [
                'URL del sito o profilo',
                'Data e ora della scoperta',
                'Screenshot (ma attenzione a non salvare materiale pedopornografico, in quel caso segnala solo l\'URL)'
            ],
            commonErrors: [
                'Pensare che altri abbiano già segnalato',
                'Ignorare il contenuto pensando che non sia affar proprio',
                'Aspettare che il contenuto venga rimosso da solo'
            ],
            askHelpWhen: [
                'Sempre in caso di illegalità evidente'
            ],
            whoCanHelp: ['Polizia Postale', 'Telefono Azzurro', '114 Emergenza Infanzia', '1522 Numero Anti Violenza e Stalking'],
            officialLinks: ['https://www.commissariatodips.it/segnalazioni/index.html', 'https://www.1522.eu/', 'https://114.it/'],
            checklist: [
                'Numero utile identificato (114, 1522, 112)',
                'URL o link salvato',
                'Segnalazione effettuata',
                'Istituzioni avvisate',
                'Contenuto NON diffuso ulteriormente'
            ],
            sources: [
                {
                    title: 'Segnalazioni online',
                    organization: 'Polizia di Stato',
                    url: 'https://www.commissariatodips.it/',
                    type: 'official',
                    usedFor: 'Canale ufficiale segnalazione',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Numero Anti Violenza e Stalking',
                    organization: 'Dipartimento Pari Opportunità',
                    url: 'https://www.1522.eu/',
                    type: 'official',
                    usedFor: 'Supporto vittime violenza',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        }
    ]
};
