/**
 * Genera gli artefatti statici che non possono essere prodotti a runtime
 * con `output: "export"`:
 *
 *  - public/search-index.json  → indice di ricerca full-site (client-side)
 *  - public/feed.xml           → feed RSS delle novità verificate
 *
 * Viene eseguito da `prebuild` e `predev` (vedi package.json) e scrive solo
 * dentro `public/`. Nessuna chiamata di rete, nessun dato personale.
 */
import fs from 'fs'
import path from 'path'
import { ALL_MODULES } from '../src/data/modules/index'
import { LIFE_HACKS } from '../src/data/life-hacks'
import { CIVIC_TEMPLATES } from '../src/data/templates'
import { CIVIC_NEWS } from '../src/data/news'
import { LEARNING_PATHS } from '../src/data/paths'
import { CATEGORY_LABELS } from '../src/lib/categories'
import { SITE_URL } from '../src/lib/seo-core'
import type { CategoryID } from '../src/types'
import type { SearchItem, SearchItemType } from '../src/types/search'

const PUBLIC_DIR = path.join(process.cwd(), 'public')
const SEARCH_INDEX_PATH = path.join(PUBLIC_DIR, 'search-index.json')
const FEED_PATH = path.join(PUBLIC_DIR, 'feed.xml')

const TYPE_ORDER: Record<SearchItemType, number> = {
    guida: 0,
    lezione: 1,
    modello: 2,
    trucco: 3,
    strumento: 4,
    percorso: 5,
    novita: 6,
    sezione: 7,
}

const TOOLS: SearchItem[] = [
    {
        title: 'Trova le tue agevolazioni e bonus',
        summary:
            'Questionario guidato per capire quali bonus e agevolazioni pubbliche possono interessarti, con requisiti, fonte ufficiale e procedura di richiesta.',
        url: '/tool/trova-bonus/',
        type: 'strumento',
        category: 'Bonus e ISEE',
        meta: 'Orientamento',
        keywords: 'bonus agevolazioni isee assegno unico bonus sociale trova bonus',
    },
    {
        title: 'Calcolo stipendio netto da RAL',
        summary:
            'Simulatore da lordo a netto con contributi INPS, IRPEF a scaglioni, detrazioni e numero di mensilità. Mostra formula, ipotesi ed esclusioni.',
        url: '/tool/calcolo-stipendio-netto/',
        type: 'strumento',
        category: 'Lavoro',
        meta: 'Calcolatore',
        keywords: 'stipendio netto ral lordo netto busta paga irpef contributi mensilità',
    },
    {
        title: 'Trova la procedura ufficiale',
        summary:
            'Motore di ricerca per intenti: descrivi il problema e ottieni la procedura corrispondente, i documenti, il primo passo e i link ufficiali.',
        url: '/tool/trova-procedura/',
        type: 'strumento',
        category: 'Documenti',
        meta: 'Ricerca guidata',
        keywords: 'procedura documenti sportello comune inps permesso soggiorno spid residenza',
    },
    {
        title: 'Calcolo consumo elettrico degli elettrodomestici',
        summary:
            'Stima il costo in bolletta di condizionatore, forno, lavatrice e altri elettrodomestici a partire da potenza, ore di utilizzo e prezzo del kWh.',
        url: '/tool/calcolo-consumo-elettrico/',
        type: 'strumento',
        category: 'Casa',
        meta: 'Calcolatore',
        keywords: 'consumo elettrico bolletta luce kwh condizionatore costo energia',
    },
    {
        title: 'Scadenzario civico e fiscale',
        summary:
            'Calendario delle scadenze verificate per cittadini e contribuenti: F24, IMU, ISEE, dichiarazione dei redditi e adempimenti INPS.',
        url: '/scadenze/',
        type: 'strumento',
        category: 'Scadenze',
        meta: 'Calendario',
        keywords: 'scadenze fiscali f24 imu isee 730 calendario adempimenti',
    },
]

