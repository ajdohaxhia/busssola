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
                <div className="flex flex-wrap items-center gap-3">
                    <p className="text-sm text-muted">{item.date} · verificato {item.lastReviewedAt}</p>
                    {item.sources[0] && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Fonte verificata: {item.sources[0].organization}
                        </span>
                    )}
                </div>
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
            <section className="space-y-3 pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <h2 className="text-xl font-display font-semibold">Fonti ufficiali e verificate</h2>
                </div>
                <div className="grid gap-3">
                    {item.sources.map((s) => (
                        <a
                            key={s.url}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-2xl border border-border bg-surface hover:border-primary/60 transition-all flex items-start justify-between gap-4 group"
                        >
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                                        Fonte verificata: {s.organization} ↗
                                    </span>
                                </div>
                                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-base">
                                    {s.title}
                                </p>
                                <p className="text-xs text-muted font-mono break-all">
                                    {s.url}
                                </p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-primary shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    ))}
                </div>
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
