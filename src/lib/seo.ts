import type { Metadata } from 'next'
import { ALL_MODULES } from '@/data/modules/index'
import { LEARNING_PATHS } from '@/data/paths'
import { siteStats } from '@/lib/stats'
import { CATEGORY_LABELS } from '@/lib/categories'
import type { Lesson, Module, LifeHack, CategoryID, CivicTemplate, NewsItem } from '@/types'
import {
    SITE_URL,
    SITE_NAME,
    CREATOR_NAME,
    DEFAULT_OG_IMAGE,
    CONTACT_EMAIL,
    CREATOR_URL,
    absoluteUrl,
    breadcrumbStructuredData,
} from '@/lib/seo-core'

export {
    SITE_URL,
    SITE_NAME,
    CREATOR_NAME,
    CREATOR_PATH,
    DEFAULT_OG_IMAGE,
    CONTACT_EMAIL,
    CREATOR_URL,
    withTrailingSlash,
    absoluteUrl,
    breadcrumbStructuredData,
} from '@/lib/seo-core'

export const TOTAL_MODULES = siteStats.totalModules
export const TOTAL_LESSONS = siteStats.totalLessons

export const SITE_DESCRIPTION = `Busssola è l'hub pubblico di risorse civiche gratuite per orientarsi tra documenti, diritti e procedure in Italia: ${siteStats.totalLessons} guide pratiche su SPID, CIE, ISEE, 730, NASpI, bonus, sicurezza digitale e tutele del cittadino.`

const baseKeywords = [
    'Busssola',
    'busssola.com',
    'guida civica italia',
    'procedure PA Italia',
    'diritti del cittadino',
    CREATOR_NAME,
    'Adelajdo Haxhiaj Busssola',
]

const categoryDescriptions: Record<CategoryID, string> = {
    documenti: 'Come richiedere SPID, CIE, passaporto, certificati ANPR e gestire i documenti d\'identità in Italia.',
    lavoro: 'NASpI, dimissioni telematiche, contratti, domanda di pensione INPS e diritti del lavoratore.',
    casa: 'Cambio di residenza, contratti di affitto, volture utenze, IMU, catasto e tasse sulla casa.',
    soldi: 'pagoPA, cartelle di riscossione, partita IVA, truffe bancarie e gestione sicura dei pagamenti.',
    bonus: 'Come fare ISEE e DSU, bonus sociali luce e gas, Assegno unico e agevolazioni 2026.',
    sanita: 'Orientamento ai servizi sanitari territoriali, tessera sanitaria, ricette e diritti del paziente.',
    famiglia: 'Tutele per minori, cyberbullismo, patti digitali e sicurezza online per genitori e figli.',
    scuola: 'Iscrizioni, registro elettronico, educazione civica digitale e strumenti per docenti e famiglie.',
    sicurezza: 'Come proteggere account, email e dati personali da accessi non autorizzati e violazioni.',
    truffe: 'Come riconoscere phishing, smishing e truffe online, e cosa fare dopo un clic sbagliato.',
    privacy: 'Gestione dei dati personali, consensi, cookie e strumenti per la tutela della privacy.',
    emergenze: 'Protocolli di primo soccorso digitale per account rubati, ricatti e situazioni urgenti. In pericolo fisico chiama il 112.',
    immigrazione: 'Permesso di soggiorno, cittadinanza e orientamento per cittadini stranieri sulle procedure ufficiali.',
    consumatori: 'Garanzia legale, resi online, bonus energetici e tutele negli acquisti.',
    mobilita: 'Patente, agevolazioni sul trasporto e procedure per la mobilità.',
    universita: 'ISEE universitario, borse di studio e accesso ai servizi accademici.',
    anziani: 'Sostegni per la terza età, caregiver, SPID per un familiare e servizi INPS per over 65.',
    disabilita: 'Legge 104, invalidità civile, agevolazioni e servizi per persone con disabilità e caregiver.',
    'casa-digitale': 'Sicurezza di account domestici, IoT e gestione tecnologica dell\'abitazione.',
    giustizia: 'Patrocinio a spese dello Stato, mediazione civile e orientamento agli uffici giudiziari sul sito della Giustizia.',
}

