const fs = require('fs');
const path = require('path');

const modulesList = [
  { id: 2, slug: 'modulo-02-privacy-digitale', title: 'Privacy digitale di base', category: 'SKILL', audience: 'ragazzi, famiglie' },
  { id: 3, slug: 'modulo-03-password', title: 'Password, passkey e autenticazione', category: 'SKILL', audience: 'tutti' },
  { id: 4, slug: 'modulo-04-email', title: 'E-mail in sicurezza', category: 'SKILL', audience: 'tutti' },
  { id: 5, slug: 'modulo-05-smartphone', title: 'Smartphone sicuro ogni giorno', category: 'SKILL', audience: 'tutti' },
  { id: 6, slug: 'modulo-06-computer', title: 'Computer, browser e aggiornamenti', category: 'SKILL', audience: 'tutti' },
  { id: 7, slug: 'modulo-07-app-permessi', title: 'App, permessi e dati personali', category: 'SKILL', audience: 'tutti' },
  { id: 8, slug: 'modulo-08-social-media', title: 'Social media: impostazioni e confini', category: 'SKILL', audience: 'ragazzi, famiglie' },
  { id: 9, slug: 'modulo-09-chat', title: 'Chat e messaggistica senza guai', category: 'SKILL', audience: 'ragazzi' },
  { id: 10, slug: 'modulo-10-gaming', title: 'Gaming online e community', category: 'SKILL', audience: 'ragazzi' },
  { id: 11, slug: 'modulo-11-livestream', title: 'Livestream, creator e visibilità', category: 'SKILL', audience: 'ragazzi, creator' },
  { id: 12, slug: 'modulo-12-foto-video', title: 'Foto, video e immagini intime', category: 'THREAT', audience: 'ragazzi, famiglie' },
  { id: 13, slug: 'modulo-13-grooming', title: 'Grooming e adescamento online', category: 'THREAT', audience: 'ragazzi, famiglie, scuole' },
  { id: 14, slug: 'modulo-14-catfishing', title: 'Catfishing e identità false', category: 'THREAT', audience: 'ragazzi, adulti' },
  { id: 15, slug: 'modulo-15-sextortion', title: 'Sextortion e ricatti sessuali', category: 'THREAT', audience: 'ragazzi, adulti' },
  { id: 16, slug: 'modulo-16-cyberbullismo', title: 'Molestie, cyberbullismo e attacchi di gruppo', category: 'THREAT', audience: 'ragazzi, scuole' },
  { id: 17, slug: 'modulo-17-stalking', title: 'Stalking digitale, doxxing e controllo', category: 'THREAT', audience: 'ragazzi, adulti' },
  { id: 18, slug: 'modulo-18-truffe-ragazzi', title: 'Truffe online per ragazzi', category: 'THREAT', audience: 'ragazzi' },
  { id: 19, slug: 'modulo-19-phishing', title: 'Phishing, smishing e vishing', category: 'THREAT', audience: 'tutti' },
  { id: 20, slug: 'modulo-20-shopping', title: 'Shopping online e marketplace', category: 'SKILL', audience: 'tutti' },
  { id: 21, slug: 'modulo-21-soldi-digitali', title: 'Soldi digitali, carte e wallet', category: 'SKILL', audience: 'tutti' },
  { id: 22, slug: 'modulo-22-recupero-account', title: 'Furto account e recupero accessi', category: 'THREAT', audience: 'tutti' },
  { id: 23, slug: 'modulo-23-prove-digitali', title: 'Prove digitali, screenshot e segnalazioni', category: 'SKILL', audience: 'tutti' },
  { id: 24, slug: 'modulo-24-emergenze', title: 'Emergenze online: cosa fare subito', category: 'THREAT', audience: 'tutti' },
  { id: 25, slug: 'modulo-25-crisi-emotiva', title: 'Segnali di crisi e supporto emotivo', category: 'THREAT', audience: 'famiglie, educatori, ragazzi' },
  { id: 26, slug: 'modulo-26-fake-news', title: 'Fake news e disinformazione', category: 'SKILL', audience: 'tutti' },
  { id: 27, slug: 'modulo-27-deepfake', title: 'Deepfake, AI e contenuti manipolati', category: 'THREAT', audience: 'tutti' },
  { id: 28, slug: 'modulo-28-ricerca', title: 'Cercare bene: motori, fonti e verifiche', category: 'SKILL', audience: 'tutti' },
  { id: 29, slug: 'modulo-29-algoritmi', title: 'Algoritmi, feed e manipolazione dell’attenzione', category: 'SKILL', audience: 'tutti' },
  { id: 30, slug: 'modulo-30-benessere-digitale', title: 'Tempo online, sonno e benessere digitale', category: 'SKILL', audience: 'ragazzi, famiglie' },
  { id: 31, slug: 'modulo-31-relazioni-sane', title: 'Relazioni online sane e confini', category: 'SKILL', audience: 'ragazzi' },
  { id: 32, slug: 'modulo-32-amicizie-gruppi', title: 'Amicizie online e gruppi', category: 'SKILL', audience: 'ragazzi' },
  { id: 33, slug: 'modulo-33-dating-app', title: 'Dating app e incontri offline', category: 'SKILL', audience: 'giovani adulti' },
  { id: 34, slug: 'modulo-34-scuola-digitale', title: 'Scuola digitale e comportamenti corretti', category: 'SKILL', audience: 'studenti, insegnanti' },
  { id: 35, slug: 'modulo-35-studiare-online', title: 'Studiare online senza farsi fregare', category: 'SKILL', audience: 'studenti' },
  { id: 36, slug: 'modulo-36-privacy-scuola', title: 'Privacy a scuola, foto di classe e chat', category: 'SKILL', audience: 'famiglie, insegnanti' },
  { id: 37, slug: 'modulo-37-genitori-panico', title: 'Genitori: parlare di sicurezza senza panico', category: 'SKILL', audience: 'genitori' },
  { id: 38, slug: 'modulo-38-famiglie-regole', title: 'Famiglie: regole, routine e accordi', category: 'SKILL', audience: 'famiglie' },
  { id: 39, slug: 'modulo-39-educatori-classe', title: 'Educatori: attività e discussioni in classe', category: 'SKILL', audience: 'educatori' },
  { id: 40, slug: 'modulo-40-policy-scuole', title: 'Coordinatori e scuole: policy e procedure', category: 'SKILL', audience: 'scuole' },
  { id: 41, slug: 'modulo-41-minori-legge', title: 'Minori e legge: diritti, limiti e responsabilità', category: 'SKILL', audience: 'tutti' },
  { id: 42, slug: 'modulo-42-segnalare-bloccare', title: 'Piattaforme: bloccare, segnalare, documentare', category: 'SKILL', audience: 'tutti' },
  { id: 43, slug: 'modulo-43-viaggi-wifi', title: 'Viaggi, luoghi pubblici e reti Wi‑Fi', category: 'SKILL', audience: 'tutti' },
  { id: 44, slug: 'modulo-44-geolocalizzazione', title: 'Geolocalizzazione e tracce invisibili', category: 'SKILL', audience: 'tutti' },
  { id: 45, slug: 'modulo-45-cloud-backup', title: 'Cloud, backup e recupero dati', category: 'SKILL', audience: 'tutti' },
  { id: 46, slug: 'modulo-46-casa-connessa', title: 'Casa connessa: smart device e privacy', category: 'SKILL', audience: 'tutti' },
  { id: 47, slug: 'modulo-47-ai-quotidiana', title: 'AI quotidiana: usare chatbot e tool con criterio', category: 'SKILL', audience: 'tutti' },
  { id: 48, slug: 'modulo-48-creativita-copyright', title: 'Creatività online, copyright e consenso', category: 'SKILL', audience: 'tutti' },
  { id: 49, slug: 'modulo-49-reputazione', title: 'Reputazione digitale e futuro', category: 'SKILL', audience: 'ragazzi' },
  { id: 50, slug: 'modulo-50-percorso-finale', title: 'Percorso finale Busssola: scenari e piano personale', category: 'SKILL', audience: 'tutti' }
];

