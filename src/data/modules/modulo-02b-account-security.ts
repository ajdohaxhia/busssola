import { Module } from '@/types';

export const modulo_02b_account_security: Module = {
    id: 'modulo-02b-account-security',
    title: 'Modulo 2b: Checkup Privacy & Sicurezza',
    description: 'Procedure guidate per controllare cosa sanno di te Google, Facebook e Instagram, e come blindare i tuoi dati.',
    category: 'accounts',
    difficulty: 'intermedia',
    icon: 'Key',
    themeColor: 'accent-cyan',
    lessons: [
        {
            id: 'google-privacy-audit',
            slug: 'google-privacy-checkup-guida-completa',
            title: 'Checkup Google: Pulizia totale dei dati',
            category: 'accounts',
            audience: ['adults', 'minors', 'prevention'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Scopri come vedere ed eliminare la cronologia delle posizioni, delle ricerche e dei video che Google conserva su di te.',
            status: 'published',
            emergencyLevel: 'low',
            scenario: 'Ti accorgi che Google sa esattamente dove sei stato negli ultimi 5 anni, cosa hai cercato e quali prodotti hai guardato. Vuoi limitare questa raccolta di dati senza rinunciare ai servizi.',
            question: 'Come posso impedire a Google di tracciare ogni mio movimento?',
            whatIsHappening: 'Google raccoglie dati per "personalizzare l\'esperienza" e vendere pubblicità. Tuttavia, offre uno strumento ufficiale (Privacy Checkup) per permetterti di decidere cosa tenere e cosa cancellare automaticamente.',
            warningSigns: [
                'Ricevi "Riepiloghi degli spostamenti" via mail che non ricordavi di aver attivato.',
                'Vedi annunci pubblicitari basati su ricerche fatte mesi prima.',
                'Il tuo account risulta collegato a decine di app o siti che non usi più.'
            ],
            doNow: [
                'Accedi a "Dati e privacy" nel tuo Account Google.',
                'Esegui il "Controllo privacy" guidato.',
                'Attiva l\'"Eliminazione automatica" per la Cronologia delle posizioni e l\'Attività web e app (consigliato: 3 mesi).',
                'Controlla "Le tue connessioni con app e servizi di terze parti" e rimuovi quelle inutilizzate.'
            ],
            dontDo: [
                'Non lasciare attiva la "Geolocalizzazione" perenne se non ti serve per il navigatore.',
                'Non condividere la tua posizione "In tempo reale" su Google Maps in modo permanente con chiunque.',
                'Non ignorare gli "Avvisi di sicurezza" che Google ti invia via mail.'
            ],
            preserveEvidence: [
                'Puoi scaricare una copia di tutti i tuoi dati tramite "Google Takeout" prima di cancellarli.'
            ],
            askHelpWhen: [
                'Se trovi attività nella tua cronologia che sei sicuro di non aver fatto (segno di accesso non autorizzato).',
                'Se non riesci a disattivare alcune impostazioni di tracciamento.'
            ],
            whoCanHelp: [
                'Google Safety Center',
                'Garante Privacy (Vademecum Tracciamento)',
                'Esperti di Privacy Digitale'
            ],
            checklist: [
                'Checkup Privacy Google',
                'Eliminazione automatica on',
                'Verifica App terze',
                'Mappa cronologia off'
            ],
            sources: [
                {
                    title: 'Controllo Privacy Google',
                    organization: 'Google Account',
                    url: 'https://myaccount.google.com/privacycheckup',
                    type: 'platform',
                    usedFor: 'Link diretto allo strumento ufficiale di gestione dati.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Come eliminare la cronologia delle attività',
                    organization: 'Google Support',
                    url: 'https://support.google.com/chrome/answer/95589',
                    type: 'platform',
                    usedFor: 'Istruzioni tecniche per la pulizia dei dati di navigazione.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
