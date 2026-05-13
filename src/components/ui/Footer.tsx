'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck } from 'lucide-react';

import { siteStats } from '@/data/siteStats';

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
                            Busssola raccoglie guide pratiche e fonti verificate per orientarsi quando succede qualcosa online. {siteStats.publishedLessons} schede disponibili, gratuite e senza registrazione.
                        </p>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-sm font-medium text-secondary">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                                <span>Supporto e strumenti pratici</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest font-bold">
                                <span>Stato: Core v1</span>
                                <span className="w-1 h-1 bg-border rounded-full" />
                                <span>Aggiornato: {siteStats.lastUpdatedAt}</span>
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
                                    { label: 'Percorsi', href: '/percorsi' },
                                    { label: 'Guide', href: '/moduli' },
                                    { label: 'Checklist', href: '/checklist' },
                                    { label: 'Glossario', href: '/glossario' }
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
                                    { label: 'Area SOS', href: '/sos' },
                                    { label: 'Le nostre Fonti', href: '/fonti' },
                                    { label: 'FAQ', href: '/faq' },
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
                            <h4 className="text-sm font-semibold text-foreground">Legale</h4>
                            <ul className="space-y-3">
                                {[
                                    { label: 'Privacy Policy', href: '/privacy' },
                                    { label: 'Termini d\'Uso', href: '/termini' },
                                    { label: 'Metodo Editoriale', href: '/metodo-editoriale' },
                                    { label: 'Trasparenza', href: '/trasparenza' }
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
                    <div className="text-sm text-muted">
                        <p>© {new Date().getFullYear()} Busssola. Creato per l'educazione digitale.</p>
                        <p className="mt-1 text-xs opacity-70">Le informazioni fornite non sostituiscono supporto legale o psicologico. In caso di emergenza chiama il 112.</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="/accessibilita" className="text-sm text-muted hover:text-foreground transition-colors">Accessibilità</Link>
                        <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">Cos'è Busssola</Link>
                        <a href="https://github.com/ajdohaxhia/busssola" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-foreground transition-colors">GitHub</a>
                        <a href="mailto:info@busssola.com" className="text-sm text-muted hover:text-foreground transition-colors">Contatti</a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
