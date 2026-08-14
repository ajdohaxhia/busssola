import Link from 'next/link'
import {
    ArrowRight, Banknote, Briefcase, FileText, GraduationCap, Home as HomeIcon,
    Newspaper, Phone, ShieldAlert, Stethoscope, UserCheck,
} from 'lucide-react'
import { GuideSearch } from '@/components/ui/GuideSearch'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ImminentDangerBanner } from '@/components/sos/ImminentDangerBanner'
import { siteStats } from '@/config/siteStats'
import { CIVIC_NEWS } from '@/data/news'

export default function Home() {
    const latestNews = [...CIVIC_NEWS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3)

    return (
        <div className="space-y-24 pb-24 pt-8">
            <section className="max-w-3xl mx-auto text-center space-y-6 px-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Bussola civica · 2026</p>
                <h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tight leading-[1.05]">
                    Dal dubbio alla pratica ufficiale.
                </h1>
                <p className="text-lg md:text-xl text-secondary leading-relaxed">
                    {siteStats.guidesCount} guide, {siteStats.templatesCount} kit documentali e novità verificate su INPS, Agenzia delle Entrate e Ministeri. Gratuito, senza login.
                </p>
                <GuideSearch />
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                    {[
                        { label: '730/2026', href: '/modelli/730-precompilato' },
                        { label: 'ISEE', href: '/modelli/isee-dsu-mini' },
                        { label: 'NASpI', href: '/modelli/naspi' },
                        { label: 'SPID', href: '/moduli/modulo-09-documenti-identita' },
                        { label: 'Novità 2026', href: '/novita' },
                    ].map((item) => (
                        <Link key={item.label} href={item.href} className="px-4 py-2 rounded-full border border-border bg-surface text-sm hover:border-primary">
                            {item.label}
                        </Link>
                    ))}
                </div>
            </section>

            <ImminentDangerBanner />

            <section className="space-y-6">
                <div className="flex items-end justify-between gap-4">
                    <h2 className="text-3xl font-display font-semibold">Novità verificate</h2>
                    <Link href="/novita" className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                        Archivio <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    {latestNews.map((n) => (
                        <Link key={n.slug} href={`/novita/${n.slug}`}>
                            <Card className="p-6 h-full space-y-2">
                                <p className="text-xs text-muted flex items-center gap-2"><Newspaper className="w-3 h-3" />{n.date}</p>
                                <h3 className="font-display font-semibold text-lg leading-snug">{n.title}</h3>
                                <p className="text-sm text-secondary line-clamp-3">{n.summary}</p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-semibold">Esplora per area</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                        { title: 'Documenti', icon: FileText, href: '/moduli/categoria/documenti' },
                        { title: 'Fisco e 730', icon: Banknote, href: '/modelli/730-precompilato' },
                        { title: 'Lavoro', icon: Briefcase, href: '/moduli/categoria/lavoro' },
                        { title: 'Casa', icon: HomeIcon, href: '/moduli/categoria/casa' },
                        { title: 'Sanità', icon: Stethoscope, href: '/moduli/categoria/sanita' },
                        { title: 'Scuola', icon: GraduationCap, href: '/moduli/categoria/universita' },
                        { title: 'Caregiver', icon: UserCheck, href: '/moduli/categoria/anziani' },
                        { title: 'Modelli', icon: FileText, href: '/modelli' },
                    ].map((area) => (
                        <Link key={area.title} href={area.href}>
                            <Card className="p-5 flex items-center gap-3">
                                <area.icon className="w-5 h-5 text-primary" />
                                <span className="font-medium text-sm">{area.title}</span>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="rounded-3xl border border-sos/30 bg-sos-bg p-8 md:p-10 space-y-6">
                <div className="flex items-start gap-3">
                    <ShieldAlert className="w-6 h-6 text-sos" />
                    <div>
                        <h2 className="text-2xl font-display font-semibold">Urgenza digitale, ma sei al sicuro?</h2>
                        <p className="text-secondary mt-2">Se c&apos;è violenza o un reato in corso chiama il 112. Solo dopo, i protocolli per account, truffe, stalking.</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3">
                    <Button asChild className="bg-sos hover:bg-sos-hover">
                        <a href="tel:112"><Phone className="w-4 h-4 mr-2" /> Chiama 112</a>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/sos">Apri i protocolli SOS</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
