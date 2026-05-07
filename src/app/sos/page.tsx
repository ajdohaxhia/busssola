'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, Phone, AlertTriangle, ChevronRight, ChevronLeft, XCircle, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'

type Scenario = {
    id: string
    title: string
    description: string
    immediateAction: string
    doNot: string
    contactLabel: string
    contactNumber: string
    contactLink: string
    moduleLink: string
}

const SCENARIOS: Scenario[] = [
    {
        id: 'sextortion',
        title: 'Qualcuno minaccia di pubblicare mie foto intime (Sextortion)',
        description: 'Ti stanno chiedendo soldi o altre foto per non diffondere immagini private che ti riguardano.',
        immediateAction: 'Salva gli screenshot di tutte le conversazioni e dei profili prima che vengano cancellati.',
        doNot: 'NON pagare e NON inviare altro materiale. Chi ricatta non si ferma dopo il primo pagamento.',
        contactLabel: 'Polizia Postale',
        contactNumber: 'Segnala il reato online',
        contactLink: 'https://www.commissariatodips.it/',
        moduleLink: '/moduli/modulo-15-sextortion'
    },
    {
        id: 'grooming',
        title: 'Un adulto mi chiede incontri segreti o materiale intimo',
        description: 'Una persona conosciuta online sta cercando di isolarti, farti regali o ti chiede di mantenere un segreto.',
        immediateAction: 'Interrompi subito ogni contatto. Fai screenshot delle chat e blocca il profilo.',
        doNot: 'NON accettare incontri dal vivo e NON cancellare le chat: sono prove fondamentali.',
        contactLabel: 'Emergenza Infanzia',
        contactNumber: '114',
        contactLink: 'tel:114',
        moduleLink: '/moduli/modulo-13-grooming'
    },
    {
        id: 'cyberbullismo',
        title: 'Sono vittima di insulti continui, stalking o cyberbullismo',
        description: 'Ricevi messaggi minatori, ti hanno creato profili falsi per deriderti o sei perseguitato online.',
        immediateAction: 'Blocca gli account. Parla subito con un adulto di fiducia (genitore o insegnante).',
        doNot: 'NON rispondere alle provocazioni. Reagire alimenta il ciclo del bullismo.',
        contactLabel: 'Anti Violenza e Stalking',
        contactNumber: '1522',
        contactLink: 'tel:1522',
        moduleLink: '/moduli/modulo-16-cyberbullismo'
    },
    {
        id: 'hacking',
        title: 'Mi hanno rubato l\'account, i soldi o l\'identità digitale',
        description: 'Non accedi più ai tuoi profili, vedi transazioni non autorizzate o qualcuno si finge te.',
        immediateAction: 'Blocca subito le carte di credito coinvolte. Avvisa i tuoi contatti del furto di identità.',
        doNot: 'NON cliccare su link inviati via SMS o email che promettono di "recuperare" l\'account.',
        contactLabel: 'Polizia Postale',
        contactNumber: 'Segnalazioni e denunce',
        contactLink: 'https://www.commissariatodips.it/',
        moduleLink: '/moduli/modulo-22-recupero-account'
    },
    {
        id: 'diffusione-intima',
        title: 'Le mie immagini intime si stanno diffondendo senza consenso',
        description: 'Qualcuno ha condiviso foto o video privati su social, chat o siti web.',
        immediateAction: 'Segnala il contenuto direttamente alla piattaforma. Contatta il Garante Privacy per la rimozione urgente.',
        doNot: 'NON cercare di cancellare tutto se non hai prima salvato le prove (URL e screenshot).',
        contactLabel: 'Garante Privacy',
        contactNumber: 'Segnala per rimozione',
        contactLink: 'https://www.gpdp.it/temi/cyberbullismo',
        moduleLink: '/moduli/modulo-15-sextortion'
    },
    {
        id: 'crisi-psicologica',
        title: 'Mi sento in crisi e ho bisogno di supporto immediato',
        description: 'Quello che sta succedendo online ti sta togliendo la serenità e non sai come uscirne.',
        immediateAction: 'Ricorda che non è colpa tua. C\'è sempre una via d\'uscita e persone pronte ad ascoltarti.',
        doNot: 'NON restare solo/a con questo peso. Parlare è il primo passo per risolvere.',
        contactLabel: 'Telefono Amico Italia',
        contactNumber: '02 2327 2327',
        contactLink: 'tel:+390223272327',
        moduleLink: '/moduli/modulo-25-crisi-emotiva'
    },
    {
        id: 'pericolo-fisico',
        title: 'Ho paura per la mia incolumità o quella di un amico',
        description: 'C\'è una minaccia fisica imminente o rischio di vita.',
        immediateAction: 'Mettiti al sicuro. Chiedi aiuto a chi hai vicino.',
        doNot: 'NON aspettare. Chiama subito.',
        contactLabel: 'Emergenza Nazionale',
        contactNumber: '112',
        contactLink: 'tel:112',
        moduleLink: '/moduli/modulo-24-emergenze'
    }
]

