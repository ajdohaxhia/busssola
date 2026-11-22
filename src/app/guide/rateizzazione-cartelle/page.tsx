import Link from 'next/link'
import {
    FileText,
    ArrowRight,
    HelpCircle,
    ShieldCheck,
    AlertTriangle,
    CheckCircle2,
    Clock,
} from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Rateizzazione Cartelle Esattoriali: Come Chiedere Fino a 84 e 96 Rate senza Documenti',
    description: 'Guida pratica alla rateizzazione delle cartelle Agenzia delle Entrate-Riscossione (AdER): piano fino a 84 rate senza ISEE (fino a 120.000€), decadenza dopo 8 rate, simulatore e domanda online.',
    path: '/guide/rateizzazione-cartelle/',
    keywords: [
        'rateizzazione cartelle esattoriali',
        'rateizzazione agenzia entrate riscossione',
        'rateizza adesso ader',
        '84 rate cartelle senza documenti',
        'dlgs 110 2024 riscossione',
        'decadenza rateizzazione 8 rate',
        'rateizzazione straordinaria 120 rate isee',
    ],
})

const PLANS_COMPARISON = [
    {
        type: 'Ordinaria su semplice richiesta',
        threshold: 'Fino a 120.000 €',
        duration: 'Fino a 84 rate (2025-2026) / 96 rate (2027-2028)',
        requirements: 'Nessun documento economico richiesto (nessun ISEE o bilancio)',
        channel: 'Servizio telematico «Rateizza adesso» in area riservata AdER o App Equiclick',
    },
    {
        type: 'Ordinaria documentata',
        threshold: 'Oltre 120.000 €',
        duration: 'Fino a 72-84 rate mensili',
        requirements: 'Attestazione ISEE del nucleo familiare (persone fisiche) o indice di liquidità (imprese)',
        channel: 'Invio telematico modello RS via PEC all’indirizzo provinciale AdER o sportello',
    },
    {
        type: 'Straordinaria (grave difficoltà)',
        threshold: 'Qualsiasi importo con comprovata difficoltà',
        duration: 'Fino a 120 rate mensili (10 anni)',
        requirements: 'Rata ordinaria superiore al 20% del reddito ISEE o indice Alfa < 0,8',
        channel: 'Modello dedicato con documentazione economica e perizia o certificazioni reddituali',
    },
    {
        type: 'Proroga del piano in corso',
        threshold: 'Piani non decaduti',
        duration: 'Fino a ulteriori 72 rate',
        requirements: 'Peggioramento comprovato delle condizioni economiche successivo alla concessione iniziale',
        channel: 'Domanda di proroga presentabile una sola volta prima del completamento del piano',
    },
]

const FAQS = [
    {
        question: 'Serve presentare l’ISEE per rateizzare una cartella esattoriale?',
        answer: 'No, se il debito complessivo da rateizzare non supera i 120.000 euro. In base al D.Lgs. 110/2024 e alle disposizioni operative di Agenzia delle Entrate-Riscossione, per importi fino a 120.000 euro la rateizzazione fino a 84 rate mensili si ottiene su semplice richiesta online, senza dover allegare ISEE, buste paga o dichiarazioni dei redditi.',
    },
    {
        question: 'Dopo quante rate non pagate si decade dalla rateizzazione AdER?',
        answer: 'Per i piani di rateizzazione ordinari concessi da Agenzia delle Entrate-Riscossione, la decadenza si verifica al mancato pagamento di 8 rate, anche non consecutive. In caso di decadenza, l’intero debito residuo residua a esigibilità immediata e l’AdER può attivare misure cautelari (fermo amministrativo, ipoteca) o esecutive (pignoramento), senza possibilità di riaprire la dilazione per gli stessi importi.',
    },
    {
        question: 'Cosa succede se presento domanda di rateizzazione prima che scada la cartella?',
        answer: 'La presentazione della richiesta di rateizzazione blocca immediatamente l’avvio di nuove azioni esecutive da parte di AdER (come pignoramenti presso terzi o dello stipendio) e impedisce l’iscrizione di nuovi fermi amministrativi o ipoteche sui beni del debitore, purché la domanda venga accolta e venga regolarmente versata la prima rata.',
    },
    {
        question: 'Posso estinguere anticipatamente il debito o versare importi più alti?',
        answer: 'Sì, in qualsiasi momento è possibile estinguere il debito residuo in un’unica soluzione o versare importi anticipati senza alcuna penale né onere aggiuntivo. Gli interessi di dilazione verranno ricalcolati esclusivamente sulla durata effettiva del finanziamento.',
    },
]

