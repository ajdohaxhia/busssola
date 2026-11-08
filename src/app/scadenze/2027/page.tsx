import Link from 'next/link'
import { Calendar, ArrowLeft, ShieldCheck, HelpCircle } from 'lucide-react'
import { CIVIC_DEADLINES } from '@/data/deadlines'
import { DeadlinesClient } from '../DeadlinesClient'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildSeoMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/seo-core'

export const metadata = buildSeoMetadata({
    title: 'Scadenze 2027: Calendario Fiscale, ISEE, IMU e Adempimenti Civici',
    description: 'Guida completa al calendario scadenze 2027 in Italia: date e adempimenti per rinnovo ISEE 2027, rottamazione-quater, canone RAI, iscrizioni scolastiche, CU e acconto IMU.',
    path: '/scadenze/2027/',
    keywords: [
        'scadenze 2027',
        'calendario fiscale 2027',
        'rinnovo isee 2027 scadenza',
        'iscrizioni scuola 2027',
        'acconto imu 2027',
        'certificazione unica 2027 data',
        'rottamazione quater rate 2027',
    ],
})

const FAQS_2027 = [
    {
        question: 'Entro quando rinnovare l’ISEE 2027 per non perdere l’Assegno Unico?',
        answer: 'Per evitare la decurtazione dell’Assegno Unico e Universale all’importo minimo a partire dalla mensilità di marzo 2027, la Dichiarazione Sostitutiva Unica (DSU) per l’ISEE 2027 va presentata tra il 1° gennaio e l’ultimo giorno di febbraio 2027. Presentandola entro il 30 giugno 2027, gli importi arretrati spettanti verranno comunque liquidati con conguaglio.',
    },
    {
        question: 'Come fare domanda di esenzione per il Canone RAI 2027?',
        answer: 'I cittadini che non possiedono alcun apparecchio televisivo nella propria abitazione di residenza anagrafica devono inviare la dichiarazione sostitutiva di non detenzione telematicamente all’Agenzia delle Entrate entro il 31 gennaio 2027 per ottenere l’esenzione totale per l’intero anno. Se presentata dal 1° febbraio al 30 giugno, l’esonero varrà solo per il secondo semestre.',
    },
    {
        question: 'Quali sono le scadenze della Rottamazione-quater nel 2027?',
        answer: 'I contribuenti con piano di definizione agevolata attivo devono versare le rate del 2027 entro: 28 febbraio 2027 (settima rata), 31 maggio 2027 (ottava rata), 31 luglio 2027 (nona rata) e 30 novembre 2027 (decima rata). Si applica sempre la tolleranza di 5 giorni lavorativi.',
    },
    {
        question: 'Quando i datori di lavoro devono consegnare la Certificazione Unica 2027?',
        answer: 'I sostituti d’imposta (datori di lavoro ed enti pensionistici come l’INPS) devono rilasciare al lavoratore/pensionato e trasmettere telematicamente all’Agenzia delle Entrate la Certificazione Unica (CU 2027 relativa ai redditi 2026) entro il 16 marzo 2027.',
    },
]

export default function Scadenze2027Page() {
    const deadlines2027 = CIVIC_DEADLINES.filter((d) => d.date.startsWith('2027'))

    const itemListSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Calendario Ufficiale Scadenze 2027',
        description: 'Elenco completo delle scadenze civiche, scolastiche e fiscali per l’anno 2027 verificate con fonti primarie.',
        url: absoluteUrl('/scadenze/2027/'),
        numberOfItems: deadlines2027.length,
        itemListElement: deadlines2027.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.title,
            description: `${item.summary} Scadenza: ${item.date}.`,
            url: absoluteUrl(`/scadenze/#${item.id}`),
        })),
    }

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS_2027.map((faq) => ({
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

            <div className="flex items-center gap-2 text-xs text-muted">
                <Link href="/scadenze" className="inline-flex items-center gap-1 hover:text-foreground">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Tutte le scadenze
                </Link>
                <span>/</span>
                <span className="text-foreground font-medium">Focus 2027</span>
            </div>

            <PageHeader
                badge="Focus Anno 2027"
                icon={Calendar}
                title="Calendario Scadenze 2027: Tasse, ISEE e Adempimenti"
                description="La panoramica completa degli adempimenti previsti per il 2027: rinnovo ISEE, esenzione canone TV, iscrizioni a scuola, CU 2027, rate rottamazione-quater e acconto IMU."
            />

            {/* Quick Context Banner */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5 text-sm text-blue-950 dark:text-blue-100 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div>
                    <h3 className="font-semibold text-base mb-1">Pianifica per tempo il tuo 2027</h3>
                    <p className="text-xs text-blue-900/80 dark:text-blue-200/80 max-w-2xl leading-relaxed">
                        Gennaio e febbraio 2027 richiedono attenzione immediata per i documenti ISEE (saldi al 31/12/2025) e le domande per scuola ed esenzioni.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Link
                        href="/isee-2027"
                        className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-hover transition-colors whitespace-nowrap"
                    >
                        Guida ISEE 2027
                    </Link>
                    <Link
                        href="/bonus-2027"
                        className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-surface border border-border text-foreground hover:bg-surface-muted transition-colors whitespace-nowrap"
                    >
                        Tutti i Bonus 2027
                    </Link>
                </div>
            </div>

            {/* Client Component with 2027 pre-filtered */}
            <DeadlinesClient initialDeadlines={CIVIC_DEADLINES} defaultYearFilter="2027" />

            {/* FAQ 2027 */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-display font-semibold text-foreground">
                        Domande e risposte sugli adempimenti 2027
                    </h2>
                </div>
                <div className="grid gap-4">
                    {FAQS_2027.map((faq, idx) => (
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

            {/* Official verification */}
            <div className="p-4 rounded-xl border border-border/60 bg-surface-muted flex items-center justify-between flex-wrap gap-3 text-xs text-secondary">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Dati verificati su canali ufficiali: MEF, Agenzia delle Entrate, INPS e MIM.</span>
                </div>
                <Link href="/scadenze" className="font-semibold text-primary hover:underline">
                    Torna al calendario generale ↗
                </Link>
            </div>
        </div>
    )
}
