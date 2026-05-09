import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Metodo editoriale',
    description: 'Il metodo editoriale di Busssola: rigore tecnico, linguaggio chiaro, sicurezza emotiva e contenuti verificati per la cittadinanza digitale.',
    path: '/metodo-editoriale/',
    keywords: ['metodo editoriale Busssola', 'contenuti sicurezza digitale verificati', 'educazione digitale senza allarmismi'],
})

export default function MetodoEditorialeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
