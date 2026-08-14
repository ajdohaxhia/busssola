export interface OfficialSource {
  id: string;
  name: string;
  ente: string;
  url: string;
  category: 'identita-digitale' | 'lavoro' | 'casa' | 'soldi' | 'sicurezza' | 'sanita' | 'scuola' | 'famiglia' | 'consumatori' | 'immigrazione' | 'mobilita' | 'privacy' | 'emergenze' | 'altro' | 'bonus' | 'universita' | 'disabilita' | 'casa-digitale';
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
  }
};
