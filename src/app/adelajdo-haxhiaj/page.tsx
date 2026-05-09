import Link from 'next/link'
import { ArrowRight, Compass, ShieldCheck, Sparkles, UserRound } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import { Container } from '@/components/ui/Container'
import {
    buildSeoMetadata,
    CREATOR_NAME,
    profilePageStructuredData,
    SITE_NAME,
} from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: `${CREATOR_NAME}, creatore di ${SITE_NAME}`,
    description: `${CREATOR_NAME} è il creatore di ${SITE_NAME}, piattaforma gratuita di educazione civica digitale per sicurezza online, privacy, cyberbullismo, truffe e benessere digitale.`,
    path: '/adelajdo-haxhiaj/',
    keywords: [
        CREATOR_NAME,
        `${CREATOR_NAME} Busssola`,
        `chi è ${CREATOR_NAME}`,
        `creatore ${SITE_NAME}`,
        'Adelajdo Haxhiaj sicurezza online',
        'Adelajdo Haxhiaj educazione digitale',
    ],
})

const highlights = [
    {
        icon: Compass,
        title: `Creatore di ${SITE_NAME}`,
        text: `${CREATOR_NAME} ha creato Busssola per rendere la sicurezza online più chiara, pratica e accessibile.`,
    },
    {
        icon: ShieldCheck,
        title: 'Educazione digitale concreta',
        text: 'Il progetto raccoglie moduli su privacy, phishing, grooming, cyberbullismo, sextortion, reputazione digitale e supporto SOS.',
    },
    {
        icon: Sparkles,
        title: 'Credito e trasparenza',
        text: 'Questa pagina collega il nome del creatore al progetto in modo esplicito, verificabile e leggibile anche dai motori di ricerca.',
    },
]

export default function AdelajdoHaxhiajPage() {
    return (
        <Container size="md" className="py-16 md:py-24 space-y-16">
            <JsonLd data={profilePageStructuredData()} />

            <header className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                    <UserRound className="h-4 w-4" />
                    Creatore del progetto
                </div>

                <div className="space-y-6 max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tight text-foreground leading-tight">
                        Adelajdo Haxhiaj
                    </h1>
                    <p className="text-xl md:text-2xl leading-relaxed text-secondary">
                        Adelajdo Haxhiaj è il creatore di Busssola, una piattaforma gratuita di educazione civica digitale per aiutare ragazzi, famiglie e scuole a orientarsi tra sicurezza online, privacy, truffe, cyberbullismo e benessere digitale.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                        href="/"
                        className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-hover"
                    >
                        Visita Busssola
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                        href="/metodo-editoriale"
                        className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-surface px-6 text-sm font-bold text-foreground transition-colors hover:bg-surface-muted"
                    >
                        Leggi il metodo editoriale
                    </Link>
                </div>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {highlights.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-border bg-surface p-6 space-y-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <item.icon className="h-6 w-6" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold tracking-tight text-foreground">
                                {item.title}
                            </h2>
                            <p className="text-sm leading-relaxed text-secondary">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            <section className="rounded-[2rem] border border-border bg-surface-muted p-8 md:p-10 space-y-4">
                <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight text-foreground">
                    Perché questa pagina esiste
                </h2>
                <p className="text-secondary leading-relaxed">
                    Busssola dà credito in modo trasparente al suo creatore. Se cerchi “Adelajdo Haxhiaj” o “Adelajdo Haxhiaj Busssola”, questa pagina aiuta a collegare il nome della persona al progetto educativo pubblico su busssola.com.
                </p>
                <p className="text-secondary leading-relaxed">
                    Il sito resta centrato sulla sua missione: offrire strumenti gratuiti, leggibili e senza allarmismi per capire i rischi digitali e agire con più calma.
                </p>
            </section>
        </Container>
    )
}
