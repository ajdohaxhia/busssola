import { Lesson } from '../modules'

export const PRIVACY_LESSONS: Lesson[] = [
    {
        id: '2-perche-privacy',
        title: 'Perché la Privacy non è "nascondere"',
        content: `# La Privacy è un Diritto, non un Segreto
Molti dicono: "Non ho nulla da nascondere". Ma la privacy non riguarda i segreti, riguarda il **potere**.

## Il valore dei tuoi dati
Per Google, Meta e Amazon, i tuoi dati sono come il petrolio. Sapere cosa compri, dove vai e chi voti permette loro di manipolare le tue scelte tramite pubblicità mirata.

### Libertà di pensiero
Se sai di essere osservato, cambi comportamento. La sorveglianza digitale limita la tua libertà di essere te stesso.`,
        tips: ['La privacy protegge la tua libertà di scelta.', 'Se il servizio è gratis, il prodotto sei tu.']
    },
    {
        id: '2-dns-intro',
        title: 'Cos\'è il DNS e perché cifrarlo',
        content: `# DNS: L'elenco telefonico di Internet
Ogni volta che digiti "google.com", il tuo computer chiede a un server DNS quale sia l'indirizzo IP (numerico) corrispondente.

## Il problema del DNS standard
Di default, usi il DNS del tuo operatore (Telecom, Vodafone, etc.). Loro vedono e salvano la cronologia di ogni dominio che visiti, anche se usi HTTPS.

### La soluzione: DNS over HTTPS (DoH)
Cifrare le richieste DNS impedisce al tuo operatore di spiare quali siti visiti. Usare server come Quad9 o NextDNS aggiunge anche un filtro contro malware e siti di phishing.`,
        tips: ['Cambiare DNS è il primo passo per l\'indipendenza digitale.', 'Usa Quad9 (9.9.9.9) per bloccare malware automaticamente.']
    },
    {
        id: '2-nextdns-setup',
        title: 'Setup: NextDNS e Filtri',
        content: `# NextDNS: Il Firewall nel Cloud
NextDNS permette di personalizzare cosa bloccare a livello di rete.

## Cosa puoi fare
- Bloccare i tracker di Facebook o TikTok ovunque.
- Bloccare annunci pubblicitari nelle app.
- Impedire l'accesso a siti di scommesse o malware.

### Come si installa
Si può configurare direttamente sul router di casa o come profilo "DNS Privato" su Android e iOS. È invisibile e non rallenta la navigazione.`,
        tips: ['NextDNS è gratis fino a 300.000 query al mese.', 'Ottimo per bloccare il tracciamento delle app senza installare nulla.']
    },
    {
        id: '2-vpn-verita',
        title: 'VPN: Miti e Verità',
        content: `# La VPN non è una bacchetta magica
Le pubblicità dicono che una VPN ti rende "completamente anonimo". **È falso.**

## A cosa serve davvero
- Nascondere il tuo indirizzo IP ai siti che visiti.
- Proteggerti su WiFi pubblici (bar, stazioni) da attacchi "Man-in-the-Middle".
- Superare blocchi geografici o censura.

### Cosa NON fa
Non ti protegge se fai il login su Google o Facebook (loro sanno chi sei comunque). Non ti protegge dai virus se scarichi file infetti.`,
        tips: ['Usa una VPN solo se ti fidi dell\'azienda che la gestisce.', 'ProtonVPN e Mullvad sono le più affidabili oggi.']
    },
    {
        id: '2-vpn-gratuite-pericolo',
        title: 'Le VPN Gratis sono Pericolose',
        content: `# Il Prezzo del "Gratis"
Gestire una rete di server VPN costa migliaia di euro. Se non paghi con i soldi, paghi con i tuoi dati.

## I rischi delle VPN gratuite
- **Log del traffico:** Vendono la tua cronologia agli inserzionisti.
- **Iniezione di Ads:** Inseriscono pubblicità nei siti che visiti.
- **Malware:** Alcune app VPN gratis contengono codice malevolo per spiare il tuo telefono.

### Unica eccezione
ProtonVPN offre una versione gratuita limitata ma sicura perché finanziata dagli utenti paganti.`,
        tips: ['Mai usare "Super VPN" o simili dagli store: rubano i dati.', 'Se non paghi il servizio, tu sei la merce venduta.']
    },
    {
        id: '2-metadata-exif',
        title: 'Metadata e Foto (EXIF)',
        content: `# Le tue foto dicono troppo?
Ogni foto scattata con uno smartphone contiene dati nascosti chiamati EXIF.

## Cosa c'è dentro una foto
- Coordinate GPS esatte del luogo dello scatto.
- Modello del telefono e numero di serie.
- Data e ora precisa.

### Il rischio Doxxing
Se posti una foto fatta in camera tua su un forum pubblico, chiunque può estrarre le coordinate GPS e sapere esattamente dove abiti.`,
        tips: ['Disattiva la posizione nella fotocamera dello smartphone.', 'Usa tool come verexif.com per pulire le foto prima di postarle.']
    },
    {
        id: '2-browser-fingerprinting',
        title: 'Browser Fingerprinting',
        content: `# L'impronta digitale del tuo Browser
Anche se cancelli i cookie, i siti possono riconoscerti tramite il fingerprinting.

## Come funziona
Il sito chiede al browser: "Quali font hai? Che risoluzione usi? Che scheda video hai?". La combinazione di queste risposte è spesso unica al mondo.

### Come contrastarlo
Non usare troppe estensioni (ti rendono più "unico"). Usa browser come Brave o Firefox con impostazioni di privacy avanzate che mimano una configurazione standard per tutti.`,
        tips: ['Troppe estensioni = fingerprinting più facile.', 'Controlla quanto sei unico su AmIUnique.org.']
    },
    {
        id: '2-password-manager-perche',
        title: 'Perché usare un Password Manager',
        content: `# La fine del post-it e delle password facili
Usare la stessa password per tutto è il modo più veloce per farsi hackerare tutti gli account (Credential Stuffing).

## Cos'è un Password Manager
È una cassaforte cifrata che ricorda centinaia di password lunghe e complesse per te. Tu devi ricordarne solo UNA: la Master Password.

### Vantaggi
- Genera password come \`xK9#pL2!mR8*zQ\` impossibili da indovinare.
- Ti avvisa se una tua password è stata rubata in un data breach.
- Compila automaticamente i campi di login, proteggendoti dal phishing.`,
        tips: ['Bitwarden è gratuito, open source e consigliatissimo.', 'Una password unica per ogni sito è l\'ABC della sicurezza.']
    },
    {
        id: '2-master-password',
        title: 'Creare una Master Password Forte',
        content: `# La chiave della tua vita digitale
La tua Master Password deve essere indistruttibile ma facile da ricordare per te.

## Il metodo della frase (Passphrase)
Invece di \`P4ssw0rd!\`, usa una frase di 4-5 parole casuali:
\`Gatto-Lampada-Pizza-Tevere-2025\`

### Perché è meglio?
È molto più lunga (difficile da craccare per i computer) ma molto più facile da scrivere per un essere umano. Non scriverla mai sul telefono, memorizzala.`,
        tips: ['La lunghezza batte la complessità.', 'Non usare mai date di nascita o nomi di familiari.']
    },
    {
        id: '2-2fa-totp',
        title: '2FA: Oltre l\'SMS',
        content: `# Autenticazione a due fattori (2FA)
Il 2FA aggiunge un secondo lucchetto dopo la password.

## Perché l'SMS è insicuro
Gli hacker possono usare il "SIM Swapping": convincono il tuo operatore a trasferire il tuo numero sulla loro SIM. Da quel momento ricevono loro i tuoi codici della banca o di Instagram.

### La soluzione: App TOTP
Usa app come Google Authenticator, Aegis o Bitwarden. Generano codici ogni 30 secondi localmente sul tuo telefono, senza bisogno di rete cellulare.`,
        tips: ['Passa dai codici via SMS alle app di autenticazione.', 'Salva sempre i "codici di backup" in un posto sicuro offline.']
    },
    {
        id: '2-hardware-keys',
        title: 'Massima Sicurezza: Hardware Keys',
        content: `# YubiKey e il futuro senza Phishing
Le chiavi hardware (come le YubiKey) sono il livello massimo di protezione al mondo.

## Come funzionano
Sono chiavette USB/NFC che devi toccare fisicamente per entrare nel tuo account. 

### Perché sono imbattibili
Il phishing non funziona. Anche se un hacker ruba la tua password e ti inganna, non può fare nulla senza il possesso fisico della chiavetta. È la protezione usata dai dipendenti di Google e dai giornalisti sotto inchiesta.`,
        tips: ['Una YubiKey costa circa 30-50€ ed è un investimento per la vita.', 'Protegge account Google, Facebook, Twitter e molti altri.']
    },
    {
        id: '2-cookies-gestione',
        title: 'Cookie Management: La Pulizia',
        content: `# Gestire la memoria dei siti
I cookie non sono tutti cattivi, ma accumularli permette un tracciamento storico enorme.

## Tipi di Cookie
1. **Tecnici:** Mantengono il login o il carrello (utili).
2. **Analitici:** Seguono come usi il sito (meno utili).
3. **Di Profilazione:** Seguono cosa ti piace per venderti roba (da bloccare).

### Cosa fare
Nelle impostazioni del browser, scegli "Cancella cookie alla chiusura del browser" per i siti che non visiti spesso.`,
        tips: ['Blocca i cookie di terze parti di default.', 'Usa l\'estensione "I still don\'t care about cookies" per navigare meglio.']
    },
    {
        id: '2-app-permissions',
        title: 'Permessi App: Meno è Meglio',
        content: `# La tua Calcolatrice ha bisogno del Microfono?
Molte app chiedono permessi che non servono per funzionare, solo per raccogliere dati.

## Audit dei permessi
Vai nelle impostazioni Privacy del tuo telefono e controlla chi ha accesso a:
- **Posizione:** Serve sempre? Metti "Mentre usi l'app".
- **Contatti:** Le app social li caricano sui loro server per mappare i tuoi amici.
- **Microfono/Camera:** Revoca a tutto ciò che non è una app di messaggistica.`,
        tips: ['Fai un audit dei permessi una volta al mese.', 'Se un\'app chiede troppo senza motivo, disinstallala.']
    },
    {
        id: '2-incognito-fallacia',
        title: 'La Fallacia della Modalità Incognito',
        content: `# Cosa NON fa la modalità Incognito
Molti pensano che l'Incognito nasconda tutto. Non è così.

## Cosa fa
Non salva la cronologia, i cookie e i dati dei moduli SUL TUO COMPUTER.

## Cosa NON fa
Non nasconde il tuo traffico al tuo fornitore di internet (ISP), al tuo datore di lavoro o ai siti che visiti. Loro vedono comunque il tuo indirizzo IP e cosa fai. Per l'anonimato serve Tor o una VPN.`,
        tips: ['L\'Incognito serve a nascondere la cronologia a chi usa il tuo PC.', 'Per l\'anonimato reale, usa il browser Tor.']
    },
    {
        id: '2-data-breach-check',
        title: 'Sei stato "pwned"? Data Breach',
        content: `# Quando i server delle aziende vengono bucati
I data breach avvengono quando gli hacker rubano database di siti come Adobe, LinkedIn o Canva.

## Come saperlo
Vai su [HaveIBeenPwned.com](https://haveibeenpwned.com) e inserisci la tua email. Ti dirà in quali attacchi sono finiti i tuoi dati.

### Cosa fare se sei nel database
Cambia immediatamente la password di quel sito e di tutti gli altri siti dove usavi la stessa password.`,
        tips: ['Controlla la tua email su HaveIBeenPwned ogni pochi mesi.', 'Se un sito subisce un breach, la tua password è di dominio pubblico.']
    }
]
