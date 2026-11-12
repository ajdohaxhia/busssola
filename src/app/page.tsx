import Link from 'next/link'
import {
    ArrowRight, Banknote, Briefcase, Calculator, Calendar, FileText,
    Gift, GraduationCap, Heart, Home as HomeIcon, Newspaper, Scale,
    Search, Stethoscope, Users, Zap,
} from 'lucide-react'
import { GuideSearch } from '@/components/ui/GuideSearch'
import { Card } from '@/components/ui/Card'
import { siteStats } from '@/config/siteStats'
import { CIVIC_NEWS } from '@/data/news'
import { CIVIC_TEMPLATES } from '@/data/templates'
import { LEARNING_PATHS } from '@/data/paths'
import { getModuleById } from '@/data/modules/index'
import { SecurityAlertBanner } from '@/components/ui/SecurityAlertBanner'

function hrefIfModule(ids: string[], fallback: string) {
    for (const id of ids) {
        if (getModuleById(id)) return `/moduli/${id}`
    }
    return fallback
}

function hrefIfTemplate(slugs: string[], fallback: string) {
    for (const slug of slugs) {
        if (CIVIC_TEMPLATES.some((t) => t.slug === slug)) return `/modelli/${slug}`
    }
    return fallback
}

const STARTERS = [
    { label: 'Scadenze', href: '/scadenze', blurb: 'Calendario tasse, F24, IMU e scadenze 2026-2027.', entity: 'Fisco / INPS' },
    { label: 'Confronti', href: '/confronti', blurb: 'SPID vs CIE, truffe a confronto e tabelle decisionali.', entity: 'Busssola' },
    { label: 'IT-Wallet', href: '/modelli/it-wallet', blurb: 'Patente e tessera sanitaria su App IO con valore legale.', entity: 'Dipartimento Trasformazione Digitale' },
    { label: 'SPID', href: '/modelli/spid', blurb: 'Identità digitale per INPS, Ade e Comune.', entity: 'AgID' },
    { label: 'CIE', href: '/moduli/cie-richiesta', blurb: 'Richiesta, rinnovo e uso della carta elettronica.', entity: 'Comune' },
    { label: 'ISEE', href: '/modelli/isee-dsu-mini', blurb: 'DSU e attestazione per bonus e prestazioni.', entity: 'INPS' },
    { label: 'Dedicata a Te', href: '/modelli/carta-dedicata-a-te', blurb: 'Contributo 500 euro spesa per ISEE fino a 15.000 euro.', entity: 'MASAF / INPS' },
    { label: '730', href: '/modelli/730-precompilato', blurb: 'Precompilato 2026: consultare, correggere, inviare.', entity: 'Agenzia delle Entrate' },
    { label: 'NASpI', href: '/modelli/naspi', blurb: 'Disoccupazione: domanda entro 68 giorni.', entity: 'INPS' },
    { label: 'Residenza', href: '/moduli/cambio-residenza', blurb: 'Dichiarazione di cambio residenza, online o allo sportello.', entity: 'ANPR' },
    { label: 'Passaporto', href: '/modelli/passaporto', blurb: 'Prenotazione in questura e documenti da portare.', entity: 'Polizia di Stato' },
    { label: 'Bonus', href: '/modelli/bonus-sociali', blurb: 'Bonus sociali luce e gas e altre agevolazioni ISEE.', entity: 'ARERA / INPS' },
    { label: 'ADI', href: '/modelli/assegno-inclusione', blurb: 'Assegno di Inclusione: requisiti, PAD e rinnovo 18 mesi.', entity: 'INPS' },
    { label: 'Truffa', href: '/moduli/modulo-03-truffe-phishing', blurb: 'Phishing, SMS falsi, cosa fare dopo un clic.', entity: 'Polizia Postale' },
    { label: 'Scuola', href: '/moduli/modulo-08-scuola-famiglia', blurb: 'Iscrizioni, registro e tutele per famiglie.', entity: 'Ministero Istruzione' },
    { label: 'Pensione', href: hrefIfModule(['modulo-27-pensioni-previdenza'], '/moduli/categoria/lavoro'), blurb: 'Domanda INPS, estratto contributivo, vecchiaia e anticipata.', entity: 'INPS' },
    { label: 'P.IVA', href: hrefIfModule(['modulo-29-partita-iva-forfettario'], '/moduli/modulo-25-fisco-cittadini'), blurb: 'Apertura e adempimenti di base per chi lavora in proprio.', entity: 'Agenzia delle Entrate' },
    { label: 'Cartelle', href: hrefIfModule(['modulo-28-cartelle-riscossione'], hrefIfTemplate(['pagopa'], '/moduli/categoria/soldi')), blurb: 'Cartelle di pagamento, pagoPA e rateizzazione.', entity: 'Agenzia delle Entrate-Riscossione' },
    { label: '104', href: hrefIfModule(['modulo-31-disabilita-legge-104'], '/moduli/modulo-21-anziani-caregiver'), blurb: 'Invalidità civile, handicap e permessi per caregiver.', entity: 'INPS' },
    { label: 'AIRE', href: hrefIfModule(['modulo-34-aire-esteri'], '/moduli/categoria/documenti'), blurb: 'Iscrizione all’anagrafe degli italiani all’estero.', entity: 'Ministero degli Esteri' },
]

