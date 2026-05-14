import { Module } from '@/types';

export const modulo_04b_sextortion_ricatti: Module = {
    id: 'modulo-04b-sextortion-ricatti',
    lastUpdated: '2024-05-13',
    title: 'Modulo 4b: Sextortion (Protocolli Avanzati)',
    description: 'Analisi dei profili Catfish e realtà statistica sulla diffusione dei contenuti: dati per mantenere la calma.',
    category: 'emergenze',
    difficulty: 'intermedia',
    icon: 'AlertCircle',
    themeColor: 'accent-red',
    lessons: [
        {
            id: 'catfishing-indicators',
            slug: 'catfishing-come-riconoscere-profili-falsi',
            title: 'Catfishing: Riconoscere le "Esche"',
            mainEntity: 'AgID',
            category: 'emergenze',
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
            steps: [
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
                    lastCheckedAt: '2026-05-14'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'preserving-digital-evidence',
            slug: 'come-salvare-prove-digitali-valore-legale',
            title: 'Come salvare prove con valore legale',
            mainEntity: 'AgID',
            category: 'emergenze',
            audience: ['victims', 'adults'],
            level: 'medio',
            estimatedMinutes: 8,
            summary: 'Gli screenshot a volte non bastano. Impara le tecniche corrette per conservare chat e file affinché siano validi in tribunale.',
            status: 'published',
            emergencyLevel: 'medium',
            scenario: 'Sei vittima di stalking o ricatto. Vuoi denunciare, ma hai paura che il colpevole cancelli i messaggi (come con la funzione "Elimina per tutti" di WhatsApp) o che gli screenshot vengano contestati perché "facili da falsificare".',
            question: 'Cosa serve alla Polizia oltre ai semplici screenshot?',
            whatIsHappening: 'In un processo, la controparte può sostenere che uno screenshot sia stato manipolato con Photoshop. Per avere prove "forti", occorre conservare i dati in modo da garantirne l\'integrità (copia forense o esportazione certificata).',
            warningSigns: [
                'L\'interlocutore inizia a cancellare messaggi dopo averti minacciato.',
                'Usi app che prevedono messaggi a scomparsa (Snapchat, segrete di Telegram).'
            ],
            doNow: [
                'Usa la funzione "Esporta Chat" di WhatsApp (senza allegati o con allegati a seconda della dimensione) e inviatela via mail.',
                'Non cancellare mai la conversazione originale dal telefono: il dispositivo stesso è la prova principale.',
                'Fai video-registrazioni dello schermo mentre scorri la chat, mostrando chiaramente il numero di telefono del mittente e le date.',
                'Se il contenuto è su una pagina web, usa servizi di "Web Snapshot" certificati o salva la pagina completa (file .html) sul PC.'
            ],
            steps: [
                'Usa la funzione "Esporta Chat" di WhatsApp (senza allegati o con allegati a seconda della dimensione) e inviatela via mail.',
                'Non cancellare mai la conversazione originale dal telefono: il dispositivo stesso è la prova principale.',
                'Fai video-registrazioni dello schermo mentre scorri la chat, mostrando chiaramente il numero di telefono del mittente e le date.',
                'Se il contenuto è su una pagina web, usa servizi di "Web Snapshot" certificati o salva la pagina completa (file .html) sul PC.'
            ],
            dontDo: [
                'Non modificare i file salvati (non rinominarli, non cambiare le date).',
                'Non cancellare l\'account social coinvolto senza aver prima fatto un backup completo dei dati (Google Takeout / Meta Download Information).'
            ],
            preserveEvidence: [
                'Copia integrale dei log di sistema, se possibile.',
                'ID univoci dei profili social (non solo il nome visualizzato, che può cambiare).'
            ],
            askHelpWhen: [
                'Se il reato è molto grave (abusi, grandi truffe finanziarie) e serve una perizia informatica forense professionale.'
            ],
            whoCanHelp: [
                'Consulenti Tecnici di Parte (CTP) informatici',
                'Polizia Postale (Ufficio Analisi Forense)',
                'Avvocati specializzati in reati informatici'
            ],
            checklist: [
                'Esporta chat subito',
                'Non cancellare device',
                'Video-registra schermo',
                'Salva ID profili'
            ],
            sources: [
                {
                    title: 'Raccogliere prove online: consigli pratici',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/temi/cyberbullismo',
                    type: 'official',
                    usedFor: 'Indicazioni sulla conservazione dei contenuti lesivi per scopi probatori.',
                    lastCheckedAt: '2026-05-14'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
