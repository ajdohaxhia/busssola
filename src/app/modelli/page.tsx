'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { FileText, Printer } from 'lucide-react'
import { CIVIC_TEMPLATES } from '@/data/templates'
import { PageHeader } from '@/components/ui/PageHeader'
import { SearchBox } from '@/components/ui/SearchBox'
import { Card } from '@/components/ui/Card'
import type { CategoryID } from '@/types'

const CATS: { id: CategoryID | 'all'; label: string }[] = [
    { id: 'all', label: 'Tutti' },
    { id: 'soldi', label: 'Fisco' },
    { id: 'bonus', label: 'ISEE e bonus' },
    { id: 'lavoro', label: 'Lavoro' },
    { id: 'documenti', label: 'Documenti' },
    { id: 'casa', label: 'Casa' },
    { id: 'emergenze', label: 'Urgenze' },
    { id: 'immigrazione', label: 'Immigrazione' },
    { id: 'sanita', label: 'Sanità' },
]

export default function ModelliPage() {
    const [q, setQ] = useState('')
    const [cat, setCat] = useState<CategoryID | 'all'>('all')
    const list = useMemo(() => {
        return CIVIC_TEMPLATES.filter((t) => {
            const hay = `${t.title} ${t.summary} ${t.shortTitle}`.toLowerCase()
            return (cat === 'all' || t.category === cat) && hay.includes(q.toLowerCase())
        })
    }, [q, cat])

    return (
        <div className="space-y-10 py-8">
            <PageHeader
                badge="Modelli"
                icon={FileText}
                title="Kit documentali, non moduli ufficiali"
                description="Liste di documenti e passi per 730, ISEE, NASpI, SPID, residenza e altre pratiche. Ogni kit cita fonti istituzionali. Non sono PDF dell’INPS o dell’Agenzia delle Entrate."
            />
            <SearchBox value={q} onChange={setQ} placeholder="Cerca: 730, ISEE, passaporto…" />
            <div className="flex flex-wrap gap-2">
                {CATS.map((c) => (
                    <button
                        key={c.id}
                        type="button"
                        onClick={() => setCat(c.id)}
                        className={`px-3 py-1.5 rounded-full text-sm border ${cat === c.id ? 'bg-primary text-white border-primary' : 'border-border text-secondary'}`}
                    >
                        {c.label}
                    </button>
                ))}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                {list.map((t) => (
                    <Link key={t.slug} href={`/modelli/${t.slug}`}>
                        <Card className="p-6 h-full space-y-3 hover:border-primary">
                            <p className="text-xs font-semibold uppercase tracking-wide text-primary">{t.shortTitle}</p>
                            <h2 className="text-xl font-display font-semibold">{t.title}</h2>
                            <p className="text-sm text-secondary">{t.summary}</p>
                            <p className="text-xs text-muted flex items-center gap-2">
                                <Printer className="w-3 h-3" /> {t.estimatedMinutes} min · {t.officialEntity}
                            </p>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
