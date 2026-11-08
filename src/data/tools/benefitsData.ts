export interface BenefitCriterion {
    id: string
    title: string
    category: 'famiglia' | 'casa' | 'lavoro' | 'giovani' | 'disabilita' | 'energia'
    badge: string
    summary: string
    maxIsee?: number // max ISEE if applicable
    minChildren?: number // minimum minor or dependent children
    eligibleEmployment?: ('dipendente' | 'autonomo' | 'disoccupato' | 'pensionato' | 'studente')[]
    requiresRent?: boolean
    requiresDisability?: boolean
    requiresUnder3?: boolean
    requiresSingleParent?: boolean
    requiresAge18?: boolean
    amountEstimate: string
    whyApplies: string
    missingCheck: string
    officialEntity: string
    officialUrl: string
    guideUrl: string
    legalStatus: 'enacted' | 'temporary'
    applicabilityYear: string
}

export const BENEFITS_CATALOG: BenefitCriterion[] = [
    {
        id: 'assegno-unico',
        title: 'Assegno Unico e Universale (AUU)',
        category: 'famiglia',
        badge: 'Misura Universale',
        summary: 'Sostegno economico mensile per ogni figlio a carico dal 7° mese di gravidanza fino ai 21 anni (senza limite di età per figli con disabilità).',
        minChildren: 1,
        amountEstimate: 'Da circa 57€ fino a oltre 200€ al mese per figlio (rivalutato ISTAT), più maggiorazioni.',
        whyApplies: 'Hai indicato la presenza di almeno un figlio a carico nel nucleo familiare.',
        missingCheck: 'Attestazione ISEE 2027 per ottenere l’importo massimo spettante (senza ISEE si riceve la quota minima).',
        officialEntity: 'INPS',
        officialUrl: 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.50616.assegno-unico-e-universale-per-i-figli-a-carico.html',
        guideUrl: '/bonus-2027',
        legalStatus: 'enacted',
        applicabilityYear: '2026-2027 (strutturale)',
    },
    {
        id: 'carta-dedicata-a-te',
        title: 'Carta «Dedicata a Te» (Social Card)',
        category: 'famiglia',
        badge: 'Sostegno Spesa',
        summary: 'Contributo straordinario di 500€ caricato su carta PostePay per acquisto di beni alimentari di prima necessità e carburanti.',
        maxIsee: 15000,
        amountEstimate: '500€ una tantum erogati su carta prepagata.',
        whyApplies: 'Il tuo nucleo ha un ISEE presunto entro i 15.000€ e conta almeno 3 componenti.',
        missingCheck: 'Nessuna domanda necessaria: l’INPS stila la graduatoria e il Comune pubblica gli elenchi dei beneficiari.',
        officialEntity: 'MASAF / INPS / Comuni',
        officialUrl: 'https://www.masaf.gov.it/focus-carta-dedicata-a-te-scadenze-utilizzo',
        guideUrl: '/novita/carta-dedicata-a-te-novembre-2026',
        legalStatus: 'temporary',
        applicabilityYear: '2026-2027',
    },
    {
        id: 'bonus-sociale-bollette',
        title: 'Bonus Sociale Elettrico, Gas e Idrico',
        category: 'energia',
        badge: 'Sconto Automatico',
        summary: 'Sconto diretto applicato mensilmente sulle fatture di luce, gas naturale e acqua per le famiglie a basso reddito.',
        maxIsee: 9530, // 20.000 with 4+ children
        amountEstimate: 'Sconto variabile da 150€ a oltre 400€ annui direttamente scalato dalle bollette.',
        whyApplies: 'Il tuo indicatore ISEE rientra nella soglia di disagio economico stabilita da ARERA (fino a 9.530€, o fino a 20.000€ per famiglie con almeno 4 figli).',
        missingCheck: 'Compilazione della DSU ISEE: lo sconto si attiva in modo 100% automatico tramite il sistema SGAte.',
        officialEntity: 'ARERA / INPS / Acquirente Unico',
        officialUrl: 'https://www.arera.it/consumatori/bonus-sociale',
        guideUrl: '/moduli/modulo-23-bonus-isee',
        legalStatus: 'enacted',
        applicabilityYear: 'strutturale',
    },
    {
        id: 'bonus-asilo-nido',
        title: 'Bonus Asilo Nido e Supporto Domiciliare',
        category: 'famiglia',
        badge: 'Rimborso Rette',
        summary: 'Contributo economico per il pagamento delle rette di asili nido pubblici e privati autorizzati o per forme di supporto presso la propria abitazione.',
        requiresUnder3: true,
        maxIsee: 40000,
        amountEstimate: 'Fino a 3.000€ annui (elevato a 3.600€ per i secondi figli nati dal 2024 con fratellino under 10).',
        whyApplies: 'Hai dichiarato la presenza di figli in fascia d’età per asilo nido (0-3 anni).',
        missingCheck: 'Fatture e ricevute di pagamento delle rette mensili quietanzate con tracciabilità.',
        officialEntity: 'INPS',
        officialUrl: 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.50091.bonus-asilo-nido.html',
        guideUrl: '/bonus-2027',
        legalStatus: 'enacted',
        applicabilityYear: 'strutturale',
    },
    {
        id: 'assegno-inclusione',
        title: 'Assegno di Inclusione (ADI)',
        category: 'lavoro',
        badge: 'Misura di Contrasto alla Povertà',
        summary: 'Sostegno economico e di inclusione sociale e lavorativa condizionato alla sottoscrizione del Patto di Attivazione Digitale (PAD).',
        maxIsee: 9360,
        eligibleEmployment: ['disoccupato', 'autonomo', 'dipendente'],
        amountEstimate: 'Fino a 500€/mese moltiplicato per la scala di equivalenza (fino a oltre 1.100€/mese con quota affitto).',
        whyApplies: 'ISEE inferiore a 9.360€ con presenza nel nucleo di minori, persone con disabilità o over 60.',
        missingCheck: 'Verifica del patrimonio immobiliare (non oltre 30.000€ escluso prima casa) e mobiliare (entro 6.000€ parametrati).',
        officialEntity: 'Ministero del Lavoro / INPS',
        officialUrl: 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.50974.assegno-di-inclusione-adi.html',
        guideUrl: '/modelli/assegno-inclusione',
        legalStatus: 'enacted',
        applicabilityYear: 'strutturale',
    },
    {
        id: 'supporto-formazione-lavoro',
        title: 'Supporto per la Formazione e il Lavoro (SFL)',
        category: 'lavoro',
        badge: 'Attivazione Lavorativa',
        summary: 'Indennità di 350€ mensili per persone occupabili tra i 18 e i 59 anni che partecipano a progetti di formazione e orientamento al lavoro.',
        maxIsee: 6000,
        eligibleEmployment: ['disoccupato'],
        amountEstimate: '350€ al mese per un massimo di 12 mensilità non rinnovabili.',
        whyApplies: 'Stato di disoccupazione e ISEE individuale/familiare non superiore a 6.000€ annui.',
        missingCheck: 'Iscrizione alla piattaforma SIISL e adesione formale a corsi o tirocini regionali.',
        officialEntity: 'Ministero del Lavoro / INPS',
        officialUrl: 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.50973.supporto-per-la-formazione-e-il-lavoro.html',
        guideUrl: '/moduli/modulo-10-lavoro-disoccupazione',
        legalStatus: 'enacted',
        applicabilityYear: 'strutturale',
    },
    {
        id: 'detrazione-affitto-giovani',
        title: 'Detrazione IRPEF Canone Affitto Giovani Under 31',
        category: 'casa',
        badge: 'Agevolazione Fiscale',
        summary: 'Detrazione d’imposta del 20% sul canone di locazione stipulato per l’abitazione principale da giovani tra 20 e 31 anni non compiuti.',
        requiresRent: true,
        amountEstimate: 'Detrazione minima di 991,60€ fino a un massimo di 2.000€ all’anno per i primi 4 anni.',
        whyApplies: 'Contratto di affitto registrato ad uso abitazione principale per giovani con reddito complessivo fino a 15.493,71€.',
        missingCheck: 'Contratto regolarmente registrato presso l’Agenzia delle Entrate e residenza anagrafica nell’immobile.',
        officialEntity: 'Agenzia delle Entrate',
        officialUrl: 'https://www.agenziaentrate.gov.it/portale/schede/agevolazioni/detrazioni-canoni-locazione/scheda-informativa-detrazioni-canoni-locazione',
        guideUrl: '/moduli/modulo-13-casa-residenza',
        legalStatus: 'enacted',
        applicabilityYear: 'strutturale',
    },
    {
        id: 'carta-cultura-merito',
        title: 'Carta Cultura Giovani e Carta del Merito',
        category: 'giovani',
        badge: 'Bonus Neodiciottenni',
        summary: 'Buoni digitali elettronici per l’acquisto di libri, musica, biglietti per cinema, teatro, musei ed eventi culturali.',
        requiresAge18: true,
        amountEstimate: '500€ ciascuna (fino a 1.000€ cumulabili se si raggiungono entrambi i requisiti).',
        whyApplies: 'Presenza nel nucleo di giovani che hanno compiuto 18 anni o diplomati con votazione di 100/100.',
        missingCheck: 'SPID o CIE per registrarsi sulla piattaforma telematica del Ministero della Cultura.',
        officialEntity: 'Ministero della Cultura',
        officialUrl: 'https://cartegiovani.cultura.gov.it',
        guideUrl: '/moduli/modulo-22-universita-giovani',
        legalStatus: 'enacted',
        applicabilityYear: 'strutturale',
    },
    {
        id: 'legge-104-permessi',
        title: 'Tutele e Agevolazioni Legge 104 / Invalidità Civile',
        category: 'disabilita',
        badge: 'Tutele Caregiver e Disabilità',
        summary: '3 giorni di permesso mensile retribuito, congedo straordinario biennale, detrazioni per spese mediche e IVA agevolata al 4%.',
        requiresDisability: true,
        amountEstimate: 'Permessi lavorativi retribuiti al 100% dall’INPS e risparmi fiscali su ausili e veicoli.',
        whyApplies: 'Presenza nel nucleo di persone con riconoscimento di handicap grave (art. 3 c. 3 L. 104/92) o caregiver.',
        missingCheck: 'Verbale della commissione medica ASL/INPS attestante l’handicap in situazione di gravità.',
        officialEntity: 'INPS / Ministero del Lavoro',
        officialUrl: 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.50027.permessi-legge-104-92.html',
        guideUrl: '/moduli/modulo-31-disabilita-legge-104',
        legalStatus: 'enacted',
        applicabilityYear: 'strutturale',
    },
]
