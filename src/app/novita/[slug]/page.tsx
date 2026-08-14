import { notFound } from 'next/navigation'
import { CIVIC_NEWS } from '@/data/news'
import { newsMetadata } from '@/lib/seo'
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
    return <NewsDetailClient item={item} />
}
