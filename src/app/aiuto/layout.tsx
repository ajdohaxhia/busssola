import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Aiuto e supporto',
    description: 'Aiuto per usare Busssola: progressi salvati localmente, privacy, lettura dei moduli, SOS digitale e supporto per scuole e famiglie.',
    path: '/aiuto/',
    keywords: ['aiuto Busssola', 'supporto sicurezza online', 'progressi locali Busssola'],
})

export default function AiutoLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
