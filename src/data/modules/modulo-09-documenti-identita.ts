import { Module } from '@/types';

export const modulo_09_documenti_identita: Module = {
    id: 'modulo-09-documenti-identita',
    lastUpdated: '2024-05-13',
    title: 'Documenti e Identità',
    description: 'Guida pratica ai principali documenti di identità e strumenti di accesso digitale ai servizi pubblici.',
    category: 'documenti-identita',
    difficulty: 'base',
    icon: 'IdCard',
    themeColor: 'accent-blue',
    lessons: [
        {
            id: 'spid-request',
            slug: 'come-richiedere-lo-spid',
            title: 'Come richiedere lo SPID',
            category: 'documenti-identita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 15,
            mainEntity: 'AgID / Provider SPID',
            summary: 'Guida alla creazione dell\'Identità Digitale (SPID) per accedere ai servizi della Pubblica Amministrazione.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2024-05-13',
            scenario: 'Devi accedere al sito dell\'INPS, dell\'Agenzia delle Entrate o altri servizi pubblici online e non hai ancora le credenziali SPID.',
            whenToDo: 'Quando hai bisogno di un unico set di credenziali per tutti i servizi pubblici online.',
            whatYouNeed: [
                'Documento di identità valido (Carta di identità, passaporto o patente)',
                'Tessera sanitaria con codice fiscale',
                'Indirizzo email personale',
                'Numero di cellulare'
            ],
            whereToDo: 'Sito web del provider scelto o ufficio fisico (es. Poste)',
            steps: [
                'Scegli un Identity Provider autorizzato (es. Poste Italiane, Aruba, InfoCert)',
                'Registrati sul sito del provider scelto',
                'Effettua il riconoscimento (di persona, tramite CIE/CNS, o video-chiamata)',
                'Attiva le tue credenziali SPID'
            ],
            estimatedCosts: 'Gratuito (alcuni provider offrono il riconoscimento a pagamento)',
            commonErrors: [
                'Utilizzare un numero di cellulare non personale',
                'Documento scaduto',
                'Email non accessibile durante la registrazione'
            ],
            officialLinks: ['https://www.spid.gov.it/'],
            
            // Backward compatibility
            question: 'Come posso ottenere le credenziali SPID?',
            whatIsHappening: 'Lo SPID è il Sistema Pubblico di Identità Digitale che permette di accedere con un\'unica coppia di credenziali a tutti i servizi online della Pubblica Amministrazione.',
            warningSigns: [],
            doNow: [
                'Scegli un Identity Provider autorizzato (es. Poste Italiane, Aruba, InfoCert)',
                'Registrati sul sito del provider scelto',
                'Effettua il riconoscimento (di persona, tramite CIE/CNS, o video-chiamata)',
                'Attiva le tue credenziali SPID'
            ],
            dontDo: [
                'Non condividere mai le tue credenziali SPID con terzi',
                'Non utilizzare email o numeri di telefono di altre persone'
            ],
            preserveEvidence: [],
            askHelpWhen: [
                'In caso di difficoltà tecnica durante la registrazione',
                'Se sospetti un furto di identità'
            ],
            whoCanHelp: ['Sito web del provider scelto o ufficio fisico (es. Poste)'],
            checklist: [
                'Documento di identità valido (Carta di identità, passaporto o patente)',
                'Tessera sanitaria con codice fiscale',
                'Indirizzo email personale',
                'Numero di cellulare'
            ],
            sources: [
                {
                    title: 'Sito ufficiale SPID',
                    organization: 'AgID',
                    url: 'https://www.spid.gov.it/',
                    type: 'official',
                    usedFor: 'Informazioni ufficiali e scelta del provider',
                    lastCheckedAt: '2024-05-13'
                }
            ]
        },
        {
            id: 'cie-request',
            slug: 'come-richiedere-la-carta-identita-elettronica-cie',
            title: 'Come richiedere la Carta d\'Identità Elettronica (CIE)',
            category: 'documenti-identita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 20,
            mainEntity: 'Comune / Ministero Interno',
            summary: 'Procedura per il rilascio della CIE, il documento d\'identità digitale e fisico.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2024-05-13',
            scenario: 'La tua vecchia carta d\'identità è scaduta, smarrita o deteriorata e devi richiederne una nuova.',
            whenToDo: 'In caso di primo rilascio, scadenza, smarrimento, furto o deterioramento del vecchio documento.',
            whatYouNeed: [
                'Fototessera recente',
                'Carta d\'identità precedente o denuncia di smarrimento',
                'Codice fiscale o tessera sanitaria',
                'Ricevuta del pagamento del contributo previsto'
            ],
            whereToDo: 'Ufficio Anagrafe del proprio Comune di residenza o dimora',
            steps: [
                'Prenota l\'appuntamento sul portale Agenda CIE',
                'Recati presso l\'Ufficio Anagrafe del tuo Comune',
                'Fornisci i dati e le impronte digitali',
                'Ricevi la CIE all\'indirizzo indicato entro 6 giorni lavorativi'
            ],
            estimatedCosts: 'Circa 22€ (può variare leggermente tra i Comuni)',
            commonErrors: [
                'Non prenotare l\'appuntamento',
                'Foto non conforme agli standard ICAO',
                'Mancanza della denuncia in caso di furto/smarrimento'
            ],
            officialLinks: ['https://www.cartaidentita.interno.gov.it/'],
            
            // Backward compatibility
            question: 'Quali sono i passaggi per ottenere la nuova CIE?',
            whatIsHappening: 'La Carta di Identità Elettronica (CIE) è l\'evoluzione della vecchia carta d\'identità cartacea, dotata di un microchip che memorizza i dati del titolare e permette l\'accesso ai servizi online.',
            warningSigns: [],
            doNow: [
                'Prenota l\'appuntamento sul portale Agenda CIE',
                'Recati presso l\'Ufficio Anagrafe del tuo Comune',
                'Fornisci i dati e le impronte digitali',
                'Ricevi la CIE all\'indirizzo indicato entro 6 giorni lavorativi'
            ],
            dontDo: [
                'Non presentarsi all\'appuntamento senza la documentazione necessaria',
                'Non utilizzare foto scattate in modo non professionale o non conformi'
            ],
            preserveEvidence: [],
            askHelpWhen: [
                'In caso di smarrimento del PIN/PUK consegnati con la carta',
                'Se il documento non arriva entro i tempi previsti'
            ],
            whoCanHelp: ['Ufficio Anagrafe del proprio Comune di residenza o dimora'],
            checklist: [
                'Fototessera recente',
                'Carta d\'identità precedente o denuncia di smarrimento',
                'Codice fiscale o tessera sanitaria',
                'Ricevuta del pagamento del contributo previsto'
            ],
            sources: [
                {
                    title: 'Portale ufficiale CIE',
                    organization: 'Ministero dell\'Interno',
                    url: 'https://www.cartaidentita.interno.gov.it/',
                    type: 'official',
                    usedFor: 'Prenotazione appuntamenti e informazioni sul rilascio',
                    lastCheckedAt: '2024-05-13'
                }
            ]
        },
        {
            id: 'tessera-sanitaria-renewal',
            slug: 'come-rinnovare-la-tessera-sanitaria',
            title: 'Come rinnovare la Tessera Sanitaria',
            category: 'documenti-identita',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 10,
            mainEntity: 'Agenzia delle Entrate / Regione',
            summary: 'Cosa fare quando la Tessera Sanitaria scade o viene smarrita.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2024-05-13',
            scenario: 'La tua Tessera Sanitaria - Carta Nazionale dei Servizi (TS-CNS) è scaduta o non è più leggibile.',
            whenToDo: 'Alla scadenza del documento o in caso di furto, smarrimento o deterioramento.',
            whatYouNeed: [
                'Codice fiscale',
                'Documento di identità valido',
                'Eventuale denuncia in caso di furto o smarrimento'
            ],
            whereToDo: 'Online sul sito dell\'Agenzia delle Entrate o presso gli sportelli della propria ASL',
            steps: [
                'Verifica la scadenza sulla tessera',
                'Se scaduta, la nuova tessera viene spedita automaticamente all\'indirizzo di residenza',
                'In caso di mancato recapito o smarrimento, richiedi il duplicato online o presso la ASL',
                'Attiva la nuova tessera presso gli sportelli abilitati se vuoi usarla come CNS'
            ],
            estimatedCosts: 'Gratuito',
            commonErrors: [
                'Indirizzo di residenza non aggiornato in anagrafe tributaria',
                'Non attivare il PIN per l\'uso come CNS'
            ],
            officialLinks: ['https://sistemats1.sanita.finanze.it/portale/tessera-sanitaria'],
            
            // Backward compatibility
            question: 'Cosa devo fare se la mia tessera sanitaria è scaduta?',
            whatIsHappening: 'La Tessera Sanitaria (TS) è il documento personale che permette di accedere alle prestazioni del Servizio Sanitario Nazionale e di certificare il proprio Codice Fiscale.',
            warningSigns: [],
            doNow: [
                'Verifica la scadenza sulla tessera',
                'Se scaduta, la nuova tessera viene spedita automaticamente all\'indirizzo di residenza',
                'In caso di mancato recapito o smarrimento, richiedi il duplicato online o presso la ASL',
                'Attiva la nuova tessera presso gli sportelli abilitati se vuoi usarla come CNS'
            ],
            dontDo: [
                'Non buttare la vecchia tessera finché non ricevi la nuova',
                'Non dimenticare di aggiornare la residenza se hai traslocato'
            ],
            preserveEvidence: [],
            askHelpWhen: [
                'Se la nuova tessera non arriva dopo la scadenza della vecchia',
                'In caso di errori nei dati anagrafici riportati sulla tessera'
            ],
            whoCanHelp: ['Online sul sito dell\'Agenzia delle Entrate o presso gli sportelli della propria ASL'],
            checklist: [
                'Codice fiscale',
                'Documento di identità valido',
                'Eventuale denuncia in caso di furto o smarrimento'
            ],
            sources: [
                {
                    title: 'Portale Tessera Sanitaria',
                    organization: 'Ministero dell\'Economia e delle Finanze',
                    url: 'https://sistemats1.sanita.finanze.it/portale/tessera-sanitaria',
                    type: 'official',
                    usedFor: 'Richiesta duplicati e informazioni sul servizio',
                    lastCheckedAt: '2024-05-13'
                }
            ]
        }
    ]
};