const skillLessons = [
  { title: "Capire SUBJECT",
    sintesi: "SUBJECT entra nella vita di tutti i giorni molto più di quanto sembri. Questa lezione collega il tema a situazioni concrete, mostra perché conta davvero e prepara il terreno per scelte più sicure senza allarmismi.",
    punti: ["Collega SUBJECT a esempi normali, non solo a casi estremi.", "Spiega quale rischio concreto si riduce imparando questo tema.", "Chiudi con una domanda semplice che agganci la lezione successiva."],
    chiusura: "Chiudi con una promessa concreta: capire questo tema aiuta a fare meno errori e a proteggersi meglio." },
  { title: "Parole chiave di SUBJECT",
    sintesi: "Prima di agire bene serve un vocabolario minimo. Qui spieghi parole, funzioni e differenze utili per leggere meglio impostazioni, avvisi e richieste legate a SUBJECT.",
    punti: ["Definisci i termini senza gergo inutile.", "Distingui ciò che spesso viene confuso.", "Aggiungi un mini glossario riutilizzabile nel modulo."],
    chiusura: "Aggiungi tre parole da ricordare e una da smettere di usare male." },
  { title: "Errori comuni in SUBJECT",
    sintesi: "Molti problemi non nascono da grandi attacchi, ma da gesti frettolosi e abitudini ripetute. In questa lezione metti a fuoco gli errori più comuni e mostri come correggerli senza complicarsi la vita.",
    punti: ["Evita toni colpevolizzanti.", "Mostra perché l’errore è comprensibile ma correggibile.", "Proponi l’alternativa migliore in modo concreto."],
    chiusura: "Concludi con la frase: l’errore non definisce la persona, ma va corretto in fretta." },
  { title: "Primo check pratico su SUBJECT",
    sintesi: "Chi legge deve poter fare subito qualcosa di utile. Trasforma la teoria in un primo controllo pratico, semplice e realistico, così SUBJECT smette di sembrare astratto.",
    punti: ["Fai controllare una sola cosa per volta.", "Indica dove guardare, non solo cosa pensare.", "Concludi con un piccolo risultato verificabile."],
    chiusura: "Fai ottenere al lettore un piccolo risultato visibile entro pochi minuti." },
  { title: "Impostazioni di base",
    sintesi: "Le impostazioni di base sono spesso noiose finché non servono davvero. Qui le rendi comprensibili: poche scelte, spiegate bene, con il motivo per cui valgono la pena.",
    punti: ["Dai priorità alle impostazioni che cambiano davvero il rischio.", "Spiega il compromesso tra comodità e protezione.", "Ricorda che menu e nomi possono cambiare nel tempo."],
    chiusura: "Ricorda che la migliore impostazione è quella che il lettore userà davvero." },
  { title: "Abitudini quotidiane utili",
    sintesi: "La sicurezza funziona meglio quando diventa routine. Questa lezione costruisce piccole abitudini ripetibili che riducono il rischio senza chiedere perfezione.",
    punti: ["Preferisci azioni brevi e ripetibili.", "Mostra come legare l’abitudine a un momento della giornata.", "Evita routine irrealistiche o punitive."],
    chiusura: "Invita a scegliere una sola abitudine da iniziare oggi." },
  { title: "Segnali di rischio da non ignorare",
    sintesi: "Non tutti i segnali di rischio sono drammatici: molti sono sfumati, ripetuti o apparentemente normali. Qui insegni a notarli in tempo, prima che il problema cresca.",
    punti: ["Usa esempi che sembrano innocui all’inizio.", "Distingui imprevisto, fastidio e vero rischio.", "Invita a fermarsi prima di reagire d’istinto."],
    chiusura: "Chiudi con il principio: se qualcosa ti mette pressione, rallenta." },
  { title: "Caso guidato: situazione semplice",
    sintesi: "Un caso semplice serve a far vedere come si applicano davvero le regole di base. Parti da una situazione quotidiana, fai scegliere al lettore e spiega perché una risposta è migliore di un’altra.",
    punti: ["Costruisci una scena breve e credibile.", "Fai emergere un errore tipico.", "Spiega la soluzione passo per passo."],
    chiusura: "Termina con tre righe su cosa ha funzionato nel caso e cosa no." },
  { title: "Caso guidato: situazione complessa",
    sintesi: "Una situazione complessa mostra cosa succede quando i dettagli si accumulano. In questa lezione il lettore allena il ragionamento, non solo la memoria.",
    punti: ["Aggiungi ambiguità realistica.", "Mostra come ordinare i fatti prima di decidere.", "Chiudi con una regola semplice da ricordare."],
    chiusura: "Lascia una regola semplice da usare quando i dettagli sono confusi." },
  { title: "Cosa fare subito quando qualcosa non torna",
    sintesi: "Quando qualcosa non torna, servono azioni chiare e ordinate. Qui costruisci una mini procedura: fermarsi, controllare, proteggere, chiedere aiuto se necessario.",
    punti: ["Usa una sequenza di azioni chiara.", "Metti prima le mosse che proteggono davvero.", "Evita procedure troppo lunghe per momenti di stress."],
    chiusura: "Trasforma la lezione in una mini procedura da salvare." },
  { title: "Cosa evitare per non peggiorare",
    sintesi: "Spesso il danno cresce per fretta, vergogna o impulsività. In questa lezione spieghi quali mosse evitare e perché una cattiva reazione può complicare tutto.",
    punti: ["Spiega il costo di ogni mossa sbagliata.", "Ricorda che cancellare o negare spesso peggiora il problema.", "Offri subito l’alternativa corretta."],
    chiusura: "Metti in evidenza che la fretta è spesso alleata del problema." },
  { title: "Strumenti utili",
    sintesi: "Strumenti e funzioni servono solo se il lettore capisce quando usarli. Qui presenti pochi strumenti utili, spieghi il loro scopo e li colleghi a problemi reali.",
    punti: ["Nomina pochi strumenti, ma bene.", "Spiega a cosa servono e quando NON bastano.", "Collega ogni strumento a un rischio preciso."],
    chiusura: "Invita il lettore a provarne almeno uno subito." },
  { title: "Come chiedere aiuto",
    sintesi: "Chiedere aiuto bene è una competenza, non un fallimento. Questa lezione insegna a descrivere il problema con ordine, così chi aiuta può intervenire più in fretta.",
    punti: ["Modella un messaggio semplice da inviare o dire.", "Indica quali dettagli servono davvero.", "Riduci vergogna e confusione con linguaggio calmo."],
    chiusura: "Fornisci una frase modello pronta da usare." },
  { title: "SUBJECT in famiglia, a scuola o in gruppo",
    sintesi: "SUBJECT cambia quando entra in gioco una famiglia, una classe, un gruppo o una chat comune. Qui mostri come le scelte individuali influenzano anche gli altri.",
    punti: ["Mostra l’effetto delle scelte individuali sul gruppo.", "Aggiungi almeno un esempio scolastico o familiare.", "Ricorda le differenze di ruolo tra pari e adulti."],
    chiusura: "Chiudi ricordando che online si protegge anche il gruppo, non solo il singolo." },
  { title: "SUBJECT su app e piattaforme",
    sintesi: "Ogni piattaforma rende alcune cose facili e altre nascoste. Invece di inseguire menu destinati a cambiare, insegni i principi da controllare in qualunque app o servizio.",
    punti: ["Insegna principi, non percorsi di menu troppo specifici.", "Fai notare cosa controllare in privacy, sicurezza e notifiche.", "Ricorda di verificare periodicamente le impostazioni."],
    chiusura: "Ricorda che i nomi delle funzioni cambiano, i principi no." },
  { title: "Mini piano personale",
    sintesi: "Un piano personale serve a trasformare le buone intenzioni in scelte pratiche. Questa lezione aiuta a definire poche regole chiare, realistiche e sostenibili.",
    punti: ["Limita il piano a poche regole personali.", "Fai scrivere al lettore cosa farà davvero.", "Prevedi un controllo periodico."],
    chiusura: "Fai scrivere tre regole personali realistiche." },
  { title: "Checklist essenziale",
    sintesi: "La checklist aiuta a ricordare l’essenziale nei momenti normali e in quelli caotici. Riassumi i passaggi davvero importanti, senza riempitivi.",
    punti: ["Sintetizza senza perdere precisione.", "Usa verbi operativi.", "Mantieni la checklist breve e stampabile."],
    chiusura: "Mantieni il tono asciutto e salvabile." },
  { title: "Esercizio pratico",
    sintesi: "Un esercizio pratico rende il modulo attivo e memorabile. Fai fare un controllo reale, una modifica concreta o una breve simulazione collegata a SUBJECT.",
    punti: ["Proponi un’azione reale sul dispositivo.", "Chiedi di annotare cosa è cambiato.", "Trasforma l’esercizio in abitudine possibile."],
    chiusura: "Chiedi una prova pratica, non solo riflessione." },
  { title: "Quiz decisionale",
    sintesi: "Il quiz decisionale non deve testare definizioni, ma scelte. Presenta scenari brevi e fai capire perché una risposta è più solida, prudente o utile di un’altra.",
    punti: ["Usa scenari vicini alla vita reale.", "Spiega anche perché le risposte sbagliate attirano.", "Chiudi con una regola pratica."],
    chiusura: "Spiega perché decidere bene vale più che ricordare definizioni." },
  { title: "Ripasso e passo successivo",
    sintesi: "Il ripasso finale chiude il modulo con ordine. Riassumi i concetti chiave, collega SUBJECT ad altri temi Busssola e indica il passo successivo migliore.",
    punti: ["Raccogli l’essenziale in modo ordinato.", "Indica un modulo successivo coerente.", "Ricorda che la sicurezza si aggiorna nel tempo."],
    chiusura: "Chiudi con il modulo Busssola più utile da affrontare dopo." }
];

