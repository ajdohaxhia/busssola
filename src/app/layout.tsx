import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { cn } from '@/lib/utils'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'Bussola | Digital Safety for Gen Z',
  description: 'La bussola definitiva per navigare nel mare digitale in sicurezza.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Bussola'
  }
}

export const viewport: Viewport = {
  themeColor: '#0a0e27',
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
    <html lang="it" className="dark">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={cn(
        "bg-dark-bg text-white min-h-dvh flex flex-col font-sans antialiased"
      )}>
        <Header />
        <Toaster position="top-center" theme="dark" closeButton richColors />
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
