'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckSquare, ExternalLink, Printer } from 'lucide-react'
import type { CivicTemplate } from '@/types'
import { OFFICIAL_SOURCES } from '@/data/officialSources'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export default function TemplateDetailClient({ tpl }: { tpl: CivicTemplate }) {
    const [done, setDone] = useState<Record<string, boolean>>({})
    const toggle = (key: string) => setDone((s) => ({ ...s, [key]: !s[key] }))

    return (
        <article className="max-w-3xl mx-auto py-8 space-y-10 print:max-w-none">
            <div className="flex items-center justify-between print:hidden">
                <Link href="/modelli" className="text-sm font-semibold text-primary">← Tutti i modelli</Link>
                <Button variant="outline" size="sm" onClick={() => window.print()}>
                    <Printer className="w-4 h-4 mr-2" /> Stampa kit
                </Button>
            </div>
            <Breadcrumbs items={[{ label: 'Modelli', href: '/modelli' }, { label: tpl.shortTitle, href: '#' }]} className="print:hidden" />
            <header className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">{tpl.officialEntity}</p>
                <h1 className="text-4xl font-display font-semibold tracking-tight">{tpl.title}</h1>
                <p className="text-lg text-secondary">{tpl.summary}</p>
                <p className="text-sm text-muted">Quando usarlo: {tpl.whenToUse}</p>
            </header>
            <p className="text-sm border border-warning/30 bg-warning-bg rounded-xl p-4">{tpl.disclaimer}</p>

            <section className="space-y-3">
                <h2 className="text-2xl font-display font-semibold">Documenti da riunire</h2>
                <ul className="space-y-2">
                    {tpl.documents.map((d) => (
                        <li key={d}>
                            <label className="flex gap-3 items-start">
                                <input type="checkbox" checked={!!done[d]} onChange={() => toggle(d)} className="mt-1" />
                                <span>{d}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="space-y-3">
                <h2 className="text-2xl font-display font-semibold">Passi</h2>
                <ol className="space-y-3 list-decimal pl-5">
                    {tpl.steps.map((s) => (
                        <li key={s} className="text-secondary">{s}</li>
                    ))}
                </ol>
            </section>
            <section className="space-y-3">
                <h2 className="text-2xl font-display font-semibold">Non dimenticare</h2>
                <ul className="space-y-2">
                    {tpl.dontForget.map((s) => (
                        <li key={s} className="flex gap-2 text-secondary"><CheckSquare className="w-4 h-4 mt-1 shrink-0 text-primary" />{s}</li>
                    ))}
                </ul>
            </section>
            <section className="space-y-3">
                <h2 className="text-2xl font-display font-semibold">Link ufficiali</h2>
                <ul className="space-y-2">
                    {tpl.officialLinks.map((id) => {
                        const src = OFFICIAL_SOURCES[id]
                        if (!src) return null
                        return (
                            <li key={id}>
                                <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-primary underline inline-flex items-center gap-1">
                                    {src.name} — {src.ente} <ExternalLink className="w-3 h-3" />
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section className="space-y-2 text-sm">
                <h2 className="text-xl font-display font-semibold">Fonti</h2>
                <ul className="space-y-1">
                    {tpl.sources.map((s) => (
                        <li key={s.url}>
                            <a href={s.url} className="text-primary underline">{s.title} ({s.organization})</a>
                            <span className="text-muted"> · verificato {s.lastCheckedAt}</span>
                        </li>
                    ))}
                </ul>
            </section>
            {tpl.relatedGuide && (
                <p className="print:hidden">
                    <Link href={tpl.relatedGuide} className="text-primary font-semibold">Apri la guida collegata →</Link>
                </p>
            )}
        </article>
    )
}
