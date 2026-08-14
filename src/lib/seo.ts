import type { Metadata } from 'next'
import { ALL_MODULES } from '@/data/modules/index'
import { LEARNING_PATHS } from '@/data/paths'
import { siteStats } from '@/lib/stats'
import type { Lesson, Module, LifeHack, CategoryID, CivicTemplate, NewsItem } from '@/types'

export const SITE_URL = 'https://busssola.com'
export const SITE_NAME = 'Busssola'
export const CREATOR_NAME = 'Adelajdo Haxhiaj'
export const CREATOR_PATH = '/adelajdo-haxhiaj'
export const CREATOR_URL = `${SITE_URL}${CREATOR_PATH}`
export const DEFAULT_OG_IMAGE = '/og-image.png'

export const TOTAL_MODULES = siteStats.totalModules
export const TOTAL_LESSONS = siteStats.totalLessons

export const SITE_DESCRIPTION = `Busssola è l'hub pubblico di risorse civiche gratuite per orientarsi tra documenti, diritti e procedure in Italia: ${siteStats.totalLessons} guide pratiche su SPID, CIE, NASpI, bonus, sicurezza digitale e tutele del cittadino.`


const baseKeywords = [
    'Busssola',
    'busssola.com',
    'guida civica italia',
    'documenti e procedure',
    'come richiedere spid',
    'come fare cie carta identità',
    'richiesta naspi online',
    'cambio residenza comune',
    'bonus e agevolazioni italia',
    'diritti del cittadino',
    'sicurezza online',
    'privacy digitale',
    'cyberbullismo',
    'phishing',
    'truffe online',
    'benessere digitale',
    CREATOR_NAME,
    'Adelajdo Haxhiaj Busssola',
]

const categoryDescriptions: Record<CategoryID, string> = {
    'documenti': 'Guide pratiche per richiedere SPID, CIE, passaporto, certificati ANPR e gestire i documenti d\'identità.',
    'lavoro': 'Informazioni su NASpI, dimissioni telematiche, contratti di lavoro e diritti del lavoratore in Italia.',
    'casa': 'Come gestire il cambio di residenza, contratti di affitto, volture utenze e tasse sulla casa.',
    'soldi': 'Tutele contro truffe bancarie, pagamenti pagoPA, contestazioni PayPal e gestione sicura del denaro.',
    'bonus': 'Guida a ISEE, bonus sociali, agevolazioni fiscali e sostegni economici per famiglie e cittadini.',
    'sanita': 'Orientamento ai servizi sanitari territoriali, tessera sanitaria e diritti del paziente.',
    'famiglia': 'Tutele per minori, cyberbullismo, patti digitali e sicurezza online per genitori e figli.',
    'scuola': 'Risorse per l\'educazione civica digitale, strumenti per docenti e orientamento scolastico.',
    'sicurezza': 'Protocolli per proteggere account, email e dati personali da attacchi hacker e violazioni.',
    'truffe': 'Come riconoscere e difendersi da phishing, smishing e truffe online di ogni tipo.',
    'privacy': 'Gestione dei dati personali, consensi, cookie e strumenti per la tutela della propria privacy.',
    'emergenze': 'Protocolli di primo soccorso digitale per account rubati, ricatti e situazioni urgenti.',
    'immigrazione': 'Procedure per permessi di soggiorno, cittadinanza e orientamento per cittadini stranieri.',
    'consumatori': 'Diritti dei consumatori, garanzia legale, resi online e tutele negli acquisti.',
    'mobilita': 'Agevolazioni trasporti, patenti e procedure per la mobilità sostenibile.',
    'universita': 'Guide per studenti universitari, borse di studio e accesso ai servizi accademici.',
    'anziani': 'Sostegni per la terza età, caregiver e digitalizzazione per over 65.',
    'disabilita': 'Diritti, agevolazioni e servizi per persone con disabilità e le loro famiglie.',
    'casa-digitale': 'Sicurezza domotica, IoT e gestione tecnologica dell\'abitazione.'
}

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
    return title.replace(/Modulo \d+[b]?:\s*/i, '')
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
    description: `${CREATOR_NAME} è il creatore di ${SITE_NAME}, piattaforma civica gratuita per orientarsi tra diritti, documenti e sicurezza digitale in Italia.`,
    knowsAbout: [
        'cittadinanza attiva',
        'burocrazia italiana',
        'diritti del cittadino',
        'sicurezza online',
        'privacy digitale',
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

export const siteStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        creatorPerson,
        organizationStructuredData,
        websiteStructuredData,
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
        dateCreated: '2025-01-01',
        dateModified: '2026-05-15',
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

export function howToStructuredData(lesson: Lesson, path: string) {
    if (!lesson.steps || lesson.steps.length === 0) return null

    return {
        '@type': 'HowTo',
        name: lesson.title,
        description: lesson.summary,
        url: absoluteUrl(path),
        step: lesson.steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            text: step,
            name: `Passaggio ${index + 1}`
        })),
        totalTime: `PT${lesson.estimatedMinutes}M`,
        estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: 'EUR',
            value: lesson.estimatedCosts?.includes('Gratis') ? '0' : 'unknown'
        }
    }
}

