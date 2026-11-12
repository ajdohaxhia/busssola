#!/usr/bin/env npx tsx
/**
 * fetch-news.ts — Fetches Italian civic news from Google News RSS,
 * deduplicates against existing slugs in src/data/news.ts,
 * and prepends new stub NewsItems for editorial review.
 *
 * Usage:
 *   npx tsx scripts/fetch-news.ts            # dry-run (prints what would be added)
 *   npx tsx scripts/fetch-news.ts --write     # writes to src/data/news.ts
 *   npx tsx scripts/fetch-news.ts --write --commit  # also git commit + push
 *
 * Runs in GitHub Actions via .github/workflows/fetch-news.yml
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

// ─── Configuration ───────────────────────────────────────────────────────────

/** Google News RSS query topics — all Italian civic domains */
const TOPICS: { query: string; relatedGuides: string[] }[] = [
    {
        query: 'INPS bonus pensioni ammortizzatori sociali',
        relatedGuides: ['/moduli/modulo-27-pensioni-previdenza'],
    },
    {
        query: 'Agenzia Entrate scadenze fiscali tasse',
        relatedGuides: ['/moduli/modulo-11-fisco-tasse'],
    },
    {
        query: 'scuola istruzione MIM ministero',
        relatedGuides: ['/moduli/modulo-08-scuola-famiglia'],
    },
    {
        query: 'sanità SSN salute ministero',
        relatedGuides: ['/moduli/modulo-09-sanita-salute'],
    },
    {
        query: 'sicurezza polizia emergenze protezione civile',
        relatedGuides: ['/sos'],
    },
    {
        query: 'lavoro contratti dimissioni INAIL',
        relatedGuides: ['/moduli/modulo-02-contratto-lavoro'],
    },
    {
        query: 'casa affitto mutuo condominio',
        relatedGuides: ['/moduli/modulo-04-casa-affitto'],
    },
    {
        query: 'immigrazione permesso soggiorno cittadinanza',
        relatedGuides: ['/moduli/modulo-06-immigrazione'],
    },
]

/** Max news items to fetch per topic */
const MAX_PER_TOPIC = 5

/** Max total new items to add per run */
const MAX_NEW_ITEMS = 10

// ─── RSS Parsing (lightweight, no dependencies) ──────────────────────────────

interface RSSItem {
    title: string
    link: string
    pubDate: string
    source: string
}

function decodeHtmlEntities(text: string): string {
    return text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&apos;/g, "'")
        .replace(/<[^>]*>/g, '') // strip any residual HTML tags
}

function parseRSSItems(xml: string): RSSItem[] {
    const items: RSSItem[] = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    let match: RegExpExecArray | null

    while ((match = itemRegex.exec(xml)) !== null) {
        const block = match[1]
        const title = block.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? ''
        const link = block.match(/<link>([\s\S]*?)<\/link>/)?.[1] ?? ''
        const pubDate = block.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] ?? ''
        const source = block.match(/<source[^>]*>([\s\S]*?)<\/source>/)?.[1] ?? 'Google News'

        if (title) {
            items.push({
                title: decodeHtmlEntities(title.trim()),
                link: link.trim(),
                pubDate: pubDate.trim(),
                source: decodeHtmlEntities(source.trim()),
            })
        }
    }

    return items
}

async function fetchGoogleNewsRSS(query: string): Promise<RSSItem[]> {
    const encoded = encodeURIComponent(query)
    const url = `https://news.google.com/rss/search?q=${encoded}&hl=it&gl=IT&ceid=IT:it`

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Busssola-NewsBot/1.0 (+https://busssola.com)',
            },
        })
        if (!response.ok) {
            console.error(`⚠️  RSS fetch failed for "${query}": HTTP ${response.status}`)
            return []
        }
        const xml = await response.text()
        return parseRSSItems(xml).slice(0, MAX_PER_TOPIC)
    } catch (err) {
        console.error(`⚠️  RSS fetch error for "${query}":`, err)
        return []
    }
}

// ─── Slug generation ─────────────────────────────────────────────────────────

