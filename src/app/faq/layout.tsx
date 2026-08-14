import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Domande frequenti su Busssola',
    description: 'Risposte alle domande più comuni su Busssola: è gratuita? è ufficiale? come funzionano i progressi e la privacy? Guida alla piattaforma civica.',
    path: '/faq/',
    keywords: ['FAQ Busssola', 'domande frequenti', 'guida gratuita', 'privacy piattaforma'],
})

export default function FAQLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
