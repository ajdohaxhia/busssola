'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
    ShieldAlert, Phone, AlertTriangle, ChevronRight, ChevronLeft, 
    XCircle, ArrowRight, CheckCircle2, ShieldCheck, Info, 
    Smartphone, Lock, Mail, CreditCard, Eye, Heart, 
    ShoppingBag, MousePointer2, UserX, Clock
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Scenario = {
    id: string
    title: string
    icon: React.ElementType
    symptoms: string[]
    first10Min: string[]
    nextHour: string[]
    doNot: string[]
    contactLabel: string
    contactNumber: string
    contactLink: string
    moduleLink: string
    checklist: string[]
}

const SCENARIOS: Scenario[] = [
    {
        id: 'pericolo-fisico',
        title: 'Pericolo Fisico Immediato',
        icon: ShieldAlert,
        symptoms: [
            'Sei vittima di violenza o minaccia fisica reale',
            'Qualcuno ti sta seguendo o minaccia di raggiungerti a casa',
            'Sei testimone di un reato violento'
        ],
        first10Min: [
            'Mettiti in un luogo sicuro o affollato.',
            'Chiama il 112 immediatamente.',
            'Non riagganciare finché non te lo dicono.'
        ],
        nextHour: [
            'Segui le istruzioni delle forze dell\'ordine.',
            'Cerca testimoni o telecamere nella zona.',
            'Contatta familiari o persone di fiducia.'
        ],
        doNot: [
            'NON cercare di affrontare l\'aggressore da solo.',
            'NON aspettare che la situazione migliori da sola.'
        ],
        contactLabel: 'Emergenza Nazionale',
        contactNumber: '112',
        contactLink: 'tel:112',
        moduleLink: '/moduli/modulo-01-primo-soccorso',
        checklist: ['Posizione sicura', 'Chiamata 112', 'Familiari avvisati']
    },
    {
        id: 'sextortion-adulti',
        title: 'Ricatto con immagini (Sextortion)',
        icon: Heart,
        symptoms: [
            'Minaccia di inviare foto/video intimi a amici o familiari',
            'Richiesta di denaro via chat o email',
            'Pressione psicologica estrema'
        ],
        first10Min: [
            'Interrompi ogni comunicazione immediatamente.',
            'NON PAGARE MAI: il pagamento conferma che sei ricattabile.',
            'Fai screenshot completi di chat e profili.'
        ],
        nextHour: [
            'Segnala su StopNCII.org per bloccare la diffusione automatica.',
            'Metti in privato tutti i tuoi profili social.',
            'Segnala il reato sul Commissariato di PS Online.'
        ],
        doNot: [
            'NON inviare altro materiale per "calmarli".',
            'NON cancellare le chat: sono la tua prova principale.',
            'NON vergognarti: sei vittima di un reato professionale.'
        ],
        contactLabel: 'Polizia Postale',
        contactNumber: 'Segnala il reato',
        contactLink: 'https://www.commissariatodips.it/',
        moduleLink: '/moduli/modulo-04-sextortion-ricatti',
        checklist: ['Zero comunicazioni', 'Screenshot salvati', 'StopNCII inviato']
    },
    {
        id: 'minore-ricatto',
        title: 'Minore coinvolto in ricatto/grooming',
        icon: ShieldCheck,
        symptoms: [
            'Un adulto chiede segreti, foto o incontri a un minore',
            'Il minore appare isolato, ansioso o cambia abitudini',
            'Richieste di "sfide" o azioni sessualizzate online'
        ],
        first10Min: [
            'Rassicura il minore: non è colpa sua.',
            'Interrompi il contatto senza cancellare nulla.',
            'Metti via il dispositivo (senza resettarlo).'
        ],
        nextHour: [
            'Contatta il 114 Emergenza Infanzia.',
            'Chiama la Polizia Postale.',
            'Documenta i nomi utente e le piattaforme coinvolte.'
        ],
        doNot: [
            'NON colpevolizzare il minore.',
            'NON agire d\'impulso contattando l\'aggressore.',
            'NON cancellare le prove per "pulire" il dispositivo.'
        ],
        contactLabel: 'Emergenza Infanzia',
        contactNumber: '114',
        contactLink: 'tel:114',
        moduleLink: '/moduli/modulo-05-grooming-minori',
        checklist: ['Minore rassicurato', 'Contatto 114', 'Prove intatte']
    },
    {
        id: 'instagram-rubato',
        title: 'Account Instagram / Facebook rubato',
        icon: UserX,
        symptoms: [
            'Non riesci più ad accedere al profilo',
            'Ricevuta email di cambio indirizzo/password non richiesta',
            'Amici segnalano che stai postando truffe (crypto, ecc.)'
        ],
        first10Min: [
            'Usa instagram.com/hacked o facebook.com/hacked subito.',
            'Controlla la tua email: se hanno accesso lì, controlleranno tutto.',
            'Avvisa i contatti stretti su WhatsApp/Storie di amici.'
        ],
        nextHour: [
            'Cambia password della mail e attiva la 2FA ovunque.',
            'Revoca l\'accesso a tutte le app collegate all\'account.',
            'Richiedi il recupero via video-selfie se disponibile.'
        ],
        doNot: [
            'NON pagare "hacker di recupero" che ti contattano: sono altre truffe.',
            'NON cliccare su altri link in email sospette.'
        ],
        contactLabel: 'Centro Assistenza Meta',
        contactNumber: 'Recupero Ufficiale',
        contactLink: 'https://help.instagram.com/hacked',
        moduleLink: '/moduli/modulo-01-primo-soccorso',
        checklist: ['Hacked tool usato', 'Password email cambiata', 'Contatti avvisati']
    },
    {
        id: 'whatsapp-rubato',
        title: 'Account WhatsApp rubato',
        icon: Smartphone,
        symptoms: [
            'WhatsApp si disconnette improvvisamente',
            'Hai dato un codice SMS a qualcuno poco prima',
            'Non riesci a ri-verificare il numero'
        ],
        first10Min: [
            'Prova a verificare di nuovo il numero tramite SMS.',
            'Avvisa immediatamente amici e familiari: il ladro chiederà soldi a tuo nome.',
            'Invia un\'email a support@whatsapp.com con oggetto "Perso/Rubato: Disattivazione del mio account".'
        ],
        nextHour: [
            'Se il ladro ha messo la 2FA, dovrai aspettare 7 giorni per rientrare.',
            'Monitora i tuoi conti bancari se avevi file sensibili su WhatsApp.',
            'Pensa a quali segreti o documenti avevi in chat.'
        ],
        doNot: [
            'NON dare mai a nessuno i codici ricevuti via SMS.',
            'NON pagare riscatti per l\'account.'
        ],
        contactLabel: 'Assistenza WhatsApp',
        contactNumber: 'Invia Email Supporto',
        contactLink: 'mailto:support@whatsapp.com?subject=Perso/Rubato: Disattivazione del mio account',
        moduleLink: '/moduli/modulo-01-primo-soccorso',
        checklist: ['SMS ri-verificato', 'Supporto contattato', 'Gruppi avvisati']
    },
    {
        id: 'email-compromessa',
        title: 'Email compromessa (Hackerata)',
        icon: Mail,
        symptoms: [
            'Email inviate che non hai scritto tu',
            'Regole di inoltro automatico che non hai impostato',
            'Password cambiata improvvisamente'
        ],
        first10Min: [
            'Cerca di cambiare la password immediatamente.',
            'Attiva l\'Autenticazione a Due Fattori (2FA).',
            'Verifica le sessioni attive e fai il logout da tutto.'
        ],
        nextHour: [
            'Controlla le "Regole di posta": spesso gli hacker inoltrano le tue mail.',
            'Controlla le mail inviate e il cestino.',
            'Cambia password a tutti i siti importanti collegati a questa mail.'
        ],
        doNot: [
            'NON usare la stessa vecchia password.',
            'NON aspettare se vedi sessioni da paesi stranieri.'
        ],
        contactLabel: 'Sicurezza Google/Apple',
        contactNumber: 'Gestione Account',
        contactLink: 'https://myaccount.google.com/security',
        moduleLink: '/moduli/modulo-02-account-security',
        checklist: ['Nuova Password', '2FA attiva', 'Regole inoltro rimosse']
    },
    {
        id: 'sim-swap',
        title: 'SIM Swap (Niente segnale)',
        icon: Smartphone,
        symptoms: [
            'Il telefono perde segnale all\'improvviso ("Solo chiamate emergenza")',
            'Non ricevi più SMS o chiamate in zona coperta',
            'Ricevuta notifica di "Sostituzione SIM" non richiesta'
        ],
        first10Min: [
            'Chiama il tuo operatore telefonico da un altro telefono subito.',
            'Blocca la SIM e verifica se è stata emessa una nuova.',
            'Accedi subito all\'Home Banking e blocca gli accessi.'
        ],
        nextHour: [
            'Controlla l\'email per tentativi di cambio password.',
            'Vai fisicamente in un negozio dell\'operatore con documento.',
            'Sposta la 2FA da SMS ad App Authenticator appena possibile.'
        ],
        doNot: [
            'NON pensare che sia un semplice guasto tecnico.',
            'NON aspettare il giorno dopo.'
        ],
        contactLabel: 'Tuo Operatore',
        contactNumber: 'Blocca SIM',
        contactLink: '#',
        moduleLink: '/moduli/modulo-01b-primo-soccorso',
        checklist: ['Operatore chiamato', 'SIM bloccata', 'Banca avvisata']
    },
    {
        id: 'banca-compromessa',
        title: 'Carta o Banca compromessa',
        icon: CreditCard,
        symptoms: [
            'Transazioni non riconosciute sull\'estratto conto',
            'SMS dalla banca che chiede di verificare un acquisto',
            'Hai inserito i dati della carta su un sito sospetto'
        ],
        first10Min: [
            'Blocca la carta dall\'app o chiama il numero verde blocco carte.',
            'Blocca l\'accesso all\'home banking se sospetti furto credenziali.',
            'Fai uno screenshot della transazione sospetta.'
        ],
        nextHour: [
            'Contesta l\'operazione (Disconoscimento) via app o banca.',
            'Cambia le password di accesso alla banca.',
            'Sporgi denuncia alla Polizia o Carabinieri.'
        ],
        doNot: [
            'NON aspettare di parlare con un operatore se puoi bloccare da solo.',
            'NON cliccare su link in SMS che sembrano della banca.'
        ],
        contactLabel: 'Numero Verde Blocchi',
        contactNumber: '800 822 056 (Esempio)',
        contactLink: 'tel:800822056',
        moduleLink: '/moduli/modulo-03-truffe-phishing',
        checklist: ['Carta bloccata', 'Transazione contestata', 'Password cambiata']
    },
    {
        id: 'smartphone-rubato',
        title: 'Smartphone rubato o perso',
        icon: Smartphone,
        symptoms: [
            'Il telefono non è più con te',
            'Vedi una posizione sconosciuta su "Trova il mio dispositivo"'
        ],
        first10Min: [
            'Usa iCloud.com/find o google.com/android/find.',
            'Attiva "Modalità smarrito" e avvia il "Wipe" (cancellazione dati).',
            'Chiama l\'operatore per bloccare la SIM.'
        ],
        nextHour: [
            'Cambia password dell\'account Google/Apple e dei social.',
            'Sporgi denuncia fornendo il codice IMEI.',
            'Contatta la banca per disabilitare Apple/Google Pay.'
        ],
        doNot: [
            'NON andare da solo all\'indirizzo indicato dal GPS.',
            'NON aspettare che la batteria si scarichi: agisci ora.'
        ],
        contactLabel: 'Carabinieri / Polizia',
        contactNumber: '112',
        contactLink: 'tel:112',
        moduleLink: '/moduli/modulo-01-primo-soccorso',
        checklist: ['Reset remoto inviato', 'SIM bloccata', 'Denuncia con IMEI']
    },
    {
        id: 'doxxing-emergenza',
        title: 'Doxxing (Dati diffusi online)',
        icon: Eye,
        symptoms: [
            'Hanno pubblicato il tuo indirizzo, telefono o dati privati',
            'Ricevi decine di chiamate o messaggi da sconosciuti',
            'Minacce basate sulla tua posizione reale'
        ],
        first10Min: [
            'Rendi privati tutti i tuoi profili social.',
            'Non rispondere a nessuno.',
            'Documenta tutto con screenshot completi.'
        ],
        nextHour: [
            'Segnala i contenuti alle piattaforme chiedendo la rimozione.',
            'Cerca il tuo nome su Google e usa "Remove your personal results".',
            'Valuta l\'ammonimento del Questore se sai chi è stato.'
        ],
        doNot: [
            'NON cercare di vendicarti pubblicando dati dell\'attaccante.',
            'NON rispondere alle provocazioni.'
        ],
        contactLabel: 'Garante Privacy',
        contactNumber: 'Segnala violazione',
        contactLink: 'https://www.garanteprivacy.it/',
        moduleLink: '/moduli/modulo-06-stalking-doxxing',
        checklist: ['Profili privati', 'Screenshot salvati', 'Richieste rimozione']
    },
    {
        id: 'cyberstalking-emergenza',
        title: 'Cyberstalking / Persecuzione',
        icon: AlertTriangle,
        symptoms: [
            'Messaggi ossessivi da account multipli',
            'Controllo costante dei tuoi spostamenti online',
            'Creazione di finti profili a tuo nome per screditarti'
        ],
        first10Min: [
            'Non rispondere mai: il silenzio è la tua difesa migliore.',
            'Inizia a raccogliere un log cronologico delle molestie.',
            'Blocca gli account ma solo DOPO aver fatto gli screenshot.'
        ],
        nextHour: [
            'Contatta il 1522 (Anti Violenza e Stalking).',
            'Parlane con una persona di fiducia o un centro antiviolenza.',
            'Rafforza la privacy di tutti i tuoi account.'
        ],
        doNot: [
            'NON cercare di "ragionare" con lo stalker.',
            'NON isolarti per paura.'
        ],
        contactLabel: 'Anti-Stalking',
        contactNumber: '1522',
        contactLink: 'tel:1522',
        moduleLink: '/moduli/modulo-06-stalking-doxxing',
        checklist: ['Zero risposte', 'Log molestie iniziato', 'Chiamata 1522']
    },
    {
        id: 'revenge-porn',
        title: 'Revenge Porn (Diffusione illecita)',
        icon: Lock,
        symptoms: [
            'Qualcuno ha pubblicato foto/video intimi senza consenso',
            'Vedi materiale privato circolare su Telegram o gruppi chat',
            'Minaccia di pubblicazione imminente'
        ],
        first10Min: [
            'Usa il canale prioritario del Garante Privacy.',
            'Segnala su StopNCII.org (per maggiorenni).',
            'NON cancellare le chat: sono prove di reato penale.'
        ],
        nextHour: [
            'Fai screenshot degli URL e dei post prima che vengano rimossi.',
            'Contatta la Polizia Postale.',
            'Chiedi ai siti host la rimozione immediata citando la legge.'
        ],
        doNot: [
            'NON pagare ricatti.',
            'NON supplicare l\'aggressore.',
            'NON agire per vergogna: la legge ti tutela in modo specifico.'
        ],
        contactLabel: 'Garante Privacy',
        contactNumber: 'Canale Urgente',
        contactLink: 'https://www.gpdp.it/revengeporn',
        moduleLink: '/moduli/modulo-04-sextortion-ricatti',
        checklist: ['Segnalazione Garante', 'StopNCII inviato', 'Screenshot URL']
    },
    {
        id: 'truffa-marketplace',
        title: 'Truffa Marketplace (Vinted/eBay/Subito)',
        icon: ShoppingBag,
        symptoms: [
            'Hai pagato fuori dalla piattaforma (es. Bonifico/Amici)',
            'Il venditore è sparito dopo il pagamento',
            'Hai ricevuto un pacco vuoto o diverso'
        ],
        first10Min: [
            'Segnala l\'utente all\'assistenza ufficiale del sito.',
            'Se hai usato PayPal "Beni e Servizi", apri una contestazione.',
            'Salva l\'annuncio e le chat (spesso vengono cancellati).'
        ],
        nextHour: [
            'Se hai pagato con carta, contatta la banca per il "Chargeback".',
            'Fai denuncia online sul sito della Polizia Postale.',
            'Controlla se l\'IBAN o la mail del truffatore sono già segnalati online.'
        ],
        doNot: [
            'NON pagare mai fuori dal sistema di protezione ufficiale.',
            'NON accettare "pagamenti per sbloccare la spedizione".'
        ],
        contactLabel: 'Polizia Postale',
        contactNumber: 'Denuncia Online',
        contactLink: 'https://www.commissariatodips.it/',
        moduleLink: '/moduli/modulo-03b-truffe-phishing',
        checklist: ['Segnalazione app', 'Contestazione PayPal', 'Screenshot annuncio']
    },
    {
        id: 'link-falso',
        title: 'Ho cliccato un link falso (Phishing)',
        icon: MousePointer2,
        symptoms: [
            'Hai inserito password o dati su un sito strano',
            'Hai scaricato un file dopo un SMS del corriere',
            'Il sito della banca sembrava diverso dal solito'
        ],
        first10Min: [
            'Cambia la password di quel servizio immediatamente.',
            'Attiva la 2FA se non era presente.',
            'Se hai inserito dati della carta, bloccala subito.'
        ],
        nextHour: [
            'Cambia le password di altri siti se erano uguali.',
            'Fai una scansione antivirus se hai scaricato un file.',
            'Controlla le ultime transazioni e gli ultimi accessi.'
        ],
        doNot: [
            'NON riutilizzare la vecchia password compromessa.',
            'NON ignorare il segnale se il browser ti avvisa di sito non sicuro.'
        ],
        contactLabel: 'Sicurezza Web',
        contactNumber: 'Controllo Credenziali',
        contactLink: 'https://haveibeenpwned.com/',
        moduleLink: '/moduli/modulo-03-truffe-phishing',
        checklist: ['Nuova Password', '2FA attiva', 'Blocco carta (se inserita)']
    },
    {
        id: 'otp-condiviso',
        title: 'Ho dato codici OTP a qualcuno',
        icon: Lock,
        symptoms: [
            'Un finto operatore ti ha chiesto un codice SMS',
            'Qualcuno al telefono ti ha guidato in una procedura',
            'Vedi operazioni che non hai fatto tu'
        ],
        first10Min: [
            'Riacciuffa il controllo dell\'account se possibile.',
            'Cambia password e scarica i codici di backup.',
            'Se era per la banca, blocca tutto ora.'
        ],
        nextHour: [
            'Verifica che non abbiano aggiunto email o telefoni di recupero.',
            'Fai logout da tutte le sessioni attive.',
            'Avvisa l\'assistenza ufficiale che hai subìto una manipolazione.'
        ],
        doNot: [
            'NON credere a chi ti chiede codici al telefono: NESSUNO lo fa.',
            'NON riagganciare con la banca finché non sei sicuro del blocco.'
        ],
        contactLabel: 'Tua Banca / Servizio',
        contactNumber: 'Assistenza Urgente',
        contactLink: '#',
        moduleLink: '/moduli/modulo-01b-primo-soccorso',
        checklist: ['Sessioni rimosse', 'Nuovi recuperi rimossi', 'Blocco banca']
    },
    {
        id: 'telefono-spiato',
        title: 'Paura telefono spiato (Spyware)',
        icon: Eye,
        symptoms: [
            'Batteria che si scarica velocemente e telefono caldo',
            'App che si aprono da sole o strani rumori in chiamata',
            'Qualcuno sa cose che potevi sapere solo leggendo le tue chat'
        ],
        first10Min: [
            'Metti il telefono in modalità aereo.',
            'Controlla la lista delle app installate cercando nomi strani.',
            'Verifica i permessi di accessibilità e geolocalizzazione.'
        ],
        nextHour: [
            'Esegui un backup dei soli file (foto, contatti) e non delle app.',
            'Valuta il ripristino di fabbrica (Factory Reset).',
            'Cambia tutte le password importanti da un altro dispositivo sicuro.'
        ],
        doNot: [
            'NON fare backup completi che includono il malware.',
            'NON parlarne vicino al telefono se temi microfoni attivi.'
        ],
        contactLabel: 'Supporto Tecnico',
        contactNumber: 'Checkup Sicurezza',
        contactLink: '/moduli/modulo-07b-privacy-smartphone',
        moduleLink: '/moduli/modulo-07b-privacy-smartphone',
        checklist: ['Aereo attivo', 'Controllo app sospette', 'Password cambiate (esterno)']
    }
]

