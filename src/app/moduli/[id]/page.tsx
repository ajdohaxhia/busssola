import { getModuleById, ALL_MODULES } from '@/data/modules/index'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import ModuleDetailClient from '@/components/modules/ModuleDetailClient'
import { Metadata } from 'next'
import { moduleMetadata, moduleStructuredData } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'

export function generateStaticParams() {
    return ALL_MODULES.map((module) => ({
        id: module.id,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params
    const currentModule = getModuleById(id)
    if (!currentModule) return { title: 'Modulo non trovato' }

    return moduleMetadata(currentModule)
}

export default async function ModulePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const currentModule = getModuleById(id)

    if (!currentModule) {
        return (
            <Container className="py-20 flex flex-col items-center text-center min-h-[60vh] justify-center">
                <h1 className="text-3xl font-semibold text-foreground mb-4">Percorso non trovato</h1>
                <p className="text-secondary mb-8">Il modulo che stai cercando non esiste o è stato rimosso.</p>
                <Button asChild>
                    <Link href="/moduli">Torna al catalogo</Link>
                </Button>
            </Container>
        )
    }

    return (
        <>
            <JsonLd data={moduleStructuredData(currentModule)} />
            <ModuleDetailClient currentModule={currentModule} />
        </>
    )
}
