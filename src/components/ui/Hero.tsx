'use client'

import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, ShieldAlert, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { siteStats } from '@/data/siteStats';

export function Hero() {
    return (
        <section className="relative min-h-[480px] overflow-hidden rounded-[2rem] border border-border bg-surface md:min-h-[60vh]">
            <Image
                src="/images/hero-compass.png"
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 1200px, 100vw"
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-background)_0%,rgba(250,250,250,0.95)_42%,rgba(250,250,250,0.58)_62%,rgba(250,250,250,0)_88%)]" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/70 to-transparent" />
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex min-h-[480px] max-w-3xl flex-col items-start justify-center px-6 py-12 text-left md:min-h-[60vh] md:px-16 md:py-20"
            >
                <h1 className="text-5xl font-display font-semibold leading-[0.98] tracking-tight text-foreground md:text-7xl">
                    Busssola
                </h1>
                
                <p className="mt-5 max-w-2xl text-2xl font-display font-semibold leading-tight text-foreground md:text-4xl">
                    Educazione civica per l'era digitale.
                </p>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary md:text-xl">
                    {siteStats.totalModules} moduli gratuiti, {siteStats.publishedLessons} lezioni curate per proteggere privacy, account e serenità online. Niente registrazione, niente tracciamento invasivo, un centro SOS sempre raggiungibile.
                </p>
                
                <div className="mt-10 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row">
                    <Button asChild size="lg" className="rounded-xl w-full sm:w-auto text-base h-14 px-8">
                        <Link href="/moduli">
                            Esplora i moduli <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-xl w-full sm:w-auto text-base h-14 px-8 border-border hover:bg-surface-muted text-foreground">
                        <Link href="/metodo-editoriale">
                            Scopri il metodo
                        </Link>
                    </Button>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-secondary">
                    <div className="flex items-center gap-2"><Lock className="w-4 h-4" /> 100% Gratuito</div>
                    <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Nessuna registrazione</div>
                    <div className="flex items-center gap-2 text-sos"><ShieldAlert className="w-4 h-4" /> Centro emergenze SOS integrato</div>
                </div>
            </motion.div>
        </section>
    );
}
