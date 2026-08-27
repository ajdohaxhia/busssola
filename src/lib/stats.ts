import { ALL_MODULES } from '@/data/modules/index'
import { LIFE_HACKS } from '@/data/life-hacks'
import { LEARNING_PATHS } from '@/data/paths'
import { CIVIC_TEMPLATES } from '@/data/templates'
import { CIVIC_NEWS } from '@/data/news'

export const EDITORIAL_DATE = '2026-08-27'

export type SiteStats = {
  totalModules: number
  totalLessons: number
  totalCategories: number
  totalTips: number
  totalSources: number
  totalChecklistItems: number
  totalLearningPaths: number
  totalTemplates: number
  totalNews: number
  lastUpdatedAt: string
}

function deriveStats(): SiteStats {
  const totalModules = ALL_MODULES.length
  const totalLessons = ALL_MODULES.reduce((acc, m) => acc + m.lessons.length, 0)
  const totalCategories = new Set(ALL_MODULES.filter(m => m.category).map(m => m.category)).size
  const totalTips = LIFE_HACKS.length

  const sourceSet = new Set<string>()
  let totalChecklistItems = 0
  ALL_MODULES.forEach((m) => {
    m.lessons.forEach((lesson) => {
      lesson.sources?.forEach((s) => {
        if (s.url) sourceSet.add(s.url)
      })
      if (lesson.checklist) totalChecklistItems += lesson.checklist.length
    })
  })
  CIVIC_TEMPLATES.forEach((t) => t.sources.forEach((s) => s.url && sourceSet.add(s.url)))
  CIVIC_NEWS.forEach((n) => n.sources.forEach((s) => s.url && sourceSet.add(s.url)))

  return {
    totalModules,
    totalLessons,
    totalCategories,
    totalTips,
    totalSources: sourceSet.size,
    totalChecklistItems,
    totalLearningPaths: LEARNING_PATHS.length,
    totalTemplates: CIVIC_TEMPLATES.length,
    totalNews: CIVIC_NEWS.length,
    lastUpdatedAt: EDITORIAL_DATE,
  }
}

export const siteStats: SiteStats = deriveStats()

export function getLiveStats(): SiteStats {
  return deriveStats()
}

export function getModuleLessonCount(moduleIdOrModule: string | { lessons: { length: number } }): number {
  if (typeof moduleIdOrModule === 'string') {
    const mod = ALL_MODULES.find(m => m.id === moduleIdOrModule)
    return mod?.lessons.length ?? 0
  }
  return moduleIdOrModule.lessons.length
}

export function getCategoryModuleCount(categoryId: string): number {
  return ALL_MODULES.filter(m => m.category === categoryId).length
}

export function getCategoryModules(categoryId: string) {
  return ALL_MODULES.filter(m => m.category === categoryId)
}

export function formatCount(count: number, singular: string, plural: string): string {
  return `${count} ${count === 1 ? singular : plural}`
}
