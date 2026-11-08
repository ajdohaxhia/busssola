import Link from 'next/link'
import { Calendar, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react'
import { CIVIC_DEADLINES } from '@/data/deadlines'
import { DeadlinesClient } from './DeadlinesClient'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { absoluteUrl } from '@/lib/seo-core'

const FAQS = [
    {
        question: 'Cosa succede se pago il secondo acconto delle imposte in ritardo?',
        answer: 'Se il versamento viene effettuato con pochi giorni di ritardo, è possibile usufruire del "ravvedimento operoso sprint": la sanzione ordinaria del 30% si riduce allo 0,1% per ogni giorno di ritardo fino al 14° giorno, oltre agli interessi legali. Dal 15° al 30° giorno la sanzione passa all’1,5%. Se il ritardo supera l’anno, l’Agenzia delle Entrate notifica l’avviso bonario con sanzione piena.',
    },
    {
        question: 'Come verificare se devo pagare il saldo IMU entro il 16 dicembre?',
        answer: 'Il saldo IMU è dovuto dai proprietari di seconde case, aree fabbricabili e immobili commerciali, o dai possessori di prima casa classificata come di lusso (categorie catastali A/1, A/8, A/9). La prima casa non di lusso è totalmente esente. L’importo da versare a saldo tiene conto delle aliquote definitive deliberate dal Comune e pubblicate sul portale del Dipartimento delle Finanze entro il 28 ottobre.',
    },
    {
        question: 'Quando scade l’attestazione ISEE in corso e quando rinnovare la DSU?',
        answer: 'Tutte le attestazioni ISEE ordinarie e correnti scadono inderogabilmente il 31 dicembre di ogni anno solare. Dal 1° gennaio 2027 è possibile presentare la nuova Dichiarazione Sostitutiva Unica (DSU) per ottenere l’ISEE 2027, basato su redditi e patrimoni dell’anno 2025. Per non subire la sospensione o il ricalcolo al minimo dell’Assegno Unico da marzo 2027, la DSU va rinnovata entro la fine di febbraio 2027.',
    },
    {
        question: 'Chi può rateizzare il secondo acconto di novembre in 5 rate nel 2027?',
        answer: 'Possono usufruire della rateizzazione in 5 rate mensili di pari importo (da gennaio a maggio dell’anno successivo con interesse del 4% annuo) le persone fisiche titolari di partita IVA che nell’anno d’imposta precedente hanno dichiarato ricavi o compensi di ammontare non superiore a 170.000 euro.',
    },
    {
        question: 'Come posso consultare la mia situazione debitoria con il Fisco online?',
        answer: 'Accedendo con SPID o CIE all’area riservata del portale Agenzia delle Entrate-Riscossione, nella sezione "Situazione debitoria - Consulta e paga", è possibile verificare in tempo reale l’elenco di tutte le cartelle, i carichi pendenti, lo stato dei piani di rateizzazione e i bollettini della Rottamazione-quater.',
    },
]

export default function ScadenzePage() {
    const itemListSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Calendario Scadenze Civiche e Fiscali 2026-2027',
        description: 'Elenco cronologico delle scadenze e degli adempimenti ufficiali per cittadini italiani verificati con Agenzia delle Entrate, INPS e Ministeri.',
        url: absoluteUrl('/scadenze/'),
        numberOfItems: CIVIC_DEADLINES.length,
        itemListElement: CIVIC_DEADLINES.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.title,
            description: `${item.summary} Scadenza: ${item.date}. Ente: ${item.entity}.`,
            url: absoluteUrl(`/scadenze/#${item.id}`),
        })),
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
            <JsonLd data={itemListSchema} />
            <JsonLd data={faqSchema} />

            <PageHeader
                badge="Scadenzario Ufficiale"
                icon={Calendar}
                title="Scadenze Civiche e Fiscali 2026–2027"
                description="Calendario verificato di tasse, adempimenti tributari, rinnovi ISEE, bonus, scadenze scolastiche e contributi INPS. Tutti i dati sono estratti direttamente dai bollettini ufficiali di Agenzia delle Entrate, INPS, MEF e Ministero dell'Istruzione."
            />

            {/* Quick Navigation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                    href="/scadenze/2027"
                    className="p-5 rounded-xl bg-surface border border-border hover:border-primary transition-all group flex flex-col justify-between"
                >
                    <div className="space-y-2">
                        <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                            Anticipazioni 2027
                        </span>
                        <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                            Calendario Completo 2027
                        </h3>
                        <p className="text-xs text-secondary leading-relaxed">
                            Rinnovo ISEE, canone RAI, iscrizioni a scuola, Certificazione Unica e scadenze primaverili.
                        </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-4">
                        Apri scadenze 2027 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </Link>

                <Link
                    href="/confronti/spid-cie-it-wallet"
                    className="p-5 rounded-xl bg-surface border border-border hover:border-primary transition-all group flex flex-col justify-between"
                >
                    <div className="space-y-2">
                        <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            Guida Pratica
                        </span>
                        <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                            SPID vs CIE vs IT-Wallet
                        </h3>
                        <p className="text-xs text-secondary leading-relaxed">
                            Quale identità digitale usare per pagare F24, consultare INPS ed evitare blocchi di accesso.
                        </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-4">
                        Confronta le opzioni <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </Link>

                <Link
                    href="/moduli/modulo-25-fisco-cittadini"
                    className="p-5 rounded-xl bg-surface border border-border hover:border-primary transition-all group flex flex-col justify-between"
                >
                    <div className="space-y-2">
                        <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400">
                            Guida Operativa
                        </span>
                        <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                            Fisco per Cittadini
                        </h3>
                        <p className="text-xs text-secondary leading-relaxed">
                            Tutto su F24, acconti, ravvedimento operoso, aliquote e sanzioni spiegato in parole semplici.
                        </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-4">
                        Vai alla guida <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </Link>
            </div>

            {/* Interactive Client Deadlines component */}
            <DeadlinesClient initialDeadlines={CIVIC_DEADLINES} />

            {/* FAQ Section */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-display font-semibold text-foreground">
                        Domande frequenti sulle scadenze
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

            {/* Institutional Source Note */}
            <div className="p-4 rounded-xl border border-border/60 bg-surface-muted flex items-center justify-between flex-wrap gap-3 text-xs text-secondary">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Tutte le date e gli adempimenti sono periodicamente confrontati con la Gazzetta Ufficiale e i calendari di Agenzia delle Entrate e INPS.</span>
                </div>
                <Link href="/fonti" className="font-semibold text-primary hover:underline">
                    Consulta l&apos;archivio fonti primarie ↗
                </Link>
            </div>
        </div>
    )
}
