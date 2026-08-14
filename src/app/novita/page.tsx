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
                description="Solo fatti verificati su pagine INPS, Agenzia delle Entrate, Ministero del Lavoro e ARERA. Ultimo controllo editoriale: 14 agosto 2026."
            />
            <div className="grid gap-4">
                {items.map((n) => (
                    <Link key={n.slug} href={`/novita/${n.slug}`}>
                        <Card className="p-6 space-y-2 hover:border-primary">
                            <p className="text-xs text-muted">{n.date} · verificato {n.lastReviewedAt}</p>
                            <h2 className="text-2xl font-display font-semibold">{n.title}</h2>
                            <p className="text-secondary">{n.summary}</p>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
