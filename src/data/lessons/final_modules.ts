import { Lesson } from '../modules'

export const FINAL_MODULES_LESSONS: Lesson[] = [
    {
        id: '9-deepfake-forensics',
        title: 'Deepfake Forensics: Smascherare l\'IA',
        content: `# Vedere non è più credere
I Deepfake usano reti neurali (GAN - Generative Adversarial Networks) per mappare il volto di una persona su un'altra. Ma non sono perfetti.

## Segnali Tecnici di Falsificazione:
1. **Artefatti di Frequenza:** Se guardi i bordi del viso con un filtro di contrasto, vedrai dei microscopici "glitch" o rumore non uniforme.
2. **Battito Cardiaco (Remote Photoplethysmography):** Le IA non simulano ancora i microscopici cambiamenti di colore della pelle dovuti al battito del cuore, che un video reale invece registra.
3. **Eterocromia e Luci:** Riflessi negli occhi che non corrispondono alla fonte di luce dell'ambiente o ombre che non seguono la geometria del naso.

## Deepfake Voice (Vishing)
L'audio è ancora più facile da clonare. Se ricevi una richiesta di soldi "urgente" per telefono, fai una domanda che richiede una memoria comune non pubblica. "Cosa abbiamo mangiato al compleanno di zia l'anno scorso?". L'IA non può saperlo.`,
        tips: ['I deepfake faticano con i riflessi negli occhi.', 'Un\'IA non conosce i tuoi segreti di famiglia: usali come test.', 'Controlla sempre i bordi della mascella durante i movimenti veloci.']
    },
    {
        id: '10-crypto-rugpulls-scams',
        title: 'Crypto Scams: Rugpulls e Smart Contracts',
        content: `# Oltre il Bitcoin: La Giungla DeFi
Nel mondo crypto, il codice è legge, ma il codice può essere una trappola.

## Tipi di Truffe Avanzate:
1. **Rug Pulls:** Gli sviluppatori creano una nuova moneta, convincono tutti a comprare (shilling) e poi scappano con i soldi del fondo di liquidità, rendendo la moneta invendibile.
2. **Honey Pots:** Un contratto intelligente (Smart Contract) progettato per farti comprare la moneta ma bloccare tecnicamente il tasto "Vendi". I tuoi soldi sono intrappolati per sempre.
3. **App di Trading Fake:** App che sembrano Binance o Crypto.com ma sono portali che mostrano numeri falsi. Quando provi a prelevare, ti chiedono "tasse" infinite.

## La Regola d'Oro:
Se devi collegare il tuo Wallet (Metamask/TrustWallet) a un sito sconosciuto per ricevere un "AirDrop" gratuito, stai per farti svuotare il conto.`,
        tips: ['Non collegare mai il wallet a siti che non conosci al 100%.', '"Guadagno Garantito" e "Crypto" non possono stare nella stessa frase.', 'Controlla i contratti su BSCScan o Etherscan: cerca la funzione "mint" bloccata.']
    },
    {
        id: '11-sexting-digital-trail',
        title: 'Sexting: Il Fardello Digitale Permanente',
        content: `# La memoria eterna dei server
Quando mandi una foto intima (CSAM), perdi il controllo tecnologico su di essa per sempre.

## La Catena di Distribuzione:
Non è solo la persona a cui la mandi. Le foto vengono spesso salvate in:
- Cloud non sicuri (iCloud/Google Photos dell'altra persona).
- Cache delle app di messaggistica.
- Server di aziende straniere che potrebbero non rispettare il GDPR.

## Sextortion (Ricatto Sessuale)
L'80% dei casi di sextortion inizia con una "ragazza bellissima" (che è un uomo in un altro continente) che ti convince a fare un video osé. Dopo 30 secondi, ti manda una lista dei tuoi amici di Facebook dicendo: "Paga o lo mando a tutti".
**Strategia:** Non pagare. Blocca, segnala a StopNCII.org e vai alla Polizia Postale. Pagare alimenta solo il ricatto.`,
        tips: ['Una foto mandata è una foto pubblica, è solo questione di tempo.', 'StopNCII.org può fare l\'hash della tua foto per bloccarla sui social.', 'I ricattatori puntano sulla tua vergogna: non dargliela.']
    },
    {
        id: '12-digital-rights-surveillance',
        title: 'Diritti Digitali e Sorveglianza di Massa',
        content: `# La Battaglia per la Crittografia
I governi spesso chiedono "Backdoor" (porte di servizio) nelle app come WhatsApp per leggere i messaggi. Sembra sicurezza, ma è sorveglianza.

## Perché la Crittografia End-to-End (E2EE) è vitale:
Senza E2EE, ogni tua conversazione può essere intercettata non solo dai governi, ma anche da hacker, dipendenti infedeli o regimi autoritari. La crittografia protegge la democrazia.

## Il Diritto alla Disconnessione
Hai il diritto legale di non essere "sempre raggiungibile". Molte aziende ora hanno leggi che vietano di mandare mail di lavoro dopo le 18:00 o nei weekend. Difendi il tuo tempo offline: è l'unico modo per non farsi consumare dal mondo digitale.`,
        tips: ['La crittografia protegge tutti, non solo i criminali.', 'Usa Signal per comunicazioni davvero private ed E2EE.', 'Spegni il telefono ogni tanto: è un atto rivoluzionario.']
    },
    {
        id: '13-digital-forensics-evidence',
        title: 'SOS: Raccolta Prove Forensi',
        content: `# Come documentare un crimine online
Se sei vittima di stalking, bullismo o minacce, i semplici screenshot "ritagliati" non valgono quasi nulla in tribunale.

## Procedura di acquisizione corretta:
1. **Screenshot con Metadati:** Includi sempre l'orologio di sistema del PC, l'URL completo nella barra degli indirizzi e, se possibile, il numero di notifica dell'app.
2. **Salva l'URL, non solo il nome:** Gli account cambiano nome (handle), ma l'ID numerico rimane lo stesso.
3. **Usa tool di preservazione:** Esistono siti come **FirstProof** o **CertifiedCopy** che creano un file firmato digitalmente che garantisce che la pagina web non sia stata alterata da te.
4. **Log di Rete:** Se sei un utente esperto, salva il file .HAR (HTTP Archive) dalla console del browser per mostrare le chiamate server reali.

## Contatti Rapidi:
- **Polizia Postale:** commissariato.ps.it
- **114 Emergenza Infanzia:** Per segnalare abusi su minori.`,
        tips: ['Non cancellare nulla prima di aver fatto le copie forensi.', 'Un URL vale più di mille screenshot ritagliati.', 'Conserva le prove su due supporti diversi (chiavetta + cloud).']
    }
]
