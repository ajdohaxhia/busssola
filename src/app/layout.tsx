import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { AppShell } from '@/components/layout/AppShell'

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
  metadataBase: new URL('https://busssola.com'),
  title: {
    default: 'Busssola | Educazione civica per l\'era digitale',
    template: '%s | Busssola'
  },
  description: 'Scopri come proteggere la tua identità, riconoscere i rischi online e navigare la rete con sicurezza. Guide pratiche, gratuite e sicure.',
  keywords: ['sicurezza online', 'privacy', 'cyberbullismo', 'grooming', 'sextortion', 'educazione digitale', 'busssola'],
  authors: [{ name: 'Team Busssola' }],
  creator: 'Team Busssola',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://busssola.com',
    title: 'Busssola | Educazione civica per l\'era digitale',
    description: 'Piattaforma gratuita e senza tracciamento per imparare a proteggersi in rete.',
    siteName: 'Busssola',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Busssola - Naviga il tuo apprendimento con sicurezza'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Busssola | Educazione civica per l\'era digitale',
    description: 'Piattaforma gratuita e senza tracciamento per imparare a proteggersi in rete.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Busssola'
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
      </head>
      <body className="bg-background text-foreground min-h-dvh flex flex-col font-sans antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
