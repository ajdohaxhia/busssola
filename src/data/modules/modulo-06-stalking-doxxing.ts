import { Module } from '@/types';

export const modulo_06_stalking_doxxing: Module = {
    id: 'modulo-06-stalking-doxxing',
    title: 'Modulo 6: Cyberstalking e Doxxing',
    description: 'Difenditi dalle persecuzioni online e dalla diffusione illecita dei tuoi dati personali con le procedure legali di ammonimento e reclamo al Garante.',
    category: 'stalking',
    difficulty: 'intermedia',
    icon: 'Eye',
    themeColor: 'accent-purple',
    lessons: [
        {
            id: 'cyberstalking-logic',
            slug: 'cyberstalking-assedio-digitale',
            title: 'Cyberstalking: L\'assedio digitale',
            category: 'stalking',
            audience: ['adults', 'minors', 'victims'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come riconoscere quando le attenzioni online diventano reato di atti persecutori (Art. 612-bis c.p.).',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Un ex partner, un conoscente o uno sconosciuto ti tempesta di messaggi su ogni piattaforma, crea profili falsi per spiarti, contatta i tuoi amici o pubblica post offensivi su di te in modo ossessivo.',
            question: 'Quando un comportamento online diventa "stalking" per la legge?',
            whatIsHappening: 'Il cyberstalking non è solo fastidioso: è un reato se provoca un perdurante stato di ansia, paura per la propria incolumità o ti costringe a cambiare le tue abitudini (es. smettere di usare i social o cambiare numero). Lo stalker cerca il controllo totale sulla tua vita digitale ed emotiva.',
            warningSigns: [
                'Ricezione di decine di messaggi o chiamate al giorno da numeri diversi.',
                'Commenti ossessivi o minacciosi su ogni tuo post.',
                'Creazione di account "fake" che imitano il tuo o che ti seguono ovunque.',
                'Lo stalker dimostra di sapere dove sei o cosa stai facendo in tempo reale.'
            ],
            doNow: [
                'INTERROMPI OGNI RISPOSTA. Anche rispondere "lasciami in pace" dà allo stalker l\'attenzione che cerca.',
                'Fai screenshot di ogni singolo messaggio, commento o profilo (con data e ora visibili).',
                'Blocca l\'utente, ma solo dopo aver salvato le prove.',
                'Avvisa le persone vicine della situazione affinché non forniscano informazioni su di te.'
            ],
            dontDo: [
                'Non cercare di "ragionare" con lo stalker: la sua logica è ossessiva, non razionale.',
                'Non pubblicare post di sfida o insulti rivolti a lui.',
                'Non cancellare il tuo account prima di aver esportato le chat (molti social permettono il download dei dati).',
                'Non sottovalutare le minacce: il cyberstalking può degenerare in violenza fisica.'
            ],
            preserveEvidence: [
                'Screenshot integrali (non ritagliati) di tutte le comunicazioni.',
                'URL dei profili social del persecutore.',
                'Registri delle chiamate e log dei messaggi.',
                'Copia di eventuali mail ricevute (non cancellarle).'
            ],
            askHelpWhen: [
                'Se senti ansia costante o hai paura di uscire di casa.',
                'Se lo stalker minaccia la tua incolumità o quella dei tuoi cari.',
                'Se il comportamento persiste nonostante i blocchi tecnici.'
            ],
            whoCanHelp: [
                'Polizia Postale (commissariatodips.it)',
                'Numero Nazionale Antiviolenza e Stalking 1522',
                'Centri Antiviolenza locali',
                'Il Questore (per la richiesta di Ammonimento)'
            ],
            checklist: [
                'Zero risposte',
                'Salva screenshot',
                'Blocca profili',
                'Chiama il 1522'
            ],
            sources: [
                {
                    title: 'Cyberstalking e Atti Persecutori',
                    organization: 'Polizia di Stato',
                    url: 'https://www.commissariatodips.it/approfondimenti/cyberstalking/index.html',
                    type: 'official',
                    usedFor: 'Definizione del reato e consigli pratici di autodifesa.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Numero 1522: Supporto Stalking',
                    organization: 'Dipartimento Pari Opportunità',
                    url: 'https://www.1522.eu/',
                    type: 'institutional',
                    usedFor: 'Canale di supporto psicologico e orientamento legale.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
