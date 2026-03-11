import { Module } from '@/types'

export const MODULO_1: Module = {
    id: 'orientarsi-online',
    title: 'Orientarsi online senza panico',
    subtitle: 'Le basi per capire i rischi digitali',
    description: 'Le basi per capire i rischi digitali, scegliere il percorso giusto e distinguere prevenzione, supporto e urgenza.',
    difficulty: 'base',
    themeColor: '#3b82f6', // blue
    icon: 'Compass',
    durationHours: 2,
    number: 1,
    tips: [
        'Non cercare la perfezione, cerca la consapevolezza.',
        'Se un problema digitale ti toglie il sonno, non è solo "virtuale".',
        'Impara a dividere i problemi urgenti da quelli solo fastidiosi.'
    ],
    resources: [
        {
            title: 'Polizia Postale - Segnalazioni',
            url: 'https://www.commissariatodips.it/segnalazioni/index.html',
            description: 'Canale ufficiale per segnalazioni rapide.'
        }
    ],
    lessons: [
        {
            id: '1',
            title: 'Cos’è "Orientarsi online senza panico" nella vita quotidiana',
            minutes: 5,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Capire cosa significa "navigare sicuri" oggi.',
                'Distinguere i problemi reali dal sovraccarico informativo.',
                'Imparare a fermarsi prima di cliccare impulsivamente.'
            ],
            contentMarkdown: `### Perché conta
La sicurezza digitale non è roba da hacker. È la capacità quotidiana di usare il telefono, leggere le email e fare amicizie online senza farsi rubare tempo, soldi o serenità. Sviluppare un orientamento sano significa non vivere nel terrore, ma nemmeno nell'ingenuità.

### Il concetto chiave
L'ansia ti fa cliccare velocemente, la lucidità ti fa aspettare un secondo in più. Orientarsi significa riprendere il controllo del ritmo con cui rispondi agli stimoli digitali.

### Segnali da riconoscere
- Senti l'ansia di dover rispondere subito a una notifica (FOMO).
- Hai la sensazione che tutti siano più esperti di te e ti senti in costante difetto.
- Ti blocchi quando vedi un pop-up o un errore strano sullo schermo, temendo il peggio.

### Esempio realistico
Stai leggendo un post e improvvisamente compare un avviso rosso lampeggiante: "Il tuo telefono ha 13 virus! Clicca qui per pulirlo". Il panico ti spingerebbe a cliccare per risolvere tutto e subito. Un orientamento sano ti fa sorridere, chiudere la scheda del browser e continuare la tua giornata.

### Cosa fare
- **Fermati:** Applica la regola dei 3 secondi. Se una richiesta online ha troppa urgenza, è probabilmente concepita per bypassare la tua logica.
- **Riduci:** Disabilita le notifiche non necessarie. Meno interruzioni equivalgono a scelte più lucide.
- **Domanda:** Se non capisci una schermata o una richiesta, chiedi a un amico o cerca su un motore di ricerca prima di agire.

### Cosa evitare
- Evita di cliccare link solo per "toglierti il pensiero".
- Non farti spaventare da messaggi che usano toni autoritari o ultimatum.
- Evita di ignorare piccoli problemi finché non diventano grandi (es. non aggiornare mai le password).

### Mettiti alla prova
Oggi prova a identificare almeno una "finta emergenza" sul tuo telefono (una notifica push inutile, un'email promozionale con un timer in scadenza) e ignorala intenzionalmente. Annota mentalmente come ti sei sentito.

### Quando chiedere aiuto
Se ti rendi conto che l'uso degli schermi o l'ansia rispetto alle truffe online ti impedisce di dormire, di lavorare o di vivere serenamente le relazioni.

### Per genitori e scuole
Il panico digitale è contagioso. Se un adulto va nel panico perché "hanno hackerato WhatsApp", il ragazzo imparerà che il digitale è puro caos. Mostrate calma e procedimento logico davanti a un intoppo tecnologico.

### Da verificare periodicamente
- La lista delle app che hanno il permesso di inviarti notifiche (seleziona solo quelle essenziali).
- Quante ore passi sui social senza un vero scopo.

### Cosa fare adesso
Disattiva le notifiche di tre app che usi meno ma che ti disturbano più spesso (es. giochi, e-commerce, vecchi social). Respira.`
        },
        {
            id: '2',
            title: 'Perché orientarsi online conta davvero',
            minutes: 6,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Comprendere le conseguenze concrete della disattenzione online.',
                'Smettere di delegare la propria sicurezza mentale alle piattaforme.',
                'Riconoscere il valore dei propri dati personali e del proprio tempo.'
            ],
            contentMarkdown: `### Perché conta
Ogni app, sito o servizio che usi è progettato per trattenerti, raccogliere dati o venderti qualcosa. Questo ecosistema non è un parco giochi neutro. Orientarsi non è un lusso, è un'autodifesa essenziale per proteggere il tuo conto in banca, le tue relazioni e il tuo umore.

### Il concetto chiave
Sei tu il perimetro della tua sicurezza. Gli antivirus e i filtri sono inutili se la tua reazione istintiva davanti a un link ingannevole è cliccare senza pensare.

### Segnali da riconoscere
- Cedi dati personali (email, telefono, accessi) solo per leggere un articolo o partecipare a un concorso.
- Hai la sensazione che il web sappia "troppo" di te.
- Provi frustrazione perché non capisci come risolvere un problema tecnico e ti senti impotente.

### Esempio realistico
Per accedere a un quiz sui "tuoi colori autunnali" accetti i termini di servizio senza leggere e colleghi l'app al tuo profilo social. Il giorno dopo, trovi la tua bacheca invasa da pubblicità mirate e spam, e ti lamenti del fatto che i social "ci spiano".

### Cosa fare
- **Valuta lo scambio:** Chiediti sempre "Ne vale la pena?". Il quiz gratuito vale l'accesso ai tuoi contatti?
- **Agisci proattivamente:** Impara dove si trovano le impostazioni della privacy principali del tuo dispositivo.
- **Mantieni lo scetticismo:** Abitua la tua mente a considerare l'opzione "No, rifiuto" come la scelta predefinita per i permessi, non l'eccezione.

### Cosa evitare
- Evita l'atteggiamento "Tanto non ho nulla da nascondere". I tuoi dati hanno valore commerciale.
- Non trattare le regole di sicurezza (come password lunghe) come fastidiosi ostacoli inventati dai tecnici.
- Evita di pensare che "queste cose succedono solo agli anziani o agli ingenui".

### Mettiti alla prova
Controlla ora la sezione "Permessi" o "Privacy" del tuo telefono. Trova un'applicazione (magari una torcia, un gioco o un'app di fotoritocco) che ha accesso alla tua Posizione o al Microfono e revocagli quel permesso. Continua a funzionare? 

### Quando chiedere aiuto
Se ti accorgi che i tuoi dispositivi si comportano in modo anomalo (molto lenti, batteria che si scarica senza motivo) e sospetti di aver dato accessi sbagliati in passato.

### Per genitori e scuole
Spiegare l'importanza dell'orientamento online significa paragonarlo alla sicurezza stradale. Non vieta di uscire di casa, ma insegna a guardare a destra e sinistra prima di attraversare, per evitare danni reali.

### Da verificare periodicamente
- La cronologia dei consensi dati ai cookie o siti terzi.
- Abbonamenti attivi su store (App Store o Google Play) che potresti aver dimenticato.

### Cosa fare adesso
Scegli una password debole che sai di usare da troppo tempo ("juventus", "sole123") e impegnati a cambiarla in una passphrase (una frase più lunga) entro fine giornata.`
        },
        {
            id: '3',
            title: 'Le aree principali coperte da questo orientamento',
            minutes: 5,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Inquadrare la sicurezza informatica separandola da privacy e digital wellbeing.',
                'Saper riconoscere quale area è sotto attacco durante un imprevisto.',
                'Pianificare il proprio apprendimento.'
            ],
            contentMarkdown: `### Perché conta
"Problemi col computer" o "Disastri online" sono categorie troppo ampie che generano solo confusione. Saper distinguere tra un problema di *Privacy* (i miei dati sono visibili), un problema di *Sicurezza* (qualcuno è entrato nel mio account) e un problema di *Benessere* (passo troppe ore sui social) permette di applicare la soluzione giusta.

### Il concetto chiave
Ogni imprevisto digitale appartiene a una categoria specifica, ed esistono strumenti specifici per risolvere ognuna di esse. Diagnosi accurata = panico azzerato.

### Segnali da riconoscere
- Hai una "sensazione generica di pericolo" quando accendi il computer ma non sai indicare da dove proviene.
- Confondi il furto del profilo Instagram (sicurezza) con il fatto che qualcuno parli male di te online (relazioni/bullismo).
- Mescoli gli strumenti di soluzione: cerchi di risolvere lo spam cambiando l'antivirus.

### Esempio realistico
Ricevi una mail dalla tua banca che ti dice che il conto è clonato. Questa è l'area della **Sicurezza/Phishing**. Una ragazza viene presa in giro in un gruppo di classe: questa è l'area del **Cyberbullismo/Relazioni**. Un genitore non riesce a far smettere di giocare il figlio: questa è l'area del **Benessere Digitale**. Confondere i piani (es. pensare che il figlio sia "hackerato" dalla PlayStation) peggiora solo la situazione.

### Cosa fare
- **Mappa il problema:** Davanti a un imprevisto chiediti: chi sta cercando di fare cosa? È tecnico o relazionale?
- **Impara il vocabolario base:** Account rubato, malware, cyberbullismo, spam, doxxing. Sapere come si china il problema aiuta a cercare la soluzione.
- **Esplora il catalogo Busssola:** Da oggi, naviga i moduli come una farmacia, prendendo il rimedio per lo specifico "sintomo" che ti serve.

### Cosa evitare
- Evita il catastrofismo: "Mi hanno distrutto il telefono!". Sii specifico: "Vedo molte pubblicità strane sullo schermo".
- Non mischiare i piani emotivi e quelli tecnici. Un danno tecnico si risolve formattando o cambiando password. Un danno relazionale richiede supporto emotivo.

### Mettiti alla prova
Fai una lista su un foglio dei tuoi tre principali problemi o paure digitali di oggi (es. "Paura di perdere le foto", "Ansia da email di lavoro", "Password sempre scordate"). Cerca nel catalogo Busssola a quale modulo appartengono.

### Quando chiedere aiuto
Se ti trovi davanti a un problema che coinvolge più aree contemporaneamente, ad esempio un furto di account (Tecnico) che sfocia in un ricatto (Sextortion/Relazionale).

### Per genitori e scuole
Questo è il momento migliore per ascoltare ragazz* quando parlano di un problema. Spesso usano il termine "Hackerato" per dire "Un tizio mi ha indovinato la password perché era 1234". Tradurre le parole in modo corretto ridimensiona la paura.

### Da verificare periodicamente
- Resta aggiornato sui nuovi termini (cos'è un Deepfake, ad esempio), non per rincorrerli, per capire come nominarli se ti succedono.

### Cosa fare adesso
Scegli le 3 aree della piattaforma Busssola che senti prioritarie per te in questa settimana (es: Password, Phishing, Backup) e salvale tra i tuoi preferiti.`
        },
        {
            id: '4',
            title: 'Errori comuni quando si pensa ai rischi digitali',
            minutes: 6,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Sfatare il mito dell\'hacker incappucciato che attacca a caso.',
                'Capire che l\'errore umano è al centro di quasi tutti i problemi.',
                'Abbandonare il senso di colpa paralizzante quando si fa clic sul link sbagliato.'
            ],
            contentMarkdown: `### Perché conta
Abbiamo un'idea cinematografica della sicurezza: l'hacker che digita velocemente su fondi verdi e penetra sistemi militarizzati. Nella realtà quotidiana, gli "attacchi" passano attraverso leve umane: paura, curiosità o urgenza. Capirlo ti libera da difese sbagliate (comprare mille software e poi dare click ovunque).

### Il concetto chiave
Non hai bisogno di essere un bersaglio importante o ricco per essere colpito. L'automazione permette ai criminali di scagliare milioni di ami nel mare. Non ti "puntano", ti "pescano a strascico". Ma se sei tu a prendere l'amo (inganno piscologico chiamato Social Engineering), il sistema non può difenderti.

### Segnali da riconoscere
- Pensi "Perché rubare il mio account, io non ho segreti né soldi!" e quindi usi la stessa password ovunque.
- Ti nascondi sentendoti stupido/a per esserci cascato/a (es. truffa SMS).
- Investi energie nei software costosi ma ignori la manutenzione base (come gli aggiornamenti).

### Esempio realistico
Mario è convinto di non rischiare nulla perché "A chi volete che interessino i miei 20 contatti su Instagram?". Usa come password il nome del cane. Il profilo viene bucato. L'attaccante usa il profilo fidato di Mario per chiedere 50 euro in prestito a zia Clara (che manda i soldi fidandosi ciecamente). Mario non era il bersaglio finale, era la porta d'accesso verso la fiducia altrui.

### Cosa fare
- **Normalizza l'errore:** Le truffe sono disegnate da professionisti ed è normale abboccare. Sentirti colpevole non aiuta. Segnalare sì.
- **Proteggi la tua porta di casa:** Il tuo account, non importa quanto ti sembri piccolo, ha valore per l'autorità fiduciaria che rappresenta verso i tuoi contatti.
- **Studia il trucco, non il codice:** Non ti serve studiare informatica. Ti serve studiare i metodi persuasivi usati nelle email (es. finte multe, finti pacchi in giacenza).

### Cosa evitare
- Evita di nascondere la farfalla nello stomaco quando capisci di aver fatto un errore. Se hai cliccato un link strano, ammettilo subito a te stesso.
- Non credere ai miti urbani (es. "basta non andare su siti strani"). Il 90% delle minacce arriva via normale SMS o email, travestita da Enel o Poste italiane.

### Mettiti alla prova
Riguarda la cartella Spam della tua mail. Trova un'email e chiediti: "Quale leva emotiva sta usando questo truffatore? Urgenza? Paura? Vittoria gratuita?". Impara a leggere la "vendita" dietro la minaccia tecnica.

### Quando chiedere aiuto
Se ti rendi conto di aver inserito i numeri della tua carta di credito, o le tue credenziali, su un sito trovato da un SMS improvviso. Non c'è vergogna: chiama subito il servizio clienti della banca per bloccare l'operazione.

### Per genitori e scuole
Il 90% dei ragazzi non denuncia il cyberbullismo per paura della reazione emotiva e colpevolizzante degli adulti. Stessa cosa per i clic sbagliati. Create un patto "Zero Biasimo": se sbagliano online, l'adulto in prima battuta interviene per limitare i danni senza fare paternali.

### Da verificare periodicamente
- La tua percezione del rischio: informati se è in corso un'ondata nazionale di truffe SMS per un pacco fantasma. C'è sempre una "moda" in corso.

### Cosa fare adesso
Analizza il tuo PIN di blocco schermo del telefono. È per caso 1234, 0000 o la tua data di nascita? Cambialo in un PIN di 6 cifre casuale che nulla ha a che fare con la tua vita personale.`
        },
        {
            id: '5',
            title: 'I cardini della prevenzione: cosa devi sapere fin da subito',
            minutes: 7,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Abbracciare l\'approccio difensivo prima dell\'emergenza.',
                'Adottare le tre regole d\'oro della sicurezza igienica digitale.',
                'Capire il valore inestimabile del Backup preventivo.'
            ],
            contentMarkdown: `### Perché conta
Spegnere un incendio è estenuante, costoso ed emozionalmente drammatico. Installare un rilevatore di fumo è semplice e gratuito. La maggior parte dei danni enormi online (perdita di 10 anni di fotografie, account rubati, danni reputazionali permanenti) avvengono perché le "regole noiosissime" della prevenzione sono state rimandate. 

### Il concetto chiave
Non serve il panico, serve la "Digital Hygiene". Così come lavi i denti la sera sapendo che ti risparmierà dolore dal dentista, dovresti applicare queste tre difese universali: aggiornamenti automatici + password diversificate (2FA) + copie di backup delle proprie gioie (foto, documenti). Il resto è contorno.

### Segnali da riconoscere
- Hai una notifica di "Memoria Piena sul cloud" o "Aggiornamento rimandato" sul telefono da tre mesi e continui a ignorarla.
- Entri in casa e il tuo telefono poggia tranquillamente sbloccato sul tavolino, a disposizione di chiunque passi.
- Conservi copie di tutti i tuoi documenti legali (CI, Patente) come semplici foto nella galleria condivisa del cellulare.

### Esempio realistico
Giada perde il cellulare in metropolitana. Sarebbe una giornata seccante perché deve spendere per un nuovo telefono, ma c'è un problema peggiore: non ha mai attivato un backup nel cloud. 5 anni di fotografie del figlio appena nato sono andati per sempre, e tutte le chat importanti sono distrutte. L'emergenza tecnica divampa in emergenza esistenziale per un flag non spuntato mesi prima.

### Cosa fare
- **Acquista memoria base:** Che sia su iCloud, Google Store, Microsoft o Hard Disk esterni. Spendi quei 2-3 euro mensili necessari per avere il Backup Automatico abilitato prima di andare a letto. Salvaguarda la tua storia.
- **Accetta l'Aggeggio:** Se il telefono richiede di riavviarsi per un "Aggiornamento critico di sicurezza", lascialo fare. Molte patch bloccano bug gravissimi mentre tu dormi.
- **Aggiungi l'ingresso a 2 passi:** Cerca su tre siti cardine (Email principale, Banca, Social preferito) la voce "Autenticazione a Due Fattori" o 2FA. Ti costerà un sms in più per entrare oggi, ma respinge i tentativi di accesso stranieri domani.

### Cosa evitare
- Evita di "salvare tutte le password sul post-it dietro il monitor". Trova una soluzione realistica e digitale (ne parliamo nei moduli dedicati!).
- Non rimandare: non è un'opzione valutabile dire "farò il backup domenica". Quel che può esser fatto male oggi, è meglio del non fatto di domani pomeriggio.
- Evita di trascurare la tua casella "email di recupero". Spesso le rubano perché proteggiamo la principale, dimenticando il vecchio account Yahoo degli anni 2000 che è la porta di riserva.

### Mettiti alla prova
Oggi prova ad entrare in un social media e guarda di quali app connesse (App di Terze Parti) ha l'autorizzazione a interagire. Troverai 5, forse 10 app (come "quiz test affinità", "filtri per i video", "App per incontri"). Scollegale tutte eccetto quelle assolutamente necessarie da cui dipende il tuo uso del profilo. Fai le pulizie di primavera.

### Quando chiedere aiuto
Se ti trovi disorientato tentando di capire come si mettono le foto in Cloud (se iCloud è pieno, Google Foto ha problemi) e potresti compiere errori critici spingendo tasti strani, non azzardare: fermati e prenota un ora col nipote, l'amico geek o cercando il tutorial Busssola su quel problema.

### Per genitori e scuole
Spiegate l'autenticazione a due fattori in termini di portiere della discoteca e PR in strada: Il PR in strada verifica se hai pagato (la tua password), ma è il portinaio (l'sms del 2FA) a chiederti la carta d'identità ufficiale che solo lui riconosce come valida prima di imbarcarti sul server privato del club. Così non potranno fregare i ragazzi.

### Da verificare periodicamente
- Apri la pagina del Backup delle Chat (Whatsapp o Telegram) e controlla nell'intestazione la data "Ultimo Backup". È di due giorni fa o è fermo all'anno scorso? Metti appuntamenti mensili a calendario.

### Cosa fare adesso
Attiva immediatamente il backup su cloud per il dispositivo principale e, se possibile, attiva l'aggiornamento notturno automatico per il sistema operativo mobile.`
        },
        {
            id: '6',
            title: 'Come distinguere l\'urgenza vera da un falso allarme',
            minutes: 6,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Recepire il concetto che i truffatori operano manipolando finti scenari di urgenza.',
                'De-escalare le reazioni emotive verso le notifiche improvvise.',
                'Utilizzare criteri pratici per categorizzare l\'urgenza.'
            ],
            contentMarkdown: `### Perché conta
La manipolazione digitale spesso vive nel panico improvviso. Creare l'illusione di una scadenza imminente impedisce al nostro cervello razionale di operare normalmente. Capire cosa costituisce davvero un'urgenza riduce drasticamente l'esposizione a truffe, ricatti virtuali (es: phishing del finto pacco, sextortion) ed evita mosse avventate.

### Il concetto chiave
Se un messaggio ti dà 24 ore o ti blocca il conto, fermati e conta fino a tre. **Le entità ufficiali (governi, banche) non operano tramite ultimatum via SMS o link sospetti.** La vera urgenza si gestisce sui canali asincroni ufficiali o rivolgendosi al numero nel retro della propria carta di credito, mai quello fornito nella schermata dubbia.

### Segnali da riconoscere
- L'email o il messaggio recita: "AGISCI SUBITO o il tuo account sarà disattivato per sempre".
- Un numero o un'estensione telefonica non familiare invia un messaggio su problemi col pacco o "mamma ho cambiato numero, mi serve la ricarica urgente".
- C'è la promessa di una gravità terribile: contatti alla polizia, problemi di tasse o perdita di somme. Il countdown psicologico è la minaccia.

### Esempio realistico
A mezzanotte suona il telefono con una notifica: "BancaIntesa: Rilevato un accesso insolito dal Marocco sul tuo conto. Clicca subito questo link per sbloccarlo e prevenire prelievi fittizi". Il tuo corpo viene sommerso di adrenalina. Prendi il telefono, vai in ansia e clicchi subito sul link, entrando nella finta schermata della banca creata per catturare i veri dati dell'account che inserirai. Se avessi esaminato i dettagli con respiro normale, avresti notato l'url "bankaitnesa.it". O il fatto che la banca avrebbe bloccato autonomamente per policy tali tentativi.

### Cosa fare
- **"The Timeout Protocol" (La Pausa).** Davanti a eventi del genere, respira. Esiste pochissimo al mondo che necessiti di una soluzione digitale nei successivi 30 secondi. Appoggia il telefono sul cuscino per 3 minuti interi. 
- **Non usare il link fornito:** Non cliccare link in chat o via mail, specialmente su richieste di password. Se credi ci sia davvero un problema, apri tu manualmente l'app ufficiale per verificare le vere notifiche relative a quei tentativi. Se Banca Intesa ha un avviso, sarà sull'app della Banca. Non nell'SMS.
- **Isolare e investigare:** Cerca il numero di telefono da cui arriva il messaggio online o usa tools per le estensioni. Chiediti: "L'ente si esprime mai con questa sgrammaticatura?"

### Cosa evitare
- Evita reazioni pavloviane al timer rosso o alle icone esclamative dell'emergenza generata via mail. 
- Mai comunicare l'OTP (codice a sei cifre monouso inviato via SMS) per telefono se sollecitato da presunti "Operatori Assitenza Sicurezza". *Un operatore reale non chiederà mai l'OTP al telefono.*

### Mettiti alla prova
Apri i vecchi SMS o le notifiche spam sul PC. Quanti fanno leva sulla tua urgenza o ti dicono di fare un'azione rapida pena perdita del vantaggio? Se è così, rimuovi. 

### Quando chiedere aiuto
Se sei già caduto in un tranello, o hai consegnato coordinate e hai verificato l'account e vedi ammanchi non consenzienti. Intervieni tramite canali reali senza ritardi su Polizia Postale o blocco carta emittente. 

### Per genitori e scuole
Il trucco del panico è uno dei preferiti contro adolescenti ingenui o anziani isolati ("Hai scaricato materiale illegale, devi pagare multa o la polizia si presenterà domani mattina alle 9"). Educate ad annullare qualsiasi azione se la richiesta comporta urgenza finanziaria fuori norma e portarle le schermate sul tavolo familiare prima di versare denaro. 

### Da verificare periodicamente
- Con quali numeri comunicano la tua banca / posta in modo certificato
- Il massimale impostabile sulla tua carta verso le frodi da mobile. 

### Cosa fare adesso
Attribuire nomi familiari e sicuri nella rubrica. Memorizza nei contatti il link fiduciario o numero Antifrode della banca, del provider, e polizia postale in modo che se c'è un trucco l'SMS del Truffatore resterà senza Etichetta formale memorizzata.`
        },
        // For the sake of demonstration and generating a high-quality product piece for the 
        // first Module quickly, I will continue to structure the next 14 lessons exhaustively.
        // I will keep scaling the content elegantly.
        {
            id: '7',
            title: 'Chi gestisce davvero internet? Breve lezione senza tecnicismi',
            minutes: 5,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Smettere di vedere "Internet" come entità magica imparziale.',
                'Capire chi decide: piattaforme, ISP e governi.',
                'Responsabilizzare l\'utente sulle zone di propria competenza.'
            ],
            contentMarkdown: `### Perché conta
Credere che Internet sia uno spazio libero in cui "nessuno comanda" è l'inganno perfetto. I servizi digitali (Google, Meta, Apple) sono infrastrutture proprietarie commerciali. Quando qualcosa va storto, non puoi protestare da un "sindaco di internet". Capire questo ti posiziona correttamente verso l'Assistenza Clienti non come un corpo di Polizia, ma come azienda privata con i propri interessi contrattuali.

### Il concetto chiave
Non hai "diritti civili inalienabili" sulla policy di Instagram, ma accetti i loro Terms of Service (TOS) privati. Così il web è scalabile gratuitamente; barattando accessibilità universale con i dati derivanti dalla profilazione o col pagamento di un servizio primario. 

### Segnali da riconoscere
- Hai una lite social in cui ti appelli alla libertà di espressione contro l'App che ti ha bannato la narrazione. 
- Non capisci dove finiscano i servizi dello Smartphone (hardware - Apple/Samsung) ed entrino i servizi della Piattaforma (Software - Meta/TikTok).

### Esempio realistico
Sei vittima di stalking. Muti l'utente su Facebook ma lui ritorna dal profilo di X (ex Twitter) e poi ti manda una minaccia su Whatsapp (Meta). Sperare che esista l'operatore generale "internet" in grado di inibirgli ogni cosa non aiuta ed accentua malumori. Devi sapere che bloccarlo su X compete a Elon Musk's Corporation, bloccare Whatsapp compete a Zuckerberg's Corporation mentre presentare una denuncia in caserma per lo stalking muove invece la legislazione del paese in cui sei locato sulle varie giurisdizioni penali (indagato in Italia in tal caso farà risalire i dati per mano a organi del ministero interno).  

### Cosa fare
- **Localizzare:** Se subisci abusi devi usare lo strumento "Segnala" o "Block" all'interno dell'app di riferimento come trincea veloce.
- **Scarico delle prove:** Lo schermo è del tuo telefono: scattare Screenshot veloci serve subito.
- **Organi istituzionali veri:** Abilitare in parallelo le segnalazioni per crimine al Commissariato di Polizia Postale, unici che possono relazionarsi fra i grandi "Silos" (Aziende tech), l'ISP (il tuo fornitore rete, ex Vodafone) e il Magistrato.

### Cosa evitare
- Evita di "chiedere scusa o spiegazioni" via chat o di affidare tutto il ripristino ad altri utente.
- Evita form non formali per denunce web ed appoggiarsi unicamente sulle funzioni in-app e pretendere azioni penali scaturenti da ciò senza mai esser andati in caserma. 

### Mettiti alla prova
Osserva le Termini Ufficiali (TOS) su cui stai scrollando al momento. Fai attenzione e vedi in quale paese si trova allocata e sottoposta a regolatoria (di norma Dublino). Sii cosciente del peso.

### Quando chiedere aiuto
Se subisci molestie continuate o danni alla tua persona online. Mai delegare ai server americani l'assistenza al proprio benessere, la giustizia non è un tasto report. Cerca chi lavora sul territorio su temi psicologici. 

### Per genitori e scuole
Difficile per il ragazzo scindere fra i permessi in aula e i permessi sul telefono. Educate a trattare i social network non come dei diari mondiali pubblici neutrali, per cui le offese vanno considerate banali, ma piuttosto come aule di una megacorporation dotata di registratori da cui le telecamere per i 30enni si riversano nella scuola: inquinando e mischiando etiche per anni. 

### Da verificare periodicamente
- Impostazioni degli Ads per capire la quantità di consensi rilasciati nell'ultimo anno
- L'utilizzo reale delle policy sulle estensioni. 

### Cosa fare adesso
Eliminare cookie di terza parte nella gestione tracciamenti per iniziare a recuperare consapevolezza tecnica basilare.`
        },
        {
            id: '8',
            title: 'Prevenzione, supporto e SOS: come si collegano online',
            minutes: 6,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Scindere i concetti di prevenzione prolungata ad hoc dalle situazioni estreme',
                'Costruire la scala del rischio',
                'Intercettare il momento salto di paradigma verso l\'urgenza SOS'
            ],
            contentMarkdown: `### Perché conta
Davanti alle complessità le persone spesso mischiano due estremi: ignoranza su un danno e il catastrofismo verso una reazione impulsiva da danno immenso irreparabile. Creare uno standard che permetta di applicare il "Triage" sui drammi di internet porta una salvezza sia finanziaria sia emotiva ai traumi. Un triage si appoggia proprio lungo le tappe di Busssola: "Prevenzione -> Azione -> Recovery -> SOS".

### Il concetto chiave
Così come se ti fai una storta non chiami subito l'elicottero per amputare la gamba.  Se ci rubano la password di Instagram senza foto critiche compromettenti non attiviamo una indagine federale per diffamazione estorsiva o buttiamo via il computer dal panico; bensì applicheremo dei semplici step di Recovery su modulo Furto Social per un rapido recupero. Se invece l'hacker ci dice che invierà le foto spogliate alla moglie, passiamo in zona "SOS" che ha le direttive immediate estreme legali e umane in modulo 25 (Sextortion).  

### Segnali da riconoscere
- Capire un problema classificandolo con punteggi di gravità percepita. Non scindere gravità reale da ansia ipocondriaca ("non va più facebook, me l'hanno hacherato" è ansia ipocondriaca 1 su 10). "Non ho più i 500euro sul conto fineco, l'hanno clonato" o "Sente panico reale davanti una manipolazione psicologica subita tramite foto estorte su telegram da uno sconosciuto" (Gravità vera SOS: 10 su 10). 
- Panico come campanello di emergenza fisica.

### Esempio realistico
Mario vede da google access una mail dove qualcuno da Roma sta tentando di accendergli Google (ma bloccata in quanto non hanno pin). Lui chiama il 112 per terrorismo sul punto di esser rapinato in loco a casa. **Questo si poteva contenere applicando la prevenzione base senza occupare linee telefoniche**. Martina subisce la ricezione di foto sessuali e subisce minaccia di esser raggiunta in ufficio: Martina deve usare le funzioni the Busssola SOS di urgenza estrema, la polizia o enti violenza di genere per stalking perché qui c'è esubero immediato nella vita biologica con danni massicci ed immediati (o l'impulso ad autolesionismo). È necessario catalogare l'evento e procedere lucidamente in corsie parallele ma diversificate.  

### Cosa fare
- **Usa una check list del triage:** 1. Sono coinvolti soldi perduti (banche - recupero blocchi)? 2. È in pericolo l'incolumità fisica, la mia vergogna pubblica intollerabile e non voglio essere trovata da loro? (Emergenza psicologica - Polizia e centri Anti violenza/Grooming SOS Busssola, avvisare familiari in supporto affettivo). 3. E' tutto calmo, rubato vecchio account stupido? (Prevenzione/Recovery liscio - riappacificazione).
- **Consultazione SOS Busssola pre-fatta**. 

### Cosa evitare
- Evita negazione patologica: di insabbiare per vergogna di fronte al ricatto. E non minimizzare i "solo cyber schermi" quando è cyberbullismo, se ti lacera c'è del dolore biologico vero. Iscolati dalle macchine e parla alle persone reali.

### Mettiti alla prova
Leggi il manualino SOS della piattaforma per la categoria d'eccellenza che tu vuoi monitorare. Familiarizza sui workflow immediati standardizzati se ti dovesse cadere per sbaglio il mondo addosso senza ansia, solo per educare e addestrare il tuo occhio alle procedure standard. 

### Quando chiedere aiuto
Sempre quando lo step o la stima del Triage non sai affrontarla emotivamente da solo. A volte è l'insicurezza del danno a uccidere ("oddio e se avessero il pin pure delle banche?"). Chiama terze menti: condividi col partner o con colleghi in calma. E nei passaggi più critici se è stalking/stalkerware avvisa subito specialisti.

### Per genitori e scuole
E' importantissimo insegnare alle scuole il "Red Flag". Se qualcuno viene offeso di classe la Red Flag si instaura con "Report e Blocca". Se il ragazzino viene braccato sui video o immagini alterate ed estorsive passiamo un livello oltre la red Flag: SOS per i presidi diretti e denuncia organica psicologi postali per riparo trauma. Saper filtrare per gravità rende meno estenuante un problema di convivenze e si passa da Reazione eccesso ad Adozione protocolli sistemici efficaci. 

### Da verificare periodicamente
- Connessioni al proprio portale per riassorbire con costanza tutti i vecchi leak lasciati per stradale nel triennio. (Password deboli e credenziali a maniche larghe sono focolai d'incendio.) 

### Cosa fare adesso
Scopri a chi comunicheresti adesso che subisci un Sextortion su app. Definisci un Confidente che non giudica le scemenze, con cui stendere un patto per proteggerti e con cui sfogarsi in ogni istante d'aiuto di emergenze web (il Patto D'onore).`
        },
        {
            id: '9',
            title: 'Cosa fare *subito* quando nasce un dubbio online',
            minutes: 5,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Strutturare l\'abitudine a bloccare l\'azione in caso di sospetto.',
                'Utilizzare le funzioni di segnalazione in tempo reale.',
                'Raccogliere evidenze valide per il futuro.'
            ],
            contentMarkdown: `### Perché conta
I truffatori contano sul "fatto compiuto". Se non agisci impulsivamente, la dinamica manipolativa cade a zero. Avere una procedura muscolare e mnemonica sul momento zero riduce l'impatto distruttivo, congela scenari di danno e favorisce una veloce sanificazione digitale. Ti proteggi prima te, i dati poi gli altri.

### Il concetto chiave
Ogni truffa, o un sospetto contatto, non parte mai a 100 all'ora ma sempre da una prima esca di avvicinamento sospetta. Sentire la strana vibrazione per un messaggio, un pacco o proposta troppo invadente ed attenersi alla regola della frizione prima ancora che la frittata nasca salva te dal 90% delle vulnerabilità in essere in una frode del sabato mattina. Quello si chiama "Momento Cerniera". Se premi e vai oltre entri nell'attrito, se ti blocchi finisce li e diviene solo un fastidio annullato da furbizia. 

### Segnali da riconoscere
- Qualcosa nel tono o grammatica dell'SMS/Email di colleghi / parenti clonato sembra off e impersonale.
- Un forte input emotivo o allarmistico richiede dati (Es. clicchi un login form bancamodofacile.com).
- Si presentano persone fiduciarie su WA proponendo pagamenti crypto o trading lampo per ritorsioni finte di prestiti finti.

### Esempio realistico
Zio alfonso dice via telegram ch ha sfondato il telefono nuovo e che per pagare urgete la figlia servono 200 euro, dacci le carte. Invece che pagare fidandosi del palese senso d'amore, tu devi applicare il freno d'emergenza mentale delle 4 C: Conferma la Circostanza Chiamando il Contatto. In pratica tiri su il telefono sulla rubrica originaria con un colpo vocale su zio Alfonso (sul numero suo vero, non la chat) dicendo ciao Alfonsino ti serve liquidità? A quel punto lo zio vero estraneo a ciò vi fa smontare la frode SMS. 

### Cosa fare
- **"The Timeout Protocol" v2:** Tieni per te e chiudi l'app.
- **Freeze Accounts:** Se c'erano credenziali di mezzo che si sanno, o si era per vie estorte e ci ha fregato per mezzo di minaccia le coordinate entriamo nella fase della rimozione accessi esterni dalle banche prima che ci usino gli app. 
- **Salva Screenshot con Metadati:** Congela la schermata di messaggistica intercorse. Se c'è frode/bullismo le carte le giochiamo ma abbiamo le armi originali del ricatto come base tangibile.

### Cosa evitare
- Cancellare per Panico l'app per rabbia e cancellando tutte le evidenze d'intorno facenti uso di ricatto che potresti aver necessitato portare alle forze ordine. (No Delete impulsivo).
- Evita argomenti di negoziazione con l'attaccante in preda alla disperazione per avere il favore o lo sconto indietro. La minaccia si spegne spegnendo la visibilità.
- Nessuna giustizia autogestita. Assoldare finti Hacker Etici in rete non porta frutti se non scaturire seconde spirali di adescamento.

### Mettiti alla prova
Allena lo "screenshot d'emergenza". Su telefono o mouse tastiera cerca lo shortcut migliore e memorizza.

### Quando chiedere aiuto
Se sei disorientato su cosa bloccare in quel momento critico. Avere una spalla al proprio fianco mentre fai le disattivazioni ti da supporto logico e forza morale per non piegarsi alla sottomissione psichica per stanchezza/senso colpa di quanto stai smantellando il tuo dispositivo per renderlo asettico contro phishing/minacce intercorse.

### Per genitori e scuole
Fornite l'assegnazione dello screen e dell'abbandono chat tossico al figlio fin dalla minore età non punendolo. Riuscire a non essere risucchiati sui litigi flammosi e le esclusioni su forum non è passività o farsi mettere piedi testa, ma è la forza suprema e lucida dell'auto conservazione intellettiva di non buttare legna ai leoni o abbassarsi agli attacchi. "Mettilo nel cestino ma salva prima il fiele." 

### Da verificare periodicamente
- Conosci come usare l'estensione "Segnala Abuso Phishing/Spam" interna al gestore di Applemail, Google mail per addestrare lui a filtrare tali scarti.

### Cosa fare adesso
Attitudini immediate. Aprire il browser con Adblock inclusi nativamente e imparare come verificare le vere url bancarie tra i preferiti ufficiali ed escludere via mail o link inviati da fuori in blocco.`
        },
        {
            id: '10',
            title: 'I bias cognitivi: perché cadi in trappola anche se sai tutto',
            minutes: 6,
            difficulty: 'intermedia',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Capire i cortocircuiti mentali che i truffatori sfruttano.',
                'Disinnescare il "Bias di Ottimismo" (a me non succederà mai).',
                'Analizzare l\'Effetto Dunning-Kruger nella sicurezza digitale.'
            ],
            contentMarkdown: `### Perché conta
Conoscere la teoria non basta. Moltissimi professionisti cascanto in frodi informatiche pur sapendo benissimo come funziona il web. Il motivo è psicologico: l'industria del crimine informatico hackera il cervello molto prima di hackerare il codice.

### Il concetto chiave
Non siamo macchine razionali ma animali emotivi. Il "Bias di ottimismo" ci spinge a credere di essere naturalmente immuni ai pericoli (da cui la frase "Io so come difendermi"), mentre l'urgente ricerca di conferme (Confirmation Bias) ci fa sembrare logico un link fasullo se promette qualcosa che già desideravamo ardentemente (es. uno sconto magico su un iPhone).

### Segnali da riconoscere
- Provi arroganza informatica: ridi di chi cade in truffe credendo che tu saresti stato più furbo.
- Di fronte a un'offerta palesemente incredibile, il tuo cervello crea una giustificazione complessa per renderla plausibile ("Forse l'azienda è in bancarotta e svende").

### Esempio realistico
Luca, ingegnere informatico, riceve una mail da "Apple" che dice che il suo account verrà bloccato. Sa che queste mail sono spesso false, ma oggi aspetta il pacco di un nuovo Mac e ha letto di problemi con i blocchi fatturazione. Il *Confirmation Bias* unisce i due eventi: la falsa email trova terreno fertile in un evento reale e ansioso. Luca inserisce la password vera nel finto sito.

### Cosa fare
- **Ritarda il giudizio:** Metti un freno ai "Riflessi automatici". Il primo pensiero è influenzato dai bias; il secondo (dopo 3 minuti) è logica.
- **Principio Zero Trust su se stessi:** Assumi sempre di "Poter sbagliare". Agire sapendo di essere vulnerabili è una protezione titanica.
- **Riconosci il gancio:** Non chiederti se l'email è vera o falsa. Chiediti: "A quale mia speranza o paura sta parlando questa schermata?".

### Cosa evitare
- Evita di sentirti invincibile solo perché usi un Mac o hai l'antivirus. Il firewall non può nulla se sei tu ad aprire la porta.
- Mai operare bancariamente o gestire problemi di sicurezza da appena svegli, arrabbiati, stressati o ubriachi.

### Mettiti alla prova
Pensa a un momento in cui hai quasi cliccato su qualcosa di sospetto. Quale emozione c'era dietro: fretta? Avidità per un finto premio? Comprensione di te stesso aumenta le tue difese.

### Quando chiedere aiuto
Non c'è urgenza finché non agisci, ma se subisci un attacco sofisticato che mescola elementi esatti della tua vita, non provare a sfidare l'attaccante. Ignora e contatta chi di dovere.

### Per genitori e scuole
Spiegate ai ragazzi che i bulli e i truffatori usano la loro stessa mente contro di loro. Una sfida social virale pericolosa attecchisce sul "Bias di appartenenza" (tutti lo fanno, lo faccio anch'io per non essere escluso). Agitare colpe e paure non funziona. 

### Da verificare periodicamente
- Restare umili ed educare lo sguardo: chiunque, dal CEO allo studente, può essere ingannato se preso nel momento e bias sbagliato.

### Cosa fare adesso
Analizza la tua password principale. Se l'hai scelta perché la ritieni "facilissima che ricordo solo io" ma di fatto è il nome di tua figlia, renditi conto che è un bias. Cambiala con una serie logica di parole scollegate.`
        },
        {
            id: '11',
            title: 'L\'igiene del browser: popup, notifiche e consensi ciechi',
            minutes: 5,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Pulire il browser da manipolazioni visive.',
                'Bloccare le notifiche subdole dei siti spam.',
                'Capire dove clicchi prima di farlo.'
            ],
            contentMarkdown: `### Perché conta
Il browser è il vetro attraverso cui guardiamo internet. Se il vetro è sporco (pieno di permessi malevoli, notifiche push aggressive, barre degli strumenti) tutto sembrerà un attacco. Riportare il browser a uno stato pulito rimuove il 50% dell'ansia quotidiana navigando.

### Il concetto chiave
Ogni sito proverà a chiederti tre cose: i tuoi cookie, di mandarti notifiche, o la tua posizione. L'impostazione di default del cervello non deve essere "OK", ma deve essere "Disabilita". Il browser non è "infetto", gli hai solo dato il permesso di urlarti in faccia.

### Segnali da riconoscere
- Apri Chrome o Safari e in basso a destra partono "rettangolini" di avviso che ti propongono scadenze inesistenti, finti antivirus Norton, o donne russe. 
- Inizi una ricerca ma passi da un finto motore di ricerca "Search-easy" anziché Google.
- "Vuoi permettere a questo sito di inviare notifiche?" è la frase che chiudi sbadatamente cliccando sempre Consenti.

### Esempio realistico
Giorgio sta leggendo il giornale. Appare l'avviso "Questo sito vuole inviarti notifiche". Clicca Consenti. Giorni dopo riceve notifiche invadenti. Cliccando sbadatamente, viene rediretto verso malware. Invece di pulire il browser, va nel panico credendo di avere un hacker nel PC.

### Cosa fare
- **Chiudi i rubinetti:** Se c'è pop up incessante, vai nelle Impostazioni Browser -> Privacy e Sicurezza -> Impostazioni sito/Notifiche, e rimuovi tutte le voci dai "Siti Autorizzati" che non conosci.
- **Rifiuta alla base:** Quando entri nei siti, rifiuta tutto a parte i Cookie Necessari.
- **AdBlock come vaccino:** Installa un'estensione come uBlock Origin. Questa barriera pulisce magicamente l'80% delle trappole visive mascherate da notizie o finte conferme di pacchi.

### Cosa evitare
- Evita estensioni non conosciute ("Salva pdf gratuito HD" ecc). Sono spugne per i tuoi dati.
- Non credere ai finti download. Sul web spesso appare un grosso tasto verde "SCARICA ORA" molto palese che maschera la reale freccina grigia piccola del file vero sotto.

### Mettiti alla prova
Apri i settaggi delle Notifiche su Chrome (o Firefox/Safari). Guarda la lista "Consenti a questi siti...". Siamo disposti a scommettere che ne troverai almeno tre di cui non sai niente. Cancellali.

### Quando chiedere aiuto
Se cerchi di levare l'estensione spam dal browser e questa riappare bloccandoti lo schermo in modo forzato (in quel caso c'è un Browser Hijacker a monte).

### Per genitori e scuole
Il computer di famiglia usato da bambini diventa una giungla di popup. Non incolpateli ("hai rotto il pc!"). Mostrate che quel finto bottone è solo pubblicità mascherata da software per addestrare i riflessi visivi corretti.

### Da verificare periodicamente
- La lista Estensioni installate nel browser e l'integrità del tuo motore di ricerca. 

### Cosa fare adesso
Disattiva l'estensione più vecchia o meno usata che hai. Applica un Add-Blocker per smettere di essere agganciato.`
        },
        {
            id: '12',
            title: 'I miti del "Deep Web" tra serie Tv e realtà',
            minutes: 6,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Distinguere tra Web Invisibile, Deep Web e Dark Web.',
                'Capire che il vero nemico non sta in angoli oscuri ma nella tua casella email.',
                'Disinnescare il terrore del "mi vendono sul Dark web!".'
            ],
            contentMarkdown: `### Perché conta
Spesso ci blocchiamo per concetti resi mitologici (come il Deep Web) generando ansie irrazionali che ostacolano le basi ("non metto l'home banking perché sennò dal dark web mi hackerano"). Smontare i termini riporta al controllo.

### Il concetto chiave
Togliamo la magia: 
1) Surface Web: Tutto ciò che si trova con Google. (10%)
2) Deep Web: Tutto ciò che è nascosto banalmente da una password. Anche il tuo conto corrente online, o i server delle aziende mediche, o i gruppi privati di Facebook sono formalmente "Deep Web". Non è il male, è logistica e privacy basilare. (89%)
3) Dark Web: Piccolissima frazione (1%), irraggiungibile dai browser standard, dove c'è reale invisibilità e si consumano veri mercati illeciti, ma anche l'azione di difensori civili in stati oppressivi.

### Segnali da riconoscere
- Hai paura che qualcuno "ti entri nel router" per trascinarti nel Dark Web.
- Pensi che ogni frode o spam arrivi necessariamente da hacker di altissimo livello con cappucci, invece che call center automatizzati alla luce del sole.
- Ricevi una mail con vecchie password rubate dove ti ricattano dicendo "Ho comprato nel dark web il tuo profilo, paga".

### Esempio realistico
Federico legge di uno "scandalo Deep Web" in cui sono stati scoperti profili falsi. Si allarma così tanto da non voler fare un account INPS, pensando che ci siano legami esoterici pericolosi pronti a rubargli lo stipendio in modo invisibile. La verità è che il suo rischio di svuotamento conto avviene dal classico SMS delle "Poste" mentre mangia a mezzogiorno (Surface Web).

### Cosa fare
- **Allineare la percezione del rischio:** Gli incidenti di Sicurezza (Data breach) ci finiscono nel dark web, ma la profilazione aggressiva, lo spam e i piccoli inganni sono nel Surface web. Preoccupati della visibilità superficiale prima di temere ombre remote.
- **Cambiare visione:** Nel dark web scambiano enormi volumi di credenziali già compromesse in attacchi passati. Invece che aver paura che il dark web ti cerchi, semplicemente disinnesca le credenziali cambianole o implementando il 2FA come muro totale al riciclaggio delle password rubate.

### Cosa evitare
- Evita di andare davvero a sbirciare su motori Tor solo "per sfizio", è come passeggiare bendato di notte in un casello.
- Mai pagare riscatti estorsivi ad allarmi email che usano minacce associate al presunto tracciamento di video intimi usando il "dark web market" come spauracchio.

### Mettiti alla prova
Il Data breach è l'equivalente del Dark Web per la casalinga comune. Vai su *haveibeenpwned.com*, un sito ultra-sicuro ed ufficiale, metti la tua email. Vedi quanti vecchi servizi (come vecchi siti di fitness, o LinkedIn del 2012) in cui eri registrato hanno perso la tua email negli archivi scambiati dalle mafie. 

### Quando chiedere aiuto
Se pensi verosimilmente che foto strettamente legate alla pedopornografia e derivati (Grooming) da ricatto stiano circuitando e ci sia vera base. Passaggio: Polizia senza mezze misure. 

### Per genitori e scuole
Togliete l'allure figa del criminale informatico romantico dal vocabolario dei ragazzi. Il web oscuro non è il parco giochi delle magie tecniche, ma una latrina di piccoli criminali, compravendite squallide e spazzatura logica. 

### Da verificare periodicamente
- Conoscenza generale che ogni 2/3 anni i nostri dati (mail vecchie) per forza subiranno Breach massivi anche restando comodamente su siti innocui. Ed è la normalità logistica del XXI Secolo. 

### Cosa fare adesso
Attiva un password manager sul telefono o computer per non dover più usare password vulnerabili, disabilitando la minaccia di esser passabili di attacchi vecchi riadattati.`
        },
        {
            id: '13',
            title: 'Come fare amicizia col tuo Smartphone (Senza odiarlo)',
            minutes: 5,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Domare i falsi miti tecnofobici ("Mi intercettano e registrano tutto").',
                'Cambiare rapporto tra uomo-strumento: noi guidiamo, lui esegue.',
                'Utilizzare la rimozione proattiva per sfoltire gli ostacoli.'
            ],
            contentMarkdown: `### Perché conta
Avere un senso di persecuzione rispetto al proprio dispositivo sfocia spesso in disaffezione ("Eh, non ci capisco nulla in questa porcheria moderna") o peggio in rinuncia della sicurezza. Un telefono non ha vita propria; esegue regole.

### Il concetto chiave
Non è il tuo smartphone a spiarti per darti le pubblicità ascoltandoti, ma sono gli incroci di abitudini (geolocalizzazione accoppiata col telefono dell'amico, ricerche passate) a creare ritratti perfetti. Lo smartphone ha tasti di "SPEGNIMENTO": il permesso location, mic, notifiche ed eliminazione App. Tu hai la leva più forte, l'indifferenza.

### Segnali da riconoscere
- Guardi lo schermo con antipatia e pensi di esser dominato dal suo volume di stress imposto via notifiche.
- Tieni per anni un'app che non usi mai "perché non si sa mai".

### Esempio realistico
Paola vuole comprare i cuscini, ne parla a voce ed un'ora dopo gli compaiono le inserzioni Instagram dei cuscini. Paola urla "Il telefono mi spia il microfono!". Crede ad uno spionaggio esoterico governativo e rinuncia a lottare sentendosi una formica perdente in un mondo cyberpunk. Mente la verità è che ieri sera il cuscino lo ha cercato su google maps, la mattina aveva scritto su un e-commerce un termine simile, e le sue abitudini di vita convergono coi cuscini in autunno a quell'età in base al reddito stimato. Questa de-mistificazione toglie la magia e da potere.

### Cosa fare
- **Dieta delle App:** Quante App non hai MAI aperto negli ultimi due mesi? Cancella. Riduci il raggio d'attacco psicologico. 
- **Tempo d'uso (Screen Time):** Attiva i timer di 30 minuti sui grandi succhia-tempo (IG, Tiktok). Non serve sconfiggerli, serve renderli consapevoli e spezzagli il flow in automatico.

### Cosa evitare
- Pensare a complotti di stato prima della banale vendita commerciale.
- Non imparare i tasti vitali della sopravvivenza: Modalità Aereo e Spegnimento Dati Celulari delle App per limitare la dipendenza o per arginare connessioni quando rubi WiFi ballerini senza scrupoli fuori dall'unione europea. 

### Mettiti alla prova
Oggi togli un'icona sola tra quelle preziose in home (es Facebook) e nascondila nella cartella "Tutte le app" che richiede tre swipe o l'utilizzo della barra di ricerca alfabetica. Questo piccolo attrito "motorio" fa passare la tua intenzione da reattiva ad attiva: se la vuoi aprire, devi chiederlo intenzionalmente. 

### Quando chiedere aiuto
Se ti trovi nel panico a sistemare e l'apparecchio manda notifiche governative critiche di allerta nazionale false... ok fermati e chiedi supporto.

### Per genitori e scuole
L'educazione allo strumento è un passo fisico. Più i bambini hanno un telefono "scarico", limitato e ordinato visibilmente, meno ansia proveranno. Lo sfondo di gattini con trenta cartelle rosse accese equivale ad una stanza di giochi disordinata per la salute mentale del figlio. 

### Da verificare periodicamente
- Fare decluttering della home screen una volta la settimana.

### Cosa fare adesso
Attiva "Non disturbare" in un momento preciso serale, ogni sera senza eccezioni (es: dalle 22:30). Lasciare le notifiche dei VIP che ami ma tagliare il rumore inutile del mondo là fuori prima del sonno.`
        },
        {
            id: '14',
            title: 'Il concetto della catena e dell\'anello debole',
            minutes: 6,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Inquadrare come gli attacchi non viaggiano isolati.',
                'Disinnescare i pericoli propaganti.',
                'Gestire la sicurezza dell\'anello debole dei contatti.'
            ],
            contentMarkdown: `### Perché conta
Noi difendiamo le mura ma spesso ci fottono passando dalle fognature. Ovvero, hai la cassaforte blindata sulla Banca, ma proteggi la Mail Vecchia del recupero PIN della banca (quella Libero o Yahoo vecchissima di 10 anni prima) con una password banale o senza 2FA. Gli attaccanti sanno mirare al ventre molle.

### Il concetto chiave
Una catena logica di Sicurezza vale tanto quanto il suo punto peggiore. Proteggi l'apice, ma non l'ancoraggio. Un ladro non sfonda la blindata da 5000 euro; lui andrà giù con il piede di porco alla finestra sul retro chiusa coi ganci arrugginiti. 

### Segnali da riconoscere
- Imposti il touchID ultra-sicuro dappertutto ma hai un'Email Universale in cui ti arrivano tutti i recuperi password e questa è aperta anche nell'ufficio condiviso o l'ex storico conosce l'accesso.
- Sincronizzi tutte le tue pass su iCloud, poi regali l'iPad "formattato male" al nipotino.

### Esempio realistico
Gianni usa un portatile aziendale ed un telefono super costosi e blindati. Ha un vecchissimo blog Wordpress sgangherato. Utilizza però **La stesa Password** per tutto: Blog e Banca Intesa e Paypal. Il bot penetra il vecchio Wordpress in 5 minuti rubando la Stringa. Poi il Bot prova quella pass su Paypal. Sfondata, svuota il portafogli automatico. Gianni piange alla "Banca insicura", ma è lui che ha ceduto le chiavi al chiosco abusivo degli hotdog prima di entrare nella villa.

### Cosa fare
- **Identifica i tuoi due "Master Key" (Le casseforti totali):** L'Email Principale (Gmail o Apple e company) e l'App della Banca. Queste due porte DEVONO avere per forza una chiave Unica, Enorme e il 2FA obbligato. 
- **Costruisci il muro divisorio della Catena:** Per scartoffie, scommesse, forum, siti incontri, newslettes crea una MAIL Cestino (Secondaria) del tutto slegata biologicamente dalla tua principale Email di vita formale/statale/bancaria. Questo recide drasticamente un pezzo debole dalla tua nuca.

### Cosa evitare
- Dare in outsourcing account: es tua madre usa il tuo Amazon da un suo IP non protetto sfregiato e clicca un Phishing, entrando nei tuoi conti e distruggendo la blindatura catena per via traversa. 
- Disfarsi del "device vecchio" (vendere telefoni) o regalare hard disk senza eseguire un Factory Reset Wipe Sicuro. La formattazione o il "Cancella cestino" non basta. E' necessario "Ripristina da Zero impostazioni Fabbrica" altrimenti le password volano dai cookie per terze mani ignote ma abili a fare un software recovery. 

### Mettiti alla prova
Fai l'albero mentale. Quali e quanti account/siti vecchi detengono l'autorizzazione di "Accedi tramite questo Social" o "Log in con gmail"? Taglia questo filo rosso oggi in blocco per quelli antichi. 

### Quando chiedere aiuto
Se dubiti che le porte di recupero Pin o Backup mail siano inaccessibili a te o già bucate da attacchi antichi, bloccati. Vai alla Radice "Google/Apple account" vedi Dispositivi Loggati ed espelli (Kicka) i nomi vecchi.

### Per genitori e scuole
Spiegare il ventre molle e insegnare di proteggere l'identità principe è base pedagogica. I ragazzi creano venti profili mail o tiktok farlocchi su app insicure per i test o account game, tutto però converge su un'identità o un paypal solo.

### Da verificare periodicamente
- Lo status della propria casella di sicurezza di ripristino ("Se perdi numero chi chiameremo per mandarti la mail reset?"). 

### Cosa fare adesso
Attiva un account "alias", un'email sporca solo per spam. Quella è la pattumiera blindante dove far collidere la debolezza del marketing evitando mischiarla col tuo salario.`
        },
        {
            id: '15',
            title: 'Le password non esistono più (Benvenuto nel 2FA e Passkeys)',
            minutes: 6,
            difficulty: 'intermedia',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Abbandonare l\'idea faticosa della password mnemonica.',
                'Capire come funziona l\'Autenticazione a Due Fattori (2FA).',
                'Scoprire le Passkey come futuro immediato senza password.'
            ],
            contentMarkdown: `### Perché conta
La principale fonte di stress digitale è ricordare le password. Nel tentativo di sfuggire allo stress creiamo chiavi orribili ("Sole123") e le usiamo per tutto. Questo significa che se rubano i dati a un vecchio sito di fitness che hai usato una volta, rubano le chiavi per il tuo conto in banca. 

### Il concetto chiave
L'industria sta uccidendo la password perché l'essere umano è terribile a crearle. Oggi la sicurezza non si basa più su *cosa sai* (la parola segreta) ma su *cosa hai* (il telefono in tasca) o *chi sei* (la tua impronta). Questo è il 2FA (Two-Factor Authentication).

### Segnali da riconoscere
- Trovi estenuante ricevere gli sms col codice a sei cifre per entrare in un sito.
- Usi Post-it gialli attaccati al monitor per la password aziendale girandoli per "privacy" all'ingiù.
- Non sai cosa sia un "Password Manager" integrato in Google o Apple.

### Esempio realistico
Sonia ha la password "gattino88" sia per Instagram che per la sua Email. Le rubano l'account Instagram. L'hacker prova "gattino88" anche sull'Email e ci entra, rubandole interamente l'identità digitale. Se Sonia avesse avuto il 2FA attivo sull'email, l'hacker non avrebbe potuto entrare senza stringere fisicamente tra le mani il telefono di Sonia per leggere l'SMS a 6 cifre.

### Cosa fare
- **Delega il lavoro:** Usa il gestore password integrato in Apple (Portachiavi) o Chrome (Google Password Manager). Loro inventeranno password complesse ("fG7$kd99@B1") e le ricorderanno per te. Tu dovrai solo sbloccare il tuo telefono col viso o l'impronta.
- **Accetta il 2FA:** Ogni volta che un'app ti offre "Verifica in due passaggi", accetta.
- **Le Passkey:** Sono la novità. Molti siti, come Amazon o Google, ti offrono di accedere usando l'impronta digitale del telefono invece della password. Falle generare: sono antiproiettile.

### Cosa evitare
- Evita di "inviare le password" via Whatsapp a colleghi senza cancellarle subito dopo.
- Non disattivare il 2FA perché "ci metto troppo ad entrare". Quei 6 secondi extra valgono migliaia di euro e anni di foto risparmiate.

### Mettiti alla prova
Vai nelle impostazioni del tuo account Email principale (Google, Yahoo, Outlook) e cerca la scheda Sicurezza. Controlla se è attiva la "Verifica in due passaggi" (2-Step Verification). Se è spenta, accendila e abbina il tuo numero di telefono.

### Quando chiedere aiuto
Se ti cambiano numero di telefono e hai la 2FA attiva basata su SMS. In questo caso è complesso rientrare: devi usare i "Codici di Backup" che ogni servizio ti fornisce al momento dell'attivazione iniziale. Trovarli è duro, potresti dover rivolgerti a chi è pratico o mandare i tuoi documenti di identità all'assistenza.

### Per genitori e scuole
Spiegate ai figli che le password degli account scolastici e social non vanno mai scambiate come "prova di amicizia o fidanzamento". Questo comportamento (password sharing) è la causa numero uno per devastanti vendette post-rottura tra i teenager.

### Da verificare periodicamente
- Hai cambiato telefono da poco? Stampa i "Codici di ripristino o Backup" a 10 cifre di Google/Apple e nascondili in un cassetto fisico insieme al tuo passaporto e codici bancari. Sono l'unica cosa che ti salva se il telefono esplode.

### Cosa fare adesso
Pensa all'account più prezioso che hai. Entra nelle impostazioni e modifica la password debole in una Passphrase. Usa 4 parole senza senso ("TavoloVerdeDragoSedia") intervallate da numeri. Sarà facilissima da ricordare ma impossibile da indovinare per i computer.`
        },
        {
            id: '16',
            title: 'Phishing 101: Come leggere un indirizzo web e fermarsi in tempo',
            minutes: 5,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Comprendere la struttura di base di un URL (Indirizzo web).',
                'Individuare immediatamente le storpiature usate dai criminali.',
                'Utilizzare le pratiche anti-clic impulsivo per le email.'
            ],
            contentMarkdown: `### Perché conta
Il Phishing (pescare col tranello) è l'80% delle frodi mondiali. Nessuno sfonda i firewall bancari: mandano a te un link finto sperando che tu consegni le chiavi. L'unica difesa assoluta è il tuo occhio: se sai leggere un indirizzo web, sei praticamente immune.

### Il concetto chiave
Un indirizzo web si legge al contrario. La parte che sta *immediatamente prima* del ".com" o ".it" è il vero proprietario del sito. Tutto il resto è fumo negli occhi. \`www.paypal.it\` è di Paypal. \`www.paypal.aggiornamenti.com\` è del sito "aggiornamenti". \`www.pagamenti-paypal.it\` NON è paypal.

### Segnali da riconoscere
- Ricevi una mail urgente che ti chiede di cliccare su "Accedi per sbloccare" ma, se ti soffermi col dito sopra, l'indirizzo sottostante è lunghissimo e pieno di numeri.
- Il mittente della mail recita formalmente "Poste Italiane" ma, cliccando per vedere l'email vera tra parentesi quadre, trovi \`supporto123@xyz99.org\`.

### Esempio realistico
Laura riceve una mail perfetta: loghi Enel Energia, colori giusti, un avviso di un rimborso di 150€. Per ottenere il credito bisogna cliccare. Clicca e finisce su \`www.enel.energia-rimborso.it\`. Inserisce i dati della carta per "ricevere il pagamento", ma in realtà sta pagando i truffatori. Se avesse notato che "energia-rimborso" era il vero dominio falso e non "enel.it", si sarebbe fermata.

### Cosa fare
- **Long Press (Il tocco lungo):** Sul telefono, se ricevi un link su SMS o Whatsapp, tieni premuto il link SENZA aprire la pagina. Il telefono ti mostrerà l'Url completo e capirai in anteprima la fregatura.
- **Cerca tu stesso:** Se Netflix ti manda una mail per carta scaduta, chiudi la mail, apri Safari e scrivi TU manualmente "www.netflix.com". Accedi da lì. Se il problema c'è, sarà notificato dentro l'app.
- **Diffida delle abbreviazioni:** Diffida prepotentemente dai link tipo Bit.ly che accorciano il testo nascondendo la vera destinazione via SMS.

### Cosa evitare
- Evitare le ricerche Google sbrigative con click sul primo avviso: i truffatori pagano spazi pubblicitari Google "Sponsorizzato" per posizionare il lora finto sito Assistenza Paypal in cima alla ricerca. 
- Evitare il "Login cieco". Non dare mai per scontato che la pagina sia vera solo perché c'è un "lucchetto chiuso" verde vicino all'indirizzo. Il lucchetto verde protegge la connessione, ma non la bontà criminale di chi sta all'altra parte.

### Mettiti alla prova
Prendiamo due indirizzi:
1) \`www.amazon.it.comprasicura.com\`
2) \`www.comprasicura.amazon.it\`
Quale è il vero Amazon?
Risposta: Il 2. Perché la parte immediatamente prima del .it è "amazon". Nel primo, il sito reale acquistato dal criminale è "comprasicura". Quello è l'ultimo "nome a dominio" adiacente all'estensione .com. 

### Quando chiedere aiuto
Se ti trovi ad aver appena inserito i dati della carta e la rotellina gira a vuoto ridandoti un errore, senza mandarti all'App bancaria. Probabilmente hai appena sfamato il Phishing. Blocca la carta.

### Per genitori e scuole
Questo è da stampare e tenere in classe. Il 99% dei ragazzi clicca sui link Discord o bot Telegram per "Nitro gratis" sfociando in virus devastanti (token logger / grabber) per non aver analizzato l'indirizzo. Sviscerare la sintassi Url è vitale anche da minorenni.

### Da verificare periodicamente
- Abituare l'occhio: guarda ogni tanto il vertice superiore del browser quando sei convinto di essere nel posto giusto e analizza come "costruiscono" le loro Url banche e social in modo autoritario, formale e pulito. 

### Cosa fare adesso
Attiva "Ricordati di me" solo sui siti ufficiali dal tuo computer di casa. Così se una mail finta ti porta su un falso sito di Facebook che ti chiede la password, il tuo cervello noterà il salto di attrito: "Perché Facebook mi chiede la password se sul mio pc dovrebbe ricordarmi in automatico?". Questo è un gancio salvavita. Evita i dispositivi che non mantengono i cookie.`
        },
        {
            id: '17',
            title: 'Regole base per difendere i soldi online',
            minutes: 6,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Mettere barriere strutturali tra il web e il conto corrente.',
                'Utilizzare carte virtuali e limiti operativi.',
                'Disinnescare i tentativi di bonifico furbetto.'
            ],
            contentMarkdown: `### Perché conta
La stragrande maggioranza della violenza digitale non cerca i tuoi segreti ma i tuoi contanti. Raggiungere uno stato di serenità bancaria online (dove l'ansia di farsi svuotare il C.C. è portata a zero) consente un'esperienza digital commerciale senza stress.

### Il concetto chiave
Non usare il Bancomat o la Carta di Credito principale (quella in cui converge lo stipendio) per fare shopping online. Esistono cuscinetti isolanti gratuiti chiamati "Carte Prepagate" o "Carte Virtuali Usa-e-Getta". Anche se l'acquisto va storto e vieni truffato, l'impatto distruttivo è matematicamente limitato all'importo della prepagata vuota.

### Segnali da riconoscere
- Trovi affari favolosi ("Scarpe Nike a 25.99€ liquidazione totale") su pagine sponsorizzate da profili Facebook aperti ieri. 
- Il sito in cui inserisci pagamenti offre solo l'inserimento manuale del numero della carta e NON supporta né Apple Pay / Google Pay, né Paypal.
- Il sito ti chiede di fare un "Bonifico verso IBAN estero" per sbloccare la spedizione o approvare la trattativa tra privati (Subito/Vinted).

### Esempio realistico
Marco vuole comprare un trapano su un ecommerce sconosciuto. L'offerta è eccezionale. Marco non ha PayPal, usa la sua carta aziendale fisica e la digita per esteso. L'ecommerce è una pagina gancio fraudolenta. La sera la sua carta subisce prelievi di 400€ su store di scommesse brasiliani. La carta è stata assorbita e rivenduta. Usando un servizio come Paypal, il venditore (se pur truffatore), MAI avrebbe incassato il numero 16 cifre bancario, ma solo i soldi inviati in escrow (garanzia). Marco poteva fare chargeback (rimborso).

### Cosa fare
- **Usa Apple/Google Pay o Paypal:** Quando navighi via Safari/Chrome premere i magici bottoni neri ApplePay è come un preservativo. Tu paghi, la merce arriva, ma al venditore viene dato un "numero gettone" falsificato autorizzato per una sola spesa, non passa il tuo IBAN né la tua data di scadenza. 
- **Abbassa i Massimali:** Accendi l'app della Banca. Imposta il limite "Acquisti online mensili" da 5000 a 300 euro (o quel che ti basta). Se c'è un attacco e tu dormi, bloccheranno la spesa di lusso.
- **La pre-pagata di Trincea:** Ottieni una carta ricaricabile. Tienila sempre a zero. Caricala dei 40€ necessari solo 5 minuti prima di fare l'acquisto incerto.

### Cosa evitare
- Evita di "salvare la mia carta per acquisti futuri" su negozietti o micro e-commerce (fallo solo su giganti storici es Amazon).
- Non compiere MAI transazioni per via privata (uscite fuori Whatsapp) quando compri in piattaforme specializzate che offrono supporto (Vinted, Airbnb). Uscire dalla piattaforma significa spogliarsi della protezione.

### Mettiti alla prova
Accedi alla tua Home Banking e naviga fino alla pagina delle impostazioni della carta connessa. Vedi se c'è l'opzione "Blocco Geografico / Pagamenti extra UE". Se presente, attivalo: quasi azzera le truffe fatte dai cloni di carta ad uso offshore. 

### Quando chiedere aiuto
Se ti trovi nel bel mezzo di un acquisto e si interpone un operatore Whatsapp che ti guida alla vendita per "motivi doganali o spedizione fallita". Interrompi la compravendita e chiedi numi al gestore del market place (es l'assistenza clienti Vinted ufficiale o Subito.it ufficiale).

### Per genitori e scuole
Spiegate l'indipendenza finanziaria bloccata. Dare la Postepay a quattordicenni va bene solo e unicamente se vincolata a 20 euro per gioco Playstation o V-Buck. Se il minorenne compra item rari su Steam (giochi) in gruppi discord astenersi dal mettergli a disposizione il plafond genitoriale intero per via dell'alto livello di scam (frodi su micro transazioni) nei forum da Gamer.

### Da verificare periodicamente
- La lista dei bonifici continuativi (RID) e abbonamenti connessi a Paypal. Sfoltisci quelli di aziende terze testate in trial 7 giorni ormai dimenticate.

### Cosa fare adesso
Iscriviti a un servizio che genera carte Virtuali Usa-E-Getta per i pagamenti online o crea un conto su Paypal e utilizzalo come unico scudo per inserire le tue vere credenziali bancarie. Una barriera sola anziché mille.`
        },
        {
            id: '18',
            title: 'Non dare da mangiare ai Troll (e al Cyberbullismo)',
            minutes: 6,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Depotenziare l\'attrito verbale ed emotivo inutile sui commenti.',
                'Mappare il confine tra fastidio volgare e abuso da punire.',
                'Utilizzare attivamente l\'isolamento come arma psicologica.'
            ],
            contentMarkdown: `### Perché conta
Prima di diventare emergenza da Codice Penale, il cyberbullismo, gli haters o il semplice trolleggio passano per una fase in cui testano la reazione della vittima. L'impulso di "far valere le proprie ragioni" o "difendersi rispondendo per le rime" online è benzina gettata sul fuoco. Imparare la risposta asettica uccide il parassita sul nascere.

### Il concetto chiave
Gli Hater non cercano un dibattito democratico, e il Bullo non cerca il confronto alla pari. Entrambi estraggono dopamina e potere dalla tua reazione emotiva (tristezza, rabbia, fiumi di testo). **L'assenza di reazione equivale a privarli dell'ossigeno**. Segnalare e bloccare in totale mutismo chirurgico è l'atto di supremazia più umiliante (e di autoconservazione vitale) che puoi infliggere agli aggressori, oltre ad esser la base d'igiene mentale.

### Segnali da riconoscere
- Mentre leggi i commenti a un tuo post il battito accelera per un attacco personale che non c'entra con l'argomento discusso.
- Scrivi un muro di testo durissimo e articolato (flame war) premendo freneticamente lo schermo alle tre di notte sentendo "di aver vinto la discussione", controllando con ossessione se ribatte.
- Confondi le "opinioni divergenti" o critiche legittime da attacchi ripetuti, coordinati mirati unicamente ad affossare la tua persona. 

### Esempio realistico
Una ragazzina riceve un commento volgare sul suo peso fisico durante una Stories pubblica, inviato da un account senza foto col solo scopo di farla piangere. Invece di far finta di ignorarlo malamente (nascondendosi dal mondo o rispondendogli piangendo) applica la Muta Radicale: 1. Screen per prove taciute 2. Bloque totale. 3. Cancella il commento perché la bacheca è come il soggiorno di casa ("a casa mia pulisco io"). Domani non avrà fornito nessuna gratificazione allo stalker che in noia e frustrazione cambierà obiettivo disconnesso dal target e senza dramma generato in platea.

### Cosa fare
- **Restrict & Mute:** Tutte le piattaforme Meta e affini possiedono il magico scudo d'ombra "Limitazione e Silenziamento" (Shadow Ban a livello utente). Usalo contro i leoni da tastiera. Loro vedranno di poter commentare ma nessuno lì vedrà apparte il loro piccolo gruppo. Vivranno nell'illusione inoffensiva. 
- **Pulizia del feed:** Disattiva i commenti o imponi limiti di risposte (es: "Tutti all'infuori dei miei collegamenti") se avverti maretta virale da cui vuoi disintossicarti un weekend.
- **Raccogli Prove Mute:** Se il tono si trasforma in Diffamazione calunniante, Stalking persecutorio o Minaccia (ti so dove abiti ecc), smetti di operare la Muta Base. Prendi gli screenshot di tutte le fasi comprese le date. Prepara le carte. Esci dal social e contatta il 112 se imminente, altrimenti Polizia Postale per sporgere denuncia su fattispecie accertate per Cyberbullismo legislativo.

### Cosa evitare
- Evita il Doxxing autolesionista: i.e non prendere lo screen del bullo col suo nome e spammare sulle tue stories il suo volto per invocare i tuoi follower ad "Aizzargli contro fiumi di merda pubblica come vendetta". La gogna pubblica inversa genera solo un vortice illegale da entrambe le direzioni portando torto alla vittima (Diffamazione in riposta). Oltre a farti passare per complice nei guai legali di fronte ai GIP.
- Mai pensare ed operare la "negoziazione col branco" tentando di farti amichevoli persone che palesemente vogliono ridicolizzarti. Non ci sono giustificazioni per il loro atto e non ne servono spiegazioni per staccare i collegamenti.

### Mettiti alla prova
Oggi rivisita la tua bacheca / pagina commenti: c'è un utente caustico di lungo periodo sempre volto alla polemica astiosa fine a sé stessa fra i tuoi seguiti/collegati? Non discutere: bloccalo o mutalo, e misurati la piacevole leggerezza da lì in poi. Toglilo. 

### Quando chiedere aiuto
Se ti attaccano in massa e il gruppo inizia a fare il tifo da stadio, a inviare fotomontaggi e non riesci più a contenere. Le istituzioni non si limitano alle forze dell'ordine ma ai presidi psicologici delle Asl, e associazioni dedicate.

### Per genitori e scuole
Nel bullismo reale bisogna affrontare il problema vis-à-vis, nel cyberbullismo le distanze rendono inefficace e masochistico il "parlargli per chiarire l'equivoco" in fase accesa online tra ragazzi anonimi. Trasmettete al figlio il coraggio potente insito del "Saper voltare le spalle senza sentirsi sminuiti" applicando la freddezza chirurgica del Delete. "Cestina i miserabili mantenendo la tua corona pulita". Trasformate la segnalazione e il blocco in orgoglio, non in fuga. 

### Da verificare periodicamente
- Restringi il pubblico sulle foto di famiglia molto intime usando la funzionalità "Solo Amici Stretti", disinnescando del tutto il palcoscenico mondiale d'esposizione d'odio. 

### Cosa fare adesso
Controlla le impostazioni di Privacy sui Direct Message Message (Messaggi Privati) (IG, FB TikTok). Attiva la voce "Non ricevere messaggi da chi non segui e non hai tra gli amici e manda gli scarti ad Inoltro casella Spam". Avrai bonificato l'80% delle micro-aggressioni sconosciute in 2 secondi.`
        },
        {
            id: '19',
            title: 'Privacy Base (ovvero: cosa sanno davvero di me?)',
            minutes: 6,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Abbassare l\'ansia cospirazionista sullo spionaggio di massa.',
                'Capire come regali attivamente (e distrattamente) i tuoi dati al marketing.',
                'Gestire la geolocalizzazione col buonsenso e le autorizzazioni app.'
            ],
            contentMarkdown: `### Perché conta
Avere terrore di internet "perché ti sente" è controproducente al punto d'isolamento e rinuncia digitale. Riconoscere l'economia comportamentale moderna ti dà una marcia tranquilla. Capire la privacy non serve ad esser un fantasma latitante di Snowden, ma serve a scegliere serenamente "Cosa" fargli sapere con scambio equo di servizi (Ad esempio un ottimo navigatore GPS free in exchange of Location tag Ads).

### Il concetto chiave
Gli aggregatori commerciali di Facebook / Google sanno di te ma in modo massivo anonimizzato, cioè in forma "Gruppo di utenti interessati al trekking anni 30 residenti vicenza". Nessun Mark Zuckerbeg leggerà unicamente il messaggino della mamma come entità individuale. Questo processo usa incroci di abitudini (Like messi) ma usa massantemente anche "Ciò che volontariamente metti in pasto pubblico senza volerlo" con app minori scaricate a cuor leggero fuori controllo. 

### Segnali da riconoscere
- Trovi la mappa dei "tuoi spostamenti passati di tutto l'anno mese per mese" aperta a terzi senza esserne mai stato consapevole perché su account pubblico e non in cloud chiuso.  
- Continui a vedere le classiche notizie spam per il quiz "dimmi in che animale ti riincarni" con cui autorizzi il social a trasmettere i tuoi metadati profilo, sesso preferenze a estensioni ruse fatte a tavolino due giorni addietro.
- Dici a gran voce e posti che parti per le maldive due mesi via da casa, esponendo in bacheche pubbliche a "Mondo intero" (non agli amici) le geografie intonse vuote senza custodi sul civico di appoggio metadatato con auto geo-tagging della periferia.

### Esempio realistico
Marco teme i microchip ed è complottista sul "Mondo di facebook", così disinstalla facebook per "paura telecamere segrete cinesi" ma gioca tutti i giorni a tre varianti infinite di Match 3 Puzzle Game ultra pesanti sviluppati da case ombra nel belize. Tali tre puzzle gratuiti in realtà (accettati dal suo tocco sbadato frettoloso per giocare gratis) registrano cronologia web GPS e microfono del telefono appositamente h24 rivendendo listati completi di dati che manco le grandi corp (regolate dal GDPR pesantissimo dei colossi) si sognerebbero di drenare con quella scelleratezza da Marco. Questo mostra che l'ingiustizia e ignoranza e il bias puntato falso bersaglio fanno male. 

### Cosa fare
- **"Consenti solo mentre usi l'app"**: La geolocalizzazione non è il male (il navigatore è indispensabile). Il male è quando l'app per miscelare le ricette te la chiede. Se costretto inserisci sempre la spunta su "usa posizione solo DURANTE uso dell'app" spezzando il GPS in background a tua insaputa quando torni a lavorare o dormire in zone remote.
- **Rivedere le info pubbliche social (About Me base).** Togli data di nascita col l'anno esteso intero per evitare facilitazioni nei furti di carta. Togli residenza (via tal dei tali casa dei zii), non aggiungere l'email personale in vista come bio info o alzerai la quantità spam di phishing automatici mirati al social a livelli asfissianti per furti credenziali.  
- **Le pulizie di fine anno.** Rimuovi tutto dai vecchi tag e check in, leva account morti e in disuso. Il social che non muore è il miglior posto dove entrare ad indovinare vecchie pin per poi tentare il furto massivo sulla vita principale incrociando i dati e l'ingegneria sociale. 

### Cosa evitare
- Evita estensioni su broswer per coupon in cambio di tutti tracking e cronometria ("salva 3 euro col plugin honey e estensioni simi per spesa e traccaimo ogni tuo sito digitato da oggi alla pensione).
- Pubblicare dati che serviranno poi ai gestori di banca nelle domande segrete per resettare i conti... (Es evitare di divulgare nome primo maiale domestico tenuto da piccolo, in che liceo primario della città andate altrimenti l'esame domande recupero pass cade al primo colpo se ve li leggono). 
- Mettere la geo tag posizione esatta sulla casa in tempo reale su Storie di Instagram (non fare "il geo tag casa mia o sto studiando ecc" ).

### Mettiti alla prova
Oggi scopri "My activity di Google" aprendo il pannello utente google da browser web sotto le info account riservate -> Privacy Settings. Esploralolo. Disattiva il Crono Storico posizione o la Cronologia Youtube dalle raccolte Ads commerciali di cui sei sgradito abbonato a tua insaputa da 10 anni. Apprezza quel momento come la doccia pulita rinfrescante dopo l'allenamento estenuante dello stacanovista. 

### Quando chiedere aiuto
Se subisci stalking continuativo per colpa dei GPS incrociati e ritorsioni, blocca la geolocaliizzazione sull'intero pacchetto sistema operativo o cambia SIM per sventare i "trova i miei dispositivi app" abusati incrociando profili comuni (Es AirTag stalkers appoggiati alla macchina a tua insaputa). Richiedi verifica dal centro Apple/assistenza ed espulsore anti-malware (vedi modulo relazioni).

### Per genitori e scuole
Lo Sharenting (condividere eccessivamente da madri e padri foto dei neonati) lede alla pedopornografia e al futuro della reputazione privacy dei figli senza dare loro scelta. Educate a tracciare dei confini o ad usare volti oscurati, riducendo l'impronta social pregressa sui minori come scudo fondamentale del diritto civico a decidere come e quanto si comparirà sul web una volta emancipati, disinnescando foto nude sulla spiaggia mandate come fiocchi premio e finte di un nulla finiti in data base di deep learning. 

### Da verificare periodicamente
- Connessioni Cloud fra App minori scaricate a 99 cent e le foto libere accessibili dal telefonino in upload permissività completa ("Tutte le Foto o Solo una Selezionata?"). 

### Cosa fare adesso
Attiva "Navigazione Disconnessa / Privacy tab (Incognito)" nei settaggi di ricerca base qualora tu compia indagini intime sensibili sanitarie o acquisti di regali ad altissimo rischio di "ricomparire il giorno dopo sul Mac centrale di famiglia" sponsorizzate al partner sciupando non solo l'omaggio floreale a natale o ma destando la curiosità di patologie pregresse familiari imbarazzanti adescanti a parenti stretti e datori lavoro curiosi al momento di appuntamenti.`
        },
        {
            id: '20',
            title: 'Costruire il tuo "Kit di Pronto Soccorso" Digitale',
            minutes: 6,
            difficulty: 'base',
            audienceTag: 'Per tutti',
            moduleTag: 'Orientarsi online',
            learningGoals: [
                'Congerlare tutto il sapere appreso nel capitolo per ripristinarlo al volio e su moduli',
                'Fare l\'inventario degli step fisici disconnessi se la tempesta attacca',
                'Fidarti della resilienza pro attiva Busssola'
            ],
            contentMarkdown: `### Perché conta
Questo Modulo ha sdoganato il vocabolario per iniziare. Lo start è qui, e capire cosa c'è prima delle app (ovvero la mente, l'urgenza controllata della reattività in freeze d'emergenza, il password 2FA e i Backup scudo) sono cose inutili senza il pacchetto kit da viaggio stampato nella pietra al fianco con voi. 

### Il concetto chiave
Non contare sulla tua memoria tecnica o pazienza informatica quando il disastro irrompe (Es: telefono esploso nel mare in spagna alle maldive e portafogli scippato con furto pin carte identità). In quei momenti ti occorre non un "appunto criptato" ma un fascicolo di emergenza fisico. Così come prepari la cassettetta del Medico di base e gli appunti numeri al parente d'ospedale su muro magnetico per la Nonna in ansia, serve l'E-Care Safety book. Il cervello va in overload al trauma. La carta e i passi meccanici ti guidano la mano in "pilota automatico riparatorio" riportandoti calmo sul modulo giusto di recupero.

### Segnali da riconoscere
- Non sai che numero chiamare in Europa per i blocchi interbancari di scippo carte in viaggio se non ti prende App telefono (ed essendo scippato il telefono cade anche la 2FA per recuperar app da pc terzi!). 
- Non sai il "numero utente di banca univoco pin lungo scritto da qualche parte nel 2005" fondamentale nel ridare utenza alle app spente smarrite a zero da sportello. Hai paura ed entri al vuoto da panico.

### Esempio realistico
Gigi perde lo zaino dove ha il Mac di lavoro, harddisk, e documenti patente. Il telefono lo tiene da sempre per fortuna su tasca e la carta fisicamente anche con se in maglia, ma perde la "chiavetta 2fa e master pin del vault". Se gigi sa come funziona la logistica preparata per l'incidente da kit pronto soccorso sa che nel cassetto d'ufficio lontano a milano ha le 10 cifre di chiavi Apple (Recovery code master Backup key). In un ora recupera le comunicazioni e non è spaventato di perdere tutto perché il kit stampato, segreto e sigillato farà il lavoro gravoso per lu, i bloccando remote wipe a distanza sul device smarrito (lo pialla su icloyd) ed ordina nuove SIM per rintracciare i pass di trincea. 

### Cosa fare
- **"The USB Lifeline" (Chiavetta salvezza offline):** Salva copie legali (foto patente f/R passaporti) e codici IBAN per ricezione non come testo ma in una chiavetta di ferro (Hardware fisico stagna) posta in posto fisico chiuso con chiavistello cassaforte mura domestiche vera. Per non fare in modo che hacker russi rubino patenti appoggiate ad hardisk aperti 24/7 dal web, ma per non perdere al rogo foto vita essenziali scansionate. 
- **La Busta SOS Cartacea:** Fogli di stampa. Elenco i Numeri Blocco Furto Bancomat internazionali (spesso Numero Verde). I 10x numeri stampati di Recupero Accesso Microsoft/gmail o Google Backup. La stringa per formmattazioen master (se presente) dell'hardisk cifrato. Tutti elementi off line (Carta tangibile vera! come si faceva nel 1990 col la cornetta d'emergenza in rubrica) messi dove i ransomware e truffe online non sanno aggredite: i cassetti al buio. 

### Cosa evitare
- Mai tenere l'unica rubrica contatti importanti (famigliari emergenza e figli per avvertirli) registrata esclusiva via Telefono Rubrica Virtuale senza agganci cloud. Il fallimento terminale ti recederà da ogni legame. Stampa 4 numeri base d'emergenza su cartoncino. 
- Evita di "chiedere l'aiuto on line" all'amico fidato informatico quando cade il server ma prima che accada compratevi la birra o caffè in pace un giovedi per scambiar chiaccherie chiedendogli: "se mi esplode un casino grosso posso contare nel venirti a bussare per il setup zero del mio backup? e lo sai fare te?" e testare il terreno. Formare legami sociali Off line tecnici! 

### Mettiti alla prova
Crea La busta SOS Stasera. Non servono venti passaggi lunghi.
1. Blocca Carte numero telefonico 
2. Tre Numeri Cellulare dei Famigliari.
3. Master Key Recupero stampato pdf o su pec per Cloud google Apple portachiavi.

### Quando chiedere aiuto
Se dubiti durante l'impostazione che il file chiavetta è letto/scritto in modi accessibile troppo facilmente e non sai proteggerlo localmente usa un manuale Busssola sulle pass o usa la crittografia base (Zip protetto Password che sai tu a mente). Poi chiudi la chiavetta dentro un mobile reale lucchettato in acciaio nascosco ai ladri. E chiedi aiuto a familiari fiduciari per le zone d'ombra non chiare in caso subentri furto identità d'ufficio. 

### Per genitori e scuole
Fornite una "SOS CARD" in tasca ai ragazzini sotto i 12 anni specialmente. Dove non c'e' solo il numero mamma Papà, ma ci sono istruzioni sul "non dare i dati a chi non sa questa parola segreta" (vedi parola salva abusi di adescamento su "ti porta a casa uno sconosciuto parente finto" e gli SOS contatti. 

### Da verificare periodicamente
- Mantenere la Pila vitale. Che i codici non siano sfumati o vecchi d'ossido (in chiavetta) e che la carta dei soccorsi banche non sia vecchia ad un conto chiuso l'anno precedente. Rinnovare cartellina.

### Cosa fare adesso
Stampa i Backup code o Backup chiavi di 2FA come previsto dai menù sicurezza (Le liste numeri di 10 cifre che i siti consigliano caldamente "SCARICa PDF SE PERDI LA 2PA DEL CELLULARE IN MARE") e chiudilo assieme al resto cartaceo d'emergenza domestica e certificati anagrafe/catasto/INPS del casseto blindato e sigillato al chiuso.`
        }
    ]
}
