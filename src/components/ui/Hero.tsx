'use client'

import { motion } from 'framer-motion';
import { Compass, Lock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background py-16 md:py-24 px-8 md:px-16 text-left">
            <div className="absolute top-0 right-0 p-24 opacity-[0.05] pointer-events-none">
                <Compass size={400} />
            </div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-3xl space-y-8"
            >
                <h1 className="text-5xl md:text-7xl font-display font-black leading-[1.1] tracking-tight text-white">
                    Trova cosa fare, <br className="hidden md:block" /> passo dopo passo.
                </h1>
                
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium">
                    Guide pratiche, checklist e link ufficiali per documenti, lavoro, casa, truffe, sicurezza digitale e servizi pubblici.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                    <Button asChild size="lg" variant="destructive" className="rounded-2xl h-16 px-10 text-lg font-black uppercase tracking-widest shadow-2xl shadow-sos/40 active:scale-95 transition-all">
                        <Link href="/sos">
                            Ho un'urgenza
                        </Link>
                    </Button>
                    <Button asChild size="lg" className="rounded-2xl h-16 px-10 text-lg font-bold bg-white text-foreground hover:bg-white/90 shadow-xl active:scale-95 transition-all">
                        <Link href="/moduli">
                            Cerca una guida
                        </Link>
                    </Button>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-white/40 uppercase tracking-widest pt-8">
                    <div className="flex items-center gap-2"><Lock className="w-4 h-4" /> 100% Gratuito</div>
                    <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Open Source</div>
                    <div className="flex items-center gap-2"><Compass className="w-4 h-4" /> Risorsa Civica</div>
                </div>
            </motion.div>
        </section>
    );
}
