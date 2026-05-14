'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { triggerConfetti } from '@/lib/confetti'
import { toast } from 'sonner'
import { Module, Lesson } from '@/types'
import { 
  ChevronLeft, ChevronRight, Zap, AlertTriangle, 
  BookOpen, CheckCircle2, Clock, ShieldCheck, 
  HelpCircle, Info, ExternalLink, Calendar, Users, Landmark
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useGameStore } from '@/store/useGameStore'
import ReactMarkdown from 'react-markdown'
import { Container } from '@/components/ui/Container'
import { ReadingWidth } from '@/components/ui/ReadingWidth'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

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
    const isCivic = currentModule.category && !['diritti-digitali', 'first-aid', 'sextortion'].includes(currentModule.category)

    // If lesson is not published, show a placeholder (though routing should prevent this)
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

    return (
        <div className="min-h-screen pb-24 bg-background selection:bg-primary/10">
            {/* Sticky Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-50 shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                style={{ scaleX }}
            />

            {/* Navigation Header */}
            <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-b border-border z-40 h-16 flex items-center shadow-sm">
                <Container size="full" className="flex items-center justify-between">
                    <Link href={`/moduli/${currentModule.id}`} className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-foreground transition-all">
                        <ChevronLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Torna al Modulo</span>
                    </Link>

                    <div className="text-sm font-semibold text-foreground truncate max-w-[200px] sm:max-w-md flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        {currentLesson.title}
                    </div>

                    <div className="w-8" />
                </Container>
            </header>

            <div className="pt-24 space-y-20">
                {/* Hero Section */}
                <ReadingWidth className="space-y-8 text-center pt-8">
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                           Modulo {currentModule.id.split('-')[1]}
                        </Badge>
                        <Badge variant="muted">
                            Lezione {lessonIndex + 1} di {currentModule.lessons.length}
                        </Badge>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight text-foreground tracking-tight text-balance">
                        {currentLesson.title}
                    </h1>

                    <div className="bg-surface border border-border p-6 rounded-3xl shadow-sm max-w-3xl mx-auto relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 text-left">Sintesi Operativa</h3>
                        <p className="text-xl text-foreground text-left leading-relaxed font-medium italic">
                            "{currentLesson.summary}"
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-secondary pt-4">
                        <span className="flex items-center gap-2 bg-surface-muted px-3 py-1.5 rounded-full"><Clock className="w-4 h-4" /> {currentLesson.estimatedMinutes} min lettura</span>
                        <span className="flex items-center gap-2 bg-surface-muted px-3 py-1.5 rounded-full capitalize">
                          <Users className="w-4 h-4" /> {currentLesson.audience.join(', ')}
                        </span>
                        {currentLesson.emergencyLevel && (
                          <span className={cn(
                            "flex items-center gap-2 px-3 py-1.5 rounded-full font-bold",
                            currentLesson.emergencyLevel === 'high' ? "bg-red-50 text-sos" : 
                            currentLesson.emergencyLevel === 'medium' ? "bg-orange-50 text-orange-600" : "bg-blue-50 text-blue-600"
                          )}>
                            <AlertTriangle className="w-4 h-4" /> SOS: {currentLesson.emergencyLevel.toUpperCase()}
                          </span>
                        )}
                    </div>
                </ReadingWidth>

                {/* Main Content Area */}
                <ReadingWidth className="space-y-16">
                    {/* Scenario Section / When to do */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
                      <section className="space-y-6">
                          <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                  {isCivic ? <Calendar className="w-6 h-6" /> : <HelpCircle className="w-6 h-6" />}
                              </div>
                              <h2 className="text-2xl font-display font-bold text-foreground">
                                {isCivic ? 'Quando serve?' : 'Cosa sta succedendo?'}
                              </h2>
                          </div>
                          
                          <div className="prose prose-lg text-secondary leading-relaxed max-w-none prose-p:mb-4">
                              <ReactMarkdown>{isCivic ? (currentLesson.whenToDo || currentLesson.scenario) : currentLesson.scenario}</ReactMarkdown>
                          </div>

                          {!isCivic && (
                              <div className="bg-surface-muted border border-border p-6 rounded-2xl">
                                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-3 flex items-center gap-2">
                                    <Info className="w-4 h-4" /> Domanda pratica
                                  </h4>
                                  <p className="text-foreground text-lg font-semibold leading-snug">
                                    {currentLesson.question}
                                  </p>
                              </div>
                          )}
                      </section>
                    </div>

                    {/* What is Happening / Analysis (Only for Risks) */}
                    {!isCivic && (
                        <section className="space-y-6 pt-8 border-t border-border">
                            <h2 className="text-2xl font-display font-bold text-foreground">Analisi del caso</h2>
                            <div className="prose prose-lg text-secondary leading-relaxed max-w-none">
                                <ReactMarkdown>{currentLesson.whatIsHappening}</ReactMarkdown>
                            </div>
                        </section>
                    )}

                    {/* Warning Signs (Only for Risks) */}
                    {!isCivic && currentLesson.warningSigns.length > 0 && (
                        <section className="bg-amber-50/30 border border-amber-100 p-8 rounded-[2rem] space-y-6">
                            <h3 className="text-xl font-bold text-amber-900 flex items-center gap-3">
                                <AlertTriangle className="w-6 h-6 text-amber-500" /> Segnali di rischio
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {currentLesson.warningSigns.map((sign, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-white/60 rounded-2xl border border-amber-100/50 text-amber-900/80 font-medium italic">
                                        <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2" />
                                        "{sign}"
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Do Now vs Dont Do / Steps */}
                    {isCivic ? (
                        <section className="bg-emerald-50/40 border border-emerald-100 p-8 md:p-12 rounded-[2rem] space-y-8">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                                <h3 className="text-2xl font-display font-bold text-emerald-900">Passaggi da seguire</h3>
                            </div>
                            <ul className="space-y-6 m-0 p-0 list-none">
                                {(currentLesson.steps || currentLesson.doNow).map((action, i) => (
                                    <li key={i} className="flex gap-4 text-emerald-900/80 font-semibold leading-relaxed text-lg bg-white/40 p-5 rounded-2xl border border-emerald-100/50 shadow-sm">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                                            {i + 1}
                                        </span>
                                        {action}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-emerald-50/40 border border-emerald-100 p-8 rounded-[2rem] space-y-6">
                                <h3 className="text-xl font-bold text-emerald-900 flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500" /> Cosa fare subito
                                </h3>
                                <ul className="space-y-4 m-0 p-0 list-none">
                                    {currentLesson.doNow.map((action, i) => (
                                        <li key={i} className="flex gap-3 text-emerald-900/80 font-semibold leading-relaxed">
                                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                                            {action}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-red-50/40 border border-red-100 p-8 rounded-[2rem] space-y-6">
                                <h3 className="text-xl font-bold text-red-900 flex items-center gap-3">
                                    <Zap className="w-6 h-6 text-red-500" /> Cosa NON fare
                                </h3>
                                <ul className="space-y-4 m-0 p-0 list-none">
                                    {currentLesson.dontDo.map((action, i) => (
                                        <li key={i} className="flex gap-3 text-red-900/80 font-semibold leading-relaxed">
                                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                            {action}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Evidence & Help / Where to do */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {isCivic ? (
                        <>
                          <section className="bg-blue-50/30 border border-blue-100 p-8 rounded-[2rem] space-y-6">
                              <h3 className="text-xl font-bold text-blue-900 flex items-center gap-3">
                                  <Landmark className="w-6 h-6 text-blue-500" /> Dove si fa
                              </h3>
                              <p className="text-blue-900/80 font-medium leading-relaxed">
                                {currentLesson.whereToDo || currentLesson.whoCanHelp.join(', ')}
                              </p>
                          </section>

                          <section className="bg-fuchsia-50/30 border border-fuchsia-100 p-8 rounded-[2rem] space-y-6">
                              <h3 className="text-xl font-bold text-fuchsia-900 flex items-center gap-3">
                                  <Clock className="w-6 h-6 text-fuchsia-500" /> Tempi e Costi
                              </h3>
                              <div className="space-y-4">
                                <p className="text-fuchsia-900/80 font-medium leading-relaxed">
                                  <span className="font-bold">Tempo stimato:</span> {currentLesson.estimatedMinutes} minuti
                                </p>
                                {currentLesson.estimatedCosts && (
                                  <p className="text-fuchsia-900/80 font-medium leading-relaxed">
                                    <span className="font-bold">Costi previsti:</span> {currentLesson.estimatedCosts}
                                  </p>
                                )}
                              </div>
                          </section>
                        </>
                      ) : (
                        <>
                          <section className="bg-blue-50/30 border border-blue-100 p-8 rounded-[2rem] space-y-6">
                              <h3 className="text-xl font-bold text-blue-900 flex items-center gap-3">
                                  <BookOpen className="w-6 h-6 text-blue-500" /> Conservare le prove
                              </h3>
                              <ul className="space-y-3">
                                {currentLesson.preserveEvidence.map((item, i) => (
                                  <li key={i} className="text-blue-900/80 font-medium leading-relaxed flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0 mt-2.5" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                          </section>

                          <section className="bg-sos/5 border border-sos/20 p-8 rounded-[2rem] space-y-6">
                              <h3 className="text-xl font-bold text-sos flex items-center gap-3 uppercase tracking-wide">
                                  Escalation e Aiuto
                              </h3>
                              <div className="space-y-4">
                                <div className="p-4 bg-white/40 rounded-2xl border border-sos/10">
                                  <h4 className="text-xs font-bold text-sos uppercase mb-2">Quando chiedere aiuto esterno</h4>
                                  <p className="text-sos font-medium leading-relaxed">
                                      {currentLesson.askHelpWhen}
                                  </p>
                                </div>
                                <div className="p-4 bg-white/40 rounded-2xl border border-sos/10">
                                  <h4 className="text-xs font-bold text-sos uppercase mb-2">A chi rivolgersi</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {currentLesson.whoCanHelp.map((helper, i) => (
                                      <Badge key={i} variant="secondary" className="bg-sos/10 text-sos border-sos/20">
                                        {helper}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                          </section>
                        </>
                      )}
                    </div>

                    {/* Checklist / What you need */}
                    <div className="bg-surface border-2 border-primary/20 p-8 md:p-14 rounded-[3rem] shadow-2xl space-y-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                            <CheckCircle2 size={200} />
                        </div>
                        <div className="space-y-4 text-center relative z-10">
                            <h3 className="text-3xl font-display font-bold text-foreground">
                              {isCivic ? 'Cosa serve preparare' : 'Checklist Operativa'}
                            </h3>
                            <p className="text-lg text-secondary max-w-xl mx-auto">
                              {isCivic ? 'Assicurati di avere tutto il necessario prima di iniziare.' : 'Segui questi passi in ordine rigoroso per contenere il danno.'}
                            </p>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-0 p-0 list-none relative z-10">
                            {(currentLesson.whatYouNeed || currentLesson.checklist).map((item, i) => (
                                <li key={i} className="flex items-center gap-4 p-5 rounded-3xl bg-background border border-border shadow-sm group hover:border-primary/30 transition-all">
                                    <div className="w-6 h-6 rounded-lg border-2 border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/5 transition-colors">
                                        <div className="w-2 h-2 rounded-sm bg-primary/40" />
                                    </div>
                                    <span className="text-base font-bold text-foreground leading-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Common Errors (Only for Civic) */}
                    {isCivic && currentLesson.commonErrors && currentLesson.commonErrors.length > 0 && (
                        <section className="bg-amber-50/30 border border-amber-100 p-8 rounded-[2rem] space-y-6">
                            <h3 className="text-xl font-bold text-amber-900 flex items-center gap-3">
                                <AlertTriangle className="w-6 h-6 text-amber-500" /> Errori comuni da evitare
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {currentLesson.commonErrors.map((error, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-white/60 rounded-2xl border border-amber-100/50 text-amber-900/80 font-medium">
                                        <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2" />
                                        {error}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Sources Section - THE CORE OF THE QUALITY GATE */}
                    <section className="bg-surface border border-border p-8 md:p-12 rounded-[2.5rem] shadow-sm space-y-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
                          <div className="space-y-1">
                            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                                <ShieldCheck className="w-6 h-6 text-primary" /> Fonti Istituzionali e Verifiche
                            </h3>
                            <p className="text-sm text-secondary">Ogni dato in questa lezione è supportato da documentazione ufficiale.</p>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-mono bg-surface-muted px-4 py-2 rounded-full text-secondary">
                            <Calendar className="w-3.5 h-3.5" /> Ultima revisione: {currentLesson.lastReviewedAt}
                          </div>
                        </div>

                        <div className="grid gap-8">
                            {currentLesson.sources.map((source, i) => (
                                <div key={i} className="group relative flex flex-col sm:flex-row sm:items-start gap-6 p-6 rounded-3xl hover:bg-surface-muted transition-colors border border-transparent hover:border-border">
                                    <div className={cn(
                                      "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm",
                                      source.type === 'official' ? "bg-blue-100 text-blue-700" :
                                      source.type === 'institutional' ? "bg-emerald-100 text-emerald-700" :
                                      source.type === 'platform' ? "bg-indigo-100 text-indigo-700" : "bg-surface-muted text-secondary"
                                    )}>
                                      <ExternalLink className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-3 flex-1">
                                        <div className="flex flex-wrap items-center gap-3">
                                          <a 
                                              href={source.url} 
                                              target="_blank" 
                                              rel="noopener noreferrer"
                                              className="text-lg font-bold text-foreground hover:text-primary transition-colors decoration-primary/30 underline-offset-4 hover:underline"
                                          >
                                              {source.title}
                                          </a>
                                          <Badge variant="outline" className="text-[10px] uppercase tracking-tighter h-5 px-1.5 font-bold">
                                            {source.organization}
                                          </Badge>
                                        </div>
                                        <p className="text-sm text-secondary font-medium leading-relaxed">
                                            <span className="text-foreground/80 font-bold">Utilizzato per:</span> {source.usedFor}
                                        </p>
                                        <div className="text-[10px] text-secondary/60 flex items-center gap-1 uppercase font-bold">
                                          Verificato il: {source.lastCheckedAt}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Disclaimer Section */}
                    <div className="bg-surface-muted/30 border border-border p-8 rounded-3xl text-center">
                      <p className="text-xs text-secondary/70 leading-relaxed max-w-2xl mx-auto italic">
                        <span className="font-bold text-secondary uppercase not-italic block mb-2">Disclaimer</span>
                        Questa guida è informativa e non sostituisce supporto legale, medico, psicologico o intervento urgente. 
                        Le procedure descritte sono basate sulle migliori pratiche al momento della revisione. 
                        Se c’è pericolo immediato per la tua incolumità o quella di altri, 
                        <span className="text-sos font-bold"> contatta immediatamente il 112 o le autorità competenti.</span>
                      </p>
                    </div>

                </ReadingWidth>

                {/* Footer Navigation */}
                <ReadingWidth className="pt-12 border-t border-border mt-16">
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
