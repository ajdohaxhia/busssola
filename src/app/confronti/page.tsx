import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles, Scale } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { absoluteUrl } from '@/lib/seo-core'

const COMPARISONS = [
    {
        slug: 'spid-cie-it-wallet',
        title: 'SPID vs CIE vs IT-Wallet: Quale Identità Digitale Scegliere',
        category: 'Identità e Documenti',
        tag: 'Molto Richiesto',
        summary: 'Tabella comparativa dettagliata tra SPID (Identity Provider privati), Carta d’Identità Elettronica (CIE 3.0) e la nuova funzionalità IT-Wallet su App IO. Costi, livelli di sicurezza (LoA 1, 2, 3), requisiti hardware e supporto all’estero.',
        verdict: 'Se hai la CIE e uno smartphone con NFC, attiva subito CieID con livello 2 e 3: è gratuita, statale e valida a vita. Tieni uno SPID gratuito di riserva se il tuo telefono non ha NFC.',
        href: '/confronti/spid-cie-it-wallet',
    },
    {
        slug: 'truffe-come-riconoscerle',
        title: 'Truffe e Phishing: Matrice di Riconoscimento per Canale',
        category: 'Sicurezza e Truffe',
        tag: 'Allarme Attivo',
        summary: 'Matrice comparativa per individuare all’istante tentativi di frode: SMS falsi di banche e corrieri (smishing), email con allegati malevoli (phishing), telefonate da finti operatori (vishing) e QR code manomessi (quishing).',
        verdict: 'Nessuna banca, ente pubblico o forze dell’ordine chiede mai per telefono o SMS di spostare fondi su "conti sicuri" o di comunicare codici OTP monouso.',
        href: '/confronti/truffe-come-riconoscerle',
    },
    {
        slug: 'modello-730-vs-redditi',
        title: 'Modello 730 vs Modello Redditi Persone Fisiche',
        category: 'Fisco e Imposte',
        tag: 'Dichiarazione',
        summary: 'Confronto pratico tra il modello 730 (ordinario o senza sostituto) e il Modello Redditi PF: chi può utilizzarli, tempistiche di accredito dei rimborsi (luglio in busta paga vs bonifico dopo 18 mesi) e quadri speciali per investimenti all’estero o cripto.',
        verdict: 'Usa sempre il 730 se sei dipendente o pensionato: ricevi i rimborsi direttamente nello stipendio o nella pensione nel giro di poche settimane.',
        href: '/moduli/modulo-25-fisco-cittadini',
    },
    {
        slug: 'fondo-pensione-vs-etf',
        title: 'Fondo Pensione vs ETF e Conto Deposito per il Lungo Termine',
        category: 'Previdenza e Risparmio',
        tag: 'Finanza Personale',
        summary: 'Analisi dei pro e contro tra previdenza complementare (deducibilità IRPEF fino a 5.164,57€/anno, contributo datoriale, aliquota finale 9-15%) e investimenti liberi in ETF azionari/obbligazionari (massima flessibilità, tassazione 26%).',
        verdict: 'Sfrutta il fondo pensione negoziale per incassare il contributo del datore di lavoro e la deduzione IRPEF se hai un reddito medio-alto; abbina ETF per gli obiettivi di liquidità prima del pensionamento.',
        href: '/moduli/modulo-27-pensioni-previdenza',
    },
    {
        slug: 'forfettario-vs-ordinario',
        title: 'Partita IVA: Regime Forfettario vs Regime Ordinario Semplificato',
        category: 'Lavoro e Partita IVA',
        tag: 'Guida Fiscale',
        summary: 'Tutto ciò che cambia per chi lavora in proprio: aliquota sostitutiva al 5% (primi 5 anni) o 15% fino a 85.000€, esenzione da IVA ed esterometro, a confronto con la contabilità semplificata con deduzione analitica delle spese effettive.',
        verdict: 'Il forfettario è quasi sempre imbattibile per professionisti con pochi costi documentabili (consulenti, programmatori, creativi). Se hai costi vivi superiori al coefficiente di redditività, valuta l’ordinario.',
        href: '/moduli/modulo-29-partita-iva-forfettario',
    },
]

export default function ConfrontiHubPage() {
    const collectionSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Confronti e Tabelle Decisionali - Busssola',
        description: 'Tabelle comparative e matrici decisionali indipendenti su identità digitali, sicurezza informatica, fisco, previdenza e lavoro.',
        url: absoluteUrl('/confronti/'),
        hasPart: COMPARISONS.map((c) => ({
            '@type': 'Article',
            name: c.title,
            description: c.summary,
            url: absoluteUrl(c.href),
        })),
    }

    return (
        <div className="space-y-10 py-8">
            <JsonLd data={collectionSchema} />

            <PageHeader
                badge="Confronti e Tabelle Decisionali"
                icon={Scale}
                title="Confronti Chiari per Decisioni Senza Stress"
                description="Mettiamo a confronto diretto strumenti digitali, opzioni burocratiche, canali di contatto e regimi fiscali. Tabelle chiare, pro e contro concreti, nessun gergo incomprensibile e verdetto pratico su cosa conviene fare."
            />

            {/* Comparison Cards Grid */}
            <div className="grid gap-6">
                {COMPARISONS.map((comp) => (
                    <article
                        key={comp.slug}
                        className="bg-surface border border-border rounded-xl p-6 md:p-8 hover:border-primary/60 transition-all shadow-sm hover:shadow-md flex flex-col justify-between group"
                    >
                        <div className="space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-surface-muted text-secondary border border-border">
                                        {comp.category}
                                    </span>
                                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                                        {comp.tag}
                                    </span>
                                </div>
                            </div>

                            <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                                {comp.title}
                            </h2>

                            <p className="text-sm text-secondary leading-relaxed">
                                {comp.summary}
                            </p>

                            {/* Practical Verdict Box */}
                            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-100 flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="font-semibold text-emerald-900 dark:text-emerald-200">Verdetto pratico: </strong>
                                    <span>{comp.verdict}</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between">
                            <span className="text-xs text-muted">Analisi aggiornata con fonti ufficiali</span>
                            <Link
                                href={comp.href}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline group-hover:translate-x-0.5 transition-transform"
                            >
                                Leggi il confronto completo
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            {/* Educational methodology */}
            <div className="p-6 rounded-xl bg-surface border border-border space-y-3">
                <div className="flex items-center gap-2 text-foreground font-semibold text-base">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <h3>Come costruiamo i nostri confronti</h3>
                </div>
                <p className="text-xs md:text-sm text-secondary leading-relaxed">
                    Tutti i dati tecnici, le soglie d’imposta, i costi e i livelli di sicurezza provengono direttamente da normative primarie (Codice dell&apos;Amministrazione Digitale, Regolamento europeo eIDAS, TUIR e circolari dell&apos;Agenzia delle Entrate). Non accettiamo sponsorizzazioni né partnership commerciali per alterare i verdetti.
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs">
                    <Link href="/metodo-editoriale" className="font-semibold text-primary hover:underline">
                        Leggi il nostro metodo editoriale ↗
                    </Link>
                    <Link href="/fonti" className="text-muted hover:text-foreground">
                        Elenco fonti verificate ↗
                    </Link>
                </div>
            </div>
        </div>
    )
}
