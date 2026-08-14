'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { href: '/moduli', label: 'Guide' },
    { href: '/modelli', label: 'Modelli' },
    { href: '/novita', label: 'Novità' },
    { href: '/percorsi', label: 'Percorsi' },
    { href: '/tips', label: 'Trucchi' },
];

export function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-18 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsMenuOpen(false)}>
                    <span className="w-9 h-9 flex items-center justify-center bg-primary text-white rounded-lg">
                        <Compass className="w-5 h-5" strokeWidth={2.25} />
                    </span>
                    <span className="flex flex-col leading-none">
                        <span className="font-display text-lg font-semibold tracking-tight">Busssola</span>
                        <span className="text-[10px] text-muted">Guida civica</span>
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || pathname?.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'px-3 py-2 rounded-lg text-sm font-medium',
                                    isActive ? 'text-primary bg-primary/10' : 'text-secondary hover:text-foreground'
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                    <a
                        href="tel:112"
                        className="ml-3 inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold bg-sos text-white"
                    >
                        <Phone className="w-4 h-4" /> 112
                    </a>
                    <Link
                        href="/sos"
                        className={cn(
                            'px-3 py-2 rounded-lg text-sm font-semibold',
                            pathname === '/sos' ? 'bg-sos/10 text-sos' : 'text-sos hover:bg-sos/10'
                        )}
                    >
                        SOS
                    </Link>
                </nav>

                <div className="flex lg:hidden items-center gap-2">
                    <a href="tel:112" className="px-3 py-2 rounded-lg text-xs font-semibold bg-sos text-white">112</a>
                    <Link href="/sos" className="px-3 py-2 rounded-lg text-xs font-semibold text-sos border border-sos/30">SOS</Link>
                    <button
                        type="button"
                        className="h-10 w-10 inline-flex items-center justify-center rounded-lg border border-border"
                        aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
                        onClick={() => setIsMenuOpen((o) => !o)}
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <nav className="lg:hidden border-t border-border bg-surface p-4 grid gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-surface-muted"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a href="tel:112" className="mt-2 px-4 py-4 rounded-lg bg-sos text-white font-semibold text-center">
                        In pericolo? Chiama 112
                    </a>
                </nav>
            )}
        </header>
    );
}
