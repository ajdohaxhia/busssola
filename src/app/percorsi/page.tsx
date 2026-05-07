import { LEARNING_PATHS } from '@/data/paths'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { ArrowRight, Clock, Users, ShieldCheck, Lock, ShieldAlert, GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'

const ICON_MAP = {
    onboarding: ShieldCheck,
    security: Lock,
    relational: Users,
    emergency: ShieldAlert,
    audience: GraduationCap,
}

const COLOR_MAP = {
    onboarding: 'text-primary bg-primary/10 border-primary/20 hover:border-primary/50',
    security: 'text-indigo-600 bg-indigo-50 border-indigo-100 hover:border-indigo-400',
    relational: 'text-emerald-600 bg-emerald-50 border-emerald-100 hover:border-emerald-400',
    emergency: 'text-sos bg-sos/10 border-sos-border hover:border-sos',
    audience: 'text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100 hover:border-fuchsia-400',
}

export default function PercorsiPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
            <header className="space-y-4 max-w-3xl">
                <Badge variant="outline" className="rounded-full px-4 py-1 text-primary border-primary/20 bg-primary/5">
                    Guida passo dopo passo
                </Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground">
                    Percorsi Consigliati
                </h1>
                <p className="text-xl text-secondary leading-relaxed">
                    Non perderti nel catalogo. Abbiamo selezionato e ordinato i moduli migliori per creare dei percorsi di apprendimento coerenti, adatti alla tua situazione o al tuo ruolo.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {LEARNING_PATHS.map((path) => {
                    const Icon = ICON_MAP[path.type] || ShieldCheck
                    const colors = COLOR_MAP[path.type] || COLOR_MAP.onboarding

                    return (
                        <Link href={`/percorsi/${path.id}`} key={path.id} className="group">
                            <Card className={cn(
                                "h-full flex flex-col border p-8 rounded-[2rem] bg-surface transition-all shadow-sm space-y-6",
                                colors.split(' ').pop() // Use the last class (hover:border-*)
                            )}>
                                <div className="flex justify-between items-start">
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-foreground group-hover:text-background",
                                        colors.split(' ')[0], 
                                        colors.split(' ')[1]
                                    )}>
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <Badge variant="outline" className="capitalize rounded-full px-3 py-1 font-medium">
                                        {path.level}
                                    </Badge>
                                </div>

                                <div className="space-y-4 flex-1">
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-display font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                                            {path.title}
                                        </h2>
                                        <p className="text-secondary leading-relaxed">
                                            {path.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4 pt-4">
                                        <div className="flex items-center gap-1.5 text-sm text-secondary bg-background px-3 py-1.5 rounded-lg border border-border">
                                            <Clock className="w-4 h-4" />
                                            {path.estimatedDuration}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm text-secondary bg-background px-3 py-1.5 rounded-lg border border-border">
                                            <Users className="w-4 h-4" />
                                            {path.audience}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm text-secondary bg-background px-3 py-1.5 rounded-lg border border-border">
                                            <Badge variant="outline" className="border-none p-0 h-auto text-xs font-bold text-foreground/50">
                                                {path.moduleIds.length} MODULI
                                            </Badge>
                                        </div>
                                    </div>
                                </div>

                                <div className={cn(
                                    "flex items-center font-semibold text-lg pt-4",
                                    colors.split(' ')[0]
                                )}>
                                    {path.cta} <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Card>
                        </Link>
                    )
                })}
            </div>

            <section className="bg-foreground text-background rounded-[3rem] p-12 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
                    <ShieldCheck size={300} />
                </div>
                <div className="max-w-2xl space-y-6 relative z-10">
                    <h3 className="text-3xl font-display font-bold text-white">Preferisci esplorare da solo?</h3>
                    <p className="text-background/80 text-lg">
                        Se cerchi un argomento specifico o vuoi vedere l'elenco completo dei 50 moduli di Busssola, puoi consultare il nostro catalogo completo e filtrabile.
                    </p>
                    <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-xl h-14 px-8 font-semibold">
                        <Link href="/moduli">Vai al catalogo completo</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
