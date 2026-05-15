import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Catalogo Guide Pratiche e Procedure',
    description: 'Sfoglia oltre 120 guide passo-passo su documenti, lavoro, casa, bonus, truffe e sicurezza digitale. Tutto il necessario per orientarsi tra i servizi pubblici italiani.',
    path: '/moduli/',
})

export default function ModuliLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
