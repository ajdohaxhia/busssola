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
    {
        id: '14-verification-fact-checking',
        title: 'Verifica: Fact-checking Professionale',
        content: `# Smascherare le Fake News
In un mondo di disinformazione, imparare a verificare una notizia è un atto di difesa civica.

## La Tecnica della Ricerca Inversa:
1. **Immagini:** Usa Google Lens, TinEye o Yandex per vedere dove è apparsa per la prima volta una foto. Spesso foto di guerre passate vengono usate per conflitti attuali.
2. **Video:** InVID è un tool che permette di analizzare i singoli frame di un video per capire se è stato montato o manipolato.

## Analisi delle Fonti:
- **Whois:** Controlla chi ha registrato un sito web. Se un sito "di notizie italiano" è registrato da un anonimo in un paese straniero, diffida.
- **Wayback Machine:** Guarda come appariva quella pagina web mesi fa. I bugiardi spesso cancellano o modificano le prove dopo essere stati scoperti.`,
        tips: ['La prima notizia è raramente quella corretta: aspetta e verifica.', 'Usa Google Lens per scoprire l\'origine reale di una foto.', 'Wayback Machine è la memoria immodificabile del web.']
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
    {
        id: '15-tails-os-sandbox',
        title: 'Tails OS: Il Sistema Amnesico',
        content: `# Non lasciare tracce fisiche
Se vuoi il massimo dell'anonimato, non basta un browser. Serve un sistema operativo intero.

## Cos'è Tails?
Tails (The Amnesic Incognito Live System) è un sistema operativo che si avvia da una chiavetta USB. 
- **Amnesico:** Quando spegni il PC, Tails cancella tutto ciò che hai fatto. Non scrive nulla sull'hard disk del computer.
- **Incognito:** Tutto il traffico internet (non solo il browser) è forzato a passare attraverso la rete Tor.

## Ambienti Sandbox (Isolamento)
Tails usa "AppArmor" per isolare ogni applicazione. Se un documento che apri contiene un virus che cerca di rubare i tuoi dati, il virus rimarrà intrappolato dentro l'app e non potrà infettare il resto del sistema.`,
        tips: ['Tails è la scelta dei giornalisti e attivisti in pericolo.', 'Usa una chiavetta USB dedicata solo a Tails.', 'Ricorda: Tails cancella tutto allo spegnimento, salva i file su un volume persistente protetto.']
    },
    {
        id: '15-browser-fingerprinting',
        title: 'Browser Fingerprinting',
        content: `# Sei unico, anche senza nome
Anche se usi una VPN o Tor, il tuo browser rivela decine di dettagli tecnici:
- Risoluzione dello schermo.
- Font installati.
- Versione del sistema operativo.
- Modello della scheda video.

## La tua impronta digitale
Insieme, questi dati creano un "Fingerprint" unico. Se visiti un sito con Tor e poi lo stesso sito con Chrome, il sito potrebbe capire che sei la stessa persona semplicemente confrontando l'impronta del browser.

## Come difendersi:
Usa il **Tor Browser** nella sua dimensione predefinita (non massimizzare la finestra!) e non installare estensioni extra. Ogni modifica ti rende più unico e quindi più facile da tracciare.`,
        tips: ['Non massimizzare mai la finestra di Tor Browser.', 'Troppe estensioni ti rendono più facile da tracciare.', 'Visita "Am I Unique" per vedere quanto è rara la tua impronta digitale.']
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
    {
        id: '16-router-hardening-defense',
        title: 'Router Hardening: Difendere i Confini',
        content: `# Il Router è il Guardiano di Casa
Se il tuo router è compromesso, ogni dispositivo della tua casa (PC, Smartphone, Smart TV) è vulnerabile.

## Strategie di Difesa del Router:
1. **Cambia i DNS:** Non usare quelli del provider. Usa DNS sicuri e privati (es. Quad9 o Cloudflare 1.1.1.1) che bloccano automaticamente i siti di malware.
2. **Disabilita UPnP e WPS:** Sono funzioni comode ma insicure che permettono a dispositivi (e hacker) di aprire porte nel tuo firewall senza chiederti il permesso.
3. **Segmentazione della Rete (Guest network):** Crea una rete "Ospiti" separata per i tuoi dispositivi IoT (lampadine, telecamere). Se la telecamera cinese viene hackerata, l'hacker non potrà accedere al tuo PC principale.`,
        tips: ['Il router è il punto più critico della tua rete.', 'Usa una rete Guest dedicata per i tuoi dispositivi IoT.', 'Disabilita il WPS: è vulnerabile ad attacchi brute-force.']
    },
    {
        id: '16-iot-privacy-microphones',
        title: 'Privacy IoT: Microfoni e Camere',
        content: `# La tua casa ti ascolta?
Dispositivi come Alexa, Google Home o le Smart TV sono progettati per essere sempre in ascolto della "parola di attivazione".

## Rischi di intercettazione:
- **Registrazioni in Cloud:** Molti di questi frammenti audio vengono salvati sui server delle aziende per "migliorare l'algoritmo".
- **Hacking delle Camere:** Le telecamere Wi-Fi economiche hanno spesso vulnerabilità che permettono a chiunque su Internet di guardare dentro casa tua se non sono aggiornate.

## Come proteggersi:
- Usa interruttori fisici (Mute) quando non usi l'assistente vocale.
- Copri la webcam del PC e della Smart TV con uno slider fisico.
- Controlla regolarmente i log di attività nelle impostazioni privacy dei tuoi account Amazon/Google.`,
        tips: ['Metti uno slider fisico sulla tua webcam.', 'Spegni il microfono degli assistenti vocali quando vuoi privacy reale.', 'Controlla periodicamente cosa ha registrato la tua Smart Home.']
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
    {
        id: '17-filter-bubbles-radicalization',
        title: 'Bolla di Filtraggio e Radicalizzazione',
        content: `# Prigionieri del proprio specchio
Eli Pariser ha definito "Filter Bubble" l'ecosistema informativo in cui vivi quando gli algoritmi filtrano via tutto ciò che contraddice i tuoi gusti o le tue idee.

## Il tunnel della radicalizzazione:
Poiché l'algoritmo vuole darti "di più di quello che ti piace", se inizi a guardare un video di complottismo o di una certa fazione politica, i suggerimenti diventeranno sempre più estremi. Senza accorgertene, la tua visione del mondo diventa distorta e unilaterale.

## Conseguenze Sociali:
Le bolle di filtraggio rendono impossibile il dialogo democratico, perché persone diverse vivono letteralmente in realtà informative diverse, dove i "fatti" cambiano a seconda del profilo.`,
        tips: ['Cerca argomenti in incognito per vedere risultati non personalizzati.', 'L\'algoritmo ti dà quello che vuoi, non quello che ti serve.', 'Segui persone con cui non sei d\'accordo per mantenere lo spirito critico.']
    },
    {
        id: '17-gamification-tiktok-hook',
        title: 'Gamification e l\'Hook di TikTok',
        content: `# Il Design della Dipendenza
Perché è così difficile smettere di scrollare TikTok? La risposta sta nel design comportamentale.

## L'effetto "Variable Reward":
TikTok usa lo stesso principio delle Slot Machine. Ogni scroll è una scommessa: il video sarà noioso o divertente? Questo rilascio intermittente di dopamina è molto più potente di un rilascio costante.

## Gamification:
Streak, badge, livelli di fan e countdown sono tutti elementi di gioco usati per trasformare un'app in un dovere quotidiano. Il tuo cervello viene "addestrato" a cercare la ricompensa digitale, rendendo il mondo reale meno stimolante per confronto.`,
        tips: ['Imposta un timer di utilizzo per le app di social media.', 'Riconosci gli "Hook" visivi e sonori progettati per catturarti.', 'Non usare il telefono come prima cosa appena sveglio.']
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
    {
        id: '18-digital-will-planning',
        title: 'Pianificare il Testamento Digitale',
        content: `# Il valore legale della tua vita online
Un testamento digitale è un documento (o un'impostazione tecnica) che specifica come devono essere gestiti i tuoi asset digitali dopo la tua scomparsa.

## Asset da considerare:
- **Asset Sentimentali:** Foto, video, email personali.
- **Asset Economici:** Conti PayPal, portafogli Crypto, account Amazon, monete nei giochi.
- **Asset Professionali:** File su Cloud, domini web, profili LinkedIn.

## Come procedere legalmente:
In Italia puoi nominare un "Esecutore Digitale" o includere clausole specifiche nel tuo testamento biologico o legale. Ricorda che senza una disposizione esplicita, molte piattaforme (come Facebook) potrebbero semplicemente cancellare il profilo o renderlo inaccessibile per sempre.`,
        tips: ['Nomina una persona di fiducia per i tuoi asset digitali.', 'Fai un backup offline dei tuoi ricordi più preziosi.', 'Usa un gestore di password che permetta l\'accesso di emergenza.']
    },
    {
        id: '18-social-memorialization',
        title: 'Memorializzazione e Chiusura Account',
        content: `# Il tuo profilo come luogo della memoria
Cosa accade alla tua pagina Facebook o al tuo Instagram? Ogni piattaforma ha politiche diverse.

## Account Commemorativo:
Facebook permette di trasformare un profilo in un "Account Commemorativo". Apparirà la scritta "In memoria di" e gli amici potranno condividere ricordi, ma nessuno potrà accedere ai tuoi messaggi privati o pubblicare a tuo nome.

## Chiusura Definitiva:
Se invece preferisci sparire, puoi impostare l'account in modo che venga cancellato automaticamente non appena l'azienda riceve la comunicazione ufficiale del decesso.
**Regola d'oro:** Non lasciare che siano gli algoritmi a decidere cosa resta di te. Configura queste impostazioni oggi, mentre sei nel pieno delle tue facoltà.`,
        tips: ['Trasforma il tuo profilo in un luogo di pace, non di abbandono.', 'Decidi oggi se vuoi che i tuoi dati vengano cancellati o conservati.', 'Ogni social ha un modulo dedicato alle Disposizioni Testamentarie.']
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
    {
        id: '19-pgp-email-privacy',
        title: 'PGP: Privacy Estrema per le Email',
        content: `# Email che nessuno può leggere
Le email standard sono come cartoline: chiunque lavori nei server di posta può leggerle. PGP (Pretty Good Privacy) trasforma le mail in casseforti d'acciaio.

## Come funziona PGP:
È un'applicazione della crittografia asimmetrica. Tu firmi il messaggio con la tua chiave privata (per dimostrare che l'hai scritto tu) e lo cifri con la chiave pubblica del destinatario. Solo lui potrà leggerlo.

## Web of Trust:
A differenza dei siti web che usano certificati rilasciati da aziende (CA), PGP si basa sulla "Rete di Fiducia". Gli utenti si firmano le chiavi a vicenda per confermare le identità. È il sistema di comunicazione preferito da Edward Snowden e dai grandi esperti di sicurezza.`,
        tips: ['PGP rende le mail leggibili solo al destinatario reale.', 'La firma digitale PGP garantisce che la mail non sia stata alterata.', 'Usa tool come Thunderbird con Enigmail per facilitare l\'uso di PGP.']
    },
    {
        id: '19-zero-knowledge-proofs',
        title: 'Zero-Knowledge Proofs (ZKP)',
        content: `# Provare senza rivelare
Le "Prove a Conoscenza Zero" sono una delle tecnologie più futuristiche della privacy. Permettono di dimostrare che sai un segreto senza mai rivelare il segreto stesso.

## L'esempio dei maggiorenni:
Immagina di voler entrare in un sito vietato ai minori. Con lo ZKP, puoi dimostrare al sito "Sì, ho più di 18 anni" senza rivelare la tua data di nascita, il tuo nome o i tuoi documenti. Il sito riceve solo una conferma matematica "Vero/Falso".

## Applicazioni pratiche:
- **Identità Digitale Sovrana:** Provare chi sei senza dare i tuoi dati a database centralizzati.
- **Crypto Private:** Monete come Zcash usano lo ZKP per nascondere mittente e destinatario di una transazione pur confermandone la validità matematica.`,
        tips: ['ZKP è il futuro dell\'identità digitale privata.', 'Permette di gestire i dati senza possederne il segreto.', 'Rappresenta il massimo livello di protezione della privacy oggi conosciuto.']
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
    },
    {
        id: '20-information-warfare-psyops',
        title: 'Guerra dell\'Informazione (PsyOps)',
        content: `# Hackerare la mente umana
Nelle guerre moderne, il campo di battaglia non è solo il computer, ma l'opinione pubblica.

## Fabbriche di Troll e Bot:
Intere aziende in alcuni paesi sono dedicate a creare migliaia di account falsi che postano simultaneamente per far sembrare popolare un'idea estrema o per diffondere odio verso un avversario. Questo si chiama "Astroturfing".

## Deepfake in tempo di guerra:
Immagina un video fake di un presidente che annuncia la resa. Sebbene sia falso, i 30 minuti di caos che provoca prima di essere smentito possono cambiare l'esito di una battaglia reale. La velocità della disinformazione è superiore alla velocità della verità.`,
        tips: ['La verità è la prima vittima di ogni guerra digitale.', 'Controlla sempre i canali ufficiali durante le emergenze.', 'Non condividere post carichi di odio: potresti essere parte di una PsyOp.']
    },
    {
        id: '20-active-defense-strategies',
        title: 'Difesa Attiva ed Escalation',
        content: `# Rispondere all'attacco
Come reagisce uno Stato a un attacco cyber? La risposta è complessa e pericolosa.

## Hack-back (Contro-hacking):
L'idea di hackerare l'hacker per riprendersi i dati o disattivare i suoi server. È tecnicamente difficile perché gli hacker usano "vittime intermedie" (proxy) per nascondersi. Hackerando loro, potresti colpire un ospedale o una scuola innocente usata come scudo.

## Cyber-deterrenza:
Proprio come con le armi nucleari, gli stati pubblicano periodicamente le loro "Cyber Capabilities" per spaventare i nemici. "Se ci attaccate la rete elettrica, noi distruggeremo il vostro sistema bancario". È un equilibrio precario che tiene il mondo in una costante Guerra Fredda Digitale.`,
        tips: ['L\'escalation cyber può portare a conflitti nel mondo reale.', 'L\'attribuzione di un attacco è il compito più difficile della cyber-forensics.', 'La difesa è sempre più difficile dell\'attacco.']
    }
]
