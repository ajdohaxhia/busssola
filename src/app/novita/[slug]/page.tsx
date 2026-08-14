import { notFound } from 'next/navigation'
import { CIVIC_NEWS } from '@/data/news'
import { newsMetadata, newsStructuredData } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import NewsDetailClient from './NewsDetailClient'

export function generateStaticParams() {
    return CIVIC_NEWS.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const item = CIVIC_NEWS.find((n) => n.slug === slug)
    if (!item) return { title: 'Novità non trovata' }
    return newsMetadata(item)
}

export default async function NewsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const item = CIVIC_NEWS.find((n) => n.slug === slug)
    if (!item) notFound()
    return (
        <>
            <JsonLd data={newsStructuredData(item) as Record<string, unknown>} />
            <NewsDetailClient item={item} />
        </>
    )
}
