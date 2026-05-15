import type { MetadataRoute } from 'next'
import { ALL_MODULES } from '@/data/modules/index'
import { LEARNING_PATHS } from '@/data/paths'

export const dynamic = 'force-static'

const baseUrl = 'https://busssola.com'

const staticRoutes = [
    '',
    '/about',
    '/accessibilita',
    '/adelajdo-haxhiaj',
    '/aiuto',
    '/contact',
    '/faq',
    '/fonti',
    '/metodo-editoriale',
    '/moduli',
    '/percorsi',
    '/privacy',
    '/profilo',
    '/scuole',
    '/sos',
    '/termini',
    '/trasparenza',
]

const lastModified = new Date()

function entry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']) {
    return {
        url: `${baseUrl}${path}`,
        lastModified,
        changeFrequency,
        priority,
    }
}

const categories = [
    'emergenze', 'documenti', 'lavoro', 'casa', 'soldi', 'bonus', 'sanita', 'famiglia',
    'sicurezza', 'truffe', 'privacy', 'immigrazione', 'consumatori', 'mobilita',
    'universita', 'anziani', 'disabilita', 'casa-digitale'
].map(cat => entry(`/moduli/categoria/${cat}`, 0.8, 'monthly'))

export default function sitemap(): MetadataRoute.Sitemap {
    const modules = ALL_MODULES.map((module) => entry(`/moduli/${module.id}`, 0.85, 'monthly'))

    const lessons = ALL_MODULES.flatMap((module) =>
        module.lessons
            .filter(l => l.status === 'published' && l.qualityGatePassed)
            .map((_, index) => entry(`/moduli/${module.id}/lezione/${index + 1}`, 0.9, 'monthly'))
    )

    const paths = LEARNING_PATHS.map((path) => entry(`/percorsi/${path.id}`, 0.8, 'monthly'))

    const tips = LIFE_HACKS.map((hack) => entry(`/tips/${hack.slug}`, 0.75, 'monthly'))

    return [
        ...staticRoutes.map((route) => entry(route, route === '' ? 1 : 0.7, 'weekly')),
        ...categories,
        ...paths,
        ...modules,
        ...lessons,
        ...tips,
    ]
}

import { LIFE_HACKS } from '@/data/life-hacks'
