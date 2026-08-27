export interface OfficialSource {
  id: string;
  name: string;
  ente: string;
  url: string;
  category: 'identita-digitale' | 'lavoro' | 'casa' | 'soldi' | 'sicurezza' | 'sanita' | 'scuola' | 'famiglia' | 'consumatori' | 'immigrazione' | 'mobilita' | 'privacy' | 'emergenze' | 'altro' | 'bonus' | 'universita' | 'disabilita' | 'casa-digitale' | 'giustizia';
  type: 'servizio ufficiale' | 'assistenza ufficiale' | 'ente istituzionale' | 'supporto tecnico';
}

export const OFFICIAL_SOURCES: Record<string, OfficialSource> = {
  // IDENTITÀ DIGITALE / DOCUMENTI
  spidHome: {
    id: 'spidHome',
    name: "SPID - Sistema Pubblico di Identità Digitale",
    ente: "AgID",
    url: "https://www.spid.gov.it/",
    category: "identita-digitale",
    type: "servizio ufficiale"
  },
  spidHelpdesk: {
    id: 'spidHelpdesk',
    name: "SPID HelpDesk",
    ente: "AgID",
    url: "https://helpdesk.spid.gov.it/",
    category: "identita-digitale",
    type: "assistenza ufficiale"
  },
  spidAssistenzaIdp: {
    id: 'spidAssistenzaIdp',
    name: "Assistenza Identity Provider SPID",
    ente: "AgID",
    url: "https://www.spid.gov.it/ottieni-assistenza-dagli-identity-provider/",
    category: "identita-digitale",
    type: "assistenza ufficiale"
  },
  anprHome: {
    id: 'anprHome',
    name: "ANPR - Anagrafe Nazionale Popolazione Residente",
    ente: "Ministero dell’Interno",
    url: "https://www.anagrafenazionale.interno.it/",
    category: "identita-digitale",
    type: "servizio ufficiale"
  },
  anprResidenza: {
    id: 'anprResidenza',
    name: "ANPR - Cambio di residenza",
    ente: "Ministero dell’Interno / ANPR",
    url: "https://www.anagrafenazionale.interno.it/area-cittadino/cambio-di-residenza/",
    category: "identita-digitale",
    type: "servizio ufficiale"
  },
  anprCertificati: {
    id: 'anprCertificati',
    name: "ANPR - Certificati",
    ente: "Ministero dell’Interno / ANPR",
    url: "https://www.anagrafenazionale.interno.it/area-cittadino/certificati/",
    category: "identita-digitale",
    type: "servizio ufficiale"
  },
  cieHome: {
    id: 'cieHome',
    name: "CIE - Carta d'Identità Elettronica",
    ente: "Ministero dell'Interno",
    url: "https://www.cartaidentita.interno.gov.it/",
    category: "identita-digitale",
    type: "servizio ufficiale"
  },
  ciePinPuk: {
    id: 'ciePinPuk',
    name: "CIE - Codici PIN/PUK",
    ente: "Ministero dell'Interno",
    url: "https://www.cartaidentita.interno.gov.it/en/useful-info-for-citizens/pin-puk-security-codes/",
    category: "identita-digitale",
    type: "supporto tecnico"
  },
  cieRecuperoPuk: {
    id: 'cieRecuperoPuk',
    name: "Recupero PUK CIE",
    ente: "Ministero dell'Interno",
    url: "https://www.cartaidentita.interno.gov.it/en/useful-info-for-citizens/how-to-retrieve-puk-code-of-your-electronic-identity-card-cie/",
    category: "identita-digitale",
    type: "supporto tecnico"
  },
  cieIdApp: {
    id: 'cieIdApp',
    name: "CieID app",
    ente: "Ministero dell'Interno",
    url: "https://www.cartaidentita.interno.gov.it/en/useful-info-for-citizens/cie-id/",
    category: "identita-digitale",
    type: "servizio ufficiale"
  },
  adeCfTs: {
    id: 'adeCfTs',
    name: "Agenzia Entrate - Codice fiscale e tessera sanitaria",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/codice-fiscale-tessera-sanitaria-partita-iva",
    category: "identita-digitale",
    type: "servizio ufficiale"
  },
  adeDuplicatoTsCf: {
    id: 'adeDuplicatoTsCf',
    name: "Duplicato Tessera Sanitaria / Codice Fiscale",
    ente: "Agenzia delle Entrate",
    url: "https://telematici.agenziaentrate.gov.it/RichiestaDuplicatoWeb/ScegliModalita.jsp",
    category: "identita-digitale",
    type: "servizio ufficiale"
  },
  adeHome: {
    id: 'adeHome',
    name: "Agenzia delle Entrate Home",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/",
    category: "soldi",
    type: "servizio ufficiale"
  },
  ade730: {
    id: 'ade730',
    name: "730 Precompilato",
    ente: "Agenzia delle Entrate",
    url: "https://infoprecompilata.agenziaentrate.gov.it/",
    category: "soldi",
    type: "servizio ufficiale"
  },
  adeCassettoFiscale: {
    id: 'adeCassettoFiscale',
    name: "Cassetto Fiscale",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/web/guest/area-riservata/cassetto-fiscale",
    category: "soldi",
    type: "servizio ufficiale"
  },
  adePrenotazione: {
    id: 'adePrenotazione',
    name: "Prenotazione appuntamenti Agenzia Entrate",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/contatti/assistenza-fiscale/in-ufficio/prenotazione-appuntamenti",
    category: "soldi",
    type: "servizio ufficiale"
  },

  // LAVORO / INPS
  inpsHome: {
    id: 'inpsHome',
    name: "INPS Home",
    ente: "INPS",
    url: "https://www.inps.it/",
    category: "lavoro",
    type: "servizio ufficiale"
  },
  inpsIsee: {
    id: 'inpsIsee',
    name: "ISEE Precompilato",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.50088.isee-precompilato.html",
    category: "bonus",
    type: "servizio ufficiale"
  },
  inpsAdi: {
    id: 'inpsAdi',
    name: "Assegno di Inclusione (ADI)",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.56942.assegno-di-inclusione-adi.html",
    category: "bonus",
    type: "servizio ufficiale"
  },
  inpsSfl: {
    id: 'inpsSfl',
    name: "Supporto per la Formazione e il Lavoro (SFL)",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.56846.supporto-per-la-formazione-e-il-lavoro-sfl.html",
    category: "lavoro",
    type: "servizio ufficiale"
  },
  inpsCartaAcquisti: {
    id: 'inpsCartaAcquisti',
    name: "Carta Acquisti",
    ente: "INPS / Ministero dell'Economia",
    url: "https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.49714.carta-acquisti.html",
    category: "bonus",
    type: "servizio ufficiale"
  },
  naspiServizio: {
    id: 'naspiServizio',
    name: "NASpI - Indennità mensile di disoccupazione",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.50593.naspi-indennit-mensile-di-disoccupazione.html",
    category: "lavoro",
    type: "servizio ufficiale"
  },
  naspiDomanda: {
    id: 'naspiDomanda',
    name: "NASpI - Come fare domanda",
    ente: "INPS",
    url: "https://www.inps.it/it/it/inps-comunica/dossier/la-naspi/come-fare-domanda.html",
    category: "lavoro",
    type: "servizio ufficiale"
  },
  naspiCom: {
    id: 'naspiCom',
    name: "Comunicazioni NASpI / NASpI-COM",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.comunicazioni-naspi.html",
    category: "lavoro",
    type: "servizio ufficiale"
  },
  inpsElencoPatronati: {
    id: 'inpsElencoPatronati',
    name: "INPS - Elenco Patronati convenzionati",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.schede-servizi-e-strumenti.servizi.elenco-dei-patronati.html",
    category: "lavoro",
    type: "servizio ufficiale"
  },
  inpsCertificatiMalattia: {
    id: 'inpsCertificatiMalattia',
    name: "INPS - Consultazione certificati di malattia",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.schede-servizi-e-strumenti.servizi.certificati-di-malattia-telematici-consultazione-per-i-lavoratori.html",
    category: "lavoro",
    type: "servizio ufficiale"
  },
  cnelArchivioContratti: {
    id: 'cnelArchivioContratti',
    name: "CNEL - Archivio Contratti",
    ente: "CNEL",
    url: "https://www.cnel.it/Archivio-Contratti",
    category: "lavoro",
    type: "servizio ufficiale"
  },
  lavoroTirocini: {
    id: 'lavoroTirocini',
    name: "Ministero del Lavoro - Tirocini",
    ente: "Ministero del Lavoro",
    url: "https://www.lavoro.gov.it/temi-e-priorita/politiche-attive-del-lavoro/Pagine/Tirocini.aspx",
    category: "lavoro",
    type: "servizio ufficiale"
  },
  inlRichiestaIntervento: {
    id: 'inlRichiestaIntervento',
    name: "Ispettorato Nazionale del Lavoro - Richiesta intervento",
    ente: "Ispettorato Nazionale del Lavoro",
    url: "https://www.ispettorato.gov.it/it-it/strumenti-e-servizi/Pagine/Richiesta-di-intervento-ispettivo.aspx",
    category: "lavoro",
    type: "servizio ufficiale"
  },

  // PAGAMENTI / APP PUBBLICHE
  pagopaHome: {
    id: 'pagopaHome',
    name: "pagoPA Home",
    ente: "pagoPA S.p.A.",
    url: "https://www.pagopa.gov.it/",
    category: "soldi",
    type: "servizio ufficiale"
  },
  pagopaDovePagare: {
    id: 'pagopaDovePagare',
    name: "Dove pagare con pagoPA",
    ente: "pagoPA S.p.A.",
    url: "https://www.pagopa.gov.it/it/cittadini/dove-pagare/",
    category: "soldi",
    type: "servizio ufficiale"
  },
  pagopaAssistenza: {
    id: 'pagopaAssistenza',
    name: "Assistenza pagoPA",
    ente: "pagoPA S.p.A.",
    url: "https://assistenza.pagopa.gov.it/hc/it",
    category: "soldi",
    type: "assistenza ufficiale"
  },
  pagopaComePagare: {
    id: 'pagopaComePagare',
    name: "Come pagare con pagoPA",
    ente: "pagoPA S.p.A.",
    url: "https://assistenza.pagopa.gov.it/hc/it/articles/31958790454417-Pagare-con-pagoPA",
    category: "soldi",
    type: "supporto tecnico"
  },
  pagopaPhishing: {
    id: 'pagopaPhishing',
    name: "Evitare phishing pagoPA",
    ente: "pagoPA S.p.A.",
    url: "https://assistenza.pagopa.gov.it/hc/it/articles/34467698417297-Come-evitare-tentativi-di-phishing-o-truffa-a-nome-di-pagoPA",
    category: "soldi",
    type: "supporto tecnico"
  },
  appIo: {
    id: 'appIo',
    name: "App IO",
    ente: "pagoPA S.p.A.",
    url: "https://io.italia.it/",
    category: "identita-digitale",
    type: "servizio ufficiale"
  },
  firmaIo: {
    id: 'firmaIo',
    name: "Firma con IO",
    ente: "pagoPA S.p.A.",
    url: "https://firma.io.italia.it/",
    category: "identita-digitale",
    type: "servizio ufficiale"
  },

  // SICUREZZA DIGITALE / EMERGENZE
  commissariatoPs: {
    id: 'commissariatoPs',
    name: "Commissariato di PS Online",
    ente: "Polizia di Stato",
    url: "https://www.commissariatodips.it/",
    category: "sicurezza",
    type: "servizio ufficiale"
  },
  psSegnalaOnline: {
    id: 'psSegnalaOnline',
    name: "Segnala online - Commissariato di PS Online",
    ente: "Polizia di Stato",
    url: "https://www.commissariatodips.it/segnalazioni/segnala-online/index.html",
    category: "sicurezza",
    type: "servizio ufficiale"
  },
  psScrivici: {
    id: 'psScrivici',
    name: "Polizia di Stato - Scrivici",
    ente: "Polizia di Stato",
    url: "https://www.poliziadistato.it/scrivici/message",
    category: "sicurezza",
    type: "assistenza ufficiale"
  },
  psDenunceWeb: {
    id: 'psDenunceWeb',
    name: "Polizia di Stato - Denunce via web",
    ente: "Polizia di Stato",
    url: "https://denunceviaweb.poliziadistato.it/",
    category: "sicurezza",
    type: "servizio ufficiale"
  },
  garanteModulistica: {
    id: 'garanteModulistica',
    name: "Garante Privacy - Modulistica e servizi online",
    ente: "Garante per la protezione dei dati personali",
    url: "https://www.garanteprivacy.it/home/modulistica-e-servizi-online",
    category: "privacy",
    type: "servizio ufficiale"
  },
  garanteRevengePorn: {
    id: 'garanteRevengePorn',
    name: "Garante Privacy - Revenge Porn",
    ente: "Garante per la protezione dei dati personali",
    url: "https://www.garanteprivacy.it/temi/revengeporn",
    category: "sicurezza",
    type: "servizio ufficiale"
  },
  garanteReclamo: {
    id: 'garanteReclamo',
    name: "Garante Privacy - Reclamo",
    ente: "Garante per la protezione dei dati personali",
    url: "https://www.garanteprivacy.it/diritti/come-agire-per-tutelare-i-tuoi-dati-personali/reclamo",
    category: "privacy",
    type: "servizio ufficiale"
  },
  acnHome: {
    id: 'acnHome',
    name: "ACN - Agenzia per la Cybersicurezza Nazionale",
    ente: "ACN",
    url: "https://www.acn.gov.it/",
    category: "sicurezza",
    type: "ente istituzionale"
  },

  // BANCHE / FINANZA / TUTELA
  abfHome: {
    id: 'abfHome',
    name: "Arbitro Bancario Finanziario (ABF)",
    ente: "Banca d'Italia",
    url: "https://www.arbitrobancariofinanziario.it/",
    category: "soldi",
    type: "servizio ufficiale"
  },
  bancaItaliaSicurezza: {
    id: 'bancaItaliaSicurezza',
    name: "Banca d'Italia - Sicurezza dei pagamenti",
    ente: "Banca d'Italia",
    url: "https://www.bancaditalia.it/compiti/sispaga-mercati/sicurezza-pagamenti/index.html",
    category: "soldi",
    type: "ente istituzionale"
  },
  consobTruffe: {
    id: 'consobTruffe',
    name: "CONSOB - Occhio alle truffe",
    ente: "CONSOB",
    url: "https://www.consob.it/web/area-pubblica/occhio-alle-truffe",
    category: "soldi",
    type: "servizio ufficiale"
  },
  certfinHome: {
    id: 'certfinHome',
    name: "CERTFin - Per i cittadini",
    ente: "ABI / Banca d'Italia",
    url: "https://www.certfin.it/cittadini/",
    category: "sicurezza",
    type: "supporto tecnico"
  },
  paypalRisoluzioni: {
    id: 'paypalRisoluzioni',
    name: "Centro Risoluzioni PayPal",
    ente: "PayPal",
    url: "https://www.paypal.com/it/auth/login?returnUri=%2Fdispute%2F",
    category: "soldi",
    type: "assistenza ufficiale"
  },

  // SUPPORTI IMPORTANTI
  emergenza112: {
    id: 'emergenza112',
    name: "Numero Unico Emergenza",
    ente: "Stato Italiano",
    url: "tel:112",
    category: "emergenze",
    type: "assistenza ufficiale"
  },
  antiviolenza1522: {
    id: 'antiviolenza1522',
    name: "Antiviolenza e stalking",
    ente: "Dipartimento per le Pari Opportunità",
    url: "tel:1522",
    category: "emergenze",
    type: "assistenza ufficiale"
  },
  emergenzaInfanzia114: {
    id: 'emergenzaInfanzia114',
    name: "Emergenza infanzia",
    ente: "Ministero per la famiglia, la natalità e le pari opportunità",
    url: "tel:114",
    category: "emergenze",
    type: "assistenza ufficiale"
  },

  // 2026 CIVIC UPDATES
  lavoroIseeFamiglie: {
    id: 'lavoroIseeFamiglie',
    name: "Nuovo ISEE per specifiche prestazioni familiari e per l’inclusione",
    ente: "Ministero del Lavoro e delle Politiche Sociali",
    url: "https://www.lavoro.gov.it/notizie/pagine/nuovo-isee-specifiche-prestazioni-familiari-e-linclusione",
    category: "bonus",
    type: "ente istituzionale"
  },
  lavoroIseePagina: {
    id: 'lavoroIseePagina',
    name: "ISEE — scheda istituzionale 2026",
    ente: "Ministero del Lavoro e delle Politiche Sociali",
    url: "https://lavoro.gov.it/strumenti-e-servizi/isee/pagine/default",
    category: "bonus",
    type: "ente istituzionale"
  },
  lavoroIseeDsu2026: {
    id: 'lavoroIseeDsu2026',
    name: "ISEE DSU 2026 — modelli e istruzioni",
    ente: "Ministero del Lavoro e delle Politiche Sociali",
    url: "https://www.lavoro.gov.it/strumenti-e-servizi/isee-dsu-2026",
    category: "bonus",
    type: "servizio ufficiale"
  },
  inpsIseeValoreCs: {
    id: 'inpsIseeValoreCs',
    name: "Comunicato INPS: nuovo valore ISEE 2026",
    ente: "INPS",
    url: "https://www.inps.it/content/dam/inps-site/it/scorporati/comunicati-stampa/2026/01/Allegati/3980_CS_Nuovo_valore_Isee.pdf",
    category: "bonus",
    type: "ente istituzionale"
  },
  inpsIseeModelliCs: {
    id: 'inpsIseeModelliCs',
    name: "Comunicato INPS: nuovi modelli DSU e ISEE 2026 (messaggio 799/2026)",
    ente: "INPS",
    url: "https://www.inps.it/content/dam/inps-site/it/scorporati/comunicati-stampa/2026/03/Allegati/4030_CS_Nuovi_modelli_ISEE_.pdf",
    category: "bonus",
    type: "ente istituzionale"
  },
  inpsAuuNews2026: {
    id: 'inpsAuuNews2026',
    name: "Assegno unico 2026: domanda in continuità e aggiornamento importi",
    ente: "INPS",
    url: "https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.02.assegno-unico-2026-presentazione-domanda-e-aggiornamento-importi.html",
    category: "bonus",
    type: "ente istituzionale"
  },
  inpsAuuScheda: {
    id: 'inpsAuuScheda',
    name: "Assegno unico e universale per i figli a carico",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.assegno-unico-e-universale-per-i-figli-a-carico-55984.assegno-unico-e-universale-per-i-figli-a-carico.html",
    category: "bonus",
    type: "servizio ufficiale"
  },
  areraBonusSoglia2026: {
    id: 'areraBonusSoglia2026',
    name: "Bonus sociali: soglia ISEE 9.796 euro dal 1° gennaio 2026",
    ente: "ARERA",
    url: "https://www.arera.it/comunicati-stampa/dettaglio/bonus-sociali-arera-alza-a-9796-euro-la-soglia-isee-per-laccesso-alle-agevolazioni-per-acqua-luce-gas-e-rifiuti",
    category: "bonus",
    type: "ente istituzionale"
  },
  areraBonusCome: {
    id: 'areraBonusCome',
    name: "Come si ottengono i bonus sociali",
    ente: "ARERA",
    url: "https://www.arera.it/consumatori/bonus-sociale/bonus-sociale-per-disagio-economico/come-si-ottengono-i-bonus",
    category: "bonus",
    type: "servizio ufficiale"
  },
  lavoroNaspi: {
    id: 'lavoroNaspi',
    name: "NASpI — scheda Ministero del Lavoro",
    ente: "Ministero del Lavoro e delle Politiche Sociali",
    url: "https://lavoro.gov.it/temi-e-priorita/ammortizzatori-sociali/focus-on/indennita-disoccupazione/naspi/pagine/naspi",
    category: "lavoro",
    type: "ente istituzionale"
  },
  ade730Calendario: {
    id: 'ade730Calendario',
    name: "Calendario dichiarazione precompilata 2026",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/info-assistenza-e-calendario2",
    category: "soldi",
    type: "servizio ufficiale"
  },
  ade730Quando: {
    id: 'ade730Quando',
    name: "Quando e come presentare il 730 2026",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/quando-e-come-presentare-il-730-2026-cittadini",
    category: "soldi",
    type: "servizio ufficiale"
  },
  adePrecompilata2026: {
    id: 'adePrecompilata2026',
    name: "La dichiarazione precompilata 2026",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/la-dichiarazione-precompilata-20261",
    category: "soldi",
    type: "servizio ufficiale"
  },
  passaportoPolizia: {
    id: 'passaportoPolizia',
    name: "Passaporto — Polizia di Stato",
    ente: "Polizia di Stato",
    url: "https://www.poliziadistato.it/articolo/passaporto",
    category: "identita-digitale",
    type: "servizio ufficiale"
  },
  pecAgid: {
    id: 'pecAgid',
    name: "Posta Elettronica Certificata",
    ente: "AgID",
    url: "https://www.agid.gov.it/it/piattaforme/posta-elettronica-certificata",
    category: "identita-digitale",
    type: "ente istituzionale"
  },
  fseSalute: {
    id: 'fseSalute',
    name: "Fascicolo Sanitario Elettronico",
    ente: "Ministero della Salute",
    url: "https://www.salute.gov.it/portale/fascicoloSanitarioElettronico/homeFascicoloSanitarioElettronico.jsp",
    category: "sanita",
    type: "servizio ufficiale"
  },
  permessoSoggiorno: {
    id: 'permessoSoggiorno',
    name: "Titoli di soggiorno",
    ente: "Ministero dell’Interno",
    url: "https://www.interno.gov.it/it/temi/immigrazione-e-asilo/titoli-soggiorno",
    category: "immigrazione",
    type: "ente istituzionale"
  },
  cittadinanzaInterno: {
    id: 'cittadinanzaInterno',
    name: "Cittadinanza",
    ente: "Ministero dell’Interno",
    url: "https://www.interno.gov.it/it/temi/cittadinanza-e-altri-diritti-civili/cittadinanza",
    category: "immigrazione",
    type: "ente istituzionale"
  },
  dimissioniLavoro: {
    id: 'dimissioniLavoro',
    name: "Servizi per il lavoro — dimissioni e rapporti di lavoro",
    ente: "Ministero del Lavoro e delle Politiche Sociali",
    url: "https://www.lavoro.gov.it/",
    category: "lavoro",
    type: "ente istituzionale"
  },
  cedolareSeccaAde: {
    id: 'cedolareSeccaAde',
    name: "Cedolare secca sugli affitti",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/web/guest/schede/agevolazioni/cedolare-secca-affitti/infogen-cedolare-secca-affitti-agevolazioni",
    category: "casa",
    type: "servizio ufficiale"
  },
  delegaInps: {
    id: 'delegaInps',
    name: "Delega identità digitale INPS",
    ente: "INPS",
    url: "https://www.inps.it/",
    category: "altro",
    type: "servizio ufficiale"
  },
  invaliditaInps: {
    id: 'invaliditaInps',
    name: "Invalidità civile — prestazioni INPS",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.invalidita-civile.html",
    category: "disabilita",
    type: "servizio ufficiale"
  },

  inpsPensioneVecchiaia: {
    id: 'inpsPensioneVecchiaia',
    name: "Pensione di vecchiaia",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.pensione-di-vecchiaia.html",
    category: "lavoro",
    type: "servizio ufficiale"
  },
  inpsPensioneAnticipata: {
    id: 'inpsPensioneAnticipata',
    name: "Pensione anticipata",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.pensione-anticipata-50308.pensione-anticipata.html",
    category: "lavoro",
    type: "servizio ufficiale"
  },
  inpsRicostituzione: {
    id: 'inpsRicostituzione',
    name: "Ricostituzione della pensione",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.ricostituzione-della-pensione-50309.ricostituzione-della-pensione.html",
    category: "lavoro",
    type: "servizio ufficiale"
  },
  inpsRiscatti: {
    id: 'inpsRiscatti',
    name: "Ricongiunzioni e riscatti",
    ente: "INPS",
    url: "https://www.inps.it/it/it/previdenza/ricongiunzioni-e-riscatti.html",
    category: "lavoro",
    type: "servizio ufficiale"
  },
  inpsApeSocialeCs2026: {
    id: 'inpsApeSocialeCs2026',
    name: "APE sociale: proroga 2026 e scadenze",
    ente: "INPS",
    url: "https://www.inps.it/content/dam/inps-site/it/scorporati/comunicati-stampa/2026/01/Allegati/3984_CS_Ape_Sociale_proroga_termini.pdf",
    category: "lavoro",
    type: "ente istituzionale"
  },
  inpsApeSocialeMsg128: {
    id: 'inpsApeSocialeMsg128',
    name: "Messaggio INPS n. 128/2026 — APE sociale",
    ente: "INPS",
    url: "https://www.inps.it/content/dam/inps-site/it/scorporati/circolari-e-messaggi/2026/01/Circolare_15135/Allegati/16522_Messaggio-numero-128-del-14-01-2026.pdf",
    category: "lavoro",
    type: "ente istituzionale"
  },
  inpsEstrattoConto: {
    id: 'inpsEstrattoConto',
    name: "Consultazione estratto conto contributivo/previdenziale",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.consultazione-estratto-conto-contributivo-previdenziale-50119.consultazione-estratto-conto-contributivo-previdenziale.html",
    category: "lavoro",
    type: "servizio ufficiale"
  },
  inpsFascicoloPrevidenziale: {
    id: 'inpsFascicoloPrevidenziale',
    name: "Fascicolo previdenziale del cittadino",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.fascicolo-previdenziale-del-cittadino-50865.fascicolo-previdenziale-del-cittadino.html",
    category: "lavoro",
    type: "servizio ufficiale"
  },
  inpsCongedoParentale: {
    id: 'inpsCongedoParentale',
    name: "Indennità di congedo parentale per dipendenti",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.50583.indennit-di-congedo-parentale-per-lavoratrici-e-lavoratori-dipendenti.html",
    category: "famiglia",
    type: "servizio ufficiale"
  },
  inpsCongedoPaternita: {
    id: 'inpsCongedoPaternita',
    name: "Congedo di paternità obbligatorio",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.congedo-di-paternit-obbligatorio-58988.congedo-di-paternit-obbligatorio.html",
    category: "famiglia",
    type: "servizio ufficiale"
  },
  inpsCartaEuropeaDisabilita: {
    id: 'inpsCartaEuropeaDisabilita',
    name: "Carta europea della disabilità — Disability Card",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.carta-europea-della-disabilit---disability-card-58828.carta-europea-della-disabilit---disability-card.html",
    category: "disabilita",
    type: "servizio ufficiale"
  },
  inpsDisabilitaProgetti: {
    id: 'inpsDisabilitaProgetti',
    name: "INPS — Disabilità e Disability Card",
    ente: "INPS",
    url: "https://www.inps.it/it/it/inps-comunica/inps--inclusione-e-innovazione/i-progetti-per-i-cittadini/disabilit.html",
    category: "disabilita",
    type: "ente istituzionale"
  },
  aderHome: {
    id: 'aderHome',
    name: "Agenzia delle entrate-Riscossione",
    ente: "Agenzia delle entrate-Riscossione",
    url: "https://www.agenziaentrateriscossione.gov.it/",
    category: "soldi",
    type: "servizio ufficiale"
  },
  aderAnnullamento: {
    id: 'aderAnnullamento',
    name: "Annullamento del debito (sgravio e autotutela)",
    ente: "Agenzia delle entrate-Riscossione",
    url: "https://www.agenziaentrateriscossione.gov.it/it/cittadini/AnnullamentoDelDebito/",
    category: "soldi",
    type: "servizio ufficiale"
  },
  aderGuidaCartella: {
    id: 'aderGuidaCartella',
    name: "Guida alla cartella di pagamento",
    ente: "Agenzia delle entrate-Riscossione",
    url: "https://www.agenziaentrateriscossione.gov.it/it/la-guida-alla-cartella-di-pagamento/la-cartella-di-pagamento/le-informazioni-di-ader-seconda-pagina/",
    category: "soldi",
    type: "ente istituzionale"
  },
  adeRateizzazione: {
    id: 'adeRateizzazione',
    name: "Come chiedere la rateizzazione",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/come-chiedere-la-rateizzazione",
    category: "soldi",
    type: "servizio ufficiale"
  },
  adeSitoAder: {
    id: 'adeSitoAder',
    name: "Servizi sul sito di Agenzia delle entrate-Riscossione",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/il-sito-www-agenziaentrate-riscossione-gov-it",
    category: "soldi",
    type: "ente istituzionale"
  },
  adeSituazioneDebitoria: {
    id: 'adeSituazioneDebitoria',
    name: "Richiedere documenti o informazioni su pagamenti e procedure",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/richiedere-documenti-o-informazioni-su-pagamenti-e-procedure",
    category: "soldi",
    type: "servizio ufficiale"
  },
  adeAa9Piva: {
    id: 'adeAa9Piva',
    name: "Partita IVA persone fisiche (modello AA9/12)",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/schede/istanze/aa9_11-apertura-variazione-chiusura-pf/scheda-informativa-aa9_11",
    category: "soldi",
    type: "servizio ufficiale"
  },
  adeAprirePiva: {
    id: 'adeAprirePiva',
    name: "Come aprire una partita IVA",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/schede/istanze/aa9_11-apertura-variazione-chiusura-pf/quando-utilizzare",
    category: "soldi",
    type: "servizio ufficiale"
  },
  adeIvaIscrizione: {
    id: 'adeIvaIscrizione',
    name: "Iscrizione IVA — dichiarazione di inizio attività",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/iva-regole-generali-aliquote-esenzioni-pagamento/infogen-iva-regole-generali-aliquote-esenzioni-pagamento-enti-e-pa",
    category: "soldi",
    type: "ente istituzionale"
  },
  adeForfettario: {
    id: 'adeForfettario',
    name: "Regime forfetario — requisiti",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/schede/agevolazioni/regime-agevolato-forfettario/requisiti-nuovo-regime-forfettario-agevolato",
    category: "soldi",
    type: "servizio ufficiale"
  },
  adeF24Versamenti: {
    id: 'adeF24Versamenti',
    name: "F24 — come effettuare i versamenti",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/schede/pagamenti/f24/come-effettuare-versamenti-f24-imprese",
    category: "soldi",
    type: "servizio ufficiale"
  },
  adeVisuraCatastale: {
    id: 'adeVisuraCatastale',
    name: "Visura catastale online",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/visura-catastale/visura-catastale-online",
    category: "casa",
    type: "servizio ufficiale"
  },
  adeConsultazioneImmobili: {
    id: 'adeConsultazioneImmobili',
    name: "Visure, planimetrie e ispezioni ipotecarie dei propri immobili",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/consultazione-personale/consultazione-personale-online",
    category: "casa",
    type: "servizio ufficiale"
  },
  adeVolturaCatastale: {
    id: 'adeVolturaCatastale',
    name: "Voltura catastale — come e dove richiederla",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/voltura-catastale/come-e-dove-richiedere-la-voltura",
    category: "casa",
    type: "servizio ufficiale"
  },
  adeSuccessioneCome: {
    id: 'adeSuccessioneCome',
    name: "Dichiarazione di successione — come e quando",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/schede/dichiarazioni/dichiarazione-di-successione/come-quando-dichsucc",
    category: "casa",
    type: "servizio ufficiale"
  },
  adeSuccessioneImposte: {
    id: 'adeSuccessioneImposte',
    name: "Dichiarazione di successione — come pagare le imposte",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/schede/dichiarazioni/dichiarazione-di-successione/imposte-dichsucc-cittadini",
    category: "casa",
    type: "servizio ufficiale"
  },
  inpaHome: {
    id: 'inpaHome',
    name: "Portale unico del reclutamento inPA",
    ente: "Dipartimento della Funzione Pubblica",
    url: "https://www.inpa.gov.it/",
    category: "lavoro",
    type: "servizio ufficiale"
  },
  giustiziaPatrocinio: {
    id: 'giustiziaPatrocinio',
    name: "Patrocinio a spese dello Stato nei giudizi civili e amministrativi",
    ente: "Ministero della Giustizia",
    url: "https://www.giustizia.it/giustizia/page/it/patrocinio_a_spese_dello_stato_nei_giudizi_civili_e_amministrativi",
    category: "giustizia",
    type: "ente istituzionale"
  },
  giustiziaMediazione: {
    id: 'giustiziaMediazione',
    name: "Organismi di mediazione — registro e iscrizione",
    ente: "Ministero della Giustizia",
    url: "https://www.giustizia.it/giustizia/it/mg_3_4_15.page",
    category: "giustizia",
    type: "ente istituzionale"
  },
  giustiziaMediazionePortale: {
    id: 'giustiziaMediazionePortale',
    name: "Portale mediazione civile",
    ente: "Ministero della Giustizia",
    url: "https://mediazione.giustizia.it/",
    category: "giustizia",
    type: "servizio ufficiale"
  },
  giustiziaHome: {
    id: 'giustiziaHome',
    name: "Ministero della Giustizia",
    ente: "Ministero della Giustizia",
    url: "https://www.giustizia.it/",
    category: "giustizia",
    type: "ente istituzionale"
  },
  esteriAire: {
    id: 'esteriAire',
    name: "Anagrafe Italiani residenti all’estero (AIRE)",
    ente: "Ministero degli Affari Esteri e della Cooperazione Internazionale",
    url: "https://www.esteri.it/it/servizi-opportunita/italiani-all-estero/aire_0/",
    category: "identita-digitale",
    type: "ente istituzionale"
  },
  esteriVoto: {
    id: 'esteriVoto',
    name: "Voto all’estero — elezioni politiche e referendum",
    ente: "Ministero degli Affari Esteri e della Cooperazione Internazionale",
    url: "https://www.esteri.it/it/servizi-opportunita/italiani-all-estero/votoestero/elezionipolitiche/",
    category: "identita-digitale",
    type: "ente istituzionale"
  },
  daitAire: {
    id: 'daitAire',
    name: "Iscrizione AIRE e diritto di voto",
    ente: "Ministero dell’Interno — DAIT",
    url: "https://dait.interno.gov.it/servizi-demografici/documentazione/iscrizione-cancellazione-ed-esercizio-del-diritto-di-voto-dei-cittadini-italiani-residenti-allestero",
    category: "identita-digitale",
    type: "ente istituzionale"
  },
  areraSwitchingElettricita: {
    id: 'areraSwitchingElettricita',
    name: "ARERA — cambiare fornitore di energia elettrica",
    ente: "ARERA",
    url: "https://www.arera.it/single-digital-gateway-elettricita",
    category: "consumatori",
    type: "ente istituzionale"
  },
  areraSwitchingGas: {
    id: 'areraSwitchingGas',
    name: "ARERA — cambiare fornitore di gas",
    ente: "ARERA",
    url: "https://www.arera.it/single-digital-gateway-gas",
    category: "consumatori",
    type: "ente istituzionale"
  },
  areraConciliazione: {
    id: 'areraConciliazione',
    name: "Servizio Conciliazione ARERA",
    ente: "ARERA",
    url: "https://www.arera.it/consumatori/conciliazione/servizio-conciliazione-domande-e-risposte",
    category: "consumatori",
    type: "servizio ufficiale"
  },
  saluteDat: {
    id: 'saluteDat',
    name: "Disposizioni anticipate di trattamento (DAT)",
    ente: "Ministero della Salute",
    url: "https://www.salute.gov.it/new/it/tema/disposizioni-anticipate-di-trattamento-dat/disposizioni-anticipate-di-trattamento/",
    category: "sanita",
    type: "ente istituzionale"
  },
  saluteDatFaq: {
    id: 'saluteDatFaq',
    name: "FAQ — disposizioni anticipate di trattamento",
    ente: "Ministero della Salute",
    url: "https://www.salute.gov.it/new/it/faq/faq-disposizioni-anticipate-di-trattamento/",
    category: "sanita",
    type: "ente istituzionale"
  },
  saluteDatBanca: {
    id: 'saluteDatBanca',
    name: "Banca dati nazionale delle DAT",
    ente: "Ministero della Salute",
    url: "https://www.salute.gov.it/new/it/tema/disposizioni-anticipate-di-trattamento-dat/banca-dati-delle-dat/",
    category: "sanita",
    type: "servizio ufficiale"
  },
  saluteAnimaliIR: {
    id: 'saluteAnimaliIR',
    name: "Sistema di identificazione operatori, stabilimenti e animali (I&R)",
    ente: "Ministero della Salute",
    url: "https://www.salute.gov.it/new/it/tema/prevenzione-e-controllo-malattie-degli-animali/sistema-di-identificazione-degli-operatori/",
    category: "sanita",
    type: "ente istituzionale"
  },
  registroImpreseVisura: {
    id: 'registroImpreseVisura',
    name: "Visura camerale ordinaria e storica",
    ente: "InfoCamere / Registro Imprese",
    url: "https://registroimprese.infocamere.it/visura-camerale-ordinaria-storica-e-certificato",
    category: "soldi",
    type: "servizio ufficiale"
  },
  istruzioneIscrizioni: {
    id: 'istruzioneIscrizioni',
    name: "Iscrizioni online scuola",
    ente: "Ministero dell’Istruzione e del Merito",
    url: "https://www.istruzione.it/iscrizionionline/",
    category: "scuola",
    type: "servizio ufficiale"
  },
  mefImu: {
    id: 'mefImu',
    name: "IMU — Imposta municipale propria",
    ente: "Ministero dell’Economia e delle Finanze",
    url: "https://www.finanze.gov.it/it/Fiscalita-locale/IMU/",
    category: "casa",
    type: "ente istituzionale"
  },
  inpsDisColl: {
    id: 'inpsDisColl',
    name: "DIS-COLL — indennità di disoccupazione per collaboratori",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.dis-coll-indennit-mensile-di-disoccupazione.html",
    category: "lavoro",
    type: "servizio ufficiale"
  },

  adeRottamazioneQuinquies: {
    id: 'adeRottamazioneQuinquies',
    name: "Definizione agevolata — Rottamazione-quinquies",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/aree-tematiche/definizione-agevolata-rottamazione",
    category: "soldi",
    type: "ente istituzionale"
  },
  aderRottamazioneQuinquies: {
    id: 'aderRottamazioneQuinquies',
    name: "Rottamazione-quinquies — informazioni e scadenze",
    ente: "Agenzia delle entrate-Riscossione",
    url: "https://www.agenziaentrateriscossione.gov.it/it/Per-saperne-di-piu/definizione-agevolata-rottamazione-quinquies/",
    category: "soldi",
    type: "servizio ufficiale"
  },
  adeQuandoRateizzare: {
    id: 'adeQuandoRateizzare',
    name: "Quando è possibile rateizzare cartelle e avvisi",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/quando-%C3%A8-possibile-rateizzare",
    category: "soldi",
    type: "ente istituzionale"
  },
  aderRateizzazione: {
    id: 'aderRateizzazione',
    name: "Rateizzazione delle cartelle",
    ente: "Agenzia delle entrate-Riscossione",
    url: "https://www.agenziaentrateriscossione.gov.it/it/cittadini/Rateizzazione/index.html",
    category: "soldi",
    type: "servizio ufficiale"
  },
  gazzettaLegge11_2026: {
    id: 'gazzettaLegge11_2026',
    name: "Legge 19 gennaio 2026, n. 11 — servizi per i cittadini all’estero",
    ente: "Gazzetta Ufficiale",
    url: "https://www.gazzettaufficiale.it/eli/id/2026/02/04/26G00025/sg",
    category: "identita-digitale",
    type: "ente istituzionale"
  },
  daitCieAireCirc54: {
    id: 'daitCieAireCirc54',
    name: "Circolare DAIT n. 54/2026 — CIE per iscritti AIRE e Agenda CIE",
    ente: "Ministero dell’Interno — DAIT",
    url: "https://dait.interno.gov.it/documenti/circ-dait-054-servdemo-29-05-2026.pdf",
    category: "identita-digitale",
    type: "ente istituzionale"
  },
  mimIscrizioni202627: {
    id: 'mimIscrizioni202627',
    name: "Iscrizioni alle prime classi a.s. 2026/2027",
    ente: "Ministero dell’Istruzione e del Merito",
    url: "https://www.mim.gov.it/it/web/guest/-/scuola-aperte-le-iscrizioni-alle-prime-classi-per-l-anno-scolastico-2026-2027",
    category: "scuola",
    type: "ente istituzionale"
  },
  unicaIscrizioni: {
    id: 'unicaIscrizioni',
    name: "UNICA — iscrizioni on line",
    ente: "Ministero dell’Istruzione e del Merito",
    url: "https://unica.istruzione.gov.it/portale/it/orientamento/iscrizioni",
    category: "scuola",
    type: "servizio ufficiale"
  },
  garantePixelCs2026: {
    id: 'garantePixelCs2026',
    name: "Comunicato: linee guida sui tracking pixel nelle email",
    ente: "Garante per la protezione dei dati personali",
    url: "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10241977",
    category: "privacy",
    type: "ente istituzionale"
  },
  garantePixelLineeGuida: {
    id: 'garantePixelLineeGuida',
    name: "Provvedimento 17 aprile 2026 — Linee guida tracking pixel",
    ente: "Garante per la protezione dei dati personali",
    url: "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10241943",
    category: "privacy",
    type: "ente istituzionale"
  },
  agidSpidConvenzioni2027: {
    id: 'agidSpidConvenzioni2027',
    name: "SPID: convenzioni con gli Identity Provider fino al 2027",
    ente: "AgID",
    url: "https://www.agid.gov.it/it/notizie/spid-rinnovate-le-convenzioni-con-gli-identity-provider-fino-al-2027",
    category: "identita-digitale",
    type: "ente istituzionale"
  },
  inpsBonusNido: {
    id: 'inpsBonusNido',
    name: "Bonus asilo nido e forme di supporto presso la propria abitazione",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.bonus-asilo-nido-e-forme-di-supporto-presso-la-propria-abitazione-51105.bonus-asilo-nido-e-forme-di-supporto-presso-la-propria-abitazione.html",
    category: "famiglia",
    type: "servizio ufficiale"
  },
  fsePortale: {
    id: 'fsePortale',
    name: "Portale nazionale del Fascicolo Sanitario Elettronico",
    ente: "Ministero della Salute / Dipartimento per la Trasformazione Digitale",
    url: "https://www.fascicolosanitario.gov.it/portale",
    category: "sanita",
    type: "servizio ufficiale"
  },
  fsePssNote2026: {
    id: 'fsePssNote2026',
    name: "Note tecniche sul Profilo Sanitario Sintetico nel FSE 2.0",
    ente: "Fascicolo Sanitario Elettronico",
    url: "https://www.fascicolosanitario.gov.it/portale/w/pubblicate-le-note-tecniche-per-la-gestione-del-profilo-sanitario-sintetico-nel-fascicolo-sanitario-elettronico-2.0",
    category: "sanita",
    type: "ente istituzionale"
  },
  gazzettaDlPa25: {
    id: 'gazzettaDlPa25',
    name: "Decreto-legge 14 marzo 2025, n. 25 — reclutamento PA",
    ente: "Gazzetta Ufficiale",
    url: "https://www.gazzettaufficiale.it/eli/id/2025/03/14/25G00033/sg",
    category: "lavoro",
    type: "ente istituzionale"
  },
  inpsDisabilityCs2026: {
    id: 'inpsDisabilityCs2026',
    name: "Comunicato INPS 23 gennaio 2026 — Disability Card",
    ente: "INPS",
    url: "https://www.inps.it/content/dam/inps-site/it/scorporati/comunicati-stampa/2026/01/Allegati/3994_Cs_disability_2301.pdf",
    category: "disabilita",
    type: "ente istituzionale"
  },
  inpsRiformaDisabilitaBrochure: {
    id: 'inpsRiformaDisabilitaBrochure',
    name: "INPS per la Disabilità — riforma e valutazione di base",
    ente: "INPS",
    url: "https://www.inps.it/content/dam/inps-site/pdf/schede-servizio/documents/Brochure_Riforma_Disabilit%C3%A0.pdf",
    category: "disabilita",
    type: "ente istituzionale"
  },
  inpsValutazioneBaseMsg1377: {
    id: 'inpsValutazioneBaseMsg1377',
    name: "Messaggio INPS n. 1377/2026 — province in sperimentazione",
    ente: "INPS",
    url: "https://www.inps.it/content/dam/inps-site/it/scorporati/circolari-e-messaggi/2026/04/Circolare_15247/Allegati/16739_Messaggio-numero-1377-del-23-04-2026.pdf",
    category: "disabilita",
    type: "ente istituzionale"
  },
  internoFlussiCirc2025: {
    id: 'internoFlussiCirc2025',
    name: "Circolare 16 ottobre 2025 — flussi d’ingresso 2026-2028",
    ente: "Ministero dell’Interno",
    url: "https://www.interno.gov.it/it/amministrazione-trasparente/disposizioni-generali/atti-generali/atti-amministrativi-generali/circolari/circolare-16102025-programmazione-dei-flussi-dingresso-dei-lavoratori-non-comunitari-nel-territorio-stato-triennio-2026-2028",
    category: "immigrazione",
    type: "ente istituzionale"
  },
  areraMaggiorTutelaQ32026: {
    id: 'areraMaggiorTutelaQ32026',
    name: "Maggior Tutela +4,6% nel III trimestre 2026 per i clienti vulnerabili",
    ente: "ARERA",
    url: "https://www.arera.it/comunicati-stampa/dettaglio/elettricita-maggior-tutela-46-nel-iii-trimestre-2026-per-i-clienti-vulnerabili",
    category: "consumatori",
    type: "ente istituzionale"
  },
  innovazioneItWallet: {
    id: 'innovazioneItWallet',
    name: "Dipartimento per la trasformazione digitale — IT-Wallet su App IO",
    ente: "Presidenza del Consiglio dei Ministri",
    url: "https://innovazione.gov.it/notizie/articoli/it-wallet-il-portafoglio-digitale-degli-italiani/",
    category: "identita-digitale",
    type: "servizio ufficiale"
  },
  appIoDocumenti: {
    id: 'appIoDocumenti',
    name: "App IO — Portafoglio e Documenti Digitali",
    ente: "PagoPA S.p.A.",
    url: "https://io.italia.it/",
    category: "identita-digitale",
    type: "servizio ufficiale"
  },
  masafDedicataATe: {
    id: 'masafDedicataATe',
    name: "MASAF — Carta Dedicata a Te 2026-2027",
    ente: "Ministero dell'Agricoltura, Sovranità Alimentare e Foreste",
    url: "https://www.masaf.gov.it/focus-carta-dedicata-a-te",
    category: "bonus",
    type: "servizio ufficiale"
  },
  inlPatenteCrediti: {
    id: 'inlPatenteCrediti',
    name: "INL — Patente a crediti per l'edilizia",
    ente: "Ispettorato Nazionale del Lavoro",
    url: "https://www.ispettorato.gov.it/focus-patente-a-crediti/",
    category: "lavoro",
    type: "ente istituzionale"
  },
  inlPortaleServizi: {
    id: 'inlPortaleServizi',
    name: "Portale Servizi INL — Gestione Patente a Crediti",
    ente: "Ispettorato Nazionale del Lavoro",
    url: "https://servizi.ispettorato.gov.it/",
    category: "lavoro",
    type: "servizio ufficiale"
  },
  mitCodiceStrada: {
    id: 'mitCodiceStrada',
    name: "Ministero delle Infrastrutture e dei Trasporti — Norme di circolazione e sicurezza stradale",
    ente: "Ministero delle Infrastrutture e dei Trasporti",
    url: "https://www.mit.gov.it/temi/mobilita-e-sicurezza-stradale",
    category: "mobilita",
    type: "ente istituzionale"
  },
  inpsAdiScheda: {
    id: 'inpsAdiScheda',
    name: "INPS — Assegno di Inclusione (ADI)",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.assegno-di-inclusione-adi-58474.assegno-di-inclusione-adi.html",
    category: "bonus",
    type: "servizio ufficiale"
  },
  inpsAdiRinnovoMsg2437: {
    id: 'inpsAdiRinnovoMsg2437',
    name: "Messaggio INPS n. 2437 del 22 luglio 2026 — Rinnovo Assegno di Inclusione",
    ente: "INPS",
    url: "https://www.inps.it/it/it/inps-comunica/atti/circolari-messaggi-e-normativa/dettaglio.circolari-e-messaggi.2026.07.messaggio-numero-2437-del-22-07-2026.html",
    category: "bonus",
    type: "ente istituzionale"
  },
  inpsAdiCasiSpecialiCirc58: {
    id: 'inpsAdiCasiSpecialiCirc58',
    name: "Circolare INPS n. 58 del 20 maggio 2026 — ADI e permessi di soggiorno per casi speciali",
    ente: "INPS",
    url: "https://www.inps.it/it/it/inps-comunica/atti/circolari-messaggi-e-normativa/dettaglio.circolari-e-messaggi.2026.05.circolare-numero-58-del-20-05-2026.html",
    category: "immigrazione",
    type: "ente istituzionale"
  },
  portaleAutomobilista: {
    id: 'portaleAutomobilista',
    name: "Il Portale dell’Automobilista — Servizi Patente e Veicoli",
    ente: "Ministero delle Infrastrutture e dei Trasporti",
    url: "https://www.ilportaledellautomobilista.it/",
    category: "mobilita",
    type: "servizio ufficiale"
  },
  adeFringeBenefit: {
    id: 'adeFringeBenefit',
    name: "Agenzia delle Entrate — Welfare aziendale e fringe benefit",
    ente: "Agenzia delle Entrate",
    url: "https://www.agenziaentrate.gov.it/portale/web/guest/area-tematica-fringe-benefit",
    category: "lavoro",
    type: "ente istituzionale"
  },
  inpsBonusPsicologo: {
    id: 'inpsBonusPsicologo',
    name: "INPS — Contributo sessioni di psicoterapia",
    ente: "INPS",
    url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.contributo-sessioni-psicoterapia-58830.contributo-sessioni-psicoterapia.html",
    category: "bonus",
    type: "servizio ufficiale"
  },
  inpsBonusMammeCirc82: {
    id: 'inpsBonusMammeCirc82',
    name: "Circolare INPS n. 82 del 29 luglio 2026 — Sostegno madri lavoratrici e decontribuzione",
    ente: "INPS",
    url: "https://www.inps.it/it/it/inps-comunica/atti/circolari-messaggi-e-normativa/dettaglio.circolari-e-messaggi.2026.07.circolare-numero-82-del-29-07-2026.html",
    category: "famiglia",
    type: "ente istituzionale"
  },
  murBorseStudio2026: {
    id: 'murBorseStudio2026',
    name: "MUR — Diritto allo Studio Universitario e limiti ISEE/ISPE",
    ente: "Ministero dell'Università e della Ricerca",
    url: "https://www.mur.gov.it/it/aree-tematiche/universita/diritto-allo-studio-universitario",
    category: "universita",
    type: "ente istituzionale"
  },
  culturaCarteGiovani: {
    id: 'culturaCarteGiovani',
    name: "Ministero della Cultura — Carta della Cultura Giovani e del Merito",
    ente: "Ministero della Cultura",
    url: "https://cartegiovani.cultura.gov.it/",
    category: "bonus",
    type: "servizio ufficiale"
  },
  mitSalvaCasa: {
    id: 'mitSalvaCasa',
    name: "Ministero delle Infrastrutture e dei Trasporti — Disposizioni urgenti in materia di semplificazione edilizia (Salva Casa)",
    ente: "Ministero delle Infrastrutture e dei Trasporti",
    url: "https://www.mit.gov.it/temi/edilizia-e-casa",
    category: "casa",
    type: "ente istituzionale"
  }
};
