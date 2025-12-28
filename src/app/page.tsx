'use client'

import { motion } from 'framer-motion'
import { Play, Trophy, Flame, Target, ChevronRight, Lock, Eye, Shield, Zap, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useGameStore } from '@/store/useGameStore'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'

export default function Dashboard() {
  const { totalXP, tier } = useGameStore()

  // Mock data for Flow A (Next Step)
  const nextLesson = {
    title: "Come riconoscere un Deepfake",
    module: "AI & Deepfakes",
    duration: "5 min",
    difficulty: "Intermedio"
  }

  const dailyGoal = {
    current: 1,
    target: 3,
    label: "Lezioni oggi"
  }

  return (
    <Container size="full" className="py-8 space-y-8">
      {/* Header: Greeting & Daily Goal */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight">
            Bentornato, <span className="text-neon-cyan">Guardian.</span>
          </h1>
          <p className="text-white/60 font-medium">Il tuo percorso verso la sicurezza digitale continua.</p>
        </div>

        {/* Daily Goal Micro-Widget */}
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
          <Target className="w-5 h-5 text-neon-pink" />
          <div className="text-sm font-bold">
            <span className="text-white">{dailyGoal.current}/{dailyGoal.target}</span> <span className="text-white/40">{dailyGoal.label}</span>
          </div>
          <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-neon-pink w-1/3" />
          </div>
        </div>
      </div>

      {/* Primary Flow A: Continue Learning Hero */}
      <Link href="/moduli/ai-deepfake" className="block group">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-white/10 p-8 md:p-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-neon">
          <div className="absolute inset-0 bg-dark-bg/40 backdrop-blur-sm -z-10" />

          <div className="flex flex-col md:flex-row justify-between md:items-center gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-bold uppercase tracking-widest">
                <Play className="w-3 h-3 fill-current" />
                Continua ad imparare
              </div>

              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                {nextLesson.title}
              </h2>

              <div className="flex items-center gap-4 text-white/50 text-sm font-medium">
                <span>{nextLesson.module}</span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span>{nextLesson.duration}</span>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span className="text-neon-yellow">{nextLesson.difficulty}</span>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-neon-cyan text-dark-bg flex items-center justify-center shadow-[0_0_30px_rgba(0,245,255,0.4)] group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 md:w-8 md:h-8 fill-current ml-1" />
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* 1. Streak Card */}
        <div className="glass-card rounded-[1.5rem] p-6 flex flex-col justify-between h-48 group cursor-default">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-neon-orange/10 rounded-xl text-neon-orange">
              <Flame className="w-6 h-6" />
            </div>
            <span className="text-4xl font-display font-bold text-white">3</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Day Streak</h3>
            <p className="text-sm text-white/40">Sei on fire! Torna domani.</p>
          </div>
        </div>

        {/* 2. XP & Rank Card */}
        <Link href="/profilo" className="glass-card rounded-[1.5rem] p-6 flex flex-col justify-between h-48 group hover:border-neon-purple/50">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-neon-purple/10 rounded-xl text-neon-purple">
              <Trophy className="w-6 h-6" />
            </div>
            <span className="text-xl font-mono font-bold text-neon-purple">{totalXP} XP</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1 capitalize">{tier}</h3>
            <div className="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-neon-purple w-[45%]" />
            </div>
            <p className="text-xs text-white/40 mt-2 text-right">Prossimo rank: 450 XP</p>
          </div>
        </Link>

        {/* 3. Browse Modules (Large Tile) */}
        <Link href="/moduli" className="md:col-span-2 glass-card rounded-[1.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-neon-green/50">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-neon-green font-bold text-sm uppercase tracking-widest">
              <Zap className="w-4 h-4" /> Catalogo
            </div>
            <h3 className="text-2xl font-display font-bold">Esplora 19 Moduli di Sicurezza</h3>
            <p className="text-white/50 max-w-sm">Dalla privacy base alla difesa contro AI deepfakes. Scegli il tuo percorso.</p>
          </div>
          <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-neon-green group-hover:text-dark-bg group-hover:border-neon-green transition-all">
            <ChevronRight className="w-6 h-6" />
          </div>
        </Link>

        {/* 4. Quick Access: Anti-Grooming */}
        <Link href="/moduli/predatori-online" className="glass-card rounded-[1.5rem] p-6 flex items-center gap-4 group hover:border-neon-pink/50">
          <div className="w-12 h-12 rounded-xl bg-neon-pink/10 flex items-center justify-center text-neon-pink group-hover:scale-110 transition-transform">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-white">Anti-Grooming</h4>
            <p className="text-xs text-neon-pink font-bold uppercase tracking-wider mt-1">Avvia &rarr;</p>
          </div>
        </Link>

        {/* 5. Quick Access: Tech Privacy */}
        <Link href="/moduli/privacy-tecnica" className="glass-card rounded-[1.5rem] p-6 flex items-center gap-4 group hover:border-neon-cyan/50">
          <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan group-hover:scale-110 transition-transform">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-white">Tech Privacy</h4>
            <p className="text-xs text-neon-cyan font-bold uppercase tracking-wider mt-1">Inizia Ora</p>
          </div>
        </Link>

        {/* 6. SOS Widget */}
        <Link href="/sos" className="md:col-span-2 glass-card rounded-[1.5rem] p-6 flex items-center justify-between bg-neon-danger/5 border-neon-danger/20 hover:bg-neon-danger/10 transition-colors group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-neon-danger/20 flex items-center justify-center text-neon-danger animate-pulse">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg">Canale SOS</h4>
              <p className="text-white/50 text-sm">Hai bisogno di aiuto immediato?</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-neon-danger text-white rounded-lg font-bold text-sm group-hover:scale-105 transition-transform">
            Chiama 112
          </div>
        </Link>

      </div>
    </Container>
  )
}
