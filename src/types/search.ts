/**
 * Tipi condivisi tra il generatore dell'indice (scripts/build-site-artifacts.ts)
 * e l'interfaccia di ricerca (/cerca). L'indice è un file JSON statico:
 * nessuna risposta viene inviata a servizi esterni.
 */

export type SearchItemType =
    | 'guida'
    | 'lezione'
    | 'trucco'
    | 'modello'
    | 'novita'
    | 'percorso'
    | 'strumento'
    | 'sezione'

export interface SearchItem {
    title: string
    summary: string
    url: string
    type: SearchItemType
    category?: string
    meta?: string
    keywords?: string
}

export interface SearchIndexPayload {
    generatedAt: string
    count: number
    items: SearchItem[]
}