function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')  // strip diacritics
        .replace(/[^a-z0-9\s-]/g, '')     // remove special chars
        .replace(/\s+/g, '-')             // spaces → hyphens
        .replace(/-+/g, '-')              // collapse hyphens
        .replace(/^-|-$/g, '')            // trim
        .slice(0, 80)                     // keep slug reasonable
}

function toISODate(pubDate: string): string {
    try {
        const d = new Date(pubDate)
        if (isNaN(d.getTime())) return new Date().toISOString().slice(0, 10)
        return d.toISOString().slice(0, 10)
    } catch {
        return new Date().toISOString().slice(0, 10)
    }
}

// ─── news.ts manipulation ────────────────────────────────────────────────────

const NEWS_FILE = resolve(import.meta.dirname ?? __dirname, '../src/data/news.ts')

function getExistingSlugs(): Set<string> {
    const content = readFileSync(NEWS_FILE, 'utf-8')
    const slugs = new Set<string>()
    const regex = /slug:\s*['"`]([^'"`]+)['"`]/g
    let m: RegExpExecArray | null
    while ((m = regex.exec(content)) !== null) {
        slugs.add(m[1])
    }
    return slugs
}

interface NewNewsItem {
    slug: string
    title: string
    date: string
    summary: string
    body: string[]
    whatChanged: string[]
    whoIsAffected: string
    whatToDo: string[]
    sourceIds: string[]
    sourcesCode: string
    relatedGuides: string[]
    relatedTemplates: string[]
    lastReviewedAt: string
}

function buildNewsItem(rss: RSSItem, topic: typeof TOPICS[number]): NewNewsItem {
    const date = toISODate(rss.pubDate)
    const slug = slugify(`${rss.title}-${date.replace(/-/g, '')}`)

    // Clean the title: strip " - Source Name" suffix from Google News titles
    const cleanTitle = rss.title.replace(/\s*-\s*[^-]+$/, '').trim()

    return {
        slug,
        title: cleanTitle,
        date,
        summary: `${cleanTitle}. Fonte: ${rss.source}.`,
        body: [
            `${cleanTitle}.`,
        ],
        whatChanged: [
            cleanTitle,
        ],
        whoIsAffected: 'Cittadini italiani interessati dalla novità.',
        whatToDo: [
            `Consulta la fonte ufficiale per i dettagli completi`,
        ],
        sourceIds: [],
        sourcesCode: `src('${escapeTS(rss.title)}', '${escapeTS(rss.source)}', '${escapeTS(rss.link)}', '${escapeTS(rss.title)}', '${date}')`,
        relatedGuides: topic.relatedGuides,
        relatedTemplates: [],
        lastReviewedAt: date,
    }
}

function escapeTS(s: string): string {
    return s
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'")
        .replace(/\u2018/g, "\\'") // left single curly quote
        .replace(/\u2019/g, "\\'") // right single curly quote (')
        .replace(/\u201C/g, '\\"') // left double curly quote
        .replace(/\u201D/g, '\\"') // right double curly quote
        .replace(/\n/g, ' ')
}

function generateTSBlock(item: NewNewsItem): string {
    const relGuides = item.relatedGuides.map(g => `'${g}'`).join(', ')
    return `    {
        slug: '${escapeTS(item.slug)}',
        title: '${escapeTS(item.title)}',
        date: '${item.date}',
        summary: '${escapeTS(item.summary)}',
        body: [
${item.body.map(b => `            '${escapeTS(b)}',`).join('\n')}
        ],
        whatChanged: [
${item.whatChanged.map(w => `            '${escapeTS(w)}',`).join('\n')}
        ],
        whoIsAffected: '${escapeTS(item.whoIsAffected)}',
        whatToDo: [
${item.whatToDo.map(t => `            '${escapeTS(t)}',`).join('\n')}
        ],
        sourceIds: [],
        sources: [
            ${item.sourcesCode},
        ],
        relatedGuides: [${relGuides}],
        relatedTemplates: [],
        lastReviewedAt: '${item.lastReviewedAt}',
    },`
}

function prependToNewsFile(items: NewNewsItem[]): void {
    let content = readFileSync(NEWS_FILE, 'utf-8')

    // Find the exact pattern: "CIVIC_NEWS: NewsItem[] = ["
    const marker = 'CIVIC_NEWS: NewsItem[] = ['
    const markerPos = content.indexOf(marker)
    if (markerPos === -1) {
        throw new Error('Could not find CIVIC_NEWS array declaration in news.ts')
    }

    // Position right after the opening bracket of the array literal
    const bracketPos = markerPos + marker.length

    // Generate all item blocks
    const newBlocks = items.map(generateTSBlock).join('\n')

    // Insert after the opening bracket
    const before = content.slice(0, bracketPos)
    const after = content.slice(bracketPos)

    const newContent = `${before}\n    // ── Auto-imported ${new Date().toISOString().slice(0, 10)} ──────────────────────────\n${newBlocks}\n    // ── End auto-import ──────────────────────────────────────────────\n${after}`

    writeFileSync(NEWS_FILE, newContent, 'utf-8')
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
    const args = process.argv.slice(2)
    const shouldWrite = args.includes('--write')
    const shouldCommit = args.includes('--commit')

    console.log('🧭 Busssola News Fetcher')
    console.log(`   Mode: ${shouldWrite ? (shouldCommit ? 'WRITE + COMMIT' : 'WRITE') : 'DRY RUN'}`)
    console.log(`   Topics: ${TOPICS.length}`)
    console.log()

    // 1. Fetch all RSS feeds in parallel
    const allFetches = TOPICS.map(async (topic) => {
        const items = await fetchGoogleNewsRSS(topic.query)
        return items.map(rss => ({ rss, topic }))
    })
    const results = (await Promise.all(allFetches)).flat()

    console.log(`📡 Fetched ${results.length} raw items from Google News RSS`)

    // 2. Deduplicate against existing slugs
    const existingSlugs = getExistingSlugs()
    console.log(`📄 Existing news items: ${existingSlugs.size}`)

    // Only import news from the last 7 days
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    const cutoffDate = sevenDaysAgo.toISOString().slice(0, 10)

    const newItems: NewNewsItem[] = []
    const seenSlugs = new Set<string>()

    for (const { rss, topic } of results) {
        const item = buildNewsItem(rss, topic)

        // Skip old news (older than 7 days)
        if (item.date < cutoffDate) continue

        // Skip if slug already exists or already queued
        if (existingSlugs.has(item.slug) || seenSlugs.has(item.slug)) continue

        // Skip very short/garbage titles
        if (item.title.length < 15) continue

        seenSlugs.add(item.slug)
        newItems.push(item)

        if (newItems.length >= MAX_NEW_ITEMS) break
    }

    if (newItems.length === 0) {
        console.log('✅ No new items to add — everything is up to date.')
        return
    }

    console.log(`\n🆕 ${newItems.length} new items to add:\n`)
    for (const item of newItems) {
        console.log(`  • [${item.date}] ${item.title}`)
        console.log(`    slug: ${item.slug}`)
        console.log()
    }

    if (!shouldWrite) {
        console.log('ℹ️  Dry run — pass --write to modify news.ts')
        return
    }

    // 3. Write to news.ts
    prependToNewsFile(newItems)
    console.log(`✅ Prepended ${newItems.length} items to src/data/news.ts`)

    // 4. Git commit + push
    if (shouldCommit) {
        const { execSync } = await import('node:child_process')
        const cwd = resolve(import.meta.dirname ?? __dirname, '..')
        const dateStr = new Date().toISOString().slice(0, 10)

        try {
            execSync('git add src/data/news.ts', { cwd, stdio: 'inherit' })
            execSync(
                `git commit -m "chore(news): auto-import ${newItems.length} notizie ${dateStr} [skip ci]"`,
                { cwd, stdio: 'inherit' }
            )
            execSync('git push', { cwd, stdio: 'inherit' })
            console.log('🚀 Changes committed and pushed!')
        } catch (err) {
            console.error('❌ Git commit/push failed:', err)
            process.exit(1)
        }
    }
}

main().catch((err) => {
    console.error('❌ Fatal error:', err)
    process.exit(1)
})
