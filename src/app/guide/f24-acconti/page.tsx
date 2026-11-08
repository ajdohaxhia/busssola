import Link from 'next/link'
import {
    FileText,
    Calculator,
    ArrowRight,
    HelpCircle,
    ShieldCheck,
} from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Modello F24 Acconti Imposte: Codici Tributo, Compilazione e Ravvedimento',
    description: 'Guida pratica alla compilazione del Modello F24 per gli acconti IRPEF, forfettari e cedolare secca: codici 4034, 1791, metodo storico vs previsionale e rateizzazione.',
    path: '/guide/f24-acconti/',
    keywords: [
        'modello f24 acconti',
        'codice tributo 4034',
        'codice tributo 1791',
        'compilazione f24 sezione erario',
        'metodo storico vs previsionale acconto',
        'rateizzazione secondo acconto f24',
        'ravvedimento operoso f24 sanzioni',
    ],
})

const TAX_CODES = [
    {
        code: '4034',
        tribute: 'IRPEF - Acconto seconda rata o acconto in unica soluzione',
        section: 'Erario',
        note: 'Da indicare con anno di riferimento d’imposta in corso (es. 2026 o 2027) e campo "rateazione/mese rif" valorizzato a 0101 se unico versamento.',
    },
    {
        code: '1791',
        tribute: 'Imposta sostitutiva regime forfettario - Acconto seconda rata',
        section: 'Erario',
        note: 'Utilizzato dai titolari di partita IVA in regime forfettario (5% o 15%) per il secondo acconto entro il 30 novembre.',
    },
    {
        code: '1841',
        tribute: 'Cedolare secca sulle locazioni - Acconto seconda rata',
        section: 'Erario',
        note: 'Dovuto dai proprietari di immobili ad uso abitativo locati con opzione cedolare secca (21% o 10%).',
    },
    {
        code: '8901',
        tribute: 'Sanzione pecuniaria IRPEF (Ravvedimento Operoso)',
        section: 'Erario',
        note: 'Da inserire in caso di versamento tardivo spontaneo per la quota di sanzione ridotta.',
    },
    {
        code: '1989',
        tribute: 'Interessi sul ravvedimento IRPEF',
        section: 'Erario',
        note: 'Interessi calcolati al tasso legale annuo maturati dal giorno successivo alla scadenza al giorno dell’effettivo versamento.',
    },
]

const FAQS = [
    {
        question: 'Che differenza c’è tra metodo storico e metodo previsionale per gli acconti?',
        answer: 'Con il metodo storico, l’acconto è calcolato al 100% dell’imposta netta dovuta per l’anno precedente (riportata al rigo Differenza del modello dichiarativo). È il metodo più sicuro perché azzera il rischio di sanzioni anche se nell’anno in corso si guadagna di più. Con il metodo previsionale, si calcola l’acconto sulla base del reddito che si presume di conseguire nell’anno in corso: è vantaggioso se i ricavi sono crollati, ma se a consuntivo l’acconto versato risulta inferiore al dovuto scattano sanzioni e interessi sulla differenza.',
    },
    {
        question: 'Come funziona la rateizzazione del secondo acconto in 5 rate mensili?',
        answer: 'I soggetti persone fisiche titolari di partita IVA con ricavi o compensi fino a 170.000 euro possono scegliere di versare il secondo acconto in 5 rate mensili di pari importo, a decorrere da gennaio fino a maggio dell’anno successivo. Sulle rate successive alla prima si applica un interesse forfettario annuo del 4%. Non è necessaria alcuna comunicazione preventiva: basta compilare il primo F24 a gennaio con il codice di rateazione appropriato.',
    },
    {
        question: 'Quanto costa il ravvedimento operoso se pago l’F24 dopo il termine del 30 novembre?',
        answer: 'Se ti accorgi del ritardo entro i primi 14 giorni, applichi il "ravvedimento sprint": sanzione ridotta dello 0,1% per ogni giorno di ritardo. Dal 15° al 30° giorno la sanzione è dell’1,5% fisso (ravvedimento breve). Dal 31° al 90° giorno sale all’1,67% (ravvedimento medio). Oltre alla sanzione, si versano gli interessi legali giornalieri (codice tributo 1989).',
    },
]