const categoryKeywords: Record<CategoryID, string[]> = {
    documenti: ['come richiedere SPID', 'CIE carta identità elettronica', 'passaporto questura', 'certificati ANPR'],
    lavoro: ['domanda NASpI', 'dimissioni telematiche', 'domanda pensione INPS', 'diritti del lavoratore'],
    casa: ['cambio residenza comune', 'voltura utenze', 'IMU 2026', 'visura catastale'],
    soldi: ['pagoPA', 'cartelle esattoriali', 'aprire partita IVA', 'truffe bancarie'],
    bonus: ['come fare ISEE', 'ISEE 2026', 'bonus sociali luce gas', 'Assegno unico 2026'],
    sanita: ['tessera sanitaria', 'scelta medico di base', 'Fascicolo Sanitario Elettronico'],
    famiglia: ['Assegno unico', 'tutela minori online', 'cyberbullismo scuola'],
    scuola: ['iscrizione scuola online', 'registro elettronico', 'educazione civica digitale'],
    sicurezza: ['attivare 2FA', 'password manager', 'account violato cosa fare'],
    truffe: ['riconoscere phishing', 'SMS truffa INPS', 'truffa bonifico'],
    privacy: ['diritto all\'oblio', 'consenso cookie', 'Garante privacy'],
    emergenze: ['account rubato', 'sextortion cosa fare', 'chiama 112'],
    immigrazione: ['permesso di soggiorno', 'cittadinanza italiana domanda', 'kit permesso di soggiorno'],
    consumatori: ['recesso 14 giorni', 'garanzia legale 2 anni', 'bonus sociale energia'],
    mobilita: ['rinnovo patente', 'bollo auto', 'agevolazioni trasporto'],
    universita: ['ISEE universitario', 'borsa di studio DSU', 'tasse universitarie'],
    anziani: ['SPID per anziani', 'delega INPS', 'accompagnamento INPS'],
    disabilita: ['legge 104 domanda', 'invalidità civile INPS', 'permessi 104'],
    'casa-digitale': ['sicurezza Wi-Fi casa', 'password router', 'telecamere IoT'],
    giustizia: ['patrocinio a spese dello Stato', 'mediazione civile', 'ufficio NEP'],
}

type SeoMetadataOptions = {
    title: string
    description?: string
    path?: string
    keywords?: string[]
    image?: string
    type?: 'website' | 'article'
    noIndex?: boolean
    publishedTime?: string
    modifiedTime?: string
    section?: string
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
    publishedTime,
    modifiedTime,
    section,
}: SeoMetadataOptions): Metadata {
    const url = absoluteUrl(path)
    const imageUrl = absoluteUrl(image)
    const ogImageAlt = `${SITE_NAME}: guide civiche gratuite per procedure italiane, create da ${CREATOR_NAME}`

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
                    alt: ogImageAlt,
                },
            ],
            ...(type === 'article'
                ? {
                    publishedTime,
                    modifiedTime: modifiedTime ?? publishedTime,
                    authors: [CREATOR_NAME],
                    section,
                }
                : {}),
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
    url: `${SITE_URL}/`,
    logo: absoluteUrl('/icon-512.png'),
    email: CONTACT_EMAIL,
    founder: { '@id': `${CREATOR_URL}#person` },
    creator: { '@id': `${CREATOR_URL}#person` },
    description: SITE_DESCRIPTION,
    publishingPrinciples: absoluteUrl('/metodo-editoriale/'),
    sameAs: ['https://github.com/ajdohaxhia/busssola'],
}

