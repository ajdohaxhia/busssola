import { Suspense } from 'react'
import { Library } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { CatalogClient } from './CatalogClient'

export default function ModulesPage() {
    return (
        <div className="space-y-8 py-8">
            <PageHeader
                badge="Catalogo"
                icon={Library}
                title="Tutte le guide pratiche"
                description="Procedure italiane, passo dopo passo, con fonti ufficiali. Cerca SPID, ISEE, 730, NASpI o cambio residenza."
            />
            <Suspense fallback={<p className="text-secondary">Caricamento catalogo…</p>}>
                <CatalogClient />
            </Suspense>
        </div>
    )
}
