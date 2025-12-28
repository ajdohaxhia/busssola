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
    <div className="p-4 md:p-8 space-y-8">
      {/* Welcome Hero */}
      <section className="relative p-8 md:p-12 rounded-[2.5rem] bg-dark-800 border border-white/5 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Icon name="zap" size={200} className="text-neon-yellow" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4">
            BENVENUTO, <span className="text-neon-yellow">GUARDIANO.</span>
          </h1>
          <p className="text-lg text-gray-400 font-medium mb-8">
            Stai diventando un esperto di sicurezza digitale. Continua il tuo percorso per sbloccare nuovi ranghi e proteggere la tua identità online.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-xs block text-gray-500 uppercase font-bold">Livello Attuale</span>
              <span className="text-2xl font-black text-white uppercase">{tier}</span>
            </div>
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-xs block text-gray-500 uppercase font-bold">XP Accumulati</span>
              <span className="text-2xl font-black text-neon-yellow">{totalXP}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Bento Grid */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black italic flex items-center gap-3 underline decoration-neon-yellow decoration-4 underline-offset-8">
            <Icon name="dashboard" size={24} /> IL TUO PERCORSO
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {MODULES_DATA.map((mod) => {
            const progress = modules[mod.id] || { completed: false, xp: 0 }
            return (
              <motion.div key={mod.id} variants={item}>
                <Link href={`/moduli/${mod.id}`}>
                  <div className={`group relative h-full p-8 rounded-[2rem] bg-dark-800 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden`}>
                    {/* Progress Bar Top */}
                    {progress.completed && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-neon-mint" />
                    )}

                    <div className="flex justify-between items-start mb-6">
                      <div className="text-4xl">{mod.icon}</div>
                      {progress.completed ? (
                        <Icon name="check" className="text-neon-mint" />
                      ) : (
                        <div className="text-[10px] font-bold text-gray-500 bg-white/5 px-2 py-1 rounded">ID: {mod.id.slice(0, 3)}</div>
                      )}
                    </div>

                    <h3 className="text-xl font-black mb-2 group-hover:text-neon-yellow transition-colors">{mod.title}</h3>
                    <p className="text-sm text-gray-500 mb-8 font-medium leading-relaxed">{mod.description}</p>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{mod.difficulty}</span>
                      <Icon name="chevron" className="text-gray-700 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Background Glow */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-neon-yellow/10 transition-colors" />
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
