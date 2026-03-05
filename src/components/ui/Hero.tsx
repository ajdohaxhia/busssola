'use client'

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Play } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative overflow-hidden rounded-[3.5rem] border border-white/10 bg-[#0a0e27]">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-neon-cyan/20 rounded-full blur-[160px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[60%] h-[60%] bg-neon-purple/15 rounded-full blur-[140px] animate-pulse-slow delay-1000" />
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e27]/40 to-[#0a0e27]" />
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 px-10 py-20 md:px-24 md:py-32 flex flex-col items-start justify-center text-left min-h-[650px]"
            >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <Badge variant="neon" className="px-6 py-2 text-xs font-black tracking-widest">
                        <Compass className="w-3.5 h-3.5 mr-2 animate-spin-slow" />
                        SISTEMA OPERATIVO DI SICUREZZA
                    </Badge>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                    className="text-7xl md:text-9xl font-display font-black text-white leading-[0.85] tracking-tighter"
                >
                    Naviga il <br />
                    <span className="text-gradient-cyan drop-shadow-[0_0_30px_rgba(0,245,255,0.3)]">
                        Oltre il Limite
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed font-medium mt-4"
                >
                    La guida definitiva per la Gen Z. Impara a dominare il web in sicurezza con moduli interattivi e sfide reali.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-wrap gap-6 pt-4"
                >
                    <Button asChild size="lg" variant="cyan" className="rounded-[2rem] text-xl font-black tracking-tighter px-12 group/btn">
                        <Link href="/moduli">
                            <Play className="w-6 h-6 fill-current mr-3 transition-transform group-hover/btn:scale-125" />
                            ENTRA ORA
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="glass" className="rounded-[2rem] px-10">
                        <Link href="/about">Scopri di più</Link>
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
