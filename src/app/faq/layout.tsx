import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Domande frequenti',
    description: 'Risposte rapide su Busssola, uso gratuito, privacy, scuole, moduli, progressi locali e sicurezza dei dati.',
    path: '/faq/',
    keywords: ['faq Busssola', 'domande frequenti sicurezza digitale', 'Busssola gratuito privacy'],
})

export default function FaqLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
