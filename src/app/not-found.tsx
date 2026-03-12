'use client'

import { Container } from '@/components/ui/Container'
import { Compass, Home, Search, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
    return (
        <Container size="md" className="py-24 min-h-[70vh] flex flex-col items-center justify-center text-center space-y-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-4 mx-auto">
                    <Compass size={48} className="rotate-45" />
                </div>
                <h1 className="text-8xl font-display font-bold text-foreground/10 absolute -top-12 left-1/2 -translate-x-1/2 -z-10 select-none">
                    404
                </h1>
            </motion.div>

            <div className="space-y-4 max-w-lg">
                <h2 className="text-3xl font-display font-bold text-foreground tracking-tight">
                    Ti sei perso/a?
                </h2>
                <p className="text-lg text-secondary leading-relaxed">
                    La pagina che stai cercando non esiste o è stata spostata. Niente panico: torna sulla rotta giusta usando i link qui sotto.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all"
                >
                    <Home size={20} /> Torna in Home
                </Link>
                <Link 
                    href="/moduli" 
                    className="inline-flex items-center gap-2 bg-surface border border-border text-foreground px-8 py-4 rounded-xl font-bold hover:bg-surface-muted transition-all"
                >
                    <Search size={20} /> Cerca nel catalogo
                </Link>
            </div>

            <div className="pt-12 border-t border-border w-full max-w-xs">
                <p className="text-sm text-muted mb-4 uppercase tracking-widest font-bold">Oppure prova</p>
                <Link href="/sos" className="text-sos font-bold flex items-center justify-center gap-2 hover:underline">
                    Centro Emergenze SOS <ArrowRight size={16} />
                </Link>
            </div>
        </Container>
    )
}
