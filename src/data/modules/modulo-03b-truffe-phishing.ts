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
        }
    ]
};
