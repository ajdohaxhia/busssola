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
import { Button } from '@/components/ui/Button'
import { useSearchParams } from 'next/navigation'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
    }
}

const itemVariants: Variants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
}

const ModuleCard = memo(({ module, progress }: { module: ModuleMetadata, progress: unknown }) => {
    const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[module.icon ?? 'HelpCircle'] || Icons.HelpCircle
    const isCompleted = (progress as { completed?: boolean })?.completed
    
    return (
        <motion.div variants={itemVariants} className="col-span-1 h-full">
            <Link href={`/moduli/${module.id}`} className="block h-full group">
                <Card className={cn(
                    "h-full p-6 flex flex-col gap-6 transition-all border bg-surface hover:shadow-md",
                    module.featuredType === 'curated' ? "border-primary/20 hover:border-primary/40" : "border-border hover:border-foreground/10"
                )}>
                    <div className="flex justify-between items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-surface-muted text-secondary border border-border flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white shrink-0">
                            <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex flex-wrap gap-2 justify-end">
                            {module.category === 'emergenze' && (
                                <Badge variant="destructive" className="border-0 shadow-sm text-[10px] uppercase font-bold">
                                    SOS
                                </Badge>
                            )}
                            <Badge variant="muted" className="capitalize text-[10px] border-border/50">
                                {module.difficulty}
                            </Badge>
                        </div>
                    </div>

                    <div className="flex-1 space-y-2">
                        <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                            {module.title}
                        </h2>
                        {module.subtitle && (
                             <p className="text-xs font-medium text-primary/80 uppercase tracking-wider">{module.subtitle}</p>
                        )}
                        <p className="text-sm text-secondary leading-relaxed line-clamp-2">
                            {module.description}
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/60">
                        <div className="flex items-center gap-4 text-[10px] font-bold text-secondary/70 uppercase tracking-widest">
                            <div className="flex items-center gap-1.5">
                                <Icons.BookOpen className="w-3.5 h-3.5" />
                                {module.lessonCount} {module.lessonCount === 1 ? 'LEZIONE' : 'LEZIONI'}
                            </div>
                            <div className="flex items-center gap-1.5 opacity-70">
                                <Icons.Clock className="w-3.5 h-3.5" />
                                {Math.ceil(module.lessonCount * 5)} MIN
                            </div>
                        </div>
                        {isCompleted ? (
                            <Icons.CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        ) : (
                            <div className="flex items-center gap-1 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                VAI <Icons.ArrowRight className="w-4 h-4" />
                            </div>
                        )}
                    </div>
                </Card>
            </Link>
        </motion.div>
    )
})
ModuleCard.displayName = 'ModuleCard'

const CATEGORIES = [
    { id: 'all', label: 'Tutti i temi' },
    { id: 'documenti', label: 'Documenti' },
    { id: 'lavoro', label: 'Lavoro' },
    { id: 'casa', label: 'Casa e Residenza' },
    { id: 'soldi', label: 'Soldi e Truffe' },
    { id: 'sicurezza', label: 'Sicurezza Account' },
    { id: 'famiglia', label: 'Famiglia' },
    { id: 'scuola', label: 'Scuola' },
    { id: 'emergenze', label: 'SOS / Urgenze' }
]

const AUDIENCES = [
    { id: 'all', label: 'Tutti i target' },
    { id: 'cittadini', label: 'Cittadini' },
    { id: 'lavoratori', label: 'Lavoratori' },
    { id: 'famiglie', label: 'Famiglie' },
    { id: 'studenti', label: 'Studenti' },
    { id: 'minors', label: 'Minori' }
]

