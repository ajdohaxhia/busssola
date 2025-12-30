'use client'

import { useState, useEffect } from 'react'
import { useGameStore } from '@/store/useGameStore'
import { Sun, Moon, Zap, Trophy } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export function HeaderSafe() {
    const { totalXP, tier, theme, setTheme } = useGameStore()
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        let ticking = false
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY
                    if (currentScrollY > lastScrollY && currentScrollY > 100) {
                        setIsVisible(false)
                    } else {
                        setIsVisible(true)
                    }
                    setLastScrollY(currentScrollY)
                    ticking = false
                })
                ticking = true
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-4 left-4 right-4 z-30 lg:left-[calc(16rem+2rem)] lg:right-10 pointer-events-none"
        >
            <div className="flex justify-end pointer-events-auto">
                <div className="glass-thin rounded-2xl px-4 py-2 flex items-center gap-4">
                    {/* Tier Badge */}
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                        <div className="relative">
                            <div className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_#00f5ff] animate-pulse" />
                            <div className="absolute inset-0 bg-neon-cyan/50 rounded-full animate-ping" />
                        </div>
                        <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Rank</span>
                        <span className="text-xs font-bold text-white uppercase ml-1">{tier}</span>
                    </div>

                    {/* XP Counter */}
                    <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl bg-neon-purple/10 border border-neon-purple/20 text-neon-purple shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                        <Zap className="w-4 h-4 fill-current" />
                        <span className="font-mono font-bold text-sm tracking-tighter">{totalXP} XP</span>
                    </div>

                    <div className="w-px h-6 bg-white/10" />

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all active:scale-95"
                    >
                        {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                </div>
            </div>
        </motion.header>
    )
}
