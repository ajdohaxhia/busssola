import { siteStats as derived, EDITORIAL_DATE } from '@/lib/stats'

/**
 * Public identity + live counts. Counts always come from src/lib/stats.ts.
 */
export const siteStats = {
    modulesCount: derived.totalModules,
    guidesCount: derived.totalLessons,
    categoriesCount: derived.totalCategories,
    templatesCount: derived.totalTemplates,
    newsCount: derived.totalNews,
    lastContentUpdate: derived.lastUpdatedAt,
    lastUpdatedAt: derived.lastUpdatedAt,
    lastEditorialReview: EDITORIAL_DATE,
    githubUrl: 'https://github.com/ajdohaxhia/busssola',
    contactEmail: 'info@busssola.com',
    officialDomain: 'https://busssola.com',
    shortDescription: 'Guide, modelli stampabili e novità verificate per documenti, bonus, lavoro, casa e urgenze in Italia. Se sei in pericolo, chiama il 112.',
    longDescription: 'Busssola è una risorsa civica gratuita e indipendente: traduce procedure pubbliche in passi chiari, con fonti ufficiali. Non è un servizio di emergenza e non sostituisce INPS, Agenzia delle Entrate o le forze dell’ordine.',
}
