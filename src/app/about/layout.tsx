import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: "Cos'è Busssola",
    description: 'Scopri Busssola, il progetto gratuito di educazione civica digitale creato da Adelajdo Haxhiaj per aiutare ragazzi, famiglie e scuole a vivere il web con più sicurezza.',
    path: '/about/',
    keywords: ['cosè Busssola', 'progetto Busssola', 'Adelajdo Haxhiaj creatore Busssola'],
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
