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

export function AppShell({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    const lessonMode = isLessonPath(pathname)

    return (
        <>
            {!lessonMode && <Header />}
            <Toaster position="top-center" richColors />
            <main className="flex-1 relative">
                <div
                    className={cn(
                        'min-h-[100dvh]',
                        lessonMode
                            ? 'w-full'
                            : 'mx-auto max-w-7xl px-4 pb-28 pt-24 md:px-6 md:pt-28 lg:px-10 lg:pb-0'
                    )}
                >
                    {children}
                </div>
            </main>
            {!lessonMode && <Footer />}
        </>
    )
}
