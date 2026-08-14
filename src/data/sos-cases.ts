import type { Source } from '@/types'

export type SosKind = 'physical' | 'digital' | 'mixed'

export type SosCase = {
    id: string
    title: string
    kind: SosKind
    summary: string
    first10Min: string[]
    doNow: string[]
    doNot: string[]
    saveEvidence: string[]
    whoToContact: string[]
    whenToCall112: string
    primaryAction: { label: string; href: string }
    moduleLink: string
    sources: Source[]
}

const CHECKED = '2026-08-14'

const src = (title: string, organization: string, url: string, usedFor: string): Source => ({
    title,
    organization,
    url,
    type: 'official',
    usedFor,
    lastCheckedAt: CHECKED,
})

const NUE = src('Numero Unico Emergenza 112', 'Stato Italiano', 'tel:112', 'Chiamata di emergenza')
const PS = src('Commissariato di PS online', 'Polizia di Stato', 'https://www.commissariatodips.it/', 'Segnalazione reati online')
const G1522 = src('Antiviolenza e stalking 1522', 'Dipartimento per le Pari Opportunità', 'tel:1522', 'Supporto violenza di genere e stalking')
const N114 = src('Emergenza infanzia 114', 'Ministero per la famiglia', 'tel:114', 'Emergenza che coinvolge un minore')
const GARANTE_RP = src('Revenge porn — Garante Privacy', 'Garante per la protezione dei dati personali', 'https://www.garanteprivacy.it/temi/internet-e-nuove-tecnologie/revenge-porn', 'Rimozione immagini intime non consensuali')

