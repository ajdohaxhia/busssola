'use client'

import { LEARNING_PATHS } from '@/data/paths'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { ArrowRight, Clock, Users, ShieldCheck, Lock, ShieldAlert, GraduationCap, Briefcase, User, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PageHeader } from '@/components/ui/PageHeader'
import * as Icons from 'lucide-react'
import { Container } from '@/components/ui/Container'

const ICON_MAP: Record<string, React.ElementType> = {
    onboarding: ShieldCheck,
    security: Lock,
    relational: Users,
    emergency: ShieldAlert,
    audience: GraduationCap,
    citizen: User,
    worker: Briefcase,
    parent: Heart,
    student: GraduationCap
}

const COLOR_MAP: Record<string, string> = {
    onboarding: 'text-primary bg-primary/10 border-primary/20 hover:border-primary/50',
    security: 'text-indigo-600 bg-indigo-50 border-indigo-100 hover:border-indigo-400',
    relational: 'text-emerald-600 bg-emerald-50 border-emerald-100 hover:border-emerald-400',
    emergency: 'text-sos bg-sos/10 border-sos-border hover:border-sos',
    audience: 'text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100 hover:border-fuchsia-400',
    citizen: 'text-blue-600 bg-blue-50 border-blue-100 hover:border-blue-400',
    worker: 'text-cyan-600 bg-cyan-50 border-cyan-100 hover:border-cyan-400',
    parent: 'text-orange-600 bg-orange-50 border-orange-100 hover:border-orange-400',
    student: 'text-violet-600 bg-violet-50 border-violet-100 hover:border-violet-400'
}

export default function PercorsiPage() {
    return (
        <Container size="lg" className="py-12 space-y-16">
            <PageHeader 
                badge="Percorsi Passo-Passo"
                icon={Icons.Navigation}
                title="Trova la situazione più vicina alla tua"
                description="Abbiamo raggruppato le guide per aiutarti a trovare più velocemente le informazioni giuste, in base a ciò che stai attraversando."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {LEARNING_PATHS.map((path) => {
                    const Icon = ICON_MAP[path.type] || ShieldCheck
                    const colors = COLOR_MAP[path.type] || COLOR_MAP.onboarding

                    return (
                        <Link href={`/percorsi/${path.id}`} key={path.id} className="group">
                            <Card className={cn(
                                "h-full flex flex-col border-2 p-10 rounded-[3rem] bg-surface transition-all shadow-sm space-y-8 group-hover:shadow-2xl group-hover:border-primary/20",
                            )}>
                                <div className="flex justify-between items-start">
                                    <div className={cn(
                                        "w-16 h-16 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white group-hover:rotate-3",
                                        colors.split(' ')[0], 
                                        colors.split(' ')[1]
                                    )}>
                                        <Icon className="w-8 h-8" strokeWidth={2.5} />
                                    </div>
                                    <Badge variant="muted" className="capitalize rounded-lg px-3 py-1 font-black text-[10px] uppercase tracking-widest">
                                        {path.level}
                                    </Badge>
                                </div>

                                <div className="space-y-6 flex-1 text-left">
                                    <div className="space-y-3">
                                        <h2 className="text-3xl font-display font-black text-foreground group-hover:text-primary transition-colors tracking-tight">
                                            {path.title}
                                        </h2>
                                        <p className="text-lg text-secondary leading-relaxed font-medium">
                                            {path.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-3 pt-4">
                                        <div className="flex items-center gap-2 text-xs font-bold text-secondary/60 bg-surface-muted px-3 py-2 rounded-xl border border-border/60 shadow-sm">
                                            <Clock className="w-4 h-4" />
                                            {path.estimatedDuration}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-bold text-secondary/60 bg-surface-muted px-3 py-2 rounded-xl border border-border/60 shadow-sm">
                                            <Users className="w-4 h-4" />
                                            {path.audience}
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-black text-primary bg-primary/5 px-3 py-2 rounded-xl border border-primary/10 tracking-widest uppercase shadow-sm">
                                            {path.moduleIds.length} GUIDE
                                        </div>
                                    </div>
                                </div>

                                <div className={cn(
                                    "flex items-center font-black uppercase tracking-[0.2em] text-[11px] pt-6 border-t border-border/40",
                                    colors.split(' ')[0]
                                )}>
                                    Apri percorso <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                                </div>
                            </Card>
                        </Link>
                    )
                })}
            </div>

            <section className="bg-foreground text-background rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center space-y-10">
                <div className="absolute top-0 right-0 p-24 opacity-[0.05] pointer-events-none">
                    <ShieldCheck size={400} />
                </div>
                <div className="max-w-2xl mx-auto space-y-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight leading-tight">Preferisci esplorare da solo?</h2>
                    <p className="text-white/60 text-xl font-medium">
                        Se cerchi un argomento specifico, puoi sfogliare l'elenco di tutte le guide disponibili nel nostro catalogo completo.
                    </p>
                    <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90 rounded-2xl h-16 px-10 font-black uppercase tracking-widest active:scale-95 transition-all">
                        <Link href="/moduli">Vai al Catalogo</Link>
                    </Button>
                </div>
            </section>
        </Container>
    )
}
