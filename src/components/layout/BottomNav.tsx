'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, LayoutGrid, User, HelpCircle, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: LayoutGrid, label: 'Moduli', href: '/moduli' },
    { icon: User, label: 'Profilo', href: '/profilo' },
    { icon: HelpCircle, label: 'Aiuto', href: '/aiuto' },
]

export function BottomNav() {
    const pathname = usePathname()

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden px-4 pb-[max(env(safe-area-inset-bottom,0px),1.5rem)]">
            <div className="glass-card flex items-center justify-around py-2 px-1 rounded-[2rem] border-white/10 relative overflow-hidden shadow-lg">
                {/* Animated Accent Bar */}
                <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative flex flex-col items-center py-2 px-3 min-w-[56px] group touch-manipulation"
                        >
                            <motion.div
                                initial={false}
                                animate={isActive ? { y: -4, scale: 1.1 } : { y: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className={cn(
                                    "p-2.5 rounded-xl transition-all duration-200 relative",
                                    isActive
                                        ? "bg-neon-cyan text-dark-bg shadow-[0_0_20px_rgba(0,245,255,0.5)]"
                                        : "text-white/50 active:text-white/70"
                                )}
                            >
                                <item.icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                                {isActive && (
                                    <div className="absolute inset-0 bg-white/20 rounded-xl" />
                                )}
                            </motion.div>
                            <span className={cn(
                                "text-[10px] font-semibold mt-1.5 transition-colors tracking-wide font-sans",
                                isActive ? "text-neon-cyan" : "text-white/40"
                            )}>
                                {item.label}
                            </span>

                            {isActive && (
                                <motion.div
                                    layoutId="bottom-nav-indicator"
                                    className="absolute -top-1 w-1 h-1 bg-neon-cyan rounded-full shadow-[0_0_8px_#00f5ff]"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