const HUB_PAGES: SearchItem[] = [
    {
        title: 'Catalogo completo delle guide',
        summary: 'Tutte le guide pratiche e le procedure passo passo, con fonti ufficiali e verifiche.',
        url: '/moduli/',
        type: 'sezione',
        keywords: 'guide catalogo procedure',
    },
    {
        title: 'Tutti gli strumenti e i calcolatori',
        summary: 'Simulatori gratuiti, questionari guidati e calcolatori civici.',
        url: '/tool/',
        type: 'sezione',
        keywords: 'strumenti calcolatori simulatori',
    },
    {
        title: 'Novità verificate',
        summary: 'Cosa è cambiato nelle procedure pubbliche, con fonti istituzionali e data di verifica.',
        url: '/novita/',
        type: 'sezione',
        keywords: 'novità notizie aggiornamenti',
    },
    {
        title: 'Confronti e guide decisionali',
        summary: 'Tabelle comparative per scegliere tra alternative: SPID, CIE, IT-Wallet e non solo.',
        url: '/confronti/',
        type: 'sezione',
        keywords: 'confronti differenze scelta',
    },
    {
        title: 'Modelli e kit documentali',
        summary: 'Pacchetti stampabili con documenti, passi e controlli finali per le pratiche più comuni.',
        url: '/modelli/',
        type: 'sezione',
        keywords: 'modelli kit documenti stampabili',
    },
    {
        title: 'Trucchi civici',
        summary: 'Scorciatoie legali e consigli pratici per risparmiare tempo ed errori.',
        url: '/tips/',
        type: 'sezione',
        keywords: 'trucchi consigli life hacks',
    },
    {
        title: 'Percorsi guidati',
        summary: 'Sequenze ordinate di guide per situazioni specifiche: primo accesso ai servizi, sicurezza, lavoro.',
        url: '/percorsi/',
        type: 'sezione',
        keywords: 'percorsi itinerari guidati',
    },
    {
        title: 'Intelligenza artificiale: guida critica',
        summary: 'Confronto tra assistenti AI, privacy, fact-checking e uso consapevole.',
        url: '/ai/',
        type: 'sezione',
        keywords: 'intelligenza artificiale chatgpt gemini claude ai privacy',
    },
    {
        title: 'Centro SOS: cosa fare subito',
        summary: 'Protocolli per account violati, truffe, ricatti e urgenze digitali. In pericolo fisico chiama il 112.',
        url: '/sos/',
        type: 'sezione',
        keywords: 'sos emergenza account rubato truffa ricatto',
    },
    {
        title: 'Glossario civico',
        summary: 'Termini burocratici e digitali spiegati in modo semplice.',
        url: '/glossario/',
        type: 'sezione',
        keywords: 'glossario dizionario termini',
    },
    {
        title: 'Domande frequenti',
        summary: 'Risposte rapide sui dubbi più comuni su Busssola e sulle procedure.',
        url: '/faq/',
        type: 'sezione',
        keywords: 'faq domande frequenti',
    },
    {
        title: 'Mappa del sito',
        summary: 'Indice completo di tutte le pagine pubblicate, organizzato per tipo e categoria.',
        url: '/mappa-del-sito/',
        type: 'sezione',
        keywords: 'mappa sito indice archivio tutte le pagine',
    },
]

function withSlash(url: string) {
    if (url.endsWith('/')) return url
    return `${url}/`
}

function truncate(value: string, max = 220) {
    const clean = value.replace(/\s+/g, ' ').trim()
    if (clean.length <= max) return clean
    return `${clean.slice(0, max - 1).trimEnd()}…`
}

function stripModulePrefix(title: string) {
    return title.replace(/^Modulo \d+[b]?:\s*/i, '').trim()
}

function categoryLabel(category?: CategoryID | string) {
    if (!category) return undefined
    return CATEGORY_LABELS[category as CategoryID] ?? category
}

