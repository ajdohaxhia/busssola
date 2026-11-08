import Link from 'next/link'
import {
    FileSpreadsheet,
    Calendar,
    CheckCircle2,
    Building2,
    HelpCircle,
    ShieldCheck,
    Download,
} from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildSeoMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/seo-core'

export const metadata = buildSeoMetadata({
    title: 'ISEE 2027 e Rinnovo DSU: Documenti Necessari, Calcolo e Novità BTP',
    description: 'Guida passo-passo per fare l’ISEE 2027: documenti patrimoniali 2025, ISEE precompilato INPS, esclusione BTP fino a 50.000€ e scadenze per l’Assegno Unico.',
    path: '/isee-2027/',
    keywords: [
        'isee 2027',
        'rinnovo isee 2027',
        'documenti isee 2027',
        'isee precompilato inps',
        'dsu 2027 come fare',
        'btp esclusi isee 2027',
        'giacenza media isee 2025',
        'scadenza isee assegno unico',
    ],
})

const REQUIRED_DOCUMENTS = [
    {
        category: 'Dati Anagrafici e Nucleo',
        items: [
            'Codice fiscale e documento d’identità valido del dichiarante',
            'Codici fiscali di tutti i componenti del nucleo familiare convivente',
            'Per cittadini extracomunitari: permesso o carta di soggiorno in corso di validità',
            'Per persone con disabilità media, grave o non autosufficienti: certificazione verbale Legge 104 / invalidità civile',
        ],
    },
    {
        category: 'Patrimonio Mobiliare (Saldo e Giacenza al 31/12/2025)',
        items: [
            'Saldi contabili e giacenze medie annue al 31 dicembre 2025 di tutti i conti correnti e carte prepagate con IBAN',
            'Saldo al 31/12/2025 di libretti postali, carte ricaricabili senza IBAN e conti deposito',
            'Valore nominale di BTP, BOT, CCT e Buoni Fruttiferi Postali (esclusi dal calcolo fino a 50.000€ totali)',
            'Estratti conto di investimenti, fondi comuni, azioni, obbligazioni e polizze vita a contenuto finanziario',
        ],
    },
    {
        category: 'Patrimonio Immobiliare e Casa',
        items: [
            'Visure catastali di case, terreni e fabbricati posseduti in Italia e all’estero al 31 dicembre 2025',
            'Certificazione della quota capitale residua del mutuo al 31/12/2025 per gli immobili gravati da ipoteca',
            'In caso di abitazione in locazione: contratto di affitto registrato con estremi dell’Agenzia delle Entrate e canone annuo',
        ],
    },
    {
        category: 'Redditi e Autoveicoli',
        items: [
            'Dichiarazione dei redditi 2026 (Modello 730/2026 o Redditi PF 2026 relativi ai redditi 2025) o Certificazione Unica (CU 2026)',
            'Certificazioni di assegni di mantenimento percepiti o corrisposti per coniuge e figli',
            'Targhe di autoveicoli e motoveicoli di cilindrata 500cc e superiore posseduti alla data di presentazione della DSU',
        ],
    },
]

const FAQS = [
    {
        question: 'Qual è l’anno di riferimento per i redditi e i patrimoni dell’ISEE 2027?',
        answer: 'Per l’ISEE 2027 si applica la regola dei due anni solari precedenti: i redditi percepiti e i patrimoni mobiliari/immobiliari devono fare riferimento all’anno 2025 (saldi e giacenze al 31 dicembre 2025). Solo autoveicoli e composizione del nucleo familiare fanno riferimento al giorno di presentazione della DSU.',
    },
    {
        question: 'Come funziona l’esclusione dei BTP e Buoni Fruttiferi fino a 50.000€ nell’ISEE 2027?',
        answer: 'La normativa esclude dal calcolo dell’Indicatore della Situazione Economica (ISE) i titoli di Stato italiani (BOT, BTP, CCT) e i Buoni Fruttiferi Postali garantiti dallo Stato fino a una soglia massima complessiva di 50.000 euro per nucleo familiare. Nella procedura telematica INPS i titoli vanno comunque dichiarati nel quadro patrimoniale, ma il sistema decurta in automatico fino a 50.000 euro dal valore complessivo prima di calcolare l’indicatore finale.',
    },
    {
        question: 'Cosa succede se presento la DSU dopo il 28 febbraio 2027?',
        answer: 'Se la DSU per l’ISEE 2027 viene presentata a marzo o nei mesi successivi, a partire dalla mensilità di marzo l’INPS accrediterà l’Assegno Unico nella misura minima di legge (~57€ per figlio). Tuttavia, presentando la DSU entro e non oltre il 30 giugno 2027, l’INPS effettuerà un conguaglio positivo accreditando retroattivamente tutti gli arretrati spettanti a partire da marzo.',
    },
    {
        question: 'Quando posso richiedere l’ISEE Corrente invece dell’ISEE Ordinario?',
        answer: 'L’ISEE Corrente può essere richiesto solo se si è già in possesso di un ISEE ordinario in corso di validità e si verifica una delle seguenti condizioni: 1) perdita o riduzione del lavoro per un componente del nucleo; 2) riduzione superiore al 25% del reddito complessivo del nucleo familiare rispetto a quello dell’ISEE ordinario; 3) calo del patrimonio mobiliare/immobiliare superiore al 20%.',
    },
]

