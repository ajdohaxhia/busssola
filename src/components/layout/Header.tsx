'use client'

import { useGameStore } from '@/store/useGameStore'
import { motion } from 'framer-motion'
import { Icon } from '@/components/ui/Icon'

export function HeaderSafe() {
    const { totalXP, tier, theme, setTheme } = useGameStore()

    const tierLabels: Record<string, string> = {
        ingenuo: 'Iniziato',
        consapevole: 'Consapevole',
        informato: 'Informato',
        esperto: 'Esperto',
        guardian: 'Digital Guardian',
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-30 h-16 bg-deep-blue/40 backdrop-blur-xl border-b border-white/5 md:left-64 flex items-center justify-between px-6 shadow-glass">
            <div className="flex items-center gap-4">
                {/* Tier Badge */}
                <div className="hidden sm:flex items-center gap-2 bg-blue-900/40 border border-white/10 px-3 py-1.5 rounded-full shadow-blue-glow">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-blue-glow animate-pulse" />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-300/60">Rango:</span>
                    <span className="text-xs font-black text-white uppercase">{tierLabels[tier]}</span>
                </div>
            </div>

            <div className="flex items-center gap-6">
                {/* XP Counter */}
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-2xl shadow-inner">
                    <span className="text-xl font-black text-white">{totalXP}</span>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">XP</span>
                </div>

                {/* Theme Toggle */}
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 text-cyan-400/60 hover:text-white hover:bg-white/5 rounded-lg transition"
                >
                    <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={20} />
                </button>
            </div>
        </header>
    )
}
