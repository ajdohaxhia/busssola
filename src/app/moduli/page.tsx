'use client'

import { useState, useMemo, memo, useEffect, Suspense } from 'react'
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
import { useSearchParams } from 'next/navigation'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
}

const ModuleCard = memo(({ module, progress }: { module: ModuleMetadata, progress: unknown }) => {
    const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[module.icon ?? 'HelpCircle'] || Icons.HelpCircle
    const isCompleted = (progress as { completed?: boolean })?.completed
    
    let highlightedBadge = null;
    let badgeVariant: "default" | "destructive" | "secondary" | "outline" | "muted" = "default";
    let badgeClass = "";

    if (module.featuredType === 'start') {
        highlightedBadge = "Inizia da qui";
        badgeClass = "bg-primary/10 text-primary hover:bg-primary/20 border-0";
    } else if (module.featuredType === 'situational') {
        if (module.id.includes('genitori') || module.id.includes('famiglie') || module.id.includes('educatori') || module.id.includes('scuole') || module.id.includes('minori-legge')) {
            highlightedBadge = "Per genitori e scuole";
            badgeClass = "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-0";
        } else {
            highlightedBadge = "In base alla tua situazione";
            badgeClass = "bg-orange-100 text-orange-700 hover:bg-orange-200 border-0";
        }
    } else if (module.id.includes('emergenz') || module.id.includes('sos')) {
        highlightedBadge = "Se hai bisogno di aiuto subito";
        badgeVariant = "destructive";
        badgeClass = "border-0 shadow-sm";
    }

    return (
        <motion.div variants={itemVariants} className="col-span-1 h-full">
            <Link href={`/moduli/${module.id}`} className="block h-full group">
                <Card className={cn(
                    "h-full p-6 flex flex-col gap-6 transition-all border bg-surface hover:shadow-md",
                    module.featuredType === 'start' ? "border-primary/20 hover:border-primary/50" : "border-border hover:border-foreground/20"
                )}>
                    <div className="flex justify-between items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-surface-muted text-primary border border-border flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white shrink-0">
                            <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex flex-wrap gap-2 justify-end">
                            {highlightedBadge && (
                                <Badge variant={badgeVariant} className={badgeClass}>
                                    {highlightedBadge}
                                </Badge>
                            )}
                            <Badge variant="muted" className="capitalize text-[10px]">
                                {module.difficulty}
                            </Badge>
                        </div>
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
                        <div className="flex items-center gap-4 text-xs font-medium text-secondary">
                            <div className="flex items-center gap-1.5">
                                <Icons.BookOpen className="w-4 h-4" />
                                {module.lessonCount} LEZIONI
                            </div>
                            <div className="flex items-center gap-1.5 opacity-70">
                                <Icons.Clock className="w-4 h-4" />
                                {Math.ceil(module.lessonCount * 5)} MIN
                            </div>
                        </div>
                        {isCompleted ? (
                            <Icons.CheckCircle2 className="w-5 h-5 text-emerald-500" />
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

const THEMES = [
    { id: 'all', label: 'Tutti i temi' },
    { id: 'basi', label: 'Basi e Privacy', keys: ['privacy', 'password', 'dati', 'account', 'smartphone'] },
    { id: 'rischi', label: 'Rischi e Truffe', keys: ['truff', 'phishing', 'frodi', 'ecommerce', 'finanz'] },
    { id: 'relazioni', label: 'Relazioni Online', keys: ['grooming', 'stalking', 'bullismo', 'sexting'] },
    { id: 'benessere', label: 'Benessere', keys: ['addiction', 'salute', 'comunicazione', 'disinformazione'] },
    { id: 'emergenze', label: 'Emergenze', keys: ['emergenz', 'sicurezza domestica', 'sicurezza viaggio'] }
]

function ModulesContent() {
    const { modules: progress } = useGameStore() as { modules: Record<string, { completed?: boolean }> }
    const searchParams = useSearchParams()
    
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'base' | 'intermedia' | 'avanzata'>('all')
    const [selectedTheme, setSelectedTheme] = useState('all')

    useEffect(() => {
        const filterStr = searchParams.get('filter')
        if (filterStr && THEMES.some(t => t.id === filterStr)) {
            setSelectedTheme(filterStr)
        }
    }, [searchParams])

    const filteredModules = useMemo(() => {
        return MODULES_MAP.filter(module => {
            const matchesSearch = module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                module.description.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesDifficulty = selectedDifficulty === 'all' || module.difficulty.toLowerCase() === selectedDifficulty
            
            const matchesTheme = selectedTheme === 'all' || (() => {
                const themeData = THEMES.find(t => t.id === selectedTheme)
                if (!themeData?.keys) return true
                const textTarget = (module.title + " " + module.description + " " + module.id).toLowerCase()
                return themeData.keys.some(key => textTarget.includes(key))
            })()

            return matchesSearch && matchesDifficulty && matchesTheme
        })
    }, [searchQuery, selectedDifficulty, selectedTheme])

    const isFiltered = searchQuery !== '' || selectedDifficulty !== 'all' || selectedTheme !== 'all'

    const renderGrid = (modules: ModuleMetadata[]) => (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
            {modules.map((module) => (
                <ModuleCard
                    key={module.id}
                    module={module}
                    progress={progress[module.id]}
                />
            ))}
        </motion.div>
    );

    return (
        <Container size="lg" className="py-16 space-y-12 min-h-screen">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl space-y-4"
                >
                    <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground tracking-tight">
                        Catalogo dei moduli
                    </h1>
                    <p className="text-lg text-secondary leading-relaxed">
                        Esplora la libreria completa. Non sai da dove iniziare? Lasciati guidare dai percorsi consigliati per costruire una consapevolezza digitale solida.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col w-full md:w-auto min-w-[320px] relative z-20"
                >
                    <div className="relative group w-full">
                        <Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary transition-colors group-focus-within:text-primary" />
                        <input
                            type="text"
                            placeholder="Cerca un argomento (es. phishing)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-surface border border-border rounded-xl h-14 pl-12 pr-4 text-base font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-sm"
                        />
                    </div>
                </motion.div>
            </header>

            {/* Configurable Filters Pipeline */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 bg-surface-muted/50 border border-border rounded-[2rem] p-6 lg:p-8"
            >
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Tematica</h3>
                    <div className="flex flex-wrap items-center gap-2">
                        {THEMES.map((theme) => (
                            <button
                                key={theme.id}
                                onClick={() => setSelectedTheme(theme.id)}
                                className={cn(
                                    "px-4 py-2 rounded-xl text-sm font-medium transition-all border",
                                    selectedTheme === theme.id
                                        ? "bg-foreground text-background border-foreground shadow-sm"
                                        : "bg-surface text-secondary border-border hover:border-foreground/30 hover:text-foreground"
                                )}
                            >
                                {theme.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-border">
                     <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Esperienza</h3>
                     <div className="flex flex-wrap items-center gap-2">
                        {(['all', 'base', 'intermedia', 'avanzata'] as const).map((level) => (
                            <button
                                key={level}
                                onClick={() => setSelectedDifficulty(level)}
                                className={cn(
                                    "px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all border",
                                    selectedDifficulty === level
                                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                                        : "bg-surface text-secondary border-border hover:border-foreground/30 hover:text-foreground"
                                )}
                            >
                                {level === 'all' ? 'Tutte' : level}
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Results Grid */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-display font-semibold tracking-tight text-foreground">
                        {isFiltered ? `${filteredModules.length} ${filteredModules.length === 1 ? 'Modulo trovato' : 'Moduli trovati'}` : 'Esplora il catalogo'}
                    </h2>
                </div>

                {filteredModules.length === 0 ? (
                    <div className="col-span-full py-24 flex flex-col items-center justify-center text-center bg-surface border border-dashed border-border rounded-[2rem]">
                        <div className="w-16 h-16 bg-surface-muted flex items-center justify-center rounded-2xl border border-border mb-6">
                            <Icons.SearchX className="w-8 h-8 text-secondary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Nessun modulo trovato</h3>
                        <p className="text-secondary max-w-sm mb-6 leading-relaxed">I filtri attuali non corrispondono ad alcun percorso. Prova ad ampliare la ricerca.</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedDifficulty('all'); setSelectedTheme('all'); }}
                            className="text-primary font-medium hover:underline flex items-center gap-2"
                        >
                            <Icons.RotateCcw className="w-4 h-4" /> Resetta tutti i filtri
                        </button>
                    </div>
                ) : isFiltered ? (
                    renderGrid(filteredModules)
                ) : (
                    <div className="space-y-16">
                        <section className="space-y-6">
                            <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">I percorsi migliori per cominciare</h3>
                            {renderGrid(filteredModules.filter(m => m.featuredType === 'start').slice(0, 3))}
                        </section>
                        
                        <section className="space-y-6">
                            <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">Altri moduli utili</h3>
                            {renderGrid(filteredModules.filter(m => m.featuredType === 'curated').slice(0, 3))}
                        </section>

                        <section className="space-y-6">
                            <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">Tutti i percorsi</h3>
                            {renderGrid(filteredModules.filter(m => m.featuredType !== 'start' && m.featuredType !== 'curated'))}
                        </section>
                    </div>
                )}
            </div>
        </Container>
    )
}

export default function ModulesPage() {
    return (
        <Suspense fallback={<div className="min-h-screen" />}>
            <ModulesContent />
        </Suspense>
    )
}
