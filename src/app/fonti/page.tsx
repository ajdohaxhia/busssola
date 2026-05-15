'use client'

import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ALL_MODULES } from '@/data/modules/index'
import { ExternalLink, ShieldCheck, Globe, Building2, CheckCircle2, History, Search, RotateCcw } from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { OFFICIAL_SOURCES } from '@/data/officialSources'
import { CategoryID } from '@/types'
import { PageHeader } from '@/components/ui/PageHeader'
import { SearchBox } from '@/components/ui/SearchBox'

export default function FontiPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedType, setSelectedType] = useState<'all' | string>('all')

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
            <PageHeader 
                badge="Trasparenza e Affidabilità"
                icon={Globe}
                title="Archivio Fonti Ufficiali"
                description="Busssola non inventa procedure. Ogni guida è mappata su portali governativi, leggi o manuali di supporto tecnico ufficiali."
            />

            {/* Filters Dashboard */}
            <div className="bg-surface border border-border rounded-[2.5rem] p-6 lg:p-8 shadow-sm space-y-8 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60 flex items-center gap-2">
                            <Search className="w-3 h-3" /> Cerca ente o categoria
                        </label>
                        <SearchBox value={searchQuery} onChange={setSearchQuery} placeholder="Es: INPS, Agenzia Entrate, identità..." />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60 flex items-center gap-2">
                            <ShieldCheck className="w-3 h-3" /> Tipo di Affidabilità
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {['all', 'servizio ufficiale', 'ente istituzionale', 'supporto tecnico'].map(type => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedType(type)}
                                    className={cn(
                                        "px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border",
                                        selectedType === type
                                            ? "bg-foreground text-background border-foreground shadow-md"
                                            : "bg-surface text-secondary border-border hover:border-foreground/30"
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
                    <div className="col-span-full py-32 flex flex-col items-center justify-center text-center bg-surface border border-dashed border-border rounded-[3rem]">
                        <p className="text-secondary font-bold mb-4">Nessun ente corrisponde alla tua ricerca.</p>
                        <button onClick={() => {setSearchQuery(''); setSelectedType('all')}} className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:underline">
                            <RotateCcw className="w-4 h-4" /> Reset
                        </button>
                    </div>
                ) : (
                    filteredOrganizations.map((org) => (
                        <Card key={org.name} className="p-8 border border-border bg-surface hover:shadow-2xl transition-all flex flex-col justify-between rounded-[2.5rem] group">
                            <div className="space-y-8 text-left">
                                <div className="flex items-start justify-between">
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all group-hover:scale-110 shadow-inner",
                                        org.type === 'servizio ufficiale' || org.type === 'ente istituzionale' 
                                            ? "bg-indigo-50 border-indigo-100 text-indigo-600" 
                                            : "bg-emerald-50 border-emerald-100 text-emerald-600"
                                    )}>
                                        {org.type === 'servizio ufficiale' || org.type === 'ente istituzionale' ? <Building2 className="w-7 h-7" /> : <Globe className="w-7 h-7" />}
                                    </div>
                                    <div className="flex flex-col gap-1 items-end">
                                        <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest border-border/60">
                                            {typeLabels[org.type as string] || org.type}
                                        </Badge>
                                        <Badge variant="muted" className="text-[9px] font-black uppercase tracking-widest bg-surface-muted border-border/40">
                                            {org.lessonCount} Guide
                                        </Badge>
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-display font-black text-foreground tracking-tight group-hover:text-primary transition-colors leading-tight">{org.name}</h3>
                                    <div className="flex flex-wrap gap-1.5">
                                        {org.categories.map((cat, i) => (
                                            <span key={i} className="text-[10px] font-black text-secondary/40 uppercase tracking-widest">
                                                {cat.replace('-', ' ')}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4 pt-6 border-t border-border/40">
                                    <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em]">Esempi di guide collegate:</p>
                                    <ul className="m-0 p-0 list-none space-y-3">
                                        {org.relatedLessons.map((lesson) => (
                                            <li key={lesson.id}>
                                                <Link 
                                                    href={`/moduli/${lesson.moduleId}`}
                                                    className="text-sm font-bold text-secondary hover:text-primary transition-colors flex items-center gap-3 group/link"
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-border group-hover/link:bg-primary shrink-0 transition-colors" />
                                                    <span className="truncate">{lesson.title}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-10 flex items-center justify-between mt-auto">
                                <a 
                                    href={org.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-foreground text-background font-black px-5 py-2.5 rounded-xl text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95"
                                >
                                    Sito Ufficiale <ExternalLink className="w-3 h-3" />
                                </a>
                                <div className="flex items-center gap-2 text-[10px] font-black text-secondary/30 uppercase tracking-widest">
                                    <History className="w-3.5 h-3.5 opacity-60" /> {org.lastChecked}
                                </div>
                            </div>
                        </Card>
                    ))
                )}
            </div>

            {/* Quality Gate Section */}
            <section className="bg-foreground text-background border-2 border-white/5 rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-2xl mx-4">
                <div className="absolute top-0 right-0 p-24 opacity-[0.05] pointer-events-none">
                    <ShieldCheck size={500} />
                </div>
                
                <div className="relative z-10 max-w-4xl mx-auto space-y-16">
                    <div className="space-y-4 text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-primary/10 text-primary mb-6 shadow-2xl border-2 border-white/5">
                            <ShieldCheck size={48} strokeWidth={2.5} />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight leading-tight">Criteri di Affidabilità</h2>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium text-center">
                            Ogni singola informazione su Busssola viene sottoposta a un controllo incrociato con le fonti ufficiali.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {[
                            { title: "Badge Ufficiale", desc: "Assegnato solo a portali .gov.it, .it istituzionali o pagine di supporto verificate delle grandi piattaforme." },
                            { title: "Indipendenza Totale", desc: "Busssola non riceve finanziamenti da privati. Consigliamo software solo se sono standard di mercato o open-source." },
                            { title: "Monitoraggio Link", desc: "I link esterni vengono controllati periodicamente per evitare 'link rot' e garantire che tu finisca nel posto giusto." },
                            { title: "No Consulenza", desc: "Non diamo pareri legali. Riportiamo i passaggi burocratici così come sono descritti dagli enti che erogano il servizio." },
                        ].map((item, i) => (
                            <div key={i} className="space-y-4 bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm group hover:bg-white/10 transition-all shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <h4 className="font-display font-black text-white text-xl tracking-tight leading-none pt-1">{item.title}</h4>
                                </div>
                                <p className="text-white/50 text-base leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Container>
    )
}
