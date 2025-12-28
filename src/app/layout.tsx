import type { Metadata } from 'next'
import './globals.css'
import { HeaderSafe as Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import { SOSButton } from '@/components/ui/SOSButton'
import { AnimatedBackground } from '@/components/layout/AnimatedBackground'
import { ThemeManager } from '@/components/layout/ThemeManager'

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
        <meta name="theme-color" content="#0f1a35" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-deep-blue text-white selection:bg-cyan-400/30 selection:text-cyan-300 transition-colors duration-500">
        <ThemeManager />
        <AnimatedBackground />
        <div className="flex min-h-screen relative z-10">
          <Sidebar />
          <main className="flex-1 flex flex-col">
            <Header />
            <div className="ml-0 md:ml-64 pt-16 flex-1">
              {children}
            </div>
          </main>
        </div>
        <SOSButton />
      </body>
    </html>
  )
}