function buildSearchItems(): SearchItem[] {
    const items: SearchItem[] = []

    for (const module of ALL_MODULES) {
        const title = stripModulePrefix(module.title)
        items.push({
            title,
            summary: truncate(module.description),
            url: withSlash(`/moduli/${module.id}/`),
            type: 'guida',
            category: categoryLabel(module.category),
            meta: `${module.lessons.length} guide`,
            keywords: [module.subtitle, module.mainEntity, ...(module.tags ?? [])].filter(Boolean).join(' '),
        })

        module.lessons.forEach((lesson, index) => {
            items.push({
                title: lesson.title,
                summary: truncate(lesson.summary),
                url: withSlash(`/moduli/${module.id}/lezione/${index + 1}/`),
                type: 'lezione',
                category: categoryLabel(module.category),
                meta: title,
                keywords: [lesson.mainEntity, ...(lesson.tags ?? [])].filter(Boolean).join(' '),
            })
        })
    }

    for (const hack of LIFE_HACKS) {
        items.push({
            title: hack.title,
            summary: truncate(hack.summary),
            url: withSlash(`/tips/${hack.slug}/`),
            type: 'trucco',
            category: categoryLabel(hack.category),
            meta: hack.time,
            keywords: [hack.benefit, ...(hack.badges ?? [])].filter(Boolean).join(' '),
        })
    }

    for (const template of CIVIC_TEMPLATES) {
        items.push({
            title: template.title,
            summary: truncate(template.summary),
            url: withSlash(`/modelli/${template.slug}/`),
            type: 'modello',
            category: categoryLabel(template.category),
            meta: template.officialEntity,
            keywords: [template.shortTitle, template.officialEntity].filter(Boolean).join(' '),
        })
    }

    for (const item of CIVIC_NEWS) {
        items.push({
            title: item.title,
            summary: truncate(item.summary),
            url: withSlash(`/novita/${item.slug}/`),
            type: 'novita',
            meta: item.date,
            keywords: [item.whoIsAffected, ...(item.whatChanged ?? [])].join(' '),
        })
    }

    for (const learningPath of LEARNING_PATHS) {
        items.push({
            title: learningPath.title,
            summary: truncate(learningPath.description),
            url: withSlash(`/percorsi/${learningPath.id}/`),
            type: 'percorso',
            meta: learningPath.audience,
            keywords: [learningPath.audience, learningPath.type, learningPath.level].filter(Boolean).join(' '),
        })
    }

    items.push(...TOOLS, ...HUB_PAGES)

    const seen = new Set<string>()
    return items
        .filter((item) => {
            if (seen.has(item.url)) return false
            seen.add(item.url)
            return true
        })
        .sort((a, b) => {
            const byType = TYPE_ORDER[a.type] - TYPE_ORDER[b.type]
            if (byType !== 0) return byType
            return a.title.localeCompare(b.title, 'it')
        })
}

function escapeXml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
}

function toRfc822(date: string) {
    const parsed = new Date(`${date}T06:00:00Z`)
    return Number.isNaN(parsed.getTime()) ? new Date().toUTCString() : parsed.toUTCString()
}

function buildFeed() {
    const items = [...CIVIC_NEWS]
        .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug))
        .slice(0, 50)

    const lastBuild = items.reduce((max, item) => (item.date > max ? item.date : max), items[0]?.date ?? '2026-01-01')

    const entries = items
        .map((item) => {
            const url = `${SITE_URL}${withSlash(`/novita/${item.slug}/`)}`
            return [
                '    <item>',
                `      <title>${escapeXml(item.title)}</title>`,
                `      <link>${escapeXml(url)}</link>`,
                `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
                `      <pubDate>${toRfc822(item.date)}</pubDate>`,
                `      <category>${escapeXml('Novità civiche')}</category>`,
                `      <description>${escapeXml(item.summary)}</description>`,
                '    </item>',
            ].join('\n')
        })
        .join('\n')

    return [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
        '  <channel>',
        '    <title>Busssola — Novità civiche verificate</title>',
        `    <link>${SITE_URL}/novita/</link>`,
        '    <description>Cambiamenti verificati nelle procedure pubbliche italiane: scadenze, bonus, documenti e sicurezza digitale. Ogni notizia riporta la fonte ufficiale e la data di verifica.</description>',
        '    <language>it-IT</language>',
        `    <lastBuildDate>${toRfc822(lastBuild)}</lastBuildDate>`,
        `    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />`,
        entries,
        '  </channel>',
        '</rss>',
        '',
    ].join('\n')
}

function main() {
    if (!fs.existsSync(PUBLIC_DIR)) {
        throw new Error(`Directory public/ non trovata: ${PUBLIC_DIR}`)
    }

    const items = buildSearchItems()
    const payload = {
        generatedAt: new Date().toISOString(),
        count: items.length,
        items,
    }

    fs.writeFileSync(SEARCH_INDEX_PATH, `${JSON.stringify(payload)}\n`, 'utf8')
    fs.writeFileSync(FEED_PATH, buildFeed(), 'utf8')

    const sizeKb = Math.round(Buffer.byteLength(JSON.stringify(payload)) / 1024)
    console.log(`✅ search-index.json: ${items.length} elementi (~${sizeKb} KB)`)
    console.log(`✅ feed.xml: ${Math.min(CIVIC_NEWS.length, 50)} novità`)
}

main()
