'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, LayoutGrid, HelpCircle, Settings, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: LayoutGrid, label: 'Moduli', href: '/moduli' },
    { icon: HelpCircle, label: 'Aiuto', href: '/aiuto' },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="hidden lg:flex fixed left-4 top-4 bottom-4 w-64 z-40 flex-col">
            {/* Glass Container */}
            <div className="flex-1 rounded-[2rem] glass-premium flex flex-col p-7 overflow-hidden relative">

                {/* Brand Bloom Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-neon-cyan/20 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-neon-purple/15 blur-[100px] rounded-full pointer-events-none" />

                {/* Logo */}
                <div className="relative z-10 flex items-center gap-3.5 px-2 mb-12">
                    <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-neon-cyan shadow-[0_0_25px_rgba(0,245,255,0.25)]">
                        <Shield className="w-7 h-7 fill-neon-cyan/20" />
                    </div>
                    <div>
                        <h1 className="font-display font-bold text-2xl tracking-tight text-white">Bussola</h1>
                        <p className="text-[10px] text-neon-cyan font-bold tracking-[0.2em] uppercase">Gen Z Safety</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-2.5 relative z-10">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href
                        const Icon = item.icon

                        return (
                            <Link key={item.href} href={item.href}>
                                <div className="relative group">
                                    {isActive && (
                                        <motion.div
                                            layoutId="sidebar-active"
                                            className="absolute inset-0 bg-gradient-to-r from-neon-cyan/15 to-neon-cyan/10 border border-neon-cyan/25 rounded-xl shadow-[0_0_20px_rgba(0,245,255,0.15)]"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <div className={cn(
                                        "relative flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all duration-300",
                                        isActive
                                            ? "text-neon-cyan"
                                            : "text-white/60 hover:text-white hover:bg-white/5"
                                    )}>
                                        <Icon className={cn(
                                            "w-5 h-5 transition-all",
                                            isActive && "fill-neon-cyan/20 drop-shadow-[0_0_8px_rgba(0,245,255,0.6)]"
                                        )} />
                                        <span className="font-semibold text-[15px] tracking-wide">{item.label}</span>

                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </nav>

                {/* Footer - Subtle Pattern */}
                <div className="relative z-10 pt-6 mt-6 border-t border-white/5">
                    <p className="text-center text-xs text-white/30 font-medium">
                        Navigare in sicurezza
                    </p>
                </div>
            </div>
        </aside>
    )
}
