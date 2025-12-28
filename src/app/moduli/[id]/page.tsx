'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { getModuleById } from '@/data/modules/index'
import { Lesson, Module } from '@/types'
import { ChevronLeft, ChevronRight, BookOpen, ShieldCheck, Zap, AlertTriangle, Scale, HelpCircle, CheckCircle2 } from 'lucide-react'
import * as Icons from 'lucide-react'
import { cn } from '@/lib/utils'
import { useGameStore } from '@/store/useGameStore'
import ReactMarkdown from 'react-markdown'

export default function ModuleReader() {
    const { id } = useParams()
    const router = useRouter()
    const module = getModuleById(id as string) as Module | undefined
    const { completeLesson } = useGameStore() as { completeLesson: (mid: string, lid: string) => void }

    const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
    const [readingProgress, setReadingProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY
            const height = document.documentElement.scrollHeight - window.innerHeight
            setReadingProgress((scrolled / height) * 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!module) return <div className="p-12 text-center">Modulo non trovato.</div>

    const currentLesson = module.lessons[currentLessonIndex]

    const handleNext = () => {
        if (currentLessonIndex < module.lessons.length - 1) {
            setCurrentLessonIndex(prev => prev + 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
            completeLesson(module.id, currentLesson.id)
        }
    }

    const handlePrev = () => {
        if (currentLessonIndex > 0) {
            setCurrentLessonIndex(prev => prev - 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <div className="max-w-[1200px] mx-auto">
            {/* Top Navigation / Breadcrumbs */}
            <div className="flex items-center justify-between mb-8">
                <button
                    onClick={() => router.push('/moduli')}
                    className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
                >
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10">
                        <ChevronLeft className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest">Tutti i Moduli</span>
                </button>

                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
                    <span className="text-accent-cyan">{module.title}</span>
                    <span className="opacity-20">/</span>
                    <span>Lezione {currentLessonIndex + 1} di {module.lessons.length}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content Area */}
                <div className="lg:col-span-8 space-y-12">
                    {/* Progress Bar */}
                    <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-[60] lg:pl-64">
                        <motion.div
                            className="h-full bg-accent-cyan shadow-[0_0_10px_#22d3ee]"
                            style={{ width: `${readingProgress}%` }}
                        />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentLesson.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-8"
                        >
                            <header className="space-y-4">
                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">{currentLesson.title}</h1>
                                <div className="flex flex-wrap gap-4 items-center text-sm text-white/40">
                                    <div className="flex items-center gap-2">
                                        <Icons.Clock className="w-4 h-4" />
                                        <span>{currentLesson.minutes} min</span>
                                    </div>
                                    <div className="w-1 h-1 rounded-full bg-white/20" />
                                    <div className="flex items-center gap-2 uppercase tracking-widest font-bold">
                                        <span className={cn(
                                            currentLesson.difficulty === 'base' ? 'text-green-400' :
                                                currentLesson.difficulty === 'intermedia' ? 'text-amber-400' : 'text-red-400'
                                        )}>
                                            {currentLesson.difficulty}
                                        </span>
                                    </div>
                                </div>
                            </header>

                            {/* Learning Goals */}
                            <div className="glass-card rounded-3xl p-6 bg-accent-cyan/5 border-accent-cyan/10">
                                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2 text-accent-cyan">
                                    <Icons.Target className="w-4 h-4" />
                                    In questa lezione imparerai
                                </h3>
                                <ul className="space-y-3">
                                    {currentLesson.learningGoals.map((goal: string, i: number) => (
                                        <li key={i} className="flex gap-3 text-sm text-white/80">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
                                            {goal}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Article Content */}
                            <article className="prose prose-invert prose-lg max-w-none prose-p:leading-relaxed prose-headings:tracking-tight prose-headings:font-bold prose-strong:text-accent-cyan">
                                <ReactMarkdown>{currentLesson.contentMarkdown}</ReactMarkdown>
                            </article>

                            {/* Callouts */}
                            <div className="space-y-4">
                                {currentLesson.callouts.map((callout: any, i: number) => (
                                    <div key={i} className={cn(
                                        "p-6 rounded-2xl border flex gap-4",
                                        callout.type === 'tip' && "bg-blue-500/10 border-blue-500/20",
                                        callout.type === 'warning' && "bg-red-500/10 border-red-500/20",
                                        callout.type === 'legal' && "bg-amber-500/10 border-amber-500/20",
                                        callout.type === 'case-study' && "bg-accent-purple/10 border-accent-purple/20"
                                    )}>
                                        <div className="mt-1">
                                            {callout.type === 'tip' && <Zap className="w-5 h-5 text-blue-400" />}
                                            {callout.type === 'warning' && <AlertTriangle className="w-5 h-5 text-red-500" />}
                                            {callout.type === 'legal' && <Scale className="w-5 h-5 text-amber-500" />}
                                            {callout.type === 'case-study' && <BookOpen className="w-5 h-5 text-accent-purple" />}
                                        </div>
                                        <p className="text-sm text-white/80 leading-relaxed">
                                            <span className="font-bold uppercase tracking-widest text-xs block mb-1 opacity-60">{callout.type}</span>
                                            {callout.content}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Mini Exercise */}
                            <div className="glass-card rounded-3xl p-8 border-accent-cyan/20">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                    <Icons.Dna className="w-6 h-6 text-accent-cyan" />
                                    Esercizio Pratico
                                </h3>
                                <div className="space-y-4">
                                    <p className="font-bold text-accent-cyan">{currentLesson.microExercise.title}</p>
                                    <p className="text-sm text-white/70">{currentLesson.microExercise.instruction}</p>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 font-mono text-xs text-white/50">
                                        {currentLesson.microExercise.task}
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Footer */}
                            <footer className="pt-12 flex items-center justify-between border-t border-white/10">
                                <button
                                    onClick={handlePrev}
                                    disabled={currentLessonIndex === 0}
                                    className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 disabled:opacity-20 transition-all font-bold group"
                                >
                                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                    Precedente
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="flex items-center gap-3 px-8 py-3 rounded-2xl bg-accent-cyan text-dark-900 hover:bg-white transition-all font-bold group shadow-lg shadow-accent-cyan/20"
                                >
                                    {currentLessonIndex === module.lessons.length - 1 ? 'Concludi Modulo' : 'Prossima Lezione'}
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </footer>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Sidebar / Lesson Navigation */}
                <aside className="lg:col-span-4 space-y-8 sticky top-12 self-start hidden lg:block">
                    <div className="glass-card rounded-3xl p-6 border-white/5">
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-40">Indice Lezioni</h3>
                        <div className="space-y-2">
                            {module.lessons.map((lesson: Lesson, i: number) => (
                                <button
                                    key={lesson.id}
                                    onClick={() => {
                                        setCurrentLessonIndex(i)
                                        window.scrollTo({ top: 0, behavior: 'smooth' })
                                    }}
                                    className={cn(
                                        "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-left group",
                                        currentLessonIndex === i
                                            ? "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20"
                                            : "text-white/40 hover:bg-white/5"
                                    )}
                                >
                                    <span className="text-xs font-mono opacity-40">{String(i + 1).padStart(2, '0')}</span>
                                    <span className="text-sm font-medium line-clamp-1">{lesson.title}</span>
                                    {currentLessonIndex === i && <Icons.Play className="w-3 h-3 fill-current ml-auto" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quiz Card */}
                    <div className="glass-card rounded-3xl p-6 bg-accent-purple/5 border-accent-purple/10">
                        <h4 className="font-bold flex items-center gap-2 mb-4">
                            <HelpCircle className="w-5 h-5 text-accent-purple" />
                            Challenge Rapida
                        </h4>
                        <p className="text-xs text-white/60 mb-6">Metti alla prova quello che hai imparato in questa lezione per guadagnare bonus XP.</p>
                        <button className="w-full py-3 bg-accent-purple/20 hover:bg-accent-purple/30 rounded-xl text-xs font-bold transition-all border border-accent-purple/30">
                            Inizia Mini-Quiz
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    )
}

const Icons = {
    Clock: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
    ),
    Target: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
        </svg>
    ),
    Dna: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3v3a2 2 0 0 1-2 2H3" /><path d="M21 8h-3a2 2 0 0 1-2-2V3" /><path d="M3 16h3a2 2 0 0 1 2 2v3" /><path d="M16 21v-3a2 2 0 0 1 2-2h3" /><path d="M18 12c.005 0 .01 0 .015 0" /><path d="M17.02 17.02c.005 0 .01 0 .015 0" /><path d="M12 18c.005 0 .01 0 .015 0" /><path d="M6.98 17.02c.005 0 .01 0 .015 0" /><path d="M6 12c.005 0 .01 0 .015 0" /><path d="M6.98 6.98c.005 0 .01 0 .015 0" /><path d="M12 6c.005 0 .01 0 .015 0" /><path d="M17.02 6.98c.005 0 .01 0 .015 0" />
        </svg>
    ),
    Play: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
    )
}
