'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, LayoutGrid, User, HelpCircle, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: LayoutGrid, label: 'Moduli', href: '/moduli' },
    { icon: Shield, label: 'SOS', href: '/sos' },
    { icon: User, label: 'Profilo', href: '/profilo' },
    { icon: HelpCircle, label: 'Aiuto', href: '/aiuto' },
]

export function BottomNav() {
    const pathname = usePathname()

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden px-4 pb-6">
            <div className="glass-card flex items-center justify-around py-3 px-2 rounded-[2rem] border-white/10 relative overflow-hidden">
                {/* Animated Accent Bar */}
                <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />

                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative flex flex-col items-center p-1 min-w-[64px] group"
                        >
                            <motion.div
                                initial={false}
                                animate={isActive ? { y: -6, scale: 1.15 } : { y: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                className={cn(
                                    "p-3 rounded-2xl transition-all duration-300 relative",
                                    isActive
                                        ? "bg-neon-cyan text-dark-bg shadow-[0_0_15px_rgba(0,245,255,0.4)]"
                                        : "text-white/40 hover:text-white/60"
                                )}
                            >
                                <item.icon className="w-5 h-5" />
                                {isActive && (
                                    <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse" />
                                )}
                            </motion.div>
                            <span className={cn(
                                "text-[9px] font-bold mt-1 transition-colors tracking-widest uppercase font-sans",
                                isActive ? "text-neon-cyan opacity-100" : "text-white/20"
                            )}>
                                {item.label}
                            </span>

                            {isActive && (
                                <motion.div
                                    layoutId="bottom-nav-indicator"
                                    className="absolute -top-3 w-1.5 h-1.5 bg-neon-cyan rounded-full shadow-[0_0_10px_#00f5ff]"
                                />
                            )}
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