export default function SOSPage() {
    const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null)

    // Handle hash navigation for SOS links
    useEffect(() => {
        const hash = window.location.hash.replace('#', '')
        if (hash) {
            const scenario = SCENARIOS.find(s => s.id === hash)
            if (scenario) setSelectedScenario(scenario)
        }
    }, [])

    const handleBack = () => {
        setSelectedScenario(null)
        window.history.pushState(null, '', '/sos')
    }

    return (
        <Container size="lg" className="py-12 min-h-screen">
            <header className="space-y-6 text-center pb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sos/10 text-sos mb-4 border border-sos/20">
                    <AlertTriangle size={40} />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground leading-[1.1]">
                    Centro di Primo Soccorso
                </h1>
                <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
                    Mantieni la calma. Se sei in pericolo di vita o vittima di violenza, chiama il <span className="text-sos font-bold">112</span>. Per emergenze digitali, scegli il tuo caso.
                </p>
            </header>

            <AnimatePresence mode="wait">
                {!selectedScenario ? (
                    <motion.div 
                        key="list"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-12"
                    >
                        {/* High Impact Physical Danger Alert */}
                        <div className="bg-sos text-white p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden ring-4 ring-sos/20 animate-in fade-in zoom-in duration-500">
                            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                                <Phone size={160} />
                            </div>
                            <div className="space-y-3 relative z-10 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                                    <ShieldAlert className="w-4 h-4" /> Urgenza Massima
                                </div>
                                <h3 className="text-3xl font-bold tracking-tight">Pericolo imminente o violenza?</h3>
                                <p className="text-white/90 font-medium text-lg max-w-xl leading-snug">Chiama immediatamente il Numero Unico Europeo per le Emergenze. È gratuito e attivo 24/7.</p>
                            </div>
                            <a href="tel:112" className="bg-white text-sos font-bold text-4xl px-12 py-6 rounded-3xl shrink-0 hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-4 relative z-10 border-b-8 border-sos/10">
                                <Phone className="w-8 h-8 fill-current" /> 112
                            </a>
                        </div>

                        {/* Scenario Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {SCENARIOS.map((scenario) => (
                                <button
                                    key={scenario.id}
                                    onClick={() => {
                                        setSelectedScenario(scenario)
                                        window.location.hash = scenario.id
                                    }}
                                    className={cn(
                                        "w-full bg-surface border border-border p-6 rounded-[2rem] flex flex-col items-start gap-5 text-left hover:border-sos/50 hover:bg-sos/[0.02] hover:shadow-lg transition-all group relative overflow-hidden",
                                        scenario.id === 'pericolo-fisico' ? "border-sos/30 bg-sos/[0.03]" : ""
                                    )}
                                >
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shrink-0 border",
                                        scenario.id === 'pericolo-fisico' 
                                            ? "bg-sos text-white border-sos" 
                                            : "bg-surface-muted text-secondary border-border group-hover:bg-sos group-hover:text-white group-hover:border-sos"
                                    )}>
                                        <scenario.icon size={24} />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-bold text-foreground group-hover:text-sos transition-colors tracking-tight leading-tight">
                                            {scenario.title}
                                        </h3>
                                        <p className="text-xs text-secondary/70 font-bold uppercase tracking-widest pt-1">
                                            {scenario.id === 'pericolo-fisico' ? 'Aiuto Fisico' : 'Aiuto Digitale'}
                                        </p>
                                    </div>
                                    <div className="absolute bottom-6 right-6">
                                        <ChevronRight className="w-5 h-5 text-secondary/40 group-hover:text-sos group-hover:translate-x-1 transition-all" />
                                    </div>
                                </button>
                            ))}
                        </div>
                        
                        <div className="p-8 rounded-[2.5rem] bg-surface border-2 border-dashed border-border text-center space-y-4">
                            <h4 className="text-xl font-bold text-foreground">Non trovi il tuo caso?</h4>
                            <p className="text-secondary max-w-lg mx-auto leading-relaxed">
                                Se la tua situazione non è tra queste, vai al catalogo completo delle guide per trovare approfondimenti su privacy e sicurezza.
                            </p>
                            <Button asChild variant="outline" className="rounded-xl font-bold mt-2">
                                <Link href="/moduli">Vedi tutto il catalogo</Link>
                            </Button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div 
                        key="detail"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className="space-y-8"
                    >
                        <button 
                            onClick={handleBack}
                            className="text-secondary font-bold text-xs uppercase tracking-widest hover:text-foreground transition-colors flex items-center gap-2 mb-4 group"
                        >
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Torna alla lista SOS
                        </button>

                        <Card className={cn(
                            "bg-white p-8 md:p-12 shadow-2xl relative overflow-hidden rounded-[3rem] border-2",
                            selectedScenario.id === 'pericolo-fisico' ? "border-sos" : "border-border"
                        )}>
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                                <selectedScenario.icon size={400} className="text-sos" />
                            </div>
                            
                            <div className="relative z-10 space-y-12">
                                <div className="space-y-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="space-y-2">
                                            <Badge className="bg-sos/10 text-sos border-sos/20 uppercase tracking-widest text-[10px] font-bold">Protocollo Urgente</Badge>
                                            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground tracking-tight leading-tight">
                                                {selectedScenario.title}
                                            </h2>
                                        </div>
                                        <div className={cn(
                                            "w-20 h-20 rounded-3xl flex items-center justify-center shrink-0 border shadow-inner",
                                            selectedScenario.id === 'pericolo-fisico' ? "bg-sos text-white border-sos" : "bg-surface-muted text-secondary border-border"
                                        )}>
                                            <selectedScenario.icon size={40} />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <h3 className="text-xs font-bold text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
                                            <Info className="w-4 h-4" /> Segnali e Sintomi
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {selectedScenario.symptoms.map((s, i) => (
                                                <div key={i} className="flex gap-4 text-foreground font-semibold bg-surface/50 p-4 rounded-2xl border border-border/40 leading-snug">
                                                    <span className="text-sos font-bold">•</span> {s}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div className="bg-emerald-50/50 rounded-[2rem] p-8 border border-emerald-100 space-y-6 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-6 opacity-10">
                                            <Clock className="w-12 h-12 text-emerald-600" />
                                        </div>
                                        <div className="flex items-center gap-3 text-emerald-800 font-bold uppercase tracking-wider text-xs">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Primi 10 minuti
                                        </div>
                                        <ul className="space-y-4 m-0 p-0 list-none">
                                            {selectedScenario.first10Min.map((a, i) => (
                                                <li key={i} className="text-foreground font-bold leading-relaxed flex gap-4 bg-white/40 p-4 rounded-xl border border-emerald-200/50 shadow-sm">
                                                    <span className="text-emerald-500 font-black">{i + 1}</span> {a}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-blue-50/50 rounded-[2rem] p-8 border border-blue-100 space-y-6 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-6 opacity-10">
                                            <Clock className="w-12 h-12 text-blue-600" />
                                        </div>
                                        <div className="flex items-center gap-3 text-blue-800 font-bold uppercase tracking-wider text-xs">
                                            <Info className="w-5 h-5 text-blue-600" /> Nella prossima ora
                                        </div>
                                        <ul className="space-y-4 m-0 p-0 list-none">
                                            {selectedScenario.nextHour.map((a, i) => (
                                                <li key={i} className="text-foreground font-bold leading-relaxed flex gap-4 bg-white/40 p-4 rounded-xl border border-blue-200/50 shadow-sm">
                                                    <span className="text-blue-500 font-black">•</span> {a}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-sos/[0.02] rounded-[2rem] p-8 border border-sos/10 space-y-6">
                                    <div className="flex items-center gap-3 text-sos font-bold uppercase tracking-wider text-xs">
                                        <XCircle className="w-5 h-5" /> Cosa NON fare assolutamente
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {selectedScenario.doNot.map((d, i) => (
                                            <div key={i} className="text-sos font-bold leading-relaxed flex gap-3 bg-white p-4 rounded-xl border border-sos/10 shadow-sm">
                                                <span className="font-black text-xl leading-none">✕</span> {d}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="space-y-6">
                                    <h3 className="text-sm font-bold text-foreground uppercase tracking-widest text-center">Contatto Istituzionale di Riferimento:</h3>
                                    
                                    {/* SITUATIONAL URGENT CALLS */}
                                    {selectedScenario.id === 'pericolo-fisico' && (
                                        <div className="p-6 bg-sos text-white rounded-3xl text-center space-y-2 mb-4 border-b-8 border-sos-border shadow-xl">
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70">Emergenza Reale</p>
                                            <p className="text-3xl font-black">Chiama subito il 112</p>
                                            <p className="text-sm font-medium">Non aspettare. La tua sicurezza fisica è la priorità.</p>
                                        </div>
                                    )}

                                    {(selectedScenario.id === 'minore-ricatto' || selectedScenario.id === 'grooming') && (
                                        <div className="p-6 bg-sos text-white rounded-3xl text-center space-y-2 mb-4 border-b-8 border-sos-border shadow-xl">
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70">Tutela Minori</p>
                                            <p className="text-3xl font-black">Contatta subito il 114 o 112</p>
                                            <p className="text-sm font-medium">Se un minore è in pericolo, le autorità devono essere avvisate immediatamente.</p>
                                        </div>
                                    )}

                                    {(selectedScenario.id === 'cyberstalking-emergenza' || selectedScenario.id === 'stalking') && (
                                        <div className="p-6 bg-sos text-white rounded-3xl text-center space-y-2 mb-4 border-b-8 border-sos-border shadow-xl">
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70">Violenza e Stalking</p>
                                            <p className="text-3xl font-black">Chiama 112 o contatta 1522</p>
                                            <p className="text-sm font-medium">Se c’è rischio immediato chiama 112. Per supporto antiviolenza usa il 1522.</p>
                                        </div>
                                    )}

                                    <a 
                                        href={selectedScenario.contactLink}
                                        target={selectedScenario.contactLink.startsWith('http') ? '_blank' : '_self'}
                                        className={cn(
                                            "block p-8 rounded-[2rem] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-2xl group border-b-8",
                                            selectedScenario.id === 'pericolo-fisico' ? "bg-white text-sos border-sos/10" : "bg-foreground text-background border-secondary/20"
                                        )}
                                    >
                                        <div className="flex justify-between items-center gap-8">
                                            <div className="space-y-1">
                                                <p className="opacity-70 font-black text-[10px] uppercase tracking-[0.3em] mb-1">{selectedScenario.contactLabel}</p>
                                                <p className="text-2xl md:text-4xl font-bold tracking-tighter">{selectedScenario.contactNumber}</p>
                                            </div>
                                            <div className="bg-white/20 p-5 rounded-full shrink-0 group-hover:bg-white/30 transition-colors">
                                                {selectedScenario.contactLink.startsWith('http') ? <ArrowRight className="w-8 h-8" /> : <Phone className="w-8 h-8" />}
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="flex flex-wrap gap-2">
                                        {selectedScenario.checklist.map((item, i) => (
                                            <Badge key={i} variant="outline" className="rounded-full px-3 py-1 font-bold text-[10px] uppercase text-secondary border-secondary/20">
                                                <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-500" /> {item}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Link 
                                        href={selectedScenario.moduleLink} 
                                        className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-2xl hover:bg-primary-hover transition-all shadow-lg group text-sm uppercase tracking-widest"
                                    >
                                        Guida Completa <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </Card>

                        <div className="p-8 rounded-[2rem] bg-surface border border-border text-sm text-secondary/80 leading-relaxed italic text-center">
                            <p>
                                <strong>Disclaimer:</strong> Le informazioni fornite in questa pagina hanno scopo puramente informativo e di orientamento operativo immediato. Non sostituiscono il supporto di autorità, avvocati, medici o tecnici specializzati. Busssola non si assume responsabilità per l'esito delle procedure descritte.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    )
}
