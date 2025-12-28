import { Lesson } from '../modules'

export const SOCIAL_GDPR_LESSONS: Lesson[] = [
    {
        id: '5-infinite-scroll',
        title: 'Infinite Scroll: La Gabbia Senza Fine',
        content: `# Perché non riusciamo a smettere di scorrere?
L'Infinite Scroll è un'invenzione di Aza Raskin progettata per eliminare i "punti di arresto".

## La psicologia dietro
Nelle vecchie pagine web, dovevi cliccare "Pagina 2". Quel piccolo gesto ti dava il tempo di pensare: "Voglio davvero continuare?". L'infinite scroll toglie questo momento di riflessione.

### Come un distributore di cibo
È come un piatto che si riempie automaticamente mentre mangi. Non capisci mai quando sei "pieno" di contenuti finché non è troppo tardi.`,
        tips: ['L\'infinite scroll è progettato per farti perdere il senso del tempo.', 'Impara a riconoscere il momento in cui stai scorrendo "nel vuoto".']
    },
    {
        id: '5-dopamina-notifiche',
        title: 'Dopamina e Notifiche Rosse',
        content: `# Il colore dell'urgenza
Hai mai notato che quasi tutte le notifiche sono di colore rosso acceso?

## Attivazione biologica
Il rosso segnala pericolo o urgenza nel nostro cervello primitivo. Vedere quel pallino rosso attiva il rilascio di **dopamina**, lo stesso neurotrasmettitore legato alle dipendenze (cibo, gioco d'azzardo).

### Il Loop
Vedi il pallino → Senti urgenza → Clicchi → Ricevi una gratificazione (un like, un messaggio) → Il cervello chiede un altro giro.`,
        tips: ['Disattiva i pallini rossi delle notifiche: avrai molta meno ansia.', 'Il tuo cervello è programmato per abboccare al rosso.']
    },
    {
        id: '5-dark-patterns-intro',
        title: 'Cosa sono i Dark Patterns',
        content: `# Il design che ti inganna
I Dark Patterns sono interfacce progettate per farti fare cose che non vorresti (come spendere soldi o dare permessi).

## Esempi Comuni
- **Roach Motel:** È facilissimo iscriversi (un click), ma difficilissimo cancellarsi (devi mandare mail, chiamare, navigare in 10 menu).
- **Privacy Zuckering:** Impostazioni di privacy così confuse che finisci per condividere tutto senza volerlo.
- **Confirmshaming:** Testi che ti fanno sentire in colpa se non accetti (es. "No grazie, preferisco non avere successo").`,
        tips: ['Se cancellarsi è difficile, è un Dark Pattern.', 'Non sentirti in colpa per i testi dei bottoni: sono solo trucchi.']
    },
    {
        id: '5-algoritmo-radicalizzazione',
        title: 'Algoritmo e Radicalizzazione',
        content: `# La tana del bianconiglio (Rabbit Hole)
L'algoritmo non vuole darti la verità, vuole darti quello che ti tiene incollato.

## Come funziona
Se guardi un video su un tema specifico, l'algoritmo te ne proporrà uno leggermente più estremo per mantenere alto l'interesse. 

### Il rischio
In poche ore puoi passare da un video di cucina a teorie del complotto assurde o contenuti di odio, semplicemente perché l'algoritmo ha "imparato" che quei temi ricevono più reazioni emotive.`,
        tips: ['L\'algoritmo non è tuo amico, è un venditore di tempo.', 'Cerca attivamente opinioni diverse per rompere la bolla.']
    },
    {
        id: '5-fomo-ansia',
        title: 'FOMO: L\'Ansia di Sparire',
        content: `# Fear Of Missing Out
La FOMO è la paura di essere tagliati fuori da esperienze gratificanti che gli altri stanno vivendo.

## Alimentata dai Social
Vedere le storie di amici a una festa a cui non sei andato o che usano un nuovo gadget crea un senso di esclusione e inadeguatezza.

### Strategia: JOMO
Prova a praticare la **JOMO** (Joy Of Missing Out): la gioia di perdersi le cose per dedicarsi a se stessi, leggere un libro o semplicemente riposare senza il rumore del mondo digitale.`,
        tips: ['Quello che vedi sui social è solo un "highlight reel", non la realtà.', 'La JOMO è un superpotere moderno.']
    },
    {
        id: '6-gdpr-diritti-base',
        title: 'I tuoi 4 Superpoteri GDPR',
        content: `# La Legge Europea è il tuo Scudo
Il GDPR (General Data Protection Regulation) ti dà diritti legali reali contro i colossi tech.

## I tuoi diritti principali
1. **Accesso:** Puoi chiedere: "Cosa sapete di me?". Devono risponderti entro 30 giorni.
2. **Cancellazione (Oblio):** Puoi dire: "Cancellate tutto quello che avete su di me".
3. **Portabilità:** Puoi chiedere i tuoi dati in un file leggibile per portarli su un'altra app.
4. **Opposizione:** Puoi dire: "Smettete di usare i miei dati per la pubblicità".`,
        tips: ['Usa il diritto all\'oblio per pulire il tuo passato digitale.', 'Le aziende che violano il GDPR rischiano multe miliardarie.']
    },
    {
        id: '6-dati-sensibili',
        title: 'Cosa sono i Dati Sensibili?',
        content: `# Non tutti i dati sono uguali
Ci sono informazioni che la legge protegge molto più intensamente.

## Dati Particolari (Sensibili)
Riguardano:
- Orientamento sessuale e vita sessuale.
- Opinioni politiche e sindacali.
- Convinzioni religiose o filosofiche.
- Stato di salute e dati genetici/biometrici (es. impronta digitale).

### Protezione Extra
Le app non possono raccogliere questi dati senza un motivo validissimo e un consenso esplicito e separato dal resto.`,
        tips: ['Proteggi i tuoi dati sanitari e politici con massima cura.', 'Un\'app di giochi non ha alcun motivo per chiederti la religione.']
    },
    {
        id: '6-data-minimization',
        title: 'Data Minimization: Meno è Meglio',
        content: `# Perché dare più del dovuto?
Il principio della "Minimizzazione dei dati" dice che un'azienda deve raccogliere SOLO i dati strettamente necessari.

## Come applicarlo
Quando ti iscrivi a un sito, guarda i campi con l'asterisco (\*). Quelli senza asterisco sono facoltativi: **NON COMPILARLI.**
Perché dovresti dire a un sito di ricette la tua data di nascita o il tuo numero di telefono? Più dati dai, più sarai tracciato e più rischi in caso di data breach.`,
        tips: ['Compila solo i campi obbligatori.', 'Se chiedono troppo, inventa dati falsi (se non necessari al servizio).']
    },
    {
        id: '6-have-i-been-pwned-pratico',
        title: 'Check-up: Have I Been Pwned',
        content: `# La tua password è in vendita?
Ogni giorno miliardi di credenziali vengono rubate dai server di grandi aziende.

## Cosa fare subito
1. Vai su [HaveIBeenPwned.com](https://haveibeenpwned.com).
2. Inserisci la tua mail principale.
3. Se appare "Oh no — pwned!", guarda sotto: vedrai quali siti sono stati bucati.

### Azione correttiva
Se vedi "Adobe" o "Canva", vai su quei siti e cambia password. Se usavi quella stessa password per Instagram, cambia ANCHE quella di Instagram.`,
        tips: ['Controlla la mail su HIBP ogni mese.', 'Se sei stato "pwned", la tua vecchia password non è più sicura.']
    },
    {
        id: '6-cookie-legge',
        title: 'I Banner dei Cookie: Cosa scegliere?',
        content: `# Accetta tutto o Rifiuta tutto?
Quei fastidiosi popup che appaiono su ogni sito servono a raccogliere il tuo consenso.

## La scelta giusta
Di solito ci sono tre bottoni:
1. **Accetta Tutti:** Dai il permesso anche ai tracker pubblicitari (SCONSIGLIATO).
2. **Personalizza:** Ti fa perdere 5 minuti (NOIOSO).
3. **RIFIUTA TUTTI / SOLO NECESSARI:** La scelta migliore per la privacy.

### Il trucco
Per legge, il sito DEVE funzionare anche se rifiuti i cookie pubblicitari. Non aver paura di cliccare "Rifiuta".`,
        tips: ['Clicca sempre su "Rifiuta tutti" o "Solo necessari".', 'Usa estensioni come "Consent-O-Matic" per farlo in automatico.']
    },
    {
        id: '7-classroom-privacy',
        title: 'Privacy su Google Classroom',
        content: `# La scuola ti osserva?
Google Classroom e Workspace for Education hanno impostazioni diverse dal Google normale.

## Cosa vede il prof
L'insegnante può vedere quando hai aperto un documento, quanto tempo ci hai lavorato e se hai consegnato in ritardo. Non può (di solito) vedere cosa fai in altre tab del browser a meno che non usi software specifici di monitoraggio.

### Consiglio
Usa un profilo Chrome separato per la scuola e uno per i fatti tuoi. Così i tuoi segnalibri e le tue ricerche personali non si mischiano con i dati scolastici.`,
        tips: ['Usa profili browser separati per scuola e vita privata.', 'L\'account della scuola è di proprietà della scuola, non tuo.']
    },
    {
        id: '7-meet-zoom-security',
        title: 'Sicurezza in Videochiamata',
        content: `# Proteggere la tua casa in DAD
Quando attivi la webcam, stai aprendo una finestra sulla tua vita privata.

## Consigli pratici
- **Sfoca lo sfondo:** Impedisce agli altri di vedere i tuoi poster, la tua camera o chi passa dietro di te.
- **Microfono spento:** Accendilo solo quando devi parlare per evitare di trasmettere conversazioni private dei tuoi genitori.
- **Attenzione allo Screen Share:** Se devi condividere lo schermo, condividi solo UNA TAB, non l'intero desktop. Potrebbero apparire notifiche private o messaggi su WhatsApp Web.`,
        tips: ['Sfoca lo sfondo per proteggere i dettagli della tua casa.', 'Condividi sempre la singola finestra, mai l\'intero schermo.']
    },
    {
        id: '8-gaming-grooming',
        title: 'Predatori nei Videogiochi',
        content: `# Roblox, Fortnite e il Grooming
Molti pensano che i predatori siano solo sui social, ma il gaming è il loro terreno preferito.

## Perché il gaming?
È facile fingere di essere un ragazzo. "Ehi, giochiamo insieme?", "Ti regalo una skin", "Vuoi entrare nel mio server Discord?".

### Il segnale di pericolo
Se un giocatore più grande (o che dice di essere tale) inizia a farti domande sulla tua vita vera, sui tuoi genitori o ti chiede foto fuori dal gioco, BLOCCALO. Il gaming deve restare gaming.`,
        tips: ['Regali gratis da sconosciuti = Spesso è l\'inizio di un adescamento.', 'Non condividere mai il tuo nome vero o la tua città in chat di gioco.']
    },
    {
        id: '8-discord-safety',
        title: 'Discord: La Giungla dei Server',
        content: `# Configurare Discord in sicurezza
Discord è il cuore delle community di gaming, ma può essere molto invasivo.

## Impostazioni da cambiare subito
1. **Privacy e Sicurezza:** Attiva "Keep me safe" (scansiona le immagini nei messaggi diretti).
2. **Messaggi Diretti:** Disabilita i messaggi diretti dai membri del server che non conosci direttamente.
3. **Richieste di Amicizia:** Limita a "Amici di Amici" o "Membri del Server".

### Server Sconosciuti
Evita di entrare in server che promettono "Nitro gratis" o "Leak di foto". Sono quasi sempre esche per rubare il tuo account o installare malware.`,
        tips: ['Disabilita i DM dai membri del server sconosciuti.', 'Le promesse di "Nitro gratis" sono truffe al 99%.']
    },
    {
        id: '8-skin-trading-scams',
        title: 'Truffe nel Trading di Skin',
        content: `# Non farti rubare l'inventario
Il mercato delle skin (CS:GO, Roblox, Fortnite) muove miliardi ed è pieno di ladri.

## Tattiche comuni
- **API Scam:** Ti fanno loggare su un sito di trading falso che ruba la tua chiave API di Steam. Da quel momento, possono deviare i tuoi scambi futuri verso i loro account.
- **Middleman Scam:** "Usiamo un garante (middleman)". Il garante è in realtà un loro amico complice o un profilo fake.

### Regola d'oro
Usa solo i mercati ufficiali (Steam Market). Se qualcuno ti offre un prezzo troppo alto per una tua skin, sta cercando di truffarti.`,
        tips: ['Usa solo mercati ufficiali per il trading.', 'L\'API Key di Steam è come la chiave di casa: non darla a nessuno.']
    }
]
