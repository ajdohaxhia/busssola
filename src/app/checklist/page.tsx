
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ALL_MODULES } from '@/data/modules/index'
import { CheckSquare, ArrowRight, ShieldCheck, Smartphone, Lock } from 'lucide-react'
import Link from 'next/link'

export default function ChecklistPage() {
    // Collect all checklists from all lessons
    const checklists = ALL_MODULES.flatMap(m => 
        m.lessons
            .filter(l => l.status === 'published' && l.checklist && l.checklist.length > 0)
            .map(l => ({
                id: l.id,
                title: l.title,
                items: l.checklist,
                moduleId: m.id,
                moduleTitle: m.title.replace(/Modulo \d+[b]?:\s*/i, ''),
                category: l.category
            }))
    );

    return (
        <Container size="lg" className="py-16 space-y-12">
            <header className="space-y-4 max-w-2xl">
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">Strumenti Operativi</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">Checklist di Sicurezza</h1>
                <p className="text-xl text-secondary leading-relaxed">
                    Protocolli rapidi da seguire passo dopo passo. Mobile-first, azionabili e pronti all'uso per gestire ogni situazione digitale.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {checklists.map((check) => (
                    <Card key={check.id} className="p-8 border border-border bg-surface hover:shadow-md transition-all flex flex-col justify-between rounded-[2rem]">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-primary">
                                    <CheckSquare className="w-6 h-6" />
                                    <span className="text-xs font-bold uppercase tracking-widest">{check.moduleTitle}</span>
                                </div>
                                <Badge variant="secondary" className="text-[10px]">{check.category}</Badge>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-foreground leading-tight">{check.title}</h3>
                            
                            <ul className="space-y-4">
                                {check.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group">
                                        <div className="mt-1.5 w-5 h-5 rounded border border-primary/30 flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                                            <div className="w-2.5 h-2.5 rounded-sm bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <span className="text-secondary leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="pt-8 mt-auto">
                            <Link 
                                href={`/moduli/${check.moduleId}`} 
                                className="inline-flex items-center text-sm font-bold text-primary hover:underline group"
                            >
                                Vai alla guida completa <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>

            <section className="bg-foreground text-background rounded-[2rem] p-8 md:p-12 space-y-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl font-display font-bold text-white mb-4">Perché queste checklist?</h2>
                    <p className="text-white/80 leading-relaxed">
                        In una crisi digitale, la memoria è la prima cosa a fallire. Abbiamo creato queste liste di controllo per aiutarti a mantenere la calma e seguire i protocolli verificati dalla Polizia Postale e dai maggiori esperti di sicurezza, senza saltare passaggi critici.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/10 text-white">
                            <Smartphone className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-white">Mobile First</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/10 text-white">
                            <Lock className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-white">Protocolli Sicuri</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/10 text-white">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-white">Azioni Verificate</span>
                    </div>
                </div>
            </section>
        </Container>
    )
}
