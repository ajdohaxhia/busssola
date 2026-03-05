'use client'

import { useState, useMemo, memo } from 'react'
import { motion, Variants } from 'framer-motion'
import { MODULES_MAP } from '@/data/modules/index'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import { cn } from '@/lib/utils'
import { useGameStore } from '@/store/useGameStore'
import { ModuleMetadata } from '@/types'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 }
    }
}

const ModuleCard = memo(({ module, progress }: { module: ModuleMetadata, progress: unknown }) => {
    const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[module.icon] || Icons.HelpCircle

    const color = module.difficulty === 'base' ? 'text-neon-green' : module.difficulty === 'intermedia' ? 'text-neon-yellow' : 'text-neon-pink'
    const bg = module.difficulty === 'base' ? 'bg-neon-green/10' : module.difficulty === 'intermedia' ? 'bg-neon-yellow/10' : 'bg-neon-pink/10'
    const glow = module.difficulty === 'base' ? 'cyan' : module.difficulty === 'intermedia' ? 'purple' : 'pink'

    // safe cast for progress
    const isCompleted = (progress as { completed?: boolean })?.completed

    return (
        <motion.div variants={itemVariants} className="col-span-1 h-full">
            <Link href={`/moduli/${module.id}`} className="block h-full group">
                <Card
                    className="h-full p-8 flex flex-col gap-6 transition-all duration-500 border-white/5 bg-white/[0.02]"
                    hoverEffect
                    glowColor={glow as Extract<Parameters<typeof Card>[0]['glowColor'], string>}
                >
                    <div className="flex justify-between items-start">
                        <div className={cn(
                            "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl",
                            bg, color
                        )}>
                            <IconComponent className="w-8 h-8" strokeWidth={2.5} />
                        </div>
                        <span className={cn(
                            "text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-md border",
                            module.difficulty === 'base' ? 'text-neon-green border-neon-green/20 bg-neon-green/10' :
                                module.difficulty === 'intermedia' ? 'text-neon-yellow border-neon-yellow/20 bg-neon-yellow/10' : 'text-neon-pink border-neon-pink/20 bg-neon-pink/10'
                        )}>
                            {module.difficulty}
                        </span>
                    </div>

                    <div className="flex-1 space-y-2">
                        <h2 className="text-xl md:text-2xl font-black text-white tracking-tighter group-hover:text-neon-cyan transition-colors leading-tight">
                            {module.title}
                        </h2>
                        <p className="text-sm font-medium text-white/40 leading-relaxed line-clamp-2">
                            {module.subtitle}
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2 text-xs font-bold text-white/30 uppercase tracking-widest">
                            <Icons.BookOpen className="w-4 h-4" />
                            {module.lessonCount} LEZIONI
                        </div>
                        {isCompleted ? (
                            <Icons.CheckCircle2 className="w-5 h-5 text-neon-green" />
                        ) : (
                            <Icons.ChevronRight className="w-6 h-6 text-white/20 group-hover:text-neon-cyan group-hover:translate-x-2 transition-all" />
                        )}
                    </div>
                </Card>
            </Link>
        </motion.div>
    )
})

ModuleCard.displayName = 'ModuleCard'

export default function ModulesPage() {
    const { modules: progress } = useGameStore() as { modules: Record<string, { completed?: boolean }> }
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
        <Container size="full" className="py-16 space-y-16">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl space-y-4"
                >
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                        Protocolli <span className="text-gradient-cyan">Operativi</span>
                    </h1>
                    <p className="text-xl text-white/50 leading-relaxed font-medium">
                        19 moduli tattici per la difesa digitale totale. Scegli il tuo target e inizia l&apos;addestramento.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col w-full md:w-auto gap-4"
                >
                    <div className="relative group w-full md:w-80">
                        <Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-neon-cyan transition-colors" />
                        <input
                            type="text"
                            placeholder="Cerca protocollo..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-base font-medium text-white placeholder:text-white/20 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all"
                        />
                    </div>
                </motion.div>
            </header>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar border-b border-white/5"
            >
                {(['all', 'base', 'intermedia', 'avanzata'] as const).map((level) => (
                    <button
                        key={level}
                        onClick={() => setSelectedDifficulty(level)}
                        className={cn(
                            "px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap border",
                            selectedDifficulty === level
                                ? "bg-white text-dark-bg border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                : "bg-transparent text-white/40 border-white/10 hover:text-white hover:border-white/30 hover:bg-white/5"
                        )}
                    >
                        {level === 'all' ? 'Tutti i livelli' : level}
                    </button>
                ))}
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
                {filteredModules.length > 0 ? (
                    filteredModules.map((module, index: number) => (
                        <ModuleCard
                            key={module.id}
                            module={module}
                            progress={progress[module.id]}
                        />
                    ))
                ) : (
                    <div className="col-span-full py-24 text-center">
                        <Icons.SearchX className="w-16 h-16 text-white/20 mx-auto mb-6" />
                        <h3 className="text-3xl font-black text-white tracking-tighter mb-4">Nessun protocollo trovato</h3>
                        <p className="text-lg text-white/40 mb-8">Prova a cambiare i filtri di ricerca per trovare nuovi target.</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedDifficulty('all'); }}
                            className="text-neon-cyan text-sm font-black uppercase tracking-widest hover:underline"
                        >
                            Reset Filtri
                        </button>
                    </div>
                )}
            </motion.div>
        </Container>
    )
}
