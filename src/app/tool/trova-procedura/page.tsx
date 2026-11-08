import Link from 'next/link'
import { Search, ArrowLeft } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildSeoMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/seo-core'
import { TrovaProceduraClient } from './TrovaProceduraClient'

export const metadata = buildSeoMetadata({
    title: 'Trova la Procedura Ufficiale: Guida Rapida a Documenti, Lavoro e PA',
    description: 'Assistente rapido per pratiche pubbliche: seleziona il tuo problema (carta d’identità, passaporto, SPID, NASpI, cambio residenza) e scopri il primo passo e i documenti necessari.',
    path: '/tool/trova-procedura/',
    keywords: [
        'trova procedura',
        'come fare documenti online',
        'cosa fare se ho perso la carta d identita',
        'recuperare spid istruzioni',
        'domanda naspi primo passo',
        'cambio residenza anpr documenti',
    ],
})

export default function TrovaProceduraPage() {
    const appSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Trova la Procedura Ufficiale - Busssola',
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'All',
        url: absoluteUrl('/tool/trova-procedura/'),
        description: 'Motore di ricerca deterministico per orientare i cittadini al primo passo concreto nelle procedure burocratiche italiane.',
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
                <span className="text-foreground font-medium">Trova la Procedura</span>
            </div>

            <PageHeader
                badge="Orientamento Amministrativo"
                icon={Search}
                title="Trova la Procedura Ufficiale"
                description="Seleziona la tua situazione per ottenere immediatamente il primo passo concreto, la checklist dei documenti da preparare, i tempi, i costi e il portale pubblico .gov.it corretto per la tua pratica."
            />

            <TrovaProceduraClient />
        </div>
    )
}
