'use client'

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Compass, ArrowRight, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-muted pointer-events-none" />
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 px-6 py-20 md:px-16 md:py-32 flex flex-col items-start justify-center text-left"
            >
                <Badge variant="muted" className="mb-6 px-4 py-1.5 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-primary" />
                    <span>Piattaforma di Educazione Digitale</span>
                </Badge>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold text-foreground leading-[1.05] tracking-tight max-w-5xl">
                    Impara a <span className="text-primary">proteggerti online</span>, senza panico e senza tecnicismi.
                </h1>
                
                <p className="mt-6 text-lg md:text-xl text-secondary max-w-2xl leading-relaxed text-balance">
                    Percorsi pratici e gratuiti per capire i rischi del web, difendere la tua privacy e sapere cosa fare quando qualcosa non va.
                </p>
                
                <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button asChild size="lg" className="rounded-xl w-full sm:w-auto text-base">
                        <Link href="/moduli">
                            Inizia da qui <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="secondary" className="rounded-xl w-full sm:w-auto text-base bg-sos-bg text-sos hover:bg-[#fde8e8] border border-sos-border">
                        <Link href="/sos">
                            <ShieldAlert className="w-5 h-5 mr-2" /> Apri il centro SOS
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
