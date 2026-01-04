import { Module } from '../../types'

export const LAVORO_REMOTO_MODULE: Module = {
    id: 'lavoro-remoto',
    number: 24,
    title: 'Remote Work',
    subtitle: 'Smart working sicuro: proteggi il tuo ufficio ovunque sia.',
    description: 'Separazione vita/lavoro, sicurezza delle videochiamate e protezione dei dati aziendali.',
    difficulty: 'avanzata', // Expert module
    durationHours: 4,
    themeColor: 'accent-purple',
    icon: 'Briefcase',
    lessons: [
        {
            id: 'remote-1-separation',
            title: 'Separazione dei Dispositivi',
            minutes: 20,
            difficulty: 'base',
            learningGoals: [
                'Perché non mischiare dati personali e lavoro.',
                'Uso di account utente separati.'
            ],
            contentMarkdown: `# Non mischiare i flussi\nUsare il PC aziendale per scaricare film pirata o il PC personale per gestire dati dei clienti è una ricetta per il disastro.\n\n## Regole d'Oro\n1. **Hardware separato:** Se possibile, usa due device diversi.\n2. **Account separati:** Se devi usare lo stesso PC, crea un account Utente "Lavoro" e uno "Personale".\n3. **Niente figli sul PC di lavoro:** Un bambino può cancellare un database aziendale con tre click sbagliati.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'Se usi il PC aziendale per cose personali, ricorda che l\'azienda potrebbe monitorare tutto ciò che fai.'
                }
            ],
            microExercise: {
                id: 'ex-remote-1',
                title: 'User Check',
                instruction: 'Sul tuo PC.',
                task: 'Crea un nuovo utente standard (non amministratore) che potresti usare per navigazione rischiosa.'
            },
            miniQuiz: [
                {
                    question: 'Perché evitare l\'uso personale del PC aziendale?',
                    options: ['Per non consumare la batteria', 'Per questioni di privacy e sicurezza', 'Perché è lento', 'Perché i tasti si rovinano'],
                    correctIndex: 1,
                    explanation: 'Riduci il rischio di malware aziendali e proteggi la tua privacy dal datore di lavoro.'
                }
            ],
            reflectionPrompt: 'La tua famiglia ha accesso al computer dove tieni i documenti di lavoro?',
            resources: []
        },
        {
            id: 'remote-2-videocalls',
            title: 'Videochiamate a Prova di Bomba',
            minutes: 15,
            difficulty: 'intermedia',
            learningGoals: [
                'Zoombombing e come evitarlo.',
                'Cosa mostri alle tue spalle.'
            ],
            contentMarkdown: `# Sei in onda!\nLe videochiamate sono finestre aperte sulla tua casa e sui tuoi dati.\n\n## Zoombombing\nIntrusi che entrano nelle call per disturbare o spiare. Evitalo usando password per le riunioni e "Waiting Room".\n\n## Sfondo\nCosa si vede dietro di te? Lavagne con password? Foto dei figli? Estratti conto? Usa gli sfondi sfocati o virtuali per proteggere la tua privacy domestica.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Usa sempre il copri-webcam fisico quando non sei in chiamata.'
                }
            ],
            microExercise: {
                id: 'ex-remote-2',
                title: 'Background Check',
                instruction: 'Accendi la fotocamera frontale/webcam.',
                task: 'Cosa si legge o si vede alle tue spalle in questo momento?'
            },
            miniQuiz: [
                {
                    question: 'A cosa serve la "Waiting Room" nelle app di meeting?',
                    options: ['A mettere musica d\'attesa', 'A filtrare chi entra nella riunione', 'A registrare la chiamata', 'A fare pausa caffè'],
                    correctIndex: 1,
                    explanation: 'L\'host deve ammettere manualmente i partecipanti, bloccando gli intrusi.'
                }
            ],
            reflectionPrompt: 'Hai mai notato dettagli imbarazzanti o privati nello sfondo dei colleghi?',
            resources: []
        },
        {
            id: 'remote-3-environment',
            title: 'L\'Ambiente: Shoulder Surfing a Casa',
            minutes: 10,
            difficulty: 'base',
            learningGoals: [
                'Proteggere lo schermo da sguardi indiscreti.'
            ],
            contentMarkdown: `# Shoulder Surfing\nSignifica "spiare da sopra la spalla". In ufficio stiamo attenti, ma al bar o in treno?\n\n## Privacy Screen\nSe lavori in mobilità, applica un filtro privacy allo schermo. Rende il monitor nero per chi guarda dai lati.\n\n## Blocca lo Schermo\nOgni volta che ti alzi dalla sedia (anche a casa, se ci sono ospiti o coinquilini), blocca il PC (Win+L o Cmd+Ctrl+Q).`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Abituati a premere Win+L (o la combinazione di blocco) istintivamente ogni volta che ti alzi.'
                }
            ],
            microExercise: {
                id: 'ex-remote-3',
                title: 'Lock Test',
                instruction: 'Blocca il tuo computer adesso usando la tastiera.',
                task: 'Qual è la combinazione di tasti?'
            },
            miniQuiz: [
                {
                    question: 'Cosa fa un filtro privacy per schermo?',
                    options: ['Aumenta la luminosità', 'Protegge dagli occhi laterali', 'Pulisce lo schermo', 'Fa da specchio'],
                    correctIndex: 1,
                    explanation: 'Limita l\'angolo di visione.'
                }
            ],
            reflectionPrompt: 'Hai mai letto le mail di qualcun altro in treno perché aveva lo schermo ben visibile?',
            resources: []
        }
    ],
    tips: [
        'Usa sempre le cuffie durante le call per evitare che chi ti sta vicino ascolti tutto.',
        'Blocca il PC ogni volta che ti alzi dalla sedia, anche a casa.',
        'Non salvare password aziendali nel browser personale.'
    ],
    resources: [
        {
            title: 'NIST Telework Guide',
            url: 'https://www.nist.gov/itl/applied-cybersecurity/nice/resources/telework',
            description: 'Standard di sicurezza per il lavoro remoto.'
        }
    ]
}
