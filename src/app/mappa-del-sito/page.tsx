import Link from 'next/link'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Map as MapIcon } from 'lucide-react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildSeoMetadata, breadcrumbStructuredData } from '@/lib/seo'
import { ALL_MODULES } from '@/data/modules/index'
import { LIFE_HACKS } from '@/data/life-hacks'
import { CIVIC_TEMPLATES } from '@/data/templates'
import { CIVIC_NEWS } from '@/data/news'
import { LEARNING_PATHS } from '@/data/paths'
import { CATEGORY_IDS, CATEGORY_LABELS } from '@/lib/categories'

export const metadata: Metadata = buildSeoMetadata({
    title: 'Mappa del sito: tutte le guide, i modelli e le novità',
    description:
        'Indice completo di Busssola: tutte le guide per categoria, i modelli stampabili, i trucchi civici, le novità verificate e gli strumenti interattivi, in un’unica pagina.',
    path: '/mappa-del-sito/',
    keywords: ['mappa del sito', 'indice completo', 'tutte le guide', 'archivio busssola'],
})

const modulesByCategory = CATEGORY_IDS.map((id) => ({
    id,
    label: CATEGORY_LABELS[id],
    modules: ALL_MODULES.filter((module) => module.category === id),
})).filter((group) => group.modules.length > 0)

const uncategorizedModules = ALL_MODULES.filter((module) => !module.category || !CATEGORY_IDS.includes(module.category))

const tipsByCategory = CATEGORY_IDS.map((id) => ({
    id,
    label: CATEGORY_LABELS[id],
    tips: LIFE_HACKS.filter((hack) => hack.category === id),
})).filter((group) => group.tips.length > 0)

const templatesByCategory = CATEGORY_IDS.map((id) => ({
    id,
    label: CATEGORY_LABELS[id],
    templates: CIVIC_TEMPLATES.filter((template) => template.category === id),
})).filter((group) => group.templates.length > 0)

const sortedNews = [...CIVIC_NEWS].sort((a, b) => b.date.localeCompare(a.date))

const HUBS = [
    { href: '/moduli/', label: 'Catalogo delle guide' },
    { href: '/tool/', label: 'Strumenti e calcolatori' },
    { href: '/scadenze/', label: 'Scadenzario civico e fiscale' },
    { href: '/scadenze/2027/', label: 'Scadenze 2027' },
    { href: '/novita/', label: 'Novità verificate' },
    { href: '/confronti/', label: 'Confronti e guide decisionali' },
    { href: '/modelli/', label: 'Modelli e kit documentali' },
    { href: '/tips/', label: 'Trucchi civici' },
    { href: '/percorsi/', label: 'Percorsi guidati' },
    { href: '/ai/', label: 'Intelligenza artificiale' },
    { href: '/sos/', label: 'Centro SOS' },
    { href: '/glossario/', label: 'Glossario civico' },
    { href: '/faq/', label: 'Domande frequenti' },
    { href: '/scuole/', label: 'Materiali per scuole e docenti' },
    { href: '/fonti/', label: 'Archivio delle fonti ufficiali' },
    { href: '/metodo-editoriale/', label: 'Metodo editoriale' },
    { href: '/about/', label: 'Che cos’è Busssola' },
    { href: '/cerca/', label: 'Ricerca nel sito' },
]

const TOTAL_LINKS =
    ALL_MODULES.reduce((total, module) => total + 1 + module.lessons.length, 0) +
    LIFE_HACKS.length +
    CIVIC_TEMPLATES.length +
    CIVIC_NEWS.length +
    LEARNING_PATHS.length +
    HUBS.length

function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
    return (
        <h2 id={id} className="scroll-mt-24 border-b border-border pb-3 text-3xl font-display font-semibold">
            {children}
        </h2>
    )
}

function ItemLink({ href, children }: { href: string; children: ReactNode }) {
    return (
        <Link href={href} className="text-secondary underline decoration-transparent underline-offset-2 transition-colors hover:text-foreground hover:decoration-current">
            {children}
        </Link>
    )
}

