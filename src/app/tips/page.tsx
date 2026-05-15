'use client'

import { useState, useMemo, Suspense } from 'react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { LIFE_HACKS } from '@/data/life-hacks'
import { Search, Filter, ArrowRight, Zap, Info, RotateCcw } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { CategoryID } from '@/types'
import { PageHeader } from '@/components/ui/PageHeader'
import { SearchBox } from '@/components/ui/SearchBox'
import * as Icons from 'lucide-react'

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
            const matchesBadge = selectedBadge === 'all' || (hack.badges as string[]).includes(selectedBadge)
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
            <PageHeader 
                badge="Life Hacks Civici"
                icon={Zap}
                title="Cose utili da sapere"
                description="Consigli pratici e scorciatoie legali per risparmiare tempo, evitare errori e usare meglio i servizi pubblici e digitali."
            />

            <div className="p-6 bg-blue-50 border-2 border-blue-100 rounded-[2.5rem] flex gap-4 text-blue-800 font-medium italic shadow-inner text-left">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Info className="w-6 h-6" />
                </div>
                <p className="text-base leading-relaxed">Tutti i consigli sono legali e informativi. Busssola non insegna scorciatoie illegali, evasione, frodi o aggiramenti del sistema.</p>
            </div>

            {/* Filters Dashboard */}
            <div className="bg-surface border-2 border-border rounded-[3rem] p-8 md:p-10 shadow-sm space-y-10 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary/40 flex items-center gap-2">
                            <Search className="w-3 h-3" /> Cerca un tip
                        </label>
                        <SearchBox value={searchQuery} onChange={setSearchQuery} placeholder="Es: ANPR, password, banca..." />
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary/40 flex items-center gap-2">
                            <Filter className="w-3 h-3" /> Argomento
                        </label>
                        <select 
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value as CategoryID | 'all')}
                            className="w-full bg-background border-2 border-border rounded-2xl h-14 px-5 text-sm font-bold text-foreground focus:outline-none focus:border-primary shadow-sm appearance-none cursor-pointer"
                        >
                            {CATEGORIES.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary/40 flex items-center gap-2">
                            <Zap className="w-3 h-3" /> Tipo di beneficio
                        </label>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedBadge('all')}
                                className={cn(
                                    "px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border-2",
                                    selectedBadge === 'all'
                                        ? "bg-foreground text-background border-foreground shadow-lg"
                                        : "bg-background text-secondary border-border hover:border-foreground/30"
                                )}
                            >
                                Tutti
                            </button>
                            {BADGES.slice(0, 6).map(badge => (
                                <button
                                    key={badge}
                                    onClick={() => setSelectedBadge(badge)}
                                    className={cn(
                                        "px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border-2",
                                        selectedBadge === badge
                                            ? "bg-primary text-white border-primary shadow-lg"
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
            <div className="space-y-10">
                <div className="flex items-center justify-between border-b-2 border-border pb-6">
                    <div className="flex items-center gap-4 text-left">
                        <h2 className="text-xl font-display font-black text-foreground tracking-tight uppercase tracking-widest opacity-60">
                            {filteredHacks.length} Consigli trovati
                        </h2>
                    </div>
                    {(searchQuery || selectedCategory !== 'all' || selectedBadge !== 'all') && (
                        <button
                            onClick={handleReset}
                            className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary-hover flex items-center gap-2 transition-colors"
                        >
                            <RotateCcw className="w-4 h-4" /> Reset Filtri
                        </button>
                    )}
                </div>

                {filteredHacks.length === 0 ? (
                    <div className="py-32 flex flex-col items-center justify-center text-center bg-surface border-4 border-dashed border-border rounded-[4rem]">
                        <div className="w-20 h-20 bg-surface-muted flex items-center justify-center rounded-full mb-6">
                            <Icons.SearchX className="w-10 h-10 text-secondary/30" />
                        </div>
                        <h3 className="text-2xl font-display font-black text-foreground mb-2">Nessun trucco trovato</h3>
                        <p className="text-lg text-secondary max-w-sm mb-10 font-medium">Prova a cambiare i filtri o i termini di ricerca.</p>
                        <Button onClick={handleReset} variant="outline" size="lg" className="rounded-2xl font-black uppercase tracking-widest h-16 px-10">Mostra tutti i tips</Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredHacks.map((hack) => (
                            <Link href={`/tips/${hack.slug}`} key={hack.slug} className="group">
                                <Card className="p-8 h-full flex flex-col justify-between border-2 border-border bg-surface hover:shadow-2xl hover:border-primary/20 transition-all rounded-[2.5rem] relative overflow-hidden text-left">
                                    <div className="space-y-6 relative z-10">
                                        <div className="flex flex-wrap gap-2">
                                            {hack.badges.map(badge => (
                                                <Badge key={badge} variant="secondary" className="text-[9px] font-black uppercase tracking-widest bg-primary/5 text-primary border-primary/10">
                                                    {badge}
                                                </Badge>
                                            ))}
                                        </div>
                                        <h3 className="text-2xl font-display font-black text-foreground leading-tight group-hover:text-primary transition-colors tracking-tight">{hack.title}</h3>
                                        <p className="text-base text-secondary leading-relaxed line-clamp-3 font-medium opacity-80">
                                            {hack.summary}
                                        </p>
                                    </div>
                                    <div className="pt-8 flex items-center justify-between mt-auto relative z-10 border-t border-border/40">
                                        <div className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em]">
                                            {hack.category.replace('-', ' ')}
                                        </div>
                                        <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-primary">
                                            Leggi tip <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </div>
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
        <Suspense fallback={<div className="min-h-screen animate-pulse" />}>
            <TipsContent />
        </Suspense>
    )
}
