import Link from 'next/link'
import { Compass, Github, Mail } from 'lucide-react'
import { Container } from './Container'
import { siteStats } from '@/config/siteStats'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-foreground text-background py-16 print:hidden">
            <Container size="lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="w-9 h-9 flex items-center justify-center bg-primary text-white rounded-lg">
                                <Compass className="w-5 h-5" />
                            </span>
                            <span className="font-display text-xl font-semibold">Busssola</span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            {siteStats.guidesCount} guide, {siteStats.templatesCount} modelli e {siteStats.newsCount} novità verificate. Se sei in pericolo, chiama il 112.
                        </p>
                        <div className="flex gap-3">
                            <a href={siteStats.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full border border-white/10 hover:bg-white/10">
                                <Github className="w-4 h-4" />
                            </a>
                            <a href={`mailto:${siteStats.contactEmail}`} aria-label="Email" className="p-2 rounded-full border border-white/10 hover:bg-white/10">
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-primary">Strumenti</h4>
                        <nav className="grid gap-2 text-sm text-white/70">
                            <Link href="/moduli">Guide</Link>
                            <Link href="/modelli">Modelli</Link>
                            <Link href="/novita">Novità</Link>
                            <Link href="/percorsi">Percorsi</Link>
                            <Link href="/tips">Trucchi</Link>
                            <Link href="/sos">SOS</Link>
                            <a href="tel:112">Chiama 112</a>
                        </nav>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-primary">Progetto</h4>
                        <nav className="grid gap-2 text-sm text-white/70">
                            <Link href="/about">Cos&apos;è Busssola</Link>
                            <Link href="/fonti">Fonti</Link>
                            <Link href="/metodo-editoriale">Metodo</Link>
                            <Link href="/scuole">Scuole</Link>
                            <Link href="/trasparenza">Trasparenza</Link>
                        </nav>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-primary">Supporto</h4>
                        <nav className="grid gap-2 text-sm text-white/70">
                            <Link href="/contact">Contatti</Link>
                            <Link href="/faq">FAQ</Link>
                            <Link href="/privacy">Privacy</Link>
                            <Link href="/accessibilita">Accessibilità</Link>
                            <Link href="/termini">Termini</Link>
                        </nav>
                    </div>
                </div>
                <p className="mt-12 pt-6 border-t border-white/10 text-xs text-white/40">
                    © {currentYear} Busssola · Non è un sito della PA · Non è un servizio di emergenza · {siteStats.officialDomain}
                </p>
            </Container>
        </footer>
    )
}
