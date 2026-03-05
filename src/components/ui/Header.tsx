'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Compass } from 'lucide-react';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/moduli', label: 'Moduli' },
    { href: '/about', label: 'Chi Siamo' },
    { href: '/sos', label: 'SOS' },
];

export function Header() {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                isScrolled
                    ? 'bg-[#0a0e27]/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                    : 'bg-transparent py-6'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="group flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-all duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(0,245,255,0.15)] group-hover:shadow-[0_0_25px_rgba(0,245,255,0.3)]">
                        <Compass className="w-5 h-5 text-neon-cyan animate-spin-slow" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-white">
                        Bussola<span className="text-neon-cyan">.</span>
                    </span>
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center space-x-1 glass-card px-2 py-1.5 rounded-full border-white/5">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300',
                                    isActive
                                        ? 'text-white'
                                        : 'text-white/50 hover:text-white hover:bg-white/5'
                                )}
                            >
                                <span className="relative z-10">{item.label}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="header-active-tab"
                                        className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

            </div>
        </motion.header>
    );
}
