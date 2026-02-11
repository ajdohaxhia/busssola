'use client'

export const runtime = 'edge';

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getModuleById } from '@/data/modules/index'
import { Module } from '@/types'
import { ChevronLeft, Play, Info, Flame, Trophy, Gamepad2, Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useGameStore } from '@/store/useGameStore'
import { Container } from '@/components/ui/Container'
import { useState } from 'react'

export default function ModuleDetail() {
    const { id } = useParams()
    const router = useRouter()
    const module = getModuleById(id as string) as Module | undefined
    const { modules: progress } = useGameStore() as { modules: Record<string, any> }
    const moduleProgress = module ? (progress[module.id] || { completed: false, xp: 0 }) : { completed: false, xp: 0 }

    // Search state for lessons
    const [lessonSearch, setLessonSearch] = useState('')

    if (!module) return (
        <Container className="py-20 text-center">
            <h1 className="text-2xl font-bold">Modulo non trovato</h1>
            <Link href="/moduli" className="text-neon-cyan hover:underline mt-4 block">Torna al catalogo</Link>
        </Container>
    )

    const filteredLessons = module.lessons.filter(l =>
        l.title.toLowerCase().includes(lessonSearch.toLowerCase())
    )

    // Calculate progress percentage (mock logic - in real app would rely on completed lessons count)
    const progressPercent = moduleProgress.completed ? 100 : Math.min(15, moduleProgress.xp / 10)

    return (
        <Container size="full" className="py-8 space-y-12">
            {/* Navbar / Breadcrumbs */}
            <div className="flex items-center gap-4 text-sm font-medium text-white/40">
                <Link href="/moduli" className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronLeft className="w-4 h-4" /> Moduli
                </Link>
                <span>/</span>
                <span className="text-white">{module.title}</span>
            </div>


            {/* LEVEL 1: OVERVIEW HERO */}
            <header className="relative overflow-hidden rounded-[2rem] glass-card p-8 md:p-12 border-white/10 group">
                {/* Background Ambient */}
                <div className={cn(
                    "absolute top-0 right-0 w-96 h-96 blur-[120px] opacity-20 pointer-events-none",
                    module.themeColor === 'accent-purple' ? 'bg-accent-purple' :
                        module.themeColor === 'accent-blue' ? 'bg-accent-blue' : 'bg-accent-cyan'
                )} />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <span className={cn(
                                "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border",
                                module.difficulty === 'base' ? 'text-neon-green border-neon-green/20' :
                                    module.difficulty === 'intermedia' ? 'text-neon-yellow border-neon-yellow/20' : 'text-neon-pink border-neon-pink/20'
                            )}>
                                {module.difficulty}
                            </span>
                            <span className="text-white/40 text-xs font-bold uppercase tracking-widest">
                                {module.lessons.length} Lezioni
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight leading-[1.1]">
                            {module.title}
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
                            {module.description}
                        </p>

                        <div className="pt-6 flex flex-wrap gap-4">
                            <Link href={`/moduli/${module.id}/lezione/1`}>
                                <button className="px-8 py-4 bg-neon-cyan text-dark-bg rounded-xl font-bold flex items-center gap-2 hover:bg-white transition-all shadow-lg hover:translate-y-[-2px]">
                                    <Play className="w-5 h-5 fill-current" />
                                    {moduleProgress.lessonsViewed?.length > 0 ? 'Riprendi Protocollo' : 'Avvia Protocollo'}
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Progress Circle (Desktop) */}
                    <div className="hidden lg:flex justify-center">
                        <div className="relative w-48 h-48 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="96" cy="96" r="88" className="stroke-white/5 fill-none" strokeWidth="12" />
                                <circle
                                    cx="96" cy="96" r="88"
                                    className="stroke-neon-cyan fill-none transition-all duration-1000 ease-out"
                                    strokeWidth="12"
                                    strokeDasharray="553"
                                    strokeDashoffset={553 - (553 * progressPercent / 100)}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-4xl font-mono font-bold text-white">{Math.round(progressPercent)}%</span>
                                <span className="text-xs text-white/40 uppercase tracking-widest font-bold">Completato</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* LEVEL 2: LESSONS LIST */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-display font-bold">Piano di Studio</h2>
                        {/* Search Within Module */}
                        <div className="relative group w-48 md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-neon-cyan transition-colors" />
                            <input
                                type="text"
                                placeholder="Cerca lezione..."
                                value={lessonSearch}
                                onChange={(e) => setLessonSearch(e.target.value)}
                                className="w-full bg-transparent border-b border-white/10 py-2 pl-9 pr-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon-cyan transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        {filteredLessons.map((lesson, index) => (
                            <Link
                                href={`/moduli/${module.id}/lezione/${index + 1}`}
                                key={lesson.id}
                                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all p-5 flex items-center justify-between cursor-pointer"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-sm font-mono font-bold text-white/40 group-hover:bg-neon-cyan group-hover:text-dark-bg transition-colors">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white group-hover:text-neon-cyan transition-colors">{lesson.title}</h3>
                                        <div className="flex items-center gap-3 text-xs text-white/40 mt-1">
                                            <span>{lesson.minutes} min lettura</span>
                                            <span className="w-1 h-1 rounded-full bg-white/20" />
                                            <span>{lesson.difficulty}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                                    <Play className="w-3 h-3 fill-white" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* LEVEL 3: SIDEBAR */}
                <aside className="lg:col-span-4 space-y-6">
                    {/* Quick Info */}
                    <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5">
                        <h4 className="font-bold flex items-center gap-2 mb-4 text-sm uppercase tracking-widest text-white/50">
                            <Info className="w-4 h-4" /> Info Corso
                        </h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li className="flex justify-between">
                                <span>Difficoltà</span>
                                <span className="font-bold text-white capitalize">{module.difficulty}</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Tempo stimato</span>
                                <span className="font-bold text-white">{(module.lessons.length * 5)} min</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Aggiornato</span>
                                <span className="font-bold text-white">Dic 2024</span>
                            </li>
                        </ul>
                    </div>
                </aside>
            </section>
        </Container>
    )
}
