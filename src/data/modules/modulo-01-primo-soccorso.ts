import { Module } from '@/types';

export const modulo_01_primo_soccorso: Module = {
    id: 'modulo-01-primo-soccorso',
    title: 'Modulo 1: Primo Soccorso Digitale',
    description: 'Procedure rapide e verificate per gestire emergenze in corso: sextortion, furto account e smarrimento device.',
    category: 'first-aid',
    difficulty: 'base',
    icon: 'ShieldAlert',
    themeColor: 'accent-red',
    lessons: [
        {
            id: 'emergency-intro',
            slug: 'emergenza-digitale-generale',
            title: 'Cosa fare se sei in emergenza (Generale)',
            category: 'first-aid',
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
            category: 'first-aid',
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
            category: 'first-aid',
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
            category: 'first-aid',
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
        }
    ]
};
