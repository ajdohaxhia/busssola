import { Suspense } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Search } from 'lucide-react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { PageHeader } from '@/components/ui/PageHeader'
import { buildSeoMetadata } from '@/lib/seo'
import { CercaClient } from './CercaClient'

export const metadata: Metadata = buildSeoMetadata({
    title: 'Cerca in Busssola: guide, modelli, novità e strumenti',
    description:
        'Ricerca unica in tutto il sito: guide passo passo, procedure, modelli stampabili, novità verificate e strumenti interattivi. La ricerca avviene nel browser, senza inviare dati.',
    path: '/cerca/',
    noIndex: true,
})

const MACRO_AREAS = [
    { label: 'Documenti e identità', href: '/moduli/categoria/documenti' },
    { label: 'Lavoro e pensione', href: '/moduli/categoria/lavoro' },
    { label: 'Casa, utenze e residenza', href: '/moduli/categoria/casa' },
    { label: 'Bonus e ISEE', href: '/moduli/categoria/bonus' },
    { label: 'Fisco, 730 e pagamenti', href: '/moduli/categoria/soldi' },
    { label: 'Truffe e sicurezza digitale', href: '/moduli/categoria/truffe' },
    { label: 'Scadenze e calendario', href: '/scadenze' },
    { label: 'Strumenti e calcolatori', href: '/tool' },
    { label: 'Mappa completa del sito', href: '/mappa-del-sito' },
]

export default function CercaPage() {
    return (
        <div className="space-y-10 py-8">
            <div className="space-y-4">
                <Breadcrumbs items={[{ label: 'Cerca', href: '/cerca' }]} />
                <PageHeader
                    badge="Ricerca"
                    icon={Search}
                    title="Cerca in tutto il sito"
                    description="Un unico campo per guide, procedure, modelli, novità e strumenti. I risultati sono ordinati per pertinenza e mostrano il tipo di contenuto prima di aprirlo."
                />
            </div>

            <Suspense fallback={<p className="text-secondary">Caricamento della ricerca…</p>}>
                <CercaClient />
            </Suspense>

            <section className="space-y-4 border-t border-border pt-8" aria-labelledby="aree-tematiche">
                <h2 id="aree-tematiche" className="text-2xl font-display font-semibold">
                    Oppure esplora per area tematica
                </h2>
                <p className="max-w-2xl text-secondary">
                    Se non sai da quale parola chiave partire, queste sezioni raccolgono le guide più consultate. Ogni
                    pagina indica la fonte ufficiale, la data di ultima verifica e cosa preparare prima di iniziare.
                </p>
                <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {MACRO_AREAS.map((area) => (
                        <li key={area.href}>
                            <Link
                                href={area.href}
                                className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                {area.label}
                                <span aria-hidden="true">→</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
