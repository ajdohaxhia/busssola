'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, LayoutGrid, User, HelpCircle, Gamepad2, Settings, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: Gamepad2, label: 'Gioca', href: '/gioca' },
    { icon: LayoutGrid, label: 'Moduli', href: '/moduli' },
    { icon: User, label: 'Profilo', href: '/profilo' },
    { icon: HelpCircle, label: 'Aiuto', href: '/aiuto' },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="hidden lg:flex fixed left-4 top-4 bottom-4 w-64 z-40 flex-col">
            {/* Glass Container */}
            <div className="flex-1 rounded-[2rem] glass-thin flex flex-col p-6 overflow-hidden relative">

                {/* Brand Bloom Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-neon-cyan/20 blur-[80px] rounded-full pointer-events-none" />

                {/* Logo */}
                <div className="relative z-10 flex items-center gap-3 px-2 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-neon-cyan shadow-[0_0_20px_rgba(0,245,255,0.2)]">
                        <Shield className="w-6 h-6 fill-neon-cyan/20" />
                    </div>
                    <div>
                        <h1 className="font-display font-bold text-xl tracking-tight text-white">Bussola</h1>
                        <p className="text-[10px] text-neon-cyan font-bold tracking-widest uppercase">Gen Z Safety</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-2 relative z-10">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href
                        const Icon = item.icon

                        return (
                            <Link key={item.href} href={item.href}>
                                <div className="relative group">
                                    {isActive && (
                                        <motion.div
                                            layoutId="sidebar-active"
                                            className="absolute inset-0 bg-neon-cyan/10 border border-neon-cyan/20 rounded-xl shadow-[0_0_15px_rgba(0,245,255,0.1)]"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <div className={cn(
                                        "relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                                        isActive ? "text-neon-cyan" : "text-white/60 hover:text-white hover:bg-white/5"
                                    )}>
                                        <Icon className={cn("w-5 h-5", isActive && "fill-neon-cyan/20")} />
                                        <span className="font-medium text-sm">{item.label}</span>

                                        {/* Hover Glow */}
                                        <span className="absolute right-2 w-1.5 h-1.5 rounded-full bg-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#00f5ff]" />
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </nav>

                {/* Footer Settings */}
                <div className="relative z-10 pt-6 border-t border-white/10">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white transition-colors rounded-xl hover:bg-white/5 group">
                        <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                        <span className="text-sm font-medium">Impostazioni</span>
                    </button>
                    <div className="mt-4 px-4 text-[10px] text-white/20 font-mono">
                        v3.0.0 • Local First
                    </div>
                </div>
            </div>
        </aside>
    )
}
