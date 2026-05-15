'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
    ShieldAlert, Phone, AlertTriangle, ChevronRight, ChevronLeft, 
    XCircle, ArrowRight, CheckCircle2, ShieldCheck, 
    Smartphone, Lock, Mail, CreditCard, Heart, 
    MousePointer2, Clock, Users, Database
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { PageHeader } from '@/components/ui/PageHeader'

type Scenario = {
    id: string
    title: string
    icon: React.ElementType
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
        first10Min: ['Mettiti in sicurezza.', 'Chiama il 112.', 'Non riagganciare.'],
        nextHour: ['Segui le istruzioni delle forze dell\'ordine.', 'Cerca testimoni o telecamere.'],
        doNot: ['NON affrontare l\'aggressore da solo.', 'NON aspettare.'],
        contactLabel: 'Emergenza Nazionale',
        contactNumber: '112',
        contactLink: 'tel:112',
        moduleLink: '/moduli/modulo-01-primo-soccorso',
        checklist: ['Posizione sicura', 'Chiamata 112', 'Familiari avvisati']
    },
    {
        id: 'sextortion',
        title: 'Ricatto Immagini Intime',
        icon: Heart,
        first10Min: ['Interrompi comunicazioni.', 'NON PAGARE.', 'Screenshot chat/profili.'],
        nextHour: ['Segnala su StopNCII.org.', 'Privatizza social.', 'Denuncia polizia postale.'],
        doNot: ['NON inviare altro.', 'NON cancellare le chat.'],
        contactLabel: 'Polizia Postale',
        contactNumber: 'Segnala il reato',
        contactLink: 'https://www.commissariatodips.it/',
        moduleLink: '/moduli/modulo-04-sextortion-ricatti',
        checklist: ['Zero comunicazioni', 'Screenshot salvati', 'Segnalazione fatta']
    },
    {
        id: 'minore-pericolo',
        title: 'Minore in Pericolo Online',
        icon: ShieldCheck,
        first10Min: ['Rassicura il minore.', 'Non cancellare nulla.', 'Modalità aereo al device.'],
        nextHour: ['Chiama il 114.', 'Contatta la Polizia Postale.', 'Avvisa la scuola se necessario.'],
        doNot: ['NON punire il minore.', 'NON cercare il sospettato.'],
        contactLabel: 'Emergenza Infanzia',
        contactNumber: '114',
        contactLink: 'tel:114',
        moduleLink: '/moduli/modulo-05-grooming-minori',
        checklist: ['Minore rassicurato', 'Prove preservate', 'Segnalazione 114']
    },
    {
        id: 'instagram-rubato',
        title: 'Instagram Rubato',
        icon: Users,
        first10Min: ['Controlla email per avvisi.', 'Usa instagram.com/hacked.', 'Avvisa contatti.'],
        nextHour: ['Prova video-riconoscimento.', 'Cambia password mail.', 'Verifica sessioni.'],
        doNot: ['NON pagare per il recupero.', 'NON usare link non ufficiali.'],
        contactLabel: 'Supporto Meta',
        contactNumber: 'instagram.com/hacked',
        contactLink: 'https://www.instagram.com/hacked',
        moduleLink: '/moduli/modulo-02-account-security',
        checklist: ['Email controllata', 'Richiesta ufficiale', 'Amici avvisati']
    },
    {
        id: 'whatsapp-rubato',
        title: 'WhatsApp Rubato',
        icon: Mail,
        first10Min: ['Reinstalla WhatsApp.', 'Entra col tuo numero.', 'Attendi SMS.'],
        nextHour: ['Scrivi a support@whatsapp.com.', 'Attiva verifica 2 passaggi.', 'Controlla WhatsApp Web.'],
        doNot: ['NON dare mai codici OTP via chat.', 'NON reinstallare troppe volte.'],
        contactLabel: 'Supporto',
        contactNumber: 'support@whatsapp.com',
        contactLink: 'mailto:support@whatsapp.com',
        moduleLink: '/moduli/modulo-02b-account-security',
        checklist: ['Tentativo rientro', 'Supporto contattato', 'PIN attivo']
    },
    {
        id: 'email-compromessa',
        title: 'Email Compromessa',
        icon: Mail,
        first10Min: ['Cambia password.', 'Disconnetti dispositivi.', 'Controlla inoltri.'],
        nextHour: ['Verifica email eliminate.', 'Cambia password collegate.', 'Attiva 2FA.'],
        doNot: ['NON usare vecchia password.', 'NON ignorare alert di sicurezza.'],
        contactLabel: 'Sicurezza Google',
        contactNumber: 'myaccount.google.com/security',
        contactLink: 'https://myaccount.google.com/security',
        moduleLink: '/moduli/modulo-02-account-security',
        checklist: ['Password cambiata', 'Sessioni chiuse', 'Inoltri controllati']
    },
    {
        id: 'conto-compromesso',
        title: 'Conto/Carta Compromessa',
        icon: CreditCard,
        first10Min: ['Blocca carta via App.', 'Chiama numero verde banca.', 'Screenshot addebiti.'],
        nextHour: ['Disconosci operazioni.', 'Fai denuncia.', 'Cambia password home banking.'],
        doNot: ['NON attendere.', 'NON dare codici OTP telefonici.'],
        contactLabel: 'Blocco Carte',
        contactNumber: 'Numero Verde Banca',
        contactLink: 'https://www.pagopa.gov.it/it/cittadini/dove-pagare/',
        moduleLink: '/moduli/modulo-14-soldi-banche-truffe',
        checklist: ['Carta bloccata', 'Banca avvisata', 'Denuncia sporta']
    },
    {
        id: 'sim-swap',
        title: 'SIM Swap / Numero rubato',
        icon: Smartphone,
        first10Min: ['Chiama operatore per bloccare SIM.', 'Avvisa banca.', 'Cambia password email.'],
        nextHour: ['Vai al negozio operatore per nuova SIM.', 'Controlla accessi mail/banca.', 'Denuncia.'],
        doNot: ['NON attendere il giorno dopo.', 'NON usare codici OTP su device diversi.'],
        contactLabel: 'Operatore Mobile',
        contactNumber: 'Servizio Clienti',
        contactLink: 'https://www.commissariatodips.it/',
        moduleLink: '/moduli/modulo-15-sicurezza-avanzata',
        checklist: ['SIM bloccata', 'Banca avvisata', 'Password mail cambiate']
    },
    {
        id: 'smartphone-rubato',
        title: 'Smartphone Rubato/Perso',
        icon: Smartphone,
        first10Min: ['Usa "Trova il mio device".', 'Segna come rubato.', 'Blocca SIM.'],
        nextHour: ['Cambia password principali.', 'Recupera IMEI.', 'Sporgi denuncia.'],
        doNot: ['NON andare da solo.', 'NON rimuovere dispositivo dall\'account.'],
        contactLabel: 'Trova Dispositivo',
        contactNumber: 'Accedi al Cloud',
        contactLink: 'https://www.icloud.com/find',
        moduleLink: '/moduli/modulo-07b-privacy-smartphone',
        checklist: ['SIM bloccata', 'Account protetti', 'Denuncia IMEI']
    },
    {
        id: 'otp-phishing',
        title: 'Codice OTP dato a terzi',
        icon: Lock,
        first10Min: ['Cambia password account.', 'Avvisa banca.', 'Chiudi sessioni.'],
        nextHour: ['Verifica dati di recupero.', 'Controlla nuove autorizzazioni.', 'Denuncia.'],
        doNot: ['NON inserire OTP su siti non ufficiali.', 'NON credere a truffe "consegna pacco".'],
        contactLabel: 'Sicurezza',
        contactNumber: 'Contatta Supporto',
        contactLink: '/moduli/modulo-02-account-security',
        moduleLink: '/moduli/modulo-03-truffe-phishing',
        checklist: ['Password cambiata', 'Sessioni chiuse', 'Banca avvisata']
    },
    {
        id: 'cliccato-link',
        title: 'Link Phishing Cliccato',
        icon: MousePointer2,
        first10Min: ['Chiama banca se hai inserito dati.', 'Cambia password sito imitato.', 'Antivirus.'],
        nextHour: ['Verifica addebiti.', 'Riavvia router.', 'Elimina file scaricati.'],
        doNot: ['NON inserire altri dati.', 'NON ignorare anomalie.'],
        contactLabel: 'Antivirus Online',
        contactNumber: 'Virustotal.com',
        contactLink: 'https://www.virustotal.com',
        moduleLink: '/moduli/modulo-03-truffe-phishing',
        checklist: ['Banca avvisata', 'Password cambiata', 'Scansione virus']
    },
    {
        id: 'doxxing',
        title: 'Doxxing (Dati diffusi)',
        icon: Database,
        first10Min: ['Non rispondere agli aggressori.', 'Salva prove/link.', 'Segnala al social/sito.'],
        nextHour: ['Contatta il Garante Privacy.', 'Valuta denuncia.', 'Privatizza account.'],
        doNot: ['NON reagire con insulti.', 'NON eliminare i post prima di aver fatto prove.'],
        contactLabel: 'Garante Privacy',
        contactNumber: 'Segnalazione',
        contactLink: 'https://www.garanteprivacy.it/',
        moduleLink: '/moduli/modulo-06-stalking-doxxing',
        checklist: ['Screenshot prove', 'Social segnalati', 'Privatizzati profili']
    },
    {
        id: 'stalking',
        title: 'Cyberstalking',
        icon: ShieldAlert,
        first10Min: ['Non contattare lo stalker.', 'Salva ogni prova.', 'Blocca profilo.'],
        nextHour: ['Segnala al social.', 'Vai in questura per denuncia.', 'Avvisa familiari.'],
        doNot: ['NON ignorare le minacce.', 'NON cambiare solo nickname (non basta).'],
        contactLabel: 'Antiviolenza',
        contactNumber: '1522',
        contactLink: 'tel:1522',
        moduleLink: '/moduli/modulo-06b-stalking-doxxing',
        checklist: ['Prove salvate', 'Bloccato stalker', 'Denuncia sporta']
    },
    {
        id: 'revenge-porn',
        title: 'Revenge Porn (Diffusione illecita)',
        icon: ShieldAlert,
        first10Min: ['Interrompi comunicazioni.', 'Salva prove/link.', 'Segnala su StopNCII.org.'],
        nextHour: ['Segnala al Garante.', 'Denuncia polizia postale.', 'Richiedi rimozione forzata.'],
        doNot: ['NON vergognarti.', 'NON pagare.', 'NON cancellare le prove.'],
        contactLabel: 'Polizia Postale',
        contactNumber: 'Segnala',
        contactLink: 'https://www.commissariatodips.it/',
        moduleLink: '/moduli/modulo-04-sextortion-ricatti',
        checklist: ['Prove salvate', 'Segnalazione StopNCII', 'Denuncia']
    },
    {
        id: 'truffa-marketplace',
        title: 'Truffa Marketplace',
        icon: CreditCard,
        first10Min: ['Salva chat/annuncio.', 'Salva dati pagatore.', 'Blocca venditore.'],
        nextHour: ['Segnala a piattaforma.', 'Fai denuncia polizia.', 'Contatta banca se carta usata.'],
        doNot: ['NON pagare fuori dalla piattaforma.', 'NON fidarti di pagamenti anonimi.'],
        contactLabel: 'Polizia',
        contactNumber: 'Denuncia',
        contactLink: 'https://denunceviaweb.poliziadistato.it/',
        moduleLink: '/moduli/modulo-18-consumatori',
        checklist: ['Prove chat', 'Denuncia sporta', 'Segnalazione piattaforma']
    },
    {
        id: 'spyware',
        title: 'Sospetto Spyware/Stalkerware',
        icon: Smartphone,
        first10Min: ['Metti in modalità aereo.', 'Controlla app sconosciute.', 'Aggiorna sistema.'],
        nextHour: ['Ripristina dati di fabbrica (previo backup).', 'Cambia password.', 'Avvisa autorità se stalker noto.'],
        doNot: ['NON ignorare riscaldamento device.', 'NON tenere app sconosciute.'],
        contactLabel: 'Supporto Sicurezza',
        contactNumber: 'Guida Sicurezza',
        contactLink: '/moduli/modulo-15-sicurezza-avanzata',
        moduleLink: '/moduli/modulo-07-privacy-smartphone',
        checklist: ['App rimosse', 'Password cambiate', 'Reset effettuato']
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

    return (
        <Container size="lg" className="py-12 min-h-screen">
            <PageHeader 
                centered
                badge="Centro Soccorso"
                icon={AlertTriangle}
                title="Emergenze Digitali"
                description="Protocolli operativi per intervenire nei primi minuti di una crisi."
            />

            {!selectedScenario ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SCENARIOS.map((scenario) => (
                        <button
                            key={scenario.id}
                            onClick={() => { setSelectedScenario(scenario); window.location.hash = scenario.id }}
                            className="bg-surface border-2 border-border p-8 rounded-[2.5rem] flex flex-col items-start gap-6 text-left hover:border-primary hover:shadow-xl transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-surface-muted text-secondary border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                <scenario.icon size={32} />
                            </div>
                            <h3 className="text-xl font-black text-foreground group-hover:text-primary leading-tight">{scenario.title}</h3>
                        </button>
                    ))}
                </div>
            ) : (
                <div className="space-y-8">
                    <button onClick={() => { setSelectedScenario(null); window.history.pushState(null, '', '/sos') }} className="text-primary font-bold">← Indietro</button>
                    <Card className="p-8 md:p-12 border-2 border-border rounded-[2.5rem] space-y-8">
                        <div className="flex items-center gap-6">
                            <selectedScenario.icon className="w-12 h-12 text-primary" />
                            <h2 className="text-4xl font-black">{selectedScenario.title}</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-emerald-600">Primi 10 minuti</h4>
                                <ul className="list-disc pl-5 text-secondary">{selectedScenario.first10Min.map((s, i) => <li key={i}>{s}</li>)}</ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-sos">Cosa NON fare</h4>
                                <ul className="list-disc pl-5 text-secondary">{selectedScenario.doNot.map((s, i) => <li key={i}>{s}</li>)}</ul>
                            </div>
                        </div>
                        <Button asChild size="lg" className="rounded-xl"><Link href={selectedScenario.moduleLink}>Apri Guida Completa</Link></Button>
                    </Card>
                </div>
            )}
        </Container>
    )
}
