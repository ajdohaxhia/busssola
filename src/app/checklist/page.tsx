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

    const handlePrint = () => {
        window.print()
    }

    return (
        <Container size="lg" className="py-12 space-y-12">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="space-y-4 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                        <CheckSquare className="w-3 h-3" /> Strumenti Operativi
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight leading-tight">
                        Checklist di Sicurezza
                    </h1>
                    <p className="text-xl text-secondary leading-relaxed">
                        Protocolli rapidi da seguire passo dopo passo. Mobile-first, azionabili e pronti all'uso per gestire ogni situazione civile e digitale.
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button onClick={handlePrint} variant="outline" className="rounded-xl font-bold h-12">
                        <Printer className="w-4 h-4 mr-2" /> Stampa Pagina
                    </Button>
                </div>
            </header>

            {/* Filters */}
            <div className="bg-surface border border-border rounded-[2rem] p-6 lg:p-8 shadow-sm space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
                            <Search className="w-3 h-3" /> Cerca nelle checklist
                        </label>
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                            <input 
                                type="text"
                                placeholder="Esempio: passaporto, instagram..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-background border border-border rounded-xl h-12 pl-12 pr-4 text-sm font-semibold text-foreground focus:outline-none focus:border-primary transition-all"
                            />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
                            <Filter className="w-3 h-3" /> Filtra per categoria
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {CATEGORIES.slice(0, 8).map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={cn(
                                        "px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border",
                                        selectedCategory === cat.id
                                            ? "bg-foreground text-background border-foreground"
                                            : "bg-background text-secondary border-border hover:border-foreground/30"
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
                    <div className="col-span-full py-24 flex flex-col items-center justify-center text-center bg-surface border border-dashed border-border rounded-[3rem]">
                        <div className="w-16 h-16 bg-surface-muted flex items-center justify-center rounded-2xl border border-border mb-6">
                            <Icons.SearchX className="w-8 h-8 text-secondary/40" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Nessuna checklist trovata</h3>
                        <p className="text-secondary max-w-sm mb-8">Prova a cambiare filtri o termini di ricerca.</p>
                        <Button onClick={() => {setSearchQuery(''); setSelectedCategory('all')}} variant="ghost" className="font-bold">
                            <RotateCcw className="w-4 h-4 mr-2" /> Reset filtri
                        </Button>
                    </div>
                ) : (
                    filteredChecklists.map((check) => (
                        <Card key={check.id} className={cn(
                            "p-8 border bg-surface hover:shadow-xl transition-all flex flex-col justify-between rounded-[2.5rem]",
                            check.category === 'emergenze' ? "border-sos/20" : "border-border"
                        )}>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-primary">
                                        <CheckSquare className="w-5 h-5" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{check.moduleTitle}</span>
                                    </div>
                                    <Badge variant={check.category === 'emergenze' ? 'destructive' : 'secondary'} className="text-[9px] font-bold uppercase tracking-wider">
                                        {check.category}
                                    </Badge>
                                </div>
                                
                                <h3 className="text-2xl font-display font-bold text-foreground leading-tight tracking-tight">{check.title}</h3>
                                
                                <ul className="space-y-4 m-0 p-0 list-none">
                                    {check.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 group">
                                            <div className="mt-1.5 w-5 h-5 rounded-lg border-2 border-primary/20 flex items-center justify-center shrink-0 group-hover:border-primary transition-colors bg-background">
                                                <div className="w-2 h-2 rounded-sm bg-primary opacity-0 group-hover:opacity-40 transition-opacity" />
                                            </div>
                                            <span className="text-secondary font-medium leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto border-t border-border/40">
                                <div className="flex gap-2 w-full sm:w-auto">
                                    <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        className="rounded-lg h-10 px-3 text-[10px] font-bold uppercase text-secondary hover:text-primary transition-colors flex-1"
                                        onClick={() => handleCopy(check.title, check.items)}
                                    >
                                        <Copy className="w-3.5 h-3.5 mr-2" /> Copia
                                    </Button>
                                    <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        className="rounded-lg h-10 px-3 text-[10px] font-bold uppercase text-secondary hover:text-primary transition-colors flex-1"
                                        onClick={() => window.print()}
                                    >
                                        <Printer className="w-3.5 h-3.5 mr-2" /> Stampa
                                    </Button>
                                </div>
                                <Link 
                                    href={`/moduli/${check.moduleId}`} 
                                    className="inline-flex items-center text-[11px] font-black text-primary hover:underline group uppercase tracking-widest"
                                >
                                    Guida Completa <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </Card>
                    ))
                )}
            </div>

            {/* Bottom info */}
            <section className="bg-foreground text-background rounded-[3rem] p-10 md:p-16 space-y-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none">
                    <ShieldCheck size={400} />
                </div>
                <div className="relative z-10 max-w-3xl space-y-6">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">Perché usare queste checklist?</h2>
                    <p className="text-white/70 text-lg leading-relaxed">
                        Nelle situazioni di stress o urgenza burocratica, la memoria è il primo ostacolo. Abbiamo trasformato le guide complesse in liste di controllo rigorose per aiutarti a non saltare passaggi critici e mantenere la calma.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Ottimizzate Mobile</h4>
                            <p className="text-white/50 text-xs leading-relaxed">Progettate per essere usate dal telefono mentre sei in coda o in emergenza.</p>
                        </div>
                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                                <Lock className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Protocolli Sicuri</h4>
                            <p className="text-white/50 text-xs leading-relaxed">Basate su procedure ufficiali e verificate da esperti civici e tecnici.</p>
                        </div>
                        <div className="space-y-3">
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

import * as Icons from 'lucide-react'
