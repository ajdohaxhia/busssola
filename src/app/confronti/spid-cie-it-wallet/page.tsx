import Link from 'next/link'
import {
    ArrowLeft,
    Shield,
    CheckCircle2,
    Smartphone,
    CreditCard,
    KeyRound,
    HelpCircle,
} from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildSeoMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/seo-core'

export const metadata = buildSeoMetadata({
    title: 'SPID vs CIE vs IT-Wallet: Differenze, Costi e Quale Scegliere',
    description: 'Confronto definitivo e indipendente tra SPID, Carta d’Identità Elettronica (CIE 3.0) e IT-Wallet su App IO: costi, livelli di sicurezza 1-2-3, chip NFC, patente digitale e validità.',
    path: '/confronti/spid-cie-it-wallet/',
    keywords: [
        'differenza spid e cie',
        'spid vs cie',
        'it-wallet come funziona',
        'cie senza nfc',
        'livello sicurezza cie 2 e 3',
        'quale scegliere spid o cie',
        'patente digitale app io',
        'spid gratis o a pagamento',
    ],
})

const COMPARISON_ROWS = [
    {
        feature: 'Ente emittente e gestione',
        spid: 'Identity Provider privati accreditati (Poste, Aruba, InfoCert, Sielte, Namirial...)',
        cie: 'Ministero dell’Interno e Istituto Poligrafico e Zecca dello Stato (IPZS)',
        wallet: 'Dipartimento per la trasformazione digitale tramite App IO (PagoPA S.p.A.)',
    },
    {
        feature: 'Costo per il cittadino',
        spid: 'Alcuni gratuiti con identificazione online, molti provider ora richiedono 10-15€ per il riconoscimento o canoni per SMS',
        cie: 'Costo fisso di emissione comunale (~22,21€ per la carta fisica, valida 10 anni). Nessun costo per l’uso digitale',
        wallet: 'Completamente gratuito (integrato all’interno dell’App IO)',
    },
    {
        feature: 'Livello massimo di sicurezza (eIDAS)',
        spid: 'Livello 2 (Nome utente + Password + codice OTP da app o SMS)',
        cie: 'Livello 3 (Massima sicurezza garantita dal microchip crittografico NFC) + Livello 2 con credenziali',
        wallet: 'Livello 3 (Crittografia hardware del secure enclave dello smartphone con biometria)',
    },
    {
        feature: 'Requisiti hardware necessari',
        spid: 'Qualsiasi smartphone, tablet o computer con browser internet',
        cie: 'Per il livello 3 serve smartphone con chip NFC. Per il livello 1 e 2 basta qualsiasi smartphone con l’app CieID',
        wallet: 'Smartphone iOS o Android recente con supporto a biometria (FaceID o impronta digitale)',
    },
    {
        feature: 'Documenti dematerializzati abilitati',
        spid: 'Nessuno: serve esclusivamente per l’autenticazione e il login',
        cie: 'Funge da documento di viaggio fisico UE e permette la firma elettronica avanzata (FEA)',
        wallet: 'Patente di guida, Tessera Sanitaria / TEAM ed European Disability Card su smartphone con valore legale',
    },
    {
        feature: 'Prospettiva futura e transizione europea',
        spid: 'Destinato a integrarsi gradualmente o a essere affiancato dal portafoglio di Stato',
        cie: 'Pilastro centrale dell’identità digitale di Stato per i prossimi decenni',
        wallet: 'Allineato al regolamento europeo EUDI Wallet (European Digital Identity Wallet)',
    },
]

