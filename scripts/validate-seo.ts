import fs from 'fs'

function attr(html: string, pattern: RegExp) {
    return html.match(pattern)?.[1] ?? null
}

function validateSEO(filePath: string) {
    if (!fs.existsSync(filePath)) return [`Missing file: ${filePath}`]

    const html = fs.readFileSync(filePath, 'utf-8')
    const errors: string[] = []

    const title = attr(html, /<title>(.*?)<\/title>/i)
    if (!title) errors.push('Missing <title>')
    else if (title === 'Busssola' && !filePath.endsWith('out/index.html') && !filePath.endsWith('./out/index.html')) {
        errors.push(`Generic title: ${title}`)
    }

    if (!attr(html, /<meta name="description" content="(.*?)"/i)) {
        errors.push('Missing <meta name="description">')
    }

    const h1s = html.match(/<h1\b/gi) ?? []
    if (h1s.length === 0) errors.push('Missing <h1>')
    if (h1s.length > 1) errors.push(`Multiple <h1> (${h1s.length})`)

    const canonical = attr(html, /<link rel="canonical" href="(.*?)"/i)
    if (!canonical) errors.push('Missing rel="canonical"')
    else if (!canonical.startsWith('https://busssola.com')) {
        errors.push(`Canonical is not busssola.com: ${canonical}`)
    }

    if (!attr(html, /<meta property="og:title" content="(.*?)"/i)) errors.push('Missing og:title')
    if (!attr(html, /<meta property="og:description" content="(.*?)"/i)) errors.push('Missing og:description')

    return errors.length > 0 ? errors : null
}

function main() {
    console.log('🚀 Validating SEO for key pages...')

    const pages = [
        './out/index.html',
        './out/moduli/index.html',
        './out/sos/index.html',
        './out/faq/index.html',
        './out/about/index.html',
    ]

    let failed = false
    for (const page of pages) {
        const errors = validateSEO(page)
        if (errors) {
            console.error(`  ❌ SEO errors in ${page}:`)
            errors.forEach((e) => console.error(`     - ${e}`))
            failed = true
        } else {
            console.log(`  ✅ ${page} SEO looks good`)
        }
    }

    if (failed) process.exit(1)
    console.log('\n✅ ALL SEO VALIDATED.')
}

main()
