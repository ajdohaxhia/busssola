'use client'

import { Container } from '@/components/ui/Container'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
    {
        q: "Busssola è davvero gratuito?",
        a: "Sì. Tutti i contenuti formativi, i percorsi e i protocolli SOS sono accessibili gratuitamente senza bisogno di registrazione."
    },
    {
        q: "Posso usare Busssola nella mia scuola?",
        a: "Assolutamente sì. Busssola è pensata per essere usata dagli insegnanti in classe. Puoi visualizzare i moduli sulla lavagna multimediale (LIM) o farli seguire agli studenti dai loro dispositivi."
    },
    {
        q: "Come salvate i miei progressi se non c'è login?",
        a: "Usiamo una tecnologia chiamata 'Local Storage'. I tuoi dati restano sul tuo computer o telefono. Se cambi dispositivo o cancelli la cronologia, i progressi spariranno, ma la tua privacy resterà intatta."
    },
    {
        q: "Voi siete la Polizia Postale?",
        a: "No. Siamo un progetto educativo indipendente. Forniamo informazioni e guide su come proteggersi, ma per denunce o emergenze devi rivolgerti alle autorità competenti tramite i link che indichiamo nel centro SOS."
    },
    {
        q: "Posso suggerire un nuovo argomento?",
        a: "Sì, siamo sempre aperti a feedback. Puoi scriverci tramite la pagina Contatti suggerendo nuovi temi o segnalando contenuti che vorresti veder approfonditi."
    }
]

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <Container size="md" className="py-16 space-y-12">
            <header className="space-y-4 text-center">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">Domande Frequenti</h1>
                <p className="text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
                    Tutto quello che c'è da sapere su Busssola, in breve.
                </p>
            </header>

            <div className="space-y-4 max-w-3xl mx-auto">
                {FAQS.map((faq, i) => (
                    <div key={i} className="border border-border rounded-2xl overflow-hidden bg-surface">
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-muted transition-colors"
                        >
                            <span className="font-semibold text-foreground">{faq.q}</span>
                            {openIndex === i ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-secondary" />}
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="p-6 pt-0 text-secondary leading-relaxed border-t border-border/50 bg-surface-muted/30">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </Container>
    )
}
