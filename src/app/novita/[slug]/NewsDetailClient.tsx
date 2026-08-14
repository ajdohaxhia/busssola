'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import type { NewsItem } from '@/types'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export default function NewsDetailClient({ item }: { item: NewsItem }) {
    return (
        <article className="max-w-3xl mx-auto py-8 space-y-8">
            <Link href="/novita" className="text-sm font-semibold text-primary print:hidden">← Tutte le novità</Link>
            <Breadcrumbs items={[{ label: 'Novità', href: '/novita' }, { label: item.title, href: '#' }]} className="print:hidden" />
            <header className="space-y-3">
                <p className="text-sm text-muted">{item.date} · verificato {item.lastReviewedAt}</p>
                <h1 className="text-4xl font-display font-semibold tracking-tight">{item.title}</h1>
                <p className="text-lg text-secondary">{item.summary}</p>
            </header>
            <div className="space-y-4">
                {item.body.map((p) => (
                    <p key={p.slice(0, 40)} className="text-secondary leading-relaxed">{p}</p>
                ))}
            </div>
            <section>
                <h2 className="text-xl font-display font-semibold mb-3">Cosa cambia</h2>
                <ul className="list-disc pl-5 space-y-2 text-secondary">
                    {item.whatChanged.map((x) => <li key={x}>{x}</li>)}
                </ul>
            </section>
            <p className="text-secondary"><strong>Chi riguarda:</strong> {item.whoIsAffected}</p>
            <section>
                <h2 className="text-xl font-display font-semibold mb-3">Cosa fare</h2>
                <ol className="list-decimal pl-5 space-y-2 text-secondary">
                    {item.whatToDo.map((x) => <li key={x}>{x}</li>)}
                </ol>
            </section>
            <section className="text-sm space-y-2">
                <h2 className="text-xl font-display font-semibold">Fonti ufficiali</h2>
                <ul className="space-y-1">
                    {item.sources.map((s) => (
                        <li key={s.url}>
                            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline inline-flex items-center gap-1">
                                {s.title} — {s.organization} <ExternalLink className="w-3 h-3" />
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
            <div className="flex flex-wrap gap-3 print:hidden">
                {item.relatedGuides.map((href) => (
                    <Link key={href} href={href} className="text-primary font-semibold">Guida →</Link>
                ))}
                {item.relatedTemplates.map((slug) => (
                    <Link key={slug} href={`/modelli/${slug}`} className="text-primary font-semibold">Modello →</Link>
                ))}
            </div>
        </article>
    )
}
