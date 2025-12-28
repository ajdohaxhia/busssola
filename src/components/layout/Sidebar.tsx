'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, LayoutGrid, User, HelpCircle, Shield, Brain } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: LayoutGrid, label: 'Moduli', href: '/moduli' },
    { icon: Shield, label: 'Canale SOS', href: '/sos' },
    { icon: User, label: 'Il mio Profilo', href: '/profilo' },
    { icon: HelpCircle, label: 'Aiuto & FAQ', href: '/aiuto' },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-64 hidden lg:flex flex-col p-6 z-50">
            <div className="glass-card flex-1 rounded-[2.5rem] flex flex-col p-6 border-white/5 relative overflow-hidden">
                {/* Logo Section */}
                <div className="flex items-center gap-3 mb-12 px-2">
                    <div className="w-10 h-10 bg-neon-cyan/20 rounded-xl flex items-center justify-center border border-neon-cyan/30 shadow-[0_0_20px_rgba(0,245,255,0.2)]">
                        <Shield className="w-6 h-6 text-neon-cyan animate-pulse" />
                    </div>
                    <span className="text-2xl font-display font-extrabold tracking-tighter">
                        Bussola
                    </span>
                </div>

                {/* Nav Links */}
                <nav className="flex-1 space-y-3">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "group relative flex items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-200 font-sans",
                                    isActive
                                        ? "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 shadow-[0_0_15px_rgba(0,245,255,0.1)]"
                                        : "text-white/40 hover:text-white hover:bg-white/5"
                                )}
                            >
                                <item.icon className={cn(
                                    "w-5 h-5 transition-transform duration-300 group-hover:scale-110",
                                    isActive ? "text-neon-cyan" : ""
                                )} />
                                <span className="font-bold text-sm tracking-tight">{item.label}</span>

                                {isActive && (
                                    <motion.div
                                        layoutId="sidebar-active-indicator"
                                        className="absolute left-0 w-1 h-6 bg-neon-cyan rounded-r-full shadow-[0_0_10px_#00f5ff]"
                                    />
                                )}
                            </Link>
                        )
                    })}
                </nav>

                {/* Live Status */}
                <div className="mt-auto p-5 bg-white/5 rounded-[2rem] border border-white/10 group/status overflow-hidden relative">
                    <div className="absolute inset-0 bg-neon-green/5 translate-y-full group-hover/status:translate-y-0 transition-transform duration-500" />
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse shadow-[0_0_10px_#00d084]" />
                            <span className="text-[10px] font-black text-neon-green uppercase tracking-[0.2em] animate-flicker">Live Protection</span>
                        </div>
                        <p className="text-[10px] text-white/30 leading-relaxed font-sans font-medium">
                            Monitoraggio attivo delle minacce digitali per la tua protezione locale.
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    )
}
