import Link from 'next/link'
import { Gift, ArrowLeft } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildSeoMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/seo-core'
import { TrovaBonusClient } from './TrovaBonusClient'

export const metadata = buildSeoMetadata({
    title: 'Trova le tue Agevolazioni e Bonus 2027: Questionario Guidato Online',
    description: 'Questionario interattivo e anonimo per scoprire quali bonus, sussidi e agevolazioni spettano alla tua famiglia in base a ISEE, figli e lavoro.',
    path: '/tool/trova-bonus/',
    keywords: [
        'trova bonus',
        'quali bonus posso richiedere',
        'agevolazioni isee 2027',
        'bonus famiglia questionario',
        'assegno unico calcolo',
        'bonus sociali bollette',
        'carta dedicata a te requisiti',
    ],
})

export default function TrovaBonusPage() {
    const appSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Trova-Bonus Busssola',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'All',
        url: absoluteUrl('/tool/trova-bonus/'),
        description: 'Questionario orientativo anonimo per identificare i sostegni pubblici ed economici spettanti secondo la normativa italiana.',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'EUR',
        },
    }

    return (
        <div className="space-y-10 py-8">
            <JsonLd data={appSchema} />

            <div className="flex items-center gap-2 text-xs text-muted">
                <Link href="/tool" className="inline-flex items-center gap-1 hover:text-foreground">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Tutti gli strumenti
                </Link>
                <span>/</span>
                <span className="text-foreground font-medium">Trova-Bonus</span>
            </div>

            <PageHeader
                badge="Orientamento Agevolazioni"
                icon={Gift}
                title="Trova le tue Agevolazioni e Bonus Pubblici"
                description="Seleziona la composizione della tua famiglia, la fascia ISEE e la tua occupazione per scoprire in tempo reale quali sostegni economici e sconti puoi richiedere secondo la normativa in vigore."
            />

            <TrovaBonusClient />
        </div>
    )
}
