'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
    Search,
    CheckCircle2,
    Clock,
    Coins,
    AlertTriangle,
    ExternalLink,
    ArrowRight,
    FileText,
} from 'lucide-react'
import { CIVIC_PROCEDURES } from '@/data/tools/proceduresData'

const QUICK_PROMPTS = [
    { label: 'Ho perso la carta d’identità', query: 'carta identita perso smarrimento' },
    { label: 'Recupero password o SPID bloccato', query: 'spid recupero password' },
    { label: 'Ho perso il lavoro (NASpI)', query: 'naspi disoccupazione licenziamento' },
    { label: 'Devo cambiare residenza', query: 'cambio residenza anpr' },
    { label: 'Devo dare le dimissioni online', query: 'dimissioni volontarie cliclavoro' },
    { label: 'Prenotare il passaporto', query: 'passaporto questura agenda' },
    { label: 'Ho cliccato su un SMS o link truffa', query: 'truffa phishing sms banca' },
]

export function TrovaProceduraClient() {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [selectedCategory, setSelectedCategory] = useState<string>('all')

    const filteredProcedures = useMemo(() => {
        return CIVIC_PROCEDURES.filter((proc) => {
            // Category filter
            if (selectedCategory !== 'all' && proc.category !== selectedCategory) {
                return false
            }

            // Search query filter
            if (searchQuery.trim()) {
                const words = searchQuery.toLowerCase().split(/\s+/).filter(Boolean)
                const textToSearch = [
                    proc.title,
                    proc.firstAction,
                    ...proc.keywords,
                    ...proc.commonScenarios,
                    ...proc.documentsNeeded,
                ]
                    .join(' ')
                    .toLowerCase()

                const matchesAnyWord = words.some((w) => textToSearch.includes(w))
                return matchesAnyWord
            }

            return true
        })
    }, [searchQuery, selectedCategory])

    return (
        <div className="space-y-8">
            {/* Search and Prompt Panel */}
            <div className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-5 shadow-sm">
                <div>
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                        Quale problema o pratica devi risolvere?
                    </h2>
                    <p className="text-xs md:text-sm text-secondary mt-1">
                        Cerca per parola chiave o seleziona una delle situazioni più frequenti.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" aria-hidden="true" />
                    <input
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Es: carta d'identità persa, dimissioni, naspi, residenza, passaporto..."
                        className="w-full pl-12 pr-4 py-3.5 text-sm md:text-base bg-background border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                        aria-label="Cerca procedura"
                    />
                </div>

                {/* Quick Prompts Pills */}
                <div className="space-y-2">
                    <span className="text-[11px] font-semibold text-muted uppercase tracking-wider block">
                        Situazioni frequenti con un clic:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs">
                        {QUICK_PROMPTS.map((p, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => setSearchQuery(p.query)}
                                className="px-3 py-1.5 rounded-lg border border-border bg-surface-muted hover:bg-surface text-secondary hover:text-foreground hover:border-primary/50 transition-all text-left"
                            >
                                {p.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Category Filter Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pt-2 text-xs border-t border-border/50">
                    <span className="text-muted shrink-0 text-[11px]">Categoria:</span>
                    {[
                        { id: 'all', label: 'Tutte' },
                        { id: 'documenti', label: 'Documenti e Identità' },
                        { id: 'lavoro', label: 'Lavoro e Disoccupazione' },
                        { id: 'casa', label: 'Casa e Residenza' },
                        { id: 'emergenza', label: 'Emergenze e Truffe' },
                    ].map((cat) => (
                        <button
                            key={cat.id}
                            type="button"
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap border transition-all ${
                                selectedCategory === cat.id
                                    ? 'bg-foreground text-background border-foreground font-semibold'
                                    : 'bg-surface hover:bg-surface-muted border-border text-secondary hover:text-foreground'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between text-xs text-muted px-1">
                <span>
                    Trovate <strong className="text-foreground">{filteredProcedures.length}</strong> procedure ufficiali
                </span>
                <span>Canali ufficiali .gov.it verificati</span>
            </div>

            {/* Procedure Results */}
            {filteredProcedures.length === 0 ? (
                <div className="p-8 text-center bg-surface border border-dashed border-border rounded-xl space-y-3">
                    <FileText className="w-10 h-10 text-muted mx-auto" />
                    <h3 className="font-semibold text-foreground">Nessuna procedura trovata per la ricerca</h3>
                    <p className="text-xs text-secondary max-w-md mx-auto">
                        Prova con parole diverse (es. &quot;SPID&quot;, &quot;residenza&quot;, &quot;passaporto&quot;) oppure esplora il catalogo generale delle guide civiche.
                    </p>
                    <button
                        type="button"
                        onClick={() => {
                            setSearchQuery('')
                            setSelectedCategory('all')
                        }}
                        className="px-4 py-2 text-xs font-semibold rounded-lg bg-surface border border-border text-foreground hover:bg-surface-muted"
                    >
                        Mostra tutte le procedure
                    </button>
                </div>
            ) : (
                <div className="grid gap-6">
                    {filteredProcedures.map((proc) => (
                        <article
                            key={proc.id}
                            id={proc.id}
                            className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-5 hover:border-primary/50 transition-all shadow-sm"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-3">
                                <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                                    {proc.title}
                                </h3>
                                <div className="flex items-center gap-2 text-xs">
                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-muted text-secondary border border-border">
                                        <Clock className="w-3.5 h-3.5 text-primary" />
                                        {proc.estimatedTime}
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-muted text-secondary border border-border">
                                        <Coins className="w-3.5 h-3.5 text-emerald-500" />
                                        {proc.cost}
                                    </span>
                                </div>
                            </div>

                            {/* First Action Box */}
                            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-xs md:text-sm text-foreground space-y-1">
                                <div className="flex items-center gap-2 font-bold text-primary">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span>Primo passo concreto da compiere subito:</span>
                                </div>
                                <p className="text-secondary leading-relaxed pl-6">{proc.firstAction}</p>
                            </div>

                            {/* Documents Needed Checklist */}
                            <div className="space-y-2 text-xs">
                                <strong className="text-foreground font-semibold block">
                                    Documenti da avere pronti:
                                </strong>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-secondary">
                                    {proc.documentsNeeded.map((doc, dIdx) => (
                                        <li key={dIdx} className="flex items-start gap-2 p-2 rounded-lg bg-surface-muted border border-border/40">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                                            <span className="leading-relaxed">{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Warning: What Never To Do */}
                            <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-950 dark:text-amber-100 flex items-start gap-2.5">
                                <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="font-semibold text-amber-900 dark:text-amber-200">
                                        Errore da evitare assolutamente:{' '}
                                    </strong>
                                    <span>{proc.whatNeverToDo}</span>
                                </div>
                            </div>

                            {/* Action Buttons & Alternatives */}
                            <div className="pt-3 border-t border-border/50 flex flex-wrap items-center justify-between gap-3 text-xs">
                                <div className="flex flex-wrap items-center gap-3">
                                    <a
                                        href={proc.officialPortalUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors shadow-sm"
                                    >
                                        Vai al portale {proc.officialPortalName}
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                    <Link
                                        href={proc.busssolaGuideUrl}
                                        className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                                    >
                                        Guida completa su Busssola
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>

                                {proc.alternativeProcedures.length > 0 && (
                                    <div className="flex items-center gap-2 text-muted">
                                        <span>Correlate:</span>
                                        {proc.alternativeProcedures.map((alt, aIdx) => (
                                            <Link
                                                key={aIdx}
                                                href={alt.url}
                                                className="text-secondary hover:text-foreground hover:underline"
                                            >
                                                {alt.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    )
}