export function faqPageStructuredData(faqs: { q: string; a: string }[]) {
    return {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
            },
        })),
    }
}

export function lessonStructuredData(module: Module, lesson: Lesson, lessonNumber: number) {
    const moduleTitle = stripModulePrefix(module.title)
    const path = `/moduli/${module.id}/lezione/${lessonNumber}/`
    
    const article = {
        '@type': 'Article',
        '@id': `${absoluteUrl(path)}#article`,
        headline: `${lesson.title} - ${moduleTitle}`,
        description: lesson.summary,
        url: absoluteUrl(path),
        image: absoluteUrl(DEFAULT_OG_IMAGE),
        inLanguage: 'it-IT',
        isAccessibleForFree: true,
        author: { '@id': `${CREATOR_URL}#person` },
        creator: { '@id': `${CREATOR_URL}#person` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        datePublished: '2026-01-01',
        dateModified: lesson.lastReviewedAt,
        articleSection: moduleTitle,
        position: lessonNumber,
        isPartOf: { '@id': `${absoluteUrl(`/moduli/${module.id}/`)}#course` },
    }

    const graph: Record<string, unknown>[] = [article]

    const howTo = howToStructuredData(lesson, path)
    if (howTo) graph.push(howTo)

    if (lesson.faqs && lesson.faqs.length > 0) {
        graph.push(faqPageStructuredData(lesson.faqs))
    }

    return {
        '@context': 'https://schema.org',
        '@graph': graph
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
            ...(module.tags || []),
            ...module.lessons.slice(0, 8).map((lesson) => lesson.title),
        ],
    })
}

export function lessonMetadata(module: Module, lesson: Lesson, lessonNumber: number): Metadata {
    const moduleTitle = stripModulePrefix(module.title)

    return buildSeoMetadata({
        title: `${lesson.title} | ${moduleTitle}`,
        description: lesson.summary,
        path: `/moduli/${module.id}/lezione/${lessonNumber}/`,
        type: 'article',
        keywords: [
            lesson.title,
            moduleTitle,
            lesson.mainEntity ?? '',
            ...(lesson.tags || []),
            ...(lesson.checklist || []),
        ],
    })
}

export function tipMetadata(hack: LifeHack): Metadata {
    return buildSeoMetadata({
        title: `${hack.title} | Life Hacks Civici`,
        description: hack.summary,
        path: `/tips/${hack.slug}/`,
        type: 'article',
        keywords: [hack.title, hack.category, hack.benefit, ...(hack.badges as string[])],
    })
}

export function clusterMetadata(category: CategoryID): Metadata {
    const title = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')
    return buildSeoMetadata({
        title: `${title} | Guide pratiche e procedure`,
        description: categoryDescriptions[category] || `Elenco di tutte le guide e procedure per la categoria ${title}.`,
        path: `/moduli/categoria/${category}`,
    })
}

export function learningPathMetadata(pathId: string): Metadata | undefined {
    const path = LEARNING_PATHS.find((item) => item.id === pathId)
    if (!path) return undefined

    return buildSeoMetadata({
        title: `${path.title} | Percorso guidato`,
        description: path.description,
        path: `/percorsi/${path.id}/`,
        keywords: [path.title, path.audience, path.type, path.level],
    })
}

