import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Privacy policy',
    description: 'Privacy policy di Busssola: nessun account obbligatorio, progressi salvati localmente e raccolta dati ridotta al minimo.',
    path: '/privacy/',
    keywords: ['privacy Busssola', 'privacy by design', 'dati locali browser'],
})

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
