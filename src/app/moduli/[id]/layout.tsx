import { ALL_MODULES } from '@/data/modules/index'
import { JsonLd } from '@/components/seo/JsonLd'
import {
    breadcrumbStructuredData,
    getModule,
    moduleMetadata,
    moduleStructuredData,
    stripModulePrefix,
} from '@/lib/seo'
import type { Metadata } from 'next'

export async function generateStaticParams() {
    return ALL_MODULES.map((module) => ({
        id: module.id,
    }));
}

type ModuleLayoutProps = {
    children: React.ReactNode
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params
    const currentModule = getModule(id)

    if (!currentModule) {
        return {
            title: 'Modulo non trovato',
            robots: { index: false, follow: false },
        }
    }

    return moduleMetadata(currentModule)
}

export default async function Layout({ children, params }: ModuleLayoutProps) {
    const { id } = await params
    const currentModule = getModule(id)

    return (
        <>
            {currentModule && (
                <>
                    <JsonLd data={moduleStructuredData(currentModule)} />
                    <JsonLd
                        data={breadcrumbStructuredData([
                            { name: 'Home', path: '/' },
                            { name: 'Catalogo moduli', path: '/moduli/' },
                            { name: stripModulePrefix(currentModule.title), path: `/moduli/${currentModule.id}/` },
                        ])}
                    />
                </>
            )}
            {children}
        </>
    )
}
