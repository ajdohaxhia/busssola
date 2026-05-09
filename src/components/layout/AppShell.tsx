'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { Toaster } from 'sonner'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { cn } from '@/lib/utils'

function isLessonPath(pathname: string | null) {
    return Boolean(pathname?.match(/^\/moduli\/[^/]+\/lezione\/[^/]+\/?$/))
}

function WipBanner() {
    return (
        <div
            role="status"
            aria-label="Lavori in corso / Work in progress"
            className="fixed top-0 inset-x-0 z-[60] h-9 flex items-center justify-center bg-amber-100 text-amber-900 border-b border-amber-200 text-center text-[11px] md:text-xs font-medium px-4"
        >
            <span className="font-bold tracking-wide uppercase mr-2">WIP</span>
            <span className="truncate">Lavori in corso · Work in progress — contenuti in revisione.</span>
        </div>
    )
}

export function AppShell({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    const lessonMode = isLessonPath(pathname)

    return (
        <>
            <WipBanner />
            {!lessonMode && <Header />}
            <Toaster position="top-center" richColors />
            <main className="flex-1 relative">
                <div
                    className={cn(
                        'min-h-[100dvh]',
                        lessonMode
                            ? 'w-full pt-9'
                            : 'mx-auto max-w-7xl px-4 pb-28 pt-32 md:px-6 md:pt-36 lg:px-10 lg:pb-0'
                    )}
                >
                    {children}
                </div>
            </main>
            {!lessonMode && <Footer />}
        </>
    )
}
