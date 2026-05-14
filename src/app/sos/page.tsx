'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldAlert, Phone, AlertTriangle, ChevronRight, ChevronLeft, XCircle, ArrowRight, CheckCircle2, ShieldCheck, Info } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'

type Scenario = {
    id: string
    title: string
    symptoms: string[]
    immediateAction: string[]
    doNot: string[]
    contactLabel: string
    contactNumber: string
    contactLink: string
    moduleLink: string
}

const SCENARIOS: Scenario[] = [
    {
        id: 'sextortion',
        title: 'Ricatto con immagini intime (Sextortion)',
        symptoms: [
            'Qualcuno minaccia di inviare foto/video intimi ai tuoi amici o familiari',
            'Richieste di denaro improvvise via chat',
            'Account che sembrava "amichevole" diventa aggressivo'
        ],
        immediateAction: [
            'Interrompi ogni comunicazione immediatamente.',
            'Fai screenshot di chat, messaggi e profilo del ricattatore.',
            'Usa StopNCII.org per bloccare la diffusione automatica.',
            'Segnala su Commissariato di PS Online.'
        ],
        doNot: [
            'NON pagare mai: il pagamento è la conferma che possono ricattarti.',
            'NON inviare altre foto "per calmarli".',
            'NON cancellare le prove per vergogna.'
        ],
        contactLabel: 'Polizia Postale',
        contactNumber: 'Segnala il reato',
        contactLink: 'https://www.commissariatodips.it/',
        moduleLink: '/moduli/modulo-04-sextortion-ricatti'
    },
    {
        id: 'instagram-rubato',
        title: 'Account Instagram / Social rubato',
        symptoms: [
            'Non riesci più ad accedere al tuo profilo',
            'Hai ricevuto email di cambio indirizzo o password non richieste',
            'Amici ti segnalano che il tuo profilo sta postando truffe (crypto, ecc.)'
        ],
        immediateAction: [
            'Usa instagram.com/hacked o facebook.com/hacked subito.',
            'Avvisa i tuoi contatti tramite altri canali (WhatsApp, Storie di amici).',
            'Controlla se la tua email è ancora sicura.'
        ],
        doNot: [
            'NON contattare profili che promettono "recupero account" a pagamento.',
            'NON inserire i tuoi dati su siti che non sono quelli ufficiali.'
        ],
        contactLabel: 'Centro Assistenza Meta',
        contactNumber: 'Recupero Account',
        contactLink: 'https://help.instagram.com/hacked',
        moduleLink: '/moduli/modulo-01-primo-soccorso'
    },
    {
        id: 'whatsapp-rubato',
        title: 'Account WhatsApp rubato',
        symptoms: [
            'Hai ricevuto un SMS con un codice e qualcuno te lo ha chiesto',
            'WhatsApp si è disconnesso dicendo che è attivo su un altro telefono'
        ],
        immediateAction: [
            'Reinstalla WhatsApp e prova a verificare il tuo numero col codice SMS.',
            'Se hanno attivato la 2FA, dovrai aspettare 7 giorni, ma loro non potranno usare il tuo account se continui a provare la verifica.',
            'Avvisa familiari e amici: il ladro chiederà soldi a nome tuo.'
        ],
        doNot: [
            'NON dare mai codici ricevuti via SMS a nessuno.',
            'NON pagare per riavere l\'account.'
        ],
        contactLabel: 'Assistenza WhatsApp',
        contactNumber: 'Supporto Ufficiale',
        contactLink: 'https://www.whatsapp.com/contact/',
        moduleLink: '/moduli/modulo-01-primo-soccorso'
    },
    {
        id: 'truffa-banca',
        title: 'Carta clonata o Truffa Bancaria',
        symptoms: [
            'Transazioni che non riconosci sull\'estratto conto',
            'SMS dalla banca che chiede di "verificare il conto" cliccando un link',
            'Hai inserito i dati della carta su un sito sospetto'
        ],
        immediateAction: [
            'Blocca immediatamente la carta tramite l\'app della banca o il numero verde.',
            'Contesta le transazioni non riconosciute (Disconoscimento).',
            'Cambia le password dell\'home banking.'
        ],
        doNot: [
            'NON aspettare di parlare con un operatore se puoi bloccare dall\'app.',
            'NON cliccare su link in SMS che sembrano della banca.'
        ],
        contactLabel: 'Tua Banca',
        contactNumber: 'Numero Verde Blocco Carte',
        contactLink: 'tel:800822056', // Esempio numero generico, meglio linkare a lista
        moduleLink: '/moduli/modulo-03-truffe-phishing'
    },
    {
        id: 'smartphone-rubato',
        title: 'Smartphone rubato o perso',
        symptoms: [
            'Non trovi più il telefono',
            'Lo vedi in una posizione sconosciuta su "Trova il mio dispositivo"'
        ],
        immediateAction: [
            'Accedi a iCloud.com/find o google.com/android/find.',
            'Attiva la modalità smarrito o avvia il reset remoto (Wipe).',
            'Blocca la SIM chiamando l\'operatore.',
            'Fai denuncia fornendo il codice IMEI.'
        ],
        doNot: [
            'NON andare da solo all\'indirizzo indicato dal GPS.',
            'NON aspettare che la batteria si scarichi prima di agire.'
        ],
        contactLabel: 'Carabinieri / Polizia',
        contactNumber: '112',
        contactLink: 'tel:112',
        moduleLink: '/moduli/modulo-01-primo-soccorso'
    },
    {
        id: 'sim-swap',
        title: 'SIM Swap (Telefono senza segnale)',
        symptoms: [
            'Il telefono perde improvvisamente ogni segnale ("Solo chiamate emergenza")',
            'Non ricevi più SMS o chiamate mentre sei in una zona coperta'
        ],
        immediateAction: [
            'Contatta subito il tuo operatore telefonico per verificare se è stata emessa una nuova SIM.',
            'Controlla immediatamente i tuoi account bancari e email.',
            'Cambia password importanti usando metodi 2FA non basati su SMS (App Authenticator).'
        ],
        doNot: [
            'NON pensare che sia solo un guasto tecnico momentaneo se dura più di 10 minuti.'
        ],
        contactLabel: 'Operatore Telefonico',
        contactNumber: 'Assistenza Clienti',
        contactLink: '#',
        moduleLink: '/moduli/modulo-01b-primo-soccorso'
    },
    {
        id: 'cyberstalking',
        title: 'Cyberstalking o Doxxing',
        symptoms: [
            'Ricevi messaggi minatori continui da molti account diversi',
            'Hanno pubblicato il tuo indirizzo, telefono o dati privati online'
        ],
        immediateAction: [
            'Rendi privati tutti i tuoi profili social.',
            'Non rispondere e non interagire con l\'aggressore.',
            'Documenta tutto con screenshot completi.',
            'Chiedi la rimozione dei contenuti ai gestori delle piattaforme.'
        ],
        doNot: [
            'NON rispondere alle provocazioni.',
            'NON cercare di vendicarti pubblicando dati dell\'aggressore.'
        ],
        contactLabel: 'Centro Anti-Stalking',
        contactNumber: '1522',
        contactLink: 'tel:1522',
        moduleLink: '/moduli/modulo-06-stalking-doxxing'
    },
    {
        id: 'grooming',
        title: 'Adescamento Minori (Grooming)',
        symptoms: [
            'Un adulto conosciuto online fa troppe domande private',
            'Chiede di mantenere segreta la vostra conversazione',
            'Chiede foto intime o di incontrarsi di nascosto'
        ],
        immediateAction: [
            'Interrompi ogni contatto immediatamente.',
            'Parlane subito con un genitore o un adulto di fiducia.',
            'Salva le chat senza cancellarle: sono prove fondamentali.'
        ],
        doNot: [
            'NON cancellare le prove per paura.',
            'NON andare mai a incontri da solo.'
        ],
        contactLabel: 'Emergenza Infanzia',
        contactNumber: '114',
        contactLink: 'tel:114',
        moduleLink: '/moduli/modulo-05-grooming-minori'
    },
    {
        id: 'pericolo-fisico',
        title: 'Pericolo Fisico Immediato',
        symptoms: [
            'Sei vittima di violenza o minaccia fisica reale',
            'Qualcuno ti sta seguendo o minaccia di raggiungerti a casa'
        ],
        immediateAction: [
            'Mettiti in un luogo sicuro o affollato.',
            'Chiama il 112 immediatamente.',
            'Chiedi aiuto a chiunque sia vicino a te.'
        ],
        doNot: [
            'NON aspettare che la situazione migliori da sola.'
        ],
        contactLabel: 'Emergenza Nazionale',
        contactNumber: '112',
        contactLink: 'tel:112',
        moduleLink: '/moduli/modulo-01-primo-soccorso'
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

    return (
        <Container size="md" className="py-12 min-h-screen">
            <header className="space-y-6 text-center pb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sos/10 text-sos mb-4">
                    <AlertTriangle size={40} />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-foreground leading-[1.1]">
                    Aiuto Immediato
                </h1>
                <p className="text-xl text-secondary max-w-2xl mx-auto">
                    Se sei in pericolo di vita o vittima di violenza fisica, chiama il <span className="text-sos font-bold">112</span>. Altrimenti scegli la tua situazione.
                </p>
            </header>

            <AnimatePresence mode="wait">
                {!selectedScenario ? (
                    <motion.div 
                        key="list"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-3"
                    >
                        <div className="grid grid-cols-1 gap-3">
                            {SCENARIOS.map((scenario) => (
                                <button
                                    key={scenario.id}
                                    onClick={() => setSelectedScenario(scenario)}
                                    className="w-full bg-surface border border-border p-6 rounded-2xl flex items-center justify-between text-left hover:border-sos/50 hover:bg-sos/[0.02] transition-all group"
                                >
                                    <div className="space-y-1">
                                        <span className="text-lg font-semibold text-foreground group-hover:text-sos transition-colors">{scenario.title}</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-secondary group-hover:text-sos transition-colors shrink-0" />
                                </button>
                            ))}
                        </div>
                        
                        <div className="pt-8">
                             <div className="bg-sos text-white p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                                    <Phone size={120} />
                                </div>
                                <div className="space-y-2 relative z-10">
                                    <h3 className="text-2xl font-bold tracking-tight">Pericolo imminente?</h3>
                                    <p className="text-white/90 font-medium">Chiama immediatamente il Numero Unico Europeo per le Emergenze.</p>
                                </div>
                                <a href="tel:112" className="bg-white text-sos font-bold text-3xl px-12 py-5 rounded-2xl shrink-0 hover:bg-white/90 transition-colors shadow-lg flex items-center gap-3 relative z-10">
                                    <Phone className="w-6 h-6" /> 112
                                </a>
                            </div>
                        </div>
                        
                        <div className="mt-12 p-6 rounded-2xl bg-surface border border-border text-sm text-secondary leading-relaxed">
                            <div className="flex gap-3">
                                <Info className="w-5 h-5 text-primary shrink-0" />
                                <p>
                                    <strong>Disclaimer:</strong> Le informazioni fornite da Busssola hanno scopo puramente informativo e non sostituiscono il parere di autorità, avvocati o professionisti sanitari. In caso di reato, sporgi sempre denuncia alle autorità competenti.
                                </p>
                            </div>
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
                            onClick={() => setSelectedScenario(null)}
                            className="text-secondary font-bold text-xs uppercase tracking-widest hover:text-foreground transition-colors flex items-center gap-2 mb-4"
                        >
                            <ChevronLeft className="w-4 h-4" /> Torna alla lista
                        </button>

                        <Card className="border-sos bg-white p-8 md:p-12 shadow-xl relative overflow-hidden rounded-[2.5rem]">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                                <ShieldAlert size={300} className="text-sos" />
                            </div>
                            
                            <div className="relative z-10 space-y-10">
                                <div className="space-y-6">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-sos tracking-tight leading-tight">
                                        {selectedScenario.title}
                                    </h2>
                                    
                                    <div className="space-y-3">
                                        <h3 className="text-xs font-bold text-secondary uppercase tracking-widest flex items-center gap-2">
                                            <ShieldCheck className="w-4 h-4" /> Sintomi e Segnali
                                        </h3>
                                        <ul className="space-y-2">
                                            {selectedScenario.symptoms.map((s, i) => (
                                                <li key={i} className="flex gap-3 text-foreground font-medium bg-surface/50 p-3 rounded-xl border border-border/40">
                                                    <span className="text-sos">•</span> {s}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-emerald-50 rounded-[1.5rem] p-6 border border-emerald-100 space-y-4">
                                        <div className="flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-wider text-xs">
                                            <CheckCircle2 className="w-5 h-5" /> Cosa fare subito
                                        </div>
                                        <ul className="space-y-2">
                                            {selectedScenario.immediateAction.map((a, i) => (
                                                <li key={i} className="text-foreground font-medium leading-relaxed flex gap-2">
                                                    <span className="text-emerald-500 font-bold">✓</span> {a}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-sos/5 rounded-[1.5rem] p-6 border border-sos/10 space-y-4">
                                        <div className="flex items-center gap-2 text-sos font-bold uppercase tracking-wider text-xs">
                                            <XCircle className="w-5 h-5" /> Cosa NON fare
                                        </div>
                                        <ul className="space-y-2">
                                            {selectedScenario.doNot.map((d, i) => (
                                                <li key={i} className="text-foreground font-medium leading-relaxed flex gap-2">
                                                    <span className="text-sos font-bold">✕</span> {d}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="bg-surface-muted border border-border p-6 rounded-2xl space-y-6">
                                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">A chi rivolgersi adesso:</h3>
                                    <a 
                                        href={selectedScenario.contactLink}
                                        target={selectedScenario.contactLink.startsWith('http') ? '_blank' : '_self'}
                                        className="block bg-sos text-white p-6 rounded-2xl hover:scale-[1.01] transition-transform shadow-lg group"
                                    >
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-white/70 font-bold text-[10px] uppercase tracking-[0.2em] mb-1">{selectedScenario.contactLabel}</p>
                                                <p className="text-2xl font-bold tracking-tight">{selectedScenario.contactNumber}</p>
                                            </div>
                                            <div className="bg-white/20 p-3 rounded-full">
                                                {selectedScenario.contactLink.startsWith('http') ? <ArrowRight className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="pt-4 flex justify-center text-center">
                                    <Link href={selectedScenario.moduleLink} className="text-primary font-bold flex items-center gap-2 hover:underline text-sm uppercase tracking-wider">
                                        Leggi la guida completa <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    )
}
