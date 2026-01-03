'use client'

import { useMemo } from 'react'
import { motion, Variants } from 'framer-motion'
import { Play, ChevronRight, Lock, Eye, Shield, Zap, Compass, Sparkles } from 'lucide-react'
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
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  return (
    <Container size="full" className="py-8 space-y-12">

      {/* ==================== HERO SECTION ==================== */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-[3rem] border border-white/10"
      >
        {/* Cinematic Background */}
        <div className="absolute inset-0 bg-[#0a0e27]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px] animate-pulse-slow delay-700" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 brightness-100 contrast-150" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e27]/50 to-[#0a0e27]" />
        </div>

        <div className="relative z-10 p-8 md:p-16 flex flex-col items-start justify-center text-left">
          <div className="space-y-8 max-w-2xl">
            {/* Brand Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Compass className="w-4 h-4 text-neon-cyan animate-spin-slow" />
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">Progetto Bussola</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9] tracking-tight"
            >
              Naviga il <br />
              <span className="text-gradient-cyan">Futuro Digitale</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/60 max-w-lg leading-relaxed font-light"
            >
              La tua guida alla sicurezza online. Impara a difenderti da predatori, truffe e manipolazioni con moduli interattivi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button asChild size="lg" variant="cyan" className="rounded-2xl text-lg px-8 shadow-neon hover:scale-105 transition-transform">
                <Link href={`/moduli/${recommendedModule?.id || 'predatori-online'}`}>
                  <Play className="w-5 h-5 fill-current mr-2" />
                  Inizia Ora
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl text-lg px-8 border-white/20 hover:bg-white/5">
                <Link href="/moduli">
                  Esplora Moduli
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ==================== BENTO GRID ==================== */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-6"
      >
        {/* Categories (Full Row) */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-neon-yellow" />
            <span>Percorsi Rapidi</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Predatori",
                desc: "Anti-grooming",
                icon: Eye,
                color: "text-neon-pink",
                bg: "bg-neon-pink/10",
                href: "/moduli/predatori-online"
              },
              {
                title: "Privacy",
                desc: "Difesa tecnica",
                icon: Lock,
                color: "text-neon-cyan",
                bg: "bg-neon-cyan/10",
                href: "/moduli/privacy-tecnica"
              },
              {
                title: "Social",
                desc: "Ingegneria sociale",
                icon: Shield,
                color: "text-neon-purple",
                bg: "bg-neon-purple/10",
                href: "/moduli/phishing-social-engineering"
              },
              {
                title: "AI Fake",
                desc: "Deepfake detector",
                icon: Zap,
                color: "text-neon-green",
                bg: "bg-neon-green/10",
                href: "/moduli/ai-deepfake"
              },
            ].map((item, i) => (
              <Link key={i} href={item.href}>
                <Card className="p-4 flex items-center gap-4 hover:border-white/30 transition-colors group cursor-pointer" hoverEffect>
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110", item.bg, item.color)}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-white/50 uppercase tracking-wider">{item.desc}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Container>
  )
}