export const websiteStructuredData = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: ['Busssola.com', 'Bussola civica'],
    url: `${SITE_URL}/`,
    inLanguage: 'it-IT',
    description: SITE_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    creator: { '@id': `${CREATOR_URL}#person` },
    author: { '@id': `${CREATOR_URL}#person` },
    isAccessibleForFree: true,
    potentialAction: {
        '@type': 'SearchAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/moduli/?q={search_term_string}`,
        },
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
        dateModified: '2026-08-14',
        inLanguage: 'it-IT',
        isAccessibleForFree: true,
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
        dateModified: module.lastUpdated,
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
        inLanguage: 'it-IT',
        isAccessibleForFree: true,
        step: lesson.steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            text: step,
            name: `Passaggio ${index + 1}`,
        })),
        totalTime: `PT${lesson.estimatedMinutes}M`,
        estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: 'EUR',
            value: lesson.estimatedCosts?.includes('Gratis') ? '0' : 'unknown',
        },
    }
}

export function faqPageStructuredData(faqs: { q: string; a: string }[]) {
    return {
        '@context': 'https://schema.org',
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
    const reviewed = lesson.lastReviewedAt

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
        datePublished: reviewed,
        dateModified: reviewed,
        articleSection: moduleTitle,
        position: lessonNumber,
        isPartOf: { '@id': `${absoluteUrl(`/moduli/${module.id}/`)}#course` },
    }

    const graph: Record<string, unknown>[] = [article]

    const howTo = howToStructuredData(lesson, path)
    if (howTo) graph.push(howTo)

    if (lesson.faqs && lesson.faqs.length > 0) {
        const faq = faqPageStructuredData(lesson.faqs)
        graph.push({
            '@type': faq['@type'],
            mainEntity: faq.mainEntity,
        })
    }

    graph.push(breadcrumbStructuredData([
        { name: 'Guide', path: '/moduli/' },
        { name: moduleTitle, path: `/moduli/${module.id}/` },
        { name: lesson.title, path },
    ]))

    return {
        '@context': 'https://schema.org',
        '@graph': graph,
    }
}

export function moduleMetadata(module: Module): Metadata {
    const title = stripModulePrefix(module.title)

    return buildSeoMetadata({
        title,
        description: module.description,
        path: `/moduli/${module.id}/`,
        type: 'article',
        modifiedTime: module.lastUpdated,
        section: module.category ? CATEGORY_LABELS[module.category] : undefined,
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
        publishedTime: lesson.lastReviewedAt,
        modifiedTime: lesson.lastReviewedAt,
        section: moduleTitle,
        keywords: [
            lesson.title,
            moduleTitle,
            lesson.mainEntity ?? '',
            ...(lesson.tags || []),
        ],
    })
}

export function tipMetadata(hack: LifeHack): Metadata {
    return buildSeoMetadata({
        title: `${hack.title} | Life Hacks Civici`,
        description: hack.summary,
        path: `/tips/${hack.slug}/`,
        type: 'article',
        publishedTime: hack.lastReviewedAt,
        modifiedTime: hack.lastReviewedAt,
        section: CATEGORY_LABELS[hack.category] ?? hack.category,
        keywords: [hack.title, hack.category, hack.benefit, ...(hack.badges as string[])],
    })
}

