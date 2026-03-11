'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Compass } from 'lucide-react';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/percorsi', label: 'Percorsi' },
    { href: '/moduli', label: 'Catalogo' },
    { href: '/about', label: 'Cos\'è Busssola' },
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
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-surface/80 backdrop-blur-md border-b border-border py-4 shadow-sm'
                    : 'bg-transparent py-6'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="group flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center text-primary group-hover:text-primary-hover transition-colors">
                        <Compass className="w-8 h-8" strokeWidth={2} />
                    </div>
                    <span className="text-2xl font-display font-semibold tracking-tight text-foreground">
                        Busssola.
                    </span>
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center space-x-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'relative px-4 py-2 rounded-full text-sm font-medium transition-colors',
                                    isActive
                                        ? 'text-primary bg-primary/5'
                                        : 'text-secondary hover:text-foreground hover:bg-surface-hover'
                                )}
                            >
                                <span className="relative z-10">{item.label}</span>
                            </Link>
                        );
                    })}
                    {/* Persistent SOS Link in Header */}
                    <Link
                        href="/sos"
                        className="ml-4 px-4 py-2 rounded-full text-sm font-semibold bg-sos/10 text-sos hover:bg-sos hover:text-white transition-colors"
                    >
                        Emergenza SOS
                    </Link>
                </nav>
            </div>
        </motion.header>
    );
}
