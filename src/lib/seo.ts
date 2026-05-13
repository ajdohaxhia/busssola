import type { Metadata } from 'next'
import { ALL_MODULES } from '@/data/modules/index'
import { LEARNING_PATHS } from '@/data/paths'
import type { Lesson, Module } from '@/types'

export const SITE_URL = 'https://bussola.edu.it'
export const SITE_NAME = 'Bussola'
export const CREATOR_NAME = 'Adelajdo Haxhiaj'
export const CREATOR_PATH = '/adelajdo-haxhiaj'
export const CREATOR_URL = `${SITE_URL}${CREATOR_PATH}`
export const DEFAULT_OG_IMAGE = '/og-image.png'

const TOTAL_LESSONS = ALL_MODULES.reduce((acc, module) => acc + module.lessons.length, 0)
const LESSON_COUNT_LABEL = `${TOTAL_LESSONS} lezioni`

export const SITE_DESCRIPTION =
    `Bussola è una piattaforma gratuita di educazione civica digitale per ragazzi, famiglie e scuole: ${ALL_MODULES.length} moduli e ${LESSON_COUNT_LABEL} verificate su sicurezza online, privacy, truffe, cyberbullismo e benessere digitale.`

export const TOTAL_MODULES = ALL_MODULES.length
export { TOTAL_LESSONS }

const baseKeywords = [
    'Bussola',
    'bussola.edu.it',
    'sicurezza online',
    'educazione digitale',
    'educazione civica digitale',
    'privacy online',
    'cyberbullismo',
    'grooming online',
    'sextortion',
    'phishing',
    'truffe online',
    'benessere digitale',
    'sicurezza ragazzi internet',
    'sicurezza digitale famiglie',
    'cittadinanza digitale scuole',
    CREATOR_NAME,
    'Adelajdo Haxhiaj Bussola',
]

type SeoMetadataOptions = {
    title: string
    description?: string
    path?: string
    keywords?: string[]
    image?: string
    type?: 'website' | 'article'
    noIndex?: boolean
}

export function absoluteUrl(path = '/') {
    if (path.startsWith('http')) return path
    const normalizedPath = path.startsWith('/') ? path : `/${path}`
    return `${SITE_URL}${normalizedPath}`
}

export function stripModulePrefix(title: string) {
    return title.replace(/Modulo \d+:\s*/i, '')
}

function uniqueKeywords(keywords: string[]) {
    return [...new Set(keywords.map((keyword) => keyword.trim()).filter(Boolean))]
}

export function buildSeoMetadata({
    title,
    description = SITE_DESCRIPTION,
    path = '/',
    keywords = [],
    image = DEFAULT_OG_IMAGE,
    type = 'website',
    noIndex = false,
}: SeoMetadataOptions): Metadata {
    const url = absoluteUrl(path)
    const imageUrl = absoluteUrl(image)

    return {
        title,
        description,
        applicationName: SITE_NAME,
        authors: [{ name: CREATOR_NAME, url: CREATOR_URL }],
        creator: CREATOR_NAME,
        publisher: SITE_NAME,
        category: 'education',
        keywords: uniqueKeywords([...baseKeywords, ...keywords]),
        alternates: {
            canonical: url,
        },
        robots: noIndex
            ? { index: false, follow: false }
            : {
                index: true,
                follow: true,
                googleBot: {
                    index: true,
                    follow: true,
                    'max-snippet': -1,
                    'max-image-preview': 'large',
                    'max-video-preview': -1,
                },
            },
        openGraph: {
            type,
            locale: 'it_IT',
            url,
            title,
            description,
            siteName: SITE_NAME,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${SITE_NAME} - educazione digitale creata da ${CREATOR_NAME}`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [imageUrl],
        },
    }
}

export const creatorPerson = {
    '@type': 'Person',
    '@id': `${CREATOR_URL}#person`,
    name: CREATOR_NAME,
    url: CREATOR_URL,
    jobTitle: `Creatore di ${SITE_NAME}`,
    description: `${CREATOR_NAME} è il creatore di ${SITE_NAME}, piattaforma gratuita di educazione civica digitale per sicurezza online, privacy e consapevolezza in rete.`,
    knowsAbout: [
        'educazione digitale',
        'sicurezza online',
        'privacy digitale',
        'cittadinanza digitale',
        'prevenzione dei rischi online',
    ],
}

export const organizationStructuredData = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl('/icon-512.png'),
    founder: { '@id': `${CREATOR_URL}#person` },
    creator: { '@id': `${CREATOR_URL}#person` },
    description: SITE_DESCRIPTION,
    publishingPrinciples: absoluteUrl('/metodo-editoriale/'),
}

export const websiteStructuredData = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: ['Busssola.com', 'Bussola sicurezza online'],
    url: SITE_URL,
    inLanguage: 'it-IT',
    description: SITE_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    creator: { '@id': `${CREATOR_URL}#person` },
    author: { '@id': `${CREATOR_URL}#person` },
    isAccessibleForFree: true,
    potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/moduli/?query={search_term_string}`,
        'query-input': 'required name=search_term_string',
    },
}

export const webApplicationStructuredData = {
    '@type': 'WebApplication',
    '@id': `${SITE_URL}/#webapp`,
    name: SITE_NAME,
    url: SITE_URL,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    inLanguage: 'it-IT',
    isAccessibleForFree: true,
    creator: { '@id': `${CREATOR_URL}#person` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    description: SITE_DESCRIPTION,
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
    },
}

