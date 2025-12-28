import { Lesson } from '../modules'

export const ADVANCED_MODULES_LESSONS: Lesson[] = [
    // --- MODULE 14: OSINT & INVESTIGAZIONE DIGITALE ---
    {
        id: '14-osint-methodology',
        title: 'Metodologia OSINT: Oltre la Ricerca Google',
        content: `# OSINT: Trasformare Dati in Intelligence
L'OSINT (Open Source Intelligence) non è l'atto di hackerare un sistema, ma l'abilità di connettere punti pubblici per rivelare informazioni nascoste.

## Il Ciclo dell'Intelligence:
1. **Pianificazione:** Definire l'obiettivo (es. "Chi gestisce questo account fake?").
2. **Raccolta:** Usare tool per estrarre dati da social, registri e mappe.
3. **Analisi:** Incrociare i dati (es. la foto postata alle 14:00 mostra un'ombra che suggerisce una specifica latitudine).
4. **Diffusione:** Creare un report delle scoperte.

## Tool Investigativi Professionali:
- **Maltego:** Software per mappare relazioni tra persone, domini e indirizzi IP.
- **Shodan:** Il motore di ricerca per dispositivi connessi (dal server della NASA alla tua webcam di casa).
- **Sherlock:** Script Python che cerca un determinato username su oltre 300 social network contemporaneamente.
- **SunCalc:** Tool per calcolare la posizione del sole in una foto e determinare ora e luogo esatti dello scatto tramite le ombre.`,
        tips: ['OSINT è un lavoro di pazienza e logica.', 'Ogni informazione che pubblichi è un pezzo del tuo puzzle per un investigatore.', 'Usa Google Dorks per trovare file che non dovrebbero essere online.']
    },
    {
        id: '14-geolocation-advanced',
        title: 'Geolocalizzazione Forense',
        content: `# Trovare un luogo da un pixel
La geolocalizzazione è una delle ali più affascinanti dell'OSINT.

## Tecniche di identificazione:
- **Analisi del Paesaggio:** Tipi di vegetazione (botanica forense), architettura degli edifici, segnali stradali o forme delle montagne.
- **Insegne e Riflessi:** Uno specchio o il vetro di una finestra possono rivelare cosa c'è dietro la fotocamera.
- **Triangolazione WiFi (Wiggle.net):** Scansionando i nomi delle reti WiFi visibili in uno screenshot, è possibile risalire alla posizione esatta con un margine di pochi metri, poiché esistono database globali di SSID WiFi.

## Perché è un rischio?
Se un predatore o uno stalker riconosce un dettaglio fuori dalla tua finestra, può trovarti fisicamente anche se non hai attivato il GPS.`,
        tips: ['Non fotografare mai la vista fuori dalla finestra di casa tua.', 'I dettagli apparentemente inutili (un cestino, un palo della luce) sono i più rivelatori.', 'Wiggle.net mappa le reti WiFi di tutto il mondo.']
    },

    // --- MODULE 15: DARK WEB & ANONIMATO ---
    {
        id: '15-tor-technical-infrastructure',
        title: 'Tor: Architettura e Vulnerabilità',
        content: `# Come funziona davvero la Cipolla
Tor (The Onion Router) non è "il web illegale", è una tecnologia di routing a strati.

## I Tre Nodi:
1. **Entry Guard:** Il primo server che vede il tuo vero indirizzo IP ma non sa cosa stai cercando.
2. **Middle Relay:** Un nodo di transito che non conosce né chi sei né dove stai andando.
3. **Exit Node:** L'ultimo server che invia la tua richiesta al sito finale. **Attenzione:** L'Exit Node può vedere il tuo traffico se il sito non è in HTTPS!

## Hidden Services (.onion):
Sono siti che non esistono sul "web normale". L'intero traffico rimane dentro la rete Tor, garantendo che né il visitatore né il proprietario del sito conoscano le rispettive identità.
**Mito da sfatare:** Navigare sul Dark Web non è illegale, ma comprare nei suoi mercati neri lo è e attira immediatamente l'attenzione delle autorità (Europol/FBI).`,
        tips: ['L\'entry node vede chi sei, l\'exit node vede cosa fai (se non è HTTPS).', 'Usa Tor solo per necessità di anonimato reale, non per gioco.', 'Non scaricare mai file .pdf o .exe da Tor: bypassano il tunnel e rivelano il tuo IP.']
    },

    // --- MODULE 16: SICUREZZA HARDWARE & IOT ---
    {
        id: '16-hardware-hacking-vulnerabilities',
        title: 'Hacking Hardware e Vulnerabilità Fisiche',
        content: `# Se non è tuo fisicamente, non è tuo
La sicurezza non è solo software. Molti attacchi avvengono manipolando l'hardware.

## Attacchi Hardware comuni:
- **BadUSB:** Una chiavetta USB che sembra innocua ma viene riconosciuta dal PC come una tastiera velocissima che scrive comandi malevoli appena inserita (es. Rubber Ducky).
- **OMG Cables:** Cavi di ricarica per iPhone o Android che contengono un microchip WiFi nascosto per registrare tutto ciò che scrivi (keylogger).
- **Juice Jacking:** Stazioni di ricarica pubbliche (aeroporti, centri commerciali) modificate per rubare dati dal tuo telefono mentre lo ricarichi.

## IoT e Botnet:
I dispositivi intelligenti (camere, lampadine) hanno spesso processori deboli e password "hardcoded" nel codice. Hacker come quelli della **Botnet Mirai** usano questi oggetti per creare eserciti digitali e spegnere interi pezzi di Internet.`,
        tips: ['Non inserire mai chiavette USB trovate per strada.', 'Usa un "USB Condom" (Data Blocker) per caricare il telefono in pubblico.', 'Cambia la password di ogni oggetto smart appena lo compri.']
    },

    // --- MODULE 17: ALGORITMI & ECHO CHAMBERS ---
    {
        id: '17-algorithmic-manipulation-psyops',
        title: 'Algoritmi e Micro-targeting Psicologico',
        content: `# La Guerra per la tua Attenzione
Gli algoritmi dei social media non sono neutri: sono progettati per massimizzare il profitto tramite l'engagement.

## Il Meccanismo dell'Indignazione:
L'algoritmo ha scoperto che le emozioni negative (rabbia, indignazione, paura) creano più commenti e condivisioni delle emozioni positive. Per questo, tendi a vedere contenuti che ti fanno arrabbiare: ti tengono incollato allo schermo più a lungo.

## Micro-targeting (Caso Cambridge Analytica):
Incrociando i tuoi "Like" con test psicologici apparentemente innocui, le aziende possono creare un profilo psicometrico (modello OCEAN) e inviarti pubblicità politiche personalizzate che colpiscono esattamente le tue paure inconscie per cambiare il tuo voto.`,
        tips: ['Se un post ti fa arrabbiare, chiediti: "L\'algoritmo vuole che io veda questo?".', 'Le Echo Chambers ti rendono più facile da manipolare.', 'Rompere la bolla significa cercare attivamente chi la pensa diversamente.']
    },

    // --- MODULE 18: EREDITÀ DIGITALE ---
    {
        id: '18-digital-legacy-inheritance',
        title: 'Eredità Digitale: Proteggere il Futuro',
        content: `# Cosa succede ai tuoi dati dopo di te?
In Italia, il possesso dei dati digitali (foto, crypto, social) è un tema legale complesso regolato dal Codice della Privacy.

## Strumenti di Emergenza (Dead Man Switch):
Esistono servizi tecnici che inviano automaticamente le tue password o chiavi crittografiche a persone fidate se non effettui l'accesso per un certo periodo (es. 6 mesi).
- **Google Account Manager:** Ti permette di decidere chi può accedere ai tuoi dati dopo la tua inattività.
- **Legacy Contact di Apple:** Genera una chiave di accesso che i tuoi familiari possono dare alla Apple insieme al certificato di morte per sbloccare le tue foto.

## Il problema delle Crypto:
Se hai bitcoin su un wallet privato senza aver lasciato la *Seed Phrase* scritta da qualche parte, quei soldi spariranno per sempre con te. Nessuna banca può recuperarli.`,
        tips: ['Pensa oggi a chi vuoi lasciare le tue foto di una vita.', 'Scrivi la tua seed phrase crypto su carta e mettila in una cassaforte fisica.', 'Configura ora il "Legacy Contact" sul tuo smartphone.']
    },

    // --- MODULE 19: CRITTOGRAFIA VERA ---
    {
        id: '19-cryptography-deep-tech',
        title: 'Crittografia: Simmetrica vs Asimmetrica',
        content: `# La Matematica della Riservatezza
La crittografia è l'unico modo per garantire che i tuoi messaggi siano leggibili solo dal destinatario.

## Crittografia Simmetrica (AES-256):
Usa la stessa chiave per cifrare e decifrare. È velocissima ma ha un problema: come invii la chiave all'altra persona senza che un hacker la intercetti?

## Crittografia Asimmetrica (RSA/ECC):
La vera rivoluzione. Hai due chiavi:
1. **Chiave Pubblica:** La dai a tutti. Serve per *cifrare*.
2. **Chiave Privata:** La tieni solo tu. Serve per *decifrare*.
Chiunque può chiudere un lucchetto col tuo nome, ma solo tu hai la chiave per aprirlo. Questo è alla base di WhatsApp, Signal e degli acquisti online sicuri.

## Il Futuro: Crittografia Post-Quantum
I computer quantistici del futuro potranno rompere l'RSA in pochi secondi. Gli esperti stanno già lavorando a algoritmi basati sulla "Lattice-based cryptography" per resistere a questa minaccia.`,
        tips: ['La forza della crittografia sta nella lunghezza della chiave.', 'Non usare mai algoritmi vecchi come MD5 o SHA-1.', 'La tua chiave privata non deve mai lasciare il tuo dispositivo.']
    },

    // --- MODULE 20: CYBER-WARFARE ---
    {
        id: '20-cyberwarfare-state-actors',
        title: 'Cyber-Warfare e Infrastrutture Critiche',
        content: `# La Quinta Dimensione della Guerra
Oltre a terra, mare, cielo e spazio, ora c'è il Cyberspazio. La guerra moderna non usa solo missili, ma righe di codice.

## Stuxnet: Il primo virus-arma:
Creato da stati sovrani, Stuxnet è riuscito a distruggere fisicamente delle centrifughe nucleari in Iran semplicemente cambiando la velocità di rotazione tramite un software infettato. È stata la prova che il codice può uccidere o distruggere.

## Obiettivi Strategici:
- **Griglia Elettrica:** Spegnere la luce a un'intera nazione.
- **Sistemi Idrici:** Avvelenare l'acqua cambiando i dosaggi chimici via software (SCADA).
- **Disinformazione e PsyOps:** Usare bot e fake news per destabilizzare la democrazia di un altro paese dall'interno.

## APT (Advanced Persistent Threats):
Sono gruppi di hacker esperti finanziati dai governi (es. Fancy Bear, Lazarus Group) che lavorano silenziosamente per anni dentro i server di un nemico prima di colpire.`,
        tips: ['Il cyber-spazio è il nuovo campo di battaglia geopolitico.', 'Le infrastrutture critiche sono i bersagli primari.', 'La sicurezza nazionale oggi dipende dalla qualità del codice.']
    }
]
