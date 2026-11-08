'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
    Calendar,
    Clock,
    AlertTriangle,
    CheckCircle2,
    Search,
    ExternalLink,
    FileText,
    ArrowRight,
    Building2,
    Users,
    Filter,
} from 'lucide-react'
import type { CivicDeadline } from '@/data/deadlines'

interface DeadlinesClientProps {
    initialDeadlines: CivicDeadline[]
    defaultYearFilter?: 'all' | '2026' | '2027'
}

const CATEGORY_NAMES: Record<string, string> = {
    all: 'Tutte le categorie',
    fisco: 'Fisco e Imposte',
    inps: 'INPS e Previdenza',
    casa: 'Casa e Utenze',
    scuola: 'Scuola e Giovani',
    famiglia: 'Famiglia e Bonus',
    lavoro: 'Lavoro',
}

function formatDateIT(dateStr: string): string {
    const [year, month, day] = dateStr.split('-').map(Number)
    if (!year || !month || !day) return dateStr
    const d = new Date(year, month - 1, day)
    return d.toLocaleDateString('it-IT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
}

export function DeadlinesClient({
    initialDeadlines,
    defaultYearFilter = 'all',
}: DeadlinesClientProps) {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<string>('all')
    const [yearFilter, setYearFilter] = useState<'all' | '2026' | '2027'>(defaultYearFilter)
    const [copiedId, setCopiedId] = useState<string | null>(null)

    const filteredDeadlines = useMemo(() => {
        return initialDeadlines.filter((item) => {
            // Filter by year
            if (yearFilter === '2026' && !item.date.startsWith('2026')) return false
            if (yearFilter === '2027' && !item.date.startsWith('2027')) return false

            // Filter by category
            if (selectedCategory !== 'all' && item.category !== selectedCategory) return false

            // Filter by search query
            if (searchQuery.trim()) {
                const q = searchQuery.toLowerCase()
                const matchesTitle = item.title.toLowerCase().includes(q)
                const matchesEntity = item.entity.toLowerCase().includes(q)
                const matchesSummary = item.summary.toLowerCase().includes(q)
                const matchesWho = item.whoIsAffected.toLowerCase().includes(q)
                return matchesTitle || matchesEntity || matchesSummary || matchesWho
            }

            return true
        })
    }, [initialDeadlines, yearFilter, selectedCategory, searchQuery])

    const copyReminder = (deadline: CivicDeadline) => {
        const text = `Promemoria Busssola: ${deadline.title} entro il ${formatDateIT(deadline.date)}. Ente: ${deadline.entity}. Dettagli su: https://busssola.com/scadenze/`
        navigator.clipboard.writeText(text).then(() => {
            setCopiedId(deadline.id)
            setTimeout(() => setCopiedId(null), 2500)
        })
    }

    return (
        <div className="space-y-8">
            {/* Filter and Search Bar */}
            <div className="bg-surface border border-border rounded-xl p-5 shadow-sm space-y-4">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    {/* Search Input */}
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" aria-hidden="true" />
                        <input
                            type="search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cerca per imposta, ente, ISEE, IMU..."
                            className="w-full pl-10 pr-4 py-2 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            aria-label="Cerca scadenza"
                        />
                    </div>

                    {/* Year Filter Buttons */}
                    <div className="flex items-center gap-1.5 p-1 bg-surface-muted rounded-lg border border-border/50 w-full md:w-auto">
                        <button
                            type="button"
                            onClick={() => setYearFilter('all')}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                                yearFilter === 'all'
                                    ? 'bg-primary text-primary-foreground shadow-sm'
                                    : 'text-secondary hover:text-foreground'
                            }`}
                        >
                            Tutte
                        </button>
                        <button
                            type="button"
                            onClick={() => setYearFilter('2026')}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                                yearFilter === '2026'
                                    ? 'bg-primary text-primary-foreground shadow-sm'
                                    : 'text-secondary hover:text-foreground'
                            }`}
                        >
                            Fine 2026
                        </button>
                        <button
                            type="button"
                            onClick={() => setYearFilter('2027')}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                                yearFilter === '2027'
                                    ? 'bg-primary text-primary-foreground shadow-sm'
                                    : 'text-secondary hover:text-foreground'
                            }`}
                        >
                            Anno 2027
                        </button>
                    </div>
                </div>

                {/* Category Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 text-xs">
                    <Filter className="w-3.5 h-3.5 text-muted shrink-0 ml-1" aria-hidden="true" />
                    {(['all', 'fisco', 'inps', 'casa', 'scuola', 'famiglia'] as const).map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap border transition-all ${
                                selectedCategory === cat
                                    ? 'bg-foreground text-background border-foreground font-semibold'
                                    : 'bg-surface hover:bg-surface-muted border-border text-secondary hover:text-foreground'
                            }`}
                        >
                            {CATEGORY_NAMES[cat] || cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results Counter */}
            <div className="flex items-center justify-between text-xs text-muted px-1">
                <p>
                    Trovate <strong className="text-foreground font-semibold">{filteredDeadlines.length}</strong> scadenze{' '}
                    {yearFilter !== 'all' ? `per il ${yearFilter}` : 'verificate'}
                </p>
                <p>Aggiornato con fonti ufficiali .gov.it</p>
            </div>

            {/* Deadlines List */}
            {filteredDeadlines.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-border rounded-xl bg-surface/50 p-6 space-y-3">
                    <Calendar className="w-10 h-10 text-muted mx-auto" />
                    <h3 className="font-display font-semibold text-lg text-foreground">Nessuna scadenza trovata</h3>
                    <p className="text-sm text-secondary max-w-md mx-auto">
                        Nessun adempimento corrisponde ai criteri impostati. Prova a modificare i filtri o la ricerca.
                    </p>
                    <button
                        type="button"
                        onClick={() => {
                            setSearchQuery('')
                            setSelectedCategory('all')
                            setYearFilter('all')
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-surface border border-border hover:bg-surface-muted text-foreground transition-all"
                    >
                        Reimposta tutti i filtri
                    </button>
                </div>
            ) : (
                <div className="grid gap-6">
                    {filteredDeadlines.map((item) => {
                        const is2027 = item.date.startsWith('2027')
                        return (
                            <article
                                key={item.id}
                                id={item.id}
                                className="group relative bg-surface border border-border rounded-xl p-6 hover:border-primary/60 transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-border/50 pb-4 mb-4">
                                    <div className="space-y-1.5">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/20">
                                                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                                                Entro il {formatDateIT(item.date)}
                                            </span>
                                            {is2027 ? (
                                                <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                                                    Calendario 2027
                                                </span>
                                            ) : (
                                                <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                                                    In arrivo 2026
                                                </span>
                                            )}
                                            <span className="inline-flex items-center gap-1 text-[11px] text-muted font-medium">
                                                <Building2 className="w-3 h-3" />
                                                {item.entity}
                                            </span>
                                        </div>
                                        <h2 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h2>
                                    </div>

                                    {/* Copy Reminder Button */}
                                    <button
                                        type="button"
                                        onClick={() => copyReminder(item)}
                                        className="self-start inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-surface-muted hover:bg-surface text-secondary hover:text-foreground transition-all shrink-0"
                                        title="Copia promemoria negli appunti"
                                    >
                                        {copiedId === item.id ? (
                                            <>
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copiato!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Clock className="w-3.5 h-3.5" />
                                                <span>Salva promemoria</span>
                                            </>
                                        )}
                                    </button>
                                </div>

                                <p className="text-sm text-secondary leading-relaxed mb-4">
                                    {item.summary}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 p-4 rounded-lg bg-surface-muted border border-border/40 text-xs">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-1.5 font-semibold text-foreground">
                                            <Users className="w-3.5 h-3.5 text-primary" />
                                            <span>Chi è interessato:</span>
                                        </div>
                                        <p className="text-secondary leading-normal">{item.whoIsAffected}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-1.5 font-semibold text-foreground">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                            <span>Cosa bisogna fare:</span>
                                        </div>
                                        <p className="text-secondary leading-normal">{item.whatToDo}</p>
                                    </div>
                                </div>

                                {/* Warning / Consequences Box */}
                                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs mb-4">
                                    <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="font-semibold text-amber-900 dark:text-amber-200">Cosa succede se salti la scadenza: </strong>
                                        <span className="text-amber-800 dark:text-amber-300/90">{item.whatHappensIfNot}</span>
                                    </div>
                                </div>

                                {/* Action and Source Links */}
                                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/40 text-xs">
                                    <div className="flex flex-wrap items-center gap-2">
                                        {item.guideLink && (
                                            <Link
                                                href={item.guideLink}
                                                className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                                            >
                                                <FileText className="w-3.5 h-3.5" />
                                                Leggi la guida pratica
                                                <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        )}
                                        {item.newsLink && (
                                            <Link
                                                href={item.newsLink}
                                                className="inline-flex items-center gap-1 text-secondary hover:text-foreground hover:underline ml-2"
                                            >
                                                Approfondimento novità
                                            </Link>
                                        )}
                                    </div>

                                    {item.sources[0] && (
                                        <a
                                            href={item.sources[0].url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-muted hover:text-foreground font-mono transition-colors"
                                            title={item.sources[0].title}
                                        >
                                            <span>Fonte: {item.sources[0].organization}</span>
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    )}
                                </div>
                            </article>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
