'use client'

import { motion } from 'framer-motion'
import { Shield, Heart, Users, LineChart, Globe, Zap } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const values = [
    {
        icon: Shield,
        title: 'Centralità della Sicurezza',
        description: 'Ogni risorsa è pensata per offrire strumenti pratici, aggiornati e concreti per proteggere la propria identità e la propria serenità online.',
        color: 'text-primary',
        bg: 'bg-primary/10',
    },
    {
        icon: Heart,
        title: 'Intelligenza Emotiva',
        description: 'La tecnologia dovrebbe arricchire la nostra vita. Promuoviamo un ambiente digitale basato sul rispetto, l\'empatia e la consapevolezza.',
        color: 'text-sos',
        bg: 'bg-[#fef2f2]',
    },
    {
        icon: Users,
        title: 'Apprendimento Condiviso',
        description: 'Crediamo che l\'educazione digitale sia uno sforzo collettivo. Forniamo risorse non solo per singoli, ma per scuole, educatori e famiglie.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
    },
    {
        icon: LineChart,
        title: 'Chiarezza a ogni costo',
        description: 'Trasformiamo concetti tecnici complessi in guide chiare, leggibili e immediatamente applicabili nella vita quotidiana.',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
    },
    {
        icon: Globe,
        title: 'Accessibilità Totale',
        description: 'La sicurezza digitale è un diritto, non un privilegio. La nostra piattaforma è e resterà gratuita e accessibile a tutti, senza barriere.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        icon: Zap,
        title: 'Supporto Immediato',
        description: 'Oltre all\'educazione preventiva, forniamo protocolli chiari per gestire situazioni di crisi ed emergenza senza farsi prendere dal panico.',
        color: 'text-amber-600',
        bg: 'bg-amber-50',
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
                    Sicurezza senza allarmismi.
                </h1>
                <p className="text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
                    Busssola è una piattaforma di educazione civica digitale. Non vendiamo software di sicurezza, non tracciamo le tue abitudini e non usiamo il terrore per fare click. Offriamo solo indicazioni pratiche per comprendere la rete.
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
                        Il nostro metodo.
                    </h2>
                    <p className="text-lg md:text-xl text-secondary leading-relaxed font-medium">
                        La tecnologia evolve più velocemente della nostra consapevolezza. Invece di stilare lunghi manuali teorici, destrutturiamo i pericoli reali (truffe, grooming, data breach) in guide visive, brevi e immediatamente applicabili. È educazione alla cittadinanza per il secolo corrente.
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
                    { number: '50', label: 'Moduli Formativi' },
                    { number: '1000', label: 'Lezioni Pratiche' },
                    { number: '24/7', label: 'Accesso Gratuito' },
                    { number: '100%', label: 'Privacy Respettata' },
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
        </Container>
    )
}
