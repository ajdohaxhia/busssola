import { Module } from '@/types';

export const modulo_26_poste_pagamenti: Module = {
    id: 'modulo-26-poste-pagamenti',
    lastUpdated: '2026-05-16',
    title: 'Poste, Pagamenti e Certificati',
    description: 'Guida pratica all\'uso dei servizi postali, dei sistemi di pagamento della Pubblica Amministrazione e alla gestione di deleghe e autocertificazioni.',
    category: 'documenti',
    difficulty: 'base',
    icon: 'Mail',
    themeColor: 'accent-orange',
    lessons: [
        {
            id: 'pagopa-sicuro',
            slug: 'come-usare-pagopa-sicuro',
            title: 'PagoPA: come pagare in sicurezza',
            category: 'documenti',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Tutto quello che devi sapere per pagare tasse, multe e rette scolastiche online o sul territorio con il sistema PagoPA.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'pagoPA S.p.A.',
            synthesis: 'Sistema unico di pagamenti verso la Pubblica Amministrazione, tracciabile e sicuro.',
            whenToDo: 'Quando ricevi un avviso di pagamento con il logo PagoPA (multe, TARI, bollo auto, mense).',
            steps: [
                'Inquadra il QR code sull\'avviso con l\'App IO o con la tua App bancaria',
                'In alternativa, inserisci il codice IUV (Identificativo Unico di Versamento) sul sito dell\'ente',
                'Scegli il metodo di pagamento (carta, conto corrente, punti vendita)',
                'Conserva la ricevuta digitale che vale come quietanza di pagamento'
            ],
            doNow: [
                'Scarica l\'App IO per ricevere gli avvisi direttamente sul telefono',
                'Verifica la presenza del logo PagoPA sull\'avviso'
            ],
            checklist: [
                'Logo PagoPA verificato',
                'Codice IUV inserito correttamente',
                'Pagamento effettuato',
                'Ricevuta scaricata e salvata'
            ],
            officialLinks: ['https://www.pagopa.gov.it/'],
            sources: [
                {
                    title: 'Cos\'è pagoPA',
                    organization: 'pagoPA S.p.A.',
                    url: 'https://www.pagopa.gov.it/',
                    type: 'official',
                    usedFor: 'Descrizione servizio',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'app-io-guida',
            slug: 'guida-app-io-servizi-pubblici',
            title: 'App IO: i servizi pubblici in tasca',
            category: 'documenti',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 12,
            summary: 'Come configurare e usare l\'app che aggrega i servizi di INPS, Agenzia Entrate, Comuni e molto altro.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'pagoPA S.p.A.',
            synthesis: 'Punto unico di accesso telematico ai servizi della Pubblica Amministrazione.',
            whenToDo: 'Subito, per ricevere notifiche su scadenze, bonus e pagamenti in corso.',
            steps: [
                'Scarica l\'App IO dagli store ufficiali',
                'Accedi con SPID o CIE',
                'Configura i tuoi metodi di pagamento nel portafoglio',
                'Attiva le notifiche per i servizi del tuo Comune'
            ],
            doNow: [
                'Fai l\'accesso con SPID/CIE',
                'Controlla se ci sono messaggi in arrivo'
            ],
            checklist: [
                'App installata',
                'Accesso SPID/CIE effettuato',
                'Metodi di pagamento configurati',
                'Notifiche attivate'
            ],
            officialLinks: ['https://io.italia.it/'],
            sources: [
                {
                    title: 'App IO - Sito ufficiale',
                    organization: 'pagoPA S.p.A.',
                    url: 'https://io.italia.it/',
                    type: 'official',
                    usedFor: 'Descrizione funzionalità',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'pec-disdetta-reclamo',
            slug: 'come-usare-pec-disdetta-reclamo',
            title: 'PEC: come fare disdette e reclami',
            category: 'documenti',
            audience: ['cittadini', 'lavoratori'],
            level: 'intermedia',
            estimatedMinutes: 15,
            summary: 'La Posta Elettronica Certificata ha lo stesso valore legale di una raccomandata. Impara a usarla per far valere i tuoi diritti.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'AgID',
            synthesis: 'Utilizzo della PEC per comunicazioni formali con valore legale di raccomandata A/R.',
            whenToDo: 'Per disdire abbonamenti, inviare reclami formali o partecipare a concorsi pubblici.',
            steps: [
                'Cerca l\'indirizzo PEC del destinatario (spesso su INI-PEC o sul sito ufficiale)',
                'Invia il messaggio dal tuo indirizzo PEC (non da una mail normale)',
                'Controlla di aver ricevuto le due ricevute: "Accettazione" e "Consegna"',
                'Conserva le ricevute: sono la tua prova legale'
            ],
            doNow: [
                'Cerca la PEC dell\'azienda a cui vuoi inviare il reclamo',
                'Prepara l\'oggetto della mail con scritto "RECLAMO" o "DISDETTA"'
            ],
            dontDo: [
                'Non cancellare le ricevute di consegna',
                'Non inviare mail normali a indirizzi PEC (spesso vengono rifiutate o non hanno valore legale)'
            ],
            checklist: [
                'Indirizzo PEC destinatario corretto',
                'Oggetto chiaro e formale',
                'Allegati in PDF (preferibile)',
                'Ricevuta di accettazione ricevuta',
                'Ricevuta di consegna ricevuta'
            ],
            sources: [
                {
                    title: 'PEC - Linee guida',
                    organization: 'AgID',
                    url: 'https://www.agid.gov.it/',
                    type: 'official',
                    usedFor: 'Definizione legale',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'raccomandata-ar-guida',
            slug: 'come-fare-raccomandata-ar-poste',
            title: 'Raccomandata A/R: guida pratica',
            category: 'documenti',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Come spedire una raccomandata con ricevuta di ritorno, sia dall\'ufficio postale che online.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Poste Italiane',
            synthesis: 'Servizio postale con prova di invio e di ricezione da parte del destinatario.',
            whenToDo: 'Quando devi inviare documenti fisici che richiedono una prova di ricezione legale.',
            steps: [
                'Prepara la busta chiusa con indirizzo mittente e destinatario',
                'Compila il modulo "Raccomandata" e la "Cartolina di ritorno" (colore ARANCIONE)',
                'In alternativa, usa il sito di Poste Italiane per fare la raccomandata online (Poste la stampa e la consegna per te)',
                'Conserva la ricevuta con il codice di tracciamento'
            ],
            doNow: [
                'Valuta se puoi usare la PEC (risparmi tempo e soldi)',
                'Se usi la posta fisica, assicurati di scrivere bene il CAP'
            ],
            checklist: [
                'Indirizzi mittente/destinatario verificati',
                'Modulo AR compilato correttamente',
                'Ricevuta di invio conservata',
                'Tracciamento effettuato online (opzionale)',
                'Ricevuta di ritorno (cartolina arancione) ricevuta e conservata'
            ],
            officialLinks: ['https://www.poste.it/prodotti/raccomandata.html'],
            sources: [
                {
                    title: 'Poste Italiane - Raccomandata',
                    organization: 'Poste Italiane',
                    url: 'https://www.poste.it/',
                    type: 'official',
                    usedFor: 'Procedure postali',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'posteid-spid-recupero',
            slug: 'recupero-credenziali-posteid-spid',
            title: 'PosteID/SPID: recupero credenziali',
            category: 'documenti',
            audience: ['cittadini', 'anziani'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Dimenticato la password o il codice PosteID? Ecco come ripristinare l\'accesso allo SPID più usato in Italia.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Poste Italiane',
            synthesis: 'Procedura di reset password e ripristino codice di sicurezza per l\'Identità Digitale PosteID.',
            whenToDo: 'Quando non ricordi la password o se l\'App PosteID ti chiede un codice che non ricordi.',
            steps: [
                'Vai sulla pagina di login di PosteID',
                'Clicca su "Hai dimenticato il nome utente o la password?"',
                'Inserisci il tuo codice fiscale e segui le istruzioni via mail o SMS',
                'Per il "Codice PosteID" dell\'app, potresti dover resettare l\'app e riconfigurarla con le nuove credenziali'
            ],
            doNow: [
                'Tieni a portata di mano il cellulare associato allo SPID',
                'Controlla la tua mail'
            ],
            checklist: [
                'Codice fiscale inserito',
                'Link di reset ricevuto via mail',
                'Nuova password impostata',
                'App PosteID riattivata',
                'Test di accesso effettuato'
            ],
            officialLinks: ['https://posteid.poste.it/'],
            sources: [
                {
                    title: 'Assistenza PosteID',
                    organization: 'Poste Italiane',
                    url: 'https://posteid.poste.it/assistenza.shtml',
                    type: 'official',
                    usedFor: 'Procedure recupero',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'bollettini-pagopa-differenze',
            slug: 'differenza-bollettini-avvisi-pagopa',
            title: 'Bollettini e avvisi PagoPA: differenze',
            category: 'documenti',
            audience: ['cittadini', 'anziani'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Bollettino postale bianco, premarcato o avviso PagoPA? Impara a distinguerli per non sbagliare ufficio o app.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Confronto tra i diversi modelli di pagamento cartacei e digitali.',
            whenToDo: 'Quando hai un foglio in mano e devi decidere come pagarlo.',
            steps: [
                'Cerca il logo PagoPA (due frecce che si incontrano): se c\'è, usa PagoPA',
                'Cerca il codice numerico a 18 cifre (IUV): tipico di PagoPA',
                'Se trovi un numero di conto corrente postale (es. 12345678) è un bollettino classico',
                'I bollettini bianchi vanno compilati a mano, quelli premarcati hanno già i tuoi dati'
            ],
            checklist: [
                'Logo identificato',
                'Codice IUV o CC individuato',
                'Metodo di pagamento scelto (App vs Tabaccaio)',
                'Quietanza ottenuta'
            ],
            sources: [
                {
                    title: 'Guida ai pagamenti',
                    organization: 'pagoPA S.p.A.',
                    url: 'https://www.pagopa.gov.it/',
                    type: 'official',
                    usedFor: 'Chiarimenti modelli',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'f24-orientamento-base',
            slug: 'modello-f24-spiegazione-base',
            title: 'F24: orientamento base',
            category: 'documenti',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 15,
            summary: 'Il modello F24 serve per pagare quasi tutte le tasse (IMU, Tari, Irpef). Ecco come si legge e come si paga online.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Agenzia delle Entrate',
            synthesis: 'Modello unificato per il pagamento di imposte, tasse e contributi.',
            whenToDo: 'Per scadenze fiscali comunicate dal commercialista, dal Comune o dall\'Agenzia delle Entrate.',
            steps: [
                'Controlla la "Sezione" (es. IMU e altri tributi locali)',
                'Verifica il "Codice Tributo" (es. 3912 per l\'abitazione principale IMU)',
                'Inserisci l\'anno di riferimento',
                'Paga tramite l\'home banking della tua banca o il sito dell\'Agenzia delle Entrate'
            ],
            doNow: [
                'Verifica se la tua banca ha la sezione "Pagamento F24"',
                'Controlla i codici tributo sull\'avviso ricevuto'
            ],
            checklist: [
                'Codice fiscale corretto',
                'Codice tributo verificato',
                'Anno di riferimento corretto',
                'Importo inserito correttamente',
                'Ricevuta telematica salvata'
            ],
            officialLinks: ['https://www.agenziaentrate.gov.it/portale/f24'],
            sources: [
                {
                    title: 'F24 - Istruzioni',
                    organization: 'Agenzia delle Entrate',
                    url: 'https://www.agenziaentrate.gov.it/',
                    type: 'official',
                    usedFor: 'Guida tributaria',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'iban-verifica-bonifici',
            slug: 'verifica-iban-sicurezza-bonifici',
            title: 'IBAN: verifica e bonifici sicuri',
            category: 'documenti',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 8,
            summary: 'Come leggere un IBAN e come essere sicuri di non inviare soldi al destinatario sbagliato.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Struttura dell\'International Bank Account Number e controlli di sicurezza pre-invio.',
            whenToDo: 'Prima di confermare un bonifico, specialmente se è la prima volta verso quel destinatario.',
            steps: [
                'Verifica che l\'IBAN inizi con "IT" per l\'Italia',
                'Usa un calcolatore di IBAN online per verificare la correttezza formale del codice',
                'Inserisci correttamente il nome del destinatario (beneficiario)',
                'Controlla bene la causale: è fondamentale per rintracciare il pagamento'
            ],
            dontDo: [
                'Non fidarti di IBAN inviati via SMS o mail senza una conferma vocale (rischio truffa Man-in-the-mail)',
                'Non fare bonifici istantanei a sconosciuti su siti di annunci'
            ],
            checklist: [
                'IBAN completo (27 caratteri per IT)',
                'Beneficiario verificato',
                'Causale inserita',
                'Esecuzione bonifico confermata',
                'Ricevuta PDF scaricata'
            ],
            sources: [
                {
                    title: 'Sicurezza pagamenti',
                    organization: 'Banca d\'Italia',
                    url: 'https://www.bancaditalia.it/',
                    type: 'official',
                    usedFor: 'Standard di sicurezza',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'deleghe-semplici-guida',
            slug: 'come-scrivere-delega-semplice',
            title: 'Deleghe semplici: come scriverle',
            category: 'documenti',
            audience: ['cittadini', 'anziani'],
            level: 'base',
            estimatedMinutes: 5,
            summary: 'Non puoi andare a ritirare un pacco o un documento? Impara a scrivere una delega valida in 2 minuti.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            synthesis: 'Atto con cui una persona autorizza un\'altra a compiere azioni per proprio conto.',
            whenToDo: 'Per ritiro posta, documenti in Comune, o pratiche semplici.',
            steps: [
                'Scrivi i tuoi dati (delegante): Nome, Cognome, Luogo e data di nascita, Codice Fiscale',
                'Scrivi i dati di chi ritira (delegato): Nome, Cognome, Luogo e data di nascita',
                'Specifica l\'oggetto: "Delega a ritirare la raccomandata n. X"',
                'Firma in modo leggibile',
                'Allega sempre una fotocopia del tuo documento d\'identità (fronte/retro)'
            ],
            doNow: [
                'Prepara una fotocopia della tua carta d\'identità',
                'Firma la delega'
            ],
            checklist: [
                'Dati delegante inseriti',
                'Dati delegato inseriti',
                'Oggetto specifico indicato',
                'Firma autografa presente',
                'Copia documento delegante allegata'
            ],
            sources: [
                {
                    title: 'Modulistica deleghe',
                    organization: 'Comuni d\'Italia',
                    url: 'https://www.anagrafenazionale.interno.it/',
                    type: 'official',
                    usedFor: 'Prassi amministrativa',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'autocertificazioni-guida',
            slug: 'come-fare-autocertificazione-valida',
            title: 'Autocertificazioni: cosa sono e come usarle',
            category: 'documenti',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Risparmia tempo e soldi: per molti documenti non serve andare in ufficio, basta una tua dichiarazione firmata.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            mainEntity: 'Ministro per la Pubblica Amministrazione',
            synthesis: 'Dichiarazione sostitutiva di certificazione prevista dal DPR 445/2000.',
            whenToDo: 'Per dichiarare residenza, stato di famiglia, titolo di studio o nascita verso uffici pubblici o gestori di servizi pubblici.',
            steps: [
                'Scarica un modulo di autocertificazione (es. dal sito ANPR o dal sito del tuo Comune)',
                'Compila i campi con i tuoi dati reali',
                'Firma il documento (non serve la marca da bollo)',
                'Ricorda: la Pubblica Amministrazione è OBBLIGATA ad accettarla al posto dei certificati'
            ],
            doNow: [
                'Scarica il certificato/autocertificazione dall\'ANPR con SPID',
                'Verifica se il destinatario è un ufficio pubblico'
            ],
            dontDo: [
                'Non dichiarare il falso: è un reato penale',
                'Non usare l\'autocertificazione verso i privati (banche, assicurazioni) a meno che non lo accettino esplicitamente'
            ],
            checklist: [
                'Modulo corretto scelto',
                'Dati anagrafici completi',
                'Firma autografa apposta',
                'Documento d\'identità pronto da esibire/allegare',
                'Verifica che il destinatario sia un ente pubblico o gestore di pubblico servizio'
            ],
            officialLinks: ['https://www.anagrafenazionale.interno.it/area-cittadino/certificati/'],
            sources: [
                {
                    title: 'Dichiarazioni sostitutive',
                    organization: 'Dipartimento della Funzione Pubblica',
                    url: 'https://www.funzionepubblica.gov.it/',
                    type: 'official',
                    usedFor: 'Riferimento normativo',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        }
    ]
};