function ModulesContent() {
    const { modules: progress } = useGameStore() as { modules: Record<string, { completed?: boolean }> }
    const searchParams = useSearchParams()
    
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'base' | 'intermedia' | 'avanzata'>('all')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedAudience, setSelectedAudience] = useState('all')

    useEffect(() => {
        const catStr = searchParams.get('category') || searchParams.get('cat')
        if (catStr && CATEGORIES.some(c => c.id === catStr)) {
            setSelectedCategory(catStr)
        }
        const queryStr = searchParams.get('query') || searchParams.get('q')
        if (queryStr) {
            setSearchQuery(queryStr)
        }
    }, [searchParams])

    const filteredModules = useMemo(() => {
        return MODULES_MAP.filter(module => {
            const matchesSearch = module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                module.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                module.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            
            const matchesDifficulty = selectedDifficulty === 'all' || module.difficulty.toLowerCase() === selectedDifficulty
            const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory
            
            // Note: Currently MODULES_MAP doesn't have audience, but individual lessons do.
            // We'll filter based on category or tags for now, or assume all are for 'cittadini'
            const matchesAudience = selectedAudience === 'all' || 
                                   module.tags?.some(t => t.toLowerCase() === selectedAudience.toLowerCase()) ||
                                   (selectedAudience === 'famiglie' && module.category === 'famiglia') ||
                                   (selectedAudience === 'lavoratori' && module.category === 'lavoro')

            return matchesSearch && matchesDifficulty && matchesCategory && matchesAudience
        })
    }, [searchQuery, selectedDifficulty, selectedCategory, selectedAudience])

    const isFiltered = searchQuery !== '' || selectedDifficulty !== 'all' || selectedCategory !== 'all' || selectedAudience !== 'all'

    return (
        <Container size="lg" className="py-16 space-y-12 min-h-screen">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8">
                <div className="max-w-2xl space-y-4">
                    <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground tracking-tight">
                        Catalogo delle guide
                    </h1>
                    <p className="text-lg text-secondary leading-relaxed">
                        Esplora tutte le guide pratiche di Busssola. Usa i filtri per trovare il tema più adatto alle tue esigenze o cerca un argomento specifico.
                    </p>
                </div>

                <div className="flex flex-col w-full md:w-auto min-w-[320px] relative z-20">
                    <div className="relative group w-full">
                        <Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary transition-colors group-focus-within:text-primary" />
                        <input
                            type="text"
                            placeholder="Cerca un argomento (es. passaporto)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-surface border border-border rounded-xl h-14 pl-12 pr-4 text-base font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-sm"
                        />
                    </div>
                </div>
            </header>

            {/* Configurable Filters Pipeline */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-surface-muted/30 border border-border rounded-[2rem] p-6 lg:p-8">
                <div className="space-y-3">
                    <h3 className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Argomento</h3>
                    <div className="flex flex-wrap gap-2">
                        <select 
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full bg-surface border border-border rounded-xl h-12 px-4 text-sm font-medium text-foreground focus:outline-none focus:border-primary transition-all"
                        >
                            {CATEGORIES.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Per chi</h3>
                    <div className="flex flex-wrap gap-2">
                        <select 
                            value={selectedAudience}
                            onChange={(e) => setSelectedAudience(e.target.value)}
                            className="w-full bg-surface border border-border rounded-xl h-12 px-4 text-sm font-medium text-foreground focus:outline-none focus:border-primary transition-all"
                        >
                            {AUDIENCES.map(aud => (
                                <option key={aud.id} value={aud.id}>{aud.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="space-y-3">
                     <h3 className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Difficoltà</h3>
                     <div className="flex gap-2">
                        {(['all', 'base', 'intermedia', 'avanzata'] as const).map((level) => (
                            <button
                                key={level}
                                onClick={() => setSelectedDifficulty(level)}
                                className={cn(
                                    "flex-1 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border",
                                    selectedDifficulty === level
                                        ? "bg-foreground text-background border-foreground shadow-sm"
                                        : "bg-surface text-secondary border-border hover:border-foreground/30 hover:text-foreground"
                                )}
                            >
                                {level === 'all' ? 'Tutte' : level}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Results Grid */}
            <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-border pb-4">
                    <h2 className="text-xl font-display font-semibold tracking-tight text-foreground">
                        {isFiltered ? `${filteredModules.length} ${filteredModules.length === 1 ? 'Risultato' : 'Risultati'}` : 'Tutte le guide'}
                    </h2>
                    {isFiltered && (
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedDifficulty('all'); setSelectedCategory('all'); setSelectedAudience('all'); }}
                            className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5 uppercase tracking-wider"
                        >
                            <Icons.RotateCcw className="w-3.5 h-3.5" /> Resetta
                        </button>
                    )}
                </div>

                {filteredModules.length === 0 ? (
                    <div className="py-24 flex flex-col items-center justify-center text-center bg-surface border border-dashed border-border rounded-[2rem]">
                        <div className="w-16 h-16 bg-surface-muted flex items-center justify-center rounded-2xl border border-border mb-6">
                            <Icons.SearchX className="w-8 h-8 text-secondary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Nessuna guida trovata</h3>
                        <p className="text-secondary max-w-sm leading-relaxed">I filtri attuali non corrispondono ad alcun contenuto. Prova a semplificare la ricerca.</p>
                    </div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                    >
                        {filteredModules.map((module) => (
                            <ModuleCard
                                key={module.id}
                                module={module}
                                progress={progress[module.id]}
                            />
                        ))}
                    </motion.div>
                )}
            </div>
            
            <section className="bg-surface border border-border rounded-[2rem] p-8 md:p-12 mt-12">
                <div className="max-w-2xl space-y-4">
                    <h3 className="text-2xl font-display font-semibold text-foreground">Non trovi quello che cerchi?</h3>
                    <p className="text-secondary">
                        Busssola è in continua espansione. Se hai bisogno di una guida specifica che non è ancora presente, puoi suggerirla tramite il nostro repository GitHub.
                    </p>
                    <Button asChild variant="outline" className="mt-4 rounded-xl">
                        <Link href="/contact">Suggerisci una guida</Link>
                    </Button>
                </div>
            </section>
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
