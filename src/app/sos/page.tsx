'use client'

import { useState, useEffect } from 'react'
import { 
    ShieldAlert, Phone, AlertTriangle, 
    XCircle, ArrowRight, CheckCircle2, ShieldCheck, 
    Smartphone, Lock, Mail, CreditCard, Heart, 
    Users, Database,
    Copy, Printer, Info, ExternalLink, MessageSquare,
    Clock
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { PageHeader } from '@/components/ui/PageHeader'
import { toast } from 'sonner'

type Scenario = {
    id: string
    title: string
    icon: React.ElementType
    first10Min: string[]
    doNow: string[]
    doNot: string[]
    saveEvidence: string[]
    whoToContact: string[]
    whenToCall112: string
    shortMessage?: string
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
        first10Min: [
            'Mettiti in sicurezza: allontanati dal pericolo se possibile.',
            'Chiama immediatamente il 112.',
            'Non riagganciare finché l\'operatore non te lo dice.'
        ],
        doNow: [
            'Raggiungi un luogo affollato o un esercizio pubblico aperto.',
            'Se sei in casa, chiuditi in una stanza e chiedi aiuto dalla finestra.',
            'Cerca di attirare l\'attenzione gridando "Aiuto" o "Al fuoco".'
        ],
        doNot: [
            'NON affrontare l\'aggressore da solo.',
            'NON aspettare che la situazione si calmi da sola.',
            'NON cercare di recuperare beni materiali a rischio della tua vita.'
        ],
        saveEvidence: [
            'Cerca di ricordare i tratti somatici o l\'abbigliamento.',
            'Nota la direzione di fuga e l\'eventuale targa.',
            'Non toccare nulla sulla scena se è avvenuto un reato.'
        ],
        whoToContact: ['Carabinieri / Polizia (112)', 'Pronto Soccorso (118/112)'],
        whenToCall112: 'Sempre e immediatamente in caso di minaccia fisica, violenza o furto in corso.',
        shortMessage: 'Sono in pericolo a [Tua Posizione]. Ho bisogno di aiuto immediato. [Descrizione sintetica del pericolo]',
        contactLabel: 'Emergenza Nazionale',
        contactNumber: '112',
        contactLink: 'tel:112',
        moduleLink: '/moduli/modulo-01-primo-soccorso',
        checklist: ['Posizione sicura raggiunta', 'Chiamata 112 effettuata', 'Familiari avvisati']
    },
    {
        id: 'sextortion-adulti',
        title: 'Ricatto con Immagini (Sextortion)',
        icon: Heart,
        first10Min: [
            'Interrompi immediatamente ogni comunicazione con il ricattatore.',
            'NON PAGARE: il pagamento non ferma il ricatto, lo alimenta.',
            'Fai screenshot di tutta la chat, del profilo del ricattatore e delle minacce.'
        ],
        doNow: [
            'Segnala il contenuto su StopNCII.org per prevenirne la diffusione.',
            'Privatizza i tuoi profili social e limita chi può contattarti.',
            'Avvisa una persona di fiducia per non gestire il peso emotivo da solo.'
        ],
        doNot: [
            'NON inviare altre foto o video.',
            'NON cancellare le chat prima di aver fatto gli screenshot.',
            'NON minacciare a tua volta il ricattatore.'
        ],
        saveEvidence: [
            'Screenshot delle minacce e della richiesta di soldi.',
            'URL del profilo del ricattatore.',
            'Dati per il pagamento forniti (es. account PayPal, IBAN, Crypto).'
        ],
        whoToContact: ['Polizia Postale', 'Associazione Meter', 'StopNCII.org'],
        whenToCall112: 'Se il ricatto è accompagnato da minacce di violenza fisica o se conosci l\'identità reale dell\'aggressore vicino a te.',
        shortMessage: 'Sto subendo un ricatto online con mie immagini intime. Ho interrotto i contatti e non ho pagato. Ho bisogno di supporto per la rimozione e la denuncia.',
        contactLabel: 'Polizia Postale',
        contactNumber: 'Segnala il reato',
        contactLink: 'https://www.commissariatodips.it/',
        moduleLink: '/moduli/modulo-04-sextortion-ricatti',
        checklist: ['Zero comunicazioni', 'Screenshot salvati', 'Segnalazione StopNCII fatta']
    },
    {
        id: 'minore-ricatto',
        title: 'Minore in Pericolo Online',
        icon: ShieldCheck,
        first10Min: [
            'Rassicura il minore: digli che non è colpa sua e che lo aiuterai.',
            'Non cancellare nulla: le prove sono fondamentali per le autorità.',
            'Metti il dispositivo in modalità aereo ma non spegnerlo.'
        ],
        doNow: [
            'Chiama il 114 (Emergenza Infanzia) per supporto psicologico e procedurale.',
            'Contatta la Polizia Postale tramite il portale ufficiale.',
            'Avvisa il referente cyberbullismo della scuola se il fatto riguarda compagni.'
        ],
        doNot: [
            'NON punire il minore: lo porterebbe a nascondere futuri problemi.',
            'NON cercare di contattare il sospettato per "chiarire".',
            'NON diffondere a tua volta il materiale per "far vedere cosa hanno fatto".'
        ],
        saveEvidence: [
            'Tutte le chat, email e messaggi ricevuti.',
            'ID dei profili social coinvolti.',
            'Cronologia del browser se rilevante.'
        ],
        whoToContact: ['Emergenza Infanzia (114)', 'Telefono Azzurro (1.96.96)', 'Polizia Postale'],
        whenToCall112: 'Se c\'è un rischio imminente di incontro fisico o se il minore è scomparso.',
        shortMessage: 'Mio figlio/a è vittima di un predatore/bullo online. Ho preservato le prove e ho bisogno di assistenza urgente per proteggerlo/a.',
        contactLabel: 'Emergenza Infanzia',
        contactNumber: '114',
        contactLink: 'tel:114',
        moduleLink: '/moduli/modulo-05-grooming-minori',
        checklist: ['Minore rassicurato', 'Prove preservate', 'Segnalazione 114 effettuata']
    },
    {
        id: 'instagram-rubato',
        title: 'Instagram Rubato',
        icon: Users,
        first10Min: [
            'Controlla l\'email associata: cerca avvisi di cambio email/password.',
            'Usa la procedura ufficiale: instagram.com/hacked.',
            'Avvisa i tuoi contatti (tramite altri social o SMS) che il tuo account è stato rubato.'
        ],
        doNow: [
            'Prova il video-riconoscimento se richiesto da Instagram.',
            'Cambia immediatamente la password della tua email principale.',
            'Verifica se altri account (FB, Amazon, PayPal) usano la stessa password e cambiale.'
        ],
        doNot: [
            'NON pagare mai riscatti per riavere l\'account.',
            'NON fidarti di profili che dicono di poterlo recuperare per te (sono truffe).',
            'NON cliccare link di recupero che arrivano via DM o SMS sospetti.'
        ],
        saveEvidence: [
            'Email di notifica di cambio dati ricevute da Meta.',
            'Eventuali messaggi di riscatto ricevuti.',
            'Link al profilo ora in mano al malintenzionato.'
        ],
        whoToContact: ['Centro Assistenza Instagram', 'Polizia Postale (solo se usato per truffe)'],
        whenToCall112: 'Solo se l\'account rubato viene usato per minacce gravi, estorsioni o se sono stati rubati anche dati bancari.',
        shortMessage: 'Il mio account Instagram è stato violato. L\'email associata è stata cambiata. Ho avviato la procedura su instagram.com/hacked.',
        contactLabel: 'Supporto Ufficiale',
        contactNumber: 'instagram.com/hacked',
        contactLink: 'https://www.instagram.com/hacked',
        moduleLink: '/moduli/modulo-02-account-security',
        checklist: ['Email controllata', 'Richiesta ufficiale avviata', 'Contatti avvisati']
    },
    {
        id: 'whatsapp-rubato',
        title: 'WhatsApp Rubato',
        icon: Mail,
        first10Min: [
            'Prova a reinstallare WhatsApp e ad accedere col tuo numero.',
            'Se ricevi il codice via SMS, inseriscilo subito per espellere l\'intruso.',
            'Avvisa subito i tuoi gruppi e contatti più stretti chiamandoli.'
        ],
        doNow: [
            'Scrivi a support@whatsapp.com indicando: "Smarrito/rubato: Disattivazione del mio account" + numero in formato internazionale.',
            'Attiva la Verifica in due passaggi (PIN) appena rientri.',
            'Disconnetti tutti i dispositivi da WhatsApp Web/Desktop.'
        ],
        doNot: [
            'NON dare MAI il codice di 6 cifre che ricevi via SMS a nessuno, neanche se sembra un amico.',
            'NON ignorare se l\'app si disconnette improvvisamente.'
        ],
        saveEvidence: [
            'Screenshot di chi ti ha chiesto il codice.',
            'Ora e data della disconnessione.'
        ],
        whoToContact: ['Supporto WhatsApp (via email)', 'Polizia Postale'],
        whenToCall112: 'Se l\'account viene usato per chiedere soldi ai tuoi contatti fingendosi te.',
        shortMessage: 'Mi hanno rubato l\'account WhatsApp. Non date soldi o codici a mio nome. Sto procedendo al recupero ufficiale.',
        contactLabel: 'Email Supporto',
        contactNumber: 'support@whatsapp.com',
        contactLink: 'mailto:support@whatsapp.com',
        moduleLink: '/moduli/modulo-02b-account-security',
        checklist: ['Tentativo rientro fatto', 'Supporto avvisato via mail', 'Contatti chiamati']
    },
    {
        id: 'banca-compromessa',
        title: 'Conto o Carta Compromessa',
        icon: CreditCard,
        first10Min: [
            'Blocca immediatamente la carta tramite l\'App della banca o il numero verde.',
            'Chiama il numero verde per il blocco nazionale carte (es. 800 822 056 per circuiti principali).',
            'Fai screenshot dei movimenti non autorizzati che vedi nell\'estratto conto.'
        ],
        doNow: [
            'Invia un reclamo formale alla banca (disconoscimento operazioni).',
            'Cambia la password dell\'Home Banking da un dispositivo sicuro.',
            'Vai dai Carabinieri o in Polizia per sporgere denuncia (necessaria per il rimborso).'
        ],
        doNot: [
            'NON aspettare il giorno dopo sperando sia un errore.',
            'NON dare codici OTP a nessuno che ti chiama fingendosi della banca.',
            'NON usare lo smartphone se sospetti sia infetto da virus bancari.'
        ],
        saveEvidence: [
            'Lista movimenti sospetti.',
            'SMS o email di alert ricevuti.',
            'Numeri di telefono che ti hanno chiamato (se truffa telefonica).'
        ],
        whoToContact: ['Servizio Clienti Banca', 'Numero Verde Blocco Carte', 'Polizia Postale'],
        whenToCall112: 'In caso di rapina fisica allo sportello o se hai subito una truffa di persona.',
        shortMessage: 'La mia carta/conto è stata compromessa. Ho appena effettuato il blocco. Ho bisogno di avviare la procedura di disconoscimento delle operazioni non autorizzate.',
        contactLabel: 'Blocco Nazionale',
        contactNumber: '800 822 056',
        contactLink: 'tel:800822056',
        moduleLink: '/moduli/modulo-14-soldi-banche-truffe',
        checklist: ['Carta bloccata', 'Banca avvisata', 'Denuncia sporta']
    },
    {
        id: 'sim-swap',
        title: 'SIM Swap (Cellulare senza segnale)',
        icon: Smartphone,
        first10Min: [
            'Se il cellulare perde segnale improvvisamente ("Solo emergenza"), chiama l\'operatore da un altro telefono.',
            'Verifica se la tua SIM è stata disattivata e se ne è stata emessa una nuova a tua insaputa.',
            'Avvisa subito la tua banca: i truffatori useranno il tuo numero per ricevere gli OTP.'
        ],
        doNow: [
            'Cambia la password della tua email principale immediatamente.',
            'Recati fisicamente in un negozio del tuo operatore telefonico con un documento.',
            'Denuncia il fatto alla Polizia Postale: è un furto d\'identità grave.'
        ],
        doNot: [
            'NON pensare sia un semplice guasto tecnico se dura più di 10 minuti.',
            'NON ignorare notifiche di accesso ai tuoi account durante il blackout.'
        ],
        saveEvidence: [
            'Ora esatta della perdita di segnale.',
            'Eventuali email di notifica cambio SIM o accesso account.'
        ],
        whoToContact: ['Operatore Telefonico (TIM, Vodafone, etc.)', 'Banca', 'Polizia Postale'],
        whenToCall112: 'Sempre consigliato poiché è un reato di furto d\'identità finalizzato alla truffa bancaria.',
        shortMessage: 'Sono vittima di SIM Swap. La mia SIM è stata disattivata illegalmente. Bloccate ogni accesso al mio conto corrente collegato a questo numero.',
        contactLabel: 'Polizia Postale',
        contactNumber: 'Segnala Online',
        contactLink: 'https://www.commissariatodips.it/',
        moduleLink: '/moduli/modulo-15-sicurezza-avanzata',
        checklist: ['SIM bloccata', 'Banca avvisata', 'Password mail cambiate']
    },
    {
        id: 'otp-condiviso',
        title: 'Ho dato codici OTP a un estraneo',
        icon: Lock,
        first10Min: [
            'Cambia immediatamente la password dell\'account coinvolto.',
            'Se il codice era della banca, chiama subito il servizio clienti per bloccare le operazioni.',
            'Disconnetti tutte le sessioni attive dell\'account (Log out da tutti i dispositivi).'
        ],
        doNow: [
            'Verifica se sono stati aggiunti nuovi metodi di recupero (email o numeri di telefono).',
            'Controlla se sono state effettuate spese o modifiche ai dati personali.',
            'Fai una scansione antivirus dello smartphone.'
        ],
        doNot: [
            'NON inserire mai OTP su siti che ti arrivano via SMS o email.',
            'NON dare codici a chi ti chiama dicendo "per sbloccare un pacco" o "per sicurezza".'
        ],
        saveEvidence: [
            'Numero di telefono o email del truffatore.',
            'Screenshot della richiesta del codice.',
            'Link del sito dove hai inserito i dati.'
        ],
        whoToContact: ['Servizio Clienti del servizio (Banca, Poste, Amazon)', 'Polizia Postale'],
        whenToCall112: 'Se sono già stati sottratti fondi dal conto corrente.',
        shortMessage: 'Ho inavvertitamente condiviso un codice di sicurezza con un sospetto truffatore. Ho già cambiato password e bloccato la carta. Ho bisogno di verificare l\'integrità del mio account.',
        contactLabel: 'Sicurezza Account',
        contactNumber: 'Centro Supporto',
        contactLink: '/moduli/modulo-02-account-security',
        moduleLink: '/moduli/modulo-03-truffe-phishing',
        checklist: ['Password cambiata', 'Sessioni chiuse', 'Banca avvisata']
    }
]

