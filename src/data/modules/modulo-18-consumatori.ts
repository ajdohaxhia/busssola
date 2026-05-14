import { Module } from '@/types';

export const modulo_18_consumatori: Module = {
    id: 'modulo-18-consumatori',
    title: 'Modulo 18: Diritti dei Consumatori',
    description: 'Conosci i tuoi diritti quando acquisti online o in negozio: resi, garanzie e rimborsi spiegati in modo semplice.',
    category: 'consumatori',
    difficulty: 'base',
    icon: 'ShoppingBag',
    themeColor: 'accent-green',
    lessons: [
        {
            id: 'reso-online',
            slug: 'reso-online-come-funziona',
            title: 'Reso online',
            mainEntity: 'AgCM',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 4,
            summary: 'Come restituire un prodotto acquistato su internet e ottenere il rimborso.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            synthesis: 'Il reso online è un diritto garantito dal Codice del Consumo. Permette di restituire un bene acquistato a distanza senza dover fornire spiegazioni. Il venditore deve rimborsare il prezzo pagato, solitamente entro 14 giorni dalla comunicazione.',
            prerequisites: ['Acquisto effettuato online or fuori dai locali commerciali', 'Prodotto integro (per quanto possibile)'],
            whenToDo: 'Quando ricevi un prodotto che non ti piace o non risponde alle tue aspettative.',
            doNow: [
                'Controlla la politica di reso sul sito del venditore.',
                'Compila il modulo di reso online o invia una comunicazione scritta.',
                'Imballa accuratamente il prodotto nella confezione originale.',
                'Applica l\'etichetta di spedizione fornita o prenota il corriere.',
                'Conserva la ricevuta di spedizione fino all\'avvenuto rimborso.'
            ],
            steps: [
                'Controlla la politica di reso sul sito del venditore.',
                'Compila il modulo di reso online o invia una comunicazione scritta.',
                'Imballa accuratamente il prodotto nella confezione originale.',
                'Applica l\'etichetta di spedizione fornita o prenota il corriere.',
                'Conserva la ricevuta di spedizione fino all\'avvenuto rimborso.'
            ],
            dontDo: [
                'Non rimuovere i cartellini o danneggiare le scatole originali se vuoi essere sicuro del rimborso.',
                'Non superare il termine dei 14 giorni per la comunicazione del recesso.',
                'Non spedire il pacco senza tracciabilità.'
            ],
            commonErrors: [
                'Dimenticare di inserire il modulo di reso all\'interno del pacco.',
                'Pensare che il reso sia gratuito per legge (le spese di spedizione possono essere a carico del consumatore se specificato).',
                'Usare il prodotto prima di renderlo (può comportare una diminuzione del rimborso).'
            ],
            askHelpWhen: [
                'Se il venditore rifiuta il reso senza motivo valido.',
                'Se il rimborso non arriva dopo 30 giorni.'
            ],
            whoCanHelp: [
                'Associazioni dei Consumatori (Altroconsumo, UNC, ecc.)',
                'Centro Europeo Consumatori (per acquisti in UE)',
                'AGCM (Autorità Garante della Concorrenza e del Mercato)'
            ],
            whereToDo: 'Online tramite il sito del venditore.',
            timeToComplete: '15 minuti per preparare il pacco.',
            practicalDisclaimer: 'Alcuni prodotti come software sigillati, beni personalizzati o intimi non possono essere resi.',
            sources: [
                {
                    title: 'Il diritto di recesso',
                    organization: 'Ministero delle Imprese e del Made in Italy',
                    url: 'https://www.mimit.gov.it/it/mercato-e-consumatori/tutela-del-consumatore/diritti-dei-consumatori/diritto-di-recesso',
                    type: 'official',
                    usedFor: 'Normativa di riferimento.',
                    lastCheckedAt: '2024-05-14'
                },
                {
                    title: 'Acquisti online: i consigli per evitare problemi',
                    organization: 'Altroconsumo',
                    url: 'https://www.altroconsumo.it/',
                    type: 'nonprofit',
                    usedFor: 'Consigli pratici e modelli.',
                    lastCheckedAt: '2024-05-14'
                }
            ],
            checklist: [
                'Comunicazione inviata entro 14gg',
                'Prodotto imballato correttamente',
                'Etichetta applicata',
                'Foto del prodotto prima di chiudere il pacco',
                'Ricevuta spedizione salvata'
            ],
            relatedGlossaryTerms: ['Diritto di recesso', 'Codice del Consumo', 'Rimborso']
        },
        {
            id: 'garanzia-legale',
            slug: 'garanzia-legale-2-anni',
            title: 'Garanzia legale 2 anni',
            mainEntity: 'AgCM',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Tutto quello che devi sapere sulla protezione obbligatoria di 24 mesi su ogni acquisto.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            synthesis: 'In Italia e in UE, ogni bene di consumo ha una garanzia legale di 2 anni. Il responsabile è il venditore, non il produttore. Copre i difetti di conformità esistenti al momento della consegna.',
            prerequisites: ['Scontrino, fattura o prova di acquisto', 'Bene acquistato da un venditore professionista'],
            whenToDo: 'Quando un prodotto smette di funzionare correttamente o mostra difetti non causati da te entro 2 anni.',
            doNow: [
                'Recupera la prova d\'acquisto (scontrino o transazione bancaria).',
                'Contatta il venditore (non il centro assistenza del produttore, se preferisci esercitare la legale).',
                'Descrivi il difetto e richiedi la riparazione o la sostituzione gratuita.',
                'Se la riparazione è impossibile o troppo costosa, richiedi una riduzione del prezzo o il rimborso.',
                'Consegna il prodotto e fatti rilasciare una ricevuta di presa in carico.'
            ],
            steps: [
                'Recupera la prova d\'acquisto (scontrino o transazione bancaria).',
                'Contatta il venditore (non il centro assistenza del produttore, se preferisci esercitare la legale).',
                'Descrivi il difetto e richiedi la riparazione o la sostituzione gratuita.',
                'Se la riparazione è impossibile o troppo costosa, richiedi una riduzione del prezzo o il rimborso.',
                'Consegna il prodotto e fatti rilasciare una ricevuta di presa in carico.'
            ],
            dontDo: [
                'Non cercare di riparare il prodotto da solo o presso centri non autorizzati (fa decadere la garanzia).',
                'Non smarrire lo scontrino (fai sempre una foto perché la carta termica sbiadisce).',
                'Non accettare che ti vengano addebitate spese di spedizione o manodopera.'
            ],
            commonErrors: [
                'Pensare che la garanzia sia di un solo anno (1 anno è solo per acquisti con Partita IVA).',
                'Rivolgersi solo al produttore (il venditore è l\'unico obbligato per legge).',
                'Confondere la garanzia legale con quella "commerciale" aggiuntiva.'
            ],
            askHelpWhen: [
                'Se il venditore sostiene che il danno è "usura normale" ma tu non sei d\'accordo.',
                'Se i tempi di riparazione superano i 60 giorni.'
            ],
            whoCanHelp: [
                'Sportelli del Consumatore',
                'Camere di Commercio (servizio mediazione)',
                'AGCM (segnalazione pratica commerciale scorretta)'
            ],
            whereToDo: 'Presso il punto vendita fisico o tramite il servizio clienti online.',
            timeToComplete: '20 minuti per la segnalazione.',
            practicalDisclaimer: 'La garanzia non copre i danni accidentali (es. caduta del telefono).',
            sources: [
                {
                    title: 'Garanzia legale di conformità',
                    organization: 'AGCM',
                    url: 'https://www.agcm.it/consumatore/diritti-del-consumatore/garanzia-legale',
                    type: 'official',
                    usedFor: 'Definizione e obblighi del venditore.',
                    lastCheckedAt: '2024-05-14'
                },
                {
                    title: 'Your Europe: Garanzie e resi',
                    organization: 'Unione Europea',
                    url: 'https://europa.eu/youreurope/citizens/consumers/shopping/guarantees-returns/index_it.htm',
                    type: 'institutional',
                    usedFor: 'Quadro normativo europeo.',
                    lastCheckedAt: '2024-05-14'
                }
            ],
            checklist: [
                'Scontrino trovato',
                'Difetto verificato entro i 2 anni',
                'Contatto venditore effettuato',
                'Richiesta riparazione/sostituzione',
                'Ricevuta di consegna ottenuta'
            ],
            relatedGlossaryTerms: ['Difetto di conformità', 'Venditore', 'Onere della prova']
        },
        {
            id: 'prodotto-difettoso',
            slug: 'prodotto-difettoso-cosa-fare',
            title: 'Prodotto difettoso',
            mainEntity: 'AgCM',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Passaggi pratici per gestire un oggetto che arriva rotto o non conforme.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            synthesis: 'Un prodotto è difettoso se non funziona come promesso o se presenta danni strutturali. Hai diritto al ripristino della conformità senza spese. Se il difetto si manifesta entro 1 anno, si presume esistesse già al momento dell\'acquisto.',
            prerequisites: ['Il prodotto non è conforme alla descrizione o all\'uso previsto'],
            whenToDo: 'Appena ti accorgi del malfunzionamento.',
            doNow: [
                'Scatta foto o gira un video del difetto.',
                'Invia un reclamo scritto (mail o PEC) al venditore mettendo in mora.',
                'Indica chiaramente se preferisci la sostituzione o la riparazione.',
                'Metti a disposizione il bene per il ritiro o portalo in negozio.',
                'Prendi nota di ogni comunicazione e nome dell\'operatore.'
            ],
            steps: [
                'Scatta foto o gira un video del difetto.',
                'Invia un reclamo scritto (mail o PEC) al venditore mettendo in mora.',
                'Indica chiaramente se preferisci la sostituzione o la riparazione.',
                'Metti a disposizione il bene per il ritiro o portalo in negozio.',
                'Prendi nota di ogni comunicazione e nome dell\'operatore.'
            ],
            dontDo: [
                'Non continuare a usare un prodotto difettoso, specialmente se pericoloso.',
                'Non accettare "buoni acquisto" se hai diritto al rimborso in denaro.',
                'Non pagare per il preventivo di riparazione se il bene è in garanzia.'
            ],
            commonErrors: [
                'Aspettare troppo tempo per segnalare il difetto.',
                'Non documentare lo stato del bene prima della spedizione.',
                'Dimenticare di includere tutti gli accessori originali nella restituzione.'
            ],
            askHelpWhen: [
                'Se il prodotto esplode, prende fuoco o causa danni a persone (sicurezza prodotti).',
                'Se il venditore è sparito o è fallito.'
            ],
            whoCanHelp: [
                'Associazioni Consumatori',
                'Avvocato (per danni ingenti)',
                'Forze dell\'ordine (se il prodotto è contraffatto o pericoloso)'
            ],
            whereToDo: 'Contatto diretto col punto vendita o assistenza clienti.',
            timeToComplete: '30 minuti.',
            practicalDisclaimer: 'Conserva sempre gli imballaggi originali per almeno i primi 14-30 giorni.',
            sources: [
                {
                    title: 'Responsabilità per prodotti difettosi',
                    organization: 'Commissione Europea',
                    url: 'https://ec.europa.eu/info/law/law-topic/consumer-protection-law_it',
                    type: 'institutional',
                    usedFor: 'Informazioni sulla sicurezza prodotti.',
                    lastCheckedAt: '2024-05-14'
                },
                {
                    title: 'Guida pratica reclami',
                    organization: 'Unione Nazionale Consumatori',
                    url: 'https://www.consumatori.it/',
                    type: 'nonprofit',
                    usedFor: 'Modulistica reclami.',
                    lastCheckedAt: '2024-05-14'
                }
            ],
            checklist: [
                'Foto del difetto fatte',
                'Reclamo scritto inviato',
                'Scelta riparazione/sostituzione indicata',
                'Accessori pronti per il reso',
                'Scadenza 2 anni controllata'
            ],
            relatedGlossaryTerms: ['Messa in mora', 'Conformità', 'Vizio occulto']
        },
        {
            id: 'recesso-14-giorni',
            slug: 'recesso-entro-14-giorni-guida',
            title: 'Recesso entro 14 giorni',
            mainEntity: 'AgCM',
            category: 'consumatori',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 3,
            summary: 'Il "diritto di ripensamento": come annullare un contratto senza penali.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            synthesis: 'Il diritto di recesso (o ripensamento) si applica ai contratti conclusi fuori dai locali commerciali (online, telefono, per strada). Hai 14 giorni di tempo dalla consegna del bene o dalla firma del contratto per annullare tutto.',
            prerequisites: ['Contratto firmato a distanza o fuori negozio'],
            whenToDo: 'Quando ti penti di un acquisto o di un cambio fornitore (luce, gas, telefonia) fatto via telefono o porta a porta.',
            doNow: [
                'Individua il modulo di recesso (solitamente allegato al contratto).',
                'Invia il modulo tramite Raccomandata A/R o PEC per avere prova legale.',
                'Se è un servizio (es. telefonia), chiedi il ripristino della situazione precedente.',
                'Se è un bene fisico, restituiscilo entro ulteriori 14 giorni dalla comunicazione.',
                'Verifica l\'avvenuto storno dell\'addebito sul conto o carta.'
            ],
            steps: [
                'Individua il modulo di recesso (solitamente allegato al contratto).',
                'Invia il modulo tramite Raccomandata A/R o PEC per avere prova legale.',
                'Se è un servizio (es. telefonia), chiedi il ripristino della situazione precedente.',
                'Se è un bene fisico, restituiscilo entro ulteriori 14 giorni dalla comunicazione.',
                'Verifica l\'avvenuto storno dell\'addebito sul conto o carta.'
            ],
            dontDo: [
                'Non chiamare solo il call center: la telefonata non ha valore legale senza una traccia scritta.',
                'Non aspettare il 15° giorno: il termine è perentorio.',
                'Non aver paura di ritorsioni o penali: il recesso è gratuito per legge (salvo costi di spedizione).'
            ],
            commonErrors: [
                'Confondere il recesso con la disdetta (la disdetta interrompe un contratto già avviato, il recesso lo annulla dall\'inizio).',
                'Pensare che valga anche per acquisti fatti fisicamente in negozio (in quel caso è a discrezione del negoziante).',
                'Non monitorare il conto corrente dopo l\'invio della raccomandata.'
            ],
            askHelpWhen: [
                'Se l\'azienda continua a inviare fatture dopo il recesso.',
                'Se sei stato vittima di una firma falsa o attivazione non richiesta.'
            ],
            whoCanHelp: [
                'Associazioni Consumatori',
                'ARERA (per energia e gas)',
                'AGCOM (per telefonia)'
            ],
            whereToDo: 'Tramite Posta (Raccomandata) o Posta Elettronica Certificata (PEC).',
            timeToComplete: '15 minuti per inviare una PEC o andare in Posta.',
            practicalDisclaimer: 'Il termine di 14 giorni si estende a 12 mesi se il professionista non ti ha informato correttamente del tuo diritto di recesso.',
            sources: [
                {
                    title: 'Diritto di recesso: 14 giorni per ripensarci',
                    organization: 'Unione Nazionale Consumatori',
                    url: 'https://www.consumatori.it/recesso-ripensamento/',
                    type: 'nonprofit',
                    usedFor: 'Dettagli sul diritto di ripensamento.',
                    lastCheckedAt: '2024-05-14'
                },
                {
                    title: 'Codice del Consumo',
                    organization: 'Gazzetta Ufficiale',
                    url: 'https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2005-10-08&atto.codiceRedazionale=005G0232',
                    type: 'official',
                    usedFor: 'Testo di legge.',
                    lastCheckedAt: '2024-05-14'
                }
            ],
            checklist: [
                'Termine 14gg rispettato',
                'Invio tramite PEC o Raccomandata',
                'Modulo compilato correttamente',
                'Copia del documento d\'identità allegata',
                'Ricevuta di spedizione conservata'
            ],
            relatedGlossaryTerms: ['Ripensamento', 'PEC', 'Locali commerciali']
        }
    ]
};
