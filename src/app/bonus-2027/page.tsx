import Link from 'next/link'
import {
    Gift,
    CheckCircle2,
    Calendar,
    HelpCircle,
    ArrowRight,
    ShieldCheck,
} from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildSeoMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/seo-core'

export const metadata = buildSeoMetadata({
    title: 'Guida Completa ai Bonus 2027: Requisiti ISEE, Domande e Scadenze',
    description: 'Tutti i bonus e le agevolazioni confermati per il 2027 in Italia: Assegno Unico, Carta Dedicata a Te, Bonus Asilo Nido, detrazioni edilizie e bonus sociali in bolletta.',
    path: '/bonus-2027/',
    keywords: [
        'bonus 2027',
        'guida bonus 2027',
        'bonus famiglia 2027',
        'assegno unico 2027 importi',
        'carta dedicata a te 2027',
        'bonus asilo nido 2027',
        'bonus ristrutturazioni 2027 50 per cento',
        'bonus sociali bollette 2027',
    ],
})

const BONUS_CATALOG = [
    {
        name: 'Assegno Unico e Universale 2027',
        category: 'Famiglia e Figli',
        iseeThreshold: 'Senza limite (importo massimo fino a 17.090€ ISEE)',
        amount: 'Da ~57€ fino a oltre 200€ al mese per figlio (maggiorazioni per non autosufficienza e famiglie numerose)',
        channel: 'Automatico previa presentazione DSU ISEE entro febbraio 2027 (oppure domanda sul portale INPS)',
        summary: 'Il sostegno universale per ogni figlio a carico dal 7° mese di gravidanza fino ai 21 anni. L’importo viene rivalutato annualmente all’inflazione ISTAT.',
        detailsLink: '/moduli/modulo-23-bonus-isee',
    },
    {
        name: 'Carta "Dedicata a Te" 2027',
        category: 'Spesa e Carburante',
        iseeThreshold: 'Fino a 15.000€ ISEE (nuclei di almeno 3 persone, prioritari con figli piccoli)',
        amount: '500€ una tantum erogati su carta prepagata PostePay',
        channel: 'Assegnazione automatica da INPS e Comuni (nessuna domanda da compilare)',
        summary: 'Carta elettronica prepagata per l’acquisto di beni alimentari di prima necessità, carburanti o abbonamenti al trasporto pubblico locale.',
        detailsLink: '/novita/carta-dedicata-a-te-novembre-2026',
    },
    {
        name: 'Bonus Asilo Nido e Supporto Domiciliare',
        category: 'Infanzia ed Educazione',
        iseeThreshold: 'Fino a 40.000€ ISEE (rimborso scaglionato per fasce)',
        amount: 'Fino a 3.000€/anno (elevato a 3.600€ per i secondi figli nati dal 2024 con fratellino under 10)',
        channel: 'Domanda online sul portale INPS con allegate le ricevute di pagamento delle rette',
        summary: 'Rimborso per le rette di asili nido pubblici e privati autorizzati, erogato mensilmente dall’INPS su presentazione delle fatture quietanzate.',
        detailsLink: '/moduli/modulo-23-bonus-isee',
    },
    {
        name: 'Bonus Ristrutturazioni Edilizie 2027',
        category: 'Casa ed Energia',
        iseeThreshold: 'Nessun limite di reddito ISEE',
        amount: 'Detrazione IRPEF al 50% su tetto massimo di 96.000€ per la prima casa (36% su 48.000€ per seconde case)',
        channel: 'Dichiarazione dei redditi (Modello 730 o Redditi PF) con bonifico parlante e comunicazione ENEA',
        summary: 'Agevolazione fiscale per interventi di manutenzione straordinaria, restauro e riqualificazione edilizia ripartita in 10 quote annuali costanti.',
        detailsLink: '/moduli/modulo-13-casa-residenza',
    },
    {
        name: 'Bonus Sociali Luce, Gas e Acqua',
        category: 'Utenze Domestiche',
        iseeThreshold: 'Fino a 9.530€ ISEE (elevato a 20.000€ con almeno 4 figli a carico)',
        amount: 'Sconto diretto e continuativo applicato sulle bollette energetiche per 12 mesi',
        channel: 'Completamente automatico dopo l’attestazione della DSU ISEE',
        summary: 'Sconto automatico sulla spesa per l’energia elettrica, il gas naturale e il servizio idrico integrato, gestito tramite il sistema informativo SGAte.',
        detailsLink: '/moduli/modulo-23-bonus-isee',
    },
    {
        name: 'Carta Cultura Giovani e Carta del Merito',
        category: 'Giovani e Cultura',
        iseeThreshold: 'Fino a 35.000€ ISEE per Carta Cultura; nessun limite ISEE con voto 100 alla maturità per Carta Merito',
        amount: '500€ ciascuna (cumulabili fino a 1.000€ totali per chi possiede entrambi i requisiti)',
        channel: 'Piattaforma telematica del Ministero della Cultura con credenziali SPID o CIE',
        summary: 'Buoni digitali spendibili per libri, biglietti di concerti, cinema, teatri, corsi di musica e musei, riservati a residenti che compiono 18 anni.',
        detailsLink: '/moduli/modulo-22-universita-giovani',
    },
]

