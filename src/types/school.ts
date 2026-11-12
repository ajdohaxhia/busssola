// Attività scuola/LIM (masterplan §8, §9, §12).
// Struttura dati: il contenuto didattico deve essere scritto e revisionato da persone
// con competenza adeguata. Nessun testo di questo file è contenuto didattico.

export type SchoolOrder = 'primaria' | 'secondaria-1' | 'secondaria-2'
export type SchoolDuration = 15 | 30 | 45 | 60
export type SchoolMode = 'discussione' | 'coppie' | 'gruppi' | 'carta' | 'lim'
export type SchoolResources = 'solo-lim' | 'lim-e-carta' | 'dispositivi-facoltativi'
export type SchoolStatus = 'bozza' | 'in-revisione' | 'pubblicata'
export type ScreenKind = 'scenario' | 'consegna' | 'scelta' | 'spiegazione' | 'riepilogo'

export interface SchoolScreen {
  kind: ScreenKind
  classText: string       // testo proiettato alla classe
  teacherNote?: string    // nota per il docente, mai proiettata
  reveal?: boolean        // la spiegazione è rivelata dal docente
}

export interface SchoolSource {
  title: string
  organization: string
  url: string             // https, pagina specifica
  type: 'norma' | 'ente_pubblico' | 'documentazione_prodotto' | 'organizzazione_specializzata'
  usedFor: string
  lastCheckedAt: string   // YYYY-MM-DD, data reale di verifica
}

export interface SchoolActivity {
  id: string
  slug: string            // permanente
  title: string
  orders: SchoolOrder[]   // ordini di scuola per cui è pensata
  theme: string
  durationMinutes: SchoolDuration
  modes: SchoolMode[]
  resources: SchoolResources
  objectives: string[]    // obiettivi osservabili
  prerequisites: string[]
  materials: string[]
  warnings: string[]      // avvertenze per il docente (temi sensibili, tutela)
  screens: SchoolScreen[]
  commentedAnswers: string[]
  adaptations: string[]   // bisogni diversi
  sources: SchoolSource[]
  reviewers: { name: string; role: string }[]
  reviewedAt: string | null
  version: string
  printable: boolean
  status: SchoolStatus
}
