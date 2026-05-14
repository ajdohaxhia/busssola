import { Module } from '@/types';

export const modulo_01_primo_soccorso: Module = {
    id: 'modulo-01-primo-soccorso',
    lastUpdated: '2026-05-14',
    title: 'Primo Soccorso Digitale',
    description: 'Protocolli di emergenza per reagire immediatamente a furti di account, ricatti e smarrimento dispositivi.',
    category: 'emergenze',
    difficulty: 'base',
    icon: 'ShieldAlert',
    themeColor: 'accent-red',
    lessons: [
        {
            id: 'account-hacked-10min',
            slug: 'cosa-fare-primi-10-minuti-account-rubato',
            title: 'Account rubato: primi 10 minuti',
            mainEntity: 'Polizia Postale',
            category: 'emergenze',
            audience: ['adults', 'minors', 'victims'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Azioni immediate per tentare di recuperare il controllo di un account social o email appena sottratto.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: ['Sospetto o certezza di account hackerato'],
            whatToPrepare: ['Accesso alla mail di recupero', 'Documento d\'identità (per eventuale video-selfie)'],
            estimatedCosts: 'Gratis',
            timeToComplete: '10 minuti per le prime azioni',
            steps: [
                'Prova a cambiare la password immediatamente: se riesci ancora a entrare, espelli tutte le altre sessioni attive',
                'Usa i link ufficiali di recupero: instagram.com/hacked o facebook.com/hacked',
                'Controlla la tua email: cerca messaggi di "Cambio password" o "Cambio email" e clicca su "Non sono stato io"',
                'Avvisa i tuoi contatti tramite altri canali (WhatsApp, SMS): il ladro potrebbe chiedere soldi a tuo nome',
                'Se hai fornito codici OTP, blocca immediatamente anche i conti bancari associati allo stesso numero'
            ],
            officialLinksV2: [
                {
                    sourceId: 'commissariatoPs',
                    useWhen: 'Per segnalare il furto d\'identità digitale',
                    beforeOpening: ['Prepara il link al tuo profilo rubato']
                }
            ],
            commonErrors: [
                'Contattare finti "hacker di recupero" su Instagram o Telegram: sono altre truffe',
                'Aspettare il giorno dopo per agire: ogni minuto conta'
            ],
            dontDo: [
                'Non pagare mai riscatti per riavere l\'account'
            ],
            ifYouHaveProblems: [
                'Se non riesci a recuperarlo, fai denuncia formale alla Polizia Postale per evitare responsabilità su ciò che il ladro pubblicherà'
            ],
            checklist: [
                'Password cambiata (se possibile)',
                'Sessioni attive chiuse',
                'Amici avvisati',
                'Email sicura verificata'
            ],
            sources: [
                {
                    title: 'Recupero account compromesso',
                    organization: 'Polizia Postale',
                    url: 'https://www.commissariatodips.it/',
                    type: 'official',
                    usedFor: 'Protocollo di reazione',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'otp-shared-sos',
            slug: 'cosa-fare-se-hai-dato-codici-otp',
            title: 'Ho dato codici OTP a qualcuno',
            mainEntity: 'ACN / Polizia Postale',
            category: 'emergenze',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Se hai dettato o inviato un codice ricevuto via SMS a uno sconosciuto, sei in pericolo immediato. Ecco cosa fare.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            prerequisites: ['Aver condiviso un codice segreto (OTP)'],
            whatToPrepare: ['Numeri di emergenza banca', 'Documento d\'identità'],
            estimatedCosts: 'Gratis',
            timeToComplete: '5 minuti',
            steps: [
                'Se il codice era per la Banca: chiama subito il blocco conti/carte',
                'Se il codice era per WhatsApp/Social: prova a ri-autenticarti subito per espellere l\'intruso',
                'Se il codice era per lo SPID: contatta immediatamente il tuo Identity Provider e chiedi la sospensione',
                'Cambia la password della tua email principale',
                'Fai denuncia: fornire un OTP equivale a consegnare le chiavi di casa'
            ],
            officialLinksV2: [
                {
                    sourceId: 'psSegnalaOnline',
                    useWhen: 'Per segnalare l\'accaduto alle autorità',
                    beforeOpening: ['Segna l\'ora esatta in cui hai dato il codice']
                }
            ],
            commonErrors: [
                'Pensare che sia "solo un codice": l\'OTP è la tua firma digitale',
                'Riagganciare con la banca prima di aver ricevuto conferma del blocco'
            ],
            dontDo: [
                'Non fidarti se lo sconosciuto ti richiama dicendo che "era un errore"'
            ],
            ifYouHaveProblems: [
                'Se hanno già rubato soldi, la denuncia è indispensabile per tentare il rimborso'
            ],
            checklist: [
                'Banca bloccata',
                'Provider SPID contattato',
                'Social ri-verificato',
                'Denuncia pronta'
            ],
            sources: [
                {
                    title: 'Allerta Ingegneria Sociale',
                    organization: 'Agenzia per la Cybersicurezza Nazionale',
                    url: 'https://www.acn.gov.it/',
                    type: 'official',
                    usedFor: 'Definizione rischio',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        }
    ]
};