export default function SOSPage() {
    const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null)

    return (
        <Container size="md" className="py-12 min-h-screen">
            <header className="space-y-6 text-center pb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sos/10 text-sos mb-4">
                    <AlertTriangle size={40} />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-foreground leading-[1.1]">
                    Centro Emergenze
                </h1>
                <p className="text-xl text-secondary max-w-2xl mx-auto font-medium">
                    Mantieni la calma. Non sei solo e ogni problema digitale ha una soluzione legale e tecnica. Cosa sta succedendo?
                </p>
            </header>

            {!selectedScenario ? (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                >
                    {SCENARIOS.map((scenario) => (
                        <button
                            key={scenario.id}
                            onClick={() => setSelectedScenario(scenario)}
                            className="w-full bg-surface border border-border p-6 rounded-2xl flex items-center justify-between text-left hover:border-sos hover:shadow-sm transition-all group"
                        >
                            <span className="text-lg font-semibold text-foreground group-hover:text-sos transition-colors">{scenario.title}</span>
                            <ChevronRight className="w-5 h-5 text-secondary group-hover:text-sos transition-colors shrink-0" />
                        </button>
                    ))}
                    
                    <div className="pt-8">
                         <div className="bg-sos text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold tracking-tight">Pericolo imminente o violenza?</h3>
                                <p className="text-white/90 font-medium">Chiama immediatamente il Numero Unico Europeo per le Emergenze. È gratuito e attivo 24/7.</p>
                            </div>
                            <a href="tel:112" className="bg-white text-sos font-bold text-2xl px-10 py-5 rounded-2xl shrink-0 hover:bg-white/90 transition-colors shadow-lg flex items-center gap-3">
                                <Phone className="w-6 h-6" /> 112
                            </a>
                        </div>
                    </div>
                </motion.div>
            ) : (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-8"
                >
                    <button 
                        onClick={() => setSelectedScenario(null)}
                        className="text-secondary font-medium hover:text-foreground transition-colors flex items-center gap-2 mb-4"
                    >
                        <ChevronLeft className="w-4 h-4" /> Torna alle opzioni
                    </button>

                    <Card className="border-sos bg-[#fef2f2] p-8 md:p-12 shadow-lg relative overflow-hidden rounded-[2.5rem]">
                        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                            <ShieldAlert size={200} className="text-sos" />
                        </div>
                        
                        <div className="relative z-10 space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-display font-bold text-sos tracking-tight leading-tight">
                                    {selectedScenario.title}
                                </h2>
                                <p className="text-lg text-secondary font-medium">
                                    {selectedScenario.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-2xl p-6 border border-emerald-200 space-y-4 shadow-sm">
                                    <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-wider text-sm">
                                        <CheckCircle2 className="w-5 h-5" /> Da fare subito
                                    </div>
                                    <p className="text-foreground font-medium leading-relaxed">{selectedScenario.immediateAction}</p>
                                </div>
                                <div className="bg-white rounded-2xl p-6 border border-sos-border space-y-4 shadow-sm">
                                    <div className="flex items-center gap-2 text-sos font-bold uppercase tracking-wider text-sm">
                                        <XCircle className="w-5 h-5" /> Assolutamente NO
                                    </div>
                                    <p className="text-foreground font-medium leading-relaxed">{selectedScenario.doNot}</p>
                                </div>
                            </div>
                            
                            <hr className="border-sos-border/50" />

                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-foreground">A chi rivolgerti adesso:</h3>
                                <a 
                                    href={selectedScenario.contactLink}
                                    target={selectedScenario.contactLink.startsWith('http') ? '_blank' : '_self'}
                                    className="block bg-sos text-white p-6 rounded-2xl hover:bg-sos/90 transition-colors shadow-md group"
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-white/80 font-semibold text-sm uppercase tracking-widest mb-1">{selectedScenario.contactLabel}</p>
                                            <p className="text-2xl font-bold tracking-tight">{selectedScenario.contactNumber}</p>
                                        </div>
                                        <div className="bg-white/20 p-3 rounded-full group-hover:scale-110 transition-transform">
                                            {selectedScenario.contactLink.startsWith('http') ? <ArrowRight className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="pt-4 flex justify-center text-center">
                                <Link href={selectedScenario.moduleLink} className="text-sos font-bold flex items-center gap-2 hover:underline">
                                    La situazione è sotto controllo o vuoi capirne di più? <br className="hidden md:block"/> Leggi la guida approfondita su questo tema <ArrowRight className="w-4 h-4 ml-1 shrink-0" />
                                </Link>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            )}
        </Container>
    )
}
