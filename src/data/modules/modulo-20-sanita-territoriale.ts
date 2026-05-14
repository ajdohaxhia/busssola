import { Module } from '@/types';

export const modulo_20_sanita_territoriale: Module = {
    id: 'modulo-20-sanita-territoriale',
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
            lastReviewedAt: '2026-05-14',
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Privacy e Fascicolo Sanitario',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/',
                    type: 'official',
                    usedFor: 'Dettagli sulla protezione dei dati sensibili.',
                    lastCheckedAt: '2026-05-14'
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Salute della donna',
                    organization: 'Ministero della Salute',
                    url: 'https://www.salute.gov.it/',
                    type: 'official',
                    usedFor: 'Informazioni su screening e prevenzione.',
                    lastCheckedAt: '2026-05-14'
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
            lastReviewedAt: '2026-05-14',
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
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Salute Mentale: guida ai servizi',
                    organization: 'AIRSAM',
                    url: 'https://www.airsam.it/',
                    type: 'nonprofit',
                    usedFor: 'Orientamento e diritti del paziente.',
                    lastCheckedAt: '2026-05-14'
                }
            ],
            checklist: [
                'Impegnativa del medico ottenuta',
                'Indirizzo del CPS trovato',
                'Primo colloquio prenotato',
                'Tessera sanitaria pronta',
                'Documentazione clinica precedente raccolta'
            ],
            relatedGlossaryTerms: ['Psichiatria', 'Psicoterapia', 'TSO (Trattamento Sanitario Obbligatorio)']
        }
    ]
};
