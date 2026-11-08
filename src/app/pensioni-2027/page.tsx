import Link from 'next/link'
import {
    Briefcase,
    Clock,
    HelpCircle,
    ShieldCheck,
    AlertCircle,
    UserCheck,
} from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildSeoMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/seo-core'

export const metadata = buildSeoMetadata({
    title: 'Guida Pensioni 2027: Requisiti di Uscita, Canali e Rivalutazione',
    description: 'Come andare in pensione nel 2027: requisiti per vecchiaia (67 anni), anticipata ordinaria, Quota 103, Opzione Donna, APE Sociale e aumento per perequazione.',
    path: '/pensioni-2027/',
    keywords: [
        'pensioni 2027',
        'requisiti pensione 2027',
        'pensione vecchiaia 67 anni',
        'pensione anticipata 2027',
        'quota 103 requisiti 2027',
        'opzione donna 2027',
        'ape sociale requisiti',
        'estratto conto contributivo inps',
    ],
})

const RETIREMENT_CHANNELS = [
    {
        name: 'Pensione di Vecchiaia Ordinaria',
        age: '67 anni di età',
        contributions: 'Almeno 20 anni di contribuzione (1.040 settimane)',
        window: 'Decorrenza dal primo giorno del mese successivo alla maturazione dei requisiti',
        summary: 'Il canale standard di pensionamento valido per tutti i lavoratori dipendenti, autonomi e parasubordinati. Per i lavoratori con primo accredito contributivo successivo al 31/12/1995 (contributivi puri), non è più richiesta la soglia minima di importo dell’assegno.',
    },
    {
        name: 'Pensione Anticipata Ordinaria',
        age: 'Nessun limite di età anagrafica',
        contributions: '42 anni e 10 mesi per gli uomini (2.227 settimane); 41 anni e 10 mesi per le donne (2.175 settimane)',
        window: 'Finestra mobile di decorrenza pari a 3 mesi dalla maturazione del requisito',
        summary: 'Consente il collocamento a riposo indipendentemente dall’età. Fino al 31 dicembre 2026 i requisiti contributivi sono rimasti bloccati rispetto all’adeguamento alla speranza di vita.',
    },
    {
        name: 'Flessibilità: Canale Quota 103',
        age: 'Almeno 62 anni di età',
        contributions: 'Almeno 41 anni di contribuzione accreditata',
        window: 'Finestra di decorrenza di 7 mesi per il settore privato, 9 mesi per il settore pubblico',
        summary: 'Pensione anticipata flessibile con assegno ricalcolato integralmente con le regole del sistema contributivo e un tetto massimo mensile erogabile fino al compimento dei 67 anni di età.',
    },
    {
        name: 'Opzione Donna',
        age: '61 anni (60 con 1 figlio, 59 con 2 o più figli)',
        contributions: 'Almeno 35 anni di contributi maturati al 31/12 dell’anno precedente',
        window: 'Finestra di 12 mesi per lavoratrici dipendenti, 18 mesi per autonome',
        summary: 'Riservata a specifiche categorie: lavoratrici che assistono familiari con handicap grave (caregiver), lavoratrici con invalidità civile pari o superiore al 74%, o dipendenti da imprese per le quali è attivo un tavolo di crisi aziendale.',
    },
    {
        name: 'APE Sociale (Indennità Ponte)',
        age: 'Almeno 63 anni e 5 mesi',
        contributions: 'Da 30 a 36 anni a seconda della categoria tutelata',
        window: 'Erogata fino al raggiungimento dell’età per la pensione di vecchiaia',
        summary: 'Indennità economica a carico dello Stato per lavoratori in condizioni di difficoltà: disoccupati di lungo corso, caregiver, invalidi civili al 74% o addetti a mansioni particolarmente gravose e faticose.',
    },
]

const FAQS = [
    {
        question: 'Come posso controllare quanti contributi ho versato fino ad oggi?',
        answer: 'Accedendo al portale MyINPS con SPID o CIE puoi consultare l’"Estratto Conto Contributivo" (ordinario o certificativo EcoCert). Il documento elenca anno per anno e datore per datore tutti i contributi versati (obbligatori da lavoro, figurativi per maternità, malattia o servizio militare, da riscatto e volontari). In caso di buchi contributivi, è possibile inviare telematicamente una richiesta di Segnalazione Contributiva (RVPA).',
    },
    {
        question: 'Come funziona la rivalutazione (perequazione) delle pensioni all’inflazione?',
        answer: 'Ogni anno il Ministero dell’Economia e delle Finanze emana un decreto che adegua gli importi delle pensioni alla variazione dell’indice ISTAT dei prezzi al consumo per famiglie di operai e impiegati (FOI). La rivalutazione si applica al 100% per i trattamenti fino a 4 volte il trattamento minimo INPS, per poi applicarsi a percentuali decrescenti per gli importi superiori.',
    },
    {
        question: 'Posso cumulare gratuitamente i contributi versati in casse diverse (es. INPS e Gestione Separata)?',
        answer: 'Sì. La legge consente il "Cumulo Gratuito" dei periodi assicurativi non coincidenti maturati presso diverse gestioni previdenziali pubbliche (Fondo Pensioni Lavoratori Dipendenti, Gestione Separata, artigiani, commercianti ed ex INPDAP), consentendo di sommare i periodi per raggiungere l’anzianità contributiva necessaria senza dover pagare onerosi riscatti.',
    },
    {
        question: 'Che differenza c’è tra riscatto della laurea ordinario e riscatto agevolato?',
        answer: 'Il riscatto agevolato della laurea è applicabile esclusivamente per gli anni di studio che ricadono dal 1° gennaio 1996 in poi (nel sistema contributivo) o se si opta per la liquidazione della pensione interamente contributiva. Il costo è forfettario e si basa sul minimale contributivo della Gestione Artigiani e Commercianti moltiplicato per l’aliquota del 33%, con onere interamente deducibile dal reddito imponibile IRPEF.',
    },
]

