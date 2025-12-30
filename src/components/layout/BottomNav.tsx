'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, LayoutGrid, User, HelpCircle, Gamepad2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Gamepad2, label: 'Gioca', href: '/gioca' },
    { icon: LayoutGrid, label: 'Moduli', href: '/moduli' },
    { icon: User, label: 'Profilo', href: '/profilo' },
    { icon: HelpCircle, label: 'Aiuto', href: '/aiuto' },
]

export function BottomNav() {
    const pathname = usePathname()

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden w-full max-w-sm px-4">
            <nav className="glass-thin rounded-2xl p-1.5 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-2xl">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href
                    const Icon = item.icon

                    return (
                        <Link key={item.href} href={item.href} className="relative flex-1">
                            <div className="flex flex-col items-center justify-center py-2.5 cursor-pointer group">
                                {isActive && (
                                    <motion.div
                                        layoutId="bottom-nav-active"
                                        className="absolute inset-0 bg-white/10 rounded-xl"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                <div className={cn(
                                    "relative transition-all duration-300 transform group-active:scale-90",
                                    isActive ? "text-neon-cyan -translate-y-1" : "text-white/50 hover:text-white"
                                )}>
                                    <Icon className={cn("w-6 h-6", isActive && "fill-neon-cyan/20 drop-shadow-[0_0_8px_rgba(0,245,255,0.5)]")} />
                                </div>

                                {isActive && (
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="absolute -bottom-1 w-1 h-1 bg-neon-cyan rounded-full shadow-[0_0_8px_#00f5ff]"
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
