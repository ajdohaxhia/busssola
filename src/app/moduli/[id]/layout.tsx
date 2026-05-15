import { buildSeoMetadata, getModule, moduleMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const module = getModule(id)
    if (!module) return buildSeoMetadata({ title: 'Modulo non trovato' })

    return moduleMetadata(module)
}

export default function ModuleLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
