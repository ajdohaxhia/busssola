import { Lesson } from '../modules'

export const SOCIAL_GDPR_LESSONS: Lesson[] = [
    {
        id: '5-infinite-scroll-psych',
        title: 'Infinite Scroll: Architettura della Dipendenza',
        content: `# Perché non riusciamo a smettere di scorrere?
L'Infinite Scroll non è solo una comodità, è un'arma psicologica progettata per eliminare i "punti di arresto" (Cessation Cues).

## Il Rinforzo a Rapporto Variabile
Questa tecnica viene usata nelle Slot Machine. Se sapessi che ogni 3 scroll trovi qualcosa di bello, ti annoieresti. Se invece il contenuto interessante arriva in modo casuale (a volte dopo 1 scroll, a volte dopo 10), il tuo cervello rilascia molta più **Dopamina**. Continui a scorrere perché "il prossimo potrebbe essere il video della vita".

## L'illusione del Tempo
Senza il tasto "Pagina Successiva", il tuo cervello non ha il tempo di elaborare quanto tempo è passato. In media, un utente passa il 50% di tempo in più sulle app che usano l'infinite scroll rispetto a quelle con paginazione classica.
**Consiglio Tecnico:** Imposta un "Timer App" nelle impostazioni del telefono. Quando il tempo scade, l'app si chiude forzatamente, creando quel punto di arresto che l'algoritmo ha rimosso.`,
        tips: ['L\'infinite scroll simula il meccanismo delle slot machine.', 'Imposta un timer di 30 minuti per app come TikTok o Instagram.', 'Ogni "scroll" è una scommessa dopaminergica che stai facendo con il tuo tempo.']
    },
    {
        id: '5-dark-patterns-deep-dive',
        title: 'Dark Patterns: L\'Inganno nel Design',
        content: `# Come le interfacce ti manipolano
I Dark Patterns sono trucchi di design che ti spingono a fare scelte che non sono nel tuo interesse, ma in quello dell'azienda.

## Tipologie Avanzate:
1. **Sneak into Basket:** Vai per comprare una cosa e te ne trovi un'altra nel carrello (es. un'assicurazione o un abbonamento).
2. **Disguised Ads:** Pubblicità fatte per sembrare parte del contenuto del sito o bottoni "Download" falsi che installano virus.
3. **Friend Spam:** L'app ti chiede il permesso di "trovare amici" e poi invia messaggi a tutti i tuoi contatti a tuo nome.
4. **Nagging:** Popup continui che ti chiedono di attivare le notifiche o di iscriverti alla newsletter, impedendoti di leggere il contenuto finché non accetti.

## Difesa:
Esercita lo "Scetticismo Visivo". Prima di cliccare un bottone colorato e grande, cerca il link piccolo e grigio (spesso quello "giusto").`,
        tips: ['I bottoni più grandi e colorati sono quelli che l\'azienda vuole farti cliccare.', 'Se un\'app ti fa sentire in colpa (Confirmshaming), disinstallala.', 'Cerca sempre la "X" piccola o il link "Continua senza accettare".']
    },
    {
        id: '6-gdpr-diritti-legali',
        title: 'GDPR: La tua Costituzione Digitale',
        content: `# Il Regolamento UE 2016/679 (GDPR)
Il GDPR è la legge più forte al mondo sulla privacy. Ecco come usarla per riprenderti i tuoi dati.

## Articolo 15: Diritto di Accesso
Hai il diritto di ottenere una copia GRATUITA di tutti i dati che un'azienda ha su di te. Google e Facebook hanno portali specifici ("Scarica i tuoi dati"). Scoprirai che hanno registrato ogni tua posizione GPS e ogni ricerca fatta negli ultimi 10 anni.

## Articolo 17: Diritto alla Cancellazione (Oblio)
Puoi obbligare un sito a cancellare i tuoi dati se non sono più necessari. Se un vecchio forum ha ancora i tuoi post di quando avevi 10 anni e ora ti imbarazzano, puoi chiederne la rimozione legale.

## Articolo 22: Decisioni Automatizzate
Hai il diritto di non essere sottoposto a una decisione basata unicamente su un algoritmo (es. un'app che decide se puoi avere un prestito o un lavoro senza l'intervento di un essere umano).`,
        tips: ['Usa "Scarica i tuoi dati" per capire quanto sanno di te.', 'Il diritto all\'oblio vale anche per i risultati di Google.', 'Le aziende hanno 30 giorni per rispondere alle tue richieste GDPR.']
    },
    {
        id: '6-data-brokers-shadow-profiles',
        title: 'Data Brokers e Shadow Profiles',
        content: `# Chi vende la tua vita digitale?
Anche se non hai Facebook, Facebook sa chi sei. Si chiama **Shadow Profile** (Profilo Ombra).

## Come creano il tuo profilo ombra:
Quando i tuoi amici caricano la loro rubrica contatti per "trovarti", l'azienda salva il tuo numero e la tua mail. Incrociando i dati di migliaia di persone, possono capire chi sei, dove vivi e chi frequenti anche se non ti sei mai iscritto al servizio.

## I Data Brokers
Aziende come Axiom o Acxiom raccolgono dati da migliaia di fonti (tessere fedeltà dei supermercati, registri immobiliari, quiz online) per creare un profilo di marketing su di te e venderlo a chiunque voglia influenzarti.
**Difesa:** Usa tracker blockers (come uBlock Origin) e chiedi la cancellazione dei dati tramite servizi come [SayMine](https://saymine.com).`,
        tips: ['I "profili ombra" mappano anche chi non è sui social.', 'Un tracker blocker è essenziale per non alimentare i data brokers.', 'Riduci le tessere fedeltà fisiche: sono strumenti di sorveglianza commerciale.']
    },
    {
        id: '7-school-privacy-ferpa-gdpr',
        title: 'Privacy Scolastica e Sorveglianza',
        content: `# Studiare sotto controllo
Le piattaforme educational (GSuite for Education, Microsoft Teams) raccolgono enormi quantità di metadati sugli studenti.

## Cosa viene tracciato:
- **Engagement Metrics:** Quanto tempo passi sulla pagina del compito? Hai fatto "copia-incolla" da un altro sito?
- **Attività del Browser:** Se la scuola fornisce il chromebook o l'account, può vedere tutto quello che fai mentre sei loggato.
- **Biometria:** Alcune app di proctoring (per gli esami online) usano il tracciamento oculare e l'IA per vedere se stai barando, analizzando il movimento dei tuoi occhi.

## Tuoi Diritti
La scuola deve pubblicare una "Informativa Privacy" specifica per gli studenti. Leggerla ti permette di capire chi ha accesso ai tuoi voti e ai tuoi dati comportamentali.`,
        tips: ['Non usare mai l\'account della scuola per scopi personali.', 'Software di monitoraggio oculare sono spesso al limite della legalità.', 'L\'account scolastico è un ambiente di lavoro, non di svago.']
    },
    {
        id: '8-gaming-discord-hardening',
        title: 'Gaming & Discord: Hardening del Profilo',
        content: `# Sicurezza Avanzata per Gamer
Il gaming è il settore più colpito da furti di account e "doxxing".

## Discord Hardening:
1. **Filtro Messaggio Esplicito:** Imposta su "Keep me safe" per evitare che ti mandino immagini con virus o contenuti illegali via DM.
2. **Dati e Privacy:** Disabilita "Usa i dati per migliorare Discord" e "Usa i dati per personalizzare l'esperienza". Meno dati dai, meno sei tracciabile.
3. **Authorized Apps:** Controlla ogni mese quali app/bot hanno accesso al tuo account. Molti bot "Nitro Generator" servono solo a rubare il tuo token di accesso.

## Protezione IP nel Gaming
Se giochi su server privati o peer-to-peer (come alcuni vecchi titoli), il tuo indirizzo IP è visibile agli altri giocatori. Questo può portare ad attacchi **DDoS** (ti buttano giù la connessione) o doxxing.
**Soluzione:** Usa una VPN con server ottimizzati per il gaming per nascondere il tuo IP reale agli altri giocatori.`,
        tips: ['Un "token" di Discord dà accesso totale al tuo account senza password.', 'I bot che promettono premi gratuiti sono cavalli di troia.', 'Nascondere l\'IP è fondamentale nei tornei competitivi online.']
    }
]
