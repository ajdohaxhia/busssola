import { Module } from '@/types';

export const modulo_01_primo_soccorso: Module = {
    id: 'modulo-01-primo-soccorso',
    lastUpdated: '2024-05-13',
    title: 'Modulo 1: Primo Soccorso Digitale',
    description: 'Procedure rapide e verificate per gestire emergenze in corso: sextortion, furto account e smarrimento device.',
    category: 'diritti-digitali',
    difficulty: 'base',
    icon: 'ShieldAlert',
    themeColor: 'accent-red',
    lessons: [
        {
            id: 'emergency-intro',
            slug: 'emergenza-digitale-generale',
            title: 'Cosa fare se sei in emergenza (Generale)',
            category: 'diritti-digitali',
            audience: ['adults', 'minors', 'victims'],
            level: 'base',
            estimatedMinutes: 3,
            summary: 'Mantieni la calma e isola il danno. Se c\'è pericolo fisico immediato, contatta le forze dell\'ordine senza esitazione.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Hai appena scoperto un attacco in corso o una minaccia grave online. Il panico è il tuo peggior nemico e il miglior alleato dell\'attaccante.',
            question: 'Come posso fermare il danno immediato prima di agire legalmente?',
            whatIsHappening: 'In una crisi digitale, l\'attaccante usa la pressione temporale e psicologica per spingerti a fare errori (pagare, cancellare prove, rispondere impulsivamente). Isolare il dispositivo e mantenere la calma sono i primi passi tecnici fondamentali.',
            warningSigns: [
                'Richieste urgenti di denaro o favori.',
                'Minacce di diffusione contenuti privati o blocco account.',
                'Notifiche di accesso da luoghi sconosciuti.',
                'Messaggi strani inviati dal tuo profilo.'
            ],
            doNow: [
                'Se sospetti un malware, disconnetti il dispositivo dalla rete (Wi-Fi e Dati).',
                'Fai screenshot di ogni minaccia o prova prima che sparisca.',
                'Non rispondere a provocazioni o minacce.',
                'Se il pericolo riguarda l\'incolumità fisica, chiama il 112.'
            ],
            dontDo: [
                'Non pagare mai riscatti o "tasse di sblocco".',
                'Non cancellare le chat senza aver fatto screenshot.',
                'Non cercare di vendicarti con contro-hacking.',
                'Non isolarti: parlane con qualcuno di fiducia.'
            ],
            preserveEvidence: [
                'Cattura screenshot che includano l\'orario, lo username e il testo completo delle minacce.',
                'Salva gli URL dei profili degli attaccanti.',
                'Non modificare o tagliare gli screenshot.'
            ],
            askHelpWhen: [
                'Se subisci estorsioni o ricatti sessuali.',
                'Se noti movimenti bancari sospetti.',
                'Se la minaccia coinvolge minori.'
            ],
            whoCanHelp: [
                'Polizia Postale (Commissariato di PS Online)',
                'Numero Unico di Emergenza 112',
                'Adulto di fiducia o legale'
            ],
            checklist: [
                'Isola il dispositivo',
                'Salva le prove (Screenshot)',
                'Non pagare nulla',
                'Contatta le autorità se grave'
            ],
            sources: [
                {
                    title: 'Segnalazioni e Denunce Online',
                    organization: 'Polizia Postale',
                    url: 'https://www.commissariatodips.it/',
                    type: 'official',
                    usedFor: 'Procedure di segnalazione e canali ufficiali di contatto.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Sextortion: consigli della Polizia Postale',
                    organization: 'Polizia di Stato',
                    url: 'https://www.poliziadistato.it/articolo/116259074a38f3d640989052',
                    type: 'official',
                    usedFor: 'Indicazioni sul non pagamento e conservazione prove.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'sextortion-emergency',
            slug: 'sextortion-le-prime-due-ore',
            title: 'Sextortion: Le prime 2 ore',
            category: 'diritti-digitali',
            audience: ['adults', 'minors', 'victims'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Azioni critiche se qualcuno ti ricatta con immagini intime. Zero pagamenti, zero risposte, massima protezione delle prove.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Un profilo (spesso un "catfish") ti minaccia di inviare video o foto intime ai tuoi contatti se non paghi una somma di denaro subito.',
            question: 'Come posso impedire la diffusione delle foto e fermare il ricatto?',
            whatIsHappening: 'La sextortion è un reato basato sulla vergogna. I criminali sanno che pur di proteggere la tua reputazione saresti disposto a pagare, ma il pagamento alimenta solo nuove richieste e non garantisce la cancellazione del materiale.',
            warningSigns: [
                'Il ricattatore mostra liste dei tuoi amici o follower.',
                'Pressione estrema ("hai 10 minuti").',
                'Richiesta di pagamento via crypto, carte regalo o ricariche.',
                'Il ricattatore usa messaggi tradotti male o pre-impostati.'
            ],
            doNow: [
                'Interrompi ogni comunicazione immediatamente. Non rispondere a ulteriori minacce.',
                'Fai screenshot di: chat, profilo del ricattatore, prove dell\'invio del video.',
                'Segnala il contenuto su StopNCII.org per bloccarne la diffusione.',
                'Metti i tuoi profili social in modalità privata.'
            ],
            dontDo: [
                'NON PAGARE. Pagare conferma che sei una "vittima pagante" e chiederanno ancora di più.',
                'Non cancellare l\'account social senza aver salvato l\'URL e gli screenshot: sono prove legali.',
                'Non cercare di negoziare la cifra.',
                'Non scusarti col ricattatore: lui è il criminale.'
            ],
            preserveEvidence: [
                'Salva il link (URL) del profilo del ricattatore.',
                'Fai screenshot integrali delle minacce.',
                'Segnati l\'eventuale IBAN o indirizzo crypto fornito.'
            ],
            askHelpWhen: [
                'Sempre. La sextortion è un\'estorsione penale.',
                'Se sei minorenne, parlane subito con i genitori o chiama il 114.'
            ],
            whoCanHelp: [
                'Polizia Postale',
                'StopNCII.org (per blocco tecnico foto)',
                'Telefono Azzurro (114) se minore',
                'Garante Privacy (Revenge Porn)'
            ],
            checklist: [
                'Zero risposte',
                'Screenshot integrali',
                'StopNCII.org segnalazione',
                'Denuncia Polizia Postale'
            ],
            sources: [
                {
                    title: 'Guida contro la Sextortion',
                    organization: 'Commissariato di PS Online',
                    url: 'https://www.commissariatodips.it/approfondimenti/sextortion/index.html',
                    type: 'official',
                    usedFor: 'Protocollo di gestione ricatto e indicazioni sul non pagamento.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'StopNCII Resources',
                    organization: 'StopNCII.org',
                    url: 'https://stopncii.org/',
                    type: 'nonprofit',
                    usedFor: 'Strumento tecnologico per il blocco della diffusione di immagini intime.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'hacked-emergency',
            slug: 'account-hackerato-recupero-immediato',
            title: 'Account hackerato: Blocco immediato',
            category: 'diritti-digitali',
            audience: ['adults', 'minors', 'victims'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come reagire se hanno preso il controllo del tuo profilo. Segui solo i link ufficiali di recupero e diffida dai finti tecnici.',
            status: 'published',
            emergencyLevel: 'medium',
            scenario: 'Ricevi una mail di cambio password non richiesto o i tuoi amici ti dicono che stai pubblicando storie strane o chiedendo soldi.',
            question: 'Cosa devo fare se non riesco più ad entrare nel mio account?',
            whatIsHappening: 'Gli account vengono compromessi tramite phishing o furto di cookie di sessione. Una volta dentro, l\'hacker cambia mail e telefono di recupero per chiuderti fuori. Devi agire tramite i portali di "self-recovery" ufficiali delle piattaforme.',
            warningSigns: [
                'Mail da "security@mail.instagram.com" o simili che notifica un cambio mail.',
                'Ricezione di codici 2FA via SMS non richiesti.',
                'Sessioni attive da luoghi sconosciuti nelle impostazioni.'
            ],
            doNow: [
                'Controlla la mail: clicca su "Annulla modifica" se ricevi l\'avviso di cambio indirizzo.',
                'Visita il portale ufficiale: facebook.com/hacked o instagram.com/hacked.',
                'Avvisa i contatti stretti: "Account rubato, non aprite link da parte mia".',
                'Se l\'account è collegato a carte di credito, monitora i movimenti bancari.'
            ],
            dontDo: [
                'Non contattare finti "hacker di recupero" su Instagram/TikTok: sono truffatori secondari.',
                'Non cliccare su link di recupero inviati via SMS da numeri sconosciuti.',
                'Non pagare mai riscatti per riavere l\'account.'
            ],
            preserveEvidence: [
                'Salva la mail originale di cambio password.',
                'Segnati l\'IP e la città del login sospetto se indicato.'
            ],
            askHelpWhen: [
                'Se l\'hacker usa il tuo profilo per truffare i tuoi amici.',
                'Se l\'account contiene dati aziendali o finanziari critici.'
            ],
            whoCanHelp: [
                'Supporto Ufficiale Meta (facebook.com/hacked)',
                'Supporto Google Account',
                'Polizia Postale (se c\'è furto d\'identità o frode)'
            ],
            checklist: [
                'Controlla mail sicurezza',
                'Usa link recupero ufficiale',
                'Avvisa amici e contatti',
                'Attiva 2FA su altri account'
            ],
            sources: [
                {
                    title: 'Segnalazione Account Compromesso',
                    organization: 'Meta / Facebook',
                    url: 'https://www.facebook.com/hacked',
                    type: 'platform',
                    usedFor: 'Link ufficiale per il recupero account di gruppo Meta.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Cosa fare se il tuo account Instagram è stato hackerato',
                    organization: 'Instagram Help Center',
                    url: 'https://help.instagram.com/149494825257596',
                    type: 'platform',
                    usedFor: 'Procedure di verifica identità e ripristino password.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'lost-device',
            slug: 'smartphone-rubato-perso-cosa-fare',
            title: 'Device perso o rubato: Cosa fare in 10 minuti',
            category: 'diritti-digitali',
            audience: ['adults', 'minors', 'victims'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Azioni immediate per proteggere i tuoi dati e i tuoi soldi se non hai più il telefono con te. Blocco SIM, localizzazione e cancellazione remota.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Ti accorgi di non avere più lo smartphone. Potrebbe essere stato rubato o semplicemente perso, ma contiene i tuoi accessi bancari, le tue mail e le tue foto private.',
            question: 'Come posso impedire che un ladro entri nelle mie app bancarie o nei miei social?',
            whatIsHappening: 'Lo smartphone oggi è la chiave universale della nostra identità. Se cade in mani sbagliate, l\'accesso ai dati è il rischio maggiore. La priorità è impedire l\'uso della SIM (per i codici SMS) e bloccare l\'accesso al sistema operativo.',
            warningSigns: [
                'Il telefono non è dove dovrebbe essere.',
                'Ricevi notifiche di login o tentativi di recupero password via mail.',
                'Il dispositivo risulta "Offline" quando provi a chiamarlo.'
            ],
            doNow: [
                'Usa un altro dispositivo per localizzarlo: icloud.com/find (Apple) o google.com/android/find (Android).',
                'Attiva la "Modalità Smarrito" per bloccare lo schermo con un messaggio.',
                'Chiama il tuo operatore telefonico e chiedi il blocco immediato della SIM.',
                'Se il recupero è impossibile, avvia il "Ripristino dati di fabbrica remoto" (Wipe) per cancellare tutto.'
            ],
            dontDo: [
                'Non cercare di affrontare il ladro da solo se il GPS ti indica una posizione: avvisa sempre le forze dell\'ordine.',
                'Non aspettare "fino a domani" per bloccare la SIM: i primi 30 minuti sono critici.',
                'Non dimenticare di denunciare il furto per ottenere il blocco del codice IMEI.'
            ],
            preserveEvidence: [
                'Recupera il codice IMEI (dalla scatola o dalla fattura).',
                'Segnati l\'ultima posizione nota indicata dal GPS.'
            ],
            askHelpWhen: [
                'Sempre in caso di furto (Polizia/Carabinieri).',
                'Se noti accessi ai tuoi conti bancari subito dopo il furto.'
            ],
            whoCanHelp: [
                'Polizia di Stato / Carabinieri (per la denuncia)',
                'Operatore Telefonico (per blocco SIM)',
                'Supporto Apple/Google (per localizzazione)'
            ],
            checklist: [
                'Localizzazione GPS',
                'Blocco SIM operatore',
                'Wipe dati remoto',
                'Denuncia con IMEI'
            ],
            sources: [
                {
                    title: 'Trova il tuo dispositivo Android',
                    organization: 'Google',
                    url: 'https://myaccount.google.com/find-your-phone',
                    type: 'platform',
                    usedFor: 'Link ufficiale per la localizzazione e cancellazione remota Android.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Dov\'è il mio iPhone',
                    organization: 'Apple',
                    url: 'https://www.icloud.com/find',
                    type: 'platform',
                    usedFor: 'Link ufficiale per la localizzazione e blocco dispositivi Apple.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'whatsapp-stolen-sos',
            slug: 'whatsapp-rubato-recupero-immediato',
            title: 'WhatsApp rubato: Recupero immediato',
            category: 'diritti-digitali',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Se qualcuno ha preso il controllo del tuo WhatsApp tramite il codice a 6 cifre, ecco come riprenderlo subito.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Un amico ti scrive su WhatsApp chiedendoti di inviargli un codice ricevuto via SMS per errore. Poco dopo averlo inviato, il tuo WhatsApp smette di funzionare e compare il messaggio: "Il tuo numero non è più registrato su questo telefono".',
            question: 'Come posso espellere l\'hacker dal mio WhatsApp?',
            whatIsHappening: 'Sei vittima di una truffa di ingegneria sociale. L\'attaccante ha registrato il tuo numero sul suo telefono e ha usato il codice che gli hai dato per attivarlo. WhatsApp permette solo un\'istanza attiva per numero.',
            warningSigns: [
                'Ricezione di un codice di verifica WhatsApp via SMS che non hai richiesto.',
                'Un contatto conoscente ti chiede codici numerici via chat.',
                'Messaggio di sistema che dice che l\'account è registrato su un altro dispositivo.'
            ],
            doNow: [
                'Accedi nuovamente a WhatsApp inserendo il tuo numero di telefono.',
                'Verifica il numero inserendo il codice a 6 cifre che riceverai via SMS: questo disconnetterà automaticamente l\'hacker.',
                'Se l\'hacker ha attivato la "Verifica in due passaggi" e non conosci il PIN, dovrai attendere 7 giorni per accedere senza PIN, ma l\'hacker verrà comunque espulso subito.',
                'Avvisa i tuoi contatti (SMS, chiamate, altri social) che il tuo account è stato rubato e di non inviare soldi o dati.'
            ],
            dontDo: [
                'Non cancellare l\'app sperando che si risolva: devi rifare la procedura di login.',
                'Non ignorare l\'accaduto: l\'hacker sta scrivendo ai tuoi contatti fingendosi te per rubare altri account.'
            ],
            preserveEvidence: [
                'Fai uno screenshot dell\'SMS con il codice di verifica.',
                'Fai screenshot della conversazione con il "contatto" che ti ha chiesto il codice.'
            ],
            askHelpWhen: [
                'Se non riesci a ricevere l\'SMS di verifica dopo diversi tentativi.',
                'Se ricevi minacce di estorsione dopo il furto.'
            ],
            whoCanHelp: [
                'Supporto WhatsApp (in-app o mail support@whatsapp.com)',
                'Polizia Postale (commissariatodips.it)',
                'Amici/Parenti (per avvisare i contatti)'
            ],
            checklist: [
                'Login immediato',
                'Inserisci codice SMS',
                'Avvisa contatti',
                'Attiva 2FA dopo il recupero'
            ],
            sources: [
                {
                    title: 'Account rubati: Informazioni per la sicurezza',
                    organization: 'WhatsApp Help Center',
                    url: 'https://faq.whatsapp.com/1131893526728311',
                    type: 'platform',
                    usedFor: 'Procedura ufficiale di ri-registrazione del numero.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'instagram-stolen-sos',
            slug: 'instagram-rubato-hackerato-cosa-fare',
            title: 'Instagram rubato: Procedura di recupero',
            category: 'diritti-digitali',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 7,
            summary: 'Se non riesci più ad accedere a Instagram e la tua mail è stata cambiata, segui questo protocollo.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Provi ad entrare su Instagram ma la password non funziona. Controlli la mail e trovi un avviso: "L\'indirizzo email associato al tuo account è stato modificato". Non sei stato tu.',
            question: 'Cosa posso fare se l\'hacker ha già cambiato la mia email di recupero?',
            whatIsHappening: 'Un attaccante ha ottenuto le tue credenziali (spesso tramite phishing o data breach) e ha rimosso i tuoi contatti per impedirti il recupero semplice.',
            warningSigns: [
                'Email da security@mail.instagram.com che avvisa del cambio email.',
                'Notifiche di accesso da dispositivi o città sconosciute.',
                'I tuoi amici segnalano che il tuo profilo sta pubblicando storie su criptovalute o investimenti.'
            ],
            doNow: [
                'Cerca nella tua mail il messaggio di Instagram e clicca su "Proteggi il mio account" o "Annulla modifica" se disponibile.',
                'Dall\'app Instagram, inserisci il tuo username, clicca su "Password dimenticata?" -> "Hai bisogno di ulteriore assistenza?".',
                'Segui la procedura di verifica identità: Instagram potrebbe chiederti un "Video Selfie" per confrontarlo con le tue foto.',
                'Segnala l\'account hackerato tramite il portale dedicato instagram.com/hacked.'
            ],
            dontDo: [
                'Non pagare mai riscatti richiesti in chat o via mail per riavere l\'account.',
                'Non affidarti a profili che promettono "servizi di recupero hacker" a pagamento: sono quasi sempre altre truffe.'
            ],
            preserveEvidence: [
                'Screenshot della mail di notifica cambio indirizzo.',
                'Screenshot del profilo che pubblica contenuti estranei.'
            ],
            askHelpWhen: [
                'Se il sistema di Video Selfie fallisce ripetutamente.',
                'Se l\'hacker inizia a ricattarti con foto private presenti nei DM.'
            ],
            whoCanHelp: [
                'Meta Safety Center / Instagram Support',
                'Polizia Postale',
                'Esperti di sicurezza digitale certificati'
            ],
            checklist: [
                'Controlla mail sicurezza',
                'Annulla cambio email',
                'Video Selfie verifica',
                'Segnala a instagram.com/hacked'
            ],
            sources: [
                {
                    title: 'Cosa fare se il tuo account Instagram è stato hackerato',
                    organization: 'Instagram Help Center',
                    url: 'https://help.instagram.com/149494825257596',
                    type: 'platform',
                    usedFor: 'Protocollo ufficiale di recupero e video-verifica.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'facebook-recovery-sos',
            slug: 'sos-facebook-hackerato-recupero-account',
            title: 'SOS Facebook hackerato',
            category: 'diritti-digitali',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Procedura d\'emergenza per recuperare un account Facebook quando l\'hacker ha cambiato la tua password.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Non riesci più a entrare su Facebook. I tuoi amici ti dicono che il tuo profilo sta pubblicando truffe o messaggi strani. Temi per la tua privacy e per le pagine aziendali collegate.',
            question: 'Cosa fare se l\'hacker ha cambiato l\'email di recupero?',
            whatIsHappening: 'Facebook ha un portale dedicato ai casi di hacking che permette di bypassare i normali sistemi di login se dimostri di essere il proprietario originale del profilo.',
            warningSigns: [
                'Password non più funzionante.',
                'Email da Facebook che notifica il cambio di indirizzo email dell\'account.',
                'Post o messaggi inviati dal tuo profilo che non hai scritto tu.'
            ],
            doNow: [
                'Vai subito su facebook.com/hacked.',
                'Seleziona "Il mio account è compromesso" e segui le istruzioni.',
                'Se l\'email è stata cambiata, usa l\'opzione "Non ho più accesso a questi indirizzi" per caricare un documento d\'identità.',
                'Avvisa i tuoi amici (tramite altri canali) di non cliccare su nessun link inviato dal tuo profilo Facebook.'
            ],
            dontDo: [
                'Non creare un nuovo profilo subito: confonderesti i sistemi di assistenza di Meta.',
                'Non pagare "esperti di hacking" su Instagram o Telegram che promettono di recuperare l\'account: sono truffatori.'
            ],
            preserveEvidence: [
                'Fai screenshot della mail di notifica del cambio dati ricevuta da Facebook.'
            ],
            askHelpWhen: [
                'Immediatamente. Più tempo passa, più è difficile dimostrare la titolarità.'
            ],
            whoCanHelp: [
                'Centro Assistenza Meta',
                'Polizia Postale (per denuncia furto d\'identità)'
            ],
            checklist: [
                'Facebook.com/hacked',
                'Verifica identità',
                'Avvisa amici',
                'Cambia pass mail'
            ],
            sources: [
                {
                    title: 'Segnala un account compromesso',
                    organization: 'Facebook Help Center',
                    url: 'https://www.facebook.com/hacked',
                    type: 'official',
                    usedFor: 'Procedura ufficiale di emergenza per account violati.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'tiktok-recovery-sos',
            slug: 'sos-tiktok-hackerato-recupero-account',
            title: 'SOS TikTok hackerato',
            category: 'diritti-digitali',
            audience: ['minors', 'adults'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Se il tuo account TikTok è stato violato, segui questi passaggi per riprenderne il controllo e proteggere i tuoi follower.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Il tuo account TikTok è improvvisamente inaccessibile. Vedi video che non hai caricato tu o commenti strani a tuo nome.',
            question: 'Come posso segnalare il furto se non ho un computer?',
            whatIsHappening: 'TikTok permette di segnalare l\'hacking direttamente dall\'app o tramite un modulo web specifico se sei stato chiuso fuori.',
            warningSigns: [
                'Notifiche di login da dispositivi sconosciuti.',
                'Modifiche al nickname o alla biografia che non hai fatto tu.',
                'Video cancellati o nuovi video caricati senza il tuo permesso.'
            ],
            doNow: [
                'Nella schermata di login, tocca il "?" in alto a destra e seleziona "Account violato".',
                'Se non hai accesso all\'app, usa il modulo di feedback ufficiale: tiktok.com/legal/report/feedback.',
                'Cambia subito la password dell\'email collegata a TikTok.',
                'Se rientri, vai in "Sicurezza > I tuoi dispositivi" e rimuovi quelli sospetti.'
            ],
            dontDo: [
                'Non rispondere a messaggi che chiedono il tuo codice 2FA "per aiutarti": è l\'hacker che cerca di bloccarti fuori per sempre.',
                'Non cancellare l\'account: se lo cancelli perdi la possibilità di dimostrare che era tuo ai fini del recupero.'
            ],
            preserveEvidence: [
                'Screenshot dei video caricati abusivamente e del profilo modificato.'
            ],
            askHelpWhen: [
                'Se l\'account ha molti follower e viene usato per diffondere materiale illegale o truffe.'
            ],
            whoCanHelp: [
                'TikTok Safety Center',
                'Polizia Postale'
            ],
            checklist: [
                'App: Report problem',
                'Modulo feedback web',
                'Cambia pass email',
                'Logout sessioni'
            ],
            sources: [
                {
                    title: 'Account violato: Cosa fare',
                    organization: 'TikTok Help Center',
                    url: 'https://support.tiktok.com/it/safety-hc/account-and-user-safety/hacked-account',
                    type: 'official',
                    usedFor: 'Procedura di recupero e messa in sicurezza account.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
