export const SITE_URL = 'https://busssola.com'
export const SITE_NAME = 'Busssola'
export const CREATOR_NAME = 'Adelajdo Haxhiaj'
export const CREATOR_PATH = '/adelajdo-haxhiaj'
export const DEFAULT_OG_IMAGE = '/og-image.png'
export const CONTACT_EMAIL = 'info@busssola.com'

export function withTrailingSlash(path: string) {
    if (!path) return '/'
    const [rawPath, query] = path.split('?')
    if (!rawPath || rawPath === '/') {
        return query ? `/?${query}` : '/'
    }
    const isFile = /\.[a-z0-9]+$/i.test(rawPath)
    const slashed = isFile || rawPath.endsWith('/') ? rawPath : `${rawPath}/`
    return query ? `${slashed}?${query}` : slashed
}

export function absoluteUrl(path = '/') {
    if (path.startsWith('http')) return path
    const normalizedPath = path.startsWith('/') ? path : `/${path}`
    return `${SITE_URL}${withTrailingSlash(normalizedPath)}`
}

export const CREATOR_URL = absoluteUrl(CREATOR_PATH)

export function breadcrumbStructuredData(items: Array<{ name: string; path: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path),
        })),
    }
}
