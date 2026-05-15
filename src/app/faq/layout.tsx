import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Domande Frequenti (FAQ)',
    description: 'Risposte alle domande più comuni su Busssola, privacy, fonti ufficiali e come utilizzare al meglio le nostre guide civiche.',
    path: '/faq/',
})

export default function FAQLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
