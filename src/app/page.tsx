'use client'

import { useGameStore } from '@/store/useGameStore'
import { MODULES_DATA } from '@/data/modules'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@/components/ui/Icon'

export default function Dashboard() {
  const { modules, totalXP, tier } = useGameStore()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <div className="p-4 md:p-8 space-y-12">
      {/* Welcome Hero */}
      <section className="relative p-8 md:p-16 rounded-[3rem] bg-blue-900/40 backdrop-blur-2xl border border-white/10 overflow-hidden shadow-glass group">
        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
          <Icon name="zap" size={200} className="text-cyan-400" />
        </div>

        {/* Animated Glow Overlay */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-[100px] animate-pulse-glow" />

        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] uppercase font-black tracking-widest text-cyan-300/60">Sistema di Difesa Attivo</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-tight">
            BENVENUTO, <span className="blue-glow text-white">GUARDIANO.</span>
          </h1>

          <p className="text-xl text-blue-200/60 font-medium leading-relaxed">
            Il tuo percorso verso la sovranità digitale continua. Accumula esperienza e scala i ranghi della cyber-consapevolezza.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <div className="px-8 py-4 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
              <span className="text-[10px] block text-cyan-400/60 uppercase font-black tracking-widest mb-1">Rango Attuale</span>
              <span className="text-3xl font-black text-white uppercase italic tracking-tighter">{tier}</span>
            </div>
            <div className="px-8 py-4 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
              <span className="text-[10px] block text-cyan-400/60 uppercase font-black tracking-widest mb-1">XP Totali</span>
              <span className="text-3xl font-black text-white">{totalXP}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Bento Grid */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black italic flex items-center gap-3 tracking-tighter uppercase whitespace-pre line-clamp-1">
            <Icon name="dashboard" size={24} className="text-cyan-400" /> IL TUO <span className="text-cyan-400 underline decoration-cyan-400/30 underline-offset-8">PERCORSO</span>
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {MODULES_DATA.map((mod, index) => {
            const progress = modules[mod.id] || { completed: false, xp: 0 }

            // Define Bento spans for a more interesting layout
            const getSpanClasses = (idx: number) => {
              if (idx === 0) return 'md:col-span-2 md:row-span-2' // Highlight first module
              if (idx === 3) return 'md:col-span-2' // Wider card in the middle
              if (idx === 6) return 'md:row-span-2' // Tall card
              return 'md:col-span-1'
            }

            return (
              <motion.div key={mod.id} variants={item} className={getSpanClasses(index)}>
                <Link href={`/moduli/${mod.id}`} className="block h-full">
                  <div className={`group relative h-full p-8 rounded-[2.5rem] bg-blue-900/20 backdrop-blur-xl border border-white/5 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-cyan-400/10 flex flex-col`}>
                    {/* Progress Indicator */}
                    {progress.completed && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400 shadow-blue-glow" />
                    )}

                    <div className="flex justify-between items-start mb-8">
                      <div className="text-5xl group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">{mod.icon}</div>
                      {progress.completed ? (
                        <div className="flex items-center gap-2 px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
                          <Icon name="check" className="text-cyan-400" size={12} />
                          <span className="text-[8px] font-black text-cyan-400 uppercase tracking-widest">Completato</span>
                        </div>
                      ) : (
                        <div className="text-[10px] font-bold text-blue-400/30 bg-white/5 px-2 py-1 rounded-lg uppercase tracking-widest">Lvl {mod.difficulty}</div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-black group-hover:text-cyan-300 transition-colors tracking-tighter italic uppercase">{mod.title}</h3>
                      <p className={`text-sm text-blue-200/40 font-medium leading-relaxed italic ${index === 0 ? 'max-w-md' : ''}`}>{mod.description}</p>
                    </div>

                    <div className="flex items-center justify-between mt-12">
                      <div className="px-3 py-1 bg-blue-600/10 border border-blue-400/10 rounded-lg">
                        <span className="text-[10px] font-black text-blue-400/60 uppercase tracking-widest italic">{mod.category || 'Security'}</span>
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-300 border border-white/5 group-hover:border-cyan-400/30">
                        <Icon name="chevron" size={18} className="text-blue-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>

                    {/* Gradient Glow Effect */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-400/5 rounded-full blur-[50px] group-hover:bg-cyan-400/10 transition-colors" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </section>
    </div>
  )
}
