import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Busssola per scuole, docenti ed educatori',
    description: 'Risorse gratuite per portare cittadinanza digitale, sicurezza online, privacy, cyberbullismo e consapevolezza digitale in classe.',
    path: '/scuole/',
    keywords: ['educazione digitale scuola', 'cittadinanza digitale scuola', 'sicurezza online studenti', 'risorse docenti internet'],
})

export default function ScuoleLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
