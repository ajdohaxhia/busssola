import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: "Termini d'uso",
    description: "Termini d'uso di Busssola: natura educativa dei contenuti, uso personale e scolastico, limiti e responsabilità.",
    path: '/termini/',
    keywords: ['termini uso Busssola', 'condizioni Busssola', 'contenuti educativi sicurezza online'],
})

export default function TerminiLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
