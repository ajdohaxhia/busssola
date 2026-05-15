'use client'

import { useState, useMemo, memo, useEffect, Suspense } from 'react'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import { MODULES_MAP } from '@/data/modules-meta'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import { cn } from '@/lib/utils'
import { useGameStore } from '@/store/useGameStore'
import { ModuleMetadata, CategoryID } from '@/types'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useSearchParams, useRouter } from 'next/navigation'
import { PageHeader } from '@/components/ui/PageHeader'
import { SearchBox } from '@/components/ui/SearchBox'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.03 }
    }
}

const itemVariants: Variants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
}

const ModuleCard = memo(({ module, progress }: { module: ModuleMetadata, progress: { completed?: boolean } | undefined }) => {
    const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[module.icon ?? 'HelpCircle'] || Icons.HelpCircle
    const isCompleted = progress?.completed
    
    return (
        <motion.div variants={itemVariants} className="col-span-1 h-full">
            <Link href={`/moduli/${module.id}`} className="block h-full group">
                <Card className={cn(
                    "h-full p-8 flex flex-col gap-6 transition-all border-2 bg-surface hover:shadow-2xl hover:border-primary/30 rounded-[2.5rem]",
                    module.category === 'emergenze' ? "border-sos/20 bg-sos/[0.01]" : "border-border"
                )}>
                    <div className="flex justify-between items-start gap-4">
                        <div className={cn(
                            "w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all shrink-0 shadow-inner",
                            module.category === 'emergenze' 
                                ? "bg-sos text-white border-sos group-hover:rotate-3" 
                                : "bg-surface-muted text-secondary border-border group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                        )}>
                            <IconComponent className="w-7 h-7" strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-wrap gap-2 justify-end">
                            {module.category === 'emergenze' && (
                                <Badge variant="destructive" className="border-0 shadow-sm text-[10px] font-black uppercase tracking-widest px-3 py-1">
                                    SOS
                                </Badge>
                            )}
                            <Badge variant="muted" className="capitalize text-[10px] border-border/50 font-black uppercase tracking-widest px-3 py-1">
                                {module.difficulty}
                            </Badge>
                        </div>
                    </div>

                    <div className="flex-1 space-y-4 text-left">
                        <div className="space-y-1">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] opacity-60">
                                {module.category?.replace('-', ' ')}
                            </span>
                            <h2 className="text-2xl font-display font-black text-foreground group-hover:text-primary transition-colors leading-tight tracking-tight text-left">
                                {module.title}
                            </h2>
                        </div>
                        <p className="text-base text-secondary leading-relaxed font-medium line-clamp-2 text-left">
                            {module.description}
                        </p>

                        {(module.topProcedures && module.topProcedures.length > 0) && (
                            <div className="space-y-3 pt-2 text-left">
                                <span className="text-[10px] font-black uppercase text-secondary/30 tracking-[0.2em]">Procedure comuni:</span>
                                <div className="flex flex-wrap gap-2">
                                    {module.topProcedures.map((proc, i) => (
                                        <Badge key={i} variant="outline" className="text-[10px] font-bold border-border group-hover:border-primary/20 transition-colors bg-background/50">
                                            {proc}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-border/60">
                        <div className="flex items-center gap-4 text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em]">
                            <div className="flex items-center gap-1.5">
                                <Icons.BookOpen className="w-3.5 h-3.5" />
                                {module.lessonCount} {module.lessonCount === 1 ? 'GUIDA' : 'GUIDE'}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Icons.Clock className="w-3.5 h-3.5" />
                                {Math.ceil(module.lessonCount * 5)} MIN
                            </div>
                        </div>
                        {isCompleted ? (
                            <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                                <Icons.CheckCircle2 className="w-4 h-4" strokeWidth={3} /> COMPLETATO
                            </div>
                        ) : (
                            <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.2em] text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                                APRI <Icons.ArrowRight className="w-4 h-4" />
                            </div>
                        )}
                    </div>
                </Card>
            </Link>
        </motion.div>
    )
})
ModuleCard.displayName = 'ModuleCard'

const CATEGORIES: { id: CategoryID | 'all', label: string }[] = [
    { id: 'all', label: 'Tutti i temi' },
    { id: 'emergenze', label: 'SOS / Urgenze' },
    { id: 'documenti', label: 'Documenti' },
    { id: 'lavoro', label: 'Lavoro' },
    { id: 'casa', label: 'Casa' },
    { id: 'soldi', label: 'Soldi' },
    { id: 'bonus', label: 'Bonus' },
    { id: 'sanita', label: 'Sanità' },
    { id: 'famiglia', label: 'Famiglia' },
    { id: 'sicurezza', label: 'Sicurezza' },
    { id: 'truffe', label: 'Truffe' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'immigrazione', label: 'Immigrazione' },
    { id: 'consumatori', label: 'Consumatori' },
    { id: 'mobilita', label: 'Mobilità' },
    { id: 'universita', label: 'Università' },
    { id: 'anziani', label: 'Anziani' },
    { id: 'disabilita', label: 'Disabilità' },
    { id: 'casa-digitale', label: 'Casa Digitale' }
]

const SORT_OPTIONS = [
    { id: 'useful', label: 'Più utili' },
    { id: 'recent', label: 'Più recenti' },
    { id: 'az', label: 'Dalla A alla Z' },
    { id: 'sos', label: 'SOS prima' }
]

function ModulesContent() {
    const { modules: progress } = useGameStore() as { modules: Record<string, { completed?: boolean }> }
    const searchParams = useSearchParams()
    const router = useRouter()
    
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'base' | 'intermedia' | 'avanzata'>('all')
    const [selectedCategory, setSelectedCategory] = useState<CategoryID | 'all'>('all')
    const [sortBy, setSortBy] = useState('useful')

    useEffect(() => {
        const catStr = searchParams.get('category') || searchParams.get('cat')
        if (catStr && CATEGORIES.some(c => c.id === catStr)) {
            setSelectedCategory(catStr as CategoryID)
        }
        const queryStr = searchParams.get('query') || searchParams.get('q')
        if (queryStr) {
            setSearchQuery(queryStr)
        }
    }, [searchParams])

    const filteredAndSortedModules = useMemo(() => {
        let result = MODULES_MAP.filter(module => {
            const matchesSearch = module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                module.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                module.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            
            const matchesDifficulty = selectedDifficulty === 'all' || module.difficulty.toLowerCase() === selectedDifficulty
            const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory
            
            return matchesSearch && matchesDifficulty && matchesCategory
        })

        // Sort
        result = [...result].sort((a, b) => {
            if (sortBy === 'az') return a.title.localeCompare(b.title)
            if (sortBy === 'recent') return new Date(b.lastUpdated || 0).getTime() - new Date(a.lastUpdated || 0).getTime()
            if (sortBy === 'sos') {
                if (a.category === 'emergenze' && b.category !== 'emergenze') return -1
                if (a.category !== 'emergenze' && b.category === 'emergenze') return 1
                return 0
            }
            // 'useful' - default: SOS first, then by lesson count
            if (a.category === 'emergenze' && b.category !== 'emergenze') return -1
            if (a.category !== 'emergenze' && b.category === 'emergenze') return 1
            return b.lessonCount - a.lessonCount
        })

        return result
    }, [searchQuery, selectedDifficulty, selectedCategory, sortBy])

    const isFiltered = searchQuery !== '' || selectedDifficulty !== 'all' || selectedCategory !== 'all'

    const handleReset = () => {
        setSearchQuery('')
        setSelectedDifficulty('all')
        setSelectedCategory('all')
        setSortBy('useful')
        router.push('/moduli')
    }

    return (
        <Container size="lg" className="py-12 space-y-12 min-h-screen text-left">
            <PageHeader 
                badge="Catalogo Guide"
                icon={Icons.Library}
                title="Tutte le guide pratiche"
                description="Esplora l'hub delle risorse civiche. Trova la guida per il tuo problema usando i filtri o la ricerca."
            />

            <div className="flex flex-col lg:flex-row gap-12 items-start text-left">
                {/* Sidebar Filters - Desktop */}
                <aside className="hidden lg:block w-72 space-y-10 sticky top-32 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-secondary/40">Cerca</h3>
                        <SearchBox value={searchQuery} onChange={setSearchQuery} placeholder="Es: SPID, NASpI..." />
                    </div>

                    <div className="space-y-4 text-left">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-secondary/40">Argomento</h3>
                        <div className="grid gap-1">
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={cn(
                                        "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all text-left",
                                        selectedCategory === cat.id
                                            ? "bg-primary text-white shadow-xl shadow-primary/20"
                                            : "text-secondary hover:bg-surface-muted border border-transparent"
                                    )}
                                >
                                    {cat.label}
                                    {selectedCategory === cat.id && <Icons.Check className="w-4 h-4" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                <div className="flex-1 space-y-10 w-full text-left">
                    {/* Top Filters - Mobile & Sort */}
                    <div className="lg:hidden space-y-4 text-left">
                        <SearchBox value={searchQuery} onChange={setSearchQuery} placeholder="Cerca una guida..." />
                        <select 
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value as CategoryID | 'all')}
                            className="w-full bg-surface border-2 border-border rounded-2xl h-14 px-5 text-sm font-bold text-foreground focus:outline-none focus:border-primary shadow-sm"
                        >
                            {CATEGORIES.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-6 border-b-2 border-border pb-6 text-left">
                        <div className="flex items-center gap-4">
                            <h2 className="text-xl font-display font-black text-foreground tracking-tight uppercase tracking-widest opacity-60 text-left">
                                {filteredAndSortedModules.length} {filteredAndSortedModules.length === 1 ? 'Risultato' : 'Risultati'}
                            </h2>
                            {isFiltered && (
                                <button onClick={handleReset} className="text-xs font-black uppercase tracking-widest text-primary hover:text-primary-hover transition-colors">
                                    Resetta
                                </button>
                            )}
                        </div>

                        <div className="flex items-center gap-3 bg-surface-muted px-4 py-2 rounded-xl border border-border/60 text-left">
                            <span className="text-[10px] font-black text-secondary/40 uppercase tracking-widest">Ordina:</span>
                            <select 
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-transparent border-none text-xs font-black text-foreground focus:ring-0 cursor-pointer uppercase tracking-widest"
                            >
                                {SORT_OPTIONS.map(opt => (
                                    <option key={opt.id} value={opt.id}>{opt.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {filteredAndSortedModules.length === 0 ? (
                        <div className="py-32 flex flex-col items-center justify-center text-center bg-surface border-4 border-dashed border-border rounded-[4rem]">
                            <div className="w-20 h-20 bg-surface-muted flex items-center justify-center rounded-full mb-6">
                                <Icons.SearchX className="w-10 h-10 text-secondary/20" />
                            </div>
                            <h3 className="text-2xl font-display font-black text-foreground mb-2">Nessuna guida trovata</h3>
                            <p className="text-lg text-secondary max-w-sm leading-relaxed mb-10 font-medium text-center mx-auto">
                                Prova con parole più semplici: SPID, NASpI, carta, Instagram, residenza.
                            </p>
                            <Button onClick={handleReset} variant="outline" size="lg" className="rounded-2xl font-black uppercase tracking-widest h-16 px-10">
                                Mostra tutte le guide
                            </Button>
                        </div>
                    ) : (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            <AnimatePresence>
                                {filteredAndSortedModules.map((module) => (
                                    <ModuleCard
                                        key={module.id}
                                        module={module}
                                        progress={progress[module.id]}
                                    />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Help Block */}
            <section className="bg-foreground text-background border-2 border-white/5 rounded-[4rem] p-12 md:p-20 mt-20 relative overflow-hidden shadow-2xl mx-4 text-left">
                <div className="absolute top-0 right-0 p-24 opacity-[0.05] pointer-events-none">
                    <Icons.ShieldCheck size={500} />
                </div>
                <div className="max-w-2xl space-y-8 relative z-10 text-left">
                    <h3 className="text-4xl md:text-5xl font-display font-black tracking-tight text-white leading-tight text-left">
                        Hai bisogno di una <br /> guida specifica?
                    </h3>
                    <p className="text-xl text-white/60 leading-relaxed font-medium text-left">
                        Busssola è in continua espansione e i contenuti sono gestiti dalla comunità. Se hai bisogno di una guida che non è ancora presente, o vuoi aiutarci a scriverne una, visita il nostro repository.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-6 justify-start">
                        <Button asChild size="lg" className="rounded-2xl font-black uppercase tracking-widest h-16 px-10 bg-white text-foreground hover:bg-white/90">
                            <Link href="/contact">Suggerisci Tema</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-2xl font-black uppercase tracking-widest h-16 px-10 border-white/20 text-white hover:bg-white/10">
                            <Link href="https://github.com/ajdohaxhia/busssola">Contribuisci su GitHub</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default function ModulesPage() {
    return (
        <Suspense fallback={
            <Container size="lg" className="py-12 space-y-12 min-h-screen animate-pulse">
                <div className="h-32 bg-surface-muted rounded-[3rem]" />
                <div className="h-24 bg-surface-muted rounded-[3rem]" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map(i => <div key={i} className="h-64 bg-surface-muted rounded-[3rem]" />)}
                </div>
            </Container>
        }>
            <ModulesContent />
        </Suspense>
    )
}
