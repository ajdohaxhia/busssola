import { Lesson } from '../modules'

export const PRIVACY_LESSONS: Lesson[] = [
    {
        id: '2-perche-privacy-deep',
        title: 'La Privacy come Asimmetria di Potere',
        content: `# La Privacy non è un Lusso, è Difesa
Molti dicono: "Non ho nulla da nascondere". Questa frase ignora che i dati personali non sono solo informazioni, ma **predittori comportamentali**.

## Il Capitalismo della Sorveglianza
Aziende come Google, Meta e Amazon non vendono i tuoi dati (sarebbe stupido, li perderebbero). Vendono la **capacità di prevedere le tue azioni future**. 
- Attraverso il tracciamento incrociato, sanno se sei incinta prima che lo sappiano i tuoi genitori.
- Sanno se sei incline alla depressione e ti mostrano pubblicità di prodotti "consolatori" o scommesse online nel momento di massima vulnerabilità.

## Perché "nascondere" è necessario
La privacy protegge il tuo spazio di errore. In un mondo senza privacy, ogni tuo sbaglio giovanile rimane scolpito in un database che un futuro datore di lavoro o un algoritmo di assicurazione sanitaria userà contro di te tra 20 anni.`,
        tips: ['La privacy protegge il tuo "io futuro" dai database di oggi.', 'Se il servizio è gratis, il prodotto sei tu.', 'I dati aggregati possono mappare la tua intera vita psicologica.']
    },
    {
        id: '2-dns-doh-tech',
        title: 'DNS over HTTPS (DoH): Protocolli di Difesa',
        content: `# DNS: Il tallone d'Achille della Privacy
Il DNS (Domain Name System) trasforma \`google.com\` in \`142.250.184.206\`. Di default, questo avviene in chiaro (senza cifratura).

## Il monitoraggio dell'ISP (Operatore)
Il tuo operatore (TIM, Vodafone, etc.) vede ogni singola richiesta DNS. Anche se il sito è in HTTPS e loro non vedono *cosa* fai sul sito, sanno che sei su \`pornhub.com\`, \`sitiscommesse.it\` o \`centro-cura-malattie.org\`. Queste liste vengono vendute a broker di dati.

## La soluzione Tecnica: DoH (DNS over HTTPS)
Cifra le richieste DNS dentro un tunnel HTTPS (porta 443), rendendole indistinguibili dal normale traffico web.
- **NextDNS:** Permette di vedere e bloccare i tracker in tempo reale.
- **Quad9 (9.9.9.9):** Una fondazione svizzera che non logga i dati e blocca il malware a livello di rete.
**Configurazione:** Su Android 9+ vai in Impostazioni > Rete > DNS Privato e inserisci \`dns.quad9.net\`. Su iOS serve un profilo di configurazione.`,
        tips: ['Passare a un DNS cifrato è la mossa singola più efficace per la privacy.', 'Usa Quad9 per protezione massima e neutralità svizzera.', 'NextDNS ti mostra quali app "chiamano casa" di nascosto.']
    },
    {
        id: '2-browser-fingerprinting-advanced',
        title: 'Canvas Fingerprinting e Audio Context',
        content: `# Oltre i Cookie: L'Identità Immutabile
Cancellare i cookie non basta più. I tracker moderni usano il **Browser Fingerprinting**.

## Come ti identificano senza cookie:
1. **Canvas Fingerprinting:** Il sito chiede al tuo browser di disegnare una stringa di testo nascosta. A seconda della tua scheda video e dei tuoi driver, il disegno avrà pixel microscopici diversi. Questo crea un ID quasi unico.
2. **Audio Context:** Il sito genera un'onda sonora impercettibile. Il modo in cui il tuo hardware audio la processa crea un'altra impronta unica.
3. **Misure dei Sensori:** Su mobile, i siti possono leggere la percentuale di batteria e l'inclinazione del dispositivo.

## Come difendersi:
- **Firefox:** Attiva \`privacy.resistFingerprinting\` in \`about:config\`.
- **Brave:** Ha protezioni native che aggiungono "rumore" casuale ai dati per rendere il tuo fingerprint diverso a ogni visita.
- **Librewolf:** Un fork di Firefox già configurato per la massima protezione.`,
        tips: ['Brave e Firefox sono i migliori contro il fingerprinting.', 'Controlla la tua unicità su AmIUnique.org.', 'Non installare troppi font: ogni font aggiunto ti rende più identificabile.']
    },
    {
        id: '2-password-managers-encryption',
        title: 'Password Manager: Crittografia Locale',
        content: `# Come Bitwarden protegge i tuoi segreti
Un Password Manager serio non conosce le tue password. Usa un approccio **Zero-Knowledge**.

## Il processo di cifratura:
Quando inserisci la tua Master Password su Bitwarden:
1. Viene derivata una chiave usando l'algoritmo **PBKDF2** con migliaia di iterazioni (per rallentare gli attacchi brute-force).
2. I tuoi dati vengono cifrati **sul tuo dispositivo** usando l'algoritmo **AES-256**.
3. Solo i dati già cifrati vengono inviati al server.
**Risultato:** Se gli hacker bucano i server di Bitwarden, troveranno solo file incomprensibili. Senza la tua Master Password (che esiste solo nella tua testa), i dati sono inutili.

## Checklist di Sicurezza
- Usa solo manager Open Source (Bitwarden, KeePassXC).
- Attiva l'autenticazione a due fattori (2FA) sulla cassaforte.`,
        tips: ['Usa Bitwarden: è gratis, open source e controllato da esperti.', 'La Master Password è l\'unico segreto che devi veramente memorizzare.', 'KeePassXC è l\'alternativa per chi vuole tenere il database offline.']
    },
    {
        id: '2-vpn-limitations-and-leaks',
        title: 'VPN: DNS Leak e WebRTC Leak',
        content: `# I pericoli nascosti delle VPN
Spesso una VPN sembra attiva, ma i tuoi dati reali "scappano" da altre fessure.

## WebRTC Leak
WebRTC è una tecnologia per le videochiamate nel browser. Purtroppo, può rivelare il tuo vero indirizzo IP locale e pubblico anche se sei sotto VPN.
- **Test:** Vai su \`browserleaks.com/webrtc\`. Se vedi il tuo vero IP, la tua VPN sta fallendo.

## DNS Leak
Se la VPN non è configurata bene, le tue richieste DNS potrebbero ancora andare al server del tuo operatore (TIM/Vodafone) invece che attraverso il tunnel cifrato.

## Kill Switch
Una funzione fondamentale: se la connessione VPN cade per un secondo, il Kill Switch blocca istantaneamente tutto il traffico internet, impedendo al tuo vero IP di essere esposto per sbaglio.`,
        tips: ['Senza Kill Switch, una VPN è insicura.', 'Controlla periodicamente i leak su browserleaks.com.', 'Mullvad e ProtonVPN hanno le migliori protezioni anti-leak native.']
    }
]
