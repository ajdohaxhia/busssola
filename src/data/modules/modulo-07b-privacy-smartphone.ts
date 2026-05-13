import { Module } from '@/types';

export const modulo_07b_privacy_smartphone: Module = {
    id: 'modulo-07b-privacy-smartphone',
    title: 'Modulo 7b: Privacy Smartphone (Avanzata)',
    description: 'Tecniche di difesa avanzate: audit dei permessi sensibili e gestione della biometria.',
    category: 'privacy',
    difficulty: 'avanzata',
    icon: 'Smartphone',
    themeColor: 'accent-cyan',
    lessons: [
        {
            id: 'app-permission-audit',
            slug: 'audit-permessi-app-microfono-fotocamera',
            title: 'Audit dei Permessi: Chi ti spia?',
            category: 'privacy',
            audience: ['adults', 'prevention'],
            level: 'medio',
            estimatedMinutes: 6,
            summary: 'Come controllare quali app hanno accesso al tuo microfono, alla tua fotocamera e alla tua posizione proprio in questo momento.',
            status: 'published',
            emergencyLevel: 'low',
            scenario: 'Hai il sospetto che il tuo telefono ti "ascolti" perché vedi pubblicità di cose di cui hai solo parlato a voce. Vuoi verificare quali app hanno il permesso di usare il microfono o la fotocamera a tua insaputa.',
            question: 'È vero che le app possono ascoltarmi anche quando sono chiuse?',
            whatIsHappening: 'Tecnicamente, un\'app può accedere ai sensori solo se ha il permesso. Tuttavia, molte app richiedono permessi "Sempre" che non sono necessari. L\'audit dei permessi serve a limitare l\'accesso ai sensori solo quando l\'app è effettivamente aperta e in uso.',
            warningSigns: [
                'Vedi un puntino verde o arancione in alto sullo schermo (su Android/iOS) quando non stai usando la fotocamera o il microfono.',
                'La batteria si scarica molto velocemente e il telefono scotta senza motivo.',
                'Ricevi annunci pubblicitari estremamente specifici su argomenti discussi solo a voce.'
            ],
            doNow: [
                'Vai in "Impostazioni > Privacy > Gestione autorizzazioni" (Android) o "Impostazioni > Privacy e sicurezza" (iOS).',
                'Controlla la lista "Microfono" e "Fotocamera": revoca l\'accesso a tutte le app che non lo richiedono per la loro funzione principale.',
                'Imposta la geolocalizzazione su "Solo mentre l\'app è in uso" per tutte le app, tranne forse il navigatore.',
                'Attiva gli "Avvisi di accesso agli appunti" per sapere se un\'app copia i tuoi testi incollati.'
            ],
            dontDo: [
                'Non scaricare app "Torcia" o "Calcolatrice" che chiedono l\'accesso ai contatti o alla posizione.',
                'Non dare il permesso "Consenti sempre" alla posizione a meno che non sia strettamente necessario.',
                'Non ignorare il Privacy Dashboard del tuo telefono: guardalo almeno una volta al mese.'
            ],
            preserveEvidence: [
                'Se trovi un\'app sconosciuta con permessi attivi, fai uno screenshot prima di disinstallarla.'
            ],
            askHelpWhen: [
                'Se noti che un permesso revocato si riattiva da solo (possibile segno di malware).',
                'Se vedi il puntino di accesso alla fotocamera attivo mentre sei nella schermata home.'
            ],
            whoCanHelp: [
                'Polizia Postale',
                'Supporto ufficiale Android/Apple',
                'Esperti di Cybersecurity'
            ],
            checklist: [
                'Check Microfono',
                'Check Fotocamera',
                'Localizzazione "In uso"',
                'Privacy Dashboard'
            ],
            sources: [
                {
                    title: 'Gestire le autorizzazioni delle app',
                    organization: 'Google Android Help',
                    url: 'https://support.google.com/android/answer/9431959',
                    type: 'platform',
                    usedFor: 'Istruzioni tecniche per il controllo dei permessi su Android.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Controllare l\'accesso alle informazioni nelle app',
                    organization: 'Apple Support',
                    url: 'https://support.apple.com/it-it/guide/iphone/iph16405066d/ios',
                    type: 'platform',
                    usedFor: 'Istruzioni tecniche per la gestione privacy su iOS.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
