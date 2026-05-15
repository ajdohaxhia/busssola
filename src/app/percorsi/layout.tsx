import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Percorsi Guidati per ogni situazione',
    description: 'Collezioni curate di guide per aiutarti a risolvere problemi specifici: dalla perdita del lavoro alla messa in sicurezza dei tuoi account social.',
    path: '/percorsi/',
})

export default function PercorsiLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