const FAQS = [
    {
        question: 'Devo rifare la domanda dell’Assegno Unico ogni anno?',
        answer: 'No. Chi percepisce già l’Assegno Unico e non ha subito variazioni nel nucleo familiare non deve ripresentare la domanda all’INPS. Tuttavia, è assolutamente obbligatorio presentare la nuova DSU per ottenere l’ISEE 2027 entro l’ultimo giorno di febbraio 2027. Se non lo fai, da marzo 2027 l’assegno scenderà all’importo minimo (circa 57€ a figlio).',
    },
    {
        question: 'Come posso sapere se sono nella lista della Carta Dedicata a Te?',
        answer: 'L’INPS invia le liste dei nuclei beneficiari direttamente ai Comuni di residenza. Ciascun Comune pubblica sul proprio sito istituzionale la graduatoria definitiva (anonimizzata con il numero di protocollo della DSU ISEE) e invia una comunicazione ai beneficiari per il ritiro della carta presso gli uffici postali.',
    },
    {
        question: 'Qual è la differenza per le detrazioni edilizie tra prima casa e seconda casa nel 2027?',
        answer: 'Per le abitazioni principali (prima casa) la detrazione IRPEF sulle ristrutturazioni si attesta al 50% delle spese sostenute fino a un massimale di 96.000 euro per unità immobiliare. Per le unità immobiliari diverse dalla prima casa (seconde case o immobili locati), la detrazione scende all’aliquota base del 36% con massimale ridotto a 48.000 euro.',
    },
    {
        question: 'I titoli di Stato (BTP, Buoni Fruttiferi) vengono conteggiati nell’ISEE 2027?',
        answer: 'La legge di bilancio ha stabilito l’esclusione dei titoli di Stato italiani (BTP, BOT, CCT) e dei prodotti finanziari di raccolta del risparmio con obbligo di rimborso assistito dalla garanzia dello Stato (come i Buoni Postali Fruttiferi) dal calcolo dell’ISEE fino a un valore complessivo di 50.000 euro.',
    },
]

