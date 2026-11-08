'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ArrowRight, Loader2, Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { SearchIndexPayload, SearchItemType } from '@/types/search'
import { indexItem, searchItems } from '@/lib/search'
import type { IndexedItem } from '@/lib/search'

const TYPE_LABELS: Record<SearchItemType, string> = {
    guida: 'Guida',
    lezione: 'Procedura',
    trucco: 'Trucco',
    modello: 'Modello',
    novita: 'Novità',
    percorso: 'Percorso',
    strumento: 'Strumento',
    sezione: 'Sezione',
}

const FILTERS: { value: 'all' | SearchItemType; label: string }[] = [
    { value: 'all', label: 'Tutto' },
    { value: 'guida', label: 'Guide' },
    { value: 'modello', label: 'Modelli' },
    { value: 'trucco', label: 'Trucchi' },
    { value: 'novita', label: 'Novità' },
    { value: 'strumento', label: 'Strumenti' },
]

const SUGGESTIONS = [
    'SPID',
    'ISEE',
    '730',
    'NASpI',
    'passaporto',
    'cambio residenza',
    'bonus',
    'pensione',
    'permesso di soggiorno',
    'phishing',
]

export function CercaClient() {
    const searchParams = useSearchParams()
    const initialQuery = searchParams.get('q') ?? ''

    const [query, setQuery] = useState(initialQuery)
    const [debounced, setDebounced] = useState(initialQuery)
    const [items, setItems] = useState<IndexedItem[]>([])
    const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
    const [filter, setFilter] = useState<'all' | SearchItemType>('all')
    const [active, setActive] = useState(-1)

    const inputRef = useRef<HTMLInputElement>(null)
    const resultRefs = useRef<(HTMLAnchorElement | null)[]>([])

    useEffect(() => {
        let cancelled = false
        setStatus('loading')

        fetch('/search-index.json', { cache: 'force-cache' })
            .then((response) => {
                if (!response.ok) throw new Error(`HTTP ${response.status}`)
                return response.json() as Promise<SearchIndexPayload>
            })
            .then((payload) => {
                if (cancelled) return
                setItems(payload.items.map(indexItem))
                setStatus('ready')
            })
            .catch(() => {
                if (!cancelled) setStatus('error')
            })

        return () => {
            cancelled = true
        }
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => setDebounced(query), 150)
        return () => clearTimeout(timer)
    }, [query])

    useEffect(() => {
        if (typeof window === 'undefined') return
        const trimmed = debounced.trim()
        const url = trimmed ? `/cerca/?q=${encodeURIComponent(trimmed)}` : '/cerca/'
        window.history.replaceState(null, '', url)
    }, [debounced])

    const counts = useMemo(() => {
        const map = new Map<string, number>()
        for (const item of items) {
            map.set(item.type, (map.get(item.type) ?? 0) + 1)
        }
        return map
    }, [items])

    const results = useMemo(() => searchItems(items, debounced, filter), [items, debounced, filter])

    useEffect(() => {
        setActive(-1)
        resultRefs.current = resultRefs.current.slice(0, results.length)
    }, [results])

    const focusResult = (index: number) => {
        const next = resultRefs.current[index]
        if (next) {
            next.focus()
            setActive(index)
        }
    }

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'ArrowDown' && results.length > 0) {
            event.preventDefault()
            focusResult(0)
        } else if (event.key === 'Escape') {
            if (query) {
                setQuery('')
            } else {
                inputRef.current?.blur()
            }
        }
    }

    const handleResultKeyDown = (event: KeyboardEvent<HTMLAnchorElement>, index: number) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault()
            focusResult(Math.min(index + 1, results.length - 1))
        } else if (event.key === 'ArrowUp') {
            event.preventDefault()
            if (index === 0) {
                inputRef.current?.focus()
                setActive(-1)
            } else {
                focusResult(index - 1)
            }
        } else if (event.key === 'Escape') {
            inputRef.current?.focus()
        }
    }

    const trimmedQuery = debounced.trim()

    return (
        <div className="space-y-6">
            <div className="relative">
                <Search
                    className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
                    aria-hidden="true"
                />
                <input
                    ref={inputRef}
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyDown={handleInputKeyDown}
                    placeholder="Cerca SPID, ISEE, NASpI, passaporto, bolletta, phishing…"
                    aria-label="Cerca in tutto il sito"
                    aria-describedby="search-help"
                    className="h-16 w-full rounded-2xl border border-border bg-surface pl-14 pr-14 text-base shadow-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                    autoComplete="off"
                    spellCheck={false}
                    enterKeyHint="search"
                />
                {status === 'loading' && (
                    <Loader2
                        className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 animate-spin text-muted motion-reduce:animate-none"
                        aria-hidden="true"
                    />
                )}
            </div>

            <p id="search-help" className="text-sm text-muted">
                La ricerca avviene nel tuo browser: nessuna query viene inviata a un server. Digita almeno una parola,
                poi usa le frecce ↑ ↓ per scorrere i risultati.
            </p>

            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtra per tipo di contenuto">
                {FILTERS.map((option) => {
                    const isSelected = filter === option.value
                    const count = option.value === 'all' ? items.length : counts.get(option.value) ?? 0
                    return (
                        <button
                            key={option.value}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => setFilter(option.value)}
                            className={cn(
                                'rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
                                isSelected
                                    ? 'border-foreground bg-foreground text-background'
                                    : 'border-border bg-surface text-secondary hover:border-foreground/40 hover:text-foreground'
                            )}
                        >
                            {option.label}
                            <span className="ml-1.5 text-xs opacity-70">{count}</span>
                        </button>
                    )
                })}
            </div>

            <p className="text-sm text-secondary" aria-live="polite" aria-atomic="true">
                {status === 'loading' && 'Caricamento indice…'}
                {status === 'error' && 'Impossibile caricare l’indice di ricerca.'}
                {status === 'ready' && trimmedQuery.length > 0 && (
                    <>
                        {results.length === 0
                            ? 'Nessun risultato'
                            : `${results.length}${results.length === 40 ? '+' : ''} risultat${results.length === 1 ? 'o' : 'i'}`}
                        {' per '}
                        <strong className="font-semibold text-foreground">“{trimmedQuery}”</strong>
                    </>
                )}
            </p>

            {status === 'error' && (
                <div className="rounded-2xl border border-border bg-surface p-6 text-sm text-secondary">
                    <p>
                        L’indice non è disponibile in questo momento. Puoi comunque consultare il{' '}
                        <Link href="/moduli" className="font-semibold text-primary underline">
                            catalogo delle guide
                        </Link>{' '}
                        o la{' '}
                        <Link href="/mappa-del-sito" className="font-semibold text-primary underline">
                            mappa del sito
                        </Link>
                        .
                    </p>
                </div>
            )}

            {trimmedQuery.length === 0 && status === 'ready' && (
                <div className="space-y-4 rounded-2xl border border-border bg-surface p-6">
                    <p className="text-sm font-semibold text-foreground">Ricerche frequenti</p>
                    <div className="flex flex-wrap gap-2">
                        {SUGGESTIONS.map((suggestion) => (
                            <button
                                key={suggestion}
                                type="button"
                                onClick={() => {
                                    setQuery(suggestion)
                                    inputRef.current?.focus()
                                }}
                                className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-secondary transition-colors hover:border-foreground/40 hover:text-foreground"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {results.length > 0 && (
                <ul className="space-y-3">
                    {results.map((item, index) => (
                        <li key={`${item.type}-${item.url}`}>
                            <Link
                                href={item.url}
                                ref={(element) => {
                                    resultRefs.current[index] = element
                                }}
                                onFocus={() => setActive(index)}
                                onKeyDown={(event) => handleResultKeyDown(event, index)}
                                className={cn(
                                    'group flex items-start gap-4 rounded-2xl border bg-surface px-5 py-4 transition-colors',
                                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                                    active === index ? 'border-primary' : 'border-border hover:border-primary/60'
                                )}
                            >
                                <span className="mt-0.5 w-24 shrink-0 text-[10px] font-semibold uppercase tracking-widest text-primary">
                                    {TYPE_LABELS[item.type]}
                                </span>
                                <span className="min-w-0 flex-1">
                                    <span className="block font-semibold leading-snug text-foreground group-hover:underline">
                                        {item.title}
                                    </span>
                                    <span className="mt-1 block text-sm leading-relaxed text-secondary line-clamp-2">
                                        {item.summary}
                                    </span>
                                    {(item.meta || item.category) && (
                                        <span className="mt-2 block text-xs text-muted">
                                            {[item.meta, item.category].filter(Boolean).join(' · ')}
                                        </span>
                                    )}
                                </span>
                                <ArrowRight
                                    className="mt-1 h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                                    aria-hidden="true"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            {status === 'ready' && trimmedQuery.length > 0 && results.length === 0 && (
                <div className="space-y-4 rounded-2xl border border-border bg-surface p-6">
                    <p className="text-sm text-secondary">
                        Prova con un termine più semplice oppure esplora le aree tematiche.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {SUGGESTIONS.slice(0, 6).map((suggestion) => (
                            <button
                                key={suggestion}
                                type="button"
                                onClick={() => setQuery(suggestion)}
                                className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-secondary transition-colors hover:border-foreground/40 hover:text-foreground"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
