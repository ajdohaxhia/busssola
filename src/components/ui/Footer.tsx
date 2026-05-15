import React from 'react'
import Link from 'next/link'
import { Compass, Github, Mail, ShieldCheck, Heart, AlertTriangle } from 'lucide-react'
import { Container } from './Container'
import { siteStats } from '@/data/siteStats'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-foreground text-background border-t border-white/5 py-16 md:py-24 overflow-hidden relative print:hidden">
            <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
                <Compass size={300} />
            </div>
            
            <Container size="lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                    {/* Brand Section */}
                    <div className="space-y-6 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-xl shadow-lg">
                                <Compass className="w-6 h-6" strokeWidth={2.5} />
                            </div>
                            <span className="text-2xl font-display font-black tracking-tighter uppercase text-white">Busssola</span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs font-medium">
                            La tua guida civica gratuita, open-source e privacy-friendly per orientarsi tra diritti e doveri in Italia.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a href="https://github.com/ajdohaxhia/busssola" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
                                <Github className="w-5 h-5 text-white/70" />
                            </a>
                            <a href="mailto:ciao@busssola.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
                                <Mail className="w-5 h-5 text-white/70" />
                            </a>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-widest text-primary">Risorse</h4>
                        <nav className="grid gap-4 text-white">
                            <Link href="/moduli" className="text-sm font-bold text-white/60 hover:text-white transition-colors">Catalogo Guide</Link>
                            <Link href="/percorsi" className="text-sm font-bold text-white/60 hover:text-white transition-colors">Percorsi Passo-Passo</Link>
                            <Link href="/tips" className="text-sm font-bold text-white/60 hover:text-white transition-colors">Life Hacks Civici</Link>
                            <Link href="/checklist" className="text-sm font-bold text-white/60 hover:text-white transition-colors">Checklist Operative</Link>
                            <Link href="/sos" className="text-sm font-bold text-white/60 hover:text-sos transition-colors">Emergenze SOS</Link>
                        </nav>
                    </div>

                    {/* Progetto */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-widest text-primary">Il Progetto</h4>
                        <nav className="grid gap-4 text-white">
                            <Link href="/about" className="text-sm font-bold text-white/60 hover:text-white transition-colors">Cos'è Busssola</Link>
                            <Link href="/scuole" className="text-sm font-bold text-white/60 hover:text-white transition-colors">Hub Scuole</Link>
                            <Link href="/fonti" className="text-sm font-bold text-white/60 hover:text-white transition-colors">Archivio Fonti</Link>
                            <Link href="/metodo-editoriale" className="text-sm font-bold text-white/60 hover:text-white transition-colors">Metodo Editoriale</Link>
                            <Link href="/trasparenza" className="text-sm font-bold text-white/60 hover:text-white transition-colors">Trasparenza</Link>
                        </nav>
                    </div>

                    {/* Support */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-widest text-primary">Supporto</h4>
                        <nav className="grid gap-4 text-white">
                            <Link href="/contact" className="text-sm font-bold text-white/60 hover:text-white transition-colors">Contattaci</Link>
                            <Link href="/faq" className="text-sm font-bold text-white/60 hover:text-white transition-colors">Domande Frequenti</Link>
                            <Link href="/privacy" className="text-sm font-bold text-white/60 hover:text-white transition-colors">Privacy & Cookie</Link>
                            <Link href="/accessibilita" className="text-sm font-bold text-white/60 hover:text-white transition-colors">Accessibilità</Link>
                            <Link href="/termini" className="text-sm font-bold text-white/60 hover:text-white transition-colors">Termini d'uso</Link>
                        </nav>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-white">
                    <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                        <span>© {currentYear} Busssola</span>
                        <span className="hidden sm:inline">•</span>
                        <span>Made with <Heart className="w-3 h-3 inline mx-1 fill-current text-primary" /> in Italy</span>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                        <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3" /> Zero Tracciamento</span>
                        <span className="flex items-center gap-1.5"><AlertTriangle className="w-3 h-3" /> Scopo Informativo</span>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
