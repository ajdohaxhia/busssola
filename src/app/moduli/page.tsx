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

const ModuleCard = memo(({ module, progress }: { module: ModuleMetadata, progress: unknown }) => {
    const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[module.icon ?? 'HelpCircle'] || Icons.HelpCircle
    const isCompleted = (progress as { completed?: boolean })?.completed
    
    return (
        <motion.div variants={itemVariants} className="col-span-1 h-full">
            <Link href={`/moduli/${module.id}`} className="block h-full group">
                <Card className={cn(
                    "h-full p-6 flex flex-col gap-5 transition-all border bg-surface hover:shadow-lg hover:border-primary/30",
                    module.category === 'emergenze' ? "border-sos/20 bg-sos/[0.01]" : "border-border"
                )}>
                    <div className="flex justify-between items-start gap-4">
                        <div className={cn(
                            "w-12 h-12 rounded-xl border flex items-center justify-center transition-colors shrink-0",
                            module.category === 'emergenze' 
                                ? "bg-sos/10 text-sos border-sos/20 group-hover:bg-sos group-hover:text-white" 
                                : "bg-surface-muted text-secondary border-border group-hover:bg-primary group-hover:text-white"
                        )}>
                            <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex flex-wrap gap-2 justify-end">
                            {module.category === 'emergenze' && (
                                <Badge variant="destructive" className="border-0 shadow-sm text-[10px] uppercase font-bold tracking-wider">
                                    SOS
                                </Badge>
                            )}
                            <Badge variant="muted" className="capitalize text-[10px] border-border/50 font-bold">
                                {module.difficulty}
                            </Badge>
                        </div>
                    </div>

                    <div className="flex-1 space-y-2">
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.15em]">
                                {module.category?.replace('-', ' ')}
                            </span>
                            <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight tracking-tight">
                                {module.title}
                            </h2>
                        </div>
                        <p className="text-sm text-secondary leading-relaxed line-clamp-2">
                            {module.description}
                        </p>

                        {(module.topProcedures && module.topProcedures.length > 0) && (
                            <div className="space-y-2 pt-2">
                                <span className="text-[10px] font-black uppercase text-secondary/40 tracking-widest">Procedure comuni:</span>
                                <div className="flex flex-wrap gap-2">
                                    {module.topProcedures.map((proc, i) => (
                                        <Badge key={i} variant="outline" className="text-[9px] font-bold border-border group-hover:border-primary/20 transition-colors">
                                            {proc}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/60">
                        <div className="flex items-center gap-4 text-[10px] font-bold text-secondary/60 uppercase tracking-widest">
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
                            <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 uppercase">
                                <Icons.CheckCircle2 className="w-4 h-4" /> FATTO
                            </div>
                        ) : (
                            <div className="flex items-center gap-1 text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                                APRI <Icons.ArrowRight className="w-3.5 h-3.5" />
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

const AUDIENCES = [
    { id: 'all', label: 'Tutti' },
    { id: 'cittadini', label: 'Cittadini' },
    { id: 'lavoratori', label: 'Lavoratori' },
    { id: 'famiglie', label: 'Famiglie' },
    { id: 'studenti', label: 'Studenti' },
    { id: 'stranieri', label: 'Stranieri' },
    { id: 'anziani', label: 'Anziani' },
    { id: 'caregiver', label: 'Caregiver' }
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
    const [selectedAudience, setSelectedAudience] = useState('all')
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
            
            const matchesAudience = selectedAudience === 'all' || 
                                   module.tags?.some(t => t.toLowerCase() === selectedAudience.toLowerCase()) ||
                                   (selectedAudience === 'famiglie' && module.category === 'famiglia') ||
                                   (selectedAudience === 'lavoratori' && module.category === 'lavoro') ||
                                   (selectedAudience === 'anziani' && module.category === 'anziani')

            return matchesSearch && matchesDifficulty && matchesCategory && matchesAudience
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
    }, [searchQuery, selectedDifficulty, selectedCategory, selectedAudience, sortBy])

    const isFiltered = searchQuery !== '' || selectedDifficulty !== 'all' || selectedCategory !== 'all' || selectedAudience !== 'all'

    const handleReset = () => {
        setSearchQuery('')
        setSelectedDifficulty('all')
        setSelectedCategory('all')
        setSelectedAudience('all')
        setSortBy('useful')
        router.push('/moduli')
    }

    return (
        <Container size="lg" className="py-12 space-y-12 min-h-screen">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-2xl space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                        <Icons.Library className="w-3 h-3" /> Catalogo Completo
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground tracking-tight leading-tight">
                        Tutte le guide pratiche
                    </h1>
                    <p className="text-lg text-secondary leading-relaxed">
                        Esplora l'hub delle risorse civiche. Usa i filtri per trovare il tema più adatto alle tue esigenze o cerca un argomento specifico.
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
                            className="w-full bg-surface border border-border rounded-xl h-14 pl-12 pr-4 text-base font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all shadow-sm"
                        />
                    </div>
                </div>
            </header>

            {/* Filters Dashboard */}
            <div className="bg-surface border border-border rounded-[2.5rem] p-6 lg:p-8 shadow-sm space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
                            <Icons.Tag className="w-3 h-3" /> Argomento
                        </label>
                        <select 
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value as CategoryID | 'all')}
                            className="w-full bg-background border border-border rounded-xl h-12 px-4 text-sm font-semibold text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/5 transition-all appearance-none cursor-pointer"
                        >
                            {CATEGORIES.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
                            <Icons.Users className="w-3 h-3" /> Per chi
                        </label>
                        <select 
                            value={selectedAudience}
                            onChange={(e) => setSelectedAudience(e.target.value)}
                            className="w-full bg-background border border-border rounded-xl h-12 px-4 text-sm font-semibold text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/5 transition-all appearance-none cursor-pointer"
                        >
                            {AUDIENCES.map(aud => (
                                <option key={aud.id} value={aud.id}>{aud.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-3">
                         <label className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
                            <Icons.BarChart3 className="w-3 h-3" /> Difficoltà
                         </label>
                         <div className="flex gap-1.5 p-1 bg-background border border-border rounded-xl h-12">
                            {(['all', 'base', 'intermedia', 'avanzata'] as const).map((level) => (
                                <button
                                    key={level}
                                    onClick={() => setSelectedDifficulty(level)}
                                    className={cn(
                                        "flex-1 rounded-lg text-[10px] font-bold uppercase transition-all",
                                        selectedDifficulty === level
                                            ? "bg-foreground text-background shadow-sm"
                                            : "text-secondary hover:bg-surface-muted"
                                    )}
                                >
                                    {level === 'all' ? 'Tutte' : level}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
                            <Icons.SortAsc className="w-3 h-3" /> Ordina per
                        </label>
                        <select 
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-full bg-background border border-border rounded-xl h-12 px-4 text-sm font-semibold text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/5 transition-all appearance-none cursor-pointer"
                        >
                            {SORT_OPTIONS.map(opt => (
                                <option key={opt.id} value={opt.id}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Results Grid */}
            <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl font-display font-semibold tracking-tight text-foreground">
                            {isFiltered ? 'Risultati della ricerca' : 'Tutte le guide'}
                        </h2>
                        <Badge variant="muted" className="rounded-full bg-surface-muted border-border font-bold">
                            {filteredAndSortedModules.length}
                        </Badge>
                    </div>
                    {isFiltered && (
                        <button
                            onClick={handleReset}
                            className="text-[10px] font-bold text-primary hover:text-primary/80 flex items-center gap-1.5 uppercase tracking-widest transition-colors"
                        >
                            <Icons.RotateCcw className="w-3 h-3" /> Resetta Filtri
                        </button>
                    )}
                </div>

                {filteredAndSortedModules.length === 0 ? (
                    <div className="py-32 flex flex-col items-center justify-center text-center bg-surface border border-dashed border-border rounded-[3rem]">
                        <div className="w-20 h-20 bg-surface-muted flex items-center justify-center rounded-3xl border border-border mb-6">
                            <Icons.SearchX className="w-10 h-10 text-secondary/40" />
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground mb-2 tracking-tight">Nessuna guida trovata</h3>
                        <p className="text-secondary max-w-sm leading-relaxed mb-8">
                            I filtri attuali non corrispondono ad alcun contenuto. Prova a semplificare la ricerca o a resettare i filtri.
                        </p>
                        <Button onClick={handleReset} variant="outline" className="rounded-xl font-bold">
                            Mostra tutte le guide
                        </Button>
                    </div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
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
            
            <section className="bg-foreground text-background border border-border rounded-[3rem] p-10 md:p-16 mt-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none">
                    <Icons.ShieldCheck size={400} />
                </div>
                <div className="max-w-2xl space-y-6 relative z-10">
                    <h3 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-white">
                        Hai bisogno di una guida specifica?
                    </h3>
                    <p className="text-lg text-white/70 leading-relaxed">
                        Busssola è in continua espansione e i contenuti sono gestiti dalla comunità. Se hai bisogno di una guida che non è ancora presente, o vuoi aiutarci a scriverne una, visita il nostro repository.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button asChild className="rounded-xl font-bold bg-white text-foreground hover:bg-white/90">
                            <Link href="/contact">Suggerisci Tema</Link>
                        </Button>
                        <Button asChild variant="outline" className="rounded-xl font-bold border-white/20 text-white hover:bg-white/10">
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
                <div className="h-32 bg-surface-muted rounded-[2.5rem]" />
                <div className="h-24 bg-surface-muted rounded-[2.5rem]" />
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-64 bg-surface-muted rounded-[2rem]" />)}
                </div>
            </Container>
        }>
            <ModulesContent />
        </Suspense>
    )
}
