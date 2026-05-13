import { Module } from '@/types';

export const modulo_04b_sextortion_ricatti: Module = {
    id: 'modulo-04b-sextortion-ricatti',
    title: 'Modulo 4b: Sextortion (Protocolli Avanzati)',
    description: 'Analisi dei profili Catfish e realtà statistica sulla diffusione dei contenuti: dati per mantenere la calma.',
    category: 'sextortion',
    difficulty: 'intermedia',
    icon: 'AlertCircle',
    themeColor: 'accent-red',
    lessons: [
        {
            id: 'catfishing-indicators',
            slug: 'catfishing-come-riconoscere-profili-falsi',
            title: 'Catfishing: Riconoscere le "Esche"',
            category: 'sextortion',
            audience: ['adults', 'minors', 'prevention'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Come capire se la persona con cui stai parlando è reale o un profilo creato apposta per ricattarti.',
            status: 'published',
            emergencyLevel: 'low',
            scenario: 'Inizi una conversazione con una persona bellissima su Instagram, Tinder o Facebook. Sembra molto interessata a te e il rapporto accelera in pochi giorni. Presto arrivano richieste di foto intime.',
            question: 'Perché questa persona non vuole mai fare una videochiamata?',
            whatIsHappening: 'Il Catfishing è la fase di preparazione della sextortion. L\'attaccante usa foto rubate da profili di modelle/i reali o generate dall\'IA per creare fiducia. Il rifiuto costante di mostrarsi in video è il segnale definitivo del rischio.',
            warningSigns: [
                'Il profilo ha poche foto e pochissime interazioni (commenti, tag) con amici reali.',
                'Si rifiuta categoricamente di fare videochiamate (scuse: "webcam rotta", "timidezza", "problemi di linea").',
                'Dichiarazioni d\'amore o interesse estremo dopo pochissimo tempo ("Love Bombing").',
                'Le foto sembrano "troppo perfette" o professionali.'
            ],
            doNow: [
                'Esegui una "Ricerca inversa delle immagini" su Google con la sua foto profilo.',
                'Chiedi una videochiamata breve per conferma: se rifiuta, interrompi ogni scambio di materiale sensibile.',
                'Non fornire mai dati reali (cognome, indirizzo, posto di lavoro) prima di aver verificato l\'identità.'
            ],
            dontDo: [
                'Non fidarti solo perché ha degli "amici in comune": i catfish spesso aggiungono persone a caso per sembrare veri.',
                'Non sentirti in colpa se rifiuti di inviare foto: chi ti mette pressione è un predatore.',
                'Non credere a storie tragiche usate per impietosirti.'
            ],
            preserveEvidence: [
                'Fai screenshot del profilo prima che sparisca.',
                'Salva lo username esatto.'
            ],
            askHelpWhen: [
                'Appena ricevi la prima minaccia dopo aver inviato del materiale.',
                'Se noti che la persona sa troppe cose su di te senza che tu gliele abbia dette.'
            ],
            whoCanHelp: [
                'Polizia Postale',
                'Esperti di OSINT (Open Source Intelligence)',
                'Amici o familiari di fiducia'
            ],
            checklist: [
                'Ricerca immagini',
                'Chiedi videochiamata',
                'Niente dati reali',
                'Diffida love-bombing'
            ],
            sources: [
                {
                    title: 'Identità Digitale e Catfishing',
                    organization: 'Commissariato di PS Online',
                    url: 'https://www.commissariatodips.it/approfondimenti/identita-digitale/index.html',
                    type: 'official',
                    usedFor: 'Indicatori di falsità dei profili e protocolli di verifica.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
