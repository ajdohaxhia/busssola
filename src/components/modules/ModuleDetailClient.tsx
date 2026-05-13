'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { Module } from '@/types'
import { 
  ChevronLeft, Play, Search, Clock, 
  ShieldAlert, Users, CheckCircle, 
  ShieldCheck, AlertTriangle
} from 'lucide-react'
import { useGameStore } from '@/store/useGameStore'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
}

interface ModuleDetailClientProps {
    currentModule: Module;
}

export default function ModuleDetailClient({ currentModule }: ModuleDetailClientProps) {
    const { modules: progress } = useGameStore()
    const moduleProgress = currentModule
        ? progress[currentModule.id] || { completed: false, lastPlayed: null, lessonsViewed: [] }
        : { completed: false, lastPlayed: null, lessonsViewed: [] }

    const [lessonSearch, setLessonSearch] = useState('')

    // ONLY SHOW PUBLISHED LESSONS
    const publishedLessons = currentModule.lessons.filter(l => l.status === 'published' && l.qualityGatePassed)
    
    const filteredLessons = publishedLessons.filter(l =>
        l.title.toLowerCase().includes(lessonSearch.toLowerCase())
    )

    const progressPercent = moduleProgress.completed ? 100 : Math.min(100, (moduleProgress.lessonsViewed?.filter(id => publishedLessons.some(pl => pl.id === id)).length || 0) / publishedLessons.length * 100)
    
    const isSos = currentModule.category === 'first-aid' || currentModule.category === 'sextortion'
    const totalMinutes = publishedLessons.reduce((acc, l) => acc + (l.estimatedMinutes || 5), 0)
    const moduleDifficulty = currentModule.difficulty ?? 'base'
    const displayTitle = currentModule.title.replace(/Modulo \d+[b]?:\s*/i, '')
    
    const audience = moduleDifficulty === 'base'
        ? "Per tutti, inclusi ragazzi e principianti." 
        : moduleDifficulty === 'intermedia'
        ? "Utenti regolari, famiglie e giovani adulti." 
        : "Utenti più esperti, educatori o chi cerca tutele avanzate."

    return (
        <Container size="md" className="py-12 space-y-16 min-h-screen">
            {/* Breadcrumbs */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm font-medium text-secondary">
                <Link href="/moduli" className="hover:text-foreground transition-colors flex items-center gap-1">
                    <ChevronLeft className="w-4 h-4" /> Catalogo
                </Link>
                <span>/</span>
                <span className="text-foreground line-clamp-1">{displayTitle}</span>
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
                    {isSos && (
                        <div className="bg-sos-bg border border-sos-border rounded-2xl p-4 flex items-start gap-4">
                            <div className="bg-sos/10 text-sos p-2 rounded-xl shrink-0 mt-0.5">
                                <ShieldAlert className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-semibold text-sos text-sm tracking-wide uppercase">Emergenza in corso?</h4>
                                <p className="text-sm text-sos/80 font-medium">Queste guide sono prioritarie. Segui i protocolli con calma e non agire d'impulso.</p>
                                <Link href="/sos" className="text-sos font-bold text-sm inline-flex items-center gap-1 mt-1 hover:underline">
                                    Vai al Centro SOS <ChevronLeft className="w-4 h-4 rotate-180" />
                                </Link>
                            </div>
                        </div>
                    )}
                    
                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="muted" className="capitalize px-3 py-1 font-bold">{moduleDifficulty}</Badge>
                            <Badge variant="outline" className="text-primary border-primary/20 px-3 py-1 font-bold bg-primary/5 flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5" /> Contenuto Verificato
                            </Badge>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground leading-[1.1]">
                            {displayTitle}
                        </h1>
                        <p className="text-xl text-secondary leading-relaxed max-w-2xl font-medium">
                            {currentModule.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        {publishedLessons.length > 0 ? (
                          <Button asChild size="lg" className="rounded-xl h-14 px-8 text-base shadow-lg shadow-primary/20 font-bold">
                              <Link href={`/moduli/${currentModule.id}/lezione/1`}>
                                  <Play className="w-5 h-5 mr-2 fill-current" />
                                  {moduleProgress.lessonsViewed?.length > 0 ? 'Riprendi percorso' : 'Inizia percorso'}
                              </Link>
                          </Button>
                        ) : (
                          <div className="bg-surface-muted border border-border p-4 rounded-xl text-secondary flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5" /> Modulo in fase di revisione fonti
                          </div>
                        )}
                        
                        {progressPercent > 0 && (
                            <div className="flex items-center gap-3 bg-surface border border-border px-5 h-14 rounded-xl">
                                <div className="text-sm font-medium text-secondary">Avanzamento:</div>
                                <div className="text-base font-bold text-primary">{Math.round(progressPercent)}%</div>
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Right Col: Practical Metadata Card */}
                <div className="lg:col-span-5 flex items-center">
                    <div className="w-full bg-surface border border-border rounded-[2.5rem] p-8 md:p-10 space-y-8 shadow-sm">
                        <div>
                            <h3 className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-6">Qualità e Fiducia</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="bg-primary/5 border border-primary/10 p-2.5 rounded-xl shrink-0">
                                        <ShieldCheck className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="space-y-1 mt-1">
                                        <p className="text-sm font-bold text-foreground leading-none">Fonti Verificate</p>
                                        <p className="text-xs text-secondary leading-relaxed">Solo procedure ufficiali e fonti istituzionali.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-background border border-border p-2.5 rounded-xl shrink-0">
                                        <Users className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div className="space-y-1 mt-1">
                                        <p className="text-sm font-bold text-foreground leading-none">Target</p>
                                        <p className="text-xs text-secondary leading-relaxed">{audience}</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-background border border-border p-2.5 rounded-xl shrink-0">
                                        <Clock className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div className="space-y-1 mt-1">
                                        <p className="text-sm font-bold text-foreground leading-none">Impegno</p>
                                        <p className="text-xs text-secondary leading-relaxed">~{totalMinutes} min ({publishedLessons.length} lezioni pubblicate).</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* LESSONS LIST */}
            <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-display font-bold text-foreground tracking-tight">Piano di Studio</h2>
                        <p className="text-secondary font-medium">Procedure verificate disponibili.</p>
                    </div>
                    
                    <div className="relative group w-full md:w-72">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Cerca argomento..."
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
                        filteredLessons.map((lesson, idx) => {
                            const isLessonCompleted = moduleProgress.lessonsViewed.includes(lesson.id);
                            return (
                                <motion.div variants={itemVariants} key={lesson.id}>
                                    <Link
                                        href={`/moduli/${currentModule.id}/lezione/${idx + 1}`}
                                        className="group block overflow-hidden rounded-3xl bg-surface border border-border hover:border-primary/40 hover:shadow-xl transition-all p-6 h-full relative"
                                    >
                                        <div className="flex items-start gap-5">
                                            <div className="w-10 h-10 shrink-0 rounded-xl bg-background border border-border flex items-center justify-center text-sm font-bold text-secondary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                                {idx + 1}
                                            </div>
                                            <div className="w-full space-y-2">
                                                <div className="flex items-start justify-between gap-4">
                                                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors leading-tight text-lg">{lesson.title}</h3>
                                                    {isLessonCompleted && (
                                                        <div className="bg-emerald-100 text-emerald-600 p-1 rounded-full shrink-0">
                                                          <CheckCircle className="w-4 h-4" />
                                                        </div>
                                                    )}
                                                </div>
                                                <p className="text-sm text-secondary line-clamp-2 leading-relaxed font-medium opacity-80">
                                                  {lesson.summary}
                                                </p>
                                                <div className="flex items-center gap-3 text-xs font-bold text-secondary/60 pt-2 uppercase tracking-tighter">
                                                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {lesson.estimatedMinutes} MIN</span>
                                                    <span className="w-1 h-1 rounded-full bg-border" />
                                                    <span>{lesson.level}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            )
                        })
                    ) : (
                        <div className="col-span-full py-16 text-center bg-surface-muted/30 rounded-[3rem] border border-border border-dashed">
                            <p className="text-secondary font-semibold">Stiamo verificando nuove lezioni per questo modulo.</p>
                        </div>
                    )}
                </motion.div>
            </motion.section>

            {/* REVISION FOOTER */}
            {publishedLessons.length < currentModule.lessons.length && (
              <div className="bg-surface-muted/30 border border-border rounded-3xl p-6 text-center">
                <p className="text-xs text-secondary/60 font-medium">
                  Nota: Alcune lezioni di questo modulo sono attualmente in fase di revisione fonti (Quality Gate) e verranno pubblicate a breve.
                </p>
              </div>
            )}
        </Container>
    )
}