export default function F24AccontiGuidePage() {
    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Come Compilare il Modello F24 per il Secondo Acconto Imposte',
        description: 'Istruzioni operative per compilare la Sezione Erario del Modello F24 e versare gli acconti IRPEF o forfettari online.',
        step: [
            {
                '@type': 'HowToStep',
                name: 'Accedi al portale della tua banca o ad Agenzia delle Entrate',
                text: 'Entra nel servizio di home banking o nell’area riservata Entratel / Fisconline dell’Agenzia delle Entrate con SPID o CIE.',
            },
            {
                '@type': 'HowToStep',
                name: 'Seleziona il modello F24 Ordinario e la Sezione Erario',
                text: 'Individua la Sezione Erario. Inserisci il codice tributo corrispondente (4034 per IRPEF, 1791 per forfettari, 1841 per cedolare secca).',
            },
            {
                '@type': 'HowToStep',
                name: 'Indica l’anno di riferimento e l’importo a debito',
                text: 'Inserisci l’anno d’imposta per cui versi l’acconto nel campo "anno di riferimento" e l’importo calcolato nella colonna "importi a debito versati". Lascia vuoto il campo rateazione (oppure inserisci 0101).',
            },
            {
                '@type': 'HowToStep',
                name: 'Autorizza il pagamento e scarica la quietanza F24',
                text: 'Conferma il pagamento telematico e conserva la quietanza con protocollo telematico rilasciata dall’Agenzia delle Entrate per 10 anni.',
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
                <Link href="/moduli/modulo-25-fisco-cittadini" className="inline-flex items-center gap-1 hover:text-foreground">
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                    Modulo Fisco
                </Link>
                <span>/</span>
                <span className="text-foreground font-medium">Guida F24 Acconti</span>
            </div>

            <PageHeader
                badge="Guida Operativa Tributi"
                icon={FileText}
                title="Modello F24 Acconti: Codici Tributo, Compilazione e Rateizzazione"
                description="Come compilare la Sezione Erario del Modello F24 per versare il secondo acconto di imposte, forfettari e cedolare secca. Differenza tra metodo storico e previsionale, possibilità di rateizzazione in 5 rate e calcolo del ravvedimento operoso."
            />

            {/* Quick summary alert */}
            <div className="bg-surface border border-border rounded-xl p-5 shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="space-y-1">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        Scadenza Ordinaria: 30 Novembre
                    </span>
                    <h2 className="text-lg font-display font-semibold text-foreground">
                        Obbligo di versamento telematico per titolari di Partita IVA
                    </h2>
                    <p className="text-xs md:text-sm text-secondary max-w-xl">
                        Tutti i titolari di partita IVA devono presentare l&apos;F24 esclusivamente in modalità telematica (tramite home banking o F24 web dell&apos;Agenzia delle Entrate). I privati non titolari di partita IVA possono pagare anche tramite banca o posta.
                    </p>
                </div>
                <Link
                    href="/scadenze"
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-hover transition-colors whitespace-nowrap shadow-sm"
                >
                    Vedi Scadenzario Fiscale
                </Link>
            </div>

            {/* Tax Codes Table */}
            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                        I codici tributo più usati nella Sezione Erario
                    </h2>
                    <span className="text-xs text-muted">Tabella ufficiale Agenzia delle Entrate</span>
                </div>

                <div className="overflow-x-auto border border-border rounded-xl bg-surface shadow-sm">
                    <table className="w-full text-left text-sm border-collapse">
                        <thead>
                            <tr className="border-b border-border bg-surface-muted/60 text-xs font-semibold text-foreground uppercase tracking-wider">
                                <th scope="col" className="p-4 w-28">Codice</th>
                                <th scope="col" className="p-4">Descrizione Tributo</th>
                                <th scope="col" className="p-4 w-28">Sezione</th>
                                <th scope="col" className="p-4">Istruzioni operative</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/60 text-xs md:text-sm">
                            {TAX_CODES.map((t, idx) => (
                                <tr key={idx} className="hover:bg-surface-muted/30 transition-colors">
                                    <td className="p-4 font-mono font-bold text-primary align-top">
                                        {t.code}
                                    </td>
                                    <td className="p-4 font-semibold text-foreground align-top">
                                        {t.tribute}
                                    </td>
                                    <td className="p-4 text-muted align-top">
                                        {t.section}
                                    </td>
                                    <td className="p-4 text-secondary leading-relaxed align-top">
                                        {t.note}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Historical vs Forecast Method */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-primary" />
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                        Metodo Storico vs Metodo Previsionale: Quale scegliere?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm">
                    <div className="p-5 rounded-xl bg-surface-muted border border-border/50 space-y-3">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-base text-foreground">1. Metodo Storico (Consigliato)</h3>
                            <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold text-xs">
                                Rischio Zero
                            </span>
                        </div>
                        <p className="text-secondary leading-relaxed">
                            Si versa esattamente l&apos;importo calcolato sul reddito dell&apos;anno precedente. Anche se nell&apos;anno in corso i tuoi ricavi raddoppiano, <strong>nessuno potrà mai contestarti una sanzione</strong> per omesso o insufficiente acconto. Il conguaglio verrà regolato a saldo nell&apos;estate successiva.
                        </p>
                    </div>

                    <div className="p-5 rounded-xl bg-surface-muted border border-border/50 space-y-3">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-base text-foreground">2. Metodo Previsionale</h3>
                            <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold text-xs">
                                Da usare con cautela
                            </span>
                        </div>
                        <p className="text-secondary leading-relaxed">
                            Utile solo se sai con certezza che il tuo reddito è calato drasticamente (es. cessazione attività o chiusura contratti). Se versi un acconto ridotto e poi a consuntivo si rivela inferiore all&apos;imposta effettivamente dovuta, l&apos;Agenzia delle Entrate applicherà <strong>la sanzione del 30%</strong> sulla quota mancante.
                        </p>
                    </div>
                </div>
            </section>

            {/* How-To Step by Step */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4">
                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                    I 4 passi per inviare l&apos;F24 telematico
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs md:text-sm">
                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1.5">
                        <strong className="text-foreground font-semibold flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">1</span>
                            Home Banking o F24 Web
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            Accedi al portale della tua banca nella sezione &quot;Pagamento F24&quot; oppure al portale Fisconline di Agenzia delle Entrate con SPID/CIE.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1.5">
                        <strong className="text-foreground font-semibold flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">2</span>
                            Compila la Sezione Erario
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            Digita il codice tributo (es. 4034 per IRPEF o 1791 per forfettari), l&apos;anno di imposta e l&apos;importo calcolato nella colonna &quot;debito&quot;.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1.5">
                        <strong className="text-foreground font-semibold flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">3</span>
                            Compensa eventuali crediti
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            Se hai crediti d&apos;imposta (es. da 730 a credito o bonus edilizi), puoi inserirli nella colonna &quot;credito&quot; per azzerare o ridurre l&apos;importo da versare.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1.5">
                        <strong className="text-foreground font-semibold flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">4</span>
                            Scarica e conserva la quietanza
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            Dopo l&apos;invio, scarica il file PDF della quietanza rilasciata con il codice di protocollo telematico e conservalo per almeno 10 anni.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-display font-semibold text-foreground">
                        Domande Frequenti su F24 e Acconti
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

            {/* Official Source Note */}
            <div className="p-4 rounded-xl border border-border/60 bg-surface-muted flex items-center justify-between flex-wrap gap-3 text-xs text-secondary">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Dati e codici tributo allineati alle istruzioni del Modello F24 dell&apos;Agenzia delle Entrate.</span>
                </div>
                <Link href="/moduli/modulo-25-fisco-cittadini" className="font-semibold text-primary hover:underline">
                    Vai al Modulo Fisco Completo ↗
                </Link>
            </div>
        </div>
    )
}
