'use client'

import { useState, useMemo } from 'react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ALL_MODULES } from '@/data/modules/index'
import { 
    CheckSquare, ArrowRight, ShieldCheck, Smartphone, Lock, 
    Search, Copy, Printer, CheckCircle2, RotateCcw, Filter
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'
import { CategoryID } from '@/types'
import { PageHeader } from '@/components/ui/PageHeader'
import { SearchBox } from '@/components/ui/SearchBox'
import * as Icons from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbStructuredData } from '@/lib/seo'

const CATEGORIES: { id: CategoryID | 'all', label: string }[] = [
    { id: 'all', label: 'Tutte' },
    { id: 'emergenze', label: 'Emergenze' },
    { id: 'sicurezza', label: 'Sicurezza Account' },
    { id: 'soldi', label: 'Banca e Soldi' },
    { id: 'documenti', label: 'Documenti' },
    { id: 'lavoro', label: 'Lavoro' },
    { id: 'scuola', label: 'Scuola' },
    { id: 'famiglia', label: 'Famiglia' },
    { id: 'casa', label: 'Casa' },
    { id: 'bonus', label: 'Bonus / ISEE' }
]

export default function ChecklistPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<CategoryID | 'all'>('all')

    // Collect all checklists from all lessons
    const checklists = useMemo(() => {
        return ALL_MODULES.flatMap(m => 
            m.lessons
                .filter(l => l.status === 'published' && l.checklist && l.checklist.length > 0)
                .map(l => ({
                    id: l.id,
                    title: l.title,
                    items: l.checklist,
                    moduleId: m.id,
                    moduleTitle: m.title.replace(/Modulo \d+[b]?:\s*/i, ''),
                    category: l.category as CategoryID
                }))
        );
    }, []);

    const filteredChecklists = useMemo(() => {
        return checklists.filter(c => {
            const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 c.items.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()))
            const matchesCategory = selectedCategory === 'all' || 
                                   c.category === selectedCategory ||
                                   (selectedCategory === 'emergenze' && (c.category as string) === 'first-aid')
            return matchesSearch && matchesCategory
        })
    }, [checklists, searchQuery, selectedCategory])

    const handleCopy = (title: string, items: string[]) => {
        const text = `${title}\n\n${items.map(i => `[ ] ${i}`).join('\n')}\n\nFonte: Busssola.com`
        navigator.clipboard.writeText(text)
        toast.success('Checklist copiata negli appunti')
    }

    return (
        <Container size="lg" className="py-12 space-y-12">
            <JsonLd data={breadcrumbStructuredData([
                { name: 'Checklist', path: '/checklist' }
            ])} />
            <JsonLd data={{
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                'name': 'Checklist Operative Busssola',
                'description': 'Raccolta di checklist per procedure burocratiche e sicurezza digitale.',
                'itemListElement': filteredChecklists.map((c, i) => ({
                    '@type': 'ListItem',
                    'position': i + 1,
                    'name': c.title,
                    'url': `https://busssola.com/moduli/${c.moduleId}`
                }))
            } as any} />

            <PageHeader 
                badge="Strumenti Operativi"
                icon={CheckSquare}
                title="Checklist di Sicurezza"
                description="Protocolli rapidi da seguire passo dopo passo. Mobile-first, azionabili e pronti all'uso per gestire ogni situazione civile e digitale."
            />

            {/* Filters Dashboard */}
            <div className="bg-surface border border-border rounded-[2.5rem] p-6 lg:p-8 shadow-sm space-y-8 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60 flex items-center gap-2 text-left">
                            <Search className="w-3 h-3" /> Cerca checklist
                        </label>
                        <SearchBox value={searchQuery} onChange={setSearchQuery} placeholder="Es: SPID, Instagram, banca..." />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60 flex items-center gap-2 text-left">
                            <Filter className="w-3 h-3" /> Filtra per area
                        </label>
                        <div className="flex flex-wrap gap-2 justify-start">
                            {CATEGORIES.slice(0, 8).map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={cn(
                                        "px-4 py-2 rounded-xl text-xs font-bold transition-all border",
                                        selectedCategory === cat.id
                                            ? "bg-foreground text-background border-foreground shadow-md"
                                            : "bg-surface text-secondary border-border hover:border-foreground/30"
                                    )}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]">
                {filteredChecklists.length === 0 ? (
                    <div className="col-span-full py-32 flex flex-col items-center justify-center text-center bg-surface border border-dashed border-border rounded-[3rem]">
                        <div className="w-20 h-20 bg-surface-muted flex items-center justify-center rounded-3xl mb-6">
                            <Icons.SearchX className="w-10 h-10 text-secondary/30" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Nessuna checklist trovata</h3>
                        <p className="text-secondary max-w-sm mb-8">Prova a cambiare i filtri o i termini di ricerca.</p>
                        <Button onClick={() => {setSearchQuery(''); setSelectedCategory('all')}} variant="ghost" className="font-bold">
                            <RotateCcw className="w-4 h-4 mr-2" /> Reset filtri
                        </Button>
                    </div>
                ) : (
                    filteredChecklists.map((check) => (
                        <Card key={check.id} className={cn(
                            "p-8 border-2 bg-surface hover:shadow-2xl transition-all flex flex-col justify-between rounded-[3rem]",
                            check.category === 'emergenze' ? "border-sos/20 bg-sos/[0.01]" : "border-border"
                        )}>
                            <div className="space-y-8 text-left">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-primary text-left">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                            <CheckSquare className="w-5 h-5" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60">{check.moduleTitle}</span>
                                    </div>
                                    <Badge variant={check.category === 'emergenze' ? 'destructive' : 'secondary'} className="rounded-full px-3 py-1 font-bold text-[9px] uppercase tracking-widest">
                                        {check.category}
                                    </Badge>
                                </div>
                                
                                <h3 className="text-3xl font-display font-black text-foreground leading-tight tracking-tight text-left">{check.title}</h3>
                                
                                <ul className="space-y-5 m-0 p-0 list-none text-left">
                                    {check.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-5 group">
                                            <div className="mt-1 w-7 h-7 rounded-xl border-2 border-primary/20 flex items-center justify-center shrink-0 group-hover:border-primary transition-all bg-background shadow-inner">
                                                <div className="w-3 h-3 rounded-md bg-primary opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100" />
                                            </div>
                                            <span className="text-lg text-secondary font-medium leading-tight group-hover:text-foreground transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 mt-auto">
                                <div className="flex gap-3 w-full sm:w-auto text-left">
                                    <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        className="rounded-xl h-12 px-5 text-xs font-black uppercase tracking-widest text-secondary hover:text-primary transition-all bg-surface-muted flex-1 sm:flex-none"
                                        onClick={() => handleCopy(check.title, check.items)}
                                    >
                                        <Copy className="w-4 h-4 mr-2" /> Copia
                                    </Button>
                                    <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        className="rounded-xl h-12 px-5 text-xs font-black uppercase tracking-widest text-secondary hover:text-primary transition-all bg-surface-muted flex-1 sm:flex-none"
                                        onClick={() => window.print()}
                                    >
                                        <Printer className="w-4 h-4 mr-2" /> Stampa
                                    </Button>
                                </div>
                                <Link 
                                    href={`/moduli/${check.moduleId}`} 
                                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-primary-hover transition-colors group"
                                >
                                    Guida Completa <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </Card>
                    ))
                )}
            </div>

            {/* Bottom info */}
            <section className="bg-foreground text-background rounded-[3rem] p-10 md:p-16 space-y-10 relative overflow-hidden text-left mx-4">
                <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none">
                    <ShieldCheck size={400} />
                </div>
                <div className="relative z-10 max-w-3xl space-y-6 text-left">
                    <h2 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight text-left text-balance leading-tight">Perché usare queste checklist?</h2>
                    <p className="text-white/70 text-lg leading-relaxed font-medium text-left">
                        Nelle situazioni di stress o urgenza burocratica, la memoria è il primo ostacolo. Abbiamo trasformato le guide complesse in liste di controllo rigorose per aiutarti a non saltare passaggi critici e mantenere la calma.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
                        <div className="space-y-3 text-left">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Ottimizzate Mobile</h4>
                            <p className="text-white/50 text-xs leading-relaxed">Progettate per essere usate dal telefono mentre sei in coda o in emergenza.</p>
                        </div>
                        <div className="space-y-3 text-left">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                                <Lock className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Protocolli Sicuri</h4>
                            <p className="text-white/50 text-xs leading-relaxed">Basate su procedure ufficiali e verificate da esperti civici e tecnici.</p>
                        </div>
                        <div className="space-y-3 text-left">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Azioni Reali</h4>
                            <p className="text-white/50 text-xs leading-relaxed">Ogni punto è un'azione concreta che puoi spuntare subito.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}
