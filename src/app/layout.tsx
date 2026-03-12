import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { cn } from '@/lib/utils'
import { Toaster } from 'sonner'

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
  maximumScale: 1,
  userScalable: false,
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
        <Header />
        <Toaster position="top-center" richColors />
        <main className="flex-1 pb-28 lg:pb-0 relative">
          <div className="max-w-7xl mx-auto min-h-[100dvh] lg:min-h-screen p-4 md:p-6 lg:p-10">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