const threatLessons = [
  { title: "Capire SUBJECT",
    sintesi: "SUBJECT va spiegato senza sensazionalismo e senza minimizzare. In questa lezione definisci il problema, chiarisci cosa lo distingue da altre situazioni e prepari il lettore a riconoscerlo presto.",
    punti: ["Definisci SUBJECT in modo semplice e preciso.", "Distingui il problema da conflitti ordinari o fraintendimenti.", "Evita parole che spaventano senza spiegare."],
    chiusura: "Chiudi con l’idea che riconoscere presto vale più che reagire tardi." },
  { title: "Come iniziano queste situazioni",
    sintesi: "Molte situazioni pericolose non iniziano con una minaccia esplicita, ma con normalità, attenzione o falsa vicinanza. Qui mostri i primi passi con cui il rischio prova a sembrare innocuo.",
    punti: ["Mostra come il rischio può sembrare gentile o banale all’inizio.", "Fai notare gradualità, test e confidenza costruita.", "Ricorda che il problema è la condotta di chi manipola, non la vulnerabilità di chi subisce."],
    chiusura: "Invita a diffidare della pressione travestita da vicinanza." },
  { title: "Segnali precoci",
    sintesi: "I segnali precoci servono a intervenire prima che la persona si senta intrappolata. Spiega cosa osservare in chat, nei tempi, nelle richieste e nei cambi di tono.",
    punti: ["Usa esempi di linguaggio, tempi e richieste.", "Dai segnali osservabili, non intuizioni vaghe.", "Invita a fermarsi ai primi dubbi."],
    chiusura: "Rendi i segnali facili da ricordare in tre parole." },
  { title: "Tecniche di manipolazione o pressione",
    sintesi: "Pressione, segretezza, urgenza, colpa e ricompensa sono strumenti ricorrenti. Questa lezione aiuta a riconoscere i meccanismi psicologici dietro SUBJECT.",
    punti: ["Nomina le tecniche senza gergo da manuale.", "Spiega come pressione e segretezza lavorano insieme.", "Rendi visibile la dinamica emotiva."],
    chiusura: "Sottolinea che la manipolazione agisce sulle emozioni, non sulla logica soltanto." },
  { title: "Quando la situazione peggiora",
    sintesi: "Quando la situazione peggiora, spesso lo fa a piccoli scatti. Insegna a vedere il passaggio da contatto ambiguo a richiesta grave, controllo o minaccia.",
    punti: ["Mostra almeno tre gradini di escalation.", "Fai capire che il peggioramento può essere rapido o lento.", "Collega escalation e perdita di libertà della vittima."],
    chiusura: "Lascia una frase chiave: se aumenta segretezza o urgenza, il rischio cresce." },
  { title: "Errori comuni che complicano tutto",
    sintesi: "Molte reazioni istintive sono comprensibili ma rischiose. Qui spieghi quali errori complicano tutto e come sostituirli con mosse più utili e più sicure.",
    punti: ["Evita tono moralista.", "Spiega perché certe reazioni sono istintive ma dannose.", "Offri subito la risposta alternativa."],
    chiusura: "Ricorda che sbagliare reazione non annulla il diritto a ricevere aiuto." },
  { title: "Cosa fare subito",
    sintesi: "In una situazione delicata servono istruzioni brevi e priorità chiare. Questa lezione mette ordine: mettersi al sicuro, non cedere alla pressione, conservare ciò che serve e attivare aiuto.",
    punti: ["Ordina le azioni per priorità.", "Tieni separate sicurezza personale, prove e segnalazione.", "Scrivi come per una persona agitata, non per un esperto."],
    chiusura: "Trasforma la lezione in una mini card SOS." },
  { title: "Cosa non fare",
    sintesi: "Dire cosa non fare riduce il caos. Elenchi le mosse più comuni che peggiorano la situazione e spieghi perché vanno evitate, senza colpevolizzare.",
    punti: ["Nomina poche mosse sbagliate ma frequenti.", "Spiega il motivo del rischio.", "Usa formule chiare: non fare questo, fai quest’altro."],
    chiusura: "Usa un box visivo con i divieti principali." },
  { title: "Come salvare prove",
    sintesi: "Le prove digitali contano perché i dettagli si perdono in fretta. Qui spieghi cosa conservare, come farlo con ordine e cosa evitare di cancellare prima del tempo.",
    punti: ["Spiega cosa salvare e come nominarlo.", "Ricorda di includere profili, orari e contesto.", "Evita suggerimenti invasivi o poco realistici."],
    chiusura: "Chiudi con un promemoria: prima salva, poi blocca se necessario." },
  { title: "Come bloccare e segnalare",
    sintesi: "Bloccare e segnalare non sono gesti automatici: vanno fatti nel momento giusto e con criterio. Insegni come usarli senza perdere prove o informazioni utili.",
    punti: ["Distingui tra piattaforma, chat, gioco, social e mail.", "Ricorda di non bloccare prima di aver salvato l’essenziale quando serve.", "Spiega il senso della segnalazione."],
    chiusura: "Ricorda che bloccare e segnalare sono strumenti, non la soluzione completa." },
  { title: "Come chiedere aiuto a un adulto o referente",
    sintesi: "Chiedere aiuto a un adulto, referente o servizio può fare la differenza, ma spesso la persona coinvolta non sa come iniziare. Dai una traccia semplice e rispettosa.",
    punti: ["Dai una frase modello da dire o scrivere.", "Riduci vergogna e paura di non essere creduti.", "Ricorda che il problema va condiviso presto."],
    chiusura: "Metti una frase pronta da copiare e inviare." },
  { title: "Come parlarne con un amico coinvolto",
    sintesi: "Anche gli amici possono vedere segnali che la persona coinvolta fatica a leggere. Questa lezione insegna come aiutare senza sostituirsi, giudicare o esporsi inutilmente.",
    punti: ["Mostra come stare accanto senza prendere il controllo.", "Invita a non promettere segreti impossibili.", "Ricorda quando serve coinvolgere un adulto subito."],
    chiusura: "Chiudi con il principio: aiutare non significa sostituirsi." },
  { title: "Quando entrano in gioco scuola, famiglia o gruppo",
    sintesi: "Quando un problema tocca scuola, famiglia o gruppo, servono ruoli chiari. Qui spieghi quando allargare il cerchio e come evitare sia il silenzio sia il caos.",
    punti: ["Assegna ruoli chiari.", "Evita sia minimizzazione sia panico collettivo.", "Ricorda che la dignità della persona viene prima del gossip."],
    chiusura: "Ribadisci il valore della riservatezza." },
  { title: "Caso guidato: messaggi ambigui",
    sintesi: "Un caso ambiguo allena l’occhio ai dettagli piccoli ma importanti. Costruisci una chat o una sequenza di messaggi e fai emergere la logica del rischio.",
    punti: ["Fai leggere la situazione per dettagli.", "Spiega dove scatta il campanello d’allarme.", "Chiudi con un criterio semplice da riusare."],
    chiusura: "Lascia un criterio semplice per riconoscere ambiguità sospette." },
  { title: "Caso guidato: minacce o pressione",
    sintesi: "Un caso con pressione o minaccia serve a preparare il lettore al momento peggiore. Mostra come restare lucidi, non negoziare e attivare supporto utile.",
    punti: ["Simula urgenza e pressione in modo credibile.", "Mostra come non trattare con chi minaccia.", "Collega il caso a prove e aiuto immediato."],
    chiusura: "Concludi con una sequenza breve di azioni da ripetere." },
  { title: "Piano personale di sicurezza",
    sintesi: "Il piano personale di sicurezza trasforma l’ansia in azioni concrete. In questa lezione il lettore prepara contatti, regole e passaggi da tenere pronti.",
    punti: ["Fai preparare contatti, impostazioni e scelte.", "Tieni il piano breve e memorabile.", "Adatta il piano all’età e al contesto."],
    chiusura: "Fai uscire il lettore con un piano concreto, non con paura astratta." },
  { title: "Checklist di emergenza",
    sintesi: "La checklist di emergenza deve essere breve, memorabile e usabile sotto stress. Riassumi le priorità vere: sicurezza, prove, aiuto, segnalazione.",
    punti: ["Usa verbi operativi.", "Metti la sicurezza davanti a tutto.", "Rendi la checklist stampabile o salvabile."],
    chiusura: "Mantieni la checklist breve e usabile sotto stress." },
  { title: "Esercizio pratico di risposta",
    sintesi: "Un esercizio pratico di risposta aiuta a non restare paralizzati. Fai simulare una situazione, ordina le mosse corrette e spiega perché funzionano meglio.",
    punti: ["Chiedi di ordinare le mosse.", "Spiega il perché, non solo il cosa.", "Collega l’esercizio a un rischio reale."],
    chiusura: "Chiudi con il messaggio: esercitarsi prima aiuta quando serve davvero." },
  { title: "Quiz decisionale",
    sintesi: "Il quiz decisionale serve ad allenare il giudizio in scenari realistici. Le alternative devono essere credibili, non caricaturali, così il lettore impara davvero.",
    punti: ["Usa alternative plausibili.", "Premia la lucidità, non il coraggio spettacolare.", "Chiudi con una regola che resta."],
    chiusura: "Mostra che decidere bene conta più che rispondere in fretta." },
  { title: "Ripasso e accesso al SOS",
    sintesi: "La chiusura del modulo deve riportare calma, orientamento e accesso rapido al supporto. Riassumi i concetti chiave e rinforza il collegamento con la pagina SOS.",
    punti: ["Riporta calma e orientamento.", "Ricorda dove trovare aiuto.", "Non lasciare il lettore da solo con la paura."],
    chiusura: "Termina con link e rinvio chiaro alla sezione SOS." }
];