export function clusterMetadata(category: CategoryID): Metadata {
    const title = CATEGORY_LABELS[category]
    return buildSeoMetadata({
        title: `${title} | Guide pratiche e procedure`,
        description: categoryDescriptions[category] || `Elenco di tutte le guide e procedure per la categoria ${title}.`,
        path: `/moduli/categoria/${category}/`,
        keywords: categoryKeywords[category] ?? [title],
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
        isAccessibleForFree: true,
        author: { '@id': `${CREATOR_URL}#person` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        datePublished: hack.lastReviewedAt,
        dateModified: hack.lastReviewedAt,
    }

    const graph: Record<string, unknown>[] = [article]

    if (hack.steps && hack.steps.length > 0) {
        graph.push({
            '@type': 'HowTo',
            name: hack.title,
            description: hack.summary,
            url: absoluteUrl(path),
            inLanguage: 'it-IT',
            isAccessibleForFree: true,
            step: hack.steps.map((step, index) => ({
                '@type': 'HowToStep',
                position: index + 1,
                text: step,
                name: `Passaggio ${index + 1}`,
            })),
            totalTime: hack.time.includes('min') ? `PT${hack.time.replace(/\D/g, '')}M` : undefined,
        })
    }

    graph.push(breadcrumbStructuredData([
        { name: 'Trucchi', path: '/tips/' },
        { name: hack.title, path },
    ]))

    return {
        '@context': 'https://schema.org',
        '@graph': graph,
    }
}

export function templateMetadata(tpl: CivicTemplate): Metadata {
    return buildSeoMetadata({
        title: `${tpl.title} | Modelli`,
        description: tpl.summary,
        path: `/modelli/${tpl.slug}/`,
        type: 'article',
        publishedTime: tpl.lastReviewedAt,
        modifiedTime: tpl.lastReviewedAt,
        section: CATEGORY_LABELS[tpl.category] ?? tpl.category,
        keywords: [tpl.title, tpl.shortTitle, tpl.officialEntity, tpl.category],
    })
}

export function newsMetadata(item: NewsItem): Metadata {
    return buildSeoMetadata({
        title: `${item.title} | Novità`,
        description: item.summary,
        path: `/novita/${item.slug}/`,
        type: 'article',
        publishedTime: item.date,
        modifiedTime: item.lastReviewedAt,
        section: 'Novità',
        keywords: [item.title, 'novità 2026', item.whoIsAffected],
    })
}

export function templateStructuredData(tpl: CivicTemplate) {
    const path = `/modelli/${tpl.slug}/`
    const article = {
        '@type': 'Article',
        '@id': `${absoluteUrl(path)}#article`,
        headline: tpl.title,
        description: tpl.summary,
        url: absoluteUrl(path),
        image: absoluteUrl(DEFAULT_OG_IMAGE),
        inLanguage: 'it-IT',
        isAccessibleForFree: true,
        author: { '@id': `${CREATOR_URL}#person` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        datePublished: tpl.lastReviewedAt,
        dateModified: tpl.lastReviewedAt,
        articleSection: CATEGORY_LABELS[tpl.category] ?? tpl.category,
    }

    const graph: Record<string, unknown>[] = [article]

    if (tpl.steps.length > 0) {
        graph.push({
            '@type': 'HowTo',
            name: tpl.title,
            description: tpl.summary,
            url: absoluteUrl(path),
            inLanguage: 'it-IT',
            isAccessibleForFree: true,
            totalTime: `PT${tpl.estimatedMinutes}M`,
            step: tpl.steps.map((step, index) => ({
                '@type': 'HowToStep',
                position: index + 1,
                text: step,
                name: `Passaggio ${index + 1}`,
            })),
        })
    }

    graph.push(breadcrumbStructuredData([
        { name: 'Modelli', path: '/modelli/' },
        { name: tpl.shortTitle, path },
    ]))

    return {
        '@context': 'https://schema.org',
        '@graph': graph,
    }
}

export function newsStructuredData(item: NewsItem) {
    const path = `/novita/${item.slug}/`
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'NewsArticle',
                '@id': `${absoluteUrl(path)}#article`,
                headline: item.title,
                description: item.summary,
                url: absoluteUrl(path),
                image: absoluteUrl(DEFAULT_OG_IMAGE),
                inLanguage: 'it-IT',
                isAccessibleForFree: true,
                datePublished: item.date,
                dateModified: item.lastReviewedAt,
                author: { '@id': `${CREATOR_URL}#person` },
                creator: { '@id': `${CREATOR_URL}#person` },
                publisher: { '@id': `${SITE_URL}/#organization` },
                articleSection: 'Novità civiche',
                citation: item.sources.map((source) => ({
                    '@type': 'CreativeWork',
                    name: source.title,
                    url: source.url,
                    publisher: source.organization,
                })),
            },
            breadcrumbStructuredData([
                { name: 'Novità', path: '/novita/' },
                { name: item.title, path },
            ]),
        ],
    }
}

