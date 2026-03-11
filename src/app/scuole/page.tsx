'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Presentation, ShieldCheck, Mail, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const features = [
    {
        icon: BookOpen,
        title: 'Moduli Pronti all\'Uso',
        description: 'Lezioni strutturate, aggiornate e pronte per essere mostrate in classe tramite LIM o assegnate come studio individuale.',
    },
    {
        icon: Presentation,
        title: 'Linguaggio Chiaro',
        description: 'Concetti complessi tradotti in un linguaggio comprensibile e accessibile per ragazzi delle scuole medie e superiori.',
    },
    {
        icon: Users,
        title: 'Apprendimento Attivo',
        description: 'Casi studio pratici e scenari realistici per stimolare il pensiero critico e incoraggiare la discussione di gruppo.',
    },
    {
        icon: ShieldCheck,
        title: 'Prevenzione e Rispetto',
        description: 'Focus sulle competenze trasversali: rispetto reciproco online, gestione delle emozioni e prevenzione del cyberbullismo.',
    },
]

export default function SchoolsPage() {
    return (
        <Container size="md" className="py-16 md:py-24 space-y-24">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-8 max-w-4xl mx-auto"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-4">
                    <BookOpen size={16} /> Percorsi per le Scuole
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-semibold text-foreground tracking-tight leading-tight">
                    Educazione civica digitale per la tua classe.
                </h1>
                <p className="text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
                    Busssola offre agli insegnanti ed educatori risorse gratuite, chiare e immediate per affrontare i temi della sicurezza online e del benessere digitale a scuola.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link href="/moduli">
                        <Button size="lg" className="rounded-xl px-8 h-14 text-base">
                            Esplora i Moduli
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="rounded-xl px-8 h-14 text-base">
                            Richiedi Materiale <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
            </motion.div>

            {/* Why Busssola for Schools */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
            >
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground tracking-tight mb-4">
                        Strumenti pensati per i docenti
                    </h2>
                    <p className="text-secondary leading-relaxed">
                        Sappiamo quanto sia difficile rimanere aggiornati sulle dinamiche digitali. Abbiamo creato Busssola per essere il tuo assistente didattico.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, i) => (
                        <div key={i} className="p-8 rounded-3xl border border-border bg-surface shadow-sm hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                                <feature.icon size={24} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                            <p className="text-secondary leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-10 md:p-16 rounded-[2.5rem] bg-foreground text-background text-center relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-primary/10" />
                <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight">
                        Vuoi portare Busssola nel tuo istituto?
                    </h2>
                    <p className="text-background/80 text-lg leading-relaxed">
                        Organizziamo incontri formativi, forniamo linee guida per l'uso dei materiali in classe e collaboriamo con le scuole per progetti personalizzati.
                    </p>
                    <div className="pt-4">
                        <Link href="/contact">
                            <Button variant="default" className="bg-background text-foreground hover:bg-background/90 rounded-xl px-8 h-12 text-base font-semibold">
                                <Mail className="w-4 h-4 mr-2" /> Contattaci ora
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </Container>
    )
}