export default function MappaDelSitoPage() {
    return (
        <div className="space-y-12 py-8">
            <JsonLd
                data={breadcrumbStructuredData([
                    { name: 'Home', path: '/' },
                    { name: 'Mappa del sito', path: '/mappa-del-sito/' },
                ])}
            />

            <div className="space-y-4">
                <Breadcrumbs items={[{ label: 'Mappa del sito', href: '/mappa-del-sito' }]} />
                <PageHeader
                    badge="Indice"
                    icon={MapIcon}
                    title="Mappa del sito"
                    description={`Tutte le pagine pubblicate di Busssola in un unico indice: ${ALL_MODULES.length} aree tematiche, ${ALL_MODULES.reduce((total, module) => total + module.lessons.length, 0)} procedure, ${LIFE_HACKS.length} trucchi, ${CIVIC_TEMPLATES.length} modelli e ${CIVIC_NEWS.length} novità verificate.`}
                />
            </div>

            <nav aria-label="Indice delle sezioni" className="rounded-2xl border border-border bg-surface p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">Vai alla sezione</p>
                <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                    <li><a href="#guide" className="text-secondary hover:text-foreground">Guide</a></li>
                    <li><a href="#trucchi" className="text-secondary hover:text-foreground">Trucchi</a></li>
                    <li><a href="#modelli" className="text-secondary hover:text-foreground">Modelli</a></li>
                    <li><a href="#novita" className="text-secondary hover:text-foreground">Novità</a></li>
                    <li><a href="#percorsi" className="text-secondary hover:text-foreground">Percorsi</a></li>
                    <li><a href="#sezioni" className="text-secondary hover:text-foreground">Sezioni del sito</a></li>
                </ul>
            </nav>

            <section className="space-y-8" aria-labelledby="guide">
                <SectionTitle id="guide">Guide e procedure per categoria</SectionTitle>
                {modulesByCategory.map((group) => (
                    <div key={group.id} className="space-y-4">
                        <h3 className="text-xl font-semibold">
                            <Link href={`/moduli/categoria/${group.id}/`} className="hover:underline">
                                {group.label}
                            </Link>
                            <span className="ml-2 text-sm font-normal text-muted">
                                {group.modules.length} aree · {group.modules.reduce((total, module) => total + module.lessons.length, 0)} procedure
                            </span>
                        </h3>
                        <ul className="space-y-3">
                            {group.modules.map((module) => (
                                <li key={module.id} className="text-sm leading-relaxed">
                                    <Link href={`/moduli/${module.id}/`} className="font-semibold text-foreground hover:underline">
                                        {module.title.replace(/^Modulo \d+[b]?:\s*/i, '')}
                                    </Link>
                                    {module.lessons.length > 0 && (
                                        <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                                            {module.lessons.map((lesson, index) => (
                                                <li key={`${module.id}-${index}`}>
                                                    <ItemLink href={`/moduli/${module.id}/lezione/${index + 1}/`}>
                                                        {lesson.title}
                                                    </ItemLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                {uncategorizedModules.length > 0 && (
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold">Altre aree</h3>
                        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                            {uncategorizedModules.map((module) => (
                                <li key={module.id}>
                                    <ItemLink href={`/moduli/${module.id}/`}>
                                        {module.title.replace(/^Modulo \d+[b]?:\s*/i, '')}
                                    </ItemLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>

            <section className="space-y-6" aria-labelledby="trucchi">
                <SectionTitle id="trucchi">Trucchi civici</SectionTitle>
                {tipsByCategory.map((group) => (
                    <div key={group.id} className="space-y-2">
                        <h3 className="text-lg font-semibold">{group.label}</h3>
                        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                            {group.tips.map((hack) => (
                                <li key={hack.slug}>
                                    <ItemLink href={`/tips/${hack.slug}/`}>{hack.title}</ItemLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className="space-y-6" aria-labelledby="modelli">
                <SectionTitle id="modelli">Modelli e kit documentali</SectionTitle>
                {templatesByCategory.map((group) => (
                    <div key={group.id} className="space-y-2">
                        <h3 className="text-lg font-semibold">{group.label}</h3>
                        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                            {group.templates.map((template) => (
                                <li key={template.slug}>
                                    <ItemLink href={`/modelli/${template.slug}/`}>{template.shortTitle}</ItemLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className="space-y-6" aria-labelledby="novita">
                <SectionTitle id="novita">Novità verificate</SectionTitle>
                <ul className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
                    {sortedNews.map((item) => (
                        <li key={item.slug} className="flex gap-2">
                            <span className="shrink-0 font-mono text-xs text-muted">{item.date}</span>
                            <ItemLink href={`/novita/${item.slug}/`}>{item.title}</ItemLink>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="space-y-4" aria-labelledby="percorsi">
                <SectionTitle id="percorsi">Percorsi guidati</SectionTitle>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {LEARNING_PATHS.map((learningPath) => (
                        <li key={learningPath.id}>
                            <ItemLink href={`/percorsi/${learningPath.id}/`}>{learningPath.title}</ItemLink>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="space-y-4" aria-labelledby="sezioni">
                <SectionTitle id="sezioni">Sezioni del sito</SectionTitle>
                <ul className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
                    {HUBS.map((hub) => (
                        <li key={hub.href}>
                            <ItemLink href={hub.href}>{hub.label}</ItemLink>
                        </li>
                    ))}
                </ul>
            </section>

            <p className="border-t border-border pt-6 text-sm text-muted">
                {TOTAL_LINKS} collegamenti interni in questa pagina. Se manca qualcosa, segnalalo dalla pagina{' '}
                <Link href="/contact" className="underline hover:text-foreground">
                    Contatti
                </Link>
                .
            </p>
        </div>
    )
}
