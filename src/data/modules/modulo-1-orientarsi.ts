import { Module } from '@/types'

export const MODULO_1: Module = {
    id: 'orientarsi-online',
    title: 'Orientarsi online senza panico',
    subtitle: 'Le basi per capire i rischi digitali',
    description: 'Le basi per capire i rischi digitali, scegliere il percorso giusto e distinguere prevenzione, supporto e urgenza.',
    difficulty: 'base',
    themeColor: '#3b82f6',
    icon: 'Compass',
    durationHours: 2,
    number: 1,
    tips: [
        'Non cercare la perfezione, cerca la consapevolezza.',
        'Se un problema digitale ti toglie il sonno, non è solo virtuale.',
        'Impara a dividere i problemi urgenti da quelli solo fastidiosi.'
    ],
    resources: [
        {
            title: 'Polizia Postale - Commissariato online',
            url: 'https://www.commissariatodips.it/',
            description: 'Canale ufficiale per informazioni, segnalazioni e denunce online.'
        }
    ],
    lessons:     [
            {
                    "id": "1",
                    "title": "Cos’è orientarsi online senza panico",
                    "minutes": 5,
                    "difficulty": "base",
                    "audienceTag": "Per tutti",
                    "moduleTag": "Orientarsi online",
                    "learningGoals": [
                            "Orientarsi online con lucidità e senza allarmismi.",
                            "Riconoscere segnali di rischio, pressione o confusione digitale.",
                            "Applicare un piccolo controllo pratico nella vita quotidiana."
                    ],
                    "contentMarkdown": "### Perché conta\nOrientarsi online significa distinguere ciò che è urgente da ciò che è solo rumoroso, e trasformare la confusione in una scelta concreta.\n\n### Segnali da riconoscere\n- Troppe notifiche o richieste tutte insieme.\n- Richieste di dati, permessi o accessi senza motivo chiaro.\n- Sensazione di dover rispondere subito per non perdere qualcosa.\n\n### Cosa fare\n- **Descrivi il problema in una frase.**\n- **Controlla la fonte prima di agire.**\n- **Chiedi aiuto quando il tema supera le tue competenze o la tua serenità.**\n\n### Cosa evitare\n- Non confondere prudenza con paura.\n- Non cliccare, pagare o cancellare solo per ansia.\n\n### Quando chiedere aiuto\nChiedi aiuto se sono coinvolti soldi, minacce, immagini intime, dati personali, account importanti o se la situazione ti impedisce di dormire, studiare, lavorare o sentirti al sicuro. In caso di pericolo immediato chiama il 112.\n\n### Passo pratico\nScegli una sola impostazione da migliorare oggi: notifiche, password, privacy o backup."
            },
            {
                    "id": "2",
                    "title": "Fermarsi prima di cliccare",
                    "minutes": 5,
                    "difficulty": "base",
                    "audienceTag": "Per tutti",
                    "moduleTag": "Orientarsi online",
                    "learningGoals": [
                            "Orientarsi online con lucidità e senza allarmismi.",
                            "Riconoscere segnali di rischio, pressione o confusione digitale.",
                            "Applicare un piccolo controllo pratico nella vita quotidiana."
                    ],
                    "contentMarkdown": "### Perché conta\nMolte truffe vincono nei pochi secondi in cui una persona clicca per ansia, curiosità o fretta. Fermarsi è già una misura di sicurezza.\n\n### Segnali da riconoscere\n- Link ricevuti senza contesto.\n- Messaggi con premi, minacce o scadenze immediate.\n- Dominio o mittente diversi dal servizio ufficiale.\n\n### Cosa fare\n- **Apri il sito digitando tu l’indirizzo ufficiale.**\n- **Controlla mittente e dominio prima di inserire dati.**\n- **Segnala o elimina il messaggio se resta sospetto.**\n\n### Cosa evitare\n- Non inserire password o carte dopo un link inatteso.\n- Non richiamare numeri presenti dentro messaggi sospetti.\n\n### Quando chiedere aiuto\nChiedi aiuto se sono coinvolti soldi, minacce, immagini intime, dati personali, account importanti o se la situazione ti impedisce di dormire, studiare, lavorare o sentirti al sicuro. In caso di pericolo immediato chiama il 112.\n\n### Passo pratico\nScegli un messaggio promozionale o sospetto e identifica mittente, link e leva emotiva usata."
            },
            {
                    "id": "3",
                    "title": "Password e account: la porta di ingresso",
                    "minutes": 6,
                    "difficulty": "base",
                    "audienceTag": "Per tutti",
                    "moduleTag": "Orientarsi online",
                    "learningGoals": [
                            "Capire perché gli account personali hanno valore.",
                            "Riconoscere abitudini che aumentano il rischio di furto.",
                            "Applicare un controllo rapido sugli accessi importanti."
                    ],
                    "contentMarkdown": "### Perché conta\nUn account protegge identità, contatti, foto, soldi e accessi collegati. Anche un profilo piccolo può essere usato per truffare altre persone.\n\n### Segnali da riconoscere\n- Password uguali su più servizi.\n- Codici di accesso chiesti in chat.\n- Email o telefono di recupero non aggiornati.\n\n### Cosa fare\n- **Cambia una password debole con una passphrase lunga.**\n- **Attiva la verifica in due passaggi.**\n- **Controlla i dispositivi collegati all’account.**\n\n### Cosa evitare\n- Non condividere password come prova di fiducia.\n- Non salvare codici di recupero in chat non protette.\n\n### Quando chiedere aiuto\nChiedi aiuto se sono coinvolti soldi, minacce, immagini intime, dati personali, account importanti o se la situazione ti impedisce di dormire, studiare, lavorare o sentirti al sicuro. In caso di pericolo immediato chiama il 112.\n\n### Passo pratico\nApri l’account più importante e verifica se la protezione a due fattori è attiva."
            },
            {
                    "id": "4",
                    "title": "Notifiche, ansia e decisioni impulsive",
                    "minutes": 5,
                    "difficulty": "base",
                    "audienceTag": "Per tutti",
                    "moduleTag": "Orientarsi online",
                    "learningGoals": [
                            "Orientarsi online con lucidità e senza allarmismi.",
                            "Riconoscere segnali di rischio, pressione o confusione digitale.",
                            "Applicare un piccolo controllo pratico nella vita quotidiana."
                    ],
                    "contentMarkdown": "### Perché conta\nLe notifiche sono progettate per interrompere. Quando sei già agitato, ogni avviso può sembrare più urgente di quanto sia davvero.\n\n### Segnali da riconoscere\n- Controlli lo schermo senza uno scopo preciso.\n- Rispondi subito anche quando non serve.\n- Ti senti in colpa se lasci un messaggio non letto.\n\n### Cosa fare\n- **Disattiva notifiche non essenziali.**\n- **Crea un momento fisso per controllare messaggi e social.**\n- **Tieni attive solo le app davvero importanti.**\n\n### Cosa evitare\n- Non usare il telefono come risposta automatica all’ansia.\n- Non lasciare che ogni app decida quando interromperti.\n\n### Quando chiedere aiuto\nChiedi aiuto se sono coinvolti soldi, minacce, immagini intime, dati personali, account importanti o se la situazione ti impedisce di dormire, studiare, lavorare o sentirti al sicuro. In caso di pericolo immediato chiama il 112.\n\n### Passo pratico\nDisattiva oggi le notifiche di tre app che non richiedono risposta immediata."
            },
            {
                    "id": "5",
                    "title": "Permessi delle app e dati personali",
                    "minutes": 6,
                    "difficulty": "base",
                    "audienceTag": "Per tutti",
                    "moduleTag": "Orientarsi online",
                    "learningGoals": [
                            "Orientarsi online con lucidità e senza allarmismi.",
                            "Riconoscere segnali di rischio, pressione o confusione digitale.",
                            "Applicare un piccolo controllo pratico nella vita quotidiana."
                    ],
                    "contentMarkdown": "### Perché conta\nOgni permesso concesso a un’app apre una porta: posizione, microfono, foto, contatti o notifiche. Non tutti sono necessari.\n\n### Segnali da riconoscere\n- App semplici che chiedono troppi accessi.\n- Posizione sempre attiva senza motivo.\n- Accesso a foto o contatti quando non serve.\n\n### Cosa fare\n- **Controlla i permessi dalle impostazioni del telefono.**\n- **Revoca ciò che non è indispensabile.**\n- **Scegli “solo mentre uso l’app” quando possibile.**\n\n### Cosa evitare\n- Non accettare permessi solo per chiudere un popup.\n- Non installare app sconosciute per funzioni banali.\n\n### Quando chiedere aiuto\nChiedi aiuto se sono coinvolti soldi, minacce, immagini intime, dati personali, account importanti o se la situazione ti impedisce di dormire, studiare, lavorare o sentirti al sicuro. In caso di pericolo immediato chiama il 112.\n\n### Passo pratico\nApri la lista dei permessi e revoca almeno un accesso non necessario."
            },
            {
                    "id": "6",
                    "title": "Quando una situazione diventa emergenza",
                    "minutes": 5,
                    "difficulty": "base",
                    "audienceTag": "Per tutti",
                    "moduleTag": "Orientarsi online",
                    "learningGoals": [
                            "Distinguere un problema fastidioso da una situazione urgente.",
                            "Mettere in ordine sicurezza personale, prove e contatti utili.",
                            "Sapere quando chiamare il 112 o usare il Centro SOS."
                    ],
                    "contentMarkdown": "### Perché conta\nQuando una situazione digitale coinvolge minacce, soldi, immagini intime o paura per la sicurezza, serve una risposta ordinata e non solitaria.\n\n### Segnali da riconoscere\n- Minacce o ricatti.\n- Account rubati o pagamenti non autorizzati.\n- Paura di incontrare qualcuno o di essere seguito.\n\n### Cosa fare\n- **Mettiti al sicuro prima di tutto.**\n- **Salva prove essenziali: chat, profili, link, date.**\n- **Usa il Centro SOS o contatta i canali ufficiali.**\n\n### Cosa evitare\n- Non pagare ricatti.\n- Non cancellare tutto per vergogna prima di aver salvato prove.\n- Non affrontare da solo chi minaccia.\n\n### Quando chiedere aiuto\nChiedi aiuto se sono coinvolti soldi, minacce, immagini intime, dati personali, account importanti o se la situazione ti impedisce di dormire, studiare, lavorare o sentirti al sicuro. In caso di pericolo immediato chiama il 112.\n\n### Passo pratico\nSe il problema è urgente, vai alla pagina SOS e scegli la situazione più vicina alla tua."
            },
            {
                    "id": "7",
                    "title": "Come parlarne in famiglia",
                    "minutes": 6,
                    "difficulty": "base",
                    "audienceTag": "Per tutti",
                    "moduleTag": "Orientarsi online",
                    "learningGoals": [
                            "Parlare di problemi digitali con calma e precisione.",
                            "Separare fatti, emozioni e decisioni pratiche.",
                            "Evitare colpevolizzazione e diffusione non necessaria."
                    ],
                    "contentMarkdown": "### Perché conta\nUn problema digitale diventa più gestibile quando le persone intorno reagiscono con calma, rispetto e metodo.\n\n### Segnali da riconoscere\n- Accuse prima di aver capito i fatti.\n- Screenshot condivisi in gruppi non necessari.\n- Ragazzi o compagni che smettono di parlare per paura.\n\n### Cosa fare\n- **Ascolta prima di decidere.**\n- **Scrivi una cronologia semplice dei fatti.**\n- **Stabilisci chi conserva prove e chi contatta eventuali referenti.**\n\n### Cosa evitare\n- Non trasformare un errore in umiliazione pubblica.\n- Non forzare confessioni davanti ad altre persone.\n\n### Quando chiedere aiuto\nChiedi aiuto se sono coinvolti soldi, minacce, immagini intime, dati personali, account importanti o se la situazione ti impedisce di dormire, studiare, lavorare o sentirti al sicuro. In caso di pericolo immediato chiama il 112.\n\n### Passo pratico\nUsa questa frase: “Raccontami cosa è successo, poi scegliamo insieme il prossimo passo”."
            },
            {
                    "id": "8",
                    "title": "Regole base per difendere i soldi online",
                    "minutes": 6,
                    "difficulty": "base",
                    "audienceTag": "Per tutti",
                    "moduleTag": "Orientarsi online",
                    "learningGoals": [
                            "Riconoscere richieste economiche sospette.",
                            "Proteggere carte, pagamenti e account collegati.",
                            "Sapere cosa fare se hai inserito dati finanziari in un sito dubbio."
                    ],
                    "contentMarkdown": "### Perché conta\nLe truffe economiche online puntano su urgenza, occasioni rare e fiducia. Proteggere i soldi significa proteggere anche gli account collegati.\n\n### Segnali da riconoscere\n- Richieste di ricariche, codici regalo o bonifici veloci.\n- Prezzi troppo bassi su marketplace.\n- Finti avvisi di banca, pacchi o abbonamenti.\n\n### Cosa fare\n- **Blocca subito carte o pagamenti sospetti.**\n- **Contatta la banca dal numero ufficiale.**\n- **Cambia password degli account collegati ai pagamenti.**\n\n### Cosa evitare\n- Non inviare codici OTP o screenshot della carta.\n- Non pagare fuori dalle piattaforme sicure.\n\n### Quando chiedere aiuto\nChiedi aiuto se sono coinvolti soldi, minacce, immagini intime, dati personali, account importanti o se la situazione ti impedisce di dormire, studiare, lavorare o sentirti al sicuro. In caso di pericolo immediato chiama il 112.\n\n### Passo pratico\nControlla oggi abbonamenti attivi e metodi di pagamento salvati sui servizi principali."
            },
            {
                    "id": "9",
                    "title": "Proteggere immagini, documenti e ricordi",
                    "minutes": 6,
                    "difficulty": "base",
                    "audienceTag": "Per tutti",
                    "moduleTag": "Orientarsi online",
                    "learningGoals": [
                            "Orientarsi online con lucidità e senza allarmismi.",
                            "Riconoscere segnali di rischio, pressione o confusione digitale.",
                            "Applicare un piccolo controllo pratico nella vita quotidiana."
                    ],
                    "contentMarkdown": "### Perché conta\nFoto, documenti e ricordi digitali sono fragili: possono essere persi, rubati o condivisi senza consenso.\n\n### Segnali da riconoscere\n- Backup assente o mai verificato.\n- Documenti salvati in chat o cartelle confuse.\n- Foto private condivise senza pensare alle conseguenze.\n\n### Cosa fare\n- **Attiva un backup affidabile.**\n- **Proteggi cloud e galleria con password forte e 2FA.**\n- **Condividi documenti solo tramite canali appropriati.**\n\n### Cosa evitare\n- Non tenere l’unica copia di ricordi importanti su un solo telefono.\n- Non inviare documenti personali in gruppi non necessari.\n\n### Quando chiedere aiuto\nChiedi aiuto se sono coinvolti soldi, minacce, immagini intime, dati personali, account importanti o se la situazione ti impedisce di dormire, studiare, lavorare o sentirti al sicuro. In caso di pericolo immediato chiama il 112.\n\n### Passo pratico\nVerifica se le foto più importanti hanno almeno una copia di backup."
            },
            {
                    "id": "10",
                    "title": "Costruire la tua routine mensile di sicurezza",
                    "minutes": 5,
                    "difficulty": "base",
                    "audienceTag": "Per tutti",
                    "moduleTag": "Orientarsi online",
                    "learningGoals": [
                            "Orientarsi online con lucidità e senza allarmismi.",
                            "Riconoscere segnali di rischio, pressione o confusione digitale.",
                            "Applicare un piccolo controllo pratico nella vita quotidiana."
                    ],
                    "contentMarkdown": "### Perché conta\nLa sicurezza digitale non richiede controllo costante. Funziona meglio come una piccola routine sostenibile.\n\n### Segnali da riconoscere\n- Password vecchie mai riviste.\n- Backup non controllati.\n- App e account dimenticati ma ancora attivi.\n\n### Cosa fare\n- **Fissa un controllo mensile di dieci minuti.**\n- **Rivedi password, backup, app e permessi.**\n- **Scegli il prossimo modulo più utile per la tua situazione.**\n\n### Cosa evitare\n- Non cercare la perfezione in un giorno.\n- Non rimandare tutto perché sembra troppo grande.\n\n### Quando chiedere aiuto\nChiedi aiuto se sono coinvolti soldi, minacce, immagini intime, dati personali, account importanti o se la situazione ti impedisce di dormire, studiare, lavorare o sentirti al sicuro. In caso di pericolo immediato chiama il 112.\n\n### Passo pratico\nScegli ora il prossimo modulo: password, phishing, privacy, SOS o benessere digitale."
            }
    ]
}
