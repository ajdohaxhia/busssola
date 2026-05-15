'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Compass, Menu, X, ArrowRight, ShieldAlert } from 'lucide-react';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/moduli', label: 'Guide' },
    { href: '/percorsi', label: 'Percorsi' },
    { href: '/tips', label: 'Trucchi' },
    { href: '/checklist', label: 'Checklist' },
];

const secondaryNavItems = [
    { href: '/glossario', label: 'Glossario' },
    { href: '/scuole', label: 'Scuole' },
    { href: '/fonti', label: 'Fonti' },
];

export function Header() {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
                isScrolled
                    ? 'bg-surface/90 backdrop-blur-xl border-border py-3 shadow-md'
                    : 'bg-transparent py-6'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="group flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                    <div className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                        <Compass className="w-6 h-6" strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col -space-y-1">
                        <span className="text-xl font-display font-black tracking-tighter text-foreground uppercase">
                            Busssola
                        </span>
                        <span className="text-[10px] font-bold text-secondary/60 uppercase tracking-[0.2em]">Guida Civica</span>
                    </div>
                </Link>

                {/* Navigation Links - Desktop */}
                <nav className="hidden lg:flex items-center space-x-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'px-4 py-2 rounded-xl text-sm font-bold transition-all',
                                    isActive
                                        ? 'text-primary bg-primary/5'
                                        : 'text-secondary hover:text-foreground hover:bg-surface-muted'
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                    
                    <div className="h-4 w-px bg-border mx-2" />
                    
                    {secondaryNavItems.map((item) => {
                         const isActive = pathname?.startsWith(item.href);
                         return (
                             <Link
                                 key={item.href}
                                 href={item.href}
                                 className={cn(
                                     'px-3 py-2 rounded-xl text-[13px] font-semibold transition-all',
                                     isActive
                                         ? 'text-primary bg-primary/5'
                                         : 'text-secondary/70 hover:text-foreground hover:bg-surface-muted'
                                 )}
                             >
                                 {item.label}
                             </Link>
                         );
                    })}

                    <Link
                        href="/sos"
                        className={cn(
                            "ml-4 px-5 py-2.5 rounded-xl text-sm font-black uppercase tracking-widest shadow-lg transition-all active:scale-95",
                            pathname === '/sos' 
                                ? "bg-sos text-white shadow-sos/20" 
                                : "bg-sos/10 text-sos hover:bg-sos hover:text-white shadow-sos/10"
                        )}
                    >
                        SOS
                    </Link>
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        href="/sos"
                        className="lg:hidden px-4 py-2 rounded-xl text-xs font-black bg-sos text-white shadow-lg shadow-sos/20"
                    >
                        SOS
                    </Link>
                    <button
                        type="button"
                        className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground shadow-sm active:scale-90 transition-transform"
                        aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-border bg-surface overflow-hidden"
                    >
                        <div className="p-6 grid gap-2">
                            {[...navItems, ...secondaryNavItems].map((item) => {
                                const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={cn(
                                            'flex items-center justify-between rounded-xl px-5 py-4 text-sm font-bold transition-all',
                                            isActive
                                                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                                : 'text-secondary hover:bg-surface-muted hover:text-foreground border border-transparent'
                                        )}
                                    >
                                        {item.label}
                                        <ArrowRight className={cn("w-4 h-4 opacity-0 -translate-x-2 transition-all", isActive && "opacity-100 translate-x-0")} />
                                    </Link>
                                );
                            })}
                            <div className="pt-4 border-t border-border mt-2">
                                <Link
                                    href="/sos"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 rounded-xl bg-sos text-white px-5 py-5 text-base font-black uppercase tracking-widest shadow-xl shadow-sos/20"
                                >
                                    <ShieldAlert className="w-5 h-5" /> Emergenza SOS
                                </Link>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
