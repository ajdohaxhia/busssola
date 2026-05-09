import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Contatti Busssola',
    description: 'Contatta Busssola per collaborazioni, scuole, privacy, accessibilità e informazioni sul progetto di educazione civica digitale.',
    path: '/contact/',
    keywords: ['contatti Busssola', 'info busssola.com', 'collaborare educazione digitale'],
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
