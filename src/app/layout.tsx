import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Fira_Code } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/layout/Sidebar'
import { BottomNav } from '@/components/layout/BottomNav'
import { cn } from '@/lib/utils'
import { Toaster } from 'sonner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-fira-code',
})

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
        inter.variable,
        spaceGrotesk.variable,
        firaCode.variable,
        "bg-dark-bg text-white min-h-dvh flex flex-col lg:flex-row font-sans antialiased"
      )}>
        <Sidebar />
        <Toaster position="top-center" theme="dark" closeButton richColors />

        <main className="flex-1 lg:pl-64 pb-28 lg:pb-0 relative">
          <div className="max-w-7xl mx-auto min-h-[100dvh] lg:min-h-screen p-4 md:p-6 lg:p-10">
            {children}
          </div>
        </main>

        <BottomNav />
      </body>
    </html>
  )
}
