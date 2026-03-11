'use client'

import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, ShieldAlert, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative overflow-hidden rounded-[2.5rem] bg-surface border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-surface pointer-events-none" />
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 px-6 py-20 md:px-16 md:py-32 flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-8">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Educazione civica per l'era digitale</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-display font-semibold text-foreground leading-[1.1] tracking-tight">
                    Una guida chiara e sicura per orientarsi nei rischi digitali.
                </h1>
                
                <p className="mt-6 text-lg md:text-xl text-secondary max-w-2xl leading-relaxed text-balance">
                    Impara a proteggere la tua privacy, riconoscere truffe e manipolazioni, e sapere sempre cosa fare quando qualcosa va storto online.
                </p>
                
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <Button asChild size="lg" className="rounded-xl w-full sm:w-auto text-base h-14 px-8">
                        <Link href="/moduli">
                            Inizia i percorsi <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-xl w-full sm:w-auto text-base h-14 px-8 border-border hover:bg-surface-muted text-foreground">
                        <Link href="/about">
                            Scopri il metodo
                        </Link>
                    </Button>
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-secondary font-medium opacity-80">
                    <div className="flex items-center gap-2"><Lock className="w-4 h-4" /> 100% Gratuito</div>
                    <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Nessuna registrazione</div>
                    <div className="flex items-center gap-2 text-sos"><ShieldAlert className="w-4 h-4" /> Centro emergenze SOS integrato</div>
                </div>
            </motion.div>
        </section>
    );
}
