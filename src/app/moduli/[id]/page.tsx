'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { getModuleById, ALL_MODULES } from '@/data/modules/index'
import { Module } from '@/types'
import { ChevronLeft, Play, Search, BookOpen, Clock, ShieldAlert, Target, Users, CheckCircle, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useGameStore } from '@/store/useGameStore'
import { Container } from '@/components/ui/Container'
import { useState } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { LEARNING_PATHS } from '@/data/paths'

// List of module IDs that require an immediate SOS jumper
const SENSITIVE_MODULES = ['predatori-online', 'cyberbullismo-stalking', 'sexting-legal', 'emergenze-digitali', 'relazioni-online']

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
}

export default function ModuleDetail() {
    const { id } = useParams()
    const module = getModuleById(id as string) as Module | undefined
    const { modules: progress } = useGameStore() as { modules: Record<string, any> }
    const moduleProgress = module ? (progress[module.id] || { completed: false, xp: 0 }) : { completed: false, xp: 0 }

    const [lessonSearch, setLessonSearch] = useState('')

    if (!module) return (
        <Container className="py-20 flex flex-col items-center text-center min-h-[60vh] justify-center">
            <h1 className="text-3xl font-semibold text-foreground mb-4">Percorso non trovato</h1>
            <p className="text-secondary mb-8">Il modulo che stai cercando non esiste o è stato rimosso.</p>
            <Button asChild>
                <Link href="/moduli">Torna al catalogo</Link>
            </Button>
        </Container>
    )

    const filteredLessons = module.lessons.filter(l =>
        l.title.toLowerCase().includes(lessonSearch.toLowerCase())
    )

    const progressPercent = moduleProgress.completed ? 100 : Math.min(100, (moduleProgress.lessonsViewed?.length || 0) / module.lessons.length * 100)
    const isSensitive = SENSITIVE_MODULES.includes(module.id)
    const totalMinutes = module.lessons.length * 5 // Rough estimate
    
    // Determine audience string based on difficulty
    const audience = module.difficulty === 'base' 
        ? "Per tutti, inclusi ragazzi e principianti." 
        : module.difficulty === 'intermedia' 
        ? "Utenti regolari, famiglie e giovani adulti." 
        : "Utenti più esperti, educatori o chi cerca tutele avanzate."

    const parentPaths = LEARNING_PATHS.filter(p => p.moduleIds.includes(module.id))

    return (
        <Container size="md" className="py-12 space-y-16 min-h-screen">
            {/* Breadcrumbs */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm font-medium text-secondary">
                <Link href="/moduli" className="hover:text-foreground transition-colors flex items-center gap-1">
                    <ChevronLeft className="w-4 h-4" /> Catalogo
                </Link>
                <span>/</span>
                <span className="text-foreground line-clamp-1">{module.title}</span>
            </motion.div>

            {/* OVERVIEW HERO */}
            <motion.header 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
                {/* Left Col: Main Info */}
                <div className="lg:col-span-7 space-y-8 flex flex-col justify-center">
                    {isSensitive && (
                        <div className="bg-sos-bg border border-sos-border rounded-2xl p-4 flex items-start gap-4">
                            <div className="bg-sos/10 text-sos p-2 rounded-xl shrink-0 mt-0.5">
                                <ShieldAlert className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-semibold text-sos text-sm tracking-wide uppercase">Emergenza in corso?</h4>
                                <p className="text-sm text-sos/80 font-medium">Se ti trovi in questa situazione proprio adesso, vai direttamente all'area emergenze per indicazioni immediate su come comportarti.</p>
                                <Link href="/sos" className="text-sos font-bold text-sm inline-flex items-center gap-1 mt-1 hover:underline">
                                    Vai al Centro SOS <ChevronLeft className="w-4 h-4 rotate-180" />
                                </Link>
                            </div>
                        </div>
                    )}
                    
                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="muted" className="capitalize px-3 py-1 font-semibold">{module.difficulty}</Badge>
                            <Badge variant="outline" className="text-secondary border-border px-3 py-1 font-medium bg-surface">Modulo Formativo</Badge>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-foreground leading-[1.1]">
                            {module.title}
                        </h1>
                        <p className="text-xl text-secondary leading-relaxed max-w-2xl">
                            {module.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <Button asChild size="lg" className="rounded-xl h-14 px-8 text-base shadow-sm">
                            <Link href={`/moduli/${module.id}/lezione/1`}>
                                <Play className="w-5 h-5 mr-2 fill-current" />
                                {moduleProgress.lessonsViewed?.length > 0 ? 'Riprendi percorso' : 'Inizia percorso'}
                            </Link>
                        </Button>
                        {progressPercent > 0 && (
                            <div className="flex items-center gap-3 bg-surface border border-border px-5 h-14 rounded-xl">
                                <div className="text-sm font-medium text-secondary">Avanzamento:</div>
                                <div className="text-base font-semibold text-primary">{Math.round(progressPercent)}%</div>
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Right Col: Practical Metadata Card */}
                <div className="lg:col-span-5 flex items-center">
                    <div className="w-full bg-surface-muted/50 border border-border rounded-[2.5rem] p-8 md:p-10 space-y-8">
                        <div>
                            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Dettagli del Percorso</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="bg-background border border-border p-2.5 rounded-xl shrink-0">
                                        <Target className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div className="space-y-1 mt-1">
                                        <p className="text-sm font-semibold text-foreground leading-none">Obiettivo Pratico</p>
                                        <p className="text-sm text-secondary leading-relaxed">Fornire indicazioni chiare e applicabili immediatamente.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-background border border-border p-2.5 rounded-xl shrink-0">
                                        <Users className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div className="space-y-1 mt-1">
                                        <p className="text-sm font-semibold text-foreground leading-none">Ideale per</p>
                                        <p className="text-sm text-secondary leading-relaxed">{audience}</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-background border border-border p-2.5 rounded-xl shrink-0">
                                        <Clock className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div className="space-y-1 mt-1">
                                        <p className="text-sm font-semibold text-foreground leading-none">Tempo richiesto</p>
                                        <p className="text-sm text-secondary leading-relaxed">~{totalMinutes} minuti totali di lettura ({module.lessons.length} lezioni brevi).</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* LEARNING PATH CONTEXT */}
            {parentPaths.length > 0 && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-primary/5 border border-primary/10 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                            <BookOpen className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-sm font-bold text-primary uppercase tracking-wider">Questo modulo fa parte di un percorso</h3>
                            <p className="text-lg font-display font-semibold text-foreground">
                                {parentPaths[0].title}
                            </p>
                            <p className="text-sm text-secondary">
                                Proseguire in ordine ti aiuterà a costruire una competenza completa.
                            </p>
                        </div>
                    </div>
                    <Button asChild variant="outline" className="rounded-xl border-primary/20 text-primary hover:bg-primary/5 shrink-0">
                        <Link href={`/percorsi/${parentPaths[0].id}`}>
                            Vedi il percorso completo <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </motion.div>
            )}

            {/* LESSONS LIST */}
            <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-display font-semibold text-foreground tracking-tight">Lezioni incluse</h2>
                        <p className="text-secondary">Esplora i contenuti passo passo.</p>
                    </div>
                    
                    <div className="relative group w-full md:w-72">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Cerca una parola chiave..."
                            value={lessonSearch}
                            onChange={(e) => setLessonSearch(e.target.value)}
                            className="w-full bg-surface border border-border rounded-xl h-12 pl-11 pr-4 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-sm"
                        />
                    </div>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {filteredLessons.length > 0 ? (
                        filteredLessons.map((lesson, index) => {
                            const isLessonCompleted = moduleProgress.lessonsViewed?.includes(index);
                            return (
                                <motion.div variants={itemVariants} key={lesson.id}>
                                    <Link
                                        href={`/moduli/${module.id}/lezione/${index + 1}`}
                                        className="group block overflow-hidden rounded-[1.5rem] bg-surface border border-border hover:border-primary/40 hover:shadow-sm transition-all p-5 h-full"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 shrink-0 rounded-xl bg-background border border-border flex items-center justify-center text-sm font-semibold text-secondary group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary/20 transition-colors">
                                                {index + 1}
                                            </div>
                                            <div className="w-full">
                                                <div className="flex items-start justify-between gap-4">
                                                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">{lesson.title}</h3>
                                                    {isLessonCompleted && (
                                                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-3 text-xs font-medium text-secondary mt-3 opacity-80">
                                                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {lesson.minutes || 5} min</span>
                                                    <span className="w-1 h-1 rounded-full bg-border" />
                                                    <span className="capitalize">{lesson.difficulty}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            )
                        })
                    ) : (
                        <div className="col-span-full py-16 text-center bg-surface-muted rounded-[2rem] border border-border border-dashed">
                            <p className="text-secondary font-medium">Nessuna lezione corrisponde alla tua ricerca.</p>
                        </div>
                    )}
                </motion.div>
            </motion.section>
        </Container>
    )
}
