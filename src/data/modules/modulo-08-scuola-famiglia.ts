import { Module } from '@/types';

export const modulo_08_scuola_famiglia: Module = {
    id: 'modulo-08-scuola-famiglia',
    title: 'Modulo 8: Scuola e Famiglia',
    description: 'Protocolli istituzionali per la gestione del cyberbullismo, il ruolo del docente referente e le tutele della Legge 71/2017.',
    category: 'school',
    difficulty: 'base',
    icon: 'GraduationCap',
    themeColor: 'accent-yellow',
    lessons: [
        {
            id: 'cyberbullying-law',
            slug: 'legge-71-2017-cyberbullismo-spiegata',
            title: 'Cyberbullismo: Cosa dice la Legge 71/2017',
            category: 'school',
            audience: ['parents', 'teachers', 'minors'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'La prima legge italiana dedicata al cyberbullismo. Scopri i tuoi diritti e come richiedere l\'oscuramento dei contenuti.',
            status: 'published',
            emergencyLevel: 'medium',
            scenario: 'Un minore è vittima di insulti, scherno o diffusione di foto imbarazzanti online. I genitori e la scuola devono intervenire, ma non sanno quali sono i poteri legali a loro disposizione.',
            question: 'Come posso proteggere un minore se la piattaforma non cancella i post offensivi?',
            whatIsHappening: 'La Legge 71/2017 definisce il cyberbullismo come qualunque forma di pressione, aggressione, ricatto o furto d\'identità attuata per via telematica contro un minore. La legge permette alla vittima (anche se ha solo 14 anni) di chiedere direttamente al gestore del social di cancellare i contenuti.',
            warningSigns: [
                'Il minore rifiuta di andare a scuola senza un motivo fisico.',
                'Isolamento sociale e chiusura verso il gruppo dei pari.',
                'Uso ansioso o eccessivo dello smartphone, specialmente di notte.',
                'Cambiamento repentino del rendimento scolastico.'
            ],
            doNow: [
                'Invia una richiesta di oscuramento/cancellazione al gestore del social network.',
                'Se il gestore non risponde entro 24 ore o non provvede entro 48, scrivi al Garante Privacy.',
                'Informa il Docente Referente per il Cyberbullismo della scuola.',
                'Raccogli le prove (screenshot) senza rispondere alle provocazioni.'
            ],
            dontDo: [
                'Non minimizzare: il dolore digitale è reale quanto quello fisico.',
                'Non rispondere agli attacchi: alimenta solo la viralità del contenuto.',
                'Non sequestrare il dispositivo al minore: si sentirebbe ulteriormente punito.',
                'Non agire da solo: coinvolgi sempre l\'istituzione scolastica.'
            ],
            preserveEvidence: [
                'Screenshot dei messaggi offensivi con data e ora.',
                'Link (URL) ai post o ai profili dei bulli.',
                'Nomi o nickname dei partecipanti ai gruppi chat.'
            ],
            askHelpWhen: [
                'Se l\'episodio coinvolge più studenti della stessa scuola.',
                'Se il minore manifesta segnali di depressione o ansia grave.',
                'Se le piattaforme ignorano le richieste di rimozione.'
            ],
            whoCanHelp: [
                'Docente Referente per il Cyberbullismo della scuola',
                'Garante Privacy (Canale segnalazione Cyberbullismo)',
                'Servizio 114 Emergenza Infanzia',
                'Polizia Postale (App YouPol)'
            ],
            checklist: [
                'Richiesta rimozione social',
                'Segnalazione Referente',
                'Salva screenshot',
                'Coinvolgi famiglia'
            ],
            sources: [
                {
                    title: 'Legge 29 maggio 2017, n. 71',
                    organization: 'Gazzetta Ufficiale',
                    url: 'https://www.gazzettaufficiale.it/documenti/it/2017/05/29/17G00085/pdf',
                    type: 'official',
                    usedFor: 'Testo integrale della legge e procedure di istanza di oscuramento.',
                    lastCheckedAt: '2024-05-13'
                },
                {
                    title: 'Linee di orientamento per la prevenzione e il contrasto',
                    organization: 'Ministero dell\'Istruzione',
                    url: 'https://www.miur.gov.it/bullismo-e-cyberbullismo',
                    type: 'official',
                    usedFor: 'Protocolli operativi per le scuole e ruolo del docente referente.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
