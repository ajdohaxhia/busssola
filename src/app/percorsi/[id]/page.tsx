import { LEARNING_PATHS } from '@/data/paths'
import { MODULES_MAP } from '@/data/modules-meta'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Clock, Users, BookOpen, ShieldCheck } from 'lucide-react'
import type { LearningPath, ModuleMetadata } from '@/types'
import type { Metadata } from 'next'
import { learningPathMetadata } from '@/lib/seo'

function isModuleMetadata(module: ModuleMetadata | undefined): module is ModuleMetadata {
    return Boolean(module)
}

function isLearningPath(path: LearningPath | undefined): path is LearningPath {
    return Boolean(path)
}

export function generateStaticParams() {
    return LEARNING_PATHS.map((path) => ({
        id: path.id,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params

    return learningPathMetadata(id) ?? {
        title: 'Percorso non trovato',
        robots: { index: false, follow: false },
    }
}

export default async function PathDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const path = LEARNING_PATHS.find((p) => p.id === id)

    if (!path) {
        notFound()
    }

    const pathModules = path.moduleIds.map(moduleId =>
        MODULES_MAP.find(m => m.id === moduleId)
    ).filter(isModuleMetadata)

    const relatedPaths = path.relatedPathIds.map(relatedId =>
        LEARNING_PATHS.find(p => p.id === relatedId)
    ).filter(isLearningPath)

    return (
        <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
            <Link 
                href="/percorsi" 
                className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-8 group"
            >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Torna a tutti i percorsi
            </Link>

            <header className="space-y-8">
                <div className="space-y-4">
                    <Badge variant="outline" className="rounded-full px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-wider text-xs font-bold">
                        Percorso {path.type}
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground">
                        {path.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary leading-relaxed max-w-3xl">
                        {path.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-6 border-y border-border py-6">
                    <div className="flex items-center gap-2 text-foreground font-medium">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>Durata stimata: <span className="text-secondary">{path.estimatedDuration}</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground font-medium">
                        <Users className="w-5 h-5 text-primary" />
                        <span>Pubblico: <span className="text-secondary">{path.audience}</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground font-medium">
                        <BookOpen className="w-5 h-5 text-primary" />
                        <span>Contenuto: <span className="text-secondary">{path.moduleIds.length} Moduli</span></span>
                    </div>
                </div>
            </header>

            <section className="space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">I passi del percorso</h2>
                    <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-emerald-100">
                        {pathModules.length} tappe ordinate
                    </Badge>
                </div>

                <div className="space-y-4">
                    {pathModules.map((module, index) => (
                        <Link href={`/moduli/${module.id}`} key={module.id} className="group block">
                            <Card className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border border-border bg-surface hover:border-primary/40 hover:shadow-md transition-all rounded-[1.5rem]">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-primary/20 text-primary font-display font-bold text-xl shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                    {index + 1}
                                </div>
                                <div className="flex-1 text-center md:text-left space-y-1">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {module.title}
                                    </h3>
                                    <p className="text-secondary leading-relaxed line-clamp-2">
                                        {module.description}
                                    </p>
                                </div>
                                <div className="hidden md:flex items-center gap-2 text-primary font-semibold">
                                    Inizia <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="pt-8">
                    <Button asChild size="lg" className="w-full md:w-auto rounded-xl h-14 px-10 text-lg font-bold shadow-lg shadow-primary/20">
                        <Link href={`/moduli/${pathModules[0]?.id}`}>
                            {path.cta}
                        </Link>
                    </Button>
                </div>
            </section>

            {relatedPaths.length > 0 && (
                <section className="space-y-8 pt-12 border-t border-border">
                    <h3 className="text-2xl font-display font-bold tracking-tight italic text-secondary">Potrebbe interessarti anche...</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {relatedPaths.map((related) => (
                            <Link href={`/percorsi/${related.id}`} key={related.id} className="group">
                                <Card className="p-6 border border-border bg-surface hover:border-foreground/20 transition-all rounded-2xl flex justify-between items-center">
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{related.title}</h4>
                                        <p className="text-sm text-secondary">{related.estimatedDuration}</p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-secondary group-hover:text-primary transition-all" />
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            <div className="bg-primary/5 rounded-[2rem] p-8 md:p-12 text-center space-y-4">
                <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold">Hai bisogno di supporto personalizzato?</h3>
                <p className="text-secondary max-w-xl mx-auto">
                    Se durante questo percorso incontri argomenti che ti preoccupano o se stai vivendo una situazione difficile, non esitare a contattarci o a consultare l'Area SOS.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button asChild variant="outline" className="rounded-xl">
                        <Link href="/contact">Contatta un esperto</Link>
                    </Button>
                    <Button asChild variant="destructive" className="rounded-xl">
                        <Link href="/sos">Vedi Area SOS</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
