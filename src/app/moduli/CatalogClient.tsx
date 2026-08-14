'use client'

import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import { MODULES_MAP } from '@/data/modules-meta'
import { ALL_MODULES } from '@/data/modules/index'
import { Card } from '@/components/ui/Card'
import { GuideSearch } from '@/components/ui/GuideSearch'

export function CatalogClient() {
    const params = useSearchParams()
    const q = (params.get('q') || '').trim().toLowerCase()

    const modules = useMemo(() => {
        if (!q) return MODULES_MAP
        return MODULES_MAP.filter((mod) => {
            const full = ALL_MODULES.find((m) => m.id === mod.id)
            const lessonText = full?.lessons.map((l) => `${l.title} ${l.summary} ${l.tags?.join(' ') ?? ''}`).join(' ') ?? ''
            const hay = `${mod.title} ${mod.description} ${mod.tags?.join(' ') ?? ''} ${lessonText}`.toLowerCase()
            return hay.includes(q)
        })
    }, [q])

    return (
        <div className="space-y-8">
            {q && (
                <p className="text-secondary">{modules.length} risultati per “{q}”.</p>
            )}
            <GuideSearch initialQuery={q} variant="bar" />
            <div className="grid md:grid-cols-2 gap-4">
                {modules.map((module) => {
                    const iconName = (module.icon || 'HelpCircle') as keyof typeof Icons
                    const Icon = (Icons[iconName] as React.ElementType) || Icons.HelpCircle
                    return (
                        <Link key={module.id} href={`/moduli/${module.id}/`}>
                            <Card className="h-full p-6 space-y-3">
                                <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                                <h2 className="text-xl font-display font-semibold">{module.title}</h2>
                                <p className="text-sm text-secondary line-clamp-2">{module.description}</p>
                                <p className="text-xs text-muted">{module.lessonCount} schede</p>
                            </Card>
                        </Link>
                    )
                })}
            </div>
            {modules.length === 0 && (
                <p className="text-secondary">Nessuna guida trovata. Prova ISEE, 730, NASpI o SPID.</p>
            )}
        </div>
    )
}
