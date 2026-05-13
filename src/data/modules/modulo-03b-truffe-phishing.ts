import { Module } from '@/types';

export const modulo_03b_truffe_phishing: Module = {
    id: 'modulo-03b-truffe-phishing',
    title: 'Modulo 3b: Casi Specifici di Truffa',
    description: 'Analisi profonda delle truffe più recenti su Vinted, Marketplace e piattaforme di annunci.',
    category: 'rischi',
    difficulty: 'intermedia',
    icon: 'Target',
    themeColor: 'accent-orange',
    lessons: [
        {
            id: 'vinted-wallet-scam',
            slug: 'truffa-vinted-finto-supporto-link-sms',
            title: 'Vinted: La truffa del "Finto Supporto"',
            category: 'rischi',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come riconoscere i finti messaggi di supporto Vinted che arrivano via SMS o WhatsApp per rubare la tua carta.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Hai appena messo in vendita un oggetto. Ricevi un SMS che sembra di Vinted: "Il tuo oggetto è stato acquistato! Clicca qui per ricevere i soldi sul tuo saldo". Il link ti porta a un sito identico a Vinted dove ti viene chiesto di inserire i dati della tua carta di credito e il saldo attuale.',
            question: 'Perché Vinted mi contatta via SMS se ho l\'App?',
            whatIsHappening: 'Vinted NON ti contatta mai via SMS o WhatsApp per gestire i pagamenti. Tutte le transazioni avvengono esclusivamente all\'interno dell\'App, nella sezione "Saldo Vinted". I link esterni servono a rubare i tuoi dati tramite phishing.',
            warningSigns: [
                'Ricezione di SMS da mittenti generici o numeri privati riguardanti vendite Vinted.',
                'Il link inviato non è "vinted.it" ma varianti come "vinted-it-ordini.com".',
                'Ti viene chiesto di inserire il saldo della tua carta (serve ai truffatori per sapere quanto possono rubarti).',
                'L\'acquirente insiste per avere la tua mail o il tuo numero di telefono.'
            ],
            doNow: [
                'Chiudi immediatamente il link e non inserire alcun dato.',
                'Controlla lo stato dell\'ordine solo all\'interno dell\'App ufficiale di Vinted.',
                'Segnala l\'utente che ti ha contattato e bloccalo.',
                'Se hai già inserito i dati della carta, contatta subito la banca per il blocco.'
            ],
            dontDo: [
                'Non fornire mai la tua mail o il tuo numero di telefono nelle chat di Vinted.',
                'Non fidarti degli screenshot di "pagamento effettuato" inviati dagli acquirenti in chat.',
                'Non cliccare su link di "conferma ricezione fondi".'
            ],
            preserveEvidence: [
                'Screenshot dell\'SMS ricevuto e del numero del mittente.',
                'Screenshot della chat con l\'acquirente truffatore.'
            ],
            askHelpWhen: [
                'Se hai fornito i dati della carta o codici OTP.',
                'Se il tuo account Vinted è stato violato.'
            ],
            whoCanHelp: [
                'Assistenza Ufficiale Vinted (in-app)',
                'La tua Banca',
                'Polizia Postale'
            ],
            checklist: [
                'Solo pagamenti in-app',
                'No link via SMS',
                'No mail/telefono in chat',
                'Controlla URL sito'
            ],
            sources: [
                {
                    title: 'Sicurezza su Vinted: Evitare le truffe',
                    organization: 'Vinted Help Center',
                    url: 'https://www.vinted.it/help/615',
                    type: 'platform',
                    usedFor: 'Procedure ufficiali di vendita e avvisi sul phishing.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'smishing-fake-courier',
            slug: 'truffa-sms-finto-corriere-pacco-giacenza',
            title: 'Finto Corriere: SMS e pacchi in giacenza',
            category: 'phishing',
            audience: ['adults', 'parents'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Uno dei tentativi di phishing più comuni: un SMS che ti avvisa di un pacco bloccato o di costi di spedizione da pagare.',
            status: 'published',
            emergencyLevel: 'medium',
            scenario: 'Ricevi un SMS: "Il tuo pacco è stato trattenuto nel nostro centro di spedizione. Per sbloccarlo, paga 1.99€ cliccando qui: bit.ly/pacco-info". Spesso il mittente appare come "POSTE", "SDA" o "DHL".',
            question: 'Come capisco se è un messaggio vero della spedizione?',
            whatIsHappening: 'Si tratta di "Smishing" (SMS Phishing). L\'obiettivo è farti inserire i dati della tua carta di credito su un sito falso per rubarli, oppure farti scaricare un malware (specialmente su Android) che ruba le tue password bancarie.',
            warningSigns: [
                'Uso di link accorciati (bit.ly, t.co) o URL che non terminano con i domini ufficiali (es: .com invece di .it).',
                'Il messaggio mette fretta ("Azione richiesta entro 2 ore").',
                'Richiesta di pagamenti minimi (pochi euro) per sbloccare la consegna.',
                'Il messaggio arriva anche se non stai aspettando alcun pacco.'
            ],
            doNow: [
                'Non cliccare sul link.',
                'Se stai aspettando un pacco, vai sul sito ufficiale del venditore o del corriere e inserisci il codice di tracciamento (tracking) a mano.',
                'Blocca il numero mittente (anche se spesso sono numeri "spoofati" o generati automaticamente).',
                'Se hai già cliccato e inserito dati della carta, segui il protocollo "Dati carta compromessi".'
            ],
            dontDo: [
                'Non scaricare mai app proposte dal link dell\'SMS: contengono virus che leggono i tuoi messaggi e rubano codici bancari.',
                'Non rispondere all\'SMS.'
            ],
            preserveEvidence: [
                'Fai uno screenshot dell\'SMS che mostri chiaramente il testo e il mittente.'
            ],
            askHelpWhen: [
                'Se dopo aver cliccato il tuo telefono inizia a comportarsi in modo strano (batteria che scende subito, app che si aprono da sole).',
                'Se hai fornito dati personali o bancari.'
            ],
            whoCanHelp: [
                'Polizia Postale',
                'Supporto Clienti Poste/Corriere ufficiale',
                'Tecnico informatico (se hai scaricato app sospette)'
            ],
            checklist: [
                'Non cliccare link',
                'Verifica su sito ufficiale',
                'Elimina SMS',
                'Controlla tracking manuale'
            ],
            sources: [
                {
                    title: 'Smishing: Attenzione al finto SMS del corriere',
                    organization: 'Polizia di Stato',
                    url: 'https://www.commissariatodips.it/notizie/articolo/smishing-attenzione-al-finto-sms-del-corriere/index.html',
                    type: 'official',
                    usedFor: 'Riconoscimento delle campagne di smishing e prevenzione.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'marketplace-buyer-protection',
            slug: 'truffa-marketplace-acquisto-non-ricevuto',
            title: 'Truffa Marketplace: Lato Acquirente',
            category: 'scams',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Cosa fare se hai pagato per un oggetto su Vinted, eBay o Facebook e il venditore è sparito senza spedire.',
            status: 'published',
            emergencyLevel: 'medium',
            scenario: 'Hai trovato un affare incredibile per un iPhone o un capo firmato. Il venditore ti ha chiesto di pagare fuori dalla piattaforma (es: ricarica Postepay o "Amici e Parenti" su PayPal) per evitargli le commissioni. Dopo il pagamento, il suo profilo scompare o smette di rispondere.',
            question: 'Posso recuperare i soldi se ho pagato fuori dal sistema ufficiale?',
            whatIsHappening: 'Hai subito una truffa da marketplace. Uscendo dal sistema di pagamento ufficiale, hai rinunciato alla "Protezione Acquisti" della piattaforma. Recuperare i soldi in questi casi è molto difficile, ma la denuncia è fondamentale per fermare il truffatore.',
            warningSigns: [
                'Prezzo troppo basso rispetto al valore di mercato.',
                'Il venditore insiste per usare metodi di pagamento non tracciabili o "Amici e Parenti".',
                'Il profilo è nato da pochissimi giorni o ha recensioni che sembrano copiate.',
                'Ti invia foto di documenti (spesso rubati ad altre vittime) per "dimostrare" la sua identità.'
            ],
            doNow: [
                'Contatta subito l\'assistenza della piattaforma (Vinted, eBay, ecc.) per segnalare il profilo.',
                'Se hai pagato con PayPal (Acquisti), apri subito una contestazione.',
                'Se hai pagato con bonifico, contatta la tua banca per vedere se è possibile annullarlo (raro se sono passate più di 24h).',
                'Raccogli tutti i dati: screenshot della chat, numero di carta/IBAN del truffatore, link al profilo.'
            ],
            dontDo: [
                'Non continuare a inviare soldi se il truffatore ti contatta chiedendo "spese di spedizione extra" o "tasse doganali": è parte della truffa.',
                'Non insultare il truffatore: raccogli le prove e vai dalle autorità.'
            ],
            preserveEvidence: [
                'Tutta la chat integrale con il venditore.',
                'La ricevuta del pagamento effettuato.',
                'Link al profilo e all\'annuncio (se ancora visibili).'
            ],
            askHelpWhen: [
                'Appena ti rendi conto che il venditore è sparito o non fornisce un codice di tracciamento valido.'
            ],
            whoCanHelp: [
                'Centro Assistenza Vinted / eBay / Subito',
                'Polizia Postale',
                'Tua Banca (per blocco carte o segnalazione IBAN)'
            ],
            checklist: [
                'Segnala profilo',
                'Apri contestazione',
                'Salva screenshot chat',
                'Prepara denuncia'
            ],
            sources: [
                {
                    title: 'Comprare in sicurezza: Evitare le truffe',
                    organization: 'Vinted Help Center',
                    url: 'https://www.vinted.it/help/464',
                    type: 'platform',
                    usedFor: 'Regole per acquisti sicuri e protezione acquirente.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
