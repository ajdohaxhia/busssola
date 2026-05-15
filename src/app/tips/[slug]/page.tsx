import { LIFE_HACKS } from '@/data/life-hacks'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import TipDetailClient from './TipDetailClient'

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return LIFE_HACKS.map((hack) => ({
        slug: hack.slug,
    }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const hack = LIFE_HACKS.find(h => h.slug === slug)
    if (!hack) return {}

    return {
        title: `${hack.title} | Life Hacks Civici | Busssola`,
        description: hack.summary,
    }
}

export default async function TipDetailPage({ params }: PageProps) {
    const { slug } = await params
    const hack = LIFE_HACKS.find(h => h.slug === slug)

    if (!hack) notFound()

    return <TipDetailClient hack={hack} />
}
