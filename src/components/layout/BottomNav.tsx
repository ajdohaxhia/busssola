'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, LayoutGrid, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: LayoutGrid, label: 'Moduli', href: '/moduli' },
    { icon: HelpCircle, label: 'Aiuto', href: '/aiuto' },
]

export function BottomNav() {
    const pathname = usePathname()

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden w-full max-w-sm px-4">
            <nav className="glass-premium rounded-[1.75rem] p-2 flex items-center justify-between shadow-[0_10px_60px_rgba(0,0,0,0.6)] border border-white/10 backdrop-blur-3xl">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href
                    const Icon = item.icon

                    return (
                        <Link key={item.href} href={item.href} className="relative flex-1">
                            <div className="flex flex-col items-center justify-center py-3 cursor-pointer group">
                                {isActive && (
                                    <motion.div
                                        layoutId="bottom-nav-active"
                                        className="absolute inset-0 bg-gradient-to-b from-white/15 to-white/5 rounded-xl border border-white/10"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}

                                <div className={cn(
                                    "relative transition-all duration-300 transform group-active:scale-90",
                                    isActive ? "text-neon-cyan -translate-y-0.5" : "text-white/50 hover:text-white/80"
                                )}>
                                    <Icon className={cn(
                                        "w-6 h-6 transition-all",
                                        isActive && "fill-neon-cyan/20 drop-shadow-[0_0_10px_rgba(0,245,255,0.6)]"
                                    )} />
                                </div>

                                {isActive && (
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.3 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="absolute -bottom-1 w-1.5 h-1.5 bg-neon-cyan rounded-full shadow-[0_0_10px_#00f5ff]"
                                    />
                                )}
                            </div>
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}