export function HUB_METADATA_BUILDER(key: string): SeoMetadataOptions {
    const map: Record<string, SeoMetadataOptions> = {
        sos: {
            title: 'SOS: in pericolo chiama 112. Poi i protocolli',
            description: 'Se sei in pericolo fisico chiama subito il 112. Busssola non è un servizio di emergenza. Qui trovi protocolli per stalking, sextortion, furto account, truffe e altre urgenze, con fonti ufficiali.',
            path: '/sos/',
            keywords: ['chiama 112', 'sos digitale', 'stalking 1522', 'sextortion', 'account rubato', 'truffa bancaria'],
        },
        checklist: {
            title: 'Checklist operative per procedure e sicurezza',
            description: 'Liste di controllo rapide per non dimenticare nulla: rinnovo passaporto, cambio residenza, sicurezza account e protocolli di emergenza.',
            path: '/checklist/',
            keywords: ['checklist burocrazia', 'protocollo sicurezza', 'cose da fare passaporto', 'sicurezza account checklist'],
        },
        glossario: {
            title: 'Glossario civico: termini burocratici spiegati semplici',
            description: 'Dizionario pratico per cittadini: SPID, CIE, ISEE, NASpI, phishing e termini tecnici spiegati in parole povere con esempi reali.',
            path: '/glossario/',
            keywords: ['glossario burocrazia', 'significato SPID', 'cos\'è ISEE', 'termini sicurezza digitale'],
        },
        tips: {
            title: 'Life hacks civici: scorciatoie legali e trucchi pratici',
            description: 'Consigli rapidi per risparmiare tempo e denaro con la Pubblica Amministrazione e proteggere la tua vita digitale in modo intelligente.',
            path: '/tips/',
            keywords: ['life hacks civici', 'trucchi burocrazia', 'risparmiare tempo PA', 'consigli digitali'],
        },
        modelli: {
            title: 'Modelli e kit documentali per procedure italiane',
            description: 'Pacchetti stampabili e verificabili per 730, ISEE, NASpI, SPID, CIE, residenza, permesso di soggiorno e altre pratiche. Non sono moduli ufficiali: sono liste di documenti e passi con fonti istituzionali.',
            path: '/modelli/',
            keywords: ['modello 730 documenti', 'kit ISEE DSU', 'checklist NASpI', 'documenti cambio residenza', 'come richiedere SPID'],
        },
        novita: {
            title: 'Novità civiche 2026: scadenze e cambiamenti verificati',
            description: 'Cosa è cambiato nelle procedure pubbliche italiane, con fonti INPS, Agenzia delle Entrate, Ministero del Lavoro, MIT e ARERA. Aggiornato al 27 agosto 2026.',
            path: '/novita/',
            keywords: ['novità ISEE 2026', '730 precompilato 2026 scadenze', 'NASpI 2026', 'Assegno Unico 30 giugno 2026'],
        },
        fonti: {
            title: 'Archivio fonti ufficiali e istituzionali',
            description: 'Trasparenza totale: l\'elenco di tutti i portali governativi (.gov.it) e manuali tecnici utilizzati per validare le nostre guide.',
            path: '/fonti/',
            keywords: ['fonti ufficiali PA', 'portali governativi Italia', 'trasparenza contenuti civici'],
        },
        scuole: {
            title: 'Hub per scuole e docenti: educazione civica digitale',
            description: 'Materiali didattici, piani di lezione da 45 minuti e kit pronti per laboratori su cyberbullismo, truffe e cittadinanza digitale.',
            path: '/scuole/',
            keywords: ['materiali didattici educazione civica', 'lezione cyberbullismo', 'kit docenti sicurezza digitale'],
        },
    }
    return map[key] || { title: SITE_NAME }
}

export function getModule(id: string) {
    return ALL_MODULES.find((module) => module.id === id)
}
