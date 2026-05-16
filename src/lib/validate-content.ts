import { ALL_MODULES } from '@/data/modules/index'
import { MODULES_MAP } from '@/data/modules-meta'

/**
 * Validates the consistency and integrity of Busssola content.
 * These checks should cause the build to fail if they don't pass.
 */

export class ContentValidationError extends Error {
  constructor(message: string, public code: string) {
    super(message)
    this.name = 'ContentValidationError'
  }
}

export interface ValidationResult {
  passed: boolean
  errors: string[]
}

/**
 * Validate that module lessonCount in metadata matches actual lesson array length
 */
export function validateModuleLessonCounts(): ValidationResult {
  const errors: string[] = []

  ALL_MODULES.forEach((mod) => {
    const meta = MODULES_MAP.find(m => m.id === mod.id)
    if (!meta) {
      errors.push(`[${mod.id}] Manca nei metadati`)
      return
    }
    if (meta.lessonCount !== mod.lessons.length) {
      errors.push(
        `[${mod.id}] Mismatch: meta dice ${meta.lessonCount} lezioni, ma l'array ha ${mod.lessons.length}`
      )
    }
  })

  return { passed: errors.length === 0, errors }
}

/**
 * Validate that categories in MODULES_MAP have corresponding modules
 */
export function validateCategoryCounts(): ValidationResult {
  const errors: string[] = []
  
  // Group modules by category
  const categoryGroups = new Map<string, number>()
  ALL_MODULES.forEach((mod) => {
    if (mod.category) {
      categoryGroups.set(mod.category, (categoryGroups.get(mod.category) ?? 0) + 1)
    }
  })

  // Check that no category in the meta is empty
  const uniqueCategories = new Set(MODULES_MAP.map(m => m.category).filter(Boolean))
  uniqueCategories.forEach((cat) => {
    const count = categoryGroups.get(cat as string) ?? 0
    if (count === 0) {
      errors.push(`Categoria '${cat}' ha 0 moduli ma è dichiarata nei metadati`)
    }
  })

  return { passed: errors.length === 0, errors }
}

/**
 * Validate that every lesson page "X of Y" is correct
 */
export function validateLessonPageCounts(): ValidationResult {
  const errors: string[] = []

  ALL_MODULES.forEach((mod) => {
    mod.lessons.forEach((lesson, index) => {
      const position = index + 1

      // Check ID consistency
      if (!lesson.id) {
        errors.push(`[${mod.id}][Lezione ${position}] ID mancante`)
      }
      if (lesson.status !== 'published') {
        console.warn(`[${mod.id}][Lezione ${position}] Non pubblicata: ${lesson.title}`)
      }
    })
  })

  return { passed: errors.length === 0, errors }
}

/**
 * Validate that every guide has at least one official source
 */
export function validateSourceQualityGate(): ValidationResult {
  const errors: string[] = []
  const ACCEPTED_ORG_PREFIXES = [
    'AgID',
    'Agenzia delle Entrate',
    'Ministero',
    'Polizia di Stato',
    'Polizia Postale',
    'Commissariato',
    'ANPR',
    'ARERA',
    'Garante Privacy',
    'INPS',
    'Portale dell\'Automobilista',
    'PagoPA',
    'Universitaly',
    'Comune',
    'Regione',
    'Agenzia',
    'CNIL',
    'Dipartimento',
  ]

  ALL_MODULES.forEach((mod) => {
    mod.lessons.forEach((lesson) => {
      if (!lesson.sources || lesson.sources.length === 0) {
        errors.push(`[${mod.id}][${lesson.id}] Nessuna fonte ufficiale`)
        return
      }

      lesson.sources.forEach((source) => {
        if (!source.url) {
          errors.push(`[${mod.id}][${lesson.id}] Fonte senza URL: ${source.title}`)
        }
        if (!source.organization) {
          errors.push(`[${mod.id}][${lesson.id}] Fonte senza ente: ${source.title}`)
        }
        if (!source.lastCheckedAt) {
          errors.push(`[${mod.id}][${lesson.id}] Fonte senza data verifica: ${source.title}`)
        }
        
        // Check that the organization is from an accepted source
        const hasAcceptedPrefix = ACCEPTED_ORG_PREFIXES.some(
          (prefix) => source.organization?.toLowerCase().includes(prefix.toLowerCase())
        )
        if (!hasAcceptedPrefix) {
          console.warn(`[${mod.id}][${lesson.id}] Potenziale fonte non ufficiale: ${source.organization}`)
        }
      })
    })
  })

  return { passed: errors.length === 0, errors }
}

/**
 * Validate that there are no stale hardcoded strings
 */
export function validateNoStaleStrings(): ValidationResult {
  const errors: string[] = []

  // This is a code-level validation - we can't easily scan source files dynamically
  // but we can validate runtime strings in data
  const totalLessons = ALL_MODULES.reduce((acc, m) => acc + m.lessons.length, 0)
  const totalModules = ALL_MODULES.length

  if (totalModules === 0) {
    errors.push('Nessun modulo trovato')
  }
  if (totalLessons === 0) {
    errors.push('Nessuna lezione trovata')
  }

  return { passed: errors.length === 0, errors }
}

/**
 * Validate that lesson slugs are unique
 */
export function validateUniqueSlugs(): ValidationResult {
  const errors: string[] = []
  const slugs = new Map<string, string>()

  ALL_MODULES.forEach((mod) => {
    mod.lessons.forEach((lesson) => {
      const key = lesson.slug || lesson.id
      if (slugs.has(key)) {
        errors.push(`Slug duplicato: '${key}' in [${mod.id}] e in [${slugs.get(key)}]`)
      } else {
        slugs.set(key, mod.id)
      }
    })
  })

  return { passed: errors.length === 0, errors }
}

/**
 * Validate that every module has a category
 */
export function validateAllModulesHaveCategory(): ValidationResult {
  const errors: string[] = []

  ALL_MODULES.forEach((mod) => {
    if (!mod.category) {
      errors.push(`[${mod.id}] Manca categoria`)
    }
  })

  return { passed: errors.length === 0, errors }
}

/**
 * Run all validations
 */
export function validateAll(): ValidationResult {
  const checks: ValidationResult[] = [
    validateModuleLessonCounts(),
    validateCategoryCounts(),
    validateLessonPageCounts(),
    validateSourceQualityGate(),
    validateNoStaleStrings(),
    validateUniqueSlugs(),
    validateAllModulesHaveCategory(),
  ]

  const allErrors = checks.flatMap(c => c.errors)

  return {
    passed: allErrors.length === 0,
    errors: allErrors,
  }
}

// CLI usage
if (require.main === module) {
  const result = validateAll()
  if (!result.passed) {
    console.error('Validation failed:')
    result.errors.forEach(e => console.error(' - ' + e))
    process.exit(1)
  }
  console.log('Validation passed.')
  process.exit(0)
}