function generateContentMarkdown(lessonTemplate, subject) {
    const titleReplaced = lessonTemplate.title.replace(/SUBJECT/g, subject);
    const sintesiReplaced = lessonTemplate.sintesi.replace(/SUBJECT/g, subject);
    const puntiReplaced = lessonTemplate.punti.map(p => `- ${p.replace(/SUBJECT/g, subject)}`).join('\n');
    const chiusuraReplaced = lessonTemplate.chiusura.replace(/SUBJECT/g, subject);
    
    return `### Sintesi
${sintesiReplaced}

### Punti Chiave
${puntiReplaced}

### Chiusura
${chiusuraReplaced}
`;
}

function generateModuleFile(mod) {
    const subject = mod.title.toLowerCase();
    const isThreat = mod.category === 'THREAT';
    const templates = isThreat ? threatLessons : skillLessons;
    
    let lessonsStr = '';
    
    for (let i = 0; i < templates.length; i++) {
        const t = templates[i];
        const contentMarkdown = generateContentMarkdown(t, subject);
        const lId = (i + 1).toString();
        const diff = i < 7 ? 'base' : (i < 15 ? 'intermedia' : 'avanzata');
        
        // Escape backticks in contentMarkdown
        const safeMarkdown = contentMarkdown.replace(/`/g, '\\`');
        
        lessonsStr += `
        {
            id: '${lId}',
            title: '${t.title.replace(/SUBJECT/g, subject)}',
            minutes: 5,
            difficulty: '${diff}',
            audienceTag: '${mod.audience}',
            moduleTag: '${mod.title}',
            learningGoals: [
                '${t.punti[0].replace(/SUBJECT/g, subject)}',
                '${t.punti[1].replace(/SUBJECT/g, subject)}',
                '${t.punti[2].replace(/SUBJECT/g, subject)}'
            ],
            contentMarkdown: \`${safeMarkdown}\`
        }${i < templates.length - 1 ? ',' : ''}`;
    }

    const fileContent = `import { Module } from '@/types';

export const ${mod.slug.replace(/-/g, '_')} : Module = {
    id: '${mod.slug}',
    title: 'Modulo ${mod.id}: ${mod.title}',
    description: 'Architettura editoriale in approvazione. Contenuto in fase di sviluppo intensivo secondo gli standard qualitativi Busssola.',
    category: '${mod.category}',
    coverImage: '/images/modules/${mod.category.toLowerCase()}.webp',
    progress: 0,
    lessons: [${lessonsStr}
    ]
};
`;

    fs.writeFileSync(path.join(__dirname, '../src/data/modules/', `${mod.slug}.ts`), fileContent);
    console.log(`Generated ${mod.slug}.ts`);
}

modulesList.forEach(mod => generateModuleFile(mod));
console.log('All modules generated successfully.');
