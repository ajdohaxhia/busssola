import { Module } from '../../types'

export const PREDATORI_ONLINE_MODULE: Module = {
    id: 'predatori-online',
    number: 1,
    title: 'Predatori Online',
    subtitle: 'Proteggi te stesso e i tuoi amici da chi si nasconde nell\'ombra.',
    description: 'Un viaggio nel profondo delle tecniche di grooming, catfish e ricatto digitale. Impara a riconoscere i predatori e a costruire barriere invalicabili.',
    difficulty: 'base',
    durationHours: 12,
    themeColor: 'accent-purple',
    icon: 'ShieldAlert',
    lessons: [
        {
            id: '1-cos-e-grooming',
            title: 'Cos’è il grooming: Fasi e segnali reali',
            minutes: 25,
            difficulty: 'base',
            learningGoals: [
                'Comprendere la definizione tecnica e psicologica di adescamento online.',
                'Identificare le 6 fasi del grooming secondo i modelli di prevenzione internazionali.',
                'Riconoscere i primi segnali di allarme in una conversazione con uno sconosciuto.'
            ],
            contentMarkdown: `# Il Grooming: Oltre la Definizione\nIl grooming, noto in italiano come "adescamento online", non è un evento singolo e improvviso, ma un **processo psicologico calcolato e manipolatorio** che un adulto mette in atto per instaurare un legame emotivo con un minore, al fine di abusarne o sfruttarlo. Negli ultimi anni, con l'esplosione dei social media e delle community di gaming, il grooming è diventato una minaccia digitale onnipresente e sempre più sofisticata.\n\n## Le 6 Fasi Strategiche del Predatore\nPer difendersi efficacemente, è necessario capire che il predatore non attacca frontalmente. Egli "coltiva" il rapporto seguendo fasi ben precise:\n\n1. **Targeting (La Scelta della Vittima):** Il predatore osserva i profili pubblici per trovare adolescenti che esprimono solitudine, insoddisfazione o che hanno foto molto esposte.\n2. **First Contact (Il Primo Gancio):** Può essere un complimento banale su un gioco, una domanda su un interesse comune o un apparente errore d'invio.\n3. **Friendship Building (La Costruzione della Fiducia):** Qui inizia la manipolazione. Il predatore si presenta come "l'unico che ti capisce davvero".\n4. **Relationship Normalization (Normalizzazione):** Inizia a introdurre temi più intimi o sessualizzati.\n5. **Alienation (Isolamento):** Questa è la fase critica. Ti convince che parlare della vostra amicizia con altri la rovinerebbe.\n6. **The Breach (L'Abuso/Ricatto):** Una volta isolata la vittima, il predatore passa all'azione chiedendo foto intime o un incontro fisico.\n\n## Segnali di Allarme (Red Flags)\n- **Interesse Eccessivo:** Uno sconosciuto che vuole sapere tutto di te in 10 minuti.\n- **Richiesta di Segretezza:** Frasi come "Non dirlo a nessuno, è il nostro piccolo segreto".\n- **Doni Digitali Spontanei:** Offre skin di Fortnite o Robux senza chiedere nulla in cambio inizialmente.\n- **Vittimismo:** Racconta storie tristi per farsi consolare e agganciarti emotivamente.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'I predatori non sembrano mai mostri. Si presentano come gli amici migliori che tu abbia mai avuto.'
                },
                {
                    type: 'legal',
                    content: 'In Italia, l\'adescamento di minorenni è un reato punito dall\'Articolo 609-undecies del Codice Penale.'
                }
            ],
            microExercise: {
                id: 'ex-1',
                title: 'Analisi dei Messaggi',
                instruction: 'Leggi i seguenti messaggi ricevuti su Discord e identifica la fase del grooming.',
                task: 'Messaggio: "Tua madre non capisce nulla della tua passione, io invece trovo che tu sia un genio. Non dirlo a lei, rovinerebbe tutto."'
            },
            miniQuiz: [
                {
                    question: 'In quale fase il predatore cerca di isolarti dagli altri?',
                    options: ['Targeting', 'Alienation (Isolamento)', 'First Contact', 'Normalization'],
                    correctIndex: 1,
                    explanation: 'L\'obiettivo è renderti dipendente solo dal predatore.'
                }
            ],
            reflectionPrompt: 'Hai mai provato la sensazione che uno sconosciuto online ti capisse troppo bene?',
            resources: [
                {
                    title: 'Polizia Postale - Grooming',
                    url: 'https://www.commissariatodips.it/approfondimenti/adescamento-online-grooming/index.html',
                    description: 'Documentazione ufficiale.'
                }
            ]
        },
        {
            id: '2-love-bombing',
            title: 'Love bombing: Come riconoscere l’eccesso “perfetto”',
            minutes: 20,
            difficulty: 'base',
            learningGoals: [
                'Definire il Love Bombing come tattica di manipolazione.',
                'Identificare la differenza tra affetto sano e bombardamento manipolatorio.'
            ],
            contentMarkdown: `# Love Bombing: Quando l'Affetto diventa un'Arma\nIl Love Bombing è una tecnica di manipolazione psicologica utilizzata dai predatori per travolgere la vittima con attenzioni, lodi e affetto in un tempo brevissimo. L'obiettivo è creare una dipendenza emotiva rapida.\n\n## Perché Funziona?\nTutti amiamo essere apprezzati. Il predatore ti fa sentire speciale e visto. In questo stato di euforia, le tue difese razionali si abbassano.\n\n## I Segnali Distintivi (Red Flags)\n1. **Velocità Eccessiva:** "Ti amo" dopo pochissime ore di chat.\n2. **Attenzione Costante:** Ti scrive ogni 5 minuti e si arrabbia se non rispondi.\n3. **Il Destino:** Dice che il vostro incontro è "miracoloso".\n4. **Richiesta di Reciprocità:** Usa i regali per farti sentire in colpa se non cedi alle sue richieste.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Se sembra troppo bello per essere vero, probabilmente non lo è.'
                }
            ],
            microExercise: {
                id: 'ex-2',
                title: 'Rilevatore di Iperbole',
                instruction: 'Analizza la frase: "Sei l\'unica persona che mi ha mai capito, non posso vivere senza di te".',
                task: 'Perché questa frase, detta dopo 2 giorni, è un allarme?'
            },
            miniQuiz: [
                {
                    question: 'Qual è lo scopo del Love Bombing?',
                    options: ['Essere gentili', 'Creare dipendenza emotiva', 'Regalare skin', 'Trovare amici'],
                    correctIndex: 1,
                    explanation: 'Il manipolatore vuole il controllo sulla tua mente.'
                }
            ],
            reflectionPrompt: 'Ti sei mai sentito sopraffatto dalle attenzioni di uno sconosciuto?',
            resources: [
                {
                    title: 'Psychology Today - Love Bombing',
                    url: 'https://www.psychologytoday.com/us/blog/lifetime-connections/201804/the-layers-love-bombing',
                    description: 'Approfondimento psicologico.'
                }
            ]
        },
        {
            id: '3-isolamento',
            title: 'Isolamento: Frasi tipiche per staccarti da amici e famiglia',
            minutes: 22,
            difficulty: 'intermedia',
            learningGoals: [
                'Riconoscere le tattiche di alienazione sociale.',
                'Identificare le frasi chiave che mirano a creare diffidenza verso i genitori.'
            ],
            contentMarkdown: `# La Strategia dell'Isolamento\nIl predatore vuole tagliarti i ponti con il mondo esterno per renderti vulnerabile. Una vittima isolata non ha nessuno a cui chiedere consiglio.\n\n## Le Tattiche di Alienazione\n1. **Svalutazione degli Altri:** "I tuoi amici sono infantili, non ti meritano".\n2. **Il Segreto Speciale:** "Non dirlo ai tuoi, non capirebbero la nostra amicizia".\n3. **Il Noi contro il Mondo:** Crea l'illusione che solo voi due siate "veri" contro un mondo ostile.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'Un vero amico non ti chiederà mai di mentire ai tuoi genitori circa il vostro rapporto.'
                }
            ],
            microExercise: {
                id: 'ex-3',
                title: 'Analisi del Cuneo',
                instruction: 'Ricevi: "Tua sorella ti spia, non fidarti di lei, vuole solo metterti nei guai".',
                task: 'Scrivi una risposta assertiva che difenda il rapporto con tua sorella.'
            },
            miniQuiz: [
                {
                    question: 'Perché il predatore vuole che tu non parli della vostra chat con altri?',
                    options: ['Per timidezza', 'Per evitare che qualcuno scopra le sue bugie', 'Perché è un gioco segreto', 'Per farti una sorpresa'],
                    correctIndex: 1,
                    explanation: 'La luce del sole è il nemico del predatore.'
                }
            ],
            reflectionPrompt: 'Hai mai sentito il bisogno di nascondere lo schermo quando qualcuno entra in stanza?',
            resources: [
                {
                    title: 'Save the Children - Rischi Online',
                    url: 'https://www.savethechildren.it/blog-notizie/adescamento-online-consigli-per-ragazzi-e-genitori',
                    description: 'Consigli pratici.'
                }
            ]
        },
        {
            id: '4-escalation',
            title: 'Escalation: Da chat innocua a richiesta intima',
            minutes: 25,
            difficulty: 'intermedia',
            learningGoals: [
                'Mappare il percorso di escalation dei contenuti.',
                'Identificare i test di confine.'
            ],
            contentMarkdown: `# L'Escalation: Un Piano Inclinato\nL'adescamento non inizia subito con richieste gravi. È un processo lento progettato per farti abituare gradualmente a contenuti sempre più spinti.\n\n## Le Tappe\n1. **Contenuto Soft:** Battute a doppio senso sul tuo aspetto.\n2. **Test di Confine:** Una provocazione per vedere se ti arrabbi. Se non lo fai, il predatore spinge oltre.\n3. **Foto Innocue:** Ti chiede foto del viso o in pigiama.\n4. **La Svolta:** Inizia a parlare di temi sessuali come se fosse un "gioco ipotetico".\n5. **Il Ricatto:** Arriva la richiesta esplicita di foto intime.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'Puoi ritirare il tuo consenso e smettere di rispondere in ogni momento, anche se sei stato gentile fino a un secondo prima.'
                }
            ],
            microExercise: {
                id: 'ex-4',
                title: 'Il Termometro del Disagio',
                instruction: 'Richiesta: "Mandami una foto in costume, voglio vedere come ti stanno le medie".',
                task: 'Spiega perché questo è un "test di confine".'
            },
            miniQuiz: [
                {
                    question: 'Cos\'è un test di confine?',
                    options: ['Un quiz scolastico', 'Una provocazione per vedere fin dove puoi spingerti', 'Un software antivirus', 'Un modo per fare amicizia'],
                    correctIndex: 1,
                    explanation: 'Serve al predatore per capire se sei una vittima "facile".'
                }
            ],
            reflectionPrompt: 'Hai mai provato disagio ma hai continuato a chattare per non sembrare "palloso"?',
            resources: [
                {
                    title: 'Generazioni Connesse',
                    url: 'https://www.generazioniconnesse.it/site/it/cyber-bullismo/grooming/',
                    description: 'Portale istituzionale.'
                }
            ]
        },
        {
            id: '5-catfish-101',
            title: 'Catfish 101: Profili falsi e incoerenze',
            minutes: 18,
            difficulty: 'base',
            learningGoals: [
                'Identificare i profili falsi sui social media.',
                'Smascherare le scuse comuni dei catfish.'
            ],
            contentMarkdown: `# Catfishing: Chi c'è dietro lo schermo?\nUn Catfish crea una falsa identità per ingannarti. Spesso usano foto di modelli stranieri meno noti per essere difficili da trovare.\n\n## Segnali di un Profilo Fake\n1. **Troppe foto perfette:** Tutte caricate insieme.\n2. **Mancanza di amici reali:** Solo commenti da altri bot o sconosciuti.\n3. **Incoerenze:** Dice di essere a Roma ma pubblica foto di paesaggi americani.\n4. **Scuse per la Webcam:** "La camera è rotta", "Sono timido". Se non fa videochiamate, è un fake.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Chiedi alla persona di farsi una foto con un gesto strano (es. pollice verso il basso davanti alla guancia) per verificare l\'identità.'
                }
            ],
            microExercise: {
                id: 'ex-5',
                title: 'L\'Investigatore',
                instruction: 'Guarda un profilo sospetto.',
                task: 'Trova 3 elementi che mancano rispetto ai profili dei tuoi compagni di classe.'
            },
            miniQuiz: [
                {
                    question: 'Qual è la scusa tipica di un catfish?',
                    options: ['Non ho tempo', 'La webcam è rotta', 'Non trovo il telefono', 'Manca la luce'],
                    correctIndex: 1,
                    explanation: 'La webcam è il nemico numero uno di chi sta mentendo sulla propria faccia.'
                }
            ],
            reflectionPrompt: 'Hai mai sospettato dell\'identità di qualcuno online?',
            resources: [
                {
                    title: 'StopNCII',
                    url: 'https://stopncii.org',
                    description: 'Strumento di prevenzione.'
                }
            ]
        },
        {
            id: '6-reverse-search',
            title: 'Reverse image search: Verifica immagini e foto',
            minutes: 15,
            difficulty: 'base',
            learningGoals: [
                'Usare Google e Yandex per la ricerca inversa.',
                'Identificare foto stock o rubate.'
            ],
            contentMarkdown: `# Il Detective Digitale: Ricerca Inversa\nDai al motore di ricerca la foto dell'utente e lui ti dice dove altro compare su Internet.\n\n## Come si fa?\n- **Google Images:** Clicca sulla macchina fotografica.\n- **Yandex Images:** Il più potente per riconoscere i volti.\n- **TinEye:** Ottimo per trovare le versioni originali di una foto.\n\n## Risultati sospetti\n- La foto compare su siti di modelle o stock (fake).\n- La foto appartiene a una persona straniera con un altro nome (rubata).`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Usa Yandex se vuoi risultati davvero precisi sui volti.'
                }
            ],
            microExercise: {
                id: 'ex-6',
                title: 'Google Lens Test',
                instruction: 'Cerca la foto di un influencer famoso su Lens.',
                task: 'In quanto tempo hai trovato la sua biografia reale?'
            },
            miniQuiz: [
                {
                    question: 'Quale motore di ricerca è famoso per il riconoscimento facciale avanzato?',
                    options: ['Google', 'DuckDuckGo', 'Yandex', 'Bing'],
                    correctIndex: 2,
                    explanation: 'Yandex ha algoritmi russi molto ottimizzati per la ricerca per immagini.'
                }
            ],
            reflectionPrompt: 'Ti senti più sicuro sapendo che puoi smascherare un fake in 30 secondi?',
            resources: [
                {
                    title: 'TinEye',
                    url: 'https://tineye.com',
                    description: 'Reverse search professionale.'
                }
            ]
        },
        {
            id: '7-sharenting',
            title: 'Sharenting: La tua Privacy nelle Mani degli Altri',
            minutes: 20,
            difficulty: 'base',
            learningGoals: [
                'Capire il rischio delle foto pubblicate dai genitori.',
                'Imparare a chiedere il rispetto della propria immagine.'
            ],
            contentMarkdown: `# Sharenting\nQuando i genitori pubblicano tutto dei figli online, regalano dati preziosi ai predatori: la tua scuola, i tuoi orari, come sei fatto in costume.\n\n## Cosa fare?\n1. **Parlarne:** Spiega che non ti senti sicuro.\n2. **Impostare regole:** Niente tag geografici, niente foto intime.\n3. **Consenso:** Pretendi che ti chiedano il permesso dai 14 anni in su.`,
            callouts: [
                {
                    type: 'legal',
                    content: 'A 14 anni in Italia hai il diritto legale di decidere della tua immagine online.'
                }
            ],
            microExercise: {
                id: 'ex-7',
                title: 'Audit Parentale',
                instruction: 'Controlla il profilo di tua madre o tuo padre.',
                task: 'Quante informazioni private su di te sono visibili a tutti?'
            },
            miniQuiz: [
                {
                    question: 'Da che età puoi legalmente impedire la pubblicazione di tue foto sui social in Italia?',
                    options: ['12 anni', '14 anni', '16 anni', '18 anni'],
                    correctIndex: 1,
                    explanation: 'La soglia del consenso digitale in Italia è 14 anni.'
                }
            ],
            reflectionPrompt: 'Ti sei mai vergognato per una foto pubblicata da un tuo parente?',
            resources: [
                {
                    title: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it',
                    description: 'Diritti e doveri online.'
                }
            ]
        },
        {
            id: '8-platforms-risks',
            title: 'Discord e Twitch: I nuovi territori della manipolazione',
            minutes: 25,
            difficulty: 'intermedia',
            learningGoals: [
                'Proteggersi sui server Discord e nelle chat di streaming.'
            ],
            contentMarkdown: `# Discord e Twitch\nI predatori usano il sistema dei "ruoli" di Discord o le "sub" di Twitch per farsi amici dei ragazzi.\n\n- **Il Falso Moderatore:** Chiede dati personali per "verificare l'account".\n- **Regali sospetti:** Ti regala skin o Nitro per farti sentire in debito.\n- **DM di gruppo:** Ti trascina in gruppi privati per isolarti.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'Disattiva sempre i messaggi diretti (DM) dai membri dei server che non conosci direttamente.'
                }
            ],
            microExercise: {
                id: 'ex-8',
                title: 'Check-up Discord',
                instruction: 'Apri le impostazioni privacy di Discord.',
                task: 'Imposta i messaggi diretti su "Solo amici". L\'hai fatto?'
            },
            miniQuiz: [
                {
                    question: 'Perché un utente sconosciuto ti regalerebbe Nitro o Skin?',
                    options: ['Per generosità', 'Per farti sentire in debito', 'Perché è ricco', 'Perché è Natale'],
                    correctIndex: 1,
                    explanation: 'Il regalo è l\'inizio del Love Bombing digitale.'
                }
            ],
            reflectionPrompt: 'Ti senti mai in obbligo verso qualcuno che ti ha regalato qualcosa in un gioco?',
            resources: [
                {
                    title: 'Discord Safety',
                    url: 'https://discord.com/safety',
                    description: 'Documentazione di sicurezza.'
                }
            ]
        },
        {
            id: '9-meetup-safety',
            title: 'Dallo Schermo alla Realtà: La sicurezza dei meetup',
            minutes: 30,
            difficulty: 'avanzata',
            learningGoals: [
                'Organizzare un primo incontro sicuro.'
            ],
            contentMarkdown: `# Incontri dal Vivo\nSe decidi di incontrare qualcuno conosciuto online, segui le 5 Regole d'Oro:\n\n1. **Luogo Pubblico:** Mai a casa o in posti isolati.\n2. **Porta Amici:** Non andare mai solo.\n3. **Avvisa un Adulto:** Di' dove vai e con chi.\n4. **Videochiamata preventiva:** Verifica che la faccia corrisponda alle foto.\n5. **Mezzi propri:** Non accettare passaggi in auto.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'Se la persona arriva e sembra diversa dalle foto, vai via immediatamente.'
                }
            ],
            microExercise: {
                id: 'ex-9',
                title: 'Pianificazione',
                instruction: 'Devi incontrare un tipo conosciuto su Discord.',
                task: 'Scrivi 3 cose che faresti per essere sicuro al 100%.'
            },
            miniQuiz: [
                {
                    question: 'Qual è il posto migliore per un primo incontro?',
                    options: ['Il parco alle 20', 'Un centro commerciale affollato', 'Sotto casa tua', 'In un bar deserto'],
                    correctIndex: 1,
                    explanation: 'La folla è la tua migliore protezione.'
                }
            ],
            reflectionPrompt: 'Saresti capace di dire di no se la persona volesse portarti in un posto isolato?',
            resources: [
                {
                    title: 'Polizia di Stato',
                    url: 'https://www.poliziadistato.it',
                    description: 'Consigli per i giovani.'
                }
            ]
        },
        {
            id: '10-reporting',
            title: 'Segnalazione: Come e quando contattare la Polizia Postale',
            minutes: 20,
            difficulty: 'intermedia',
            learningGoals: [
                'Conoscere il ruolo della Polizia Postale.'
            ],
            contentMarkdown: `# La Polizia Postale\nSono i tuoi guardiani digitali. In caso di ricatto o adescamento, sono loro che devi contattare.\n\n- **Commissariato di PS Online:** Puoi segnalare siti e profili.\n- **Denuncia:** Richiede la presenza di un genitore se sei minorenne.\n- **Prove:** Non cancellare nulla! Fai screenshot di tutto.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Usa il sito commissariatodips.it per chiacchierare in chat con un poliziotto e chiedere consiglio.'
                }
            ],
            microExercise: {
                id: 'ex-10',
                title: 'Trova il Tasto',
                instruction: 'Vai sul sito del Commissariato online.',
                task: 'Qual è il primo tasto che vedi per fare una segnalazione?'
            },
            miniQuiz: [
                {
                    question: 'Cosa devi fare con i messaggi di minaccia?',
                    options: ['Cancellare tutto', 'Rispondere con cattiveria', 'Fare screenshot e conservarli', 'Spegnere il telefono'],
                    correctIndex: 2,
                    explanation: 'Senza prove la Polizia non può arrestare nessuno.'
                }
            ],
            reflectionPrompt: 'Hai paura della Polizia o pensi che siano lì per aiutarti?',
            resources: [
                {
                    title: 'Commissariato PS',
                    url: 'https://www.commissariatodips.it',
                    description: 'Punto di contatto ufficiale.'
                }
            ]
        },
        {
            id: '11-telefono-azzurro',
            title: 'Telefono Azzurro: Il supporto psicologico 1.96.96',
            minutes: 15,
            difficulty: 'base',
            learningGoals: [
                'Conoscere i servizi di Telefono Azzurro.'
            ],
            contentMarkdown: `# Telefono Azzurro\nSe sei stato vittima di qualcosa online, hai bisogno di parlare con qualcuno che ti capisca. Il 1.96.96 è gratuito, anonimo e attivo 24/7.\n\n- **Chat:** Disponibile sul sito azzurro.it.\n- **Supporto:** Psicologi ed esperti pronti ad ascoltarti senza giudicarti.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Il numero 1.96.96 non compare sulla bolletta telefonica.'
                }
            ],
            microExercise: {
                id: 'ex-11',
                title: 'Salva l\'aiuto',
                instruction: 'Salva il numero in rubrica.',
                task: 'Che nome "in codice" gli daresti per non farlo scoprire agli altri?'
            },
            miniQuiz: [
                {
                    question: 'Quanto costa chiamare Telefono Azzurro?',
                    options: ['È gratis', '1 euro al minuto', 'Dipende dalla scheda', 'Si paga solo di notte'],
                    correctIndex: 0,
                    explanation: 'Il servizio è totalmente gratuito sempre.'
                }
            ],
            reflectionPrompt: 'Parlare dei propri problemi è un segno di forza o di debolezza?',
            resources: [
                {
                    title: 'Azzurro.it',
                    url: 'https://www.azzurro.it',
                    description: 'Sito ufficiale.'
                }
            ]
        },
        {
            id: '12-social-engineering',
            title: 'Social Engineering: La manipolazione del linguaggio',
            minutes: 25,
            difficulty: 'intermedia',
            learningGoals: [
                'Riconoscere le leve psicologiche del social engineering.'
            ],
            contentMarkdown: `# Social Engineering\nL'hacking delle persone. Il predatore usa le tue emozioni (paura, curiosità, urgenza) per farti fare quello che vuole.\n\n## Le Leve\n1. **Urgenza:** "Dimmelo subito!".\n2. **Autorità:** "Sono un admin, dammi la pass".\n3. **Empatia:** "Ho bisogno di te, sei l'unica speranza".`,
            callouts: [
                {
                    type: 'case-study',
                    content: 'Molti attacchi informatici famosi iniziano con una semplice telefonata o un messaggio gentile.'
                }
            ],
            microExercise: {
                id: 'ex-12',
                title: 'Rilevatore di Urgenza',
                instruction: 'Messaggio: "Mandami il codice SMS ora o verrai bannato!".',
                task: 'Togli le parole urgenti. Cosa resta?'
            },
            miniQuiz: [
                {
                    question: 'Su cosa si basa il Social Engineering?',
                    options: ['Codice software', 'Manipolazione delle persone', 'Hard disk potenti', 'Satelliti'],
                    correctIndex: 1,
                    explanation: 'Sfrutta la psicologia umana.'
                }
            ],
            reflectionPrompt: 'Ti è mai capitato di fare una cosa di fretta online e pentirti poco dopo?',
            resources: [
                {
                    title: 'CISA',
                    url: 'https://www.cisa.gov',
                    description: 'Security guides.'
                }
            ]
        },
        {
            id: '13-love-scam',
            title: 'Phishing sentimentale: I "Love Scam"',
            minutes: 20,
            difficulty: 'intermedia',
            learningGoals: [
                'Individuare le truffe amorose.'
            ],
            contentMarkdown: `# Love Scam\nQuando il predatore usa una falsa storia d'amore per chiederti soldi, skin o regali digitali.\n\n- **La Trama:** Ti fa innamorare, poi succede un "disastro" e ha bisogno di soldi.\n- **Il Segnale:** Appena si passa dall'affetto al portafoglio, scappa.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'L\'amore vero non ha bisogno del tuo account PayPal o della tua carta di credito.'
                }
            ],
            microExercise: {
                id: 'ex-13',
                title: 'Verifica',
                instruction: 'Ti chiede 10 euro per il cane malato.',
                task: 'Scrivi 2 domande per smascherarlo.'
            },
            miniQuiz: [
                {
                    question: 'Qual è il fine ultimo di un Love Scammer?',
                    options: ['Sposarti', 'Ottenere denaro o beni', 'Giocare insieme', 'Aiutare la tua famiglia'],
                    correctIndex: 1,
                    explanation: 'Sono professionisti dell\'inganno economico.'
                }
            ],
            reflectionPrompt: 'Perché è così difficile dire di no a qualcuno di cui crediamo di essere innamorati?',
            resources: [
                {
                    title: 'Interpol',
                    url: 'https://www.interpol.int',
                    description: 'Financial crimes.'
                }
            ]
        },
        {
            id: '14-sextortion',
            title: 'Sextortion: La trappola del ricatto sessuale',
            minutes: 30,
            difficulty: 'avanzata',
            learningGoals: [
                'Capire la meccanica del ricatto sessuale.'
            ],
            contentMarkdown: `# Sextortion\nIl ricattatore minaccia di diffondere le tue foto intime se non fai quello che dice. È uno dei crimini più gravi online.\n\n- **Come funziona:** Ottiene una tua foto (con l'inganno o rubandola) e poi ti tiene in pugno.\n- **La Regola:** Non cedere mai. Se lo fai, ti ricatterà per sempre.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'Cedere alla prima minaccia non ti libera, ti trasforma in una vittima a lungo termine.'
                }
            ],
            microExercise: {
                id: 'ex-14',
                title: 'Il Bluff',
                instruction: 'Mail: "Ti ho filmato con la webcam, mandami 500 euro".',
                task: 'Perché spesso è solo un inganno basato su vecchie password rubate?'
            },
            miniQuiz: [
                {
                    question: 'Cosa devi fare se qualcuno ti minaccia con una tua foto?',
                    options: ['Pagare subito', 'Mandare altre foto', 'Smettere di rispondere e parlare con un adulto', 'Cancellare Internet'],
                    correctIndex: 2,
                    explanation: 'Il silenzio e l\'aiuto delle autorità sono le uniche soluzioni.'
                }
            ],
            reflectionPrompt: 'Cosa faresti se capitasse a un tuo amico?',
            resources: [
                {
                    title: 'IWF',
                    url: 'https://www.iwf.org.uk',
                    description: 'Global support.'
                }
            ]
        },
        {
            id: '15-emergency',
            title: 'Come gestire una minaccia di sextortion',
            minutes: 25,
            difficulty: 'avanzata',
            learningGoals: [
                'Azioni immediate in caso di emergenza.'
            ],
            contentMarkdown: `# Protocollo di Emergenza\n1. **STOP:** Smetti di rispondere.\n2. **SAVE:** Fai screenshot di tutto.\n3. **NON PAGARE:** Mai.\n4. **PARLA:** Dillo a un adulto o alla Polizia.\n5. **SEGNALA:** Usa StopNCII.org per bloccare i file.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'StopNCII.org crea un\'impronta digitale della foto per impedirne il caricamento sui social senza che nessuno la debba guardare.'
                }
            ],
            microExercise: {
                id: 'ex-15',
                title: 'Checklist',
                instruction: 'Un amico è nel panico.',
                task: 'Quali sono le prime 3 cose da fargli fare?'
            },
            miniQuiz: [
                {
                    question: 'Perché non devi cancellare le chat col ricattatore?',
                    options: ['Perché sono belle', 'Perché sono prove legali', 'Perché lui potrebbe arrabbiarsi', 'Per errore'],
                    correctIndex: 1,
                    explanation: 'Le chat servono alla Polizia per rintracciare il colpevole.'
                }
            ],
            reflectionPrompt: 'Secondo te, perché le vittime hanno così tanta paura di parlare?',
            resources: [
                {
                    title: 'StopNCII',
                    url: 'https://stopncii.org',
                    description: 'Impedisci la diffusione.'
                }
            ]
        },
        {
            id: '16-footprint',
            title: 'Digital Footprint: Cosa lasciamo ai predatori',
            minutes: 20,
            difficulty: 'intermedia',
            learningGoals: [
                'Controllare la propria impronta digitale.'
            ],
            contentMarkdown: `# Digital Footprint\nOgni like e commento è una traccia. I predatori le usano per capire chi sei e come "agganciarti".\n\n- **Cosa vedono:** I tuoi interessi, i tuoi amici, i tuoi umori.\n- **Pulizia:** Googleati ogni tanto e pulisci i post vecchi che non ti servono più.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'L\'impronta digitale è come un tatuaggio: quasi indelebile.'
                }
            ],
            microExercise: {
                id: 'ex-16',
                title: 'Egosurfing',
                instruction: 'Cerca il tuo nome su Google Immagini.',
                task: 'Trova una foto di cui ti eri dimenticato.'
            },
            miniQuiz: [
                {
                    question: 'Cos\'è l\'impronta digitale passiva?',
                    options: ['Le foto che metti tu', 'I dati raccolti dai siti senza che tu lo sappia', 'Le impronte delle dita', 'Le passowrd'],
                    correctIndex: 1,
                    explanation: 'Include la tua posizione, il tuo dispositivo e la cronologia.'
                }
            ],
            reflectionPrompt: 'Cosa vedrebbe un estraneo guardando il tuo profilo oggi?',
            resources: [
                {
                    title: 'Internet Society',
                    url: 'https://www.internetsociety.org',
                    description: 'Digital identity guide.'
                }
            ]
        },
        {
            id: '17-ai-deepfakes',
            title: 'IA e Deepfakes: Quando non puoi credere ai tuoi occhi',
            minutes: 25,
            difficulty: 'avanzata',
            learningGoals: [
                'Riconoscere immagini e video generati dall\'IA.',
                'Capire come i predatori usano i deepfake per ricattare.'
            ],
            contentMarkdown: `# Il Pericolo dei Deepfake\nL'Intelligenza Artificiale può creare video di te che non hai mai girato. Basta una manciata di tue foto reali per "incollare" il tuo viso su un altro corpo.\n\n## Come riconoscerli?\n- **Occhi:** Movimenti innaturali o riflessi strani.\n- **Ombre:** Luci che non tornano col resto della scena.\n- **Denti e Mani:** L\'IA spesso sbaglia i dettagli millimetrici.\n\n## Il Ricatto IA\nI predatori creano falsi contenuti intimi con la tua faccia per farti credere che siano reali e ricattarti. Ricorda: **anche se è un falso, il ricatto è un crimine.**`,
            callouts: [
                {
                    type: 'warning',
                    content: 'Non credere a tutto quello che vedi in videochiamata se la persona ha movimenti scattosi o filtri che "ballano".'
                }
            ],
            microExercise: {
                id: 'ex-17',
                title: 'Sguardo Critico',
                instruction: 'Guarda un video "deepfake" famoso (es. Tom Cruise).',
                task: 'Trova un solo dettaglio che ti fa capire che non è lui.'
            },
            miniQuiz: [
                {
                    question: 'Basta una sola tua foto per creare un deepfake?',
                    options: ['Sì, con le nuove tecnologie è possibile', 'No, servono ore di girato', 'Solo se sei un attore', 'Solo se hai il profilo aperto'],
                    correctIndex: 0,
                    explanation: 'Le moderne IA "one-shot" possono generare falsi partendo da una singola immagine.'
                }
            ],
            reflectionPrompt: 'Ti spaventa l\'idea che qualcuno possa creare un video falso con la tua faccia?',
            resources: [
                {
                    title: 'Deeptrace',
                    url: 'https://www.deeptrace.com',
                    description: 'Ricerca sui deepfake.'
                }
            ]
        },
        {
            id: '18-reporting-apps',
            title: 'Safety Features: Gli strumenti interni dei Social',
            minutes: 15,
            difficulty: 'base',
            learningGoals: [
                'Usare i tasti di segnalazione di Instagram, TikTok e Snapchat.'
            ],
            contentMarkdown: `# Strumenti di Difesa\nOgni app ha un team di sicurezza. Impara a usarli prima che servano.\n\n- **Instagram:** Segnala -> È inappropriato -> Sfruttamento minorile.\n- **TikTok:** Tieni premuto -> Segnala.\n- **Snapchat:** Report -> Safety concern.\n\nNon aver paura di "fare la spia". Le piattaforme possono bannare l'IP del predatore, impedendogli di colpire altri.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Molte app hanno la funzione "Strict Mode" per i minorenni. Attivala subito.'
                }
            ],
            microExercise: {
                id: 'ex-18',
                title: 'Mappatura',
                instruction: 'Prendi la tua app preferita.',
                task: 'Trova il tasto per segnalare un utente per "molestie" o "adescamento".'
            },
            miniQuiz: [
                {
                    question: 'Perché è importante segnalare alle piattaforme?',
                    options: ['Per far chiudere l\'app', 'Per proteggere anche gli altri utenti', 'Per vincere premi', 'Non è importante'],
                    correctIndex: 1,
                    explanation: 'La tua segnalazione potrebbe salvare decine di altri ragazzi.'
                }
            ],
            reflectionPrompt: 'Hai mai segnalato qualcuno online?',
            resources: [
                {
                    title: 'Snapchat Safety',
                    url: 'https://values.snap.com/safety',
                    description: 'Snap safety center.'
                }
            ]
        },
        {
            id: '19-legal-rights',
            title: 'Diritti Legali: La Legge 71/2017 e il GDPR',
            minutes: 20,
            difficulty: 'intermedia',
            learningGoals: [
                'Conoscere le leggi che ti proteggono in Italia.'
            ],
            contentMarkdown: `# La Legge è con Te\nIn Italia ci sono leggi specifiche molto potenti che ti proteggono.\n\n- **Legge 71/2017:** Si occupa di Cyberbullismo. Ti permette di chiedere la rimozione di contenuti dannosi entro 48 ore.\n- **GDPR:** Regola la tua privacy in tutta Europa. Tu sei il proprietario dei tuoi dati.\n- **Codice Penale:** L'adescamento è punito duramente, anche se non c'è contatto fisico.`,
            callouts: [
                {
                    type: 'legal',
                    content: 'Puoi chiedere al Garante della Privacy di intervenire se un social non cancella una tua foto entro 48 ore dalla tua richiesta.'
                }
            ],
            microExercise: {
                id: 'ex-19',
                title: 'Scrivi al Social',
                instruction: 'Immagina di voler far cancellare un video.',
                task: 'Scrivi la frase magica che cita la Legge 71/2017.'
            },
            miniQuiz: [
                {
                    question: 'Quanto tempo ha un social per rispondere a una tua richiesta di rimozione per cyberbullismo?',
                    options: ['12 ore', '48 ore', 'Una settimana', 'Un mese'],
                    correctIndex: 1,
                    explanation: 'La Legge 71/2017 impone tempi brevissimi per la protezione dei minori.'
                }
            ],
            reflectionPrompt: 'Sapevi di avere così tanto potere legale sui tuoi dati?',
            resources: [
                {
                    title: 'E-privacy',
                    url: 'https://ec.europa.eu/digital-single-market/en/online-privacy',
                    description: 'EU Digital Rights.'
                }
            ]
        },
        {
            id: '20-community-roles',
            title: 'Bystander Effect: Aiutare un amico in pericolo',
            minutes: 18,
            difficulty: 'base',
            learningGoals: [
                'Spezzare il cerchio dell\'omertà online.'
            ],
            contentMarkdown: `# L'Effetto Spettatore\nSe vedi un amico che sta venendo adescato o ricattato, non stare a guardare. Il predatore conta sul fatto che nessuno dirà nulla.\n\n## Cosa fare?\n1. **Offri supporto:** "Ehi, ho notato questa cosa, sono con te".\n2. **Suggerisci l'aiuto professionale:** "Chiamiamo insieme il 1.96.96?".\n3. **Segnala tu stesso:** Puoi segnalare account sospetti anche se non colpiscono te direttamente.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'A volte un amico ha solo bisogno che qualcuno gli dia il coraggio di parlare coi genitori.'
                }
            ],
            microExercise: {
                id: 'ex-20',
                title: 'Role Play',
                instruction: 'Un amico ti dice: "Sto mandando foto a un tipo di 25 anni perché mi regala le skin".',
                task: 'Cosa gli rispondi in 10 parole?'
            },
            miniQuiz: [
                {
                    question: 'Cos\'è il Bystander Effect?',
                    options: ['Un virus', 'La tendenza a non intervenire se ci sono altre persone', 'Un gioco di ruolo', 'Un filtro fotografico'],
                    correctIndex: 1,
                    explanation: 'Spesso pensiamo "ci penserà qualcun altro", ma quel qualcun altro non arriva mai.'
                }
            ],
            reflectionPrompt: 'Hai mai visto qualcosa di sbagliato online e non hai detto nulla? Perché?',
            resources: [
                {
                    title: 'Cyberbullying.org',
                    url: 'https://cyberbullying.org',
                    description: 'Research and resources.'
                }
            ]
        },
        {
            id: '21-technical-blocks',
            title: 'DNS e Firewall: Barriere tecniche domestiche',
            minutes: 25,
            difficulty: 'avanzata',
            learningGoals: [
                'Configurare un DNS sicuro per bloccare siti malevoli.'
            ],
            contentMarkdown: `# Barriere Tecniche\nPuoi impedire al tuo computer di connettersi a siti noti per il grooming o i malware.\n\n- **DNS Protettivi:** Usa Cloudflare (1.1.1.3) o CleanBrowsing. Bloccano automaticamente siti di pedopornografia e malware.\n- **Firewall:** Controlla quali programmi sul tuo PC hanno accesso a Internet.\n- **VPN:** Usala con cautela. Nasconde il tuo IP ma non ti protegge dai manipolatori.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Configurare il DNS sul router protegge tutti i dispositivi della casa, inclusi tablet e console.'
                }
            ],
            microExercise: {
                id: 'ex-21',
                title: 'Configuratore',
                instruction: 'Cerca come si cambia il DNS sul tuo smartphone.',
                task: 'Prova a inserire 1.1.1.3 e vedi se Internet funziona ancora.'
            },
            miniQuiz: [
                {
                    question: 'Cosa fa un DNS "Family Friendly"?',
                    options: ['Ti fa navigare più veloce', 'Blocca l\'accesso a siti pericolosi a monte', 'Ti regala skin', 'Pulisce lo schermo'],
                    correctIndex: 1,
                    explanation: 'Funziona come un filtro che impedisce al browser di trovare i siti "cattivi".'
                }
            ],
            reflectionPrompt: 'Ti piacerebbe avere un controllo più tecnico sulla tua rete o preferisci sia tutto automatico?',
            resources: [
                {
                    title: 'CleanBrowsing',
                    url: 'https://cleanbrowsing.org',
                    description: 'Family filter DNS.'
                }
            ]
        },
        {
            id: '22-grooming-games',
            title: 'Gaming Safety: Dentro Roblox e Fortnite',
            minutes: 20,
            difficulty: 'base',
            learningGoals: [
                'Rischi specifici nei metaversi di gioco.'
            ],
            contentMarkdown: `# Sicurezza nel Gaming\nRoblox e Fortnite sono i "parchi giochi" preferiti dai predatori.\n\n- **Chat in-game:** Spesso usano linguaggi in codice per evitare i filtri automatici.\n- **Inviti a server esterni:** Cercano di portarti fuori dal gioco su WhatsApp o Discord.\n- **Economie interne:** Usano Robux o V-Bucks per "comprarti".`,
            callouts: [
                {
                    type: 'warning',
                    content: 'Se un utente conosciuto in game ti chiede di passare su WhatsApp "perché la chat di gioco fa schifo", rifiuta sempre.'
                }
            ],
            microExercise: {
                id: 'ex-22',
                title: 'Audit In-Game',
                instruction: 'Controlla le impostazioni di Roblox.',
                task: 'Chi può mandarti messaggi? Chi può invitarti nei server?'
            },
            miniQuiz: [
                {
                    question: 'Perché un predatore vuole "spostarsi dalla chat di gioco"?',
                    options: ['Per connettersi meglio', 'Per evitare che le sue parole vengano scansionate dai filtri di sicurezza del gioco', 'Perché è nostalgico', 'Per errore'],
                    correctIndex: 1,
                    explanation: 'Uscire dal gioco significa uscire dalla zona protetta dai moderatori.'
                }
            ],
            reflectionPrompt: 'Hai mai incontrato adulti sospetti mentre giocavi online?',
            resources: [
                {
                    title: 'Roblox Safety',
                    url: 'https://corp.roblox.com/safety/',
                    description: 'Roblox safety guide.'
                }
            ]
        },
        {
            id: '23-social-engineering-advanced',
            title: 'Manipolazione 2.0: Phishing di Stato e Spear Phishing',
            minutes: 30,
            difficulty: 'avanzata',
            learningGoals: [
                'Riconoscere attacchi mirati ad alta precisione.'
            ],
            contentMarkdown: `# Spear Phishing\nNon è una mail a caso fatta male. È un attacco scritto **apposta per te**. Sanno il nome del tuo cane, dove vai a scuola e cosa hai mangiato ieri (preso dai tuoi social).\n\n- **Come difendersi:** Se una richiesta sembra troppo precisa o "impossibile", verifica sempre tramite un\'altra via (chiama la persona, non rispondere alla mail).`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Diffida delle mail che contengono troppi dettagli personali: spesso sono usati per abbassare la tua guardia.'
                }
            ],
            microExercise: {
                id: 'ex-23',
                title: 'Smaschera lo Spear',
                instruction: 'Ricevi: "Ciao [Tuo Nome], sono il prof di [Tua Materia], clicca qui per il voto".',
                task: 'Controlla l\'indirizzo email del mittente. È quello della scuola o è un Gmail a caso?'
            },
            miniQuiz: [
                {
                    question: 'Qual è la differenza tra Phishing e Spear Phishing?',
                    options: ['Nessuna', 'Lo Spear Phishing è mirato a una persona specifica usando dati reali', 'Uno si fa via mare', 'Il Phishing è più pericoloso'],
                    correctIndex: 1,
                    explanation: 'Lo Spear Phishing usa la personalizzazione come arma di manipolazione.'
                }
            ],
            reflectionPrompt: 'Ti saresti fidato di una mail che cita il tuo professore preferito?',
            resources: [
                {
                    title: 'NCSC',
                    url: 'https://www.ncsc.gov.uk',
                    description: 'Phishing guidance.'
                }
            ]
        },
        {
            id: '24-victim-blaming',
            title: 'Senza Colpa: Combattere il Victim Blaming',
            minutes: 15,
            difficulty: 'base',
            learningGoals: [
                'Eliminare il senso di colpa della vittima.'
            ],
            contentMarkdown: `# La Colpa è Solo del Predatore\nMolti ragazzi non parlano perché temono di essere sgridati: "Perché hai risposto?", "Perché hai mandato quella foto?".\n\n- **La Verità:** Il predatore è un manipolatore professionista. È lui che ha violato la legge, non tu. Essere ingenui non è un reato. Essere un predatore sì.\n- **Solidarietà:** Non giudicare i tuoi amici se cadono in queste trappole.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Nessuno "se la cerca". Il predatore cerca sempre qualcuno da colpire.'
                }
            ],
            microExercise: {
                id: 'ex-24',
                title: 'Empatia',
                instruction: 'Un amico è stato truffato.',
                task: 'Scrivi 3 frasi di supporto che non contengano la parola "Perché".'
            },
            miniQuiz: [
                {
                    question: 'Di chi è la colpa se un minore cade nella trappola di un predatore?',
                    options: ['Dei genitori', 'Della vittima', 'Del predatore', 'Del social network'],
                    correctIndex: 2,
                    explanation: 'Legalmente e moralmente, la responsabilità è solo di chi compie l\'abuso.'
                }
            ],
            reflectionPrompt: 'Hai mai avuto paura di essere giudicato per un errore online?',
            resources: [
                {
                    title: 'Childnet',
                    url: 'https://www.childnet.com',
                    description: 'Support for victims.'
                }
            ]
        },
        {
            id: '25-pedofilia-vs-grooming',
            title: 'Pedofilia vs Grooming: Chiarimento dei concetti',
            minutes: 18,
            difficulty: 'base',
            learningGoals: [
                'Distinguere tra patologia e comportamento criminale.',
                'Capire come la legge italiana tratta le due diverse fattispecie.'
            ],
            contentMarkdown: `# Chiarimento Linguistico e Legale\nSpesso questi termini vengono confusi, ma hanno significati molto diversi nel diritto e nella psicologia.\n\n- **Pedofilia:** È una parafilia (orientamento psicologico). Non è un crimine di per sé avere un orientamento, ma lo è metterlo in pratica.\n- **Grooming:** È un **comportamento criminale volontario** (l'adescamento). Spesso chi fa grooming non è un "malato", ma un manipolatore che trae piacere dal potere e dal controllo.\n\nPerché è importante? Perché non dobbiamo cercare "persone malate", ma **comportamenti predatori** che chiunque potrebbe simulare dietro uno schermo.`,
            callouts: [
                {
                    type: 'legal',
                    content: 'La legge italiana punisce il "comportamento" di adescamento a prescindere dal profilo psicologico dell\'autore.'
                }
            ],
            microExercise: {
                id: 'ex-25',
                title: 'Definizione Corretta',
                instruction: 'Un utente in chat dice: "Non sono un predatore, sono solo una persona sola".',
                task: 'Perché questa frase è una tattica di depistaggio tipica del grooming?'
            },
            miniQuiz: [
                {
                    question: 'Qual è la differenza principale tra i due termini?',
                    options: ['Nessuna', 'Uno è un orientamento psicologico, l\'altro è un atto criminale di manipolazione', 'Uno si fa solo dal vivo', 'Uno è per i film'],
                    correctIndex: 1,
                    explanation: 'Il grooming è l\'azione di adescare, definita dal comportamento, non dalla mente.'
                }
            ],
            reflectionPrompt: 'Pensi che le parole che usiamo influenzino il modo in cui ci proteggiamo?',
            resources: [
                {
                    title: 'Ministero della Giustizia',
                    url: 'https://www.giustizia.it',
                    description: 'Codice Penale.'
                }
            ]
        },
        {
            id: '26-dating-safety',
            title: 'Online Dating Safety: App e rischi predatori',
            minutes: 22,
            difficulty: 'intermedia',
            learningGoals: [
                'Navigare in sicurezza sulle app di dating se si è quasi maggiorenni.',
                'Riconoscere i profili "predatori" nelle app di dating.'
            ],
            contentMarkdown: `# Dating App: Il terreno di caccia\nAnche se molte app richiedono 18 anni, molti adolescenti le usano. Questo li mette in una posizione di estrema vulnerabilità.\n\n- **Il Profilo Perfetto:** Troppo bello, troppo ricco, troppo disponibile.\n- **Spostamento rapido:** Ti chiedono subito di passare su Telegram o WhatsApp "per privacy".\n- **Richieste di aiuto:** Iniziano quasi subito a parlare di problemi economici o personali per farti sentire "speciale" nel poterli aiutare.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'Le app di dating non sono verificate. Chiunque può caricare la foto di qualcun altro.'
                }
            ],
            microExercise: {
                id: 'ex-26',
                title: 'Check del Profilo',
                instruction: 'Ricevi un match da una modella straniera che ti scrive in italiano perfetto.',
                task: 'Quale test di verifica le proporresti?'
            },
            miniQuiz: [
                {
                    question: 'Perché i predatori vogliono spostarsi dalle app di dating su Telegram?',
                    options: ['Perché l\'app è lenta', 'Perché Telegram permette di cancellare i messaggi per entrambi e ha meno controlli', 'Perché è più colorato', 'Perché costa meno'],
                    correctIndex: 1,
                    explanation: 'Cancellare le prove è la priorità del predatore.'
                }
            ],
            reflectionPrompt: 'Pensi che l\'amore possa davvero nascere su una chat senza mai vedersi?',
            resources: [
                {
                    title: 'Tinder Safety',
                    url: 'https://www.tinder.com/safety',
                    description: 'Safety tips.'
                }
            ]
        },
        {
            id: '27-gaming-deep-dive',
            title: 'Discord e Community: Approfondimento strategico',
            minutes: 25,
            difficulty: 'avanzata',
            learningGoals: [
                'Capire come funzionano i server "trappola" su Discord.',
                'Proteggere il proprio ID e i propri dati tecnici.'
            ],
            contentMarkdown: `# Discord Deep Dive\nDiscord è l'app più usata dai gamer, ma anche la più pericolosa per quanto riguarda gli attacchi mirati.\n\n- **Bot Fake:** Bot che ti chiedono di cliccare un link per "verificarti" e ti rubano il token del profilo.\n- **Social Engineering nei Ruoli:** Essere promosso a "Moderatore" solo per guadagnare la tua fiducia e poi chiederti favori o foto.\n- **Lurking:** Utenti che non scrivono mai ma osservano tutto quello che dici per mesi prima di scriverti un DM perfetto.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Usa l\'autenticazione a due fattori (2FA) via app, mai via SMS su Discord.'
                }
            ],
            microExercise: {
                id: 'ex-27',
                title: 'Audit dei Server',
                instruction: 'In quanti server Discord sei entrato negli ultimi 6 mesi?',
                task: 'Esci da 3 server che non usi più. L\'hai fatto?'
            },
            miniQuiz: [
                {
                    question: 'Cos\'è il "Lurking"?',
                    options: ['Un tipo di malware', 'L\'osservazione silenziosa di una chat per raccogliere dati', 'Un gioco di corse', 'Un comando di chat'],
                    correctIndex: 1,
                    explanation: 'I predatori osservano a lungo per capire le tue debolezze prima di colpire.'
                }
            ],
            reflectionPrompt: 'Quanta gente che non conosci sa in che server Discord ti trovi?',
            resources: [
                {
                    title: 'Discord Blog',
                    url: 'https://discord.com/blog',
                    description: 'Security updates.'
                }
            ]
        },
        {
            id: '28-social-targeting',
            title: 'Instagram e TikTok: Targeting e algoritmi',
            minutes: 20,
            difficulty: 'intermedia',
            learningGoals: [
                'Capire come l\'algoritmo "aiuta" i predatori.',
                'Proteggere le proprie storie e i propri contenuti.'
            ],
            contentMarkdown: `# Algoritmi e Predatori\nL'algoritmo di TikTok e Instagram ti consiglia a persone che hanno interessi simili ai tuoi. Purtroppo, se un predatore cerca "teen" o certi hashtag, l'algoritmo potrebbe proporgli il tuo profilo se è pubblico.\n\n- **Close Friends:** Usa la funzione "Amici stretti" per tutto quello che è personale.\n- **Hashtag Rischiose:** Evita hashtag che attirano l\'attenzione di sconosciuti.\n- **Geotag differiti:** Pubblica la foto del ristorante quando sei già tornato a casa, mai mentre sei lì.`,
            callouts: [
                {
                    type: 'warning',
                    content: 'Le dirette (Live) sono il momento di massima esposizione. Non dire mai dove ti trovi.'
                }
            ],
            microExercise: {
                id: 'ex-28',
                title: 'Pulizia Tag',
                instruction: 'Controlla le foto in cui sei taggato.',
                task: 'Rimuovi un tag da una foto che non ti piace o che è troppo privata.'
            },
            miniQuiz: [
                {
                    question: 'Perché è meglio postare le storie in differita?',
                    options: ['Per fare più like', 'Per non far sapere in tempo reale dove ti trovi', 'Perché Internet è lento', 'Per correggere i filtri'],
                    correctIndex: 1,
                    explanation: 'La geolocalizzazione in tempo reale è una mappa per i malintenzionati.'
                }
            ],
            reflectionPrompt: 'Quanti dei tuoi follower conosci dal vivo?',
            resources: [
                {
                    title: 'Instagram Safety',
                    url: 'https://about.instagram.com/community/safety',
                    description: 'Safety tools.'
                }
            ]
        },
        {
            id: '29-intl-laws',
            title: 'Leggi Internazionali e Diritti Digitali',
            minutes: 25,
            difficulty: 'avanzata',
            learningGoals: [
                'Comprendere le differenze tra leggi USA, EU e Italiane.',
                'Conoscere il diritto all\'oblio.'
            ],
            contentMarkdown: `# Il Diritto nel Cloud\nLa tua foto è memorizzata in Irlanda, l'app è americana e tu sei in Italia. Quale legge vale?\n\n- **GDPR (Europa):** La protezione più forte al mondo. Hai il diritto di sapere COSA sanno di te.\n- **Section 230 (USA):** La legge che protegge i social, rendendo difficile farli chiudere.\n- **Diritto all'Oblio:** Il tuo diritto di chiedere che vecchie informazioni dannose vengano rimosse dai motori di ricerca.`,
            callouts: [
                {
                    type: 'legal',
                    content: 'Grazie al GDPR, puoi scaricare l\'intero archivio di tutto quello che Facebook o TikTok sanno di te.'
                }
            ],
            microExercise: {
                id: 'ex-29',
                title: 'Richiesta Dati',
                instruction: 'Vai nelle impostazioni di un social.',
                task: 'Trova il tasto "Scarica i tuoi dati". Quanti GB pensi che siano?'
            },
            miniQuiz: [
                {
                    question: 'Cos\'è il GDPR?',
                    options: ['Un nuovo social', 'Il Regolamento Europeo sulla Protezione dei Dati', 'Un tipo di gioco', 'Un antivirus'],
                    correctIndex: 1,
                    explanation: 'È la legge che ti dà potere sui tuoi dati personali in Europa.'
                }
            ],
            reflectionPrompt: 'Pensi che Internet dovrebbe avere un unico governo o restare così com\'è?',
            resources: [
                {
                    title: 'EU Digital Services Act',
                    url: 'https://ec.europa.eu/digital-strategy',
                    description: 'Legisazione EU.'
                }
            ]
        },
        {
            id: '30-final-exam-module-1',
            title: 'Certificazione Finale: Protettore Digitale',
            minutes: 40,
            difficulty: 'avanzata',
            learningGoals: [
                'Analisi di scenari complessi combinati.',
                'Dimostrare la padronanza delle 30 lezioni del modulo.'
            ],
            contentMarkdown: `# Gran Finale: Il Test di 30 Lezioni\nIn questa lezione metterai alla prova tutto quello che hai imparato. Analizzeremo una storia dall\'inizio alla fine: dal primo contatto su un gioco alla minaccia di ricatto.\n\n## Scenario Finale\n"Leo incontra Sora su Genshin Impact. Sora è gentile, gli regala cristalli, lo isola dagli amici di scuola, chiede foto 'per il certificato di amicizia', e infine minaccia di postarle se Leo smette di giocare con lui."\n\n**Cosa hai imparato?**\n- Smascherare il love bombing.\n- Proteggere la privacy (GDPR e Legge 71).\n- Reagire correttamente al ricatto (Sextortion protocol).\n- Contattare le autorità e il 1.96.96.`,
            callouts: [
                {
                    type: 'tip',
                    content: 'Hai completato il percorso formativo più completo in Italia sulla difesa dai predatori online. Ben fatto!'
                }
            ],
            microExercise: {
                id: 'ex-30',
                title: 'Piano di Risposta Finale',
                instruction: 'Basandoti sulla storia di Leo.',
                task: 'Elenca i 7 passi critici che Leo deve fare per uscirne pulito e protetto.'
            },
            miniQuiz: [
                {
                    question: 'Qual è l\'arma più potente contro un predatore online?',
                    options: ['Un firewall costoso', 'La conoscenza, il coraggio di parlare e la rete di supporto', 'Cancellare tutti i social', 'Cambiare identità'],
                    correctIndex: 1,
                    explanation: 'L\'istruzione è la barriera invalicabile, ma il supporto degli altri è la tua forza.'
                }
            ],
            reflectionPrompt: 'Come è cambiata la tua visione della sicurezza online dopo queste 30 lezioni?',
            resources: [
                {
                    title: 'Bussola Academy',
                    url: 'https://progettobussola.it/certif',
                    description: 'Ottieni il tuo badge di livello "Consapevole".'
                }
            ]
        }
    ],
    games: [
        {
            id: 'predator-scenario',
            title: 'Predator Hunter',
            description: 'Analizza chat reali e identifica i tentativi di manipolazione.',
            type: 'scenario'
        }
    ],
    tips: [
        'Non accettare mai regali da sconosciuti online.',
        'Copri la webcam quando non la usi.',
        'Se qualcuno ti chiede di tenere un segreto, dillo subito a un adulto di fiducia.'
    ],
    resources: [
        {
            title: 'Telefono Azzurro',
            url: 'https://www.azzurro.it',
            description: 'Supporto immediato per minori in difficoltà.'
        }
    ]
}