const FAQS = [
    {
        question: 'Posso usare la CIE anche se il mio smartphone non ha il chip NFC?',
        answer: 'Sì! Il Ministero dell’Interno ha introdotto i livelli di sicurezza 1 e 2 per la CIE. Accedendo al portale ufficiale (cartaidentita.interno.gov.it) puoi impostare una password e associare il tuo numero di cellulare. Da quel momento puoi accedere a INPS, Agenzia delle Entrate e Fascicolo Sanitario semplicemente con nome utente, password e codice OTP ricevuto via SMS o notifica, esattamente come faresti con SPID, senza dover avvicinare la carta al telefono.',
    },
    {
        question: 'Con l’arrivo di IT-Wallet, lo SPID verrà disattivato?',
        answer: 'No, non c’è alcuna disattivazione improvvisa. Lo SPID continuerà a funzionare regolarmente per consentire una transizione morbida e senza disservizi per i milioni di cittadini che lo utilizzano quotidianamente. Nel medio-lungo termine, l’ecosistema italiano convergerà verso lo standard europeo EUDI Wallet con la CIE come credenziale di riferimento.',
    },
    {
        question: 'I documenti presenti su IT-Wallet (patente, tessera sanitaria) hanno valore legale?',
        answer: 'Sì. La patente di guida e la tessera sanitaria visualizzate nell’app IO hanno pieno valore legale durante i controlli su strada delle Forze dell’Ordine su tutto il territorio nazionale, grazie al codice QR dinamico anticontraffazione generato in tempo reale dall’applicazione.',
    },
    {
        question: 'Cosa succede se perdo il codice PIN o PUK della mia Carta d’Identità Elettronica?',
        answer: 'Se hai registrato la tua email e il numero di cellulare sul portale CieID o se hai conservato la seconda metà del PIN ricevuta con la lettera di consegna della carta, puoi recuperare il PUK tramite l’app CieID o presentandoti all’ufficio anagrafe del tuo Comune.',
    },
]

