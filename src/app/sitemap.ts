import type { MetadataRoute } from 'next'
import { ALL_MODULES } from '@/data/modules/index'
import { LEARNING_PATHS } from '@/data/paths'
import { LIFE_HACKS } from '@/data/life-hacks'
import { CIVIC_TEMPLATES } from '@/data/templates'
import { CIVIC_NEWS } from '@/data/news'
import { CATEGORY_IDS } from '@/lib/categories'
import { SITE_URL, withTrailingSlash } from '@/lib/seo-core'
import { siteStats } from '@/config/siteStats'

export const dynamic = 'force-static'

const KEY_HUBS = new Set([
    '/about/',
    '/moduli/',
    '/percorsi/',
    '/tips/',
    '/checklist/',
    '/sos/',
    '/glossario/',
    '/fonti/',
    '/scuole/',
    '/modelli/',
    '/novita/',
    '/faq/',
])

const staticRoutes = [
    '/',
    '/about/',
    '/moduli/',
    '/percorsi/',
    '/tips/',
    '/checklist/',
    '/sos/',
    '/glossario/',
    '/fonti/',
    '/scuole/',
    '/modelli/',
    '/novita/',
    '/faq/',
    '/contact/',
    '/privacy/',
    '/termini/',
    '/accessibilita/',
    '/trasparenza/',
    '/metodo-editoriale/',
    '/aiuto/',
    '/profilo/',
    '/adelajdo-haxhiaj/',
]

const fallbackDate = new Date(siteStats.lastContentUpdate)

function toDate(value?: string) {
    if (!value) return undefined
    const parsed = new Date(value)
    return Number.isNaN(parsed.getTime()) ? undefined : parsed
}

function latest(...values: (string | undefined)[]) {
    const dates = values.map(toDate).filter((d): d is Date => Boolean(d))
    if (!dates.length) return fallbackDate
    return new Date(Math.max(...dates.map((d) => d.getTime())))
}

function entry(
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
    lastModified: Date = fallbackDate,
) {
    return {
        url: `${SITE_URL}${withTrailingSlash(path)}`,
        lastModified,
        changeFrequency,
        priority,
    }
}

export default function sitemap(): MetadataRoute.Sitemap {
    const categories = CATEGORY_IDS.map((cat) =>
        entry(`/moduli/categoria/${cat}/`, 0.8, 'weekly', fallbackDate),
    )

    const modules = ALL_MODULES.map((module) =>
        entry(
            `/moduli/${module.id}/`,
            0.85,
            'monthly',
            latest(module.lastUpdated, ...module.lessons.map((l) => l.lastReviewedAt)),
        ),
    )

    const lessons = ALL_MODULES.flatMap((module) =>
        module.lessons
            .map((lesson, index) => ({ lesson, index }))
            .filter(({ lesson }) => lesson.status === 'published' && lesson.qualityGatePassed)
            .map(({ index, lesson }) =>
                entry(
                    `/moduli/${module.id}/lezione/${index + 1}/`,
                    0.85,
                    'monthly',
                    latest(lesson.lastReviewedAt, module.lastUpdated),
                ),
            ),
    )

    const paths = LEARNING_PATHS.map((path) => entry(`/percorsi/${path.id}/`, 0.8, 'monthly'))

    const tips = LIFE_HACKS.map((hack) =>
        entry(`/tips/${hack.slug}/`, 0.75, 'monthly', latest(hack.lastReviewedAt)),
    )

    const templates = CIVIC_TEMPLATES.map((tpl) =>
        entry(`/modelli/${tpl.slug}/`, 0.8, 'monthly', latest(tpl.lastReviewedAt)),
    )

    const news = CIVIC_NEWS.map((item) =>
        entry(`/novita/${item.slug}/`, 0.8, 'weekly', latest(item.date, item.lastReviewedAt)),
    )

    const staticEntries = staticRoutes.map((route) =>
        entry(
            route,
            route === '/' ? 1 : KEY_HUBS.has(route) ? 0.9 : 0.7,
            route === '/novita/' || route === '/' ? 'weekly' : 'monthly',
        ),
    )

    return [
        ...staticEntries,
        ...categories,
        ...paths,
        ...modules,
        ...lessons,
        ...tips,
        ...templates,
        ...news,
    ]
}
