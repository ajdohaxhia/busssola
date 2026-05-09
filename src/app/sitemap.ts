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
    '/metodo-editoriale',
    '/moduli',
    '/percorsi',
    '/privacy',
    '/scuole',
    '/sos',
    '/termini',
    '/trasparenza',
]

function entry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']) {
    return {
        url: `${baseUrl}${path}`,
        lastModified: new Date('2026-05-07'),
        changeFrequency,
        priority,
    }
}

export default function sitemap(): MetadataRoute.Sitemap {
    const modules = ALL_MODULES.map((module) => entry(`/moduli/${module.id}`, 0.75, 'monthly'))

    const lessons = ALL_MODULES.flatMap((module) =>
        module.lessons.map((_, index) => entry(`/moduli/${module.id}/lezione/${index + 1}`, 0.45, 'monthly'))
    )

    const paths = LEARNING_PATHS.map((path) => entry(`/percorsi/${path.id}`, 0.7, 'monthly'))

    return [
        ...staticRoutes.map((route) => entry(route, route === '' ? 1 : 0.65, 'monthly')),
        ...paths,
        ...modules,
        ...lessons,
    ]
}
