'use client'

import { MODULES_MAP } from '@/data/modules-meta'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Library } from 'lucide-react'

export default function ModulesPage() {
    return (
        <Container size="lg" className="py-12 space-y-12 min-h-screen text-left">
            <h1 className="text-4xl font-display font-black tracking-tight text-foreground text-left">Catalogo Guide</h1>
            <PageHeader 
                badge="Catalogo Guide"
                icon={Library}
                title="Tutte le guide pratiche"
                description="Esplora l'hub delle risorse civiche."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MODULES_MAP.map((module) => {
                    const iconName = (module.icon || 'HelpCircle') as keyof typeof Icons
                    const Icon = Icons[iconName] as React.ElementType || Icons.HelpCircle
                    return (
                        <Link key={module.id} href={`/moduli/${module.id}`} className="group">
                            <Card className="h-full p-8 flex flex-col gap-6 border-2 border-border rounded-[2.5rem] hover:shadow-xl transition-all">
                                <div className="w-14 h-14 rounded-2xl bg-surface-muted flex items-center justify-center text-primary">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h2 className="text-2xl font-black text-foreground group-hover:text-primary">{module.title}</h2>
                                <p className="text-secondary line-clamp-2">{module.description}</p>
                                <div className="flex gap-4 text-xs font-black uppercase text-secondary/50 pt-4 border-t border-border">
                                    <span>{module.lessonCount} Guide</span>
                                    <span>{Math.ceil(module.lessonCount * 5)} Min</span>
                                </div>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </Container>
    )
}
