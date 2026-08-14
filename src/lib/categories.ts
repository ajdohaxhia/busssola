import type { CategoryID } from '@/types'

export const CATEGORY_LABELS: Record<CategoryID, string> = {
    documenti: 'Documenti',
    lavoro: 'Lavoro',
    casa: 'Casa',
    soldi: 'Soldi',
    bonus: 'Bonus e ISEE',
    sanita: 'Sanità',
    famiglia: 'Famiglia',
    scuola: 'Scuola',
    sicurezza: 'Sicurezza',
    truffe: 'Truffe',
    privacy: 'Privacy',
    emergenze: 'Emergenze',
    immigrazione: 'Immigrazione',
    consumatori: 'Consumatori',
    mobilita: 'Mobilità',
    universita: 'Università',
    anziani: 'Anziani',
    disabilita: 'Disabilità',
    'casa-digitale': 'Casa digitale',
    giustizia: 'Giustizia',
}

export const CATEGORY_IDS = Object.keys(CATEGORY_LABELS) as CategoryID[]
