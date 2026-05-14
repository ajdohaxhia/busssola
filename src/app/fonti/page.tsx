'use client'

import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ALL_MODULES } from '@/data/modules/index'
import { ExternalLink, ShieldCheck, Globe, Building2, BookOpen, CheckCircle2, History, Search, RotateCcw } from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { OFFICIAL_SOURCES } from '@/data/officialSources'
import { CategoryID } from '@/types'

export default function FontiPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedType, setSelectedDifficulty] = useState<'all' | string>('all')

    // Extract unique organizations from modules and central registry
    const organizations = useMemo(() => {
        const sourcesFromLessons = ALL_MODULES.flatMap(m => m.lessons.flatMap(l => l.sources));
        const registrySources = Object.values(OFFICIAL_SOURCES);
        
        const allOrgNames = Array.from(new Set([
            ...sourcesFromLessons.map(s => s.organization),
            ...registrySources.map(s => s.ente)
        ]));

        return allOrgNames.map(orgName => {
            const lessonSources = sourcesFromLessons.filter(s => s.organization === orgName);
            const regSources = registrySources.filter(s => s.ente === orgName);
            
            const relatedLessons = ALL_MODULES.flatMap(m => 
                m.lessons
                    .filter(l => l.sources.some(s => s.organization === orgName) || l.officialLinksV2?.some(ol => OFFICIAL_SOURCES[ol.sourceId]?.ente === orgName))
                    .map(l => ({ 
                        id: l.id, 
                        title: l.title, 
                        moduleId: m.id 
                    }))
            );

            // Deduplicate lessons
            const uniqueLessons = Array.from(new Map(relatedLessons.map(l => [l.id, l])).values());

            const categories = Array.from(new Set([
                ...lessonSources.map(s => (s as { category?: CategoryID }).category).filter(Boolean) as CategoryID[],
                ...regSources.map(s => s.category)
            ]));

            const type = regSources[0]?.type || (lessonSources[0]?.type === 'official' ? 'servizio ufficiale' : 'ente istituzionale');
            const url = regSources[0]?.url || lessonSources[0]?.url;

            return {
                name: orgName,
                type: type,
                lessonCount: uniqueLessons.length,
                relatedLessons: uniqueLessons.slice(0, 5),
                categories,
                url: url,
                lastChecked: lessonSources.map(s => s.lastCheckedAt).sort().reverse()[0] || '2026-05-14'
            };
        }).filter(org => org.name)
          .sort((a, b) => b.lessonCount - a.lessonCount);
    }, []);

    const typeLabels: Record<string, string> = {
        'servizio ufficiale': 'Servizio Ufficiale',
        'assistenza ufficiale': 'Assistenza Istituzionale',
        'ente istituzionale': 'Ente dello Stato',
        'supporto tecnico': 'Supporto Tecnico'
    };

    const filteredOrganizations = useMemo(() => {
        return organizations.filter(org => {
            const matchesSearch = org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 org.categories.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesType = selectedType === 'all' || org.type === selectedType;
            return matchesSearch && matchesType;
        });
    }, [organizations, searchQuery, selectedType]);

    return (
        <Container size="lg" className="py-12 space-y-16">
            <header className="space-y-6 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                    <Globe className="w-3 h-3" /> Trasparenza e Affidabilità
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight leading-tight">
                    Archivio Fonti Ufficiali
                </h1>
                <p className="text-xl text-secondary leading-relaxed font-medium">
                    Busssola non inventa procedure. Ogni guida è mappata su portali governativi, leggi o manuali di supporto tecnico ufficiali. Qui trovi l'elenco completo degli enti e dei servizi che garantiscono l'accuratezza dei nostri contenuti.
                </p>
            </header>

            {/* Filters Dashboard */}
            <div className="bg-surface border border-border rounded-[2.5rem] p-6 lg:p-8 shadow-sm space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
                            <Search className="w-3 h-3" /> Cerca ente o categoria
                        </label>
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                            <input 
                                type="text"
                                placeholder="Esempio: INPS, Agenzia Entrate, identità..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-background border border-border rounded-xl h-12 pl-12 pr-4 text-sm font-semibold text-foreground focus:outline-none focus:border-primary transition-all"
                            />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
                            <ShieldCheck className="w-3 h-3" /> Tipo di Affidabilità
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {['all', 'servizio ufficiale', 'ente istituzionale', 'supporto tecnico'].map(type => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedDifficulty(type)}
                                    className={cn(
                                        "px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border",
                                        selectedType === type
                                            ? "bg-foreground text-background border-foreground"
                                            : "bg-background text-secondary border-border hover:border-foreground/30"
                                    )}
                                >
                                    {type === 'all' ? 'Tutti' : typeLabels[type] || type}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Organizations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOrganizations.length === 0 ? (
                    <div className="col-span-full py-24 flex flex-col items-center justify-center text-center bg-surface border border-dashed border-border rounded-[3rem]">
                        <p className="text-secondary mb-4">Nessun ente corrisponde alla tua ricerca.</p>
                        <button onClick={() => {setSearchQuery(''); setSelectedDifficulty('all')}} className="text-primary font-bold text-sm uppercase flex items-center gap-2 hover:underline">
                            <RotateCcw className="w-4 h-4" /> Reset
                        </button>
                    </div>
                ) : (
                    filteredOrganizations.map((org) => (
                        <Card key={org.name} className="p-8 border border-border bg-surface hover:shadow-xl transition-all flex flex-col justify-between rounded-[2.5rem]">
                            <div className="space-y-6">
                                <div className="flex items-start justify-between">
                                    <div className={cn(
                                        "p-3 rounded-2xl border",
                                        org.type === 'servizio ufficiale' || org.type === 'ente istituzionale' 
                                            ? "bg-indigo-50 border-indigo-100 text-indigo-600" 
                                            : "bg-emerald-50 border-emerald-100 text-emerald-600"
                                    )}>
                                        {org.type === 'servizio ufficiale' || org.type === 'ente istituzionale' ? <Building2 className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
                                    </div>
                                    <div className="flex flex-col gap-1 items-end">
                                        <Badge variant="outline" className="text-[9px] uppercase font-bold tracking-widest border-border/60">
                                            {typeLabels[org.type as string] || org.type}
                                        </Badge>
                                        <Badge variant="muted" className="text-[9px] uppercase font-black bg-surface-muted border-border/40">
                                            {org.lessonCount} Guide
                                        </Badge>
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-foreground tracking-tight">{org.name}</h3>
                                    <div className="flex flex-wrap gap-1">
                                        {org.categories.map((cat, i) => (
                                            <span key={i} className="text-[10px] font-bold text-secondary/60 uppercase tracking-tighter">
                                                {cat.replace('-', ' ')}{i < org.categories.length - 1 ? ' • ' : ''}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-border/40">
                                    <p className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em]">Esempi di guide collegate:</p>
                                    <ul className="m-0 p-0 list-none space-y-2">
                                        {org.relatedLessons.map((lesson) => (
                                            <li key={lesson.id}>
                                                <Link 
                                                    href={`/moduli/${lesson.moduleId}`}
                                                    className="text-xs font-bold text-secondary hover:text-primary transition-colors flex items-center gap-2 group"
                                                >
                                                    <BookOpen className="w-3 h-3 opacity-40 group-hover:opacity-100" />
                                                    <span className="truncate">{lesson.title}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-8 flex items-center justify-between mt-auto">
                                <a 
                                    href={org.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-foreground text-background font-bold px-4 py-2 rounded-xl text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-md"
                                >
                                    Sito Ufficiale <ExternalLink className="w-3 h-3" />
                                </a>
                                <div className="flex items-center gap-1.5 text-[9px] font-bold text-secondary/60 uppercase">
                                    <History className="w-3 h-3" /> {org.lastChecked}
                                </div>
                            </div>
                        </Card>
                    ))
                )}
            </div>

            {/* Quality Gate Section */}
            <section className="bg-foreground text-background border border-border rounded-[3.5rem] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none">
                    <ShieldCheck size={400} />
                </div>
                
                <div className="relative z-10 max-w-4xl mx-auto space-y-12">
                    <div className="space-y-4 text-center">
                        <div className="inline-flex items-center gap-3 text-primary mb-2">
                            <ShieldCheck className="w-10 h-10" />
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Criteri di Affidabilità</h2>
                        </div>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium">
                            Ogni singola informazione su Busssola viene sottoposta a un controllo incrociato con le fonti ufficiali.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                        {[
                            { title: "Badge Ufficiale", desc: "Assegnato solo a portali .gov.it, .it istituzionali o pagine di supporto verificate delle grandi piattaforme." },
                            { title: "Indipendenza Totale", desc: "Busssola non riceve finanziamenti da privati. Consigliamo software solo se sono standard di mercato o open-source." },
                            { title: "Monitoraggio Link", desc: "I link esterni vengono controllati periodicamente per evitare 'link rot' e garantire che tu finisca nel posto giusto." },
                            { title: "No Consulenza", desc: "Non diamo pareri legali. Riportiamo i passaggi burocratici così come sono descritti dagli enti che erogano il servizio." },
                        ].map((item, i) => (
                            <div key={i} className="space-y-3 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <h4 className="font-bold text-white text-lg tracking-tight">{item.title}</h4>
                                </div>
                                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Container>
    )
}
