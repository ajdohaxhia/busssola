'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Compass, Twitter, Instagram, Send, ShieldCheck } from 'lucide-react';

export function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mt-24 border-t border-white/10 bg-[#0a0e27]/80 backdrop-blur-2xl overflow-hidden"
        >
            {/* Top Glow Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />

            {/* Background Ambient Glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-neon-cyan/5 rounded-[100%] blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8 md:pt-24 md:pb-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">

                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-6">
                        <Link href="/" className="group flex items-center gap-3 w-fit">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon-cyan/10 group-hover:border-neon-cyan/30 transition-all duration-500 shadow-xl group-hover:shadow-[0_0_20px_rgba(0,245,255,0.2)]">
                                <Compass className="w-6 h-6 text-white group-hover:text-neon-cyan transition-colors duration-500" />
                            </div>
                            <span className="text-3xl font-black tracking-tighter text-white">
                                Bussola<span className="text-neon-cyan">.</span>
                            </span>
                        </Link>
                        <p className="text-white/40 text-lg leading-relaxed max-w-sm">
                            Il primo sistema operativo educativo progettato esclusivamente per formare la Gen Z alla difesa e sicurezza digitale globale.
                        </p>
                        <div className="flex items-center gap-2 text-neon-green/80 bg-neon-green/10 px-4 py-2 rounded-full w-fit border border-neon-green/20">
                            <ShieldCheck className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">Sistemi Online</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-4 md:col-start-7 flex flex-wrap gap-16 md:gap-24">
                        <div className="space-y-6">
                            <h4 className="text-xs font-black text-white/30 uppercase tracking-[0.2em]">Navigazione</h4>
                            <ul className="space-y-4">
                                {['Home', 'Moduli', 'Chi Siamo', 'Contatti'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                            className="text-white/60 hover:text-neon-cyan text-sm font-medium transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xs font-black text-white/30 uppercase tracking-[0.2em]">Legale</h4>
                            <ul className="space-y-4">
                                {['Privacy Policy', 'Termini d\'Uso', 'Cookie Policy'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href="#"
                                            className="text-white/60 hover:text-white text-sm font-medium transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm font-medium text-white/30 text-center md:text-left">
                        © {new Date().getFullYear()} Bussola. Tutti i diritti riservati.<br className="md:hidden" />
                        <span className="hidden md:inline"> | </span>Costruito per una generazione sicura.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {[Twitter, Instagram, Send].map((Icon, i) => (
                            <Link
                                key={i}
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <Icon className="w-4 h-4" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
