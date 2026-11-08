import type { Source } from '@/types'

export interface CivicDeadline {
    id: string
    date: string // YYYY-MM-DD
    title: string
    category: 'fisco' | 'inps' | 'casa' | 'scuola' | 'famiglia' | 'lavoro'
    entity: string
    summary: string
    whoIsAffected: string
    whatToDo: string
    whatHappensIfNot: string
    modelLink?: string
    guideLink?: string
    newsLink?: string
    sources: Source[]
    lastReviewedAt: string
}

const D = '2026-11-08'

const src = (title: string, organization: string, url: string): Source => ({
    title,
    organization,
    url,
    type: 'official',
    usedFor: 'Scadenza e adempimento ufficiale',
    lastCheckedAt: D,
})

export const CIVIC_DEADLINES: CivicDeadline[] = [
    {
        id: 'secondo-acconto-imposte-2026',
        date: '2026-11-30',
        title: 'Secondo o unico acconto imposte sui redditi (IRPEF, IRES, forfettari, cedolare)',
        category: 'fisco',
        entity: 'Agenzia delle Entrate',
        summary: 'Versamento della seconda rata di acconto per l’anno d’imposta 2026 tramite Modello F24. Possibilità di rateizzazione in 5 rate (gennaio-maggio 2027) per persone fisiche con ricavi sotto i 170.000€.',
        whoIsAffected: 'Lavoratori autonomi, titolari di partita IVA, dipendenti con altri redditi e proprietari con cedolare secca.',
        whatToDo: 'Calcola l’importo con metodo storico o previsionale e invia l’F24 telematico entro il 30 novembre.',
        whatHappensIfNot: 'Sanzione ordinaria del 30% sul non versato, riducibile con ravvedimento operoso sprint.',
        guideLink: '/moduli/modulo-25-fisco-cittadini',
        newsLink: '/novita/secondo-acconto-imposte-novembre-2026',
        sources: [
            src('Scadenza secondo acconto', 'Agenzia delle Entrate', 'https://www.agenziaentrate.gov.it/portale/schede/pagamenti/imposte-sui-redditi-secondo-acconto'),
        ],
        lastReviewedAt: D,
    },
    {
        id: 'rottamazione-quater-sesta-rata',
        date: '2026-11-30',
        title: 'Rottamazione-quater: sesta rata definizione agevolata cartelle esattoriali',
        category: 'fisco',
        entity: 'Agenzia delle Entrate-Riscossione',
        summary: 'Scadenza della sesta rata della rottamazione-quater per i contribuenti ammessi ai piani di dilazione. Si applicano i consueti 5 giorni di tolleranza di legge (pagamento valido fino al 9 dicembre 2026).',
        whoIsAffected: 'Contribuenti che hanno aderito alla definizione agevolata delle cartelle esattoriali.',
        whatToDo: 'Paga con il bollettino allegato alla comunicazione delle somme dovute via home banking, tabaccaio o sportello.',
        whatHappensIfNot: 'Decadenza automatica e irreversibile dai benefici della rottamazione con ripristino di sanzioni e interessi.',
        modelLink: '/modelli/cartelle-ader',
        newsLink: '/novita/rottamazione-quater-scadenza-sesta-rata-novembre-2026',
        sources: [
            src('Definizione agevolata scadenze', 'Agenzia delle Entrate-Riscossione', 'https://www.agenziaentrateriscossione.gov.it/it/Per-saperne-di-piu/definizione-agevolata-rottamazione-quater-scadenze/'),
        ],
        lastReviewedAt: D,
    },
    {
        id: 'richiesta-bonus-natale-tredicesima',
        date: '2026-12-10',
        title: 'Bonus Natale fino a 100€: richiesta al datore di lavoro o su NoiPA prima della tredicesima',
        category: 'lavoro',
        entity: 'MEF / Agenzia delle Entrate / NoiPA',
        summary: 'Termine operativo per consegnare l’autocertificazione scritta al datore di lavoro o completare la procedura su NoiPA per ricevere fino a 100€ netti con la busta paga di dicembre (D.L. 167/2024: aperto a conviventi e genitori soli).',
        whoIsAffected: 'Lavoratori dipendenti con reddito annuo fino a 28.000€, capienza IRPEF lorda e almeno un figlio a carico.',
        whatToDo: 'Invia l’autocertificazione con codici fiscali di figli e coniuge/convivente prima dell’elaborazione cedolini.',
        whatHappensIfNot: 'Non perdi il diritto: potrai recuperare l’importo a credito nella dichiarazione 730/2027.',
        modelLink: '/modelli/bonus-natale-100-euro',
        guideLink: '/moduli/modulo-25-fisco-cittadini',
        newsLink: '/novita/bonus-natale-100-euro-guida-modulo-noipa-2026',
        sources: [
            src('Disposizioni Bonus Natale', 'MEF', 'https://www.mef.gov.it/focus/Bonus-Natale-lavoratori-dipendenti/'),
        ],
        lastReviewedAt: D,
    },
    {
        id: 'carta-dedicata-a-te-primo-acquisto',
        date: '2026-12-16',
        title: 'Carta «Dedicata a te» 500€: termine perentorio primo acquisto nei negozi convenzionati',
        category: 'famiglia',
        entity: 'MASAF / INPS / Comuni',
        summary: 'I beneficiari che hanno ritirato la Postepay da 500 euro devono effettuare almeno una prima transazione (spesa alimentare o carburante) entro metà dicembre per attivare definitivamente la scheda.',
        whoIsAffected: 'Famiglie con ISEE fino a 15.000 euro assegnatarie della social card 2026.',
        whatToDo: 'Esegui almeno una spesa alimentare presso un supermercato o negozio convenzionato.',
        whatHappensIfNot: 'Decadenza irreversibile dal beneficio e blocco automatico della carta.',
        modelLink: '/modelli/carta-dedicata-a-te',
        newsLink: '/novita/carta-dedicata-a-te-scadenza-primo-acquisto-dicembre-2026',
        sources: [
            src('Scadenze utilizzo carta', 'MASAF', 'https://www.masaf.gov.it/focus-carta-dedicata-a-te-scadenze-utilizzo'),
        ],
        lastReviewedAt: D,
    },
    {
        id: 'saldo-imu-2026',
        date: '2026-12-16',
        title: 'Saldo IMU 2026: versamento conguaglio annuale con Modello F24',
        category: 'casa',
        entity: 'Ministero Economia e Finanze / Comuni',
        summary: 'Versamento della seconda rata a conguaglio dell’imposta municipale propria su seconde case, pertinenze eccedenti, aree fabbricabili e immobili commerciali, recepite le delibere comunali MEF.',
        whoIsAffected: 'Proprietari di immobili e possessori di abitazioni principali di lusso (A/1, A/8, A/9).',
        whatToDo: 'Verifica l’aliquota comunale sul portale Federalismo Fiscale, scomputa l’acconto di giugno e versa con F24.',
        whatHappensIfNot: 'Avviso di accertamento con sanzioni e interessi da parte del Comune; sanabile con ravvedimento operoso.',
        modelLink: '/modelli/saldo-imu-calcolo-f24',
        guideLink: '/moduli/modulo-30-catasto-imu-successioni',
        newsLink: '/novita/saldo-imu-16-dicembre-2026-calcolo-aliquote-f24-esenzioni',
        sources: [
            src('Delibere IMU comunali', 'Dipartimento delle Finanze', 'https://www.finanze.gov.it/it/Fiscalita-locale/Portale-del-Federalismo-Fiscale/aliquote-imu-comunali/'),
        ],
        lastReviewedAt: D,
    },
    {
        id: 'scadenza-validita-isee-2026',
        date: '2026-12-31',
        title: 'Scadenza di tutte le attestazioni ISEE elaborate nel 2026',
        category: 'inps',
        entity: 'INPS',
        summary: 'Tutte le DSU presentate nel corso del 2026 cessano di validità al 31 dicembre. Preparazione della documentazione patrimoniale e reddituale riferita all’anno 2025 per il rinnovo a inizio anno.',
        whoIsAffected: 'Tutti i percettori di Assegno Unico, ADI, bonus asilo nido, sconti mensa e borse di studio.',
        whatToDo: 'Scarica dagli home banking e da Poste le giacenze medie e i saldi al 31/12/2025 prima di Capodanno.',
        whatHappensIfNot: 'Dal 1° marzo l’Assegno Unico viene erogato con l’importo minimo base (circa 57€ a figlio).',
        modelLink: '/modelli/isee-dsu-mini',
        guideLink: '/moduli/modulo-23-bonus-isee',
        newsLink: '/novita/rinnovo-isee-2027-dsu-precompilata-documenti-giacenze-medie',
        sources: [
            src('ISEE Precompilato', 'INPS', 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.50088.isee-precompilato.html'),
        ],
        lastReviewedAt: D,
    },
    {
        id: 'esenzione-canone-rai-2027',
        date: '2027-01-31',
        title: 'Esenzione Canone RAI 2027: dichiarazione sostitutiva non detenzione TV (Quadro A)',
        category: 'casa',
        entity: 'Agenzia delle Entrate / RAI',
        summary: 'Termine perentorio per trasmettere la dichiarazione sostitutiva di non detenzione TV all’Agenzia delle Entrate e ottenere l’esonero totale dal pagamento di 70 euro per tutto l’anno solare 2027.',
        whoIsAffected: 'Intestatari di utenze elettriche domestiche che non possiedono alcun televisore in nessuna casa.',
        whatToDo: 'Compila il Quadro A nell’area riservata di agenziaentrate.gov.it o invia il modello via PEC.',
        whatHappensIfNot: 'Addebito automatico a rate del canone sulla bolletta della luce per il primo semestre 2027.',
        modelLink: '/modelli/esenzione-canone-rai-non-detenzione',
        guideLink: '/moduli/modulo-24-casa-digitale',
        newsLink: '/novita/canone-rai-2027-esenzione-non-detenzione-scadenza-31-gennaio',
        sources: [
            src('Canone TV esonero', 'Agenzia delle Entrate', 'https://www.agenziaentrate.gov.it/portale/schede/agevolazioni/canone-tv/dichiarazione-sostitutiva-canone-tv'),
        ],
        lastReviewedAt: D,
    },
    {
        id: 'iscrizioni-scuola-2027-2028',
        date: '2027-02-10',
        title: 'Iscrizioni scolastiche anno 2027/2028: domanda online su Piattaforma Unica',
        category: 'scuola',
        entity: 'Ministero dell’Istruzione e del Merito (MIM)',
        summary: 'Chiusura delle iscrizioni online alle prime classi delle scuole primarie, secondarie di I e II grado e percorsi di istruzione e formazione professionale (IeFP).',
        whoIsAffected: 'Famiglie con figli all’ultimo anno di asilo, scuola elementare o scuola media.',
        whatToDo: 'Accedi con SPID o CIE su unica.istruzione.gov.it, compila il modulo e inoltra la domanda.',
        whatHappensIfNot: 'Assegnazione d’ufficio in base alla disponibilità residua dei posti negli istituti scolastici.',
        guideLink: '/moduli/modulo-08-scuola-famiglia',
        sources: [
            src('Iscrizioni online', 'MIM', 'https://unica.istruzione.gov.it/it/orientamento/iscrizioni'),
        ],
        lastReviewedAt: D,
    },
    {
        id: 'certificazione-unica-2027',
        date: '2027-03-16',
        title: 'Certificazione Unica (CU 2027): rilascio da datori di lavoro e INPS',
        category: 'fisco',
        entity: 'Agenzia delle Entrate / Datori di lavoro / INPS',
        summary: 'Termine per la consegna della Certificazione Unica ai lavoratori dipendenti, autonomi e pensionati, e trasmissione telematica all’Agenzia delle Entrate per il 730 precompilato.',
        whoIsAffected: 'Lavoratori dipendenti, collaboratori, autonomi e pensionati.',
        whatToDo: 'Scarica la CU dall’area riservata aziendale o dal sito INPS per verificare redditi e detrazioni.',
        whatHappensIfNot: 'Sanzioni per il sostituto d’imposta; ritardi nella disponibilità della dichiarazione precompilata.',
        modelLink: '/modelli/certificazione-unica',
        guideLink: '/moduli/modulo-25-fisco-cittadini',
        sources: [
            src('Certificazione Unica', 'Agenzia delle Entrate', 'https://www.agenziaentrate.gov.it/portale/schede/dichiarazioni/certificazione-unica/cosa-cu'),
        ],
        lastReviewedAt: D,
    },
    {
        id: 'acconto-imu-2027',
        date: '2027-06-16',
        title: 'Acconto IMU 2027: prima rata imposta municipale propria',
        category: 'casa',
        entity: 'Ministero Economia e Finanze / Comuni',
        summary: 'Versamento della prima rata di acconto per l’anno d’imposta 2027 (pari al 50% dell’imposta dovuta nell’anno precedente). Possibilità di versamento in unica soluzione annuale.',
        whoIsAffected: 'Proprietari di seconde case, aree edificabili, immobili strumentali e abitazioni principali di pregio.',
        whatToDo: 'Calcola l’acconto sulle aliquote dell’anno precedente e versa tramite Modello F24 con codice tributo 3918.',
        whatHappensIfNot: 'Applicazione di interessi moratori e sanzioni tributarie ordinarie.',
        modelLink: '/modelli/saldo-imu-calcolo-f24',
        guideLink: '/moduli/modulo-30-catasto-imu-successioni',
        sources: [
            src('IMU normativa', 'Dipartimento delle Finanze', 'https://www.finanze.gov.it/it/Fiscalita-locale/IMU/'),
        ],
        lastReviewedAt: D,
    },
]
