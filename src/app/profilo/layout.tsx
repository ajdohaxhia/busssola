import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Profilo locale',
    description: 'Area privata locale per gestire progressi e backup di Busssola sul dispositivo.',
    path: '/profilo/',
    noIndex: true,
})

export default function ProfiloLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
