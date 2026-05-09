'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck } from 'lucide-react';

export function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="border-t border-border bg-surface-muted mt-24"
        >
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 flex flex-col gap-16">
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-6">
                        <Link href="/" className="flex items-center gap-3 w-fit text-foreground group">
                            <Compass className="w-8 h-8 text-primary group-hover:text-primary-hover transition-colors" strokeWidth={2} />
                            <span className="text-2xl font-display font-semibold tracking-tight">
                                Busssola.
                            </span>
                        </Link>
                        <p className="text-muted text-base leading-relaxed max-w-sm">
                            Piattaforma educativa per imparare a riconoscere i rischi online, difendere la propria privacy e sapere sempre cosa fare.
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-sm font-medium text-secondary">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                                <span>Supporto e strumenti pratici</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-6 md:col-start-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-foreground">Il Progetto</h4>
                            <ul className="space-y-3">
                                {[
                                    { label: 'Home', href: '/' },
                                    { label: 'Tutti i Moduli', href: '/moduli' },
                                    { label: 'Cos\'è Busssola', href: '/about' },
                                    { label: 'Per le scuole', href: '/scuole' }
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="text-secondary hover:text-primary text-sm transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-foreground">Aiuto</h4>
                            <ul className="space-y-3">
                                {[
                                    { label: 'Centro SOS', href: '/sos' },
                                    { label: 'Contatti', href: '/contact' },
                                    { label: 'Domande frequenti', href: '/faq' }
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="text-secondary hover:text-primary text-sm transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-foreground">Legale</h4>
                            <ul className="space-y-3">
                                {[
                                    { label: 'Privacy Policy', href: '/privacy' },
                                    { label: 'Termini d\'Uso', href: '/termini' },
                                    { label: 'Metodo Editoriale', href: '/metodo-editoriale' }
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="text-secondary hover:text-primary text-sm transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-muted">
                        © {new Date().getFullYear()} Busssola. Creato con ❤️ da{' '}
                        <Link href="/adelajdo-haxhiaj" className="font-semibold text-foreground hover:text-primary transition-colors">
                            Adelajdo Haxhiaj
                        </Link>.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link href="/trasparenza" className="text-sm text-muted hover:text-foreground transition-colors">Trasparenza</Link>
                        <Link href="/accessibilita" className="text-sm text-muted hover:text-foreground transition-colors">Accessibilità</Link>
                        <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">Il Progetto</Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
