'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { Toaster } from 'sonner'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { SOSButton } from '@/components/ui/SOSButton'
import { QuickExitButton } from '@/components/sos/QuickExitButton'
import { DisplayManager } from '@/components/layout/DisplayManager'
import { cn } from '@/lib/utils'

function isLessonPath(pathname: string | null) {
    return Boolean(pathname?.match(/^\/moduli\/[^/]+\/lezione\/[^/]+\/?$/))
}
export function AppShell({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    const lessonMode = isLessonPath(pathname)

    const quickExitVisible = lessonMode || Boolean(pathname?.startsWith('/sos'))

    return (
        <div className="flex flex-col min-h-screen">
            <DisplayManager />
            {!lessonMode && <Header />}
            <Toaster position="top-center" richColors />
            <main className={cn(
                "flex-1 relative flex flex-col",
                !lessonMode && "pt-20",
                quickExitVisible && "pb-24 md:pb-0"
            )}>
                <div
                    className={cn(
                        'flex-1 flex flex-col',
                        lessonMode
                            ? 'w-full'
                            : 'mx-auto w-full max-w-7xl px-4 pb-20 md:px-6 lg:px-8'
                    )}
                >
                    {children}
                </div>
            </main>
            {!lessonMode && <Footer />}
            {!lessonMode && <SOSButton />}
            {(lessonMode || pathname?.startsWith('/sos')) && <QuickExitButton />}
        </div>
    )
}

