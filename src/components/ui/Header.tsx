'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Menu, X } from 'lucide-react';
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
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-18 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsMenuOpen(false)} aria-label="Busssola, pagina iniziale">
                    <span className="w-9 h-9 flex items-center justify-center bg-foreground text-background rounded-md">
                        <Compass className="w-5 h-5" strokeWidth={2.25} aria-hidden="true" />
                    </span>
                    <span className="flex flex-col leading-none">
                        <span className="font-display text-lg font-semibold tracking-tight text-foreground">Busssola</span>
                        <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted">Guida civica</span>
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
                                    'px-3 py-2 text-sm font-medium transition-colors',
                                    isActive
                                        ? 'text-foreground underline decoration-accent decoration-2 underline-offset-[10px]'
                                        : 'text-secondary hover:text-foreground'
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/sos"
                        className={cn(
                            'ml-2 px-3 py-2 text-sm font-semibold',
                            pathname === '/sos' ? 'text-sos underline decoration-sos decoration-2 underline-offset-[10px]' : 'text-sos hover:text-sos-hover'
                        )}
                    >
                        SOS
                    </Link>
                </nav>

                <div className="flex lg:hidden items-center gap-2">
                    <Link
                        href="/sos"
                        className="px-3 py-2 rounded-md text-xs font-semibold text-sos border border-sos/30"
                    >
                        SOS
                    </Link>
                    <button
                        type="button"
                        className="h-10 w-10 inline-flex items-center justify-center rounded-md border border-border bg-surface"
                        aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
                        onClick={() => setIsMenuOpen((o) => !o)}
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <nav className="lg:hidden border-t border-border bg-white p-4 grid gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="px-4 py-3 rounded-md text-sm font-medium text-foreground hover:bg-surface-muted"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/sos"
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-2 px-4 py-3 rounded-md text-sm font-semibold text-sos border border-sos/30 text-center"
                    >
                        Ho un&apos;urgenza
                    </Link>
                </nav>
            )}
        </header>
    );
}
