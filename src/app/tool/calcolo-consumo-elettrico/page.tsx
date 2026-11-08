import Link from 'next/link'
import { Zap, ArrowLeft } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildSeoMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/seo-core'
import { ConsumoElettricoClient } from './ConsumoElettricoClient'

export const metadata = buildSeoMetadata({
    title: 'Calcolo Consumo Elettrico Elettrodomestici: Simulatore Spesa Bolletta',
    description: 'Calcola quanto consumano in euro e kWh condizionatore, lavatrice, scaldabagno e forno in base alle ore di utilizzo e al costo dell’energia elettrica.',
    path: '/tool/calcolo-consumo-elettrico/',
    keywords: [
        'calcolo consumo elettrico',
        'quanto consuma un condizionatore',
        'costo kwh elettrodomestici',
        'calcolo consumo lavatrice bolletta',
        'quanto costa scaldabagno elettrico',
        'simulatore bolletta luce arera',
    ],
})

export default function CalcoloConsumoElettricoPage() {
    const appSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Simulatore Consumi Elettrici - Busssola',
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'All',
        url: absoluteUrl('/tool/calcolo-consumo-elettrico/'),
        description: 'Simulatore per il calcolo dei consumi in kWh e della spesa in bolletta degli elettrodomestici domestici basato su parametri ENEA e ARERA.',
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
                <span className="text-foreground font-medium">Consumo Elettrico</span>
            </div>

            <PageHeader
                badge="Simulatore Energetico"
                icon={Zap}
                title="Calcolo Consumo Elettrico Elettrodomestici"
                description="Seleziona gli elettrodomestici presenti in casa e scopri la stima reale della spesa mensile e annuale in bolletta in base al costo del kilowattora (€/kWh). Include consigli pratici dell'ENEA per ridurre i consumi senza sacrificare il comfort."
            />

            <ConsumoElettricoClient />
        </div>
    )
}
