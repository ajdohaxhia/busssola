'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { triggerConfetti } from '@/lib/confetti'
import { toast } from 'sonner'
import { Module, Lesson } from '@/types'
import { 
  ChevronLeft, ChevronRight, AlertTriangle, 
  CheckCircle2, Clock, ShieldCheck, 
  ExternalLink, Users, 
  Printer, Copy, ArrowRight
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { useGameStore } from '@/store/useGameStore'
import { Container } from '@/components/ui/Container'
import { ReadingWidth } from '@/components/ui/ReadingWidth'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { ALL_MODULES } from '@/data/modules/index'
import { OFFICIAL_SOURCES } from '@/data/officialSources'
import { InfoBox, WarningBox, DontDoBox } from '@/components/ui/Boxes'

interface LessonReaderClientProps {
    currentModule: Module;
    lessonIndex: number;
}

export default function LessonReaderClient({ currentModule, lessonIndex }: LessonReaderClientProps) {
    const router = useRouter()
    const { completeLesson, completeModule } = useGameStore()

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const publishedLessons = currentModule.lessons.filter(l => l.status === 'published' && l.qualityGatePassed)
    const currentLesson = currentModule.lessons[lessonIndex] as Lesson
    
    // Find the 1-based index in the published list
    const publishedIndex = publishedLessons.findIndex(l => l.id === currentLesson.id) + 1
    const totalPublished = publishedLessons.length

    const isLastLesson = publishedIndex === totalPublished

    if (currentLesson.status !== 'published' || !currentLesson.qualityGatePassed) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background p-6">
                <div className="text-center space-y-4 max-w-md text-left">
                    <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                        <AlertTriangle className="w-8 h-8" />
                    </div>
                    <h1 className="text-2xl font-display font-black text-foreground">Lezione in fase di revisione</h1>
                    <p className="text-secondary font-medium">
                        Questa lezione non ha ancora superato i controlli di qualità e non è al momento disponibile al pubblico. 
                        Stiamo verificando le fonti istituzionali.
                    </p>
                    <Button asChild className="rounded-xl font-black uppercase tracking-widest mt-4">
                        <Link href={`/moduli/${currentModule.id}`}>Torna al modulo</Link>
                    </Button>
                </div>
            </div>
        )
    }

    const handleNext = () => {
        completeLesson(currentModule.id, currentLesson.id)

        toast.success(`Lezione Completata!`, {
            position: 'top-center',
            duration: 2000
        })

        if (isLastLesson) {
            completeModule(currentModule.id)
            triggerConfetti()
            router.push(`/moduli/${currentModule.id}`)
        } else {
            const nextPublished = publishedLessons[publishedIndex]
            const nextFullIndex = currentModule.lessons.findIndex(l => l.id === nextPublished.id)
            router.push(`/moduli/${currentModule.id}/lezione/${nextFullIndex + 1}`)
        }
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success('Link copiato negli appunti');
    }

    return (
        <div className="min-h-screen pb-24 bg-background selection:bg-primary/10 print:pb-0 print:bg-white text-left">
            {/* Sticky Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-50 shadow-[0_0_10px_rgba(var(--primary),0.5)] print:hidden"
                style={{ scaleX }}
            />

            {/* Navigation Header */}
            <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-b border-border z-40 h-16 flex items-center shadow-sm print:hidden">
                <Container size="full" className="flex items-center justify-between px-6">
                    <Link href={`/moduli/${currentModule.id}`} className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-foreground transition-all">
                        <ChevronLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Modulo</span>
                    </Link>

                    <div className="text-sm font-black text-foreground truncate max-w-[200px] sm:max-w-md flex items-center gap-2 uppercase tracking-tight">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        {currentLesson.title}
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" onClick={() => window.print()} className="text-secondary h-10 w-10 rounded-xl">
                            <Printer className="w-4 h-4" />
                        </Button>
                    </div>
                </Container>
            </header>

            <div className="pt-24 space-y-16 print:pt-0 print:space-y-8">
                {/* Hero Section */}
                <ReadingWidth className="space-y-8 text-center pt-8 print:text-left print:pt-0 print:space-y-4">
                    <div className="flex flex-wrap justify-center gap-2 mb-4 print:hidden">
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 uppercase tracking-widest text-[10px] font-black">
                           {currentModule.category?.replace('-', ' ')}
                        </Badge>
                        <Badge variant="muted" className="text-[10px] font-bold">
                            Guida {publishedIndex} di {totalPublished}
                        </Badge>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-display font-black leading-[1.1] text-foreground tracking-tight text-balance print:text-3xl text-center">
                        {currentLesson.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-secondary leading-relaxed font-medium max-w-2xl mx-auto print:text-base print:mx-0 text-center">
                        {currentLesson.summary}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-secondary/60 uppercase tracking-widest pt-4 print:hidden">
                        <span className="flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-xl shadow-sm"><Clock className="w-4 h-4 text-primary" /> {currentLesson.estimatedMinutes} min</span>
                        <span className="flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-xl shadow-sm"><Users className="w-4 h-4 text-primary" /> {currentLesson.audience.join(', ')}</span>
                    </div>
                </ReadingWidth>

                {/* Content Sections */}
                <ReadingWidth className="space-y-16 print:space-y-10">
                    
                    {/* Top Alert Boxes */}
                    <div className="space-y-4 text-left">
                        {currentLesson.practicalDisclaimer && (
                            <WarningBox title="Attenzione">
                                {currentLesson.practicalDisclaimer}
                            </WarningBox>
                        )}
                        {currentLesson.emergencyLevel === 'sos' && (
                             <DontDoBox title="Urgenza SOS">
                                Questa situazione richiede azione immediata. Segui i passaggi sotto e contatta le autorità se necessario.
                             </DontDoBox>
                        )}
                    </div>

                    {/* Prerequisites */}
                    {currentLesson.prerequisites && currentLesson.prerequisites.length > 0 && (
                        <InfoBox title="Prima di iniziare" className="bg-surface border-2 border-primary/10 text-left">
                             <ul className="space-y-2 m-0 p-0 list-none pt-2">
                                {currentLesson.prerequisites.map((p, i) => (
                                    <li key={i} className="flex gap-3 text-secondary font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 mt-2" />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </InfoBox>
                    )}

                    {/* Steps Section */}
                    <section className="space-y-10 text-left">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 print:hidden">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-display font-black text-foreground tracking-tight print:text-xl">Come fare, passo dopo passo</h2>
                        </div>
                        
                        <div className="space-y-6 text-left">
                            {(currentLesson.steps || currentLesson.doNow || []).map((step, i) => (
                                <div key={i} className="flex gap-6 p-8 rounded-[2rem] bg-surface border border-border hover:border-primary/20 transition-all shadow-sm print:shadow-none print:p-0 print:border-none">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-black print:bg-secondary print:w-6 print:h-6 print:text-xs">
                                        {i + 1}
                                    </div>
                                    <p className="text-lg md:text-xl text-foreground font-semibold leading-relaxed pt-1 print:text-base">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Official Links Section */}
                    {(currentLesson.officialLinksV2 && currentLesson.officialLinksV2.length > 0) && (
                        <section className="space-y-8 text-left">
                            <h3 className="text-2xl font-display font-bold text-foreground flex items-center gap-3 print:text-lg">
                                <ExternalLink className="w-6 h-6 text-primary print:hidden" /> Link utili ufficiali
                            </h3>
                            <div className="grid gap-4 text-left">
                                {currentLesson.officialLinksV2.map((ol, i) => {
                                    const source = OFFICIAL_SOURCES[ol.sourceId];
                                    if (!source) return null;
                                    return (
                                        <Card key={i} className="p-8 border-2 border-primary/10 bg-primary/[0.01] hover:bg-primary/[0.03] transition-all rounded-[2.5rem] relative overflow-hidden print:border-border print:p-4 text-left">
                                            <div className="flex justify-between items-start mb-6 print:mb-2 text-left">
                                                <div className="space-y-1">
                                                    <span className="text-[10px] font-black uppercase text-primary tracking-[0.2em]">{source.ente}</span>
                                                    <h4 className="text-xl font-display font-bold text-foreground leading-tight">{ol.label || source.name}</h4>
                                                </div>
                                                <Button variant="ghost" size="icon" onClick={() => copyToClipboard(ol.url || source.url)} className="h-10 w-10 rounded-xl bg-background print:hidden">
                                                    <Copy className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <p className="text-base text-secondary font-medium leading-relaxed mb-6 print:mb-2">{ol.useWhen}</p>
                                            <div className="flex flex-wrap gap-2 mb-6 print:hidden">
                                                <span className="text-[10px] font-black uppercase text-secondary/40 w-full mb-1">Cosa serve prima:</span>
                                                {ol.beforeOpening.map((b, j) => (
                                                    <Badge key={j} variant="secondary" className="px-3 py-1 bg-background text-foreground border-border text-[10px] font-bold">{b}</Badge>
                                                ))}
                                            </div>
                                            <Button asChild size="lg" className="w-full rounded-2xl font-black uppercase tracking-widest h-14 print:hidden">
                                                <a href={ol.url || source.url} target="_blank" rel="noopener noreferrer">Vai al Portale Ufficiale</a>
                                            </Button>
                                            <div className="hidden print:block text-xs font-mono text-primary mt-2">URL: {ol.url || source.url}</div>
                                        </Card>
                                    );
                                })}
                            </div>
                        </section>
                    )}

                    {/* Common Errors & Dont Do */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-1 text-left">
                        {currentLesson.commonErrors && currentLesson.commonErrors.length > 0 && (
                            <WarningBox title="Errori comuni" className="h-full text-left">
                                <ul className="space-y-3 m-0 p-0 list-none pt-2">
                                    {currentLesson.commonErrors.map((error, i) => (
                                        <li key={i} className="text-sm leading-relaxed">{error}</li>
                                    ))}
                                </ul>
                            </WarningBox>
                        )}
                        {currentLesson.dontDo && currentLesson.dontDo.length > 0 && (
                            <DontDoBox title="Cosa NON fare" className="h-full text-left">
                                <ul className="space-y-3 m-0 p-0 list-none pt-2">
                                    {currentLesson.dontDo.map((action, i) => (
                                        <li key={i} className="text-sm leading-relaxed font-bold">{action}</li>
                                    ))}
                                </ul>
                            </DontDoBox>
                        )}
                    </div>

                    {/* Related Glossary */}
                    {currentLesson.relatedGlossaryTerms && currentLesson.relatedGlossaryTerms.length > 0 && (
                        <section className="bg-surface border-2 border-border p-8 rounded-[2rem] space-y-6 print:hidden text-left">
                            <h3 className="text-xl font-display font-black text-foreground flex items-center gap-3 uppercase tracking-tighter">
                                <ShieldCheck className="w-6 h-6 text-primary" /> Termini da conoscere
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {currentLesson.relatedGlossaryTerms.map((term, i) => (
                                    <Link href={`/glossario?query=${term}`} key={i}>
                                        <Badge variant="outline" className="px-4 py-2 rounded-xl border-border hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer font-bold">
                                            {term} <ArrowRight className="w-3 h-3 ml-1.5 opacity-40" />
                                        </Badge>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* FAQs */}
                    {currentLesson.faqs && currentLesson.faqs.length > 0 && (
                        <section className="space-y-8 text-left">
                            <h3 className="text-2xl font-display font-black text-foreground flex items-center gap-3 uppercase tracking-tighter">
                                <AlertTriangle className="w-6 h-6 text-primary" /> Domande Frequenti
                            </h3>
                            <div className="grid gap-4">
                                {currentLesson.faqs.map((faq, i) => (
                                    <div key={i} className="p-6 rounded-3xl bg-surface border border-border space-y-2 group hover:border-primary/20 transition-colors">
                                        <h4 className="font-bold text-foreground text-lg leading-tight group-hover:text-primary transition-colors">{faq.q}</h4>
                                        <p className="text-secondary leading-relaxed font-medium">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Related Lessons / Next Steps */}
                    {currentLesson.relatedLessons && currentLesson.relatedLessons.length > 0 && (
                        <section className="space-y-8 text-left print:hidden">
                            <h3 className="text-2xl font-display font-black text-foreground uppercase tracking-tighter">Potrebbe servirti anche</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {currentLesson.relatedLessons.map((relatedId) => {
                                    const relatedModule = ALL_MODULES.find(m => m.lessons.some(l => l.id === relatedId))
                                    const relatedLesson = relatedModule?.lessons.find(l => l.id === relatedId)
                                    if (!relatedLesson || !relatedModule) return null
                                    
                                    return (
                                        <Link href={`/moduli/${relatedModule.id}/lezione/${relatedModule.lessons.findIndex(l => l.id === relatedId) + 1}`} key={relatedId}>
                                            <Card className="p-6 border border-border bg-surface hover:border-primary/40 hover:shadow-xl transition-all h-full group">
                                                <div className="space-y-1">
                                                    <span className="text-[10px] font-black uppercase text-secondary/40 tracking-widest">{relatedModule.title.replace(/Modulo \d+[b]?:\s*/i, '')}</span>
                                                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{relatedLesson.title}</h4>
                                                </div>
                                            </Card>
                                        </Link>
                                    )
                                })}
                            </div>
                        </section>
                    )}

                    {/* Checklist Finale */}
                    <section className="bg-foreground text-background p-10 md:p-16 rounded-[3.5rem] shadow-2xl relative overflow-hidden print:bg-transparent print:text-foreground print:p-0 print:border-t print:border-border text-left">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none print:hidden">
                            <CheckCircle2 size={300} />
                        </div>
                        <div className="space-y-10 relative z-10 text-left">
                            <div className="text-center space-y-2 print:text-left">
                                <h3 className="text-3xl font-display font-black tracking-tight print:text-xl">Checklist finale</h3>
                                <p className="text-white/60 font-medium print:text-secondary print:text-sm">Assicurati di aver completato ogni punto per chiudere la pratica.</p>
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-0 p-0 list-none print:grid-cols-1 print:gap-2">
                                {(currentLesson.checklist || []).map((item, i) => (
                                    <li key={i} className="flex items-center gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 group transition-all print:border-none print:p-0 print:bg-transparent print:gap-2">
                                        <div className="w-8 h-8 rounded-xl border-2 border-white/20 flex items-center justify-center shrink-0 print:border-border print:w-5 print:h-5 print:rounded-md">
                                            <div className="w-3 h-3 rounded bg-primary opacity-0 group-hover:opacity-100 transition-opacity print:hidden" />
                                        </div>
                                        <span className="text-lg font-bold text-white print:text-foreground print:text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Sources & Metadata */}
                    <footer className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8 print:pt-4 text-left">
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {currentLesson.sources.map((source, i) => (
                                <Badge key={i} variant="outline" className="text-[10px] font-black uppercase tracking-widest px-3 py-1 border-border text-secondary/60">
                                    Fonte: {source.organization}
                                </Badge>
                            ))}
                        </div>
                        <div className="text-[10px] font-black text-secondary/40 uppercase tracking-widest">
                            Ultima Revisione: {currentLesson.lastReviewedAt}
                        </div>
                    </footer>

                    {/* Nav Bottom */}
                    <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 print:hidden">
                        <Button
                            variant="ghost"
                            onClick={() => {
                                if (publishedIndex > 1) {
                                    const prevPublished = publishedLessons[publishedIndex - 2]
                                    const prevFullIndex = currentModule.lessons.findIndex(l => l.id === prevPublished.id)
                                    router.push(`/moduli/${currentModule.id}/lezione/${prevFullIndex + 1}`)
                                }
                            }}
                            disabled={publishedIndex === 1}
                            className="w-full sm:w-auto h-14 rounded-2xl font-black uppercase tracking-widest"
                        >
                            <ChevronLeft className="w-5 h-5 mr-2" /> Precedente
                        </Button>

                        <Button
                            size="lg"
                            onClick={handleNext}
                            className={cn(
                                "w-full sm:w-auto h-16 px-10 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-primary/20",
                                isLastLesson && "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20"
                            )}
                        >
                            {isLastLesson ? 'Modulo Completato' : 'Prossimo Passo'}
                            {isLastLesson ? <CheckCircle2 className="w-5 h-5 ml-2" /> : <ChevronRight className="w-5 h-5 ml-2" />}
                        </Button>
                    </div>
                </ReadingWidth>
            </div>
        </div>
    )
}
