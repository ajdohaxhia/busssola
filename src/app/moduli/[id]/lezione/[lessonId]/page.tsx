'use client'

export const runtime = 'edge';

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { triggerConfetti } from '@/lib/confetti'
import { toast } from 'sonner'
import { getModuleById } from '@/data/modules/index'
import { Module } from '@/types'
import { ChevronLeft, ChevronRight, Zap, AlertTriangle, Scale, BookOpen, CheckCircle2, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useGameStore } from '@/store/useGameStore'
import ReactMarkdown from 'react-markdown'
import { Container } from '@/components/ui/Container'
import { ReadingWidth } from '@/components/ui/ReadingWidth'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export default function LessonReader() {
    const { id, lessonId } = useParams()
    const router = useRouter()

    const lessonIndex = parseInt(lessonId as string) - 1
    const module = getModuleById(id as string) as Module | undefined
    const { completeLesson } = useGameStore() as { completeLesson: (mid: string, lid: string) => void }

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    if (!module || isNaN(lessonIndex) || !module.lessons[lessonIndex]) {
        return (
            <Container className="py-20 flex flex-col items-center justify-center text-center">
                <h1 className="text-2xl font-semibold mb-4 text-foreground">Lezione non trovata</h1>
                <Button asChild variant="outline">
                    <Link href={`/moduli/${id}`}>Torna al modulo</Link>
                </Button>
            </Container>
        )
    }

    const currentLesson = module.lessons[lessonIndex]
    const isLastLesson = lessonIndex === module.lessons.length - 1

    const handleNext = () => {
        completeLesson(module.id, currentLesson.id)

        toast.success(`Lezione Completata!`, {
            position: 'top-center',
            duration: 2000
        })

        if (isLastLesson) {
            triggerConfetti()
            router.push(`/moduli/${module.id}`)
        } else {
            router.push(`/moduli/${module.id}/lezione/${lessonIndex + 2}`)
        }
    }

    return (
        <div className="min-h-screen pb-24 bg-background">
            {/* Sticky Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-50"
                style={{ scaleX }}
            />

            {/* Navigation Header */}
            <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md border-b border-border z-40 h-16 flex items-center">
                <Container size="full" className="flex items-center justify-between">
                    <Link href={`/moduli/${module.id}`} className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-foreground transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Torna al Modulo</span>
                    </Link>

                    <div className="text-sm font-medium text-foreground truncate max-w-[200px] sm:max-w-md">
                        {currentLesson.title}
                    </div>

                    <div className="w-8" />
                </Container>
            </header>

            <div className="pt-24 space-y-16">
                {/* Hero Section */}
                <ReadingWidth className="space-y-6 text-center pt-8">
                    <Badge variant="muted" className="mb-4">
                        Lezione {lessonIndex + 1} di {module.lessons.length}
                    </Badge>

                    <h1 className="text-4xl md:text-5xl font-display font-semibold leading-tight text-foreground text-balance">
                        {currentLesson.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-secondary">
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {currentLesson.minutes} min lettura</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-border" />
                        <span className="capitalize">{currentLesson.difficulty}</span>
                    </div>
                </ReadingWidth>

                {/* Content */}
                <ReadingWidth>
                    <div className="bg-surface border border-border p-8 rounded-3xl mb-12 shadow-sm">
                        <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 text-primary flex items-center gap-2">
                            <BookOpen className="w-4 h-4" /> Cosa imparerai
                        </h3>
                        <ul className="space-y-3 m-0 p-0 list-none">
                            {currentLesson.learningGoals.map((goal, i) => (
                                <li key={i} className="flex gap-3 text-base text-secondary">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    {goal}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-semibold prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary-hover transition-colors prose-li:marker:text-primary text-secondary">
                        <ReactMarkdown>
                            {currentLesson.contentMarkdown}
                        </ReactMarkdown>
                    </article>
                </ReadingWidth>

                {/* Callouts Section */}
                {currentLesson.callouts && currentLesson.callouts.length > 0 && (
                    <ReadingWidth className="space-y-6">
                        {currentLesson.callouts.map((callout, i) => (
                            <div key={i} className={cn(
                                "p-6 rounded-2xl border flex gap-4 shadow-sm",
                                callout.type === 'tip' && "bg-blue-50 border-blue-200 text-blue-900",
                                callout.type === 'warning' && "bg-[#fde8e8] border-sos-border text-sos",
                                callout.type === 'legal' && "bg-amber-50 border-amber-200 text-amber-900",
                                callout.type === 'case-study' && "bg-purple-50 border-purple-200 text-purple-900"
                            )}>
                                <div className="shrink-0 mt-1">
                                    {callout.type === 'tip' && <Zap className="w-5 h-5" />}
                                    {callout.type === 'warning' && <AlertTriangle className="w-5 h-5" />}
                                    {callout.type === 'legal' && <Scale className="w-5 h-5" />}
                                    {callout.type === 'case-study' && <BookOpen className="w-5 h-5" />}
                                </div>
                                <div>
                                    <h4 className="font-semibold uppercase tracking-widest text-xs mb-1.5 opacity-80">
                                        {callout.type === 'case-study' ? 'Esempio Pratico' : 
                                         callout.type === 'tip' ? 'Consiglio' :
                                         callout.type === 'warning' ? 'Attenzione' :
                                         callout.type === 'legal' ? 'Nota Legale' : callout.type}
                                    </h4>
                                    <p className="leading-relaxed font-medium">
                                        {callout.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </ReadingWidth>
                )}

                {/* Footer Navigation */}
                <ReadingWidth className="pt-12 border-t border-border mt-16">
                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
                        <Button
                            variant="ghost"
                            onClick={() => {
                                if (lessonIndex > 0) router.push(`/moduli/${module.id}/lezione/${lessonIndex}`)
                            }}
                            disabled={lessonIndex === 0}
                            className="w-full sm:w-auto text-secondary hover:text-foreground disabled:opacity-50 font-medium"
                        >
                            <ChevronLeft className="w-5 h-5 mr-1" /> Precedente
                        </Button>

                        <Button
                            size="lg"
                            onClick={handleNext}
                            className={cn(
                                "w-full sm:w-auto rounded-xl text-base",
                                isLastLesson && "bg-emerald-600 hover:bg-emerald-700 text-white"
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

