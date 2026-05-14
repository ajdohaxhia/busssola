'use client'

import { motion } from 'framer-motion'
import { Shield, Users, LineChart, Globe, Zap } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { siteStats } from '@/data/siteStats'
import Link from 'next/link'

const values = [
    {
        icon: Shield,
        title: 'Chiarezza Istituzionale',
        description: 'Trasformiamo il gergo burocratico in guide semplici, lineari e immediatamente applicabili, indicando sempre gli enti ufficiali di riferimento.',
        color: 'text-primary',
        bg: 'bg-primary/10',
    },
    {
        icon: Zap,
        title: 'Cittadinanza Attiva',
        description: 'Crediamo che conoscere i propri diritti e le procedure per esercitarli sia il primo passo per una partecipazione consapevole alla vita pubblica.',
        color: 'text-amber-600',
        bg: 'bg-amber-50',
    },
    {
        icon: Users,
        title: 'A misura di persona',
        description: 'Busssola è pensata per cittadini, famiglie, studenti e lavoratori. Usiamo un linguaggio umano, chiaro e privo di tecnicismi inutili.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
    },
    {
        icon: LineChart,
        title: 'Fonti Verificate',
        description: 'Ogni guida è costruita analizzando siti istituzionali, leggi e circolari ufficiali per garantire informazioni affidabili e sicure.',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
    },
    {
        icon: Globe,
        title: 'Accessibilità Totale',
        description: 'L\'accesso alle informazioni civiche è un diritto. La nostra piattaforma è e resterà gratuita, senza pubblicità e senza tracciamento.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        icon: Shield,
        title: 'Indipendenza e Privacy',
        description: 'Busssola è un progetto indipendente e civico. Non richiede registrazioni, non raccoglie dati personali e non ha scopi di lucro.',
        color: 'text-sos',
        bg: 'bg-[#fef2f2]',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
}

export default function AboutPage() {
    return (
        <Container size="md" className="py-16 space-y-24">
            {/* Hero */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-6 max-w-4xl mx-auto"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-2">
                    <Shield className="w-4 h-4" /> Progetto Indipendente
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-semibold text-foreground tracking-tight leading-tight">
                    Orientarsi tra i propri diritti non deve essere difficile.
                </h1>
                <p className="text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
                    Busssola è una risorsa pubblica e gratuita di orientamento civico. Aiutiamo i cittadini a capire documenti, procedure, bonus e tutele in Italia con guide semplici e verificate.
                </p>
                <p className="text-sm font-semibold text-secondary">
                    Creato con ❤️ da{' '}
                    <Link href="/adelajdo-haxhiaj" className="text-primary hover:underline">
                        Adelajdo Haxhiaj
                    </Link>.
                </p>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface p-10 md:p-20 shadow-sm"
            >
                <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground tracking-tight">
                        Semplificare, non sostituire.
                    </h2>
                    <p className="text-lg md:text-xl text-secondary leading-relaxed font-medium">
                        Busssola non sostituisce gli enti ufficiali, ma agisce come un traduttore tra la burocrazia e le persone. Ogni scheda indica cosa serve, dove andare e quali sono i passaggi reali per completare una procedura, dal rilascio dello SPID alla richiesta della NASpI.
                    </p>
                </div>
            </motion.div>

            {/* Values Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="space-y-12"
            >
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground tracking-tight mb-4">
                        I nostri principi
                    </h2>
                    <p className="text-secondary max-w-xl mx-auto">
                        Le fondamenta su cui costruiamo ogni risorsa, ogni articolo e ogni interazione su Busssola.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, i) => (
                        <motion.div key={i} variants={itemVariants}>
                            <div className="h-full p-8 flex flex-col gap-6 rounded-2xl border border-border bg-surface hover:border-primary/30 transition-all shadow-sm">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${value.bg} ${value.color}`}>
                                    <value.icon className="w-6 h-6" strokeWidth={2.5} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold text-foreground tracking-tight">{value.title}</h3>
                                    <p className="text-secondary leading-relaxed">{value.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Stats / Milestones */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
                {[
                    { number: siteStats.totalModules.toString(), label: 'Argomenti disponibili' },
                    { number: siteStats.publishedLessons.toString(), label: 'Schede pratiche' },
                    { number: '24/7', label: 'Accesso gratuito' },
                    { number: '0', label: 'Dati raccolti' },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-center p-6 sm:p-8 rounded-2xl border border-border bg-surface shadow-sm"
                    >
                        <div className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">{stat.number}</div>
                        <div className="text-xs sm:text-sm font-semibold text-secondary uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Contribuisci */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-surface p-8 md:p-12 space-y-4"
            >
                <h2 className="text-2xl font-display font-semibold text-foreground tracking-tight">
                    Vuoi aiutare a migliorare Busssola?
                </h2>
                <p className="text-secondary leading-relaxed max-w-2xl">
                    Il progetto è aperto a contributi tecnici, revisioni delle fonti, correzioni e segnalazioni. Ogni contributo viene valutato secondo i principi editoriali del progetto.
                </p>
                <a
                    href="https://github.com/ajdohaxhia/busssola"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                    Contribuisci su GitHub →
                </a>
            </motion.div>
        </Container>
    )
}
