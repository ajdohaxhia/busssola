'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { triggerConfetti } from '@/lib/confetti'
import { toast } from 'sonner'
import { Module, Lesson } from '@/types'
import { 
  ChevronLeft, ChevronRight, Zap, AlertTriangle, 
  CheckCircle2, Clock, ShieldCheck, 
  HelpCircle, ExternalLink, Calendar, Users, Landmark,
  LockKeyhole, Book, Search, Printer, Copy, AlertCircle
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useGameStore } from '@/store/useGameStore'
import { Container } from '@/components/ui/Container'
import { ReadingWidth } from '@/components/ui/ReadingWidth'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { OFFICIAL_SOURCES } from '@/data/officialSources'

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

    const currentLesson = currentModule.lessons[lessonIndex] as Lesson
    const isLastLesson = lessonIndex === currentModule.lessons.length - 1

    if (currentLesson.status !== 'published' || !currentLesson.qualityGatePassed) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background p-6">
                <div className="text-center space-y-4 max-w-md">
                    <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
                        <AlertTriangle className="w-8 h-8" />
                    </div>
                    <h1 className="text-2xl font-bold text-foreground">Lezione in fase di revisione</h1>
                    <p className="text-secondary">
                        Questa lezione non ha ancora superato i controlli di qualità e non è al momento disponibile al pubblico. 
                        Stiamo verificando le fonti istituzionali.
                    </p>
                    <Button asChild>
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
            router.push(`/moduli/${currentModule.id}/lezione/${lessonIndex + 2}`)
        }
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success('Link copiato negli appunti');
    }

    return (
        <div className="min-h-screen pb-24 bg-background selection:bg-primary/10 print:pb-0">
            {/* Sticky Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-50 shadow-[0_0_10px_rgba(var(--primary),0.5)] print:hidden"
                style={{ scaleX }}
            />

            {/* Navigation Header */}
            <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-b border-border z-40 h-16 flex items-center shadow-sm print:hidden">
                <Container size="full" className="flex items-center justify-between">
                    <Link href={`/moduli/${currentModule.id}`} className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-foreground transition-all">
                        <ChevronLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Torna al Modulo</span>
                    </Link>

                    <div className="text-sm font-semibold text-foreground truncate max-w-[200px] sm:max-w-md flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        {currentLesson.title}
                    </div>

                    <Button variant="ghost" size="icon" onClick={() => window.print()} className="text-secondary">
                        <Printer className="w-4 h-4" />
                    </Button>
                </Container>
            </header>

            <div className="pt-24 space-y-20 print:pt-0 print:space-y-8">
                {/* Hero Section */}
                <ReadingWidth className="space-y-8 text-center pt-8 print:text-left print:pt-0 print:space-y-4">
                    <div className="flex flex-wrap justify-center gap-2 mb-4 print:hidden">
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 uppercase tracking-widest text-[10px] font-bold">
                           {currentModule.category?.replace('-', ' ')}
                        </Badge>
                        <Badge variant="muted" className="text-[10px] font-bold">
                            Guida {lessonIndex + 1} di {currentModule.lessons.length}
                        </Badge>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight text-foreground tracking-tight text-balance print:text-3xl">
                        {currentLesson.title}
                    </h1>

                    {/* Prerequisites */}
                    {currentLesson.prerequisites && currentLesson.prerequisites.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-2 pt-2 print:justify-start">
                            <span className="text-[10px] font-black uppercase text-secondary/60 w-full mb-1">Prima di iniziare:</span>
                            {currentLesson.prerequisites.map((p, i) => (
                                <Badge key={i} variant="secondary" className="bg-amber-50 text-amber-700 border-amber-100/50 text-[10px] font-bold">
                                    <LockKeyhole className="w-3 h-3 mr-1" /> {p}
                                </Badge>
                            ))}
                        </div>
                    )}

                    <div className="bg-surface border border-border p-6 rounded-3xl shadow-sm max-w-3xl mx-auto relative overflow-hidden group print:border-none print:p-0 print:bg-transparent print:shadow-none">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary print:hidden" />
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 text-left print:text-secondary">In breve</h3>
                        <p className="text-xl text-foreground text-left leading-relaxed font-medium italic print:text-base">
                            "{currentLesson.summary}"
                        </p>
                        {currentLesson.practicalDisclaimer && (
                            <p className="text-xs text-sos font-bold mt-4 text-left border-t border-sos/10 pt-4 italic print:border-border">
                                ⚠️ {currentLesson.practicalDisclaimer}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-secondary pt-4 print:hidden">
                        <span className="flex items-center gap-2 bg-surface-muted px-3 py-1.5 rounded-full"><Clock className="w-4 h-4" /> {currentLesson.estimatedMinutes} min lettura</span>
                        <span className="flex items-center gap-2 bg-surface-muted px-3 py-1.5 rounded-full capitalize">
                          <Users className="w-4 h-4" /> {currentLesson.audience.join(', ')}
                        </span>
                    </div>
                </ReadingWidth>

                {/* Main Content Area */}
                <ReadingWidth className="space-y-16 print:space-y-8">
                    
                    {/* Official Links Section (REQUIRED BY NEW RULE) */}
                    {(currentLesson.officialLinksV2 && currentLesson.officialLinksV2.length > 0) && (
                        <section className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary print:hidden">
                                    <ExternalLink className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-display font-bold text-foreground print:text-xl">Link utili ufficiali</h2>
                            </div>
                            
                            <div className="grid gap-4">
                                {currentLesson.officialLinksV2.map((ol, i) => {
                                    const source = OFFICIAL_SOURCES[ol.sourceId];
                                    if (!source) return null;
                                    return (
                                        <Card key={i} className="p-6 border border-primary/20 bg-primary/[0.01] hover:bg-primary/[0.03] transition-all rounded-3xl relative overflow-hidden print:border-border print:p-4">
                                            <div className="flex justify-between items-start mb-4 print:mb-2">
                                                <div className="space-y-1">
                                                    <span className="text-[10px] font-black uppercase text-primary tracking-widest">{source.ente}</span>
                                                    <h4 className="text-lg font-bold text-foreground leading-tight">{ol.label || source.name}</h4>
                                                </div>
                                                <div className="flex gap-2 print:hidden">
                                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(ol.url || source.url)} className="h-8 w-8 rounded-lg">
                                                        <Copy className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                            <p className="text-sm text-secondary font-medium leading-relaxed mb-4 print:mb-2">{ol.useWhen}</p>
                                            <div className="flex flex-wrap gap-2 mb-4 print:hidden">
                                                <span className="text-[10px] font-bold text-secondary/60 w-full mb-1">Cosa serve prima:</span>
                                                {ol.beforeOpening.map((b, j) => (
                                                    <Badge key={j} variant="outline" className="text-[9px] uppercase font-bold bg-background/50">{b}</Badge>
                                                ))}
                                            </div>
                                            {ol.warning && (
                                                <div className="flex gap-2 p-3 bg-amber-50 rounded-xl border border-amber-100 text-[11px] font-bold text-amber-800 mb-4 print:mb-2">
                                                    <AlertCircle className="w-4 h-4 shrink-0" /> {ol.warning}
                                                </div>
                                            )}
                                            <Button asChild className="w-full rounded-xl font-bold print:hidden">
                                                <a href={ol.url || source.url} target="_blank" rel="noopener noreferrer">Apri Portale Ufficiale <ExternalLink className="w-4 h-4 ml-2" /></a>
                                            </Button>
                                            <div className="hidden print:block text-xs font-mono text-primary mt-2">Link: {ol.url || source.url}</div>
                                        </Card>
                                    );
                                })}
                            </div>
                        </section>
                    )}

                    {/* Preparation Section */}
                    {currentLesson.whatToPrepare && currentLesson.whatToPrepare.length > 0 && (
                        <section className="bg-surface border border-border p-8 rounded-[2rem] space-y-6 print:border-none print:p-0">
                            <h3 className="text-xl font-bold text-foreground flex items-center gap-3 print:text-lg">
                                <Landmark className="w-6 h-6 text-primary print:hidden" /> Cosa ti serve
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-0 p-0 list-none">
                                {currentLesson.whatToPrepare.map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border print:border-none print:p-0 print:gap-2">
                                        <div className="w-6 h-6 rounded-lg bg-primary/5 flex items-center justify-center text-primary print:hidden">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-bold text-foreground leading-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Step by Step Section (REQUIRED BY NEW RULE) */}
                    {(currentLesson.steps || currentLesson.doNow) && (
                        <section className="bg-emerald-50/40 border border-emerald-100 p-8 md:p-12 rounded-[2.5rem] space-y-8 print:bg-transparent print:border-none print:p-0">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-8 h-8 text-emerald-500 print:hidden" />
                                <h3 className="text-2xl font-display font-bold text-emerald-900 print:text-xl print:text-foreground">Come fare, passo passo</h3>
                            </div>
                            <ul className="space-y-6 m-0 p-0 list-none print:space-y-4">
                                {(currentLesson.steps || currentLesson.doNow || []).map((action, i) => (
                                    <li key={i} className="flex gap-4 text-emerald-900/80 font-semibold leading-relaxed text-lg bg-white/40 p-6 rounded-3xl border border-emerald-100/50 shadow-sm print:shadow-none print:border-none print:bg-transparent print:p-0 print:text-base print:text-foreground">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold mt-0.5 print:bg-secondary">
                                            {i + 1}
                                        </span>
                                        {action}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Common Errors & What not to do */}
                    {(currentLesson.commonErrors || currentLesson.dontDo) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-1 print:gap-4">
                            {currentLesson.commonErrors && currentLesson.commonErrors.length > 0 && (
                                <section className="bg-amber-50/30 border border-amber-100 p-8 rounded-[2rem] space-y-6 print:border-none print:p-0">
                                    <h3 className="text-xl font-bold text-amber-900 flex items-center gap-3 print:text-lg print:text-foreground">
                                        <AlertTriangle className="w-6 h-6 text-amber-500 print:hidden" /> Errori comuni
                                    </h3>
                                    <ul className="space-y-4 m-0 p-0 list-none">
                                        {currentLesson.commonErrors.map((error, i) => (
                                            <li key={i} className="flex gap-4 p-4 bg-white/60 rounded-2xl border border-amber-100/50 text-amber-900/80 font-medium print:border-none print:p-0 print:text-sm print:text-foreground">
                                                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2" />
                                                {error}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                            {currentLesson.dontDo && currentLesson.dontDo.length > 0 && (
                                <section className="bg-red-50/30 border border-red-100 p-8 rounded-[2rem] space-y-6 print:border-none print:p-0">
                                    <h3 className="text-xl font-bold text-red-900 flex items-center gap-3 print:text-lg print:text-foreground">
                                        <Zap className="w-6 h-6 text-red-500 print:hidden" /> Cosa NON fare
                                    </h3>
                                    <ul className="space-y-4 m-0 p-0 list-none">
                                        {currentLesson.dontDo.map((action, i) => (
                                            <li key={i} className="flex gap-4 p-4 bg-white/60 rounded-2xl border border-red-100/50 text-red-900/80 font-medium print:border-none print:p-0 print:text-sm print:text-foreground">
                                                <span className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2" />
                                                {action}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                        </div>
                    )}

                    {/* Problem solving section */}
                    {(currentLesson.ifYouHaveProblems || currentLesson.askHelpWhen) && (
                        <section className="bg-blue-50/30 border border-blue-100 p-8 rounded-[2.5rem] space-y-6 print:border-none print:p-0">
                            <h3 className="text-xl font-bold text-blue-900 flex items-center gap-3 print:text-lg print:text-foreground">
                                <HelpCircle className="w-6 h-6 text-blue-500 print:hidden" /> Se hai problemi
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 print:grid-cols-1 print:gap-2">
                                <div className="space-y-3">
                                    <h4 className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Quando chiedere aiuto</h4>
                                    <ul className="space-y-2 m-0 p-0 list-none">
                                        {(currentLesson.askHelpWhen || []).map((item, i) => (
                                            <li key={i} className="text-sm font-semibold text-blue-900/80 leading-relaxed flex gap-2">
                                                <span className="text-blue-400">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Dove chiedere aiuto</h4>
                                    <ul className="space-y-2 m-0 p-0 list-none">
                                        {(currentLesson.whoCanHelp || []).map((item, i) => (
                                            <li key={i} className="text-sm font-semibold text-blue-900/80 leading-relaxed flex gap-2">
                                                <span className="text-blue-400">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Related Glossary */}
                    {currentLesson.relatedGlossaryTerms && currentLesson.relatedGlossaryTerms.length > 0 && (
                        <section className="bg-surface border border-border p-8 rounded-[2rem] space-y-6 print:hidden">
                            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                                <Book className="w-6 h-6 text-primary" /> Termini da conoscere
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {currentLesson.relatedGlossaryTerms.map((term, i) => (
                                    <Link href={`/glossario?query=${term}`} key={i}>
                                        <Badge variant="outline" className="px-4 py-1.5 rounded-xl border-border hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer font-bold">
                                            {term} <Search className="w-3 h-3 ml-1.5 opacity-40" />
                                        </Badge>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Checklist Finale */}
                    <div className="bg-surface border-2 border-primary/20 p-8 md:p-14 rounded-[3.5rem] shadow-2xl space-y-10 relative overflow-hidden print:border-none print:p-0 print:shadow-none">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none print:hidden">
                            <CheckCircle2 size={200} />
                        </div>
                        <div className="space-y-4 text-center relative z-10 print:text-left print:space-y-2">
                            <h3 className="text-3xl font-display font-bold text-foreground print:text-xl">Checklist finale</h3>
                            <p className="text-lg text-secondary max-w-xl mx-auto print:text-sm print:mx-0">Assicurati di aver completato tutto.</p>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-0 p-0 list-none relative z-10 print:grid-cols-1 print:gap-2">
                            {(currentLesson.checklist || []).map((item, i) => (
                                <li key={i} className="flex items-center gap-4 p-5 rounded-3xl bg-background border border-border shadow-sm group hover:border-primary/30 transition-all print:border-none print:p-0 print:gap-2">
                                    <div className="w-6 h-6 rounded-lg border-2 border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/5 transition-colors print:hidden">
                                        <div className="w-2 h-2 rounded-sm bg-primary/40" />
                                    </div>
                                    <div className="hidden print:block w-4 h-4 border border-border rounded shrink-0" />
                                    <span className="text-base font-bold text-foreground leading-tight print:text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sources Section */}
                    <section className="bg-surface border border-border p-8 md:p-12 rounded-[2.5rem] shadow-sm space-y-10 print:border-none print:p-0 print:shadow-none">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8 print:pb-2 print:border-none">
                          <div className="space-y-1">
                            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                                <ShieldCheck className="w-6 h-6 text-primary print:hidden" /> Fonti Istituzionali
                            </h3>
                            <p className="text-sm text-secondary print:hidden">Ogni dato è supportato da documentazione ufficiale.</p>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-mono bg-surface-muted px-4 py-2 rounded-full text-secondary print:bg-transparent print:p-0 print:text-xs">
                            <Calendar className="w-3.5 h-3.5" /> Ultima revisione: {currentLesson.lastReviewedAt}
                          </div>
                        </div>

                        <div className="grid gap-8 print:gap-2">
                            {currentLesson.sources.map((source, i) => (
                                <div key={i} className="group relative flex flex-col sm:flex-row sm:items-start gap-6 p-6 rounded-3xl hover:bg-surface-muted transition-colors border border-transparent hover:border-border print:p-0 print:gap-2">
                                    <div className={cn(
                                      "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm print:hidden",
                                      source.type === 'official' ? "bg-blue-100 text-blue-700" :
                                      source.type === 'institutional' ? "bg-emerald-100 text-emerald-700" :
                                      source.type === 'platform' ? "bg-indigo-100 text-indigo-700" : "bg-surface-muted text-secondary"
                                    )}>
                                      <ExternalLink className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-3 flex-1 print:space-y-1">
                                        <div className="flex flex-wrap items-center gap-3">
                                          <a 
                                              href={source.url} 
                                              target="_blank" 
                                              rel="noopener noreferrer"
                                              className="text-lg font-bold text-foreground hover:text-primary transition-colors decoration-primary/30 underline-offset-4 hover:underline print:text-sm print:no-underline"
                                          >
                                              {source.title}
                                          </a>
                                          <Badge variant="outline" className="text-[10px] uppercase tracking-tighter h-5 px-1.5 font-bold print:hidden">
                                            {source.organization}
                                          </Badge>
                                        </div>
                                        <p className="text-sm text-secondary font-medium leading-relaxed print:text-xs">
                                            <span className="text-foreground/80 font-bold">Utilizzato per:</span> {source.usedFor}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Disclaimer Section */}
                    <div className="bg-surface-muted/30 border border-border p-8 rounded-3xl text-center print:border-none print:p-0 print:bg-transparent print:text-left">
                      <p className="text-xs text-secondary/70 leading-relaxed max-w-2xl mx-auto italic print:text-[10px]">
                        <span className="font-bold text-secondary uppercase not-italic block mb-2">Disclaimer</span>
                        Questa guida è informativa e non sostituisce supporto legale, medico, psicologico o intervento urgente. 
                        Le procedure descritte sono basate sulle migliori pratiche al momento della revisione. 
                        Se c’è pericolo immediato per la tua incolumità o quella di altri, 
                        <span className="text-sos font-bold"> contatta immediatamente il 112 o le autorità competenti.</span>
                      </p>
                    </div>

                </ReadingWidth>

                {/* Footer Navigation */}
                <ReadingWidth className="pt-12 border-t border-border mt-16 print:hidden">
                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
                        <Button
                            variant="ghost"
                            onClick={() => {
                                if (lessonIndex > 0) router.push(`/moduli/${currentModule.id}/lezione/${lessonIndex}`)
                            }}
                            disabled={lessonIndex === 0}
                            className="w-full sm:w-auto text-secondary hover:text-foreground disabled:opacity-50 font-bold h-12 rounded-xl"
                        >
                            <ChevronLeft className="w-5 h-5 mr-2" /> Precedente
                        </Button>

                        <Button
                            size="lg"
                            onClick={handleNext}
                            className={cn(
                                "w-full sm:w-auto rounded-xl text-base h-12 font-bold px-8 shadow-lg shadow-primary/20",
                                isLastLesson && "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20"
                            )}
                        >
                            {isLastLesson ? 'Completa Modulo' : 'Prossima Lezione'}
                            {isLastLesson ? <CheckCircle2 className="w-5 h-5 ml-2" /> : <ChevronRight className="w-5 h-5 ml-2" />}
                        </Button>
                    </div>
                </ReadingWidth>
            </div>
        </div>
    )
}
