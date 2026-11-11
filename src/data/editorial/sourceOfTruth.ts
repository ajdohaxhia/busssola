/**
 * BUSSSOLA SOURCE-OF-TRUTH EDITORIAL LEDGER
 * 
 * Central registry mapping civic measures, tax provisions, and public procedures
 * to verified primary official sources (.gov.it), issuing authorities, legal status,
 * and review timestamps.
 * 
 * Strictly preserves E-E-A-T and factual accuracy:
 * - Legal status: 'enacted' (legge in vigore), 'proposed' (proposta/disegno di legge), 'expired' (terminata/scaduta), 'temporary' (misura una tantum/transitoria)
 * - Reviewer status: 'reviewed' (verificato su fonte primaria), 'pending' (in attesa di pubblicazione decreto), 'flagged' (sotto revisione)
 */

export type LegalStatus = 'enacted' | 'proposed' | 'expired' | 'temporary'
export type ReviewerStatus = 'reviewed' | 'pending' | 'flagged'
export type GeographicScope = 'nazionale' | 'regionale' | 'comunale'

export interface EditorialFactRecord {
    id: string
    measureTitle: string
    topicCluster: 'bonus' | 'fisco' | 'lavoro' | 'pensioni' | 'documenti' | 'casa' | 'sicurezza' | 'scuola'
    primarySourceUrl: string
    issuingAuthority: string
    officialActReference: string // e.g. "Legge 213/2023", "D.L. 113/2024 art. 2-bis", "Circolare AdE 19/E"
    publicationDate: string // YYYY-MM-DD
    lastVerifiedDate: string // YYYY-MM-DD
    effectiveDate?: string // YYYY-MM-DD
    legalStatus: LegalStatus
    reviewerStatus: ReviewerStatus
    geographicApplicability: GeographicScope
    applicabilityYear: string // e.g. "2024", "2025", "2026", "2027", "strutturale"
    substantiveSummary: string
    caveatsAndLimitations?: string
    internalUrl: string
}

