'use client'

import { useState, useMemo, memo } from 'react'
import { motion } from 'framer-motion'
import { MODULES_MAP } from '@/data/modules/index'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import { cn } from '@/lib/utils'
import { useGameStore } from '@/store/useGameStore'
import { ModuleMetadata } from '@/types'
import { Container } from '@/components/ui/Container'

const ModuleCard = memo(({ module, index, progress }: { module: ModuleMetadata, index: number, progress: any }) => {
    const IconComponent = (Icons as any)[module.icon] || Icons.HelpCircle

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                delay: Math.min(index * 0.02, 0.3),
                ease: "easeOut"
            }}
            className={cn(
                "glass-card rounded-2xl p-0 overflow-hidden group flex flex-col aspect-square",
                "col-span-1"
            )}
        >
            <Link href={`/moduli/${module.id}`} className="flex-1 flex flex-col relative p-4 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3">
                        <div className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg",
                            "bg-white/5 text-neon-cyan border border-white/10"
                        )}>
                            <IconComponent className="w-5 h-5" />
                        </div>

                        <span className={cn(
                            "text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-md border",
                            module.difficulty === 'base' ? 'text-neon-green border-neon-green/20' :
                                module.difficulty === 'intermedia' ? 'text-neon-yellow border-neon-yellow/20' : 'text-neon-pink border-neon-pink/20'
                        )}>
                            {module.difficulty[0]}
                        </span>
                    </div>

                    <h2 className="text-sm md:text-base font-display font-bold mb-1 line-clamp-2 group-hover:text-neon-cyan transition-colors leading-tight">{module.title}</h2>
                    <p className="hidden xs:block text-white/40 text-[10px] line-clamp-2 mb-2 leading-tight">{module.subtitle}</p>

                    <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/5">
                        <div className="flex items-center gap-1.5 text-[10px] font-medium text-white/30">
                            <Icons.BookOpen className="w-3 h-3" />
                            {module.lessonCount}
                        </div>

                        {progress?.completed ? (
                            <Icons.CheckCircle2 className="w-4 h-4 text-neon-green" />
                        ) : (
                            <ArrowIcon className="w-3.5 h-3.5 text-white/10 group-hover:text-white transition-colors" />
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    )
})

ModuleCard.displayName = 'ModuleCard'

export default function ModulesPage() {
    const { modules: progress } = useGameStore() as { modules: Record<string, any> }
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'base' | 'intermedia' | 'avanzata'>('all')

    const filteredModules = useMemo(() => {
        return MODULES_MAP.filter(module => {
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {filteredModules.length > 0 ? (
                    filteredModules.map((module, index: number) => (
                        <ModuleCard
                            key={module.id}
                            module={module}
                            index={index}
                            progress={progress[module.id]}
                        />
                    ))
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
