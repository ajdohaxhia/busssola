'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@/components/ui/Icon'
import { MODULES_DATA } from '@/data/modules'

export function Sidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { name: 'Dashboard', path: '/', icon: 'dashboard' },
        { name: 'Profilo', path: '/profilo', icon: 'profile' },
        { name: 'SOS Help', path: '/aiuto', icon: 'help' },
    ]

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 z-50 p-2 bg-dark-800 border border-white/10 rounded-lg md:hidden"
            >
                <Icon name={isOpen ? 'close' : 'menu'} size={20} />
            </button>

            {/* Sidebar Container */}
            <motion.aside
                initial={false}
                animate={{ x: isOpen ? 0 : -300 }}
                className={`fixed inset-y-0 left-0 z-40 w-64 bg-dark-900 border-r border-white/5 flex flex-col md:translate-x-0 transition-transform duration-300 ease-in-out`}
            >
                {/* Logo */}
                <div className="p-6 border-b border-white/5">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-neon-yellow rounded-xl flex items-center justify-center text-dark-900 shadow-neon group-hover:scale-110 transition">
                            <Icon name="zap" size={24} />
                        </div>
                        <span className="text-xl font-black tracking-tighter text-white">BUSSOLA <span className="text-neon-yellow text-xs align-top">v2.0</span></span>
                    </Link>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto p-4 space-y-8 scrollbar-hide">
                    {/* Main Links */}
                    <nav className="space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${pathname === item.path
                                        ? 'bg-neon-yellow/10 text-neon-yellow font-bold'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <Icon name={item.icon} size={20} />
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Modules List */}
                    <div>
                        <h3 className="px-4 text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-4">Percorso Formativo</h3>
                        <nav className="space-y-1">
                            {MODULES_DATA.map((mod) => (
                                <Link
                                    key={mod.id}
                                    href={`/moduli/${mod.id}`}
                                    className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-all ${pathname.includes(mod.id)
                                            ? 'bg-white/10 text-white font-medium'
                                            : 'text-gray-500 hover:text-gray-300'
                                        }`}
                                >
                                    <span className="text-lg opacity-80">{mod.icon}</span>
                                    <span className="truncate">{mod.title}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 bg-dark-800/50 text-[10px] text-gray-600 text-center font-mono">
                    PWA EDITION • 2025
                </div>
            </motion.aside>

            {/* Backdrop */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
                />
            )}
        </>
    )
}
