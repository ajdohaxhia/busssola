import Link from 'next/link'
import { ArrowRight, ShieldCheck, BookOpen } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildSeoMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/seo-core'

export const metadata = buildSeoMetadata({
    title: 'Guide Civiche e Tributarie Pratiche: Passi, Scadenze e Modelli',
    description: 'Tutte le guide operative di Busssola: istruzioni chiare, tabelle di confronto, codici tributo, verifiche istituzionali e passi da compiere senza burocrazia.',
    path: '/guide/',
    keywords: [
        'guide civiche italia',
        'guide pratiche burocrazia',
        'guide fiscali busssola',
        'modello f24 istruzioni',
        'rateizzazione cartelle esattoriali guida',
    ],
})

const GUIDES = [
    {
        slug: 'rateizzazione-cartelle',
        title: 'Rateizzazione Cartelle Esattoriali: Fino a 84 e 96 Rate senza Documenti',
        category: 'Fisco e Riscossione',
        badge: 'Riforma 2026-2027',
        description: 'Come richiedere la dilazione ordinaria ad Agenzia delle Entrate-Riscossione (AdER). Limite fino a 120.000€ senza ISEE, simulatore online «Rateizza adesso», decadenza all’ottava rata insoluta e differenze con il piano straordinario.',
        updatedAt: '22 novembre 2026',
        href: '/guide/rateizzazione-cartelle/',
        entity: 'Agenzia delle Entrate-Riscossione',
    },
    {
        slug: 'f24-acconti',
        title: 'Modello F24 Acconti Imposte: Codici Tributo, Compilazione e Rateizzazione',
        category: 'Fisco e Imposte',
        badge: 'Scadenza 30 Novembre',
        description: 'Guida completa alla compilazione della Sezione Erario del Modello F24 per il secondo acconto di IRPEF, forfettari e cedolare secca. Codici 4034, 1791, metodo storico vs previsionale e rateizzazione in 5 rate.',
        updatedAt: '16 novembre 2026',
        href: '/guide/f24-acconti/',
        entity: 'Agenzia delle Entrate',
    },
]

export default function GuideHubPage() {
    const collectionSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Guide Civiche e Tributarie di Busssola',
        description: 'Guide operative passo-passo basate su fonti primarie e testi di legge ufficiali.',
        url: absoluteUrl('/guide/'),
        hasPart: GUIDES.map((g) => ({
            '@type': 'Article',
            name: g.title,
            description: g.description,
            url: absoluteUrl(g.href),
        })),
    }

    return (
        <div className="space-y-10 py-8">
            <JsonLd data={collectionSchema} />

            <PageHeader
                badge="Guide Civiche e Operative"
                icon={BookOpen}
                title="Guide Chiare per Risolvere Pratiche e Adempimenti"
                description="Percorsi operativi approfonditi, senza gergo ministeriale incomprensibile. Ogni guida include risposte rapide nei primi secondi, tabelle pratiche, cosa succede se sbagli o salti una scadenza, e rimandi a fonti istituzionali verificate."
            />

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-surface px-5 py-4">
                <p className="text-sm text-secondary">
                    <strong className="font-semibold text-foreground">{GUIDES.length} guide operative disponibili</strong>. Ogni guida è costantemente revisionata in base agli ultimi decreti e circolari ufficiali.
                </p>
                <Link
                    href="/moduli"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                    Esplora tutti i Moduli Didattici ↗
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {GUIDES.map((guide) => (
                    <Link key={guide.slug} href={guide.href} className="group">
                        <Card className="p-6 md:p-8 space-y-4 hover:border-primary transition-all h-full flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-surface-muted text-secondary border border-border">
                                        {guide.category}
                                    </span>
                                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                                        {guide.badge}
                                    </span>
                                </div>
                                <h2 className="text-xl md:text-2xl font-display font-semibold group-hover:text-primary transition-colors">
                                    {guide.title}
                                </h2>
                                <p className="text-secondary text-sm leading-relaxed">
                                    {guide.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted">
                                <span>Ente: {guide.entity}</span>
                                <span className="inline-flex items-center gap-1 font-semibold text-primary group-hover:translate-x-0.5 transition-transform">
                                    Leggi la guida <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>

            <div className="p-5 rounded-xl border border-border bg-surface-muted flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                    <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        Metodo Editoriale ed E-E-A-T
                    </h3>
                    <p className="text-xs text-secondary max-w-2xl">
                        Nessun contenuto generato al buio o copia-incollato da blog commerciali: consultiamo direttamente la Gazzetta Ufficiale, le circolari INPS, i provvedimenti dell’Agenzia delle Entrate e i siti ministeriali .gov.it.
                    </p>
                </div>
                <Link
                    href="/metodo-editoriale"
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-surface border border-border hover:border-foreground text-foreground transition-colors whitespace-nowrap"
                >
                    Scopri il nostro Metodo
                </Link>
            </div>
        </div>
    )
}
