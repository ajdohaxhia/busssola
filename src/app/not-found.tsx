'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ArrowLeft, Compass } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <Container className="min-h-[80vh] flex flex-col items-center justify-center text-center py-20 px-4">
            <div className="space-y-8 max-w-xl mx-auto">
                {/* Custom Icon Graphic */}
                <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
                    <div className="absolute inset-4 bg-primary/5 rounded-full flex items-center justify-center border border-primary/20">
                        <Compass className="w-12 h-12 text-primary" strokeWidth={1.5} />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-7xl font-display font-bold text-foreground tracking-tighter">
                        404
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground tracking-tight">
                        La bussola ha perso il segnale.
                    </h2>
                    <p className="text-lg text-secondary leading-relaxed max-w-md mx-auto">
                        La pagina che stai cercando non esiste, è stata spostata o il collegamento era errato. Niente panico, ripartiamo dall'inizio.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                    <Button asChild size="lg" className="rounded-xl h-14 px-8 text-base shadow-sm w-full sm:w-auto">
                        <Link href="/">
                            <ArrowLeft className="w-5 h-5 mr-2" /> Torna alla Home
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-xl h-14 px-8 text-base w-full sm:w-auto">
                        <Link href="/moduli">
                            Sfoglia i Moduli
                        </Link>
                    </Button>
                </div>
            </div>
        </Container>
    )
}
