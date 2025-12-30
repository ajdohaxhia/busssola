'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Play, Trophy, Flame, Target, ChevronRight, Lock, Eye, Shield, Zap, Gamepad2, Compass, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useGameStore } from '@/store/useGameStore'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ALL_MODULES } from '@/data/modules/index'

export default function Dashboard() {
  const { totalXP, tier, modules, achievements } = useGameStore()

  // Calculate streak (mock)
  const streak = 3

  // Get recommended module
  const recommendedModule = useMemo(() => {
    const incomplete = ALL_MODULES.find(m => {
      const progress = modules[m.id]
      return !progress || !progress.completed
    })
    return incomplete || ALL_MODULES[0]
  }, [modules])

  // Get featured game
  const featuredGame = useMemo(() => {
    const games: Array<{ id: string; title: string; description: string; moduleId: string; moduleTitle: string; icon: string }> = []
    ALL_MODULES.slice(0, 5).forEach(m => {
      if (m.games && m.games.length > 0) {
        const game = m.games[0]
        games.push({
          id: game.id,
          title: game.title,
          description: game.description,
          moduleId: m.id,
          moduleTitle: m.title,
          icon: m.icon || '🎮'
        })
      }
    })
    return games[Math.floor(Math.random() * games.length)] || games[0]
  }, [])

  // Daily goal mock
  const dailyGoal = {
    current: Object.keys(modules).length % 4,
    target: 3,
    label: "lezioni"
  }

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

  const itemVariants = {
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

        <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
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
              <Link href={`/moduli/${recommendedModule?.id || 'predatori-online'}`}>
                <Button size="lg" variant="cyan" className="rounded-2xl text-lg px-8 shadow-neon hover:scale-105 transition-transform">
                  <Play className="w-5 h-5 fill-current mr-2" />
                  Inizia Ora
                </Button>
              </Link>
              <Link href="/moduli">
                <Button size="lg" variant="outline" className="rounded-2xl text-lg px-8 border-white/20 hover:bg-white/5">
                  Esplora Moduli
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* 3D Glass Stats */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 rounded-[3rem] rotate-6 blur-md opacity-50" />
            <div className="absolute inset-0 glass-card rounded-[3rem] flex flex-col items-center justify-center p-8 border border-white/20 shadow-2xl backdrop-blur-2xl">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center mb-6 shadow-lg">
                <Trophy className="w-10 h-10 text-white fill-white/20" />
              </div>
              <div className="text-center space-y-2">
                <div className="text-5xl font-display font-bold text-white">{totalXP}</div>
                <div className="text-xs text-white/40 uppercase tracking-[0.3em] font-bold">Punti Esperienza</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ==================== BENTO GRID ==================== */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
      >
        {/* Daily Goal (Start Small) */}
        <motion.div variants={itemVariants} className="lg:col-span-4">
          <Card className="h-full flex flex-col justify-between p-8 bg-gradient-to-br from-white/5 to-transparent border-white/10" hoverEffect>
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-neon-pink/10 flex items-center justify-center text-neon-pink">
                <Target className="w-6 h-6" />
              </div>
              <span className="font-mono text-neon-pink bg-neon-pink/10 px-3 py-1 rounded-full text-xs font-bold">
                Daily Goal
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <h3 className="text-2xl font-bold text-white">{dailyGoal.current}/{dailyGoal.target}</h3>
                <span className="text-white/40 text-sm">lezioni completate</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(dailyGoal.current / dailyGoal.target) * 100}%` }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-full bg-gradient-to-r from-neon-pink to-neon-purple"
                />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Streak (Small) */}
        <motion.div variants={itemVariants} className="lg:col-span-3">
          <Card className="h-full p-8 flex flex-col justify-center items-center text-center bg-gradient-to-b from-neon-orange/5 to-transparent" hoverEffect>
            <div className="w-16 h-16 rounded-full bg-neon-orange/10 flex items-center justify-center text-neon-orange mb-4 shadow-[0_0_30px_rgba(255,149,0,0.2)]">
              <Flame className="w-8 h-8 fill-current animate-pulse" />
            </div>
            <div className="text-4xl font-display font-bold text-white mb-1">{streak}</div>
            <div className="text-xs text-white/40 uppercase tracking-widest">Giorni di fila</div>
          </Card>
        </motion.div>

        {/* Featured Game (Medium Wide) */}
        <motion.div variants={itemVariants} className="lg:col-span-5">
          <Link href="/gioca" className="block h-full group">
            <Card className="h-full p-0 relative overflow-hidden group-hover:border-neon-cyan/50 transition-colors" hoverEffect>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                <div className="flex items-start justify-between">
                  <div className="px-3 py-1 rounded-lg bg-neon-cyan/10 text-neon-cyan text-xs font-bold border border-neon-cyan/20">
                    IN EVIDENZA
                  </div>
                  <Gamepad2 className="w-6 h-6 text-white/20 group-hover:text-neon-cyan transition-colors" />
                </div>

                <div className="flex items-end gap-6">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-wider">
                      <span>{featuredGame?.moduleTitle}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors line-clamp-1">
                      {featuredGame?.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-neon-cyan group-hover:text-dark-bg transition-colors">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </motion.div>

        {/* Categories (Full Row) */}
        <motion.div variants={itemVariants} className="lg:col-span-12 mt-4">
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
