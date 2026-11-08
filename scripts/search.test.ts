import test from 'node:test'
import assert from 'node:assert/strict'
import { indexItem, normalize, searchItems, tokenize } from '../src/lib/search'
import type { SearchItem } from '../src/types/search'

const ITEMS: SearchItem[] = [
    {
        title: 'SPID: come richiederlo e recuperarlo',
        summary: 'Identità digitale gratuita o a pagamento presso i gestori accreditati AgID.',
        url: '/modelli/spid/',
        type: 'modello',
        category: 'Documenti',
        keywords: 'identita digitale agid',
    },
    {
        title: 'ISEE e DSU: come fare la dichiarazione',
        summary: 'Attestazione ISEE necessaria per bonus, assegno unico e prestazioni universitarie.',
        url: '/modelli/isee-dsu-mini/',
        type: 'modello',
        category: 'Bonus e ISEE',
        keywords: 'dsu precompilata inps',
    },
    {
        title: 'Trova le tue agevolazioni e bonus',
        summary: 'Questionario guidato per capire quali bonus possono interessarti.',
        url: '/tool/trova-bonus/',
        type: 'strumento',
        category: 'Bonus e ISEE',
        keywords: 'agevolazioni bonus sociali',
    },
    {
        title: '730 precompilato: guida alla dichiarazione',
        summary: 'Come consultare, correggere e inviare il modello 730 precompilato.',
        url: '/modelli/730-precompilato/',
        type: 'modello',
        category: 'Soldi',
        keywords: 'agenzia entrate dichiarazione redditi',
    },
    {
        title: 'Phishing: come riconoscere un messaggio falso',
        summary: 'Segnali di allarme, cosa fare e come segnalare alla Polizia Postale.',
        url: '/novita/phishing/',
        type: 'novita',
        category: 'Truffe',
        keywords: 'sms email truffa',
    },
]

const INDEXED = ITEMS.map(indexItem)

test('normalize rimuove accenti e maiuscole', () => {
    assert.equal(normalize('Città È'), 'citta e')
})

test('tokenize scarta le stopword e mantiene i termini utili', () => {
    assert.deepEqual(tokenize('come fare lo SPID'), ['spid'])
    assert.deepEqual(tokenize('quali bonus posso richiedere'), ['bonus', 'richiedere'])
})

test('query vuota non restituisce risultati', () => {
    assert.deepEqual(searchItems(INDEXED, '   '), [])
})

test('una parola chiave esatta trova la pagina giusta', () => {
    const results = searchItems(INDEXED, 'spid')
    assert.equal(results[0]?.url, '/modelli/spid/')
})

test('una domanda naturale trova lo strumento bonus', () => {
    const results = searchItems(INDEXED, 'quali bonus posso richiedere')
    assert.ok(results.some((item) => item.url === '/tool/trova-bonus/'))
})

test('il filtro per tipo esclude gli altri contenuti', () => {
    const results = searchItems(INDEXED, 'bonus', 'novita')
    assert.equal(results.length, 0)

    const models = searchItems(INDEXED, 'bonus', 'modello')
    assert.ok(models.every((item) => item.type === 'modello'))
})

test('la ricerca senza accenti trova il termine accentato', () => {
    const results = searchItems(INDEXED, 'identita')
    assert.ok(results.some((item) => item.url === '/modelli/spid/'))
})
