import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Percorsi guidati di educazione digitale',
    description: 'Percorsi ordinati per imparare sicurezza online, protezione account, relazioni digitali, emergenze SOS, scuola e famiglia con Busssola.',
    path: '/percorsi/',
    keywords: ['percorsi sicurezza digitale', 'educazione digitale ragazzi', 'sicurezza online famiglie scuole'],
})

export default function PercorsiLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
