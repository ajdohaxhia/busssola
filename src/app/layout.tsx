import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
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

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  ...buildSeoMetadata({
    title: 'Sicurezza online per ragazzi, famiglie e scuole',
    description: SITE_DESCRIPTION,
    path: '/',
    keywords: [
      'sicurezza internet ragazzi',
      'guide sicurezza digitale',
      'educazione digitale gratuita',
      'creator Adelajdo Haxhiaj',
    ],
  }),
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Sicurezza online per ragazzi, famiglie e scuole`,
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
  themeColor: '#FAFAFA',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={cn(inter.variable, outfit.variable)}>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="author" content={CREATOR_NAME} />
        <meta name="image" content={`${SITE_URL}${DEFAULT_OG_IMAGE}`} />
        <JsonLd data={siteStructuredData} />
      </head>
      <body className="bg-background text-foreground min-h-dvh flex flex-col font-sans antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
