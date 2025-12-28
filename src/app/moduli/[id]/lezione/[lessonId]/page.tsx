'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { triggerConfetti } from '@/lib/confetti'
import { toast } from 'sonner'
import { getModuleById } from '@/data/modules/index'
import { Module } from '@/types'
import { ChevronLeft, ChevronRight, Zap, AlertTriangle, Scale, BookOpen, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useGameStore } from '@/store/useGameStore'
import ReactMarkdown from 'react-markdown'
import { Container } from '@/components/ui/Container'
import { ReadingWidth } from '@/components/ui/ReadingWidth'

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
        return <div className="p-12 text-center">Lezione non trovata.</div>
    }

    const currentLesson = module.lessons[lessonIndex]
    const isLastLesson = lessonIndex === module.lessons.length - 1

    const handleNext = () => {
        // Mark as complete
        completeLesson(module.id, currentLesson.id)

        toast.success(`Lezione Completata!`, {
            description: '+10 XP guadagnati.',
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
        <div className="min-h-screen pb-20">
            {/* Sticky Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-neon-cyan origin-left z-50"
                style={{ scaleX }}
            />

            {/* Navigation Header */}
            <header className="fixed top-0 left-0 right-0 bg-dark-bg/80 backdrop-blur-md border-b border-white/5 z-40 h-16 flex items-center">
                <Container size="full" className="flex items-center justify-between">
                    <Link href={`/moduli/${module.id}`} className="flex items-center gap-2 text-sm font-bold text-white/60 hover:text-white transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Torna al Modulo</span>
                    </Link>

                    <div className="text-sm font-medium text-white/40 truncate max-w-[200px] sm:max-w-md">
                        {currentLesson.title}
                    </div>

                    <div className="w-8" /> {/* Spacer for balance */}
                </Container>
            </header>

            <div className="pt-24 space-y-12">
                {/* Hero Section */}
                <ReadingWidth className="space-y-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-neon-cyan">
                        Lezione {lessonIndex + 1}/{module.lessons.length}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                        {currentLesson.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
                        <span>{currentLesson.minutes} min lettura</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="capitalize text-neon-yellow">{currentLesson.difficulty}</span>
                    </div>
                </ReadingWidth>

                {/* Content */}
                <ReadingWidth as="article" className="prose prose-invert prose-lg max-w-none prose-p:leading-relaxed prose-headings:font-display prose-headings:font-bold prose-strong:text-neon-cyan prose-a:text-neon-cyan prose-li:marker:text-neon-cyan">
                    <div className="glass-card p-8 rounded-3xl mb-12 border-white/5 bg-white/5">
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-neon-cyan flex items-center gap-2">
                            <Zap className="w-4 h-4" /> Obiettivi
                        </h3>
                        <ul className="space-y-2 m-0 p-0 list-none">
                            {currentLesson.learningGoals.map((goal, i) => (
                                <li key={i} className="flex gap-3 text-base text-white/80 p-0 before:hidden">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-cyan shrink-0" />
                                    {goal}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <ReactMarkdown
                        components={{
                            // Custom renderer for callouts if they were in MD, but they are separate in data
                        }}
                    >
                        {currentLesson.contentMarkdown}
                    </ReactMarkdown>
                </ReadingWidth>

                {/* Callouts Section */}
                <ReadingWidth className="space-y-6">
                    {currentLesson.callouts.map((callout, i) => (
                        <div key={i} className={cn(
                            "p-6 rounded-2xl border flex gap-5",
                            callout.type === 'tip' && "bg-blue-500/10 border-blue-500/20",
                            callout.type === 'warning' && "bg-neon-pink/10 border-neon-pink/20",
                            callout.type === 'legal' && "bg-amber-500/10 border-amber-500/20",
                            callout.type === 'case-study' && "bg-neon-purple/10 border-neon-purple/20"
                        )}>
                            <div className="shrink-0 mt-1">
                                {callout.type === 'tip' && <Zap className="w-6 h-6 text-blue-400" />}
                                {callout.type === 'warning' && <AlertTriangle className="w-6 h-6 text-neon-pink" />}
                                {callout.type === 'legal' && <Scale className="w-6 h-6 text-amber-500" />}
                                {callout.type === 'case-study' && <BookOpen className="w-6 h-6 text-neon-purple" />}
                            </div>
                            <div>
                                <h4 className="font-bold uppercase tracking-widest text-xs mb-2 opacity-70">
                                    {callout.type === 'case-study' ? 'Case Study Reale' : callout.type}
                                </h4>
                                <p className="text-white/90 leading-relaxed">
                                    {callout.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </ReadingWidth>

                {/* Footer Navigation */}
                <ReadingWidth className="pt-12 border-t border-white/10 mt-12">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => {
                                if (lessonIndex > 0) router.push(`/moduli/${module.id}/lezione/${lessonIndex}`)
                            }}
                            disabled={lessonIndex === 0}
                            className="flex items-center gap-2 text-white/40 hover:text-white disabled:opacity-20 transition-colors font-bold"
                        >
                            <ChevronLeft className="w-5 h-5" /> Precedente
                        </button>

                        <button
                            onClick={handleNext}
                            className="bg-neon-cyan text-dark-bg px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-white hover:scale-105 transition-all shadow-lg shadow-neon-cyan/20"
                        >
                            {isLastLesson ? 'Completa Modulo' : 'Prossima Lezione'}
                            {isLastLesson ? <CheckCircle2 className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                        </button>
                    </div>
                </ReadingWidth>
            </div>
        </div>
    )
}