export function tipStructuredData(hack: LifeHack) {
    const path = `/tips/${hack.slug}/`
    const article = {
        '@type': 'Article',
        '@id': `${absoluteUrl(path)}#article`,
        headline: hack.title,
        description: hack.summary,
        url: absoluteUrl(path),
        image: absoluteUrl(DEFAULT_OG_IMAGE),
        inLanguage: 'it-IT',
        author: { '@id': `${CREATOR_URL}#person` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        datePublished: '2026-01-01',
        dateModified: hack.lastReviewedAt,
    }

    if (hack.steps && hack.steps.length > 0) {
        const howTo = {
            '@type': 'HowTo',
            name: hack.title,
            description: hack.summary,
            url: absoluteUrl(path),
            step: hack.steps.map((step, index) => ({
                '@type': 'HowToStep',
                position: index + 1,
                text: step,
                name: `Passaggio ${index + 1}`
            })),
            totalTime: hack.time.includes('min') ? `PT${hack.time.replace(/\D/g, '')}M` : undefined,
        }
        return {
            '@context': 'https://schema.org',
            '@graph': [article, howTo]
        }
    }

    return article
}

export function HUB_METADATA_BUILDER(key: string): SeoMetadataOptions {
    const map: Record<string, SeoMetadataOptions> = {
        'sos': {
            title: 'SOS: in pericolo chiama 112. Poi i protocolli',
            description: 'Se sei in pericolo fisico chiama subito il 112. Busssola non è un servizio di emergenza. Qui trovi protocolli per stalking, sextortion, furto account, truffe e altre urgenze, con fonti ufficiali.',
            path: '/sos/',
            keywords: ['chiama 112', 'sos digitale', 'stalking 1522', 'sextortion', 'account rubato', 'truffa bancaria'],
        },
        'checklist': {
            title: 'Checklist Operative per procedure e sicurezza',
            description: 'Liste di controllo rapide per non dimenticare nulla: rinnovo passaporto, cambio residenza, sicurezza account e protocolli di emergenza.',
            path: '/checklist/',
            keywords: ['checklist burocrazia', 'protocollo sicurezza', 'cose da fare passaporto', 'sicurezza account checklist'],
        },
        'glossario': {
            title: 'Glossario Civico: termini burocratici spiegati semplici',
            description: 'Dizionario pratico per cittadini: SPID, CIE, ISEE, NASpI, Phishing e termini tecnici spiegati in parole povere con esempi reali.',
            path: '/glossario/',
            keywords: ['glossario burocrazia', 'significato spid', 'cos\'è isee', 'termini sicurezza digitale'],
        },
        'tips': {
            title: 'Life Hacks Civici: scorciatoie legali e trucchi pratici',
            description: 'Consigli rapidi per risparmiare tempo e denaro con la Pubblica Amministrazione e proteggere la tua vita digitale in modo intelligente.',
            path: '/tips/',
            keywords: ['life hacks civici', 'trucchi burocrazia', 'risparmiare tempo pa', 'consigli digitali'],
        },
        'modelli': {
            title: 'Modelli e kit documentali per procedure italiane',
            description: 'Pacchetti stampabili e verificabili per 730, ISEE, NASpI, SPID, CIE, residenza, permesso di soggiorno e altre pratiche. Non sono moduli ufficiali: sono liste di documenti e passi con fonti istituzionali.',
            path: '/modelli/',
            keywords: ['modello 730 documenti', 'kit ISEE DSU', 'checklist NASpI', 'documenti cambio residenza'],
        },
        'novita': {
            title: 'Novità civiche 2026: scadenze e cambiamenti verificati',
            description: 'Cosa è cambiato nelle procedure pubbliche italiane, con fonti INPS, Agenzia delle Entrate, Ministero del Lavoro e ARERA. Aggiornato al 14 agosto 2026.',
            path: '/novita/',
            keywords: ['novità ISEE 2026', '730 precompilato 2026 scadenze', 'NASpI 2026', 'Assegno Unico 30 giugno 2026'],
        },
        'fonti': {
            title: 'Archivio Fonti Ufficiali e Istituzionali',
            description: 'Trasparenza totale: l\'elenco di tutti i portali governativi (.gov.it) e manuali tecnici utilizzati per validare le nostre guide.',
            path: '/fonti/',
            keywords: ['fonti ufficiali pa', 'portali governativi italia', 'trasparenza contenuti civici'],
        },
        'scuole': {
            title: 'Hub per Scuole e Docenti: Educazione Civica Digitale',
            description: 'Materiali didattici, piani di lezione da 45 minuti e kit pronti per laboratori su cyberbullismo, truffe e cittadinanza digitale.',
            path: '/scuole/',
            keywords: ['materiali didattici educazione civica', 'lezione cyberbullismo', 'kit docenti sicurezza digitale'],
        }
    }
    return map[key] || { title: SITE_NAME }
}

export function templateMetadata(tpl: CivicTemplate): Metadata {
    return buildSeoMetadata({
        title: `${tpl.title} | Modelli`,
        description: tpl.summary,
        path: `/modelli/${tpl.slug}/`,
        type: 'article',
        keywords: [tpl.title, tpl.shortTitle, tpl.officialEntity, tpl.category],
    })
}

export function newsMetadata(item: NewsItem): Metadata {
    return buildSeoMetadata({
        title: `${item.title} | Novità`,
        description: item.summary,
        path: `/novita/${item.slug}/`,
        type: 'article',
        keywords: [item.title, 'novità 2026', item.whoIsAffected],
    })
}

export function getModule(id: string) {
    return ALL_MODULES.find((module) => module.id === id)
}
