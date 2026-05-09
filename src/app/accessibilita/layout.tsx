import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Accessibilità',
    description: "Impegno di Busssola per un'esperienza accessibile, leggibile e usabile da ragazzi, famiglie, docenti e persone con bisogni diversi.",
    path: '/accessibilita/',
    keywords: ['accessibilità Busssola', 'educazione digitale accessibile', 'sito accessibile sicurezza online'],
})

export default function AccessibilitaLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