export default function RateizzazioneCartelleGuidePage() {
    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Come Richiedere la Rateizzazione delle Cartelle Agenzia delle Entrate-Riscossione',
        description: 'Passaggi operativi per richiedere online la rateizzazione ordinaria fino a 84 o 96 rate tramite il portale AdER senza presentare documenti.',
        step: [
            {
                '@type': 'HowToStep',
                position: 1,
                name: 'Accedi all’area riservata AdER',
                text: 'Entra sul sito ufficiale agenziaentrateriscossione.gov.it con credenziali SPID, Carta d’Identità Elettronica (CIE) o CNS.',
            },
            {
                '@type': 'HowToStep',
                position: 2,
                name: 'Consulta la situazione debitoria e apri «Rateizza adesso»',
                text: 'Verifica l’elenco dei debiti nella sezione «Situazione debitoria» e seleziona il servizio «Rateizza adesso».',
            },
            {
                '@type': 'HowToStep',
                position: 3,
                name: 'Seleziona le cartelle e simula il piano di ammortamento',
                text: 'Scegli le cartelle da includere nella rateazione, il numero di rate desiderato (fino a 84 rate) e la tipologia (rate costanti o crescenti).',
            },
            {
                '@type': 'HowToStep',
                position: 4,
                name: 'Conferma l’istanza e scarica i bollettini pagoPA',
                text: 'Invia la richiesta telematica, scarica la comunicazione di accoglimento con il piano dettagliato e versa la prima rata entro la scadenza.',
            },
        ],
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
            <JsonLd data={howToSchema} />
            <JsonLd data={faqSchema} />

            <div className="flex items-center gap-2 text-xs text-muted">
                <Link href="/moduli/modulo-28-cartelle-riscossione" className="inline-flex items-center gap-1 hover:text-foreground">
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                    Modulo Cartelle e Riscossione
                </Link>
                <span>/</span>
                <span className="text-foreground font-medium">Guida Rateizzazione Cartelle</span>
            </div>

            <PageHeader
                badge="Guida Operativa Riscossione"
                icon={FileText}
                title="Rateizzazione Cartelle Esattoriali: Come Richiedere Fino a 84 e 96 Rate senza Documenti"
                description="Procedura passo-passo per accedere alla dilazione ordinaria dei debiti esattoriali con Agenzia delle Entrate-Riscossione (AdER). Limiti fino a 120.000 euro, simulatore «Rateizza adesso», decadenza all’ottava rata e regole del D.Lgs. 110/2024."
            />

            {/* Quick response banner */}
            <div className="bg-surface border border-border rounded-xl p-5 shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="space-y-1">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        Risposta Rapida
                    </span>
                    <h2 className="text-lg font-display font-semibold text-foreground">
                        Fino a 120.000€ bastano 5 minuti online senza allegare ISEE
                    </h2>
                    <p className="text-xs md:text-sm text-secondary max-w-xl">
                        Con il servizio «Rateizza adesso» in area riservata AdER ottieni subito fino a 84 rate mensili (7 anni), senza buste paga né certificazioni. Il pagamento della prima rata attiva il piano e blocca le azioni esecutive.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Link
                        href="/modelli/rateizzazione-ader"
                        className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-hover transition-colors whitespace-nowrap shadow-sm"
                    >
                        Vedi Kit Modello AdER
                    </Link>
                </div>
            </div>

            {/* Plans Comparison Table */}
            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                        I piani di rateizzazione disponibili nel 2026-2027
                    </h2>
                    <span className="text-xs text-muted">Quadro normativo D.Lgs. 110/2024</span>
                </div>

                <div className="overflow-x-auto border border-border rounded-xl bg-surface shadow-sm">
                    <table className="w-full text-left text-sm border-collapse">
                        <thead>
                            <tr className="border-b border-border bg-surface-muted/60 text-xs font-semibold text-foreground uppercase tracking-wider">
                                <th scope="col" className="p-4 w-44">Tipologia Piano</th>
                                <th scope="col" className="p-4 w-36">Soglia Debito</th>
                                <th scope="col" className="p-4 w-44">Numero Rate</th>
                                <th scope="col" className="p-4">Requisiti e Documenti</th>
                                <th scope="col" className="p-4">Canale di Richiesta</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/60 text-xs md:text-sm">
                            {PLANS_COMPARISON.map((plan, idx) => (
                                <tr key={idx} className="hover:bg-surface-muted/30 transition-colors">
                                    <td className="p-4 font-semibold text-primary align-top">
                                        {plan.type}
                                    </td>
                                    <td className="p-4 font-mono font-medium text-foreground align-top">
                                        {plan.threshold}
                                    </td>
                                    <td className="p-4 text-foreground font-medium align-top">
                                        {plan.duration}
                                    </td>
                                    <td className="p-4 text-secondary leading-relaxed align-top">
                                        {plan.requirements}
                                    </td>
                                    <td className="p-4 text-secondary leading-relaxed align-top">
                                        {plan.channel}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Step-by-Step Practical Steps */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                        I 4 passi per attivare la rateizzazione online
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs md:text-sm">
                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1.5">
                        <strong className="text-foreground font-semibold flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">1</span>
                            Accesso Identità Digitale
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            Vai su <em>agenziaentrateriscossione.gov.it</em> e accedi con SPID o CIE all’area riservata Cittadini o Imprese.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1.5">
                        <strong className="text-foreground font-semibold flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">2</span>
                            Seleziona Cartelle e Avvisi
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            Apri «Rateizza il debito» &gt; «Rateizza adesso». Visualizza l’elenco delle cartelle rateizzabili e seleziona quelle da dilazionare.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1.5">
                        <strong className="text-foreground font-semibold flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">3</span>
                            Scegli Numero Rate
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            Scegli il piano fino a 84 rate mensili. Puoi optare per rata costante oppure per rata variabile crescente anno per anno.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1.5">
                        <strong className="text-foreground font-semibold flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">4</span>
                            Scarica Bollettini pagoPA
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            Conferma l’invio. Il piano viene approvato all’istante: scarica la lettera di accoglimento e i bollettini pagoPA per i versamenti.
                        </p>
                    </div>
                </div>
            </section>

            {/* What happens if... */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                        Cosa succede se... Errori comuni, rischi e conseguenze
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm">
                    <div className="p-5 rounded-xl bg-surface-muted border border-border/50 space-y-2">
                        <h3 className="font-semibold text-base text-foreground flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500" />
                            Salti fino a 7 rate
                        </h3>
                        <p className="text-secondary leading-relaxed">
                            Il piano rimane valido. Nei piani ordinari AdER non si decade subito: puoi saldare le rate arretrate con i relativi interessi di mora calcolati sui giorni di ritardo senza perdere la dilazione.
                        </p>
                    </div>

                    <div className="p-5 rounded-xl bg-surface-muted border border-border/50 space-y-2">
                        <h3 className="font-semibold text-base text-foreground flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-600" />
                            Non paghi l&apos;8ª rata
                        </h3>
                        <p className="text-secondary leading-relaxed">
                            Scatta la <strong>decadenza automatica e definitiva</strong>. Il debito residuo diventa immediatamente esigibile per intero e l&apos;AdER può avviare pignoramenti dello stipendio, del conto corrente o iscrivere fermi auto.
                        </p>
                    </div>

                    <div className="p-5 rounded-xl bg-surface-muted border border-border/50 space-y-2">
                        <h3 className="font-semibold text-base text-foreground flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500" />
                            Rateizzi un tributo non dovuto
                        </h3>
                        <p className="text-secondary leading-relaxed">
                            La richiesta di rateizzazione costituisce riconoscimento di debito ai fini civili e interrompe la prescrizione. Se ritieni che la cartella sia errata o già pagata, presenta prima istanza di autotutela all&apos;ente o chiedi la sospensione legale ad AdER.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-display font-semibold text-foreground">
                        Domande Frequenti sulla Rateizzazione delle Cartelle
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

            {/* Author and Reviewer Box */}
            <div className="p-5 rounded-xl border border-border bg-surface space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Autore e revisione editoriale: <strong>Adelajdo Haxhiaj</strong> (Redazione Busssola)</span>
                    </div>
                    <span>Data di ultima revisione: <strong>22 novembre 2026</strong></span>
                </div>
                <p className="text-xs text-secondary leading-relaxed border-t border-border/40 pt-2">
                    <strong>Disclaimer di Busssola:</strong> Busssola è una guida civica indipendente e non sostituisce gli sportelli ufficiali della Pubblica Amministrazione o l&apos;assistenza legale professionale. Per situazioni di contenzioso o iscrizioni ipotecarie complesse, rivolgiti direttamente a uno sportello AdER o a un professionista abilitato.
                </p>
            </div>

            {/* Official Source Note */}
            <div className="p-4 rounded-xl border border-border/60 bg-surface-muted flex items-center justify-between flex-wrap gap-3 text-xs text-secondary">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Fonti primarie: D.Lgs. 110/2024 e portale ufficiale Agenzia delle Entrate-Riscossione.</span>
                </div>
                <Link href="/moduli/modulo-28-cartelle-riscossione" className="font-semibold text-primary hover:underline">
                    Vai al Modulo Cartelle Completo ↗
                </Link>
            </div>
        </div>
    )
}
