'use client'

import { useState, useMemo, Suspense } from 'react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { LIFE_HACKS } from '@/data/life-hacks'
import { Search, Filter, ArrowRight, Zap, Info, RotateCcw } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { CategoryID } from '@/types'

const CATEGORIES: { id: CategoryID | 'all', label: string }[] = [
    { id: 'all', label: 'Tutti i temi' },
    { id: 'documenti', label: 'Documenti' },
    { id: 'sicurezza', label: 'Sicurezza' },
    { id: 'soldi', label: 'Soldi e Banche' },
    { id: 'lavoro', label: 'Lavoro' },
    { id: 'casa', label: 'Casa' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'truffe', label: 'Truffe' },
    { id: 'scuola', label: 'Scuola' },
    { id: 'consumatori', label: 'Consumatori' },
    { id: 'casa-digitale', label: 'Casa Digitale' }
]

const BADGES = [
    'Risparmia tempo', 'Evita errore', 'Privacy', 'Soldi', 'Documenti', 'Sicurezza', 'Scuola', 'Casa', 'Lavoro', 'Urgente'
]

function TipsContent() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<CategoryID | 'all'>('all')
    const [selectedBadge, setSelectedBadge] = useState<string | 'all'>('all')

    const filteredHacks = useMemo(() => {
        return LIFE_HACKS.filter(hack => {
            const matchesSearch = hack.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 hack.summary.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = selectedCategory === 'all' || hack.category === selectedCategory
            const matchesBadge = selectedBadge === 'all' || hack.badges.includes(selectedBadge as typeof hack.badges[number])
            return matchesSearch && matchesCategory && matchesBadge
        })
    }, [searchQuery, selectedCategory, selectedBadge])

    const handleReset = () => {
        setSearchQuery('')
        setSelectedCategory('all')
        setSelectedBadge('all')
    }

    return (
        <Container size="lg" className="py-12 space-y-12 min-h-screen">
            <header className="space-y-6 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                    <Zap className="w-3 h-3" /> Scorciatoie Legali
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight leading-tight">
                    Life Hacks Civici
                </h1>
                <p className="text-xl text-secondary leading-relaxed font-medium">
                    Consigli pratici e scorciatoie legali per risparmiare tempo, evitare errori e usare meglio i servizi pubblici e digitali.
                </p>
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex gap-3 text-sm text-blue-800 font-medium italic">
                    <Info className="w-5 h-5 shrink-0" />
                    <p>Tutti i consigli sono legali e informativi. Busssola non insegna scorciatoie illegali, evasione, frodi o aggiramenti.</p>
                </div>
            </header>

            {/* Filters Dashboard */}
            <div className="bg-surface border border-border rounded-[2.5rem] p-6 lg:p-8 shadow-sm space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
                            <Search className="w-3 h-3" /> Cerca un tip
                        </label>
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                            <input 
                                type="text"
                                placeholder="Esempio: ANPR, password, banca..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-background border border-border rounded-xl h-12 pl-12 pr-4 text-sm font-semibold text-foreground focus:outline-none focus:border-primary transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
                            <Filter className="w-3 h-3" /> Argomento
                        </label>
                        <select 
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value as CategoryID | 'all')}
                            className="w-full bg-background border border-border rounded-xl h-12 px-4 text-sm font-semibold text-foreground focus:outline-none focus:border-primary appearance-none cursor-pointer"
                        >
                            {CATEGORIES.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
                            <Zap className="w-3 h-3" /> Tipo di beneficio
                        </label>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedBadge('all')}
                                className={cn(
                                    "px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border",
                                    selectedBadge === 'all'
                                        ? "bg-foreground text-background border-foreground"
                                        : "bg-background text-secondary border-border hover:border-foreground/30"
                                )}
                            >
                                Tutti
                            </button>
                            {BADGES.slice(0, 5).map(badge => (
                                <button
                                    key={badge}
                                    onClick={() => setSelectedBadge(badge)}
                                    className={cn(
                                        "px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border",
                                        selectedBadge === badge
                                            ? "bg-primary text-white border-primary"
                                            : "bg-background text-secondary border-border hover:border-foreground/30"
                                    )}
                                >
                                    {badge}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl font-display font-semibold tracking-tight text-foreground">
                            {filteredHacks.length} Consigli trovati
                        </h2>
                    </div>
                    {(searchQuery || selectedCategory !== 'all' || selectedBadge !== 'all') && (
                        <button
                            onClick={handleReset}
                            className="text-[10px] font-bold text-primary hover:text-primary/80 flex items-center gap-1.5 uppercase tracking-widest transition-colors"
                        >
                            <RotateCcw className="w-3 h-3" /> Resetta Filtri
                        </button>
                    )}
                </div>

                {filteredHacks.length === 0 ? (
                    <div className="py-24 flex flex-col items-center justify-center text-center bg-surface border border-dashed border-border rounded-[3rem]">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Nessun trucco trovato</h3>
                        <p className="text-secondary max-w-sm">Prova a cambiare i filtri o i termini di ricerca.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredHacks.map((hack) => (
                            <Link href={`/tips/${hack.slug}`} key={hack.slug} className="group">
                                <Card className="p-6 h-full flex flex-col justify-between border border-border bg-surface hover:shadow-xl hover:border-primary/20 transition-all rounded-[2rem]">
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {hack.badges.map(badge => (
                                                <Badge key={badge} variant="secondary" className="text-[9px] font-bold uppercase tracking-wider bg-primary/5 text-primary border-primary/10">
                                                    {badge}
                                                </Badge>
                                            ))}
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors tracking-tight">
                                            {hack.title}
                                        </h3>
                                        <p className="text-sm text-secondary leading-relaxed line-clamp-3">
                                            {hack.summary}
                                        </p>
                                    </div>
                                    <div className="pt-6 flex items-center justify-between mt-auto">
                                        <div className="text-[10px] font-black text-secondary/40 uppercase tracking-widest">
                                            {hack.category.replace('-', ' ')}
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </Container>
    )
}

export default function TipsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen" />}>
            <TipsContent />
        </Suspense>
    )
}