const FIRST_STEPS = [
    { n: '01', title: 'SPID e CIE', text: 'La chiave per i servizi pubblici. Confronta i provider e usa IT-Wallet.', href: '/modelli/spid' },
    { n: '02', title: 'IT-Wallet', text: 'Patente di guida e tessera sanitaria su App IO con valore legale.', href: '/modelli/it-wallet' },
    { n: '03', title: 'pagoPA e App IO', text: 'Pagamenti alla PA e avvisi sul canale ufficiale, non via SMS.', href: '/modelli/pagopa' },
    { n: '04', title: 'Kit documenti', text: 'Cosa tenere in ordine: identità, sanitario, fiscale, casa.', href: '/moduli/modulo-99-kit-checklist' },
]

const FEATURED_TEMPLATE_SLUGS = ['730-precompilato', 'it-wallet', 'isee-dsu-mini', 'carta-dedicata-a-te', 'naspi', 'spid', 'passaporto', 'cambio-residenza']

const HOME_PATH_IDS = ['inizia-da-qui', 'documenti-essenziali', 'lavoro-e-diritti', 'genitori-famiglie']

const AUDIENCES = [
    {
        title: 'Famiglie',
        icon: Heart,
        links: [
            { label: 'ISEE e DSU 2026', href: '/modelli/isee-dsu-mini' },
            { label: 'Carta Dedicata a Te', href: '/modelli/carta-dedicata-a-te' },
            { label: 'Assegno Unico', href: '/modelli/assegno-unico' },
            { label: 'Assegno Inclusione', href: '/modelli/assegno-inclusione' },
        ],
    },
    {
        title: 'Lavoratori',
        icon: Briefcase,
        links: [
            { label: '730 precompilato', href: '/modelli/730-precompilato' },
            { label: 'NASpI', href: '/modelli/naspi' },
            { label: 'Patente Cantieri', href: '/modelli/patente-crediti-cantieri' },
            { label: 'Busta paga', href: hrefIfModule(['busta-paga'], '/moduli/modulo-12-lavoro-diritti') },
        ],
    },
    {
        title: 'Studenti',
        icon: GraduationCap,
        links: [
            { label: 'ISEE universitario', href: '/moduli/modulo-22-universita-giovani' },
            { label: 'Borse e tasse', href: '/moduli/categoria/universita' },
            { label: 'Materiali per le scuole', href: '/scuole' },
        ],
    },
    {
        title: 'Caregiver',
        icon: Users,
        links: [
            { label: 'Legge 104 e invalidità', href: hrefIfModule(['modulo-31-disabilita-legge-104'], '/moduli/modulo-21-anziani-caregiver') },
            { label: 'Delega INPS', href: '/modelli/delega-inps' },
            { label: 'SPID per un familiare', href: '/moduli/modulo-21-anziani-caregiver' },
        ],
    },
]

const AREAS = [
    { title: 'Scadenze', icon: Calendar, href: '/scadenze' },
    { title: 'Confronti', icon: Scale, href: '/confronti' },
    { title: 'Documenti', icon: FileText, href: '/moduli/categoria/documenti' },
    { title: 'Fisco e 730', icon: Banknote, href: '/modelli/730-precompilato' },
    { title: 'Lavoro', icon: Briefcase, href: '/moduli/categoria/lavoro' },
    { title: 'Casa', icon: HomeIcon, href: '/moduli/categoria/casa' },
    { title: 'Sanità', icon: Stethoscope, href: '/moduli/categoria/sanita' },
    { title: 'Scuola', icon: GraduationCap, href: '/moduli/categoria/scuola' },
    { title: 'Caregiver', icon: Users, href: '/moduli/categoria/anziani' },
    { title: 'Modelli', icon: FileText, href: '/modelli' },
]

