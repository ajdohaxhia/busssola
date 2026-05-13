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
        },
        {
            id: 'teacher-first-24h',
            slug: 'docenti-cyberbullismo-prime-24-ore-protocollo',
            title: 'Docenti: Le prime 24 ore dal segnale',
            category: 'school',
            audience: ['teachers'],
            level: 'medio',
            estimatedMinutes: 6,
            summary: 'Cosa deve fare un insegnante quando riceve una segnalazione di cyberbullismo che coinvolge i propri studenti.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Uno studente ti confida di essere vittima di un gruppo Telegram dove circolano sue foto ritoccate, oppure noti una forte tensione in classe legata a episodi avvenuti online nel weekend.',
            question: 'Qual è il dovere legale del docente in caso di cyberbullismo?',
            whatIsHappening: 'Secondo la Legge 71/2017 e le Linee Guida del MIM, la scuola ha un ruolo centrale nella prevenzione e gestione. Il docente non deve indagare da solo, ma deve attivare il protocollo interno per proteggere la vittima e gestire i responsabili in ottica educativa.',
            warningSigns: [
                'Calo improvviso dei voti o assenze ripetute di uno studente.',
                'Uso ansioso dello smartphone durante le lezioni.',
                'Commenti o risatine durante la lezione legati a contenuti online.',
                'Segnalazioni da parte di altri genitori o compagni.'
            ],
            doNow: [
                'Informa immediatamente il Dirigente Scolastico e il Docente Referente per il Cyberbullismo.',
                'Accogli lo studente in un luogo protetto e ascoltalo senza giudicare. Assicuragli che la scuola interverrà.',
                'Se l\'episodio è grave, la scuola deve convocare i genitori (sia della vittima che dei responsabili) entro 24 ore.',
                'Ricorda agli studenti che anche "guardare e ridere" senza intervenire alimenta il bullismo.',
                'Non cancellare eventuali prove se ti vengono mostrate: scatta una foto allo schermo se necessario.'
            ],
            dontDo: [
                'Non cercare di risolvere la questione con una "rammancina" generica in classe: rischieresti di esporre ulteriormente la vittima.',
                'Non ignorare l\'episodio solo perché è successo "fuori dall\'orario scolastico": se coinvolge studenti, è competenza della scuola.'
            ],
            preserveEvidence: [
                'Annota data, ora e nomi dei coinvolti in un verbale interno riservato.'
            ],
            askHelpWhen: [
                'Sempre. La gestione deve essere collegiale (Consiglio di Classe, Dirigente, Referente).'
            ],
            whoCanHelp: [
                'Referente Cyberbullismo d\'Istituto',
                'Nucleo Operativo Regionale (USR)',
                'Forze dell\'Ordine (se il reato è grave)'
            ],
            checklist: [
                'Avvisa Referente',
                'Ascolto protetto',
                'Convocazione famiglie',
                'Verbale riservato'
            ],
            sources: [
                {
                    title: 'Linee di orientamento per la prevenzione e il contrasto',
                    organization: 'Ministero dell\'Istruzione',
                    url: 'https://www.miur.gov.it/bullismo-e-cyberbullismo',
                    type: 'official',
                    usedFor: 'Procedure obbligatorie per il personale scolastico.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'parent-first-24h',
            slug: 'genitori-cyberbullismo-scoperta-cosa-fare',
            title: 'Genitori: Le prime 24 ore dalla scoperta',
            category: 'school',
            audience: ['parents'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'La tua reazione come genitore determinerà se tuo figlio continuerà a fidarsi di te. Ecco come gestire lo shock iniziale.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Scopri che tuo figlio è vittima di cyberbullismo o, peggio, che è lui a far parte di un gruppo di bulli online. Il panico e la rabbia sono le prime emozioni.',
            question: 'Come posso parlare con mio figlio senza farlo chiudere a riccio?',
            whatIsHappening: 'Il cyberbullismo è un trauma relazionale. Se tuo figlio è vittima, prova vergogna; se è bullo, prova un senso di potere distorto o paura delle conseguenze. In entrambi i casi, ha bisogno di un adulto lucido che prenda il controllo della situazione.',
            warningSigns: [
                'Chiusura in se stesso o scatti d\'ira improvvisi.',
                'Nascondere il telefono quando entri nella stanza.',
                'Rifiuto di frequentare i compagni di classe fuori da scuola.'
            ],
            doNow: [
                'Mantieni la calma. Non urlare e non sequestrare il telefono immediatamente.',
                'Dì: "Ho visto cosa sta succedendo. Sono qui per aiutarti a risolvere, non per punirti".',
                'Salva tutte le prove (screenshot) prima che vengano cancellate.',
                'Contatta la scuola (Docente Referente) per segnalare l\'accaduto: la collaborazione scuola-famiglia è l\'arma più forte.',
                'Se la situazione è grave (minacce, estorsioni), contatta la Polizia Postale.'
            ],
            dontDo: [
                'Non chiamare i genitori del bullo per insultarli: aggraveresti la situazione per tuo figlio a scuola. Passa tramite i canali ufficiali (scuola).',
                'Non dire "ignora e passerà": nel mondo digitale non passa da solo, serve un\'azione di rimozione.'
            ],
            preserveEvidence: [
                'Screenshot di chat, post, commenti e link ai profili coinvolti.'
            ],
            askHelpWhen: [
                'Sempre. Il cyberbullismo non si risolve "in famiglia". Serve la scuola e, se necessario, le autorità.'
            ],
            whoCanHelp: [
                'Telefono Azzurro',
                'Referente Cyberbullismo Scuola',
                'Polizia Postale (tramite YouPol)'
            ],
            checklist: [
                'Calma e ascolto',
                'Salva screenshot',
                'Contatta scuola',
                'Segnala a piattaforma'
            ],
            sources: [
                {
                    title: 'Cyberbullismo: Guida per i genitori',
                    organization: 'Generazioni Connesse',
                    url: 'https://www.generazioniconnesse.it/site/it/cyberbullismo/',
                    type: 'institutional',
                    usedFor: 'Consigli comportamentali e gestione del conflitto.',
                    lastCheckedAt: '2024-05-13'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
