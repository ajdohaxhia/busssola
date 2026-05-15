'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { Module } from '@/types'
import { 
  Play, Clock, 
  ShieldAlert, Users, CheckCircle, 
  ShieldCheck, AlertTriangle, Landmark, Compass, ArrowRight, Search
} from 'lucide-react'
import { useGameStore } from '@/store/useGameStore'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { SearchBox } from '@/components/ui/SearchBox'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
}

const itemVariants: Variants = {
    hidden: { y: 10, opacity: 0 },
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

    const progressPercent = moduleProgress.completed ? 100 : Math.min(100, ((moduleProgress.lessonsViewed?.filter(id => publishedLessons.some(pl => pl.id === id)).length || 0) / publishedLessons.length) * 100)
    
    const isSos = currentModule.category === 'emergenze'
    const totalMinutes = publishedLessons.reduce((acc, l) => acc + (l.estimatedMinutes || 5), 0)
    const moduleDifficulty = currentModule.difficulty ?? 'base'
    const displayTitle = currentModule.title.replace(/Modulo \d+[b]?:\s*/i, '')
    
    const categoryLabels: Record<string, string> = {
        'documenti': 'Documenti e Identità',
        'lavoro': 'Lavoro e INPS',
        'casa': 'Casa e Residenza',
        'soldi': 'Soldi e Banche',
        'bonus': 'Bonus e ISEE',
        'sanita': 'Sanità',
        'famiglia': 'Scuola e Famiglia',
        'sicurezza': 'Privacy e Account',
        'truffe': 'Truffe e Phishing',
        'emergenze': 'SOS Digitali',
    }
    const categoryName = currentModule.category ? categoryLabels[currentModule.category as string] || currentModule.category : 'Guida'

    const audience = moduleDifficulty === 'base'
        ? "Per tutti, inclusi ragazzi e principianti." 
        : moduleDifficulty === 'intermedia'
        ? "Utenti regolari, famiglie e giovani adulti." 
        : "Utenti più esperti, educatori o chi cerca tutele avanzate."

    return (
        <Container size="lg" className="py-12 space-y-12 min-h-screen">
            <Breadcrumbs 
                items={[
                    { label: 'Catalogo', href: '/moduli' },
                    { label: categoryName, href: `/moduli?cat=${currentModule.category}` },
                    { label: displayTitle, href: '#' }
                ]}
            />

            {/* OVERVIEW HERO */}
            <motion.header 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
            >
                {/* Left Col: Main Info */}
                <div className="lg:col-span-7 space-y-10 flex flex-col justify-center text-left">
                    {isSos && (
                        <div className="bg-sos text-white rounded-[2rem] p-8 flex items-start gap-6 shadow-xl shadow-sos/20">
                            <div className="bg-white/20 p-4 rounded-2xl shrink-0">
                                <ShieldAlert className="w-8 h-8" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-black uppercase tracking-widest text-xs opacity-70">Emergenza in corso?</h4>
                                <p className="text-xl font-bold leading-tight">Segui i protocolli di reazione immediata con calma.</p>
                                <Link href="/sos" className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-xs bg-white text-sos px-4 py-2 rounded-xl mt-2 hover:bg-white/90 transition-all">
                                    Vai al Centro SOS <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    )}
                    
                    <div className="space-y-6">
                        <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="muted" className="px-3 py-1 font-black uppercase tracking-widest text-[10px]">{moduleDifficulty}</Badge>
                            <Badge variant="outline" className="text-primary border-primary/20 px-3 py-1 font-black uppercase tracking-widest text-[10px] bg-primary/5 flex items-center gap-1.5 shadow-sm">
                              <ShieldCheck className="w-3.5 h-3.5" /> Verificato
                            </Badge>
                        </div>

                        <h1 className="text-4xl md:text-7xl font-display font-black tracking-tight text-foreground leading-[1.05]">
                            {displayTitle}
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary leading-relaxed font-medium max-w-2xl">
                            {currentModule.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        {publishedLessons.length > 0 ? (
                          <Button asChild size="lg" className="rounded-2xl h-16 px-10 text-lg shadow-2xl shadow-primary/30 font-black uppercase tracking-widest active:scale-95 transition-all">
                              <Link href={`/moduli/${currentModule.id}/lezione/1`}>
                                  <Play className="w-5 h-5 mr-3 fill-current" />
                                  {(moduleProgress.lessonsViewed?.length || 0) > 0 ? 'Riprendi' : 'Inizia Ora'}
                              </Link>
                          </Button>
                        ) : (
                          <div className="bg-surface-muted border-2 border-dashed border-border p-6 rounded-2xl text-secondary flex items-center gap-3 font-bold">
                            <AlertTriangle className="w-6 h-6" /> Modulo in fase di revisione
                          </div>
                        )}
                        
                        {progressPercent > 0 && (
                            <div className="flex flex-col gap-1 px-6 py-3 bg-surface border border-border rounded-2xl shadow-sm">
                                <span className="text-[10px] font-black uppercase tracking-widest text-secondary/40">Progresso</span>
                                <div className="flex items-center gap-3">
                                    <div className="w-32 h-2 bg-surface-muted rounded-full overflow-hidden text-left">
                                        <div className="h-full bg-primary" style={{ width: `${progressPercent}%` }} />
                                    </div>
                                    <span className="text-sm font-black text-primary">{Math.round(progressPercent)}%</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Right Col: Practical Metadata Card */}
                <div className="lg:col-span-5">
                    <div className="w-full bg-surface border border-border rounded-[3rem] p-10 space-y-10 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform">
                            <Compass size={200} />
                        </div>
                        <div className="relative z-10 space-y-8">
                            <h3 className="text-xs font-black text-secondary/40 uppercase tracking-[0.3em] border-b border-border pb-4">Info Utili</h3>
                            <ul className="space-y-8 m-0 p-0 list-none text-left">
                                <li className="flex items-start gap-5">
                                    <div className="bg-primary/5 border border-primary/10 p-3 rounded-2xl shrink-0 text-primary">
                                        <Users className="w-6 h-6" strokeWidth={2.5} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-black text-foreground uppercase tracking-wider">Per chi è</p>
                                        <p className="text-sm text-secondary leading-relaxed font-medium">{audience}</p>
                                    </div>
                                </li>
                                {currentModule.mainEntity && (
                                    <li className="flex items-start gap-5">
                                        <div className="bg-primary/5 border border-primary/10 p-3 rounded-2xl shrink-0 text-primary">
                                            <Landmark className="w-6 h-6" strokeWidth={2.5} />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-sm font-black text-foreground uppercase tracking-wider">Ente Principale</p>
                                            <p className="text-sm text-secondary leading-relaxed font-medium">{currentModule.mainEntity}</p>
                                        </div>
                                    </li>
                                )}
                                <li className="flex items-start gap-5">
                                    <div className="bg-primary/5 border border-primary/10 p-3 rounded-2xl shrink-0 text-primary">
                                        <Clock className="w-6 h-6" strokeWidth={2.5} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-black text-foreground uppercase tracking-wider">Tempo stimato</p>
                                        <p className="text-sm text-secondary leading-relaxed font-medium">Circa {totalMinutes} minuti per completare le {publishedLessons.length} guide.</p>
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
                className="space-y-10"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-border">
                    <div className="space-y-2 text-left">
                        <h2 className="text-3xl font-display font-black text-foreground tracking-tight uppercase tracking-tighter">Piano delle guide</h2>
                        <p className="text-lg text-secondary font-medium">Segui l'ordine cronologico o cerca una scheda specifica.</p>
                    </div>
                    
                    <div className="w-full md:w-80">
                        <SearchBox value={lessonSearch} onChange={setLessonSearch} placeholder="Cerca nella guida..." />
                    </div>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {filteredLessons.length > 0 ? (
                        filteredLessons.map((lesson, idx) => {
                            const isLessonCompleted = (moduleProgress.lessonsViewed || []).includes(lesson.id);
                            return (
                                <motion.div variants={itemVariants} key={lesson.id}>
                                    <Link
                                        href={`/moduli/${currentModule.id}/lezione/${idx + 1}`}
                                        className="group block overflow-hidden rounded-[2.5rem] bg-surface border-2 border-border hover:border-primary/40 hover:shadow-2xl transition-all p-8 h-full relative"
                                    >
                                        <div className="flex items-start gap-6 text-left">
                                            <div className="w-12 h-12 shrink-0 rounded-2xl bg-surface-muted border-2 border-border flex items-center justify-center text-lg font-black text-secondary/40 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all shadow-inner">
                                                {idx + 1}
                                            </div>
                                            <div className="w-full space-y-4">
                                                <div className="flex items-start justify-between gap-4 text-left">
                                                    <h3 className="font-display font-black text-foreground group-hover:text-primary transition-colors leading-tight text-xl tracking-tight">{lesson.title}</h3>
                                                    {isLessonCompleted && (
                                                        <div className="bg-emerald-100 text-emerald-600 p-1.5 rounded-full shrink-0 shadow-sm border border-emerald-200">
                                                          <CheckCircle className="w-4 h-4" strokeWidth={3} />
                                                        </div>
                                                    )}
                                                </div>
                                                <p className="text-base text-secondary line-clamp-2 leading-relaxed font-medium opacity-80">
                                                  {lesson.summary}
                                                </p>
                                                <div className="flex items-center gap-4 text-[10px] font-black text-secondary/40 pt-2 uppercase tracking-widest">
                                                    <span className="flex items-center gap-1.5 bg-surface-muted px-2 py-1 rounded-md shadow-sm border border-border/60"><Clock className="w-3.5 h-3.5" /> {lesson.estimatedMinutes} MIN</span>
                                                    <span className="flex items-center gap-1.5 bg-surface-muted px-2 py-1 rounded-md shadow-sm border border-border/60"><Compass className="w-3.5 h-3.5" /> {lesson.level}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            )
                        })
                    ) : (
                        <div className="col-span-full py-24 text-center bg-surface border-4 border-dashed border-border rounded-[4rem]">
                            <div className="w-20 h-20 bg-surface-muted flex items-center justify-center rounded-full mx-auto mb-6 text-secondary/20">
                                <Search size={64} />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">Nessuna scheda trovata</h3>
                            <p className="text-secondary font-medium">Prova a cambiare i termini della ricerca.</p>
                        </div>
                    )}
                </motion.div>
            </motion.section>

            {/* REVISION FOOTER */}
            {publishedLessons.length < currentModule.lessons.length && (
              <div className="bg-amber-50/50 border-2 border-amber-100 rounded-[2.5rem] p-8 text-center shadow-sm">
                <p className="text-sm text-amber-900/60 font-bold uppercase tracking-widest flex items-center justify-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500" /> Nota sulla pubblicazione
                </p>
                <p className="text-sm text-amber-900/60 font-medium mt-2">
                  Alcune lezioni di questo modulo sono attualmente in fase di revisione fonti (Quality Gate) e verranno pubblicate a breve.
                </p>
              </div>
            )}
        </Container>
    )
}
