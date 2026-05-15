'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
    ShieldAlert, Phone, AlertTriangle, ChevronRight, ChevronLeft, 
    XCircle, ArrowRight, CheckCircle2, ShieldCheck, 
    Smartphone, Lock, Mail, CreditCard, Heart, 
    MousePointer2, Clock, Users
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbStructuredData } from '@/lib/seo'
import { PageHeader } from '@/components/ui/PageHeader'

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
            'Rimani calmo e rassicura il minore: non è colpa sua.',
            'NON cancellare nulla. NON affrontare il sospettato.',
            'Metti il dispositivo in modalità aereo ma non spegnerlo.'
        ],
        nextHour: [
            'Chiama il 114 (Emergenza Infanzia) per supporto psicologico.',
            'Contatta la Polizia Postale o vai in caserma.',
            'Contatta la scuola se l\'abuso coinvolge altri studenti.'
        ],
        doNot: [
            'NON punire il minore: lo faresti chiudere ancora di più.',
            'NON cercare di risolvere la cosa "privatamente" con l\'abusante.'
        ],
        contactLabel: 'Emergenza Infanzia',
        contactNumber: '114',
        contactLink: 'tel:114',
        moduleLink: '/moduli/modulo-05-grooming-minori',
        checklist: ['Minore rassicurato', 'Prove preservate', 'Segnalazione 114']
    },
    {
        id: 'instagram-rubato',
        title: 'Account Instagram/Meta Rubato',
        icon: Users,
        symptoms: [
            'Non riesci più ad accedere con la tua password',
            'La tua email o numero di telefono sono stati cambiati',
            'I tuoi amici ricevono messaggi truffaldini da parte tua'
        ],
        first10Min: [
            'Controlla la tua email per avvisi di cambio password.',
            'Usa la funzione "Hacked" ufficiale di Instagram.',
            'Avvisa i tuoi contatti su altri canali della truffa.'
        ],
        nextHour: [
            'Prova il video-riconoscimento se richiesto da Meta.',
            'Cambia password a tutti gli account che usano la stessa mail.',
            'Verifica che la tua mail principale non sia compromessa.'
        ],
        doNot: [
            'NON pagare "hacker" che promettono di recuperarlo su Telegram.',
            'NON inserire i tuoi dati su siti di recupero non ufficiali.'
        ],
        contactLabel: 'Supporto Meta',
        contactNumber: 'instagram.com/hacked',
        contactLink: 'https://www.instagram.com/hacked',
        moduleLink: '/moduli/modulo-02-account-security',
        checklist: ['Email controllata', 'Richiesta ufficiale inviata', 'Amici avvisati']
    },
    {
        id: 'whatsapp-rubato',
        title: 'Account WhatsApp Rubato',
        icon: Mail,
        symptoms: [
            'WhatsApp si disconnette e chiede un nuovo codice',
            'Hai dato un codice a 6 cifre a qualcuno via chat',
            'Il tuo account è usato da altri su altri dispositivi'
        ],
        first10Min: [
            'Reinstalla WhatsApp e prova ad accedere col tuo numero.',
            'Inserisci il codice SMS se riesci a riceverlo.',
            'Avvisa immediatamente i tuoi gruppi principali.'
        ],
        nextHour: [
            'Se non ricevi il codice, scrivi a support@whatsapp.com.',
            'Attiva la verifica in due passaggi (PIN) appena rientri.',
            'Controlla le sessioni WhatsApp Web attive.'
        ],
        doNot: [
            'NON dare MAI codici ricevuti via SMS a nessuno.',
            'NON disinstallare e reinstallare troppe volte (blocchi l\'SMS).'
        ],
        contactLabel: 'Email Supporto',
        contactNumber: 'support@whatsapp.com',
        contactLink: 'mailto:support@whatsapp.com',
        moduleLink: '/moduli/modulo-02b-account-security',
        checklist: ['Tentativo rientro', 'Supporto contattato', 'PIN attivato']
    },
    {
        id: 'email-compromessa',
        title: 'Email Compromessa (Hackerata)',
        icon: Mail,
        symptoms: [
            'Vedi email inviate che non hai scritto',
            'Ricevi avvisi di accesso da posizioni insolite',
            'Non ricevi più email importanti (filtri/inoltro attivati)'
        ],
        first10Min: [
            'Cambia la password immediatamente.',
            'Disconnetti tutti i dispositivi attivi.',
            'Controlla le regole di inoltro email.'
        ],
        nextHour: [
            'Verifica la cartella cestino per email eliminate dai ladri.',
            'Cambia password a banche e social collegati.',
            'Attiva subito la 2FA (codice sul telefono).'
        ],
        doNot: [
            'NON usare la vecchia password su altri siti.',
            'NON ignorare gli avvisi di sicurezza di Google/Outlook.'
        ],
        contactLabel: 'Account Google',
        contactNumber: 'Sicurezza Google',
        contactLink: 'https://myaccount.google.com/security',
        moduleLink: '/moduli/modulo-02-account-security',
        checklist: ['Password cambiata', 'Sessioni chiuse', 'Filtri controllati']
    },
    {
        id: 'banca-compromessa',
        title: 'Conto o Carta Compromessa',
        icon: CreditCard,
        symptoms: [
            'Vedi addebiti che non riconosci',
            'Ricevi codici OTP per acquisti non fatti',
            'La banca ti avvisa di movimenti sospetti'
        ],
        first10Min: [
            'Blocca la carta immediatamente tramite app o telefono.',
            'Chiama il numero verde blocchi della tua banca.',
            'Fai uno screenshot dei movimenti sospetti.'
        ],
        nextHour: [
            'Disconosci le operazioni tramite modulo ufficiale banca.',
            'Fai denuncia ai Carabinieri o Polizia.',
            'Cambia le password del tuo home banking.'
        ],
        doNot: [
            'NON aspettare il giorno dopo: il tempo è fondamentale.',
            'NON dare MAI codici OTP al telefono a finti operatori.'
        ],
        contactLabel: 'Numeri Blocchi',
        contactNumber: 'Trova il numero',
        contactLink: 'https://www.pagopa.gov.it/it/cittadini/dove-pagare/',
        moduleLink: '/moduli/modulo-14-soldi-banche-truffe',
        checklist: ['Carta bloccata', 'Banca avvisata', 'Denuncia sporta']
    },
    {
        id: 'smartphone-rubato',
        title: 'Smartphone Rubato o Perso',
        icon: Smartphone,
        symptoms: [
            'Non trovi più il telefono',
            'Ti è stato sottratto con la forza',
            'Il telefono risulta offline su "Trova il mio"'
        ],
        first10Min: [
            'Usa "Trova il mio" (Apple) o "Find My Device" (Android).',
            'Segna il dispositivo come smarrito/rubato.',
            'Blocca la SIM chiamando l\'operatore.'
        ],
        nextHour: [
            'Cambia password degli account principali sul telefono.',
            'Recupera il codice IMEI per la denuncia.',
            'Denuncia il furto per bloccare il codice IMEI a livello nazionale.'
        ],
        doNot: [
            'NON andare da solo a recuperarlo se vedi la posizione.',
            'NON rimuovere il dispositivo dall\'account (perdi il blocco).'
        ],
        contactLabel: 'Trova Dispositivo',
        contactNumber: 'Accedi al Cloud',
        contactLink: 'https://www.icloud.com/find',
        moduleLink: '/moduli/modulo-07b-privacy-smartphone',
        checklist: ['SIM bloccata', 'Account protetti', 'Denuncia IMEI']
    },
    {
        id: 'otp-condiviso',
        title: 'Ho dato un codice OTP a terzi',
        icon: Lock,
        symptoms: [
            'Qualcuno ti ha chiesto un codice via SMS e glielo hai dato',
            'Hai inserito un codice su un sito sospetto',
            'Hai autorizzato un accesso che non hai richiesto'
        ],
        first10Min: [
            'Cambia subito la password dell\'account interessato.',
            'Chiama la banca se il codice riguardava pagamenti.',
            'Disconnetti ogni sessione attiva.'
        ],
        nextHour: [
            'Verifica se sono stati cambiati dati di recupero (mail/tel).',
            'Controlla se ci sono nuovi "dispositivi autorizzati".',
            'Genera nuovi codici di backup.'
        ],
        doNot: [
            'NON sottovalutare la cosa: l\'OTP è la tua firma digitale.',
            'NON credere a chi dice che "serve per sbloccare un pacco".'
        ],
        contactLabel: 'Centro Sicurezza',
        contactNumber: 'Verifica Account',
        contactLink: '/moduli/modulo-02-account-security',
        moduleLink: '/moduli/modulo-03-truffe-phishing',
        checklist: ['Password cambiata', 'Sessioni chiuse', 'Banca avvisata']
    },
    {
        id: 'link-phishing',
        title: 'Ho cliccato un link sospetto',
        icon: MousePointer2,
        symptoms: [
            'Hai inserito password su un sito "strano"',
            'Hai scaricato un file dopo aver cliccato',
            'Il browser si comporta in modo anomalo'
        ],
        first10Min: [
            'Chiama la banca se hai inserito dati carta.',
            'Cambia la password del sito "imitato".',
            'Scansiona il dispositivo con un antivirus.'
        ],
        nextHour: [
            'Controlla se sono comparsi addebiti o accessi.',
            'Riavvia il router se eri su rete Wi-Fi.',
            'Elimina file scaricati di recente.'
        ],
        doNot: [
            'NON inserire altri dati per "annullare" l\'operazione.',
            'NON ignorare eventuali rallentamenti del sistema.'
        ],
        contactLabel: 'Antivirus Online',
        contactNumber: 'Scansione gratuita',
        contactLink: 'https://www.virustotal.com',
        moduleLink: '/moduli/modulo-03-truffe-phishing',
        checklist: ['Dati banca bloccati', 'Password cambiata', 'Scansione virus']
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
            <JsonLd data={breadcrumbStructuredData([
                { name: 'SOS Emergenze', path: '/sos' }
            ])} />
            <JsonLd data={{
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                'name': 'Protocolli di Emergenza Digitale',
                'description': 'Azioni immediate per gestire furti account, ricatti e truffe online.',
                'itemListElement': SCENARIOS.map((s, i) => ({
                    '@type': 'ListItem',
                    'position': i + 1,
                    'name': s.title,
                    'url': `https://busssola.com/sos#${s.id}`
                }))
            } as Record<string, unknown>} />

            <PageHeader 
                centered
                badge="Se è urgente, parti da qui"
                icon={AlertTriangle}
                title="Centro di Primo Soccorso"
                description="Azioni immediate per account rubati, ricatti, truffe, telefono perso, cyberstalking e altri problemi digitali."
            />

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
                        <div className="bg-sos text-white p-8 md:p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden ring-8 ring-sos/10 animate-pulse-subtle">
                            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                                <Phone size={200} />
                            </div>
                            <div className="space-y-4 relative z-10 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-2">
                                    <ShieldAlert className="w-5 h-5" /> Urgenza Massima
                                </div>
                                <h3 className="text-4xl md:text-6xl font-display font-black tracking-tight">Pericolo fisico?</h3>
                                <p className="text-white/90 font-bold text-xl max-w-xl leading-tight text-center md:text-left">Se sei vittima di violenza o minaccia fisica, chiama subito il Numero Unico Europeo.</p>
                            </div>
                            <a href="tel:112" className="bg-white text-sos font-black text-5xl md:text-7xl px-12 py-8 rounded-[2rem] shrink-0 hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-6 relative z-10 border-b-[12px] border-sos/20">
                                <Phone className="w-12 h-12 md:w-16 md:h-12 fill-current" /> 112
                            </a>
                        </div>

                        {/* Scenario Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {SCENARIOS.map((scenario) => (
                                <button
                                    key={scenario.id}
                                    onClick={() => {
                                        setSelectedScenario(scenario)
                                        window.location.hash = scenario.id
                                    }}
                                    className={cn(
                                        "w-full bg-surface border-2 border-border p-8 rounded-[2.5rem] flex flex-col items-start gap-6 text-left hover:border-sos hover:bg-sos/[0.02] hover:shadow-2xl transition-all group relative overflow-hidden",
                                        scenario.id === 'pericolo-fisico' ? "border-sos/30 bg-sos/[0.03]" : ""
                                    )}
                                >
                                    <div className={cn(
                                        "w-16 h-16 rounded-2xl flex items-center justify-center transition-all shrink-0 border-2 shadow-inner",
                                        scenario.id === 'pericolo-fisico' 
                                            ? "bg-sos text-white border-sos" 
                                            : "bg-surface-muted text-secondary border-border group-hover:bg-sos group-hover:text-white group-hover:border-sos group-hover:rotate-3"
                                    )}>
                                        <scenario.icon size={32} strokeWidth={2.5} />
                                    </div>
                                    <div className="space-y-2 text-left">
                                        <h3 className="text-2xl font-display font-black text-foreground group-hover:text-sos transition-colors tracking-tight leading-tight">
                                            {scenario.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60 text-left">
                                            <Clock className="w-3 h-3" /> Azione Immediata
                                        </div>
                                    </div>
                                    <div className="absolute bottom-8 right-8">
                                        <ChevronRight className="w-6 h-6 text-secondary/20 group-hover:text-sos group-hover:translate-x-2 transition-all" />
                                    </div>
                                </button>
                            ))}
                        </div>
                        
                        <div className="p-12 rounded-[3.5rem] bg-surface border-4 border-dashed border-border text-center space-y-6">
                            <h4 className="text-2xl font-display font-bold text-foreground">Non trovi il tuo caso tra questi?</h4>
                            <p className="text-lg text-secondary max-w-xl mx-auto leading-relaxed font-medium">
                                Se la tua situazione non è tra le emergenze critiche, esplora il catalogo completo per guide su privacy, account e sicurezza.
                            </p>
                            <Button asChild variant="outline" size="lg" className="rounded-2xl font-black uppercase tracking-widest mt-4 h-16 px-10">
                                <Link href="/moduli">Vedi tutte le guide</Link>
                            </Button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div 
                        key="detail"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="space-y-8"
                    >
                        <button 
                            onClick={handleBack}
                            className="text-secondary font-black text-xs uppercase tracking-widest hover:text-foreground transition-all flex items-center gap-2 mb-6 group"
                        >
                            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" /> Torna alla lista SOS
                        </button>

                        <Card className={cn(
                            "bg-white p-8 md:p-12 shadow-2xl relative overflow-hidden rounded-[3rem] border-2",
                            selectedScenario.id === 'pericolo-fisico' ? "border-sos" : "border-border"
                        )}>
                             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                                <div className="lg:col-span-8 space-y-12">
                                    <div className="space-y-4 text-left">
                                        <div className={cn(
                                            "w-20 h-20 rounded-[2rem] flex items-center justify-center mb-6 shadow-xl",
                                            selectedScenario.id === 'pericolo-fisico' ? "bg-sos text-white" : "bg-primary text-white"
                                        )}>
                                            <selectedScenario.icon size={40} strokeWidth={2.5} />
                                        </div>
                                        <h2 className="text-4xl md:text-6xl font-display font-black text-foreground tracking-tight leading-tight">{selectedScenario.title}</h2>
                                    </div>

                                    <div className="space-y-8 text-left">
                                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-secondary/40 border-b border-border pb-4">Protocollo di Reazione</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-6">
                                                <h4 className="flex items-center gap-2 font-black text-emerald-600 uppercase text-xs tracking-widest">
                                                    <CheckCircle2 size={18} /> Primi 10 Minuti
                                                </h4>
                                                <ul className="space-y-4 m-0 p-0 list-none">
                                                    {selectedScenario.first10Min.map((step, i) => (
                                                        <li key={i} className="flex gap-4 text-lg font-bold text-foreground leading-tight">
                                                            <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-black">{i + 1}</span>
                                                            {step}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="space-y-6">
                                                <h4 className="flex items-center gap-2 font-black text-sos uppercase text-xs tracking-widest">
                                                    <XCircle size={18} /> Cosa NON fare
                                                </h4>
                                                <ul className="space-y-4 m-0 p-0 list-none">
                                                    {selectedScenario.doNot.map((step, i) => (
                                                        <li key={i} className="flex gap-4 text-lg font-bold text-sos leading-tight">
                                                            <span className="shrink-0 w-8 h-8 rounded-full bg-sos/5 text-sos flex items-center justify-center text-sm font-black">!</span>
                                                            {step}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-border space-y-6 text-left">
                                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-secondary/40">Approfondimento</h4>
                                        <div className="flex flex-wrap gap-4">
                                            <Button asChild size="lg" className="rounded-2xl font-black uppercase tracking-widest h-16 px-10 active:scale-95 transition-all">
                                                <Link href={selectedScenario.moduleLink}>Apri Guida Completa <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <aside className="lg:col-span-4 space-y-8 text-left">
                                    <div className="bg-surface-muted p-8 rounded-[2.5rem] border-2 border-border space-y-6">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-secondary/40">Contatto Diretto</h4>
                                        <div className="space-y-2">
                                            <p className="text-sm font-black text-foreground uppercase tracking-widest">{selectedScenario.contactLabel}</p>
                                            <a 
                                                href={selectedScenario.contactLink} 
                                                target={selectedScenario.contactLink.startsWith('http') ? '_blank' : undefined}
                                                className="block text-3xl font-display font-black text-primary hover:text-primary-hover transition-colors break-words"
                                            >
                                                {selectedScenario.contactNumber}
                                            </a>
                                        </div>
                                        <Button asChild variant="outline" className="w-full rounded-xl font-black uppercase tracking-widest h-12 bg-white border-border">
                                            <a href={selectedScenario.contactLink}>Vai al servizio</a>
                                        </Button>
                                    </div>

                                    <div className="p-8 space-y-6">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-secondary/40">Checklist Rapida</h4>
                                        <ul className="space-y-4 m-0 p-0 list-none">
                                            {selectedScenario.checklist.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-sm font-bold text-secondary">
                                                    <div className="w-5 h-5 rounded-md border-2 border-border flex items-center justify-center shrink-0">
                                                        <CheckCircle2 size={12} className="text-transparent" />
                                                    </div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </aside>
                             </div>
                             
                             <div className="mt-20 p-8 bg-surface-muted/30 border-2 border-border rounded-3xl text-center text-left">
                                <p className="text-xs text-secondary/60 leading-relaxed max-w-3xl mx-auto italic">
                                    <span className="font-black uppercase not-italic block mb-2 text-[10px]">Disclaimer SOS</span>
                                    Questi protocolli sono a scopo informativo e non sostituiscono l'intervento delle autorità competenti. In caso di reati gravi, sporgi sempre denuncia formale presso le forze dell'ordine. Busssola non raccoglie dati sulle tue segnalazioni e non si assume responsabilità per l'esito delle procedure descritte.
                                </p>
                            </div>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    )
}