export default function Bonus2027Page() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Guida Completa ai Bonus 2027: Requisiti ISEE, Importi e Domande',
        description: 'Tutti i bonus e contributi per famiglie, lavoratori e casa in Italia confermati per il 2027 con soglie ISEE e canali ufficiali.',
        url: absoluteUrl('/bonus-2027/'),
        author: {
            '@type': 'Person',
            name: 'Adelajdo Haxhiaj',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Busssola',
        },
        datePublished: '2026-11-01',
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
                badge="Guida Completa 2027"
                icon={Gift}
                title="Tutti i Bonus 2027: Requisiti, Soglie ISEE e Come Richiederli"
                description="La guida verificata e senza tecnicismi per orientarsi tra i sostegni economici pubblici del 2027: Assegno Unico rivalutato, Carta Dedicata a Te, Bonus Nido, sconti in bolletta e agevolazioni per la casa."
            />

            {/* Crucial Timing Alert */}
            <div className="bg-amber-500/10 border border-amber-500/25 rounded-xl p-5 text-amber-950 dark:text-amber-100 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 font-semibold text-base text-amber-900 dark:text-amber-200">
                        <Calendar className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        <span>Regola fondamentale: Rinnova la DSU a gennaio 2027</span>
                    </div>
                    <p className="text-xs md:text-sm text-amber-900/80 dark:text-amber-200/90 max-w-2xl leading-relaxed">
                        Quasi tutti i bonus dipendono dall&apos;ISEE. Il tuo ISEE attuale scade il 31 dicembre. Per non subire il taglio dell&apos;Assegno Unico al minimo o la sospensione dei bonus sociali, compila la nuova DSU subito dopo Capodanno.
                    </p>
                </div>
                <Link
                    href="/isee-2027"
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-hover transition-colors whitespace-nowrap shadow-sm"
                >
                    Guida al Rinnovo ISEE
                </Link>
            </div>

            {/* Catalog Grid */}
            <section className="space-y-6">
                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                    Catalogo dei bonus e agevolazioni 2027
                </h2>

                <div className="grid gap-6">
                    {BONUS_CATALOG.map((b, idx) => (
                        <article
                            key={idx}
                            className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4 hover:border-primary/50 transition-all shadow-sm"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-3">
                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-surface-muted text-secondary border border-border">
                                    {b.category}
                                </span>
                                <span className="text-xs font-semibold text-primary">
                                    {b.channel}
                                </span>
                            </div>

                            <h3 className="font-display font-semibold text-xl md:text-2xl text-foreground">
                                {b.name}
                            </h3>

                            <p className="text-sm text-secondary leading-relaxed">
                                {b.summary}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg bg-surface-muted border border-border/40 text-xs">
                                <div>
                                    <span className="font-semibold text-foreground block mb-1">
                                        Soglia ISEE richiesta:
                                    </span>
                                    <p className="text-secondary leading-normal">{b.iseeThreshold}</p>
                                </div>
                                <div>
                                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 block mb-1">
                                        Importo e beneficio:
                                    </span>
                                    <p className="text-secondary leading-normal">{b.amount}</p>
                                </div>
                            </div>

                            <div className="pt-2 flex items-center justify-between">
                                <span className="text-xs text-muted">Dati normativi verificati con MEF e INPS</span>
                                <Link
                                    href={b.detailsLink}
                                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                                >
                                    Approfondisci nella guida dedicata
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Checklist: How to prepare */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4">
                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                    Cosa preparare per ottenere tutte le agevolazioni
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1.5">
                        <strong className="text-foreground font-semibold flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            1. Saldi e giacenze bancarie
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            Scarica dagli home banking i saldi e le giacenze medie al 31 dicembre 2025 di conti correnti, carte prepagate e libretti di tutti i componenti familiari.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1.5">
                        <strong className="text-foreground font-semibold flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            2. Codici fiscali e credenziali
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            Assicurati di avere SPID o CIE attivi con livello 2 per accedere al portale ISEE precompilato sul sito dell&apos;INPS in piena autonomia senza code al CAF.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1.5">
                        <strong className="text-foreground font-semibold flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            3. Contratto di locazione
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            Se risiedi in affitto, tieni a portata di mano gli estremi di registrazione del contratto all&apos;Agenzia delle Entrate per beneficiare delle detrazioni per canone.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-display font-semibold text-foreground">
                        Domande Frequenti sui Bonus 2027
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
                    <span>Riferimenti normativi: Legge di Bilancio, Circolari INPS e decreti attuativi ministeriali. Nessun contenuto sponsorizzato.</span>
                </div>
                <Link href="/modelli/isee-dsu-mini" className="font-semibold text-primary hover:underline">
                    Scarica il kit documentale ISEE ↗
                </Link>
            </div>
        </div>
    )
}
