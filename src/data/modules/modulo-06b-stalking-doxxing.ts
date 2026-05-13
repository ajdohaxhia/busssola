import { Module } from '@/types';

export const modulo_06b_stalking_doxxing: Module = {
    id: 'modulo-06b-stalking-doxxing',
    title: 'Modulo 6b: Cyberstalking (Tutele legali e Spyware)',
    description: 'Procedure per fermare lo stalking tramite l\'ammonimento del Questore e come rilevare software spia sul telefono.',
    category: 'stalking',
    difficulty: 'intermedia',
    icon: 'Eye',
    themeColor: 'accent-orange',
    lessons: [
        {
            id: 'cyberstalking-legal-steps',
            slug: 'ammonimento-del-questore-come-funziona-stalking',
            title: 'L\'ammonimento del Questore',
            category: 'stalking',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Uno strumento rapido per far cessare le molestie senza avviare subito un processo penale.',
            status: 'published',
            emergencyLevel: 'medium',
            scenario: 'Sei vittima di molestie insistenti (messaggi, chiamate, appostamenti digitali) da parte di un ex partner o uno sconosciuto. Vuoi che smetta subito ma hai paura di sporgere una denuncia penale formale che durerebbe anni.',
            question: 'Esiste un modo per far intervenire la Polizia senza un avvocato?',
            whatIsHappening: 'L\'ammonimento è una misura amministrativa preventiva. La vittima espone i fatti al Questore, il quale convoca lo stalker e lo "ammonisce" formalmente a smettere. Se lo stalker continua dopo l\'ammonimento, la Polizia procede d\'ufficio e le pene sono molto più severe. Non serve un avvocato per richiederlo.',
            warningSigns: [
                'Ricezione costante di messaggi indesiderati nonostante il blocco.',
                'Creazione di profili falsi per continuare a seguirti o commentare i tuoi post.',
                'Tentativi di accesso ai tuoi account o dispositivi.',
                'Diffusione di commenti offensivi o dati privati su di te online.'
            ],
            doNow: [
                'Raccogli tutte le prove (screenshot, registrazioni, email) in ordine cronologico.',
                'Recati presso una Questura o un Comando dei Carabinieri.',
                'Chiedi di parlare con l\'ufficio che si occupa di "Atti Persecutori" per presentare un\'istanza di ammonimento.',
                'Non bloccare lo stalker prima di aver salvato le prove, ma non rispondere mai ai suoi messaggi.'
            ],
            dontDo: [
                'Non cancellare i messaggi: sono la tua prova principale.',
                'Non cercare di "ragionare" con lo stalker: ogni contatto alimenta l\'ossessione.',
                'Non sottovalutare i segnali: lo stalking digitale spesso precede quello fisico.'
            ],
            preserveEvidence: [
                'Screenshot completi (che mostrino mittente, data, ora e contenuto).',
                'Salva gli URL dei profili falsi creati dallo stalker.',
                'Segna in un diario date e orari di ogni episodio.'
            ],
            askHelpWhen: [
                'Sempre. Prima intervieni, più è efficace l\'ammonimento.',
                'Se lo stalker dimostra di conoscere la tua posizione geografica in tempo reale.'
            ],
            whoCanHelp: [
                'Questore (Polizia di Stato)',
                'Centri Antiviolenza (Numero 1522)',
                'Forze dell\'ordine (Carabinieri)'
            ],
            checklist: [
                'Raccogli prove',
                'Vai in Questura',
                'Istanza ammonimento',
                'Contatta 1522'
            ],
            sources: [
                {
                    title: 'Ammonimento del Questore per Stalking',
                    organization: 'Polizia di Stato',
                    url: 'https://www.poliziadistato.it/articolo/3358356828v1',
                    type: 'official',
                    usedFor: 'Descrizione della procedura e base normativa.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
