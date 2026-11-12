// Validatore delle attività scuola/LIM (masterplan §8, §12).
// Controlla la struttura e le regole di pubblicazione. Non valuta il contenuto didattico.
import { SCHOOL_ACTIVITIES } from '../src/data/school/index'
import type { SchoolActivity } from '../src/types/school'

const DURATIONS = new Set([15, 30, 45, 60])
const ORDERS = new Set(['primaria', 'secondaria-1', 'secondaria-2'])
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/
const errors: string[] = []
const err = (ctx: string, msg: string) => errors.push(`${ctx}: ${msg}`)

for (const a of SCHOOL_ACTIVITIES as SchoolActivity[]) {
  const ctx = `[${a.id || '?'}]`
  if (!a.id) err(ctx, 'id mancante')
  if (!SLUG.test(a.slug || '')) err(ctx, 'slug non valido (minuscole, numeri, trattini)')
  if (!a.title) err(ctx, 'titolo mancante')
  if (!a.orders?.length || a.orders.some((o) => !ORDERS.has(o))) err(ctx, 'ordini di scuola non validi')
  if (!DURATIONS.has(a.durationMinutes)) err(ctx, 'durata deve essere 15, 30, 45 o 60')
  if (!a.modes?.length) err(ctx, 'modalità mancanti')
  if (!a.objectives?.length) err(ctx, 'obiettivi osservabili mancanti')
  if (!a.screens?.length) err(ctx, 'schermate mancanti')
  a.screens?.forEach((s, i) => {
    if (!s.classText) err(ctx, `schermata ${i + 1} senza testo per la classe`)
    if (s.reveal && s.kind !== 'spiegazione') err(ctx, `schermata ${i + 1}: reveal ammesso solo per la spiegazione`)
  })
  if (typeof a.printable !== 'boolean') err(ctx, 'campo printable non valido')
  if (!a.warnings?.length) err(ctx, 'avvertenze per il docente mancanti (masterplan §8.4)')
  a.sources?.forEach((s, i) => {
    if (!s.url?.startsWith('https://')) err(ctx, `fonte ${i + 1}: URL non https`)
    if (!s.lastCheckedAt) err(ctx, `fonte ${i + 1}: data di verifica mancante`)
  })
  if (a.status === 'pubblicata') {
    if (!a.reviewers?.length) err(ctx, 'pubblicata senza revisori nominati')
    if (!a.reviewedAt) err(ctx, 'pubblicata senza data di revisione')
    if (!a.sources?.length) err(ctx, 'pubblicata senza fonti')
    if (typeof a.printable !== 'boolean') err(ctx, 'campo printable mancante')
  }
}

if (errors.length) {
  console.error(errors.map((e) => `❌ ${e}`).join('\n'))
  process.exit(1)
}
console.log(`✅ Attività scuola valide: ${(SCHOOL_ACTIVITIES as SchoolActivity[]).length}`)
