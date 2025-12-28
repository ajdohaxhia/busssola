export interface Lesson {
    id: string
    title: string
    content: string // Markdown-formatted real educational content
    tips: string[] // 5-10 practical tips
}

export interface Game {
    id: string
    title: string
    description: string
    type: 'classifier' | 'chatbot' | 'analyzer' | 'builder' | 'tracer' | 'detector' | 'recognizer' | 'exercise'
    questions?: any[]
}

export interface Module {
    id: string
    title: string
    description: string
    duration: string
    difficulty: 'Base' | 'Intermedia' | 'Avanzata'
    icon: string
    color: string
    lessons: Lesson[]
    games: Game[]
    tips: string[]
}

export const MODULES_DATA: Module[] = [
    {
        id: 'predatori-online',
        title: 'Predatori Online',
        description: 'Grooming, sextortion, catfish detection',
        duration: '2-3 ore',
        difficulty: 'Intermedia',
        icon: '🚨',
        color: 'from-red-900',
        lessons: [
            {
                id: 'grooming-basics',
                title: 'Cos\'è il Grooming?',
                content: `# Grooming Online: La Trappola dei Predatori

Il grooming è il processo deliberato attraverso il quale un adulto stabilisce una relazione emotiva con un minore per abbassare le sue inibizioni e prepararlo allo sfruttamento sessuale.

## Come Funziona il Grooming

### Fase 1: Love Bombing
L'adulto si presenta come amico perfetto. Ti complimenta costantemente, si interessa ai tuoi problemi, è disponibile 24/7. Sembra che ti capisca più di chiunque altro.

**Red Flag:** Nessun motivo per cui uno sconosciuto dovrebbe comportarsi così.

### Fase 2: Isolamento Psicologico
"I tuoi amici non ti capiscono come me"
"I tuoi genitori sono troppo severi"
"Siamo speciali, solo noi due capiamo questa connessione"

L'adulto crea un senso di esclusività che ti fa sentire importante ma isolato.

### Fase 3: Normalizzazione di Contenuti Sessuali
Inizia con "battute" su sesso. Poi chiede di parlar di ragazzi/ragazze che ti piacciono. Gradualmente, il discorso diventa sempre più esplicito.

Non è un grande salto, è una rampa graduale che ti fa abituare.

### Fase 4: Transizione al Privato
"I nostri amici non capiranno questa conversazione"
Ti convince a passare da social pubblici a app private (Telegram, Snapchat, Discord).

Perché? Perché vuole evitare che altre persone vedano la conversazione. Sei isolato.

### Fase 5: Richieste di Contenuti Intimi
"Invia una foto solo per me"
"Fare una videochiamata?"

Se rifiuti, usa manipolazione emotiva: "Se mi ami davvero, faresti questo."

## Come Riconoscere un Groomer

1. **Conosce esattamente cosa dire** per farti sentire bene
2. **Chiede velocemente di andare su app private**
3. **Fa domande sempre più personali** (corpo, relazioni, sesso)
4. **Crea urgenza emotiva** ("solo tu mi capisci")
5. **Non accetta "no"** - continua a convincere
6. **Minaccia** se rifiuti ("dirò a tutti di te")

## Cosa Fare Se Pensi di Essere Groomato

1. **Blocca immediatamente**
2. **Fai screenshot di TUTTO**
3. **Parla con un adulto fiducia** (genitore, insegnante, psicologo)
4. **Segnala a piattaforma**
5. **Contatta Polizia Postale** o Telefono Azzurro

**Non è tua colpa.** I groomer sono esperti di manipolazione emotiva. Non sei stupido se è successo a te.`,
                tips: [
                    'Adulto che ti contatta da sconosciuto? Red flag immediata',
                    'Chiede di andare su app privata subito? BLOCCA',
                    'Complimenti eccessivi = tattica di manipolazione',
                    'Se fa domande su corpo o sesso, NON rispondere',
                    'Screenshot TUTTO, anche se dice "disappears in 30 sec"',
                    'Blocca e segnala. Non è scortesia, è protezione.',
                    'Parla SEMPRE con un adulto fiducia',
                    'Telefono Azzurro 1-96-96 se non sai come contattare qualcuno'
                ]
            },
            {
                id: 'catfishing-spot',
                title: 'Smascherare il Catfishing',
                content: `# Catfishing: Chi c'è davvero dietro lo schermo?

Il catfishing avviene quando qualcuno crea una falsa identità online per ingannare gli altri. Non sempre è per motivi sessuali; a volte è per noia, per truffa economica o per manipolazione emotiva.

## Segnali di Allarme (Red Flags)

1. **Foto Tropo Belle:** Usa foto di modelli o influencer minori.
2. **Scuse per la Videocamera:** "La mia webcam è rotta", "Ho il microfono guasto", "C'è troppa gente in casa". Se dopo settimane non ha mai fatto videochiamate, è un grosso segnale.
3. **Storie Drammatiche:** Ha sempre un'emergenza medica, un lutto in famiglia o un problema economico per cui ha bisogno di conforto o... denaro.
4. **Incoerenze:** Dimentica dettagli delle storie che ha raccontato. Cambia età, luogo di residenza o interessi.
5. **Velocità Eccessiva:** Dice di amarti o di essere il tuo migliore amico dopo pochi giorni.

## Come Verificare l'Identità

- **Reverse Image Search:** Usa Google Images o TinEye per vedere se le sue foto appaiono altrove.
- **Richiedi una Videochiamata:** Senza filtri, subito.
- **Chiedi di Vedervi in Luogo Pubblico:** (Sempre con un genitore presente). Se rifiuta sistematicamente, scappa.
- **Cerca il suo Nome:** Controlla se ha altri profili social coerenti.`,
                tips: [
                    'Controlla la data di creazione del profilo: i profili nuovi sono sospetti',
                    'Diffida di chi non ha amici in comune o tag in foto reali',
                    'Usa Google Lens sulle sue foto profilo',
                    'Non condividere mai segreti personali con chi non hai incontrato dal vivo',
                    'Se sembra troppo bello per essere vero, probabilmente lo è'
                ]
            }
        ],
        games: [
            {
                id: 'grooming-chatbot',
                title: 'Riconosci il Groomer',
                description: 'Conversazione simulata con un groomer. Scegli le risposte corrette.',
                type: 'chatbot',
            }
        ],
        tips: ['Non accettare richieste da sconosciuti', 'Reverse image search sempre', 'Video call per verify']
    },
    {
        id: 'privacy-tecnica',
        title: 'Privacy Tecnica',
        description: 'Fingerprinting, tracking, browser hardening',
        duration: '1-2 ore',
        difficulty: 'Avanzata',
        icon: '🔒',
        color: 'from-blue-900',
        lessons: [
            {
                id: 'tracking-cookies',
                title: 'Cookie & Tracking',
                content: `# Come Ti Seguono Online: Oltre i Cookie

I siti web vogliono sapere chi sei, cosa ti piace e cosa compri. Per farlo, usano diverse tecnologie di tracciamento.

## Cookie di Terze Parti
Sono piccoli file salvati sul tuo computer da siti che non stai visitando direttamente (es. un banner pubblicitario su un blog). Permettono agli inserzionisti di vedere quali siti visiti durante la giornata.

## Browser Fingerprinting
È una tecnica più subdola. Il sito analizza la tua risoluzione dello schermo, i font installati, la versione del browser e del sistema operativo. Queste informazioni combinate creano un'"impronta digitale" unica che permette di identificarti anche senza cookie.

## Come Proteggersi
1. **Usa Browser Orientati alla Privacy:** Firefox, Brave o Mullvad Browser.
2. **Usa Estensioni:** uBlock Origin è fondamentale.
3. **Modalità Incognito:** Utile per non salvare la cronologia locale, ma NON ti rende anonimo agli occhi dei siti.`,
                tips: [
                    'Disabilita i cookie di terze parti nelle impostazioni del browser',
                    'Svuota la cache regolarmente',
                    'Evita di installare troppe estensioni: aumentano il tuo fingerprinting',
                    'Usa motori di ricerca privati come DuckDuckGo o Startpage',
                    'Controlla le autorizzazioni dei siti per posizione e fotocamera'
                ]
            }
        ],
        games: [
            {
                id: 'privacy-audit',
                title: 'Hardware Audit',
                description: 'Controlla quali sensori sono attivi sul tuo dispositivo.',
                type: 'analyzer'
            }
        ],
        tips: ['Usa VPN affidabili', 'Abilita il Do Not Track', 'Pulisci i metadati delle foto']
    },
    {
        id: 'phishing-malware',
        title: 'Phishing & Malware',
        description: 'Riconoscere truffe, ransomware e scam',
        duration: '2 ore',
        difficulty: 'Intermedia',
        icon: '🎣',
        color: 'from-orange-900',
        lessons: [
            {
                id: 'phishing-anatomy',
                title: 'Anatomia di un Phishing',
                content: `# Phishing: L'Arte dell'Inganno Digitale

Il phishing è una tecnica di ingegneria sociale usata per rubare dati sensibili come password e numeri di carta di credito.

## I 4 Pilastri del Phishing

1. **Senso di Urgenza:** "Il tuo conto verrà chiuso entro 24 ore". L'obiettivo è farti agire prima di pensare.
2. **Autorità Falsa:** Si spaccano per la tua banca, Amazon, Netflix o addirittura la Polizia.
3. **Link Malevoli:** L'URL sembra corretto ma non lo è (es. \`paypaI.com\` invece di \`paypal.com\`).
4. **Allegati Pericolosi:** File .zip o .exe che installano malware.

## Come Verificare un Link
Passa il mouse sopra il link (senza cliccare!) per vedere l'indirizzo reale in basso a sinistra nel browser.`,
                tips: [
                    'Controlla sempre il mittente reale dell\'email',
                    'Diffida di saluti generici come "Caro Cliente"',
                    'Non inserire mai dati sensibili su siti che usano HTTP invece di HTTPS',
                    'La tua banca non ti chiederà MAI la password via email',
                    'Usa l\'autenticazione a due fattori (2FA) ovunque'
                ]
            }
        ],
        games: [
            {
                id: 'phishing-detector',
                title: 'Email Investigator',
                description: 'Smaschera le email di phishing prima che facciano danni.',
                type: 'detector'
            }
        ],
        tips: ['Usa un gestore di password', 'Aggiorna sempre il sistema operativo', 'Fai backup offline']
    },
    {
        id: 'cyberbullismo',
        title: 'Cyberbullismo',
        description: 'Hate speech, stalking e supporto psicologico',
        duration: '1-2 ore',
        difficulty: 'Base',
        icon: '💔',
        color: 'from-pink-900',
        lessons: [
            {
                id: 'bystander-effect',
                title: 'L\'Effetto Spettatore',
                content: `# Cyberbullismo: Più di una Semplice "Bravata"

Il bullismo online è devastante perché non si ferma mai. È in tasca della vittima 24 ore su 24.

## L'Effetto Spettatore (Bystander Effect)
In una chat di gruppo, se qualcuno viene insultato, spesso nessuno interviene. Perché? Perché si pensa: "Lo farà qualcun altro". 

## Essere un Upstander
Invece di ignorare, puoi fare la differenza:
1. **Contatta privatamente la vittima** per dare supporto.
2. **Segnala il post** in modo anonimo alla piattaforma.
3. **Non ridere o condividere** i contenuti offensivi.`,
                tips: [
                    'Non rispondere mai alle provocazioni: i bulli cercano reazione',
                    'Fai screenshot di ogni insulto o minaccia',
                    'Blocca l\'utente immediatamente',
                    'Parlarne con un adulto non è fare la spia, è proteggersi',
                    'Ricorda che il bullismo è un reato perseguibile'
                ]
            }
        ],
        games: [
            {
                id: 'bullismo-logic',
                title: 'Dossier dei Reati',
                description: 'Identifica quali comportamenti online violano la legge.',
                type: 'analyzer'
            }
        ],
        tips: ['Imposta i profili social come privati', 'Pensa prima di postare', 'Il silenzio alimenta il bullo']
    },
    {
        id: 'social-addiction',
        title: 'Social Media Addiction',
        description: 'Dark patterns, dopamina e digital detox',
        duration: '1-2 ore',
        difficulty: 'Base',
        icon: '📱',
        color: 'from-violet-900',
        lessons: [
            {
                id: 'dopamine-loops',
                title: 'Il Loop della Dopamina',
                content: `# Perché non riusciamo a smettere?

I social media sono progettati da psicologi comportamentali per tenerti incollato allo schermo il più a lungo possibile.

## Il Meccanismo del Like
Ricevere una notifica rilascia dopamina, l'ormone del piacere. È lo stesso meccanismo delle slot machine: non sai QUANDO arriverà il prossimo contenuto interessante, quindi continui a scorrere (Infinite Scroll).

## Dark Patterns
Sono trucchi di design per ingannarti:
- **Infinite Scroll:** Non c'è mai una fine alla pagina, eliminando i punti di arresto naturali.
- **Notifiche Fantasma:** Ti attirano nell'app anche quando non c'è nulla di importante.
- **FOMO (Fear Of Missing Out):** La paura di essere tagliati fuori se non si è online 24/7.`,
                tips: [
                    'Disattiva le notifiche non umane (es. "X ha postato dopo tanto tempo")',
                    'Usa la modalità "Scala di Grigi" per rendere il telefono meno attraente',
                    'Non portare il telefono a letto',
                    'Imposta un limite di tempo per le app di social media',
                    'Fai un "Digital Detox" di 24 ore ogni mese'
                ]
            }
        ],
        games: [
            {
                id: 'addiction-tracker',
                title: 'Mood Tracker',
                description: 'Bilancia ore di schermo e barre di energia mentale.',
                type: 'exercise'
            }
        ],
        tips: ['Usa la regola 20-20-20', 'Segui solo account che ti ispirano', 'Le relazioni reali valgono più dei like']
    },
    {
        id: 'gdpr-dati',
        title: 'GDPR & Dati Personali',
        description: 'Termini di servizio e i tuoi diritti legali',
        duration: '1 ora',
        difficulty: 'Intermedia',
        icon: '📋',
        color: 'from-blue-700',
        lessons: [
            {
                id: 'tos-reality',
                title: 'La Verità sui TOS',
                content: `# "Ho letto e accetto": La Bugia più Grande

I Termini di Servizio (TOS) sono contratti legali. Spesso accettiamo che le aziende usino i nostri dati in modi che non immaginiamo.

## I Tuoi Diritti (GDPR)
Grazie alla legge europea GDPR, hai dei superpoteri:
1. **Diritto all'Oblio:** Puoi chiedere la cancellazione totale dei tuoi dati.
2. **Portabilità:** Puoi scaricare tutti i dati che un'app ha su di te.
3. **Trasparenza:** Le aziende devono dirti COSA raccolgono e PERCHÉ.

## Cosa Sanno di Te
Oltre al nome, sanno dove sei (GPS), chi frequenti, quali app usi e persino quanto velocemente scrivi.`,
                tips: [
                    'Leggi il riassunto della privacy policy (usa tosdr.org)',
                    'Usa email diverse per servizi diversi',
                    'Revoca le autorizzazioni alle app che non usi più',
                    'Non collegare il tuo account Facebook/Google a ogni sito',
                    'Controlla periodicamente le impostazioni "Privacy e Dati"'
                ]
            }
        ],
        games: [
            {
                id: 'gdpr-audit',
                title: 'Data Hunter',
                description: 'Scopri quanti dati un\'app puo estrarre dal tuo telefono.',
                type: 'analyzer'
            }
        ],
        tips: ['I dati sono il nuovo petrolio', 'Se è gratis, il prodotto sei tu', 'Cripta i tuoi file importanti']
    },
    {
        id: 'scuola-online',
        title: 'Scuola Online',
        description: 'Cyber-hygiene in classe e bullismo tra banchi digitali',
        duration: '1 ora',
        difficulty: 'Base',
        icon: '🎓',
        color: 'from-green-900',
        lessons: [
            {
                id: 'classroom-hygiene',
                title: 'Igiene Digitale in Classe',
                content: `# La Tua Classe Digitale: Regole di Convivenza

L'apprendimento online (DAD o piattaforme come Classroom) richiede una nuova etichetta e precauzioni di sicurezza.

## Il "Bombing" delle Lezioni
Condividere il link di una lezione con estranei per farli entrare a disturbare non è un gioco, è un'interruzione di pubblico servizio e può avere conseguenze legali serie.

## La Privacy dei Compagni
Registrare una lezione o fare screenshot ai compagni senza consenso per poi creare meme è una violazione della privacy. Quello che succede in classe (digitale) deve rimanere in classe.

## Sicurezza Account Scuola
Il tuo account istituzionale dà accesso a documenti sensibili. Non condividere mai la password, nemmeno con il tuo migliore amico.`,
                tips: [
                    'Usa uno sfondo sfocato o neutro per proteggere la privacy di casa tua',
                    'Silenzia il microfono quando non parli',
                    'Copri la webcam quando la lezione è finita',
                    'Non usare la chat della lezione per insulti o spam',
                    'Segnala subito al prof se vedi estranei in chiamata'
                ]
            }
        ],
        games: [
            {
                id: 'school-defender',
                title: 'Classroom Guardian',
                description: 'Identifica i rischi di sicurezza in una classe virtuale.',
                type: 'detector'
            }
        ],
        tips: ['Rispetta l\'orario scolastico anche online', 'Usa password forti per il registro elettronico', 'Studia lontano dalle distrazioni social']
    },
    {
        id: 'gaming-communities',
        title: 'Gaming Communities',
        description: 'Tossicità, truffe in-game e protezione IP',
        duration: '2 ore',
        difficulty: 'Intermedia',
        icon: '🎮',
        color: 'from-indigo-900',
        lessons: [
            {
                id: 'gaming-toxicity',
                title: 'Combattere la Tossicità',
                content: `# Gaming: Divertimento o Guerra di Insulti?

Le community di gaming (Roblox, Fortnite, Discord) sono posti fantastici, ma possono diventare tossiche molto velocemente.

## Gaming & Grooming
Molti predatori usano i giochi online per avvicinare i ragazzi perché è facile fingere di essere un coetaneo.

## Truffe degli Oggetti (Skins)
"Ti do questa skin rara se mi dai la tua password". È SEMPRE una truffa. Nessun moderatore o giocatore onesto ti chiederà mai le credenziali.

## Protezione Indirizzo IP
Evita di cliccare su link sospetti in chat. Potrebbero usare un "IP Grabber" per vedere dove abiti o per lanciarti un attacco DDoS che ti scollega da internet.`,
                tips: [
                    'Non accettare regali da sconosciuti in-game',
                    'Usa l\'autenticazione a due fattori sull\'account Steam/Epic/Roblox',
                    'Muta immediatamente i giocatori che insultano',
                    'Non usare il tuo vero nome come nickname',
                    'Gioca solo su server ufficiali o conosciuti'
                ]
            }
        ],
        games: [
            {
                id: 'game-secure',
                title: 'Secure Gamer',
                description: 'Proteggi il tuo account da un tentativo di furto skin.',
                type: 'recognizer'
            }
        ],
        tips: ['Non scaricare cheat o hack: spesso contengono malware', 'Controlla regolarmente chi ha accesso al tuo account', 'Fidarsi è bene, ma nel gaming non fidarsi è meglio']
    },
    {
        id: 'ai-deepfake',
        title: 'AI & Deepfake',
        description: 'Riconoscere immagini e video sintetici',
        duration: '1-2 ore',
        difficulty: 'Avanzata',
        icon: '🤖',
        color: 'from-cyan-900',
        lessons: [
            {
                id: 'deepfake-detection',
                title: 'Vedere per Credere?',
                content: `# L'Era della Realtà Sintetica

Oggi è possibile creare video di chiunque che dice qualunque cosa. Si chiamano Deepfake.

## Come Riconoscerli
Sebbene l'IA stia migliorando, ci sono ancora piccoli errori:
1. **Battito di ciglia:** Spesso è innaturale o assente.
2. **Bordi del viso:** Controlla se la mascella sembra sfocata rispetto al collo.
3. **Interno della bocca:** I denti e la lingua sono difficili da simulare perfettamente.
4. **Ombre e Luci:** A volte la luce sul viso non corrisponde a quella dell'ambiente.

## Il Pericolo della Disinformazione
Non condividere mai un video scioccante di un politico o di una celebrità senza aver verificato la fonte da testate giornalistiche affidabili.`,
                tips: [
                    'Usa siti di fact-checking come Pagella Politica o Open',
                    'Zoomma sui dettagli del viso nei video sospetti',
                    'Chiediti: "Questa persona direbbe davvero questa cosa?"',
                    'Diffida dei video con audio fuori sincrono',
                    'Non creare deepfake di compagni: è un reato grave'
                ]
            }
        ],
        games: [
            {
                id: 'ai-detector',
                title: 'Deepfake Hunter',
                description: 'Distingui tra volti reali e volti generati dall\'IA.',
                type: 'detector'
            }
        ],
        tips: ['L\'IA non è magica, è statistica', 'Verifica sempre le fonti', 'Proteggi le tue foto personali']
    },
    {
        id: 'finanze-crypto',
        title: 'Finanze & Crypto Scam',
        description: 'Trading, loot boxes e schemi Ponzi',
        duration: '2 ore',
        difficulty: 'Avanzata',
        icon: '💰',
        color: 'from-amber-900',
        lessons: [
            {
                id: 'loot-boxes-gambling',
                title: 'Loot Boxes: Gioco o Azzardo?',
                content: `# Soldi Reali, Caratteri Virtuali

Molti giochi moderni usano meccaniche simili al gioco d'azzardo per farti spendere soldi.

## Loot Boxes
Comprare un "pacchetto" senza sapere cosa c'è dentro attiva le stesse aree del cervello del gioco d'azzardo. È facile perdere il controllo.

## I "Guru" delle Crypto su TikTok
Diffida di chi promette guadagni facili con le crypto. Spesso sono schemi "Pump and Dump": ti convincono a comprare per far salire il prezzo e poi vendono tutto lasciandoti senza nulla.

## Truffe dei Give-away
"Invia 0.1 ETH e te ne rimandiamo 0.2". È SEMPRE una truffa. Nessuno regala soldi online.`,
                tips: [
                    'Non collegare mai la carta di credito dei genitori senza permesso',
                    'Considera le loot boxes come una spesa a fondo perduto',
                    'Se promettono un guadagno del 100% in un giorno, è una truffa',
                    'Leggi sempre le recensioni prima di investire in una nuova app',
                    'Usa solo exchange cripto ufficiali e verificati'
                ]
            }
        ],
        games: [
            {
                id: 'scam-recognizer',
                title: 'Broker o Truffatore?',
                description: 'Analizza le promesse di un influencer finanziario.',
                type: 'recognizer'
            }
        ],
        tips: ['Non investire ciò che non puoi permetterti di perdere', 'I soldi facili non esistono', 'Attenzione ai segnali di ludopatia']
    },
    {
        id: 'sexting-legal',
        title: 'Sexting & Legal Risks',
        description: 'Consenso, revenge porn e conseguenze penali',
        duration: '2 ore',
        difficulty: 'Avanzata',
        icon: '⚖️',
        color: 'from-red-700',
        lessons: [
            {
                id: 'sexting-consequences',
                title: 'Oltre lo Schermo',
                content: `# Sexting: Un Momento Può Cambiare la Vita

Inviare foto intime può sembrare un gesto di fiducia, ma una volta inviata, perdi il controllo sulla foto per sempre.

## Il Revenge Porn
La diffusione non consensuale di materiale intimo è un reato punibile col carcere (Codice Rosso). Se qualcuno ti minaccia di diffondere le tue foto, è un'estorsione.

## Cosa Fare se Sei Vittima
1. **Non pagare mai:** I ricattatori chiedono sempre di più.
2. **Non cancellare le chat:** Sono prove legali.
3. **Denuncia subito** alla Polizia Postale. Esistono strumenti come "StopNCII.org" per bloccare la diffusione delle foto.`,
                tips: [
                    'Non inviare mai foto dove si vede il tuo viso o segni particolari (tatuaggi)',
                    'Il consenso può essere revocato in qualsiasi momento',
                    'Se qualcuno ti spinge a farlo, non ti rispetta',
                    'Screenshot di minacce sono fondamentali per la denuncia',
                    'Esistono app con visualizzazione singola, ma non sono sicure al 100%'
                ]
            }
        ],
        games: [
            {
                id: 'legal-advisor',
                title: 'Il Tuo Avvocato',
                description: 'Decidi come agire legalmente in scenari critici.',
                type: 'analyzer'
            }
        ],
        tips: ['La tua dignità non è in vendita', 'Chiedi aiuto a un adulto subito', 'Non diffondere mai foto di altri']
    },
    {
        id: 'diritti-digitali',
        title: 'Diritti Digitali',
        description: 'Net Neutrality, censura e attivismo',
        duration: '1 ora',
        difficulty: 'Base',
        icon: '✊',
        color: 'from-orange-700',
        lessons: [
            {
                id: 'net-neutrality',
                title: 'Neutralità della Rete',
                content: `# Internet è di Tutti?

La Net Neutrality è il principio secondo cui i fornitori di servizi internet (ISP) devono trattare tutti i dati allo stesso modo, senza discriminazioni.

## Perché è Importante
Senza neutralità, il tuo operatore telefonico potrebbe rallentare YouTube per farti usare il suo servizio video, o farti pagare un supplemento per usare WhatsApp.

## La Censura Online
In molti paesi, internet non è libera. Siti come Wikipedia o YouTube vengono oscurati per motivi politici. Come cittadini digitali, dobbiamo difendere il diritto all'accesso all'informazione libera.`,
                tips: [
                    'Supporta organizzazioni che difendono i diritti digitali come EFF',
                    'Usa strumenti che aggirano la censura se necessario (VPN/Tor)',
                    'Informati sulle leggi europee che proteggono la neutralità',
                    'Non dare per scontata la tua libertà di parola online',
                    'Contribuisci a progetti open source come Wikipedia'
                ]
            }
        ],
        games: [
            {
                id: 'activism-game',
                title: 'Digital Activist',
                description: 'Scegli le strategie migliori per difendere un diritto online.',
                type: 'builder'
            }
        ],
        tips: ['Sii un cittadino digitale attivo', 'Proteggi l\'accesso libero all\'informazione', 'L\'anonimato è un diritto']
    },
    {
        id: 'salute-mentale',
        title: 'Salute Mentale',
        description: 'Benessere psicologico e equilibrio digitale',
        duration: '2 ore',
        difficulty: 'Base',
        icon: '🧠',
        color: 'from-teal-900',
        lessons: [
            {
                id: 'digital-wellbeing',
                title: 'Benessere Connesso',
                content: `# Mente Connessa: Oltre lo Schermo

L'uso eccessivo del digitale può avere impatti reali sulla nostra salute mentale.

## Phantom Vibration Syndrome
Ti sembra che il telefono vibri anche quando non lo fa? È un segno di iper-vigilanza digitale. Il tuo cervello è costantemente in attesa di uno stimolo.

## Depressione da Confronto
Vedere le vite "perfette" degli altri sui social può farti sentire inadeguato. Ricorda che è solo una vetrina filtrata.

## Hikikomori e Isolamento
Il rischio di sostituire la vita reale con quella virtuale è reale. La socialità fisica è fondamentale per lo sviluppo psicologico.`,
                tips: [
                    'Segui la regola 20-20-20 per riposare gli occhi',
                    'Smetti di seguire chi ti fa sentire "meno"',
                    'Riconosci i sintomi del burnout digitale: irritabilità, insonnia',
                    'Non diagnosticarti disturbi su TikTok: parla con un esperto',
                    'Dedica almeno un\'ora al giorno a un hobby non digitale'
                ]
            }
        ],
        games: [
            {
                id: 'mood-balance',
                title: 'Mindful Tracker',
                description: 'Bilancia tempo schermi e barra dell\'energia mentale.',
                type: 'exercise'
            }
        ],
        tips: ['Non sei solo', 'Il digitale è uno strumento, non un padrone', 'Chiedere aiuto è un segno di forza']
    }
];