export default function Isee2027Page() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'ISEE 2027 e Rinnovo DSU: Documenti Necessari, Calcolo e Novità BTP',
        description: 'La guida completa e indipendente per fare l’ISEE 2027 da soli o al CAF con l’elenco analitico di tutti i documenti richiesti.',
        url: absoluteUrl('/isee-2027/'),
        author: {
            '@type': 'Person',
            name: 'Adelajdo Haxhiaj',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Busssola',
        },
        datePublished: '2026-11-02',
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
                badge="Guida Ufficiale DSU"
                icon={FileSpreadsheet}
                title="ISEE 2027: Guida al Rinnovo, Documenti e Calcolo Corretto"
                description="Tutto ciò che serve per rinnovare la Dichiarazione Sostitutiva Unica (DSU) per l’anno 2027. Come compilare l’ISEE precompilato INPS senza errori, la checklist completa dei documenti al 31/12/2025 e le regole per non perdere i bonus."
            />

            {/* Quick Action Box */}
            <div className="bg-surface border border-border rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between shadow-sm">
                <div className="space-y-1">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        Kit Pronto per il Download
                    </span>
                    <h2 className="text-xl font-display font-semibold text-foreground">
                        Scarica il Modello DSU Mini e la Checklist Stampabile
                    </h2>
                    <p className="text-xs md:text-sm text-secondary max-w-xl">
                        Un comodo PDF riassuntivo con le caselle da spuntare prima di recarti al CAF o accedere al sito INPS con SPID o CIE.
                    </p>
                </div>
                <Link
                    href="/modelli/isee-dsu-mini"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary-hover transition-colors shadow-sm whitespace-nowrap"
                >
                    <Download className="w-4 h-4" />
                    Apri Kit Modello ISEE
                </Link>
            </div>

            {/* Important Timetable */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                        Le 4 Date Chiave dell&apos;ISEE 2027
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1">
                        <span className="font-bold text-foreground text-sm block">1° Gennaio 2027</span>
                        <strong className="text-primary font-semibold block">Apertura Portale DSU</strong>
                        <p className="text-secondary leading-relaxed">
                            Si può iniziare a compilare la DSU precompilata sul portale online dell&apos;INPS o richiedere appuntamento al CAF.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1">
                        <span className="font-bold text-foreground text-sm block">28 Febbraio 2027</span>
                        <strong className="text-amber-600 dark:text-amber-400 font-semibold block">Termine Assegno Unico</strong>
                        <p className="text-secondary leading-relaxed">
                            Scadenza raccomandata per non vedere ridotto l&apos;Assegno Unico all&apos;importo minimo nella mensilità di marzo 2027.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1">
                        <span className="font-bold text-foreground text-sm block">30 Giugno 2027</span>
                        <strong className="text-foreground font-semibold block">Recupero Arretrati</strong>
                        <p className="text-secondary leading-relaxed">
                            Ultimo giorno utile per presentare la DSU e ricevere tutti gli arretrati dell&apos;Assegno Unico non corrisposti da marzo.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1">
                        <span className="font-bold text-foreground text-sm block">31 Dicembre 2027</span>
                        <strong className="text-foreground font-semibold block">Scadenza Attestazione</strong>
                        <p className="text-secondary leading-relaxed">
                            Tutte le attestazioni ISEE elaborate nel 2027 decadono inderogabilmente alla mezzanotte del 31 dicembre.
                        </p>
                    </div>
                </div>
            </section>

            {/* Checklist of Required Documents */}
            <section className="space-y-6">
                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                    Checklist Documenti Necessari per l&apos;ISEE 2027
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {REQUIRED_DOCUMENTS.map((group, idx) => (
                        <div key={idx} className="bg-surface border border-border rounded-xl p-6 space-y-3 shadow-sm">
                            <h3 className="font-display font-semibold text-lg text-foreground border-b border-border/50 pb-2">
                                {group.category}
                            </h3>
                            <ul className="space-y-2 text-xs md:text-sm text-secondary">
                                {group.items.map((it, iIdx) => (
                                    <li key={iIdx} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{it}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Special Focus: Titoli di Stato / BTP */}
            <section className="p-6 md:p-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-950 dark:text-blue-100 space-y-3">
                <div className="flex items-center gap-2 text-blue-900 dark:text-blue-200 font-semibold text-base">
                    <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h3>Come funziona l&apos;esclusione BTP e Buoni Fruttiferi fino a 50.000€</h3>
                </div>
                <p className="text-xs md:text-sm text-blue-900/80 dark:text-blue-200/80 leading-relaxed">
                    La norma tutela i piccoli risparmiatori italiani che hanno investito in titoli emessi dallo Stato (BTP, BOT, BTP Valore, CCT) e prodotti di risparmio postale garantiti (Buoni Fruttiferi Postali). 
                    Nel calcolo del patrimonio mobiliare, <strong>i primi 50.000 euro complessivi</strong> investiti in questi strumenti non concorrono a formare l&apos;ISEE.
                </p>
                <div className="p-3 bg-blue-500/15 rounded-lg text-xs font-medium text-blue-950 dark:text-blue-100">
                    💡 <strong>Consiglio pratico:</strong> Ricorda di richiedere all&apos;intermediario finanziario o a Poste Italiane la certificazione ISEE per l&apos;anno 2025 in cui siano distinti chiaramente i titoli di Stato dai fondi comuni o azioni private.
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-display font-semibold text-foreground">
                        Domande Frequenti su ISEE 2027
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

            {/* Institutional Link */}
            <div className="p-4 rounded-xl border border-border/60 bg-surface-muted flex items-center justify-between flex-wrap gap-3 text-xs text-secondary">
                <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span>Per compilare la dichiarazione telematica: portale ufficiale INPS &quot;Come fare ISEE precompilato&quot;.</span>
                </div>
                <a
                    href="https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.come-compilare-dsu-isee-precompilato.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                >
                    Portale ISEE INPS ↗
                </a>
            </div>
        </div>
    )
}
