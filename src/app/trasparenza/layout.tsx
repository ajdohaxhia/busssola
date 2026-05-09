import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Trasparenza',
    description: 'Come funziona Busssola: indipendenza, assenza di pubblicità, niente vendita dati e criteri di sostenibilità tecnica.',
    path: '/trasparenza/',
    keywords: ['trasparenza Busssola', 'progetto indipendente sicurezza digitale', 'no pubblicità no tracking'],
})

export default function TrasparenzaLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
