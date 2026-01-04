'use client'

import { useState, useEffect } from 'react'
import { useGameStore } from '@/store/useGameStore'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export function HeaderSafe() {
    const { theme, setTheme } = useGameStore()
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
