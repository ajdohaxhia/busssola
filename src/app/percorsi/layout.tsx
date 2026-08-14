import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Percorsi guidati per ogni situazione',
    description: 'Sequenze di guide per situazioni reali: primi documenti, perdita del lavoro, sicurezza account, famiglie e chi arriva in Italia.',
    path: '/percorsi/',
    keywords: ['percorso SPID CIE', 'guide per chi perde il lavoro', 'percorso genitori', 'orientamento civico'],
})

export default function PercorsiLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
