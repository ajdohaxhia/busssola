'use client'

import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ReadingWidth } from '@/components/ui/ReadingWidth'
import { LifeHack } from '@/types'
import { OFFICIAL_SOURCES } from '@/data/officialSources'
import { 
    ChevronLeft, Zap, Clock, Target, CheckCircle2, 
    ExternalLink, Printer, 
    BookOpen, ShieldCheck, ArrowRight, Info
} from 'lucide-react'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { WarningBox, DontDoBox } from '@/components/ui/Boxes'

interface TipDetailClientProps {
    hack: LifeHack
}

export default function TipDetailClient({ hack }: TipDetailClientProps) {
    return (
        <div className="min-h-screen pb-24 bg-background selection:bg-primary/10 print:pb-0 print:bg-white">
            {/* Navigation Header */}
            <header className="sticky top-0 bg-background/80 backdrop-blur-xl border-b border-border z-40 h-16 flex items-center shadow-sm print:hidden">
                <Container size="full" className="flex items-center justify-between px-6">
                    <Link href="/tips" className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-foreground transition-all">
                        <ChevronLeft className="w-4 h-4" />
                        <span>Trucchi</span>
                    </Link>
                    <div className="text-sm font-black text-foreground truncate max-w-[200px] sm:max-w-md flex items-center gap-2 uppercase tracking-tight text-left">
                        <Zap className="w-4 h-4 text-primary" />
                        {hack.title}
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => window.print()} className="text-secondary h-10 w-10 rounded-xl">
                        <Printer className="w-4 h-4" />
                    </Button>
                </Container>
            </header>

            <div className="pt-12 space-y-16 print:pt-0 print:space-y-8">
                <ReadingWidth className="space-y-8 print:pt-0">
                    <Breadcrumbs 
                        items={[
                            { label: 'Life Hacks', href: '/tips' },
                            { label: hack.category, href: `/tips?cat=${hack.category}` },
                            { label: 'Tip', href: '#' }
                        ]}
                        className="print:hidden"
                    />

                    {/* Hero */}
                    <div className="space-y-6 text-center print:text-left print:space-y-2">
                        <div className="flex flex-wrap justify-center gap-2 print:hidden">
                            {hack.badges.map(badge => (
                                <Badge key={badge} variant="outline" className="bg-primary/5 text-primary border-primary/20 uppercase tracking-[0.2em] text-[10px] font-black">
                                    {badge}
                                </Badge>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-black text-foreground tracking-tight leading-[1.1] print:text-3xl text-center">
                            {hack.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary leading-relaxed font-medium print:text-base text-center">
                            {hack.benefit}
                        </p>
                    </div>

                    {/* Meta Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-y-2 border-border py-8 print:grid-cols-3 print:py-4">
                        <div className="flex flex-col items-center text-center space-y-1 print:items-start print:text-left">
                            <Clock className="w-5 h-5 text-primary print:hidden" />
                            <span className="text-[10px] font-black uppercase text-secondary/40 tracking-[0.2em]">Tempo</span>
                            <span className="text-base font-bold text-foreground">{hack.time}</span>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-1 print:items-start print:text-left">
                            <Target className="w-5 h-5 text-primary print:hidden" />
                            <span className="text-[10px] font-black uppercase text-secondary/40 tracking-[0.2em]">Difficoltà</span>
                            <span className="text-base font-bold text-foreground capitalize">{hack.difficulty}</span>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-1 col-span-2 md:col-span-1 print:col-span-1 print:items-start print:text-left">
                            <Zap className="w-5 h-5 text-primary print:hidden" />
                            <span className="text-[10px] font-black uppercase text-secondary/40 tracking-[0.2em]">Area</span>
                            <span className="text-base font-bold text-foreground capitalize">{hack.category.replace('-', ' ')}</span>
                        </div>
                    </div>

                    {/* Summary */}
                    <section className="bg-surface border-2 border-border p-8 md:p-10 rounded-[3rem] shadow-sm space-y-6 relative overflow-hidden print:border-none print:p-0 text-left">
                        <div className="absolute top-0 left-0 w-2 h-full bg-primary print:hidden" />
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Il trucco in breve</h3>
                        <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium italic print:text-base">
                            "{hack.summary}"
                        </p>
                        <div className="pt-6 border-t border-border/60">
                            <h4 className="text-[10px] font-black uppercase text-secondary/40 tracking-widest mb-2 flex items-center gap-2">
                                <Info size={14} /> Perché è utile
                            </h4>
                            <p className="text-base text-secondary leading-relaxed font-medium">{hack.whyUseful}</p>
                        </div>
                    </section>

                    {/* Steps Section */}
                    <section className="space-y-10 text-left">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200 print:hidden">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-display font-black text-foreground tracking-tight print:text-xl">Come procedere</h2>
                        </div>
                        
                        <div className="space-y-4">
                            {hack.steps.map((step, i) => (
                                <div key={i} className="flex gap-6 p-6 rounded-3xl bg-surface border-2 border-border hover:border-primary/20 transition-all print:border-none print:p-0">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg font-black print:bg-secondary print:w-6 print:h-6 print:text-xs">
                                        {i + 1}
                                    </div>
                                    <p className="text-lg text-foreground font-semibold leading-relaxed pt-1 print:text-base">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Meta Boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-1 text-left">
                        <section className="bg-surface border-2 border-border p-8 rounded-[2.5rem] space-y-6 print:p-0 print:border-none">
                            <h3 className="text-xl font-display font-black text-foreground flex items-center gap-3">
                                <ShieldCheck className="w-6 h-6 text-primary" /> Cosa serve
                            </h3>
                            <ul className="space-y-4 m-0 p-0 list-none text-left">
                                {hack.whatYouNeed.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-base text-secondary font-medium">
                                        <div className="w-2 h-2 rounded-full bg-primary/40 shrink-0 mt-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="bg-primary/[0.02] border-2 border-primary/10 p-8 rounded-[2.5rem] space-y-6 print:p-0 print:border-none">
                            <h3 className="text-xl font-display font-black text-foreground flex items-center gap-3">
                                <ExternalLink className="w-6 h-6 text-primary" /> Link Ufficiali
                            </h3>
                            <div className="grid gap-3">
                                {hack.officialLinks.map(id => {
                                    const source = OFFICIAL_SOURCES[id];
                                    if (!source) return null;
                                    return (
                                        <a 
                                            href={source.url} 
                                            key={id}
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="block p-5 rounded-[1.5rem] bg-white border border-primary/10 hover:border-primary transition-all group shadow-sm print:p-2 print:border-border text-left"
                                        >
                                            <div className="flex justify-between items-center gap-4">
                                                <div>
                                                    <p className="text-[9px] font-black uppercase text-primary tracking-[0.2em] mb-1">{source.ente}</p>
                                                    <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{source.name}</p>
                                                </div>
                                                <ExternalLink className="w-4 h-4 text-secondary/20 group-hover:text-primary transition-colors print:hidden" />
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                        </section>
                    </div>

                    {/* Alerts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-1 text-left">
                        {hack.commonErrors && hack.commonErrors.length > 0 && (
                            <WarningBox title="Errori comuni" className="h-full">
                                <ul className="space-y-3 m-0 p-0 list-none pt-2">
                                    {hack.commonErrors.map((item, i) => (
                                        <li key={i} className="text-sm leading-relaxed font-medium">{item}</li>
                                    ))}
                                </ul>
                            </WarningBox>
                        )}
                        {hack.limitations && hack.limitations.length > 0 && (
                            <DontDoBox title="Limiti e Attenzioni" className="h-full">
                                <ul className="space-y-3 m-0 p-0 list-none pt-2">
                                    {hack.limitations.map((item, i) => (
                                        <li key={i} className="text-sm leading-relaxed font-bold">{item}</li>
                                    ))}
                                </ul>
                            </DontDoBox>
                        )}
                    </div>

                    {/* Internal Links */}
                    {(hack.relatedGuides || hack.relatedChecklists) && (
                        <section className="bg-surface border-2 border-border p-10 rounded-[3rem] space-y-8 print:hidden text-left">
                            <h3 className="text-xl font-display font-black text-foreground uppercase tracking-widest text-secondary/40">Approfondimenti</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {hack.relatedGuides?.map(slug => (
                                    <Link href={`/moduli/${slug}`} key={slug} className="flex items-center justify-between p-6 rounded-[2rem] border-2 border-border hover:border-primary/40 hover:shadow-xl transition-all group bg-background">
                                        <div className="flex items-center gap-4 text-left">
                                            <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                <BookOpen className="w-5 h-5" />
                                            </div>
                                            <span className="text-sm font-black uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">Guida Completa</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-secondary/20 group-hover:text-primary transition-all group-hover:translate-x-2" />
                                    </Link>
                                ))}
                                {hack.relatedChecklists?.map(title => (
                                    <Link href="/checklist" key={title} className="flex items-center justify-between p-6 rounded-[2rem] border-2 border-border hover:border-primary/40 hover:shadow-xl transition-all group bg-background">
                                        <div className="flex items-center gap-4 text-left">
                                            <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <span className="text-sm font-black uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">{title}</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-secondary/20 group-hover:text-primary transition-all group-hover:translate-x-2" />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Disclaimer */}
                    <div className="bg-surface-muted/30 border border-border p-8 rounded-3xl text-center print:bg-transparent print:border-none print:p-0 print:text-left">
                      <p className="text-xs text-secondary/70 leading-relaxed max-w-2xl mx-auto italic print:text-[10px]">
                        <span className="font-bold text-secondary uppercase not-italic block mb-2">Disclaimer Civico</span>
                        Questi sono consigli pratici basati su procedure legali ufficiali al momento della revisione ({hack.lastReviewedAt}). Busssola non è un ente pubblico e non fornisce consulenza legale o professionale. Verifica sempre le informazioni sui canali istituzionali dello Stato.
                      </p>
                    </div>

                    {/* Footer Nav */}
                    <div className="pt-12 border-t-2 border-border flex justify-center print:hidden">
                         <Button asChild variant="outline" size="lg" className="rounded-2xl font-black uppercase tracking-widest h-16 px-10 shadow-sm hover:shadow-lg transition-all active:scale-95">
                            <Link href="/tips">Tutti i Life Hacks</Link>
                         </Button>
                    </div>
                </ReadingWidth>
            </div>
        </div>
    )
}
