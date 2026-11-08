import type { SearchItem, SearchItemType } from '@/types/search'

/**
 * Logica di ricerca pura, condivisa tra l'interfaccia /cerca e i test.
 * Nessuna dipendenza da React o dal browser: può essere eseguita in Node.
 */

export const TYPE_BOOST: Record<SearchItemType, number> = {
    strumento: 9,
    guida: 8,
    modello: 7,
    trucco: 5,
    lezione: 4,
    percorso: 3,
    novita: 2,
    sezione: 1,
}

const STOPWORDS = new Set([
    'come', 'cosa', 'quando', 'dove', 'perche', 'quale', 'quali', 'quanto', 'quanta', 'quanti', 'quante',
    'posso', 'devo', 'voglio', 'fare', 'sono', 'essere', 'avere', 'ho', 'hai', 'ha', 'abbiamo', 'avete',
    'hanno', 'per', 'con', 'senza', 'della', 'dello', 'delle', 'degli', 'alla', 'allo', 'alle', 'agli',
    'nel', 'nella', 'che', 'chi', 'non', 'piu', 'anche', 'questo', 'questa', 'questi', 'queste', 'quello',
    'quella', 'mi', 'ti', 'si', 'il', 'lo', 'la', 'i', 'gli', 'le', 'un', 'una', 'uno', 'di', 'da', 'in',
    'su', 'e', 'o', 'ma', 'se', 'al', 'del', 'dei', 'dal', 'dalla', 'sul', 'sulla',
])

export type IndexedItem = SearchItem & {
    _title: string
    _summary: string
    _keywords: string
    _category: string
}

export function normalize(value: string) {
    return value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
}

export function indexItem(item: SearchItem): IndexedItem {
    return {
        ...item,
        _title: normalize(item.title),
        _summary: normalize(item.summary),
        _keywords: normalize(`${item.keywords ?? ''} ${item.meta ?? ''}`),
        _category: normalize(item.category ?? ''),
    }
}

export function tokenize(query: string) {
    const rawTokens = normalize(query).split(/\s+/).filter(Boolean)
    const meaningful = rawTokens.filter((token) => token.length >= 3 && !STOPWORDS.has(token))
    return meaningful.length > 0 ? meaningful : rawTokens
}

export function searchItems(
    items: IndexedItem[],
    query: string,
    filter: 'all' | SearchItemType = 'all',
    limit = 40
): IndexedItem[] {
    const tokens = tokenize(query)
    if (tokens.length === 0) return []

    const scored: { item: IndexedItem; score: number; matched: number }[] = []

    for (const item of items) {
        if (filter !== 'all' && item.type !== filter) continue

        let score = 0
        let matched = 0

        for (const token of tokens) {
            let tokenScore = 0

            if (item._title === token) tokenScore = 120
            else if (item._title.startsWith(token)) tokenScore = 80
            else if (item._title.includes(token)) tokenScore = 55

            if (item._keywords.includes(token)) tokenScore = Math.max(tokenScore, 35)
            if (item._category.includes(token)) tokenScore = Math.max(tokenScore, 22)
            if (item._summary.includes(token)) tokenScore = Math.max(tokenScore, 15)

            if (tokenScore > 0) {
                matched += 1
                score += tokenScore
            }
        }

        if (matched === 0) continue

        // Un risultato che copre più parole della query vale più di uno che ne copre una sola.
        scored.push({ item, score: score + matched * 60 + TYPE_BOOST[item.type], matched })
    }

    scored.sort(
        (a, b) =>
            b.matched - a.matched ||
            b.score - a.score ||
            a.item.title.localeCompare(b.item.title, 'it')
    )

    return scored.slice(0, limit).map((entry) => entry.item)
}
