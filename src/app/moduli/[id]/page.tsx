'use client'

export const runtime = 'edge';

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getModuleById } from '@/data/modules/index'
import { Module } from '@/types'
import { ChevronLeft, Play, Info, Search, BookOpen, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useGameStore } from '@/store/useGameStore'
import { Container } from '@/components/ui/Container'
import { useState } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export default function ModuleDetail() {
    const { id } = useParams()
    const router = useRouter()
    const module = getModuleById(id as string) as Module | undefined
    const { modules: progress } = useGameStore() as { modules: Record<string, any> }
    const moduleProgress = module ? (progress[module.id] || { completed: false, xp: 0 }) : { completed: false, xp: 0 }

    const [lessonSearch, setLessonSearch] = useState('')

    if (!module) return (
        <Container className="py-20 flex flex-col items-center text-center">
            <h1 className="text-3xl font-semibold text-foreground mb-4">Modulo non trovato</h1>
            <p className="text-secondary mb-8">Il modulo che stai cercando non esiste o è stato rimosso.</p>
            <Button asChild>
                <Link href="/moduli">Torna ai moduli</Link>
            </Button>
        </Container>
    )

    const filteredLessons = module.lessons.filter(l =>
        l.title.toLowerCase().includes(lessonSearch.toLowerCase())
    )

    const progressPercent = moduleProgress.completed ? 100 : Math.min(100, (moduleProgress.lessonsViewed?.length || 0) / module.lessons.length * 100)

    return (
        <Container size="md" className="py-12 space-y-12">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm font-medium text-secondary">
                <Link href="/moduli" className="hover:text-foreground transition-colors flex items-center gap-1">
                    <ChevronLeft className="w-4 h-4" /> Moduli
                </Link>
                <span>/</span>
                <span className="text-foreground">{module.title}</span>
            </div>

            {/* OVERVIEW HERO */}
            <header className="rounded-3xl border border-border bg-surface p-8 md:p-12 shadow-sm space-y-8">
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Badge variant="muted" className="capitalize">{module.difficulty}</Badge>
                        <span className="text-secondary text-sm font-medium flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4" />
                            {module.lessons.length} Lezioni
                        </span>
                        <span className="text-secondary text-sm font-medium flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            ~{module.lessons.length * 5} min
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-foreground leading-tight">
                        {module.title}
                    </h1>
                    <p className="text-lg text-secondary leading-relaxed max-w-2xl">
                        {module.description}
                    </p>

                    <div className="pt-4 flex items-center gap-4">
                        <Button asChild size="lg" className="rounded-xl">
                            <Link href={`/moduli/${module.id}/lezione/1`}>
                                <Play className="w-5 h-5 mr-2 fill-current" />
                                {moduleProgress.lessonsViewed?.length > 0 ? 'Riprendi modulo' : 'Inizia modulo'}
                            </Link>
                        </Button>
                        {progressPercent > 0 && (
                            <div className="flex items-center gap-3">
                                <div className="text-sm font-medium text-secondary">Progresso:</div>
                                <div className="text-sm font-semibold text-primary">{Math.round(progressPercent)}%</div>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* LESSONS LIST */}
            <section className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h2 className="text-2xl font-display font-semibold text-foreground">Contenuto del modulo</h2>
                    
                    <div className="relative group w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Cerca una lezione..."
                            value={lessonSearch}
                            onChange={(e) => setLessonSearch(e.target.value)}
                            className="w-full bg-surface border border-border rounded-lg py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-secondary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    {filteredLessons.length > 0 ? (
                        filteredLessons.map((lesson, index) => (
                            <Link
                                href={`/moduli/${module.id}/lezione/${index + 1}`}
                                key={lesson.id}
                                className="group block overflow-hidden rounded-xl bg-surface border border-border hover:border-primary/50 transition-all p-4"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-start sm:items-center gap-4">
                                        <div className="w-10 h-10 shrink-0 rounded-lg bg-surface-muted border border-border flex items-center justify-center text-sm font-semibold text-secondary group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-colors">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{lesson.title}</h3>
                                            <div className="flex items-center gap-3 text-sm text-secondary mt-1">
                                                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {lesson.minutes} min</span>
                                                <span className="w-1 h-1 rounded-full bg-border" />
                                                <span className="capitalize">{lesson.difficulty}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex shrink-0 w-8 h-8 rounded-full border border-border items-center justify-center text-secondary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                                        <Play className="w-3.5 h-3.5 fill-current" />
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="py-12 text-center bg-surface-muted rounded-xl border border-border">
                            <p className="text-secondary">Nessuna lezione corrisponde alla tua ricerca.</p>
                        </div>
                    )}
                </div>
            </section>
        </Container>
    )
}
