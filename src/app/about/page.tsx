'use client'

import { motion } from 'framer-motion'
import { Shield, Heart, Users, Sparkles, Globe, Zap } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

const values = [
    {
        icon: Shield,
        title: 'Sicurezza Prima',
        description: 'Ogni modulo è progettato per proteggere la tua vita digitale con strategie concrete e testate.',
        color: 'text-neon-cyan',
        bg: 'bg-neon-cyan/10',
    },
    {
        icon: Heart,
        title: 'Empatia Digitale',
        description: 'Crediamo in un web dove il rispetto e la gentilezza sono la norma, non l\'eccezione.',
        color: 'text-neon-pink',
        bg: 'bg-neon-pink/10',
    },
    {
        icon: Users,
        title: 'Community First',
        description: 'Una comunità di giovani che si supportano a vicenda nella navigazione sicura.',
        color: 'text-neon-purple',
        bg: 'bg-neon-purple/10',
    },
    {
        icon: Sparkles,
        title: 'Innovazione',
        description: 'Utilizziamo AI e gamification per rendere l\'apprendimento della sicurezza coinvolgente.',
        color: 'text-neon-yellow',
        bg: 'bg-neon-yellow/10',
    },
    {
        icon: Globe,
        title: 'Accessibilità',
        description: 'Contenuti gratuiti e accessibili a tutti, senza barriere linguistiche o tecniche.',
        color: 'text-neon-green',
        bg: 'bg-neon-green/10',
    },
    {
        icon: Zap,
        title: 'Azione Rapida',
        description: 'Il bottone SOS per emergenze immediate — perché ogni secondo conta.',
        color: 'text-neon-cyan',
        bg: 'bg-neon-cyan/10',
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
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
}

export default function AboutPage() {
    return (
        <Container size="full" className="py-16 space-y-24">
            {/* Hero */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-6 max-w-3xl mx-auto"
            >
                <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                    Chi <span className="text-gradient-cyan">Siamo</span>
                </h1>
                <p className="text-xl text-white/50 leading-relaxed">
                    Bussola è nata dall&apos;idea che ogni giovane merita gli strumenti per navigare il mondo digitale in sicurezza.
                    Siamo un team di esperti di cybersecurity, educatori e designer uniti da una missione comune.
                </p>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0e27] p-12 md:p-20"
            >
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-30%] right-[-15%] w-[70%] h-[70%] bg-neon-purple/15 rounded-full blur-[140px]" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-neon-cyan/10 rounded-full blur-[120px]" />
                </div>
                <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                        La Nostra <span className="text-gradient-purple">Missione</span>
                    </h2>
                    <p className="text-lg md:text-2xl text-white/60 leading-relaxed">
                        Costruire un ecosistema educativo dove la Gen Z possa apprendere, praticare e padroneggiare
                        la sicurezza digitale attraverso esperienze interattive e gamificate.
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
                <div className="border-l-4 border-neon-purple pl-8 py-2">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
                        I NOSTRI <span className="text-gradient-cyan">VALORI</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, i) => (
                        <motion.div key={i} variants={itemVariants}>
                            <Card
                                className="h-full p-8 flex flex-col gap-6 border-white/5 bg-white/[0.02]"
                                hoverEffect
                                glowColor="cyan"
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${value.bg} ${value.color}`}>
                                    <value.icon className="w-8 h-8" strokeWidth={2} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-black text-white tracking-tight">{value.title}</h3>
                                    <p className="text-sm text-white/40 leading-relaxed">{value.description}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Stats */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
                {[
                    { number: '7+', label: 'Moduli Interattivi' },
                    { number: '50+', label: 'Lezioni Pratiche' },
                    { number: '24/7', label: 'Supporto SOS' },
                    { number: '100%', label: 'Gratuito' },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-center p-8 rounded-3xl border border-white/5 bg-white/[0.02]"
                    >
                        <div className="text-4xl md:text-5xl font-black text-gradient-cyan mb-2">{stat.number}</div>
                        <div className="text-sm font-bold text-white/30 uppercase tracking-widest">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>
        </Container>
    )
}
