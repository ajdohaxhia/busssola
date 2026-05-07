'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Users, BookOpen, Presentation, Send } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'

const benefits = [
    {
        icon: Presentation,
        title: 'Pronto per la LIM',
        description: 'Lezioni progettate con font grandi e schemi chiari, perfette per essere proiettate in classe e discusse con gli studenti.'
    },
    {
        icon: BookOpen,
        title: 'Moduli Modulari',
        description: 'Scegli gli argomenti più adatti alla tua classe: dal cyberbullismo alla privacy dei social, senza dover seguire un ordine fisso.'
    },
    {
        icon: Users,
        title: 'Linguaggio Adeguato',
        description: 'Parliamo ai ragazzi con franchezza e rispetto, evitando toni paternalistici o eccessivamente tecnici.'
    }
]

export default function ScuolePage() {
    return (
        <Container size="md" className="py-16 space-y-24">
            {/* Hero */}
            <header className="text-center space-y-6 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide mb-2 uppercase">
                    <GraduationCap className="w-4 h-4" /> Per Docenti e Formatori
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-semibold text-foreground tracking-tight leading-tight">
                    Porta la consapevolezza digitale in classe.
                </h1>
                <p className="text-xl text-secondary leading-relaxed">
                    Busssola fornisce risorse gratuite e strutturate per aiutare gli insegnanti a guidare gli studenti attraverso i rischi e le opportunità della rete.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <Link href="/percorsi" className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all">
                        Esplora i Percorsi
                    </Link>
                    <Link href="/contact" className="bg-surface border border-border text-foreground px-8 py-4 rounded-xl font-bold hover:bg-surface-muted transition-all">
                        Richiedi Materiali
                    </Link>
                </div>
            </header>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-3xl border border-border bg-surface space-y-4"
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <benefit.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                        <p className="text-secondary text-sm leading-relaxed">{benefit.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* How to use section */}
            <section className="bg-surface-muted rounded-[3rem] p-10 md:p-16 space-y-12">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl font-display font-bold text-foreground text-center">Come usare Busssola a scuola</h2>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">1</div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-foreground">Lezione Frontale</h4>
                                <p className="text-secondary">Usa i moduli "Relazioni Online" o "Fake News" come spunto per un dibattito aperto in classe.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">2</div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-foreground">Laboratorio Pratico</h4>
                                <p className="text-secondary">Guida gli studenti nella configurazione reale della privacy dei loro account social seguendo i nostri moduli tecnici.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">3</div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-foreground">Verifica e Ripasso</h4>
                                <p className="text-secondary">Lascia che gli studenti esplorino i percorsi in autonomia e monitorino i progressi salvati localmente sui loro tablet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="bg-primary text-white p-12 rounded-[3rem] text-center space-y-6 shadow-2xl shadow-primary/30">
                <h3 className="text-3xl font-display font-bold">Hai bisogno di materiali specifici?</h3>
                <p className="text-white/80 max-w-xl mx-auto text-lg leading-relaxed">
                    Stiamo preparando kit didattici pronti all'uso (PDF, slide, schede di lavoro). Contattaci via email per essere avvisato quando saranno pronti.
                </p>
                <Link href="mailto:scuole@busssola.com" className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/90 transition-all">
                    <Send size={24} /> scuole@busssola.com
                </Link>
            </div>
        </Container>
    )
}