export const siteStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        creatorPerson,
        organizationStructuredData,
        websiteStructuredData,
        webApplicationStructuredData,
    ],
}

export function profilePageStructuredData() {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': `${CREATOR_URL}#profile`,
        url: CREATOR_URL,
        name: `${CREATOR_NAME} - creatore di ${SITE_NAME}`,
        headline: `${CREATOR_NAME}, creatore di ${SITE_NAME}`,
        description: `${CREATOR_NAME} è il creatore di ${SITE_NAME}, piattaforma gratuita di educazione civica digitale per ragazzi, famiglie e scuole.`,
        dateCreated: '2026-05-07',
        dateModified: '2026-05-09',
        inLanguage: 'it-IT',
        mainEntity: creatorPerson,
        isPartOf: { '@id': `${SITE_URL}/#website` },
    }
}

export function moduleStructuredData(module: Module) {
    const title = stripModulePrefix(module.title)

    return {
        '@context': 'https://schema.org',
        '@type': 'Course',
        '@id': `${absoluteUrl(`/moduli/${module.id}/`)}#course`,
        name: title,
        description: module.description,
        url: absoluteUrl(`/moduli/${module.id}/`),
        inLanguage: 'it-IT',
        isAccessibleForFree: true,
        provider: { '@id': `${SITE_URL}/#organization` },
        creator: { '@id': `${CREATOR_URL}#person` },
        author: { '@id': `${CREATOR_URL}#person` },
        educationalLevel: module.difficulty ?? 'base',
        teaches: module.lessons.map((lesson) => lesson.title),
        hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: `PT${module.lessons.reduce((total, lesson) => total + (lesson.estimatedMinutes || 0), 0)}M`,
        },
    }
}

export function lessonStructuredData(module: Module, lesson: Lesson, lessonNumber: number) {
    const moduleTitle = stripModulePrefix(module.title)

    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${absoluteUrl(`/moduli/${module.id}/lezione/${lessonNumber}/`)}#article`,
        headline: `${lesson.title} - ${moduleTitle}`,
        description: lesson.summary,
        url: absoluteUrl(`/moduli/${module.id}/lezione/${lessonNumber}/`),
        image: absoluteUrl(DEFAULT_OG_IMAGE),
        inLanguage: 'it-IT',
        isAccessibleForFree: true,
        author: { '@id': `${CREATOR_URL}#person` },
        creator: { '@id': `${CREATOR_URL}#person` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        datePublished: '2026-05-07',
        dateModified: '2026-05-09',
        articleSection: moduleTitle,
        position: lessonNumber,
        isPartOf: { '@id': `${absoluteUrl(`/moduli/${module.id}/`)}#course` },
    }
}

export function breadcrumbStructuredData(items: Array<{ name: string; path: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path),
        })),
    }
}

export function moduleMetadata(module: Module): Metadata {
    const title = stripModulePrefix(module.title)

    return buildSeoMetadata({
        title,
        description: module.description,
        path: `/moduli/${module.id}/`,
        type: 'article',
        keywords: [
            title,
            module.subtitle ?? '',
            module.difficulty ?? '',
            ...module.lessons.slice(0, 8).map((lesson) => lesson.title),
        ],
    })
}

export function lessonMetadata(module: Module, lesson: Lesson, lessonNumber: number): Metadata {
    const moduleTitle = stripModulePrefix(module.title)

    return buildSeoMetadata({
        title: `${lesson.title} - ${moduleTitle}`,
        description: lesson.summary,
        path: `/moduli/${module.id}/lezione/${lessonNumber}/`,
        type: 'article',
        keywords: [
            lesson.title,
            moduleTitle,
            module.subtitle ?? '',
            ...(lesson.checklist || []),
        ],
    })
}

export function learningPathMetadata(pathId: string): Metadata | undefined {
    const path = LEARNING_PATHS.find((item) => item.id === pathId)
    if (!path) return undefined

    return buildSeoMetadata({
        title: `${path.title} - percorso guidato`,
        description: path.description,
        path: `/percorsi/${path.id}/`,
        keywords: [path.title, path.audience, path.type, path.level],
    })
}

export function getModule(id: string) {
    return ALL_MODULES.find((module) => module.id === id)
}
