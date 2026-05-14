import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ReadingWidth } from '@/components/ui/ReadingWidth'
import { LIFE_HACKS } from '@/data/life-hacks'
import { OFFICIAL_SOURCES } from '@/data/officialSources'
import { 
    ChevronLeft, Zap, Clock, Target, CheckCircle2, 
    AlertTriangle, ExternalLink, Printer, 
    BookOpen, ShieldCheck, HelpCircle
} from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return LIFE_HACKS.map((hack) => ({
        slug: hack.slug,
    }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const hack = LIFE_HACKS.find(h => h.slug === slug)
    if (!hack) return {}

    return {
        title: `${hack.title} | Life Hacks Civici | Busssola`,
        description: hack.summary,
    }
}

export default async function TipDetailPage({ params }: PageProps) {
    const { slug } = await params
    const hack = LIFE_HACKS.find(h => h.slug === slug)

    if (!hack) notFound()

    return (
        <div className="min-h-screen pb-24 bg-background">
            {/* Navigation Header */}
            <header className="sticky top-0 bg-background/80 backdrop-blur-xl border-b border-border z-40 h-16 flex items-center shadow-sm print:hidden">
                <Container size="full" className="flex items-center justify-between">
                    <Link href="/tips" className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-foreground transition-all">
                        <ChevronLeft className="w-4 h-4" />
                        <span>Tutti i Tips</span>
                    </Link>
                    <div className="flex gap-2">
                         <Button variant="ghost" size="icon" className="text-secondary" title="Stampa">
                            <Printer className="w-4 h-4" />
                        </Button>
                    </div>
                </Container>
            </header>

            <div className="pt-12 space-y-16">
                <ReadingWidth className="space-y-8">
                    {/* Hero */}
                    <div className="space-y-6 text-center">
                        <div className="flex flex-wrap justify-center gap-2">
                            {hack.badges.map(badge => (
                                <Badge key={badge} variant="outline" className="bg-primary/5 text-primary border-primary/20 uppercase tracking-widest text-[10px] font-bold">
                                    {badge}
                                </Badge>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight leading-tight">
                            {hack.title}
                        </h1>
                        <p className="text-xl text-secondary leading-relaxed font-medium">
                            {hack.benefit}
                        </p>
                    </div>

                    {/* Meta Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-y border-border py-6">
                        <div className="flex flex-col items-center text-center space-y-1">
                            <Clock className="w-4 h-4 text-secondary" />
                            <span className="text-[10px] font-black uppercase text-secondary/40 tracking-widest">Tempo</span>
                            <span className="text-sm font-bold text-foreground">{hack.time}</span>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-1">
                            <Target className="w-4 h-4 text-secondary" />
                            <span className="text-[10px] font-black uppercase text-secondary/40 tracking-widest">Difficoltà</span>
                            <span className="text-sm font-bold text-foreground capitalize">{hack.difficulty}</span>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-1 col-span-2 md:col-span-1">
                            <Zap className="w-4 h-4 text-secondary" />
                            <span className="text-[10px] font-black uppercase text-secondary/40 tracking-widest">Categoria</span>
                            <span className="text-sm font-bold text-foreground capitalize">{hack.category.replace('-', ' ')}</span>
                        </div>
                    </div>

                    {/* Summary */}
                    <section className="bg-surface border border-border p-8 rounded-[2rem] shadow-sm space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">In breve</h3>
                        <p className="text-lg text-foreground leading-relaxed font-medium italic">
                            "{hack.summary}"
                        </p>
                        <div className="pt-4 border-t border-border/60">
                            <h4 className="text-[10px] font-bold uppercase text-secondary mb-2">Perché è utile</h4>
                            <p className="text-sm text-secondary leading-relaxed">{hack.whyUseful}</p>
                        </div>
                    </section>

                    {/* Steps */}
                    <section className="space-y-8">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                            <h3 className="text-2xl font-display font-bold text-foreground">Come fare, passo passo</h3>
                        </div>
                        <ul className="space-y-4 m-0 p-0 list-none">
                            {hack.steps.map((step, i) => (
                                <li key={i} className="flex gap-4 p-6 rounded-3xl bg-surface border border-border group hover:border-primary/20 transition-all">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mt-0.5">
                                        {i + 1}
                                    </span>
                                    <span className="text-foreground font-semibold leading-relaxed">{step}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Requirements & Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <section className="bg-surface border border-border p-8 rounded-[2rem] space-y-6">
                            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                                <ShieldCheck className="w-6 h-6 text-primary" /> Cosa ti serve
                            </h3>
                            <ul className="space-y-3 m-0 p-0 list-none">
                                {hack.whatYouNeed.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-secondary font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="bg-primary/5 border border-primary/10 p-8 rounded-[2rem] space-y-6">
                            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                                <ExternalLink className="w-6 h-6 text-primary" /> Link Ufficiali
                            </h3>
                            <div className="space-y-3">
                                {hack.officialLinks.map(id => {
                                    const source = OFFICIAL_SOURCES[id];
                                    if (!source) return null;
                                    return (
                                        <a 
                                            href={source.url} 
                                            key={id}
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="block p-4 rounded-2xl bg-white border border-primary/20 hover:border-primary transition-all group"
                                        >
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <p className="text-[9px] font-black uppercase text-primary tracking-widest">{source.ente}</p>
                                                    <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{source.name}</p>
                                                </div>
                                                <ExternalLink className="w-4 h-4 text-secondary/40 group-hover:text-primary transition-colors" />
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                        </section>
                    </div>

                    {/* Warnings & Errors */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <section className="bg-amber-50/50 border border-amber-100 p-8 rounded-[2rem] space-y-6">
                            <h3 className="text-xl font-bold text-amber-900 flex items-center gap-3">
                                <AlertTriangle className="w-6 h-6 text-amber-500" /> Errori da evitare
                            </h3>
                            <ul className="space-y-3 m-0 p-0 list-none">
                                {hack.commonErrors.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-amber-900/80 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="bg-red-50/50 border border-red-100 p-8 rounded-[2rem] space-y-6">
                            <h3 className="text-xl font-bold text-red-900 flex items-center gap-3">
                                <HelpCircle className="w-6 h-6 text-red-500" /> Limiti e Attenzioni
                            </h3>
                            <ul className="space-y-3 m-0 p-0 list-none">
                                {hack.limitations.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-red-900/80 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Internal Links */}
                    {(hack.relatedGuides || hack.relatedChecklists) && (
                        <section className="bg-surface border border-border p-8 rounded-[2rem] space-y-6">
                            <h3 className="text-xl font-bold text-foreground">Approfondimenti su Busssola</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {hack.relatedGuides?.map(slug => (
                                    <Link href={`/moduli/${slug}`} key={slug} className="flex items-center gap-3 p-4 rounded-2xl border border-border hover:border-primary/40 transition-all group">
                                        <BookOpen className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Guida Completa</span>
                                    </Link>
                                ))}
                                {hack.relatedChecklists?.map(title => (
                                    <Link href="/checklist" key={title} className="flex items-center gap-3 p-4 rounded-2xl border border-border hover:border-primary/40 transition-all group">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{title}</span>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Disclaimer */}
                    <div className="bg-surface-muted/30 border border-border p-8 rounded-3xl text-center">
                      <p className="text-xs text-secondary/70 leading-relaxed max-w-2xl mx-auto italic">
                        <span className="font-bold text-secondary uppercase not-italic block mb-2">Disclaimer</span>
                        Questi sono consigli pratici basati su procedure legali ufficiali. Busssola non è un ente pubblico e non fornisce consulenza legale, finanziaria o professionale. Verifica sempre le informazioni sui canali istituzionali.
                      </p>
                    </div>

                    {/* Footer Nav */}
                    <div className="pt-12 border-t border-border flex justify-center">
                         <Button asChild variant="outline" className="rounded-xl font-bold">
                            <Link href="/tips">Vedi tutti i Life Hacks</Link>
                         </Button>
                    </div>
                </ReadingWidth>
            </div>
        </div>
    )
}
