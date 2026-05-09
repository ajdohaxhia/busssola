'use client'

import { HelpCircle, MessagesSquare, ChevronRight, ShieldAlert } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'

export default function HelpPage() {
    const faqs = [
        { q: 'Cosa significa che i miei dati sono al sicuro?', a: 'Busssola è progettata senza database utente. Usa il tuo dispositivo (Local Storage) per ricordarsi dove sei arrivato. Se cambi telefono o cancelli la cronologia, perdi i progressi, ma mantieni l\'anonimato assoluto al 100%.' },
        { q: 'Busssola funziona offline?', a: 'No. La versione pubblica è un sito statico veloce e leggero, ma richiede connessione per aprire pagine non già caricate dal browser. Abbiamo rimosso la vecchia modalità PWA per privilegiare affidabilità, semplicità e sicurezza.' },
        { q: 'Siete affiliati con la Polizia Postale o enti statali?', a: 'No, siamo un progetto educativo indipendente. Forniamo solo i link corretti per permetterti di effettuare denunce o segnalazioni quando necessario.' },
        { q: 'Posso usare questi materiali a scuola?', a: 'Sì. Tutti i nostri moduli sono gratuiti e pensati per essere proiettati su LIM o usati in laboratori scolastici. Guarda la pagina Scuole per maggiori dettagli.' },
        { q: 'Cosa succede cliccando il bottone rosso SOS?', a: 'Vieni portato a una pagina sicura dove, senza registrazioni o telefonate automatiche immediate, ricevi le istruzioni esatte su cosa (non) fare per arginare un problema prima di chiamare i soccorsi.' }
    ]

    return (
        <Container size="md" className="py-16 md:py-24 space-y-16 min-h-screen">
            <header className="space-y-6 text-center pb-12 border-b border-border">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-4 p-5">
                    <HelpCircle size={40} className="w-full h-full" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-foreground leading-[1.1]">
                    Centro Aiuto
                </h1>
                <p className="text-xl text-secondary max-w-2xl mx-auto font-medium">
                    Come funziona la piattaforma Busssola, la tua privacy, l'uso dei moduli a casa o in classe.
                </p>
                <div className="pt-4">
                    <Link href="/sos" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#fef2f2] text-sos text-sm font-semibold tracking-wide border border-sos-border hover:bg-sos/10 transition-colors">
                        <ShieldAlert size={16} /> Hai bisogno del centro Emergenze? Clicca qui.
                    </Link>
                </div>
            </header>

            <section className="space-y-6 max-w-3xl mx-auto">
                {faqs.map((f, i) => (
                    <div key={i} className="bg-surface p-8 rounded-3xl border border-border hover:border-primary/30 transition-all duration-300 shadow-sm focus-within:ring-2 focus-within:ring-primary/20">
                        <h3 className="font-semibold text-lg md:text-xl mb-4 flex items-start gap-4 tracking-tight text-foreground leading-snug">
                            <span className="text-primary font-bold bg-primary/10 w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5">?</span> 
                            {f.q}
                        </h3>
                        <p className="text-secondary leading-relaxed pl-12 font-medium">
                            {f.a}
                        </p>
                    </div>
                ))}
            </section>

            <section className="max-w-3xl mx-auto pt-12">
                <Link href="/contact" className="block p-8 md:p-10 rounded-[2.5rem] bg-foreground text-background text-center relative overflow-hidden group hover:scale-[1.02] transition-transform">
                    <div className="absolute inset-0 bg-primary/10 transition-opacity group-hover:bg-primary/20" />
                    <div className="relative z-10 space-y-4">
                        <div className="w-16 h-16 bg-background rounded-full text-foreground flex items-center justify-center mx-auto mb-6 shadow-sm">
                            <MessagesSquare size={28} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight">
                            Non trovi quello che cerchi?
                        </h2>
                        <p className="text-background/80 text-lg leading-relaxed max-w-xl mx-auto">
                            Usa la pagina contatti per inviare una domanda diretta al nostro team. Ti risponderemo il prima possibile.
                        </p>
                        <div className="pt-2 font-semibold flex items-center justify-center gap-2 group-hover:text-primary transition-colors">
                            Vai ai Contatti <ChevronRight size={18} />
                        </div>
                    </div>
                </Link>
            </section>
        </Container>
    )
}