export default function SOSPage() {
    const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null)

    useEffect(() => {
        const hash = window.location.hash.replace('#', '')
        if (hash) {
            const scenario = SCENARIOS.find(s => s.id === hash)
            if (scenario) setSelectedScenario(scenario)
        }
    }, [])

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        toast.success('Messaggio copiato negli appunti')
    }

    const printPage = () => {
        window.print()
    }

    return (
        <Container size="lg" className="py-12 min-h-screen print:p-0">
            <div className="print:hidden">
                <PageHeader 
                    centered
                    badge="Centro Soccorso"
                    icon={AlertTriangle}
                    title="Emergenze Digitali"
                    description="Protocolli operativi per intervenire nei primi minuti di una crisi. Segui i passi con calma."
                />
            </div>

            {!selectedScenario ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:hidden">
                    {SCENARIOS.map((scenario) => (
                        <button
                            key={scenario.id}
                            onClick={() => { setSelectedScenario(scenario); window.location.hash = scenario.id }}
                            className="bg-surface border-2 border-border p-8 rounded-[2.5rem] flex flex-col items-start gap-6 text-left hover:border-sos hover:shadow-xl transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-sos/5 text-sos border border-sos/10 flex items-center justify-center group-hover:bg-sos group-hover:text-white transition-all">
                                <scenario.icon size={32} />
                            </div>
                            <h3 className="text-xl font-black text-foreground group-hover:text-sos leading-tight">{scenario.title}</h3>
                        </button>
                    ))}
                </div>
            ) : (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center justify-between print:hidden">
                        <button 
                            onClick={() => { setSelectedScenario(null); window.history.pushState(null, '', '/sos') }} 
                            className="text-primary font-black uppercase tracking-widest text-sm flex items-center gap-2"
                        >
                            ← Torna alla selezione
                        </button>
                        <div className="flex gap-2">
                             <Button onClick={printPage} variant="outline" size="sm" className="rounded-xl">
                                <Printer className="w-4 h-4 mr-2" /> Stampa Protocollo
                             </Button>
                        </div>
                    </div>

                    <Card className="p-8 md:p-12 border-2 border-sos/30 rounded-[3rem] bg-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <selectedScenario.icon size={200} />
                        </div>

                        <div className="relative z-10 space-y-12">
                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                                <div className="w-20 h-20 rounded-2xl bg-sos text-white flex items-center justify-center shadow-lg shadow-sos/30">
                                    <selectedScenario.icon size={40} />
                                </div>
                                <div className="space-y-1">
                                    <h2 className="text-4xl md:text-5xl font-display font-black text-foreground">{selectedScenario.title}</h2>
                                    <p className="text-sos font-bold uppercase tracking-[0.2em] text-sm">Protocollo di Emergenza</p>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-2 space-y-10">
                                    {/* Action Sections */}
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <section className="space-y-4">
                                            <h3 className="flex items-center gap-2 text-xl font-black text-emerald-600">
                                                <Clock className="w-5 h-5" /> Primi 10 minuti
                                            </h3>
                                            <ul className="space-y-3">
                                                {selectedScenario.first10Min.map((step, i) => (
                                                    <li key={i} className="flex gap-3 text-secondary font-medium bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50">
                                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-bold shrink-0">{i+1}</span>
                                                        {step}
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>

                                        <section className="space-y-4">
                                            <h3 className="flex items-center gap-2 text-xl font-black text-sos">
                                                <XCircle className="w-5 h-5" /> Cosa NON fare
                                            </h3>
                                            <ul className="space-y-3">
                                                {selectedScenario.doNot.map((step, i) => (
                                                    <li key={i} className="flex gap-3 text-secondary font-medium bg-sos/5 p-4 rounded-2xl border border-sos/10">
                                                        <AlertTriangle className="w-5 h-5 text-sos shrink-0" />
                                                        {step}
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <section className="space-y-4">
                                            <h3 className="flex items-center gap-2 text-xl font-black text-primary">
                                                <CheckCircle2 className="w-5 h-5" /> Prossimi passi
                                            </h3>
                                            <ul className="space-y-3">
                                                {selectedScenario.doNow.map((step, i) => (
                                                    <li key={i} className="flex gap-3 text-secondary font-medium bg-primary/5 p-4 rounded-2xl border border-primary/10">
                                                        <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                                                        {step}
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>

                                        <section className="space-y-4">
                                            <h3 className="flex items-center gap-2 text-xl font-black text-amber-600">
                                                <Database className="w-5 h-5" /> Salva le prove
                                            </h3>
                                            <ul className="space-y-3">
                                                {selectedScenario.saveEvidence.map((step, i) => (
                                                    <li key={i} className="flex gap-3 text-secondary font-medium bg-amber-50 p-4 rounded-2xl border border-amber-100">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                                        {step}
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>
                                    </div>
                                </div>

                                <aside className="space-y-6">
                                    <section className="bg-surface-muted p-8 rounded-[2.5rem] border border-border space-y-6">
                                        <h3 className="text-lg font-black uppercase tracking-widest text-foreground">Chi contattare</h3>
                                        <div className="space-y-4">
                                            {selectedScenario.whoToContact.map((contact, i) => (
                                                <div key={i} className="flex items-center gap-3 font-bold text-secondary">
                                                    <Phone className="w-4 h-4 text-primary" /> {contact}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="pt-4">
                                            <p className="text-xs font-black uppercase tracking-widest text-secondary/40 mb-2">Canale Diretto</p>
                                            <Button asChild className="w-full rounded-2xl h-14 font-black uppercase tracking-widest bg-sos hover:bg-sos/90">
                                                <a href={selectedScenario.contactLink} target="_blank" rel="noopener noreferrer">
                                                    {selectedScenario.contactNumber} <ExternalLink className="ml-2 w-4 h-4" />
                                                </a>
                                            </Button>
                                        </div>
                                    </section>

                                    <section className="bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100 space-y-4">
                                        <h3 className="text-lg font-black text-indigo-900 flex items-center gap-2">
                                            <ShieldAlert className="w-5 h-5" /> Quando chiamare il 112?
                                        </h3>
                                        <p className="text-indigo-800/80 font-medium leading-relaxed">
                                            {selectedScenario.whenToCall112}
                                        </p>
                                    </section>

                                    {selectedScenario.shortMessage && (
                                        <section className="bg-white p-6 rounded-2xl border-2 border-dashed border-border space-y-4">
                                            <h3 className="text-sm font-black uppercase tracking-widest text-secondary flex items-center gap-2">
                                                <MessageSquare className="w-4 h-4" /> Messaggio pronto
                                            </h3>
                                            <div className="bg-surface p-4 rounded-xl text-sm italic text-secondary border border-border">
                                                "{selectedScenario.shortMessage}"
                                            </div>
                                            <Button 
                                                onClick={() => copyToClipboard(selectedScenario.shortMessage!)} 
                                                variant="ghost" 
                                                className="w-full text-xs font-bold text-primary hover:bg-primary/5"
                                            >
                                                <Copy className="w-3 h-3 mr-2" /> Copia messaggio
                                            </Button>
                                        </section>
                                    )}
                                </aside>
                            </div>

                            <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 print:hidden">
                                <div className="flex items-center gap-4 text-secondary/60 text-sm font-medium">
                                    <Info className="w-5 h-5" />
                                    <span>Questo protocollo non sostituisce il parere delle autorità.</span>
                                </div>
                                <div className="flex gap-4">
                                    <Button asChild variant="outline" className="rounded-xl px-8 h-14 font-bold border-2">
                                        <Link href={selectedScenario.moduleLink}>Apri Guida Completa</Link>
                                    </Button>
                                    <Button asChild className="rounded-xl px-8 h-14 font-black uppercase tracking-widest shadow-xl">
                                        <Link href="/checklist">Vedi Checklist</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            )}

            <div className="mt-20 p-10 bg-surface border-2 border-border rounded-[3rem] text-center max-w-4xl mx-auto print:hidden">
                <h3 className="text-2xl font-display font-black text-foreground mb-4">Non trovi la tua emergenza?</h3>
                <p className="text-secondary font-medium mb-8">
                    Se non trovi un protocollo specifico, segui le regole generali: non pagare, non cancellare le prove, avvisa la banca e contatta la Polizia Postale.
                </p>
                <Button asChild variant="outline" className="rounded-xl h-14 px-10 font-black uppercase tracking-widest">
                    <Link href="/moduli">Catalogo Completo</Link>
                </Button>
            </div>
        </Container>
    )
}
