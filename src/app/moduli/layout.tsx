import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Catalogo moduli di sicurezza online',
    description: 'Esplora i moduli gratuiti di Busssola su privacy, password, phishing, grooming, cyberbullismo, sextortion, truffe online e protezione smartphone.',
    path: '/moduli/',
    keywords: ['catalogo moduli sicurezza online', 'moduli educazione digitale', 'guide privacy phishing grooming'],
})

export default function ModuliLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