export const EDITORIAL_SOURCE_OF_TRUTH: Record<string, EditorialFactRecord> = {
    'bonus-natale-100-euro': {
        id: 'bonus-natale-100-euro',
        measureTitle: 'Indennità una tantum per lavoratori dipendenti con figli (Bonus Natale)',
        topicCluster: 'lavoro',
        primarySourceUrl: 'https://www.agenziaentrate.gov.it/portale/circolari-e-risoluzioni-bonus-natale-lavoratori',
        issuingAuthority: 'Ministero dell’Economia e delle Finanze / Agenzia delle Entrate',
        officialActReference: 'D.L. 9 agosto 2024, n. 113 art. 2-bis; D.L. 14 novembre 2024, n. 167; Circolare AdE n. 19/E',
        publicationDate: '2024-11-14',
        lastVerifiedDate: '2026-11-08',
        effectiveDate: '2024-11-15',
        legalStatus: 'temporary',
        reviewerStatus: 'reviewed',
        geographicApplicability: 'nazionale',
        applicabilityYear: '2024 (recuperabile nel 730)',
        substantiveSummary: 'Indennità fino a 100 euro netti per lavoratori dipendenti con reddito fino a 28.000 euro e almeno un figlio a carico. Non è una misura strutturale automatica per gli anni successivi.',
        caveatsAndLimitations: 'Chi non ha presentato la richiesta scritta al datore per la tredicesima può recuperare la somma a credito nel Modello 730.',
        internalUrl: '/novita/bonus-natale-100-euro-guida-modulo-noipa-2026',
    },
    'canone-rai-esenzione': {
        id: 'canone-rai-esenzione',
        measureTitle: 'Esenzione Canone RAI per non detenzione apparecchio televisivo (Quadro A)',
        topicCluster: 'casa',
        primarySourceUrl: 'https://www.agenziaentrate.gov.it/portale/schede/agevolazioni/canone-tv/dichiarazione-sostitutiva-canone-tv',
        issuingAuthority: 'Agenzia delle Entrate / RAI',
        officialActReference: 'R.D.L. 21 febbraio 1938, n. 246; Legge 28 dicembre 2015, n. 208 art. 1 cc. 152-164',
        publicationDate: '2016-01-01',
        lastVerifiedDate: '2026-11-08',
        legalStatus: 'enacted',
        reviewerStatus: 'reviewed',
        geographicApplicability: 'nazionale',
        applicabilityYear: 'strutturale (rinnovo annuale entro il 31 gennaio)',
        substantiveSummary: 'Dichiarazione sostitutiva di atto notorio per chi non possiede TV in alcuna abitazione. Tariffa ordinaria di legge 90€ (addebitata in bolletta in rate da 9€), salvo norme temporanee di riduzione.',
        caveatsAndLimitations: 'Deve essere rinnovata ogni anno entro il 31 gennaio per avere validità sui 12 mesi; tra febbraio e giugno vale solo per il secondo semestre.',
        internalUrl: '/scadenze/2027',
    },
    'esclusione-btp-isee': {
        id: 'esclusione-btp-isee',
        measureTitle: 'Esclusione Titoli di Stato e Buoni Fruttiferi Postali dall’ISEE fino a 50.000€',
        topicCluster: 'bonus',
        primarySourceUrl: 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.50088.isee-precompilato.html',
        issuingAuthority: 'Ministero del Lavoro e delle Politiche Sociali / INPS',
        officialActReference: 'Legge 30 dicembre 2023, n. 213 art. 1 c. 183; D.P.C.M. di attuazione regolamento ISEE',
        publicationDate: '2024-01-01',
        lastVerifiedDate: '2026-11-08',
        legalStatus: 'enacted',
        reviewerStatus: 'reviewed',
        geographicApplicability: 'nazionale',
        applicabilityYear: '2025-2027',
        substantiveSummary: 'I primi 50.000 euro di BOT, BTP, CCT e Buoni Fruttiferi Postali garantiti dallo Stato non concorrono al calcolo dell’indicatore della situazione patrimoniale mobiliare ISEE.',
        caveatsAndLimitations: 'I titoli vanno comunque indicati nel quadro mobiliare della DSU; l’INPS provvede all’abbattimento automatico fino a concorrenza del massimale.',
        internalUrl: '/isee-2027',
    },
    'assegno-unico-universale': {
        id: 'assegno-unico-universale',
        measureTitle: 'Assegno Unico e Universale per i figli a carico (AUU)',
        topicCluster: 'bonus',
        primarySourceUrl: 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.50616.assegno-unico-e-universale-per-i-figli-a-carico.html',
        issuingAuthority: 'INPS',
        officialActReference: 'D.Lgs. 21 dicembre 2021, n. 230 e s.m.i.',
        publicationDate: '2021-12-21',
        lastVerifiedDate: '2026-11-08',
        legalStatus: 'enacted',
        reviewerStatus: 'reviewed',
        geographicApplicability: 'nazionale',
        applicabilityYear: 'strutturale',
        substantiveSummary: 'Sostegno economico universale per ogni figlio a carico dal 7° mese di gravidanza fino ai 21 anni (senza limiti per figli con disabilità). Importi rivalutati all’inflazione ISTAT.',
        caveatsAndLimitations: 'Rinnovo obbligatorio della DSU ISEE entro fine febbraio di ogni anno per evitare la decurtazione all’importo minimo a partire da marzo.',
        internalUrl: '/bonus-2027',
    },
    'secondo-acconto-imposte': {
        id: 'secondo-acconto-imposte',
        measureTitle: 'Secondo o unico acconto imposte sui redditi e imposte sostitutive',
        topicCluster: 'fisco',
        primarySourceUrl: 'https://www.agenziaentrate.gov.it/portale/schede/pagamenti/imposte-sui-redditi-secondo-acconto',
        issuingAuthority: 'Agenzia delle Entrate',
        officialActReference: 'D.P.R. 22 dicembre 1986, n. 917 (TUIR); D.Lgs. 8 gennaio 2024, n. 1',
        publicationDate: '2024-01-12',
        lastVerifiedDate: '2026-11-08',
        legalStatus: 'enacted',
        reviewerStatus: 'reviewed',
        geographicApplicability: 'nazionale',
        applicabilityYear: 'annuale (scadenza 30 novembre)',
        substantiveSummary: 'Versamento della seconda rata di acconto per IRPEF, imposta sostitutiva forfettari e cedolare secca tramite Modello F24.',
        caveatsAndLimitations: 'Possibilità di rateizzazione in 5 rate mensili (gennaio-maggio) riservata a persone fisiche titolari di partita IVA con ricavi fino a 170.000€.',
        internalUrl: '/guide/f24-acconti',
    },
    'rottamazione-quater': {
        id: 'rottamazione-quater',
        measureTitle: 'Definizione agevolata delle cartelle esattoriali (Rottamazione-quater)',
        topicCluster: 'fisco',
        primarySourceUrl: 'https://www.agenziaentrateriscossione.gov.it/it/Per-saperne-di-piu/definizione-agevolata-rottamazione-quater-scadenze/',
        issuingAuthority: 'Agenzia delle Entrate-Riscossione',
        officialActReference: 'Legge 29 dicembre 2022, n. 197 art. 1 cc. 231-252; D.L. 9 agosto 2024, n. 113',
        publicationDate: '2024-08-10',
        lastVerifiedDate: '2026-11-08',
        legalStatus: 'enacted',
        reviewerStatus: 'reviewed',
        geographicApplicability: 'nazionale',
        applicabilityYear: '2023-2027',
        substantiveSummary: 'Pagamento del solo capitale originario iscritto a ruolo senza sanzioni, interessi di mora né aggio.',
        caveatsAndLimitations: 'Termine perentorio: il mancato, parziale o tardivo pagamento oltre i 5 giorni di tolleranza comporta la decadenza definitiva dal piano agevolato.',
        internalUrl: '/scadenze',
    },
    'perequazione-pensioni-2027': {
        id: 'perequazione-pensioni-2027',
        measureTitle: 'Rivalutazione annuale all’inflazione dei trattamenti pensionistici (Perequazione 2027)',
        topicCluster: 'pensioni',
        primarySourceUrl: 'https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.11.perequazione-pensioni-decorrenza-gennaio-2027.html',
        issuingAuthority: 'INPS / Ministero dell’Economia e delle Finanze',
        officialActReference: 'Legge 23 dicembre 1998, n. 448 art. 34; Nota INPS 11 novembre 2026',
        publicationDate: '2026-11-11',
        lastVerifiedDate: '2026-11-11',
        effectiveDate: '2027-01-01',
        legalStatus: 'enacted',
        reviewerStatus: 'reviewed',
        geographicApplicability: 'nazionale',
        applicabilityYear: '2027',
        substantiveSummary: 'Adeguamento degli assegni pensionistici all’indice ISTAT del costo della vita. Confermata l’erogazione a regime dal 1° gennaio 2027 per tutte le fasce di importo.',
        caveatsAndLimitations: 'La percentuale piena del 100% dell’indice si applica ai trattamenti fino a 4 volte il minimo; percentuali inferiori per gli scaglioni superiori.',
        internalUrl: '/novita/inps-perequazione-pensioni-conferma-gennaio-2027',
    },
    'falsi-allarmi-scuole-protocollo': {
        id: 'falsi-allarmi-scuole-protocollo',
        measureTitle: 'Gestione delle emergenze e protocolli di evacuazione plessi scolastici per minacce telematiche',
        topicCluster: 'scuola',
        primarySourceUrl: 'https://www.miur.gov.it/web/guest/-/sicurezza-scuole-comunicazioni-istituzionali',
        issuingAuthority: 'Ministero dell’Istruzione e del Merito / Ministero dell’Interno',
        officialActReference: 'D.Lgs. 9 aprile 2008, n. 81; Comunicazione MIM 11 novembre 2026; Artt. 658 e 340 Codice Penale',
        publicationDate: '2026-11-11',
        lastVerifiedDate: '2026-11-11',
        legalStatus: 'enacted',
        reviewerStatus: 'reviewed',
        geographicApplicability: 'nazionale',
        applicabilityYear: 'strutturale',
        substantiveSummary: 'Protocollo di sicurezza per dirigenti scolastici e prefetture in caso di minacce o cyber-allarmi: evacuazione precauzionale ordinata, bonifica tempestiva delle Forze dell’Ordine e rapido ripristino delle lezioni con esclusione di pericoli.',
        caveatsAndLimitations: 'Diffusione di comunicazioni esclusivamente tramite canali ufficiali d’istituto per prevenire reati di procurato allarme e congestione del 112.',
        internalUrl: '/novita/falsi-allarmi-bomba-scuole-11-novembre-2026-polizia-postale-mim',
    },
}