export default function SpidCieWalletPage() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'SPID vs CIE vs IT-Wallet: Differenze, Costi e Quale Scegliere',
        description: 'Confronto indipendente tra le principali identità digitali italiane con tabella comparativa di sicurezza, requisiti e prospettive.',
        url: absoluteUrl('/confronti/spid-cie-it-wallet/'),
        author: {
            '@type': 'Person',
            name: 'Adelajdo Haxhiaj',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Busssola',
        },
        datePublished: '2026-10-15',
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

            <div className="flex items-center gap-2 text-xs text-muted">
                <Link href="/confronti" className="inline-flex items-center gap-1 hover:text-foreground">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Tutti i confronti
                </Link>
                <span>/</span>
                <span className="text-foreground font-medium">SPID vs CIE vs IT-Wallet</span>
            </div>

            <PageHeader
                badge="Guida Comparativa Ufficiale"
                icon={Shield}
                title="SPID vs CIE vs IT-Wallet: Quale Identità Digitale Conviene Usare?"
                description="Analisi comparativa indipendente per capire quale strumento attivare per accedere ai servizi della Pubblica Amministrazione (INPS, Agenzia delle Entrate, Fascicolo Sanitario) ed esibire documenti con valore legale su smartphone."
            />

            {/* Quick Recommendation Alert */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 text-emerald-950 dark:text-emerald-100 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 font-semibold text-base text-emerald-900 dark:text-emerald-200">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        <span>Verdetto sintetico: La combinazione migliore</span>
                    </div>
                    <p className="text-xs md:text-sm text-emerald-900/80 dark:text-emerald-200/90 max-w-2xl leading-relaxed">
                        Attiva subito la tua <strong>CIE con i livelli 2 e 3</strong> sull’app CieID: è statale, gratuita e non scade ogni due anni. Tieni uno <strong>SPID gratuito</strong> attivo come riserva nel caso debba accedere da un PC aziendale privo di lettore di carte.
                    </p>
                </div>
                <Link
                    href="/moduli/modulo-09-documenti-identita"
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors whitespace-nowrap shadow-sm"
                >
                    Guida attivazione CIE
                </Link>
            </div>

            {/* Detailed Comparison Table */}
            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                        Tabella comparativa completa
                    </h2>
                    <span className="text-xs text-muted">Dati aggiornati a novembre 2026</span>
                </div>

                {/* Desktop Table View */}
                <div className="hidden lg:block overflow-x-auto border border-border rounded-xl bg-surface shadow-sm">
                    <table className="w-full text-left text-sm border-collapse">
                        <thead>
                            <tr className="border-b border-border bg-surface-muted/60 text-xs font-semibold text-foreground uppercase tracking-wider">
                                <th scope="col" className="p-4 w-1/4">Caratteristica</th>
                                <th scope="col" className="p-4 w-1/4">
                                    <div className="flex items-center gap-2 text-primary">
                                        <KeyRound className="w-4 h-4" />
                                        <span>SPID</span>
                                    </div>
                                </th>
                                <th scope="col" className="p-4 w-1/4">
                                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                                        <CreditCard className="w-4 h-4" />
                                        <span>CIE 3.0 (CieID)</span>
                                    </div>
                                </th>
                                <th scope="col" className="p-4 w-1/4">
                                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                                        <Smartphone className="w-4 h-4" />
                                        <span>IT-Wallet (App IO)</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/60 text-xs md:text-sm">
                            {COMPARISON_ROWS.map((row, idx) => (
                                <tr key={idx} className="hover:bg-surface-muted/30 transition-colors">
                                    <td className="p-4 font-semibold text-foreground align-top bg-surface-muted/10">
                                        {row.feature}
                                    </td>
                                    <td className="p-4 text-secondary leading-relaxed align-top">
                                        {row.spid}
                                    </td>
                                    <td className="p-4 text-secondary leading-relaxed align-top">
                                        {row.cie}
                                    </td>
                                    <td className="p-4 text-secondary leading-relaxed align-top">
                                        {row.wallet}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards View */}
                <div className="lg:hidden grid gap-4">
                    {COMPARISON_ROWS.map((row, idx) => (
                        <div key={idx} className="bg-surface border border-border rounded-xl p-4 space-y-3">
                            <h3 className="font-semibold text-sm text-foreground border-b border-border/50 pb-2">
                                {row.feature}
                            </h3>
                            <div className="space-y-2 text-xs">
                                <div>
                                    <span className="font-semibold text-primary block mb-0.5">SPID:</span>
                                    <p className="text-secondary">{row.spid}</p>
                                </div>
                                <div>
                                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 block mb-0.5">CIE 3.0:</span>
                                    <p className="text-secondary">{row.cie}</p>
                                </div>
                                <div>
                                    <span className="font-semibold text-blue-600 dark:text-blue-400 block mb-0.5">IT-Wallet:</span>
                                    <p className="text-secondary">{row.wallet}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Practical Guide: Step by Step */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-6">
                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                    I tre passi consigliati da Busssola
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 rounded-xl bg-surface-muted border border-border/50 space-y-2.5">
                        <div className="w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-xs">
                            1
                        </div>
                        <h3 className="font-semibold text-base text-foreground">Attiva i livelli 1 e 2 della CIE</h3>
                        <p className="text-xs text-secondary leading-relaxed">
                            Vai sul sito <em>cartaidentita.interno.gov.it</em> e registra le tue credenziali con email e telefono. Così potrai accedere ai siti della PA anche senza avvicinare fisicamente la carta al telefono o senza NFC.
                        </p>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-muted border border-border/50 space-y-2.5">
                        <div className="w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-xs">
                            2
                        </div>
                        <h3 className="font-semibold text-base text-foreground">Scarica e abilita App IO</h3>
                        <p className="text-xs text-secondary leading-relaxed">
                            Accedi all&apos;App IO con la tua CIE. Nella sezione &quot;Portafoglio&quot; potrai abilitare IT-Wallet per caricare patente di guida, tessera sanitaria e disability card con validità legale.
                        </p>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-muted border border-border/50 space-y-2.5">
                        <div className="w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-xs">
                            3
                        </div>
                        <h3 className="font-semibold text-base text-foreground">Mantieni uno SPID gratuito di riserva</h3>
                        <p className="text-xs text-secondary leading-relaxed">
                            Se hai già attivo un account SPID (ad esempio con PosteID o SielteID), non cancellarlo. Risulterà utilissimo in caso di emergenza o se devi fare una pratica veloce da un computer non tuo.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion Section */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-display font-semibold text-foreground">
                        Domande Frequenti su SPID e CIE
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

            {/* Official Sources and Backlinks */}
            <div className="p-4 rounded-xl border border-border/60 bg-surface-muted flex items-center justify-between flex-wrap gap-3 text-xs text-secondary">
                <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-500" />
                    <span>Fonti verificate: AgID (Agenzia per l&apos;Italia Digitale), Portale Ufficiale CIE (Ministero dell&apos;Interno) e Dipartimento per la trasformazione digitale.</span>
                </div>
                <div className="flex items-center gap-3">
                    <a
                        href="https://www.cartaidentita.interno.gov.it"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                    >
                        Portale CIE ↗
                    </a>
                    <a
                        href="https://www.spid.gov.it"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted hover:text-foreground"
                    >
                        Portale SPID ↗
                    </a>
                </div>
            </div>
        </div>
    )
}
