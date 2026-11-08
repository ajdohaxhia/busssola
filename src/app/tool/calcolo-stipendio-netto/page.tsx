import Link from 'next/link'
import { Calculator, ArrowLeft } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildSeoMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/seo-core'
import { StipendioNettoClient } from './StipendioNettoClient'

export const metadata = buildSeoMetadata({
    title: 'Calcolo Stipendio Netto da RAL: Simulatore Busta Paga Mensile e Annua',
    description: 'Calcola gratis lo stipendio netto mensile e annuo dalla tua RAL. Simulatore trasparente con le aliquote IRPEF a 3 scaglioni, contributi IVS 9,19% e detrazioni TUIR.',
    path: '/tool/calcolo-stipendio-netto/',
    keywords: [
        'calcolo stipendio netto',
        'ral netto',
        'da lordo a netto',
        'calcolo stipendio netto mensile',
        'stipendio netto 30000 euro',
        'calcolo tredicesima stipendio netto',
        'aliquote irpef 3 scaglioni',
        'simulatore busta paga dipendente',
    ],
})

export default function CalcoloStipendioNettoPage() {
    const appSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Calcolatore Stipendio Netto Busssola',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'All',
        url: absoluteUrl('/tool/calcolo-stipendio-netto/'),
        description: 'Simulatore per il calcolo dello stipendio netto annuale e mensile dalla Retribuzione Annua Lorda (RAL) secondo la normativa fiscale italiana.',
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
                <span className="text-foreground font-medium">Calcolo Stipendio Netto</span>
            </div>

            <PageHeader
                badge="Simulatore Busta Paga"
                icon={Calculator}
                title="Calcolo Stipendio Netto da RAL"
                description="Simula in tempo reale lo stipendio netto mensile (su 13 o 14 mensilità) e il reddito annuo netto partendo dalla tua RAL. Calcolo basato sul sistema fiscale italiano con aliquote IRPEF a 3 scaglioni (23%, 35%, 43%), contributi IVS e detrazioni da lavoro dipendente."
            />

            <StipendioNettoClient />
        </div>
    )
}