export default function Pensioni2027Page() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Guida Pensioni 2027: Requisiti di Uscita, Canali e Rivalutazione',
        description: 'Tutti i canali di pensionamento in Italia per il 2027 spiegati senza tecnicismi: età, anni di contribuzione, finestre mobili e calcolo.',
        url: absoluteUrl('/pensioni-2027/'),
        author: {
            '@type': 'Person',
            name: 'Adelajdo Haxhiaj',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Busssola',
        },
        datePublished: '2026-11-03',
        dateModified: '2026-11-08',
    }

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    }

    return (
        <div className="space-y-10 py-8">
            <JsonLd data={articleSchema} />
            <JsonLd data={faqSchema} />

            <PageHeader
                badge="Guida Previdenziale 2027"
                icon={Briefcase}
                title="Pensione 2027: Requisiti, Canali di Uscita e Rivalutazione"
                description="La bussola chiara per capire quando e come andare in pensione nel 2027. Requisiti anagrafici e contributivi per vecchiaia ordinaria, anticipata, Quota 103, Opzione Donna, APE Sociale e come verificare i contributi versati su MyINPS."
            />

            {/* Crucial Disclaimer */}
            <div className="bg-amber-500/10 border border-amber-500/25 rounded-xl p-5 text-amber-950 dark:text-amber-100 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs md:text-sm">
                    <strong className="font-semibold text-amber-900 dark:text-amber-200">
                        Avvertenza di orientamento previdenziale:
                    </strong>
                    <p className="text-amber-900/80 dark:text-amber-200/90 leading-relaxed">
                        I contenuti di Busssola hanno finalità puramente informative e divulgative. La posizione previdenziale di ciascun lavoratore dipende da decorrenze specifiche, maggiorazioni e casse di appartenenza. Prima di compiere scelte irrevocabili come le dimissioni volontarie, richiedi sempre l’estratto conto certificativo (EcoCert) all’INPS o consulta un patronato riconosciuto.
                    </p>
                </div>
            </div>

            {/* Main Retirement Channels Table / Cards */}
            <section className="space-y-6">
                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                    I principali canali di pensionamento nel 2027
                </h2>

                <div className="grid gap-6">
                    {RETIREMENT_CHANNELS.map((ch, idx) => (
                        <article
                            key={idx}
                            className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4 hover:border-primary/50 transition-all shadow-sm"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-3">
                                <h3 className="font-display font-semibold text-xl md:text-2xl text-foreground">
                                    {ch.name}
                                </h3>
                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-surface-muted text-secondary border border-border">
                                    <Clock className="w-3.5 h-3.5 text-primary" />
                                    {ch.window}
                                </span>
                            </div>

                            <p className="text-sm text-secondary leading-relaxed">
                                {ch.summary}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg bg-surface-muted border border-border/40 text-xs">
                                <div>
                                    <span className="font-semibold text-foreground block mb-0.5">
                                        Requisito di Età Anagrafica:
                                    </span>
                                    <p className="text-secondary font-medium">{ch.age}</p>
                                </div>
                                <div>
                                    <span className="font-semibold text-foreground block mb-0.5">
                                        Requisito di Contribuzione Minima:
                                    </span>
                                    <p className="text-secondary font-medium">{ch.contributions}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* How to check MyINPS step by step */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-primary" />
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                        Come verificare i tuoi contributi in 3 passi
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-2">
                        <strong className="text-foreground font-semibold flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">1</span>
                            Accedi al Fascicolo Previdenziale
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            Entra su inps.it con SPID o CIE e cerca &quot;Fascicolo Previdenziale del Cittadino&quot;. Troverai la cronistoria completa di tutti i versamenti.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-2">
                        <strong className="text-foreground font-semibold flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">2</span>
                            Verifica i periodi non lavorati
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            Controlla se risultano accreditate le settimane di servizio militare, maternità obbligatoria o cassa integrazione, che possono essere accreditate gratuitamente.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-2">
                        <strong className="text-foreground font-semibold flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">3</span>
                            Richiedi l&apos;EcoCert prima di decidere
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            A ridosso della pensione, inoltra online la richiesta di &quot;Estratto Conto Certificativo&quot; (EcoCert): è il solo documento vincolante con valore legale emesso dall&apos;INPS.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-display font-semibold text-foreground">
                        Domande Frequenti sulle Pensioni
                    </h2>
                </div>
                <div className="grid gap-4">
                    {FAQS.map((faq, idx) => (
                        <div key={idx} className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-2">
                            <h3 className="font-semibold text-sm md:text-base text-foreground">
                                {faq.question}
                            </h3>
                            <p className="text-xs md:text-sm text-secondary leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Related Modules and Official Portals */}
            <div className="p-4 rounded-xl border border-border/60 bg-surface-muted flex items-center justify-between flex-wrap gap-3 text-xs text-secondary">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Dati verificati con le circolari attuative INPS e la Legge di Bilancio.</span>
                </div>
                <div className="flex items-center gap-3">
                    <Link href="/moduli/modulo-27-pensioni-previdenza" className="font-semibold text-primary hover:underline">
                        Guida completa al modulo previdenza ↗
                    </Link>
                    <a
                        href="https://www.inps.it"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-foreground"
                    >
                        Portale INPS ↗
                    </a>
                </div>
            </div>
        </div>
    )
}
