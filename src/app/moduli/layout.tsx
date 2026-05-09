import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Catalogo moduli di sicurezza online',
    description: 'Esplora 50 moduli gratuiti di Busssola su privacy, password, phishing, grooming, cyberbullismo, sextortion, truffe online e benessere digitale.',
    path: '/moduli/',
    keywords: ['catalogo moduli sicurezza online', 'moduli educazione digitale', 'guide privacy phishing grooming'],
})

export default function ModuliLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
