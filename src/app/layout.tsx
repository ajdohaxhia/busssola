import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { AppShell } from '@/components/layout/AppShell'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  buildSeoMetadata,
  CREATOR_NAME,
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  siteStructuredData,
} from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  ...buildSeoMetadata({
    title: 'Dal dubbio alla pratica ufficiale',
    description: SITE_DESCRIPTION,
    path: '/',
    keywords: [
      'guida civica italia',
      'richiesta spid cie naspi',
      'procedure documenti italia',
      'creator Adelajdo Haxhiaj',
    ],
  }),
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Dal dubbio alla pratica ufficiale`,
    template: `%s | ${SITE_NAME}`
  },
  authors: [{ name: CREATOR_NAME, url: `${SITE_URL}/adelajdo-haxhiaj` }],
  creator: CREATOR_NAME,
  publisher: SITE_NAME,
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: SITE_NAME
  }
}

export const viewport: Viewport = {
  themeColor: '#F4F1EA',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={cn(inter.variable, fraunces.variable, "scroll-smooth")}>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="author" content={CREATOR_NAME} />
        <meta name="image" content={`${SITE_URL}${DEFAULT_OG_IMAGE}`} />
        <JsonLd data={siteStructuredData} />
      </head>
      <body className="bg-background text-foreground min-h-screen flex flex-col font-sans antialiased selection:bg-primary/20 selection:text-primary-foreground">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:font-bold shadow-xl">
            Salta al contenuto principale
        </a>
        <AppShell>
            <div id="main-content" className="flex-1 flex flex-col outline-none" tabIndex={-1}>
                {children}
            </div>
        </AppShell>
      </body>
    </html>
  )
}
