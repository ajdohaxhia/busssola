import Link from 'next/link'
import { Calculator, ArrowLeft, ExternalLink } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildSeoMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/seo-core'
import { TredicesimaClient } from './TredicesimaClient'

export const metadata = buildSeoMetadata({
    title: 'Calcolo Tredicesima Netta: Simulatore Busta Paga di Natale e Ratei',
    description: 'Calcola subito online la tredicesima netta dalla retribuzione lorda o dalla RAL. Formula ufficiale con contributi IVS, ritenute IRPEF, ratei maturati e Bonus Natale.',
    path: '/tool/calcolo-tredicesima/',
    keywords: [
        'calcolo tredicesima netta',
        'calcolo tredicesima',
        'quanto prendo di tredicesima',
        'quando arriva la tredicesima',
        'tredicesima lordo netto',
        'formula calcolo tredicesima',
        'ratei tredicesima mesi lavorati',
        'tredicesima bonus natale 100 euro',
        'tredicesima dipendenti pubblici noipa',
        'tredicesima ccnl commercio metalmeccanici',
    ],
})

export default function CalcoloTredicesimaPage() {
    const appSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Calcolatore Tredicesima Netta Busssola',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'All',
        url: absoluteUrl('/tool/calcolo-tredicesima/'),
        description: 'Simulatore civico per il calcolo trasparente della tredicesima mensilità lorda e netta, con ratei di maturazione mensili e ripartizione delle ritenute previdenziali e fiscali.',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'EUR',
        },
    }

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Come si calcola la tredicesima mensilità?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'La tredicesima lorda si calcola moltiplicando la retribuzione lorda mensile per il numero di mesi lavorati nell’anno solare (contando come mese intero ogni frazione pari o superiore a 15 giorni) e dividendo il risultato per 12. Dalla cifra lorda si sottraggono i contributi previdenziali IVS a carico del lavoratore (9,19% o 5,84% per apprendisti) e le ritenute IRPEF con l’aliquota marginale di riferimento.',
                },
            },
            {
                '@type': 'Question',
                name: 'Perché la tredicesima netta è inferiore a una normale busta paga?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Perché per legge sulla tredicesima mensilità non spettano le detrazioni da lavoro dipendente (art. 13 TUIR) né le detrazioni per carichi di famiglia (art. 12 TUIR). Queste detrazioni fiscali annuali vengono infatti già interamente suddivise ed erogate sulle 12 buste paga ordinarie. Di conseguenza, l’IRPEF sulla gratifica natalizia è trattenuta a tariffa intera.',
                },
            },
            {
                '@type': 'Question',
                name: 'Quando viene pagata la tredicesima?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Nel settore pubblico e nella scuola (NoiPA) la tredicesima viene accreditata di norma tra il 14 e il 16 dicembre con emissione speciale. Nel settore privato (CCNL Commercio, Metalmeccanici, ecc.) viene corrisposta entro la vigilia di Natale (20-24 dicembre). Per i pensionati INPS viene erogata insieme alla rata di pensione del 1° giorno bancabile di dicembre.',
                },
            },
            {
                '@type': 'Question',
                name: 'A chi spetta la tredicesima mensilità?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'La tredicesima spetta a tutti i lavoratori dipendenti (a tempo indeterminato, determinato, full-time, part-time e apprendisti) sia del settore privato che del settore pubblico, nonché a tutti i pensionati. Non spetta ai lavoratori autonomi, titolari di partita IVA, liberi professionisti, collaboratori a progetto né ai tirocinanti.',
                },
            },
            {
                '@type': 'Question',
                name: 'I periodi di malattia, maternità o infortunio fanno maturare la tredicesima?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Sì. La maternità obbligatoria, i congedi di paternità, la malattia e l’infortunio sul lavoro maturano regolarmente i ratei di tredicesima. Al contrario, i periodi di congedo parentale facoltativo, aspettativa non retribuita e sciopero non maturano ratei di gratifica natalizia.',
                },
            },
        ],
    }

    return (
        <div className="space-y-10 py-8">
            <JsonLd data={appSchema} />
            <JsonLd data={faqSchema} />

            <div className="flex items-center gap-2 text-xs text-muted">
                <Link href="/tool" className="inline-flex items-center gap-1 hover:text-foreground">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Tutti gli strumenti
                </Link>
                <span>/</span>
                <span className="text-foreground font-medium">Calcolo Tredicesima Netta</span>
            </div>

            <PageHeader
                badge="Gratifica Natalizia"
                icon={Calculator}
                title="Calcolo Tredicesima Netta da Stipendio o RAL"
                description="Calcola online la tredicesima netta in busta paga dalla retribuzione lorda mensile o dalla RAL. Formula trasparente basata su ratei maturati (mesi lavorati su 12), contributi IVS 9,19%, aliquote IRPEF a 3 scaglioni e integrazione Bonus Natale fino a 100€."
            />

            <TredicesimaClient />

            {/* Sezione Fonti Ufficiali e Verificate */}
            <section className="space-y-4 pt-8 border-t border-border">
                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <h2 className="text-xl font-display font-semibold text-foreground">
                        Basi normative e fonti ufficiali primarie
                    </h2>
                </div>
                <p className="text-xs md:text-sm text-secondary leading-relaxed">
                    Il calcolo della tredicesima mensilità (gratifica natalizia) è disciplinato dal Codice Civile, dai Contratti Collettivi Nazionali di Lavoro (CCNL) e dal Testo Unico delle Imposte sui Redditi (TUIR):
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <a
                        href="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1986-12-22;917"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl border border-border bg-surface hover:border-primary/60 transition-all flex items-start justify-between gap-3 group"
                    >
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                Fonte Normattiva
                            </span>
                            <p className="font-semibold text-foreground text-sm group-hover:text-primary mt-1">
                                D.P.R. 917/1986 — TUIR (Artt. 12 e 13)
                            </p>
                            <p className="text-xs text-muted">
                                Disciplina sulle detrazioni da lavoro dipendente e carichi di famiglia (escluse dalla 13ª).
                            </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-primary shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <a
                        href="https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.50150.cedolino-della-pensione.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl border border-border bg-surface hover:border-primary/60 transition-all flex items-start justify-between gap-3 group"
                    >
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                Fonte INPS
                            </span>
                            <p className="font-semibold text-foreground text-sm group-hover:text-primary mt-1">
                                INPS — Gratifica natalizia e cedolino pensione
                            </p>
                            <p className="text-xs text-muted">
                                Liquidazione della tredicesima per pensionati e gestione contributiva IVS per dipendenti.
                            </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-primary shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <a
                        href="https://noipa.mef.gov.it/cl/servizi/stipendi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl border border-border bg-surface hover:border-primary/60 transition-all flex items-start justify-between gap-3 group"
                    >
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                Fonte NoiPA / MEF
                            </span>
                            <p className="font-semibold text-foreground text-sm group-hover:text-primary mt-1">
                                NoiPA — Emissioni speciali stipendi e tredicesima
                            </p>
                            <p className="text-xs text-muted">
                                Calendario dell’emissione congiunta stipendio di dicembre e gratifica natalizia nel pubblico.
                            </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-primary shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <a
                        href="https://www.mef.gov.it/focus/Bonus-Natale-lavoratori-dipendenti/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl border border-border bg-surface hover:border-primary/60 transition-all flex items-start justify-between gap-3 group"
                    >
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                Fonte MEF
                            </span>
                            <p className="font-semibold text-foreground text-sm group-hover:text-primary mt-1">
                                MEF — Disposizioni Bonus Natale (D.L. 113 e 167/2024)
                            </p>
                            <p className="text-xs text-muted">
                                Requisiti reddituali e familiari per l’indennità fino a 100€ corrisposta con la tredicesima.
                            </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-primary shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </div>
            </section>
        </div>
    )
}
