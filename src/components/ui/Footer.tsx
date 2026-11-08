import Link from 'next/link'
import { Compass, Github, Mail } from 'lucide-react'
import { Container } from './Container'
import { siteStats } from '@/config/siteStats'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-foreground text-background py-16 print:hidden border-t-2 border-accent">
            <Container size="lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    <div className="space-y-4 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2" aria-label="Busssola, pagina iniziale">
                            <span className="w-9 h-9 flex items-center justify-center bg-background text-foreground rounded-md">
                                <Compass className="w-5 h-5" aria-hidden="true" />
                            </span>
                            <span className="font-display text-xl font-semibold">Busssola</span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            {siteStats.guidesCount} guide, {siteStats.templatesCount} modelli e {siteStats.newsCount} novità verificate. Se sei in pericolo, chiama il 112.
                        </p>
                        <div className="flex gap-3">
                            <a href={siteStats.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-md border border-white/10 hover:bg-white/10">
                                <Github className="w-4 h-4" />
                            </a>
                            <a href={`mailto:${siteStats.contactEmail}`} aria-label="Email" className="p-2 rounded-md border border-white/10 hover:bg-white/10">
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-accent-light">Strumenti</h4>
                        <nav className="grid gap-2 text-sm text-white/70">
                            <Link href="/moduli">Catalogo Guide</Link>
                            <Link href="/modelli">Kit e Modelli</Link>
                            <Link href="/novita">Novità e Scadenze</Link>
                            <Link href="/percorsi">Percorsi Guidati</Link>
                            <Link href="/tips">Life Hacks Civici</Link>
                            <Link href="/checklist">Checklist</Link>
                            <Link href="/sos">Centro SOS</Link>
                            <a href="tel:112">Chiama 112</a>
                        </nav>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-accent-light">Aree Tematiche</h4>
                        <nav className="grid gap-2 text-sm text-white/70">
                            <Link href="/moduli/categoria/documenti">SPID, CIE e Documenti</Link>
                            <Link href="/moduli/categoria/lavoro">Lavoro, NASpI e Pensione</Link>
                            <Link href="/moduli/categoria/soldi">Fisco, 730 e Cartelle</Link>
                            <Link href="/moduli/categoria/casa">Casa, Utenze e Residenza</Link>
                            <Link href="/moduli/categoria/bonus">ISEE, Bonus e Sostegni</Link>
                            <Link href="/moduli/categoria/truffe">Truffe e Phishing</Link>
                            <Link href="/glossario">Glossario Civico</Link>
                        </nav>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-accent-light">Progetto</h4>
                        <nav className="grid gap-2 text-sm text-white/70">
                            <Link href="/about">Cos&apos;è Busssola</Link>
                            <Link href="/fonti">Fonti Istituzionali</Link>
                            <Link href="/metodo-editoriale">Metodo Editoriale</Link>
                            <Link href="/scuole">Per Docenti e Scuole</Link>
                            <Link href="/trasparenza">Trasparenza</Link>
                        </nav>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-accent-light">Supporto</h4>
                        <nav className="grid gap-2 text-sm text-white/70">
                            <Link href="/contact">Contatti</Link>
                            <Link href="/faq">Domande Frequenti (FAQ)</Link>
                            <Link href="/privacy">Informativa Privacy</Link>
                            <Link href="/accessibilita">Dichiarazione Accessibilità</Link>
                            <Link href="/termini">Termini di Utilizzo</Link>
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
