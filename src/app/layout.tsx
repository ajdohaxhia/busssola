import type { Metadata } from 'next'
import './globals.css'
import { HeaderSafe as Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import { SOSButton } from '@/components/ui/SOSButton'

export const metadata: Metadata = {
  title: 'Progetto Bussola - Sicurezza Digitale per Adolescenti',
  description: 'Impara a proteggerti davvero online: grooming, phishing, cyberbullismo, social addiction e molto più.',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="dark bg-dark-900 text-white">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1">
            <Header />
            <div className="ml-0 md:ml-64 pt-16 md:pt-0">
              {children}
            </div>
          </main>
        </div>
        <SOSButton />
      </body>
    </html>
  )
}
