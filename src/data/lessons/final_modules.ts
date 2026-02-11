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
        id: '9-ai-ethics-bias',
        title: 'Etica dell\'IA: Bias e Allucinazioni',
        content: `# Il lato oscuro degli algoritmi
L'IA non "pensa", ma predice la parola o il pixel successivo basandosi su dati passati. Questo crea due grandi problemi:

## Allucinazioni (Falsi Fatti)
Le IA generative possono inventare leggi, sentenze o fatti storici con estrema sicurezza. 
**Regola d'oro:** Non usare mai un'IA come fonte primaria di ricerca senza verificare ogni singola affermazione su fonti ufficiali.

## Bias Algoritmico (Pregiudizio)
Se i dati usati per addestrare l'IA contengono pregiudizi razziali o sessisti, l'IA li amplificherà. Ad esempio, alcuni software di selezione del personale hanno scartato donne solo perché i dati storici mostravano più uomini in posizioni di successo.`,
        tips: ['L\'IA non è una fonte di verità, è un generatore di probabilità.', 'Chiedi sempre all\'IA di citare le fonti, poi controllale.', 'Diffida dei giudizi estetici o morali espressi da un software.']
    },
    {
        id: '9-generative-copyright',
        title: 'Copyright e Proprietà Intellettuale',
        content: `# Di chi è l'arte dell'IA?
Quando un'IA genera un'immagine "nello stile di Van Gogh", sta usando il lavoro di milioni di artisti umani per addestrarsi. Questo solleva enormi problemi legali.

## Proprietà delle Immagini:
In molte giurisdizioni, le immagini generate interamente dall'IA non sono protette da copyright, perché manca l'apporto creativo umano. Questo significa che chiunque potrebbe usare la "tua" creazione IA senza chiederti il permesso.

## Violazione del Diritto d'Autore:
Le aziende di IA stanno affrontando cause miliardarie perché hanno usato dataset (come LAION) contenenti opere protette senza pagare gli artisti. Il futuro dell'IA dipenderà da come le leggi proteggeranno il lavoro umano originale.`,
        tips: ['Le opere 100% IA spesso non hanno protezione legale.', 'L\'IA è addestrata sul lavoro di milioni di persone senza compenso.', 'Usa l\'IA come strumento di supporto, non come creatore unico.']
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
        id: '10-wallets-safe-storage',
        title: 'Cold Storage: Proteggere la Proprietà',
        content: `# Not your keys, not your coins
Se i tuoi bitcoin sono su un exchange (Exchange-hosted wallet), non sono davvero tuoi: sei un creditore dell'exchange.

## Hardware Wallets (Cold Storage)
Un hardware wallet (es. Ledger o Trezor) tiene la tua chiave privata offline, cioè fisicamente staccata da Internet. Anche se il tuo PC è pieno di virus, l'hacker non può firmare una transazione senza toccare fisicamente il tuo dispositivo.

## Seed Phrase: Il Testamento Digitale
Le 12 o 24 parole segrete sono l'unico modo per recuperare i tuoi fondi se perdi l'hardware wallet. 
**Mai:** scriverle sul telefono, inviarle via email o fotografarle.
**Sempre:** scriverle su carta (o inciderle su acciaio) e nasconderle fisicamente.`,
        tips: ['L\'unico posto sicuro per la Seed Phrase è il mondo fisico.', 'Un hardware wallet è l\'unico modo per dormire sonni tranquilli.', 'Non fotografare mai le tue chiavi private.']
    },
    {
        id: '10-social-engineering-crypto',
        title: 'Ingegneria Sociale e Phishing Crypto',
        content: `# Hackerare l'Umano, non la Blockchain
La blockchain del Bitcoin è quasi impossibile da hackerare, ma tu sei vulnerabile.

## Truffe comuni su Discord e Telegram:
- **Supporto Tecnico Fake:** Qualcuno si spaccia per un admin di Binance o Metamask e ti chiede la Seed Phrase per "aiutarti".
- **L'Influencer Generoso:** Un account che sembra quello di Elon Musk ti promette di raddoppiare i tuoi bitcoin se gliene mandi una parte. È un sistema piramidale classico.

## La sottile arte del "Panic-Selling":
Gli hacker diffondono spesso FUD (Fear, Uncertainty, Doubt) per far crollare il prezzo di una moneta e convincere le persone a vendere in preda al panico, per poi ricomperare tutto a prezzi stracciati.`,
        tips: ['Nessun admin ti scriverà mai in privato per chiederti dati.', 'Diffida delle promesse di guadagno immediato sui social.', 'Ignora i messaggi non richiesti che parlano di crypto.']
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
        id: '11-consensual-boundaries',
        title: 'Confini Digitali e Consenso',
        content: `# Il consenso nell'era dei Deepfake
Il consenso non è una decisione "una tantum", ma un processo continuo e revocabile in ogni momento.

## Revenge Porn 2.0
Utilizzare l'IA per creare falsi nudi di qualcuno (Deepnudes) è un reato gravissimo in Italia, equiparato alla diffusione di materiale pedopornografico o alla diffamazione aggravata, a seconda dei casi e dell'età coinvolta.

## Protezione Legale Permanente:
- **Diritto di revoca:** Anche se hai dato il consenso a un'immagine ieri, hai il diritto legale di chiederne la rimozione oggi.
- **Diffusione non consensuale:** Chiunque inoltri una foto intima senza il consenso del soggetto commette un reato, anche se non è stato lui a scattarla.`,
        tips: ['Inoltrare una foto privata è un reato penale, non una ragazzata.', 'Il consenso digitale deve essere esplicito e costante.', 'Usa tool come StopNCII per prevenire la diffusione virale.']
    },
    {
        id: '11-grooming-legal-risks',
        title: 'Responsabilità Penali e Civili',
        content: `# Le conseguenze nel mondo reale
Le azioni online hanno ripercussioni fisiche, legali ed economiche pesantissime.

## Per chi subisce:
Il trauma psicologico può durare anni. La legge italiana prevede risarcimenti civili enormi per chi è vittima di diffamazione o revenge porn.

## Per chi commette:
Il cyber-bullismo e la sextortion non "spariscono" con il tempo. Una condanna penale significa:
- Fedina penale sporca (difficoltà a trovare lavoro).
- Possibile sequestro di tutti i dispositivi elettronici (PC, smartphone, tablet).
- Ripercussioni legali anche sui genitori se l'autore è minorenne (Culpa in vigilando).`,
        tips: ['Uno scherzo online può distruggere la tua carriera futura.', 'I genitori rispondono legalmente delle azioni dei figli online.', 'La Polizia Postale ha tool avanzati per risalire agli autori anonimi.']
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
        id: '12-net-neutrality-freedom',
        title: 'Neutralità della Rete e Libertà',
        content: `# Internet è un servizio pubblico?
La Net Neutrality è il principio secondo cui i fornitori di servizi Internet (ISP) devono trattare tutti i dati su Internet allo stesso modo, senza discriminazioni o costi differenziati.

## Il Rischio delle "Corsie Preferenziali"
Senza neutralità, il tuo operatore telefonico potrebbe rallentare YouTube per favorire il proprio servizio di streaming, o bloccare siti di attivismo politico che non gradisce.

## Il Grande Firewall:
In paesi come la Cina o la Russia, la rete non è neutrale: migliaia di siti sono bloccati per motivi di controllo sociale. La neutralità della rete è la garanzia che l'informazione rimanga libera e accessibile a tutti, indipendentemente dal reddito.`,
        tips: ['La neutralità della rete impedisce ai provider di censurare contenuti.', 'Senza questo principio, Internet diventerebbe come la TV via cavo.', 'Sostieni le associazioni che lottano per l\'Internet libera.']
    },
    {
        id: '12-eu-ai-act-protection',
        title: 'L\'EU AI Act e la tua Protezione',
        content: `# La Legge che limita l'IA
L'Unione Europea è stata la prima al mondo a creare una legge organica sull'Intelligenza Artificiale: l'AI Act.

## Classificazione dei Rischi:
1. **Rischio Inaccettabile:** Sistemi di "Social Scoring" (come in Cina) o riconoscimento facciale indiscriminato in tempo reale sono VIETATI in Europa.
2. **Alto Rischio:** IA usate nella giustizia, sanità o selezione del personale devono essere trasparenti e controllate da umani.
3. **Trasparenza:** Ogni volta che interagisci con un chatbot o guardi un'immagine generata dall'IA, l'azienda è obbligata a dirtelo esplicitamente.`,
        tips: ['L\'Europa ti protegge dai sistemi di sorveglianza biometrica.', 'L\'IA deve sempre avere un "interruttore umano" di controllo.', 'Hai il diritto di sapere se stai parlando con un bot.']
    },
    {
        id: '13-attention-economy',
        title: 'Economia dell\'Attenzione',
        content: `# Se è gratis, il prodotto sei tu
Le piattaforme social non vendono un servizio a te; vendono la tua attenzione agli inserzionisti. Per farlo, usano tecniche di "Ludopatia Informatica".

## Dark Patterns e Infinite Scroll
Lo scroll infinito su TikTok o Instagram è progettato sul modello delle slot machine di Las Vegas: il "premio variabile". Non sai mai cosa apparirà dopo, e questa incertezza tiene il tuo cervello in uno stato di costante dipendenza da dopamina.

## Manipolazione del Tempo:
Le notifiche rosse sfruttano il nostro istinto primordiale di prestare attenzione al pericolo o alle opportunità sociali, rendendo quasi impossibile ignorare il telefono.`,
        tips: ['Disattiva tutte le notifiche non umane (no like, no news).', 'Il tempo è l\'unica risorsa non rinnovabile: non regalarlo agli algoritmi.', 'Prova il "Grayscale Mode" (schermo in bianco e nero) per rendere il telefono meno attraente.']
    },
    {
        id: '13-digital-minimalism',
        title: 'Minimalismo Digitale',
        content: `# Riprendere il controllo
Il Minimalismo Digitale non significa tornare all'età della pietra, ma usare la tecnologia in modo intenzionale invece che compulsivo.

## Strategie di Difesa:
1. **Decluttering delle App:** Se non usi un'app da un mese, cancellala. Ogni app è un potenziale varco per i tuoi dati e un ladro della tua attenzione.
2. **Zone Phone-Free:** Non portare il telefono a tavola o in camera da letto. Crea dei santuari fisici dove la tecnologia non è ammessa.
3. **Il Test della Noia:** Invece di tirare fuori il telefono ogni volta che aspetti il bus o sei in coda, prova a stare con i tuoi pensieri. La noia è la culla della creatività.`,
        tips: ['Meno app significa meno distrazioni e più privacy.', 'Sostituisci il consumo passivo con la creazione attiva.', 'Dormi senza telefono: il tuo sonno cambierà volto.']
    },
    {
        id: '13-fomo-self-image',
        title: 'FOMO e Distorsione dell\'Immagine',
        content: `# La trappola del confronto costante
La FOMO (Fear Of Missing Out) è la paura di essere tagliati fuori da esperienze gratificanti che altri stanno vivendo.

## La Recita Digitale:
Sui social, le persone mostrano solo i "momenti migliori" (Highlight Reel) della loro vita, spesso filtrati o costruiti. Quando confrontiamo la nostra vita reale (piena di momenti normali o difficili) con la vita filtrata degli altri, proviamo un senso di inadeguatezza.

## Distorsione dell'Immagine:
L'uso costante di filtri di bellezza può portare alla "Dismorfia da Selfie", dove non accettiamo più il nostro volto reale perché non corrisponde alla versione ritoccata dall'IA.
**Strategia:** Ricorda che un profilo social è un'opera di finzione, non un documentario. La vita vera accade quando spegni lo schermo.`,
        tips: ['Smetti di seguire chi ti fa sentire inadeguato.', 'La vita reale non ha filtri, ed è bella così.', 'Pratica la JOMO (Joy Of Missing Out): la gioia di staccare.']
    }
]
