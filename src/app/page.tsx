'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Zap, BookOpen, Trophy, Info, ArrowUpRight, Play, Eye } from 'lucide-react'
import Link from 'next/link'
import { useGameStore } from '@/store/useGameStore'
import { cn } from '@/lib/utils'

export default function Dashboard() {
  const { totalXP, tier } = useGameStore()

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Spotlight */}
      <section className="relative overflow-hidden rounded-[2.5rem] glass-card p-8 md:p-12 group">
        {/* Animated Background Accents */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-neon-cyan/10 blur-[100px] animate-pulse group-hover:bg-neon-cyan/20 transition-all duration-700" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-neon-pink/5 blur-[100px] animate-float group-hover:bg-neon-pink/10 transition-all duration-700" />

        {/* Modern Accent Bar */}
        <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink group-hover:w-full transition-all duration-700" />

        <div className="relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Zap className="w-3 h-3 fill-current animate-flicker" />
            Nuovo Modulo: AI & Deepfakes
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 12 }}
            className="text-5xl md:text-7xl font-display font-extrabold mb-6 tracking-tight leading-[1.1]"
          >
            Dominia il tuo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink drop-shadow-sm">Futuro Digitale.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl mb-10 leading-relaxed font-sans"
          >
            La bussola definitiva per la Generazione Z. 18 moduli, 500+ lezioni,
            zero tracciamento. Proteggi te stesso, oggi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex flex-wrap gap-5"
          >
            <Link href="/moduli/predatori-online" className="relative group/btn overflow-hidden px-10 py-5 bg-neon-cyan text-dark-bg rounded-2xl font-bold flex items-center gap-2 hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]">
              <Play className="w-5 h-5 fill-current" />
              Inizia Ora
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
            </Link>
            <Link href="/moduli" className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
              Esplora Catalogo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid */}
      <div className="bento-grid gap-6">
        {/* Progress Card (Large) */}
        <div className="lg:col-span-8 glass-card rounded-[2.5rem] p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 h-1 w-0 bg-gradient-to-r from-neon-cyan to-neon-purple group-hover:w-full transition-all duration-500" />
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-neon-purple/5 blur-[80px] group-hover:bg-neon-purple/10 transition-all duration-500" />

          <div className="flex flex-col md:flex-row gap-12 items-center justify-between relative z-10">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-display font-bold mb-2">Il tuo Progress</h2>
                <p className="text-white/40 max-w-sm font-sans">Sblocca il badge &apos;Maestro Digitale&apos; completando altri 1.500 XP.</p>
              </div>

              <div className="flex items-center gap-8 py-4">
                <div className="space-y-1">
                  <span className="text-5xl font-mono font-bold text-neon-cyan drop-shadow-[0_0_10px_rgba(0,245,255,0.3)]">{totalXP}</span>
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30">Punti XP</p>
                </div>
                <div className="w-px h-16 bg-white/10" />
                <div className="space-y-1">
                  <span className="text-5xl font-mono font-bold capitalize bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">{tier}</span>
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30">Rango Skill</p>
                </div>
              </div>
            </div>

            <div className="relative w-48 h-48 flex items-center justify-center">
              <div className="absolute inset-0 bg-neon-cyan/5 rounded-full blur-2xl group-hover:bg-neon-cyan/10 transition-all" />
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="96" cy="96" r="84" className="stroke-white/5 fill-none" strokeWidth="12" />
                <motion.circle
                  cx="96" cy="96" r="84"
                  className="stroke-neon-cyan fill-none"
                  strokeWidth="12"
                  strokeDasharray="528"
                  initial={{ strokeDashoffset: 528 }}
                  animate={{ strokeDashoffset: 528 - (528 * 0.45) }} // Placeholder progress
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Trophy className="w-12 h-12 text-neon-cyan drop-shadow-[0_0_15px_rgba(0,245,255,0.5)] animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Categories Spotlight */}
        <div className="lg:col-span-4 lg:row-span-2 glass-card rounded-[2.5rem] p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 h-1 w-0 bg-neon-pink group-hover:w-full transition-all duration-500" />
          <h3 className="text-2xl font-display font-bold mb-8">Quick Access</h3>
          <div className="space-y-5">
            {[
              { icon: Eye, label: 'Anti-Grooming', color: 'bg-neon-pink' },
              { icon: Lock, label: 'Tech Privacy', color: 'bg-neon-purple' },
              { icon: Shield, label: 'Legal Defense', color: 'bg-neon-cyan' },
              { icon: BrainIcon, label: 'Social Mental', color: 'bg-neon-green' }
            ].map((cat, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer group/item border border-white/0 hover:border-white/5">
                <div className="flex items-center gap-4">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-dark-bg shadow-lg transition-transform group-hover/item:scale-110", cat.color)}>
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm tracking-tight">{cat.label}</p>
                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-wider">Start Lesson</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover/item:text-white group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-all" />
              </div>
            ))}
          </div>
          <Link href="/moduli" className="block w-full text-center mt-10 text-xs font-bold uppercase tracking-[0.2em] text-neon-cyan hover:text-white transition-colors">
            Vedi tutto &rarr;
          </Link>
        </div>

        {/* Mini Tip Card */}
        <div className="lg:col-span-4 glass-card rounded-[2.5rem] p-10 relative overflow-hidden group bg-neon-cyan/5">
          <div className="absolute top-0 right-0 h-1 w-0 bg-neon-cyan group-hover:w-full transition-all duration-500" />
          <div className="w-14 h-14 bg-neon-cyan rounded-2xl flex items-center justify-center mb-6 text-dark-bg shadow-lg shadow-neon-cyan/20 transition-transform group-hover:rotate-12">
            <Info className="w-7 h-7" />
          </div>
          <h4 className="font-display font-bold text-xl mb-3">Pro Tip</h4>
          <p className="text-white/50 text-sm leading-relaxed font-sans">
            Sapevi che il 90% degli attacchi di grooming inizia in voice-chat durante il gaming? Mantieni i tuoi dati personali privati.
          </p>
        </div>

        {/* Quick Help (Emergency) */}
        <div className="lg:col-span-4 glass-card rounded-[2.5rem] p-10 relative overflow-hidden group border-neon-pink/20">
          <div className="absolute top-0 right-0 h-1 w-0 bg-neon-pink group-hover:w-full transition-all duration-500" />
          <div className="flex items-center justify-between mb-8">
            <h4 className="font-display font-bold text-xl text-neon-pink animate-flicker">URGENZE (24/7)</h4>
            <div className="w-3 h-3 rounded-full bg-neon-pink animate-ping" />
          </div>
          <div className="flex gap-5">
            <div className="flex-1 p-5 rounded-3xl bg-neon-pink/10 border border-neon-pink/20 text-center transition-transform hover:scale-105">
              <p className="text-3xl font-mono font-black text-neon-pink">112</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/30 mt-1">E-POLIZIA</p>
            </div>
            <div className="flex-1 p-5 rounded-3xl bg-white/5 border border-white/10 text-center transition-transform hover:scale-105">
              <p className="text-3xl font-mono font-black text-white/80">1.96.96</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/30 mt-1">AZZURRO</p>
            </div>
          </div>
          <Link href="/sos" className="mt-8 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
            Guida d&apos;Emergenza <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.105 3.001 3.001 0 0 0 4 3 3 3 0 1 0 5.918-1 3.001 3.001 0 0 0 4-3 4 4 0 0 0 .52-8.105 4 4 0 0 0-2.527-5.77A3 3 0 1 0 12 5Z" />
      <path d="M12 5v14" />
      <path d="M7 14.75a2.5 2.5 0 0 1-5 0" />
      <path d="M17 14.75a2.5 2.5 0 0 0 5 0" />
      <path d="M7 10.25a2.5 2.5 0 0 1-5 0" />
      <path d="M17 10.25a2.5 2.5 0 0 0 5 0" />
      <path d="M8.5 19a2.5 2.5 0 0 1-5 0" />
      <path d="M15.5 19a2.5 2.5 0 0 0 5 0" />
    </svg>
  )
}

function Brain({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.105 3.001 3.001 0 0 0 4 3 3 3 0 1 0 5.918-1 3.001 3.001 0 0 0 4-3 4 4 0 0 0 .52-8.105 4 4 0 0 0-2.527-5.77A3 3 0 1 0 12 5Z" />
      <path d="M12 5v14" />
      <path d="M7 14.75a2.5 2.5 0 0 1-5 0" />
      <path d="M17 14.75a2.5 2.5 0 0 0 5 0" />
      <path d="M7 10.25a2.5 2.5 0 0 1-5 0" />
      <path d="M17 10.25a2.5 2.5 0 0 0 5 0" />
      <path d="M8.5 19a2.5 2.5 0 0 1-5 0" />
      <path d="M15.5 19a2.5 2.5 0 0 0 5 0" />
    </svg>
  )
}
