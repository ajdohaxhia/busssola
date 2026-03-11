'use client'

import { useState, useMemo, memo } from 'react'
import { motion, Variants } from 'framer-motion'
import { MODULES_MAP } from '@/data/modules-meta'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import { cn } from '@/lib/utils'
import { useGameStore } from '@/store/useGameStore'
import { ModuleMetadata } from '@/types'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 }
    }
}

const ModuleCard = memo(({ module, progress }: { module: ModuleMetadata, progress: unknown }) => {
    const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[module.icon] || Icons.HelpCircle

    const isCompleted = (progress as { completed?: boolean })?.completed

    return (
        <motion.div variants={itemVariants} className="col-span-1 h-full">
            <Link href={`/moduli/${module.id}`} className="block h-full group">
                <Card className="h-full p-6 flex flex-col gap-6 transition-all border border-border bg-surface hover:border-primary/50">
                    <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-xl bg-surface-muted text-primary border border-border flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">
                            <IconComponent className="w-6 h-6" />
                        </div>
                        <Badge variant="muted" className="capitalize text-[10px]">
                            {module.difficulty}
                        </Badge>
                    </div>

                    <div className="flex-1 space-y-2">
                        <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                            {module.title}
                        </h2>
                        <p className="text-sm text-secondary leading-relaxed line-clamp-2">
                            {module.description}
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-xs font-medium text-secondary">
                            <Icons.BookOpen className="w-4 h-4" />
                            {module.lessonCount} LEZIONI
                        </div>
                        {isCompleted ? (
                            <Icons.CheckCircle2 className="w-5 h-5 text-primary" />
                        ) : (
                            <Icons.ArrowRight className="w-5 h-5 text-secondary group-hover:text-primary transition-colors group-hover:translate-x-1" />
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
        <Container size="lg" className="py-16 space-y-12">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl space-y-4"
                >
                    <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground">
                        Moduli di Sicurezza
                    </h1>
                    <p className="text-lg text-secondary leading-relaxed">
                        Scegli il tema che vuoi approfondire. Percorsi pensati per aiutarti a navigare il web in modo consapevole.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col w-full md:w-auto min-w-[300px]"
                >
                    <div className="relative group w-full">
                        <Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary transition-colors group-focus-within:text-primary" />
                        <input
                            type="text"
                            placeholder="Cerca un modulo..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-surface border border-border rounded-xl py-3 pl-12 pr-4 text-sm font-medium text-foreground placeholder:text-secondary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all shadow-sm"
                        />
                    </div>
                </motion.div>
            </header>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar"
            >
                {(['all', 'base', 'intermedia', 'avanzata'] as const).map((level) => (
                    <button
                        key={level}
                        onClick={() => setSelectedDifficulty(level)}
                        className={cn(
                            "px-5 py-2 rounded-full text-xs font-medium capitalize transition-all whitespace-nowrap border text-secondary hover:text-foreground",
                            selectedDifficulty === level
                                ? "bg-primary text-white border-primary hover:text-white"
                                : "bg-surface border-border hover:border-primary/50"
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {filteredModules.length > 0 ? (
                    filteredModules.map((module) => (
                        <ModuleCard
                            key={module.id}
                            module={module}
                            progress={progress[module.id]}
                        />
                    ))
                ) : (
                    <div className="col-span-full py-24 flex flex-col items-center justify-center text-center bg-surface-muted rounded-2xl border border-border">
                        <div className="w-16 h-16 bg-surface flex items-center justify-center rounded-2xl border border-border mb-6">
                            <Icons.SearchX className="w-8 h-8 text-secondary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Nessun modulo trovato</h3>
                        <p className="text-secondary max-w-sm mb-6">Non siamo riusciti a trovare moduli corrispondenti alla tua ricerca. Prova a usare termini diversi.</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedDifficulty('all'); }}
                            className="text-primary text-sm font-medium hover:underline"
                        >
                            Reset filtri
                        </button>
                    </div>
                )}
            </motion.div>
        </Container>
    )
}
