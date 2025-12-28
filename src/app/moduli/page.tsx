'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ALL_MODULES } from '@/data/modules/index'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import { cn } from '@/lib/utils'
import { useGameStore } from '@/store/useGameStore'
import { Module } from '@/types'
import { Container } from '@/components/ui/Container'

export default function ModulesPage() {
    const { modules: progress } = useGameStore() as { modules: Record<string, any> }
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'base' | 'intermedia' | 'avanzata'>('all')

    const filteredModules = useMemo(() => {
        return ALL_MODULES.filter(module => {
            const matchesSearch = module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                module.description.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesDifficulty = selectedDifficulty === 'all' || module.difficulty.toLowerCase() === selectedDifficulty
            return matchesSearch && matchesDifficulty
        })
    }, [searchQuery, selectedDifficulty])

    return (
        <Container size="full" className="py-8 space-y-8">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-xl space-y-2">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                        Protocolli <span className="text-neon-cyan">Operativi</span>
                    </h1>
                    <p className="text-white/60 text-lg leading-relaxed">
                        19 moduli tattici per la difesa digitale totale. Scegli il tuo target.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <div className="relative group">
                        <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-neon-cyan transition-colors" />
                        <input
                            type="text"
                            placeholder="Cerca protocollo..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full sm:w-64 bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm font-medium text-white placeholder:text-white/20 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all"
                        />
                    </div>
                </div>
            </header>

            {/* Difficulty Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                {(['all', 'base', 'intermedia', 'avanzata'] as const).map((level) => (
                    <button
                        key={level}
                        onClick={() => setSelectedDifficulty(level)}
                        className={cn(
                            "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all whitespace-nowrap",
                            selectedDifficulty === level
                                ? "bg-white text-dark-bg border-white"
                                : "bg-transparent text-white/40 border-white/10 hover:text-white hover:border-white/30"
                        )}
                    >
                        {level === 'all' ? 'Tutti i livelli' : level}
                    </button>
                ))}
            </div>

            {/* Modules Grid */}
            <div className="bento-grid gap-6">
                {filteredModules.length > 0 ? (
                    filteredModules.map((module: Module, index: number) => {
                        const IconComponent = (Icons as any)[module.icon] || Icons.HelpCircle
                        const moduleProgress = progress[module.id] || { completed: false, xp: 0 }

                        // Dynamic class for grid spanning if needed, currently uniform
                        const isFeatured = false

                        return (
                            <motion.div
                                key={module.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className={cn(
                                    "glass-card rounded-[1.5rem] p-0 overflow-hidden group flex flex-col",
                                    "col-span-1 md:col-span-1 lg:col-span-4" // Consistent sizing typically requires 12-col grid logic
                                )}
                            >
                                <Link href={`/moduli/${module.id}`} className="flex-1 flex flex-col relative p-6 h-full">
                                    {/* Hover Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className={cn(
                                                "w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg",
                                                "bg-white/5 text-neon-cyan border border-white/10"
                                            )}>
                                                <IconComponent className="w-6 h-6" />
                                            </div>

                                            <span className={cn(
                                                "text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md border",
                                                module.difficulty === 'base' ? 'text-neon-green border-neon-green/20' :
                                                    module.difficulty === 'intermedia' ? 'text-neon-yellow border-neon-yellow/20' : 'text-neon-pink border-neon-pink/20'
                                            )}>
                                                {module.difficulty}
                                            </span>
                                        </div>

                                        <h2 className="text-xl font-display font-bold mb-2 group-hover:text-neon-cyan transition-colors">{module.title}</h2>
                                        <p className="text-white/50 text-sm line-clamp-2 mb-6">{module.subtitle}</p>

                                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                                            <div className="flex items-center gap-2 text-xs font-medium text-white/40">
                                                <Icons.BookOpen className="w-4 h-4" />
                                                {module.lessons.length} Lezioni
                                            </div>

                                            {moduleProgress.completed ? (
                                                <Icons.CheckCircle2 className="w-5 h-5 text-neon-green" />
                                            ) : (
                                                <ArrowIcon className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })
                ) : (
                    <div className="col-span-full py-20 text-center">
                        <Icons.SearchX className="w-12 h-12 text-white/20 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Nessun modulo trovato</h3>
                        <p className="text-white/40">Prova a cambiare i filtri di ricerca.</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedDifficulty('all'); }}
                            className="mt-6 text-neon-cyan text-sm font-bold uppercase tracking-widest hover:underline"
                        >
                            Mostra tutti
                        </button>
                    </div>
                )}
            </div>
        </Container>
    )
}

function ArrowIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}
