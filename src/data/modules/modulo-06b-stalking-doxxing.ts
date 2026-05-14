import { Module } from '@/types';

export const modulo_06b_stalking_doxxing: Module = {
    id: 'modulo-06b-stalking-doxxing',
    lastUpdated: '2024-05-13',
    title: 'Modulo 6b: Cyberstalking (Tutele legali e Spyware)',
    description: 'Procedure per fermare lo stalking tramite l\'ammonimento del Questore e come rilevare software spia sul telefono.',
    category: 'privacy',
    difficulty: 'intermedia',
    icon: 'Eye',
    themeColor: 'accent-orange',
    lessons: [
        {
            id: 'cyberstalking-legal-steps',
            slug: 'ammonimento-del-questore-come-funziona-stalking',
            title: 'L\'ammonimento del Questore',
            category: 'privacy',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 6,
            summary: 'Uno strumento rapido per far cessare le molestie senza avviare subito un processo penale.',
            status: 'published',
            emergencyLevel: 'medium',
            scenario: 'Sei vittima di molestie insistenti (messaggi, chiamate, appostamenti digitali) da parte di un ex partner o uno sconosciuto. Vuoi che smetta subito ma hai paura di sporgere una denuncia penale formale che durerebbe anni.',
            question: 'Esiste un modo per far intervenire la Polizia senza un avvocato?',
            whatIsHappening: 'L\'ammonimento è una misura amministrativa preventiva. La vittima espone i fatti al Questore, il quale convoca lo stalker e lo "ammonisce" formalmente a smettere. Se lo stalker continua dopo l\'ammonimento, la Polizia procede d\'ufficio e le pene sono molto più severe. Non serve un avvocato per richiederlo.',
            warningSigns: [
                'Ricezione costante di messaggi indesiderati nonostante il blocco.',
                'Creazione di profili falsi per continuare a seguirti o commentare i tuoi post.',
                'Tentativi di accesso ai tuoi account o dispositivi.',
                'Diffusione di commenti offensivi o dati privati su di te online.'
            ],
            doNow: [
                'Raccogli tutte le prove (screenshot, registrazioni, email) in ordine cronologico.',
                'Recati presso una Questura o un Comando dei Carabinieri.',
                'Chiedi di parlare con l\'ufficio che si occupa di "Atti Persecutori" per presentare un\'istanza di ammonimento.',
                'Non bloccare lo stalker prima di aver salvato le prove, ma non rispondere mai ai suoi messaggi.'
            ],
            dontDo: [
                'Non cancellare i messaggi: sono la tua prova principale.',
                'Non cercare di "ragionare" con lo stalker: ogni contatto alimenta l\'ossessione.',
                'Non sottovalutare i segnali: lo stalking digitale spesso precede quello fisico.'
            ],
            preserveEvidence: [
                'Screenshot completi (che mostrino mittente, data, ora e contenuto).',
                'Salva gli URL dei profili falsi creati dallo stalker.',
                'Segna in un diario date e orari di ogni episodio.'
            ],
            askHelpWhen: [
                'Sempre. Prima intervieni, più è efficace l\'ammonimento.',
                'Se lo stalker dimostra di conoscere la tua posizione geografica in tempo reale.'
            ],
            whoCanHelp: [
                'Questore (Polizia di Stato)',
                'Centri Antiviolenza (Numero 1522)',
                'Forze dell\'ordine (Carabinieri)'
            ],
            checklist: [
                'Raccogli prove',
                'Vai in Questura',
                'Istanza ammonimento',
                'Contatta 1522'
            ],
            sources: [
                {
                    title: 'Ammonimento del Questore per Stalking',
                    organization: 'Polizia di Stato',
                    url: 'https://www.poliziadistato.it/articolo/3358356828v1',
                    type: 'official',
                    usedFor: 'Descrizione della procedura e base normativa.',
                    lastCheckedAt: '2026-05-14'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'unwanted-tracker-detection',
            slug: 'rilevamento-tracker-sconosciuti-airtag-stalking',
            title: 'AirTag e tracker sconosciuti',
            mainEntity: 'Apple Support',
            category: 'privacy',
            audience: ['adults', 'victims'],
            level: 'medio',
            estimatedMinutes: 6,
            summary: 'Come accorgersi se qualcuno ha nascosto un AirTag o un tracker GPS tra i tuoi oggetti o nell\'auto per seguirti.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Ricevi una notifica sul tuo smartphone: "Un accessorio sconosciuto è stato rilevato in movimento con te". Oppure trovi un piccolo oggetto rotondo (AirTag) in una tasca della borsa o sotto l\'auto che non ti appartiene.',
            question: 'Cosa devo fare se trovo un AirTag che mi sta seguendo?',
            whatIsHappening: 'I tracker di posizione (come gli Apple AirTag) sono utili per ritrovare le chiavi, ma possono essere usati per lo stalking. I sistemi iOS e Android ora ti avvisano se un tracker non tuo si muove insieme a te per un certo periodo di tempo.',
            warningSigns: [
                'Notifica di "Tracker rilevato" sul telefono.',
                'Senti un debole segnale acustico provenire dai tuoi oggetti o dall\'auto.',
                'Il tuo smartphone ti mostra una mappa degli spostamenti fatti insieme al tracker sconosciuto.'
            ],
            doNow: [
                'Usa l\'app "Dov\'è" (iPhone) o le impostazioni di sistema (Android) per far suonare il tracker e individuarlo fisicamente.',
                'Se trovi il tracker, non distruggerlo: scansionalo con l\'NFC del telefono (avvicinandolo) per vedere il numero di serie e le ultime 4 cifre del telefono del proprietario.',
                'Disattiva il tracker togliendo la batteria (ruotando il coperchio posteriore in senso antiorario per gli AirTag).',
                'Se ti senti in pericolo immediato, recati in un luogo pubblico o direttamente in una caserma delle Forze dell\'Ordine.'
            ],
            dontDo: [
                'Non andare a casa tua o in luoghi privati se hai scoperto il tracker e non lo hai ancora disattivato: lo stalker vedrebbe l\'indirizzo sulla mappa.',
                'Non buttare il tracker: è una prova fondamentale per la Polizia per risalire al colpevole tramite il numero di serie.'
            ],
            preserveEvidence: [
                'Fai uno screenshot della notifica e della mappa degli spostamenti mostrata dal tuo telefono.',
                'Fotografa il numero di serie che appare quando scansioni il tracker con il tuo smartphone.'
            ],
            askHelpWhen: [
                'Sempre, se il tracker è stato trovato in un luogo nascosto (auto, fodera borsa): indica un intento persecutorio chiaro.'
            ],
            whoCanHelp: [
                'Polizia Postale / Carabinieri',
                'Supporto Apple (per AirTag)',
                'Supporto Google (per avvisi Android)'
            ],
            checklist: [
                'Individua con suono',
                'Scansiona per seriale',
                'Disattiva batteria',
                'Consegna alla Polizia'
            ],
            sources: [
                {
                    title: 'Cosa fare se ricevi un avviso che un AirTag è con te',
                    organization: 'Apple Support',
                    url: 'https://support.apple.com/it-it/102146',
                    type: 'platform',
                    usedFor: 'Procedure ufficiali di rilevamento e disattivazione sicurezza.',
                    lastCheckedAt: '2026-05-14'
                },
                {
                    title: 'Rilevamento di tracker sconosciuti su Android',
                    organization: 'Google Help',
                    url: 'https://support.google.com/android/answer/13659628',
                    type: 'platform',
                    usedFor: 'Guida tecnica per utenti Android sugli avvisi di tracciamento.',
                    lastCheckedAt: '2026-05-14'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        },
        {
            id: 'spyware-check-guide',
            slug: 'come-capire-se-hai-virus-spia-spyware-smartphone',
            title: 'Come capire se hai uno Spyware',
            mainEntity: 'Coalition Against Stalkerware',
            category: 'privacy',
            audience: ['adults', 'victims'],
            level: 'medio',
            estimatedMinutes: 8,
            summary: 'Tecniche avanzate per rilevare la presenza di software spia (stalkerware) che registra le tue chiamate e legge le tue chat.',
            status: 'published',
            emergencyLevel: 'high',
            scenario: 'Il tuo telefono si comporta in modo strano: scotta anche quando non lo usi, la batteria crolla in poche ore e lo schermo si accende da solo di notte. Sospetti che qualcuno possa spiarti.',
            question: 'Esiste un virus che può leggere WhatsApp anche se è criptato?',
            whatIsHappening: 'Lo "Stalkerware" è un software che viene installato fisicamente sul tuo telefono (spesso da qualcuno che ha la tua password di sblocco). Non legge WhatsApp "bucando" la crittografia, ma scatta screenshot dello schermo o registra i tasti premuti (keylogging).',
            warningSigns: [
                'Surriscaldamento eccessivo del dispositivo quando è a riposo.',
                'Consumo anomalo di dati mobili (lo spyware invia i tuoi dati all\'hacker).',
                'Ricezione di SMS con stringhe di codice senza senso.',
                'Su Android: Presenza di app con nomi generici come "System Service" o "Wi-Fi Update" che hanno permessi di amministratore.'
            ],
            doNow: [
                'Controlla la lista delle app con "Accesso speciale / Amministratori del dispositivo" nelle impostazioni.',
                'Verifica se sul telefono è presente un profilo MDM (Mobile Device Management) non aziendale.',
                'Attiva il "Safe Mode" (Modalità provvisoria) per vedere se i comportamenti strani cessano.',
                'Se il rischio è alto, esegui un ripristino totale ai dati di fabbrica (Factory Reset) dopo aver salvato solo le foto e i contatti (non i backup delle app).'
            ],
            dontDo: [
                'Non cambiare le password principali dallo stesso telefono se sospetti ci sia un virus spia: l\'hacker vedrebbe le nuove password mentre le digiti.',
                'Non sottovalutare il pericolo: chi installa spyware spesso è una persona vicina (partner, ex, familiare).'
            ],
            preserveEvidence: [
                'Fai un backup completo del telefono su un PC esterno prima di resettarlo: potrebbe servire per un\'analisi forense della Polizia.'
            ],
            askHelpWhen: [
                'Sempre. La rimozione di uno spyware può allertare lo stalker che ha perso l\'accesso, provocando una reazione violenta offline.'
            ],
            whoCanHelp: [
                'Coalition Against Stalkerware',
                'Polizia Postale',
                'Centri Antiviolenza'
            ],
            checklist: [
                'Check Admin Apps',
                'Monitora batteria/dati',
                'Reset fabbrica (se sicuro)',
                'Cambia pass da altro PC'
            ],
            sources: [
                {
                    title: 'Cos\'è lo stalkerware e come proteggersi',
                    organization: 'Coalition Against Stalkerware',
                    url: 'https://stopstalkerware.org/it/',
                    type: 'official',
                    usedFor: 'Indicatori di compromissione e gestione della sicurezza personale.',
                    lastCheckedAt: '2026-05-14'
                }
            ],
            lastReviewedAt: '2024-05-13',
            qualityGatePassed: true
        }
    ]
};
