'use client'

import { useMemo } from 'react'
import { motion, Variants } from 'framer-motion'
import { Play, ChevronRight, Lock, Eye, Shield, Zap, Compass, Sparkles, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { useGameStore } from '@/store/useGameStore'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ALL_MODULES } from '@/data/modules/index'

export default function Dashboard() {
  const { modules } = useGameStore()

  // Get recommended module
  const recommendedModule = useMemo(() => {
    const incomplete = ALL_MODULES.find(m => {
      const progress = modules[m.id]
      return !progress || !progress.completed
    })
    return incomplete || ALL_MODULES[0]
  }, [modules])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  }

  return (
    <Container size="full" className="py-10 space-y-16">

      {/* ==================== HERO SECTION ==================== */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[3rem] border border-white/10"
      >
        {/* Cinematic Background */}
        <div className="absolute inset-0 bg-[#0a0e27]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-cyan/25 rounded-full blur-[140px] animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-purple/25 rounded-full blur-[140px] animate-pulse-slow delay-700" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 brightness-100 contrast-150" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e27]/50 to-[#0a0e27]" />
        </div>

        <div className="relative z-10 p-10 md:p-20 flex flex-col items-start justify-center text-left min-h-[500px]">
          <div className="space-y-10 max-w-3xl">
            {/* Brand Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Compass className="w-4 h-4 text-neon-cyan animate-spin-slow" />
              <span className="text-xs font-bold text-white tracking-[0.25em] uppercase">Progetto Bussola</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-6xl md:text-8xl font-display font-bold text-white leading-[0.9] tracking-tight"
            >
              Naviga il <br />
              <span className="text-gradient-cyan">Futuro Digitale</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-white/70 max-w-2xl leading-relaxed font-light"
            >
              La tua guida alla sicurezza online. Impara a difenderti da predatori, truffe e manipolazioni con moduli interattivi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-5 pt-6"
            >
              <Button asChild size="lg" variant="cyan" className="rounded-2xl text-lg px-10 shadow-neon hover:shadow-[0_0_40px_rgba(0,245,255,0.5)] hover:scale-105 transition-all">
                <Link href="/moduli">
                  <Play className="w-5 h-5 fill-current mr-2" />
                  Inizia Ora
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ==================== QUICK PATHS SECTION ==================== */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center gap-4">
            <Sparkles className="w-8 h-8 text-neon-yellow" />
            <span>Percorsi Rapidi</span>
          </h2>
          <p className="text-white/60 text-lg">Inizia subito con i moduli più richiesti</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Predatori",
              desc: "Anti-grooming",
              icon: Eye,
              color: "text-neon-pink",
              bg: "bg-neon-pink/10",
              borderGlow: "hover:border-neon-pink/30",
              glow: "pink" as const,
              href: "/moduli/predatori-online"
            },
            {
              title: "Privacy",
              desc: "Difesa tecnica",
              icon: Lock,
              color: "text-neon-cyan",
              bg: "bg-neon-cyan/10",
              borderGlow: "hover:border-neon-cyan/30",
              glow: "cyan" as const,
              href: "/moduli/privacy-tecnica"
            },
            {
              title: "Social",
              desc: "Ingegneria sociale",
              icon: Shield,
              color: "text-neon-purple",
              bg: "bg-neon-purple/10",
              borderGlow: "hover:border-neon-purple/30",
              glow: "purple" as const,
              href: "/moduli/phishing-social-engineering"
            },
            {
              title: "AI Fake",
              desc: "Deepfake detector",
              icon: Zap,
              color: "text-neon-green",
              bg: "bg-neon-green/10",
              borderGlow: "hover:border-neon-green/30",
              glow: "cyan" as const,
              href: "/moduli/ai-deepfake"
            },
            {
              title: "Gaming",
              desc: "Safe Communities",
              icon: Compass,
              color: "text-neon-purple",
              bg: "bg-neon-purple/10",
              borderGlow: "hover:border-neon-purple/30",
              glow: "purple" as const,
              href: "/moduli/gaming-communities"
            },
            {
              title: "Finanze",
              desc: "Crypto & Scam",
              icon: Shield,
              color: "text-neon-yellow",
              bg: "bg-neon-yellow/10",
              borderGlow: "hover:border-neon-yellow/30",
              glow: "purple" as const,
              href: "/moduli/finanze-crypto"
            },
            {
              title: "Dati",
              desc: "GDPR & Privacy",
              icon: Lock,
              color: "text-neon-cyan",
              bg: "bg-neon-cyan/10",
              borderGlow: "hover:border-neon-cyan/30",
              glow: "cyan" as const,
              href: "/moduli/gdpr-data-breach"
            },
            {
              title: "Diritti",
              desc: "Libertà Online",
              icon: CheckCircle2,
              color: "text-neon-green",
              bg: "bg-neon-green/10",
              borderGlow: "hover:border-neon-green/30",
              glow: "cyan" as const,
              href: "/moduli/diritti-digitali"
            },
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Link href={item.href}>
                <Card
                  className={cn(
                    "p-6 flex flex-col gap-5 transition-all duration-300 group cursor-pointer border-white/10",
                    item.borderGlow
                  )}
                  hoverEffect
                  glowColor={item.glow}
                >
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                    item.bg,
                    item.color
                  )}>
                    <item.icon className="w-8 h-8" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl text-white mb-1 group-hover:text-gradient-cyan transition-colors">{item.title}</h4>
                    <p className="text-sm text-white/50 uppercase tracking-wider font-medium">{item.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all self-end" />
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  )
}
