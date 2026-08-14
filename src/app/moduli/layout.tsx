import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Catalogo guide pratiche e procedure',
    description: 'Guide passo-passo su SPID, CIE, ISEE, 730, NASpI, cambio residenza, bonus, truffe e sicurezza digitale. Procedure pubbliche italiane con fonti ufficiali.',
    path: '/moduli/',
    keywords: ['come fare ISEE', '730 2026', 'domanda NASpI', 'cambio residenza', 'come richiedere SPID', 'CIE carta identità'],
})

export default function ModuliLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
