import { Module } from '@/types';

export const modulo_03_truffe_phishing: Module = {
    id: 'modulo-03-truffe-phishing',
    title: 'Modulo 3: Frodi, Truffe e Phishing',
    description: 'Riconosci le tecniche di manipolazione digitale e impara a proteggere i tuoi soldi e i tuoi dati da smishing, vishing e truffe marketplace.',
    category: 'rischi',
    difficulty: 'base',
    icon: 'Target',
    themeColor: 'accent-orange',
    lessons: [
        {
            id: 'phishing-basics',
            slug: 'phishing-come-riconoscerlo',
            title: 'Phishing: L\'amo via email',
            category: 'rischi',
            audience: ['adults', 'minors', 'prevention'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Le email che sembrano ufficiali ma rubano i tuoi dati. Impara a guardare oltre il logo della banca.',
            status: 'published',
            emergencyLevel: 'medium',
            scenario: 'Ricevi un\'email che sembra provenire dalla tua banca, dalle Poste o da Amazon. Ti avvisa di un "accesso non autorizzato" o di un "pacco bloccato" e ti chiede di cliccare su un link per verificare i tuoi dati.',
            question: 'Perché questa email sembra vera ma è pericolosa?',
            whatIsHappening: 'Il phishing sfrutta l\'urgenza e l\'autorità. Gli attaccanti copiano perfettamente la grafica di brand famosi per indurti a inserire le tue credenziali in un sito clone controllato da loro.',
            warningSigns: [
                'L\'indirizzo email del mittente è strano (es. "supporto@poste-italiane-verifica.com" invece di "poste.it").',
                'Presenza di errori grammaticali o toni eccessivamente allarmisti.',
                'Il link ti porta a un sito con un URL diverso da quello ufficiale.',
                'Ti viene chiesto di inserire dati sensibili (PIN, password) direttamente dopo un clic.'
            ],
            doNow: [
                'Non cliccare su alcun link nell\'email.',
                'Passa il mouse sopra il link (senza cliccare) per vedere l\'indirizzo reale in basso a sinistra nel browser.',
                'Se hai dubbi, accedi al servizio scrivendo l\'indirizzo ufficiale direttamente nella barra del browser.',
                'Segnala l\'email come spam o phishing.'
            ],
            dontDo: [
                'Non scaricare mai allegati (PDF, ZIP, HTML) da email sospette: possono contenere malware.',
                'Non rispondere all\'email per "chiedere spiegazioni".',
                'Non inserire mai i tuoi dati se il browser ti avvisa che il sito non è sicuro.'
            ],
            preserveEvidence: [
                'Non cancellare subito l\'email: potrebbe servire per analizzare l\'header (il percorso tecnico del messaggio).',
                'Fai uno screenshot del mittente e dell\'URL di destinazione del link.'
            ],
            askHelpWhen: [
                'Se hai già inserito i tuoi dati o scaricato l\'allegato.',
                'Se noti transazioni bancarie che non hai autorizzato.'
            ],
            whoCanHelp: [
                'La tua Banca (chiama il numero verde blocchi)',
                'CERT-AgID (per segnalare la campagna)',
                'Polizia Postale'
            ],
            checklist: [
                'Controlla mittente',
                'No clic su link',
                'Verifica URL reale',
                'Segnala come spam'
            ],
            sources: [
                {
                    title: 'Cos\'è il Phishing',
                    organization: 'CERT-AgID',
                    url: 'https://cert-agid.gov.it/notizie/cos-e-il-phishing/',
                    type: 'official',
                    usedFor: 'Definizione tecnica e segnali di riconoscimento del phishing.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Vademecum contro il Phishing',
                    organization: 'Polizia di Stato',
                    url: 'https://www.commissariatodips.it/consigli/per-la-tua-sicurezza/phishing/index.html',
                    type: 'official',
                    usedFor: 'Consigli pratici e procedure di protezione per i cittadini.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'smishing-vishing',
            slug: 'smishing-vishing-truffe-telefono',
            title: 'Smishing e Vishing: Truffe via SMS e Telefono',
            category: 'rischi',
            audience: ['adults', 'parents', 'victims'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'L\'attacco arriva sul tuo smartphone tramite un SMS urgente o una chiamata di un finto operatore bancario.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Ricevi un SMS che sembra della tua banca, inserito nella stessa conversazione dei messaggi veri. Poco dopo ti chiama un "operatore della sicurezza" che ti chiede di spostare i soldi su un "conto sicuro" perché sei sotto attacco.',
            question: 'Come può un truffatore chiamarmi col numero ufficiale della mia banca?',
            whatIsHappening: 'Si chiama "Spoofing". I criminali usano software per manipolare l\'ID chiamante o il mittente dell\'SMS. Non fidarti mai del nome che appare sul display: la banca non ti chiederà mai di fare bonifici o dare codici al telefono.',
            warningSigns: [
                'L\'SMS contiene un link e richiede un\'azione immediata.',
                'L\'operatore al telefono ti mette fretta o ti spaventa.',
                'Ti viene chiesto di leggere a voce un codice OTP ricevuto via SMS.',
                'Ti viene chiesto di fare un bonifico verso un IBAN "tecnico" o "di sicurezza".'
            ],
            doNow: [
                'Riaggancia immediatamente se ti chiedono dati o bonifici.',
                'Chiama tu la banca usando il numero che trovi dietro la tua carta di debito/credito.',
                'Blocca il numero che ti ha inviato l\'SMS sospetto.',
                'Non cliccare sui link negli SMS, anche se sembrano nella chat ufficiale.'
            ],
            dontDo: [
                'Non fidarti del display dello smartphone: può mentire.',
                'Non dare mai codici dispositivi a voce.',
                'Non autorizzare operazioni dalla tua App bancaria mentre sei al telefono con uno sconosciuto.'
            ],
            preserveEvidence: [
                'Segnati l\'orario della chiamata e il numero visualizzato.',
                'Fai screenshot dell\'SMS ricevuto.'
            ],
            askHelpWhen: [
                'Se hai fornito codici o hai effettuato il bonifico richiesto.',
                'Se l\'App della banca non ti permette più di accedere.'
            ],
            whoCanHelp: [
                'Servizio Clienti della tua Banca',
                'Polizia Postale',
                'Associazione consumatori (per recupero fondi)'
            ],
            checklist: [
                'Riaggancia subito',
                'Chiama tu la banca',
                'Zero codici a voce',
                'Blocca numero'
            ],
            sources: [
                {
                    title: 'Vishing e Smishing: Nuove frontiere della truffa',
                    organization: 'Polizia di Stato',
                    url: 'https://www.commissariatodips.it/notizie/articolo/vishing-e-smishing-le-nuove-frontiere-della-truffa/index.html',
                    type: 'official',
                    usedFor: 'Spiegazione dello spoofing telefonico e procedure di sicurezza.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Allerta Smishing Bancario',
                    organization: 'CERT-AgID',
                    url: 'https://cert-agid.gov.it/notizie/campagna-smishing-verso-clienti-istituti-bancari/',
                    type: 'official',
                    usedFor: 'Esempi reali di campagne di smishing in Italia.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'marketplace-safe-selling',
            slug: 'vendere-online-sicurezza-marketplace',
            title: 'Vendere online in sicurezza',
            category: 'rischi',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Anche i venditori vengono truffati. Scopri come evitare i finti acquirenti che cercano di rubare i tuoi dati o i tuoi soldi.',
            status: 'published',
            emergencyLevel: 'medium',
            scenario: 'Metti in vendita un oggetto su Vinted, Wallapop o Facebook Marketplace. Un acquirente ti contatta subito entusiasta, ma ti chiede di completare il pagamento tramite un link esterno o di andare a un ATM per "ricevere il bonifico".',
            question: 'È possibile che io debba inserire la mia carta per RICEVERE un pagamento?',
            whatIsHappening: 'ASSOLUTAMENTE NO. Questa è la "Truffa del Postamat" o dell\'ATM. I truffatori ti convincono che, inserendo la tua carta in un bancomat e seguendo le loro istruzioni, riceverai i soldi. In realtà, ti stanno facendo fare una ricarica sulla LORO carta. Similmente, i link esterni servono a rubare i dati della tua carta di credito.',
            warningSigns: [
                'L\'acquirente ha fretta e vuole spostare la conversazione su WhatsApp.',
                'Ti invia uno screenshot finto di un pagamento "bloccato" che richiede una tua azione.',
                'Ti chiede di andare a un bancomat per convalidare la transazione.',
                'Ti invia un link a un sito che imita perfettamente quello del corriere o del marketplace.'
            ],
            doNow: [
                'Interrompi la conversazione se ti chiedono di uscire dalla piattaforma ufficiale.',
                'Usa esclusivamente i sistemi di pagamento integrati nel marketplace (es. Sistema Vinted).',
                'Segnala il profilo dell\'acquirente alla piattaforma.',
                'Non fornire mai il tuo numero di telefono o la tua mail se non è strettamente necessario.'
            ],
            dontDo: [
                'Non andare mai a un bancomat seguendo istruzioni telefoniche di uno sconosciuto.',
                'Non cliccare su link di "conferma pagamento" ricevuti via email o SMS.',
                'Non spedire l\'oggetto finché il marketplace non ti conferma che il denaro è "in protezione".'
            ],
            preserveEvidence: [
                'Screenshot della chat e del profilo del truffatore.',
                'Il numero di telefono usato dal truffatore su WhatsApp.'
            ],
            askHelpWhen: [
                'Se hai già inserito i dati della tua carta in un link sospetto (blocca subito la carta).',
                'Se hai effettuato operazioni al bancomat sotto istruzione.'
            ],
            whoCanHelp: [
                'Polizia Postale',
                'Supporto Ufficiale Marketplace (Vinted, eBay, etc.)',
                'La tua Banca'
            ],
            checklist: [
                'Resta in-app',
                'No ATM/Bancomat',
                'No link esterni',
                'Segnala utente'
            ],
            sources: [
                {
                    title: 'Truffe nei Marketplace: Consigli della Polizia',
                    organization: 'Polizia di Stato',
                    url: 'https://www.commissariatodips.it/consigli/per-la-tua-sicurezza/acquisti-online/index.html',
                    type: 'official',
                    usedFor: 'Protocolli di sicurezza per vendite e acquisti tra privati.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'phishing-remediation',
            slug: 'ho-inserito-password-sito-falso-phishing',
            title: 'Ho inserito la password su un sito falso',
            category: 'phishing',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Se ti sei reso conto di aver inserito le tue credenziali su una pagina falsa, devi agire nei primi secondi per evitare il furto dell\'account.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Hai cliccato su un link in un SMS che sembrava provenire dalla tua banca o da Amazon. Hai inserito username e password. Solo dopo aver premuto "Invio", noti che l\'indirizzo del sito (URL) era strano (es: www.amazzon-sicuro.it invece di amazon.it).',
            question: 'Cosa devo fare se l\'hacker ha già la mia password?',
            whatIsHappening: 'L\'attaccante ha catturato le tue credenziali in tempo reale. Se non agisci subito, userà quelle credenziali per entrare nel tuo account vero, cambiare la mail di recupero e bloccarti fuori.',
            warningSigns: [
                'L\'URL del sito non corrisponde a quello ufficiale.',
                'Errori ortografici o grafica leggermente diversa dal solito.',
                'Il sito ti chiede dati insoliti (es: il PIN della carta per sbloccare l\'account).',
                'Dopo il login, il sito "si blocca" o ti rimanda alla homepage reale.'
            ],
            doNow: [
                'Vai immediatamente sul sito UFFICIALE (digitando l\'indirizzo a mano) e cambia la password.',
                'Se il sito supporta la funzione "Disconnetti tutti i dispositivi", usala subito.',
                'Verifica che le tue informazioni di recupero (telefono/mail) non siano state modificate.',
                'Se usi la stessa password su altri siti, cambiala anche lì immediatamente.',
                'Attiva la 2FA (Autenticazione a due fattori) se non era attiva.'
            ],
            dontDo: [
                'Non aspettare: gli hacker usano script automatici che entrano nel tuo account pochi secondi dopo che hai inserito i dati.',
                'Non usare link contenuti in mail di "conferma cambio password" sospette: vai sempre dal sito ufficiale.'
            ],
            preserveEvidence: [
                'Fai uno screenshot dell\'URL del sito falso prima di chiudere la pagina.',
                'Copia il link del sito falso per segnalarlo alle autorità.'
            ],
            askHelpWhen: [
                'Se provi a cambiare password e il sistema ti dice che le informazioni di recupero sono già state cambiate.',
                'Se il sito coinvolto è la tua banca: chiama subito il loro numero di emergenza.'
            ],
            whoCanHelp: [
                'Polizia Postale (commissariatodips.it)',
                'CERT-AgID (per segnalare il sito falso)',
                'Supporto ufficiale del servizio (Amazon, Microsoft, ecc.)'
            ],
            checklist: [
                'Cambio password immediato',
                'Logout sessioni attive',
                'Controllo info recupero',
                'Attiva 2FA'
            ],
            sources: [
                {
                    title: 'Phishing: Come riconoscerlo e difendersi',
                    organization: 'CERT-AgID',
                    url: 'https://cert-agid.gov.it/cittadini/phishing/',
                    type: 'official',
                    usedFor: 'Procedure di mitigazione post-attacco e segni distintivi delle esche.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'bank-card-breach',
            slug: 'ho-inserito-dati-carta-sito-falso',
            title: 'Ho inserito i dati della carta: Cosa fare',
            category: 'phishing',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Se hai fornito numero di carta, scadenza e CVV a un sito sospetto, la tua priorità è bloccare i movimenti finanziari.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Credevi di pagare una multa o una tassa (es: PagoPA falsa) o di sbloccare un pacco in giacenza. Hai inserito i dati della tua carta di credito o prepagata. Subito dopo ricevi un SMS per un\'autorizzazione di spesa che non riconosci.',
            question: 'Come posso fermare i ladri prima che svuotino il conto?',
            whatIsHappening: 'I dati della tua carta sono in mano a criminali che li useranno per acquisti online o per clonare la carta. Molti attacchi avvengono di notte o nel weekend per darti meno tempo di reagire.',
            warningSigns: [
                'Notifiche di transazioni (SMS/Push) per importi che non riconosci.',
                'Il sito di pagamento non usava protocolli sicuri (niente lucchetto o URL sospetto).',
                'Ti è stato chiesto il codice OTP ricevuto via SMS per "verificare la carta" invece che per un acquisto specifico.'
            ],
            doNow: [
                'Apri l\'app della tua banca e usa la funzione "Blocca Carta" o "Freeze" immediatamente.',
                'Chiama il numero verde per il blocco carte del tuo istituto (disponibile 24/7).',
                'Verifica l\'estratto conto e segnati le transazioni non autorizzate.',
                'Disconosci le transazioni tramite la procedura ufficiale della banca (chargeback).',
                'Sporgi denuncia presso la Polizia o i Carabinieri: è obbligatoria per molte banche per procedere al rimborso.'
            ],
            dontDo: [
                'Non aspettare il lunedì mattina se la banca è chiusa: i servizi di blocco sono sempre attivi.',
                'Non fidarti se ricevi una chiamata da qualcuno che dice di essere della tua banca e ti chiede altri codici per "annullare il furto": è un secondo attacco (vishing).'
            ],
            preserveEvidence: [
                'Screenshot della pagina dove hai inserito i dati.',
                'SMS o notifiche di transazioni sospette.',
                'Copia della denuncia presentata alle autorità.'
            ],
            askHelpWhen: [
                'Immediatamente. Non c\'è tempo da perdere quando si tratta di dati finanziari.'
            ],
            whoCanHelp: [
                'Tua Banca / Servizio Clienti Carta',
                'Polizia Postale',
                'Associazioni Consumatori (per supporto rimborsi)'
            ],
            checklist: [
                'Blocca carta da app',
                'Chiama numero blocco',
                'Disconosci transazioni',
                'Fai denuncia ufficiale'
            ],
            sources: [
                {
                    title: 'Frodi con carte di pagamento',
                    organization: 'Polizia di Stato',
                    url: 'https://www.commissariatodips.it/consigli/per-tutti/le-truffe-online/carte-di-pagamento/index.html',
                    type: 'official',
                    usedFor: 'Protocollo di blocco e denuncia in caso di compromissione dati bancari.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
