import Link from 'next/link'
import { Newspaper } from 'lucide-react'
import { CIVIC_NEWS } from '@/data/news'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'

export default function NovitaPage() {
    const items = [...CIVIC_NEWS].sort((a, b) => b.date.localeCompare(a.date))
    return (
        <div className="space-y-10 py-8">
            <PageHeader
                badge="Novità"
                icon={Newspaper}
                title="Cosa è cambiato nel 2026"
                description="Solo fatti verificati su fonti istituzionali e bollettini ufficiali: Comuni, Questure, Prefetture, Ministero dell’Interno, Polizia Postale, CERT-AgID, Garante Privacy, INPS, Agenzia delle Entrate, MIT e ARERA. Ultimo aggiornamento redazionale: 21 ottobre 2026."
            />
            <div className="grid gap-4">
                {items.map((n) => (
                    <Link key={n.slug} href={`/novita/${n.slug}`}>
                        <Card className="p-6 space-y-3 hover:border-primary transition-all">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <p className="text-xs text-muted">{n.date} · verificato {n.lastReviewedAt}</p>
                                {n.sources[0] && (
                                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        Fonte verificata: {n.sources[0].organization} ↗
                                    </span>
                                )}
                            </div>
                            <h2 className="text-2xl font-display font-semibold">{n.title}</h2>
                            <p className="text-secondary leading-relaxed">{n.summary}</p>
                            {n.sources[0]?.title && (
                                <p className="text-xs text-muted pt-1 border-t border-border/30 font-mono truncate">
                                    Rif: {n.sources[0].title}
                                </p>
                            )}
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
