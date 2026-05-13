import { Module } from '@/types';

export const modulo_07_privacy_smartphone: Module = {
    id: 'modulo-07-privacy-smartphone',
    title: 'Modulo 7: Privacy e Smartphone',
    description: 'Gestisci i permessi delle applicazioni, proteggi i tuoi dati in mobilità e segui il protocollo di emergenza in caso di furto o smarrimento del dispositivo.',
    category: 'privacy',
    difficulty: 'base',
    icon: 'Smartphone',
    themeColor: 'accent-green',
    lessons: [
        {
            id: 'app-permissions-audit',
            slug: 'permessi-app-privacy-smartphone',
            title: 'Permessi App: Chi sta spiando?',
            category: 'privacy',
            audience: ['adults', 'minors', 'prevention'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Le app chiedono più dati di quelli che servono. Impara a fare un audit dei permessi per proteggere microfono, posizione e contatti.',
            status: 'published',
            emergencyLevel: 'low',
            scenario: 'Hai installato un\'app per il meteo o un gioco semplice, ma questa ti chiede l\'accesso alla tua rubrica, ai tuoi messaggi e alla tua posizione precisa 24 ore su 24.',
            question: 'Perché una calcolatrice dovrebbe accedere alle mie foto?',
            whatIsHappening: 'Molte app gratuite guadagnano rivendendo i tuoi dati a società di marketing. Richiedono permessi "eccessivi" rispetto alle loro funzioni reali. Limitare questi accessi non solo protegge la tua privacy, ma aumenta anche la durata della batteria e riduce il rischio di spyware.',
            warningSigns: [
                'L\'app chiede l\'accesso al microfono o alla fotocamera anche quando non è in uso.',
                'Ricevi pubblicità estremamente mirate basate su conversazioni private.',
                'Il telefono scalda molto o consuma batteria in modo anomalo (possibile app malevola in background).',
                'L\'app richiede di "accedere ai dati di altre app" o di "leggere le notifiche".'
            ],
            doNow: [
                'Vai nelle Impostazioni -> Privacy -> Gestione Permessi.',
                'Revoca l\'accesso a Microfono, Fotocamera e Posizione a tutte le app che non lo usano per una funzione specifica.',
                'Attiva l\'opzione "Rimuovi permessi se l\'app non viene utilizzata" (su Android) o "Consenti solo mentre usi l\'app" (su iOS).',
                'Disinstalla le app che non usi da più di 3 mesi.'
            ],
            dontDo: [
                'Non installare app (file .APK su Android) al di fuori degli store ufficiali (Google Play / App Store).',
                'Non accettare i termini di servizio senza aver controllato almeno la lista dei permessi richiesti.',
                'Non lasciare il Bluetooth o la Posizione sempre attivi se non ti servono.'
            ],
            preserveEvidence: [
                'Se trovi un\'app che ti spia, fai uno screenshot dei permessi che ha ottenuto prima di disinstallarla.',
                'Segnati il nome dell\'app e lo sviluppatore.'
            ],
            askHelpWhen: [
                'Se noti che i permessi che hai revocato si riattivano da soli (possibile segno di compromissione del sistema operativo).',
                'Se trovi app che non ricordi di aver installato.'
            ],
            whoCanHelp: [
                'Garante Privacy (Vademecum Smartphone)',
                'Supporto ufficiale Apple/Google',
                'Esperto di sicurezza digitale'
            ],
            checklist: [
                'Audit permessi mensile',
                'Solo store ufficiali',
                'Revoca microfono/GPS',
                'Elimina app inutili'
            ],
            sources: [
                {
                    title: 'Vademecum: Smartphone e Privacy',
                    organization: 'Garante per la protezione dei dati personali',
                    url: 'https://www.gpdp.it/temi/smartphone-e-tablet',
                    type: 'official',
                    usedFor: 'Consigli sui permessi delle app e sulla protezione dei dati in mobilità.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Sicurezza delle App mobili',
                    organization: 'CERT-AgID',
                    url: 'https://cert-agid.gov.it/notizie/sicurezza-delle-app-mobili/',
                    type: 'official',
                    usedFor: 'Indicazioni sui rischi legati ad app malevole e malware.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
