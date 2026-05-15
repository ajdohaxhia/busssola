import { buildSeoMetadata, getModule, moduleMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const courseModule = getModule(id)
    if (!courseModule) return buildSeoMetadata({ title: 'Modulo non trovato' })

    return moduleMetadata(courseModule)
}

export default function ModuleLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