export const SOS_CASES: SosCase[] = [
    {
        id: 'pericolo-fisico',
        title: 'Pericolo fisico immediato',
        kind: 'physical',
        summary: 'Violenza, minaccia in corso, reato in atto o qualcuno in pericolo. Non leggere guide: chiama le forze dell’ordine.',
        first10Min: [
            'Chiama il 112. È l’unica azione primaria.',
            'Se puoi, allontanati e mettiti in un luogo visibile o affollato.',
            'Resta in linea con l’operatore finché te lo dice.',
        ],
        doNow: [
            'Segui le istruzioni dell’operatore 112.',
            'Se sei al sicuro, non tornare sulla scena per recuperare oggetti.',
        ],
        doNot: [
            'Non affrontare chi ti minaccia.',
            'Non usare Busssola, checklist o moduli al posto della chiamata.',
            'Non riagganciare prima che te lo dica l’operatore.',
        ],
        saveEvidence: [
            'Solo dopo esserti messo in sicurezza: tratti, direzione di fuga, targa.',
            'Non contaminare la scena di un reato.',
        ],
        whoToContact: ['112 — Carabinieri / Polizia / soccorso'],
        whenToCall112: 'Sempre e subito. Questa scheda non ha altre azioni primarie.',
        primaryAction: { label: 'Chiama 112', href: 'tel:112' },
        moduleLink: '/moduli/modulo-01-primo-soccorso',
        sources: [NUE],
    },
    {
        id: 'violenza-domestica',
        title: 'Violenza domestica',
        kind: 'physical',
        summary: 'Se sei in casa con chi ti fa paura o c’è violenza in corso, le forze dell’ordine vengono prima di qualsiasi protocollo.',
        first10Min: [
            'Se c’è violenza o sei in pericolo: chiama il 112.',
            'Se puoi parlare, il 1522 è il numero antiviolenza e stalking (anche chat, 24/7).',
            'Cerca un luogo più sicuro: stanza chiudibile, vicini, esercizio aperto.',
        ],
        doNow: [
            'Dopo la messa in sicurezza, conserva messaggi, foto di lesioni e verbali.',
            'Chiedi al 1522 orientamento su centri antiviolenza.',
        ],
        doNot: [
            'Non aspettare che “passi”.',
            'Non affrontare da solo chi usa violenza.',
            'Non usare questa pagina al posto del 112 se sei in pericolo adesso.',
        ],
        saveEvidence: ['Messaggi e chiamate', 'Foto di lesioni (data visibile)', 'Testimoni e verbali'],
        whoToContact: ['112', '1522 antiviolenza e stalking'],
        whenToCall112: 'Sempre in caso di violenza in corso, minaccia fisica o paura immediata per te o per i figli.',
        primaryAction: { label: 'Chiama 112', href: 'tel:112' },
        moduleLink: '/moduli/modulo-06-stalking-doxxing',
        sources: [NUE, G1522],
    },
    {
        id: 'minore-scomparso',
        title: 'Minore scomparso o in fuga',
        kind: 'physical',
        summary: 'Un minore che non si trova è un’emergenza di polizia, non una guida da leggere.',
        first10Min: [
            'Chiama il 112 e segnala la scomparsa.',
            'Chiama anche il 114 (emergenza infanzia).',
            'Raccogli ultima posizione nota, abbigliamento, amici e chat recenti.',
        ],
        doNow: [
            'Segui le indicazioni delle forze dell’ordine.',
            'Non diffondere foto sui social se le autorità ti chiedono di non farlo.',
        ],
        doNot: [
            'Non aspettare “qualche ora per non allarmare”.',
            'Non cercare da solo in posti pericolosi.',
        ],
        saveEvidence: ['Ultimi messaggi', 'Orario in cui è stato visto l’ultima volta', 'Foto recente'],
        whoToContact: ['112', '114 emergenza infanzia'],
        whenToCall112: 'Subito. La scomparsa di un minore si segnala alle forze dell’ordine.',
        primaryAction: { label: 'Chiama 112', href: 'tel:112' },
        moduleLink: '/moduli/modulo-05-grooming-minori',
        sources: [NUE, N114],
    },
    {
        id: 'grooming-minori',
        title: 'Grooming o adescamento di un minore',
        kind: 'mixed',
        summary: 'Se un adulto sta adescando un minore, non ritardare: 112 e 114.',
        first10Min: [
            'Se c’è rischio di incontro fisico o il minore è in pericolo: 112 subito.',
            'Chiama il 114.',
            'Non cancellare chat, profili o file: servono alle autorità.',
        ],
        doNow: [
            'Rassicura il minore: non è colpa sua.',
            'Segnala alla Polizia Postale (commissariatodips.it).',
            'Avvisa la scuola solo se non compromette le indagini e dopo aver sentito le autorità, se possibile.',
        ],
        doNot: [
            'Non contattare il sospettato.',
            'Non punire il minore.',
            'Non aspettare “per capire meglio”.',
        ],
        saveEvidence: ['Chat complete', 'ID profili', 'Date e orari degli incontri proposti'],
        whoToContact: ['112 se pericolo', '114', 'Polizia Postale'],
        whenToCall112: 'Se è previsto un incontro, se il minore è irreperibile, o se c’è minaccia fisica.',
        primaryAction: { label: 'Chiama 112 se è in pericolo', href: 'tel:112' },
        moduleLink: '/moduli/modulo-05-grooming-minori',
        sources: [NUE, N114, PS],
    },
    {
        id: 'stalking',
        title: 'Stalking (online e di persona)',
        kind: 'mixed',
        summary: 'Persecuzione ripetuta, appostamenti, messaggi ossessivi. Se hai paura per l’incolumità: 112.',
        first10Min: [
            'Se la persona è sotto casa, ti segue o ti minaccia di persona: chiama il 112.',
            'Interrompi i contatti. Non rispondere “un’ultima volta”.',
            'Attiva blocchi su telefono, social e email.',
        ],
        doNow: [
            'Per violenza di genere e stalking: 1522.',
            'Per stalking digitale: segnala alla Polizia Postale.',
            'Valuta con le forze dell’ordine ammonimento del Questore e denuncia.',
        ],
        doNot: [
            'Non incontrare chi ti perseguita per “chiarire”.',
            'Non cancellare i messaggi prima di copiarli.',
        ],
        saveEvidence: ['Screenshot datati', 'Registro chiamate', 'Testimoni di appostamenti', 'Regali o lettere'],
        whoToContact: ['112 se pericolo', '1522', 'Polizia / Carabinieri', 'Polizia Postale'],
        whenToCall112: 'Appostamenti, minacce, violenza, o se temi di essere raggiunto adesso.',
        primaryAction: { label: 'Chiama 112 se sei in pericolo', href: 'tel:112' },
        moduleLink: '/moduli/modulo-06-stalking-doxxing',
        sources: [NUE, G1522, PS],
    },
    {
        id: 'cyberstalking',
        title: 'Cyberstalking e minacce ripetute',
        kind: 'digital',
        summary: 'Minacce, messaggi a raffica, account falsi. Se la minaccia diventa fisica, 112.',
        first10Min: [
            'Se ti dicono di essere sotto casa o di farti del male adesso: 112.',
            'Non rispondere. Blocca.',
            'Fai screenshot di ogni minaccia con data e URL del profilo.',
        ],
        doNow: [
            'Segnala i profili alle piattaforme e alla Polizia Postale.',
            'Rendi privati gli account e rivedi chi può taggarti.',
            'Avvisa persone di fiducia se il minacciatore ha i tuoi indirizzi.',
        ],
        doNot: ['Non minacciare a tua volta', 'Non pagare per “farla finita”'],
        saveEvidence: ['Thread completi', 'Username e URL', 'IP o header email se disponibili'],
        whoToContact: ['112 se minaccia fisica', 'Polizia Postale', '1522 se contesto di violenza di genere'],
        whenToCall112: 'Quando le minacce riguardano violenza, domicilio, scuola, lavoro o familiari.',
        primaryAction: { label: 'Chiama 112 se c’è minaccia fisica', href: 'tel:112' },
        moduleLink: '/moduli/modulo-06b-stalking-doxxing',
        sources: [NUE, PS, G1522],
    },
    {
        id: 'doxxing',
        title: 'Doxxing (dati personali diffusi)',
        kind: 'digital',
        summary: 'Indirizzo, telefono, documenti o foto private pubblicati senza consenso.',
        first10Min: [
            'Se qualcuno usa i dati per presentarsi a casa tua o minacciarti: 112.',
            'Salva URL, screenshot e copie della pagina prima che sparisca.',
            'Segnala il contenuto alla piattaforma.',
        ],
        doNow: [
            'Segnala alla Polizia Postale.',
            'Valuta reclamo al Garante Privacy.',
            'Avvisa condominio, scuola o datore se l’indirizzo è stato sparso.',
        ],
        doNot: ['Non inseguire chi ha pubblicato', 'Non ripubblicare i tuoi dati per “smentire”'],
        saveEvidence: ['URL', 'Screenshot con data', 'Account che ha pubblicato'],
        whoToContact: ['112 se pericolo fisico', 'Polizia Postale', 'Garante Privacy'],
        whenToCall112: 'Se i dati vengono usati per raggiungerti, minacciarti o presentarsi di persona.',
        primaryAction: { label: 'Chiama 112 se ti stanno cercando', href: 'tel:112' },
        moduleLink: '/moduli/modulo-06b-stalking-doxxing',
        sources: [NUE, PS, src('Modulistica Garante', 'Garante Privacy', 'https://www.garanteprivacy.it/home/modulistica', 'Reclamo o segnalazione')],
    },
    {
        id: 'sextortion-adulti',
        title: 'Sextortion e ricatto con immagini',
        kind: 'digital',
        summary: 'Qualcuno minaccia di diffondere foto o video intimi. Non pagare. Se la minaccia è fisica, 112.',
        first10Min: [
            'Se ti minacciano di violenza di persona o sanno dove sei: 112.',
            'Interrompi ogni comunicazione. Non pagare.',
            'Screenshot di chat, profilo e richieste di denaro.',
        ],
        doNow: [
            'Segnala alla Polizia Postale.',
            'Per revenge porn: Garante Privacy, canale dedicato.',
            'Avvisa una persona di fiducia.',
        ],
        doNot: ['Non pagare', 'Non inviare altre immagini', 'Non cancellare le chat prima degli screenshot'],
        saveEvidence: ['Chat', 'IBAN / crypto / PayPal del ricatto', 'URL profilo'],
        whoToContact: ['112 se minaccia fisica', 'Polizia Postale', 'Garante Privacy'],
        whenToCall112: 'Minacce di violenza, di presentarsi a casa, o se conosci l’aggressore di persona.',
        primaryAction: { label: 'Chiama 112 se c’è minaccia fisica', href: 'tel:112' },
        moduleLink: '/moduli/modulo-04-sextortion-ricatti',
        sources: [NUE, PS, GARANTE_RP],
    },
    {
        id: 'revenge-porn',
        title: 'Revenge porn / immagini intime non consensuali',
        kind: 'digital',
        summary: 'Foto o video intimi pubblicati o minacciati senza consenso. Reato. 112 se sei in pericolo.',
        first10Min: [
            'Pericolo fisico o stalking di persona: 112.',
            'Non commentare pubblicamente il materiale.',
            'Salva URL e screenshot.',
        ],
        doNow: [
            'Segnala al Garante Privacy (revenge porn) e alla Polizia Postale.',
            'Chiedi la rimozione alle piattaforme.',
        ],
        doNot: ['Non condividere il link “per far vedere”', 'Non trattare da solo con chi ha pubblicato'],
        saveEvidence: ['URL', 'Account', 'Data di pubblicazione', 'Chat di minaccia'],
        whoToContact: ['112 se pericolo', 'Garante Privacy', 'Polizia Postale'],
        whenToCall112: 'Se chi ha pubblicato ti perseguita, ti aspetta fuori o minaccia violenza.',
        primaryAction: { label: 'Chiama 112 se sei in pericolo', href: 'tel:112' },
        moduleLink: '/moduli/modulo-04b-sextortion-ricatti',
        sources: [NUE, GARANTE_RP, PS],
    },
    {
        id: 'instagram-rubato',
        title: 'Account Instagram / Facebook rubato',
        kind: 'digital',
        summary: 'Takeover social. Se l’account viene usato per minacce gravi o truffe ai tuoi contatti, valuta 112 / Polizia Postale.',
        first10Min: [
            'Se ti minacciano di persona tramite l’account: 112.',
            'Apri instagram.com/hacked o il recupero ufficiale Meta.',
            'Cambia la password della email collegata da un dispositivo sicuro.',
        ],
        doNow: [
            'Avvisa i contatti che non devono pagare né cliccare link a tuo nome.',
            'Segnala alla Polizia Postale se usato per truffe o minacce.',
        ],
        doNot: ['Non pagare “recovery” su Telegram', 'Non usare link di recupero arrivati in DM'],
        saveEvidence: ['Email di cambio password', 'URL del profilo'],
        whoToContact: ['112 se minaccia fisica', 'Supporto Meta', 'Polizia Postale'],
        whenToCall112: 'Minacce gravi, estorsione, o uso dell’account per raggiungerti di persona.',
        primaryAction: { label: 'Chiama 112 se c’è minaccia fisica', href: 'tel:112' },
        moduleLink: '/moduli/modulo-02-account-security',
        sources: [NUE, PS, src('Instagram hacked', 'Meta', 'https://www.instagram.com/hacked', 'Recupero account')],
    },
    {
        id: 'whatsapp-rubato',
        title: 'WhatsApp o email presi',
        kind: 'digital',
        summary: 'Account takeover di messaggistica o posta. I tuoi contatti potrebbero ricevere richieste di soldi.',
        first10Min: [
            'Minacce di violenza o qualcuno sotto casa: 112.',
            'Prova a rientrare e a espellere l’intruso.',
            'Avvisa i contatti: non inviare soldi né OTP.',
        ],
        doNow: [
            'Cambia password email. Attiva 2FA.',
            'Scrivi a support@whatsapp.com se è WhatsApp.',
            'Polizia Postale se usato per truffe.',
        ],
        doNot: ['Non dare il codice SMS a nessuno', 'Non pagare per riavere l’account'],
        saveEvidence: ['Chi ha chiesto il codice', 'Ora della disconnessione'],
        whoToContact: ['112 se pericolo', 'Supporto piattaforma', 'Polizia Postale'],
        whenToCall112: 'Se l’account è usato per minacce o per farti raggiungere di persona.',
        primaryAction: { label: 'Chiama 112 se sei in pericolo', href: 'tel:112' },
        moduleLink: '/moduli/modulo-02b-account-security',
        sources: [NUE, PS],
    },
    {
        id: 'identita-digitale',
        title: 'Furto d’identità / abuso SPID o CIE',
        kind: 'digital',
        summary: 'Qualcuno ha usato le tue credenziali per accedere a servizi pubblici o aprire pratiche.',
        first10Min: [
            'Se ti hanno truffato di persona o ti minacciano: 112.',
            'Cambia password SPID dal provider. Revoca sessioni.',
            'Contatta il provider SPID / supporto CIE.',
        ],
        doNow: [
            'Controlla cassetto fiscale, INPS e app IO per pratiche non tue.',
            'Denuncia alla Polizia Postale.',
            'Avvisa la banca se c’è rischio di pagamenti.',
        ],
        doNot: ['Non condividere PIN/PUK CIE', 'Non ripetere l’OTP al telefono'],
        saveEvidence: ['Email di accesso', 'Pratiche sospette', 'Orari di login'],
        whoToContact: ['112 se truffa di persona', 'Provider SPID', 'Polizia Postale', 'AgID helpdesk'],
        whenToCall112: 'Truffa di persona, minacce, o danni in corso che richiedono intervento immediato.',
        primaryAction: { label: 'Chiama 112 se c’è un reato in corso di persona', href: 'tel:112' },
        moduleLink: '/moduli/modulo-09-documenti-identita',
        sources: [
            NUE,
            PS,
            src('SPID HelpDesk', 'AgID', 'https://helpdesk.spid.gov.it/', 'Assistenza identità digitale'),
        ],
    },
    {
        id: 'sim-swap',
        title: 'SIM swapping',
        kind: 'digital',
        summary: 'Il telefono resta senza rete e i truffatori prendono la tua numerazione per gli OTP.',
        first10Min: [
            'Pericolo fisico correlato (rapina del telefono con violenza): 112.',
            'Da un altro telefono chiama l’operatore e fai bloccare la linea.',
            'Avvisa subito la banca: blocca carte e home banking.',
        ],
        doNow: [
            'Cambia password della email.',
            'Vai in un negozio dell’operatore con documento.',
            'Denuncia alla Polizia Postale.',
        ],
        doNot: ['Non aspettare “che torni il segnale”', 'Non confermare OTP che arrivano intanto'],
        saveEvidence: ['Ora della perdita di segnale', 'Email di cambio SIM o login'],
        whoToContact: ['112 se violenza', 'Operatore', 'Banca', 'Polizia Postale'],
        whenToCall112: 'Se il telefono è stato sottratto con violenza o sei minacciato.',
        primaryAction: { label: 'Chiama 112 in caso di violenza', href: 'tel:112' },
        moduleLink: '/moduli/modulo-15-sicurezza-avanzata',
        sources: [NUE, PS],
    },
    {
        id: 'otp-condiviso',
        title: 'Phishing bancario / OTP appena dato',
        kind: 'digital',
        summary: 'Hai cliccato un link o detto un codice. Ogni minuto conta per bloccare i pagamenti.',
        first10Min: [
            'Se la truffa è avvenuta di persona o con minaccia: 112.',
            'Chiama il numero verde ufficiale della banca (sul retro carta o app, non dal SMS).',
            'Blocca carte e dispone il disconoscimento movimenti.',
        ],
        doNow: [
            'Cambia password home banking da un altro dispositivo.',
            'Denuncia: serve per il rimborso.',
            'Polizia Postale per la segnalazione.',
        ],
        doNot: ['Non richiamare il numero del SMS', 'Non dare altri OTP'],
        saveEvidence: ['SMS/email', 'Importi', 'Numero del truffatore'],
        whoToContact: ['112 se reato di persona', 'Banca', 'Polizia Postale'],
        whenToCall112: 'Rapina, truffa a domicilio, o minaccia mentre ti estorcono i codici.',
        primaryAction: { label: 'Chiama 112 se è una truffa di persona', href: 'tel:112' },
        moduleLink: '/moduli/modulo-03-truffe-phishing',
        sources: [
            NUE,
            PS,
            src('Consigli CERTFin / sicurezza pagamenti', 'CERTFin / Banca d’Italia', 'https://www.certfin.it/cittadini/', 'Sicurezza pagamenti'),
        ],
    },
    {
        id: 'banca-compromessa',
        title: 'Conto o carta compromessa',
        kind: 'digital',
        summary: 'Movimenti non tuoi. Blocca, poi denuncia.',
        first10Min: [
            'Rapina o violenza allo sportello: 112.',
            'Blocco carta da app o numero verde ufficiale.',
            'Screenshot movimenti.',
        ],
        doNow: ['Reclamo in banca', 'Denuncia', 'Cambio password'],
        doNot: ['Non aspettare il giorno dopo', 'Non usare il telefono se sospetti malware bancario'],
        saveEvidence: ['Estratto', 'SMS alert', 'Ticket banca'],
        whoToContact: ['112 se violenza', 'Banca', 'Polizia / Polizia Postale'],
        whenToCall112: 'Rapina, violenza, o truffa in corso di persona.',
        primaryAction: { label: 'Chiama 112 in caso di rapina o violenza', href: 'tel:112' },
        moduleLink: '/moduli/modulo-14-soldi-banche-truffe',
        sources: [NUE, PS],
    },
    {
        id: 'truffa-appena-successa',
        title: 'Truffa online appena successa',
        kind: 'digital',
        summary: 'Bonifico, marketplace falso, finto corriere. Ferma i soldi se puoi, poi denuncia.',
        first10Min: [
            'Se ti hanno minacciato o sono venuti a casa: 112.',
            'Chiama la banca e chiedi il richiamo del bonifico / blocco carta.',
            'Non inviare altro denaro “per sbloccare”.',
        ],
        doNow: [
            'Apri disputa su PayPal o piattaforma se applicabile.',
            'Segnala a Polizia Postale e, per investimenti abusivi, CONSOB.',
            'Conserva annuncio, chat e IBAN del beneficiario.',
        ],
        doNot: ['Non pagare “rimborsi” chiesti dai truffatori', 'Non cancellare la chat'],
        saveEvidence: ['IBAN', 'Screenshot annuncio', 'Tracking falso', 'Email'],
        whoToContact: ['112 se pericolo', 'Banca', 'Polizia Postale', 'CONSOB se investimento'],
        whenToCall112: 'Truffa a domicilio, minacce, o qualcuno che si presenta come agente.',
        primaryAction: { label: 'Chiama 112 se la truffa è di persona', href: 'tel:112' },
        moduleLink: '/moduli/modulo-03b-truffe-phishing',
        sources: [
            NUE,
            PS,
            src('Truffe CONSOB', 'CONSOB', 'https://www.consob.it/web/area-pubblica/truffe', 'Truffe finanziarie'),
        ],
    },
    {
        id: 'molestie-lavoro',
        title: 'Molestie o persecuzione sul lavoro',
        kind: 'mixed',
        summary: 'Se sei in pericolo sul posto di lavoro, 112. Poi tutele INL e patronato.',
        first10Min: [
            'Violenza o minaccia in corso: 112.',
            'Allontanati e cerca testimoni o un superiore di fiducia.',
            'Annota data, ora, frasi e presenti.',
        ],
        doNow: [
            'Se è stalking o violenza di genere: 1522.',
            'Valuta segnalazione all’Ispettorato Nazionale del Lavoro.',
            'Conserva email, chat aziendali e valutazioni.',
        ],
        doNot: ['Non restare solo con chi usa violenza', 'Non firmare dimissioni sotto pressione senza consiglio'],
        saveEvidence: ['Email', 'Turni', 'Testimoni', 'Certificati medici'],
        whoToContact: ['112 se pericolo', '1522', 'INL', 'Patronato / sindacato'],
        whenToCall112: 'Aggressione, minaccia, o se temi di non poter uscire dal luogo di lavoro.',
        primaryAction: { label: 'Chiama 112 se sei in pericolo', href: 'tel:112' },
        moduleLink: '/moduli/modulo-12-lavoro-diritti',
        sources: [
            NUE,
            G1522,
            src('Richiesta intervento ispettivo', 'Ispettorato Nazionale del Lavoro', 'https://www.ispettorato.gov.it/it-it/strumenti-e-servizi/Pagine/Richiesta-di-intervento-ispettivo.aspx', 'Tutele sul lavoro'),
        ],
    },
]
