import { notFound } from 'next/navigation'
import { CIVIC_TEMPLATES } from '@/data/templates'
import { templateMetadata, templateStructuredData } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import TemplateDetailClient from './TemplateDetailClient'

export function generateStaticParams() {
    return CIVIC_TEMPLATES.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const tpl = CIVIC_TEMPLATES.find((t) => t.slug === slug)
    if (!tpl) return { title: 'Modello non trovato' }
    return templateMetadata(tpl)
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const tpl = CIVIC_TEMPLATES.find((t) => t.slug === slug)
    if (!tpl) notFound()
    return (
        <>
            <JsonLd data={templateStructuredData(tpl) as Record<string, unknown>} />
            <TemplateDetailClient tpl={tpl} />
        </>
    )
}
