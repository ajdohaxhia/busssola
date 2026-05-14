'use client'

import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { siteStats } from '@/data/siteStats'
import { ALL_MODULES } from '@/data/modules/index'
import { ExternalLink, ShieldCheck, Globe, Building2, BookOpen, CheckCircle2, History } from 'lucide-react'
import Link from 'next/link'
import { useMemo } from 'react'

export default function FontiPage() {
    // Extract unique organizations from modules
    const organizations = useMemo(() => {
        const sources = ALL_MODULES.flatMap(m => m.lessons.flatMap(l => l.sources));
        const uniqueOrgs = Array.from(new Set(sources.map(s => s.organization)));

        return uniqueOrgs.map(orgName => {
            const orgSources = sources.filter(s => s.organization === orgName);
            const types = Array.from(new Set(orgSources.map(s => s.type)));
            
            // Find all lessons using this organization
            const relatedLessons = ALL_MODULES.flatMap(m => 
                m.lessons
                    .filter(l => l.sources.some(s => s.organization === orgName))
                    .map(l => ({ 
                        id: l.id, 
                        title: l.title, 
                        moduleId: m.id 
                    }))
            ).slice(0, 5); // Limit display to 5

            const categories = Array.from(new Set(ALL_MODULES.flatMap(m => m.lessons).filter(l => l.sources.some(s => s.organization === orgName)).map(l => l.category)));
            
            return {
                name: orgName,
                type: types[0], // Use first type found
                lessonCount: relatedLessons.length,
                relatedLessons,
                categories,
                url: orgSources[0].url,
                lastChecked: orgSources.map(s => s.lastCheckedAt).sort().reverse()[0]
            };
        }).sort((a, b) => b.lessonCount - a.lessonCount);
    }, []);

    const typeLabels: Record<string, string> = {
        official: 'Istituzionale',
        institutional: 'Enti Pubblici',
        platform: 'Piattaforma Ufficiale',
        nonprofit: 'Organizzazione No-profit',
        expert: 'Supporto Tecnico'
    };

    return (
        <Container size="lg" className="py-12 space-y-16">
            <header className="space-y-6 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                    <Globe className="w-3 h-3" /> Trasparenza e Affidabilità
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight leading-tight">
                    Da dove arrivano le informazioni
                </h1>
                <p className="text-xl text-secondary leading-relaxed font-medium">
                    Ogni guida su Busssola indica le fonti ufficiali consultate. Privilegiamo enti governativi, supporto tecnico delle piattaforme e organizzazioni civiche certificate per garantire l'accuratezza operativa.
                </p>
            </header>

            {/* Organizations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {organizations.map((org) => (
                    <Card key={org.name} className="p-8 border border-border bg-surface hover:shadow-xl transition-all flex flex-col justify-between rounded-[2.5rem]">
                        <div className="space-y-6">
                            <div className="flex items-start justify-between">
                                <div className={cn(
                                    "p-3 rounded-2xl border",
                                    org.type === 'official' || org.type === 'institutional' 
                                        ? "bg-indigo-50 border-indigo-100 text-indigo-600" 
                                        : "bg-emerald-50 border-emerald-100 text-emerald-600"
                                )}>
                                    {org.type === 'official' || org.type === 'institutional' ? <Building2 className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
                                </div>
                                <div className="flex flex-col gap-1 items-end">
                                    <Badge variant="outline" className="text-[9px] uppercase font-bold tracking-widest border-border/60">
                                        {typeLabels[org.type as string] || org.type}
                                    </Badge>
                                    <Badge variant="muted" className="text-[9px] uppercase font-black bg-surface-muted border-border/40">
                                        {org.lessonCount}+ Guide
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
                                <p className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em]">Guide Collegate:</p>
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
                                Fonte Ufficiale <ExternalLink className="w-3 h-3" />
                            </a>
                            <div className="flex items-center gap-1.5 text-[9px] font-bold text-secondary/60 uppercase">
                                <History className="w-3 h-3" /> {org.lastChecked}
                            </div>
                        </div>
                    </Card>
                ))}
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
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Quality Gate</h2>
                        </div>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium">
                            Tutte le <strong>{siteStats.publishedLessons} guide</strong> pubblicate su Busssola seguono un rigoroso protocollo di verifica editoriale.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                        {[
                            { title: "Verificabilità", desc: "Ogni informazione operativa deve essere riconducibile a un manuale di supporto o a una legge dello Stato." },
                            { title: "Indipendenza", desc: "Non accettiamo sponsorizzazioni. Non consigliamo software privati se esiste un'alternativa pubblica o standard." },
                            { title: "Aggiornamento", desc: "I link vengono monitorati e la data di revisione è indicata chiaramente su ogni singola scheda." },
                            { title: "Supervisione Umana", desc: "Nessun contenuto viene generato da intelligenza artificiale senza una revisione manuale esperta." },
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

                    <div className="pt-12 text-center">
                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-white/30">
                            Ultimo Aggiornamento Globale: {siteStats.lastUpdatedAt}
                        </p>
                    </div>
                </div>
            </section>
        </Container>
    )
}

import { cn } from '@/lib/utils'
