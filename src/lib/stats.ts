import { ALL_MODULES } from '@/data/modules/index'
import { LIFE_HACKS } from '@/data/life-hacks'
import { LEARNING_PATHS } from '@/data/paths'

/**
 * Centralized Stats Utility
 * Derives all site statistics directly from the canonical data sources.
 * No hardcoded counts should exist in the codebase.
 */

export type SiteStats = {
  totalModules: number
  totalLessons: number
  totalCategories: number
  totalTips: number
  totalSources: number
  totalChecklistItems: number
  totalLearningPaths: number
  lastUpdatedAt: string
}

function deriveStats(): SiteStats {
  const totalModules = ALL_MODULES.length
  const totalLessons = ALL_MODULES.reduce((acc, m) => acc + m.lessons.length, 0)
  const totalCategories = new Set(ALL_MODULES.filter(m => m.category).map(m => m.category)).size

  // Count tips
  const totalTips = LIFE_HACKS.length

  // Count unique sources across all lessons
  const sourceSet = new Set<string>()
  let totalChecklistItems = 0
  ALL_MODULES.forEach((m) => {
    m.lessons.forEach((lesson) => {
      if (lesson.sources) {
        lesson.sources.forEach((s) => {
          if (s.url) sourceSet.add(s.url)
        })
      }
      if (lesson.checklist) totalChecklistItems += lesson.checklist.length
    })
  })

  const totalSources = sourceSet.size

  return {
    totalModules,
    totalLessons,
    totalCategories,
    totalTips,
    totalSources,
    totalChecklistItems,
    totalLearningPaths: LEARNING_PATHS.length,
    lastUpdatedAt: new Date().toISOString().split('T')[0],
  }
}

// Pre-compute at startup for performance
export const siteStats: SiteStats = deriveStats()

/**
 * Re-computes and returns fresh stats (useful after data changes)
 */
export function getLiveStats(): SiteStats {
  return deriveStats()
}

/**
 * Returns the count of published lessons for a specific module
 * Kept in sync with actual array length
 */
export function getModuleLessonCount(moduleIdOrModule: string | { lessons: { length: number } }): number {
  if (typeof moduleIdOrModule === 'string') {
    const mod = ALL_MODULES.find(m => m.id === moduleIdOrModule)
    return mod?.lessons.length ?? 0
  }
  return moduleIdOrModule.lessons.length
}

/**
 * Returns the count of modules in a specific category
 */
export function getCategoryModuleCount(categoryId: string): number {
  return ALL_MODULES.filter(m => m.category === categoryId).length
}

/**
 * Get all modules for a category
 */
export function getCategoryModules(categoryId: string) {
  return ALL_MODULES.filter(m => m.category === categoryId)
}

/**
 * Returns a formatted string for counts (e.g., "31 moduli")
 */
export function formatCount(count: number, singular: string, plural: string): string {
  return `${count} ${count === 1 ? singular : plural}`
}