function SectionHead({
    title,
    href,
    linkLabel,
}: {
    title: string
    href?: string
    linkLabel?: string
}) {
    return (
        <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-display font-semibold">{title}</h2>
            {href && (
                <Link href={href} className="text-sm font-semibold text-primary inline-flex items-center gap-1 shrink-0">
                    {linkLabel ?? 'Vedi tutti'} <ArrowRight className="w-4 h-4" />
                </Link>
            )}
        </div>
    )
}

export default function Home() {
    const latestNews = [...CIVIC_NEWS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3)
    const featuredTemplates = FEATURED_TEMPLATE_SLUGS
        .map((slug) => CIVIC_TEMPLATES.find((t) => t.slug === slug))
        .filter((t): t is NonNullable<typeof t> => Boolean(t))
    const homePaths = HOME_PATH_IDS
        .map((id) => LEARNING_PATHS.find((p) => p.id === id))
        .filter((p): p is NonNullable<typeof p> => Boolean(p))

    return (
        <div className="space-y-20 pb-24 pt-8">
            <section className="space-y-8" aria-labelledby="home-azioni">
                <h2 id="home-azioni" className="sr-only">Da dove iniziare</h2>
                <div className="grid gap-4 md:grid-cols-3">
                    <Link href="/moduli/" className="block rounded-3xl border-2 border-primary bg-surface p-8 space-y-2 hover:bg-surface-hover">
                        <p className="text-2xl font-display font-semibold text-foreground">Voglio imparare</p>
                        <p className="text-secondary">Lezioni brevi con esempi concreti, per ogni età.</p>
                    </Link>
                    <Link href="/percorsi/proteggi-account" className="block rounded-3xl border-2 border-primary bg-surface p-8 space-y-2 hover:bg-surface-hover">
                        <p className="text-2xl font-display font-semibold text-foreground">Voglio proteggermi</p>
                        <p className="text-secondary">Account, dispositivi e privacy, passo per passo.</p>
                    </Link>
                    <Link href="/sos/" className="block rounded-3xl border-2 border-sos bg-sos-bg p-8 space-y-2 hover:bg-sos/10">
                        <p className="text-2xl font-display font-semibold text-foreground">Ho bisogno di aiuto</p>
                        <p className="text-secondary">Scegli la situazione: ti indichiamo a chi rivolgerti.</p>
                    </Link>
                </div>

                <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-widest text-muted">Situazioni concrete</p>
                    <div className="flex flex-wrap gap-2">
                        <Link href="/sos/percorso/" className="px-4 py-2 rounded-full border border-border bg-surface text-sm hover:border-primary">Qualcuno mi ricatta</Link>
                        <Link href="/sos/percorso/" className="px-4 py-2 rounded-full border border-border bg-surface text-sm hover:border-primary">Mi controllano il telefono</Link>
                        <Link href="/sos/#grooming-minori" className="px-4 py-2 rounded-full border border-border bg-surface text-sm hover:border-primary">Mio figlio viene preso di mira</Link>
                        <Link href="/scuole/" className="px-4 py-2 rounded-full border border-border bg-surface text-sm hover:border-primary">Scuole e LIM</Link>
                    </div>
                </div>
            </section>

            <section className="max-w-3xl mx-auto text-center space-y-6 px-2">
                <p className="text-sm font-medium text-primary">Guida civica · Italia 2026</p>
                <h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tight leading-[1.05]">
                    Dal dubbio alla pratica ufficiale.
                </h1>
                <p className="text-lg md:text-xl text-secondary leading-relaxed">
                    {siteStats.guidesCount} guide, {siteStats.templatesCount} kit documentali e {siteStats.newsCount} novità
                    verificate su INPS, Agenzia delle Entrate e Ministeri. Gratuito, senza login.
                </p>
                <GuideSearch />
                <p className="text-sm text-muted">
                    La ricerca copre guide, procedure, modelli e novità.{' '}
                    <Link href="/mappa-del-sito" className="font-semibold text-primary hover:underline">
                        Sfoglia la mappa completa del sito
                    </Link>
                    .
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                    {STARTERS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="px-4 py-2 rounded-full border border-border bg-surface text-sm hover:border-primary"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <p className="text-sm text-muted">
                    Hai un’urgenza digitale o sei in pericolo?{' '}
                    <Link href="/sos" className="font-semibold text-primary hover:underline">
                        Ho un&apos;urgenza
                    </Link>
                </p>
            </section>

            <SecurityAlertBanner variant="home" />

            <section className="space-y-6">
                <SectionHead title="Inizia da qui" href="/percorsi/inizia-da-qui" linkLabel="Percorso completo" />
                <p className="text-secondary max-w-2xl">
                    Il kit civico di partenza: identità digitale, documenti e pagamenti alla PA. Poi scegli la pratica che ti serve.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {FIRST_STEPS.map((step) => (
                        <Link key={step.n} href={step.href}>
                            <Card className="p-6 h-full space-y-3 hover:border-primary">
                                <p className="font-display text-2xl text-primary">{step.n}</p>
                                <h3 className="font-display font-semibold text-xl">{step.title}</h3>
                                <p className="text-sm text-secondary leading-relaxed">{step.text}</p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <SectionHead title="Simulatori e Strumenti Interattivi" href="/tool" linkLabel="Tutti gli strumenti" />
                <p className="text-secondary max-w-2xl">
                    Calcolatori pratici ed educativi eseguiti al 100% in locale nel tuo browser. Nessun dato personale viene salvato né inviato a server esterni.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link href="/tool/calcolo-stipendio-netto">
                        <Card className="p-6 h-full space-y-3 hover:border-primary">
                            <span className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg">
                                <Calculator className="w-5 h-5" />
                            </span>
                            <h3 className="font-display font-semibold text-xl">Stipendio Netto</h3>
                            <p className="text-sm text-secondary leading-relaxed">
                                Da RAL a netto mensile e annuo con le 3 aliquote IRPEF, contributi IVS e detrazioni TUIR.
                            </p>
                        </Card>
                    </Link>
                    <Link href="/tool/trova-bonus">
                        <Card className="p-6 h-full space-y-3 hover:border-primary">
                            <span className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg">
                                <Gift className="w-5 h-5" />
                            </span>
                            <h3 className="font-display font-semibold text-xl">Trova-Bonus</h3>
                            <p className="text-sm text-secondary leading-relaxed">
                                Questionario guidato in 5 passi per scoprire i sostegni pubblici compatibili con il tuo nucleo e ISEE.
                            </p>
                        </Card>
                    </Link>
                    <Link href="/tool/trova-procedura">
                        <Card className="p-6 h-full space-y-3 hover:border-primary">
                            <span className="w-10 h-10 flex items-center justify-center bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg">
                                <Search className="w-5 h-5" />
                            </span>
                            <h3 className="font-display font-semibold text-xl">Trova la Procedura</h3>
                            <p className="text-sm text-secondary leading-relaxed">
                                Carta d&apos;identità, passaporto, NASpI o dimissioni: primo passo, documenti e link ufficiale .gov.it.
                            </p>
                        </Card>
                    </Link>
                    <Link href="/tool/calcolo-consumo-elettrico">
                        <Card className="p-6 h-full space-y-3 hover:border-primary">
                            <span className="w-10 h-10 flex items-center justify-center bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-lg">
                                <Zap className="w-5 h-5" />
                            </span>
                            <h3 className="font-display font-semibold text-xl">Consumi Elettrici</h3>
                            <p className="text-sm text-secondary leading-relaxed">
                                Calcola quanto spendi in bolletta per condizionatore, lavatrice e boiler con tariffa ARERA e consigli ENEA.
                            </p>
                        </Card>
                    </Link>
                </div>
            </section>

            <section className="space-y-6">
                <SectionHead title="Procedure più cercate" href="/moduli" linkLabel="Tutte le guide" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {STARTERS.map((item) => (
                        <Link key={item.label} href={item.href}>
                            <Card className="p-5 h-full space-y-2 hover:border-primary">
                                <p className="text-xs font-medium text-primary">{item.entity}</p>
                                <h3 className="font-display font-semibold text-lg">{item.label}</h3>
                                <p className="text-sm text-secondary leading-relaxed">{item.blurb}</p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <SectionHead title="Modelli da stampare" href="/modelli" linkLabel="Tutti i kit" />
                <p className="text-secondary max-w-2xl">
                    Liste di documenti e passi. Non sono PDF ufficiali di INPS o dell’Agenzia delle Entrate: servono a preparare la pratica.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {featuredTemplates.map((t) => (
                        <Link key={t.slug} href={`/modelli/${t.slug}`}>
                            <Card className="p-6 h-full space-y-2 hover:border-primary">
                                <p className="text-xs font-medium text-primary">{t.shortTitle} · {t.officialEntity}</p>
                                <h3 className="font-display font-semibold text-lg">{t.title}</h3>
                                <p className="text-sm text-secondary line-clamp-2">{t.summary}</p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <SectionHead title="Cosa è cambiato nel 2026" href="/novita" linkLabel="Archivio" />
                <div className="grid md:grid-cols-3 gap-4">
                    {latestNews.map((n) => (
                        <Link key={n.slug} href={`/novita/${n.slug}`}>
                            <Card className="p-6 h-full flex flex-col justify-between space-y-3 hover:border-primary transition-all">
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between gap-2">
                                        <p className="text-xs text-muted flex items-center gap-1.5">
                                            <Newspaper className="w-3.5 h-3.5 text-primary" />{n.date}
                                        </p>
                                        {n.sources[0] && (
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                                {n.sources[0].organization}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="font-display font-semibold text-lg leading-snug">{n.title}</h3>
                                    <p className="text-sm text-secondary line-clamp-3">{n.summary}</p>
                                </div>
                                <div className="pt-3 border-t border-border/40 text-xs flex items-center justify-between text-primary font-medium">
                                    <span className="inline-flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        Fonte verificata: {n.sources[0]?.organization || 'Ufficiale'}
                                    </span>
                                    <span>↗</span>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
                <p className="text-sm text-muted">
                    Ogni notizia indica ente, fonte primaria e data di verifica.{' '}
                    <a href="/feed.xml" className="font-semibold text-primary hover:underline">
                        Segui il feed RSS delle novità
                    </a>
                    .
                </p>
            </section>

            <section className="space-y-6">
                <SectionHead title="Percorsi" href="/percorsi" linkLabel="Tutti i percorsi" />
                <div className="grid sm:grid-cols-2 gap-4">
                    {homePaths.map((path) => (
                        <Link key={path.id} href={`/percorsi/${path.id}`}>
                            <Card className="p-6 h-full space-y-2 hover:border-primary">
                                <p className="text-xs font-medium text-primary">{path.estimatedDuration} · {path.level}</p>
                                <h3 className="font-display font-semibold text-xl">{path.title}</h3>
                                <p className="text-sm text-secondary leading-relaxed">{path.description}</p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-semibold">Per chi sei</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {AUDIENCES.map((row) => (
                        <Card key={row.title} className="p-6 space-y-4">
                            <div className="flex items-center gap-2">
                                <row.icon className="w-5 h-5 text-primary" />
                                <h3 className="font-display font-semibold text-lg">{row.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {row.links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-sm text-secondary hover:text-primary inline-flex items-center gap-1">
                                            {link.label}
                                            <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-display font-semibold">Esplora per area</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {AREAS.map((area) => (
                        <Link key={area.title} href={area.href}>
                            <Card className="p-5 flex items-center gap-3 hover:border-primary">
                                <area.icon className="w-5 h-5 text-primary" />
                                <span className="font-medium text-sm">{area.title}</span>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            <section>
                <Link href="/scuole">
                    <Card className="p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary">
                        <div className="space-y-2 max-w-2xl">
                            <p className="text-sm font-medium text-primary">Scuole</p>
                            <h2 className="text-2xl font-display font-semibold">Lezioni pronte per la cittadinanza digitale</h2>
                            <p className="text-secondary">
                                Piani da 45–60 minuti su phishing, privacy e SPID/CIE, pensati per secondaria e laboratori.
                            </p>
                        </div>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary shrink-0">
                            Apri i materiali <ArrowRight className="w-4 h-4" />
                        </span>
                    </Card>
                </Link>
            </section>

            <section className="rounded-3xl border border-border bg-surface p-8 md:p-10 space-y-4">
                <h2 className="text-2xl font-display font-semibold">Una bussola, non uno sportello</h2>
                <p className="text-secondary max-w-3xl leading-relaxed">
                    Busssola è una risorsa civica open source: traduce procedure pubbliche in passi chiari, con fonti istituzionali.
                    Non è un sito della Pubblica Amministrazione e non sostituisce INPS, Agenzia delle Entrate o i Comuni.
                    Aggiornato al {siteStats.lastEditorialReview}.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    <Link href="/fonti" className="font-semibold text-primary hover:underline">Fonti</Link>
                    <Link href="/metodo-editoriale" className="font-semibold text-primary hover:underline">Metodo</Link>
                    <Link href="/cerca" className="font-semibold text-primary hover:underline">Cerca nel sito</Link>
                    <Link href="/mappa-del-sito" className="font-semibold text-primary hover:underline">Mappa del sito</Link>
                    <Link href="/about" className="font-semibold text-primary hover:underline">Cos&apos;è Busssola</Link>
                    <a href={siteStats.githubUrl} className="font-semibold text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        Codice su GitHub
                    </a>
                    <Link href="/sos" className="font-semibold text-primary hover:underline">Ho un&apos;urgenza</Link>
                </div>
            </section>
        </div>
    )
}
